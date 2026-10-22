(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
    {
        400: (e) => {
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
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var l = i(25839),
                s = i(82298),
                n = i(74631),
                o = i(39004),
                r = i(8487),
                a = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, n.useRef)(null),
                    { formatMessage: g } = (0, o.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, n.useMemo)(
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
                return (0, l.jsx)(u.$, { className: (0, s.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var l = i(25839),
                s = i(82298),
                n = i(28631),
                o = i(74631);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: s, ...n } = e,
                        o = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        r = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': o, style: { ...t }, ref: i, ...n });
                },
                a = (0, o.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: o, withForceScroll: r, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, o.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                g = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: n = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, o.useState)(null),
                        p = (0, o.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && h(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < l; e++) i(e);
                                    }
                                }, n),
                            [n, s, t, i, a],
                        );
                    (0, o.useEffect)(() => {
                        a.length > 0 && _ && p(_);
                    }, a);
                    let x = (0, o.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
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
                            totalCount: y,
                            totalRequests: f,
                            debounceDurationInMs: N,
                            initialItemCount: v,
                            minInitialItemCount: E = 20,
                            handleRef: k,
                            alwaysShowScrollbar: S = !1,
                            testId: b,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...C
                        } = e,
                        [L, P] = (0, o.useState)(!1),
                        A = (0, o.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        T = (0, o.useMemo)(() => {
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
                        }, [i, f, R]),
                        O = v ? Math.min(v, E) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: L || S, [d().root_notScrolling]: !L && !S }, t),
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
                                scrollerRef: k,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: j,
                                ...C,
                            }),
                            R && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var l = i(44806);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: s, userRegion: n } = e;
                return 'ru' === n && t(l.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => o });
            var l = i(25839);
            i(93588);
            var s = i(400),
                n = i.n(s);
            let o = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: n().empty });
            };
        },
        27990: (e) => {
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
        40833: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => A }));
            var l = i(25839),
                s = i(84059),
                n = i(82298),
                o = i(88204),
                r = i(74631),
                a = i(39004),
                c = i(61493),
                d = i(71035),
                u = i(49656),
                _ = i(4254),
                m = i(64715),
                g = i(76939),
                h = i(1407),
                p = i(20258),
                x = i(10322),
                y = i(21784),
                f = i(89192),
                N = i(30716),
                v = i(27954),
                E = i(60678),
                k = i(99401),
                S = i(26076),
                b = i(10603),
                R = i(19412),
                j = i(6968),
                C = i(65757),
                L = i.n(C);
            let P = (0, o.PA)((e) => {
                    var t, i, o, C;
                    let { id: P } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: A },
                            settings: { isMobile: T },
                        } = (0, v.g)(),
                        O = (0, y.W)(),
                        { contentScrollRef: I, setContentScrollRef: w } = (0, f.g)(),
                        { formatMessage: M } = (0, a.A)(),
                        F = (0, d.c)((e) => {
                            A.getAlbums({ page: e, pageSize: 20 });
                        });
                    (A.isNotFound && (0, s.notFound)(),
                        (0, r.useEffect)(
                            () => () => {
                                A.reset();
                            },
                            [A],
                        ));
                    let D = (0, u.L)(() => ({ Footer: () => (0, l.jsx)(S.A, { children: (0, l.jsx)(k.w, { className: L().footer }) }) }));
                    if (
                        ((0, N.J)(A.isResolved),
                        (0, E.X)(A.pagesLoader, F),
                        A.isNeededToLoad && (0, r.use)(A.getData({ id: P, page: 0, pageSize: 20 })),
                        A.isSomethingWrong)
                    )
                        return (0, l.jsx)(m.SomethingWentWrong, {});
                    let H = A.isLoading ? 20 : null != (o = null == (i = A.pagesLoader) || null == (t = i.pager) ? void 0 : t.total) ? o : 0;
                    return (0, l.jsx)(x.n, {
                        pageId: p._Q.KIDS_EDITORIAL_ALBUMS,
                        children: (0, l.jsx)(h.h, {
                            scrollElement: I,
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
                                        className: (0, n.$)(L().scrollContainer, L().important),
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
                                        handleRef: w,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                A = () => {
                    let e = (0, s.useSearchParams)().get('id');
                    return (e || (0, s.notFound)(), (0, l.jsx)(P, { id: e }));
                };
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => n });
            var l = i(74631);
            let s = (0, l.createContext)(null),
                n = () => (0, l.useContext)(s);
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        48085: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 40833));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var l = i(25895);
            let s = {
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
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var l = i(25839),
                s = i(74631),
                n = i(71035),
                o = i(1466),
                r = i(91149),
                a = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, s.useRef)(void 0),
                    _ = (0, n.c)(() => {
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
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(o.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => A });
            var l = i(25839),
                s = i(82298),
                n = i(88204),
                o = i(74631),
                r = i(39004),
                a = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(44031),
                g = i(87277),
                h = i(59450),
                p = i(84e3),
                x = i(97952),
                y = i(89192),
                f = i(53712),
                N = i(27954),
                v = i(44806),
                E = i(15270),
                k = i(23818),
                S = i(85686);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = i(27990),
                j = i.n(R);
            let C = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: n } = (0, N.g)(),
                    { contentRef: o } = (0, y.g)(),
                    r = (0, S.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, l.jsxs)('div', {
                    className: (0, s.$)(j().root, t),
                    children: [
                        i &&
                            (0, l.jsx)(E.L, { withBackwardFallback: '/', className: (0, s.$)(j().navigation, { [j().navigation_desktop]: !o }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, s.$)(j().content, { [j().content_shrink]: !i }),
                            children: [
                                (0, l.jsx)(k._V, { className: j().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
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
                                n.hasDownloadedTracks &&
                                    (0, l.jsx)(c.$, {
                                        className: j().button,
                                        onClick: r,
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
            var L = i(68854),
                P = i.n(L);
            let A = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, r.A)(),
                    k = (0, o.useContext)(N.P),
                    S = null == k ? void 0 : k.experiments.checkExperiment(v.z.WebNextUnstableMusicScreen, 'on'),
                    b = n(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: l } = (0, x.$)(),
                        s = (0, p.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !i || !l) return;
                        let n = (0, _.F)({
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
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, g.z5)(t.evgenInstance, n);
                    }, [t, e, i, l, s]);
                })(b);
                let { sendRefreshEvent: R } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            l = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, _.F)({
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
                                s && (0, g.bv)(e.evgenInstance, s);
                            }, [e, t, i, l]),
                        };
                    })(),
                    j = (0, o.useCallback)(() => {
                        (R(), (window.location.href = f.Z.main.href));
                    }, [R]),
                    { contentRef: L } = (0, y.g)();
                return S
                    ? (0, l.jsx)(C, { className: t, withBackwardControl: i })
                    : (0, l.jsxs)('div', {
                          className: (0, s.$)(P().root, t),
                          children: [
                              i &&
                                  (0, l.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                  }),
                              (0, l.jsxs)('div', {
                                  className: (0, s.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, l.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, l.jsx)(u.DZ, { className: (0, s.$)(P().title, P().important), variant: 'h3', size: 'xs', children: b }),
                                      (0, l.jsxs)(u.HL, {
                                          className: (0, s.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, l.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, l.jsx)(c.$, {
                                          onClick: j,
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
        65757: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        68854: (e) => {
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
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => n });
            var l = i(36484),
                s = i(62562);
            let n = () => (0, s.N)().get(l.Zf);
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var l = i(25839),
                s = i(82298),
                n = i(88204),
                o = i(39004),
                r = i(93588),
                a = i(43354),
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
                    let { formatMessage: t, language: i, tld: l, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let g = (e) => e(new Date(), (0, m.m)());
            var h = i(96433),
                p = i(27954),
                x = i(400),
                y = i.n(x),
                f = i(61493),
                N = i(4254),
                v = i(97522);
            let E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(y().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(v.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(v.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, l.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: y().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: s } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, l.jsx)(v.N, { target: '_blank', href: s, className: y().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, s.$)(y().root, y().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, l.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(E, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: s, formatMessage: n } = (0, o.A)(),
                    { language: r } = (0, h.h)(),
                    a = u({ formatMessage: n, language: r, tld: i.tld, year: g(s) });
                return (0, l.jsx)(E, { className: t, data: a });
            });
            let b = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: m, user: x } = (0, p.g)(),
                    { formatDate: f, formatMessage: N } = (0, o.A)(),
                    { isEnabled: v } = null != (t = (0, a.P)()) ? t : {},
                    { language: E } = (0, h.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: l, language: s, tld: n, userRegion: o, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: l, language: s, userRegion: n } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, s) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, s) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, s) },
                                    m = [o, a, u];
                                return (i && 'ru' === n && m.push(r), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: l, language: s, tld: n, userRegion: o }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: n, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: E,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: g(f),
                    });
                return (0, l.jsx)(S, { className: (0, s.$)({ [y().root_withOffsetForDeeplink]: v }, i), data: k });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6392, 7170, 6749, 6287, 2121, 3472, 9122, 3112, 8402, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2038, 4163,
                3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 48085)),
        ),
            (_N_E = e.O()));
    },
]);
