(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1042],
    {
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => b });
            var l = n(32290),
                o = n(63618),
                s = n(96103),
                i = n(39407),
                a = n(63423),
                c = n(82586),
                r = n(46049),
                u = n(71926),
                d = n(55178),
                p = n(16172),
                f = n(52068),
                m = n(62376),
                g = n(27576),
                v = n(83920),
                N = n(20472),
                y = n(84062),
                x = n(27120),
                _ = n(12894),
                h = n(57594),
                k = n(55365),
                F = n.n(k);
            let b = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: k = 'musicLogo', iconClassName: b, iconSize: A } = e,
                    { contentRef: R, setContentScrollRef: S } = (0, v.g)(),
                    w = (0, y.Z)(N.Z.main.href);
                !(function () {
                    let e = (0, f.st)(),
                        { hash: t } = (0, f.gf)(),
                        n = (0, m.U)(),
                        l = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        l.current = (0, g.A)();
                        let o = (0, p.Fx)({
                            params: {
                                hash: t,
                                pageId: p.QT.PageNotFoundScreen,
                                pageStyle: p.QL.Fullscreen,
                                pagePlacement: p.c4.Fullscreen,
                                mainObjectType: p.ky.NonApplicable,
                                mainObjectId: p.ky.NonApplicable,
                                viewUuid: l.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            o && (0, p.w5)(e.evgenInstance, o),
                            () => {
                                let o = (0, p.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: p.QT.PageNotFoundScreen,
                                        pageStyle: p.QL.Fullscreen,
                                        pagePlacement: p.c4.Fullscreen,
                                        mainObjectType: p.ky.NonApplicable,
                                        mainObjectId: p.ky.NonApplicable,
                                        viewUuid: l.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                o && (0, p.XB)(e.evgenInstance, o);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: P } = (function (e) {
                    let t = (0, f.st)(),
                        { hash: n } = (0, f.gf)(),
                        l = (0, m.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let o = (0, p.Fx)({
                                params: {
                                    hash: n,
                                    pageId: p.QT.PageNotFoundScreen,
                                    pageStyle: p.QL.Fullscreen,
                                    pagePlacement: p.c4.Fullscreen,
                                    mainObjectType: p.ky.NonApplicable,
                                    mainObjectId: p.ky.NonApplicable,
                                    from: p.QT.PageNotFoundScreen,
                                    to: p.QT.MainScreen,
                                    entityType: p.LA.Error,
                                    entityId: p.LA.Error,
                                },
                                logger: l,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            o && (0, p.Mu)(t.evgenInstance, o), e();
                        }, [t, n, l, e]),
                    };
                })(w);
                return (
                    (0, x.N)(!0),
                    !(function () {
                        let { location: e } = (0, h.g)();
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
                    (0, l.jsxs)(r.N, {
                        className: (0, o.$)(F().root, { [F().root_desktop]: !R }, t),
                        containerClassName: F().container,
                        ref: S,
                        children: [
                            (0, l.jsx)(_.L, { withBackwardFallback: '/', className: F().navigation, withForwardControl: !1 }),
                            (0, l.jsxs)('div', {
                                className: F().content,
                                children: [
                                    (0, l.jsx)(c.I, { className: (0, o.$)(F().icon, b), variant: k, size: A }),
                                    (0, l.jsx)(u.DZ, {
                                        className: (0, o.$)(F().title, F().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, l.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, l.jsx)(u.HL, {
                                        className: (0, o.$)(F().text, F().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, l.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, l.jsx)(a.$, {
                                        onClick: P,
                                        className: F().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, l.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, l.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => g });
            var l = n(32290),
                o = n(63618),
                s = n(96103),
                i = n(55178),
                a = n(60900),
                c = n(21732),
                r = n(91027),
                u = n(63423),
                d = n(82586),
                p = n(21935),
                f = n(78842),
                m = n.n(f);
            let g = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: f,
                        withBackwardFallback: g,
                        buttonSize: v = 'xxs',
                    } = e,
                    { formatMessage: N } = (0, a.A)(),
                    { canBack: y, canForward: x, moveBack: _, moveForward: h } = (0, p.J)(g),
                    k = (0, i.useRef)(null),
                    F = (0, r.c)((e) => {
                        e.stopPropagation(), _();
                    }),
                    b = (0, r.c)((e) => {
                        e.stopPropagation(), h();
                    });
                return (
                    (0, i.useEffect)(() => {
                        s && k.current && y && k.current.focus();
                    }, [y]),
                    (0, l.jsxs)('div', {
                        className: (0, o.$)(m().root, f),
                        'data-test-id': c.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, l.jsx)(u.$, {
                                    ref: k,
                                    'aria-label': N({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: v,
                                    icon: (0, l.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: F,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, l.jsx)(u.$, {
                                    'aria-label': N({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !x,
                                    size: v,
                                    icon: (0, l.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: b,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => o });
            var l = n(36477);
            let o = {
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
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var l = n(62060),
                o = n(55178),
                s = n(83808);
            let i = (e) => {
                let t = (0, s.W)(),
                    n = (0, o.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, o.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: i };
            };
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => s });
            var l = n(55178),
                o = n(53022);
            let s = (e) => {
                let t = (0, l.useRef)(!1),
                    n = (0, o.z)();
                (0, l.useEffect)(() => {
                    e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => l });
            let l = (0, n(55178).createContext)(null);
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => r });
            var l = n(30782),
                o = n(55178),
                s = n(36260),
                i = n(60900);
            function a(e) {
                var t = (0, i.A)(),
                    n = t.formatMessage,
                    l = t.textComponent,
                    s = void 0 === l ? o.Fragment : l,
                    a = e.id,
                    c = e.description,
                    r = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    f = void 0 === p ? s : p,
                    m = n({ id: a, description: c, defaultMessage: r }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(m) ? m : [m]) : f ? o.createElement(f, null, m) : o.createElement(o.Fragment, null, m);
            }
            a.displayName = 'FormattedMessage';
            var c = o.memo(a, function (e, t) {
                var n = e.values,
                    o = (0, l.__rest)(e, ['values']),
                    i = t.values,
                    a = (0, l.__rest)(t, ['values']);
                return (0, s.bN)(i, n) && (0, s.bN)(o, a);
            });
            c.displayName = 'MemoizedFormattedMessage';
            let r = c;
        },
        45941: (e, t, n) => {
            'use strict';
            n.d(t, { KidsNotFoundPage: () => c });
            var l = n(32290),
                o = n(96103),
                s = n(55178),
                i = n(7748),
                a = n(57594);
            let c = (0, o.PA)(() => {
                let { kids: e } = (0, a.g)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, l.jsx)(i.NotFound, {})
                );
            });
        },
        51042: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 45941));
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => f, st: () => s, gf: () => a });
            var l = n(55178);
            let o = (0, l.createContext)(null);
            function s() {
                return (0, l.useContext)(o);
            }
            let i = (0, l.createContext)({ hash: void 0 });
            function a() {
                return (0, l.useContext)(i);
            }
            var c = n(32290),
                r = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, l.useMemo)(() => ({ hash: (0, r.A)() }), []);
                return (0, c.jsx)(i.Provider, { value: n, children: t });
            };
            var d = n(16172);
            let p = null,
                f = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: s, logger: i, metrika: a } = e,
                        r = (0, l.useMemo)(() => {
                            if (p) return p;
                            let e = (0, d.vD)((e) => a.count(e, s), i, t),
                                n = (0, d.xU)(),
                                l = (0, d.$N)();
                            return (p = new d.gK(e, n, l));
                        }, [i, a]);
                    return (0, c.jsx)(o.Provider, { value: r, children: (0, c.jsx)(u, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => s });
            var l = n(55178),
                o = n(29098);
            let s = () => (0, l.useContext)(o.P);
        },
        55365: (e) => {
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
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => o, W: () => s });
            var l = n(55178);
            let o = (0, l.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function s() {
                return (0, l.useContext)(o);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => o, g: () => s });
            var l = n(55178);
            let o = (0, l.createContext)({
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
                s = () => (0, l.useContext)(o);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var l = n(21916),
                o = n(91027),
                s = n(36477);
            let i = (e) => {
                let t = (0, l.useRouter)(),
                    { href: n, target: i } = (0, s.u)(e);
                return (0, o.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === i
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
    },
]);
