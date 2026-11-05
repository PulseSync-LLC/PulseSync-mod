(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4602],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
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
                l = i(88969),
                o = i(58390),
                n = i(17392),
                r = i(29993),
                a = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: g, key: x, className: v } = e,
                    y = (0, o.useRouter)(),
                    N = (0, _.N)().get(u.QG),
                    b = (0, r.c)(() => {
                        N.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(N.authorizationUrl));
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
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var s = i(88800),
                l = i(65724),
                o = i(53548),
                n = i(2058),
                r = i(88969),
                a = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                _ = i(4044),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(r.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
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
            i.d(t, { SomethingWentWrong: () => I });
            var s = i(88800),
                l = i(65724),
                o = i(84961),
                n = i(53548),
                r = i(2058),
                a = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(87999),
                m = i(47149),
                p = i(84423),
                h = i(89846),
                g = i(64543),
                x = i(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                y = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: l } = (0, g.j)();
                    (0, n.useEffect)(() => {
                        if (!i || !s || !(null == l ? void 0 : l.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: l.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == l ? void 0 : l.pageId]);
                });
            var N = i(44230),
                b = i(4370),
                k = i(72288),
                f = i(97956),
                C = i(56248),
                j = i(90688),
                E = i(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = i(96856),
                P = i.n(A);
            let R = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { slam: n } = (0, k.g)(),
                    { contentRef: r } = (0, N.g)(),
                    d = (0, E.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(P().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(P().navigation, { [P().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(P().content, { [P().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(j._V, { className: P().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: P().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: P().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: P().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: P().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: P().buttonText,
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
            var L = i(9184),
                T = i.n(L);
            let I = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { formatMessage: _ } = (0, r.A)(),
                    m = (0, n.useContext)(k.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(h);
                let { sendRefreshEvent: g } = v(),
                    x = (0, n.useCallback)(() => {
                        (g(), (window.location.href = b.Z.main.href));
                    }, [g]),
                    { contentRef: j } = (0, N.g)();
                return p
                    ? (0, s.jsx)(R, { className: t, withBackwardControl: i, onBack: o })
                    : (0, s.jsxs)('div', {
                          className: (0, l.$)(T().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(T().navigation, { [T().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, l.$)(T().content, { [T().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, l.$)(T().title, T().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, l.$)(T().text, T().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: T().button,
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
        34580: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 91312)));
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
        45654: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => b });
            var s = i(88800),
                l = i(84961),
                o = i(88969),
                n = i(96817),
                r = i(52300),
                a = i(66719),
                c = i(29504),
                d = i(69630),
                u = i(46422),
                _ = i(44230),
                m = i(4370),
                p = i(78940),
                h = i(72288),
                g = i(86790),
                x = i(60266),
                v = i(93317),
                y = i(92270),
                N = i.n(y);
            let b = (0, l.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: l, setContentScrollRef: y } = (0, _.g)(),
                    b = (0, u.W)(),
                    k = (0, p.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: l,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(v.Y, {
                            variant: v.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: b.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(a.N, {
                            ref: y,
                            containerClassName: N().scrollableContainer,
                            className: N().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: N().content,
                                    children: [
                                        (0, s.jsx)('div', { className: N().icon, children: (0, s.jsx)(r.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: k,
                                            className: N().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(x.A, { children: (0, s.jsx)(g.w, { className: N().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        53080: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                l = i(53548),
                o = i(29993),
                n = i(9492),
                r = i(29595),
                a = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, l.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                l = i(84961),
                o = i(58390),
                n = i(65724),
                r = i(88969),
                a = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, l.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let h = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: l } = (0, p.g)();
                return l.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                o = i.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: o } = e;
                return 'ru' === o && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        71104: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                l = i(65724),
                o = i(61013),
                n = i(53548);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: l, ...o } = e,
                        n = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        r = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': n, style: { ...t }, ref: i, ...o });
                },
                a = (0, n.forwardRef)((e, t) => (0, s.jsx)(r, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: n, withForceScroll: r, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: o = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, o),
                            [o, l, t, i, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: r, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: N,
                            initialItemCount: b,
                            minInitialItemCount: k = 20,
                            handleRef: f,
                            alwaysShowScrollbar: C = !1,
                            testId: j,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...A
                        } = e,
                        [P, R] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return E
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, E]),
                        I = b ? Math.min(b, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: P || C, [d().root_notScrolling]: !P && !C }, t),
                        'data-test-id': j,
                        children: [
                            E && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: T,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: S,
                                ...A,
                            }),
                            E && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => j });
            var s = i(88800),
                l = i(65724),
                o = i(84961),
                n = i(2058),
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
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                g = i(72288),
                x = i(11006),
                v = i.n(x),
                y = i(17392),
                N = i(29504),
                b = i(91292);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(N.HL, {
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
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(b.N, { target: '_blank', href: l, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: l, formatMessage: o } = (0, n.A)(),
                    { language: r } = (0, h.h)(),
                    a = u({ formatMessage: o, language: r, tld: i.tld, year: p(l) });
                return (0, s.jsx)(k, { className: t, data: a });
            });
            let j = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: m, user: x } = (0, g.g)(),
                    { formatDate: y, formatMessage: N } = (0, n.A)(),
                    { isEnabled: b } = null != (t = (0, a.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: o, userRegion: n, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: o } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [n, a, u];
                                return (i && 'ru' === o && m.push(r), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: o, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: o, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, s.jsx)(C, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: b }, i), data: f });
            });
        },
        91312: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsAlbumsPage: () => L });
            var s = i(88800),
                l = i(65724),
                o = i(84961),
                n = i(53548),
                r = i(2058),
                a = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                _ = i(29504),
                m = i(32596),
                p = i(10079),
                h = i(69630),
                g = i(98427),
                x = i(46422),
                v = i(44230),
                y = i(37670),
                N = i(72288),
                b = i(54320),
                k = i(86790),
                f = i(60266),
                C = i(93317),
                j = i(37770),
                E = i(79418),
                S = i(71104),
                A = i(45654),
                P = i(53080),
                R = i.n(P);
            let L = (0, o.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, N.g)(),
                    { contentScrollRef: i, setContentScrollRef: o } = (0, v.g)(),
                    P = (0, x.W)(),
                    { formatMessage: L } = (0, r.A)(),
                    T = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: S.c });
                        },
                        [t],
                    );
                (0, b.X)(t.pagesLoader, T);
                let I = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(k.w, { className: R().footer }) }) }), []),
                    w = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, y.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: S.c })),
                t.isRejected)
                    ? (0, s.jsx)(m.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(A.i, { title: L({ id: 'kids.albums-and-podcasts' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsAlbums,
                            pageIdForFrom: g.b.COLLECTION_KIDS_ALBUMS,
                            children: (0, s.jsx)(h.h, {
                                scrollElement: i,
                                outerTitle: L({ id: 'kids.albums-and-podcasts' }),
                                children: (0, s.jsxs)('div', {
                                    className: R().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, s.jsx)(C.Y, {
                                            variant: C.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(_.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, s.jsx)(E.$, {
                                            className: (0, l.$)(R().scrollContainer, R().important),
                                            listClassName: R().content,
                                            itemClassName: R().item,
                                            customComponents: I,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    l = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(p.a, { album: i, contentLinesCount: 4, withLikesCount: !0 }, i.id)
                                                    : (0, s.jsx)(j.V, { 'aria-label': l, linesCount: 4 });
                                            },
                                            initialItemCount: w,
                                            totalCount: w,
                                            onGetDataByPage: T,
                                            pageSize: S.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: o,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => o });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                o = () => (0, s.useContext)(l);
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
            i.d(t, { C8: () => o, UC: () => n, dM: () => r, uV: () => a });
            var s = i(89916),
                l = i(67990);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof s.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
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
                4814, 7437, 9079, 1833, 3469, 8194, 1191, 8655, 8767, 2513, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4126, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 34580)),
        ),
            (_N_E = e.O()));
    },
]);
