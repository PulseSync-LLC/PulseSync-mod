(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3547],
    {
        2345: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => m });
            var r = i(53548),
                a = i(78793),
                n = i(92716),
                s = i(99984),
                l = i(90780),
                o = i(29993),
                c = i(65523),
                d = i(37436),
                u = i(14518),
                _ = i(91248);
            let m = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, r.useRef)(!1),
                    m = (0, r.useRef)(!1),
                    v = (0, l.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, l.gf)(),
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: b } = (0, u.$)(),
                    { tabId: C, tabPos: T, isTabSelectedByDefault: f } = (0, _.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let r = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || n.PageStyles.Fullscreen,
                        pagePlacement: b || n.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== C && ((r.tabId = C), (r.tabPos = T), (r.isTabSelectedByDefault = f));
                    let l = (0, a.F)({ params: r, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !i.current && ((0, s.w5)(v.evgenInstance, l), (i.current = !0)), e || m.current || ((0, s.XB)(v.evgenInstance, l), (m.current = !0)));
                });
            };
        },
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        4476: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => o });
            var r = i(88800),
                a = i(53548),
                n = i(54020),
                s = i(8840),
                l = i(80566);
            let o = (e) => {
                let { children: t } = e,
                    i = (0, a.useRef)({}),
                    o = (0, a.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = i.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            (r.callback(!0, e), (r.showed = !0), (r.viewUuid = e));
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    (!e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, a.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, a.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(33719);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
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
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        9739: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => k });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(17392),
                o = i(79070),
                c = i(29832),
                d = i(29504),
                u = i(76675),
                _ = i(34500),
                m = i(28830),
                v = i(14518),
                p = i(47964),
                h = i(72288),
                x = i(52726),
                g = i(56862),
                y = i(16704),
                b = i(16112),
                C = i(45347),
                T = i(45213),
                f = i.n(T);
            let k = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: T = 3, className: k } = e,
                    { pageId: A } = (0, v.$)(),
                    { blockIdForFrom: j } = (0, _.N)(),
                    { ref: I, intersectionPropertyId: N } = (0, m.n)(),
                    { freeAccess: L } = (0, h.g)(),
                    [P, R] = (0, s.useState)(!1),
                    w = (0, b.A)(t),
                    { isPlaying: O, togglePlay: S } = (0, p.B)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: j }),
                    E = (0, u.b)(),
                    B = (0, s.useCallback)(() => {
                        L.isVibeStartRestricted || (S(), E(!O));
                    }, [L.isVibeStartRestricted, S, E, O]),
                    M = (0, s.useCallback)(
                        () =>
                            (0, r.jsx)(
                                y.D,
                                {
                                    className: (0, a.$)(f().playButton, f().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: B,
                                    isPlaying: O,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, B, O],
                    ),
                    V = (0, o.L)(() =>
                        (0, r.jsx)(
                            x.S,
                            {
                                isEnabled: L.isVibeStartRestricted,
                                isOpened: P,
                                onOpenChange: R,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: M,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    z = (0, o.L)(() =>
                        (0, r.jsx)(g.O, { onClick: w, isPinned: t.isPinned, className: (0, a.$)(f().pinButton, f().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    D = (0, o.L)(() =>
                        (0, r.jsxs)('div', {
                            className: f().cover,
                            onClick: B,
                            children: [
                                t.agent && (0, r.jsx)(C.s, { agent: t.agent, isPlaying: O }),
                                (0, r.jsx)(c.hg, { isVisible: P, className: f().controls, playControl: i ? V : void 0, pinControl: z }),
                            ],
                        }),
                    );
                return (0, r.jsx)(c.MN, {
                    ref: I,
                    className: (0, a.$)(f().root, k),
                    'data-intersection-property-id': N,
                    contentLinesCount: T,
                    view: D,
                    textPosition: 'center',
                    wrapperClassName: (0, a.$)({ [f().additionals_hide]: !n }),
                    title: (0, r.jsx)(d.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        d.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': l.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                _ = i(29504),
                m = i(13946),
                v = i(55693),
                p = i(72288),
                h = i(24548),
                x = i(85587),
                g = i(90224),
                y = i(91292),
                b = i(7608),
                C = i(6667),
                T = i(85463),
                f = i(65462),
                k = i.n(f);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: f,
                        withExplicitMark: A,
                        withSecondaryColor: j,
                        captionSize: I = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: P,
                        artistsClassName: R,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: O = !0,
                        hasLineClamp: S = !0,
                        withSavingQueryParams: E,
                        beforeTitle: B,
                        withArtistLink: M,
                        variant: V,
                        withTrackLink: z,
                        afterTitle: D,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: K } = (0, l.A)(),
                    { sendNavigateSearchFeedback: F } = (0, v.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: H,
                    } = (0, p.g)(),
                    W = (0, C.$)({ withCustomTooltip: O }),
                    q = (0, o.useSearchParams)(),
                    Y = (0, b.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: z,
                        withArtistLink: M,
                        variant: V,
                        withExplicitMark: A,
                        query: E ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: G,
                        tooltipText: Z,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, Y, { canEnableCustomTooltip: W, isMobile: $ }, K),
                    et = (0, T.O)({ track: n, onNavigate: F, withSavingQueryParams: E, entityType: x.n.TRACK }),
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(k().text, k().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [I, X, Z, ee],
                    ),
                    er = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(k().text, k().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: X,
                                  }),
                              })
                            : Y.link
                              ? (0, r.jsx)(y.N, {
                                    onClick: et,
                                    className: k().albumLink,
                                    href: Y.link.href,
                                    'aria-label': G,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, s.useMemo)(() => +!!S, [S]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_disliked]: n.isDisliked && !w, [k().root_withSecondaryColor]: j }, t),
                    children: (0, r.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(k().titleContainer, { [k().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(k().text, P),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            B,
                                            er,
                                            Y.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: N,
                                            variant: Y.explicitMark,
                                            className: k().explicitMark,
                                            trackId: n.id,
                                        }),
                                    D,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, a.$)(k().text, { [k().artists]: S }, R, P),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, a.$)(k().text, k().link),
                                    captionClassName: (0, a.$)(k().text, k().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: I,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => j });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(42078),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(65724),
                m = i(84961),
                v = i(17392),
                p = i(79070),
                h = i(90688),
                x = i(97956),
                g = i(90420),
                y = i(15077),
                b = i(33719),
                C = i(55211),
                T = i(14329),
                f = i.n(T);
            let k = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: a } = (0, d.g)(),
                    n = a.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === g.q7,
                    l = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, r.jsx)(C.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(f().view, { [f().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [f().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [f().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [f().multivibeControl]: s }),
                              })
                            : (0, r.jsx)(h._V, {
                                  className: f().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': v.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    o = n && t.agent ? void 0 : 'round';
                return (0, r.jsx)(b.k, {
                    closeToast: i,
                    entityVariant: y.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: l,
                    radius: o,
                    className: f().root,
                });
            });
            var A = i(93512);
            let j = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = (0, a.HO)(i.get(e.pinId));
                    p(!0);
                    let c = await e.togglePin();
                    (p(!1),
                        s &&
                            s.type === l._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = s.data.backgroundImageUrl), (n.colors = s.data.colors), (n.agent = s.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (n.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (n.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (n.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, r.jsx)(k, { vibe: n }), { containerId: o.u.INFO })
                            : _((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [m, _, v, i, t.isAuthorized, e]);
            };
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
        19038: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => b });
            var r = i(88800),
                a = i(84961),
                n = i(53548),
                s = i(2058),
                l = i(88969),
                o = i(50408),
                c = i(96817),
                d = i(52300),
                u = i(17610),
                _ = i(29504),
                m = i(44230),
                v = i(77356),
                p = i(49034),
                h = i(26645),
                x = i(20150),
                g = i.n(x);
            let y = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                b = (0, a.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: a } = e,
                        { formatMessage: x } = (0, s.A)(),
                        { contentRef: b } = (0, m.g)(),
                        { setIsOnboardingOpened: C } = (0, h.w)(),
                        [T, f] = (0, o.d)(),
                        k = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: T }) || !!a,
                        [A, j] = (0, n.useState)(k),
                        I = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), j(!1), C(!1));
                            },
                            [C],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                e || I();
                            },
                            [I],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: y,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: A,
                        onOpenChange: N,
                        enableAriaDescribedby: !0,
                        referenceRef: f,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: g().root,
                                rootNode: b,
                                children: [
                                    (0, r.jsx)(c.$, {
                                        icon: (0, r.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: I,
                                        variant: 'text',
                                        className: g().close,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(_.HL, {
                                        variant: 'span',
                                        className: g().text,
                                        children: i || (0, r.jsx)(l.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        20150: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                _ = i(79070),
                m = i(29832),
                v = i(52300),
                p = i(7555),
                h = i(29504),
                x = i(91959),
                g = i(64207),
                y = i(77455),
                b = i(5407),
                C = i(96527),
                T = i(76675),
                f = i(25557),
                k = i(28830),
                A = i(84384),
                j = i(4795),
                I = i(78940),
                N = i(55693),
                L = i(39079),
                P = i(72288),
                R = i(81877),
                w = i(49738),
                O = i(91292),
                S = i(56862),
                E = i(16704),
                B = i(56446),
                M = i(36207),
                V = i(43161),
                z = i(93434),
                D = i.n(z);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: z, topTitleElement: U, bottomTitleElement: K } = e,
                    { ref: F, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: H,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Z, Q] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, N.z)(),
                    es = (0, C.N)(),
                    el = (0, T.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, y.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, I.Z)(t.url),
                    [ep, eh] = (0, s.useState)(!1),
                    ex = (0, f.F)(),
                    eg = (0, b.P)(),
                    ey = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (H.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, G]),
                    { isPlaying: eC, togglePlay: eT } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ef = (0, x.S)({ artist: t, callback: ev }),
                    ek = (0, x.S)({ artist: t, callback: eT }),
                    eA = (0, u.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), ef(e));
                    }),
                    ej = (0, j.N)(),
                    eI = (0, u.c)(() => {
                        if (!eg()) {
                            if (ej) return void q.open();
                            (Z || eC || (Q(!0), null == en || en()), ek(), el(!eC));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (J || em || (ee(!0), null == er || er()), eo());
                    }),
                    eL = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ei(e), eh(e));
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                V.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: et,
                                    onClick: eL,
                                    className: (0, a.$)(D().menuButton, D().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eP, et],
                    ),
                    ew = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(D().trailerButton, D().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ey,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ey]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                S.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(D().pinButton, D().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eS = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ep,
                                    className: D().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(D().playButton, D().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: eC,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        w.c,
                                        {
                                            className: (0, a.$)(D().likeButton, D().control),
                                            isLiked: em,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: ew,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eE = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: D().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: D().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, r.jsx)(R.B, {
                                            className: D().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eS,
                                    ],
                                }),
                            }),
                        [eA, e_, eb, t.isAvailable, eS],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: F,
                    className: (0, a.$)(D().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(O.N, {
                                    className: D().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eA,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: D().srTitleLink, href: t.url, onClick: eA, children: eb }),
                    'data-intersection-property-id': $,
                    contentLinesCount: z,
                    view: eE,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        21284: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, r.jsx)(u.l, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        26645: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a, w: () => n });
            var r = i(53548);
            let a = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(42729);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
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
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35962: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var r = i(88800),
                a = i(37770);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
            };
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                _ = i(79070),
                m = i(29832),
                v = i(52300),
                p = i(7555),
                h = i(29504),
                x = i(13946),
                g = i(85902),
                y = i(24460),
                b = i(5407),
                C = i(96527),
                T = i(76675),
                f = i(25557),
                k = i(28830),
                A = i(84384),
                j = i(4795),
                I = i(78940),
                N = i(55693),
                L = i(39079),
                P = i(72288),
                R = i(86298),
                w = i(81877),
                O = i(49738),
                S = i(91292),
                E = i(56862),
                B = i(16704),
                M = i(56446),
                V = i(36207),
                z = i(47513),
                D = i(19934),
                U = i(48749),
                K = i(22505),
                F = i(9618),
                $ = i(95210),
                H = i(46936),
                W = i(97956),
                q = i(93091),
                Y = i(27817),
                X = i(15425);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, F.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: v },
                        trailer: p,
                        user: h,
                    } = (0, P.g)(),
                    x = (0, g.K)(i),
                    C = (0, y.A)(i),
                    T = (0, f.F)(),
                    { formatMessage: k } = (0, l.A)(),
                    A = (0, b.P)(),
                    j = m.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    I = (0, U.A)({ entityVariant: H.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let N = (0, u.c)(() => {
                    if (d) return void _();
                    A() || (p.openPlaylistTrailer(i.id), T(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, r.jsxs)(D.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        j && (0, r.jsx)(K.d, { entityVariant: H.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : I }),
                        !v && (0, r.jsx)(Y.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(D.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(17657),
                Q = i.n(Z);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: D, customDescription: U, onCoverMouseDown: K } = e,
                    { ref: F, intersectionPropertyId: $ } = (0, k.n)(),
                    {
                        trailer: H,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    [ea, en] = (0, s.useState)(!1),
                    [es, el] = (0, s.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, g.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, C.N)(),
                    e_ = (0, T.b)(),
                    em = (0, I.Z)(i.url),
                    ev = (0, f.F)(),
                    ep = (0, b.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (H.setUtmLink(X), H.openPlaylistTrailer(i.id), ev(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, eg] = (0, s.useState)(!1),
                    { isPlaying: ey, togglePlay: eb } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eT = (0, u.c)((e) => {
                        (eC(), em(e));
                    }),
                    ef = (0, j.N)(),
                    ek = (0, u.c)(() => {
                        if (!ep()) {
                            if (ef) return void q.open();
                            (ei || ey || (er(!0), null == et || et()), eb(), e_(!ey));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (ea || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (el(e), eg(e));
                    }),
                    eN = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                O.c,
                                {
                                    className: (0, a.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                V.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eT,
                                    onMouseDown: K,
                                    children: [
                                        (0, r.jsx)(w.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: es || ex,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                B.D,
                                                {
                                                    className: (0, a.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ek,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: es,
                                                    onClick: ej,
                                                    className: (0, a.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, K, i, eo, es, ex, ek, ey, eL, eI, ej, eR, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: F,
                    'aria-label': eo,
                    className: (0, a.$)(Q().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(S.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(S.N, { className: Q().srTitleLink, href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': $,
                    contentLinesCount: D,
                    view: ew,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
                    ],
                });
            });
        },
        42078: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var r = i(88800),
                a = i(84961),
                n = i(2058),
                s = i(92716),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                v = i(79390),
                p = i(29595),
                h = i(74965),
                x = i(72288),
                g = i(66943),
                y = i(7555),
                b = i(73170),
                C = i(29504),
                T = i(59304),
                f = i(81877),
                k = i(85074),
                A = i.n(k);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(T.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, r.jsx)(b.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(y.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, r.jsx)(f.B, { className: A().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(C.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                N = i(77455),
                L = i(48749),
                P = i(22505),
                R = i(5407),
                w = i(64284),
                O = i(12816),
                S = i(25557),
                E = i(84384),
                B = i(9618),
                M = i(95210),
                V = i(47964),
                z = i(46936),
                D = i(97956),
                U = i(98953),
                K = i(32721),
                F = i(18130),
                $ = i(56117),
                H = i(93091),
                W = i(27817),
                q = i(74064),
                Y = i(15425),
                X = i(81066),
                G = i(64546);
            let Z = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: y, onOpenChange: b, open: C, ...T } = e,
                    { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: k } = (0, B.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(y),
                    ei = (0, I.K)(y),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, h.l)(),
                            [a, s] = (0, m.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let n = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(j, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(y),
                    ea = (0, S.F)(),
                    en = ''.concat(w.U.ARTIST, '-').concat(null == y ? void 0 : y.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, E.f)({ blockId: w.U.ARTIST, contextType: o.K.Artist, contextId: null == y ? void 0 : y.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == y ? void 0 : y.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == y ? void 0 : y.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, V.B)({
                        seeds: null != (a = null == y ? void 0 : y.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == y ? void 0 : y.id,
                    }),
                    em = (0, R.P)(),
                    ev = es((null == y ? void 0 : y.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (f && J.isAuthorized) return void k();
                        eu || e_();
                    }),
                    eh = (0, c.c)(() => {
                        if (!em()) {
                            if (f) return void k();
                            (null == y ? void 0 : y.id) && (Q.setUtmLink(el), Q.openArtistTrailer(y.id), ea(s.DomainObjectType.Artist, y.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Z.open(null == y ? void 0 : y.id);
                    });
                (0, M.N)(C);
                let eg = { variant: U.Y.ARTIST, id: null == y ? void 0 : y.id, title: null == y ? void 0 : y.name, path: ec },
                    ey = ee.checkExperiment(D.z.WebEditorsFeatures, 'on'),
                    eb = null == y || null == (t = y.trailer) ? void 0 : t.isAvailable,
                    eC = ee.checkExperiment(D.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(D.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ey && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(P.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !A && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == y ? void 0 : y.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(H.T, {
                                onClick: ei,
                                isLiked: null == y ? void 0 : y.isLiked,
                                disabled: !J.isAuthorized || !(null == y ? void 0 : y.isAvailable),
                            }),
                        }),
                        eb && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(Y.N, { onClick: eh }) }),
                        eT &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(X.C, { onClick: ep, disabled: !(null == y ? void 0 : y.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: b }),
                            }),
                        (0, r.jsx)(q.H, { disabled: !y, shareLink: eo, entityMeta: eg }),
                        eC &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)($.D, { onClick: er, isDisliked: null == y ? void 0 : y.isDisliked, disabled: !(null == y ? void 0 : y.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        45213: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(88800),
                a = i(13758),
                n = i(57249),
                s = i(65724),
                l = i(84961),
                o = i(6087),
                c = i(53548),
                d = i(17392),
                u = i(21284),
                _ = i(29993),
                m = i(79070),
                v = i(78275),
                p = i(90688),
                h = i(19994),
                x = i(69704),
                g = i(35412);
            let y = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var b = i(8655);
            let C = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var T = i(68817),
                f = i.n(T),
                k = i(49124);
            let A = o.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = k.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(n, e).href);
            }
            let j = (0, l.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [n, l] = (0, c.useState)(null),
                    { state: o, toggleTrue: T } = (0, v.e)(!1),
                    { state: k, toggleTrue: j, toggleFalse: I } = (0, v.e)(!1),
                    { theme: N } = (0, x.W)(),
                    L = (0, c.useRef)(null),
                    P = t.entityType === u.h.ARTIST,
                    R = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    w = t.cover.color,
                    O = t.cover.uri,
                    S = (0, _.c)(async () => {
                        if (o) {
                            if (!w) return void j();
                            if (N) {
                                I();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: r,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: r } = e,
                                            { h: a, s: n, l: s } = (0, g.g8)(t);
                                        if (r) {
                                            if (i === b.S.Dark) {
                                                let e = C(n + 5, 50, 100);
                                                return { color: y(a, e, C(s - 40, 12, 25)), glow1: y(a, e, C(s - 5, 45, 60)), glow2: y(a, e, C(s + 35, 80, 90)) };
                                            }
                                            let e = C(n - 2, 50, 100);
                                            return { color: y(a, e, C(s + 43, 80, 95)), glow1: y(a, e, C(s + 5, 45, 75)), glow2: y(a, e, C(s, 35, 55)) };
                                        }
                                        return { color: y(a, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100) };
                                    })({ averageColor: w, theme: N, custom: !t.entityType }),
                                    a = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: r },
                                        ],
                                    });
                                (await (null == n ? void 0 : n.setThemeData(a)), j());
                            }
                        }
                    }),
                    E = (0, _.c)(() => {
                        (T(), S());
                    });
                ((0, c.useEffect)(() => {
                    i ? null == n || n.play() : null == n || n.pause();
                }, [n, i]),
                    (0, c.useEffect)(() => {
                        S();
                    }, [w, S, N, o]),
                    (0, c.useEffect)(() => {
                        if (n)
                            return (
                                n.setUseFrameInterpolation(!1),
                                n.setRenderConfig({ devicePixelRatio: 0.1 }),
                                n.addEventListener('load', E),
                                () => {
                                    n.removeEventListener('load', E);
                                }
                            );
                    }, [n, E]));
                let B = !o || !k,
                    M = (0, m.L)(() => {
                        if (!L.current) return;
                        let e = P ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(L.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: L,
                    className: (0, s.$)(f().root, a, { [f().root_loading]: B }),
                    style: M,
                    'data-test-id': B ? d.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(f().cover, { [f().cover_round]: P, [f().cover_square]: R, [f().cover_loading]: B }),
                            children: [
                                t.entityType &&
                                    O &&
                                    (0, r.jsx)(p._V, { src: O, size: 200, fit: 'cover', withAvatarReplace: !0, className: f().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(A, { src: t.animationUri, loop: !0, dotLottieRefCallback: l, className: f().animation }),
                            ],
                        }),
                        (0, r.jsx)(h.W, { className: (0, s.$)(f().shimmer, { [f().shimmer_loading]: B }), isActive: !0, radius: P ? 'round' : 'm' }),
                    ],
                });
            });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(53548),
                a = i(2058);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        47934: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => y });
            var r = i(88800),
                a = i(65724),
                n = i(53548),
                s = i(35412),
                l = i(92716),
                o = i(79070),
                c = i(53323),
                d = i(19994),
                u = i(34500),
                _ = i(77948),
                m = i(18486),
                v = i(31764),
                p = i(35962),
                h = i(2350),
                x = i.n(h);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: g,
                            isShimmerWithSubcover: y,
                            isShimmerCentered: b,
                            isShimmerRounded: C,
                            title: T,
                            description: f,
                            coverUrl: k,
                            viewAllActionLink: A,
                            titleChildren: j,
                            headerChildren: I,
                            children: N,
                            className: L,
                            containerClassName: P,
                            headerClassName: R,
                            itemClassName: w,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: S = !0,
                            showControls: E = !0,
                            headingRef: B,
                            headingVariant: M,
                            customShimmer: V,
                            ...z
                        } = e,
                        D = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        F = (0, n.useMemo)(
                            () =>
                                O && h
                                    ? (0, r.jsx)('div', { className: R, children: (0, r.jsx)(d.W, { isActive: g, className: x().shimmerTitle, radius: 'l' }) })
                                    : T || f || j || I
                                      ? (0, r.jsx)(_.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(A),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, r.jsx)(m.T, {
                                                className: R,
                                                labeledForId: D,
                                                title: T,
                                                description: f,
                                                coverUrl: k,
                                                viewAllActionLink: A,
                                                controls: E && (0, r.jsx)(v.X, { className: x().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: M,
                                                withDescription: !!f,
                                                titleChildren: j,
                                                children: I,
                                            }),
                                        })
                                      : void 0,
                            [k, f, R, B, M, D, g, h, K, E, O, T, j, I, A],
                        ),
                        $ = (0, o.L)(() => V || (0, p.k)({ className: i, isActive: g, withInfo: S, withSubcover: y, centered: b, round: C }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(x().root, L),
                        ...(0, s.OZ)(z),
                        children: [
                            F,
                            (0, r.jsx)(c.F, {
                                className: P,
                                ref: U,
                                itemClassName: (0, a.$)(x().item, x().important, w),
                                'aria-labelledby': ''.concat(D, ' ').concat(D, '-description'),
                                children: h ? $ : N,
                            }),
                        ],
                    });
                },
                y = (0, n.forwardRef)((e, t) => (0, r.jsx)(g, { forwardRef: t, ...e }));
        },
        49034: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var r = i(53548),
                a = i(8840),
                n = i(4086),
                s = i(41928),
                l = i(39318),
                o = i(26645);
            let c = (e) => {
                var t;
                let { id: i, ref: c, intersectionPropertyId: d = l.N } = e,
                    { config: u, isOnboardingOpened: _, setIsOnboardingOpened: m } = (0, o.w)(),
                    v = (0, r.useRef)(!1),
                    p = (0, a.BL)([{ current: c }], !c),
                    { isIntersecting: h } = null != (t = p[d]) ? t : {},
                    x = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: a } of ((0, r.useEffect)(() => {
                    if (v.current && h) {
                        let e = u.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && x.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [u, i, h, x, p, c]),
                u)) {
                    let r = x.get(t);
                    if (a) {
                        if (null == _ ? void 0 : _.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return ((v.current = !0), m(!0), !0);
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        50493: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var r = i(88800),
                a = i(84961),
                n = i(53548),
                s = i(92716),
                l = i(42078),
                o = i(10079),
                c = i(21256),
                d = i(41911),
                u = i(9739),
                _ = i(28163),
                m = i(77948),
                v = i(99839),
                p = i(47934);
            let h = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: g,
                            meta: y,
                            data: b,
                            headingVariant: C,
                            className: T,
                            isLoaded: f,
                            shouldSendAnalyticsOnLoaded: k,
                            hasSentAnalyticsOnLoaded: A,
                            setHasSentAnalyticsOnLoaded: j,
                            ...I
                        } = e,
                        N = (0, _.f)();
                    return (
                        (0, n.useEffect)(() => {
                            k && !A && f && (N(), j(!0));
                        }, [A, f, N, j, k]),
                        (0, r.jsx)(p.O, {
                            className: T,
                            ...I,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: g,
                            title: y.title,
                            description: y.description,
                            viewAllActionLink: y.viewAllActionLink,
                            ref: i,
                            headingVariant: C,
                            children:
                                null == b || null == (t = b.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case l._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, r.jsx)(o.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, r.jsx)(c.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case l._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, r.jsx)(u.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case l._.PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: b.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case l._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                x = (0, n.forwardRef)((e, t) => (0, r.jsx)(h, { forwardRef: t, ...e }));
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var r = i(5120),
                a = i(31510);
            let n = (e) => {
                let t = (0, a.e)(e);
                return (0, r.wg)(t);
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                a = i(4370),
                n = i(15077),
                s = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var r = i(88800),
                a = i(65724),
                n = i(21284),
                s = i(79070),
                l = i(39267),
                o = i(85925),
                c = i.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: o,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(34970),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: l,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        readOnly: v = !1,
                        'aria-label': p,
                        'data-test-id': h,
                    } = e,
                    [x, g] = (0, s.useState)(i),
                    y = (0, s.useRef)(!1),
                    b = (0, s.useRef)(null),
                    C = (0, s.useCallback)((e) => {
                        g(e.target.value);
                    }, []),
                    T = (0, s.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (y.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    f = (0, s.useCallback)(() => {
                        let e = x.trim();
                        y.current || (l && e.length < l) ? ((y.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [x, y, l, _, i]);
                ((0, s.useEffect)(() => {
                    b.current && ((b.current.selectionStart = b.current.value.length), (b.current.selectionEnd = b.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = b.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [b, x]));
                let k = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, r.jsx)('textarea', { ref: b, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [c]);
                return (0, r.jsx)(k, {
                    className: (0, a.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: m }),
                    type: 'text',
                    value: x,
                    readOnly: v,
                    maxLength: n,
                    onBlur: f,
                    onChange: C,
                    onKeyDown: T,
                    placeholder: u,
                    'aria-label': p,
                    autoFocus: !0,
                    'data-test-id': h,
                });
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(_.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, p, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => n });
            var r = i(53548);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        77356: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, s.A)(),
                    [m, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, r.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var r = i(88800),
                a = i(53548),
                n = i(90134);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, s, l, o, c, d, u],
                    );
                return (0, r.jsx)(n.l.Provider, { value: m, children: _ });
            };
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var r,
                a = i(53548),
                n = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var r = (s[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(810);
                l.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: n, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        82204: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var r = i(88800),
                a = i(53548),
                n = i(43620);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, s, l, o, c, d, u, m],
                    );
                return (0, r.jsx)(n.p.Provider, { value: v, children: _ });
            };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(_.T, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, p, i]);
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var r = i(51231);
            let a = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        99564: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(88800),
                a = i(53548),
                n = i(67046);
            let s = (e) => {
                let { tabId: t, tabPos: i, children: s, isTabSelectedByDefault: l } = e,
                    o = (0, a.useMemo)(() => ({ tabId: t, tabPos: i, isTabSelectedByDefault: l }), [t, i, l]);
                return (0, r.jsx)(n.F.Provider, { value: o, children: s });
            };
        },
    },
]);
