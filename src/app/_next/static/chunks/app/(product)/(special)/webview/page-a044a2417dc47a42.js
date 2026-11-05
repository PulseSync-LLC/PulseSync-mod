(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7322],
    {
        4086: (e, t, i) => {
            'use strict';
            i.d(t, {
                $$: () => eu,
                $5: () => eg,
                $8: () => T,
                $I: () => h,
                $Y: () => eM,
                A4: () => m,
                CN: () => er,
                CR: () => g,
                DP: () => L,
                DT: () => eS,
                DV: () => ev,
                E: () => w,
                EN: () => n,
                Ez: () => em,
                GB: () => v,
                GV: () => k,
                Hm: () => l,
                JM: () => el,
                K1: () => q,
                LC: () => eb,
                Lb: () => _,
                Lk: () => ec,
                N1: () => ey,
                NN: () => K,
                O9: () => W,
                OP: () => p,
                Oo: () => C,
                P0: () => N,
                P1: () => eo,
                PL: () => eI,
                QG: () => O,
                RD: () => eV,
                RG: () => eW,
                S1: () => r,
                SD: () => Z,
                SX: () => ew,
                TD: () => e_,
                TK: () => a,
                Tq: () => eP,
                U2: () => S,
                UB: () => eC,
                Ut: () => $,
                V3: () => R,
                V4: () => E,
                VR: () => ej,
                W5: () => ek,
                WA: () => Y,
                X4: () => M,
                X8: () => V,
                Xc: () => ei,
                Zf: () => s,
                Zi: () => eL,
                Zl: () => es,
                _1: () => y,
                aE: () => X,
                by: () => ex,
                c9: () => et,
                cZ: () => en,
                dA: () => eD,
                dh: () => eA,
                en: () => Q,
                eu: () => H,
                ff: () => eR,
                gd: () => ep,
                gu: () => c,
                iP: () => eO,
                jQ: () => ee,
                ki: () => J,
                mD: () => o,
                mr: () => d,
                nM: () => G,
                ni: () => eU,
                ok: () => U,
                oo: () => I,
                qN: () => B,
                qT: () => eh,
                qt: () => A,
                re: () => ea,
                ro: () => F,
                s_: () => eN,
                sv: () => ed,
                tz: () => b,
                u2: () => ef,
                uM: () => eE,
                vH: () => D,
                vg: () => eT,
                wH: () => j,
                wK: () => f,
                xF: () => x,
                y$: () => u,
                yq: () => z,
                zj: () => P,
            });
            let n = 'AfterTrackResource',
                s = 'Logger',
                r = 'TechMetricsLogger',
                o = 'OtelSdk',
                a = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                p = 'BaseResourceHttpClient',
                m = 'ResourceHttpClient',
                g = 'ResourceBeaconClient',
                h = 'AccountResource',
                v = 'OutageNoticeResource',
                y = 'UsersResource',
                R = 'LandingResource',
                f = 'LandingBlocksResource',
                _ = 'Landing3Resource',
                b = 'AlbumResource',
                w = 'SlidesResource',
                A = 'MusicExternalApiPrefixUrl',
                k = 'MusicResourceFactory',
                E = 'PublicConfig',
                x = 'ServerConfig',
                N = 'TokenConfig',
                I = 'Storage',
                L = 'CookieStorage',
                S = 'LocalStorage',
                T = 'LibraryResource',
                P = 'LumenResource',
                C = 'TracksResource',
                D = 'SessionStorage',
                M = 'TopResource',
                W = 'ArtistsResource',
                O = 'Authorization',
                j = 'RedAlertResource',
                U = 'RotorResource',
                V = 'WaveResource',
                z = 'SearchResource',
                K = 'SearchPlaylistResource',
                B = 'PlaylistResource',
                F = 'PlaylistsResource',
                G = 'PinResource',
                $ = 'MetatagsResource',
                q = 'TagResource',
                H = 'FeedResource',
                Z = 'Wizard3Resource',
                Y = 'CONTAINER_USER_ID_TOKEN',
                X = 'PinsResource',
                J = 'MusicHistoryResource',
                Q = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                ei = 'CONTAINER_I18N_STORAGE',
                en = 'LyricViewsResource',
                es = 'NonMusicResource',
                er = 'DonationResource',
                eo = 'LoaderResource',
                ea = 'PrefixlessResource',
                el = 'StreamsResource',
                ec = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                ep = 'AdsResource',
                em = 'PersonalResource',
                eg = 'AvailabilityResource',
                eh = 'GetFileInfoResource',
                ev = 'ResourcesFileInfoResource',
                ey = 'DisclaimersResource',
                eR = 'DisclaimerDictionary',
                ef = 'FamilyResource',
                e_ = 'ChildrenLandingResource',
                eb = 'TelemetryResource',
                ew = 'Env',
                eA = 'PromoResource',
                ek = 'RumResource',
                eE = 'AcqOffers',
                ex = 'Ynison',
                eN = 'YnisonNewConnector',
                eI = 'LabelsResource',
                eL = 'RequestExecutionContext',
                eS = 'ConcertsResource',
                eT = 'YaMetrikaController',
                eP = 'RumTransport',
                eC = 'YaMetrikaTransport',
                eD = 'WordsResource',
                eM = 'WheelResource',
                eW = 'MocksInitializer',
                eO = 'CacheWorker',
                ej = 'NetworkMonitorFactory',
                eU = 'SkeletonSdk',
                eV = 'TagSandbox';
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var n = i(67174);
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
        4765: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => n });
            var n = (function (e) {
                return ((e.LIKED = '1'), (e.DISLIKED = '0'), e);
            })({});
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var n = i(72288),
                s = i(97956);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: o,
                } = (0, n.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => g });
            var n = i(88800),
                s = i(29993),
                r = i(88969),
                o = i(29504),
                a = i(59304),
                l = i(51028),
                c = i.n(l);
            let u = () =>
                (0, n.jsx)(a.$, {
                    message: (0, n.jsx)(o.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, n.jsx)(r.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var d = i(29595),
                p = i(74965),
                m = i(72288);
            let g = () => {
                let { notify: e } = (0, p.l)(),
                    { advert: t } = (0, m.g)();
                return (0, s.c)(() => (t.isAdvertShown && e((0, n.jsx)(u, {}), { containerId: d.u.INFO }), !!t.isAdvertShown));
            };
        },
        8438: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => o });
            var n = i(30282),
                s = i(12149),
                r = i(44702);
            let o = () => ''.concat(n.sK.DESKTOP).concat((0, r.$)((0, s.u)()));
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
        9618: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => r });
            var n = i(53548),
                s = i(72288);
            let r = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: i,
                        settings: r,
                        familyInvite: o,
                        freeAccess: a,
                    } = (0, s.g)(),
                    l = null == (e = r.browserInfo) ? void 0 : e.isTouch,
                    c = o.modal.isOpened;
                return (0, n.useMemo)(
                    () => ({
                        showBuySubscriptionModal: t.open,
                        hideBuySubscriptionModal: t.close,
                        shouldShowBuySubscriptionModal: (a.isFreeWebUser || !i.isAuthorized) && !!l && !c,
                    }),
                    [t.close, t.open, a.isFreeWebUser, l, i.isAuthorized, c],
                );
            };
        },
        9630: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s, e: () => r });
            var n = i(53548);
            let s = (0, n.createContext)(null);
            function r() {
                return (0, n.useContext)(s);
            }
        },
        12149: (e, t, i) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            i.d(t, { u: () => n });
        },
        15947: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var n = i(35412),
                s = i(28166),
                r = i(97261);
            let o = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, s.Lz],
                a = (e, t, i) => {
                    let a;
                    try {
                        a = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, n.Rj)(e, { allowedProtocols: new Set([...o, a.protocol]), baseUrl: a.href });
                    return l.isAllowed
                        ? l.url.protocol === s.Lz
                            ? { type: r.I.DEEPLINK, href: e }
                            : '_blank' !== i && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, a)
                              ? { type: r.I.INTERNAL, href: e }
                              : { type: r.I.EXTERNAL, href: e }
                        : null;
                };
        },
        18593: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { K: () => n }),
                (function (e) {
                    ((e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Artist = 'artist'),
                        (e.Vibe = 'vibe'),
                        (e.Various = 'various'),
                        (e.Generative = 'generative'),
                        (e.Radio = 'fm_radio'),
                        (e.Search = 'search'),
                        (e.LegacyRadio = 'legacy_radio'));
                })(n || (n = {})));
        },
        20585: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var n = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        28166: (e, t, i) => {
            'use strict';
            i.d(t, { Lz: () => n, ov: () => s });
            let n = ''.concat('yandexmusic', ':'),
                s = ''.concat(n, '//');
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => C });
            var n = i(88800),
                s = i(65724),
                r = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                u = i(52300),
                d = i(29504),
                p = i(87999),
                m = i(47149),
                g = i(84423),
                h = i(89846),
                v = i(64543),
                y = i(63582);
            let R = (0, y.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: n } = (0, v.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !i || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: n.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == n ? void 0 : n.pageId]),
                    };
                }),
                f = (0, y.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: s } = (0, v.j)();
                    (0, o.useEffect)(() => {
                        if (!i || !n || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: s.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, n, null == s ? void 0 : s.pageId]);
                });
            var _ = i(44230),
                b = i(4370),
                w = i(72288),
                A = i(97956),
                k = i(56248),
                E = i(90688),
                x = i(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = i(96856),
                L = i.n(I);
            let S = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: o } = (0, w.g)(),
                    { contentRef: a } = (0, _.g)(),
                    u = (0, x.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(L().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(L().navigation, { [L().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, s.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(E._V, { className: L().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: L().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: L().buttonText,
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
            var T = i(9184),
                P = i.n(T);
            let C = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: p } = (0, a.A)(),
                    m = (0, o.useContext)(w.P),
                    g = null == m ? void 0 : m.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(h);
                let { sendRefreshEvent: v } = R(),
                    y = (0, o.useCallback)(() => {
                        (v(), (window.location.href = b.Z.main.href));
                    }, [v]),
                    { contentRef: E } = (0, _.g)();
                return g
                    ? (0, n.jsx)(S, { className: t, withBackwardControl: i, onBack: r })
                    : (0, n.jsxs)('div', {
                          className: (0, s.$)(P().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, s.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, s.$)(P().title, P().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, s.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: y,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(d.HL, {
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
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => n });
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
        41928: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r, N: () => o });
            var n = i(53548),
                s = i(39499);
            let r = (0, n.createContext)(null);
            function o() {
                let e = (0, n.useContext)(r);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => s, g: () => r });
            var n = i(53548);
            let s = (0, n.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                r = () => (0, n.useContext)(s);
        },
        44349: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { R: () => n }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(n || (n = {})));
        },
        44702: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var n = i(55956);
            let s = (e) => {
                switch (e) {
                    case 'win32':
                        return n.V.WINDOWS;
                    case 'darwin':
                        return n.V.MACOS;
                    case 'linux':
                        return n.V.LINUX;
                }
                return null;
            };
        },
        46590: (e) => {
            e.exports = { root: 'WebViewPage_root__vl9f4' };
        },
        46777: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var n = i(55482),
                s = i(53548),
                r = i(46422);
            let o = (e) => {
                let t = (0, r.W)(),
                    i = (0, s.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, s.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: i, moveForward: o };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51888: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s, d: () => n });
            let n = (e) => String(e).split(':'),
                s = (e, t) => (t ? [e, t].join(':') : e);
        },
        55956: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var n = (function (e) {
                return ((e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e);
            })({});
        },
        56248: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var n = i(88800),
                s = i(65724),
                r = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(17392),
                c = i(29993),
                u = i(96817),
                d = i(52300),
                p = i(46777),
                m = i(50320),
                g = i.n(m);
            let h = (0, r.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: i = !0,
                        shouldFocusOnMount: r = !0,
                        className: m,
                        withBackwardFallback: h,
                        buttonSize: v = 'xxs',
                        onBackwardClick: y,
                    } = e,
                    { formatMessage: R } = (0, a.A)(),
                    { canBack: f, canForward: _, moveBack: b, moveForward: w } = (0, p.J)(h),
                    A = (0, o.useRef)(null),
                    k = (0, c.c)((e) => {
                        if ((e.stopPropagation(), y)) return void y();
                        b();
                    }),
                    E = (0, c.c)((e) => {
                        (e.stopPropagation(), w());
                    });
                return (
                    (0, o.useEffect)(() => {
                        r && A.current && f && A.current.focus();
                    }, [f]),
                    (0, n.jsxs)('div', {
                        className: (0, s.$)(g().root, m),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, n.jsx)(u.$, {
                                    ref: A,
                                    'aria-label': R({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: v,
                                    icon: (0, n.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: k,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, n.jsx)(u.$, {
                                    'aria-label': R({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: v,
                                    icon: (0, n.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: E,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        57127: (e, t, i) => {
            'use strict';
            i.d(t, { WebViewPage: () => ey });
            var n = i(88800),
                s = i(84961),
                r = i(53548),
                o = i(58390),
                a = i(79070),
                l = i(46422),
                c = i(4370),
                u = i(78940),
                d = i(72288),
                p = i(97956),
                m = i(34303),
                g = i(35412);
            let h = new Set([g.cy.HTTPS]);
            var v = i(17392),
                y = i(32596),
                R = i(87396),
                f = i(2058),
                _ = i(29993),
                b = i(39499),
                w = i(63449),
                A = i(57448),
                k = i(79390),
                E = i(78309),
                x = i(49950),
                N = i(96706);
            let I = async (e) => {
                if ((e.isResolved || e.isLoading || (await e.getData()), e.isLoading && (await (0, N.z7)(() => !e.isLoading)), !e.isResolved))
                    throw new b.t('Failed to load the collection');
            };
            var L = i(16482),
                S = i(4765);
            let T = (e, t) => {
                let { entityType: i, entityId: n } = t;
                switch ({ [L.A.TRACK]: e.tracks, [L.A.ARTIST]: e.artists, [L.A.ALBUM]: e.albums, [L.A.CLIP]: e.clips, [L.A.PLAYLIST]: e.playlists }[i].items.get(n)) {
                    case S.O.LIKED:
                        return { state: E.U.LIKE };
                    case S.O.DISLIKED:
                        return { state: E.U.DISLIKE };
                    default:
                        return { state: E.U.NEUTRAL };
                }
            };
            var P = i(67960),
                C = i(51888);
            let D = async (e, t) => {
                    let { entityType: i, entityId: n } = e;
                    if (i === L.A.PLAYLIST) {
                        let e = /^\d+:\d+$/.test(n) ? (0, P.I)(n) : await t.getPlaylist({ playlistUuid: n, resumeStream: !1, richTracks: !1 }),
                            i = Number(e.uid);
                        return { entityId: ''.concat(i, ':').concat(e.kind), ownerId: i, kindId: e.kind };
                    }
                    if (i === L.A.TRACK && /^\d+:\d+$/.test(n)) {
                        let [e, t] = (0, C.d)(n);
                        if (e && t) return { entityId: e, albumId: Number(t) };
                    }
                    return { entityId: n };
                },
                M = async (e, t, i) => {
                    switch (t) {
                        case L.A.TRACK:
                            return e.toggleTrackLike(i);
                        case L.A.ARTIST:
                            return e.toggleArtistLike(i);
                        case L.A.ALBUM:
                            return e.toggleAlbumLike(i);
                        case L.A.CLIP:
                            return e.toggleClipLike(i);
                        case L.A.PLAYLIST:
                            return e.togglePlaylistLike(i);
                    }
                };
            var W = i(35540),
                O = i(15947),
                j = i(97261),
                U = i(67174),
                V = i(50267),
                z = i(5407),
                K = i(9618),
                B = i(4795),
                F = i(9630),
                G = i(44349),
                $ = i(18593),
                q = i(895),
                H = i(20585);
            let Z = (e) => {
                switch (e) {
                    case V.Y.MAIN:
                        return;
                    case V.Y.TRAILER:
                        return H.V.TRAILER;
                    default:
                        throw new b.t('Unsupported WebApp playback');
                }
            };
            var Y = i(26627),
                X = i(4086),
                J = i(41928),
                Q = i(65523);
            i(30282);
            var ee = i(97526),
                et = i(69704),
                ei = i(74773),
                en = i(9519),
                es = i(54020),
                er = i(69991),
                eo = i(4762),
                ea = i(30683);
            let el = [er.Z, ...q.vs, ...x.cD, ...W.Y, ...Y.Nf];
            var ec = i(8438),
                eu = i(49124);
            class ed {
                async start() {
                    try {
                        let e = this.sdk.start();
                        if ((this.disposed || (this.options.iframe.src = this.url.href), await e, this.disposed)) return;
                        (this.hostDocument.addEventListener('visibilitychange', this.sendVisibility), this.sendVisibility());
                    } catch (e) {
                        throw (this.dispose(), e);
                    }
                }
                dispose() {
                    this.disposed || ((this.disposed = !0), this.hostDocument.removeEventListener('visibilitychange', this.sendVisibility), this.sdk.dispose());
                }
                getContext() {
                    var e, t;
                    return {
                        locale: this.options.locale,
                        theme: null != (e = this.options.theme) ? e : 'system',
                        client: { name: (0, ec.y)(), version: null != (t = eu.env.APP_VERSION) ? t : '' },
                        safeArea: { top: 32, right: 0, bottom: 0, left: 0 },
                        appSessionId: (0, es.A)(),
                    };
                }
                close() {
                    (this.dispose(), this.options.onClose());
                }
                sendVisibility() {
                    try {
                        this.sdk.command(Y.OW.name, { visible: !this.hostDocument.hidden });
                    } catch (t) {
                        var e;
                        null == (e = this.options.logger) || e.error('Failed to send WebApp visibility', { error: t });
                    }
                }
                constructor(e) {
                    ((0, en._)(this, 'options', void 0),
                        (0, en._)(this, 'sdk', void 0),
                        (0, en._)(this, 'hostDocument', void 0),
                        (0, en._)(this, 'url', void 0),
                        (0, en._)(this, 'disposed', void 0),
                        (this.options = e),
                        (this.disposed = !1));
                    let { iframe: t, handlers: i, logger: n } = e;
                    ((this.hostDocument = t.ownerDocument), (this.close = this.close.bind(this)), (this.sendVisibility = this.sendVisibility.bind(this)));
                    try {
                        let s = t.contentWindow;
                        if (!s) throw new b.t('WebApp iframe is not mounted');
                        ((this.url = new URL(e.url)),
                            (this.sdk = (0, eo.D)({
                                transport: (0, ea._)({ targetWindow: s, expectedOrigin: this.url.origin }),
                                actions: el,
                                context: this.getContext(),
                                logger: n,
                                handlers: { ...i, [er.Z.name]: this.close },
                            })));
                    } catch (e) {
                        throw (null == n || n.error('Failed to prepare WebApp session', { error: e }), e);
                    }
                }
            }
            var ep = i(63688),
                em = i.n(ep);
            let eg = (0, s.PA)((e) => {
                let { documentUrl: t, onClose: i } = e,
                    s = (0, r.useRef)(null),
                    { isPending: a, isRejected: l } = ((e) => {
                        let { frameRef: t, documentUrl: i, onClose: n } = e,
                            [s, a] = (0, r.useState)(ei.G.PENDING),
                            l = (() => {
                                let e = ((e) => {
                                        let t = (0, F.e)(),
                                            i = (0, _.c)(() => {
                                                if (!t) throw new b.t('Player is not ready');
                                                return t;
                                            }),
                                            { paywall: n } = (0, d.g)(),
                                            s = (0, z.P)(),
                                            o = (0, B.N)(),
                                            { shouldShowBuySubscriptionModal: a, showBuySubscriptionModal: l } = (0, K.q)(),
                                            c = (0, _.c)((e) => {
                                                if (s()) throw new b.t('Playback is unavailable during an advertisement');
                                                if (e !== V.Y.TRAILER) {
                                                    if (a) throw (l(), new b.t('A subscription is required for playback'));
                                                    if (o) throw (n.modal.open(), new b.t('A subscription is required for playback'));
                                                }
                                            });
                                        return (0, r.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { getSonata: t, checkPlaybackAccess: i, from: n } = e;
                                                    return {
                                                        ...((e) => {
                                                            let t,
                                                                i = new Map(),
                                                                n = Promise.resolve(),
                                                                s = async (n, s) => {
                                                                    var r;
                                                                    let o = e();
                                                                    o !== t && (i.clear(), (t = o));
                                                                    let a = Z(n),
                                                                        l = o.getState(a).playerState.exponentVolume.value;
                                                                    if ((s && 0 === l) || (!s && 0 !== l)) return;
                                                                    s && i.set(n, l);
                                                                    let c = o.getState(H.V.TRAILER).playerState.exponentVolume.value,
                                                                        u = s ? 0 : null != (r = i.get(n)) ? r : 1;
                                                                    (await o.setExponentVolume(u, a), n === V.Y.MAIN && (await o.setExponentVolume(c, H.V.TRAILER)));
                                                                },
                                                                r = (e, t) => {
                                                                    let i = () => s(e, t),
                                                                        r = n.then(i, i);
                                                                    return ((n = r), r);
                                                                };
                                                            return {
                                                                [q.ho.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return r(t, !0);
                                                                },
                                                                [q.oq.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return r(t, !1);
                                                                },
                                                            };
                                                        })(t),
                                                        [q.q5.name]: async (e) => {
                                                            let { playback: s, queue: r } = e,
                                                                o = t();
                                                            i(s);
                                                            let a = r[0];
                                                            if (!a) throw new b.t('WebApp playback queue must not be empty');
                                                            let l = Z(s),
                                                                c = s === V.Y.TRAILER ? G.R.SmartPreview : G.R.Unknown;
                                                            (await o.setContext(
                                                                {
                                                                    contextData: { type: $.K.Various, meta: a, from: n },
                                                                    entitiesData: r.map((e) => ({ type: c, meta: e })),
                                                                    queueParams: { index: 0 },
                                                                    loadContextMeta: !1,
                                                                },
                                                                l,
                                                            ),
                                                                await o.play(l));
                                                        },
                                                        [q.gq.name]: async (e) => {
                                                            let { playback: i } = e;
                                                            await t().pause(Z(i));
                                                        },
                                                    };
                                                })({ getSonata: i, checkPlaybackAccess: c, from: e }),
                                            [i, c, e],
                                        );
                                    })('webview'),
                                    t = (() => {
                                        let { library: e, user: t, paywall: i } = (0, d.g)(),
                                            { playlistResource: n } = (0, A.f)(),
                                            s = (0, w.n)(),
                                            o = (0, _.c)(() => {
                                                let e = t.account.data.uid;
                                                if (!t.isAuthorized || void 0 === e) throw new b.t('Authorization is required for collection actions');
                                                return e;
                                            }),
                                            a = (0, _.c)(() => {
                                                if (s) throw (i.modal.open(), new b.t('A subscription is required to access the collection'));
                                            });
                                        return (0, r.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { library: t, playlistResource: i, getUserId: n, checkCollectionAccess: s } = e,
                                                        r = Promise.resolve(),
                                                        o = async (e, r) => {
                                                            s();
                                                            let o = n();
                                                            await I(t);
                                                            let a = await D(e, i),
                                                                l = { entityType: e.entityType, entityId: String(a.entityId) },
                                                                c = T(t, l);
                                                            if (void 0 === r || (c.state === E.U.LIKE) === r) return c;
                                                            if ((await M(t, e.entityType, { ...a, userId: o })) !== k.f.OK)
                                                                throw new b.t('Failed to update the collection');
                                                            return (await I(t), T(t, l));
                                                        },
                                                        a = (e, t) => {
                                                            let i = () => o(e, t),
                                                                n = r.then(i, i);
                                                            return ((r = n), n);
                                                        };
                                                    return { [x.Qc.name]: (e) => a(e, !0), [x.LZ.name]: (e) => a(e, !1), [x.X7.name]: (e) => a(e) };
                                                })({ library: e, playlistResource: n, getUserId: o, checkCollectionAccess: a }),
                                            [e, n, o, a],
                                        );
                                    })(),
                                    i = (() => {
                                        let e = (0, o.useRouter)(),
                                            t = (0, _.c)((t) => {
                                                let { weblink: i } = t,
                                                    { href: n, target: s } = (0, U.u)(i),
                                                    r = (0, O.U)(n, window.location.href, s);
                                                r &&
                                                    (r.type === j.I.EXTERNAL || r.type === j.I.DEEPLINK
                                                        ? ((e) => {
                                                              let { target: t, rel: i } = (0, U.u)(e, { options: { isExternalLink: !0 } });
                                                              window.open(e, t, i);
                                                          })(r.href)
                                                        : e.push(r.href));
                                            });
                                        return (0, r.useMemo)(() => ({ [W.r.name]: t }), [t]);
                                    })(),
                                    n = (() => {
                                        let e = (0, J.N)().get(X.QG),
                                            t =
                                                ((0, Q.U)(),
                                                (0, _.c)(async (e) => {
                                                    let { data: t, title: i } = e,
                                                        n = ((e) => {
                                                            let t = 'data:image/png;base64,',
                                                                i = atob(e.startsWith(t) ? e.slice(t.length) : e),
                                                                n = Uint8Array.from(i, (e) => e.charCodeAt(0));
                                                            if ([137, 80, 78, 71, 13, 10, 26, 10].every((e, t) => n[t] === e))
                                                                return new Blob([n], { type: 'image/png' });
                                                            throw Error('WebApp share data must contain a PNG image');
                                                        })(t),
                                                        s = 'ya-music-'.concat(Date.now(), '.png'),
                                                        r = new File([n], s, { type: n.type });
                                                    await (0, ee.r)(r, s);
                                                })),
                                            i = (0, _.c)(() => {
                                                e.redirectToAuthorizationUrl();
                                            });
                                        return (0, r.useMemo)(() => ({ [Y.ZR.name]: t, [Y.P$.name]: i }), [i, t]);
                                    })();
                                return (0, r.useMemo)(() => ({ ...e, ...t, ...i, ...n }), [e, t, i, n]);
                            })(),
                            c = (0, Q.U)(),
                            { locale: u } = (0, f.A)(),
                            { theme: p } = (0, et.W)(),
                            m = (0, _.c)(() => ({ locale: u, theme: p })),
                            g = (0, _.c)(n);
                        return (
                            (0, r.useEffect)(() => {
                                let e,
                                    n = t.current;
                                if (!n) return;
                                let s = !0;
                                return (
                                    a(ei.G.PENDING),
                                    (async () => {
                                        try {
                                            ((e = new ed({ iframe: n, url: i, handlers: l, onClose: g, logger: c, ...m() })), await e.start(), s && a(ei.G.RESOLVE));
                                        } catch (e) {
                                            s && a(ei.G.REJECT);
                                        }
                                    })(),
                                    () => {
                                        ((s = !1), null == e || e.dispose());
                                    }
                                );
                            }, [g, i, t, m, l, c]),
                            { isPending: s === ei.G.PENDING, isRejected: s === ei.G.REJECT }
                        );
                    })({ frameRef: s, documentUrl: t, onClose: i });
                return (0, n.jsxs)('div', {
                    className: em().root,
                    'aria-busy': a,
                    children: [
                        (0, n.jsx)('iframe', {
                            ref: s,
                            className: em().frame,
                            title: t,
                            referrerPolicy: 'origin',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read; clipboard-write',
                            hidden: l,
                            'data-test-id': v.Xk.webView.WEB_VIEW_IFRAME,
                        }),
                        a && (0, n.jsx)(R.MainSuspenseLoader, { style: { position: 'absolute' } }),
                        l && (0, n.jsx)(y.SomethingWentWrong, { onBack: i }),
                    ],
                });
            });
            var eh = i(46590),
                ev = i.n(eh);
            let ey = (0, s.PA)(() => {
                var e;
                let { experiments: t } = (0, d.g)(),
                    i = t.checkExperiment(p.z.WebNextWebView, 'on'),
                    s = (0, o.usePathname)(),
                    v =
                        null ==
                        (e = ((e) => {
                            if (!e) return null;
                            let t = (0, g.Rj)(e, { allowedProtocols: h });
                            return t.isAllowed && 'https://music.yandex.ru' === t.url.origin ? t.url : null;
                        })((0, o.useSearchParams)().get(m.K.URL)))
                            ? void 0
                            : e.href,
                    y = (0, l.W)(),
                    R = (0, r.useRef)(null);
                if (null === R.current && ((R.current = c.Z.main.href), y.length >= 2)) {
                    let e = y.state,
                        t = (null == e ? void 0 : e.data.href.split('?')[0]) === s ? e.prev : e,
                        i = null == t ? void 0 : t.data.href;
                    i && i.split('?')[0] !== s && (R.current = i);
                }
                let f = (0, u.Z)(R.current),
                    _ = (0, a.L)(() => ((i && v) || (0, o.redirect)(c.Z.main.href), (0, n.jsx)(eg, { documentUrl: v, onClose: f }, v)));
                return (0, n.jsx)('main', { className: ev().root, children: _ });
            });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var n = i(4086),
                s = i(41928);
            let r = () => {
                let e = (0, s.N)(),
                    t = e.get(n.$I),
                    i = e.get(n.EN),
                    r = e.get(n.N1),
                    o = e.get(n._1),
                    a = e.get(n.V3),
                    l = e.get(n.Lb),
                    c = e.get(n.wK),
                    u = e.get(n.tz),
                    d = e.get(n.$8),
                    p = e.get(n.Oo),
                    m = e.get(n.X4),
                    g = e.get(n.O9),
                    h = e.get(n.E),
                    v = e.get(n.wH),
                    y = e.get(n.ok),
                    R = e.get(n.X8),
                    f = e.get(n.yq),
                    _ = e.get(n.NN),
                    b = e.get(n.qN),
                    w = e.get(n.ro),
                    A = e.get(n.nM),
                    k = e.get(n.Ut),
                    E = e.get(n.K1),
                    x = e.get(n.eu),
                    N = e.get(n.SD),
                    I = e.get(n.aE),
                    L = e.get(n.ki),
                    S = e.get(n.c9),
                    T = e.get(n.en),
                    P = e.get(n.jQ),
                    C = e.get(n.cZ),
                    D = e.get(n.Zl),
                    M = e.get(n.CN),
                    W = e.get(n.P1),
                    O = e.get(n.zj),
                    j = e.get(n.re),
                    U = e.get(n.JM),
                    V = e.get(n.Lk),
                    z = e.get(n.$$),
                    K = e.get(n.sv),
                    B = e.get(n.gd),
                    F = e.get(n.Ez),
                    G = e.get(n.u2),
                    $ = e.get(n.TD),
                    q = e.get(n.dh),
                    H = e.get(n.LC),
                    Z = e.get(n.PL),
                    Y = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: r,
                    usersResource: o,
                    landingResource: a,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: p,
                    topResource: m,
                    artistsResource: g,
                    slidesResource: h,
                    redAlertResource: v,
                    rotorResource: y,
                    waveResource: R,
                    searchResource: f,
                    searchPlaylistResource: _,
                    playlistResource: b,
                    playlistsResource: w,
                    pinResource: A,
                    metatagsResource: k,
                    tagResource: E,
                    feedResource: x,
                    wizard3Resource: N,
                    pinsResource: I,
                    musicHistoryResource: L,
                    dynamicPagesResource: S,
                    chartResource: T,
                    clipsResource: P,
                    lyricViewsResource: C,
                    nonMusicResource: D,
                    donationResource: M,
                    loaderResource: W,
                    lumenResource: O,
                    prefixlessResource: j,
                    streamsResource: U,
                    filtersResource: V,
                    ugcResource: z,
                    collectionResource: K,
                    adsResource: B,
                    personalResource: F,
                    familyResource: G,
                    childrenLandingResource: $,
                    promoResource: q,
                    telemetryResource: H,
                    labelsResource: Z,
                    concertsResource: Y,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        63449: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            var n = i(72288),
                s = i(97956);
            let r = () => {
                var e, t, i;
                let { user: r, experiments: o, settings: a } = (0, n.g)();
                return (
                    !o.checkExperiment(s.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = a.browserInfo) ? void 0 : e.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (i = o.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = i.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        63688: (e) => {
            e.exports = { root: 'WebViewFrame_root__nZh_X', frame: 'WebViewFrame_frame__nprFQ' };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var n = i(4086),
                s = i(41928),
                r = i(44084);
            let o = new WeakMap(),
                a = () =>
                    ((e) => {
                        if (e instanceof r.r) return e;
                        let t = o.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (o.set(e, i), i);
                    })((0, s.N)().get(n.Zf));
        },
        67960: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            let n = (e) => {
                let [t, i] = e.split(':');
                return { uid: String(t), kind: Number(i) };
            };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => s, W: () => r });
            var n = i(53548);
            let s = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, n.useContext)(s);
        },
        74773: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => n });
            var n = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78940: (e, t, i) => {
            'use strict';
            (i.d(t, { Z: () => l }), i(30282));
            var n = i(58390),
                s = i(29993),
                r = i(67174),
                o = i(15947),
                a = i(97261);
            let l = (e) => {
                let t = (0, n.useRouter)(),
                    { href: i, target: l } = (0, r.u)(e);
                return (0, s.c)((e) => {
                    let n = (0, o.U)(i, window.location.href, l);
                    if (!n) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (n.type === a.I.EXTERNAL || n.type === a.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: i } = (0, r.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, i);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        79070: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => s });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var s = n.useReturnValue;
        },
        79390: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { f: () => n }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(n || (n = {})));
        },
        84386: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57127)), Promise.resolve().then(i.bind(i, 87396)));
        },
        87396: (e, t, i) => {
            'use strict';
            i.d(t, { MainSuspenseLoader: () => a });
            var n = i(88800),
                s = i(52300),
                r = i(60932),
                o = i.n(r);
            let a = (e) => {
                let { style: t } = e,
                    i = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, n.jsx)('div', {
                    style: i,
                    children: (0, n.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: o().icon,
                    }),
                });
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
        97261: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var n = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97526: (e, t, i) => {
            'use strict';
            (i.d(t, { r: () => n }), i(30282));
            let n = async (e, t) => {
                if (!window.musicDesktop) throw Error('Desktop file saving is unavailable');
                window.musicDesktop.files.savePng(t, await e.arrayBuffer());
            };
        },
    },
    (e) => {
        (e.O(0, [7437, 4814, 3469, 3503, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 7915, 4732, 9087, 3979, 1928, 9124, 763, 2670, 7358], () =>
            e((e.s = 84386)),
        ),
            (_N_E = e.O()));
    },
]);
