(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1152],
    {
        245: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => l });
            var s = n(53548),
                i = n(59791);
            let l = () => {
                let e = (0, s.useContext)(i.I);
                if (!e) throw Error('AnalyticsProvider is required');
                return e;
            };
        },
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var s = n(67174);
            let i = {
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
        7695: (e, t, n) => {
            'use strict';
            n.d(t, { Ve: () => o, Vn: () => i, p6: () => l, w: () => s });
            let s = '',
                i = 0,
                l = !1,
                o = Object.freeze({ tabId: s, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => a });
            var s = n(35412),
                i = n(28166),
                l = n(97261);
            let o = [s.cy.HTTP, s.cy.HTTPS, s.cy.MAILTO, s.cy.TEL, i.Lz],
                a = (e, t, n) => {
                    let a;
                    try {
                        a = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let c = (0, s.Rj)(e, { allowedProtocols: new Set([...o, a.protocol]), baseUrl: a.href });
                    return c.isAllowed
                        ? c.url.protocol === i.Lz
                            ? { type: l.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(c.url, a)
                              ? { type: l.I.INTERNAL, href: e }
                              : { type: l.I.EXTERNAL, href: e }
                        : null;
                };
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        27054: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => d });
            var s = n(53548),
                i = n(87999),
                l = n(47149),
                o = n(84423),
                a = n(89846),
                c = n(64543),
                r = n(63582),
                u = n(29993);
            let d = (0, r.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: n = !0 } = t,
                    r = null == (e = (0, o.s)()) ? void 0 : e.evgenInstance,
                    { hash: d } = (0, a.g)(),
                    { screen: p } = (0, c.j)(),
                    _ = null == p ? void 0 : p.pageId,
                    S = (0, u.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !r ||
                            !_ ||
                            !d ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: d,
                            pageId: i.AppScreen.Link,
                            entityType: i.EntityTypes.Deeplink,
                            entityId: i.EntityTypes.Deeplink,
                            from: i.AppScreen.Link,
                            to: _,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, l.ID)(r, t);
                    });
                return (
                    (0, s.useEffect)(() => {
                        n && S();
                    }, [n, S]),
                    (0, u.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n || S({ deepLink: e });
                    })
                );
            });
        },
        28102: (e, t, n) => {
            'use strict';
            n.d(t, { PlaylistNotFoundPage: () => _ });
            var s = n(88800),
                i = n(84961),
                l = n(53548),
                o = n(87999),
                a = n(76903),
                c = n(64462),
                r = n(98427),
                u = n(27054),
                d = n(72288);
            let p = (0, i.PA)(() => {
                    let { playlist: e } = (0, d.g)();
                    return (
                        (0, u.A)(),
                        (0, l.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, s.jsx)(c.NotFound, {})
                    );
                }),
                _ = (0, i.PA)(() => (0, s.jsx)(a.a, { pageId: o.AppScreen.PageNotFoundScreen, pageIdForFrom: r.b.PAGE_NOT_FOUND_SCREEN, children: (0, s.jsx)(p, {}) }));
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => s, ov: () => i });
            let s = ''.concat('yandexmusic', ':'),
                i = ''.concat(s, '//');
        },
        38860: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => l });
            var s = n(53548),
                i = n(41168);
            let l = () => (0, s.useContext)(i.P);
        },
        41152: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 28102));
        },
        41168: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => s });
            let s = (0, n(53548).createContext)(null);
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i, g: () => l });
            var s = n(53548);
            let i = (0, s.createContext)({
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
                l = () => (0, s.useContext)(i);
        },
        46422: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => l });
            var s = n(53548);
            let i = (0, s.createContext)({
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
                return (0, s.useContext)(i);
            }
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => o });
            var s = n(55482),
                i = n(53548),
                l = n(46422);
            let o = (e) => {
                let t = (0, l.W)(),
                    n = (0, i.useMemo)(
                        () =>
                            (0, s.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, i.useMemo)(
                        () =>
                            (0, s.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: o };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        54721: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => p });
            var s = n(53548),
                i = n(47149),
                l = n(63582),
                o = n(59791),
                a = n(7695),
                c = n(53534),
                r = n(89846),
                u = n(64543),
                d = n(56374);
            let p = (0, l.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, s.useContext)(o.I),
                    { hash: t } = (0, r.g)(),
                    { screen: n, tab: l } = (0, u.j)(),
                    p = (0, s.useContext)(c.k)?.session,
                    { current: _ } = (0, s.useRef)(Symbol()),
                    S = !!n,
                    I = (s) => {
                        if (!e || !p || !n?.pageId || void 0 === t || !S) return !1;
                        let o = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(l ?? a.Ve),
                        };
                        return (s ? p.open(_, () => (0, i.Fn)(e, o)) : p.close(_, () => (0, i.PO)(e, o)), !0);
                    },
                    [N, T] = (0, s.useState)(() => ({ session: p, send: I, opened: !1 })),
                    m = N;
                (N.session !== p && T((m = { session: p, send: I, opened: !1 })),
                    (0, s.useInsertionEffect)(() => {
                        S && void 0 !== t && (m.send = I);
                    }, [m, t, S, I]));
                let A = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, s.useEffect)(
                    () => (
                        A(m, !0),
                        () => {
                            (m.opened && A(m, !1), m.session?.release(_));
                        }
                    ),
                    [_, m, A],
                ),
                    (0, s.useEffect)(() => {
                        A(m, !0);
                    }, [m, t, S, A]));
            });
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => I });
            var s = n(88800),
                i = n(65724),
                l = n(84961),
                o = n(53548),
                a = n(2058),
                c = n(17392),
                r = n(29993),
                u = n(96817),
                d = n(52300),
                p = n(46777),
                _ = n(50320),
                S = n.n(_);
            let I = (0, l.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: l = !0,
                        className: _,
                        withBackwardFallback: I,
                        buttonSize: N = 'xxs',
                        onBackwardClick: T,
                    } = e,
                    { formatMessage: m } = (0, a.A)(),
                    { canBack: A, canForward: y, moveBack: E, moveForward: O } = (0, p.J)(I),
                    h = (0, o.useRef)(null),
                    f = (0, r.c)((e) => {
                        if ((e.stopPropagation(), T)) return void T();
                        E();
                    }),
                    g = (0, r.c)((e) => {
                        (e.stopPropagation(), O());
                    });
                return (
                    (0, o.useEffect)(() => {
                        l && h.current && A && h.current.focus();
                    }, [A]),
                    (0, s.jsxs)('div', {
                        className: (0, i.$)(S().root, _),
                        'data-test-id': c.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, s.jsx)(u.$, {
                                    ref: h,
                                    'aria-label': m({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !A,
                                    size: N,
                                    icon: (0, s.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: f,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, s.jsx)(u.$, {
                                    'aria-label': m({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: N,
                                    icon: (0, s.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: g,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        56374: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => i });
            var s = n(53548);
            function i(e) {
                let t = (0, s.useRef)({ stableFn: (...e) => t.current.callback(...e), callback: e });
                return (
                    (0, s.useInsertionEffect)(() => {
                        t.current.callback = e;
                    }),
                    t.current.stableFn
                );
            }
        },
        64462: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => k }));
            var s = n(88800),
                i = n(65724),
                l = n(84961),
                o = n(88969);
            n(30282);
            var a = n(87999),
                c = n(54721),
                r = n(76903),
                u = n(17392),
                d = n(96817),
                p = n(52300),
                _ = n(66719),
                S = n(29504),
                I = n(98427),
                N = n(53548),
                T = n(47149),
                m = n(84423),
                A = n(89846);
            let y = (0, n(63582).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let n = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                    { hash: s } = (0, A.g)();
                return {
                    handleNavigateToMain: (0, N.useCallback)(() => {
                        if (!n || !s) return;
                        let t = {
                            hash: s,
                            pageId: a.AppScreen.PageNotFoundScreen,
                            pageStyle: a.PageStyles.Fullscreen,
                            pagePlacement: a.PagePlacements.Fullscreen,
                            mainObjectType: a.DomainObjectType.NonApplicable,
                            mainObjectId: a.DomainObjectType.NonApplicable,
                            from: a.AppScreen.PageNotFoundScreen,
                            to: a.AppScreen.MainScreen,
                            entityType: a.EntityTypes.Error,
                            entityId: a.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, T.Mu)(n, t), e());
                    }, [n, s, e]),
                };
            });
            var E = n(44230),
                O = n(4370),
                h = n(78940),
                f = n(95210),
                g = n(56248),
                R = n(72288),
                L = n(26827),
                b = n.n(L);
            let C = (0, l.PA)((e) => {
                    let { className: t, title: n, description: l, iconVariant: a = 'musicLogo', iconClassName: r, iconSize: I } = e,
                        { contentRef: T, setContentScrollRef: m } = (0, E.g)(),
                        A = (0, h.Z)(O.Z.main.href);
                    (0, c.u)();
                    let { handleNavigateToMain: L } = y(A);
                    return (
                        (0, f.N)(!0),
                        !(function () {
                            let { location: e } = (0, R.g)();
                            (0, N.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, s.jsxs)(_.N, {
                            className: (0, i.$)(b().root, { [b().root_desktop]: !T }, t),
                            containerClassName: b().container,
                            ref: m,
                            'data-test-id': u.e8.notFound.NOT_FOUND,
                            children: [
                                (0, s.jsx)(g.L, { withBackwardFallback: '/', className: b().navigation, withForwardControl: !1 }),
                                (0, s.jsxs)('div', {
                                    className: b().content,
                                    children: [
                                        (0, s.jsx)(p.I, { className: (0, i.$)(b().icon, r), variant: a, size: I }),
                                        (0, s.jsx)(S.DZ, {
                                            className: (0, i.$)(b().title, b().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': u.e8.notFound.NOT_FOUND_TITLE,
                                            children: n || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, s.jsx)(S.HL, {
                                            className: (0, i.$)(b().text, b().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: l || (0, s.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, s.jsx)(d.$, {
                                            onClick: L,
                                            className: b().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(S.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(o.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                k = (e) =>
                    (0, s.jsx)(r.a, {
                        pageId: a.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: I.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: a.PageStyles.Fullscreen,
                        pagePlacement: a.PagePlacements.Fullscreen,
                        mainObjectType: a.DomainObjectType.NonApplicable,
                        mainObjectId: a.DomainObjectType.NonApplicable,
                        children: (0, s.jsx)(C, { ...e }),
                    });
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var s = n(88800),
                i = n(53548),
                l = n(53534),
                o = n(63582),
                a = n(245);
            let c = new WeakMap();
            class r {
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
                    let n =
                        c.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (c.set(t, n), (this.queue = n));
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
            var u = n(87999);
            let d = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, a.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [c, d] = (0, i.useState)(() => {
                            let e = new r(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        c.client !== n ||
                        c.input.pageId !== t.pageId ||
                        c.input.skeletonId !== t.skeletonId ||
                        c.input.mainObjectType !== t.mainObjectType ||
                        c.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new r(n.createScreenSession().screenViewUuid, n),
                            a = { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, i) : null, session: i };
                        return (d(a), (0, s.jsx)(l.k, { value: a, children: e }));
                    }
                    if (
                        c.isReady !== o ||
                        c.input.displayReasonId !== t.displayReasonId ||
                        c.input.pageIdForFrom !== t.pageIdForFrom ||
                        c.input.pagePlacement !== t.pagePlacement ||
                        c.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...c, input: t, isReady: o, scope: o ? n.createScreenScope(t, c.session) : null };
                        return (d(i), (0, s.jsx)(l.k, { value: i, children: e }));
                    }
                    return (0, s.jsx)(l.k, { value: c, children: e });
                },
            );
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => c }), n(30282));
            var s = n(58390),
                i = n(29993),
                l = n(67174),
                o = n(15947),
                a = n(97261);
            let c = (e) => {
                let t = (0, s.useRouter)(),
                    { href: n, target: c } = (0, l.u)(e);
                return (0, i.c)((e) => {
                    let s = (0, o.U)(n, window.location.href, c);
                    if (!s) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (s.type === a.I.EXTERNAL || s.type === a.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, l.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(s.href)
                            : t.push(s.href));
                });
            };
        },
        95210: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => l });
            var s = n(53548),
                i = n(38860);
            let l = (e) => {
                let t = (0, s.useRef)(!1),
                    n = (0, i.z)();
                (0, s.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => s });
            var s = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        98427: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => s });
            var s = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
    },
]);
