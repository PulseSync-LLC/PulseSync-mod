(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6657],
    {
        8487: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var a = n(23198),
                l = n(74631),
                o = n(30236),
                r = n(39004);
            function c(e) {
                var t = (0, r.A)(),
                    n = t.formatMessage,
                    a = t.textComponent,
                    o = void 0 === a ? l.Fragment : a,
                    c = e.id,
                    s = e.description,
                    i = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    m = void 0 === p ? o : p,
                    f = n({ id: c, description: s, defaultMessage: i }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? l.createElement(m, null, f) : l.createElement(l.Fragment, null, f);
            }
            c.displayName = 'FormattedMessage';
            var s = l.memo(c, function (e, t) {
                var n = e.values,
                    l = (0, a.__rest)(e, ['values']),
                    r = t.values,
                    c = (0, a.__rest)(t, ['values']);
                return (0, o.bN)(r, n) && (0, o.bN)(l, c);
            });
            s.displayName = 'MemoizedFormattedMessage';
            let i = s;
        },
        15270: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var a = n(25839),
                l = n(82298),
                o = n(88204),
                r = n(74631),
                c = n(39004),
                s = n(61493),
                i = n(71035),
                u = n(4071),
                d = n(66738),
                p = n(20583),
                m = n(65610),
                f = n.n(m);
            let v = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: m,
                        withBackwardFallback: v,
                        buttonSize: g = 'xxs',
                    } = e,
                    { formatMessage: y } = (0, c.A)(),
                    { canBack: P, canForward: N, moveBack: k, moveForward: b } = (0, p.J)(v),
                    h = (0, r.useRef)(null),
                    _ = (0, i.c)((e) => {
                        (e.stopPropagation(), k());
                    }),
                    x = (0, i.c)((e) => {
                        (e.stopPropagation(), b());
                    });
                return (
                    (0, r.useEffect)(() => {
                        o && h.current && P && h.current.focus();
                    }, [P]),
                    (0, a.jsxs)('div', {
                        className: (0, l.$)(f().root, m),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(u.$, {
                                    ref: h,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !P,
                                    size: g,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: _,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, a.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !N,
                                    size: g,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: x,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20583: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            var a = n(10508),
                l = n(74631),
                o = n(21784);
            let r = (e) => {
                let t = (0, o.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    r = (0, l.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: r };
            };
        },
        20790: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var a = n(74631),
                l = n(73810);
            let o = () => (0, a.useContext)(l.P);
        },
        21784: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => o });
            var a = n(74631);
            let l = (0, a.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function o() {
                return (0, a.useContext)(l);
            }
        },
        24053: (e) => {
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
        26895: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (a, l) => {
                            let o = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(a, o);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        46657: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 96634));
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var a = n(25895);
            let l = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        56120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var a = n(74631),
                l = n(20790);
            let o = (e) => {
                let t = (0, a.useRef)(!1),
                    n = (0, l.z)();
                (0, a.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => g, st: () => o, gf: () => c });
            var a = n(74631);
            let l = (0, a.createContext)(null);
            function o() {
                return (0, a.useContext)(l);
            }
            let r = (0, a.createContext)({ hash: void 0 });
            function c() {
                return (0, a.useContext)(r);
            }
            var s = n(25839),
                i = n(59342);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, a.useMemo)(() => ({ hash: (0, i.A)() }), []);
                return (0, s.jsx)(r.Provider, { value: n, children: t });
            };
            class d {
                makeParams() {
                    return {};
                }
            }
            class p {
                makeParams() {
                    return {};
                }
            }
            var m = n(58025);
            class f {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (a, l) => {
                                let o = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(a, o);
                            },
                        }));
                }
            }
            let v = null,
                g = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: r, metrika: c } = e,
                        i = (0, a.useMemo)(() => {
                            if (v) return v;
                            let e = (function (e, t, n) {
                                let a = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: a } = e,
                                        l = [];
                                    return (
                                        !(function e() {
                                            (l.length > 0 && t(l.splice(0, n)), window.setTimeout(e, a));
                                        })(),
                                        {
                                            add(e) {
                                                l.push(e);
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
                                    trackEvent(e, l) {
                                        (n && t.log(e, l), a.add({ [e]: l }));
                                    },
                                };
                            })((e) => c.count(e, o), r, t);
                            return (v = new f(
                                e,
                                (function () {
                                    let e = new d();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new p();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [r, c]);
                    return (0, s.jsx)(l.Provider, { value: i, children: (0, s.jsx)(u, { children: n }) });
                };
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        67379: (e, t, n) => {
            'use strict';
            function a(e) {
                let { params: t, logger: n, context: a } = e,
                    l = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return l.length > 0 ? (n.error('Evgen parameters are not met', { parameters: l.join(', '), incomingParams: t, context: a }), null) : t;
            }
            n.d(t, { F: () => a });
        },
        71872: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => a, ov: () => l });
            let a = ''.concat('yandexmusic', ':'),
                l = ''.concat(a, '//');
        },
        73810: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a });
            let a = (0, n(74631).createContext)(null);
        },
        76945: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: o = l.DomainObjectType.NonApplicable,
                        mainObjectId: r = '',
                        tabId: c = '',
                        tabPos: s = 0,
                        isTabSelectedByDefault: i = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, a.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: o = l.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = l.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(3),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Opened', f);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: o = l.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = l.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, a.makeMetaParams)(3),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', m);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: o = l.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = l.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', f);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: o = l.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = l.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Navigated', f);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: o = l.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = l.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                        } = t,
                        i = (0, a.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: o, skeletonId: r, mainObjectType: c, mainObjectId: s, _meta: i };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let a = n(26895),
                l = n(36619);
        },
        85686: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => u });
            var a = n(84059);
            n(93588);
            var l = n(71035),
                o = n(25895),
                r = n(89288),
                c = n(71872),
                s = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let i = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, c.Lz],
                u = (e) => {
                    let t = (0, a.useRouter)(),
                        { href: n, target: u } = (0, o.u)(e);
                    return (0, l.c)((e) => {
                        let a = ((e, t, n) => {
                            let a;
                            try {
                                a = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let l = (0, r.Rj)(e, { allowedProtocols: new Set([...i, a.protocol]), baseUrl: a.href });
                            return l.isAllowed
                                ? l.url.protocol === c.Lz
                                    ? { type: s.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, a)
                                      ? { type: s.INTERNAL, href: e }
                                      : { type: s.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!a) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (a.type === s.EXTERNAL || a.type === s.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(a.href)
                                : t.push(a.href));
                    });
                };
        },
        89192: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => o });
            var a = n(74631);
            let l = (0, a.createContext)({
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
                o = () => (0, a.useContext)(l);
        },
        96634: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => S }));
            var a = n(25839),
                l = n(82298),
                o = n(88204),
                r = n(8487);
            n(93588);
            var c = n(4071),
                s = n(66738),
                i = n(13833),
                u = n(4254),
                d = n(74631),
                p = n(67379),
                m = n(36619),
                f = n(76945),
                v = n(59450),
                g = n(84e3),
                y = n(59342),
                P = n(89192),
                N = n(53712),
                k = n(85686),
                b = n(56120),
                h = n(15270),
                _ = n(27954),
                x = n(24053),
                A = n.n(x);
            let S = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: x = 'musicLogo', iconClassName: S, iconSize: F } = e,
                    { contentRef: E, setContentScrollRef: T } = (0, P.g)(),
                    j = (0, k.Z)(N.Z.main.href);
                !(function () {
                    let e = (0, v.st)(),
                        { hash: t } = (0, v.gf)(),
                        n = (0, g.U)(),
                        a = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        a.current = (0, y.A)();
                        let l = (0, p.F)({
                            params: {
                                hash: t,
                                pageId: m.AppScreen.PageNotFoundScreen,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                                viewUuid: a.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, f.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, p.F)({
                                    params: {
                                        hash: t,
                                        pageId: m.AppScreen.PageNotFoundScreen,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                        viewUuid: a.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, f.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, v.st)(),
                        { hash: n } = (0, v.gf)(),
                        a = (0, g.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, p.F)({
                                params: {
                                    hash: n,
                                    pageId: m.AppScreen.PageNotFoundScreen,
                                    pageStyle: m.PageStyles.Fullscreen,
                                    pagePlacement: m.PagePlacements.Fullscreen,
                                    mainObjectType: m.DomainObjectType.NonApplicable,
                                    mainObjectId: m.DomainObjectType.NonApplicable,
                                    from: m.AppScreen.PageNotFoundScreen,
                                    to: m.AppScreen.MainScreen,
                                    entityType: m.EntityTypes.Error,
                                    entityId: m.EntityTypes.Error,
                                },
                                logger: a,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (l && (0, f.Mu)(t.evgenInstance, l), e());
                        }, [t, n, a, e]),
                    };
                })(j);
                return (
                    (0, b.N)(!0),
                    !(function () {
                        let { location: e } = (0, _.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, a.jsxs)(i.N, {
                        className: (0, l.$)(A().root, { [A().root_desktop]: !E }, t),
                        containerClassName: A().container,
                        ref: T,
                        children: [
                            (0, a.jsx)(h.L, { withBackwardFallback: '/', className: A().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (0, a.jsx)(s.I, { className: (0, l.$)(A().icon, S), variant: x, size: F }),
                                    (0, a.jsx)(u.DZ, {
                                        className: (0, l.$)(A().title, A().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(u.HL, {
                                        className: (0, l.$)(A().text, A().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(c.$, {
                                        onClick: O,
                                        className: A().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
    },
]);
