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
                CN: () => es,
                CR: () => g,
                DP: () => L,
                DT: () => eS,
                DV: () => ey,
                E: () => w,
                EN: () => n,
                Ez: () => em,
                GB: () => y,
                GV: () => k,
                Hm: () => l,
                JM: () => el,
                K1: () => q,
                LC: () => e_,
                Lb: () => b,
                Lk: () => ec,
                N1: () => ev,
                NN: () => K,
                O9: () => W,
                OP: () => p,
                Oo: () => C,
                P0: () => x,
                P1: () => eo,
                PL: () => eN,
                QG: () => U,
                RD: () => eV,
                RG: () => eW,
                S1: () => s,
                SD: () => Z,
                SX: () => ew,
                TD: () => eb,
                TK: () => a,
                Tq: () => eP,
                U2: () => S,
                UB: () => eC,
                Ut: () => $,
                V3: () => f,
                V4: () => E,
                VR: () => eO,
                W5: () => ek,
                WA: () => Y,
                X4: () => M,
                X8: () => V,
                Xc: () => ei,
                Zf: () => r,
                Zi: () => eL,
                Zl: () => er,
                _1: () => v,
                aE: () => X,
                by: () => eI,
                c9: () => et,
                cZ: () => en,
                dA: () => eD,
                dh: () => eA,
                en: () => Q,
                eu: () => H,
                ff: () => ef,
                gd: () => ep,
                gu: () => c,
                iP: () => eU,
                jQ: () => ee,
                ki: () => J,
                mD: () => o,
                mr: () => d,
                nM: () => G,
                ni: () => ej,
                ok: () => j,
                oo: () => N,
                qN: () => B,
                qT: () => eh,
                qt: () => A,
                re: () => ea,
                ro: () => F,
                s_: () => ex,
                sv: () => ed,
                tz: () => _,
                u2: () => eR,
                uM: () => eE,
                vH: () => D,
                vg: () => eT,
                wH: () => O,
                wK: () => R,
                xF: () => I,
                y$: () => u,
                yq: () => z,
                zj: () => P,
            });
            let n = 'AfterTrackResource',
                r = 'Logger',
                s = 'TechMetricsLogger',
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
                y = 'OutageNoticeResource',
                v = 'UsersResource',
                f = 'LandingResource',
                R = 'LandingBlocksResource',
                b = 'Landing3Resource',
                _ = 'AlbumResource',
                w = 'SlidesResource',
                A = 'MusicExternalApiPrefixUrl',
                k = 'MusicResourceFactory',
                E = 'PublicConfig',
                I = 'ServerConfig',
                x = 'TokenConfig',
                N = 'Storage',
                L = 'CookieStorage',
                S = 'LocalStorage',
                T = 'LibraryResource',
                P = 'LumenResource',
                C = 'TracksResource',
                D = 'SessionStorage',
                M = 'TopResource',
                W = 'ArtistsResource',
                U = 'Authorization',
                O = 'RedAlertResource',
                j = 'RotorResource',
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
                er = 'NonMusicResource',
                es = 'DonationResource',
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
                ey = 'ResourcesFileInfoResource',
                ev = 'DisclaimersResource',
                ef = 'DisclaimerDictionary',
                eR = 'FamilyResource',
                eb = 'ChildrenLandingResource',
                e_ = 'TelemetryResource',
                ew = 'Env',
                eA = 'PromoResource',
                ek = 'RumResource',
                eE = 'AcqOffers',
                eI = 'Ynison',
                ex = 'YnisonNewConnector',
                eN = 'LabelsResource',
                eL = 'RequestExecutionContext',
                eS = 'ConcertsResource',
                eT = 'YaMetrikaController',
                eP = 'RumTransport',
                eC = 'YaMetrikaTransport',
                eD = 'WordsResource',
                eM = 'WheelResource',
                eW = 'MocksInitializer',
                eU = 'CacheWorker',
                eO = 'NetworkMonitorFactory',
                ej = 'SkeletonSdk',
                eV = 'TagSandbox';
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var n = i(67174);
            let r = {
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
            i.d(t, { N: () => s });
            var n = i(72288),
                r = i(97956);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: o,
                } = (0, n.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => g });
            var n = i(88800),
                r = i(29993),
                s = i(88969),
                o = i(29504),
                a = i(59304),
                l = i(51028),
                c = i.n(l);
            let u = () =>
                (0, n.jsx)(a.$, {
                    message: (0, n.jsx)(o.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, n.jsx)(s.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var d = i(29595),
                p = i(74965),
                m = i(72288);
            let g = () => {
                let { notify: e } = (0, p.l)(),
                    { advert: t } = (0, m.g)();
                return (0, r.c)(() => (t.isAdvertShown && e((0, n.jsx)(u, {}), { containerId: d.u.INFO }), !!t.isAdvertShown));
            };
        },
        8438: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => o });
            var n = i(30282),
                r = i(12149),
                s = i(44702);
            let o = () => ''.concat(n.sK.DESKTOP).concat((0, s.$)((0, r.u)()));
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
            i.d(t, { q: () => s });
            var n = i(53548),
                r = i(72288);
            let s = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: i,
                        settings: s,
                        familyInvite: o,
                        freeAccess: a,
                    } = (0, r.g)(),
                    l = null == (e = s.browserInfo) ? void 0 : e.isTouch,
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
            i.d(t, { G: () => r, e: () => s });
            var n = i(53548);
            let r = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(r);
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
                r = i(28166),
                s = i(97261);
            let o = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, r.Lz],
                a = (e, t, i) => {
                    let a;
                    try {
                        a = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, n.Rj)(e, { allowedProtocols: new Set([...o, a.protocol]), baseUrl: a.href });
                    return l.isAllowed
                        ? l.url.protocol === r.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== i && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, a)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16392: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57127)), Promise.resolve().then(i.bind(i, 87396)));
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
            i.d(t, { Lz: () => n, ov: () => r });
            let n = ''.concat('yandexmusic', ':'),
                r = ''.concat(n, '//');
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => C });
            var n = i(88800),
                r = i(65724),
                s = i(84961),
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
                y = i(64543),
                v = i(63582);
            let f = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: n } = (0, y.j)();
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
                R = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: r } = (0, y.j)();
                    (0, o.useEffect)(() => {
                        if (!i || !n || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: r.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, n, null == r ? void 0 : r.pageId]);
                });
            var b = i(44230),
                _ = i(4370),
                w = i(72288),
                A = i(97956),
                k = i(56248),
                E = i(90688),
                I = i(78940);
            let x = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(96856),
                L = i.n(N);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { slam: o } = (0, w.g)(),
                    { contentRef: a } = (0, b.g)(),
                    u = (0, I.Z)(_.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(L().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(L().navigation, { [L().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, r.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(E._V, { className: L().image, src: x.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
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
            let C = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { formatMessage: p } = (0, a.A)(),
                    m = (0, o.useContext)(w.P),
                    g = null == m ? void 0 : m.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                R(h);
                let { sendRefreshEvent: y } = f(),
                    v = (0, o.useCallback)(() => {
                        (y(), (window.location.href = _.Z.main.href));
                    }, [y]),
                    { contentRef: E } = (0, b.g)();
                return g
                    ? (0, n.jsx)(S, { className: t, withBackwardControl: i, onBack: s })
                    : (0, n.jsxs)('div', {
                          className: (0, r.$)(P().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(P().navigation, { [P().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, r.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, r.$)(P().title, P().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, r.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: v,
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
            i.d(t, { B: () => s, N: () => o });
            var n = i(53548),
                r = i(39499);
            let s = (0, n.createContext)(null);
            function o() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new r.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => s });
            var n = i(53548);
            let r = (0, n.createContext)({
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
                s = () => (0, n.useContext)(r);
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
            i.d(t, { $: () => r });
            var n = i(55956);
            let r = (e) => {
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
                r = i(53548),
                s = i(46422);
            let o = (e) => {
                let t = (0, s.W)(),
                    i = (0, r.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, r.useMemo)(
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
            i.d(t, { V: () => r, d: () => n });
            let n = (e) => String(e).split(':'),
                r = (e, t) => (t ? [e, t].join(':') : e);
        },
        54020: (e, t, i) => {
            'use strict';
            let n;
            i.d(t, { A: () => a });
            let r = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                s = new Uint8Array(16),
                o = [];
            for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
            let a = function (e, t, i) {
                if (r.randomUUID && !t && !e) return r.randomUUID();
                let a =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(s);
                        }
                    )();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
                    i = i || 0;
                    for (let e = 0; e < 16; ++e) t[i + e] = a[e];
                    return t;
                }
                return (function (e, t = 0) {
                    return (
                        o[e[t + 0]] +
                        o[e[t + 1]] +
                        o[e[t + 2]] +
                        o[e[t + 3]] +
                        '-' +
                        o[e[t + 4]] +
                        o[e[t + 5]] +
                        '-' +
                        o[e[t + 6]] +
                        o[e[t + 7]] +
                        '-' +
                        o[e[t + 8]] +
                        o[e[t + 9]] +
                        '-' +
                        o[e[t + 10]] +
                        o[e[t + 11]] +
                        o[e[t + 12]] +
                        o[e[t + 13]] +
                        o[e[t + 14]] +
                        o[e[t + 15]]
                    );
                })(a);
            };
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
                r = i(65724),
                s = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(17392),
                c = i(29993),
                u = i(96817),
                d = i(52300),
                p = i(46777),
                m = i(50320),
                g = i.n(m);
            let h = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: i = !0,
                        shouldFocusOnMount: s = !0,
                        className: m,
                        withBackwardFallback: h,
                        buttonSize: y = 'xxs',
                        onBackwardClick: v,
                    } = e,
                    { formatMessage: f } = (0, a.A)(),
                    { canBack: R, canForward: b, moveBack: _, moveForward: w } = (0, p.J)(h),
                    A = (0, o.useRef)(null),
                    k = (0, c.c)((e) => {
                        if ((e.stopPropagation(), v)) return void v();
                        _();
                    }),
                    E = (0, c.c)((e) => {
                        (e.stopPropagation(), w());
                    });
                return (
                    (0, o.useEffect)(() => {
                        s && A.current && R && A.current.focus();
                    }, [R]),
                    (0, n.jsxs)('div', {
                        className: (0, r.$)(g().root, m),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, n.jsx)(u.$, {
                                    ref: A,
                                    'aria-label': f({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !R,
                                    size: y,
                                    icon: (0, n.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: k,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, n.jsx)(u.$, {
                                    'aria-label': f({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: y,
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
            i.d(t, { WebViewPage: () => ev });
            var n = i(88800),
                r = i(84961),
                s = i(53548),
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
            var y = i(17392),
                v = i(32596),
                f = i(87396),
                R = i(2058),
                b = i(29993),
                _ = i(39499),
                w = i(63449),
                A = i(57448),
                k = i(79390),
                E = i(78309),
                I = i(49950),
                x = i(96706);
            let N = async (e) => {
                if ((e.isResolved || e.isLoading || (await e.getData()), e.isLoading && (await (0, x.z7)(() => !e.isLoading)), !e.isResolved))
                    throw new _.t('Failed to load the collection');
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
                U = i(15947),
                O = i(97261),
                j = i(67174),
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
                        throw new _.t('Unsupported WebApp playback');
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
                er = i(54020),
                es = i(69991),
                eo = i(4762),
                ea = i(30683);
            let el = [es.Z, ...q.vs, ...I.cD, ...W.Y, ...Y.Nf];
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
                        appSessionId: (0, er.A)(),
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
                        let r = t.contentWindow;
                        if (!r) throw new _.t('WebApp iframe is not mounted');
                        ((this.url = new URL(e.url)),
                            (this.sdk = (0, eo.D)({
                                transport: (0, ea._)({ targetWindow: r, expectedOrigin: this.url.origin }),
                                actions: el,
                                context: this.getContext(),
                                logger: n,
                                handlers: { ...i, [es.Z.name]: this.close },
                            })));
                    } catch (e) {
                        throw (null == n || n.error('Failed to prepare WebApp session', { error: e }), e);
                    }
                }
            }
            var ep = i(63688),
                em = i.n(ep);
            let eg = (0, r.PA)((e) => {
                let { documentUrl: t, onClose: i } = e,
                    r = (0, s.useRef)(null),
                    { isPending: a, isRejected: l } = ((e) => {
                        let { frameRef: t, documentUrl: i, onClose: n } = e,
                            [r, a] = (0, s.useState)(ei.G.PENDING),
                            l = (() => {
                                let e = ((e) => {
                                        let t = (0, F.e)(),
                                            i = (0, b.c)(() => {
                                                if (!t) throw new _.t('Player is not ready');
                                                return t;
                                            }),
                                            { paywall: n } = (0, d.g)(),
                                            r = (0, z.P)(),
                                            o = (0, B.N)(),
                                            { shouldShowBuySubscriptionModal: a, showBuySubscriptionModal: l } = (0, K.q)(),
                                            c = (0, b.c)((e) => {
                                                if (r()) throw new _.t('Playback is unavailable during an advertisement');
                                                if (e !== V.Y.TRAILER) {
                                                    if (a) throw (l(), new _.t('A subscription is required for playback'));
                                                    if (o) throw (n.modal.open(), new _.t('A subscription is required for playback'));
                                                }
                                            });
                                        return (0, s.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { getSonata: t, checkPlaybackAccess: i, from: n } = e;
                                                    return {
                                                        ...((e) => {
                                                            let t,
                                                                i = new Map(),
                                                                n = Promise.resolve(),
                                                                r = async (n, r) => {
                                                                    var s;
                                                                    let o = e();
                                                                    o !== t && (i.clear(), (t = o));
                                                                    let a = Z(n),
                                                                        l = o.getState(a).playerState.exponentVolume.value;
                                                                    if ((r && 0 === l) || (!r && 0 !== l)) return;
                                                                    r && i.set(n, l);
                                                                    let c = o.getState(H.V.TRAILER).playerState.exponentVolume.value,
                                                                        u = r ? 0 : null != (s = i.get(n)) ? s : 1;
                                                                    (await o.setExponentVolume(u, a), n === V.Y.MAIN && (await o.setExponentVolume(c, H.V.TRAILER)));
                                                                },
                                                                s = (e, t) => {
                                                                    let i = () => r(e, t),
                                                                        s = n.then(i, i);
                                                                    return ((n = s), s);
                                                                };
                                                            return {
                                                                [q.ho.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return s(t, !0);
                                                                },
                                                                [q.oq.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return s(t, !1);
                                                                },
                                                            };
                                                        })(t),
                                                        [q.q5.name]: async (e) => {
                                                            let { playback: r, queue: s } = e,
                                                                o = t();
                                                            i(r);
                                                            let a = s[0];
                                                            if (!a) throw new _.t('WebApp playback queue must not be empty');
                                                            let l = Z(r),
                                                                c = r === V.Y.TRAILER ? G.R.SmartPreview : G.R.Unknown;
                                                            (await o.setContext(
                                                                {
                                                                    contextData: { type: $.K.Various, meta: a, from: n },
                                                                    entitiesData: s.map((e) => ({ type: c, meta: e })),
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
                                            r = (0, w.n)(),
                                            o = (0, b.c)(() => {
                                                let e = t.account.data.uid;
                                                if (!t.isAuthorized || void 0 === e) throw new _.t('Authorization is required for collection actions');
                                                return e;
                                            }),
                                            a = (0, b.c)(() => {
                                                if (r) throw (i.modal.open(), new _.t('A subscription is required to access the collection'));
                                            });
                                        return (0, s.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { library: t, playlistResource: i, getUserId: n, checkCollectionAccess: r } = e,
                                                        s = Promise.resolve(),
                                                        o = async (e, s) => {
                                                            r();
                                                            let o = n();
                                                            await N(t);
                                                            let a = await D(e, i),
                                                                l = { entityType: e.entityType, entityId: String(a.entityId) },
                                                                c = T(t, l);
                                                            if (void 0 === s || (c.state === E.U.LIKE) === s) return c;
                                                            if ((await M(t, e.entityType, { ...a, userId: o })) !== k.f.OK)
                                                                throw new _.t('Failed to update the collection');
                                                            return (await N(t), T(t, l));
                                                        },
                                                        a = (e, t) => {
                                                            let i = () => o(e, t),
                                                                n = s.then(i, i);
                                                            return ((s = n), n);
                                                        };
                                                    return { [I.Qc.name]: (e) => a(e, !0), [I.LZ.name]: (e) => a(e, !1), [I.X7.name]: (e) => a(e) };
                                                })({ library: e, playlistResource: n, getUserId: o, checkCollectionAccess: a }),
                                            [e, n, o, a],
                                        );
                                    })(),
                                    i = (() => {
                                        let e = (0, o.useRouter)(),
                                            t = (0, b.c)((t) => {
                                                let { weblink: i } = t,
                                                    { href: n, target: r } = (0, j.u)(i),
                                                    s = (0, U.U)(n, window.location.href, r);
                                                s &&
                                                    (s.type === O.I.EXTERNAL || s.type === O.I.DEEPLINK
                                                        ? ((e) => {
                                                              let { target: t, rel: i } = (0, j.u)(e, { options: { isExternalLink: !0 } });
                                                              window.open(e, t, i);
                                                          })(s.href)
                                                        : e.push(s.href));
                                            });
                                        return (0, s.useMemo)(() => ({ [W.r.name]: t }), [t]);
                                    })(),
                                    n = (() => {
                                        let e = (0, J.N)().get(X.QG),
                                            t =
                                                ((0, Q.U)(),
                                                (0, b.c)(async (e) => {
                                                    let { data: t, title: i } = e,
                                                        n = ((e) => {
                                                            let t = 'data:image/png;base64,',
                                                                i = atob(e.startsWith(t) ? e.slice(t.length) : e),
                                                                n = Uint8Array.from(i, (e) => e.charCodeAt(0));
                                                            if ([137, 80, 78, 71, 13, 10, 26, 10].every((e, t) => n[t] === e))
                                                                return new Blob([n], { type: 'image/png' });
                                                            throw Error('WebApp share data must contain a PNG image');
                                                        })(t),
                                                        r = 'ya-music-'.concat(Date.now(), '.png'),
                                                        s = new File([n], r, { type: n.type });
                                                    await (0, ee.r)(s, r);
                                                })),
                                            i = (0, b.c)(() => {
                                                e.redirectToAuthorizationUrl();
                                            });
                                        return (0, s.useMemo)(() => ({ [Y.ZR.name]: t, [Y.P$.name]: i }), [i, t]);
                                    })();
                                return (0, s.useMemo)(() => ({ ...e, ...t, ...i, ...n }), [e, t, i, n]);
                            })(),
                            c = (0, Q.U)(),
                            { locale: u } = (0, R.A)(),
                            { theme: p } = (0, et.W)(),
                            m = (0, b.c)(() => ({ locale: u, theme: p })),
                            g = (0, b.c)(n);
                        return (
                            (0, s.useEffect)(() => {
                                let e,
                                    n = t.current;
                                if (!n) return;
                                let r = !0;
                                return (
                                    a(ei.G.PENDING),
                                    (async () => {
                                        try {
                                            ((e = new ed({ iframe: n, url: i, handlers: l, onClose: g, logger: c, ...m() })), await e.start(), r && a(ei.G.RESOLVE));
                                        } catch (e) {
                                            r && a(ei.G.REJECT);
                                        }
                                    })(),
                                    () => {
                                        ((r = !1), null == e || e.dispose());
                                    }
                                );
                            }, [g, i, t, m, l, c]),
                            { isPending: r === ei.G.PENDING, isRejected: r === ei.G.REJECT }
                        );
                    })({ frameRef: r, documentUrl: t, onClose: i });
                return (0, n.jsxs)('div', {
                    className: em().root,
                    'aria-busy': a,
                    children: [
                        (0, n.jsx)('iframe', {
                            ref: r,
                            className: em().frame,
                            title: t,
                            referrerPolicy: 'origin',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read; clipboard-write',
                            hidden: l,
                            'data-test-id': y.Xk.webView.WEB_VIEW_IFRAME,
                        }),
                        a && (0, n.jsx)(f.MainSuspenseLoader, { style: { position: 'absolute' } }),
                        l && (0, n.jsx)(v.SomethingWentWrong, { onBack: i }),
                    ],
                });
            });
            var eh = i(46590),
                ey = i.n(eh);
            let ev = (0, r.PA)((e) => {
                var t;
                let { url: i } = e,
                    { experiments: r } = (0, d.g)(),
                    y = r.checkExperiment(p.z.WebNextWebView, 'on'),
                    v = (0, o.usePathname)(),
                    f = (0, o.useSearchParams)(),
                    R =
                        null != i
                            ? i
                            : null ==
                                (t = ((e) => {
                                    if (!e) return null;
                                    let t = (0, g.Rj)(e, { allowedProtocols: h });
                                    return t.isAllowed && 'https://music.yandex.ru' === t.url.origin ? t.url : null;
                                })(f.get(m.K.URL)))
                              ? void 0
                              : t.href,
                    b = (0, l.W)(),
                    _ = (0, s.useRef)(null);
                if (null === _.current && ((_.current = c.Z.main.href), b.length >= 2)) {
                    let e = b.state,
                        t = (null == e ? void 0 : e.data.href.split('?')[0]) === v ? e.prev : e,
                        i = null == t ? void 0 : t.data.href;
                    i && i.split('?')[0] !== v && (_.current = i);
                }
                let w = (0, u.Z)(_.current),
                    A = (0, a.L)(() => ((y && R) || (0, o.redirect)(c.Z.main.href), (0, n.jsx)(eg, { documentUrl: R, onClose: w }, R)));
                return (0, n.jsx)('main', { className: ey().root, children: A });
            });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var n = i(4086),
                r = i(41928);
            let s = () => {
                let e = (0, r.N)(),
                    t = e.get(n.$I),
                    i = e.get(n.EN),
                    s = e.get(n.N1),
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
                    y = e.get(n.wH),
                    v = e.get(n.ok),
                    f = e.get(n.X8),
                    R = e.get(n.yq),
                    b = e.get(n.NN),
                    _ = e.get(n.qN),
                    w = e.get(n.ro),
                    A = e.get(n.nM),
                    k = e.get(n.Ut),
                    E = e.get(n.K1),
                    I = e.get(n.eu),
                    x = e.get(n.SD),
                    N = e.get(n.aE),
                    L = e.get(n.ki),
                    S = e.get(n.c9),
                    T = e.get(n.en),
                    P = e.get(n.jQ),
                    C = e.get(n.cZ),
                    D = e.get(n.Zl),
                    M = e.get(n.CN),
                    W = e.get(n.P1),
                    U = e.get(n.zj),
                    O = e.get(n.re),
                    j = e.get(n.JM),
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
                    disclaimersResource: s,
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
                    redAlertResource: y,
                    rotorResource: v,
                    waveResource: f,
                    searchResource: R,
                    searchPlaylistResource: b,
                    playlistResource: _,
                    playlistsResource: w,
                    pinResource: A,
                    metatagsResource: k,
                    tagResource: E,
                    feedResource: I,
                    wizard3Resource: x,
                    pinsResource: N,
                    musicHistoryResource: L,
                    dynamicPagesResource: S,
                    chartResource: T,
                    clipsResource: P,
                    lyricViewsResource: C,
                    nonMusicResource: D,
                    donationResource: M,
                    loaderResource: W,
                    lumenResource: U,
                    prefixlessResource: O,
                    streamsResource: j,
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
            i.d(t, { n: () => s });
            var n = i(72288),
                r = i(97956);
            let s = () => {
                var e, t, i;
                let { user: s, experiments: o, settings: a } = (0, n.g)();
                return (
                    !o.checkExperiment(r.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = a.browserInfo) ? void 0 : e.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (i = o.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (t = i.value) ? void 0 : t.closeCollection) === 'on'
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
                r = i(41928),
                s = i(44084);
            let o = new WeakMap(),
                a = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
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
                    })((0, r.N)().get(n.Zf));
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
            i.d(t, { D: () => r, W: () => s });
            var n = i(53548);
            let r = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, n.useContext)(r);
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
                r = i(29993),
                s = i(67174),
                o = i(15947),
                a = i(97261);
            let l = (e) => {
                let t = (0, n.useRouter)(),
                    { href: i, target: l } = (0, s.u)(e);
                return (0, r.c)((e) => {
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
                                  let { target: t, rel: i } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, i);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        79070: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var r = n.useReturnValue;
        },
        79390: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { f: () => n }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(n || (n = {})));
        },
        87396: (e, t, i) => {
            'use strict';
            i.d(t, { MainSuspenseLoader: () => a });
            var n = i(88800),
                r = i(52300),
                s = i(60932),
                o = i.n(s);
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
                    children: (0, n.jsx)(r.I, {
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
        (e.O(0, [4700, 7908, 1147, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 7362, 4732, 9087, 3979, 1928, 9124, 763, 2670, 7358], () => e((e.s = 16392))),
            (_N_E = e.O()));
    },
]);
