(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2307],
    {
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => n });
            var i = r(88800),
                s = r(37770);
            let n = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: n,
                    centered: o,
                    withInfo: a,
                    count: l = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: _,
                } = e;
                return Array.from(Array(l).keys()).map((e) =>
                    (0, i.jsx)(
                        s.V,
                        { isActive: t, linesCount: u, className: r, round: n, centered: o, withInfo: a, withSubcover: _, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4086: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => eu,
                $5: () => em,
                $8: () => j,
                $I: () => h,
                $Y: () => eL,
                A4: () => g,
                CN: () => en,
                CR: () => m,
                DP: () => P,
                DT: () => eb,
                DV: () => ep,
                E: () => f,
                EN: () => i,
                Ez: () => eg,
                GB: () => p,
                GV: () => R,
                Hm: () => l,
                JM: () => el,
                K1: () => V,
                LC: () => eS,
                Lb: () => y,
                Lk: () => ec,
                N1: () => ev,
                NN: () => X,
                O9: () => M,
                OP: () => _,
                Oo: () => I,
                P0: () => A,
                P1: () => eo,
                PL: () => ew,
                QG: () => D,
                RD: () => eK,
                RG: () => eM,
                S1: () => n,
                SD: () => B,
                SX: () => ef,
                TD: () => ey,
                TK: () => a,
                Tq: () => ek,
                U2: () => b,
                UB: () => eI,
                Ut: () => z,
                V3: () => x,
                V4: () => C,
                VR: () => eG,
                W5: () => eR,
                WA: () => J,
                X4: () => L,
                X8: () => K,
                Xc: () => er,
                Zf: () => s,
                Zi: () => eP,
                Zl: () => es,
                _1: () => v,
                aE: () => Z,
                by: () => eT,
                c9: () => et,
                cZ: () => ei,
                dA: () => eO,
                dh: () => eN,
                en: () => Q,
                eu: () => $,
                ff: () => ex,
                gd: () => e_,
                gu: () => c,
                iP: () => eD,
                jQ: () => ee,
                ki: () => q,
                mD: () => o,
                mr: () => d,
                nM: () => Y,
                ni: () => eH,
                ok: () => H,
                oo: () => w,
                qN: () => W,
                qT: () => eh,
                qt: () => N,
                re: () => ea,
                ro: () => U,
                s_: () => eA,
                sv: () => ed,
                tz: () => S,
                u2: () => eE,
                uM: () => eC,
                vH: () => O,
                vg: () => ej,
                wH: () => G,
                wK: () => E,
                xF: () => T,
                y$: () => u,
                yq: () => F,
                zj: () => k,
            });
            let i = 'AfterTrackResource',
                s = 'Logger',
                n = 'TechMetricsLogger',
                o = 'OtelSdk',
                a = 'ModelActionsLogger',
                l = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                _ = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                m = 'ResourceBeaconClient',
                h = 'AccountResource',
                p = 'OutageNoticeResource',
                v = 'UsersResource',
                x = 'LandingResource',
                E = 'LandingBlocksResource',
                y = 'Landing3Resource',
                S = 'AlbumResource',
                f = 'SlidesResource',
                N = 'MusicExternalApiPrefixUrl',
                R = 'MusicResourceFactory',
                C = 'PublicConfig',
                T = 'ServerConfig',
                A = 'TokenConfig',
                w = 'Storage',
                P = 'CookieStorage',
                b = 'LocalStorage',
                j = 'LibraryResource',
                k = 'LumenResource',
                I = 'TracksResource',
                O = 'SessionStorage',
                L = 'TopResource',
                M = 'ArtistsResource',
                D = 'Authorization',
                G = 'RedAlertResource',
                H = 'RotorResource',
                K = 'WaveResource',
                F = 'SearchResource',
                X = 'SearchPlaylistResource',
                W = 'PlaylistResource',
                U = 'PlaylistsResource',
                Y = 'PinResource',
                z = 'MetatagsResource',
                V = 'TagResource',
                $ = 'FeedResource',
                B = 'Wizard3Resource',
                J = 'CONTAINER_USER_ID_TOKEN',
                Z = 'PinsResource',
                q = 'MusicHistoryResource',
                Q = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                er = 'CONTAINER_I18N_STORAGE',
                ei = 'LyricViewsResource',
                es = 'NonMusicResource',
                en = 'DonationResource',
                eo = 'LoaderResource',
                ea = 'PrefixlessResource',
                el = 'StreamsResource',
                ec = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                e_ = 'AdsResource',
                eg = 'PersonalResource',
                em = 'AvailabilityResource',
                eh = 'GetFileInfoResource',
                ep = 'ResourcesFileInfoResource',
                ev = 'DisclaimersResource',
                ex = 'DisclaimerDictionary',
                eE = 'FamilyResource',
                ey = 'ChildrenLandingResource',
                eS = 'TelemetryResource',
                ef = 'Env',
                eN = 'PromoResource',
                eR = 'RumResource',
                eC = 'AcqOffers',
                eT = 'Ynison',
                eA = 'YnisonNewConnector',
                ew = 'LabelsResource',
                eP = 'RequestExecutionContext',
                eb = 'ConcertsResource',
                ej = 'YaMetrikaController',
                ek = 'RumTransport',
                eI = 'YaMetrikaTransport',
                eO = 'WordsResource',
                eL = 'WheelResource',
                eM = 'MocksInitializer',
                eD = 'CacheWorker',
                eG = 'NetworkMonitorFactory',
                eH = 'SkeletonSdk',
                eK = 'TagSandbox';
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => s });
            var i = r(67174);
            let s = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7420: (e) => {
            e.exports = {
                root: 'MixesPage_root__mp_Eq',
                items: 'MixesPage_items__dKLen',
                scrollableContent: 'MixesPage_scrollableContent__6xhZh',
                scrollableContainer: 'MixesPage_scrollableContainer__S0b76',
                container: 'MixesPage_container__1b_3H',
                shimmerContainer: 'MixesPage_shimmerContainer__su53n',
                footer: 'MixesPage_footer__jCcAN',
            };
        },
        7555: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                s = r(53548),
                n = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (s && (s += ' '), (s += i));
                                            else for (r in t) t[r] && (s && (s += ' '), (s += r));
                                        return s;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => s }));
                        let s = i;
                    },
                    2095: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var s = null;
                            if ((void 0 !== i && (s = '' + i), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: r, type: e, key: s, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6009: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let s = r(4377),
                            n = r(5881),
                            o = r(810),
                            a = i(r(2095)),
                            l = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: o, className: l, withShadow: c, style: u, ...d } = e;
                                return (0, s.jsx)('div', {
                                    className: (0, n.clsx)(
                                        a.default.root,
                                        a.default['root_radius_'.concat(r)],
                                        a.default['root_variant_'.concat(i)],
                                        { [a.default.root_withShadow]: c },
                                        l,
                                    ),
                                    style: u,
                                    ref: t,
                                    ...d,
                                    children: o,
                                });
                            };
                        t.Paper = (0, o.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                o = {};
            function a(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'U', { value: !0 }), (l.X = void 0));
                var e = a(6009);
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
        9590: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
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
        13950: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => B }));
            var i = r(88800),
                s = r(53548),
                n = r(58390),
                o = r(34961),
                a = r(53892),
                l = r(5120),
                c = r(89916);
            let u = (e) => ({ tag: e.tag, title: e.title, subGenres: (0, l.wg)((e.leaves || []).map((e) => ({ tag: e.tag, title: e.title }))) }),
                d = l.gK.model('GenreListItemSubGenreModel', { tag: l.gK.string, title: l.gK.string }),
                _ = l.gK.model('GenreListItemModel', { tag: l.gK.string, title: l.gK.string, subGenres: l.gK.array(d) });
            var g = r(74773),
                m = r(59497);
            let h = l.gK
                    .compose(
                        l.gK.model('GenresPageModel', { title: l.gK.maybeNull(l.gK.string), items: l.gK.array(_), errorStatusCode: l.gK.maybeNull(l.gK.number) }),
                        m.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === g.G.PENDING;
                        },
                        get isNotFound() {
                            let t = e.isResolved && 0 === e.items.length;
                            return e.errorStatusCode === c.X1.NOT_FOUND || t;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { landing3Resource: r, modelActionsLogger: i } = (0, l._$)(e);
                            if (e.loadingState !== g.G.PENDING)
                                try {
                                    e.loadingState = g.G.PENDING;
                                    let i = (yield r.getMetatags({})).trees.find((e) => e.navigationId === t);
                                    if (!i) {
                                        e.errorStatusCode = c.X1.NOT_FOUND;
                                        return;
                                    }
                                    ((e.title = i.title), (e.items = (0, l.wg)(i.leaves.map(u))), e.loadingState !== g.G.IDLE && (e.loadingState = g.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t),
                                        t instanceof c.GX &&
                                            (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = c.X1.NOT_FOUND),
                                        e.loadingState !== g.G.IDLE && (e.loadingState = g.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = g.G.IDLE), (e.title = null), (e.items = (0, l.wg)([])), (e.errorStatusCode = null));
                        },
                    })),
                p = { title: null, loadingState: g.G.IDLE, items: [] },
                { pageStoreProvider: v } = (0, o.W)({ createStore: (e) => h.create(p, e), patchKey: a.n.GENRES });
            var x = r(84961),
                E = r(66719),
                y = r(29504),
                S = r(32596),
                f = r(69630),
                N = r(91292),
                R = r(25005),
                C = r.n(R);
            let T = (0, x.PA)((e) => {
                let { tag: t, title: r, subGenres: s } = e;
                return (0, i.jsxs)('div', {
                    className: C().root,
                    children: [
                        (0, i.jsx)(N.N, {
                            className: C().link,
                            href: '/genre/'.concat(t),
                            children: (0, i.jsx)(y.DZ, { variant: 'h2', size: 'm', lineClamp: 1, className: C().linkTitle, children: r }),
                        }),
                        s.length > 0 &&
                            (0, i.jsx)('div', {
                                className: C().list,
                                children: s.map((e) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: C().item,
                                            children: (0, i.jsx)(N.N, {
                                                className: C().link,
                                                href: '/genre/'.concat(e.tag),
                                                children: (0, i.jsx)(y.HL, { variant: 'span', size: 'l', lineClamp: 1, className: C().linkTitle, children: e.title }),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
            var A = r(46422),
                w = r(44230),
                P = r(37670),
                b = r(93317),
                j = r(65938),
                k = r.n(j);
            let I = (0, x.PA)((e) => {
                let { navigationId: t } = e,
                    r = (0, o.s)(a.n.GENRES),
                    { contentScrollRef: l, setContentScrollRef: c } = (0, w.g)(),
                    u = (0, A.W)();
                return (r.isNotFound && (0, n.notFound)(), (0, P.J)(r.isResolved), t && r.isNeededToLoad && (0, s.use)(r.getData(t)), r.isRejected)
                    ? (0, i.jsx)(S.SomethingWentWrong, {})
                    : (0, i.jsxs)(f.h, {
                          scrollElement: l,
                          outerTitle: r.title,
                          children: [
                              (0, i.jsx)(b.Y, {
                                  variant: b.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: u.canBack,
                                  children: (0, i.jsx)(y.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: r.title }),
                              }),
                              (0, i.jsx)(E.N, {
                                  className: k().root,
                                  containerClassName: k().content,
                                  ref: c,
                                  children: (0, i.jsx)('div', {
                                      className: k().list,
                                      children: r.items.map((e) => (0, i.jsx)(T, { tag: e.tag, title: e.title, subGenres: e.subGenres }, e.tag)),
                                  }),
                              }),
                          ],
                      });
            });
            var O = r(19994);
            let L = () => {
                    let e = (0, A.W)(),
                        t = Array.from({ length: 18 }, (e, t) => {
                            let r = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, i.jsx)(O.W, { className: k().genreShimmer, radius: 'l' }, r);
                        });
                    return (0, i.jsxs)(f.h, {
                        scrollElement: null,
                        children: [
                            (0, i.jsx)(b.Y, {
                                variant: b.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, i.jsx)(O.W, { className: k().shimmerTitle, radius: 'l' }),
                            }),
                            (0, i.jsx)(E.N, { className: k().root, containerClassName: k().content, children: (0, i.jsx)('div', { className: k().list, children: t }) }),
                        ],
                    });
                },
                M = r(65208).Y,
                D = { loadingState: g.G.IDLE, items: [] },
                { pageStoreProvider: G } = (0, o.W)({ createStore: (e) => M.create(D, e), patchKey: a.n.MIXES });
            var H = r(48704),
                K = r(7420),
                F = r.n(K),
                X = r(2058),
                W = r(88969),
                U = r(86790),
                Y = r(60266);
            let z = (e) => {
                    let { children: t } = e,
                        { contentScrollRef: r, setContentScrollRef: s } = (0, w.g)(),
                        n = (0, A.W)(),
                        { formatMessage: o } = (0, X.A)();
                    return (0, i.jsx)(f.h, {
                        scrollElement: r,
                        outerTitle: o({ id: 'entity-names.mixes' }),
                        children: (0, i.jsxs)('div', {
                            className: F().root,
                            children: [
                                (0, i.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: n.canBack,
                                    children: (0, i.jsx)(y.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, i.jsx)(W.A, { id: 'entity-names.mixes' }),
                                    }),
                                }),
                                (0, i.jsx)(E.N, {
                                    ref: s,
                                    className: F().scrollableContent,
                                    containerClassName: F().scrollableContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: F().container,
                                        children: [t, (0, i.jsx)(Y.A, { children: (0, i.jsx)(U.w, { className: F().footer }) })],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = (0, x.PA)(() => {
                    let e = (0, o.s)(a.n.MIXES);
                    return (e.isNotFound && (0, n.notFound)(), (0, P.J)(e.isResolved), e.isNeededToLoad && (0, s.use)(e.getMixes(!0)), e.isRejected)
                        ? (0, i.jsx)(S.SomethingWentWrong, {})
                        : (0, i.jsx)(z, {
                              children: (0, i.jsx)(H.n, { isShimmerVisible: e.isLoading, isShimmerActive: !0, mixes: e.items, shimmerCount: 10, className: F().items }),
                          });
                }),
                $ = () => (0, i.jsx)(z, { children: (0, i.jsx)(H.n, { isShimmerVisible: !0, isShimmerActive: !0, mixes: [], shimmerCount: 10, className: F().items }) }),
                B = () => {
                    let e = (0, n.useSearchParams)().get('navigationId');
                    return e
                        ? (0, i.jsx)(v, { children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)(L, {}), children: (0, i.jsx)(I, { navigationId: e }) }) })
                        : (0, i.jsx)(G, { children: (0, i.jsx)(s.Suspense, { fallback: (0, i.jsx)($, {}), children: (0, i.jsx)(V, {}) }) });
                };
        },
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var i = r(35412),
                s = r(28166),
                n = r(97261);
            let o = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, s.Lz],
                a = (e, t, r) => {
                    let a;
                    try {
                        a = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, i.Rj)(e, { allowedProtocols: new Set([...o, a.protocol]), baseUrl: a.href });
                    return l.isAllowed
                        ? l.url.protocol === s.Lz
                            ? { type: n.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, a)
                              ? { type: n.I.INTERNAL, href: e }
                              : { type: n.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var i = r(53647),
                s = r(4086),
                n = r(41928),
                o = r(65523),
                a = r(57448);
            let l = () => {
                let e = (0, n.N)(),
                    t = e.get(s.oo),
                    r = e.get(s.QG),
                    l = e.get(s.uM),
                    c = e.get(s.ff),
                    u = e.get(s.V4),
                    d = e.get(s.P0),
                    _ = (0, a.f)(),
                    g = (0, o.U)(),
                    m = (0, n.N)().get(s.TK),
                    h = e.get(s.ni),
                    p = e.get(s.RD),
                    v = new i.si(),
                    x = new i.fW();
                return {
                    ..._,
                    acqOffers: l,
                    disclaimerDictionary: c,
                    logger: g,
                    modelActionsLogger: m,
                    localStorage: v,
                    sessionStorage: x,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: h,
                    tagSandbox: p,
                };
            };
        },
        18344: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { R: () => i }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(i || (i = {})));
        },
        21127: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            var i = r(5120),
                s = r(18344);
            let n = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(s.R)),
            });
        },
        25005: (e) => {
            e.exports = { root: 'Genre_root__80dlk', link: 'Genre_link__Wewaq', linkTitle: 'Genre_linkTitle__ORAsw', list: 'Genre_list__C2Pxf' };
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => i, ov: () => s });
            let i = ''.concat('yandexmusic', ':'),
                s = ''.concat(i, '//');
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => I });
            var i = r(88800),
                s = r(65724),
                n = r(84961),
                o = r(53548),
                a = r(2058),
                l = r(88969);
            r(30282);
            var c = r(96817),
                u = r(52300),
                d = r(29504),
                _ = r(87999),
                g = r(47149),
                m = r(84423),
                h = r(89846),
                p = r(64543),
                v = r(63582);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: i } = (0, p.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !r || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, g.bv)(t, e);
                        }, [t, r, null == i ? void 0 : i.pageId]),
                    };
                }),
                E = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, p.j)();
                    (0, o.useEffect)(() => {
                        if (!r || !i || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: s.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, g.z5)(r, t);
                    }, [r, e, i, null == s ? void 0 : s.pageId]);
                });
            var y = r(44230),
                S = r(4370),
                f = r(72288),
                N = r(97956),
                R = r(56248),
                C = r(90688),
                T = r(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var w = r(96856),
                P = r.n(w);
            let b = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: n } = e,
                    { slam: o } = (0, f.g)(),
                    { contentRef: a } = (0, y.g)(),
                    u = (0, T.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(P().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(R.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(P().content, { [P().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(C._V, { className: P().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: P().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: P().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: P().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: P().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: P().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = r(9184),
                k = r.n(j);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: n } = e,
                    { formatMessage: _ } = (0, a.A)(),
                    g = (0, o.useContext)(f.P),
                    m = null == g ? void 0 : g.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(h);
                let { sendRefreshEvent: p } = x(),
                    v = (0, o.useCallback)(() => {
                        (p(), (window.location.href = S.Z.main.href));
                    }, [p]),
                    { contentRef: C } = (0, y.g)();
                return m
                    ? (0, i.jsx)(b, { className: t, withBackwardControl: r, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, s.$)(k().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(R.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(k().navigation, { [k().navigation_desktop]: !C }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, s.$)(k().content, { [k().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, s.$)(k().title, k().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, s.$)(k().text, k().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: v,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => v });
            var i = r(88800),
                s = r(84961),
                n = r(58390),
                o = r(53548),
                a = r(35412),
                l = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                _ = r(16818);
            (0, s.eO)(!1);
            let g = (0, o.createContext)(null),
                m = (e) => {
                    let { children: t, store: r, storeKey: s } = e,
                        n = (0, o.useMemo)(() => ({ store: r, storeKey: s }), [r, s]);
                    return (0, i.jsx)(g.Provider, { value: n, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: s } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, a.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                        s = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: o } = e,
                                a = (0, _.Y)(),
                                l = (0, d.g)(),
                                { store: g, patchesRef: p } = (0, u.m)({
                                    createStore: () => t({ ...a, rootStore: l }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(h, { nonce: o, patchKey: r, patchesRef: p }), (0, i.jsx)(m, { store: g, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, o.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        36326: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 13950));
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(53548);
            r(30282);
            var s = r(58390);
            let n = (e) => {
                let t = (0, s.usePathname)(),
                    [r, n] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, r, t]));
            };
        },
        37770: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var i = r(88800),
                s = r(65724),
                n = r(17392),
                o = r(19994),
                a = r(9590),
                l = r.n(a);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: _ = !0,
                    linesCount: g = 3,
                    withSubcover: m,
                    radius: h = 'l',
                } = e;
                return (0, i.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(l().root, r),
                    'data-test-id': n.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        m && (0, i.jsx)(o.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, i.jsx)(o.W, { isActive: t, className: (0, s.$)(l().cover, a, { [l().cover_round]: c, [l().cover_withSubcover]: m }), radius: h }),
                        _ &&
                            (0, i.jsx)('div', {
                                className: (0, s.$)(l().infoContainer, l()['content_linesCount_'.concat(g)], { [l().infoContainer_centered]: d }),
                                children: (0, i.jsx)(o.W, { isActive: t, className: (0, s.$)(l().title, { [l().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        40989: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        41928: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n, N: () => o });
            var i = r(53548),
                s = r(39499);
            let n = (0, i.createContext)(null);
            function o() {
                let e = (0, i.useContext)(n);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        48704: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => m });
            var i = r(88800),
                s = r(65724),
                n = r(84961),
                o = r(53548),
                a = r(88969),
                l = r(17392),
                c = r(29504),
                u = r(84273),
                d = r(1698),
                _ = r(70662),
                g = r.n(_);
            let m = (0, n.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: r, withTitle: n, mixes: _, shimmerCount: m = 5, className: h } = e,
                    p = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, i.jsx)(d.e, { isActive: r, round: !1, centered: !1, withInfo: !1, count: m })
                                : _.map((e) => (0, i.jsx)(u.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [r, t, _, m],
                    );
                return (0, i.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        n &&
                            (0, i.jsx)(c.DZ, {
                                className: g().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, i.jsx)(a.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, i.jsx)('div', { className: (0, s.$)(g().mixesGrid, h), children: p }),
                    ],
                });
            });
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => n, si: () => a, fW: () => _, MJ: () => d, jU: () => m, Bx: () => g });
            var i = r(77451);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class n {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let o = (0, i.Jt)(e);
                        if (t) {
                            var r, n;
                            return null != (n = null == (r = s(o)) ? void 0 : r.value) ? n : null;
                        }
                        return null != o ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let n = s ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, n, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
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
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = o('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let n = r.getItem(e) || void 0;
                        if (!t) return n;
                        let o = s(n);
                        if (!o) return null;
                        let a = null != (i = null == o ? void 0 : o.value) ? i : null;
                        if ((null == o ? void 0 : o.expires) && Date.now() > new Date(o.expires).getTime()) return (this.remove(e), null);
                        return a;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let i = o('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
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
            var l = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, l._)(this, 'name', 'Storage Exception'),
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
                    ((0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = o('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, n;
                        let o = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (n = null == (r = s(o)) ? void 0 : r.value) ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = o('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
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
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(r);
                        null != s && e.set(r, s, i);
                    });
            }
            function m(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
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
            r.d(t, { f: () => n });
            var i = r(4086),
                s = r(41928);
            let n = () => {
                let e = (0, s.N)(),
                    t = e.get(i.$I),
                    r = e.get(i.EN),
                    n = e.get(i.N1),
                    o = e.get(i._1),
                    a = e.get(i.V3),
                    l = e.get(i.Lb),
                    c = e.get(i.wK),
                    u = e.get(i.tz),
                    d = e.get(i.$8),
                    _ = e.get(i.Oo),
                    g = e.get(i.X4),
                    m = e.get(i.O9),
                    h = e.get(i.E),
                    p = e.get(i.wH),
                    v = e.get(i.ok),
                    x = e.get(i.X8),
                    E = e.get(i.yq),
                    y = e.get(i.NN),
                    S = e.get(i.qN),
                    f = e.get(i.ro),
                    N = e.get(i.nM),
                    R = e.get(i.Ut),
                    C = e.get(i.K1),
                    T = e.get(i.eu),
                    A = e.get(i.SD),
                    w = e.get(i.aE),
                    P = e.get(i.ki),
                    b = e.get(i.c9),
                    j = e.get(i.en),
                    k = e.get(i.jQ),
                    I = e.get(i.cZ),
                    O = e.get(i.Zl),
                    L = e.get(i.CN),
                    M = e.get(i.P1),
                    D = e.get(i.zj),
                    G = e.get(i.re),
                    H = e.get(i.JM),
                    K = e.get(i.Lk),
                    F = e.get(i.$$),
                    X = e.get(i.sv),
                    W = e.get(i.gd),
                    U = e.get(i.Ez),
                    Y = e.get(i.u2),
                    z = e.get(i.TD),
                    V = e.get(i.dh),
                    $ = e.get(i.LC),
                    B = e.get(i.PL),
                    J = e.get(i.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: n,
                    usersResource: o,
                    landingResource: a,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: g,
                    artistsResource: m,
                    slidesResource: h,
                    redAlertResource: p,
                    rotorResource: v,
                    waveResource: x,
                    searchResource: E,
                    searchPlaylistResource: y,
                    playlistResource: S,
                    playlistsResource: f,
                    pinResource: N,
                    metatagsResource: R,
                    tagResource: C,
                    feedResource: T,
                    wizard3Resource: A,
                    pinsResource: w,
                    musicHistoryResource: P,
                    dynamicPagesResource: b,
                    chartResource: j,
                    clipsResource: k,
                    lyricViewsResource: I,
                    nonMusicResource: O,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: G,
                    streamsResource: H,
                    filtersResource: K,
                    ugcResource: F,
                    collectionResource: X,
                    adsResource: W,
                    personalResource: U,
                    familyResource: Y,
                    childrenLandingResource: z,
                    promoResource: V,
                    telemetryResource: $,
                    labelsResource: B,
                    concertsResource: J,
                    wordsResource: e.get(i.dA),
                    wheelResource: e.get(i.$Y),
                };
            };
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => n });
            var i = r(5120),
                s = r(74773);
            let n = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(s.G)) }).views((e) => ({
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
            r.d(t, { A: () => o });
            var i = r(88800);
            r(30282);
            var s = r(11006),
                n = r.n(s);
            let o = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => s });
            var i = r(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: s, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : s();
            };
        },
        65208: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => u });
            var i = r(5120),
                s = r(89916),
                n = r(82212),
                o = r(21127),
                a = r(74773),
                l = r(59497),
                c = r(99159);
            let u = i.gK
                .compose(i.gK.model('Mixes', { items: i.gK.array(o.f), errorStatusCode: i.gK.maybeNull(i.gK.number) }), l.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === a.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === s.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: r, modelActionsLogger: o } = (0, i._$)(e);
                        if (e.loadingState !== a.G.PENDING)
                            try {
                                e.loadingState = a.G.PENDING;
                                let s = yield r.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: n.t.MIXES });
                                ((e.items = { items: (0, i.wg)(s.items.map((e) => (0, c.J)(e.data))) }.items), (e.loadingState = a.G.RESOLVE));
                            } catch (t) {
                                (o.error(t),
                                    t instanceof s.GX && (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) && (e.errorStatusCode = s.X1.NOT_FOUND),
                                    e.loadingState !== a.G.IDLE && (e.loadingState = a.G.REJECT));
                            }
                    }),
                }));
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var i = r(4086),
                s = r(41928),
                n = r(44084);
            let o = new WeakMap(),
                a = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = o.get(e);
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
                        return (o.set(e, r), r);
                    })((0, s.N)().get(i.Zf));
        },
        65938: (e) => {
            e.exports = {
                root: 'GenresPage_root__LhP_S',
                shimmerTitle: 'GenresPage_shimmerTitle__4j8uH',
                content: 'GenresPage_content__yhKrQ',
                list: 'GenresPage_list__l2Cuc',
                genreShimmer: 'GenresPage_genreShimmer__1x3bp',
            };
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            var i = r(5120),
                s = r(53548);
            let n = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: n } = e,
                    o = (0, s.useRef)([]),
                    [a] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(a, e);
                        };
                        return (e(), window.addEventListener(n, e), () => window.removeEventListener(n, e));
                    }, [r, n, a]),
                    { store: a, patchesRef: o }
                );
            };
        },
        70662: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        74773: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => l }), r(30282));
            var i = r(58390),
                s = r(29993),
                n = r(67174),
                o = r(15947),
                a = r(97261);
            let l = (e) => {
                let t = (0, i.useRouter)(),
                    { href: r, target: l } = (0, n.u)(e);
                return (0, s.c)((e) => {
                    let i = (0, o.U)(r, window.location.href, l);
                    if (!i) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (i.type === a.I.EXTERNAL || i.type === a.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, n.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(i.href)
                            : t.push(i.href));
                });
            };
        },
        84273: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var i = r(88800),
                s = r(65724),
                n = r(84961),
                o = r(17392),
                a = r(18344),
                l = r(90688),
                c = r(7555),
                u = r(29504),
                d = r(91292),
                _ = r(40989),
                g = r.n(_);
            let m = (0, n.PA)((e) => {
                let { className: t, title: r, weblink: n, covers: _ = [], coverSize: m = 100, imagesLayoutType: h, headingVariant: p = 'h3' } = e;
                return (0, i.jsx)(d.N, {
                    href: n,
                    'data-test-id': o.OA.mix.MIX_CARD,
                    children: (0, i.jsxs)(c.t, {
                        className: (0, s.$)(g().root, t),
                        radius: 'l',
                        children: [
                            (0, i.jsx)('div', {
                                className: g().header,
                                children: (0, i.jsx)(u.HL, {
                                    variant: p,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: g().title,
                                    lineClamp: 2,
                                    'data-test-id': o.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: (0, s.$)(g().covers, { [g().covers_radial]: h === a.R.RADIAL, [g().covers_stack]: h === a.R.STACK }),
                                'data-test-id': o.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, i.jsx)(l._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: g().cover,
                                        size: m,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, i.jsx)(l._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: g().cover,
                                        size: m,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, i.jsx)(l._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: g().cover,
                                        size: m,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => C });
            var i = r(88800),
                s = r(65724),
                n = r(84961),
                o = r(2058),
                a = r(30282),
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
                    let { formatMessage: t, language: r, tld: i, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var _ = r(62293),
                g = r(99839);
            let m = (e) => e(new Date(), (0, g.m)());
            var h = r(51611),
                p = r(72288),
                v = r(11006),
                x = r.n(v),
                E = r(17392),
                y = r(29504),
                S = r(91292);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(x().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(S.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, s.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(S.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: x().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: s } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, i.jsx)(S.N, { target: '_blank', href: s, className: x().link, 'data-test-id': E.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                R = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, s.$)(x().root, x().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, i.jsx)(N, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, p.g)(),
                    { formatDate: s, formatMessage: n } = (0, o.A)(),
                    { language: a } = (0, h.h)(),
                    l = d({ formatMessage: n, language: a, tld: r.tld, year: m(s) });
                return (0, i.jsx)(f, { className: t, data: l });
            });
            let C = (0, n.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: n, location: g, user: v } = (0, p.g)(),
                    { formatDate: E, formatMessage: y } = (0, o.A)(),
                    { isEnabled: S } = null != (t = (0, l.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: s, tld: n, userRegion: o, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: s, userRegion: n } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, s) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, s) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, s) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, s) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, s) },
                                    g = [o, l, d];
                                return (r && 'ru' === n && g.push(a), g.push(_), g);
                            })({ formatMessage: r, isWebApplication: i, language: s, tld: n, userRegion: o }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: d({ formatMessage: r, language: s, tld: n, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: a.$3,
                        tld: g.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: m(E),
                    });
                return (0, i.jsx)(R, { className: (0, s.$)({ [x().root_withOffsetForDeeplink]: S }, r), data: N });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => s, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => n });
            var i = r(53548);
            let s = (0, i.createContext)(null),
                n = () => (0, i.useContext)(s);
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
            r.d(t, { I: () => i });
            var i = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99159: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var i = r(5120);
            let s = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 1268, 9467, 1147, 2691, 1405, 8655, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 8283, 1782, 1384, 4732, 9087, 3979, 6719,
                1928, 900, 2470, 763, 2670, 7358,
            ],
            () => e((e.s = 36326)),
        ),
            (_N_E = e.O()));
    },
]);
