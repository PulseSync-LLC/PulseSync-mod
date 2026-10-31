(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 4602],
    {
        2460: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 91312)));
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => r });
            var i = s(67174);
            let r = {
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
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(88800),
                r = s(88969),
                o = s(58390),
                n = s(17392),
                l = s(29993),
                a = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                _ = s(41928);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: g, key: E, className: x } = e,
                    y = (0, o.useRouter)(),
                    v = (0, _.N)().get(u.QG),
                    b = (0, l.c)(() => {
                        v.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(v.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: b,
                        className: x,
                        isBlock: g,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
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
        9492: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => h });
            var i = s(88800),
                r = s(65724),
                o = s(53548),
                n = s(2058),
                l = s(88969),
                a = s(96817),
                c = s(52300),
                d = s(29504),
                u = s(59304),
                _ = s(4044),
                m = s.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: s } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: h } = (0, n.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, o.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, i.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: p, closeToast: s });
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        14965: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...o } = t,
                        n = e || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(46606));
            var i = s(91136);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => L });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                n = s(53548),
                l = s(2058),
                a = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                _ = s(78793),
                m = s(92716),
                h = s(99984),
                p = s(90780),
                g = s(65523),
                E = s(14518),
                x = s(44230),
                y = s(4370),
                v = s(72288),
                b = s(97956),
                N = s(56248),
                f = s(90688),
                O = s(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = s(96856),
                I = s.n(A);
            let T = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: o } = e,
                    { slam: n } = (0, v.g)(),
                    { contentRef: l } = (0, x.g)(),
                    d = (0, O.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(I().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(N.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(I().navigation, { [I().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(I().content, { [I().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(f._V, { className: I().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = s(9184),
                k = s.n(S);
            let L = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: o } = e,
                    { formatMessage: f } = (0, l.A)(),
                    O = (0, n.useContext)(v.P),
                    C = null == O ? void 0 : O.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    A = f(C ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: s } = (0, p.gf)(),
                        { pageId: i } = (0, E.$)(),
                        r = (0, g.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: s,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, h.z5)(t.evgenInstance, o);
                    }, [t, e, s, i, r]);
                })(A);
                let { sendRefreshEvent: I } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: s } = (0, E.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !s) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: s,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, s, i]),
                        };
                    })(),
                    S = (0, n.useCallback)(() => {
                        (I(), (window.location.href = y.Z.main.href));
                    }, [I]),
                    { contentRef: L } = (0, x.g)();
                return C
                    ? (0, i.jsx)(T, { className: t, withBackwardControl: s, onBack: o })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(k().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(N.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(k().content, { [k().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(k().text, k().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: S,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        45654: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => b });
            var i = s(88800),
                r = s(84961),
                o = s(88969),
                n = s(96817),
                l = s(52300),
                a = s(66719),
                c = s(29504),
                d = s(69630),
                u = s(46422),
                _ = s(44230),
                m = s(4370),
                h = s(78940),
                p = s(72288),
                g = s(86790),
                E = s(60266),
                x = s(93317),
                y = s(92270),
                v = s.n(y);
            let b = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: s },
                    } = (0, p.g)(),
                    { contentScrollRef: r, setContentScrollRef: y } = (0, _.g)(),
                    b = (0, u.W)(),
                    N = (0, h.Z)(m.Z.collectionKids.href);
                return (0, i.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, i.jsx)(x.Y, {
                            variant: x.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: b.canBack,
                            children: (0, i.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: s ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, i.jsxs)(a.N, {
                            ref: y,
                            containerClassName: v().scrollableContainer,
                            className: v().root,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v().content,
                                    children: [
                                        (0, i.jsx)('div', { className: v().icon, children: (0, i.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                                        (0, i.jsx)(c.DZ, {
                                            className: v().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, i.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, i.jsx)(n.$, {
                                            onClick: N,
                                            className: v().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, i.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, i.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(E.A, { children: (0, i.jsx)(g.w, { className: v().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        53080: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        54320: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => d });
            var i = s(88800),
                r = s(53548),
                o = s(29993),
                n = s(9492),
                l = s(29595),
                a = s(74965),
                c = s(74773);
            let d = (e, t) => {
                let { notify: s, dismiss: d } = (0, a.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var s;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (s = e.lastRejectedPagesList) ? s : [])].reverse().filter((t) => {
                            var s;
                            return (null == (s = e.pageStates) ? void 0 : s[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = s((0, i.jsx)(n.L, { reloadBlocks: _ }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, _, s, e.rejectedPagesCount]);
            };
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var i = s(88800),
                r = s(84961),
                o = s(58390),
                n = s(65724),
                l = s(88969),
                a = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let _ = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = s(4370),
                h = s(72288);
            let p = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? t : (s && (0, o.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        60266: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => n });
            var i = s(88800);
            s(30282);
            var r = s(11006),
                o = s.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => r });
            var i = s(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: r, userRegion: o } = e;
                return 'ru' === o && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : r();
            };
        },
        62837: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => _, Yw: () => i, JU: () => r, DQ: () => p, Ve: () => g });
            var i,
                r,
                o = s(43297),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var l = s(14965);
            class a extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class _ {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new a(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let s = u(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let m = new Map([
                    [i.EXPLICIT_ICON, r.E],
                    [i.AGE_18_ICON, r.AGE_18],
                    [i.AGE_16_ICON, r.AGE_16],
                    [i.AGE_12_ICON, r.AGE_12],
                    [i.EXCLAMATION_ICON, r.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, r.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = u(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let s = m.get(t.type);
                    return void 0 !== s ? s : null;
                },
                g = (e, t) => u(e, t).length > 0;
        },
        67990: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        71104: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => i });
            let i = 20;
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => g });
            var i = s(88800),
                r = s(65724),
                o = s(61013),
                n = s(53548);
            let l = (e) => {
                    let { style: t, forwardRef: s, context: r, ...o } = e,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        l = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: s, ...o });
                },
                a = (0, n.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = s(16434),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: o, withHeader: n, withForceScroll: l, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var m = s(55482),
                h = s(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), a.length > 0 && p(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) s(e);
                                    }
                                }, o),
                            [o, r, t, s, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let E = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, i.jsx)(h.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: E, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: E = 20,
                            totalCount: x,
                            totalRequests: y,
                            debounceDurationInMs: v,
                            initialItemCount: b,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: O = !1,
                            testId: C,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...T
                        } = e,
                        [S, k] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        P = (0, n.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, y, A]),
                        j = b ? Math.min(b, N) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: S || O, [d().root_notScrolling]: !S && !O }, t),
                        'data-test-id': C,
                        children: [
                            A && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(p, {
                                overscan: g,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: x,
                                pageSize: E,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: I,
                                ...T,
                            }),
                            A && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => C });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                n = s(2058),
                l = s(30282),
                a = s(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var _ = s(62293),
                m = s(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var p = s(51611),
                g = s(72288),
                E = s(11006),
                x = s.n(E),
                y = s(17392),
                v = s(29504),
                b = s(91292);
            let N = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(b.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(b.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: x().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, i.jsx)(b.N, { target: '_blank', href: r, className: x().link, 'data-test-id': y.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, i.jsx)(f, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(N, { data: s.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, g.g)(),
                    { formatDate: r, formatMessage: o } = (0, n.A)(),
                    { language: l } = (0, p.h)(),
                    a = u({ formatMessage: o, language: l, tld: s.tld, year: h(r) });
                return (0, i.jsx)(N, { className: t, data: a });
            });
            let C = (0, o.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: o, location: m, user: E } = (0, g.g)(),
                    { formatDate: y, formatMessage: v } = (0, n.A)(),
                    { isEnabled: b } = null != (t = (0, a.P)()) ? t : {},
                    { language: N } = (0, p.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: r, tld: o, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: r, userRegion: o } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    m = [n, a, u];
                                return (s && 'ru' === o && m.push(l), m.push(_), m);
                            })({ formatMessage: s, isWebApplication: i, language: r, tld: o, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: s, language: r, tld: o, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: h(y),
                    });
                return (0, i.jsx)(O, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: b }, s), data: f });
            });
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => o.G, X1: () => i.X, m5: () => r.m });
            var i = s(46606),
                r = s(91136),
                o = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...o } = t,
                        n = e || 'Internal error';
                    (super(n, o), (this.message = n), (this.code = s), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        91312: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionKidsAlbumsPage: () => k });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                n = s(53548),
                l = s(2058),
                a = s(88969),
                c = s(17392),
                d = s(29504),
                u = s(32596),
                _ = s(10079),
                m = s(69630),
                h = s(12816),
                p = s(59844),
                g = s(46422),
                E = s(44230),
                x = s(37670),
                y = s(72288),
                v = s(54320),
                b = s(86790),
                N = s(60266),
                f = s(93317),
                O = s(37770),
                C = s(79418),
                A = s(71104),
                I = s(45654),
                T = s(53080),
                S = s.n(T);
            let k = (0, o.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, y.g)(),
                    { contentScrollRef: s, setContentScrollRef: o } = (0, E.g)(),
                    T = (0, g.W)(),
                    { formatMessage: k } = (0, l.A)(),
                    L = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: A.c });
                        },
                        [t],
                    );
                (0, v.X)(t.pagesLoader, L);
                let P = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(b.w, { className: S().footer }) }) }), []),
                    j = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, x.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, i.jsx)(I.i, { title: k({ id: 'kids.albums-and-podcasts' }) })
                      : (0, i.jsx)(p.n, {
                            pageId: h._Q.COLLECTION_KIDS_ALBUMS,
                            children: (0, i.jsx)(m.h, {
                                scrollElement: s,
                                outerTitle: k({ id: 'kids.albums-and-podcasts' }),
                                children: (0, i.jsxs)('div', {
                                    className: S().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, i.jsx)(f.Y, {
                                            variant: f.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: T.canBack,
                                            children: (0, i.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, i.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, i.jsx)(C.$, {
                                            className: (0, r.$)(S().scrollContainer, S().important),
                                            listClassName: S().content,
                                            itemClassName: S().item,
                                            customComponents: P,
                                            itemContentCallback: (e) => {
                                                let s = t.items[e],
                                                    r = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                                return s
                                                    ? (0, i.jsx)(_.a, { album: s, contentLinesCount: 4, withLikesCount: !0 }, s.id)
                                                    : (0, i.jsx)(O.V, { 'aria-label': r, linesCount: 4 });
                                            },
                                            initialItemCount: j,
                                            totalCount: j,
                                            onGetDataByPage: L,
                                            pageSize: A.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: o,
                                            context: { listAriaLabel: k({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        94144: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => r, P: () => o });
            var i = s(53548);
            let r = (0, i.createContext)(null),
                o = () => (0, i.useContext)(r);
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
        99839: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => o, UC: () => n, dM: () => l, uV: () => a });
            var i = s(89916),
                r = s(67990);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 5108, 8380, 127, 1931, 1191, 7617, 3637, 8767, 2513, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 763, 2670, 7358,
            ],
            () => e((e.s = 2460)),
        ),
            (_N_E = e.O()));
    },
]);
