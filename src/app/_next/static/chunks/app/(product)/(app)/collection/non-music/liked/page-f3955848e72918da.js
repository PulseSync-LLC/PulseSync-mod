(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7079],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
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
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var n = i(25839),
                s = i(82298),
                o = i(28631),
                l = i(74631);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: s, ...o } = e,
                        l = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        r = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': l, style: { ...t }, ref: i, ...o });
                },
                a = (0, l.forwardRef)((e, t) => (0, n.jsx)(r, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: r, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                p = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: o = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, l.useState)(null),
                        g = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && h(e), t && i)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < n; e++) i(e);
                                    }
                                }, o),
                            [o, s, t, i, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let x = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, n.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: r, endReached: x, ...u });
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
                            totalCount: E,
                            totalRequests: N,
                            debounceDurationInMs: y,
                            initialItemCount: C,
                            minInitialItemCount: v = 20,
                            handleRef: O,
                            alwaysShowScrollbar: S = !1,
                            testId: T,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...A
                        } = e,
                        [b, P] = (0, l.useState)(!1),
                        j = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        R = (0, l.useMemo)(() => {
                            var e, t;
                            return k
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
                        }, [i, N, k]),
                        L = C ? Math.min(C, v) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: b || S, [d().root_notScrolling]: !b && !S }, t),
                        'data-test-id': T,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, n.jsx)(h, {
                                overscan: g,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: E,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: f,
                                ...A,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var n = i(44806);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: s, userRegion: o } = e;
                return 'ru' === o && t(n.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        13665: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 70212)));
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var n = i(25839),
                s = i(8487),
                o = i(84059),
                l = i(61493),
                r = i(71035),
                a = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: g, key: x, className: E } = e,
                    N = (0, o.useRouter)(),
                    y = (0, _.N)().get(u.QG),
                    C = (0, r.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(y.authorizationUrl));
                    });
                return (0, n.jsx)(
                    a.$,
                    {
                        onClick: C,
                        className: E,
                        isBlock: g,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, n.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, n.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var n = i(25839);
            i(93588);
            var s = i(400),
                o = i.n(s);
            let l = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: o().empty });
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
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var n = i(25839),
                s = i(88204),
                o = i(84059),
                l = i(82298),
                r = i(8487),
                a = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, s.PA)(() =>
                (0, n.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, n.jsx)(a.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, n.jsx)(a.HL, {
                            className: (0, l.$)(u().text, u().important),
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
            var m = i(53712),
                p = i(27954);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, n.jsx)(_, {}));
            });
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => o });
            var n = i(74631);
            let s = (0, n.createContext)(null),
                o = () => (0, n.useContext)(s);
        },
        44428: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => d });
            var n = i(25839),
                s = i(82298),
                o = i(8487),
                l = i(66738),
                r = i(4254),
                a = i(86194),
                c = i.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(c().emptyContent, t),
                    children: [
                        (0, n.jsx)(l.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, n.jsx)(r.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(o.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
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
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var n = i(25895);
            let s = {
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
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => o, UC: () => l, dM: () => r, uV: () => a });
            var n = i(93690),
                s = i(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof n.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            let n = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
            var n = i(25839),
                s = i(82298),
                o = i(88204),
                l = i(74631),
                r = i(39004),
                a = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(44031),
                p = i(87277),
                h = i(59450),
                g = i(84e3),
                x = i(97952),
                E = i(89192),
                N = i(53712),
                y = i(27954),
                C = i(44806),
                v = i(15270),
                O = i(23818),
                S = i(85686);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = i(27990),
                f = i.n(k);
            let A = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: o } = (0, y.g)(),
                    { contentRef: l } = (0, E.g)(),
                    r = (0, S.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(f().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(v.L, { withBackwardFallback: '/', className: (0, s.$)(f().navigation, { [f().navigation_desktop]: !l }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, s.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(O._V, { className: f().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: f().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: f().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: f().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: f().button,
                                        onClick: r,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: f().buttonText,
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
            var b = i(68854),
                P = i.n(b);
            let j = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: o } = (0, r.A)(),
                    O = (0, l.useContext)(y.P),
                    S = null == O ? void 0 : O.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    T = o(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: n } = (0, x.$)(),
                        s = (0, g.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !n) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: n,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, p.z5)(t.evgenInstance, o);
                    }, [t, e, i, n, s]);
                })(T);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            n = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
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
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, p.bv)(e.evgenInstance, s);
                            }, [e, t, i, n]),
                        };
                    })(),
                    f = (0, l.useCallback)(() => {
                        (k(), (window.location.href = N.Z.main.href));
                    }, [k]),
                    { contentRef: b } = (0, E.g)();
                return S
                    ? (0, n.jsx)(A, { className: t, withBackwardControl: i })
                    : (0, n.jsxs)('div', {
                          className: (0, s.$)(P().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(v.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !b }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, s.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, s.$)(P().title, P().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, s.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: f,
                                          className: P().button,
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
        68884: (e) => {
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
        70212: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionNonMusicLikedPage: () => A });
            var n = i(25839),
                s = i(82298),
                o = i(88204),
                l = i(74631),
                r = i(39004),
                a = i(8487),
                c = i(61493),
                d = i(4254),
                u = i(64715),
                _ = i(76939),
                m = i(1407),
                p = i(20258),
                h = i(10322),
                g = i(21784),
                x = i(89192),
                E = i(30716),
                N = i(27954),
                y = i(99401),
                C = i(26076),
                v = i(10603),
                O = i(19412),
                S = i(6968),
                T = i(44428),
                k = i(68884),
                f = i.n(k);
            let A = (0, o.PA)(() => {
                var e, t, i;
                let {
                        user: o,
                        collection: { nonMusicLiked: k },
                        settings: { isMobile: A },
                        library: b,
                    } = (0, N.g)(),
                    { formatMessage: P } = (0, r.A)(),
                    { contentScrollRef: j, setContentScrollRef: R } = (0, x.g)(),
                    L = (0, g.W)();
                (0, E.J)(k.isResolved);
                let I = (0, l.useCallback)(
                    (e) => {
                        o.account.data.uid && k.getData({ userId: o.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [k, o.account.data.uid],
                );
                if (k.isRejected) return (0, n.jsx)(u.SomethingWentWrong, {});
                (0, l.useEffect)(
                    () => () => {
                        k.reset();
                    },
                    [k],
                );
                let D = (0, l.useMemo)(() => ({ Footer: () => (0, n.jsx)(C.A, { children: (0, n.jsx)(y.w, { className: f().footer }) }) }), []);
                if (o.account.data.uid && k.isNeededToLoad) {
                    let e = [k.getData({ userId: o.account.data.uid, metaType: 'podcast', pageSize: 20 }), b.getData()];
                    (0, l.use)(Promise.allSettled(e));
                }
                return (0, n.jsx)(h.n, {
                    pageId: p._Q.OWN_PODCASTS,
                    children: (0, n.jsx)(m.h, {
                        scrollElement: j,
                        outerTitle: P({ id: 'page.delayed-non-music' }),
                        children: (0, n.jsxs)('div', {
                            className: f().root,
                            'data-test-id': c.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, n.jsx)(v.Y, {
                                    variant: v.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: L.canBack,
                                    children: (0, n.jsx)(d.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, n.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                k.isEmptyItems && !k.isRejected && (0, n.jsx)(T.M, { className: f().emptyBlock }),
                                (0, n.jsx)(S.$, {
                                    className: (0, s.$)(f().scrollContainer, f().important),
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    customComponents: D,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let i = null == (t = k.items) ? void 0 : t[e],
                                            s = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.podcast' }) });
                                        return i
                                            ? (0, n.jsx)(_.a, { album: i, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, i.id)
                                            : (0, n.jsx)(O.V, { 'aria-label': s });
                                    },
                                    totalCount: null != (t = null == (e = k.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: I,
                                    pageSize: 20,
                                    totalRequests: null != (i = k.requestsCount) ? i : 0,
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
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = s), (this.stack = Error(l).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class s extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var n = i(36484),
                s = i(62562);
            let o = () => (0, s.N)().get(n.Zf);
        },
        86194: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => s }), i(77920));
            var n = i(76481);
            class s extends n.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => o.G, X1: () => n.X, m5: () => s.m });
            var n = i(77920),
                s = i(76481),
                o = i(91626);
            i(95919);
        },
        95919: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var n = i(25839),
                s = i(82298),
                o = i(88204),
                l = i(39004),
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
                    let { formatMessage: t, language: i, tld: n, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(96433),
                g = i(27954),
                x = i(400),
                E = i.n(x),
                N = i(61493),
                y = i(4254),
                C = i(97522);
            let v = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(E().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, n.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, n.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: E().list,
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: s } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, n.jsx)(C.N, { target: '_blank', href: s, className: E().link, 'data-test-id': N.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(y.HL, {
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
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, s.$)(E().root, E().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, n.jsx)(O, { links: i.links, disclaimer: i.disclaimer }), (0, n.jsx)(v, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: s, formatMessage: o } = (0, l.A)(),
                    { language: r } = (0, h.h)(),
                    a = u({ formatMessage: o, language: r, tld: i.tld, year: p(s) });
                return (0, n.jsx)(v, { className: t, data: a });
            });
            let T = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: m, user: x } = (0, g.g)(),
                    { formatDate: N, formatMessage: y } = (0, l.A)(),
                    { isEnabled: C } = null != (t = (0, a.P)()) ? t : {},
                    { language: v } = (0, h.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: n, language: s, tld: o, userRegion: l, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: n, language: s, userRegion: o } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, s) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, s) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, s) },
                                    m = [l, a, u];
                                return (i && 'ru' === o && m.push(r), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: n, language: s, tld: o, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: o, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: v,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(N),
                    });
                return (0, n.jsx)(S, { className: (0, s.$)({ [E().root_withOffsetForDeeplink]: C }, i), data: O });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 3349, 6392, 7170, 6749, 6287, 2121, 3472, 9122, 3112, 9007, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2038, 4163,
                3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 13665)),
        ),
            (_N_E = e.O()));
    },
]);
