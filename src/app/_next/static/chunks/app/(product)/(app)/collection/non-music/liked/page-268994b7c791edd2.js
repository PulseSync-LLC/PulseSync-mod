(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7079],
    {
        2622: (e, t, n) => {
            'use strict';
            n.d(t, { CollectionNonMusicLikedPage: () => A });
            var i = n(88800),
                o = n(65724),
                s = n(84961),
                r = n(53548),
                l = n(2058),
                a = n(88969),
                c = n(17392),
                d = n(29504),
                u = n(32596),
                _ = n(10079),
                m = n(69630),
                p = n(12816),
                h = n(59844),
                g = n(46422),
                x = n(44230),
                E = n(37670),
                N = n(72288),
                y = n(86790),
                C = n(60266),
                k = n(93317),
                v = n(37770),
                f = n(79418),
                O = n(54378),
                S = n(95618),
                T = n.n(S);
            let A = (0, s.PA)(() => {
                var e, t, n;
                let {
                        user: s,
                        collection: { nonMusicLiked: S },
                        settings: { isMobile: A },
                        library: b,
                    } = (0, N.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: j, setContentScrollRef: R } = (0, x.g)(),
                    L = (0, g.W)();
                (0, E.J)(S.isResolved);
                let I = (0, r.useCallback)(
                    (e) => {
                        s.account.data.uid && S.getData({ userId: s.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [S, s.account.data.uid],
                );
                if (S.isRejected) return (0, i.jsx)(u.SomethingWentWrong, {});
                (0, r.useEffect)(
                    () => () => {
                        S.reset();
                    },
                    [S],
                );
                let D = (0, r.useMemo)(() => ({ Footer: () => (0, i.jsx)(C.A, { children: (0, i.jsx)(y.w, { className: T().footer }) }) }), []);
                if (s.account.data.uid && S.isNeededToLoad) {
                    let e = [S.getData({ userId: s.account.data.uid, metaType: 'podcast', pageSize: 20 }), b.getData()];
                    (0, r.use)(Promise.allSettled(e));
                }
                return (0, i.jsx)(h.n, {
                    pageId: p._Q.OWN_PODCASTS,
                    children: (0, i.jsx)(m.h, {
                        scrollElement: j,
                        outerTitle: P({ id: 'page.delayed-non-music' }),
                        children: (0, i.jsxs)('div', {
                            className: T().root,
                            'data-test-id': c.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, i.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: L.canBack,
                                    children: (0, i.jsx)(d.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, i.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                S.isEmptyItems && !S.isRejected && (0, i.jsx)(O.M, { className: T().emptyBlock }),
                                (0, i.jsx)(f.$, {
                                    className: (0, o.$)(T().scrollContainer, T().important),
                                    listClassName: T().content,
                                    itemClassName: T().item,
                                    customComponents: D,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let n = null == (t = S.items) ? void 0 : t[e],
                                            o = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.podcast' }) });
                                        return n
                                            ? (0, i.jsx)(_.a, { album: n, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, n.id)
                                            : (0, i.jsx)(v.V, { 'aria-label': o });
                                    },
                                    totalCount: null != (t = null == (e = S.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: I,
                                    pageSize: 20,
                                    totalRequests: null != (n = S.requestsCount) ? n : 0,
                                    handleRef: R,
                                    context: { listAriaLabel: P({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: A,
                                    useWindowScroll: A,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => o });
            var i = n(67174);
            let o = {
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
        7628: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => m });
            var i = n(88800),
                o = n(88969),
                s = n(58390),
                r = n(17392),
                l = n(29993),
                a = n(96817),
                c = n(29504),
                d = n(99890),
                u = n(4086),
                _ = n(41928);
            let m = (e) => {
                let { size: t = 'm', variant: n = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: g, key: x, className: E } = e,
                    N = (0, s.useRouter)(),
                    y = (0, _.N)().get(u.QG),
                    C = (0, l.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(y.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: C,
                        className: E,
                        isBlock: g,
                        color: m,
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
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
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        19840: (e, t, n) => {
            'use strict';
            (n.d(t, { G: () => o }), n(46606));
            var i = n(91136);
            class o extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => j });
            var i = n(88800),
                o = n(65724),
                s = n(84961),
                r = n(53548),
                l = n(2058),
                a = n(88969);
            n(30282);
            var c = n(96817),
                d = n(52300),
                u = n(29504),
                _ = n(78793),
                m = n(92716),
                p = n(99984),
                h = n(90780),
                g = n(65523),
                x = n(14518),
                E = n(44230),
                N = n(4370),
                y = n(72288),
                C = n(97956),
                k = n(56248),
                v = n(90688),
                f = n(78940);
            let O = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = n(96856),
                T = n.n(S);
            let A = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { slam: r } = (0, y.g)(),
                    { contentRef: l } = (0, E.g)(),
                    d = (0, f.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(T().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(T().navigation, { [T().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(T().content, { [T().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(v._V, { className: T().image, src: O.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: T().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var b = n(9184),
                P = n.n(b);
            let j = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { formatMessage: v } = (0, l.A)(),
                    f = (0, r.useContext)(y.P),
                    O = null == f ? void 0 : f.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    S = v(O ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: i } = (0, x.$)(),
                        o = (0, g.U)();
                    (0, r.useEffect)(() => {
                        if (!t || !n || !i) return;
                        let s = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: o,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, n, i, o]);
                })(S);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, x.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, r.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let o = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                o && (0, p.bv)(e.evgenInstance, o);
                            }, [e, t, n, i]),
                        };
                    })(),
                    b = (0, r.useCallback)(() => {
                        (T(), (window.location.href = N.Z.main.href));
                    }, [T]),
                    { contentRef: j } = (0, E.g)();
                return O
                    ? (0, i.jsx)(A, { className: t, withBackwardControl: n, onBack: s })
                    : (0, i.jsxs)('div', {
                          className: (0, o.$)(P().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(P().navigation, { [P().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, o.$)(P().content, { [P().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, o.$)(P().title, P().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, o.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: b,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        46606: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        54378: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => d });
            var i = n(88800),
                o = n(65724),
                s = n(88969),
                r = n(52300),
                l = n(29504),
                a = n(78212),
                c = n.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(c().emptyContent, t),
                    children: [
                        (0, i.jsx)(r.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, i.jsx)(l.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        57328: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => h });
            var i = n(88800),
                o = n(84961),
                s = n(58390),
                r = n(65724),
                l = n(88969),
                a = n(29504),
                c = n(7628),
                d = n(42674),
                u = n.n(d);
            let _ = (0, o.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = n(4370),
                p = n(72288);
            let h = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: o } = (0, p.g)();
                return o.isAuthorized ? t : (n && (0, s.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        60266: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => r });
            var i = n(88800);
            n(30282);
            var o = n(11006),
                s = n.n(o);
            let r = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => o });
            var i = n(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: o, userRegion: s } = e;
                return 'ru' === s && t(i.z.WebNextFooterDisclaimer, 'on') ? n() : o();
            };
        },
        63648: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 57328)), Promise.resolve().then(n.bind(n, 2622)));
        },
        65523: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => l });
            var i = n(4086),
                o = n(41928),
                s = n(44084);
            let r = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = r.get(e);
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
                        return (r.set(e, n), n);
                    })((0, o.N)().get(i.Zf));
        },
        67990: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        79418: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => g });
            var i = n(88800),
                o = n(65724),
                s = n(61013),
                r = n(53548);
            let l = (e) => {
                    let { style: t, forwardRef: n, context: o, ...s } = e,
                        r = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        l = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': r, style: { ...t }, ref: n, ...s });
                },
                a = (0, r.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = n(16434),
                d = n.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: n, withFooter: s, withHeader: r, withForceScroll: l, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: r, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: n,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, r.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var m = n(55482),
                p = n(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, r.useState)(null),
                        g = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && h(e), t && n)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < i; e++) n(e);
                                    }
                                }, s),
                            [s, o, t, n, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let x = (0, r.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, i.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: E,
                            totalRequests: N,
                            debounceDurationInMs: y,
                            initialItemCount: C,
                            minInitialItemCount: k = 20,
                            handleRef: v,
                            alwaysShowScrollbar: f = !1,
                            testId: O,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...A
                        } = e,
                        [b, P] = (0, r.useState)(!1),
                        j = (0, r.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == n ? void 0 : n.List) ? e : a,
                                      Item: null == n ? void 0 : n.Item,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == n ? void 0 : n.List) ? t : a,
                                      Item: null == n ? void 0 : n.Item,
                                      Header: null == n ? void 0 : n.Header,
                                      Footer: null == n ? void 0 : n.Footer,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  };
                        }, [n, N, S]),
                        L = C ? Math.min(C, k) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: b || f, [d().root_notScrolling]: !b && !f }, t),
                        'data-test-id': O,
                        children: [
                            S && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, i.jsx)(h, {
                                overscan: g,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: v,
                                totalCount: E,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: T,
                                ...A,
                            }),
                            S && (null == n ? void 0 : n.Footer) && n.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => O });
            var i = n(88800),
                o = n(65724),
                s = n(84961),
                r = n(2058),
                l = n(30282),
                a = n(94144),
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
                    let { formatMessage: t, language: n, tld: i, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, n) },
                    };
                };
            var _ = n(62293),
                m = n(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = n(51611),
                g = n(72288),
                x = n(11006),
                E = n.n(x),
                N = n(17392),
                y = n(29504),
                C = n(91292);
            let k = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(E().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, o.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, i.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: E().list,
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: o } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: o, className: E().link, 'data-test-id': N.S7.FOOTER_LINK, children: n }),
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
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': N.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(E().root, E().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, i.jsx)(v, { links: n.links, disclaimer: n.disclaimer }), (0, i.jsx)(k, { data: n.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, g.g)(),
                    { formatDate: o, formatMessage: s } = (0, r.A)(),
                    { language: l } = (0, h.h)(),
                    a = u({ formatMessage: s, language: l, tld: n.tld, year: p(o) });
                return (0, i.jsx)(k, { className: t, data: a });
            });
            let O = (0, s.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: s, location: m, user: x } = (0, g.g)(),
                    { formatDate: N, formatMessage: y } = (0, r.A)(),
                    { isEnabled: C } = null != (t = (0, a.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    v = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: i, language: o, tld: s, userRegion: r, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: i, language: o, userRegion: s } = e,
                                    r = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, o) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, o) },
                                    m = [r, a, u];
                                return (n && 'ru' === s && m.push(l), m.push(_), m);
                            })({ formatMessage: n, isWebApplication: i, language: o, tld: s, userRegion: r }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: n, language: o, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(N),
                    });
                return (0, i.jsx)(f, { className: (0, o.$)({ [E().root_withOffsetForDeeplink]: C }, n), data: v });
            });
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => s.G, X1: () => i.X, m5: () => o.m });
            var i = n(46606),
                o = n(91136),
                s = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: o = {}, ...s } = t,
                        r = e || 'Internal error';
                    (super(r, s), (this.message = r), (this.code = n), (this.data = o), (this.stack = Error(r).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class o extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        94144: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => o, P: () => s });
            var i = n(53548);
            let o = (0, i.createContext)(null),
                s = () => (0, i.useContext)(o);
        },
        95618: (e) => {
            e.exports = {
                root: 'CollectionNonMusicLikedPage_root__0e_hz',
                scrollContainer: 'CollectionNonMusicLikedPage_scrollContainer__OthtN',
                important: 'CollectionNonMusicLikedPage_important__MNJX3',
                footer: 'CollectionNonMusicLikedPage_footer__F_mtD',
                item: 'CollectionNonMusicLikedPage_item__Rb0yS',
                emptyBlock: 'CollectionNonMusicLikedPage_emptyBlock__WAdri',
                content: 'CollectionNonMusicLikedPage_content__9WDX5',
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
            n.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => s, UC: () => r, dM: () => l, uV: () => a });
            var i = n(89916),
                o = n(67990);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof i.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 5108, 8380, 127, 1931, 1191, 7617, 3637, 4475, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 2837, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 763, 2670, 7358,
            ],
            () => e((e.s = 63648)),
        ),
            (_N_E = e.O()));
    },
]);
