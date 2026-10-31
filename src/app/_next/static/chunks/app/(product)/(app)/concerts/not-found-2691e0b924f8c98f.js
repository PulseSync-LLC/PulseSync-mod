(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7779],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var a = n(67174);
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
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var a = n(35412),
                l = n(28166),
                o = n(97261);
            let r = [a.cy.HTTP, a.cy.HTTPS, a.cy.MAILTO, a.cy.TEL, l.Lz],
                c = (e, t, n) => {
                    let c;
                    try {
                        c = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let s = (0, a.Rj)(e, { allowedProtocols: new Set([...r, c.protocol]), baseUrl: c.href });
                    return s.isAllowed
                        ? s.url.protocol === l.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(s.url, c)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
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
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => a, ov: () => l });
            let a = ''.concat('yandexmusic', ':'),
                l = ''.concat(a, '//');
        },
        29725: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => i }));
            var a = n(88800),
                l = n(84961),
                o = n(53548),
                r = n(78805),
                c = n(72288);
            let s = (0, l.PA)(() => {
                    let { concerts: e } = (0, c.g)();
                    return (
                        (0, o.useEffect)(
                            () => () => {
                                e.resetPageData();
                            },
                            [e],
                        ),
                        (0, a.jsx)(r.NotFound, {})
                    );
                }),
                i = () => (0, a.jsx)(s, {});
        },
        38860: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var a = n(53548),
                l = n(41168);
            let o = () => (0, a.useContext)(l.P);
        },
        41168: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => o });
            var a = n(53548);
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
        46422: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => o });
            var a = n(53548);
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
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            var a = n(55482),
                l = n(53548),
                o = n(46422);
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
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var a = n(88800),
                l = n(65724),
                o = n(84961),
                r = n(53548),
                c = n(2058),
                s = n(17392),
                i = n(29993),
                u = n(96817),
                d = n(52300),
                p = n(46777),
                m = n(50320),
                f = n.n(m);
            let v = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: m,
                        withBackwardFallback: v,
                        buttonSize: g = 'xxs',
                        onBackwardClick: y,
                    } = e,
                    { formatMessage: N } = (0, c.A)(),
                    { canBack: P, canForward: k, moveBack: b, moveForward: h } = (0, p.J)(v),
                    _ = (0, r.useRef)(null),
                    F = (0, i.c)((e) => {
                        if ((e.stopPropagation(), y)) return void y();
                        b();
                    }),
                    x = (0, i.c)((e) => {
                        (e.stopPropagation(), h());
                    });
                return (
                    (0, r.useEffect)(() => {
                        o && _.current && P && _.current.focus();
                    }, [P]),
                    (0, a.jsxs)('div', {
                        className: (0, l.$)(f().root, m),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(u.$, {
                                    ref: _,
                                    'aria-label': N({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !P,
                                    size: g,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: F,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, a.jsx)(u.$, {
                                    'aria-label': N({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !k,
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
        58611: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 29725));
        },
        78793: (e, t, n) => {
            'use strict';
            function a(e) {
                let { params: t, logger: n, context: a } = e,
                    l = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return l.length > 0 ? (n.error('Evgen parameters are not met', { parameters: l.join(', '), incomingParams: t, context: a }), null) : t;
            }
            n.d(t, { F: () => a });
        },
        78805: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => S }));
            var a = n(88800),
                l = n(65724),
                o = n(84961),
                r = n(88969);
            n(30282);
            var c = n(17392),
                s = n(96817),
                i = n(52300),
                u = n(66719),
                d = n(29504),
                p = n(53548),
                m = n(78793),
                f = n(92716),
                v = n(99984),
                g = n(90780),
                y = n(65523),
                N = n(54020),
                P = n(44230),
                k = n(4370),
                b = n(78940),
                h = n(95210),
                _ = n(56248),
                F = n(72288),
                x = n(26827),
                A = n.n(x);
            let S = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: x = 'musicLogo', iconClassName: S, iconSize: E } = e,
                    { contentRef: T, setContentScrollRef: j } = (0, P.g)(),
                    O = (0, b.Z)(k.Z.main.href);
                !(function () {
                    let e = (0, g.st)(),
                        { hash: t } = (0, g.gf)(),
                        n = (0, y.U)(),
                        a = (0, p.useRef)(void 0);
                    (0, p.useEffect)(() => {
                        if (!e || !t) return;
                        a.current = (0, N.A)();
                        let l = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: f.AppScreen.PageNotFoundScreen,
                                pageStyle: f.PageStyles.Fullscreen,
                                pagePlacement: f.PagePlacements.Fullscreen,
                                mainObjectType: f.DomainObjectType.NonApplicable,
                                mainObjectId: f.DomainObjectType.NonApplicable,
                                viewUuid: a.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, v.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: f.AppScreen.PageNotFoundScreen,
                                        pageStyle: f.PageStyles.Fullscreen,
                                        pagePlacement: f.PagePlacements.Fullscreen,
                                        mainObjectType: f.DomainObjectType.NonApplicable,
                                        mainObjectId: f.DomainObjectType.NonApplicable,
                                        viewUuid: a.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, v.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: w } = (function (e) {
                    let t = (0, g.st)(),
                        { hash: n } = (0, g.gf)(),
                        a = (0, y.U)();
                    return {
                        handleNavigateToMain: (0, p.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, m.F)({
                                params: {
                                    hash: n,
                                    pageId: f.AppScreen.PageNotFoundScreen,
                                    pageStyle: f.PageStyles.Fullscreen,
                                    pagePlacement: f.PagePlacements.Fullscreen,
                                    mainObjectType: f.DomainObjectType.NonApplicable,
                                    mainObjectId: f.DomainObjectType.NonApplicable,
                                    from: f.AppScreen.PageNotFoundScreen,
                                    to: f.AppScreen.MainScreen,
                                    entityType: f.EntityTypes.Error,
                                    entityId: f.EntityTypes.Error,
                                },
                                logger: a,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (l && (0, v.Mu)(t.evgenInstance, l), e());
                        }, [t, n, a, e]),
                    };
                })(O);
                return (
                    (0, h.N)(!0),
                    !(function () {
                        let { location: e } = (0, F.g)();
                        (0, p.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, a.jsxs)(u.N, {
                        className: (0, l.$)(A().root, { [A().root_desktop]: !T }, t),
                        containerClassName: A().container,
                        ref: j,
                        'data-test-id': c.e8.notFound.NOT_FOUND,
                        children: [
                            (0, a.jsx)(_.L, { withBackwardFallback: '/', className: A().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (0, a.jsx)(i.I, { className: (0, l.$)(A().icon, S), variant: x, size: E }),
                                    (0, a.jsx)(d.DZ, {
                                        className: (0, l.$)(A().title, A().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        'data-test-id': c.e8.notFound.NOT_FOUND_TITLE,
                                        children: n || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(d.HL, {
                                        className: (0, l.$)(A().text, A().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(s.$, {
                                        onClick: w,
                                        className: A().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
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
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => s }), n(30282));
            var a = n(58390),
                l = n(29993),
                o = n(67174),
                r = n(15947),
                c = n(97261);
            let s = (e) => {
                let t = (0, a.useRouter)(),
                    { href: n, target: s } = (0, o.u)(e);
                return (0, l.c)((e) => {
                    let a = (0, r.U)(n, window.location.href, s);
                    if (!a) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (a.type === c.I.EXTERNAL || a.type === c.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(a.href)
                            : t.push(a.href));
                });
            };
        },
        88969: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var a = n(88092),
                l = n(53548),
                o = n(84014),
                r = n(2058);
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
        90780: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => g, st: () => o, gf: () => c });
            var a = n(53548);
            let l = (0, a.createContext)(null);
            function o() {
                return (0, a.useContext)(l);
            }
            let r = (0, a.createContext)({ hash: void 0 });
            function c() {
                return (0, a.useContext)(r);
            }
            var s = n(88800),
                i = n(54020);
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
            var m = n(9519);
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
        92948: (e, t) => {
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
        95210: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var a = n(53548),
                l = n(38860);
            let o = (e) => {
                let t = (0, a.useRef)(!1),
                    n = (0, l.z)();
                (0, a.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => a });
            var a = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99984: (e, t, n) => {
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
            let a = n(92948),
                l = n(92716);
        },
    },
    (e) => {
        (e.O(0, [8752, 7435, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 4732, 1195, 1598, 6281, 763, 2670, 7358], () => e((e.s = 58611))), (_N_E = e.O()));
    },
]);
