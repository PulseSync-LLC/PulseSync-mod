(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4777],
    {
        148: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        6973: (t) => {
            t.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        16978: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => m });
            var a = i(25839),
                s = i(84059),
                n = i(8487),
                r = i(61493),
                o = i(71035),
                l = i(4071),
                c = i(4254),
                _ = i(57024),
                d = i(36484),
                u = i(62562);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: x, isBlock: h, key: E, className: C } = t,
                    N = (0, s.useRouter)(),
                    T = (0, u.N)().get(d.QG),
                    b = (0, o.c)(() => {
                        T.authorizationUrl && ((0, _.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(T.authorizationUrl));
                    });
                return (0, a.jsx)(
                    l.$,
                    {
                        onClick: b,
                        className: C,
                        isBlock: h,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: x || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
            };
        },
        20749: (t) => {
            t.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        21978: (t) => {
            t.exports = {
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
        27990: (t) => {
            t.exports = {
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
        28045: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => H });
            var a = i(25839),
                s = i(82298),
                n = i(88204),
                r = i(74631),
                o = i(44031),
                l = i(61493),
                c = i(22939),
                _ = i(71035),
                d = i(49656),
                u = i(11823),
                m = i(4254),
                p = i(99835),
                x = i(73614),
                h = i(56348),
                E = i(79367),
                C = i(29481),
                N = i(47009),
                T = i(52512),
                b = i(30290),
                v = i(61561),
                g = i(85686),
                A = i(85743),
                k = i(50209),
                y = i(27954),
                S = i(79856),
                j = i.n(S),
                L = i(77698),
                I = i(18284),
                f = i(97522),
                O = i(6349),
                M = i(66738),
                w = i(71705),
                D = i(34159),
                U = i(64720),
                P = i(71996),
                B = i(6304),
                R = i(70418),
                W = i.n(R);
            let z = (0, n.PA)((t) => {
                    var e;
                    let { className: i, album: n, likeIconSize: l = 'xxs' } = t,
                        { user: c, trailer: d } = (0, y.g)(),
                        u = (0, E.P)(),
                        { sendLikeSearchFeedback: m } = (0, A.z)(),
                        p = (0, w.K)(n),
                        [x, h] = (0, r.useState)(!1),
                        C = (0, _.c)(async () => {
                            (x || n.isLiked || (h(!0), null == m || m()), await p());
                        }),
                        N = (0, D.F)(),
                        T = (0, _.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (d.openAlbumTrailer(n.id), N(o.DomainObjectType.Album, String(n.id)));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(W().root, W().controls, i, { [W().controls_disabled]: !n.isAvailable }),
                        children: [
                            n.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(B.WithOffline, {
                                            fallback: (0, a.jsx)(U.c, {
                                                size: 'xs',
                                                iconSize: l,
                                                className: (0, s.$)(W().item, W().likeIcon),
                                                isLiked: n.isLiked,
                                                onClick: C,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = n.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(B.WithOffline, {
                                                fallback: (0, a.jsx)(P.k, {
                                                    className: (0, s.$)(W().item, W().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: T,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, s.$)(W().item, W().item_buttonArrow),
                                children: (0, a.jsx)(M.I, { className: j().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                H = (0, n.PA)((t) => {
                    let { className: e, album: i, pageId: n, coverClassName: S, playButtonIconSize: M, likeIconSize: w, shouldShowReleaseYear: D, description: U } = t,
                        P = (0, x.r)(i.type),
                        { ref: B, intersectionPropertyId: R } = (0, T.n)(),
                        { from: W } = (0, b.f)({ pageId: n }),
                        [H, $] = (0, r.useState)(!1),
                        Y = (0, N.b)(),
                        F = (0, g.Z)(i.url),
                        K = (0, E.P)(),
                        { sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: X } = (0, A.z)(),
                        V = (0, C.N)(),
                        {
                            paywall: { modal: G },
                        } = (0, y.g)(),
                        q = (0, v.N)(),
                        {
                            isPlaying: Q,
                            isCurrent: J,
                            togglePlay: tt,
                        } = (0, k.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: i.id }, from: W }, loadContextMeta: !0 } }),
                        te = (0, p.c)({ album: i, callback: F }),
                        ti = (0, p.c)({ album: i, callback: tt }),
                        ta = (0, _.c)((t) => {
                            (null == Z || Z(), V({ to: o.AppScreen.AlbumScreen }), te(t));
                        }),
                        ts = (0, _.c)(() => {
                            if (!K()) {
                                if (q) return void G.open();
                                (H || Q || ($(!0), null == X || X()), ti(), Y(!Q));
                            }
                        }),
                        tn = (0, _.c)((t) => {
                            ((0, u.P)(t, j().ripple), ta(t));
                        }),
                        tr = (0, _.c)((t) => {
                            (t.stopPropagation(), ta(t));
                        }),
                        to = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(O.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, s.$)(j().playButtonCell, S),
                                    alt: ''.concat(P, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, S, P],
                        ),
                        tl = null == to ? void 0 : to({ onPlayButtonClick: ts, isPlaying: Q, isCurrent: J, playButtonIconSize: M }),
                        tc = (0, r.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(f.N, { className: (0, s.$)(j().text, j().titleLink), href: i.url, onClick: tr, children: i.title })
                                    : (0, a.jsx)(m.HL, { className: (0, s.$)(j().text, j().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, tr],
                        ),
                        t_ = (0, r.useCallback)(
                            (t, e) => {
                                var s;
                                return (null == (s = i.artists) ? void 0 : s.length)
                                    ? (0, a.jsx)(h.i, { linkClassName: t, captionClassName: e, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        td = (0, d.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(I.C, {
                        ref: B,
                        'data-intersection-property-id': R,
                        className: (0, s.$)(j().root, { [j().root_disabled]: !i.isAvailable }, e),
                        'aria-label': td,
                        onClick: tn,
                        'data-test-id': l.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tl,
                            (0, a.jsx)(L.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: tc,
                                artistsComponent: t_,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && D ? i.year : void 0,
                                description: U,
                            }),
                            (0, a.jsx)(z, { className: j().controlsBar, album: i, likeIconSize: w }),
                        ],
                    });
                });
        },
        28777: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => N, D: () => E });
            var a = i(25839),
                s = i(82298),
                n = i(26508),
                r = i(74631),
                o = i(89288),
                l = i(44031),
                c = i(61493),
                _ = i(5365),
                d = i(26742),
                u = i(95314),
                m = i(18412),
                p = i(80986),
                x = i(21978),
                h = i.n(x),
                E = (function (t) {
                    return ((t.ONE = 'one'), (t.TWO = 'two'), t);
                })({});
            let C = (t) => {
                    let {
                            className: e,
                            forwardRef: i,
                            isShimmerVisible: x,
                            isColumnsShimmerVisible: E,
                            isHeaderWithoutControls: C,
                            maxColumnsCount: N,
                            carouselItemClassName: T,
                            carouselClassName: b,
                            children: v,
                            itemsCountPerColumn: g,
                            shimmer: A,
                            viewAllActionLink: k,
                            blockHeaderClassName: y,
                            additionalControl: S,
                            blockHeaderDescription: j,
                            blockHeaderTitle: L,
                            blockHeaderCoverUrl: I,
                            withBlockHeaderDescription: f,
                            withBlockHeaderCover: O,
                            blockHeaderHeadingVariant: M,
                            isShimmerActive: w,
                            shouldResetCarouselScroll: D,
                            beforeCarousel: U,
                            ...P
                        } = t,
                        { objectsCount: B } = (0, d.N)(),
                        [R, W] = (0, r.useState)(),
                        z = (0, r.useId)(),
                        H = (0, r.useRef)(null),
                        $ = 'two' === N,
                        Y = 'string' == typeof k ? String(k) : void 0,
                        F = null != E ? E : x,
                        K = (0, r.useCallback)(
                            (t) => {
                                let e = (0, n.A)(t, g).slice(0, $ ? 2 : 1);
                                return (
                                    1 === e.length ? W('one') : W('two'),
                                    e.map((t, e) => (0, a.jsx)('div', { className: h().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: t }, e))
                                );
                            },
                            [g, $],
                        ),
                        Z = (0, r.useMemo)(() => {
                            if (F) return K(Array.from({ length: 2 * g }, (t, e) => (0, r.cloneElement)(A, { key: e })));
                            return K(v);
                        }, [v, K, F, g, A]),
                        X = (0, r.useMemo)(
                            () =>
                                C
                                    ? null
                                    : (0, a.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [S, (0, a.jsx)(p.X, { carouselRef: H, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [S, C],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            H.current && D && H.current.scrollTo(0, 0);
                        }, [D]),
                        (0, a.jsxs)('section', {
                            ref: i,
                            className: (0, s.$)(h().root, e),
                            ...(0, o.OZ)(P),
                            children: [
                                (0, a.jsx)(u.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: Y,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != B ? B : 0,
                                    children: (0, a.jsx)(m.T, {
                                        coverUrl: I,
                                        title: L,
                                        description: j,
                                        className: y,
                                        labeledForId: z,
                                        viewAllActionLink: k,
                                        controls: X,
                                        isShimmerVisible: x,
                                        isShimmerActive: w,
                                        withDescription: f,
                                        withCover: O,
                                        headingVariant: M,
                                    }),
                                }),
                                U,
                                (0, a.jsx)(_.F, {
                                    itemClassName: (0, s.$)(h().item, h()['item_columns_'.concat(F && $ ? 'two' : R)], T),
                                    className: b,
                                    ref: H,
                                    'aria-labelledby': z,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: Z,
                                }),
                            ],
                        })
                    );
                },
                N = (0, r.forwardRef)((t, e) => (0, a.jsx)(C, { forwardRef: e, ...t }));
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => x });
            var a = i(25839),
                s = i(88204),
                n = i(84059),
                r = i(82298),
                o = i(8487),
                l = i(4254),
                c = i(16978),
                _ = i(148),
                d = i.n(_);
            let u = (0, s.PA)(() =>
                (0, a.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, a.jsx)(l.DZ, {
                            className: (0, r.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(l.HL, {
                            className: (0, r.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(53712),
                p = i(27954);
            let x = (0, s.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? e : (i && (0, n.redirect)(m.Z.main.href), (0, a.jsx)(u, {}));
            });
        },
        51271: (t, e, i) => {
            'use strict';
            i.d(e, { q: () => s });
            var a = i(22939);
            let s = (t, e, i) => {
                let s = { type: a.K.Various, meta: { id: t.id }, from: i || '' };
                return (
                    void 0 !== t.albumId && (s = { type: a.K.Album, meta: { id: t.albumId }, from: i || '' }),
                    { contextData: s, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => n, UC: () => r, dM: () => o, uV: () => l });
            var a = i(93690),
                s = i(58848);
            let n = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (t) => (t.uid ? 'authorized' : 'no-uid'),
                o = (t) => {
                    if (!(t instanceof a.m5) || !(0, s.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, s.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                l = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => a });
            let a = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        64715: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => f });
            var a = i(25839),
                s = i(82298),
                n = i(88204),
                r = i(74631),
                o = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                _ = i(66738),
                d = i(4254),
                u = i(67379),
                m = i(44031),
                p = i(87277),
                x = i(59450),
                h = i(84e3),
                E = i(97952),
                C = i(89192),
                N = i(53712),
                T = i(27954),
                b = i(44806),
                v = i(15270),
                g = i(23818),
                A = i(85686);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var y = i(27990),
                S = i.n(y);
            let j = (0, n.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { slam: n } = (0, T.g)(),
                    { contentRef: r } = (0, C.g)(),
                    o = (0, A.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(S().root, e),
                    children: [
                        i &&
                            (0, a.jsx)(v.L, { withBackwardFallback: '/', className: (0, s.$)(S().navigation, { [S().navigation_desktop]: !r }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(S().content, { [S().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(g._V, { className: S().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, a.jsx)(d.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(d.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: S().button,
                                        onClick: o,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(d.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(68854),
                I = i.n(L);
            let f = (0, n.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: n } = (0, o.A)(),
                    g = (0, r.useContext)(T.P),
                    A = null == g ? void 0 : g.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    k = n(A ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        { pageId: a } = (0, E.$)(),
                        s = (0, h.U)();
                    (0, r.useEffect)(() => {
                        if (!e || !i || !a) return;
                        let n = (0, u.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: t,
                                hash: i,
                                pageId: a,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, p.z5)(e.evgenInstance, n);
                    }, [e, t, i, a, s]);
                })(k);
                let { sendRefreshEvent: y } = (function () {
                        let t = (0, x.st)(),
                            { hash: e } = (0, x.gf)(),
                            { pageId: i } = (0, E.$)(),
                            a = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, r.useCallback)(() => {
                                if (!t || !e || !i) return;
                                let s = (0, u.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: e,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, p.bv)(t.evgenInstance, s);
                            }, [t, e, i, a]),
                        };
                    })(),
                    S = (0, r.useCallback)(() => {
                        (y(), (window.location.href = N.Z.main.href));
                    }, [y]),
                    { contentRef: L } = (0, C.g)();
                return A
                    ? (0, a.jsx)(j, { className: e, withBackwardControl: i })
                    : (0, a.jsxs)('div', {
                          className: (0, s.$)(I().root, e),
                          children: [
                              i &&
                                  (0, a.jsx)(v.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, s.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(_.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(d.DZ, { className: (0, s.$)(I().title, I().important), variant: 'h3', size: 'xs', children: k }),
                                      (0, a.jsxs)(d.HL, {
                                          className: (0, s.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: S,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        68854: (t) => {
            t.exports = {
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
        70418: (t) => {
            t.exports = {
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
        72968: (t) => {
            t.exports = {
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
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...n } = e,
                        r = t || 'Internal error';
                    (super(r, n), (this.message = r), (this.code = i), (this.data = s), (this.stack = Error(r).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
            class s extends a {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77698: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => m });
            var a = i(25839),
                s = i(82298),
                n = i(39004),
                r = i(61493),
                o = i(49656),
                l = i(66738),
                c = i(4254),
                _ = i(32652),
                d = i(72968),
                u = i.n(d);
            let m = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: i,
                        description: d,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: x,
                        version: h,
                        title: E,
                        artistsComponent: C,
                        likesCount: N,
                        isLiked: T,
                        releaseYear: b,
                        titleLineClamp: v = 1,
                    } = t,
                    { formatMessage: g, formatNumber: A } = (0, n.A)(),
                    k = (0, o.L)(() => {
                        let t = null == C ? void 0 : C((0, s.$)(u().text, u().artistLink), (0, s.$)(u().text, u().artistCaption));
                        if (!t && !N) return;
                        let e = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof N &&
                                    N > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': g({ id: 'entity-names.likes-counter' }, { counter: N }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(l.I, {
                                                className: u().icon,
                                                variant: T ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: A(N),
                                            }),
                                        ],
                                    }),
                                !!N && t && e,
                                t,
                                !!b && t && e,
                                (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: b }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: e }, x),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, s.$)(u().text, u().title, { [u().title_withVersion]: h }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: v,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        E,
                                        h &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, s.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(h),
                                            }),
                                    ],
                                }),
                                p && (0, a.jsx)(_.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        d &&
                            (0, a.jsx)(c.HL, {
                                className: (0, s.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: d,
                            }),
                        k,
                    ],
                });
            };
        },
        77920: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { X: () => a }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
        },
        79856: (t) => {
            t.exports = {
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
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => s }), i(77920));
            var a = i(76481);
            class s extends a.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => n.G, X1: () => a.X, m5: () => s.m });
            var a = i(77920),
                s = i(76481),
                n = i(91626);
            i(95919);
        },
        95919: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { Z: () => a }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        98485: (t, e, i) => {
            'use strict';
            i.d(e, { E: () => d });
            var a = i(25839),
                s = i(88204),
                n = i(23976),
                r = i(3718),
                o = i(97805),
                l = i(6973),
                c = i.n(l);
            let _ = () => Array.from({ length: 5 }, (t) => (0, a.jsx)(o.D, { variant: r.X.PLAYLIST, className: c().track, isActive: !0 }, t)),
                d = (0, s.PA)((t) => {
                    let { className: e, withHeader: i } = t;
                    return (0, a.jsxs)('div', {
                        className: e,
                        children: [i && (0, a.jsx)(n.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, a.jsx)(_, {})],
                    });
                });
        },
        99057: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => T });
            var a = i(25839),
                s = i(82298),
                n = i(88204),
                r = i(74631),
                o = i(61493),
                l = i(49656),
                c = i(28045),
                _ = i(51549),
                d = i(53712),
                u = i(27954),
                m = i(3718),
                p = i(28777),
                x = i(97805),
                h = i(51271),
                E = i(98485),
                C = i(20749),
                N = i.n(C);
            let T = (0, n.PA)((t) => {
                var e;
                let { className: i, itemsCount: n, headerClassName: C, carouselClassName: T } = t,
                    {
                        collection: {
                            shelf: { liked: b },
                        },
                    } = (0, u.g)(),
                    v = (0, l.L)(() => {
                        var t;
                        return null == (t = b.entities)
                            ? void 0
                            : t.map((t, e) => {
                                  if (t.album) return (0, a.jsx)(c.M, { album: t.album }, t.album.getKey(e));
                                  let i = (0, h.q)(t.track, e, b.typeForFrom);
                                  return (0, a.jsx)(_.K, { track: t.track, playContextParams: i, withPodcastName: !0 }, t.track.getKey(e));
                              });
                    });
                return (b.isNeededToLoad && (0, r.use)(b.getData()), !b.isLoading && (null == (e = b.entities) ? void 0 : e.length))
                    ? (0, a.jsx)(p.$, {
                          shimmer: (0, a.jsx)(x.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: b.isLoading,
                          className: i,
                          carouselItemClassName: (0, s.$)(N().shelfColumn, N().important),
                          blockHeaderClassName: (0, s.$)(N().header, C),
                          carouselClassName: T,
                          blockHeaderTitle: b.title,
                          itemsCountPerColumn: null != n ? n : 0,
                          maxColumnsCount: p.D.ONE,
                          viewAllActionLink: d.Z.collectionShelfLiked.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: v,
                      })
                    : (0, a.jsx)(E.E, { className: i, withHeader: !0 });
            });
        },
    },
]);
