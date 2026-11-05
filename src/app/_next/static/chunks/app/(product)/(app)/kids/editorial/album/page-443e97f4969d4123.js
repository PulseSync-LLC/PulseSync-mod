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
        4370: (e, t, l) => {
            'use strict';
            l.d(t, { Z: () => o });
            var i = l(67174);
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
        9492: (e, t, l) => {
            'use strict';
            l.d(t, { L: () => g });
            var i = l(88800),
                o = l(65724),
                s = l(53548),
                n = l(2058),
                r = l(88969),
                a = l(96817),
                c = l(52300),
                d = l(29504),
                u = l(59304),
                _ = l(4044),
                m = l.n(_);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: l } = e,
                    _ = (0, s.useRef)(null),
                    { formatMessage: g } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, s.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(r.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, i.jsx)(u.$, { className: (0, o.$)(m().root, m().important), message: p, closeToast: l });
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
        32596: (e, t, l) => {
            'use strict';
            l.d(t, { SomethingWentWrong: () => T });
            var i = l(88800),
                o = l(65724),
                s = l(84961),
                n = l(53548),
                r = l(2058),
                a = l(88969);
            l(30282);
            var c = l(96817),
                d = l(52300),
                u = l(29504),
                _ = l(87999),
                m = l(47149),
                g = l(84423),
                p = l(89846),
                h = l(64543),
                x = l(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: l } = (0, p.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !l || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: l,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, l, null == i ? void 0 : i.pageId]),
                    };
                }),
                y = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let l = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, p.g)(),
                        { screen: o } = (0, h.j)();
                    (0, n.useEffect)(() => {
                        if (!l || !i || !(null == o ? void 0 : o.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: o.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(l, t);
                    }, [l, e, i, null == o ? void 0 : o.pageId]);
                });
            var k = l(44230),
                N = l(4370),
                f = l(72288),
                E = l(97956),
                S = l(56248),
                b = l(90688),
                j = l(78940);
            let R = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var C = l(96856),
                A = l.n(C);
            let P = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: l = !0, onBack: s } = e,
                    { slam: n } = (0, f.g)(),
                    { contentRef: r } = (0, k.g)(),
                    d = (0, j.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(A().root, t),
                    children: [
                        l &&
                            (0, i.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(A().navigation, { [A().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(A().content, { [A().content_shrink]: !l }),
                            children: [
                                (0, i.jsx)(b._V, { className: A().image, src: R.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: A().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: A().buttonText,
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
            var L = l(9184),
                I = l.n(L);
            let T = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: l = !0, onBack: s } = e,
                    { formatMessage: _ } = (0, r.A)(),
                    m = (0, n.useContext)(f.P),
                    g = null == m ? void 0 : m.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    p = _(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(p);
                let { sendRefreshEvent: h } = v(),
                    x = (0, n.useCallback)(() => {
                        (h(), (window.location.href = N.Z.main.href));
                    }, [h]),
                    { contentRef: b } = (0, k.g)();
                return g
                    ? (0, i.jsx)(P, { className: t, withBackwardControl: l, onBack: s })
                    : (0, i.jsxs)('div', {
                          className: (0, o.$)(I().root, t),
                          children: [
                              l &&
                                  (0, i.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(I().navigation, { [I().navigation_desktop]: !b }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, o.$)(I().content, { [I().content_shrink]: !l }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, o.$)(I().title, I().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, o.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: x,
                                          className: I().button,
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
        43824: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 86014));
        },
        54320: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => d });
            var i = l(88800),
                o = l(53548),
                s = l(29993),
                n = l(9492),
                r = l(29595),
                a = l(74965),
                c = l(74773);
            let d = (e, t) => {
                let { notify: l, dismiss: d } = (0, a.l)(),
                    u = (0, o.useRef)(void 0),
                    _ = (0, s.c)(() => {
                        var l;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (l = e.lastRejectedPagesList) ? l : [])].reverse().filter((t) => {
                            var l;
                            return (null == (l = e.pageStates) ? void 0 : l[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = l((0, i.jsx)(n.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, l, e.rejectedPagesCount]);
            };
        },
        60266: (e, t, l) => {
            'use strict';
            l.d(t, { A: () => n });
            var i = l(88800);
            l(30282);
            var o = l(11006),
                s = l.n(o);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, l) => {
            'use strict';
            l.d(t, { v: () => o });
            var i = l(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: l, getExplicitContent: o, userRegion: s } = e;
                return 'ru' === s && t(i.z.WebNextFooterDisclaimer, 'on') ? l() : o();
            };
        },
        79418: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => h });
            var i = l(88800),
                o = l(65724),
                s = l(61013),
                n = l(53548);
            let r = (e) => {
                    let { style: t, forwardRef: l, context: o, ...s } = e,
                        n = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        r = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': n, style: { ...t }, ref: l, ...s });
                },
                a = (0, n.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
            var c = l(16434),
                d = l.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: l, withFooter: s, withHeader: n, withForceScroll: r, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: l,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var m = l(55482),
                g = l(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, n.useState)(null),
                        h = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && p(e), t && l)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < i; e++) l(e);
                                    }
                                }, s),
                            [s, o, t, l, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && _ && h(_);
                    }, a);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, i.jsx)(g.sN, { ref: d, rangeChanged: h, totalCount: r, endReached: x, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: h = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: k,
                            initialItemCount: N,
                            minInitialItemCount: f = 20,
                            handleRef: E,
                            alwaysShowScrollbar: S = !1,
                            testId: b,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: R,
                            ...C
                        } = e,
                        [A, P] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        I = (0, n.useMemo)(() => {
                            var e, t;
                            return j
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
                        }, [l, y, j]),
                        T = N ? Math.min(N, f) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: A || S, [d().root_notScrolling]: !A && !S }, t),
                        'data-test-id': b,
                        children: [
                            j && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, i.jsx)(p, {
                                overscan: h,
                                components: I,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: m,
                                scrollerRef: E,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: R,
                                ...C,
                            }),
                            j && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        86014: (e, t, l) => {
            'use strict';
            (l.r(t), l.d(t, { default: () => I }));
            var i = l(88800),
                o = l(58390),
                s = l(65724),
                n = l(84961),
                r = l(53548),
                a = l(2058),
                c = l(87999),
                d = l(76903),
                u = l(17392),
                _ = l(29993),
                m = l(79070),
                g = l(29504),
                p = l(32596),
                h = l(10079),
                x = l(69630),
                v = l(98427),
                y = l(46422),
                k = l(44230),
                N = l(37670),
                f = l(72288),
                E = l(54320),
                S = l(86790),
                b = l(60266),
                j = l(93317),
                R = l(37770),
                C = l(79418),
                A = l(19503),
                P = l.n(A);
            let L = (0, n.PA)((e) => {
                    var t, l, n, A;
                    let { id: L } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: I },
                            settings: { isMobile: T },
                        } = (0, f.g)(),
                        O = (0, y.W)(),
                        { contentScrollRef: w, setContentScrollRef: M } = (0, k.g)(),
                        { formatMessage: F } = (0, a.A)(),
                        D = (0, _.c)((e) => {
                            I.getAlbums({ page: e, pageSize: 20 });
                        });
                    (I.isNotFound && (0, o.notFound)(),
                        (0, r.useEffect)(
                            () => () => {
                                I.reset();
                            },
                            [I],
                        ));
                    let H = (0, m.L)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(S.w, { className: P().footer }) }) }));
                    if (
                        ((0, N.J)(I.isResolved),
                        (0, E.X)(I.pagesLoader, D),
                        I.isNeededToLoad && (0, r.use)(I.getData({ id: L, page: 0, pageSize: 20 })),
                        I.isSomethingWrong)
                    )
                        return (0, i.jsx)(p.SomethingWentWrong, {});
                    let W = I.isLoading ? 20 : null != (n = null == (l = I.pagesLoader) || null == (t = l.pager) ? void 0 : t.total) ? n : 0;
                    return (0, i.jsx)(d.a, {
                        pageId: c.AppScreen.KidsEditorialAlbums,
                        pageIdForFrom: v.b.KIDS_EDITORIAL_ALBUMS,
                        children: (0, i.jsx)(x.h, {
                            scrollElement: w,
                            outerTitle: I.title,
                            children: (0, i.jsxs)('div', {
                                className: P().root,
                                'data-test-id': u.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, i.jsx)(j.Y, {
                                        variant: j.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: O.canBack,
                                        children: (0, i.jsx)(g.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: I.title }),
                                    }),
                                    (0, i.jsx)(C.$, {
                                        context: { listAriaLabel: F({ id: 'mixes.albums-list' }, { genreName: I.title || '' }) },
                                        className: (0, s.$)(P().scrollContainer, P().important),
                                        customComponents: H,
                                        itemContentCallback: (e) => {
                                            let t = I.albums[e],
                                                l = F({ id: 'loading-messages.entity-is-loading' }, { entityName: F({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, i.jsx)(h.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, i.jsx)(R.V, { isActive: !0, 'aria-label': l });
                                        },
                                        totalCount: W,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (A = I.pagesLoader.requestsCount) ? A : 0,
                                        listClassName: P().content,
                                        itemClassName: P().item,
                                        handleRef: M,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                I = () => {
                    let e = (0, o.useSearchParams)().get('id');
                    return (e || (0, o.notFound)(), (0, i.jsx)(L, { id: e }));
                };
        },
        86790: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => b });
            var i = l(88800),
                o = l(65724),
                s = l(84961),
                n = l(2058),
                r = l(30282),
                a = l(94144),
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
                    let { formatMessage: t, language: l, tld: i, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, l) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, l) },
                    };
                };
            var _ = l(62293),
                m = l(99839);
            let g = (e) => e(new Date(), (0, m.m)());
            var p = l(51611),
                h = l(72288),
                x = l(11006),
                v = l.n(x),
                y = l(17392),
                k = l(29504),
                N = l(91292);
            let f = (e) => {
                    let { className: t, data: l } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    l.year,
                                    ' \xa0',
                                    (0, i.jsx)(N.N, {
                                        target: '_blank',
                                        href: l.yandexMusic.url,
                                        className: (0, o.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: l.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(N.N, {
                                target: '_blank',
                                href: l.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: l.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: l } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: l.map((e) => {
                                    let { id: t, title: l, url: o } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(N.N, { target: '_blank', href: o, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: l }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(k.HL, {
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
                S = (e) => {
                    let { className: t, data: l } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, i.jsx)(E, { links: l.links, disclaimer: l.disclaimer }), (0, i.jsx)(f, { data: l.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: l } = (0, h.g)(),
                    { formatDate: o, formatMessage: s } = (0, n.A)(),
                    { language: r } = (0, p.h)(),
                    a = u({ formatMessage: s, language: r, tld: l.tld, year: g(o) });
                return (0, i.jsx)(f, { className: t, data: a });
            });
            let b = (0, s.PA)((e) => {
                var t;
                let { className: l } = e,
                    { experiments: s, location: m, user: x } = (0, h.g)(),
                    { formatDate: y, formatMessage: k } = (0, n.A)(),
                    { isEnabled: N } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: l, isWebApplication: i, language: o, tld: s, userRegion: n, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: l, tld: i, language: o, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, o) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, o) },
                                    m = [n, a, u];
                                return (l && 'ru' === s && m.push(r), m.push(_), m);
                            })({ formatMessage: l, isWebApplication: i, language: o, tld: s, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => l({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => l({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: l, language: o, tld: s, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: g(y),
                    });
                return (0, i.jsx)(S, { className: (0, o.$)({ [v().root_withOffsetForDeeplink]: N }, l), data: E });
            });
        },
        94144: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => o, P: () => s });
            var i = l(53548);
            let o = (0, i.createContext)(null),
                s = () => (0, i.useContext)(o);
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
        99839: (e, t, l) => {
            'use strict';
            l.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 4046, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 8932, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 43824)),
        ),
            (_N_E = e.O()));
    },
]);
