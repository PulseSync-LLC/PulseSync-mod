(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94],
    {
        18998: (t) => {
            t.exports = {
                root: 'CollectionShelfLikedPage_root__KRXgN',
                footer: 'CollectionShelfLikedPage_footer__NgcOJ',
                scrollContainer: 'CollectionShelfLikedPage_scrollContainer__IBlT7',
                important: 'CollectionShelfLikedPage_important__R4MBr',
                content: 'CollectionShelfLikedPage_content__KHWpo',
                item: 'CollectionShelfLikedPage_item__x5cqv',
            };
        },
        28045: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => H });
            var a = i(25839),
                l = i(82298),
                s = i(88204),
                r = i(74631),
                n = i(36619),
                o = i(61493),
                _ = i(22939),
                d = i(71035),
                c = i(49656),
                u = i(11823),
                m = i(4254),
                C = i(99835),
                x = i(73614),
                p = i(4331),
                T = i(79367),
                v = i(29481),
                E = i(47009),
                k = i(52512),
                h = i(30290),
                b = i(61561),
                N = i(85686),
                y = i(85743),
                A = i(50209),
                L = i(27954),
                I = i(79856),
                f = i.n(I),
                g = i(77698),
                S = i(18284),
                j = i(97522),
                M = i(6349),
                w = i(66738),
                P = i(71705),
                D = i(34159),
                B = i(64720),
                R = i(71996),
                Y = i(6304),
                z = i(70418),
                O = i.n(z);
            let K = (0, s.PA)((t) => {
                    var e;
                    let { className: i, album: s, likeIconSize: o = 'xxs' } = t,
                        { user: _, trailer: c } = (0, L.g)(),
                        u = (0, T.P)(),
                        { sendLikeSearchFeedback: m } = (0, y.z)(),
                        C = (0, P.K)(s),
                        [x, p] = (0, r.useState)(!1),
                        v = (0, d.c)(async () => {
                            (x || s.isLiked || (p(!0), null == m || m()), await C());
                        }),
                        E = (0, D.F)(),
                        k = (0, d.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (c.openAlbumTrailer(s.id), E(n.DomainObjectType.Album, String(s.id)));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(O().root, O().controls, i, { [O().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(Y.WithOffline, {
                                            fallback: (0, a.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: o,
                                                className: (0, l.$)(O().item, O().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: v,
                                                disabled: !_.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(Y.WithOffline, {
                                                fallback: (0, a.jsx)(R.k, {
                                                    className: (0, l.$)(O().item, O().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: k,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(O().item, O().item_buttonArrow),
                                children: (0, a.jsx)(w.I, { className: f().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                H = (0, s.PA)((t) => {
                    let { className: e, album: i, pageId: s, coverClassName: I, playButtonIconSize: w, likeIconSize: P, shouldShowReleaseYear: D, description: B } = t,
                        R = (0, x.r)(i.type),
                        { ref: Y, intersectionPropertyId: z } = (0, k.n)(),
                        { from: O } = (0, h.f)({ pageId: s }),
                        [H, $] = (0, r.useState)(!1),
                        U = (0, E.b)(),
                        W = (0, N.Z)(i.url),
                        q = (0, T.P)(),
                        { sendNavigateSearchFeedback: V, sendPlaySearchFeedback: F } = (0, y.z)(),
                        X = (0, v.N)(),
                        {
                            paywall: { modal: Z },
                        } = (0, L.g)(),
                        G = (0, b.N)(),
                        {
                            isPlaying: J,
                            isCurrent: Q,
                            togglePlay: tt,
                        } = (0, A.D)({ playContextParams: { contextData: { type: _.K.Album, meta: { id: i.id }, from: O }, loadContextMeta: !0 } }),
                        te = (0, C.c)({ album: i, callback: W }),
                        ti = (0, C.c)({ album: i, callback: tt }),
                        ta = (0, d.c)((t) => {
                            (null == V || V(), X({ to: n.AppScreen.AlbumScreen }), te(t));
                        }),
                        tl = (0, d.c)(() => {
                            if (!q()) {
                                if (G) return void Z.open();
                                (H || J || ($(!0), null == F || F()), ti(), U(!J));
                            }
                        }),
                        ts = (0, d.c)((t) => {
                            ((0, u.P)(t, f().ripple), ta(t));
                        }),
                        tr = (0, d.c)((t) => {
                            (t.stopPropagation(), ta(t));
                        }),
                        tn = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(M.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, l.$)(f().playButtonCell, I),
                                    alt: ''.concat(R, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, I, R],
                        ),
                        to = null == tn ? void 0 : tn({ onPlayButtonClick: tl, isPlaying: J, isCurrent: Q, playButtonIconSize: w }),
                        t_ = (0, r.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(j.N, { className: (0, l.$)(f().text, f().titleLink), href: i.url, onClick: tr, children: i.title })
                                    : (0, a.jsx)(m.HL, { className: (0, l.$)(f().text, f().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, tr],
                        ),
                        td = (0, r.useCallback)(
                            (t, e) => {
                                var l;
                                return (null == (l = i.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(p.i, { linkClassName: t, captionClassName: e, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        tc = (0, c.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(S.C, {
                        ref: Y,
                        'data-intersection-property-id': z,
                        className: (0, l.$)(f().root, { [f().root_disabled]: !i.isAvailable }, e),
                        'aria-label': tc,
                        onClick: ts,
                        'data-test-id': o.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            to,
                            (0, a.jsx)(g.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: t_,
                                artistsComponent: td,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && D ? i.year : void 0,
                                description: B,
                            }),
                            (0, a.jsx)(K, { className: f().controlsBar, album: i, likeIconSize: P }),
                        ],
                    });
                });
        },
        51271: (t, e, i) => {
            'use strict';
            i.d(e, { q: () => l });
            var a = i(22939);
            let l = (t, e, i) => {
                let l = { type: a.K.Various, meta: { id: t.id }, from: i || '' };
                return (
                    void 0 !== t.albumId && (l = { type: a.K.Album, meta: { id: t.albumId }, from: i || '' }),
                    { contextData: l, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        54958: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionShelfLikedPage: () => w });
            var a = i(25839),
                l = i(82298),
                s = i(88204),
                r = i(74631),
                n = i(39004),
                o = i(8487),
                _ = i(61493),
                d = i(49656),
                c = i(4254),
                u = i(78299),
                m = i(28045),
                C = i(1407),
                x = i(51549),
                p = i(21784),
                T = i(89192),
                v = i(30716),
                E = i(79422),
                k = i(27954),
                h = i(3718),
                b = i(60678),
                N = i(99401),
                y = i(26076),
                A = i(10603),
                L = i(97805),
                I = i(6968),
                f = i(50222),
                g = i(51271),
                S = i(52794),
                j = i(18998),
                M = i.n(j);
            let w = (0, s.PA)(() => {
                let {
                        settings: { isMobile: t },
                        collection: { shelfLiked: e },
                    } = (0, k.g)(),
                    { contentScrollRef: i, setContentScrollRef: s } = (0, T.g)(),
                    j = (0, p.W)(),
                    { formatMessage: w } = (0, n.A)(),
                    P = (0, E.w)(),
                    D = (0, r.useCallback)(
                        (t) => {
                            e.getData({ page: t, pageSize: f.c });
                        },
                        [e],
                    );
                (0, b.X)(e.pagesLoader, D);
                let B = (0, d.L)(() => ({ Footer: () => (0, a.jsx)(y.A, { children: (0, a.jsx)(N.w, { className: M().footer }) }) })),
                    R = e.isShimmerVisible ? 20 : e.items.length;
                return ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, v.J)(e.isResolved),
                e.isNeededToLoad && (0, r.use)(e.getData({ pageSize: f.c })),
                e.isRejected)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, a.jsx)(S.F, { title: w({ id: 'error-messages.empty-shelf-liked-page-title' }) })
                      : (0, a.jsx)(C.h, {
                            scrollElement: i,
                            outerTitle: w({ id: 'podcast.shelf-liked-title' }),
                            children: (0, a.jsxs)('div', {
                                className: M().root,
                                'data-test-id': _.Xk.collection.COLLECTION_SHELF_LIKED_PAGE,
                                children: [
                                    (0, a.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: j.canBack,
                                        children: (0, a.jsx)(c.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(o.A, { id: 'podcast.shelf-liked-title' }),
                                        }),
                                    }),
                                    (0, a.jsx)(I.$, {
                                        className: (0, l.$)(M().scrollContainer, M().important),
                                        customComponents: B,
                                        itemContentCallback: (t) => {
                                            let i = e.items[t];
                                            if (!i) return (0, a.jsx)(L.D, { variant: h.X.PLAYLIST, isActive: !0 }, t);
                                            if (i.album) return (0, a.jsx)(m.M, { album: i.album }, i.album.getKey(t));
                                            let l = P(t, (0, g.q)(i.track, t, e.typeForFrom));
                                            return (0, a.jsx)(x.K, { track: i.track, playContextParams: l, withPodcastName: !0 }, i.track.getKey(t));
                                        },
                                        initialItemCount: R,
                                        totalCount: R,
                                        onGetDataByPage: D,
                                        pageSize: f.c,
                                        totalRequests: e.requestsCount,
                                        listClassName: M().content,
                                        itemClassName: M().item,
                                        handleRef: s,
                                        context: { listAriaLabel: w({ id: 'podcast.shelf-liked-title' }) },
                                        isMobileLayout: t,
                                        useWindowScroll: t,
                                    }),
                                ],
                            }),
                        });
            });
        },
        65363: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 54958)));
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
        73614: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => r, r: () => n });
            var a = i(74631),
                l = i(39004),
                s = i(56829),
                r = (function (t) {
                    return ((t.PIN = 'pin'), t);
                })({});
            let n = (t, e) => {
                let { formatMessage: i } = (0, l.A)();
                return (0, a.useMemo)(() => {
                    switch (t) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === e) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [t, i, e]);
            };
        },
        77698: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => m });
            var a = i(25839),
                l = i(82298),
                s = i(39004),
                r = i(61493),
                n = i(49656),
                o = i(66738),
                _ = i(4254),
                d = i(62926),
                c = i(72968),
                u = i.n(c);
            let m = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: i,
                        description: c,
                        getDescriptionTexts: m,
                        explicitMarkVariant: C,
                        className: x,
                        version: p,
                        title: T,
                        artistsComponent: v,
                        likesCount: E,
                        isLiked: k,
                        releaseYear: h,
                        titleLineClamp: b = 1,
                    } = t,
                    { formatMessage: N, formatNumber: y } = (0, s.A)(),
                    A = (0, n.L)(() => {
                        let t = null == v ? void 0 : v((0, l.$)(u().text, u().artistLink), (0, l.$)(u().text, u().artistCaption));
                        if (!t && !E) return;
                        let e = (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof E &&
                                    E > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': N({ id: 'entity-names.likes-counter' }, { counter: E }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(o.I, {
                                                className: u().icon,
                                                variant: k ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: y(E),
                                            }),
                                        ],
                                    }),
                                !!E && t && e,
                                t,
                                !!h && t && e,
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', children: h }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: e }, x),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, a.jsxs)(_.HL, {
                                    className: (0, l.$)(u().text, u().title, { [u().title_withVersion]: p }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: b,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        T,
                                        p &&
                                            (0, a.jsx)(_.HL, {
                                                className: (0, l.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(p),
                                            }),
                                    ],
                                }),
                                C && (0, a.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: C }),
                            ],
                        }),
                        c &&
                            (0, a.jsx)(_.HL, {
                                className: (0, l.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: c,
                            }),
                        A,
                    ],
                });
            };
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
        99835: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => l });
            var a = i(40207);
            let l = (t) => {
                let { album: e, callback: i, shouldHistoryBack: l } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1676, 3349, 6287, 2121, 6749, 7339, 3472, 1107, 7349, 4145, 369, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 8222, 3719, 4475, 5056, 7358,
            ],
            () => t((t.s = 65363)),
        ),
            (_N_E = t.O()));
    },
]);
