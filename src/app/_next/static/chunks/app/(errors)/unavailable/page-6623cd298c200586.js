(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
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
        14518: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => s });
            var a = n(53548),
                l = n(90334);
            function s() {
                return (0, a.useContext)(l.r);
            }
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => r });
            var a = n(35412),
                l = n(28166),
                s = n(97261);
            let i = [a.cy.HTTP, a.cy.HTTPS, a.cy.MAILTO, a.cy.TEL, l.Lz],
                r = (e, t, n) => {
                    let r;
                    try {
                        r = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let o = (0, a.Rj)(e, { allowedProtocols: new Set([...i, r.protocol]), baseUrl: r.href });
                    return o.isAllowed
                        ? o.url.protocol === l.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(o.url, r)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => a, ov: () => l });
            let a = ''.concat('yandexmusic', ':'),
                l = ''.concat(a, '//');
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => M });
            var a = n(88800),
                l = n(65724),
                s = n(84961),
                i = n(53548),
                r = n(2058),
                o = n(88969);
            n(30282);
            var c = n(96817),
                u = n(52300),
                d = n(29504),
                m = n(78793),
                p = n(92716),
                g = n(99984),
                v = n(90780),
                f = n(65523),
                y = n(14518),
                h = n(44230),
                _ = n(4370),
                b = n(72288),
                k = n(97956),
                x = n(56248),
                P = n(90688),
                N = n(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = n(96856),
                T = n.n(E);
            let w = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { slam: i } = (0, b.g)(),
                    { contentRef: r } = (0, h.g)(),
                    u = (0, N.Z)(_.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(T().root, t),
                    children: [
                        n &&
                            (0, a.jsx)(x.L, {
                                withBackwardFallback: '/',
                                className: (0, l.$)(T().navigation, { [T().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
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
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(d.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                i.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: T().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var A = n(9184),
                j = n.n(A);
            let M = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: s } = e,
                    { formatMessage: P } = (0, r.A)(),
                    N = (0, i.useContext)(b.P),
                    S = null == N ? void 0 : N.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    E = P(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: n } = (0, v.gf)(),
                        { pageId: a } = (0, y.$)(),
                        l = (0, f.U)();
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
                })(E);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: n } = (0, y.$)(),
                            a = (0, f.U)();
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
                    A = (0, i.useCallback)(() => {
                        (T(), (window.location.href = _.Z.main.href));
                    }, [T]),
                    { contentRef: M } = (0, h.g)();
                return S
                    ? (0, a.jsx)(w, { className: t, withBackwardControl: n, onBack: s })
                    : (0, a.jsxs)('div', {
                          className: (0, l.$)(j().root, t),
                          children: [
                              n &&
                                  (0, a.jsx)(x.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(j().navigation, { [j().navigation_desktop]: !M }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, l.$)(j().content, { [j().content_shrink]: !n }),
                                  children: [
                                      (0, a.jsx)(u.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(d.DZ, { className: (0, l.$)(j().title, j().important), variant: 'h3', size: 'xs', children: E }),
                                      (0, a.jsxs)(d.HL, {
                                          className: (0, l.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: A,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
                s = () => (0, a.useContext)(l);
        },
        45669: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 32596));
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => i });
            var a = n(55482),
                l = n(53548),
                s = n(46422);
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
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => v });
            var a = n(88800),
                l = n(65724),
                s = n(84961),
                i = n(53548),
                r = n(2058),
                o = n(17392),
                c = n(29993),
                u = n(96817),
                d = n(52300),
                m = n(46777),
                p = n(50320),
                g = n.n(p);
            let v = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: p,
                        withBackwardFallback: v,
                        buttonSize: f = 'xxs',
                        onBackwardClick: y,
                    } = e,
                    { formatMessage: h } = (0, r.A)(),
                    { canBack: _, canForward: b, moveBack: k, moveForward: x } = (0, m.J)(v),
                    P = (0, i.useRef)(null),
                    N = (0, c.c)((e) => {
                        if ((e.stopPropagation(), y)) return void y();
                        k();
                    }),
                    S = (0, c.c)((e) => {
                        (e.stopPropagation(), x());
                    });
                return (
                    (0, i.useEffect)(() => {
                        s && P.current && _ && P.current.focus();
                    }, [_]),
                    (0, a.jsxs)('div', {
                        className: (0, l.$)(g().root, p),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(u.$, {
                                    ref: P,
                                    'aria-label': h({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: f,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: N,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, a.jsx)(u.$, {
                                    'aria-label': h({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: f,
                                    icon: (0, a.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: S,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        65523: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => r });
            var a = n(4086),
                l = n(41928),
                s = n(44084);
            let i = new WeakMap(),
                r = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = i.get(e);
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
                        return (i.set(e, n), n);
                    })((0, l.N)().get(a.Zf));
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
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => o }), n(30282));
            var a = n(58390),
                l = n(29993),
                s = n(67174),
                i = n(15947),
                r = n(97261);
            let o = (e) => {
                let t = (0, a.useRouter)(),
                    { href: n, target: o } = (0, s.u)(e);
                return (0, l.c)((e) => {
                    let a = (0, i.U)(n, window.location.href, o);
                    if (!a) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (a.type === r.I.EXTERNAL || a.type === r.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(a.href)
                            : t.push(a.href));
                });
            };
        },
        88969: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var a = n(88092),
                l = n(53548),
                s = n(84014),
                i = n(2058);
            function r(e) {
                var t = (0, i.A)(),
                    n = t.formatMessage,
                    a = t.textComponent,
                    s = void 0 === a ? l.Fragment : a,
                    r = e.id,
                    o = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    m = e.tagName,
                    p = void 0 === m ? s : m,
                    g = n({ id: r, description: o, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(g) ? g : [g]) : p ? l.createElement(p, null, g) : l.createElement(l.Fragment, null, g);
            }
            r.displayName = 'FormattedMessage';
            var o = l.memo(r, function (e, t) {
                var n = e.values,
                    l = (0, a.__rest)(e, ['values']),
                    i = t.values,
                    r = (0, a.__rest)(t, ['values']);
                return (0, s.bN)(i, n) && (0, s.bN)(l, r);
            });
            o.displayName = 'MemoizedFormattedMessage';
            let c = o;
        },
        90334: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => a });
            let a = (0, n(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => f, st: () => s, gf: () => r });
            var a = n(53548);
            let l = (0, a.createContext)(null);
            function s() {
                return (0, a.useContext)(l);
            }
            let i = (0, a.createContext)({ hash: void 0 });
            function r() {
                return (0, a.useContext)(i);
            }
            var o = n(88800),
                c = n(54020);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, a.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, o.jsx)(i.Provider, { value: n, children: t });
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
                f = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: s, logger: i, metrika: r } = e,
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
                            })((e) => r.count(e, s), i, t);
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
                        }, [i, r]);
                    return (0, o.jsx)(l.Provider, { value: c, children: (0, o.jsx)(u, { children: n }) });
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
                            let s = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(a, s);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
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
                        mainObjectType: s = l.DomainObjectType.NonApplicable,
                        mainObjectId: i = '',
                        tabId: r = '',
                        tabPos: o = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, a.makeMetaParams)(1),
                    m = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: r, tabPos: o, isTabSelectedByDefault: c, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', m);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: r = l.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
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
                            mainObjectType: r,
                            mainObjectId: o,
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
                            tabId: r = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: r, tabPos: o, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: r = l.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
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
                            mainObjectType: r,
                            mainObjectId: o,
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
                            mainObjectType: r = l.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
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
                            mainObjectType: r,
                            mainObjectId: o,
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
                            tabId: r = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: r, tabPos: o, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: s = l.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: r = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: r, tabPos: o, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: r = l.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
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
                            mainObjectType: r,
                            mainObjectId: o,
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
                            tabId: r = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: s, mainObjectId: i, tabId: r, tabPos: o, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = l.PageStyles.Fullscreen,
                            pagePlacement: s = l.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: r = l.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                        } = t,
                        c = (0, a.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: s, skeletonId: i, mainObjectType: r, mainObjectId: o, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let a = n(92948),
                l = n(92716);
        },
    },
    (e) => {
        (e.O(0, [8752, 7435, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 4732, 1195, 1598, 1928, 763, 2670, 7358], () => e((e.s = 45669))), (_N_E = e.O()));
    },
]);
