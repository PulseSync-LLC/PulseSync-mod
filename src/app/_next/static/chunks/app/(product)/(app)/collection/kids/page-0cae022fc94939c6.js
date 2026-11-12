(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6413],
    {
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                n = i(15077),
                a = i(33719);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: n.c.PLAYLIST,
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
            i.d(t, { H: () => p });
            var s = i(88800),
                n = i(88969),
                a = i(58390),
                l = i(17392),
                o = i(29993),
                r = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: k, key: x, className: g } = e,
                    C = (0, a.useRouter)(),
                    y = (0, m.N)().get(u.QG),
                    v = (0, o.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(y.authorizationUrl));
                    });
                return (0, s.jsx)(
                    r.$,
                    {
                        onClick: v,
                        className: g,
                        isBlock: k,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => c });
            var s = i(88800),
                n = i(53548),
                a = i(63582),
                l = i(99875),
                o = i(66109),
                r = i(245);
            let c = (0, a.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: a, objectType: c }) => {
                    let d = (0, r.N)(),
                        u = (0, n.useContext)(l.p)?.loadedSession,
                        m = [c, t, i, a].join(':'),
                        [p, _] = (0, n.useState)(() => ({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (p.client !== d || p.identity !== m || p.blockSession !== u) &&
                        _({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() });
                    let h = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: a, objectType: c }, viewSession: p.viewSession }),
                        [t, i, a, c, p.viewSession],
                    );
                    return (0, s.jsx)(o.l, { value: h, children: e });
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(17392),
                r = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                p = i(73805),
                _ = i(15232),
                h = i(56712),
                k = i(26243),
                x = i.n(k);
            let g = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: k,
                        withDNDBlock: g,
                        isDragging: C,
                        draggingClassName: y,
                        ignoreDislikedStyles: v,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: T,
                        withTrailer: N = !0,
                        beforeTitle: S,
                        removeButtonAriaLabel: A,
                        hideControls: f,
                    } = e,
                    P = (0, c.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, d.g)(),
                    O = (0, r.X)(i.trackSource, { isMobile: L }),
                    E = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: v,
                                radius: 'xs',
                                ...e,
                            }),
                        [v, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(h.C, {
                    className: (0, n.$)(k, { [x().trackWithDots]: g, [x().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, n.$)(x().dots, y), isDragging: C }) : void 0,
                    meta: (0, s.jsx)(_.j, { withArtistLink: O, beforeTitle: S, track: i, ignoreDislikedStyles: v, withSecondaryColor: b }),
                    playButtonCellRender: E,
                    controls: (0, s.jsx)(p.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: v,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: T,
                        withTrailer: N,
                        removeButtonAriaLabel: A,
                        hideControls: f,
                    }),
                    ...P,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                p = i(13946),
                _ = i(55693),
                h = i(72288),
                k = i(24548),
                x = i(85587),
                g = i(90224),
                C = i(91292),
                y = i(7608),
                v = i(6667),
                b = i(85463),
                j = i(65462),
                T = i.n(j);
            let N = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: j,
                        withExplicitMark: N,
                        withSecondaryColor: S,
                        captionSize: A = 'm',
                        explicitSize: f = 'xxxs',
                        withAllArtistsTitle: P,
                        textClassName: L,
                        artistsClassName: O,
                        ignoreDislikedStyles: E,
                        withCustomTooltip: w = !0,
                        hasLineClamp: I = !0,
                        withSavingQueryParams: B,
                        beforeTitle: D,
                        withArtistLink: R,
                        variant: U,
                        withTrackLink: z,
                        afterTitle: M,
                        withContextMenuArtists: K,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: V } = (0, _.z)(),
                    {
                        settings: { isMobile: H },
                        slam: F,
                    } = (0, h.g)(),
                    $ = (0, v.$)({ withCustomTooltip: w }),
                    q = (0, r.useSearchParams)(),
                    Y = (0, y.B)(a, {
                        isMobile: H,
                        isOfflineModeEnabled: F.isOfflineModeEnabled,
                        albumArtists: j,
                        withTrackLink: z,
                        withArtistLink: R,
                        variant: U,
                        withExplicitMark: N,
                        query: B ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: Z,
                        tooltipText: G,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var n, a;
                        let { canEnableCustomTooltip: l, isMobile: o } = i,
                            r = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? r : ''.concat(r, ' ').concat(null != (n = t.version) ? n : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: r,
                            ariaLabel: ''.concat(d, ' ').concat(null != (a = e.version) ? a : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !o,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(a, Y, { canEnableCustomTooltip: $, isMobile: H }, W),
                    et = (0, b.O)({ track: a, onNavigate: V, withSavingQueryParams: B, entityType: x.n.TRACK }),
                    ei = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: k.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, n.$)(T().text, T().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [A, X, G, ee],
                    ),
                    es = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: k.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, n.$)(T().text, T().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: X,
                                  }),
                              })
                            : Y.link
                              ? (0, s.jsx)(C.N, {
                                    onClick: et,
                                    className: T().albumLink,
                                    href: Y.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    en = (0, l.useMemo)(() => +!!I, [I]);
                return (0, s.jsx)('div', {
                    className: (0, n.$)(T().root, { [T().root_disabled]: !a.isAvailable, [T().root_disliked]: a.isDisliked && !E, [T().root_withSecondaryColor]: S }, t),
                    children: (0, s.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, n.$)(T().titleContainer, { [T().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, n.$)(T().text, L),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            es,
                                            Y.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, n.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, s.jsx)(g.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: f,
                                            variant: Y.explicitMark,
                                            className: T().explicitMark,
                                            trackId: a.id,
                                        }),
                                    M,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, s.jsx)(p.i, {
                                    className: (0, n.$)(T().text, { [T().artists]: I }, O, L),
                                    withAllArtistsTitle: P,
                                    linkClassName: (0, n.$)(T().text, T().link),
                                    captionClassName: (0, n.$)(T().text, T().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: en,
                                    captionSize: A,
                                    withContextMenu: K,
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
            (i.d(t, { G: () => n }), i(46606));
            var s = i(91136);
            class n extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                n = i(96706),
                a = i(53548),
                l = i(2058),
                o = i(29595),
                r = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, r.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [p, _] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let l = await e.togglePin();
                    (_(!1),
                        l
                            ? i((0, s.jsx)(u.l, { playlist: a }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, p, e, i, m]);
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
                n = i(15077),
                a = i(42729);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(a.O, {
                    entityVariant: n.c.PLAYLIST,
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
            i.d(t, { SomethingWentWrong: () => w });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(87999),
                p = i(47149),
                _ = i(84423),
                h = i(89846),
                k = i(64543),
                x = i(63582);
            let g = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, k.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                C = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: n } = (0, k.j)();
                    (0, l.useEffect)(() => {
                        if (!i || !s || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: n.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(i, t);
                    }, [i, e, s, null == n ? void 0 : n.pageId]);
                });
            var y = i(44230),
                v = i(4370),
                b = i(72288),
                j = i(97956),
                T = i(56248),
                N = i(90688),
                S = i(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = i(96856),
                P = i.n(f);
            let L = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { slam: l } = (0, b.g)(),
                    { contentRef: o } = (0, y.g)(),
                    d = (0, S.Z)(v.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(P().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(P().navigation, { [P().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, n.$)(P().content, { [P().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(N._V, { className: P().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: P().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: P().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(r.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: P().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(r.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: P().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: P().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(r.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = i(9184),
                E = i.n(O);
            let w = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { formatMessage: m } = (0, o.A)(),
                    p = (0, l.useContext)(b.P),
                    _ = null == p ? void 0 : p.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                C(h);
                let { sendRefreshEvent: k } = g(),
                    x = (0, l.useCallback)(() => {
                        (k(), (window.location.href = v.Z.main.href));
                    }, [k]),
                    { contentRef: N } = (0, y.g)();
                return _
                    ? (0, s.jsx)(L, { className: t, withBackwardControl: i, onBack: a })
                    : (0, s.jsxs)('div', {
                          className: (0, n.$)(E().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(E().navigation, { [E().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, n.$)(E().content, { [E().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, n.$)(E().title, E().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, n.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(r.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: E().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(r.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34430: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 63828)));
        },
        41911: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                p = i(18593),
                _ = i(29993),
                h = i(79070),
                k = i(29832),
                x = i(52300),
                g = i(7555),
                C = i(29504),
                y = i(13946),
                v = i(85902),
                b = i(24460),
                j = i(5407),
                T = i(57934),
                N = i(84384),
                S = i(4795),
                A = i(78940),
                f = i(55693),
                P = i(39079),
                L = i(72288),
                O = i(86298),
                E = i(81877),
                w = i(49738),
                I = i(91292),
                B = i(56862),
                D = i(16704),
                R = i(56446),
                U = i(36207),
                z = i(47513),
                M = i(19934),
                K = i(48749),
                W = i(22505),
                V = i(9618),
                H = i(95210),
                F = i(46936),
                $ = i(97956),
                q = i(93091),
                Y = i(27817),
                X = i(15425);
            let Z = (0, a.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: a, ...l } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, V.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: p },
                        trailer: h,
                        user: k,
                    } = (0, L.g)(),
                    x = (0, v.K)(i),
                    g = (0, b.A)(i),
                    C = (0, T.F)(),
                    { formatMessage: y } = (0, o.A)(),
                    N = (0, j.P)(),
                    S = u.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    A = (0, K.A)({ entityVariant: F.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, H.N)(a);
                let f = (0, _.c)(() => {
                    if (c) return void d();
                    N() || (h.openPlaylistTrailer(i.id), C(r.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(M.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: a,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    children: [
                        S && (0, s.jsx)(W.d, { entityVariant: F.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !p && (0, s.jsx)(Y.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !k.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(X.N, { onClick: f, disabled: !i.isAvailable }),
                    ],
                });
            });
            var G = i(17657),
                Q = i.n(G);
            let J = (0, a.PA)((e) => {
                let { className: t, playlist: i, children: a, contentLinesCount: M, customDescription: K, onCoverMouseDown: W } = e,
                    V = (0, c.D)(),
                    {
                        trailer: H,
                        user: F,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: q, utmLink: Y } = (0, N.f)({ contextId: i.uuid, contextType: p.K.Playlist }),
                    { formatMessage: X } = (0, o.A)(),
                    { sendLikeSearchFeedback: G, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, f.z)(),
                    [et, ei] = (0, l.useState)(!1),
                    [es, en] = (0, l.useState)(!1),
                    [ea, el] = (0, l.useState)(!1),
                    eo = (0, z.r)(i),
                    er = (0, v.K)(i),
                    ec = (0, b.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    em = (0, A.Z)(i.url),
                    ep = (0, T.F)(),
                    e_ = (0, j.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (H.setUtmLink(Y), H.openPlaylistTrailer(i.id), ep(r.DomainObjectType.Playlist, i.id));
                    }),
                    [ek, ex] = (0, l.useState)(!1),
                    { isPlaying: eg, togglePlay: eC } = (0, P.D)({
                        playContextParams: { contextData: { type: p.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: q, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    ey = (0, _.c)(() => {
                        (ed({ to: r.AppScreen.PlaylistScreen }), null == J || J());
                    }),
                    ev = (0, _.c)((e) => {
                        (ey(), em(e));
                    }),
                    eb = (0, S.N)(),
                    ej = (0, _.c)(() => {
                        if (!e_()) {
                            if (eb) return void $.open();
                            (et || eg || (ei(!0), null == ee || ee()), eC(), eg || eu());
                        }
                    }),
                    eT = (0, _.c)(() => {
                        (es || i.isLiked || (en(!0), null == G || G()), er());
                    }),
                    eN = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eS = (0, _.c)((e) => {
                        (el(e), ex(e));
                    }),
                    eA = (0, l.useMemo)(() => {
                        var e;
                        return K
                            ? (0, s.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: K }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    y.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [K, i]),
                    ef = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                w.c,
                                {
                                    className: (0, n.$)(Q().likeButton, Q().control),
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
                                        { className: (0, n.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eL = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                B.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, n.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(g.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ev,
                                    onMouseDown: W,
                                    children: [
                                        (0, s.jsx)(E.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(k.hg, {
                                            isVisible: ea || ek,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, n.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: eg,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ef,
                                            menuControl: (0, s.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eS,
                                                    open: ea,
                                                    onClick: eN,
                                                    className: (0, n.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eL,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [ev, W, i, eo, ea, ek, ej, eg, ef, eS, eN, eL, eP],
                    ),
                    eE = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(k.MN, {
                    ref: V,
                    'aria-label': eo,
                    className: (0, n.$)(Q().root, t),
                    title: (0, s.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Q().srTitleLink, href: i.url, onClick: ey, children: i.title }),
                    contentLinesCount: M,
                    view: eO,
                    description: eA,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eE &&
                            (0, s.jsx)(O.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: er,
                            }),
                        a,
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
            i.d(t, { r: () => a });
            var s = i(53548),
                n = i(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, n.A)();
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
        49784: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => r });
            var s = i(53548),
                n = i(63582),
                a = i(89846),
                l = i(245),
                o = i(22681);
            let r = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, s.useRef)(!1),
                    i = (0, l.N)(),
                    { hash: n } = (0, a.g)(),
                    r = (0, o.w)(),
                    c = (0, s.useMemo)(() => (r ? i.createBlockReporter(r.snapshot) : null), [i, r]);
                (0, s.useEffect)(() => {
                    e && r && c && !t.current && c.loaded({ objectsCount: r.snapshot.block.objectsCount, viewUuid: r.block.loadedSession.start() }) && (t.current = !0);
                }, [e, n, c, r]);
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                n = i(84961),
                a = i(58390),
                l = i(65724),
                o = i(88969),
                r = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let m = (0, n.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(r.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(r.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = i(4370),
                _ = i(72288);
            let h = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: n } = (0, _.g)();
                return n.isAuthorized ? t : (i && (0, a.redirect)(p.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        63828: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPage: () => z });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                m = i(18593),
                p = i(54667),
                _ = i(79070),
                h = i(52300),
                k = i(66719),
                x = i(29504),
                g = i(32596),
                C = i(74929),
                y = i(69630),
                v = i(80715),
                b = i(76843),
                j = i(10829),
                T = i(98427),
                N = i(84384),
                S = i(46422),
                A = i(44230),
                f = i(37670),
                P = i(4370),
                L = i(72288),
                O = i(98644),
                E = i(67984),
                w = i(86790),
                I = i(60266),
                B = i(93317),
                D = i(93015),
                R = i(95332),
                U = i.n(R);
            let z = (0, a.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, L.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, A.g)(),
                    a = (0, S.W)(),
                    { from: R } = (0, N.f)({ pageId: T.b.COLLECTION_KIDS }),
                    { formatMessage: z } = (0, o.A)();
                ((0, l.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, f.J)(e.isResolved));
                let M = (0, _.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, i) => {
                        let n = {
                            contextData: { type: m.K.Various, meta: { id: t.entityId }, from: R },
                            queueParams: { index: i },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === p.S.MUSIC
                            ? (0, s.jsx)(j.K, { track: t, playContextParams: n }, i)
                            : (0, s.jsx)(b.K, { track: t, playContextParams: n, withPodcastName: t.isTrackPodcast }, i);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, l.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, s.jsx)(g.SomethingWentWrong, {})
                    : (0, s.jsx)(d.a, {
                          pageId: c.AppScreen.CollectionKids,
                          pageIdForFrom: T.b.COLLECTION_KIDS,
                          children: (0, s.jsxs)(y.h, {
                              scrollElement: t,
                              outerTitle: z({ id: 'kids.for-kids' }),
                              children: [
                                  (0, s.jsx)(B.Y, {
                                      variant: B.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: a.canBack,
                                      children: (0, s.jsx)(x.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, s.jsx)(r.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, s.jsxs)(k.N, {
                                      className: U().root,
                                      containerClassName: U().content,
                                      ref: i,
                                      'data-test-id': u.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, s.jsxs)('div', {
                                                  className: U().emptyBlock,
                                                  children: [
                                                      (0, s.jsx)(h.I, { className: U().emptyBlockIcon, variant: 'album' }),
                                                      (0, s.jsx)(x.DZ, {
                                                          className: U().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, s.jsx)(r.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, s.jsx)(E.$, {
                                                  blockHeaderClassName: (0, n.$)(U().carouselBlockHeader, U().carouselBlock),
                                                  carouselItemClassName: (0, n.$)(U().tracksCarouselItem, U().important),
                                                  blockHeaderTitle: z({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, s.jsx)(D.D, { variant: O.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: E.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: P.Z.collectionKidsTracks.href,
                                                  children: M,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, s.jsx)(C.p, {
                                                  headerClassName: (0, n.$)(U().carouselBlock, U().carouselBlockHeader),
                                                  containerClassName: U().carouselBlock,
                                                  title: z({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: P.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, s.jsx)(v.E, {
                                                  headerClassName: (0, n.$)(U().carouselBlock, U().carouselBlockHeader),
                                                  containerClassName: U().carouselBlock,
                                                  title: z({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: P.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, s.jsx)(I.A, { children: (0, s.jsx)(w.w, { className: U().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        67984: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g, D: () => k });
            var s = i(88800),
                n = i(65724),
                a = i(35802),
                l = i(53548),
                o = i(35412),
                r = i(87999),
                c = i(7833),
                d = i(17392),
                u = i(53323),
                m = i(18486),
                p = i(31764),
                _ = i(44616),
                h = i.n(_),
                k = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let x = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: _,
                            isColumnsShimmerVisible: k,
                            isHeaderWithoutControls: x,
                            maxColumnsCount: g,
                            carouselItemClassName: C,
                            carouselClassName: y,
                            children: v,
                            itemsCountPerColumn: b,
                            shimmer: j,
                            viewAllActionLink: T,
                            blockHeaderClassName: N,
                            additionalControl: S,
                            blockHeaderDescription: A,
                            blockHeaderTitle: f,
                            blockHeaderCoverUrl: P,
                            withBlockHeaderDescription: L,
                            withBlockHeaderCover: O,
                            blockHeaderHeadingVariant: E,
                            isShimmerActive: w,
                            shouldResetCarouselScroll: I,
                            beforeCarousel: B,
                            ...D
                        } = e,
                        [R, U] = (0, l.useState)(),
                        z = (0, l.useId)(),
                        M = (0, l.useRef)(null),
                        K = 'two' === g,
                        W = 'string' == typeof T ? String(T) : '',
                        V = null != k ? k : _,
                        H = (0, l.useCallback)(
                            (e) => {
                                let t = (0, a.A)(e, b).slice(0, K ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, s.jsx)('div', { className: h().column, 'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [b, K],
                        ),
                        F = (0, l.useMemo)(() => {
                            if (V) return H(Array.from({ length: 2 * b }, (e, t) => (0, l.cloneElement)(j, { key: t })));
                            return H(v);
                        }, [v, H, V, b, j]),
                        $ = (0, l.useMemo)(
                            () =>
                                x
                                    ? null
                                    : (0, s.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [S, (0, s.jsx)(p.X, { carouselRef: M, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [S, x],
                        );
                    return (
                        (0, l.useEffect)(() => {
                            M.current && I && M.current.scrollTo(0, 0);
                        }, [I]),
                        (0, s.jsxs)('section', {
                            ref: i,
                            className: (0, n.$)(h().root, t),
                            ...(0, o.OZ)(D),
                            children: [
                                (0, s.jsx)(c.B, {
                                    objectType: r.DomainObjectType.Shortcut,
                                    objectId: W,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, s.jsx)(m.T, {
                                        coverUrl: P,
                                        title: f,
                                        description: A,
                                        className: N,
                                        labeledForId: z,
                                        viewAllActionLink: T,
                                        controls: $,
                                        isShimmerVisible: _,
                                        isShimmerActive: w,
                                        withDescription: L,
                                        withCover: O,
                                        headingVariant: E,
                                    }),
                                }),
                                B,
                                (0, s.jsx)(u.F, {
                                    itemClassName: (0, n.$)(h().item, h()['item_columns_'.concat(V && K ? 'two' : R)], C),
                                    className: y,
                                    ref: M,
                                    'aria-labelledby': z,
                                    'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: F,
                                }),
                            ],
                        })
                    );
                },
                g = (0, l.forwardRef)((e, t) => (0, s.jsx)(x, { forwardRef: t, ...e }));
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
                n = i(53548),
                a = i(87999),
                l = i(49784),
                o = i(7833),
                r = i(47934),
                c = i(10079);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: n,
                        title: d,
                        description: u,
                        albums: m,
                        className: p,
                        containerClassName: _,
                        headerClassName: h,
                        viewAllActionLink: k,
                        headingRef: x,
                        headingVariant: g,
                        shouldSendAnalyticsOnLoaded: C,
                        ...y
                    } = e;
                    return (
                        (0, l.W)({ enabled: !!C && !i }),
                        (0, s.jsx)(r.O, {
                            isShimmerVisible: i,
                            isShimmerActive: n,
                            className: p,
                            headerClassName: h,
                            containerClassName: _,
                            ref: t,
                            title: d,
                            description: u,
                            viewAllActionLink: k,
                            headingRef: x,
                            headingVariant: g,
                            ...y,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, s.jsx)(
                                              o.B,
                                              {
                                                  objectType: a.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
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
                u = (0, n.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                n = i(53548),
                a = i(53534),
                l = i(63582),
                o = i(245);
            let r = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        r.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (r.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [r, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        r.client !== i ||
                        r.input.pageId !== t.pageId ||
                        r.input.skeletonId !== t.skeletonId ||
                        r.input.mainObjectType !== t.mainObjectType ||
                        r.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, n) : null, session: n };
                        return (u(o), (0, s.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        r.isReady !== l ||
                        r.input.displayReasonId !== t.displayReasonId ||
                        r.input.pageIdForFrom !== t.pageIdForFrom ||
                        r.input.pagePlacement !== t.pagePlacement ||
                        r.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...r, input: t, isReady: l, scope: l ? i.createScreenScope(t, r.session) : null };
                        return (u(n), (0, s.jsx)(a.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(a.k, { value: r, children: e });
                },
            );
        },
        80715: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var s = i(88800),
                n = i(53548),
                a = i(87999),
                l = i(49784),
                o = i(7833),
                r = i(47934),
                c = i(41911);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: n,
                        title: d,
                        description: u,
                        playlists: m,
                        containerClassName: p,
                        className: _,
                        headerClassName: h,
                        viewAllActionLink: k,
                        headingVariant: x,
                        shouldSendAnalyticsOnLoaded: g,
                        ...C
                    } = e;
                    return (
                        (0, l.W)({ enabled: !!g && !i }),
                        (0, s.jsx)(r.O, {
                            isShimmerVisible: i,
                            isShimmerActive: n,
                            className: _,
                            headerClassName: h,
                            containerClassName: p,
                            ref: t,
                            title: d,
                            description: u,
                            viewAllActionLink: k,
                            headingVariant: x,
                            ...C,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, s.jsx)(
                                              o.B,
                                              {
                                                  objectType: a.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, s.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, n.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var s = i(88800),
                n = i(96706),
                a = i(53548),
                l = i(2058),
                o = i(79390),
                r = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let p = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [p, _] = (0, a.useState)(!1),
                    { formatMessage: h } = (0, l.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: r.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let l = await e.toggleLike();
                    (_(!1),
                        l === o.f.OK
                            ? i((0, s.jsx)(m.T, { playlist: a }), { containerId: r.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: r.u.ERROR }));
                }, [t.isAuthorized, p, e, h, i]);
            };
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => s.X, m5: () => n.m });
            var s = i(46606),
                n = i(91136),
                a = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: n = {}, ...a } = t,
                        l = e || 'Internal error';
                    (super(l, a), (this.message = l), (this.code = i), (this.data = n), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class n extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, n.prototype));
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
            i.d(t, { C8: () => a, UC: () => l, dM: () => o, uV: () => r });
            var s = i(89916),
                n = i(67990);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof s.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                r = (e) => {
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
                7908, 4700, 1147, 2691, 3248, 5038, 7065, 4555, 1191, 7072, 505, 8655, 1061, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 7746,
                4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 7934, 763, 2670, 7358,
            ],
            () => e((e.s = 34430)),
        ),
            (_N_E = e.O()));
    },
]);
