(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        4086: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => ed,
                $5: () => e_,
                $8: () => I,
                $I: () => h,
                $Y: () => eL,
                A4: () => g,
                CN: () => es,
                CR: () => _,
                DP: () => S,
                DT: () => ew,
                DV: () => ep,
                E: () => f,
                EN: () => n,
                Ez: () => eg,
                GB: () => p,
                GV: () => R,
                Hm: () => l,
                JM: () => el,
                K1: () => V,
                LC: () => eC,
                Lb: () => x,
                Lk: () => ec,
                N1: () => ev,
                NN: () => G,
                O9: () => M,
                OP: () => m,
                Oo: () => P,
                P0: () => k,
                P1: () => ei,
                PL: () => eA,
                QG: () => D,
                RD: () => eH,
                RG: () => eM,
                S1: () => s,
                SD: () => X,
                SX: () => ef,
                TD: () => ex,
                TK: () => o,
                Tq: () => eO,
                U2: () => w,
                UB: () => eP,
                Ut: () => B,
                V3: () => y,
                V4: () => T,
                VR: () => eK,
                W5: () => eR,
                WA: () => Z,
                X4: () => L,
                X8: () => H,
                Xc: () => er,
                Zf: () => a,
                Zi: () => eS,
                Zl: () => ea,
                _1: () => v,
                aE: () => J,
                by: () => eb,
                c9: () => et,
                cZ: () => en,
                dA: () => ej,
                dh: () => eN,
                en: () => Q,
                eu: () => $,
                ff: () => ey,
                gd: () => em,
                gu: () => c,
                iP: () => eD,
                jQ: () => ee,
                ki: () => q,
                mD: () => i,
                mr: () => u,
                nM: () => Y,
                ni: () => eW,
                ok: () => W,
                oo: () => A,
                qN: () => F,
                qT: () => eh,
                qt: () => N,
                re: () => eo,
                ro: () => z,
                s_: () => ek,
                sv: () => eu,
                tz: () => C,
                u2: () => eE,
                uM: () => eT,
                vH: () => j,
                vg: () => eI,
                wH: () => K,
                wK: () => E,
                xF: () => b,
                y$: () => d,
                yq: () => U,
                zj: () => O,
            });
            let n = 'AfterTrackResource',
                a = 'Logger',
                s = 'TechMetricsLogger',
                i = 'OtelSdk',
                o = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                d = 'Slam',
                u = 'UgcUploadHttpClient',
                m = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                _ = 'ResourceBeaconClient',
                h = 'AccountResource',
                p = 'OutageNoticeResource',
                v = 'UsersResource',
                y = 'LandingResource',
                E = 'LandingBlocksResource',
                x = 'Landing3Resource',
                C = 'AlbumResource',
                f = 'SlidesResource',
                N = 'MusicExternalApiPrefixUrl',
                R = 'MusicResourceFactory',
                T = 'PublicConfig',
                b = 'ServerConfig',
                k = 'TokenConfig',
                A = 'Storage',
                S = 'CookieStorage',
                w = 'LocalStorage',
                I = 'LibraryResource',
                O = 'LumenResource',
                P = 'TracksResource',
                j = 'SessionStorage',
                L = 'TopResource',
                M = 'ArtistsResource',
                D = 'Authorization',
                K = 'RedAlertResource',
                W = 'RotorResource',
                H = 'WaveResource',
                U = 'SearchResource',
                G = 'SearchPlaylistResource',
                F = 'PlaylistResource',
                z = 'PlaylistsResource',
                Y = 'PinResource',
                B = 'MetatagsResource',
                V = 'TagResource',
                $ = 'FeedResource',
                X = 'Wizard3Resource',
                Z = 'CONTAINER_USER_ID_TOKEN',
                J = 'PinsResource',
                q = 'MusicHistoryResource',
                Q = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                er = 'CONTAINER_I18N_STORAGE',
                en = 'LyricViewsResource',
                ea = 'NonMusicResource',
                es = 'DonationResource',
                ei = 'LoaderResource',
                eo = 'PrefixlessResource',
                el = 'StreamsResource',
                ec = 'FiltersResource',
                ed = 'UgcResource',
                eu = 'CollectionResource',
                em = 'AdsResource',
                eg = 'PersonalResource',
                e_ = 'AvailabilityResource',
                eh = 'GetFileInfoResource',
                ep = 'ResourcesFileInfoResource',
                ev = 'DisclaimersResource',
                ey = 'DisclaimerDictionary',
                eE = 'FamilyResource',
                ex = 'ChildrenLandingResource',
                eC = 'TelemetryResource',
                ef = 'Env',
                eN = 'PromoResource',
                eR = 'RumResource',
                eT = 'AcqOffers',
                eb = 'Ynison',
                ek = 'YnisonNewConnector',
                eA = 'LabelsResource',
                eS = 'RequestExecutionContext',
                ew = 'ConcertsResource',
                eI = 'YaMetrikaController',
                eO = 'RumTransport',
                eP = 'YaMetrikaTransport',
                ej = 'WordsResource',
                eL = 'WheelResource',
                eM = 'MocksInitializer',
                eD = 'CacheWorker',
                eK = 'NetworkMonitorFactory',
                eW = 'SkeletonSdk',
                eH = 'TagSandbox';
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => a });
            var n = r(67174);
            let a = {
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
        10270: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var n = r(56949),
                a = r(53548),
                s = r(29993),
                i = r(44230),
                o = r(72288);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: g } = (0, i.g)(),
                        _ = (0, a.useRef)(new Map()),
                        h = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = _.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: u,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let n = t.getBoundingClientRect().top;
                                return e && 1 ? n + window.scrollY : !e && r ? n + r.scrollTop : 0;
                            })(m, d, g),
                        },
                        v = (0, n.XW)(p),
                        y = (0, n.Te)({ ...p, getScrollElement: () => g, initialOffset: null == g ? void 0 : g.scrollTop }),
                        E = m ? v : y,
                        x = (0, s.c)(() => {
                            E.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            h.current ||
                                (h.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let n = e.contentRect.height;
                                            n && n !== _.current.get(r) && (_.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && x());
                                }));
                        }, [x]),
                        { virtualizer: E, resizeObserver: h.current }
                    );
                };
        },
        10363: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var n = r(19207);
            let a = (e) => (0, n.h)(e.data.concert, e.data.minPrice);
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
        12533: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => n });
            let n = (e, t) => {
                let [r, n] = e.split('?'),
                    a = new URLSearchParams(n || '');
                for (let [e, r] of new URLSearchParams(t).entries()) a.set(e, r);
                let s = a.toString();
                return ''.concat(r).concat(s ? '?'.concat(s) : '');
            };
        },
        13060: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => d });
            var n = r(88800),
                a = r(65724),
                s = r(17392),
                i = r(52300),
                o = r(29504),
                l = r(19872),
                c = r.n(l);
            let d = (e) => {
                let { title: t, className: r, titleClassName: l, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(c().root, r),
                    children: [
                        (0, n.jsx)(i.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(o.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, a.$)(c().title, l),
                            'data-test-id': s.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(35412),
                a = r(28166),
                s = r(97261);
            let i = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, a.Lz],
                o = (e, t, r) => {
                    let o;
                    try {
                        o = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, n.Rj)(e, { allowedProtocols: new Set([...i, o.protocol]), baseUrl: o.href });
                    return l.isAllowed
                        ? l.url.protocol === a.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, o)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var n = r(53647),
                a = r(4086),
                s = r(41928),
                i = r(65523),
                o = r(57448);
            let l = () => {
                let e = (0, s.N)(),
                    t = e.get(a.oo),
                    r = e.get(a.QG),
                    l = e.get(a.uM),
                    c = e.get(a.ff),
                    d = e.get(a.V4),
                    u = e.get(a.P0),
                    m = (0, o.f)(),
                    g = (0, i.U)(),
                    _ = (0, s.N)().get(a.TK),
                    h = e.get(a.ni),
                    p = e.get(a.RD),
                    v = new n.si(),
                    y = new n.fW();
                return {
                    ...m,
                    acqOffers: l,
                    disclaimerDictionary: c,
                    logger: g,
                    modelActionsLogger: _,
                    localStorage: v,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: r,
                    config: d,
                    clientSafeConfig: u,
                    landingSdk: h,
                    tagSandbox: p,
                };
            };
        },
        19207: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => o });
            var n = r(5120),
                a = r(19815),
                s = r(58400),
                i = r(47255);
            let o = (e, t) => {
                var r, o, l, c;
                let { uri: d, color: u } = e.cover || {};
                return (0, n.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, s.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: d, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (r = e.cashback) ? void 0 : r.title,
                    cashbackValuePercent: null == (o = e.cashback) ? void 0 : o.valuePercent,
                    price: (0, i.J)(t),
                    eventKind: null != (c = null == (l = e.eventInfo) ? void 0 : l.type) ? c : a.Z.UNSPECIFIED,
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
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => n, ov: () => a });
            let n = ''.concat('yandexmusic', ':'),
                a = ''.concat(n, '//');
        },
        30064: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => l });
            var n = r(5120),
                a = r(50633),
                s = r(97956),
                i = r(63425);
            let o = n.gK.model('Price', { value: n.gK.number, currency: n.gK.string }),
                l = n.gK
                    .model('Concert', {
                        id: n.gK.string,
                        dataSessionId: n.gK.maybe(n.gK.string),
                        datetime: n.gK.maybe(n.gK.string),
                        city: n.gK.maybe(n.gK.string),
                        place: n.gK.maybe(n.gK.string),
                        contentRating: n.gK.maybe(n.gK.string),
                        price: n.gK.maybe(o),
                        cashbackTitle: n.gK.maybe(n.gK.string),
                        cashbackValuePercent: n.gK.maybe(n.gK.number),
                        title: n.gK.maybe(n.gK.string),
                        cover: n.gK.maybe(i.$),
                        rank: n.gK.maybe(n.gK.number),
                        eventKind: n.gK.maybe(n.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(s.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(s.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        32414: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => P });
            var n = r(88800),
                a = r(65724),
                s = r(84961),
                i = r(53548),
                o = r(2058),
                l = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                u = r(29504),
                m = r(87999),
                g = r(47149),
                _ = r(84423),
                h = r(89846),
                p = r(64543),
                v = r(63582);
            let y = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: n } = (0, p.j)();
                    return {
                        sendRefreshEvent: (0, i.useCallback)(() => {
                            if (!t || !r || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: n.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, g.bv)(t, e);
                        }, [t, r, null == n ? void 0 : n.pageId]),
                    };
                }),
                E = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: a } = (0, p.j)();
                    (0, i.useEffect)(() => {
                        if (!r || !n || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: a.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, g.z5)(r, t);
                    }, [r, e, n, null == a ? void 0 : a.pageId]);
                });
            var x = r(44230),
                C = r(4370),
                f = r(72288),
                N = r(97956),
                R = r(56248),
                T = r(90688),
                b = r(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = r(96856),
                S = r.n(A);
            let w = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { slam: i } = (0, f.g)(),
                    { contentRef: o } = (0, x.g)(),
                    d = (0, b.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(S().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(R.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(S().navigation, { [S().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(S().content, { [S().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(T._V, { className: S().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: S().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = r(9184),
                O = r.n(I);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { formatMessage: m } = (0, o.A)(),
                    g = (0, i.useContext)(f.P),
                    _ = null == g ? void 0 : g.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(h);
                let { sendRefreshEvent: p } = y(),
                    v = (0, i.useCallback)(() => {
                        (p(), (window.location.href = C.Z.main.href));
                    }, [p]),
                    { contentRef: T } = (0, x.g)();
                return _
                    ? (0, n.jsx)(w, { className: t, withBackwardControl: r, onBack: s })
                    : (0, n.jsxs)('div', {
                          className: (0, a.$)(O().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(R.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(O().navigation, { [O().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, a.$)(O().content, { [O().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, a.$)(O().title, O().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, a.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: v,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33075: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
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
            r.d(t, { W: () => p, s: () => v });
            var n = r(88800),
                a = r(84961),
                s = r(58390),
                i = r(53548),
                o = r(35412),
                l = r(39499),
                c = r(89108),
                d = r(70003),
                u = r(72288),
                m = r(16818);
            (0, a.eO)(!1);
            let g = (0, i.createContext)(null),
                _ = (e) => {
                    let { children: t, store: r, storeKey: a } = e,
                        s = (0, i.useMemo)(() => ({ store: r, storeKey: a }), [r, a]);
                    return (0, n.jsx)(g.Provider, { value: s, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: a } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        a = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: i } = e,
                                o = (0, m.Y)(),
                                l = (0, u.g)(),
                                { store: g, patchesRef: p } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: i, patchKey: r, patchesRef: p }), (0, n.jsx)(_, { store: g, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, i.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        36930: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var n = r(88800),
                a = r(19994),
                s = r(78373),
                i = r.n(s);
            let o = (e) => {
                let { isActive: t, withMeta: r, withPriceButton: s } = e;
                return (0, n.jsxs)('div', {
                    className: i().root,
                    children: [
                        (0, n.jsx)(a.W, { radius: 'm', className: i().shimmerCover, isActive: t }),
                        (0, n.jsxs)('div', {
                            className: i().meta,
                            children: [
                                (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: i().shimmerTitle }),
                                r &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: i().shimmerInfo }),
                                            (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: i().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        s && (0, n.jsx)(a.W, { isActive: t, radius: 'xxxl', className: i().shimmerButton }),
                    ],
                });
            };
        },
        38371: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => P });
            var n = r(88800),
                a = r(84961),
                s = r(88969),
                i = r(87999),
                o = r(62414),
                l = r(80643),
                c = r(17392),
                d = r(29993),
                u = r(79070),
                m = r(78275),
                g = r(96817),
                _ = r(73170),
                h = r(29504),
                p = r(78940),
                v = r(72288),
                y = r(97956),
                E = r(49176),
                x = r(67174),
                C = r(76484),
                f = r(44167),
                N = r(13060);
            let R = ' • ',
                T = (e, t) => {
                    let r = [];
                    return (e.city && r.push(e.city), e.place && r.push(e.place), r.join(t));
                };
            var b = r(95960),
                k = r.n(b);
            let A = (0, a.PA)((e) => {
                let { concert: t, cashback: r } = e;
                return (0, n.jsxs)('div', {
                    className: k().meta,
                    children: [
                        (0, n.jsx)(h.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: k().title,
                            'data-test-id': c.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, n.jsxs)(h.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: k().info,
                            children: [
                                (0, n.jsx)(h.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: k().location,
                                    'aria-label': T(t, ' '),
                                    'data-test-id': c.OA.concert.CONCERT_CARD_LOCATION,
                                    children: T(t, R),
                                }),
                                (0, n.jsx)(h.HL, { 'aria-hidden': !0, className: k().separator, variant: 'span', type: 'controls', weight: 'medium', children: R }),
                                (0, n.jsx)(h.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: k().rating,
                                    'data-test-id': c.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        r,
                    ],
                });
            });
            var S = r(52018),
                w = r(72876),
                I = r(78373),
                O = r.n(I);
            let P = (0, a.PA)((e) => {
                var t, r, a;
                let { concert: R, withMask: T = !0, withPriceButton: b, withInlineMeta: k = !1 } = e,
                    { state: I, toggleTrue: P, toggleFalse: j } = (0, m.e)(!1),
                    L = (0, o.D)(),
                    { experiments: M } = (0, v.g)(),
                    D = M.checkExperiment(y.z.WebNextConcertPage, 'on'),
                    K = (0, l.S)(),
                    W = (0, C.Y)(),
                    { href: H } = (0, x.u)('/concert/:concertId', { params: { concertId: R.id } }),
                    U = (0, p.Z)(H),
                    G = W(R),
                    F = (0, d.c)((e) => {
                        (K({ to: i.AppScreen.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation());
                    }),
                    z = (0, d.c)((e) => {
                        if (!D) return void F(e);
                        (K({ to: i.AppScreen.ConcertScreen }), U(e));
                    }),
                    Y = (0, d.c)((e) => {
                        (e.code === E.v.SPACE || e.code === E.v.ENTER) && (e.preventDefault(), z());
                    }),
                    B = (0, d.c)((e) => {
                        D && (F(e), e.preventDefault());
                    }),
                    V = (0, u.L)(() => {
                        let e = R.isIdentityExperimentEnabled && R.cashbackValuePercent,
                            t = !R.isIdentityExperimentEnabled && R.isCashbackExperimentEnabled && R.cashbackTitle;
                        if (e || t)
                            return (0, n.jsx)(N.m, {
                                className: O().cashback,
                                titleClassName: O().cashbackTitle,
                                title: R.cashbackTitle,
                                valuePercent: R.cashbackValuePercent,
                            });
                    }),
                    $ = (0, n.jsx)(S.M, { concert: R, withCashback: !1, withInlineMeta: k, titleSize: 'l' }),
                    X = (0, n.jsx)(A, { concert: R, cashback: V });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: O().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: z,
                            onKeyDown: Y,
                            ref: L,
                            'data-test-id': c.OA.concert.CONCERT_CARD,
                            children: [
                                (0, n.jsx)(_.q, { children: (0, n.jsx)(h.HL, { variant: 'div', children: (0, n.jsx)(s.A, { id: 'entity-names.concert' }) }) }),
                                (0, n.jsx)('div', {
                                    className: O().cover,
                                    children: (0, n.jsx)(w.W, {
                                        datetime: R.datetime,
                                        coverColor: null == (t = R.cover) ? void 0 : t.color,
                                        uri: null == (r = R.cover) ? void 0 : r.uri,
                                        withMask: T,
                                        cashbackPercent: R.isIdentityExperimentEnabled ? R.cashbackValuePercent : void 0,
                                    }),
                                }),
                                R.isIdentityExperimentEnabled ? $ : X,
                                !!(null == (a = R.price) ? void 0 : a.value) && (0, n.jsx)(_.q, { children: (0, n.jsx)(h.HL, { variant: 'div', children: G }) }),
                                b &&
                                    (0, n.jsx)(g.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: O().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: B,
                                        'data-test-id': c.OA.concert.CONCERT_CARD_BUTTON,
                                        children: G,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(f.h, { dataSessionId: R.dataSessionId, isOpened: I, onOpen: P, onClose: j }),
                    ],
                });
            });
        },
        41928: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s, N: () => i });
            var n = r(53548),
                a = r(39499);
            let s = (0, n.createContext)(null);
            function i() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new a.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        44167: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => E });
            var n = r(88800),
                a = r(53548),
                s = r(2058),
                i = r(30282),
                o = r(17392),
                l = r(96817),
                c = r(11372),
                d = r(73170),
                u = r(4086),
                m = r(41928),
                g = r(12149),
                _ = r(58390),
                h = r(12533),
                p = r(34303),
                v = r(31423),
                y = r.n(v);
            let E = (e) => {
                let { dataSessionId: t, isOpened: r, onOpen: v, onClose: E } = e,
                    x = (0, m.N)().get(u.V4),
                    { formatMessage: C } = (0, s.A)(),
                    f = (() => {
                        let e = (0, _.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let r = e.get(p.K.UTM_CAMPAIGN);
                                if (!r) return t;
                                let n = new URLSearchParams();
                                return (n.set(p.K.UTM_SOURCE, 'campaignid_'.concat(r)), (0, h.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    N = (0, a.useCallback)(
                        (e) => {
                            e.origin === x.afisha.host && 'close' === e.data.type && E();
                        },
                        [E, x.afisha.host],
                    );
                (0, a.useEffect)(
                    () => (
                        window.addEventListener('message', N),
                        () => {
                            window.removeEventListener('message', N);
                        }
                    ),
                    [N],
                );
                let R = (0, a.useCallback)(
                        (e) => {
                            e ? v() : E();
                        },
                        [E, v],
                    ),
                    T = (0, i.tE)(x, (0, g.u)()),
                    b = f(''.concat(x.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(T));
                return (0, n.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: r,
                    onOpenChange: R,
                    onClose: E,
                    showHeader: !1,
                    className: y().widget,
                    contentClassName: y().content,
                    overlayColor: 'full',
                    'data-test-id': o.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(l.$, { 'aria-label': C({ id: 'interface-actions.close' }), onClick: E }) }),
                        (0, n.jsx)('iframe', {
                            src: b,
                            className: y().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
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
                a = r(79070),
                s = r(61013),
                i = r(53548);
            let o = (e) => {
                let { minColumnWidth: t, maxColumnWidth: r, containerWidth: n, totalCount: a, columnGap: s, minColumnCount: i, maxColumnCount: o } = e,
                    l = Math.max(1, Math.floor((n + s) / (t + s))),
                    c = Math.max(i, Math.floor((n + s) / ((r + t) * 0.5 + s)));
                for (let e = i; e <= l; e++) {
                    let a = (n - (e - 1) * s) / e;
                    if (a >= t && a <= r) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = o ? Math.min(c, o) : c)), columnCount: c };
            };
            var l = r(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: r,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: g,
                        maxColumnCount: _,
                        containerRef: h,
                    } = e,
                    { rowCount: p, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: r, maxColumnWidth: n, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, i.useState)({ rowCount: 0, columnCount: 0 }),
                            g = (0, i.useRef)(null),
                            _ = (0, i.useMemo)(
                                () =>
                                    (0, s.A)(
                                        (e) => {
                                            m(
                                                o({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: r,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, n, r, a, l],
                            );
                        return (
                            (0, i.useLayoutEffect)(
                                () => (
                                    g.current && g.current.disconnect(),
                                    (g.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (m(
                                            o({
                                                minColumnWidth: a,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: r,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        g.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = g.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, n, r, a, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: g, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: h }),
                    { virtualizer: y, resizeObserver: E } = (0, l.r)({ count: p, getEstimateSize: r, gap: c, containerRef: h }),
                    x = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    C = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let r = null == (e = x[y.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = x[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== r && void 0 !== n ? { startIndex: r, endIndex: n } : null;
                    });
                return { virtualizer: y, rowResizeObserver: E, indices: x, columnCount: v, visibleRange: C };
            };
        },
        49176: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        50633: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => a });
            var n = r(5120);
            let a = (e) => {
                let t = (0, n.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, n._$)(e);
                return r || t;
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        52018: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => g });
            var n = r(88800),
                a = r(84961),
                s = r(53548),
                i = r(88969),
                o = r(17392),
                l = r(79070),
                c = r(29504),
                d = r(13060),
                u = r(95960),
                m = r.n(u);
            let g = (0, a.PA)((e) => {
                let { id: t, concert: r, withCashback: a = !0, withInlineMeta: u = !1, titleSize: g = 'm' } = e,
                    _ = [],
                    h = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == r ? void 0 : r.eventKind) &&
                    _.push(
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': o.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(i.A, { id: 'concerts.event-kind', values: { kind: r.eventKind } }),
                        }),
                    ),
                    (null == r ? void 0 : r.contentRating) &&
                        _.push(
                            h,
                            (0, n.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: r.contentRating,
                            }),
                        ));
                let p = (0, l.L)(() =>
                    (null == r ? void 0 : r.city)
                        ? (0, n.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                              children: r.city,
                          })
                        : null,
                );
                return (
                    u && p && _.push(h, p),
                    (0, n.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: g,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                                children: null == r ? void 0 : r.title,
                            }),
                            (0, n.jsx)('div', { className: m().info, children: _.map((e, t) => (0, s.cloneElement)(e, { key: t })) }),
                            !u && p,
                            a &&
                                (null == r ? void 0 : r.isIdentityExperimentEnabled) &&
                                r.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: m().cashback, valuePercent: r.cashbackValuePercent }),
                            a &&
                                !(null == r ? void 0 : r.isIdentityExperimentEnabled) &&
                                (null == r ? void 0 : r.isCashbackExperimentEnabled) &&
                                r.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: m().cashback, title: r.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        53360: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var n = r(88800),
                a = r(65724),
                s = r(84961),
                i = r(53548),
                o = r(51516),
                l = r.n(o);
            let c = (0, s.PA)((e) => {
                let { indices: t, virtualItem: r, renderItemByIndex: s, columnClassName: o, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, i.useRef)(null),
                    g = t[r.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - u, 'px') };
                return (
                    (0, i.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, n.jsx)('div', {
                        'data-index': r.index,
                        ref: m,
                        style: _,
                        className: (0, a.$)(l().root, c),
                        children: null == g ? void 0 : g.map((e) => (0, n.jsx)('div', { className: o, children: s(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => o, fW: () => m, MJ: () => u, jU: () => _, Bx: () => g });
            var n = r(77451);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, n.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = a(i)) ? void 0 : r.value) ? s : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = a ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, s, r);
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
            function i(e) {
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
                        r = i('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let i = a(s);
                        if (!i) return null;
                        let o = null != (n = null == i ? void 0 : i.value) ? n : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = i('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
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
            var l = r(9519),
                c = r(39499);
            class d extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, l._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class m {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, s;
                        let i = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (s = null == (r = a(i)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = i('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
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
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(r);
                        null != a && e.set(r, a, n);
                    });
            }
            function _(e) {
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
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => s });
            var n = r(4086),
                a = r(41928);
            let s = () => {
                let e = (0, a.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    s = e.get(n.N1),
                    i = e.get(n._1),
                    o = e.get(n.V3),
                    l = e.get(n.Lb),
                    c = e.get(n.wK),
                    d = e.get(n.tz),
                    u = e.get(n.$8),
                    m = e.get(n.Oo),
                    g = e.get(n.X4),
                    _ = e.get(n.O9),
                    h = e.get(n.E),
                    p = e.get(n.wH),
                    v = e.get(n.ok),
                    y = e.get(n.X8),
                    E = e.get(n.yq),
                    x = e.get(n.NN),
                    C = e.get(n.qN),
                    f = e.get(n.ro),
                    N = e.get(n.nM),
                    R = e.get(n.Ut),
                    T = e.get(n.K1),
                    b = e.get(n.eu),
                    k = e.get(n.SD),
                    A = e.get(n.aE),
                    S = e.get(n.ki),
                    w = e.get(n.c9),
                    I = e.get(n.en),
                    O = e.get(n.jQ),
                    P = e.get(n.cZ),
                    j = e.get(n.Zl),
                    L = e.get(n.CN),
                    M = e.get(n.P1),
                    D = e.get(n.zj),
                    K = e.get(n.re),
                    W = e.get(n.JM),
                    H = e.get(n.Lk),
                    U = e.get(n.$$),
                    G = e.get(n.sv),
                    F = e.get(n.gd),
                    z = e.get(n.Ez),
                    Y = e.get(n.u2),
                    B = e.get(n.TD),
                    V = e.get(n.dh),
                    $ = e.get(n.LC),
                    X = e.get(n.PL),
                    Z = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: s,
                    usersResource: i,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: g,
                    artistsResource: _,
                    slidesResource: h,
                    redAlertResource: p,
                    rotorResource: v,
                    waveResource: y,
                    searchResource: E,
                    searchPlaylistResource: x,
                    playlistResource: C,
                    playlistsResource: f,
                    pinResource: N,
                    metatagsResource: R,
                    tagResource: T,
                    feedResource: b,
                    wizard3Resource: k,
                    pinsResource: A,
                    musicHistoryResource: S,
                    dynamicPagesResource: w,
                    chartResource: I,
                    clipsResource: O,
                    lyricViewsResource: P,
                    nonMusicResource: j,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: K,
                    streamsResource: W,
                    filtersResource: H,
                    ugcResource: U,
                    collectionResource: G,
                    adsResource: F,
                    personalResource: z,
                    familyResource: Y,
                    childrenLandingResource: B,
                    promoResource: V,
                    telemetryResource: $,
                    labelsResource: X,
                    concertsResource: Z,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        58400: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            let n = /[+-]\d{2}:?\d{2}/,
                a = (e) => (null == e ? void 0 : e.replace(n, ''));
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var n = r(5120),
                a = r(74773);
            let s = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(a.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === a.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === a.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === a.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === a.G.REJECT;
                },
            }));
        },
        60201: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var n = r(88800);
            r(30282);
            var a = r(11006),
                s = r.n(a);
            let i = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var n = r(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        63425: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var n = r(5120);
            let a = n.gK.model('Cover', { uri: n.gK.maybe(n.gK.string), color: n.gK.maybe(n.gK.string), videoUrl: n.gK.maybe(n.gK.string) });
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(4086),
                a = r(41928),
                s = r(44084);
            let i = new WeakMap(),
                o = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = i.get(e);
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
                        return (i.set(e, r), r);
                    })((0, a.N)().get(n.Zf));
        },
        66793: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 78016));
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            var n = r(5120);
            let a = n.gK.model('ModelDestroyManager').actions(() => ({
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
            r.d(t, { m: () => s });
            var n = r(5120),
                a = r(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    i = (0, a.useRef)([]),
                    [o] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(o, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, o]),
                    { store: o, patchesRef: i }
                );
            };
        },
        72876: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => b });
            var n,
                a,
                s = r(88800),
                i = r(65724),
                o = r(84961),
                l = r(53548),
                c = r(17392),
                d = r(79070),
                u = r(90688),
                m = r(72288),
                g = r(97956),
                _ = r(35412);
            let h = (e) => (0, _.a6)(e.replace('%%', '960x690_noncrop'));
            var p = r(88969),
                v = r(29504);
            function y() {
                return (y = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let E = function (e) {
                return l.createElement(
                    'svg',
                    y({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    n ||
                        (n = l.createElement(
                            'defs',
                            null,
                            l.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                l.createElement('stop', { stopColor: '#FF5C4D' }),
                                l.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                l.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            l.createElement('clipPath', { id: 'plusColorClip' }, l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    a ||
                        (a = l.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            l.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var x = r(33075),
                C = r.n(x);
            let f = (e) => {
                let { percent: t, className: r } = e;
                return (0, s.jsxs)('div', {
                    className: (0, i.$)(C().root, r),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, s.jsx)(E, { 'aria-hidden': !0, className: C().icon }),
                        (0, s.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: C().text,
                            children: (0, s.jsx)(p.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var N = r(74250),
                R = r(60201),
                T = r.n(R);
            let b = (0, o.PA)((e) => {
                let { uri: t, withMask: r, datetime: n, coverColor: a, cashbackPercent: o } = e,
                    { experiments: p } = (0, m.g)(),
                    [v, y] = (0, l.useState)(!1),
                    E = p.checkExperiment(g.z.NewConcertsTicketRedesign, 'on') && r,
                    x = p.checkExperiment(g.z.WebNextConcertsIdentityEventType, 'on'),
                    C = (0, l.useCallback)(() => {
                        y(!0);
                    }, []),
                    R = (0, d.L)(() => {
                        if (a)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: r, l: n } = (0, _.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(r, '%, ')
                                        .concat(n <= 55 ? n + 20 : n - 20, '%)');
                                })(a),
                            };
                    }),
                    b = (0, d.L)(() =>
                        n
                            ? (0, s.jsxs)('div', {
                                  className: (0, i.$)(T().date, { [T().date_withEventType]: x }),
                                  children: [
                                      (0, s.jsx)(u._V, {
                                          className: T().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: C,
                                      }),
                                      v &&
                                          (0, s.jsx)(N.d, {
                                              className: T().root_withEventType,
                                              dayClassName: T().day_withEventType,
                                              weekdayClassName: T().weekday_withEventType,
                                              monthClassName: T().month_withEventType,
                                              datetime: n,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    k = (0, d.L)(() =>
                        n
                            ? (0, s.jsx)(N.d, {
                                  dayClassName: T().day,
                                  weekdayClassName: (0, i.$)(T().weekday, T().important),
                                  monthClassName: T().month,
                                  className: T().date,
                                  datetime: n,
                              })
                            : null,
                    );
                return (0, s.jsxs)('div', {
                    className: (0, i.$)(T().root, { [T().root_withMask]: E }),
                    style: R,
                    children: [
                        (0, s.jsx)(u._V, {
                            className: T().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: h,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        n && (x ? b : k),
                        x && o && (0, s.jsx)(f, { className: T().cashback, percent: o }),
                    ],
                });
            });
        },
        73170: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                a = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += ' '), (a += n));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
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
                        let a = r(4377),
                            s = r(5881),
                            i = r(810),
                            o = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, s.clsx)(o.default.root, { [o.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, s.clsx)(c, n.props.className) })
                                : (0, a.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                i = {};
            function o(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = o(5531);
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
        74250: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => u });
            var n = r(88800),
                a = r(65724),
                s = r(2058),
                i = r(17392),
                o = r(29504),
                l = r(32414),
                c = r(22989),
                d = r.n(c);
            let u = (e) => {
                let { datetime: t, className: r, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: g = !0, ..._ } = e,
                    { formatDate: h } = (0, s.A)(),
                    p = ((e) => {
                        let { formatMessage: t } = (0, s.A)(),
                            r = {
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
                        if (e) return r[new Date(e).getMonth()];
                    })(t);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(d().root, r),
                    'aria-label': h(t, (0, l.s)()),
                    ..._,
                    'data-test-id': i.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(o.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': i.OA.concert.CONCERT_DATE_MONTH,
                            children: p,
                        }),
                        (0, n.jsx)(o.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': i.OA.concert.CONCERT_DATE_DAY,
                            children: h(t, { day: 'numeric' }),
                        }),
                        g &&
                            (0, n.jsx)(o.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, a.$)(d().weekday, m),
                                'data-test-id': i.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: h(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        74773: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n });
            var n = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        76484: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => s });
            var n = r(2058),
                a = r(29993);
            let s = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, a.c)((r) => {
                    var n, a;
                    return (null == (n = r.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(r.price.value, { style: 'currency', currency: null == (a = r.price) ? void 0 : a.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        78016: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => z }));
            var n = r(88800),
                a = r(53548),
                s = r(58390),
                i = r(34961),
                o = r(53892),
                l = r(5120),
                c = r(10363),
                d = r(30064),
                u = r(50633),
                m = r(74773),
                g = r(59497),
                _ = r(67311);
            let h = l.gK
                    .compose(l.gK.model('ConcertsDetailsPage', { concerts: l.gK.maybeNull(l.gK.array(d.a)), title: l.gK.maybeNull(l.gK.string) }), g.X, _.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { type: r, id: n } = t,
                                { concertsResource: a, modelActionsLogger: s } = (0, l._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = m.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        s = t.concertsLocationForRequest,
                                        { items: i, title: o } = yield a.getConcertsDetails({ type: r, id: n, locations: s });
                                    ((e.concerts = (0, l.wg)(i.map((e) => (0, c.H)(e)))), (e.title = null != o ? o : null), (e.loadingState = m.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t), (e.loadingState = m.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = m.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                p = { loadingState: m.G.IDLE },
                { pageStoreProvider: v } = (0, i.W)({ createStore: (e) => h.create(p, e), patchKey: o.n.CONCERTS_DETAILS });
            var y = r(84961),
                E = r(2058),
                x = r(49784),
                C = r(29993),
                f = r(50408),
                N = r(66719),
                R = r(29504),
                T = r(32596),
                b = r(69630),
                k = r(47969),
                A = r(53360),
                S = r(38371),
                w = r(36930),
                I = r(46422),
                O = r(44230),
                P = r(72288),
                j = r(97956),
                L = r(86790),
                M = r(60266),
                D = r(93317),
                K = r(6466),
                W = r.n(K);
            let H = (0, y.PA)((e) => {
                let { type: t, id: r } = e,
                    l = (0, a.useId)(),
                    c = (0, i.s)(o.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, P.g)(),
                    { formatMessage: u } = (0, E.A)(),
                    { contentScrollRef: m, setContentScrollRef: g } = (0, O.g)(),
                    _ = (0, I.W)(),
                    [h, p] = (0, f.d)();
                (0, x.W)({ enabled: c.isResolved });
                let v = d.checkExperiment(j.z.WebNextConcertsIdentityEventType, 'on'),
                    y = (0, C.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: K,
                        rowResizeObserver: H,
                        columnCount: U,
                        indices: G,
                    } = (0, k.L)({
                        count: y(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: h,
                    }),
                    F = { '--feed-concerts-height': ''.concat(K.getTotalSize(), 'px'), '--feed-concerts-column-count': U },
                    z = (0, a.useCallback)(
                        (e) => {
                            var t;
                            let r = null == (t = c.concerts) ? void 0 : t[e];
                            return !r || c.isShimmerVisible ? (0, n.jsx)(w.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, n.jsx)(S.Q, { concert: r });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, a.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    c.isNeededToLoad && (0, a.use)(c.getData({ type: t, id: r })),
                    d.checkExperiment(j.z.WebNextConcertsDetailsPage, 'on') || (0, s.notFound)(),
                    c.isRejected)
                )
                    return (0, n.jsx)(T.SomethingWentWrong, {});
                let Y = v && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, n.jsx)(b.h, {
                    scrollElement: m,
                    outerTitle: Y,
                    children: (0, n.jsxs)('div', {
                        className: W().root,
                        children: [
                            (0, n.jsx)(D.Y, {
                                variant: D.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: _.canBack,
                                children: (0, n.jsx)(R.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: Y }),
                            }),
                            (0, n.jsxs)(N.N, {
                                ref: g,
                                className: W().scrollContainer,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: W().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-labelledby': l,
                                            ref: p,
                                            style: F,
                                            className: W().container,
                                            children: K.getVirtualItems().map((e) =>
                                                (0, n.jsx)(
                                                    A.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: H,
                                                        indices: G,
                                                        renderItemByIndex: z,
                                                        scrollMargin: K.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, n.jsx)(M.A, { children: (0, n.jsx)(L.w, { className: W().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var U = r(19994);
            let G = (e) => (0, n.jsx)(w.L, { isActive: !0, withMeta: !0 }, e),
                F = () => {
                    let e = (0, I.W)(),
                        { contentScrollRef: t, setContentScrollRef: r } = (0, O.g)(),
                        [a, s] = (0, f.d)(),
                        { formatMessage: i } = (0, E.A)(),
                        o = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: l,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, k.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: a,
                        }),
                        m = { '--feed-concerts-height': ''.concat(l.getTotalSize(), 'px'), '--feed-concerts-column-count': d };
                    return (0, n.jsx)(b.h, {
                        scrollElement: t,
                        children: (0, n.jsxs)('div', {
                            className: W().root,
                            children: [
                                (0, n.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(U.W, { className: W().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, n.jsx)(N.N, {
                                    ref: r,
                                    className: W().scrollContainer,
                                    children: (0, n.jsx)('div', {
                                        className: W().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-label': o,
                                            ref: s,
                                            style: m,
                                            className: W().container,
                                            children: l
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, n.jsx)(
                                                        A.U,
                                                        {
                                                            className: W().row,
                                                            columnClassName: W().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: u,
                                                            renderItemByIndex: G,
                                                            scrollMargin: l.options.scrollMargin,
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
                z = () => {
                    let e = (0, s.useSearchParams)(),
                        t = e.get('type'),
                        r = e.get('id');
                    return (
                        (t && r) || (0, s.notFound)(),
                        (0, n.jsx)(v, { children: (0, n.jsx)(a.Suspense, { fallback: (0, n.jsx)(F, {}), children: (0, n.jsx)(H, { type: t, id: r }) }) })
                    );
                };
        },
        78275: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => l });
            var n,
                a = r(53548),
                s = {
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                i = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (s[t](n, n.exports, e), n.exports);
                })(810);
                o.useToggle = (t) => {
                    let [r, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: r, toggle: a, setState: n, toggleTrue: s, toggleFalse: i };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        78373: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => l }), r(30282));
            var n = r(58390),
                a = r(29993),
                s = r(67174),
                i = r(15947),
                o = r(97261);
            let l = (e) => {
                let t = (0, n.useRouter)(),
                    { href: r, target: l } = (0, s.u)(e);
                return (0, a.c)((e) => {
                    let n = (0, i.U)(r, window.location.href, l);
                    if (!n) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (n.type === o.I.EXTERNAL || n.type === o.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        79070: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => a });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var a = n.useReturnValue;
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => T });
            var n = r(88800),
                a = r(65724),
                s = r(84961),
                i = r(2058),
                o = r(30282),
                l = r(94144),
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
            let d = (e, t, r) => {
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
                u = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var m = r(62293),
                g = r(99839);
            let _ = (e) => e(new Date(), (0, g.m)());
            var h = r(51611),
                p = r(72288),
                v = r(11006),
                y = r.n(v),
                E = r(17392),
                x = r(29504),
                C = r(91292);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(C.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(C.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(C.N, { target: '_blank', href: a, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                R = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, a.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, n.jsx)(N, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, p.g)(),
                    { formatDate: a, formatMessage: s } = (0, i.A)(),
                    { language: o } = (0, h.h)(),
                    l = u({ formatMessage: s, language: o, tld: r.tld, year: _(a) });
                return (0, n.jsx)(f, { className: t, data: l });
            });
            let T = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: g, user: v } = (0, p.g)(),
                    { formatDate: E, formatMessage: x } = (0, i.A)(),
                    { isEnabled: C } = null != (t = (0, l.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: a, tld: s, userRegion: i, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: a, userRegion: s } = e,
                                    i = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, a) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, a) },
                                    g = [i, l, u];
                                return (r && 'ru' === s && g.push(o), g.push(m), g);
                            })({ formatMessage: r, isWebApplication: n, language: a, tld: s, userRegion: i }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: r, language: a, tld: s, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: o.$3,
                        tld: g.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(E),
                    });
                return (0, n.jsx)(R, { className: (0, a.$)({ [y().root_withOffsetForDeeplink]: C }, r), data: N });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => a, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => s });
            var n = r(53548);
            let a = (0, n.createContext)(null),
                s = () => (0, n.useContext)(a);
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
                7437, 4814, 8655, 9217, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 8283, 1617, 4732, 9087, 3979, 6719, 1928, 900, 2470, 1372, 763, 2670,
                7358,
            ],
            () => e((e.s = 66793)),
        ),
            (_N_E = e.O()));
    },
]);
