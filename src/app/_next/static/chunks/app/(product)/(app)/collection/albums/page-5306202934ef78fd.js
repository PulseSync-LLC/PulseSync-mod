(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7980],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        400: (e) => {
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
        6104: (e, t, l) => {
            'use strict';
            l.d(t, { P: () => y });
            var a = l(25839),
                s = l(33660),
                i = l(74631),
                o = l(39004),
                r = l(45162),
                n = l(91149),
                c = l(92942),
                u = l(27954),
                m = l(57549),
                d = l(82298),
                _ = l(8487),
                b = l(61493),
                h = l(69084),
                p = l(4254),
                x = l(34582),
                g = l(6323),
                A = l(97522),
                C = l(51790),
                v = l(54239),
                N = l.n(v);
            let E = (e) => {
                    let { closeToast: t, albumTitle: l, coverUri: s, isPresave: r, entityTitle: n, className: c } = e,
                        { formatMessage: u } = (0, o.A)(),
                        m = (0, i.useMemo)(
                            () => (r ? (0, a.jsx)(_.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(_.A, { id: 'notifications-info.removed-from' })),
                            [r],
                        ),
                        v = (0, i.useMemo)(
                            () => (r ? (0, a.jsx)(_.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(_.A, { id: 'notifications-info.from-collection' })),
                            [r],
                        ),
                        E = (0, i.useMemo)(
                            () =>
                                r
                                    ? u({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : u({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [r, n, u],
                        ),
                        L = (0, i.useMemo)(
                            () =>
                                (0, a.jsxs)(p.HL, {
                                    className: N().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': b.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(_.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(p.HL, { className: N().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(A.N, {
                                            className: N().link,
                                            href: '/collection/albums?tab='.concat(x.H.UPCOMING_ALBUMS),
                                            title: String(v),
                                            children: (0, a.jsx)(p.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: v }),
                                        }),
                                    ],
                                }),
                            [n, m, v],
                        );
                    return (0, a.jsx)(C.$, {
                        className: (0, d.$)(N().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(h.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': E }) }), L] }),
                        cover: (0, a.jsx)(g.B, { className: N().image, src: s, size: 100, fit: 'cover', alt: l, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                L = (e) => {
                    let { upcomingAlbum: t, closeToast: l } = e;
                    return (0, a.jsx)(E, { closeToast: l, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                y = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: l } = (0, c.l)(),
                        [d, _] = (0, i.useState)(!1),
                        { formatMessage: b } = (0, o.A)();
                    return (0, i.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void l((0, a.jsx)(m.h, { error: b({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (d) return;
                        let i = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        _(!0);
                        let o = await e.toggleLike();
                        (_(!1),
                            o === r.J.OK
                                ? l((0, a.jsx)(L, { upcomingAlbum: i }), { containerId: n.u.INFO })
                                : l((0, a.jsx)(m.h, { error: b({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, d, e, l, b]);
                };
        },
        6968: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => p });
            var a = l(25839),
                s = l(82298),
                i = l(28631),
                o = l(74631);
            let r = (e) => {
                    let { style: t, forwardRef: l, context: s, ...i } = e,
                        o = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        r = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': o, style: { ...t }, ref: l, ...i });
                },
                n = (0, o.forwardRef)((e, t) => (0, a.jsx)(r, { forwardRef: t, ...e }));
            var c = l(45300),
                u = l.n(c);
            let m = (e) => {
                    let { style: t, forwardRef: l, withFooter: i, withHeader: o, withForceScroll: r, ...n } = e;
                    return (0, a.jsx)('div', {
                        className: (0, s.$)(u().scroller, { [u().scroller_withFooter]: i, [u().scroller_withHeader]: o, [u().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: l,
                        ...n,
                        tabIndex: -1,
                    });
                },
                d = (0, o.forwardRef)((e, t) => (0, a.jsx)(m, { forwardRef: t, ...e }));
            var _ = l(10508),
                b = l(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: s,
                            debounceDurationInMs: i = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...m
                        } = e,
                        [d, h] = (0, o.useState)(null),
                        p = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == s || s(e), n.length > 0 && h(e), t && l)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < a; e++) l(e);
                                    }
                                }, i),
                            [i, s, t, l, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && d && p(d);
                    }, n);
                    let x = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, a.jsx)(b.sN, { ref: u, rangeChanged: p, totalCount: r, endReached: x, ...m });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: m,
                            itemContentCallback: _,
                            listClassName: b,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: A,
                            debounceDurationInMs: C,
                            initialItemCount: v,
                            minInitialItemCount: N = 20,
                            handleRef: E,
                            alwaysShowScrollbar: L = !1,
                            testId: y,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...P
                        } = e,
                        [f, j] = (0, o.useState)(!1),
                        M = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        k = (0, o.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: d,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : n,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: d,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : n,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, A, I]),
                        O = v ? Math.min(v, N) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(u().root, { [u().root_scrolling]: f || L, [u().root_notScrolling]: !f && !L }, t),
                        'data-test-id': y,
                        children: [
                            I && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, a.jsx)(h, {
                                overscan: p,
                                components: k,
                                listClassName: b,
                                itemClassName: m,
                                isScrolling: M,
                                itemContent: _,
                                scrollerRef: E,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: S,
                                ...P,
                            }),
                            I && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        6969: (e, t, l) => {
            'use strict';
            l.d(t, { K: () => a });
            var a = (function (e) {
                return (
                    (e.TAB = 'tab'),
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
        10959: (e, t, l) => {
            'use strict';
            l.d(t, { v: () => s });
            var a = l(44806);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: l, getExplicitContent: s, userRegion: i } = e;
                return 'ru' === i && t(a.z.WebNextFooterDisclaimer, 'on') ? l() : s();
            };
        },
        14808: (e, t, l) => {
            (Promise.resolve().then(l.bind(l, 30871)), Promise.resolve().then(l.bind(l, 40869)));
        },
        16978: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => _ });
            var a = l(25839),
                s = l(84059),
                i = l(8487),
                o = l(61493),
                r = l(71035),
                n = l(4071),
                c = l(4254),
                u = l(57024),
                m = l(36484),
                d = l(62562);
            let _ = (e) => {
                let { size: t = 'm', variant: l = 'default', color: _ = 'primary', withRipple: b = !0, buttonText: h, isBlock: p, key: x, className: g } = e,
                    A = (0, s.useRouter)(),
                    C = (0, d.N)().get(m.QG),
                    v = (0, r.c)(() => {
                        C.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), A.push(C.authorizationUrl));
                    });
                return (0, a.jsx)(
                    n.$,
                    {
                        onClick: v,
                        className: g,
                        isBlock: p,
                        color: _,
                        variant: l,
                        size: t,
                        radius: 'xxxl',
                        withRipple: b,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        20916: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageContent_root__2Ya18',
                scrollContainer: 'CollectionAlbumsPageContent_scrollContainer__0TjJm',
                important: 'CollectionAlbumsPageContent_important__fixM8',
                content: 'CollectionAlbumsPageContent_content__jcwRU',
                footer: 'CollectionAlbumsPageContent_footer__ZkUKY',
                item: 'CollectionAlbumsPageContent_item__I_Wuz',
                tabPanel: 'CollectionAlbumsPageContent_tabPanel__0qXKZ',
            };
        },
        22794: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        23782: (e, t, l) => {
            'use strict';
            l.d(t, { M: () => I });
            var a = l(25839),
                s = l(82298),
                i = l(88204),
                o = l(74631),
                r = l(39004),
                n = l(8487),
                c = l(61493),
                u = l(49656),
                m = l(4071),
                d = l(51246),
                _ = l(66738),
                b = l(86869),
                h = l(4254),
                p = l(6104),
                x = l(4331),
                g = l(52512),
                A = l(98288),
                C = l(27954),
                v = l(6323),
                N = l(62926),
                E = l(64720),
                L = l(22794),
                y = l.n(L);
            let I = (0, i.PA)((e) => {
                let { className: t, children: l, upcomingAlbum: i, contentLinesCount: L } = e,
                    { user: I } = (0, C.g)(),
                    { ref: S, intersectionPropertyId: P } = (0, g.n)(),
                    { formatMessage: f, formatDate: j } = (0, r.A)(),
                    M = (0, p.P)(i),
                    k = i.getKey('PlayButton'),
                    O = i.getKey('LikeButton'),
                    R = (0, o.useMemo)(() => {
                        let e = f({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: i.title }),
                            t = i.isPresave ? f({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [f, i.title, i.isPresave]),
                    T = (0, u.L)(() =>
                        (0, a.jsxs)(b.t, {
                            className: y().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(v.B, { className: y().image, src: i.coverUri, size: 200, fit: 'cover', alt: R, withAvatarReplace: !0 }),
                                (0, a.jsx)(d.hg, {
                                    className: y().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: y().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(_.I, { variant: 'lock', size: 'xxs', className: y().lockIcon }),
                                            'aria-label': f({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        k,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        E.c,
                                        {
                                            className: (0, s.$)(y().control, y().presaveButton),
                                            isLiked: i.isPresave,
                                            onClick: M,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !I.isAuthorized,
                                        },
                                        O,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(d.MN, {
                    ref: S,
                    className: (0, s.$)(y().root, t),
                    'aria-label': R,
                    explicitMarkComponent: i.explicitDisclaimer && (0, a.jsx)(N.N, { getDescriptionTexts: i.getDescriptionTexts, variant: i.explicitDisclaimer }),
                    title: (0, a.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: i.title,
                    }),
                    'data-intersection-property-id': P,
                    contentLinesCount: L,
                    view: T,
                    description: (0, a.jsx)(x.i, { className: y().artists, artists: i.artists, lineClamp: 1, linkClassName: y().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(h.HL, {
                            className: y().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: j(i.releaseDate, (0, A.s)()) } }),
                        }),
                        l,
                    ],
                });
            });
        },
        26076: (e, t, l) => {
            'use strict';
            l.d(t, { A: () => o });
            var a = l(25839);
            l(93588);
            var s = l(400),
                i = l.n(s);
            let o = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: i().empty });
            };
        },
        30871: (e, t, l) => {
            'use strict';
            l.d(t, { WithAuth: () => h });
            var a = l(25839),
                s = l(88204),
                i = l(84059),
                o = l(82298),
                r = l(8487),
                n = l(4254),
                c = l(16978),
                u = l(148),
                m = l.n(u);
            let d = (0, s.PA)(() =>
                (0, a.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, a.jsx)(n.DZ, {
                            className: (0, o.$)(m().title, m().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(n.HL, {
                            className: (0, o.$)(m().text, m().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(c.H, { size: 'l', className: m().button }),
                    ],
                }),
            );
            var _ = l(53712),
                b = l(27954);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: l } = e,
                    { user: s } = (0, b.g)();
                return s.isAuthorized ? t : (l && (0, i.redirect)(_.Z.main.href), (0, a.jsx)(d, {}));
            });
        },
        34582: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        39744: (e) => {
            e.exports = { root: 'CollectionAlbumsPage_root__qMtcC' };
        },
        40869: (e, t, l) => {
            'use strict';
            l.d(t, { CollectionAlbumsPage: () => el });
            var a = l(25839),
                s = l(88204),
                i = l(84059),
                o = l(74631),
                r = l(61493),
                n = l(5867),
                c = l(1407),
                u = l(20258),
                m = l(10322),
                d = l(89192),
                _ = l(30716),
                b = l(27954),
                h = l(34582),
                p = l(6969),
                x = (function (e) {
                    return ((e[(e.LIKED_ALBUMS = 0)] = 'LIKED_ALBUMS'), (e[(e.UPCOMING_ALBUMS = 1)] = 'UPCOMING_ALBUMS'), e);
                })({}),
                g = l(39744),
                A = l.n(g),
                C = l(82298),
                v = l(39004),
                N = l(76939),
                E = l(99401),
                L = l(26076),
                y = l(19412),
                I = l(6968),
                S = l(8487),
                P = l(4254),
                f = l(21784),
                j = l(27625),
                M = l(15270),
                k = l(79396),
                O = l(9931),
                R = l(53712),
                T = l(25895),
                U = l(83918);
            let D = (e) => {
                let t = (0, U.X)();
                return (0, o.useCallback)(
                    (l) => {
                        var a;
                        switch ((null == (a = e.onTabChange) || a.call(e, l), l)) {
                            case x.LIKED_ALBUMS: {
                                let { href: e } = (0, T.u)(R.Z.collectionAlbums.href, { query: { tab: h.H.LIKED_ALBUMS } });
                                t(e);
                                break;
                            }
                            case x.UPCOMING_ALBUMS: {
                                let { href: e } = (0, T.u)(R.Z.collectionAlbums.href, { query: { tab: h.H.UPCOMING_ALBUMS } });
                                t(e);
                            }
                        }
                    },
                    [t, e],
                );
            };
            var w = l(81430),
                H = l.n(w),
                B = l(23976);
            let z = () =>
                    (0, a.jsxs)('div', {
                        className: H().tabsShimmer,
                        children: [(0, a.jsx)(B.W, { className: H().tabShimmer }), (0, a.jsx)(B.W, { className: H().tabShimmer })],
                    }),
                F = (0, s.PA)((e) => {
                    var t, l, s;
                    let { tabsState: i, tabElementId: n } = e,
                        { collection: c } = (0, b.g)(),
                        { formatMessage: u } = (0, v.A)(),
                        m = (0, f.W)(),
                        { isScrolling: d } = (0, o.useContext)(j.B),
                        _ = D(i),
                        h = (0, o.useMemo)(
                            () =>
                                c.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(c.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [c.albums.items.length, u],
                        ),
                        p = (0, o.useMemo)(() => {
                            var e;
                            return (null == (e = c.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(c.albums.upcomingAlbums.items.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, a.jsxs)('header', {
                        className: H().root,
                        'aria-hidden': d,
                        'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: H().container,
                                children: [
                                    m.canBack && (0, a.jsx)(M.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !d }),
                                    (0, a.jsx)(P.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: H().title,
                                        'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, a.jsx)(S.A, { id: 'entity-names.favourite-albums' }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(O.wI, {
                                isShimmerVisible: c.albums.isLoading,
                                shimmer: (0, a.jsx)(z, {}),
                                className: H().tabs,
                                elementId: n,
                                ...i,
                                onTabChange: _,
                                children: [
                                    (0, a.jsx)(k.o, {
                                        className: H().tab,
                                        value: x.LIKED_ALBUMS,
                                        title: h,
                                        'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                    (0, a.jsx)(k.o, {
                                        className: H().tab,
                                        value: x.UPCOMING_ALBUMS,
                                        title: p,
                                        'aria-label': u(
                                            { id: 'entity-names.upcoming-albums-count' },
                                            { value: null != (s = null == (l = c.albums.upcomingAlbums.items) ? void 0 : l.length) ? s : 0 },
                                        ),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var K = l(20916),
                Y = l.n(K);
            let G = (0, s.PA)((e) => {
                var t;
                let { forwardRef: l, tabsState: s, tabElementId: i } = e,
                    {
                        user: r,
                        collection: c,
                        settings: { isMobile: u },
                    } = (0, b.g)(),
                    { formatMessage: m } = (0, v.A)(),
                    d = (0, o.useCallback)(
                        (e) => {
                            r.account.data.uid && c.albums.getData({ userId: r.account.data.uid, metaType: 'music', page: e, pageSize: 20 });
                        },
                        [c.albums, r.account.data.uid],
                    ),
                    _ = (0, o.useMemo)(
                        () => ({
                            Header: () => (0, a.jsx)(F, { tabsState: s, tabElementId: i }),
                            Footer: () => (0, a.jsx)(L.A, { children: (0, a.jsx)(E.w, { className: Y().footer }) }),
                        }),
                        [i, s],
                    ),
                    h = c.albums.isAlbumsLoading ? 20 : c.albums.items.length;
                return (0, a.jsx)('div', {
                    className: Y().root,
                    children: (0, a.jsx)(n.Kp, {
                        value: s.value,
                        name: x.LIKED_ALBUMS,
                        elementId: i,
                        className: Y().tabPanel,
                        children: (0, a.jsx)(I.$, {
                            className: (0, C.$)(Y().scrollContainer, Y().important),
                            customComponents: _,
                            itemContentCallback: (e) => {
                                var t;
                                let l = null == (t = c.albums.pagesLoader.items) ? void 0 : t[e],
                                    s = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.album' }) });
                                return l ? (0, a.jsx)(N.a, { album: l, contentLinesCount: 4 }, l.id) : (0, a.jsx)(y.V, { 'aria-label': s, linesCount: 4 });
                            },
                            totalCount: h,
                            onGetDataByPage: d,
                            pageSize: 20,
                            totalRequests: null != (t = c.albums.pagesLoader.requestsCount) ? t : 0,
                            listClassName: Y().content,
                            itemClassName: Y().item,
                            handleRef: l,
                            context: { listAriaLabel: m({ id: 'collection.liked-albums-list' }) },
                            isMobileLayout: u,
                            useWindowScroll: u,
                        }),
                    }),
                });
            });
            var X = l(13833),
                V = l(23782),
                q = l(95772);
            let $ = (0, s.PA)((e) => {
                let { forwardRef: t, tabsState: l, tabElementId: s } = e,
                    { collection: i } = (0, b.g)(),
                    { formatMessage: r } = (0, v.A)(),
                    c = (0, o.useMemo)(() => {
                        var e;
                        let t = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.album' }) });
                        return i.albums.isUpcomingAlbumsLoading
                            ? (0, a.jsx)(q.e, { isActive: !0, 'aria-label': t })
                            : null == (e = i.albums.upcomingAlbums.items)
                              ? void 0
                              : e.map((e) => (0, a.jsx)(V.M, { upcomingAlbum: e }, e.id));
                    }, [i.albums.isUpcomingAlbumsLoading, i.albums.upcomingAlbums, r]);
                return (0, a.jsxs)(X.N, {
                    className: Y().root,
                    containerClassName: (0, C.$)(Y().scrollContainer, Y().important),
                    ref: t,
                    children: [
                        (0, a.jsx)(F, { tabsState: l, tabElementId: s }),
                        (0, a.jsx)(n.Kp, { value: l.value, name: x.UPCOMING_ALBUMS, elementId: s, className: Y().content, children: c }),
                        (0, a.jsx)(L.A, { children: (0, a.jsx)(E.w, { className: Y().footer }) }),
                    ],
                });
            });
            var Z = l(66738),
                J = l(60468),
                W = l.n(J);
            let Q = (0, s.PA)((e) => {
                let { tabsState: t, tabElementId: l } = e,
                    s = (0, o.useMemo)(() => {
                        switch (t.value) {
                            case x.LIKED_ALBUMS:
                                return (0, a.jsx)(S.A, { id: 'error-messages.empty-collection-albums-title' });
                            case x.UPCOMING_ALBUMS:
                                return (0, a.jsx)(S.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                        }
                    }, [t.value]),
                    i = t.value === x.LIKED_ALBUMS;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(F, { tabsState: t, tabElementId: l }),
                        (0, a.jsxs)(n.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: l,
                            className: W().root,
                            children: [
                                (0, a.jsx)(Z.I, { className: W().icon, size: 'l', variant: 'album' }),
                                (0, a.jsx)(P.DZ, {
                                    className: W().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_EMPTY_TITLE,
                                    children: s,
                                }),
                                i &&
                                    (0, a.jsx)(P.HL, {
                                        className: W().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, a.jsx)(S.A, { id: 'error-messages.empty-collection-albums-description' }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var ee = l(10603);
            let et = (0, s.PA)((e) => {
                    var t, l, s;
                    let { tabsState: i, tabElementId: n } = e,
                        { collection: c } = (0, b.g)(),
                        { formatMessage: u } = (0, v.A)(),
                        { isScrolling: m } = (0, o.useContext)(j.B),
                        d = (0, f.W)(),
                        _ = D(i),
                        h = (0, o.useMemo)(
                            () =>
                                c.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(c.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [c.albums.items.length, u],
                        ),
                        p = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = c.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, a.jsx)(ee.Y, {
                        variant: ee.V.COMPOSITE,
                        staticClassName: (0, C.$)(H().staticHeader, H().important),
                        'aria-hidden': !m,
                        stickyClassName: (0, C.$)(H().stickyHeader, H().important),
                        stickyChild: (0, a.jsxs)('div', {
                            className: H().container,
                            'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STICKY_HEADER,
                            children: [
                                d.canBack && (0, a.jsx)(M.L, { withForwardControl: !1, withBackwardControl: d.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, a.jsxs)(O.wI, {
                                    isShimmerVisible: c.albums.isLoading,
                                    shimmer: (0, a.jsx)(z, {}),
                                    className: H().tabs,
                                    elementId: n,
                                    ...i,
                                    onTabChange: _,
                                    children: [
                                        (0, a.jsx)(k.o, {
                                            className: H().tab,
                                            value: x.LIKED_ALBUMS,
                                            title: h,
                                            'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                            'aria-hidden': !m,
                                            tabIndex: m ? 0 : -1,
                                        }),
                                        (0, a.jsx)(k.o, {
                                            className: H().tab,
                                            value: x.UPCOMING_ALBUMS,
                                            title: p,
                                            'aria-label': u(
                                                { id: 'entity-names.upcoming-albums-count' },
                                                { value: null != (s = null == (l = c.albums.upcomingAlbums.items) ? void 0 : l.length) ? s : 0 },
                                            ),
                                            'aria-hidden': !m,
                                            tabIndex: m ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                el = (0, s.PA)(() => {
                    let e = (0, i.useSearchParams)(),
                        { user: t, collection: l, library: s } = (0, b.g)(),
                        { contentScrollRef: g, setContentScrollRef: C } = (0, d.g)(),
                        v = (0, o.useId)(),
                        N = (0, o.useMemo)(() => {
                            switch (e.get(p.K.TAB)) {
                                case h.H.LIKED_ALBUMS:
                                    break;
                                case h.H.UPCOMING_ALBUMS:
                                    return x.UPCOMING_ALBUMS;
                            }
                            return x.LIKED_ALBUMS;
                        }, [e]),
                        E = (0, n.zb)(N);
                    ((0, _.J)(l.albums.isResolved),
                        (0, o.useEffect)(
                            () => () => {
                                l.albums.reset();
                            },
                            [l.albums],
                        ));
                    let L = (0, o.useMemo)(() => {
                        switch (E.value) {
                            case x.LIKED_ALBUMS:
                                if (l.albums.isAlbumsEmpty) return (0, a.jsx)(Q, { tabsState: E, tabElementId: v });
                                return (0, a.jsx)(G, { forwardRef: C, tabsState: E, tabElementId: v });
                            case x.UPCOMING_ALBUMS:
                                if (l.albums.isUpcomingAlbumsEmpty) return (0, a.jsx)(Q, { tabsState: E, tabElementId: v });
                                return (0, a.jsx)($, { forwardRef: C, tabsState: E, tabElementId: v });
                        }
                    }, [l.albums.isAlbumsEmpty, l.albums.isUpcomingAlbumsEmpty, C, v, E]);
                    if (t.account.data.uid && l.albums.isNeededToLoad) {
                        let e = [
                            l.albums.getData({ userId: t.account.data.uid, metaType: 'music', page: 0, pageSize: 20 }),
                            l.albums.getPresaves({ userId: t.account.data.uid }),
                            s.getData(),
                        ];
                        (0, o.use)(Promise.allSettled(e));
                    }
                    return (0, a.jsx)(m.n, {
                        pageId: u._Q.OWN_ALBUMS,
                        children: (0, a.jsx)(c.h, {
                            scrollElement: g,
                            headerThreshold: 148,
                            children: (0, a.jsxs)('div', {
                                className: A().root,
                                'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE,
                                children: [(0, a.jsx)(et, { tabsState: E, tabElementId: v }), L],
                            }),
                        }),
                    });
                });
        },
        43354: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => s, P: () => i });
            var a = l(74631);
            let s = (0, a.createContext)(null),
                i = () => (0, a.useContext)(s);
        },
        45162: (e, t, l) => {
            'use strict';
            var a;
            (l.d(t, { J: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        53712: (e, t, l) => {
            'use strict';
            l.d(t, { Z: () => s });
            var a = l(25895);
            let s = {
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
        54239: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        57024: (e, t, l) => {
            'use strict';
            l.d(t, { C8: () => i, UC: () => o, dM: () => r, uV: () => n });
            var a = l(93690),
                s = l(58848);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof a.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                n = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, l) => {
            'use strict';
            l.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60468: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageEmpty_root__7yn1F',
                icon: 'CollectionAlbumsPageEmpty_icon__XFf9x',
                title: 'CollectionAlbumsPageEmpty_title__hMQde',
                text: 'CollectionAlbumsPageEmpty_text__jp_lj',
            };
        },
        81430: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageHeader_root__87L_c',
                container: 'CollectionAlbumsPageHeader_container__96cIo',
                title: 'CollectionAlbumsPageHeader_title__1Ps8d',
                tabs: 'CollectionAlbumsPageHeader_tabs__P4GTY',
                tab: 'CollectionAlbumsPageHeader_tab__JSFBc',
                tabsShimmer: 'CollectionAlbumsPageHeader_tabsShimmer__fGlR0',
                tabShimmer: 'CollectionAlbumsPageHeader_tabShimmer__9hCc6',
                staticHeader: 'CollectionAlbumsPageHeader_staticHeader__YNfX4',
                important: 'CollectionAlbumsPageHeader_important__0dgC2',
                stickyHeader: 'CollectionAlbumsPageHeader_stickyHeader__L_1IS',
            };
        },
        83918: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => s });
            var a = l(74631);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        89514: (e, t, l) => {
            'use strict';
            l.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        95772: (e, t, l) => {
            'use strict';
            l.d(t, { e: () => i });
            var a = l(25839),
                s = l(19412);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: l,
                    round: i,
                    centered: o,
                    withInfo: r,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': m,
                    withSubcover: d,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: u, className: l, round: i, centered: o, withInfo: r, withSubcover: d, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => y });
            var a = l(25839),
                s = l(82298),
                i = l(88204),
                o = l(39004),
                r = l(93588),
                n = l(43354),
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
            let u = (e, t, l) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(l);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(l);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(l);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(l);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(l);
                    }
                },
                m = (e) => {
                    let { formatMessage: t, language: l, tld: a, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, a, l) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, a, l) },
                    };
                };
            var d = l(10959),
                _ = l(89514);
            let b = (e) => e(new Date(), (0, _.m)());
            var h = l(96433),
                p = l(27954),
                x = l(400),
                g = l.n(x),
                A = l(61493),
                C = l(4254),
                v = l(97522);
            let N = (e) => {
                    let { className: t, data: l } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(g().copyrights, t),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    l.year,
                                    ' \xa0',
                                    (0, a.jsx)(v.N, {
                                        target: '_blank',
                                        href: l.yandexMusic.url,
                                        className: (0, s.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: l.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(v.N, {
                                target: '_blank',
                                href: l.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: l.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: l } = e;
                    return (0, a.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: g().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: l.map((e) => {
                                    let { id: t, title: l, url: s } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, a.jsx)(v.N, { target: '_blank', href: s, className: g().link, 'data-test-id': A.S7.FOOTER_LINK, children: l }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: l } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(g().root, g().important, t),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, a.jsx)(E, { links: l.links, disclaimer: l.disclaimer }), (0, a.jsx)(N, { data: l.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: l } = (0, p.g)(),
                    { formatDate: s, formatMessage: i } = (0, o.A)(),
                    { language: r } = (0, h.h)(),
                    n = m({ formatMessage: i, language: r, tld: l.tld, year: b(s) });
                return (0, a.jsx)(N, { className: t, data: n });
            });
            let y = (0, i.PA)((e) => {
                var t;
                let { className: l } = e,
                    { experiments: i, location: _, user: x } = (0, p.g)(),
                    { formatDate: A, formatMessage: C } = (0, o.A)(),
                    { isEnabled: v } = null != (t = (0, n.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: l, isWebApplication: a, language: s, tld: i, userRegion: o, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: l, tld: a, language: s, userRegion: i } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, a, s) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, a, s) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, a, s) },
                                    m = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, a, s) },
                                    d = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, a, s) },
                                    _ = [o, n, m];
                                return (l && 'ru' === i && _.push(r), _.push(d), _);
                            })({ formatMessage: l, isWebApplication: a, language: s, tld: i, userRegion: o }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => l({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => l({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: m({ formatMessage: l, language: s, tld: i, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: r.$3,
                        tld: _.tld,
                        language: N,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: b(A),
                    });
                return (0, a.jsx)(L, { className: (0, s.$)({ [g().root_withOffsetForDeeplink]: v }, l), data: E });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 8451, 1583, 1979, 5967, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 1484,
                3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4932, 4475, 5056, 7358,
            ],
            () => e((e.s = 14808)),
        ),
            (_N_E = e.O()));
    },
]);
