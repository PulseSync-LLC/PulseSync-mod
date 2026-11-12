(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 7079],
    {
        2622: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionNonMusicLikedPage: () => k });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                o = i(53548),
                l = i(2058),
                a = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29504),
                m = i(32596),
                _ = i(10079),
                h = i(69630),
                g = i(98427),
                y = i(46422),
                v = i(44230),
                E = i(37670),
                O = i(72288),
                b = i(86790),
                N = i(60266),
                x = i(93317),
                I = i(37770),
                f = i(79418),
                C = i(54378),
                T = i(95618),
                A = i.n(T);
            let k = (0, r.PA)(() => {
                var e, t, i;
                let {
                        user: r,
                        collection: { nonMusicLiked: T },
                        settings: { isMobile: k },
                        library: S,
                    } = (0, O.g)(),
                    { formatMessage: j } = (0, l.A)(),
                    { contentScrollRef: L, setContentScrollRef: P } = (0, v.g)(),
                    w = (0, y.W)();
                (0, E.J)(T.isResolved);
                let R = (0, o.useCallback)(
                    (e) => {
                        r.account.data.uid && T.getData({ userId: r.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [T, r.account.data.uid],
                );
                if (T.isRejected) return (0, s.jsx)(m.SomethingWentWrong, {});
                (0, o.useEffect)(
                    () => () => {
                        T.reset();
                    },
                    [T],
                );
                let D = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(b.w, { className: A().footer }) }) }), []);
                if (r.account.data.uid && T.isNeededToLoad) {
                    let e = [T.getData({ userId: r.account.data.uid, metaType: 'podcast', pageSize: 20 }), S.getData()];
                    (0, o.use)(Promise.allSettled(e));
                }
                return (0, s.jsx)(d.a, {
                    pageId: c.AppScreen.OwnPodcasts,
                    pageIdForFrom: g.b.OWN_PODCASTS,
                    children: (0, s.jsx)(h.h, {
                        scrollElement: L,
                        outerTitle: j({ id: 'page.delayed-non-music' }),
                        children: (0, s.jsxs)('div', {
                            className: A().root,
                            'data-test-id': u.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, s.jsx)(x.Y, {
                                    variant: x.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: (0, s.jsx)(p.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                T.isEmptyItems && !T.isRejected && (0, s.jsx)(C.M, { className: A().emptyBlock }),
                                (0, s.jsx)(f.$, {
                                    className: (0, n.$)(A().scrollContainer, A().important),
                                    listClassName: A().content,
                                    itemClassName: A().item,
                                    customComponents: D,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let i = null == (t = T.items) ? void 0 : t[e],
                                            n = j({ id: 'loading-messages.entity-is-loading' }, { entityName: j({ id: 'entity-names.podcast' }) });
                                        return i
                                            ? (0, s.jsx)(_.a, { album: i, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, i.id)
                                            : (0, s.jsx)(I.V, { 'aria-label': n });
                                    },
                                    totalCount: null != (t = null == (e = T.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: R,
                                    pageSize: 20,
                                    totalRequests: null != (i = T.requestsCount) ? i : 0,
                                    handleRef: P,
                                    context: { listAriaLabel: j({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: k,
                                    useWindowScroll: k,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var s = i(67174);
            let n = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                n = i(88969),
                r = i(58390),
                o = i(17392),
                l = i(29993),
                a = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                p = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: g, key: y, className: v } = e,
                    E = (0, r.useRouter)(),
                    O = (0, p.N)().get(u.QG),
                    b = (0, l.c)(() => {
                        O.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), E.push(O.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: b,
                        className: v,
                        isBlock: g,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
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
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: n = {}, ...r } = t,
                        o = e || 'Internal error';
                    (super(o, r), (this.message = o), (this.code = i), (this.data = n), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
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
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => n }), i(46606));
            var s = i(91136);
            class n extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                o = i(53548),
                l = i(2058),
                a = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                p = i(87999),
                m = i(47149),
                _ = i(84423),
                h = i(89846),
                g = i(64543),
                y = i(63582);
            let v = (0, y.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                E = (0, y.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: n } = (0, g.j)();
                    (0, o.useEffect)(() => {
                        if (!i || !s || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: n.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == n ? void 0 : n.pageId]);
                });
            var O = i(44230),
                b = i(4370),
                N = i(72288),
                x = i(97956),
                I = i(56248),
                f = i(90688),
                C = i(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = i(96856),
                k = i.n(A);
            let S = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: o } = (0, N.g)(),
                    { contentRef: l } = (0, O.g)(),
                    d = (0, C.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(k().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(I.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(k().navigation, { [k().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, n.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(f._V, { className: k().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: k().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: k().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: k().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: k().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = i(9184),
                L = i.n(j);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: p } = (0, l.A)(),
                    m = (0, o.useContext)(N.P),
                    _ = null == m ? void 0 : m.experiments.checkExperiment(x.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(h);
                let { sendRefreshEvent: g } = v(),
                    y = (0, o.useCallback)(() => {
                        (g(), (window.location.href = b.Z.main.href));
                    }, [g]),
                    { contentRef: f } = (0, O.g)();
                return _
                    ? (0, s.jsx)(S, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, n.$)(L().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(I.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !f }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, n.$)(L().title, L().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, n.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: y,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        41410: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 2622)));
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
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        54378: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => d });
            var s = i(88800),
                n = i(65724),
                r = i(88969),
                o = i(52300),
                l = i(29504),
                a = i(78212),
                c = i.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(c().emptyContent, t),
                    children: [
                        (0, s.jsx)(o.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, s.jsx)(l.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                n = i(84961),
                r = i(58390),
                o = i(65724),
                l = i(88969),
                a = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let p = (0, n.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                _ = i(72288);
            let h = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: n } = (0, _.g)();
                return n.isAuthorized ? t : (i && (0, r.redirect)(m.Z.main.href), (0, s.jsx)(p, {}));
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => o });
            var s = i(88800);
            i(30282);
            var n = i(11006),
                r = i.n(n);
            let o = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var s = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => p, Yw: () => s, JU: () => n, DQ: () => h, Ve: () => g });
            var s,
                n,
                r = i(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (n) {
                                    if (n !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, n), e(n));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (n) {
                                if (n !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            var l = i(14965);
            class a extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class p {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new a(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(n || (n = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, n.E],
                    [s.AGE_18_ICON, n.AGE_18],
                    [s.AGE_16_ICON, n.AGE_16],
                    [s.AGE_12_ICON, n.AGE_12],
                    [s.EXCLAMATION_ICON, n.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [s.SUBSTITUTED_ICON, n.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                _ = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => u(e, t).length > 0;
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var s = i(53548),
                n = i(63582),
                r = i(245),
                o = i(22681),
                l = i(56374);
            let a = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, o.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                n = i(53548),
                r = i(53534),
                o = i(63582),
                l = i(245);
            let a = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (a.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== i ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, n) : null, session: n };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    if (
                        a.isReady !== o ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...a, input: t, isReady: o, scope: o ? i.createScreenScope(t, a.session) : null };
                        return (u(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: a, children: e });
                },
            );
        },
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                n = i(65724),
                r = i(61013),
                o = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: n, ...r } = e,
                        o = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        l = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': o, style: { ...t }, ref: i, ...r });
                },
                a = (0, o.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: o, withForceScroll: l, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, n.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                p = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, h] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), a.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, n, t, i, a],
                        );
                    (0, o.useEffect)(() => {
                        a.length > 0 && p && g(p);
                    }, a);
                    let y = (0, o.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: y, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: y = 20,
                            totalCount: v,
                            totalRequests: E,
                            debounceDurationInMs: O,
                            initialItemCount: b,
                            minInitialItemCount: N = 20,
                            handleRef: x,
                            alwaysShowScrollbar: I = !1,
                            testId: f,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...A
                        } = e,
                        [k, S] = (0, o.useState)(!1),
                        j = (0, o.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, o.useMemo)(() => {
                            var e, t;
                            return C
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, E, C]),
                        P = b ? Math.min(b, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, n.$)(d().root, { [d().root_scrolling]: k || I, [d().root_notScrolling]: !k && !I }, t),
                        'data-test-id': f,
                        children: [
                            C && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: x,
                                totalCount: v,
                                pageSize: y,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: O,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: T,
                                ...A,
                            }),
                            C && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => f });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                o = i(2058),
                l = i(30282),
                a = i(94144),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let _ = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                g = i(72288),
                y = i(11006),
                v = i.n(y),
                E = i(17392),
                O = i(29504),
                b = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, n.$)(v().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(O.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(b.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(O.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(b.N, { target: '_blank', href: n, className: v().link, 'data-test-id': E.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(O.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, n.$)(v().root, v().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, s.jsx)(x, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: n, formatMessage: r } = (0, o.A)(),
                    { language: l } = (0, h.h)(),
                    a = u({ formatMessage: r, language: l, tld: i.tld, year: _(n) });
                return (0, s.jsx)(N, { className: t, data: a });
            });
            let f = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: y } = (0, g.g)(),
                    { formatDate: E, formatMessage: O } = (0, o.A)(),
                    { isEnabled: b } = null != (t = (0, a.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    x = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: o, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: n, userRegion: r } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, n) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, n) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, n) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, n) },
                                    m = [o, a, u];
                                return (i && 'ru' === r && m.push(l), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: o }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: O,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: y.account.data.userSessionRegionIso,
                        year: _(E),
                    });
                return (0, s.jsx)(I, { className: (0, n.$)({ [v().root_withOffsetForDeeplink]: b }, i), data: x });
            });
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => r.G, X1: () => s.X, m5: () => n.m });
            var s = i(46606),
                n = i(91136),
                r = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: n = {}, ...r } = t,
                        o = e || 'Internal error';
                    (super(o, r), (this.message = o), (this.code = i), (this.data = n), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class n extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var s = i(53548);
            let n = (0, s.createContext)(null),
                r = () => (0, s.useContext)(n);
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
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => o, dM: () => l, uV: () => a });
            var s = i(89916),
                n = i(67990);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
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
                7908, 4700, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 7599, 4475, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 41410)),
        ),
            (_N_E = e.O()));
    },
]);
