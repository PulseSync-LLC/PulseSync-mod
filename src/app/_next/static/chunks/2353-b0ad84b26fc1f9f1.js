(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2353],
    {
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => b });
            var o = n(32290),
                l = n(63618),
                s = n(96103),
                i = n(39407),
                a = n(63423),
                r = n(82586),
                c = n(46049),
                u = n(71926),
                d = n(55178),
                p = n(16172),
                m = n(52068),
                f = n(62376),
                v = n(27576),
                g = n(83920),
                N = n(20472),
                y = n(84062),
                _ = n(27120),
                x = n(12894),
                h = n(57594),
                k = n(55365),
                F = n.n(k);
            let b = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: k = 'musicLogo', iconClassName: b, iconSize: A } = e,
                    { contentRef: S, setContentScrollRef: R } = (0, g.g)(),
                    P = (0, y.Z)(N.Z.main.href);
                !(function () {
                    let e = (0, m.st)(),
                        { hash: t } = (0, m.gf)(),
                        n = (0, f.U)(),
                        o = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        o.current = (0, v.A)();
                        let l = (0, p.Fx)({
                            params: {
                                hash: t,
                                pageId: p.QT.PageNotFoundScreen,
                                pageStyle: p.QL.Fullscreen,
                                pagePlacement: p.c4.Fullscreen,
                                mainObjectType: p.ky.NonApplicable,
                                mainObjectId: p.ky.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, p.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, p.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: p.QT.PageNotFoundScreen,
                                        pageStyle: p.QL.Fullscreen,
                                        pagePlacement: p.c4.Fullscreen,
                                        mainObjectType: p.ky.NonApplicable,
                                        mainObjectId: p.ky.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, p.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: w } = (function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        o = (0, f.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, p.Fx)({
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
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            l && (0, p.Mu)(t.evgenInstance, l), e();
                        }, [t, n, o, e]),
                    };
                })(P);
                return (
                    (0, _.N)(!0),
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
                    (0, o.jsxs)(c.N, {
                        className: (0, l.$)(F().root, { [F().root_desktop]: !S }, t),
                        containerClassName: F().container,
                        ref: R,
                        children: [
                            (0, o.jsx)(x.L, { withBackwardFallback: '/', className: F().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: F().content,
                                children: [
                                    (0, o.jsx)(r.I, { className: (0, l.$)(F().icon, b), variant: k, size: A }),
                                    (0, o.jsx)(u.DZ, {
                                        className: (0, l.$)(F().title, F().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(u.HL, {
                                        className: (0, l.$)(F().text, F().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(a.$, {
                                        onClick: w,
                                        className: F().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
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
            n.d(t, { L: () => v });
            var o = n(32290),
                l = n(63618),
                s = n(96103),
                i = n(55178),
                a = n(60900),
                r = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(82586),
                p = n(21935),
                m = n(78842),
                f = n.n(m);
            let v = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: m,
                        withBackwardFallback: v,
                        buttonSize: g = 'xxs',
                    } = e,
                    { formatMessage: N } = (0, a.A)(),
                    { canBack: y, canForward: _, moveBack: x, moveForward: h } = (0, p.J)(v),
                    k = (0, i.useRef)(null),
                    F = (0, c.c)((e) => {
                        e.stopPropagation(), x();
                    }),
                    b = (0, c.c)((e) => {
                        e.stopPropagation(), h();
                    });
                return (
                    (0, i.useEffect)(() => {
                        s && k.current && y && k.current.focus();
                    }, [y]),
                    (0, o.jsxs)('div', {
                        className: (0, l.$)(f().root, m),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, o.jsx)(u.$, {
                                    ref: k,
                                    'aria-label': N({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: g,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: F,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, o.jsx)(u.$, {
                                    'aria-label': N({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: g,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: b,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var o = n(36477);
            let l = {
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
            n.d(t, { J: () => i });
            var o = n(62060),
                l = n(55178),
                s = n(83808);
            let i = (e) => {
                let t = (0, s.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, o.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, l.useMemo)(
                        () =>
                            (0, o.A)(() => {
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
            var o = n(55178),
                l = n(53022);
            let s = (e) => {
                let t = (0, o.useRef)(!1),
                    n = (0, l.z)();
                (0, o.useEffect)(() => {
                    e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => o });
            let o = (0, n(55178).createContext)(null);
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var o = n(30782),
                l = n(55178),
                s = n(36260),
                i = n(60900);
            function a(e) {
                var t = (0, i.A)(),
                    n = t.formatMessage,
                    o = t.textComponent,
                    s = void 0 === o ? l.Fragment : o,
                    a = e.id,
                    r = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    m = void 0 === p ? s : p,
                    f = n({ id: a, description: r, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? l.createElement(m, null, f) : l.createElement(l.Fragment, null, f);
            }
            a.displayName = 'FormattedMessage';
            var r = l.memo(a, function (e, t) {
                var n = e.values,
                    l = (0, o.__rest)(e, ['values']),
                    i = t.values,
                    a = (0, o.__rest)(t, ['values']);
                return (0, s.bN)(i, n) && (0, s.bN)(l, a);
            });
            r.displayName = 'MemoizedFormattedMessage';
            let c = r;
        },
        39904: (e) => {
            e.exports = { root: 'SlidesNotFoundPage_root__bmv9K', important: 'SlidesNotFoundPage_important__VELWc' };
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => m, st: () => s, gf: () => a });
            var o = n(55178);
            let l = (0, o.createContext)(null);
            function s() {
                return (0, o.useContext)(l);
            }
            let i = (0, o.createContext)({ hash: void 0 });
            function a() {
                return (0, o.useContext)(i);
            }
            var r = n(32290),
                c = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, o.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, r.jsx)(i.Provider, { value: n, children: t });
            };
            var d = n(16172);
            let p = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: s, logger: i, metrika: a } = e,
                        c = (0, o.useMemo)(() => {
                            if (p) return p;
                            let e = (0, d.vD)((e) => a.count(e, s), i, t),
                                n = (0, d.xU)(),
                                o = (0, d.$N)();
                            return (p = new d.gK(e, n, o));
                        }, [i, a]);
                    return (0, r.jsx)(l.Provider, { value: c, children: (0, r.jsx)(u, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => s });
            var o = n(55178),
                l = n(29098);
            let s = () => (0, o.useContext)(l.P);
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
            n.d(t, { Q: () => l, W: () => s });
            var o = n(55178);
            let l = (0, o.createContext)({
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
                return (0, o.useContext)(l);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => s });
            var o = n(55178);
            let l = (0, o.createContext)({
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
                s = () => (0, o.useContext)(l);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var o = n(21916),
                l = n(91027),
                s = n(36477);
            let i = (e) => {
                let t = (0, o.useRouter)(),
                    { href: n, target: i } = (0, s.u)(e);
                return (0, l.c)((e) => {
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
        92353: (e, t, n) => {
            Promise.resolve().then(n.t.bind(n, 39904, 23)), Promise.resolve().then(n.bind(n, 7748));
        },
    },
]);
