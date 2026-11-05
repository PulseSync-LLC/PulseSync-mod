(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94],
    {
        29008: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => r, r: () => n });
            var a = i(53548),
                l = i(2058),
                s = i(61691),
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
        31240: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionShelfLikedPage: () => w });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(88969),
                _ = i(17392),
                d = i(79070),
                c = i(29504),
                u = i(32596),
                m = i(46811),
                C = i(69630),
                x = i(76843),
                p = i(46422),
                T = i(44230),
                v = i(37670),
                E = i(6668),
                k = i(72288),
                h = i(98644),
                b = i(54320),
                N = i(86790),
                A = i(60266),
                y = i(93317),
                L = i(93015),
                I = i(79418),
                g = i(71104),
                S = i(70441),
                f = i(40068),
                j = i(46524),
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
                            e.getData({ page: t, pageSize: g.c });
                        },
                        [e],
                    );
                (0, b.X)(e.pagesLoader, D);
                let B = (0, d.L)(() => ({ Footer: () => (0, a.jsx)(A.A, { children: (0, a.jsx)(N.w, { className: M().footer }) }) })),
                    R = e.isShimmerVisible ? 20 : e.items.length;
                return ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, v.J)(e.isResolved),
                e.isNeededToLoad && (0, r.use)(e.getData({ pageSize: g.c })),
                e.isRejected)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, a.jsx)(f.F, { title: w({ id: 'error-messages.empty-shelf-liked-page-title' }) })
                      : (0, a.jsx)(C.h, {
                            scrollElement: i,
                            outerTitle: w({ id: 'podcast.shelf-liked-title' }),
                            children: (0, a.jsxs)('div', {
                                className: M().root,
                                'data-test-id': _.Xk.collection.COLLECTION_SHELF_LIKED_PAGE,
                                children: [
                                    (0, a.jsx)(y.Y, {
                                        variant: y.V.TEXT,
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
                                            let l = P(t, (0, S.q)(i.track, t, e.typeForFrom));
                                            return (0, a.jsx)(x.K, { track: i.track, playContextParams: l, withPodcastName: !0 }, i.track.getKey(t));
                                        },
                                        initialItemCount: R,
                                        totalCount: R,
                                        onGetDataByPage: D,
                                        pageSize: g.c,
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
        33932: (t) => {
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
        34250: (t) => {
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
        46524: (t) => {
            t.exports = {
                root: 'CollectionShelfLikedPage_root__KRXgN',
                footer: 'CollectionShelfLikedPage_footer__NgcOJ',
                scrollContainer: 'CollectionShelfLikedPage_scrollContainer__IBlT7',
                important: 'CollectionShelfLikedPage_important__R4MBr',
                content: 'CollectionShelfLikedPage_content__KHWpo',
                item: 'CollectionShelfLikedPage_item__x5cqv',
            };
        },
        46811: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => H });
            var a = i(88800),
                l = i(65724),
                s = i(84961),
                r = i(53548),
                n = i(87999),
                o = i(62414),
                _ = i(33979),
                d = i(80643),
                c = i(17392),
                u = i(18593),
                m = i(29993),
                C = i(79070),
                x = i(52073),
                p = i(29504),
                T = i(60757),
                v = i(29008),
                E = i(13946),
                k = i(5407),
                h = i(84384),
                b = i(4795),
                N = i(78940),
                A = i(55693),
                y = i(39079),
                L = i(72288),
                I = i(62270),
                g = i.n(I),
                S = i(76816),
                f = i(8990),
                j = i(91292),
                M = i(39267),
                w = i(52300),
                P = i(92966),
                D = i(57934),
                B = i(49738),
                R = i(56446),
                Y = i(64546),
                z = i(33932),
                O = i.n(z);
            let K = (0, s.PA)((t) => {
                    var e;
                    let { className: i, album: s, likeIconSize: o = 'xxs' } = t,
                        { user: _, trailer: d } = (0, L.g)(),
                        c = (0, k.P)(),
                        { sendLikeSearchFeedback: u } = (0, A.z)(),
                        C = (0, P.K)(s),
                        [x, p] = (0, r.useState)(!1),
                        T = (0, m.c)(async () => {
                            (x || s.isLiked || (p(!0), null == u || u()), await C());
                        }),
                        v = (0, D.F)(),
                        E = (0, m.c)((t) => {
                            if ((t.stopPropagation(), c())) return void t.preventDefault();
                            (d.openAlbumTrailer(s.id), v(n.DomainObjectType.Album, String(s.id)));
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
                                                onClick: T,
                                                disabled: !_.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(Y.WithOffline, {
                                                fallback: (0, a.jsx)(R.k, {
                                                    className: (0, l.$)(O().item, O().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: E,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(O().item, O().item_buttonArrow),
                                children: (0, a.jsx)(w.I, { className: g().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                H = (0, s.PA)((t) => {
                    let { className: e, album: i, pageId: s, coverClassName: I, playButtonIconSize: w, likeIconSize: P, shouldShowReleaseYear: D, description: B } = t,
                        R = (0, v.r)(i.type),
                        Y = (0, o.D)(),
                        { from: z } = (0, h.f)({ pageId: s }),
                        [O, H] = (0, r.useState)(!1),
                        $ = (0, _.g)(),
                        U = (0, N.Z)(i.url),
                        W = (0, k.P)(),
                        { sendNavigateSearchFeedback: q, sendPlaySearchFeedback: V } = (0, A.z)(),
                        F = (0, d.S)(),
                        {
                            paywall: { modal: X },
                        } = (0, L.g)(),
                        Z = (0, b.N)(),
                        {
                            isPlaying: G,
                            isCurrent: J,
                            togglePlay: Q,
                        } = (0, y.D)({ playContextParams: { contextData: { type: u.K.Album, meta: { id: i.id }, from: z }, loadContextMeta: !0 } }),
                        tt = (0, T.c)({ album: i, callback: U }),
                        te = (0, T.c)({ album: i, callback: Q }),
                        ti = (0, m.c)((t) => {
                            (null == q || q(), F({ to: n.AppScreen.AlbumScreen }), tt(t));
                        }),
                        ta = (0, m.c)(() => {
                            if (!W()) {
                                if (Z) return void X.open();
                                (O || G || (H(!0), null == V || V()), te(), G || $());
                            }
                        }),
                        tl = (0, m.c)((t) => {
                            ((0, x.P)(t, g().ripple), ti(t));
                        }),
                        ts = (0, m.c)((t) => {
                            (t.stopPropagation(), ti(t));
                        }),
                        tr = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(M.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, l.$)(g().playButtonCell, I),
                                    alt: ''.concat(R, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, I, R],
                        ),
                        tn = null == tr ? void 0 : tr({ onPlayButtonClick: ta, isPlaying: G, isCurrent: J, playButtonIconSize: w }),
                        to = (0, r.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(j.N, { className: (0, l.$)(g().text, g().titleLink), href: i.url, onClick: ts, children: i.title })
                                    : (0, a.jsx)(p.HL, { className: (0, l.$)(g().text, g().titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
                            [i.isAvailable, i.title, i.url, ts],
                        ),
                        t_ = (0, r.useCallback)(
                            (t, e) => {
                                var l;
                                return (null == (l = i.artists) ? void 0 : l.length)
                                    ? (0, a.jsx)(E.i, { linkClassName: t, captionClassName: e, artists: i.artists, lineClamp: 1, withLink: i.isAvailable })
                                    : null;
                            },
                            [i.artists, i.isAvailable],
                        ),
                        td = (0, C.L)(() => [i.artistNames, i.title, i.version].filter(Boolean).join(' '));
                    return (0, a.jsxs)(f.C, {
                        ref: Y,
                        className: (0, l.$)(g().root, { [g().root_disabled]: !i.isAvailable }, e),
                        'aria-label': td,
                        onClick: tl,
                        'data-test-id': c.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tn,
                            (0, a.jsx)(S.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: to,
                                artistsComponent: t_,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && D ? i.year : void 0,
                                description: B,
                            }),
                            (0, a.jsx)(K, { className: g().controlsBar, album: i, likeIconSize: P }),
                        ],
                    });
                });
        },
        60757: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => l });
            var a = i(58217);
            let l = (t) => {
                let { album: e, callback: i, shouldHistoryBack: l } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
        62270: (t) => {
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
        70441: (t, e, i) => {
            'use strict';
            i.d(e, { q: () => l });
            var a = i(18593);
            let l = (t, e, i) => {
                let l = { type: a.K.Various, meta: { id: t.id }, from: i || '' };
                return (
                    void 0 !== t.albumId && (l = { type: a.K.Album, meta: { id: t.albumId }, from: i || '' }),
                    { contextData: l, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        76816: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => m });
            var a = i(88800),
                l = i(65724),
                s = i(2058),
                r = i(17392),
                n = i(79070),
                o = i(52300),
                _ = i(29504),
                d = i(90224),
                c = i(34250),
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
                    { formatMessage: N, formatNumber: A } = (0, s.A)(),
                    y = (0, n.L)(() => {
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
                                                children: A(E),
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
                        y,
                    ],
                });
            };
        },
        77440: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 31240)));
        },
    },
    (t) => {
        (t.O(
            0,
            [
                4814, 7437, 3469, 8194, 1833, 918, 9079, 1191, 1041, 8655, 5213, 6253, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 7746,
                4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 7053, 2655, 763, 2670, 7358,
            ],
            () => t((t.s = 77440)),
        ),
            (_N_E = t.O()));
    },
]);
