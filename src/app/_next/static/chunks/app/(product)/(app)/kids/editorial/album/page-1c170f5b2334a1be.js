(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
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
            i.d(t, { Z: () => n });
            var l = i(67174);
            let n = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
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
            i.d(t, { L: () => g });
            var l = i(88800),
                n = i(65724),
                o = i(53548),
                s = i(2058),
                r = i(88969),
                a = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                _ = i(4044),
                m = i.n(_);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: g } = (0, s.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, o.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(r.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, l.jsx)(u.$, { className: (0, n.$)(m().root, m().important), message: h, closeToast: i });
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
        19503: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        30366: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86014));
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => A });
            var l = i(88800),
                n = i(65724),
                o = i(84961),
                s = i(53548),
                r = i(2058),
                a = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(78793),
                m = i(92716),
                g = i(99984),
                h = i(90780),
                p = i(65523),
                x = i(14518),
                f = i(44230),
                y = i(4370),
                k = i(72288),
                N = i(97956),
                v = i(56248),
                E = i(90688),
                S = i(78940);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = i(96856),
                j = i.n(R);
            let C = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { slam: s } = (0, k.g)(),
                    { contentRef: r } = (0, f.g)(),
                    d = (0, S.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, l.jsxs)('div', {
                    className: (0, n.$)(j().root, t),
                    children: [
                        i &&
                            (0, l.jsx)(v.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(j().navigation, { [j().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, l.jsxs)('div', {
                            className: (0, n.$)(j().content, { [j().content_shrink]: !i }),
                            children: [
                                (0, l.jsx)(E._V, { className: j().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, l.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, l.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, l.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, l.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, l.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, l.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, l.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, l.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(9184),
                P = i.n(L);
            let A = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: o } = e,
                    { formatMessage: E } = (0, r.A)(),
                    S = (0, s.useContext)(k.P),
                    b = null == S ? void 0 : S.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    R = E(b ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: l } = (0, x.$)(),
                        n = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !l) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: l,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, g.z5)(t.evgenInstance, o);
                    }, [t, e, i, l, n]);
                })(R);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            l = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: l,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, g.bv)(e.evgenInstance, n);
                            }, [e, t, i, l]),
                        };
                    })(),
                    L = (0, s.useCallback)(() => {
                        (j(), (window.location.href = y.Z.main.href));
                    }, [j]),
                    { contentRef: A } = (0, f.g)();
                return b
                    ? (0, l.jsx)(C, { className: t, withBackwardControl: i, onBack: o })
                    : (0, l.jsxs)('div', {
                          className: (0, n.$)(P().root, t),
                          children: [
                              i &&
                                  (0, l.jsx)(v.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(P().navigation, { [P().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, l.jsxs)('div', {
                                  className: (0, n.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, l.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, l.jsx)(u.DZ, { className: (0, n.$)(P().title, P().important), variant: 'h3', size: 'xs', children: R }),
                                      (0, l.jsxs)(u.HL, {
                                          className: (0, n.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, l.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, l.jsx)(c.$, {
                                          onClick: L,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, l.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, l.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var l = i(88800),
                n = i(53548),
                o = i(29993),
                s = i(9492),
                r = i(29595),
                a = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, n.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, n.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(s.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var l = i(88800);
            i(30282);
            var n = i(11006),
                o = i.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var l = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: o } = e;
                return 'ru' === o && t(l.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => r });
            var l = i(4086),
                n = i(41928),
                o = i(44084);
            let s = new WeakMap(),
                r = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = s.get(e);
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
                        return (s.set(e, i), i);
                    })((0, n.N)().get(l.Zf));
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var l = i(88800),
                n = i(65724),
                o = i(61013),
                s = i(53548);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: n, ...o } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        r = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': s, style: { ...t }, ref: i, ...o });
                },
                a = (0, s.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: s, withForceScroll: r, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, n.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                g = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: o = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, s.useState)(null),
                        p = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), a.length > 0 && h(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < l; e++) i(e);
                                    }
                                }, o),
                            [o, n, t, i, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && _ && p(_);
                    }, a);
                    let x = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, l.jsx)(g.sN, { ref: d, rangeChanged: p, totalCount: r, endReached: x, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: f,
                            totalRequests: y,
                            debounceDurationInMs: k,
                            initialItemCount: N,
                            minInitialItemCount: v = 20,
                            handleRef: E,
                            alwaysShowScrollbar: S = !1,
                            testId: b,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...C
                        } = e,
                        [L, P] = (0, s.useState)(!1),
                        A = (0, s.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        T = (0, s.useMemo)(() => {
                            var e, t;
                            return R
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
                        }, [i, y, R]),
                        O = N ? Math.min(N, v) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, n.$)(d().root, { [d().root_scrolling]: L || S, [d().root_notScrolling]: !L && !S }, t),
                        'data-test-id': b,
                        children: [
                            R && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(h, {
                                overscan: p,
                                components: T,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: A,
                                itemContent: m,
                                scrollerRef: E,
                                totalCount: f,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: j,
                                ...C,
                            }),
                            R && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        86014: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => A }));
            var l = i(88800),
                n = i(58390),
                o = i(65724),
                s = i(84961),
                r = i(53548),
                a = i(2058),
                c = i(17392),
                d = i(29993),
                u = i(79070),
                _ = i(29504),
                m = i(32596),
                g = i(10079),
                h = i(69630),
                p = i(12816),
                x = i(59844),
                f = i(46422),
                y = i(44230),
                k = i(37670),
                N = i(72288),
                v = i(54320),
                E = i(86790),
                S = i(60266),
                b = i(93317),
                R = i(37770),
                j = i(79418),
                C = i(19503),
                L = i.n(C);
            let P = (0, s.PA)((e) => {
                    var t, i, s, C;
                    let { id: P } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: A },
                            settings: { isMobile: T },
                        } = (0, N.g)(),
                        O = (0, f.W)(),
                        { contentScrollRef: w, setContentScrollRef: I } = (0, y.g)(),
                        { formatMessage: M } = (0, a.A)(),
                        F = (0, d.c)((e) => {
                            A.getAlbums({ page: e, pageSize: 20 });
                        });
                    (A.isNotFound && (0, n.notFound)(),
                        (0, r.useEffect)(
                            () => () => {
                                A.reset();
                            },
                            [A],
                        ));
                    let D = (0, u.L)(() => ({ Footer: () => (0, l.jsx)(S.A, { children: (0, l.jsx)(E.w, { className: L().footer }) }) }));
                    if (
                        ((0, k.J)(A.isResolved),
                        (0, v.X)(A.pagesLoader, F),
                        A.isNeededToLoad && (0, r.use)(A.getData({ id: P, page: 0, pageSize: 20 })),
                        A.isSomethingWrong)
                    )
                        return (0, l.jsx)(m.SomethingWentWrong, {});
                    let H = A.isLoading ? 20 : null != (s = null == (i = A.pagesLoader) || null == (t = i.pager) ? void 0 : t.total) ? s : 0;
                    return (0, l.jsx)(x.n, {
                        pageId: p._Q.KIDS_EDITORIAL_ALBUMS,
                        children: (0, l.jsx)(h.h, {
                            scrollElement: w,
                            outerTitle: A.title,
                            children: (0, l.jsxs)('div', {
                                className: L().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, l.jsx)(b.Y, {
                                        variant: b.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: O.canBack,
                                        children: (0, l.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: A.title }),
                                    }),
                                    (0, l.jsx)(j.$, {
                                        context: { listAriaLabel: M({ id: 'mixes.albums-list' }, { genreName: A.title || '' }) },
                                        className: (0, o.$)(L().scrollContainer, L().important),
                                        customComponents: D,
                                        itemContentCallback: (e) => {
                                            let t = A.albums[e],
                                                i = M({ id: 'loading-messages.entity-is-loading' }, { entityName: M({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, l.jsx)(g.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, l.jsx)(R.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: H,
                                        onGetDataByPage: F,
                                        pageSize: 20,
                                        totalRequests: null != (C = A.pagesLoader.requestsCount) ? C : 0,
                                        listClassName: L().content,
                                        itemClassName: L().item,
                                        handleRef: I,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                A = () => {
                    let e = (0, n.useSearchParams)().get('id');
                    return (e || (0, n.notFound)(), (0, l.jsx)(P, { id: e }));
                };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var l = i(88800),
                n = i(65724),
                o = i(84961),
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
                    let { formatMessage: t, language: i, tld: l, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let g = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                p = i(72288),
                x = i(11006),
                f = i.n(x),
                y = i(17392),
                k = i(29504),
                N = i(91292);
            let v = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, n.$)(f().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(N.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(N.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, l.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: f().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, l.jsx)(N.N, { target: '_blank', href: n, className: f().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, n.$)(f().root, f().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, l.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(v, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: n, formatMessage: o } = (0, s.A)(),
                    { language: r } = (0, h.h)(),
                    a = u({ formatMessage: o, language: r, tld: i.tld, year: g(n) });
                return (0, l.jsx)(v, { className: t, data: a });
            });
            let b = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: m, user: x } = (0, p.g)(),
                    { formatDate: y, formatMessage: k } = (0, s.A)(),
                    { isEnabled: N } = null != (t = (0, a.P)()) ? t : {},
                    { language: v } = (0, h.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: l, language: n, tld: o, userRegion: s, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: l, language: n, userRegion: o } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, n) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, n) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, n) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, n) },
                                    m = [s, a, u];
                                return (i && 'ru' === o && m.push(r), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: l, language: n, tld: o, userRegion: s }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: o, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: v,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: g(y),
                    });
                return (0, l.jsx)(S, { className: (0, n.$)({ [f().root_withOffsetForDeeplink]: N }, i), data: E });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => o });
            var l = i(53548);
            let n = (0, l.createContext)(null),
                o = () => (0, l.useContext)(n);
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
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 3637, 4046, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 2837, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 763, 2670, 7358,
            ],
            () => e((e.s = 30366)),
        ),
            (_N_E = e.O()));
    },
]);
