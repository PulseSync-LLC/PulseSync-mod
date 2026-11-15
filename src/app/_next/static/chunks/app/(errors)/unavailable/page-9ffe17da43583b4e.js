(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var i = n(67174);
            let l = {
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
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => a });
            var i = n(35412),
                l = n(28166),
                s = n(97261);
            let o = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, l.Lz],
                a = (e, t, n) => {
                    let a;
                    try {
                        a = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let c = (0, i.Rj)(e, { allowedProtocols: new Set([...o, a.protocol]), baseUrl: a.href });
                    return c.isAllowed
                        ? c.url.protocol === l.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(c.url, a)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => i, ov: () => l });
            let i = ''.concat('yandexmusic', ':'),
                l = ''.concat(i, '//');
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => L });
            var i = n(88800),
                l = n(65724),
                s = n(84961),
                o = n(53548),
                a = n(2058),
                c = n(88969);
            n(30282);
            var r = n(96817),
                u = n(52300),
                d = n(29504),
                p = n(87999),
                m = n(47149),
                _ = n(84423),
                g = n(89846),
                h = n(64543),
                y = n(63582);
            let v = (0, y.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, g.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !n || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: i.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, n, null == i ? void 0 : i.pageId]),
                    };
                }),
                k = (0, y.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, g.g)(),
                        { screen: l } = (0, h.j)();
                    (0, o.useEffect)(() => {
                        if (!n || !i || !(null == l ? void 0 : l.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: l.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(n, t);
                    }, [n, e, i, null == l ? void 0 : l.pageId]);
                });
            var x = n(44230),
                b = n(4370),
                f = n(72288),
                N = n(97956),
                S = n(56248),
                w = n(90688),
                T = n(78940);
            let j = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = n(96856),
                I = n.n(R);
            let A = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { slam: o } = (0, f.g)(),
                    { contentRef: a } = (0, x.g)(),
                    u = (0, T.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(I().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(I().navigation, { [I().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(I().content, { [I().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(w._V, { className: I().image, src: j.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(c.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(c.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, i.jsx)(r.$, {
                                        className: I().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(c.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var P = n(9184),
                E = n.n(P);
            let L = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { formatMessage: p } = (0, a.A)(),
                    m = (0, o.useContext)(f.P),
                    _ = null == m ? void 0 : m.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    g = p(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                k(g);
                let { sendRefreshEvent: h } = v(),
                    y = (0, o.useCallback)(() => {
                        (h(), (window.location.href = b.Z.main.href));
                    }, [h]),
                    { contentRef: w } = (0, x.g)();
                return _
                    ? (0, i.jsx)(A, { className: t, withBackwardControl: n, onBack: s })
                    : (0, i.jsxs)('div', {
                          className: (0, l.$)(E().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(E().navigation, { [E().navigation_desktop]: !w }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, l.$)(E().content, { [E().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, l.$)(E().title, E().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, l.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(c.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(r.$, {
                                          onClick: y,
                                          className: E().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(c.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => s });
            var i = n(53548);
            let l = (0, i.createContext)({
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
                s = () => (0, i.useContext)(l);
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => o });
            var i = n(55482),
                l = n(53548),
                s = n(46422);
            let o = (e) => {
                let t = (0, s.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
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
        55904: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 32596));
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => g });
            var i = n(88800),
                l = n(65724),
                s = n(84961),
                o = n(53548),
                a = n(2058),
                c = n(17392),
                r = n(29993),
                u = n(96817),
                d = n(52300),
                p = n(46777),
                m = n(50320),
                _ = n.n(m);
            let g = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: m,
                        withBackwardFallback: g,
                        buttonSize: h = 'xxs',
                        onBackwardClick: y,
                    } = e,
                    { formatMessage: v } = (0, a.A)(),
                    { canBack: k, canForward: x, moveBack: b, moveForward: f } = (0, p.J)(g),
                    N = (0, o.useRef)(null),
                    S = (0, r.c)((e) => {
                        if ((e.stopPropagation(), y)) return void y();
                        b();
                    }),
                    w = (0, r.c)((e) => {
                        (e.stopPropagation(), f());
                    });
                return (
                    (0, o.useEffect)(() => {
                        s && N.current && k && N.current.focus();
                    }, [k]),
                    (0, i.jsxs)('div', {
                        className: (0, l.$)(_().root, m),
                        'data-test-id': c.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(u.$, {
                                    ref: N,
                                    'aria-label': v({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !k,
                                    size: h,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: S,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, i.jsx)(u.$, {
                                    'aria-label': v({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !x,
                                    size: h,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: w,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => c }), n(30282));
            var i = n(58390),
                l = n(29993),
                s = n(67174),
                o = n(15947),
                a = n(97261);
            let c = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: c } = (0, s.u)(e);
                return (0, l.c)((e) => {
                    let i = (0, o.U)(n, window.location.href, c);
                    if (!i) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (i.type === a.I.EXTERNAL || i.type === a.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(i.href)
                            : t.push(i.href));
                });
            };
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
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => i });
            var i = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
    },
    (e) => {
        (e.O(0, [4700, 7908, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4732, 9087, 3979, 1928, 763, 2670, 7358], () => e((e.s = 55904))), (_N_E = e.O()));
    },
]);
