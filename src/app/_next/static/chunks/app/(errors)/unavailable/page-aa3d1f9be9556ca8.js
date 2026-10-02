(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        15270: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => h });
            var o = n(25839),
                i = n(82298),
                l = n(88204),
                s = n(74631),
                a = n(39004),
                r = n(61493),
                c = n(71035),
                u = n(4071),
                d = n(66738),
                m = n(20583),
                g = n(65610),
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
                    { formatMessage: y } = (0, a.A)(),
                    { canBack: v, canForward: k, moveBack: _, moveForward: x } = (0, m.J)(h),
                    b = (0, s.useRef)(null),
                    S = (0, c.c)((e) => {
                        (e.stopPropagation(), _());
                    }),
                    P = (0, c.c)((e) => {
                        (e.stopPropagation(), x());
                    });
                return (
                    (0, s.useEffect)(() => {
                        l && b.current && v && b.current.focus();
                    }, [v]),
                    (0, o.jsxs)('div', {
                        className: (0, i.$)(p().root, g),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, o.jsx)(u.$, {
                                    ref: b,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !v,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: S,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, o.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !k,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: P,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20583: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var o = n(10508),
                i = n(74631),
                l = n(21784);
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
        21784: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => l });
            var o = n(74631);
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
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var o = n(25895);
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
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => f, st: () => l, gf: () => a });
            var o = n(74631);
            let i = (0, o.createContext)(null);
            function l() {
                return (0, o.useContext)(i);
            }
            let s = (0, o.createContext)({ hash: void 0 });
            function a() {
                return (0, o.useContext)(s);
            }
            var r = n(25839),
                c = n(59342);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, o.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, r.jsx)(s.Provider, { value: n, children: t });
            };
            class d {
                makeParams() {
                    return {};
                }
            }
            class m {
                makeParams() {
                    return {};
                }
            }
            var g = n(58025);
            class p {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, g._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (o, i) => {
                                let l = { ...i, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(o, l);
                            },
                        }));
                }
            }
            let h = null,
                f = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: l, logger: s, metrika: a } = e,
                        c = (0, o.useMemo)(() => {
                            if (h) return h;
                            let e = (function (e, t, n) {
                                let o = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: o } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && t(i.splice(0, n)), window.setTimeout(e, o));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (n && t.log(e, i), o.add({ [e]: i }));
                                    },
                                };
                            })((e) => a.count(e, l), s, t);
                            return (h = new p(
                                e,
                                (function () {
                                    let e = new d();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new m();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [s, a]);
                    return (0, r.jsx)(i.Provider, { value: c, children: (0, r.jsx)(u, { children: n }) });
                };
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        67379: (e, t, n) => {
            'use strict';
            function o(e) {
                let { params: t, logger: n, context: o } = e,
                    i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return i.length > 0 ? (n.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: t, context: o }), null) : t;
            }
            n.d(t, { F: () => o });
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
        78299: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => S });
            var o = n(25839),
                i = n(82298),
                l = n(88204),
                s = n(74631),
                a = n(39004),
                r = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                d = n(4254),
                m = n(67379),
                g = n(36619),
                p = n(76945),
                h = n(59450),
                f = n(84e3),
                y = n(97952),
                v = n(89192),
                k = n(53712),
                _ = n(15270),
                x = n(68854),
                b = n.n(x);
            let S = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: l } = (0, a.A)(),
                    x = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: o } = (0, y.$)(),
                        i = (0, f.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !o) return;
                        let l = (0, m.F)({
                            params: {
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: o,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, p.z5)(t.evgenInstance, l);
                    }, [t, e, n, o, i]);
                })(x);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, y.$)(),
                            o = (0, f.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, m.F)({
                                    params: {
                                        actionType: g.ActionType.Refresh,
                                        userInteractionType: g.UserInteractionType.Tap,
                                        entityType: g.EntityTypes.Error,
                                        entityId: g.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, p.bv)(e.evgenInstance, i);
                            }, [e, t, n, o]),
                        };
                    })(),
                    P = (0, s.useCallback)(() => {
                        (S(), (window.location.href = k.Z.main.href));
                    }, [S]),
                    { contentRef: R } = (0, v.g)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(b().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(_.L, { withBackwardFallback: '/', className: (0, i.$)(b().navigation, { [b().navigation_desktop]: !R }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(b().content, { [b().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(u.I, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(d.DZ, { className: (0, i.$)(b().title, b().important), variant: 'h3', size: 'xs', children: x }),
                                (0, o.jsxs)(d.HL, {
                                    className: (0, i.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(r.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: P,
                                    className: b().button,
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
        82064: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => o });
            let o = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        84e3: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => l });
            var o = n(36484),
                i = n(62562);
            let l = () => (0, i.N)().get(o.Zf);
        },
        89192: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i, g: () => l });
            var o = n(74631);
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
        91180: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 78299));
        },
        97952: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => l });
            var o = n(74631),
                i = n(82064);
            function l() {
                return (0, o.useContext)(i.r);
            }
        },
    },
    (e) => {
        (e.O(0, [3349, 1676, 6706, 9212, 4512, 9004, 7795, 3269, 4163, 3246, 4475, 5056, 7358], () => e((e.s = 91180))), (_N_E = e.O()));
    },
]);
