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
        6104: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => I });
            var a = s(25839),
                l = s(33660),
                i = s(74631),
                o = s(39004),
                r = s(45162),
                n = s(91149),
                c = s(92942),
                u = s(27954),
                m = s(57549),
                d = s(82298),
                _ = s(8487),
                b = s(61493),
                h = s(69084),
                p = s(4254),
                A = s(34582),
                E = s(6323),
                x = s(97522),
                g = s(51790),
                C = s(54239),
                N = s.n(C);
            let v = (e) => {
                    let { closeToast: t, albumTitle: s, coverUri: l, isPresave: r, entityTitle: n, className: c } = e,
                        { formatMessage: u } = (0, o.A)(),
                        m = (0, i.useMemo)(
                            () => (r ? (0, a.jsx)(_.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(_.A, { id: 'notifications-info.removed-from' })),
                            [r],
                        ),
                        C = (0, i.useMemo)(
                            () => (r ? (0, a.jsx)(_.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(_.A, { id: 'notifications-info.from-collection' })),
                            [r],
                        ),
                        v = (0, i.useMemo)(
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
                                        (0, a.jsx)(x.N, {
                                            className: N().link,
                                            href: '/collection/albums?tab='.concat(A.H.UPCOMING_ALBUMS),
                                            title: String(C),
                                            children: (0, a.jsx)(p.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: C }),
                                        }),
                                    ],
                                }),
                            [n, m, C],
                        );
                    return (0, a.jsx)(g.$, {
                        className: (0, d.$)(N().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(h.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': v }) }), L] }),
                        cover: (0, a.jsx)(E.B, { className: N().image, src: l, size: 100, fit: 'cover', alt: s, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                L = (e) => {
                    let { upcomingAlbum: t, closeToast: s } = e;
                    return (0, a.jsx)(v, { closeToast: s, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                I = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: s } = (0, c.l)(),
                        [d, _] = (0, i.useState)(!1),
                        { formatMessage: b } = (0, o.A)();
                    return (0, i.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void s((0, a.jsx)(m.h, { error: b({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (d) return;
                        let i = { ...(0, l.HO)(e), isPresave: !e.isPresave };
                        _(!0);
                        let o = await e.toggleLike();
                        (_(!1),
                            o === r.J.OK
                                ? s((0, a.jsx)(L, { upcomingAlbum: i }), { containerId: n.u.INFO })
                                : s((0, a.jsx)(m.h, { error: b({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, d, e, s, b]);
                };
        },
        6968: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => p });
            var a = s(25839),
                l = s(82298),
                i = s(28631),
                o = s(74631);
            let r = (e) => {
                    let { style: t, forwardRef: s, context: l, ...i } = e,
                        o = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        r = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': o, style: { ...t }, ref: s, ...i });
                },
                n = (0, o.forwardRef)((e, t) => (0, a.jsx)(r, { forwardRef: t, ...e }));
            var c = s(45300),
                u = s.n(c);
            let m = (e) => {
                    let { style: t, forwardRef: s, withFooter: i, withHeader: o, withForceScroll: r, ...n } = e;
                    return (0, a.jsx)('div', {
                        className: (0, l.$)(u().scroller, { [u().scroller_withFooter]: i, [u().scroller_withHeader]: o, [u().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: s,
                        ...n,
                        tabIndex: -1,
                    });
                },
                d = (0, o.forwardRef)((e, t) => (0, a.jsx)(m, { forwardRef: t, ...e }));
            var _ = s(10508),
                b = s(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: l,
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
                                    if ((null == l || l(e), n.length > 0 && h(e), t && s)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < a; e++) s(e);
                                    }
                                }, i),
                            [i, l, t, s, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && d && p(d);
                    }, n);
                    let A = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, a.jsx)(b.sN, { ref: u, rangeChanged: p, totalCount: r, endReached: A, ...m });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: m,
                            itemContentCallback: _,
                            listClassName: b,
                            overscan: p = 700,
                            pageSize: A = 20,
                            totalCount: E,
                            totalRequests: x,
                            debounceDurationInMs: g,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: v,
                            alwaysShowScrollbar: L = !1,
                            testId: I,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: P,
                            ...S
                        } = e,
                        [O, f] = (0, o.useState)(!1),
                        T = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    f(e);
                                }, 100),
                            [],
                        ),
                        M = (0, o.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: d,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : n,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: d,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : n,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, x, y]),
                        j = C ? Math.min(C, N) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(u().root, { [u().root_scrolling]: O || L, [u().root_notScrolling]: !O && !L }, t),
                        'data-test-id': I,
                        children: [
                            y && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, a.jsx)(h, {
                                overscan: p,
                                components: M,
                                listClassName: b,
                                itemClassName: m,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: v,
                                totalCount: E,
                                pageSize: A,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: P,
                                ...S,
                            }),
                            y && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        6969: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => a });
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
        10959: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => l });
            var a = s(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: l, userRegion: i } = e;
                return 'ru' === i && t(a.z.WebNextFooterDisclaimer, 'on') ? s() : l();
            };
        },
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => _ });
            var a = s(25839),
                l = s(84059),
                i = s(8487),
                o = s(61493),
                r = s(71035),
                n = s(4071),
                c = s(4254),
                u = s(57024),
                m = s(36484),
                d = s(62562);
            let _ = (e) => {
                let { size: t = 'm', variant: s = 'default', color: _ = 'primary', withRipple: b = !0, buttonText: h, isBlock: p, key: A, className: E } = e,
                    x = (0, l.useRouter)(),
                    g = (0, d.N)().get(m.QG),
                    C = (0, r.c)(() => {
                        g.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(g.authorizationUrl));
                    });
                return (0, a.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: E,
                        isBlock: p,
                        color: _,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: b,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    A,
                );
            };
        },
        18716: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 30871)), Promise.resolve().then(s.bind(s, 40869)));
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
        23782: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => y });
            var a = s(25839),
                l = s(82298),
                i = s(88204),
                o = s(74631),
                r = s(39004),
                n = s(8487),
                c = s(61493),
                u = s(49656),
                m = s(4071),
                d = s(51246),
                _ = s(66738),
                b = s(86869),
                h = s(4254),
                p = s(6104),
                A = s(56348),
                E = s(52512),
                x = s(98288),
                g = s(27954),
                C = s(6323),
                N = s(32652),
                v = s(64720),
                L = s(22794),
                I = s.n(L);
            let y = (0, i.PA)((e) => {
                let { className: t, children: s, upcomingAlbum: i, contentLinesCount: L } = e,
                    { user: y } = (0, g.g)(),
                    { ref: P, intersectionPropertyId: S } = (0, E.n)(),
                    { formatMessage: O, formatDate: f } = (0, r.A)(),
                    T = (0, p.P)(i),
                    M = i.getKey('PlayButton'),
                    j = i.getKey('LikeButton'),
                    k = (0, o.useMemo)(() => {
                        let e = O({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: i.title }),
                            t = i.isPresave ? O({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [O, i.title, i.isPresave]),
                    R = (0, u.L)(() =>
                        (0, a.jsxs)(b.t, {
                            className: I().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(C.B, { className: I().image, src: i.coverUri, size: 200, fit: 'cover', alt: k, withAvatarReplace: !0 }),
                                (0, a.jsx)(d.hg, {
                                    className: I().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: I().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(_.I, { variant: 'lock', size: 'xxs', className: I().lockIcon }),
                                            'aria-label': O({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        M,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        v.c,
                                        {
                                            className: (0, l.$)(I().control, I().presaveButton),
                                            isLiked: i.isPresave,
                                            onClick: T,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !y.isAuthorized,
                                        },
                                        j,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(d.MN, {
                    ref: P,
                    className: (0, l.$)(I().root, t),
                    'aria-label': k,
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
                    'data-intersection-property-id': S,
                    contentLinesCount: L,
                    view: R,
                    description: (0, a.jsx)(A.i, { className: I().artists, artists: i.artists, lineClamp: 1, linkClassName: I().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(h.HL, {
                            className: I().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: f(i.releaseDate, (0, x.s)()) } }),
                        }),
                        s,
                    ],
                });
            });
        },
        26076: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => o });
            var a = s(25839);
            s(93588);
            var l = s(400),
                i = s.n(l);
            let o = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: i().empty });
            };
        },
        30871: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var a = s(25839),
                l = s(88204),
                i = s(84059),
                o = s(82298),
                r = s(8487),
                n = s(4254),
                c = s(16978),
                u = s(148),
                m = s.n(u);
            let d = (0, l.PA)(() =>
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
            var _ = s(53712),
                b = s(27954);
            let h = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: l } = (0, b.g)();
                return l.isAuthorized ? t : (s && (0, i.redirect)(_.Z.main.href), (0, a.jsx)(d, {}));
            });
        },
        34582: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        39744: (e) => {
            e.exports = { root: 'CollectionAlbumsPage_root__qMtcC' };
        },
        40869: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionAlbumsPage: () => es });
            var a = s(25839),
                l = s(88204),
                i = s(84059),
                o = s(74631),
                r = s(61493),
                n = s(5867),
                c = s(1407),
                u = s(20258),
                m = s(10322),
                d = s(89192),
                _ = s(30716),
                b = s(27954),
                h = s(34582),
                p = s(6969),
                A = (function (e) {
                    return ((e[(e.LIKED_ALBUMS = 0)] = 'LIKED_ALBUMS'), (e[(e.UPCOMING_ALBUMS = 1)] = 'UPCOMING_ALBUMS'), e);
                })({}),
                E = s(39744),
                x = s.n(E),
                g = s(82298),
                C = s(39004),
                N = s(76939),
                v = s(99401),
                L = s(26076),
                I = s(19412),
                y = s(6968),
                P = s(8487),
                S = s(4254),
                O = s(21784),
                f = s(27625),
                T = s(15270),
                M = s(79396),
                j = s(9931),
                k = s(53712),
                R = s(25895),
                U = s(83918);
            let D = (e) => {
                let t = (0, U.X)();
                return (0, o.useCallback)(
                    (s) => {
                        var a;
                        switch ((null == (a = e.onTabChange) || a.call(e, s), s)) {
                            case A.LIKED_ALBUMS: {
                                let { href: e } = (0, R.u)(k.Z.collectionAlbums.href, { query: { tab: h.H.LIKED_ALBUMS } });
                                t(e);
                                break;
                            }
                            case A.UPCOMING_ALBUMS: {
                                let { href: e } = (0, R.u)(k.Z.collectionAlbums.href, { query: { tab: h.H.UPCOMING_ALBUMS } });
                                t(e);
                            }
                        }
                    },
                    [t, e],
                );
            };
            var B = s(81430),
                H = s.n(B),
                w = s(23976);
            let F = () =>
                    (0, a.jsxs)('div', {
                        className: H().tabsShimmer,
                        children: [(0, a.jsx)(w.W, { className: H().tabShimmer }), (0, a.jsx)(w.W, { className: H().tabShimmer })],
                    }),
                z = (0, l.PA)((e) => {
                    var t, s, l;
                    let { tabsState: i, tabElementId: n } = e,
                        { collection: c } = (0, b.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        m = (0, O.W)(),
                        { isScrolling: d } = (0, o.useContext)(f.B),
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
                                    m.canBack && (0, a.jsx)(T.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !d }),
                                    (0, a.jsx)(S.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: H().title,
                                        'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, a.jsx)(P.A, { id: 'entity-names.favourite-albums' }),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(j.wI, {
                                isShimmerVisible: c.albums.isLoading,
                                shimmer: (0, a.jsx)(F, {}),
                                className: H().tabs,
                                elementId: n,
                                ...i,
                                onTabChange: _,
                                children: [
                                    (0, a.jsx)(M.o, {
                                        className: H().tab,
                                        value: A.LIKED_ALBUMS,
                                        title: h,
                                        'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                    (0, a.jsx)(M.o, {
                                        className: H().tab,
                                        value: A.UPCOMING_ALBUMS,
                                        title: p,
                                        'aria-label': u(
                                            { id: 'entity-names.upcoming-albums-count' },
                                            { value: null != (l = null == (s = c.albums.upcomingAlbums.items) ? void 0 : s.length) ? l : 0 },
                                        ),
                                        'aria-hidden': d,
                                        tabIndex: d ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var K = s(20916),
                Y = s.n(K);
            let G = (0, l.PA)((e) => {
                var t;
                let { forwardRef: s, tabsState: l, tabElementId: i } = e,
                    {
                        user: r,
                        collection: c,
                        settings: { isMobile: u },
                    } = (0, b.g)(),
                    { formatMessage: m } = (0, C.A)(),
                    d = (0, o.useCallback)(
                        (e) => {
                            r.account.data.uid && c.albums.getData({ userId: r.account.data.uid, metaType: 'music', page: e, pageSize: 20 });
                        },
                        [c.albums, r.account.data.uid],
                    ),
                    _ = (0, o.useMemo)(
                        () => ({
                            Header: () => (0, a.jsx)(z, { tabsState: l, tabElementId: i }),
                            Footer: () => (0, a.jsx)(L.A, { children: (0, a.jsx)(v.w, { className: Y().footer }) }),
                        }),
                        [i, l],
                    ),
                    h = c.albums.isAlbumsLoading ? 20 : c.albums.items.length;
                return (0, a.jsx)('div', {
                    className: Y().root,
                    children: (0, a.jsx)(n.Kp, {
                        value: l.value,
                        name: A.LIKED_ALBUMS,
                        elementId: i,
                        className: Y().tabPanel,
                        children: (0, a.jsx)(y.$, {
                            className: (0, g.$)(Y().scrollContainer, Y().important),
                            customComponents: _,
                            itemContentCallback: (e) => {
                                var t;
                                let s = null == (t = c.albums.pagesLoader.items) ? void 0 : t[e],
                                    l = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.album' }) });
                                return s ? (0, a.jsx)(N.a, { album: s, contentLinesCount: 4 }, s.id) : (0, a.jsx)(I.V, { 'aria-label': l, linesCount: 4 });
                            },
                            totalCount: h,
                            onGetDataByPage: d,
                            pageSize: 20,
                            totalRequests: null != (t = c.albums.pagesLoader.requestsCount) ? t : 0,
                            listClassName: Y().content,
                            itemClassName: Y().item,
                            handleRef: s,
                            context: { listAriaLabel: m({ id: 'collection.liked-albums-list' }) },
                            isMobileLayout: u,
                            useWindowScroll: u,
                        }),
                    }),
                });
            });
            var X = s(13833),
                V = s(23782),
                q = s(95772);
            let $ = (0, l.PA)((e) => {
                let { forwardRef: t, tabsState: s, tabElementId: l } = e,
                    { collection: i } = (0, b.g)(),
                    { formatMessage: r } = (0, C.A)(),
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
                    containerClassName: (0, g.$)(Y().scrollContainer, Y().important),
                    ref: t,
                    children: [
                        (0, a.jsx)(z, { tabsState: s, tabElementId: l }),
                        (0, a.jsx)(n.Kp, { value: s.value, name: A.UPCOMING_ALBUMS, elementId: l, className: Y().content, children: c }),
                        (0, a.jsx)(L.A, { children: (0, a.jsx)(v.w, { className: Y().footer }) }),
                    ],
                });
            });
            var Z = s(66738),
                Q = s(60468),
                J = s.n(Q);
            let W = (0, l.PA)((e) => {
                let { tabsState: t, tabElementId: s } = e,
                    l = (0, o.useMemo)(() => {
                        switch (t.value) {
                            case A.LIKED_ALBUMS:
                                return (0, a.jsx)(P.A, { id: 'error-messages.empty-collection-albums-title' });
                            case A.UPCOMING_ALBUMS:
                                return (0, a.jsx)(P.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                        }
                    }, [t.value]),
                    i = t.value === A.LIKED_ALBUMS;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(z, { tabsState: t, tabElementId: s }),
                        (0, a.jsxs)(n.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: s,
                            className: J().root,
                            children: [
                                (0, a.jsx)(Z.I, { className: J().icon, size: 'l', variant: 'album' }),
                                (0, a.jsx)(S.DZ, {
                                    className: J().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_EMPTY_TITLE,
                                    children: l,
                                }),
                                i &&
                                    (0, a.jsx)(S.HL, {
                                        className: J().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, a.jsx)(P.A, { id: 'error-messages.empty-collection-albums-description' }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var ee = s(10603);
            let et = (0, l.PA)((e) => {
                    var t, s, l;
                    let { tabsState: i, tabElementId: n } = e,
                        { collection: c } = (0, b.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        { isScrolling: m } = (0, o.useContext)(f.B),
                        d = (0, O.W)(),
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
                        staticClassName: (0, g.$)(H().staticHeader, H().important),
                        'aria-hidden': !m,
                        stickyClassName: (0, g.$)(H().stickyHeader, H().important),
                        stickyChild: (0, a.jsxs)('div', {
                            className: H().container,
                            'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STICKY_HEADER,
                            children: [
                                d.canBack && (0, a.jsx)(T.L, { withForwardControl: !1, withBackwardControl: d.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, a.jsxs)(j.wI, {
                                    isShimmerVisible: c.albums.isLoading,
                                    shimmer: (0, a.jsx)(F, {}),
                                    className: H().tabs,
                                    elementId: n,
                                    ...i,
                                    onTabChange: _,
                                    children: [
                                        (0, a.jsx)(M.o, {
                                            className: H().tab,
                                            value: A.LIKED_ALBUMS,
                                            title: h,
                                            'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                            'aria-hidden': !m,
                                            tabIndex: m ? 0 : -1,
                                        }),
                                        (0, a.jsx)(M.o, {
                                            className: H().tab,
                                            value: A.UPCOMING_ALBUMS,
                                            title: p,
                                            'aria-label': u(
                                                { id: 'entity-names.upcoming-albums-count' },
                                                { value: null != (l = null == (s = c.albums.upcomingAlbums.items) ? void 0 : s.length) ? l : 0 },
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
                es = (0, l.PA)(() => {
                    let e = (0, i.useSearchParams)(),
                        { user: t, collection: s, library: l } = (0, b.g)(),
                        { contentScrollRef: E, setContentScrollRef: g } = (0, d.g)(),
                        C = (0, o.useId)(),
                        N = (0, o.useMemo)(() => {
                            switch (e.get(p.K.TAB)) {
                                case h.H.LIKED_ALBUMS:
                                    break;
                                case h.H.UPCOMING_ALBUMS:
                                    return A.UPCOMING_ALBUMS;
                            }
                            return A.LIKED_ALBUMS;
                        }, [e]),
                        v = (0, n.zb)(N);
                    ((0, _.J)(s.albums.isResolved),
                        (0, o.useEffect)(
                            () => () => {
                                s.albums.reset();
                            },
                            [s.albums],
                        ));
                    let L = (0, o.useMemo)(() => {
                        switch (v.value) {
                            case A.LIKED_ALBUMS:
                                if (s.albums.isAlbumsEmpty) return (0, a.jsx)(W, { tabsState: v, tabElementId: C });
                                return (0, a.jsx)(G, { forwardRef: g, tabsState: v, tabElementId: C });
                            case A.UPCOMING_ALBUMS:
                                if (s.albums.isUpcomingAlbumsEmpty) return (0, a.jsx)(W, { tabsState: v, tabElementId: C });
                                return (0, a.jsx)($, { forwardRef: g, tabsState: v, tabElementId: C });
                        }
                    }, [s.albums.isAlbumsEmpty, s.albums.isUpcomingAlbumsEmpty, g, C, v]);
                    if (t.account.data.uid && s.albums.isNeededToLoad) {
                        let e = [
                            s.albums.getData({ userId: t.account.data.uid, metaType: 'music', page: 0, pageSize: 20 }),
                            s.albums.getPresaves({ userId: t.account.data.uid }),
                            l.getData(),
                        ];
                        (0, o.use)(Promise.allSettled(e));
                    }
                    return (0, a.jsx)(m.n, {
                        pageId: u._Q.OWN_ALBUMS,
                        children: (0, a.jsx)(c.h, {
                            scrollElement: E,
                            headerThreshold: 148,
                            children: (0, a.jsxs)('div', {
                                className: x().root,
                                'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE,
                                children: [(0, a.jsx)(et, { tabsState: v, tabElementId: C }), L],
                            }),
                        }),
                    });
                });
        },
        43354: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => l, P: () => i });
            var a = s(74631);
            let l = (0, a.createContext)(null),
                i = () => (0, a.useContext)(l);
        },
        45162: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { J: () => a }),
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
        53712: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => l });
            var a = s(25895);
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
        54239: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        57024: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => i, UC: () => o, dM: () => r, uV: () => n });
            var a = s(93690),
                l = s(58848);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof a.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
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
        58848: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
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
        76481: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => l });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: l = {}, ...i } = t,
                        o = e || 'Internal error';
                    (super(o, i), (this.message = o), (this.code = s), (this.data = l), (this.stack = Error(o).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
            class l extends a {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        77920: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { X: () => a }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
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
        83918: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => l });
            var a = s(74631);
            let l = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        89514: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        91626: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => l }), s(77920));
            var a = s(76481);
            class l extends a.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        93690: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => i.G, X1: () => a.X, m5: () => l.m });
            var a = s(77920),
                l = s(76481),
                i = s(91626);
            s(95919);
        },
        95772: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => i });
            var a = s(25839),
                l = s(19412);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
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
                        l.V,
                        { isActive: t, linesCount: u, className: s, round: i, centered: o, withInfo: r, withSubcover: d, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        95919: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { Z: () => a }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        99401: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => I });
            var a = s(25839),
                l = s(82298),
                i = s(88204),
                o = s(39004),
                r = s(93588),
                n = s(43354),
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
            let u = (e, t, s) => {
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
                m = (e) => {
                    let { formatMessage: t, language: s, tld: a, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, a, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, a, s) },
                    };
                };
            var d = s(10959),
                _ = s(89514);
            let b = (e) => e(new Date(), (0, _.m)());
            var h = s(96433),
                p = s(27954),
                A = s(400),
                E = s.n(A),
                x = s(61493),
                g = s(4254),
                C = s(97522);
            let N = (e) => {
                    let { className: t, data: s } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(E().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, a.jsx)(C.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, l.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(C.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, a.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: E().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: l } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, a.jsx)(C.N, { target: '_blank', href: l, className: E().link, 'data-test-id': x.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: s } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, l.$)(E().root, E().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, a.jsx)(v, { links: s.links, disclaimer: s.disclaimer }), (0, a.jsx)(N, { data: s.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, p.g)(),
                    { formatDate: l, formatMessage: i } = (0, o.A)(),
                    { language: r } = (0, h.h)(),
                    n = m({ formatMessage: i, language: r, tld: s.tld, year: b(l) });
                return (0, a.jsx)(N, { className: t, data: n });
            });
            let I = (0, i.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: i, location: _, user: A } = (0, p.g)(),
                    { formatDate: x, formatMessage: g } = (0, o.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    v = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: a, language: l, tld: i, userRegion: o, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: a, language: l, userRegion: i } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, a, l) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, a, l) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, a, l) },
                                    m = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, a, l) },
                                    d = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, a, l) },
                                    _ = [o, n, m];
                                return (s && 'ru' === i && _.push(r), _.push(d), _);
                            })({ formatMessage: s, isWebApplication: a, language: l, tld: i, userRegion: o }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: m({ formatMessage: s, language: l, tld: i, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: r.$3,
                        tld: _.tld,
                        language: N,
                        userRegion: A.account.data.userSessionRegionIso,
                        year: b(x),
                    });
                return (0, a.jsx)(L, { className: (0, l.$)({ [E().root_withOffsetForDeeplink]: C }, s), data: v });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 7339, 740, 6287, 2121, 3472, 2767, 3112, 8451, 1583, 1979, 5967, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215,
                3257, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 4932, 4475, 5056, 7358,
            ],
            () => e((e.s = 18716)),
        ),
            (_N_E = e.O()));
    },
]);
