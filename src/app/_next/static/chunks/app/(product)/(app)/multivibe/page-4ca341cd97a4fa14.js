(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        1204: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => o });
            var o = (function (e) {
                return (e.PLAY_VIBE = 'play-vibe'), (e.SHOW_MULTIVIBE_PROMO = 'show-multivibe-promo'), (e.SHOW_MULTIVIBE_INVITE = 'show-multivibe-invite'), e;
            })({});
        },
        3377: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => v });
            var o = n(32290),
                i = n(96103),
                a = n(21916),
                s = n(63618),
                l = n(39407),
                r = n(71926),
                c = n(94218),
                u = n(55556),
                d = n.n(u);
            let m = (0, i.PA)(() =>
                (0, o.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, o.jsx)(r.DZ, {
                            className: (0, s.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, o.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, o.jsx)(r.HL, {
                            className: (0, s.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, o.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, o.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var p = n(20472),
                _ = n(57594);
            let v = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: i } = (0, _.g)();
                return i.isAuthorized ? t : (n && (0, a.redirect)(p.Z.main.href), (0, o.jsx)(m, {}));
            });
        },
        3961: (e, t, n) => {
            'use strict';
            var o;
            n.d(t, { z: () => o }),
                (function (e) {
                    (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'), (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'), (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED');
                })(o || (o = {}));
        },
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => O });
            var o = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(39407),
                l = n(63423),
                r = n(82586),
                c = n(46049),
                u = n(71926),
                d = n(55178),
                m = n(16172),
                p = n(52068),
                _ = n(62376),
                v = n(27576),
                f = n(83920),
                x = n(20472),
                N = n(84062),
                h = n(27120),
                I = n(12894),
                g = n(57594),
                y = n(55365),
                E = n.n(y);
            let O = (0, a.PA)((e) => {
                let { className: t, title: n, description: a, iconVariant: y = 'musicLogo', iconClassName: O, iconSize: R } = e,
                    { contentRef: S, setContentScrollRef: b } = (0, f.g)(),
                    k = (0, N.Z)(x.Z.main.href);
                !(function () {
                    let e = (0, p.st)(),
                        { hash: t } = (0, p.gf)(),
                        n = (0, _.U)(),
                        o = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        o.current = (0, v.A)();
                        let i = (0, m.Fx)({
                            params: {
                                hash: t,
                                pageId: m.QT.PageNotFoundScreen,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            i && (0, m.w5)(e.evgenInstance, i),
                            () => {
                                let i = (0, m.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: m.QT.PageNotFoundScreen,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                i && (0, m.XB)(e.evgenInstance, i);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: A } = (function (e) {
                    let t = (0, p.st)(),
                        { hash: n } = (0, p.gf)(),
                        o = (0, _.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let i = (0, m.Fx)({
                                params: {
                                    hash: n,
                                    pageId: m.QT.PageNotFoundScreen,
                                    pageStyle: m.QL.Fullscreen,
                                    pagePlacement: m.c4.Fullscreen,
                                    mainObjectType: m.ky.NonApplicable,
                                    mainObjectId: m.ky.NonApplicable,
                                    from: m.QT.PageNotFoundScreen,
                                    to: m.QT.MainScreen,
                                    entityType: m.LA.Error,
                                    entityId: m.LA.Error,
                                },
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            i && (0, m.Mu)(t.evgenInstance, i), e();
                        }, [t, n, o, e]),
                    };
                })(k);
                return (
                    (0, h.N)(!0),
                    !(function () {
                        let { location: e } = (0, g.g)();
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
                        className: (0, i.$)(E().root, { [E().root_desktop]: !S }, t),
                        containerClassName: E().container,
                        ref: b,
                        children: [
                            (0, o.jsx)(I.L, { withBackwardFallback: '/', className: E().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: E().content,
                                children: [
                                    (0, o.jsx)(r.I, { className: (0, i.$)(E().icon, O), variant: y, size: R }),
                                    (0, o.jsx)(u.DZ, {
                                        className: (0, i.$)(E().title, E().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(u.HL, {
                                        className: (0, i.$)(E().text, E().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, o.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: A,
                                        className: E().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        9634: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => l });
            var o = n(32290),
                i = n(82586),
                a = n(82542),
                s = n.n(a);
            let l = (e) => {
                let { style: t } = e,
                    n = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, o.jsx)('div', {
                    style: n,
                    children: (0, o.jsx)(i.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var o = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(55178),
                l = n(60900),
                r = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(82586),
                m = n(21935),
                p = n(78842),
                _ = n.n(p);
            let v = (0, a.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: a = !0,
                        className: p,
                        withBackwardFallback: v,
                        buttonSize: f = 'xxs',
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    { canBack: N, canForward: h, moveBack: I, moveForward: g } = (0, m.J)(v),
                    y = (0, s.useRef)(null),
                    E = (0, c.c)((e) => {
                        e.stopPropagation(), I();
                    }),
                    O = (0, c.c)((e) => {
                        e.stopPropagation(), g();
                    });
                return (
                    (0, s.useEffect)(() => {
                        a && y.current && N && y.current.focus();
                    }, [N]),
                    (0, o.jsxs)('div', {
                        className: (0, i.$)(_().root, p),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, o.jsx)(u.$, {
                                    ref: y,
                                    'aria-label': x({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !N,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: E,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, o.jsx)(u.$, {
                                    'aria-label': x({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !h,
                                    size: f,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: O,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        15258: (e, t, n) => {
            'use strict';
            n.d(t, { WithWebNextWaveForTwo: () => l });
            var o = n(96103),
                i = n(21916),
                a = n(20472),
                s = n(57594);
            let l = (0, o.PA)((e) => {
                let { children: t } = e,
                    { multivibe: n } = (0, s.g)();
                return n.isEnabled || (0, i.redirect)(a.Z.main.href), t;
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
                a = n(83808);
            let s = (e) => {
                let t = (0, a.W)(),
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
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var o = n(55178),
                i = n(53022);
            let a = (e) => {
                let t = (0, o.useRef)(!1),
                    n = (0, i.z)();
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
        32674: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 87615));
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var o = n(30782),
                i = n(55178),
                a = n(36260),
                s = n(60900);
            function l(e) {
                var t = (0, s.A)(),
                    n = t.formatMessage,
                    o = t.textComponent,
                    a = void 0 === o ? i.Fragment : o,
                    l = e.id,
                    r = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    m = e.tagName,
                    p = void 0 === m ? a : m,
                    _ = n({ id: l, description: r, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(_) ? _ : [_]) : p ? i.createElement(p, null, _) : i.createElement(i.Fragment, null, _);
            }
            l.displayName = 'FormattedMessage';
            var r = i.memo(l, function (e, t) {
                var n = e.values,
                    i = (0, o.__rest)(e, ['values']),
                    s = t.values,
                    l = (0, o.__rest)(t, ['values']);
                return (0, a.bN)(s, n) && (0, a.bN)(i, l);
            });
            r.displayName = 'MemoizedFormattedMessage';
            let c = r;
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => p, st: () => a, gf: () => l });
            var o = n(55178);
            let i = (0, o.createContext)(null);
            function a() {
                return (0, o.useContext)(i);
            }
            let s = (0, o.createContext)({ hash: void 0 });
            function l() {
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
                p = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: a, logger: s, metrika: l } = e,
                        c = (0, o.useMemo)(() => {
                            if (m) return m;
                            let e = (0, d.vD)((e) => l.count(e, a), s, t),
                                n = (0, d.xU)(),
                                o = (0, d.$N)();
                            return (m = new d.gK(e, n, o));
                        }, [s, l]);
                    return (0, r.jsx)(i.Provider, { value: c, children: (0, r.jsx)(u, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => a });
            var o = n(55178),
                i = n(29098);
            let a = () => (0, o.useContext)(i.P);
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
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79473: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => l });
            var o = n(21916),
                i = n(55178),
                a = n(20472),
                s = n(57594);
            let l = () => {
                let e = (0, o.useRouter)(),
                    { user: t, paywall: n, multivibe: l } = (0, s.g)(),
                    [r, c] = (0, i.useState)(!1),
                    u = !l.isEnabled,
                    d = t.hasPlus,
                    m = n.modal.isOpened,
                    p = !d && r && !m,
                    _ = r && m;
                return (
                    (0, i.useEffect)(() => {
                        if (u || p) return void e.replace(a.Z.main.href);
                        r || d || m || (n.openModal(), c(!0));
                    }, [d, u, m, r, n, e, p]),
                    { hasPlus: d, isPaywallBlocking: _ }
                );
            };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => a });
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
            function a() {
                return (0, o.useContext)(i);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i, g: () => a });
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
                a = () => (0, o.useContext)(i);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var o = n(21916),
                i = n(91027),
                a = n(36477);
            let s = (e) => {
                let t = (0, o.useRouter)(),
                    { href: n, target: s } = (0, a.u)(e);
                return (0, i.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === s
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, a.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
        87615: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => I });
            var o = n(32290),
                i = n(21916),
                a = n(3377),
                s = n(15258),
                l = n(96103),
                r = n(55178),
                c = n(3961),
                u = n(91027),
                d = n(7748),
                m = n(79473),
                p = n(20472),
                _ = n(57594),
                v = n(1204),
                f = n(97201),
                x = n(9634);
            let N = (0, l.PA)((e) => {
                    let { roomId: t = null } = e,
                        n = (0, i.useRouter)(),
                        { multivibe: a } = (0, _.g)(),
                        { hasPlus: s, isPaywallBlocking: l } = (0, m.S)(),
                        [N, h] = (0, r.useState)(!1),
                        I = (0, u.c)(async (e) => {
                            var t;
                            if ((await a.getRoomById({ roomId: e }), a.isGetRoomByIdRejected && a.errorName !== c.z.ROOM_NOT_FOUND)) {
                                h(!0), a.resetErrorName();
                                return;
                            }
                            let o = a.invitationRoom,
                                i = new URLSearchParams();
                            (null == o ? void 0 : o.isEnabled) && (null == (t = o.wave) ? void 0 : t.seedsId)
                                ? (i.set(f.K.DEEPLINK, v.v.PLAY_VIBE), i.set(f.K.SEEDS, o.wave.seedsId))
                                : (i.set(f.K.DEEPLINK, v.v.SHOW_MULTIVIBE_INVITE), i.set(f.K.MULTIVIBE_INVITE_ROOM_ID, e)),
                                n.replace(''.concat(p.Z.main.href, '?').concat(i.toString()));
                        });
                    return ((0, r.useEffect)(() => {
                        s && t && I(t);
                    }, [I, s, t]),
                    t)
                        ? (N && (0, i.notFound)(), l)
                            ? null
                            : (0, o.jsx)(x.MainSuspenseLoader, {})
                        : (0, o.jsx)(d.NotFound, {});
                }),
                h = (0, l.PA)(() => {
                    let e = (0, i.useRouter)(),
                        { hasPlus: t, isPaywallBlocking: n } = (0, m.S)();
                    return ((0, r.useEffect)(() => {
                        if (!t) return;
                        let n = new URLSearchParams();
                        n.set(f.K.DEEPLINK, v.v.SHOW_MULTIVIBE_PROMO), e.replace(''.concat(p.Z.main.href, '?').concat(n.toString()));
                    }, [t, e]),
                    n)
                        ? null
                        : (0, o.jsx)(x.MainSuspenseLoader, {});
                }),
                I = () => {
                    let e = (0, i.useSearchParams)().get('roomId');
                    return (0, o.jsx)(s.WithWebNextWaveForTwo, {
                        children: (0, o.jsx)(a.WithAuth, { withRedirectToMainPage: !1, children: e ? (0, o.jsx)(N, { roomId: e }) : (0, o.jsx)(h, {}) }),
                    });
                };
        },
        94218: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => m });
            var o = n(32290),
                i = n(21916),
                a = n(39407),
                s = n(21732),
                l = n(91027),
                r = n(63423),
                c = n(71926),
                u = n(70204),
                d = n(34186);
            let m = (e) => {
                let { size: t = 'm', variant: n = 'default', withRipple: m = !0, buttonText: p, isBlock: _, key: v, className: f } = e,
                    x = (0, i.useRouter)(),
                    N = (0, d.N)().get(u.QG),
                    h = (0, l.c)(() => {
                        N.authorizationUrl && x.push(N.authorizationUrl);
                    });
                return (0, o.jsx)(
                    r.$,
                    {
                        onClick: h,
                        className: f,
                        isBlock: _,
                        color: 'primary',
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, o.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, o.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        97201: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => o });
            var o = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
    },
    (e) => {
        e.O(0, [5718, 7034, 6639, 6706, 8892, 2536, 66, 5835, 2812, 6477, 7275, 2586, 8347, 4522, 4220, 9562, 7358], () => e((e.s = 32674))), (_N_E = e.O());
    },
]);
