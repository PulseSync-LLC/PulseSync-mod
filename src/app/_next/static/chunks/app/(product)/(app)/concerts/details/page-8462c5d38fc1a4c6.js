(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var r = n(67174);
            let a = {
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
        10270: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => c });
            var r = n(56949),
                a = n(53548),
                i = n(29993),
                s = n(44230),
                l = n(72288);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: n, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: _ } = (0, s.g)(),
                        g = (0, a.useRef)(new Map()),
                        h = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : n(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, n) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && n ? r + n.scrollTop : 0;
                            })(m, d, _),
                        },
                        v = (0, r.XW)(p),
                        y = (0, r.Te)({ ...p, getScrollElement: () => _, initialOffset: null == _ ? void 0 : _.scrollTop }),
                        x = m ? v : y,
                        E = (0, i.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            h.current ||
                                (h.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let n = e.target.getAttribute('data-index');
                                        if (e.target && n) {
                                            let r = e.contentRect.height;
                                            r && r !== g.current.get(n) && (g.current.set(n, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && E());
                                }));
                        }, [E]),
                        { virtualizer: x, resizeObserver: h.current }
                    );
                };
        },
        10363: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var r = n(19207);
            let a = (e) => (0, r.h)(e.data.concert, e.data.minPrice);
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
        12533: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let r = (e, t) => {
                let [n, r] = e.split('?'),
                    a = new URLSearchParams(r || '');
                for (let [e, n] of new URLSearchParams(t).entries()) a.set(e, n);
                let i = a.toString();
                return ''.concat(n).concat(i ? '?'.concat(i) : '');
            };
        },
        13060: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => d });
            var r = n(88800),
                a = n(65724),
                i = n(17392),
                s = n(52300),
                l = n(29504),
                o = n(19872),
                c = n.n(o);
            let d = (e) => {
                let { title: t, className: n, titleClassName: o, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(c().root, n),
                    children: [
                        (0, r.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, a.$)(c().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        16818: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => o });
            var r = n(53647),
                a = n(4086),
                i = n(41928),
                s = n(65523),
                l = n(57448);
            let o = () => {
                let e = (0, i.N)(),
                    t = e.get(a.oo),
                    n = e.get(a.QG),
                    o = e.get(a.uM),
                    c = e.get(a.ff),
                    d = e.get(a.V4),
                    u = e.get(a.P0),
                    m = (0, l.f)(),
                    _ = (0, s.U)(),
                    g = (0, i.N)().get(a.TK),
                    h = e.get(a.ni),
                    p = e.get(a.RD),
                    v = new r.si(),
                    y = new r.fW();
                return {
                    ...m,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: _,
                    modelActionsLogger: g,
                    localStorage: v,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: n,
                    config: d,
                    clientSafeConfig: u,
                    landingSdk: h,
                    tagSandbox: p,
                };
            };
        },
        19207: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => l });
            var r = n(5120),
                a = n(19815),
                i = n(58400),
                s = n(47255);
            let l = (e, t) => {
                var n, l, o, c;
                let { uri: d, color: u } = e.cover || {};
                return (0, r.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, i.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: d, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (n = e.cashback) ? void 0 : n.title,
                    cashbackValuePercent: null == (l = e.cashback) ? void 0 : l.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (c = null == (o = e.eventInfo) ? void 0 : o.type) ? c : a.Z.UNSPECIFIED,
                });
            };
        },
        19815: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Z: () => r }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(r || (r = {})));
        },
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        28163: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => y });
            var r = n(53548),
                a = n(78793),
                i = n(54577),
                s = n(90780),
                l = n(79070),
                o = n(65523),
                c = n(42139),
                d = n(12816),
                u = n(34500),
                m = n(57649),
                _ = n(60840),
                g = n(14518),
                h = n(73442),
                p = n(91248);
            let v = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                y = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        n = (0, o.U)(),
                        { hash: y } = (0, s.gf)(),
                        { pageId: x } = (0, g.$)(),
                        { tabId: E, tabPos: C, isTabSelectedByDefault: f } = (0, p.R)(),
                        { offsetBlockPosY: N } = (0, m.u)(),
                        { blockId: b, blockType: T, blockPosX: S, blockPosY: A, mainObjectType: k, mainObjectId: w, objectsCount: I } = (0, u.N)(),
                        { filterKey: O, filterValue: R, filterPos: j } = (0, _.G)(),
                        { skeleton: P } = (0, h.b)(),
                        L = (0, l.L)(() => (void 0 !== N && void 0 !== A ? N + A : A));
                    return (0, r.useCallback)(() => {
                        if (!t || !x || !d.xK.includes(x) || !v.includes(x) || e.current) return;
                        let r = { hash: y, pageId: c.F[x], entityType: T, entityId: b, entityPosX: S, entityPosY: L, objectsCount: I };
                        (void 0 !== O && ((r.filterKey = O), (r.filterValue = R), (r.filterPos = j)),
                            d.qG.includes(x) && ((r.tabId = E), (r.tabPos = C), (r.isTabSelectedByDefault = f)),
                            P && (r.skeletonId = P),
                            w && k && ((r.mainObjectType = k), (r.mainObjectId = w)));
                        let s = (0, a.F)({ params: r, logger: n, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, i.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, x, y, T, b, S, L, O, R, j, I, P, w, k, n, E, C, f]);
                };
        },
        30064: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => o });
            var r = n(5120),
                a = n(50633),
                i = n(97956),
                s = n(63425);
            let l = r.gK.model('Price', { value: r.gK.number, currency: r.gK.string }),
                o = r.gK
                    .model('Concert', {
                        id: r.gK.string,
                        dataSessionId: r.gK.maybe(r.gK.string),
                        datetime: r.gK.maybe(r.gK.string),
                        city: r.gK.maybe(r.gK.string),
                        place: r.gK.maybe(r.gK.string),
                        contentRating: r.gK.maybe(r.gK.string),
                        price: r.gK.maybe(l),
                        cashbackTitle: r.gK.maybe(r.gK.string),
                        cashbackValuePercent: r.gK.maybe(r.gK.number),
                        title: r.gK.maybe(r.gK.string),
                        cover: r.gK.maybe(s.$),
                        rank: r.gK.maybe(r.gK.number),
                        eventKind: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(i.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, a.M)(e);
                            return t.checkExperiment(i.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        32414: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => O });
            var r = n(88800),
                a = n(65724),
                i = n(84961),
                s = n(53548),
                l = n(2058),
                o = n(88969);
            n(30282);
            var c = n(96817),
                d = n(52300),
                u = n(29504),
                m = n(78793),
                _ = n(92716),
                g = n(99984),
                h = n(90780),
                p = n(65523),
                v = n(14518),
                y = n(44230),
                x = n(4370),
                E = n(72288),
                C = n(97956),
                f = n(56248),
                N = n(90688),
                b = n(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = n(96856),
                A = n.n(S);
            let k = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { slam: s } = (0, E.g)(),
                    { contentRef: l } = (0, y.g)(),
                    d = (0, b.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(N._V, { className: A().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: A().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: A().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = n(9184),
                I = n.n(w);
            let O = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { formatMessage: N } = (0, l.A)(),
                    b = (0, s.useContext)(E.P),
                    T = null == b ? void 0 : b.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    S = N(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let i = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, g.z5)(t.evgenInstance, i);
                    }, [t, e, n, r, a]);
                })(S);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, v.$)(),
                            r = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, g.bv)(e.evgenInstance, a);
                            }, [e, t, n, r]),
                        };
                    })(),
                    w = (0, s.useCallback)(() => {
                        (A(), (window.location.href = x.Z.main.href));
                    }, [A]),
                    { contentRef: O } = (0, y.g)();
                return T
                    ? (0, r.jsx)(k, { className: t, withBackwardControl: n, onBack: i })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(I().root, t),
                          children: [
                              n &&
                                  (0, r.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(I().navigation, { [I().navigation_desktop]: !O }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(I().content, { [I().content_shrink]: !n }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, a.$)(I().title, I().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, a.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: w,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
        34303: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => r });
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
        34961: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => p, s: () => v });
            var r = n(88800),
                a = n(84961),
                i = n(58390),
                s = n(53548),
                l = n(35412),
                o = n(39499),
                c = n(89108),
                d = n(70003),
                u = n(72288),
                m = n(16818);
            (0, a.eO)(!1);
            let _ = (0, s.createContext)(null),
                g = (e) => {
                    let { children: t, store: n, storeKey: a } = e,
                        i = (0, s.useMemo)(() => ({ store: n, storeKey: a }), [n, a]);
                    return (0, r.jsx)(_.Provider, { value: i, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: a } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        a = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: s } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: p } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h, { nonce: s, patchKey: n, patchesRef: p }), (0, r.jsx)(g, { store: _, storeKey: n, children: i })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(_);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        36930: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => l });
            var r = n(88800),
                a = n(19994),
                i = n(78373),
                s = n.n(i);
            let l = (e) => {
                let { isActive: t, withMeta: n, withPriceButton: i } = e;
                return (0, r.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, r.jsx)(a.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, r.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                n &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        i && (0, r.jsx)(a.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        38371: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => j });
            var r = n(88800),
                a = n(84961),
                i = n(88969),
                s = n(92716),
                l = n(17392),
                o = n(29993),
                c = n(79070),
                d = n(78275),
                u = n(96817),
                m = n(73170),
                _ = n(29504),
                g = n(96527),
                h = n(28830),
                p = n(78940),
                v = n(72288),
                y = n(97956),
                x = n(49176),
                E = n(67174),
                C = n(76484),
                f = n(44167),
                N = n(13060);
            let b = ' • ',
                T = (e, t) => {
                    let n = [];
                    return (e.city && n.push(e.city), e.place && n.push(e.place), n.join(t));
                };
            var S = n(95960),
                A = n.n(S);
            let k = (0, a.PA)((e) => {
                let { concert: t, cashback: n } = e;
                return (0, r.jsxs)('div', {
                    className: A().meta,
                    children: [
                        (0, r.jsx)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: A().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, r.jsxs)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: A().info,
                            children: [
                                (0, r.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: A().location,
                                    'aria-label': T(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: T(t, b),
                                }),
                                (0, r.jsx)(_.HL, { 'aria-hidden': !0, className: A().separator, variant: 'span', type: 'controls', weight: 'medium', children: b }),
                                (0, r.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: A().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        n,
                    ],
                });
            });
            var w = n(52018),
                I = n(72876),
                O = n(78373),
                R = n.n(O);
            let j = (0, a.PA)((e) => {
                var t, n, a;
                let { concert: b, withMask: T = !0, withPriceButton: S, withInlineMeta: A = !1 } = e,
                    { state: O, toggleTrue: j, toggleFalse: P } = (0, d.e)(!1),
                    { ref: L, intersectionPropertyId: M } = (0, h.n)(),
                    { experiments: D } = (0, v.g)(),
                    K = D.checkExperiment(y.z.WebNextConcertPage, 'on'),
                    W = (0, g.N)(),
                    H = (0, C.Y)(),
                    { href: G } = (0, E.u)('/concert/:concertId', { params: { concertId: b.id } }),
                    U = (0, p.Z)(G),
                    F = H(b),
                    Y = (0, o.c)((e) => {
                        (W({ to: s.AppScreen.ConcertPurchaseScreen }), j(), null == e || e.stopPropagation());
                    }),
                    z = (0, o.c)((e) => {
                        if (!K) return void Y(e);
                        (W({ to: s.AppScreen.ConcertScreen }), U(e));
                    }),
                    B = (0, o.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), z());
                    }),
                    V = (0, o.c)((e) => {
                        K && (Y(e), e.preventDefault());
                    }),
                    $ = (0, c.L)(() => {
                        let e = b.isIdentityExperimentEnabled && b.cashbackValuePercent,
                            t = !b.isIdentityExperimentEnabled && b.isCashbackExperimentEnabled && b.cashbackTitle;
                        if (e || t)
                            return (0, r.jsx)(N.m, {
                                className: R().cashback,
                                titleClassName: R().cashbackTitle,
                                title: b.cashbackTitle,
                                valuePercent: b.cashbackValuePercent,
                            });
                    }),
                    X = (0, r.jsx)(w.M, { concert: b, withCashback: !1, withInlineMeta: A, titleSize: 'l' }),
                    J = (0, r.jsx)(k, { concert: b, cashback: $ });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: R().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: z,
                            onKeyDown: B,
                            ref: L,
                            'data-intersection-property-id': M,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, r.jsx)(m.q, { children: (0, r.jsx)(_.HL, { variant: 'div', children: (0, r.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, r.jsx)('div', {
                                    className: R().cover,
                                    children: (0, r.jsx)(I.W, {
                                        datetime: b.datetime,
                                        coverColor: null == (t = b.cover) ? void 0 : t.color,
                                        uri: null == (n = b.cover) ? void 0 : n.uri,
                                        withMask: T,
                                        cashbackPercent: b.isIdentityExperimentEnabled ? b.cashbackValuePercent : void 0,
                                    }),
                                }),
                                b.isIdentityExperimentEnabled ? X : J,
                                !!(null == (a = b.price) ? void 0 : a.value) && (0, r.jsx)(m.q, { children: (0, r.jsx)(_.HL, { variant: 'div', children: F }) }),
                                S &&
                                    (0, r.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: R().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: V,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: F,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(f.h, { dataSessionId: b.dataSessionId, isOpened: O, onOpen: j, onClose: P }),
                    ],
                });
            });
        },
        44167: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => x });
            var r = n(88800),
                a = n(53548),
                i = n(2058),
                s = n(30282),
                l = n(17392),
                o = n(96817),
                c = n(11372),
                d = n(73170),
                u = n(4086),
                m = n(41928),
                _ = n(12149),
                g = n(58390),
                h = n(12533),
                p = n(34303),
                v = n(31423),
                y = n.n(v);
            let x = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: v, onClose: x } = e,
                    E = (0, m.N)().get(u.V4),
                    { formatMessage: C } = (0, i.A)(),
                    f = (() => {
                        let e = (0, g.useSearchParams)();
                        return (0, a.useCallback)(
                            (t) => {
                                let n = e.get(p.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return (r.set(p.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, h.C)(t, r));
                            },
                            [e],
                        );
                    })(),
                    N = (0, a.useCallback)(
                        (e) => {
                            e.origin === E.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, E.afisha.host],
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
                let b = (0, a.useCallback)(
                        (e) => {
                            e ? v() : x();
                        },
                        [x, v],
                    ),
                    T = (0, s.tE)(E, (0, _.u)()),
                    S = f(''.concat(E.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(T));
                return (0, r.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: b,
                    onClose: x,
                    showHeader: !1,
                    className: y().widget,
                    contentClassName: y().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, r.jsx)(d.q, { children: (0, r.jsx)(o.$, { 'aria-label': C({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, r.jsx)('iframe', {
                            src: S,
                            className: y().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        47255: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            let r = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        47969: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => c });
            var r = n(35802),
                a = n(79070),
                i = n(61013),
                s = n(53548);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: n, containerWidth: r, totalCount: a, columnGap: i, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + i) / (t + i))),
                    c = Math.max(s, Math.floor((r + i) / ((n + t) * 0.5 + i)));
                for (let e = s; e <= o; e++) {
                    let a = (r - (e - 1) * i) / e;
                    if (a >= t && a <= n) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = n(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: n,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: _,
                        maxColumnCount: g,
                        containerRef: h,
                    } = e,
                    { rowCount: p, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: n, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, s.useRef)(null),
                            g = (0, s.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
                                                l({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: n,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, n, a, o],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    _.current && _.current.disconnect(),
                                    (_.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (m(
                                            l({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: n,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        _.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = _.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, r, n, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: g, containerRef: h }),
                    { virtualizer: y, resizeObserver: x } = (0, o.r)({ count: p, getEstimateSize: n, gap: c, containerRef: h }),
                    E = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    C = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let n = null == (e = E[y.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = E[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== n && void 0 !== r ? { startIndex: n, endIndex: r } : null;
                    });
                return { virtualizer: y, rowResizeObserver: x, indices: E, columnCount: v, visibleRange: C };
            };
        },
        49176: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var r = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        50633: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => a });
            var r = n(5120);
            let a = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: n } = (0, r._$)(e);
                return n || t;
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        52018: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => _ });
            var r = n(88800),
                a = n(84961),
                i = n(53548),
                s = n(88969),
                l = n(17392),
                o = n(79070),
                c = n(29504),
                d = n(13060),
                u = n(95960),
                m = n.n(u);
            let _ = (0, a.PA)((e) => {
                let { id: t, concert: n, withCashback: a = !0, withInlineMeta: u = !1, titleSize: _ = 'm' } = e,
                    g = [],
                    h = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == n ? void 0 : n.eventKind) &&
                    g.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        g.push(
                            h,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        ));
                let p = (0, o.L)(() =>
                    (null == n ? void 0 : n.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: n.city,
                          })
                        : null,
                );
                return (
                    u && p && g.push(h, p),
                    (0, r.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: _,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: m().info, children: g.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && p,
                            a &&
                                (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: m().cashback, valuePercent: n.cashbackValuePercent }),
                            a &&
                                !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: m().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        53360: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var r = n(88800),
                a = n(65724),
                i = n(84961),
                s = n(53548),
                l = n(51516),
                o = n.n(l);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: n, renderItemByIndex: i, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, s.useRef)(null),
                    _ = t[n.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(n.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': n.index,
                        ref: m,
                        style: g,
                        className: (0, a.$)(o().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, r.jsx)('div', { className: l, children: i(e) }, ''.concat(n.key, '_').concat(e))),
                    })
                );
            });
        },
        53647: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => i, si: () => l, fW: () => m, MJ: () => u, jU: () => g, Bx: () => _ });
            var r = n(77451);
            function a(e) {
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
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, i;
                            return null != (i = null == (n = a(s)) ? void 0 : n.value) ? i : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let i = a ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, i, n);
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
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let i = n.getItem(e) || void 0;
                        if (!t) return i;
                        let s = a(i);
                        if (!s) return null;
                        let l = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return l;
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
            var o = n(9519),
                c = n(39499);
            class d extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class m {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, i;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (i = null == (n = a(s)) ? void 0 : n.value) ? i : null;
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
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(n);
                        null != a && e.set(n, a, r);
                    });
            }
            function g(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        53892: (e, t, n) => {
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
        57448: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => i });
            var r = n(4086),
                a = n(41928);
            let i = () => {
                let e = (0, a.N)(),
                    t = e.get(r.$I),
                    n = e.get(r.EN),
                    i = e.get(r.N1),
                    s = e.get(r._1),
                    l = e.get(r.V3),
                    o = e.get(r.Lb),
                    c = e.get(r.wK),
                    d = e.get(r.tz),
                    u = e.get(r.$8),
                    m = e.get(r.Oo),
                    _ = e.get(r.X4),
                    g = e.get(r.O9),
                    h = e.get(r.E),
                    p = e.get(r.wH),
                    v = e.get(r.ok),
                    y = e.get(r.X8),
                    x = e.get(r.yq),
                    E = e.get(r.NN),
                    C = e.get(r.qN),
                    f = e.get(r.ro),
                    N = e.get(r.nM),
                    b = e.get(r.Ut),
                    T = e.get(r.K1),
                    S = e.get(r.eu),
                    A = e.get(r.SD),
                    k = e.get(r.aE),
                    w = e.get(r.ki),
                    I = e.get(r.c9),
                    O = e.get(r.en),
                    R = e.get(r.jQ),
                    j = e.get(r.cZ),
                    P = e.get(r.Zl),
                    L = e.get(r.CN),
                    M = e.get(r.P1),
                    D = e.get(r.zj),
                    K = e.get(r.re),
                    W = e.get(r.JM),
                    H = e.get(r.Lk),
                    G = e.get(r.$$),
                    U = e.get(r.sv),
                    F = e.get(r.gd),
                    Y = e.get(r.Ez),
                    z = e.get(r.u2),
                    B = e.get(r.TD),
                    V = e.get(r.dh),
                    $ = e.get(r.LC),
                    X = e.get(r.PL),
                    J = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: n,
                    disclaimersResource: i,
                    usersResource: s,
                    landingResource: l,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: _,
                    artistsResource: g,
                    slidesResource: h,
                    redAlertResource: p,
                    rotorResource: v,
                    waveResource: y,
                    searchResource: x,
                    searchPlaylistResource: E,
                    playlistResource: C,
                    playlistsResource: f,
                    pinResource: N,
                    metatagsResource: b,
                    tagResource: T,
                    feedResource: S,
                    wizard3Resource: A,
                    pinsResource: k,
                    musicHistoryResource: w,
                    dynamicPagesResource: I,
                    chartResource: O,
                    clipsResource: R,
                    lyricViewsResource: j,
                    nonMusicResource: P,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: K,
                    streamsResource: W,
                    filtersResource: H,
                    ugcResource: G,
                    collectionResource: U,
                    adsResource: F,
                    personalResource: Y,
                    familyResource: z,
                    childrenLandingResource: B,
                    promoResource: V,
                    telemetryResource: $,
                    labelsResource: X,
                    concertsResource: J,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        58400: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => a });
            let r = /[+-]\d{2}:?\d{2}/,
                a = (e) => (null == e ? void 0 : e.replace(r, ''));
        },
        59497: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => i });
            var r = n(5120),
                a = n(74773);
            let i = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(a.G)) }).views((e) => ({
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
        60266: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var r = n(88800);
            n(30282);
            var a = n(11006),
                i = n.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: i().empty });
            };
        },
        62293: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => a });
            var r = n(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(r.z.WebNextFooterDisclaimer, 'on') ? n() : a();
            };
        },
        63425: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(5120);
            let a = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) });
        },
        67311: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => a });
            var r = n(5120);
            let a = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
        },
        70003: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            var r = n(5120),
                a = n(53548);
            let i = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: i } = e,
                    s = (0, a.useRef)([]),
                    [l] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(l, e);
                        };
                        return (e(), window.addEventListener(i, e), () => window.removeEventListener(i, e));
                    }, [n, i, l]),
                    { store: l, patchesRef: s }
                );
            };
        },
        72876: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => S });
            var r,
                a,
                i = n(88800),
                s = n(65724),
                l = n(84961),
                o = n(53548),
                c = n(17392),
                d = n(79070),
                u = n(90688),
                m = n(72288),
                _ = n(97956),
                g = n(35412);
            let h = (e) => (0, g.a6)(e.replace('%%', '960x690_noncrop'));
            var p = n(88969),
                v = n(29504);
            function y() {
                return (y = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return o.createElement(
                    'svg',
                    y({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    r ||
                        (r = o.createElement(
                            'defs',
                            null,
                            o.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                o.createElement('stop', { stopColor: '#FF5C4D' }),
                                o.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                o.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            o.createElement('clipPath', { id: 'plusColorClip' }, o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    a ||
                        (a = o.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            o.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var E = n(33075),
                C = n.n(E);
            let f = (e) => {
                let { percent: t, className: n } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(C().root, n),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(x, { 'aria-hidden': !0, className: C().icon }),
                        (0, i.jsx)(v.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: C().text,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var N = n(74250),
                b = n(60201),
                T = n.n(b);
            let S = (0, l.PA)((e) => {
                let { uri: t, withMask: n, datetime: r, coverColor: a, cashbackPercent: l } = e,
                    { experiments: p } = (0, m.g)(),
                    [v, y] = (0, o.useState)(!1),
                    x = p.checkExperiment(_.z.NewConcertsTicketRedesign, 'on') && n,
                    E = p.checkExperiment(_.z.WebNextConcertsIdentityEventType, 'on'),
                    C = (0, o.useCallback)(() => {
                        y(!0);
                    }, []),
                    b = (0, d.L)(() => {
                        if (a)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: n, l: r } = (0, g.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(n, '%, ')
                                        .concat(r <= 55 ? r + 20 : r - 20, '%)');
                                })(a),
                            };
                    }),
                    S = (0, d.L)(() =>
                        r
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(T().date, { [T().date_withEventType]: E }),
                                  children: [
                                      (0, i.jsx)(u._V, {
                                          className: T().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: C,
                                      }),
                                      v &&
                                          (0, i.jsx)(N.d, {
                                              className: T().root_withEventType,
                                              dayClassName: T().day_withEventType,
                                              weekdayClassName: T().weekday_withEventType,
                                              monthClassName: T().month_withEventType,
                                              datetime: r,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    A = (0, d.L)(() =>
                        r
                            ? (0, i.jsx)(N.d, {
                                  dayClassName: T().day,
                                  weekdayClassName: (0, s.$)(T().weekday, T().important),
                                  monthClassName: T().month,
                                  className: T().date,
                                  datetime: r,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(T().root, { [T().root_withMask]: x }),
                    style: b,
                    children: [
                        (0, i.jsx)(u._V, {
                            className: T().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: h,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        r && (E ? S : A),
                        E && l && (0, i.jsx)(f, { className: T().cashback, percent: l }),
                    ],
                });
            });
        },
        73170: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => c });
            var r,
                a = n(53548),
                i = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (a && (a += ' '), (a += r));
                                            else for (n in t) t[n] && (a && (a += ' '), (a += n));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    7319: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    5531: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = n(4377),
                            i = n(5881),
                            s = n(810),
                            l = r(n(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: r, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: n }, t);
                            return (0, s.isValidElement)(r)
                                ? (0, s.cloneElement)(r, { ...o, className: (0, i.clsx)(c, r.props.className) })
                                : (0, a.jsx)('span', { className: c, ...o, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return (i[e].call(n.exports, n, n.exports, l), n.exports);
            }
            ((l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0));
                var e = l(5531);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = o.SROnly;
            o.__esModule;
        },
        74250: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => u });
            var r = n(88800),
                a = n(65724),
                i = n(2058),
                s = n(17392),
                l = n(29504),
                o = n(32414),
                c = n(22989),
                d = n.n(c);
            let u = (e) => {
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: _ = !0, ...g } = e,
                    { formatDate: h } = (0, i.A)(),
                    p = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            n = {
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
                        if (e) return n[new Date(e).getMonth()];
                    })(t);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(d().root, n),
                    'aria-label': h(t, (0, o.s)()),
                    ...g,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, a.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: p,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, a.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: h(t, { day: 'numeric' }),
                        }),
                        _ &&
                            (0, r.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, a.$)(d().weekday, m),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: h(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        76484: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => i });
            var r = n(2058),
                a = n(29993);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, a.c)((n) => {
                    var r, a;
                    return (null == (r = n.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(n.price.value, { style: 'currency', currency: null == (a = n.price) ? void 0 : a.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        78016: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => Y }));
            var r = n(88800),
                a = n(53548),
                i = n(58390),
                s = n(34961),
                l = n(53892),
                o = n(5120),
                c = n(10363),
                d = n(30064),
                u = n(50633),
                m = n(74773),
                _ = n(59497),
                g = n(67311);
            let h = o.gK
                    .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(d.a)), title: o.gK.maybeNull(o.gK.string) }), _.X, g.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { type: n, id: r } = t,
                                { concertsResource: a, modelActionsLogger: i } = (0, o._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = m.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        i = t.concertsLocationForRequest,
                                        { items: s, title: l } = yield a.getConcertsDetails({ type: n, id: r, locations: i });
                                    ((e.concerts = (0, o.wg)(s.map((e) => (0, c.H)(e)))), (e.title = null != l ? l : null), (e.loadingState = m.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = m.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = m.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                p = { loadingState: m.G.IDLE },
                { pageStoreProvider: v } = (0, s.W)({ createStore: (e) => h.create(p, e), patchKey: l.n.CONCERTS_DETAILS });
            var y = n(84961),
                x = n(2058),
                E = n(29993),
                C = n(50408),
                f = n(66719),
                N = n(29504),
                b = n(32596),
                T = n(69630),
                S = n(47969),
                A = n(53360),
                k = n(38371),
                w = n(36930),
                I = n(28163),
                O = n(46422),
                R = n(44230),
                j = n(72288),
                P = n(97956),
                L = n(86790),
                M = n(60266),
                D = n(93317),
                K = n(6466),
                W = n.n(K);
            let H = (0, y.PA)((e) => {
                let { type: t, id: n } = e,
                    o = (0, a.useId)(),
                    c = (0, s.s)(l.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, j.g)(),
                    { formatMessage: u } = (0, x.A)(),
                    { contentScrollRef: m, setContentScrollRef: _ } = (0, R.g)(),
                    g = (0, O.W)(),
                    [h, p] = (0, C.d)(),
                    v = (0, I.f)(),
                    y = (0, a.useRef)(!1),
                    K = d.checkExperiment(P.z.WebNextConcertsIdentityEventType, 'on'),
                    H = (0, E.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: G,
                        rowResizeObserver: U,
                        columnCount: F,
                        indices: Y,
                    } = (0, S.L)({
                        count: H(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: h,
                    }),
                    z = { '--feed-concerts-height': ''.concat(G.getTotalSize(), 'px'), '--feed-concerts-column-count': F },
                    B = (0, a.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = c.concerts) ? void 0 : t[e];
                            return !n || c.isShimmerVisible ? (0, r.jsx)(w.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, r.jsx)(k.Q, { concert: n });
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
                    (0, a.useEffect)(() => {
                        c.isResolved && !y.current && (v(), (y.current = !0));
                    }, [c.isResolved, v]),
                    c.isNeededToLoad && (0, a.use)(c.getData({ type: t, id: n })),
                    d.checkExperiment(P.z.WebNextConcertsDetailsPage, 'on') || (0, i.notFound)(),
                    c.isRejected)
                )
                    return (0, r.jsx)(b.SomethingWentWrong, {});
                let V = K && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, r.jsx)(T.h, {
                    scrollElement: m,
                    outerTitle: V,
                    children: (0, r.jsxs)('div', {
                        className: W().root,
                        children: [
                            (0, r.jsx)(D.Y, {
                                variant: D.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: g.canBack,
                                children: (0, r.jsx)(N.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: V }),
                            }),
                            (0, r.jsxs)(f.N, {
                                ref: _,
                                className: W().scrollContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: p,
                                            style: z,
                                            className: W().container,
                                            children: G.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    A.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: U,
                                                        indices: Y,
                                                        renderItemByIndex: B,
                                                        scrollMargin: G.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, r.jsx)(M.A, { children: (0, r.jsx)(L.w, { className: W().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var G = n(19994);
            let U = (e) => (0, r.jsx)(w.L, { isActive: !0, withMeta: !0 }, e),
                F = () => {
                    let e = (0, O.W)(),
                        { contentScrollRef: t, setContentScrollRef: n } = (0, R.g)(),
                        [a, i] = (0, C.d)(),
                        { formatMessage: s } = (0, x.A)(),
                        l = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: o,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, S.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: a,
                        }),
                        m = { '--feed-concerts-height': ''.concat(o.getTotalSize(), 'px'), '--feed-concerts-column-count': d };
                    return (0, r.jsx)(T.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: W().root,
                            children: [
                                (0, r.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(G.W, { className: W().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, r.jsx)(f.N, {
                                    ref: n,
                                    className: W().scrollContainer,
                                    children: (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-label': l,
                                            ref: i,
                                            style: m,
                                            className: W().container,
                                            children: o
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, r.jsx)(
                                                        A.U,
                                                        {
                                                            className: W().row,
                                                            columnClassName: W().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: u,
                                                            renderItemByIndex: U,
                                                            scrollMargin: o.options.scrollMargin,
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
                Y = () => {
                    let e = (0, i.useSearchParams)(),
                        t = e.get('type'),
                        n = e.get('id');
                    return (
                        (t && n) || (0, i.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(F, {}), children: (0, r.jsx)(H, { type: t, id: n }) }) })
                    );
                };
        },
        78275: (e, t, n) => {
            'use strict';
            n.d(t, { e: () => o });
            var r,
                a = n(53548),
                i = {
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return (i[t](r, r.exports, e), r.exports);
                })(810);
                l.useToggle = (t) => {
                    let [n, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: n, toggle: a, setState: r, toggleTrue: i, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
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
        79999: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 78016));
        },
        86790: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => T });
            var r = n(88800),
                a = n(65724),
                i = n(84961),
                s = n(2058),
                l = n(30282),
                o = n(94144),
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
            let d = (e, t, n) => {
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
                u = (e) => {
                    let { formatMessage: t, language: n, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, n) },
                    };
                };
            var m = n(62293),
                _ = n(99839);
            let g = (e) => e(new Date(), (0, _.m)());
            var h = n(51611),
                p = n(72288),
                v = n(11006),
                y = n.n(v),
                x = n(17392),
                E = n(29504),
                C = n(91292);
            let f = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(y().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, a.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, r.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: y().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: a, className: y().link, 'data-test-id': x.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: n } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(y().root, y().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, r.jsx)(N, { links: n.links, disclaimer: n.disclaimer }), (0, r.jsx)(f, { data: n.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, p.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: i, language: l, tld: n.tld, year: g(a) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let T = (0, i.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: i, location: _, user: v } = (0, p.g)(),
                    { formatDate: x, formatMessage: E } = (0, s.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: r, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    _ = [s, o, u];
                                return (n && 'ru' === i && _.push(l), _.push(m), _);
                            })({ formatMessage: n, isWebApplication: r, language: a, tld: i, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: n, language: a, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(x),
                    });
                return (0, r.jsx)(b, { className: (0, a.$)({ [y().root_withOffsetForDeeplink]: C }, n), data: N });
            });
        },
        89108: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => a, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a, P: () => i });
            var r = n(53548);
            let a = (0, r.createContext)(null),
                i = () => (0, r.useContext)(a);
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
        99839: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 3637, 7617, 9217, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 8283, 2824, 6949, 520, 4732, 1195, 1598, 6281, 1928, 7967, 900,
                6387, 1372, 763, 2670, 7358,
            ],
            () => e((e.s = 79999)),
        ),
            (_N_E = e.O()));
    },
]);
