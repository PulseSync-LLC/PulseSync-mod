(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2391],
    {
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                a = i(88969),
                n = i(58390),
                r = i(17392),
                o = i(29993),
                l = i(96817),
                c = i(29504),
                _ = i(99890),
                d = i(4086),
                u = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: x, isBlock: h, key: v, className: C } = e,
                    E = (0, n.useRouter)(),
                    b = (0, u.N)().get(d.QG),
                    N = (0, o.c)(() => {
                        b.authorizationUrl && ((0, _.uV)({ stage: 'attempt-start', trigger: 'user' }), E.push(b.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: N,
                        className: C,
                        isBlock: h,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: x || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => c });
            var s = i(88800),
                a = i(53548),
                n = i(63582),
                r = i(99875),
                o = i(66109),
                l = i(245);
            let c = (0, n.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: n, objectType: c }) => {
                    let _ = (0, l.N)(),
                        d = (0, a.useContext)(r.p)?.loadedSession,
                        u = [c, t, i, n].join(':'),
                        [m, p] = (0, a.useState)(() => ({ client: _, identity: u, blockSession: d, viewSession: _.createBlockViewSession() }));
                    (m.client !== _ || m.identity !== u || m.blockSession !== d) &&
                        p({ client: _, identity: u, blockSession: d, viewSession: _.createBlockViewSession() });
                    let x = (0, a.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: n, objectType: c }, viewSession: m.viewSession }),
                        [t, i, n, c, m.viewSession],
                    );
                    return (0, s.jsx)(o.l, { value: x, children: e });
                },
            );
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
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => a }), i(46606));
            var s = i(91136);
            class a extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        23931: (e) => {
            e.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        32187: (e) => {
            e.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => w });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                _ = i(52300),
                d = i(29504),
                u = i(87999),
                m = i(47149),
                p = i(84423),
                x = i(89846),
                h = i(64543),
                v = i(63582);
            let C = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, x.g)(),
                        { screen: s } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: u.ActionType.Refresh,
                                userInteractionType: u.UserInteractionType.Tap,
                                entityType: u.EntityTypes.Error,
                                entityId: u.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                mainObjectType: u.DomainObjectType.NonApplicable,
                                mainObjectId: u.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                E = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, x.g)(),
                        { screen: a } = (0, h.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !s || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: u.EntityTypes.Error,
                            entityId: u.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: a.pageId,
                            pageStyle: u.PageStyles.Fullscreen,
                            pagePlacement: u.PagePlacements.Fullscreen,
                            mainObjectType: u.DomainObjectType.NonApplicable,
                            mainObjectId: u.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == a ? void 0 : a.pageId]);
                });
            var b = i(44230),
                N = i(4370),
                T = i(72288),
                k = i(97956),
                g = i(56248),
                A = i(90688),
                S = i(78940);
            let j = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var y = i(96856),
                I = i.n(y);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: r } = (0, T.g)(),
                    { contentRef: o } = (0, b.g)(),
                    _ = (0, S.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(I().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(g.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(I().navigation, { [I().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(A._V, { className: I().image, src: j.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, s.jsx)(d.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(d.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: I().button,
                                        onClick: _,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var f = i(9184),
                O = i.n(f);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: u } = (0, o.A)(),
                    m = (0, r.useContext)(T.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    x = u(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                E(x);
                let { sendRefreshEvent: h } = C(),
                    v = (0, r.useCallback)(() => {
                        (h(), (window.location.href = N.Z.main.href));
                    }, [h]),
                    { contentRef: A } = (0, b.g)();
                return p
                    ? (0, s.jsx)(L, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(O().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(g.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(O().navigation, { [O().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(O().content, { [O().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(_.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(d.DZ, { className: (0, a.$)(O().title, O().important), variant: 'h3', size: 'xs', children: x }),
                                      (0, s.jsxs)(d.HL, {
                                          className: (0, a.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: v,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33932: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        36623: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => d });
            var s = i(88800),
                a = i(84961),
                n = i(19994),
                r = i(98644),
                o = i(93015),
                l = i(23931),
                c = i.n(l);
            let _ = () => Array.from({ length: 5 }, (e) => (0, s.jsx)(o.D, { variant: r.X.PLAYLIST, className: c().track, isActive: !0 }, e)),
                d = (0, a.PA)((e) => {
                    let { className: t, withHeader: i } = e;
                    return (0, s.jsxs)('div', {
                        className: t,
                        children: [i && (0, s.jsx)(n.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, s.jsx)(_, {})],
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
        44616: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        46811: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => H });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(87999),
                l = i(62414),
                c = i(33979),
                _ = i(80643),
                d = i(17392),
                u = i(18593),
                m = i(29993),
                p = i(79070),
                x = i(52073),
                h = i(29504),
                v = i(60757),
                C = i(29008),
                E = i(13946),
                b = i(5407),
                N = i(84384),
                T = i(4795),
                k = i(78940),
                g = i(55693),
                A = i(39079),
                S = i(72288),
                j = i(62270),
                y = i.n(j),
                I = i(76816),
                L = i(8990),
                f = i(91292),
                O = i(39267),
                w = i(52300),
                M = i(92966),
                D = i(57934),
                B = i(49738),
                P = i(56446),
                R = i(64546),
                U = i(33932),
                W = i.n(U);
            let z = (0, n.PA)((e) => {
                    var t;
                    let { className: i, album: n, likeIconSize: l = 'xxs' } = e,
                        { user: c, trailer: _ } = (0, S.g)(),
                        d = (0, b.P)(),
                        { sendLikeSearchFeedback: u } = (0, g.z)(),
                        p = (0, M.K)(n),
                        [x, h] = (0, r.useState)(!1),
                        v = (0, m.c)(async () => {
                            (x || n.isLiked || (h(!0), null == u || u()), await p());
                        }),
                        C = (0, D.F)(),
                        E = (0, m.c)((e) => {
                            if ((e.stopPropagation(), d())) return void e.preventDefault();
                            (_.openAlbumTrailer(n.id), C(o.DomainObjectType.Album, String(n.id)));
                        });
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(W().root, W().controls, i, { [W().controls_disabled]: !n.isAvailable }),
                        children: [
                            n.isAvailable &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(R.WithOffline, {
                                            fallback: (0, s.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: l,
                                                className: (0, a.$)(W().item, W().likeIcon),
                                                isLiked: n.isLiked,
                                                onClick: v,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                            (0, s.jsx)(R.WithOffline, {
                                                fallback: (0, s.jsx)(P.k, {
                                                    className: (0, a.$)(W().item, W().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: E,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, s.jsx)('div', {
                                className: (0, a.$)(W().item, W().item_buttonArrow),
                                children: (0, s.jsx)(w.I, { className: y().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                H = (0, n.PA)((e) => {
                    let { className: t, album: i, pageId: n, coverClassName: j, playButtonIconSize: w, likeIconSize: M, shouldShowReleaseYear: D, description: B } = e,
                        P = (0, C.r)(i.type),
                        R = (0, l.D)(),
                        { from: U } = (0, N.f)({ pageId: n }),
                        [W, H] = (0, r.useState)(!1),
                        Y = (0, c.g)(),
                        $ = (0, k.Z)(i.url),
                        F = (0, b.P)(),
                        { sendNavigateSearchFeedback: K, sendPlaySearchFeedback: V } = (0, g.z)(),
                        X = (0, _.S)(),
                        {
                            paywall: { modal: Z },
                        } = (0, S.g)(),
                        q = (0, T.N)(),
                        {
                            isPlaying: G,
                            isCurrent: Q,
                            togglePlay: J,
                        } = (0, A.D)({ playContextParams: { contextData: { type: u.K.Album, meta: { id: i.id }, from: U }, loadContextMeta: !0 } }),
                        ee = (0, v.c)({ album: i, callback: $ }),
                        et = (0, v.c)({ album: i, callback: J }),
                        ei = (0, m.c)((e) => {
                            (null == K || K(), X({ to: o.AppScreen.AlbumScreen }), ee(e));
                        }),
                        es = (0, m.c)(() => {
                            if (!F()) {
                                if (q) return void Z.open();
                                (W || G || (H(!0), null == V || V()), et(), G || Y());
                            }
                        }),
                        ea = (0, m.c)((e) => {
                            ((0, x.P)(e, y().ripple), ei(e));
                        }),
                        en = (0, m.c)((e) => {
                            (e.stopPropagation(), ei(e));
                        }),
                        er = (0, r.useCallback)(
                            (e) =>
                                (0, s.jsx)(O.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, a.$)(y().playButtonCell, j),
                                    alt: ''.concat(P, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...e,
                                }),
                            [i.coverUri, i.isAvailable, i.title, j, P],
                        ),
                        eo = null == er ? void 0 : er({ onPlayButtonClick: es, isPlaying: G, isCurrent: Q, playButtonIconSize: w }),
                        el = (0, r.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, s.jsx)(f.N, { className: (0, a.$)(y().text, y().titleLink), href: i.url, onClick: en, children: i.title })
                                    : (0, s.jsx)(h.HL, { className: (0, a.$)(y().text, y().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, en],
                        ),
                        ec = (0, r.useCallback)(
                            (e, t) => {
                                var a;
                                return (null == (a = i.artists) ? void 0 : a.length)
                                    ? (0, s.jsx)(E.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        e_ = (0, p.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, s.jsxs)(L.C, {
                        ref: R,
                        className: (0, a.$)(y().root, { [y().root_disabled]: !i.isAvailable }, t),
                        'aria-label': e_,
                        onClick: ea,
                        'data-test-id': d.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            eo,
                            (0, s.jsx)(I.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: el,
                                artistsComponent: ec,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && D ? i.year : void 0,
                                description: B,
                            }),
                            (0, s.jsx)(z, { className: y().controlsBar, album: i, likeIconSize: M }),
                        ],
                    });
                });
        },
        49784: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => l });
            var s = i(53548),
                a = i(63582),
                n = i(89846),
                r = i(245),
                o = i(22681);
            let l = (0, a.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, s.useRef)(!1),
                    i = (0, r.N)(),
                    { hash: a } = (0, n.g)(),
                    l = (0, o.w)(),
                    c = (0, s.useMemo)(() => (l ? i.createBlockReporter(l.snapshot) : null), [i, l]);
                (0, s.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, a, c, l]);
            });
        },
        51059: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => b });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(17392),
                l = i(79070),
                c = i(46811),
                _ = i(76843),
                d = i(4370),
                u = i(72288),
                m = i(98644),
                p = i(67984),
                x = i(93015),
                h = i(70441),
                v = i(36623),
                C = i(32187),
                E = i.n(C);
            let b = (0, n.PA)((e) => {
                var t;
                let { className: i, itemsCount: n, headerClassName: C, carouselClassName: b } = e,
                    {
                        collection: {
                            shelf: { liked: N },
                        },
                    } = (0, u.g)(),
                    T = (0, l.L)(() => {
                        var e;
                        return null == (e = N.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  if (e.album) return (0, s.jsx)(c.M, { album: e.album }, e.album.getKey(t));
                                  let i = (0, h.q)(e.track, t, N.typeForFrom);
                                  return (0, s.jsx)(_.K, { track: e.track, playContextParams: i, withPodcastName: !0 }, e.track.getKey(t));
                              });
                    });
                return (N.isNeededToLoad && (0, r.use)(N.getData()), !N.isLoading && (null == (t = N.entities) ? void 0 : t.length))
                    ? (0, s.jsx)(p.$, {
                          shimmer: (0, s.jsx)(x.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: N.isLoading,
                          className: i,
                          carouselItemClassName: (0, a.$)(E().shelfColumn, E().important),
                          blockHeaderClassName: (0, a.$)(E().header, C),
                          carouselClassName: b,
                          blockHeaderTitle: N.title,
                          itemsCountPerColumn: null != n ? n : 0,
                          maxColumnsCount: p.D.ONE,
                          viewAllActionLink: d.Z.collectionShelfLiked.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: T,
                      })
                    : (0, s.jsx)(v.E, { className: i, withHeader: !0 });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => x });
            var s = i(88800),
                a = i(84961),
                n = i(58390),
                r = i(65724),
                o = i(88969),
                l = i(29504),
                c = i(7628),
                _ = i(42674),
                d = i.n(_);
            let u = (0, a.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(l.DZ, {
                            className: (0, r.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(l.HL, {
                            className: (0, r.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let x = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? t : (i && (0, n.redirect)(m.Z.main.href), (0, s.jsx)(u, {}));
            });
        },
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        67984: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => C, D: () => h });
            var s = i(88800),
                a = i(65724),
                n = i(35802),
                r = i(53548),
                o = i(35412),
                l = i(87999),
                c = i(7833),
                _ = i(17392),
                d = i(53323),
                u = i(18486),
                m = i(31764),
                p = i(44616),
                x = i.n(p),
                h = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let v = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: h,
                            isHeaderWithoutControls: v,
                            maxColumnsCount: C,
                            carouselItemClassName: E,
                            carouselClassName: b,
                            children: N,
                            itemsCountPerColumn: T,
                            shimmer: k,
                            viewAllActionLink: g,
                            blockHeaderClassName: A,
                            additionalControl: S,
                            blockHeaderDescription: j,
                            blockHeaderTitle: y,
                            blockHeaderCoverUrl: I,
                            withBlockHeaderDescription: L,
                            withBlockHeaderCover: f,
                            blockHeaderHeadingVariant: O,
                            isShimmerActive: w,
                            shouldResetCarouselScroll: M,
                            beforeCarousel: D,
                            ...B
                        } = e,
                        [P, R] = (0, r.useState)(),
                        U = (0, r.useId)(),
                        W = (0, r.useRef)(null),
                        z = 'two' === C,
                        H = 'string' == typeof g ? String(g) : '',
                        Y = null != h ? h : p,
                        $ = (0, r.useCallback)(
                            (e) => {
                                let t = (0, n.A)(e, T).slice(0, z ? 2 : 1);
                                return (
                                    1 === t.length ? R('one') : R('two'),
                                    t.map((e, t) => (0, s.jsx)('div', { className: x().column, 'data-test-id': _.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [T, z],
                        ),
                        F = (0, r.useMemo)(() => {
                            if (Y) return $(Array.from({ length: 2 * T }, (e, t) => (0, r.cloneElement)(k, { key: t })));
                            return $(N);
                        }, [N, $, Y, T, k]),
                        K = (0, r.useMemo)(
                            () =>
                                v
                                    ? null
                                    : (0, s.jsxs)('div', {
                                          className: x().controlsContainer,
                                          children: [S, (0, s.jsx)(m.X, { carouselRef: W, className: x().controls, backwardControlClassName: x().backwardControl })],
                                      }),
                            [S, v],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            W.current && M && W.current.scrollTo(0, 0);
                        }, [M]),
                        (0, s.jsxs)('section', {
                            ref: i,
                            className: (0, a.$)(x().root, t),
                            ...(0, o.OZ)(B),
                            children: [
                                (0, s.jsx)(c.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: H,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, s.jsx)(u.T, {
                                        coverUrl: I,
                                        title: y,
                                        description: j,
                                        className: A,
                                        labeledForId: U,
                                        viewAllActionLink: g,
                                        controls: K,
                                        isShimmerVisible: p,
                                        isShimmerActive: w,
                                        withDescription: L,
                                        withCover: f,
                                        headingVariant: O,
                                    }),
                                }),
                                D,
                                (0, s.jsx)(d.F, {
                                    itemClassName: (0, a.$)(x().item, x()['item_columns_'.concat(Y && z ? 'two' : P)], E),
                                    className: b,
                                    ref: W,
                                    'aria-labelledby': U,
                                    'data-test-id': _.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: F,
                                }),
                            ],
                        })
                    );
                },
                C = (0, r.forwardRef)((e, t) => (0, s.jsx)(v, { forwardRef: t, ...e }));
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70441: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var s = i(18593);
            let a = (e, t, i) => {
                let a = { type: s.K.Various, meta: { id: e.id }, from: i || '' };
                return (
                    void 0 !== e.albumId && (a = { type: s.K.Album, meta: { id: e.albumId }, from: i || '' }),
                    { contextData: a, queueParams: { entityId: e.id, index: t }, loadContextMeta: !0 }
                );
            };
        },
        76816: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => m });
            var s = i(88800),
                a = i(65724),
                n = i(2058),
                r = i(17392),
                o = i(79070),
                l = i(52300),
                c = i(29504),
                _ = i(90224),
                d = i(34250),
                u = i.n(d);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: d,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: x,
                        version: h,
                        title: v,
                        artistsComponent: C,
                        likesCount: E,
                        isLiked: b,
                        releaseYear: N,
                        titleLineClamp: T = 1,
                    } = e,
                    { formatMessage: k, formatNumber: g } = (0, n.A)(),
                    A = (0, o.L)(() => {
                        let e = null == C ? void 0 : C((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!e && !E) return;
                        let t = (0, s.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, s.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof E &&
                                    E > 0 &&
                                    (0, s.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': k({ id: 'entity-names.likes-counter' }, { counter: E }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, s.jsx)(l.I, {
                                                className: u().icon,
                                                variant: b ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, s.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: g(E),
                                            }),
                                        ],
                                    }),
                                !!E && e && t,
                                e,
                                !!N && e && t,
                                (0, s.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: N }),
                            ],
                        });
                    });
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: t }, x),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, s.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, s.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: h }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        h &&
                                            (0, s.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(h),
                                            }),
                                    ],
                                }),
                                p && (0, s.jsx)(_.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        d &&
                            (0, s.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: d,
                            }),
                        A,
                    ],
                });
            };
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => s.X, m5: () => a.m });
            var s = i(46606),
                a = i(91136),
                n = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...n } = t,
                        r = e || 'Internal error';
                    (super(r, n), (this.message = r), (this.code = i), (this.data = a), (this.stack = Error(r).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class a extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
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
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => n, UC: () => r, dM: () => o, uV: () => l });
            var s = i(89916),
                a = i(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof s.m5) || !(0, a.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, a.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
