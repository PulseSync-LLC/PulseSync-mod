(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7079],
    {
        2622: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionNonMusicLikedPage: () => L });
            var n = i(88800),
                o = i(65724),
                l = i(84961),
                s = i(53548),
                r = i(2058),
                a = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                m = i(29504),
                _ = i(32596),
                p = i(10079),
                h = i(69630),
                g = i(98427),
                x = i(46422),
                y = i(44230),
                v = i(37670),
                N = i(72288),
                k = i(86790),
                C = i(60266),
                S = i(93317),
                f = i(37770),
                E = i(79418),
                b = i(54378),
                j = i(95618),
                P = i.n(j);
            let L = (0, l.PA)(() => {
                var e, t, i;
                let {
                        user: l,
                        collection: { nonMusicLiked: j },
                        settings: { isMobile: L },
                        library: I,
                    } = (0, N.g)(),
                    { formatMessage: O } = (0, r.A)(),
                    { contentScrollRef: R, setContentScrollRef: T } = (0, y.g)(),
                    A = (0, x.W)();
                (0, v.J)(j.isResolved);
                let M = (0, s.useCallback)(
                    (e) => {
                        l.account.data.uid && j.getData({ userId: l.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [j, l.account.data.uid],
                );
                if (j.isRejected) return (0, n.jsx)(_.SomethingWentWrong, {});
                (0, s.useEffect)(
                    () => () => {
                        j.reset();
                    },
                    [j],
                );
                let w = (0, s.useMemo)(() => ({ Footer: () => (0, n.jsx)(C.A, { children: (0, n.jsx)(k.w, { className: P().footer }) }) }), []);
                if (l.account.data.uid && j.isNeededToLoad) {
                    let e = [j.getData({ userId: l.account.data.uid, metaType: 'podcast', pageSize: 20 }), I.getData()];
                    (0, s.use)(Promise.allSettled(e));
                }
                return (0, n.jsx)(d.a, {
                    pageId: c.AppScreen.OwnPodcasts,
                    pageIdForFrom: g.b.OWN_PODCASTS,
                    children: (0, n.jsx)(h.h, {
                        scrollElement: R,
                        outerTitle: O({ id: 'page.delayed-non-music' }),
                        children: (0, n.jsxs)('div', {
                            className: P().root,
                            'data-test-id': u.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, n.jsx)(S.Y, {
                                    variant: S.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: A.canBack,
                                    children: (0, n.jsx)(m.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, n.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                j.isEmptyItems && !j.isRejected && (0, n.jsx)(b.M, { className: P().emptyBlock }),
                                (0, n.jsx)(E.$, {
                                    className: (0, o.$)(P().scrollContainer, P().important),
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    customComponents: w,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let i = null == (t = j.items) ? void 0 : t[e],
                                            o = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.podcast' }) });
                                        return i
                                            ? (0, n.jsx)(p.a, { album: i, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, i.id)
                                            : (0, n.jsx)(f.V, { 'aria-label': o });
                                    },
                                    totalCount: null != (t = null == (e = j.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: M,
                                    pageSize: 20,
                                    totalRequests: null != (i = j.requestsCount) ? i : 0,
                                    handleRef: T,
                                    context: { listAriaLabel: O({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: L,
                                    useWindowScroll: L,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o });
            var n = i(67174);
            let o = {
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
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var n = i(88800),
                o = i(88969),
                l = i(58390),
                s = i(17392),
                r = i(29993),
                a = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: g, key: x, className: y } = e,
                    v = (0, l.useRouter)(),
                    N = (0, m.N)().get(u.QG),
                    k = (0, r.c)(() => {
                        N.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(N.authorizationUrl));
                    });
                return (0, n.jsx)(
                    a.$,
                    {
                        onClick: k,
                        className: y,
                        isBlock: g,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, n.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, n.jsx)(o.A, { id: 'authorization.enter-button' }) }),
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
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var n = i(88800),
                o = i(65724),
                l = i(84961),
                s = i(53548),
                r = i(2058),
                a = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(87999),
                _ = i(47149),
                p = i(84423),
                h = i(89846),
                g = i(64543),
                x = i(63582);
            let y = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: n } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !i || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: n.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, i, null == n ? void 0 : n.pageId]),
                    };
                }),
                v = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: o } = (0, g.j)();
                    (0, s.useEffect)(() => {
                        if (!i || !n || !(null == o ? void 0 : o.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: o.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(i, t);
                    }, [i, e, n, null == o ? void 0 : o.pageId]);
                });
            var N = i(44230),
                k = i(4370),
                C = i(72288),
                S = i(97956),
                f = i(56248),
                E = i(90688),
                b = i(78940);
            let j = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var P = i(96856),
                L = i.n(P);
            let I = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: l } = e,
                    { slam: s } = (0, C.g)(),
                    { contentRef: r } = (0, N.g)(),
                    d = (0, b.Z)(k.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(L().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(L().navigation, { [L().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: l,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, o.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(E._V, { className: L().image, src: j.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: L().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = i(9184),
                R = i.n(O);
            let T = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: l } = e,
                    { formatMessage: m } = (0, r.A)(),
                    _ = (0, s.useContext)(C.P),
                    p = null == _ ? void 0 : _.experiments.checkExperiment(S.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                v(h);
                let { sendRefreshEvent: g } = y(),
                    x = (0, s.useCallback)(() => {
                        (g(), (window.location.href = k.Z.main.href));
                    }, [g]),
                    { contentRef: E } = (0, N.g)();
                return p
                    ? (0, n.jsx)(I, { className: t, withBackwardControl: i, onBack: l })
                    : (0, n.jsxs)('div', {
                          className: (0, o.$)(R().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(R().navigation, { [R().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: l,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, o.$)(R().content, { [R().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, o.$)(R().title, R().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, o.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: x,
                                          className: R().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(a.A, { id: 'page-error.restart-app-button' })],
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
        54378: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => d });
            var n = i(88800),
                o = i(65724),
                l = i(88969),
                s = i(52300),
                r = i(29504),
                a = i(78212),
                c = i.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(c().emptyContent, t),
                    children: [
                        (0, n.jsx)(s.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, n.jsx)(r.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(l.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var n = i(88800),
                o = i(84961),
                l = i(58390),
                s = i(65724),
                r = i(88969),
                a = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let m = (0, o.PA)(() =>
                (0, n.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, n.jsx)(a.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, n.jsx)(a.HL, {
                            className: (0, s.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, n.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, n.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(4370),
                p = i(72288);
            let h = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: o } = (0, p.g)();
                return o.isAuthorized ? t : (i && (0, l.redirect)(_.Z.main.href), (0, n.jsx)(m, {}));
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var n = i(88800);
            i(30282);
            var o = i(11006),
                l = i.n(o);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: l().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => o });
            var n = i(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: o, userRegion: l } = e;
                return 'ru' === l && t(n.z.WebNextFooterDisclaimer, 'on') ? i() : o();
            };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            let n = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
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
            var n = i(88800),
                o = i(65724),
                l = i(61013),
                s = i(53548);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: o, ...l } = e,
                        s = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        r = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': s, style: { ...t }, ref: i, ...l });
                },
                a = (0, s.forwardRef)((e, t) => (0, n.jsx)(r, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: s, withForceScroll: r, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: o,
                            debounceDurationInMs: l = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && h(e), t && i)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < n; e++) i(e);
                                    }
                                }, l),
                            [l, o, t, i, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && m && g(m);
                    }, a);
                    let x = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, n.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: r, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: N,
                            initialItemCount: k,
                            minInitialItemCount: C = 20,
                            handleRef: S,
                            alwaysShowScrollbar: f = !1,
                            testId: E,
                            isMobileLayout: b = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...P
                        } = e,
                        [L, I] = (0, s.useState)(!1),
                        O = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        R = (0, s.useMemo)(() => {
                            var e, t;
                            return b
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, v, b]),
                        T = k ? Math.min(k, C) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: L || f, [d().root_notScrolling]: !L && !f }, t),
                        'data-test-id': E,
                        children: [
                            b && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, n.jsx)(h, {
                                overscan: g,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: _,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: j,
                                ...P,
                            }),
                            b && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => E });
            var n = i(88800),
                o = i(65724),
                l = i(84961),
                s = i(2058),
                r = i(30282),
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
                    let { formatMessage: t, language: i, tld: n, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, i) },
                    };
                };
            var m = i(62293),
                _ = i(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(51611),
                g = i(72288),
                x = i(11006),
                y = i.n(x),
                v = i(17392),
                N = i(29504),
                k = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(y().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, n.jsx)(k.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, o.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(k.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: o } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(k.N, { target: '_blank', href: o, className: y().link, 'data-test-id': v.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, o.$)(y().root, y().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, n.jsx)(S, { links: i.links, disclaimer: i.disclaimer }), (0, n.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: o, formatMessage: l } = (0, s.A)(),
                    { language: r } = (0, h.h)(),
                    a = u({ formatMessage: l, language: r, tld: i.tld, year: p(o) });
                return (0, n.jsx)(C, { className: t, data: a });
            });
            let E = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: _, user: x } = (0, g.g)(),
                    { formatDate: v, formatMessage: N } = (0, s.A)(),
                    { isEnabled: k } = null != (t = (0, a.P)()) ? t : {},
                    { language: C } = (0, h.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: n, language: o, tld: l, userRegion: s, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: n, language: o, userRegion: l } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, o) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, o) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, o) },
                                    _ = [s, a, u];
                                return (i && 'ru' === l && _.push(r), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: n, language: o, tld: l, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: o, tld: l, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: r.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(v),
                    });
                return (0, n.jsx)(f, { className: (0, o.$)({ [y().root_withOffsetForDeeplink]: k }, i), data: S });
            });
        },
        89256: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 2622)));
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => o, P: () => l });
            var n = i(53548);
            let o = (0, n.createContext)(null),
                l = () => (0, n.useContext)(o);
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
            i.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => s, dM: () => r, uV: () => a });
            var n = i(89916),
                o = i(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof n.m5) || !(0, o.N)(e.cause)) return 'unexpected';
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
                4814, 7437, 9079, 1833, 3469, 8194, 1191, 8655, 2837, 4475, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 8888, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 89256)),
        ),
            (_N_E = e.O()));
    },
]);
