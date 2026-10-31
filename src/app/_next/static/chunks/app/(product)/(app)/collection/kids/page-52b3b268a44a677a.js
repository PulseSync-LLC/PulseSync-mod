(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6413],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                a = i(15077),
                n = i(33719);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var s = i(88800),
                a = i(88969),
                n = i(58390),
                l = i(17392),
                r = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: k, key: x, className: C } = e,
                    y = (0, n.useRouter)(),
                    v = (0, m.N)().get(u.QG),
                    g = (0, r.c)(() => {
                        v.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: g,
                        className: C,
                        isBlock: k,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => C });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                l = i(53548),
                r = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                _ = i(73805),
                h = i(15232),
                p = i(56712),
                k = i(26243),
                x = i.n(k);
            let C = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: k,
                        withDNDBlock: C,
                        isDragging: y,
                        draggingClassName: v,
                        ignoreDislikedStyles: g,
                        withSecondaryColor: j,
                        handleRemove: N,
                        withDislike: b,
                        withTrailer: T = !0,
                        beforeTitle: f,
                        removeButtonAriaLabel: A,
                        hideControls: L,
                    } = e,
                    S = (0, c.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: P },
                    } = (0, d.g)(),
                    E = (0, o.X)(i.trackSource, { isMobile: P }),
                    O = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: g,
                                radius: 'xs',
                                ...e,
                            }),
                        [g, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(p.C, {
                    className: (0, a.$)(k, { [x().trackWithDots]: C, [x().important]: C }),
                    track: i,
                    beforeBlock: C ? (0, s.jsx)(m.O, { className: (0, a.$)(x().dots, v), isDragging: y }) : void 0,
                    meta: (0, s.jsx)(h.j, { withArtistLink: E, beforeTitle: f, track: i, ignoreDislikedStyles: g, withSecondaryColor: j }),
                    playButtonCellRender: O,
                    controls: (0, s.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: g,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: j,
                        handleRemove: N,
                        withDislike: b,
                        withTrailer: T,
                        removeButtonAriaLabel: A,
                        hideControls: L,
                    }),
                    ...S,
                    'data-test-id': r.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        15176: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 63828)));
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                l = i(53548),
                r = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                h = i(55693),
                p = i(72288),
                k = i(24548),
                x = i(85587),
                C = i(90224),
                y = i(91292),
                v = i(7608),
                g = i(6667),
                j = i(85463),
                N = i(65462),
                b = i.n(N);
            let T = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: N,
                        withExplicitMark: T,
                        withSecondaryColor: f,
                        captionSize: A = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: P,
                        artistsClassName: E,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: B = !0,
                        withSavingQueryParams: I,
                        beforeTitle: D,
                        withArtistLink: R,
                        variant: U,
                        withTrackLink: z,
                        afterTitle: K,
                        withContextMenuArtists: M,
                    } = e,
                    { formatMessage: W } = (0, r.A)(),
                    { sendNavigateSearchFeedback: H } = (0, h.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: V,
                    } = (0, p.g)(),
                    F = (0, g.$)({ withCustomTooltip: w }),
                    Y = (0, o.useSearchParams)(),
                    X = (0, v.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: V.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: z,
                        withArtistLink: R,
                        variant: U,
                        withExplicitMark: T,
                        query: I ? Object.fromEntries(Y) : void 0,
                    }),
                    {
                        displayTitle: Z,
                        ariaLabel: q,
                        tooltipText: G,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var a, n;
                        let { canEnableCustomTooltip: l, isMobile: r } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !r,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(n, X, { canEnableCustomTooltip: F, isMobile: $ }, W),
                    et = (0, j.O)({ track: n, onNavigate: H, withSavingQueryParams: I, entityType: x.n.TRACK }),
                    ei = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: k.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(b().text, b().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Z,
                                }),
                            }),
                        [A, Z, G, ee],
                    ),
                    es = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: k.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(b().text, b().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: Z,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(y.N, {
                                    onClick: et,
                                    className: b().albumLink,
                                    href: X.link.href,
                                    'aria-label': q,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, l.useMemo)(() => +!!B, [B]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(b().root, { [b().root_disabled]: !n.isAvailable, [b().root_disliked]: n.isDisliked && !O, [b().root_withSecondaryColor]: f }, t),
                    children: (0, s.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(b().titleContainer, { [b().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(b().text, P),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            es,
                                            X.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(b().text, b().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, s.jsx)(C.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: X.explicitMark,
                                            className: b().explicitMark,
                                            trackId: n.id,
                                        }),
                                    K,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(b().text, { [b().artists]: B }, E, P),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, a.$)(b().text, b().link),
                                    captionClassName: (0, a.$)(b().text, b().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: A,
                                    withContextMenu: M,
                                }),
                        ],
                    }),
                });
            });
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
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
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
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                a = i(96706),
                n = i(53548),
                l = i(2058),
                r = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, h] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: r.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, s.jsx)(u.l, { playlist: n }), { containerId: r.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: r.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                a = i(15077),
                n = i(42729);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(n.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => E });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                l = i(53548),
                r = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(78793),
                _ = i(92716),
                h = i(99984),
                p = i(90780),
                k = i(65523),
                x = i(14518),
                C = i(44230),
                y = i(4370),
                v = i(72288),
                g = i(97956),
                j = i(56248),
                N = i(90688),
                b = i(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = i(96856),
                A = i.n(f);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: l } = (0, v.g)(),
                    { contentRef: r } = (0, C.g)(),
                    d = (0, b.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(j.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !r }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(N._V, { className: A().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: A().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: A().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(9184),
                P = i.n(S);
            let E = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: N } = (0, r.A)(),
                    b = (0, l.useContext)(v.P),
                    T = null == b ? void 0 : b.experiments.checkExperiment(g.z.WebNextUnstableMusicScreen, 'on'),
                    f = N(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, x.$)(),
                        a = (0, k.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, h.z5)(t.evgenInstance, n);
                    }, [t, e, i, s, a]);
                })(f);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, x.$)(),
                            s = (0, k.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(e.evgenInstance, a);
                            }, [e, t, i, s]),
                        };
                    })(),
                    S = (0, l.useCallback)(() => {
                        (A(), (window.location.href = y.Z.main.href));
                    }, [A]),
                    { contentRef: E } = (0, C.g)();
                return T
                    ? (0, s.jsx)(L, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(P().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(j.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(P().navigation, { [P().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, a.$)(P().title, P().important), variant: 'h3', size: 'xs', children: f }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, a.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: S,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        35962: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var s = i(88800),
                a = i(37770);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, s.jsx)(a.V, { ...e }, i));
            };
        },
        41911: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                l = i(53548),
                r = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                _ = i(29832),
                h = i(52300),
                p = i(7555),
                k = i(29504),
                x = i(13946),
                C = i(85902),
                y = i(24460),
                v = i(5407),
                g = i(96527),
                j = i(76675),
                N = i(25557),
                b = i(28830),
                T = i(84384),
                f = i(4795),
                A = i(78940),
                L = i(55693),
                S = i(39079),
                P = i(72288),
                E = i(86298),
                O = i(81877),
                w = i(49738),
                B = i(91292),
                I = i(56862),
                D = i(16704),
                R = i(56446),
                U = i(36207),
                z = i(47513),
                K = i(19934),
                M = i(48749),
                W = i(22505),
                H = i(9618),
                $ = i(95210),
                V = i(46936),
                F = i(97956),
                Y = i(93091),
                X = i(27817),
                Z = i(15425);
            let q = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...l } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, H.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: h },
                        trailer: p,
                        user: k,
                    } = (0, P.g)(),
                    x = (0, C.K)(i),
                    g = (0, y.A)(i),
                    j = (0, N.F)(),
                    { formatMessage: b } = (0, r.A)(),
                    T = (0, v.P)(),
                    f = _.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    A = (0, M.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let L = (0, u.c)(() => {
                    if (d) return void m();
                    T() || (p.openPlaylistTrailer(i.id), j(o.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(K.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: b({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    children: [
                        f && (0, s.jsx)(W.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !h && (0, s.jsx)(X.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(Y.T, { onClick: x, isLiked: i.isLiked, disabled: !k.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(Z.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var G = i(17657),
                Q = i.n(G);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: K, customDescription: M, onCoverMouseDown: W } = e,
                    { ref: H, intersectionPropertyId: $ } = (0, b.n)(),
                    {
                        trailer: V,
                        user: F,
                        paywall: { modal: Y },
                    } = (0, P.g)(),
                    { from: X, utmLink: Z } = (0, T.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: G } = (0, r.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, L.z)(),
                    [ei, es] = (0, l.useState)(!1),
                    [ea, en] = (0, l.useState)(!1),
                    [el, er] = (0, l.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, C.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, g.N)(),
                    em = (0, j.b)(),
                    e_ = (0, A.Z)(i.url),
                    eh = (0, N.F)(),
                    ep = (0, v.P)(),
                    ek = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (V.setUtmLink(Z), V.openPlaylistTrailer(i.id), eh(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, eC] = (0, l.useState)(!1),
                    { isPlaying: ey, togglePlay: ev } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eg = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    ej = (0, u.c)((e) => {
                        (eg(), e_(e));
                    }),
                    eN = (0, f.N)(),
                    eb = (0, u.c)(() => {
                        if (!ep()) {
                            if (eN) return void Y.open();
                            (ei || ey || (es(!0), null == et || et()), ev(), em(!ey));
                        }
                    }),
                    eT = (0, u.c)(() => {
                        (ea || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    ef = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, u.c)((e) => {
                        (er(e), eC(e));
                    }),
                    eL = (0, l.useMemo)(() => {
                        var e;
                        return M
                            ? (0, s.jsx)(k.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: M }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    x.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [M, i]),
                    eS = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                w.c,
                                {
                                    className: (0, a.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eT,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !F.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                U.n,
                                {
                                    children: (0, s.jsx)(
                                        R.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ek },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ek, i]),
                    eE = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                I.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ej,
                                    onMouseDown: W,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(_.hg, {
                                            isVisible: el || ex,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, a.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eb,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: el,
                                                    onClick: ef,
                                                    className: (0, a.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eE,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [ej, W, i, eo, el, ex, eb, ey, eS, eA, ef, eE, eP],
                    ),
                    ew = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(_.MN, {
                    ref: H,
                    'aria-label': eo,
                    className: (0, a.$)(Q().root, t),
                    title: (0, s.jsx)(k.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(B.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eg, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(B.N, { className: Q().srTitleLink, href: i.url, onClick: eg, children: i.title }),
                    'data-intersection-property-id': $,
                    contentLinesCount: K,
                    view: eO,
                    description: eL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ew &&
                            (0, s.jsx)(E.x, {
                                ariaLabel: G({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
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
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var s = i(53548),
                a = i(2058);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        47934: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => y });
            var s = i(88800),
                a = i(65724),
                n = i(53548),
                l = i(35412),
                r = i(92716),
                o = i(79070),
                c = i(53323),
                d = i(19994),
                u = i(34500),
                m = i(77948),
                _ = i(18486),
                h = i(31764),
                p = i(35962),
                k = i(2350),
                x = i.n(k);
            let C = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: k,
                            isShimmerActive: C,
                            isShimmerWithSubcover: y,
                            isShimmerCentered: v,
                            isShimmerRounded: g,
                            title: j,
                            description: N,
                            coverUrl: b,
                            viewAllActionLink: T,
                            titleChildren: f,
                            headerChildren: A,
                            children: L,
                            className: S,
                            containerClassName: P,
                            headerClassName: E,
                            itemClassName: O,
                            showHeaderShimmer: w = !1,
                            showShimmerInfo: B = !0,
                            showControls: I = !0,
                            headingRef: D,
                            headingVariant: R,
                            customShimmer: U,
                            ...z
                        } = e,
                        K = (0, n.useId)(),
                        M = (0, n.useRef)(null),
                        { objectsCount: W } = (0, u.N)(),
                        H = (0, n.useMemo)(
                            () =>
                                w && k
                                    ? (0, s.jsx)('div', { className: E, children: (0, s.jsx)(d.W, { isActive: C, className: x().shimmerTitle, radius: 'l' }) })
                                    : j || N || f || A
                                      ? (0, s.jsx)(m.B, {
                                            objectType: r.DomainObjectType.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != W ? W : 0,
                                            children: (0, s.jsx)(_.T, {
                                                className: E,
                                                labeledForId: K,
                                                title: j,
                                                description: N,
                                                coverUrl: b,
                                                viewAllActionLink: T,
                                                controls: I && (0, s.jsx)(h.X, { className: x().controls, carouselRef: M }),
                                                headingRef: D,
                                                headingVariant: R,
                                                withDescription: !!N,
                                                titleChildren: f,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [b, N, E, D, R, K, C, k, W, I, w, j, f, A, T],
                        ),
                        $ = (0, o.L)(() => U || (0, p.k)({ className: i, isActive: C, withInfo: B, withSubcover: y, centered: v, round: g }));
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(x().root, S),
                        ...(0, l.OZ)(z),
                        children: [
                            H,
                            (0, s.jsx)(c.F, {
                                className: P,
                                ref: M,
                                itemClassName: (0, a.$)(x().item, x().important, O),
                                'aria-labelledby': ''.concat(K, ' ').concat(K, '-description'),
                                children: k ? $ : L,
                            }),
                        ],
                    });
                },
                y = (0, n.forwardRef)((e, t) => (0, s.jsx)(C, { forwardRef: t, ...e }));
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var s = i(88800),
                a = i(84961),
                n = i(58390),
                l = i(65724),
                r = i(88969),
                o = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(4370),
                h = i(72288);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (i && (0, n.redirect)(_.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        63828: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPage: () => U });
            var s = i(88800),
                a = i(65724),
                n = i(84961),
                l = i(53548),
                r = i(2058),
                o = i(88969),
                c = i(17392),
                d = i(18593),
                u = i(54667),
                m = i(79070),
                _ = i(52300),
                h = i(66719),
                p = i(29504),
                k = i(32596),
                x = i(74929),
                C = i(69630),
                y = i(80715),
                v = i(76843),
                g = i(10829),
                j = i(12816),
                N = i(59844),
                b = i(84384),
                T = i(46422),
                f = i(44230),
                A = i(37670),
                L = i(4370),
                S = i(72288),
                P = i(98644),
                E = i(67984),
                O = i(86790),
                w = i(60266),
                B = i(93317),
                I = i(93015),
                D = i(95332),
                R = i.n(D);
            let U = (0, n.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, S.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, f.g)(),
                    n = (0, T.W)(),
                    { from: D } = (0, b.f)({ pageId: j._Q.COLLECTION_KIDS }),
                    { formatMessage: U } = (0, r.A)();
                ((0, l.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, A.J)(e.isResolved));
                let z = (0, m.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, i) => {
                        let a = {
                            contextData: { type: d.K.Various, meta: { id: t.entityId }, from: D },
                            queueParams: { index: i },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === u.S.MUSIC
                            ? (0, s.jsx)(g.K, { track: t, playContextParams: a }, i)
                            : (0, s.jsx)(v.K, { track: t, playContextParams: a, withPodcastName: t.isTrackPodcast }, i);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, l.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, s.jsx)(k.SomethingWentWrong, {})
                    : (0, s.jsx)(N.n, {
                          pageId: j._Q.COLLECTION_KIDS,
                          children: (0, s.jsxs)(C.h, {
                              scrollElement: t,
                              outerTitle: U({ id: 'kids.for-kids' }),
                              children: [
                                  (0, s.jsx)(B.Y, {
                                      variant: B.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: n.canBack,
                                      children: (0, s.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, s.jsx)(o.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, s.jsxs)(h.N, {
                                      className: R().root,
                                      containerClassName: R().content,
                                      ref: i,
                                      'data-test-id': c.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, s.jsxs)('div', {
                                                  className: R().emptyBlock,
                                                  children: [
                                                      (0, s.jsx)(_.I, { className: R().emptyBlockIcon, variant: 'album' }),
                                                      (0, s.jsx)(p.DZ, {
                                                          className: R().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, s.jsx)(o.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, s.jsx)(E.$, {
                                                  blockHeaderClassName: (0, a.$)(R().carouselBlockHeader, R().carouselBlock),
                                                  carouselItemClassName: (0, a.$)(R().tracksCarouselItem, R().important),
                                                  blockHeaderTitle: U({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, s.jsx)(I.D, { variant: P.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: E.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: L.Z.collectionKidsTracks.href,
                                                  children: z,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, s.jsx)(x.p, {
                                                  headerClassName: (0, a.$)(R().carouselBlock, R().carouselBlockHeader),
                                                  containerClassName: R().carouselBlock,
                                                  title: U({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, s.jsx)(y.E, {
                                                  headerClassName: (0, a.$)(R().carouselBlock, R().carouselBlockHeader),
                                                  containerClassName: R().carouselBlock,
                                                  title: U({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, s.jsx)(w.A, { children: (0, s.jsx)(O.w, { className: R().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        67984: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => y, D: () => x });
            var s = i(88800),
                a = i(65724),
                n = i(35802),
                l = i(53548),
                r = i(35412),
                o = i(92716),
                c = i(17392),
                d = i(53323),
                u = i(34500),
                m = i(77948),
                _ = i(18486),
                h = i(31764),
                p = i(44616),
                k = i.n(p),
                x = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let C = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: x,
                            isHeaderWithoutControls: C,
                            maxColumnsCount: y,
                            carouselItemClassName: v,
                            carouselClassName: g,
                            children: j,
                            itemsCountPerColumn: N,
                            shimmer: b,
                            viewAllActionLink: T,
                            blockHeaderClassName: f,
                            additionalControl: A,
                            blockHeaderDescription: L,
                            blockHeaderTitle: S,
                            blockHeaderCoverUrl: P,
                            withBlockHeaderDescription: E,
                            withBlockHeaderCover: O,
                            blockHeaderHeadingVariant: w,
                            isShimmerActive: B,
                            shouldResetCarouselScroll: I,
                            beforeCarousel: D,
                            ...R
                        } = e,
                        { objectsCount: U } = (0, u.N)(),
                        [z, K] = (0, l.useState)(),
                        M = (0, l.useId)(),
                        W = (0, l.useRef)(null),
                        H = 'two' === y,
                        $ = 'string' == typeof T ? String(T) : void 0,
                        V = null != x ? x : p,
                        F = (0, l.useCallback)(
                            (e) => {
                                let t = (0, n.A)(e, N).slice(0, H ? 2 : 1);
                                return (
                                    1 === t.length ? K('one') : K('two'),
                                    t.map((e, t) => (0, s.jsx)('div', { className: k().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [N, H],
                        ),
                        Y = (0, l.useMemo)(() => {
                            if (V) return F(Array.from({ length: 2 * N }, (e, t) => (0, l.cloneElement)(b, { key: t })));
                            return F(j);
                        }, [j, F, V, N, b]),
                        X = (0, l.useMemo)(
                            () =>
                                C
                                    ? null
                                    : (0, s.jsxs)('div', {
                                          className: k().controlsContainer,
                                          children: [A, (0, s.jsx)(h.X, { carouselRef: W, className: k().controls, backwardControlClassName: k().backwardControl })],
                                      }),
                            [A, C],
                        );
                    return (
                        (0, l.useEffect)(() => {
                            W.current && I && W.current.scrollTo(0, 0);
                        }, [I]),
                        (0, s.jsxs)('section', {
                            ref: i,
                            className: (0, a.$)(k().root, t),
                            ...(0, r.OZ)(R),
                            children: [
                                (0, s.jsx)(m.B, {
                                    objectType: o.DomainObjectType.Shortcut,
                                    objectId: $,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != U ? U : 0,
                                    children: (0, s.jsx)(_.T, {
                                        coverUrl: P,
                                        title: S,
                                        description: L,
                                        className: f,
                                        labeledForId: M,
                                        viewAllActionLink: T,
                                        controls: X,
                                        isShimmerVisible: p,
                                        isShimmerActive: B,
                                        withDescription: E,
                                        withCover: O,
                                        headingVariant: w,
                                    }),
                                }),
                                D,
                                (0, s.jsx)(d.F, {
                                    itemClassName: (0, a.$)(k().item, k()['item_columns_'.concat(V && H ? 'two' : z)], v),
                                    className: g,
                                    ref: W,
                                    'aria-labelledby': M,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: Y,
                                }),
                            ],
                        })
                    );
                },
                y = (0, l.forwardRef)((e, t) => (0, s.jsx)(C, { forwardRef: t, ...e }));
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        74929: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var s = i(88800),
                a = i(53548),
                n = i(92716),
                l = i(28163),
                r = i(77948),
                o = i(47934),
                c = i(10079);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: h,
                            containerClassName: p,
                            headerClassName: k,
                            viewAllActionLink: x,
                            headingRef: C,
                            headingVariant: y,
                            shouldSendAnalyticsOnLoaded: v,
                            ...g
                        } = e,
                        j = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            v && j();
                        }, [j, v]),
                        (0, s.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: h,
                            headerClassName: k,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingRef: C,
                            headingVariant: y,
                            ...g,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, s.jsx)(
                                              r.B,
                                              {
                                                  objectType: n.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, s.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var s = i(88800),
                a = i(53548),
                n = i(90134);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: r, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: r, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, l, r, o, c, d, u],
                    );
                return (0, s.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        80715: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var s = i(88800),
                a = i(53548),
                n = i(92716),
                l = i(28163),
                r = i(77948),
                o = i(47934),
                c = i(41911);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: h,
                            className: p,
                            headerClassName: k,
                            viewAllActionLink: x,
                            headingVariant: C,
                            shouldSendAnalyticsOnLoaded: y,
                            ...v
                        } = e,
                        g = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            y && !i && g();
                        }, [i, g, y]),
                        (0, s.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: k,
                            containerClassName: h,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingVariant: C,
                            ...v,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, s.jsx)(
                                              r.B,
                                              {
                                                  objectType: n.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, s.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var s = i(88800),
                a = i(96706),
                n = i(53548),
                l = i(2058),
                r = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    h(!0);
                    let l = await e.toggleLike();
                    (h(!1),
                        l === r.f.OK
                            ? i((0, s.jsx)(m.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
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
                        l = e || 'Internal error';
                    (super(l, n), (this.message = l), (this.code = i), (this.data = a), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class a extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        95332: (e) => {
            e.exports = {
                root: 'CollectionKidsPage_root__nfE01',
                content: 'CollectionKidsPage_content__hVB40',
                carouselBlocks: 'CollectionKidsPage_carouselBlocks__q7f0T',
                tracksCarouselItem: 'CollectionKidsPage_tracksCarouselItem__8WvD0',
                important: 'CollectionKidsPage_important__GkZJX',
                carouselBlock: 'CollectionKidsPage_carouselBlock___6XRJ',
                carouselBlockHeader: 'CollectionKidsPage_carouselBlockHeader__fqs_v',
                emptyBlock: 'CollectionKidsPage_emptyBlock__dc50I',
                emptyBlockIcon: 'CollectionKidsPage_emptyBlockIcon__eVAMs',
                emptyBlockTitle: 'CollectionKidsPage_emptyBlockTitle__TYUpU',
                footer: 'CollectionKidsPage_footer__wEREs',
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
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => n, UC: () => l, dM: () => r, uV: () => o });
            var s = i(89916),
                a = i(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
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
                o = (e) => {
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
                7435, 8752, 3637, 5108, 8380, 127, 1931, 1191, 4596, 7617, 1061, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 2837, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 763, 2670, 7358,
            ],
            () => e((e.s = 15176)),
        ),
            (_N_E = e.O()));
    },
]);
