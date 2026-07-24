(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => o });
            let o = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => h });
            var o = n(32290),
                i = n(63618),
                l = n(96103),
                s = n(55178),
                a = n(60900),
                r = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(82586),
                m = n(21935),
                g = n(78842),
                p = n.n(g);
            let h = (0, l.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: l = !0,
                        className: g,
                        withBackwardFallback: h,
                        buttonSize: f = 'xxs',
                    } = e,
                    { formatMessage: v } = (0, a.A)(),
                    { canBack: y, canForward: _, moveBack: x, moveForward: k } = (0, m.J)(h),
                    S = (0, s.useRef)(null),
                    b = (0, c.c)((e) => {
                        e.stopPropagation(), x();
                    }),
                    A = (0, c.c)((e) => {
                        e.stopPropagation(), k();
                    });
                return (
                    (0, s.useEffect)(() => {
                        l && S.current && y && S.current.focus();
                    }, [y]),
                    (0, o.jsxs)('div', {
                        className: (0, i.$)(p().root, g),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, o.jsx)(u.$, {
                                    ref: S,
                                    'aria-label': v({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: b,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, o.jsx)(u.$, {
                                    'aria-label': v({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: A,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var o = n(36477);
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
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var o = n(62060),
                i = n(55178),
                l = n(83808);
            let s = (e) => {
                let t = (0, l.W)(),
                    n = (0, i.useMemo)(
                        () =>
                            (0, o.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, i.useMemo)(
                        () =>
                            (0, o.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: s };
            };
        },
        30310: (e) => {
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
        37240: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => l });
            var o = n(55178),
                i = n(1176);
            function l() {
                return (0, o.useContext)(i.r);
            }
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var o = n(30782),
                i = n(55178),
                l = n(36260),
                s = n(60900);
            function a(e) {
                var t = (0, s.A)(),
                    n = t.formatMessage,
                    o = t.textComponent,
                    l = void 0 === o ? i.Fragment : o,
                    a = e.id,
                    r = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    m = e.tagName,
                    g = void 0 === m ? l : m,
                    p = n({ id: a, description: r, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(p) ? p : [p]) : g ? i.createElement(g, null, p) : i.createElement(i.Fragment, null, p);
            }
            a.displayName = 'FormattedMessage';
            var r = i.memo(a, function (e, t) {
                var n = e.values,
                    i = (0, o.__rest)(e, ['values']),
                    s = t.values,
                    a = (0, o.__rest)(t, ['values']);
                return (0, l.bN)(s, n) && (0, l.bN)(i, a);
            });
            r.displayName = 'MemoizedFormattedMessage';
            let c = r;
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => g, st: () => l, gf: () => a });
            var o = n(55178);
            let i = (0, o.createContext)(null);
            function l() {
                return (0, o.useContext)(i);
            }
            let s = (0, o.createContext)({ hash: void 0 });
            function a() {
                return (0, o.useContext)(s);
            }
            var r = n(32290),
                c = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, o.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, r.jsx)(s.Provider, { value: n, children: t });
            };
            var d = n(16172);
            let m = null,
                g = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: l, logger: s, metrika: a } = e,
                        c = (0, o.useMemo)(() => {
                            if (m) return m;
                            let e = (0, d.vD)((e) => a.count(e, l), s, t),
                                n = (0, d.xU)(),
                                o = (0, d.$N)();
                            return (m = new d.gK(e, n, o));
                        }, [s, a]);
                    return (0, r.jsx)(i.Provider, { value: c, children: (0, r.jsx)(u, { children: n }) });
                };
        },
        64170: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => k });
            var o = n(32290),
                i = n(63618),
                l = n(96103),
                s = n(55178),
                a = n(60900),
                r = n(39407),
                c = n(63423),
                u = n(82586),
                d = n(71926),
                m = n(16172),
                g = n(52068),
                p = n(62376),
                h = n(37240),
                f = n(83920),
                v = n(20472),
                y = n(12894),
                _ = n(30310),
                x = n.n(_);
            let k = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: l } = (0, a.A)(),
                    _ = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: n } = (0, g.gf)(),
                        { pageId: o } = (0, h.$)(),
                        i = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !o) return;
                        let l = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: o,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, m.z5)(t.evgenInstance, l);
                    }, [t, e, n, o, i]);
                })(_);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: n } = (0, h.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, m.bv)(e.evgenInstance, i);
                            }, [e, t, n, o]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        k(), (window.location.href = v.Z.main.href);
                    }, [k]),
                    { contentRef: b } = (0, f.g)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(x().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(y.L, { withBackwardFallback: '/', className: (0, i.$)(x().navigation, { [x().navigation_desktop]: !b }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(x().content, { [x().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(u.I, { className: x().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(d.DZ, { className: (0, i.$)(x().title, x().important), variant: 'h3', size: 'xs', children: _ }),
                                (0, o.jsxs)(d.HL, {
                                    className: (0, i.$)(x().text, x().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(r.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: S,
                                    className: x().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(r.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => l });
            var o = n(55178);
            let i = (0, o.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function l() {
                return (0, o.useContext)(i);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i, g: () => l });
            var o = n(55178);
            let i = (0, o.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                l = () => (0, o.useContext)(i);
        },
        94561: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 64170));
        },
    },
    (e) => {
        e.O(0, [7034, 5718, 6706, 8892, 66, 6477, 7275, 2586, 8347, 4220, 9562, 7358], () => e((e.s = 94561))), (_N_E = e.O());
    },
]);
