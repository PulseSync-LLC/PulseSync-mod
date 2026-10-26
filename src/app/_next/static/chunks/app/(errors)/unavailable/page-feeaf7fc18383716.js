(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        8487: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var a = n(23198),
                l = n(74631),
                s = n(30236),
                i = n(39004);
            function o(e) {
                var t = (0, i.A)(),
                    n = t.formatMessage,
                    a = t.textComponent,
                    s = void 0 === a ? l.Fragment : a,
                    o = e.id,
                    r = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    m = e.tagName,
                    p = void 0 === m ? s : m,
                    g = n({ id: o, description: r, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(g) ? g : [g]) : p ? l.createElement(p, null, g) : l.createElement(l.Fragment, null, g);
            }
            o.displayName = 'FormattedMessage';
            var r = l.memo(o, function (e, t) {
                var n = e.values,
                    l = (0, a.__rest)(e, ['values']),
                    i = t.values,
                    o = (0, a.__rest)(t, ['values']);
                return (0, s.bN)(i, n) && (0, s.bN)(l, o);
            });
            r.displayName = 'MemoizedFormattedMessage';
            let c = r;
        },
        15270: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var a = n(25839),
                l = n(82298),
                s = n(88204),
                i = n(74631),
                o = n(39004),
                r = n(61493),
                c = n(71035),
                u = n(4071),
                d = n(66738),
                m = n(20583),
                p = n(65610),
                g = n.n(p);
            let v = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: p,
                        withBackwardFallback: v,
                        buttonSize: y = 'xxs',
                    } = e,
                    { formatMessage: f } = (0, o.A)(),
                    { canBack: h, canForward: _, moveBack: b, moveForward: k } = (0, m.J)(v),
                    x = (0, i.useRef)(null),
                    P = (0, c.c)((e) => {
                        (e.stopPropagation(), b());
                    }),
                    N = (0, c.c)((e) => {
                        (e.stopPropagation(), k());
                    });
                return (
                    (0, i.useEffect)(() => {
                        s && x.current && h && x.current.focus();
                    }, [h]),
                    (0, a.jsxs)('div', {
                        className: (0, l.$)(g().root, p),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(u.$, {
                                    ref: x,
                                    'aria-label': f({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !h,
                                    size: y,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: P,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, a.jsx)(u.$, {
                                    'aria-label': f({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: y,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: N,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20583: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var a = n(10508),
                l = n(74631),
                s = n(21784);
            let i = (e) => {
                let t = (0, s.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, l.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: i };
            };
        },
        27990: (e) => {
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
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => y, st: () => s, gf: () => o });
            var a = n(74631);
            let l = (0, a.createContext)(null);
            function s() {
                return (0, a.useContext)(l);
            }
            let i = (0, a.createContext)({ hash: void 0 });
            function o() {
                return (0, a.useContext)(i);
            }
            var r = n(25839),
                c = n(59342);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, a.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, r.jsx)(i.Provider, { value: n, children: t });
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
            var p = n(58025);
            class g {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, p._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (a, l) => {
                                let s = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(a, s);
                            },
                        }));
                }
            }
            let v = null,
                y = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: s, logger: i, metrika: o } = e,
                        c = (0, a.useMemo)(() => {
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
                            })((e) => o.count(e, s), i, t);
                            return (v = new g(
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
                        }, [i, o]);
                    return (0, r.jsx)(l.Provider, { value: c, children: (0, r.jsx)(u, { children: n }) });
                };
        },
        64715: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => M });
            var a = n(25839),
                l = n(82298),
                s = n(88204),
                i = n(74631),
                o = n(39004),
                r = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                d = n(4254),
                m = n(67379),
                p = n(44031),
                g = n(87277),
                v = n(59450),
                y = n(84e3),
                f = n(97952),
                h = n(89192),
                _ = n(53712),
                b = n(27954),
                k = n(44806),
                x = n(15270),
                P = n(23818),
                N = n(85686);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = n(27990),
                T = n.n(E);
            let A = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { slam: s } = (0, b.g)(),
                    { contentRef: i } = (0, h.g)(),
                    o = (0, N.Z)(_.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(T().root, t),
                    children: [
                        n &&
                            (0, a.jsx)(x.L, { withBackwardFallback: '/', className: (0, l.$)(T().navigation, { [T().navigation_desktop]: !i }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, l.$)(T().content, { [T().content_shrink]: !n }),
                            children: [
                                (0, a.jsx)(P._V, { className: T().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, a.jsx)(d.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(r.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(d.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(r.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: T().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(r.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = n(68854),
                w = n.n(j);
            let M = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, o.A)(),
                    P = (0, i.useContext)(b.P),
                    N = null == P ? void 0 : P.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    S = s(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: n } = (0, v.gf)(),
                        { pageId: a } = (0, f.$)(),
                        l = (0, y.U)();
                    (0, i.useEffect)(() => {
                        if (!t || !n || !a) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: a,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, g.z5)(t.evgenInstance, s);
                    }, [t, e, n, a, l]);
                })(S);
                let { sendRefreshEvent: E } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: n } = (0, f.$)(),
                            a = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, i.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let l = (0, m.F)({
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
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, g.bv)(e.evgenInstance, l);
                            }, [e, t, n, a]),
                        };
                    })(),
                    T = (0, i.useCallback)(() => {
                        (E(), (window.location.href = _.Z.main.href));
                    }, [E]),
                    { contentRef: j } = (0, h.g)();
                return N
                    ? (0, a.jsx)(A, { className: t, withBackwardControl: n })
                    : (0, a.jsxs)('div', {
                          className: (0, l.$)(w().root, t),
                          children: [
                              n &&
                                  (0, a.jsx)(x.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(w().navigation, { [w().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, l.$)(w().content, { [w().content_shrink]: !n }),
                                  children: [
                                      (0, a.jsx)(u.I, { className: w().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(d.DZ, { className: (0, l.$)(w().title, w().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, a.jsxs)(d.HL, {
                                          className: (0, l.$)(w().text, w().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(r.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: T,
                                          className: w().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(r.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
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
        71872: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => a, ov: () => l });
            let a = ''.concat('yandexmusic', ':'),
                l = ''.concat(a, '//');
        },
        72328: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 64715));
        },
        82064: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => a });
            let a = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        84e3: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => s });
            var a = n(36484),
                l = n(62562);
            let s = () => (0, l.N)().get(a.Zf);
        },
        85686: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => u }), n(93588));
            var a = n(84059),
                l = n(71035),
                s = n(25895),
                i = n(89288),
                o = n(71872),
                r = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let c = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, o.Lz],
                u = (e) => {
                    let t = (0, a.useRouter)(),
                        { href: n, target: u } = (0, s.u)(e);
                    return (0, l.c)((e) => {
                        let a = ((e, t, n) => {
                            let a;
                            try {
                                a = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let l = (0, i.Rj)(e, { allowedProtocols: new Set([...c, a.protocol]), baseUrl: a.href });
                            return l.isAllowed
                                ? l.url.protocol === o.Lz
                                    ? { type: r.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, a)
                                      ? { type: r.INTERNAL, href: e }
                                      : { type: r.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!a) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (a.type === r.EXTERNAL || a.type === r.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(a.href)
                                : t.push(a.href));
                    });
                };
        },
        87277: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: s = l.DomainObjectType.NonApplicable,
                        mainObjectId: i = '',
                        tabId: o = '',
                        tabPos: r = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, a.makeMetaParams)(1),
                    m = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: o, tabPos: r, isTabSelectedByDefault: c, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', m);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(3),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: s,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: r,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Opened', g);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: s = l.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: r = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: o, tabPos: r, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        m = (0, a.makeMetaParams)(3),
                        p = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: s,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: r,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', p);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: s,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: r,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', g);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: s = l.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: r = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: o, tabPos: r, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: s = l.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: r = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: o, tabPos: r, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: s,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: r,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Navigated', g);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: s = l.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: r = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: o, tabPos: r, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = l.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                        } = t,
                        c = (0, a.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: s, skeletonId: i, mainObjectType: o, mainObjectId: r, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let a = n(96195),
                l = n(44031);
        },
        89192: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => s });
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
                s = () => (0, a.useContext)(l);
        },
        96195: (e, t) => {
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
                            let s = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(a, s);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        97952: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => s });
            var a = n(74631),
                l = n(82064);
            function s() {
                return (0, a.useContext)(l.r);
            }
        },
    },
    (e) => {
        (e.O(0, [3349, 8803, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 2038, 4163, 3246, 3482, 4475, 5056, 7358], () => e((e.s = 72328))), (_N_E = e.O()));
    },
]);
