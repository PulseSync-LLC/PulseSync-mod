(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7322],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var i = n(67174);
            let s = {
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
        4765: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => i });
            var i = (function (e) {
                return ((e.LIKED = '1'), (e.DISLIKED = '0'), e);
            })({});
        },
        4795: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            var i = n(72288),
                s = n(97956);
            let r = () => {
                var e, t;
                let {
                    user: n,
                    settings: { browserInfo: r },
                    experiments: a,
                } = (0, i.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    n.isAuthorized &&
                    !n.hasPlus &&
                    (null == (t = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5407: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => h });
            var i = n(88800),
                s = n(29993),
                r = n(88969),
                a = n(29504),
                o = n(59304),
                l = n(51028),
                c = n.n(l);
            let u = () =>
                (0, i.jsx)(o.$, {
                    message: (0, i.jsx)(a.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, i.jsx)(r.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var d = n(29595),
                m = n(74965),
                p = n(72288);
            let h = () => {
                let { notify: e } = (0, m.l)(),
                    { advert: t } = (0, p.g)();
                return (0, s.c)(() => (t.isAdvertShown && e((0, i.jsx)(u, {}), { containerId: d.u.INFO }), !!t.isAdvertShown));
            };
        },
        8438: (e, t, n) => {
            'use strict';
            n.d(t, { y: () => a });
            var i = n(30282),
                s = n(12149),
                r = n(44702);
            let a = () => ''.concat(i.sK.DESKTOP).concat((0, r.$)((0, s.u)()));
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
        9618: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => r });
            var i = n(53548),
                s = n(72288);
            let r = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: n,
                        settings: r,
                        familyInvite: a,
                        freeAccess: o,
                    } = (0, s.g)(),
                    l = null == (e = r.browserInfo) ? void 0 : e.isTouch,
                    c = a.modal.isOpened;
                return (0, i.useMemo)(
                    () => ({
                        showBuySubscriptionModal: t.open,
                        hideBuySubscriptionModal: t.close,
                        shouldShowBuySubscriptionModal: (o.isFreeWebUser || !n.isAuthorized) && !!l && !c,
                    }),
                    [t.close, t.open, o.isFreeWebUser, l, n.isAuthorized, c],
                );
            };
        },
        9630: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => s, e: () => r });
            var i = n(53548);
            let s = (0, i.createContext)(null);
            function r() {
                return (0, i.useContext)(s);
            }
        },
        12149: (e, t, n) => {
            'use strict';
            function i() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            n.d(t, { u: () => i });
        },
        13766: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 57127)), Promise.resolve().then(n.bind(n, 87396)));
        },
        14518: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => r });
            var i = n(53548),
                s = n(90334);
            function r() {
                return (0, i.useContext)(s.r);
            }
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => o });
            var i = n(35412),
                s = n(28166),
                r = n(97261);
            let a = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, s.Lz],
                o = (e, t, n) => {
                    let o;
                    try {
                        o = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, i.Rj)(e, { allowedProtocols: new Set([...a, o.protocol]), baseUrl: o.href });
                    return l.isAllowed
                        ? l.url.protocol === s.Lz
                            ? { type: r.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, o)
                              ? { type: r.I.INTERNAL, href: e }
                              : { type: r.I.EXTERNAL, href: e }
                        : null;
                };
        },
        18593: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { K: () => i }),
                (function (e) {
                    ((e.Album = 'album'),
                        (e.Playlist = 'playlist'),
                        (e.Artist = 'artist'),
                        (e.Vibe = 'vibe'),
                        (e.Various = 'various'),
                        (e.Generative = 'generative'),
                        (e.Radio = 'fm_radio'),
                        (e.Search = 'search'),
                        (e.LegacyRadio = 'legacy_radio'));
                })(i || (i = {})));
        },
        20585: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => i, ov: () => s });
            let i = ''.concat('yandexmusic', ':'),
                s = ''.concat(i, '//');
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => P });
            var i = n(88800),
                s = n(65724),
                r = n(84961),
                a = n(53548),
                o = n(2058),
                l = n(88969);
            n(30282);
            var c = n(96817),
                u = n(52300),
                d = n(29504),
                m = n(78793),
                p = n(92716),
                h = n(99984),
                g = n(90780),
                v = n(65523),
                f = n(14518),
                y = n(44230),
                w = n(4370),
                b = n(72288),
                _ = n(97956),
                x = n(56248),
                A = n(90688),
                E = n(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = n(96856),
                R = n.n(I);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: r } = e,
                    { slam: a } = (0, b.g)(),
                    { contentRef: o } = (0, y.g)(),
                    u = (0, E.Z)(w.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(R().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(x.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(R().navigation, { [R().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(R().content, { [R().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(A._V, { className: R().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: R().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: R().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: R().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: R().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: R().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = n(9184),
                S = n.n(L);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: r } = e,
                    { formatMessage: A } = (0, o.A)(),
                    E = (0, a.useContext)(b.P),
                    k = null == E ? void 0 : E.experiments.checkExperiment(_.z.WebNextUnstableMusicScreen, 'on'),
                    I = A(k ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: n } = (0, g.gf)(),
                        { pageId: i } = (0, f.$)(),
                        s = (0, v.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !n || !i) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, h.z5)(t.evgenInstance, r);
                    }, [t, e, n, i, s]);
                })(I);
                let { sendRefreshEvent: R } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: n } = (0, f.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let s = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, h.bv)(e.evgenInstance, s);
                            }, [e, t, n, i]),
                        };
                    })(),
                    L = (0, a.useCallback)(() => {
                        (R(), (window.location.href = w.Z.main.href));
                    }, [R]),
                    { contentRef: P } = (0, y.g)();
                return k
                    ? (0, i.jsx)(N, { className: t, withBackwardControl: n, onBack: r })
                    : (0, i.jsxs)('div', {
                          className: (0, s.$)(S().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(x.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(S().navigation, { [S().navigation_desktop]: !P }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, s.$)(S().content, { [S().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, s.$)(S().title, S().important), variant: 'h3', size: 'xs', children: I }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, s.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: L,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34303: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
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
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => s, g: () => r });
            var i = n(53548);
            let s = (0, i.createContext)({
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
                r = () => (0, i.useContext)(s);
        },
        44349: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { R: () => i }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(i || (i = {})));
        },
        44702: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => s });
            var i = n(55956);
            let s = (e) => {
                switch (e) {
                    case 'win32':
                        return i.V.WINDOWS;
                    case 'darwin':
                        return i.V.MACOS;
                    case 'linux':
                        return i.V.LINUX;
                }
                return null;
            };
        },
        46590: (e) => {
            e.exports = { root: 'WebViewPage_root__vl9f4' };
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var i = n(55482),
                s = n(53548),
                r = n(46422);
            let a = (e) => {
                let t = (0, r.W)(),
                    n = (0, s.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    a = (0, s.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: a };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51888: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => s, d: () => i });
            let i = (e) => String(e).split(':'),
                s = (e, t) => (t ? [e, t].join(':') : e);
        },
        55956: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e);
            })({});
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => g });
            var i = n(88800),
                s = n(65724),
                r = n(84961),
                a = n(53548),
                o = n(2058),
                l = n(17392),
                c = n(29993),
                u = n(96817),
                d = n(52300),
                m = n(46777),
                p = n(50320),
                h = n.n(p);
            let g = (0, r.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: r = !0,
                        className: p,
                        withBackwardFallback: g,
                        buttonSize: v = 'xxs',
                        onBackwardClick: f,
                    } = e,
                    { formatMessage: y } = (0, o.A)(),
                    { canBack: w, canForward: b, moveBack: _, moveForward: x } = (0, m.J)(g),
                    A = (0, a.useRef)(null),
                    E = (0, c.c)((e) => {
                        if ((e.stopPropagation(), f)) return void f();
                        _();
                    }),
                    k = (0, c.c)((e) => {
                        (e.stopPropagation(), x());
                    });
                return (
                    (0, a.useEffect)(() => {
                        r && A.current && w && A.current.focus();
                    }, [w]),
                    (0, i.jsxs)('div', {
                        className: (0, s.$)(h().root, p),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(u.$, {
                                    ref: A,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !w,
                                    size: v,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: E,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, i.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: v,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: k,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        57127: (e, t, n) => {
            'use strict';
            n.d(t, { WebViewPage: () => ef });
            var i = n(88800),
                s = n(84961),
                r = n(53548),
                a = n(58390),
                o = n(79070),
                l = n(46422),
                c = n(4370),
                u = n(78940),
                d = n(72288),
                m = n(97956),
                p = n(34303),
                h = n(35412);
            let g = new Set([h.cy.HTTPS]);
            var v = n(17392),
                f = n(32596),
                y = n(87396),
                w = n(2058),
                b = n(29993),
                _ = n(39499),
                x = n(63449),
                A = n(57448),
                E = n(79390),
                k = n(78309),
                I = n(49950),
                R = n(96706);
            let N = async (e) => {
                if ((e.isResolved || e.isLoading || (await e.getData()), e.isLoading && (await (0, R.z7)(() => !e.isLoading)), !e.isResolved))
                    throw new _.t('Failed to load the collection');
            };
            var L = n(16482),
                S = n(4765);
            let P = (e, t) => {
                let { entityType: n, entityId: i } = t;
                switch ({ [L.A.TRACK]: e.tracks, [L.A.ARTIST]: e.artists, [L.A.ALBUM]: e.albums, [L.A.CLIP]: e.clips, [L.A.PLAYLIST]: e.playlists }[n].items.get(i)) {
                    case S.O.LIKED:
                        return { state: k.U.LIKE };
                    case S.O.DISLIKED:
                        return { state: k.U.DISLIKE };
                    default:
                        return { state: k.U.NEUTRAL };
                }
            };
            var T = n(67960),
                D = n(51888);
            let W = async (e, t) => {
                    let { entityType: n, entityId: i } = e;
                    if (n === L.A.PLAYLIST) {
                        let e = /^\d+:\d+$/.test(i) ? (0, T.I)(i) : await t.getPlaylist({ playlistUuid: i, resumeStream: !1, richTracks: !1 }),
                            n = Number(e.uid);
                        return { entityId: ''.concat(n, ':').concat(e.kind), ownerId: n, kindId: e.kind };
                    }
                    if (n === L.A.TRACK && /^\d+:\d+$/.test(i)) {
                        let [e, t] = (0, D.d)(i);
                        if (e && t) return { entityId: e, albumId: Number(t) };
                    }
                    return { entityId: i };
                },
                C = async (e, t, n) => {
                    switch (t) {
                        case L.A.TRACK:
                            return e.toggleTrackLike(n);
                        case L.A.ARTIST:
                            return e.toggleArtistLike(n);
                        case L.A.ALBUM:
                            return e.toggleAlbumLike(n);
                        case L.A.CLIP:
                            return e.toggleClipLike(n);
                        case L.A.PLAYLIST:
                            return e.togglePlaylistLike(n);
                    }
                };
            var M = n(35540),
                j = n(15947),
                O = n(97261),
                U = n(67174),
                V = n(50267),
                K = n(5407),
                z = n(9618),
                B = n(4795),
                F = n(9630),
                G = n(44349),
                $ = n(18593),
                Z = n(895),
                q = n(20585);
            let Y = (e) => {
                switch (e) {
                    case V.Y.MAIN:
                        return;
                    case V.Y.TRAILER:
                        return q.V.TRAILER;
                    default:
                        throw new _.t('Unsupported WebApp playback');
                }
            };
            var H = n(26627),
                X = n(4086),
                J = n(41928),
                Q = n(65523);
            n(30282);
            var ee = n(97526),
                et = n(69704),
                en = n(74773),
                ei = n(9519),
                es = n(54020),
                er = n(69991),
                ea = n(4762),
                eo = n(30683);
            let el = [er.Z, ...Z.vs, ...I.cD, ...M.Y, ...H.Nf];
            var ec = n(8438),
                eu = n(49124);
            class ed {
                async start() {
                    try {
                        let e = this.sdk.start();
                        if ((this.disposed || (this.options.iframe.src = this.url.href), await e, this.disposed)) return;
                        (this.hostDocument.addEventListener('visibilitychange', this.sendVisibility), this.sendVisibility());
                    } catch (e) {
                        throw (this.dispose(), e);
                    }
                }
                dispose() {
                    this.disposed || ((this.disposed = !0), this.hostDocument.removeEventListener('visibilitychange', this.sendVisibility), this.sdk.dispose());
                }
                getContext() {
                    var e, t;
                    return {
                        locale: this.options.locale,
                        theme: null != (e = this.options.theme) ? e : 'system',
                        client: { name: (0, ec.y)(), version: null != (t = eu.env.APP_VERSION) ? t : '' },
                        safeArea: { top: 32, right: 0, bottom: 0, left: 0 },
                        appSessionId: (0, es.A)(),
                    };
                }
                close() {
                    (this.dispose(), this.options.onClose());
                }
                sendVisibility() {
                    try {
                        this.sdk.command(H.OW.name, { visible: !this.hostDocument.hidden });
                    } catch (t) {
                        var e;
                        null == (e = this.options.logger) || e.error('Failed to send WebApp visibility', { error: t });
                    }
                }
                constructor(e) {
                    ((0, ei._)(this, 'options', void 0),
                        (0, ei._)(this, 'sdk', void 0),
                        (0, ei._)(this, 'hostDocument', void 0),
                        (0, ei._)(this, 'url', void 0),
                        (0, ei._)(this, 'disposed', void 0),
                        (this.options = e),
                        (this.disposed = !1));
                    let { iframe: t, handlers: n, logger: i } = e;
                    ((this.hostDocument = t.ownerDocument), (this.close = this.close.bind(this)), (this.sendVisibility = this.sendVisibility.bind(this)));
                    try {
                        let s = t.contentWindow;
                        if (!s) throw new _.t('WebApp iframe is not mounted');
                        ((this.url = new URL(e.url)),
                            (this.sdk = (0, ea.D)({
                                transport: (0, eo._)({ targetWindow: s, expectedOrigin: this.url.origin }),
                                actions: el,
                                context: this.getContext(),
                                logger: i,
                                handlers: { ...n, [er.Z.name]: this.close },
                            })));
                    } catch (e) {
                        throw (null == i || i.error('Failed to prepare WebApp session', { error: e }), e);
                    }
                }
            }
            var em = n(63688),
                ep = n.n(em);
            let eh = (0, s.PA)((e) => {
                let { documentUrl: t, onClose: n } = e,
                    s = (0, r.useRef)(null),
                    { isPending: o, isRejected: l } = ((e) => {
                        let { frameRef: t, documentUrl: n, onClose: i } = e,
                            [s, o] = (0, r.useState)(en.G.PENDING),
                            l = (() => {
                                let e = ((e) => {
                                        let t = (0, F.e)(),
                                            n = (0, b.c)(() => {
                                                if (!t) throw new _.t('Player is not ready');
                                                return t;
                                            }),
                                            { paywall: i } = (0, d.g)(),
                                            s = (0, K.P)(),
                                            a = (0, B.N)(),
                                            { shouldShowBuySubscriptionModal: o, showBuySubscriptionModal: l } = (0, z.q)(),
                                            c = (0, b.c)((e) => {
                                                if (s()) throw new _.t('Playback is unavailable during an advertisement');
                                                if (e !== V.Y.TRAILER) {
                                                    if (o) throw (l(), new _.t('A subscription is required for playback'));
                                                    if (a) throw (i.modal.open(), new _.t('A subscription is required for playback'));
                                                }
                                            });
                                        return (0, r.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { getSonata: t, checkPlaybackAccess: n, from: i } = e;
                                                    return {
                                                        ...((e) => {
                                                            let t,
                                                                n = new Map(),
                                                                i = Promise.resolve(),
                                                                s = async (i, s) => {
                                                                    var r;
                                                                    let a = e();
                                                                    a !== t && (n.clear(), (t = a));
                                                                    let o = Y(i),
                                                                        l = a.getState(o).playerState.exponentVolume.value;
                                                                    if ((s && 0 === l) || (!s && 0 !== l)) return;
                                                                    s && n.set(i, l);
                                                                    let c = a.getState(q.V.TRAILER).playerState.exponentVolume.value,
                                                                        u = s ? 0 : null != (r = n.get(i)) ? r : 1;
                                                                    (await a.setExponentVolume(u, o), i === V.Y.MAIN && (await a.setExponentVolume(c, q.V.TRAILER)));
                                                                },
                                                                r = (e, t) => {
                                                                    let n = () => s(e, t),
                                                                        r = i.then(n, n);
                                                                    return ((i = r), r);
                                                                };
                                                            return {
                                                                [Z.ho.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return r(t, !0);
                                                                },
                                                                [Z.oq.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return r(t, !1);
                                                                },
                                                            };
                                                        })(t),
                                                        [Z.q5.name]: async (e) => {
                                                            let { playback: s, queue: r } = e,
                                                                a = t();
                                                            n(s);
                                                            let o = r[0];
                                                            if (!o) throw new _.t('WebApp playback queue must not be empty');
                                                            let l = Y(s),
                                                                c = s === V.Y.TRAILER ? G.R.SmartPreview : G.R.Unknown;
                                                            (await a.setContext(
                                                                {
                                                                    contextData: { type: $.K.Various, meta: o, from: i },
                                                                    entitiesData: r.map((e) => ({ type: c, meta: e })),
                                                                    queueParams: { index: 0 },
                                                                    loadContextMeta: !1,
                                                                },
                                                                l,
                                                            ),
                                                                await a.play(l));
                                                        },
                                                        [Z.gq.name]: async (e) => {
                                                            let { playback: n } = e;
                                                            await t().pause(Y(n));
                                                        },
                                                    };
                                                })({ getSonata: n, checkPlaybackAccess: c, from: e }),
                                            [n, c, e],
                                        );
                                    })('webview'),
                                    t = (() => {
                                        let { library: e, user: t, paywall: n } = (0, d.g)(),
                                            { playlistResource: i } = (0, A.f)(),
                                            s = (0, x.n)(),
                                            a = (0, b.c)(() => {
                                                let e = t.account.data.uid;
                                                if (!t.isAuthorized || void 0 === e) throw new _.t('Authorization is required for collection actions');
                                                return e;
                                            }),
                                            o = (0, b.c)(() => {
                                                if (s) throw (n.modal.open(), new _.t('A subscription is required to access the collection'));
                                            });
                                        return (0, r.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { library: t, playlistResource: n, getUserId: i, checkCollectionAccess: s } = e,
                                                        r = Promise.resolve(),
                                                        a = async (e, r) => {
                                                            s();
                                                            let a = i();
                                                            await N(t);
                                                            let o = await W(e, n),
                                                                l = { entityType: e.entityType, entityId: String(o.entityId) },
                                                                c = P(t, l);
                                                            if (void 0 === r || (c.state === k.U.LIKE) === r) return c;
                                                            if ((await C(t, e.entityType, { ...o, userId: a })) !== E.f.OK)
                                                                throw new _.t('Failed to update the collection');
                                                            return (await N(t), P(t, l));
                                                        },
                                                        o = (e, t) => {
                                                            let n = () => a(e, t),
                                                                i = r.then(n, n);
                                                            return ((r = i), i);
                                                        };
                                                    return { [I.Qc.name]: (e) => o(e, !0), [I.LZ.name]: (e) => o(e, !1), [I.X7.name]: (e) => o(e) };
                                                })({ library: e, playlistResource: i, getUserId: a, checkCollectionAccess: o }),
                                            [e, i, a, o],
                                        );
                                    })(),
                                    n = (() => {
                                        let e = (0, a.useRouter)(),
                                            t = (0, b.c)((t) => {
                                                let { weblink: n } = t,
                                                    { href: i, target: s } = (0, U.u)(n),
                                                    r = (0, j.U)(i, window.location.href, s);
                                                r &&
                                                    (r.type === O.I.EXTERNAL || r.type === O.I.DEEPLINK
                                                        ? ((e) => {
                                                              let { target: t, rel: n } = (0, U.u)(e, { options: { isExternalLink: !0 } });
                                                              window.open(e, t, n);
                                                          })(r.href)
                                                        : e.push(r.href));
                                            });
                                        return (0, r.useMemo)(() => ({ [M.r.name]: t }), [t]);
                                    })(),
                                    i = (() => {
                                        let e = (0, J.N)().get(X.QG),
                                            t =
                                                ((0, Q.U)(),
                                                (0, b.c)(async (e) => {
                                                    let { data: t, title: n } = e,
                                                        i = ((e) => {
                                                            let t = 'data:image/png;base64,',
                                                                n = atob(e.startsWith(t) ? e.slice(t.length) : e),
                                                                i = Uint8Array.from(n, (e) => e.charCodeAt(0));
                                                            if ([137, 80, 78, 71, 13, 10, 26, 10].every((e, t) => i[t] === e))
                                                                return new Blob([i], { type: 'image/png' });
                                                            throw Error('WebApp share data must contain a PNG image');
                                                        })(t),
                                                        s = 'ya-music-'.concat(Date.now(), '.png'),
                                                        r = new File([i], s, { type: i.type });
                                                    await (0, ee.r)(r, s);
                                                })),
                                            n = (0, b.c)(() => {
                                                e.redirectToAuthorizationUrl();
                                            });
                                        return (0, r.useMemo)(() => ({ [H.ZR.name]: t, [H.P$.name]: n }), [n, t]);
                                    })();
                                return (0, r.useMemo)(() => ({ ...e, ...t, ...n, ...i }), [e, t, n, i]);
                            })(),
                            c = (0, Q.U)(),
                            { locale: u } = (0, w.A)(),
                            { theme: m } = (0, et.W)(),
                            p = (0, b.c)(() => ({ locale: u, theme: m })),
                            h = (0, b.c)(i);
                        return (
                            (0, r.useEffect)(() => {
                                let e,
                                    i = t.current;
                                if (!i) return;
                                let s = !0;
                                return (
                                    o(en.G.PENDING),
                                    (async () => {
                                        try {
                                            ((e = new ed({ iframe: i, url: n, handlers: l, onClose: h, logger: c, ...p() })), await e.start(), s && o(en.G.RESOLVE));
                                        } catch (e) {
                                            s && o(en.G.REJECT);
                                        }
                                    })(),
                                    () => {
                                        ((s = !1), null == e || e.dispose());
                                    }
                                );
                            }, [h, n, t, p, l, c]),
                            { isPending: s === en.G.PENDING, isRejected: s === en.G.REJECT }
                        );
                    })({ frameRef: s, documentUrl: t, onClose: n });
                return (0, i.jsxs)('div', {
                    className: ep().root,
                    'aria-busy': o,
                    children: [
                        (0, i.jsx)('iframe', {
                            ref: s,
                            className: ep().frame,
                            title: t,
                            referrerPolicy: 'origin',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read; clipboard-write',
                            hidden: l,
                            'data-test-id': v.Xk.webView.WEB_VIEW_IFRAME,
                        }),
                        o && (0, i.jsx)(y.MainSuspenseLoader, { style: { position: 'absolute' } }),
                        l && (0, i.jsx)(f.SomethingWentWrong, { onBack: n }),
                    ],
                });
            });
            var eg = n(46590),
                ev = n.n(eg);
            let ef = (0, s.PA)(() => {
                var e;
                let { experiments: t } = (0, d.g)(),
                    n = t.checkExperiment(m.z.WebNextWebView, 'on'),
                    s = (0, a.usePathname)(),
                    v =
                        null ==
                        (e = ((e) => {
                            if (!e) return null;
                            let t = (0, h.Rj)(e, { allowedProtocols: g });
                            return t.isAllowed && 'https://music.yandex.ru' === t.url.origin ? t.url : null;
                        })((0, a.useSearchParams)().get(p.K.URL)))
                            ? void 0
                            : e.href,
                    f = (0, l.W)(),
                    y = (0, r.useRef)(null);
                if (null === y.current && ((y.current = c.Z.main.href), f.length >= 2)) {
                    let e = f.state,
                        t = (null == e ? void 0 : e.data.href.split('?')[0]) === s ? e.prev : e,
                        n = null == t ? void 0 : t.data.href;
                    n && n.split('?')[0] !== s && (y.current = n);
                }
                let w = (0, u.Z)(y.current),
                    b = (0, o.L)(() => ((n && v) || (0, a.redirect)(c.Z.main.href), (0, i.jsx)(eh, { documentUrl: v, onClose: w }, v)));
                return (0, i.jsx)('main', { className: ev().root, children: b });
            });
        },
        57448: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            var i = n(4086),
                s = n(41928);
            let r = () => {
                let e = (0, s.N)(),
                    t = e.get(i.$I),
                    n = e.get(i.EN),
                    r = e.get(i.N1),
                    a = e.get(i._1),
                    o = e.get(i.V3),
                    l = e.get(i.Lb),
                    c = e.get(i.wK),
                    u = e.get(i.tz),
                    d = e.get(i.$8),
                    m = e.get(i.Oo),
                    p = e.get(i.X4),
                    h = e.get(i.O9),
                    g = e.get(i.E),
                    v = e.get(i.wH),
                    f = e.get(i.ok),
                    y = e.get(i.X8),
                    w = e.get(i.yq),
                    b = e.get(i.NN),
                    _ = e.get(i.qN),
                    x = e.get(i.ro),
                    A = e.get(i.nM),
                    E = e.get(i.Ut),
                    k = e.get(i.K1),
                    I = e.get(i.eu),
                    R = e.get(i.SD),
                    N = e.get(i.aE),
                    L = e.get(i.ki),
                    S = e.get(i.c9),
                    P = e.get(i.en),
                    T = e.get(i.jQ),
                    D = e.get(i.cZ),
                    W = e.get(i.Zl),
                    C = e.get(i.CN),
                    M = e.get(i.P1),
                    j = e.get(i.zj),
                    O = e.get(i.re),
                    U = e.get(i.JM),
                    V = e.get(i.Lk),
                    K = e.get(i.$$),
                    z = e.get(i.sv),
                    B = e.get(i.gd),
                    F = e.get(i.Ez),
                    G = e.get(i.u2),
                    $ = e.get(i.TD),
                    Z = e.get(i.dh),
                    q = e.get(i.LC),
                    Y = e.get(i.PL),
                    H = e.get(i.DT);
                return {
                    accountResource: t,
                    afterTrackResource: n,
                    disclaimersResource: r,
                    usersResource: a,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: m,
                    topResource: p,
                    artistsResource: h,
                    slidesResource: g,
                    redAlertResource: v,
                    rotorResource: f,
                    waveResource: y,
                    searchResource: w,
                    searchPlaylistResource: b,
                    playlistResource: _,
                    playlistsResource: x,
                    pinResource: A,
                    metatagsResource: E,
                    tagResource: k,
                    feedResource: I,
                    wizard3Resource: R,
                    pinsResource: N,
                    musicHistoryResource: L,
                    dynamicPagesResource: S,
                    chartResource: P,
                    clipsResource: T,
                    lyricViewsResource: D,
                    nonMusicResource: W,
                    donationResource: C,
                    loaderResource: M,
                    lumenResource: j,
                    prefixlessResource: O,
                    streamsResource: U,
                    filtersResource: V,
                    ugcResource: K,
                    collectionResource: z,
                    adsResource: B,
                    personalResource: F,
                    familyResource: G,
                    childrenLandingResource: $,
                    promoResource: Z,
                    telemetryResource: q,
                    labelsResource: Y,
                    concertsResource: H,
                    wordsResource: e.get(i.dA),
                    wheelResource: e.get(i.$Y),
                };
            };
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        63449: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            var i = n(72288),
                s = n(97956);
            let r = () => {
                var e, t, n;
                let { user: r, experiments: a, settings: o } = (0, i.g)();
                return (
                    !a.checkExperiment(s.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = o.browserInfo) ? void 0 : e.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (n = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = n.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        63688: (e) => {
            e.exports = { root: 'WebViewFrame_root__nZh_X', frame: 'WebViewFrame_frame__nprFQ' };
        },
        65523: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => o });
            var i = n(4086),
                s = n(41928),
                r = n(44084);
            let a = new WeakMap(),
                o = () =>
                    ((e) => {
                        if (e instanceof r.r) return e;
                        let t = a.get(e);
                        if (t) return t;
                        let n = {
                            log: (t, n) => e.info(t, n),
                            trace: (t, n) => e.trace(t, n),
                            debug: (t, n) => e.debug(t, n),
                            info: (t, n) => e.info(t, n),
                            warn: (t, n) => e.warn(t, n),
                            error: (t, n) => e.error(t, n),
                            fatal: (t, n) => e.fatal(t, n),
                            child: (t) => e.child(t),
                        };
                        return (a.set(e, n), n);
                    })((0, s.N)().get(i.Zf));
        },
        67960: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => i });
            let i = (e) => {
                let [t, n] = e.split(':');
                return { uid: String(t), kind: Number(n) };
            };
        },
        69704: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => s, W: () => r });
            var i = n(53548);
            let s = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(s);
        },
        74773: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78793: (e, t, n) => {
            'use strict';
            function i(e) {
                let { params: t, logger: n, context: i } = e,
                    s = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return s.length > 0 ? (n.error('Evgen parameters are not met', { parameters: s.join(', '), incomingParams: t, context: i }), null) : t;
            }
            n.d(t, { F: () => i });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => l }), n(30282));
            var i = n(58390),
                s = n(29993),
                r = n(67174),
                a = n(15947),
                o = n(97261);
            let l = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: l } = (0, r.u)(e);
                return (0, s.c)((e) => {
                    let i = (0, a.U)(n, window.location.href, l);
                    if (!i) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (i.type === o.I.EXTERNAL || i.type === o.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, r.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(i.href)
                            : t.push(i.href));
                });
            };
        },
        79070: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => s });
            var i = {};
            (Object.defineProperty(i, '__esModule', { value: !0 }), (i.useReturnValue = void 0), (i.useReturnValue = (e) => e()), i.__esModule);
            var s = i.useReturnValue;
        },
        79390: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { f: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        87396: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => o });
            var i = n(88800),
                s = n(52300),
                r = n(60932),
                a = n.n(r);
            let o = (e) => {
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
                return (0, i.jsx)('div', {
                    style: n,
                    children: (0, i.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: a().icon,
                    }),
                });
            };
        },
        90334: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => i });
            let i = (0, n(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => v, st: () => r, gf: () => o });
            var i = n(53548);
            let s = (0, i.createContext)(null);
            function r() {
                return (0, i.useContext)(s);
            }
            let a = (0, i.createContext)({ hash: void 0 });
            function o() {
                return (0, i.useContext)(a);
            }
            var l = n(88800),
                c = n(54020);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, i.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, l.jsx)(a.Provider, { value: n, children: t });
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
            var p = n(9519);
            class h {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, p._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (i, s) => {
                                let r = { ...s, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(i, r);
                            },
                        }));
                }
            }
            let g = null,
                v = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: r, logger: a, metrika: o } = e,
                        c = (0, i.useMemo)(() => {
                            if (g) return g;
                            let e = (function (e, t, n) {
                                let i = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: i } = e,
                                        s = [];
                                    return (
                                        !(function e() {
                                            (s.length > 0 && t(s.splice(0, n)), window.setTimeout(e, i));
                                        })(),
                                        {
                                            add(e) {
                                                s.push(e);
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
                                    trackEvent(e, s) {
                                        (n && t.log(e, s), i.add({ [e]: s }));
                                    },
                                };
                            })((e) => o.count(e, r), a, t);
                            return (g = new h(
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
                        }, [a, o]);
                    return (0, l.jsx)(s.Provider, { value: c, children: (0, l.jsx)(u, { children: n }) });
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
        97526: (e, t, n) => {
            'use strict';
            (n.d(t, { r: () => i }), n(30282));
            let i = async (e, t) => {
                if (!window.musicDesktop) throw Error('Desktop file saving is unavailable');
                window.musicDesktop.files.savePng(t, await e.arrayBuffer());
            };
        },
    },
    (e) => {
        (e.O(0, [8752, 7435, 127, 3503, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 1278, 4732, 1195, 1598, 1928, 9124, 763, 2670, 7358], () => e((e.s = 13766))),
            (_N_E = e.O()));
    },
]);
