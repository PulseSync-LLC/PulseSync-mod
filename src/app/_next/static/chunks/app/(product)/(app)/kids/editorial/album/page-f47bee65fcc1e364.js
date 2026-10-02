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
        1466: (e, t, l) => {
            'use strict';
            l.d(t, { L: () => g });
            var o = l(25839),
                i = l(82298),
                r = l(74631),
                n = l(39004),
                s = l(8487),
                a = l(4071),
                c = l(66738),
                d = l(4254),
                u = l(51790),
                _ = l(12558),
                m = l.n(_);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: l } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: g } = (0, n.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, o.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, o.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, o.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, o.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, o.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, o.jsx)(u.$, { className: (0, i.$)(m().root, m().important), message: h, closeToast: l });
            };
        },
        6968: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => p });
            var o = l(25839),
                i = l(82298),
                r = l(28631),
                n = l(74631);
            let s = (e) => {
                    let { style: t, forwardRef: l, context: i, ...r } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, o.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: l, ...r });
                },
                a = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
            var c = l(45300),
                d = l.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: l, withFooter: r, withHeader: n, withForceScroll: s, ...a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: l,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, o.jsx)(u, { forwardRef: t, ...e }));
            var m = l(10508),
                g = l(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: i,
                            debounceDurationInMs: r = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        p = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && h(e), t && l)) {
                                        let o = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < o; e++) l(e);
                                    }
                                }, r),
                            [r, i, t, l, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && _ && p(_);
                    }, a);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, o.jsx)(g.sN, { ref: d, rangeChanged: p, totalCount: s, endReached: x, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: f,
                            initialItemCount: N,
                            minInitialItemCount: v = 20,
                            handleRef: S,
                            alwaysShowScrollbar: k = !1,
                            testId: R,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...P
                        } = e,
                        [O, A] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return C
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : a,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : a,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, E, C]),
                        b = N ? Math.min(N, v) : void 0;
                    return (0, o.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: O || k, [d().root_notScrolling]: !O && !k }, t),
                        'data-test-id': R,
                        children: [
                            C && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, o.jsx)(h, {
                                overscan: p,
                                components: T,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: L,
                                ...P,
                            }),
                            C && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, l) => {
            'use strict';
            l.d(t, { v: () => i });
            var o = l(44806);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: l, getExplicitContent: i, userRegion: r } = e;
                return 'ru' === r && t(o.z.WebNextFooterDisclaimer, 'on') ? l() : i();
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
        14617: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 40833));
        },
        26076: (e, t, l) => {
            'use strict';
            l.d(t, { A: () => n });
            var o = l(25839);
            l(93588);
            var i = l(400),
                r = l.n(i);
            let n = (e) => {
                let { children: t } = e;
                return (0, o.jsx)('footer', { className: r().empty });
            };
        },
        27954: (e, t, l) => {
            'use strict';
            l.d(t, { P: () => r, g: () => n });
            var o = l(74631),
                i = l(36432);
            let r = (0, o.createContext)(null);
            function n() {
                let e = (0, o.useContext)(r);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        40833: (e, t, l) => {
            'use strict';
            (l.r(t), l.d(t, { default: () => j }));
            var o = l(25839),
                i = l(84059),
                r = l(82298),
                n = l(88204),
                s = l(74631),
                a = l(39004),
                c = l(61493),
                d = l(71035),
                u = l(49656),
                _ = l(4254),
                m = l(78299),
                g = l(76939),
                h = l(1407),
                p = l(20258),
                x = l(10322),
                y = l(21784),
                E = l(89192),
                f = l(30716),
                N = l(27954),
                v = l(60678),
                S = l(99401),
                k = l(26076),
                R = l(10603),
                C = l(19412),
                L = l(6968),
                P = l(65757),
                O = l.n(P);
            let A = (0, n.PA)((e) => {
                    var t, l, n, P;
                    let { id: A } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: j },
                            settings: { isMobile: T },
                        } = (0, N.g)(),
                        b = (0, y.W)(),
                        { contentScrollRef: I, setContentScrollRef: w } = (0, E.g)(),
                        { formatMessage: F } = (0, a.A)(),
                        D = (0, d.c)((e) => {
                            j.getAlbums({ page: e, pageSize: 20 });
                        });
                    (j.isNotFound && (0, i.notFound)(),
                        (0, s.useEffect)(
                            () => () => {
                                j.reset();
                            },
                            [j],
                        ));
                    let M = (0, u.L)(() => ({ Footer: () => (0, o.jsx)(k.A, { children: (0, o.jsx)(S.w, { className: O().footer }) }) }));
                    if (
                        ((0, f.J)(j.isResolved),
                        (0, v.X)(j.pagesLoader, D),
                        j.isNeededToLoad && (0, s.use)(j.getData({ id: A, page: 0, pageSize: 20 })),
                        j.isSomethingWrong)
                    )
                        return (0, o.jsx)(m.SomethingWentWrong, {});
                    let W = j.isLoading ? 20 : null != (n = null == (l = j.pagesLoader) || null == (t = l.pager) ? void 0 : t.total) ? n : 0;
                    return (0, o.jsx)(x.n, {
                        pageId: p._Q.KIDS_EDITORIAL_ALBUMS,
                        children: (0, o.jsx)(h.h, {
                            scrollElement: I,
                            outerTitle: j.title,
                            children: (0, o.jsxs)('div', {
                                className: O().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, o.jsx)(R.Y, {
                                        variant: R.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: b.canBack,
                                        children: (0, o.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: j.title }),
                                    }),
                                    (0, o.jsx)(L.$, {
                                        context: { listAriaLabel: F({ id: 'mixes.albums-list' }, { genreName: j.title || '' }) },
                                        className: (0, r.$)(O().scrollContainer, O().important),
                                        customComponents: M,
                                        itemContentCallback: (e) => {
                                            let t = j.albums[e],
                                                l = F({ id: 'loading-messages.entity-is-loading' }, { entityName: F({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, o.jsx)(g.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, o.jsx)(C.V, { isActive: !0, 'aria-label': l });
                                        },
                                        totalCount: W,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (P = j.pagesLoader.requestsCount) ? P : 0,
                                        listClassName: O().content,
                                        itemClassName: O().item,
                                        handleRef: w,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                j = () => {
                    let e = (0, i.useSearchParams)().get('id');
                    return (e || (0, i.notFound)(), (0, o.jsx)(A, { id: e }));
                };
        },
        43354: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => i, P: () => r });
            var o = l(74631);
            let i = (0, o.createContext)(null),
                r = () => (0, o.useContext)(i);
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
        53712: (e, t, l) => {
            'use strict';
            l.d(t, { Z: () => i });
            var o = l(25895);
            let i = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        60678: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => d });
            var o = l(25839),
                i = l(74631),
                r = l(71035),
                n = l(1466),
                s = l(91149),
                a = l(92942),
                c = l(36159);
            let d = (e, t) => {
                let { notify: l, dismiss: d } = (0, a.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var l;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let o = [...(null != (l = e.lastRejectedPagesList) ? l : [])].reverse().filter((t) => {
                            var l;
                            return (null == (l = e.pageStates) ? void 0 : l[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            o.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = l((0, o.jsx)(n.L, { reloadBlocks: _ }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, _, l, e.rejectedPagesCount]);
            };
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
        78299: (e, t, l) => {
            'use strict';
            l.d(t, { SomethingWentWrong: () => S });
            var o = l(25839),
                i = l(82298),
                r = l(88204),
                n = l(74631),
                s = l(39004),
                a = l(8487);
            l(93588);
            var c = l(4071),
                d = l(66738),
                u = l(4254),
                _ = l(67379),
                m = l(36619),
                g = l(76945),
                h = l(59450),
                p = l(84e3),
                x = l(97952),
                y = l(89192),
                E = l(53712),
                f = l(15270),
                N = l(68854),
                v = l.n(N);
            let S = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: l = !0 } = e,
                    { formatMessage: r } = (0, s.A)(),
                    N = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: l } = (0, h.gf)(),
                        { pageId: o } = (0, x.$)(),
                        i = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !l || !o) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: l,
                                pageId: o,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, g.z5)(t.evgenInstance, r);
                    }, [t, e, l, o, i]);
                })(N);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: l } = (0, x.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !l) return;
                                let i = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: l,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, g.bv)(e.evgenInstance, i);
                            }, [e, t, l, o]),
                        };
                    })(),
                    k = (0, n.useCallback)(() => {
                        (S(), (window.location.href = E.Z.main.href));
                    }, [S]),
                    { contentRef: R } = (0, y.g)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(v().root, t),
                    children: [
                        l &&
                            (0, o.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(v().navigation, { [v().navigation_desktop]: !R }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(v().content, { [v().content_shrink]: !l }),
                            children: [
                                (0, o.jsx)(d.I, { className: v().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(u.DZ, { className: (0, i.$)(v().title, v().important), variant: 'h3', size: 'xs', children: N }),
                                (0, o.jsxs)(u.HL, {
                                    className: (0, i.$)(v().text, v().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: k,
                                    className: v().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        84e3: (e, t, l) => {
            'use strict';
            l.d(t, { U: () => r });
            var o = l(36484),
                i = l(62562);
            let r = () => (0, i.N)().get(o.Zf);
        },
        89514: (e, t, l) => {
            'use strict';
            l.d(t, { m: () => o });
            let o = () => ({ year: 'numeric' });
        },
        99401: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => R });
            var o = l(25839),
                i = l(82298),
                r = l(88204),
                n = l(39004),
                s = l(93588),
                a = l(43354),
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
            let d = (e, t, l) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(l);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(l);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(l);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(l);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(l);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: l, tld: o, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, o, l) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, o, l) },
                    };
                };
            var _ = l(10959),
                m = l(89514);
            let g = (e) => e(new Date(), (0, m.m)());
            var h = l(96433),
                p = l(27954),
                x = l(400),
                y = l.n(x),
                E = l(61493),
                f = l(4254),
                N = l(97522);
            let v = (e) => {
                    let { className: t, data: l } = e;
                    return (0, o.jsxs)('div', {
                        className: (0, i.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, o.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    l.year,
                                    ' \xa0',
                                    (0, o.jsx)(N.N, {
                                        target: '_blank',
                                        href: l.yandexMusic.url,
                                        className: (0, i.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: l.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, o.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, o.jsx)(N.N, {
                                target: '_blank',
                                href: l.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: l.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: l } = e;
                    return (0, o.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, o.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: l.map((e) => {
                                    let { id: t, title: l, url: i } = e;
                                    return (0, o.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, o.jsx)(N.N, { target: '_blank', href: i, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: l }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, o.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: l } = e;
                    return (0, o.jsxs)('footer', {
                        className: (0, i.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, o.jsx)(S, { links: l.links, disclaimer: l.disclaimer }), (0, o.jsx)(v, { data: l.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: l } = (0, p.g)(),
                    { formatDate: i, formatMessage: r } = (0, n.A)(),
                    { language: s } = (0, h.h)(),
                    a = u({ formatMessage: r, language: s, tld: l.tld, year: g(i) });
                return (0, o.jsx)(v, { className: t, data: a });
            });
            let R = (0, r.PA)((e) => {
                var t;
                let { className: l } = e,
                    { experiments: r, location: m, user: x } = (0, p.g)(),
                    { formatDate: E, formatMessage: f } = (0, n.A)(),
                    { isEnabled: N } = null != (t = (0, a.P)()) ? t : {},
                    { language: v } = (0, h.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: l, isWebApplication: o, language: i, tld: r, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: l, tld: o, language: i, userRegion: r } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, o, i) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, o, i) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, o, i) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, o, i) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, o, i) },
                                    m = [n, a, u];
                                return (l && 'ru' === r && m.push(s), m.push(_), m);
                            })({ formatMessage: l, isWebApplication: o, language: i, tld: r, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => l({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => l({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: l, language: i, tld: r, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: s.$3,
                        tld: m.tld,
                        language: v,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: g(E),
                    });
                return (0, o.jsx)(k, { className: (0, i.$)({ [y().root_withOffsetForDeeplink]: N }, l), data: S });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 8402, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4245, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 14617)),
        ),
            (_N_E = e.O()));
    },
]);
