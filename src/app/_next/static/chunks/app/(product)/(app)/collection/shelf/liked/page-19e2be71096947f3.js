(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94],
    {
        5154: (t, e, i) => {
            'use strict';
            i.d(e, { v2: () => _, $f: () => l(), VN: () => r(), SE: () => n() });
            var a = i(50880),
                l = i.n(a),
                s = i(59449),
                r = i.n(s),
                o = i(28488),
                n = i.n(o);
            let _ = {
                src: '/_next/static/media/artist.c49b2bfa.png',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEU7SUNzfno6TEYVIB4tOTVMaXExOjY1PTpEUEw+T0k2RUA0Qz40Qz1UXVpAS0dncG1IUk6VnZuIkI3hJMzHAAAADHRSTlMu/e4u/gCv7fix563DJ+jkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwEsMe4ci6Q/YeNBEG4BwSg9VYSEL3e8A1QzjfcB5ZZlXmg7FXOim23+9qGQM0U8gNH4wIMxKVMaQAAAABJRU5ErkJggg==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        7462: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => r, r: () => o });
            var a = i(55178),
                l = i(60900),
                s = i(64605),
                r = (function (t) {
                    return (t.PIN = 'pin'), t;
                })({});
            let o = (t, e) => {
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
        20930: (t) => {
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
        25638: (t) => {
            t.exports = {
                root: 'CollectionShelfLikedPage_root__KRXgN',
                footer: 'CollectionShelfLikedPage_footer__NgcOJ',
                scrollContainer: 'CollectionShelfLikedPage_scrollContainer__IBlT7',
                important: 'CollectionShelfLikedPage_important__R4MBr',
                content: 'CollectionShelfLikedPage_content__KHWpo',
                item: 'CollectionShelfLikedPage_item__x5cqv',
            };
        },
        28488: (t) => {
            t.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        31640: (t) => {
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
        34883: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => l });
            var a = i(19383);
            let l = (t) => {
                let { album: e, callback: i, shouldHistoryBack: l } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
        40015: (t, e, i) => {
            'use strict';
            i.d(e, { q: () => l });
            var a = i(71483);
            let l = (t, e, i) => {
                let l = { type: a.K.Various, meta: { id: t.id }, from: i || '' };
                return (
                    void 0 !== t.albumId && (l = { type: a.K.Album, meta: { id: t.albumId }, from: i || '' }),
                    { contextData: l, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        50880: (t) => {
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
        57382: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionShelfLikedPage: () => S });
            var a = i(32290),
                l = i(63618),
                s = i(96103),
                r = i(55178),
                o = i(60900),
                n = i(39407),
                _ = i(21732),
                d = i(6752),
                c = i(71926),
                u = i(64170),
                m = i(88446),
                A = i(7999),
                C = i(94631),
                p = i(83808),
                x = i(83920),
                E = i(3796),
                k = i(31286),
                h = i(57594),
                T = i(98350),
                b = i(11262),
                v = i(58054),
                N = i(32468),
                M = i(74694),
                y = i(34223),
                g = i(45257),
                I = i(30294),
                f = i(40015),
                P = i(40498),
                w = i(25638),
                L = i.n(w);
            let S = (0, s.PA)(() => {
                let {
                        settings: { isMobile: t },
                        collection: { shelfLiked: e },
                    } = (0, h.g)(),
                    { contentScrollRef: i, setContentScrollRef: s } = (0, x.g)(),
                    w = (0, p.W)(),
                    { formatMessage: S } = (0, o.A)(),
                    j = (0, k.w)(),
                    B = (0, r.useCallback)(
                        (t) => {
                            e.getData({ page: t, pageSize: I.c });
                        },
                        [e],
                    );
                (0, b.X)(e.pagesLoader, B);
                let D = (0, d.L)(() => ({ Footer: () => (0, a.jsx)(N.A, { children: (0, a.jsx)(v.w, { className: L().footer }) }) })),
                    Y = e.isShimmerVisible ? 20 : e.items.length;
                return ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, E.J)(e.isResolved),
                e.isNeededToLoad && (0, r.use)(e.getData({ pageSize: I.c })),
                e.isRejected)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, a.jsx)(P.F, { title: S({ id: 'error-messages.empty-shelf-liked-page-title' }) })
                      : (0, a.jsx)(A.h, {
                            scrollElement: i,
                            outerTitle: S({ id: 'podcast.shelf-liked-title' }),
                            children: (0, a.jsxs)('div', {
                                className: L().root,
                                'data-test-id': _.Xk.collection.COLLECTION_SHELF_LIKED_PAGE,
                                children: [
                                    (0, a.jsx)(M.Y, {
                                        variant: M.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: w.canBack,
                                        children: (0, a.jsx)(c.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(n.A, { id: 'podcast.shelf-liked-title' }),
                                        }),
                                    }),
                                    (0, a.jsx)(g.$, {
                                        className: (0, l.$)(L().scrollContainer, L().important),
                                        customComponents: D,
                                        itemContentCallback: (t) => {
                                            let i = e.items[t];
                                            if (!i) return (0, a.jsx)(y.D, { variant: T.X.PLAYLIST, isActive: !0 }, t);
                                            if (i.album) return (0, a.jsx)(m.M, { album: i.album }, i.album.getKey(t));
                                            let l = j(t, (0, f.q)(i.track, t, e.typeForFrom));
                                            return (0, a.jsx)(C.K, { track: i.track, playContextParams: l, withPodcastName: !0 }, i.track.getKey(t));
                                        },
                                        initialItemCount: Y,
                                        totalCount: Y,
                                        onGetDataByPage: B,
                                        pageSize: I.c,
                                        totalRequests: e.requestsCount,
                                        listClassName: L().content,
                                        itemClassName: L().item,
                                        handleRef: s,
                                        context: { listAriaLabel: S({ id: 'podcast.shelf-liked-title' }) },
                                        isMobileLayout: t,
                                        useWindowScroll: t,
                                    }),
                                ],
                            }),
                        });
            });
        },
        59238: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 57382));
        },
        59449: (t) => {
            t.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        78570: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => m });
            var a = i(32290),
                l = i(63618),
                s = i(60900),
                r = i(21732),
                o = i(6752),
                n = i(82586),
                _ = i(71926),
                d = i(13798),
                c = i(31640),
                u = i.n(c);
            let m = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: i,
                        description: c,
                        getDescriptionTexts: m,
                        explicitMarkVariant: A,
                        className: C,
                        version: p,
                        title: x,
                        artistsComponent: E,
                        likesCount: k,
                        isLiked: h,
                        releaseYear: T,
                        titleLineClamp: b = 1,
                    } = t,
                    { formatMessage: v, formatNumber: N } = (0, s.A)(),
                    M = (0, o.L)(() => {
                        let t = null == E ? void 0 : E((0, l.$)(u().text, u().artistLink), (0, l.$)(u().text, u().artistCaption));
                        if (!t && !k) return;
                        let e = (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof k &&
                                    k > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': v({ id: 'entity-names.likes-counter' }, { counter: k }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(n.I, {
                                                className: u().icon,
                                                variant: h ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: N(k),
                                            }),
                                        ],
                                    }),
                                !!k && t && e,
                                t,
                                !!T && t && e,
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', children: T }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, l.$)(u().root, { [u().root_disabled]: i, [u().root_disliked]: e }, C),
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
                                        x,
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
                                A && (0, a.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: A }),
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
                        M,
                    ],
                });
            };
        },
        88446: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => U });
            var a = i(32290),
                l = i(63618),
                s = i(96103),
                r = i(55178),
                o = i(16172),
                n = i(21732),
                _ = i(71483),
                d = i(91027),
                c = i(6752),
                u = i(58359),
                m = i(71926),
                A = i(34883),
                C = i(7462),
                p = i(41677),
                x = i(71735),
                E = i(47745),
                k = i(2969),
                h = i(23352),
                T = i(72396),
                b = i(5537),
                v = i(84062),
                N = i(28999),
                M = i(90169),
                y = i(57594),
                g = i(5154),
                I = i(78570),
                f = i(1444),
                P = i(61258),
                w = i(40229),
                L = i(82586),
                S = i(63363),
                j = i(54391),
                B = i(92744),
                D = i(29268),
                Y = i(4008),
                R = i(20930),
                z = i.n(R);
            let O = (0, s.PA)((t) => {
                    var e;
                    let { className: i, album: s, likeIconSize: n = 'xxs' } = t,
                        { user: _, trailer: c } = (0, y.g)(),
                        u = (0, x.P)(),
                        { sendLikeSearchFeedback: m } = (0, N.z)(),
                        A = (0, S.K)(s),
                        [C, p] = (0, r.useState)(!1),
                        E = (0, d.c)(async () => {
                            C || s.isLiked || (p(!0), null == m || m()), await A();
                        }),
                        k = (0, j.F)(),
                        h = (0, d.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            c.openAlbumTrailer(s.id), k(o.ky.Album, String(s.id));
                        });
                    return (0, a.jsxs)('div', {
                        className: (0, l.$)(z().root, z().controls, i, { [z().controls_disabled]: !s.isAvailable }),
                        children: [
                            s.isAvailable &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(Y.WithOffline, {
                                            fallback: (0, a.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: n,
                                                className: (0, l.$)(z().item, z().likeIcon),
                                                isLiked: s.isLiked,
                                                onClick: E,
                                                disabled: !_.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = s.trailer) ? void 0 : e.isAvailable) &&
                                            (0, a.jsx)(Y.WithOffline, {
                                                fallback: (0, a.jsx)(D.k, {
                                                    className: (0, l.$)(z().item, z().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: h,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(z().item, z().item_buttonArrow),
                                children: (0, a.jsx)(L.I, { className: g.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                U = (0, s.PA)((t) => {
                    let { className: e, album: i, pageId: s, coverClassName: L, playButtonIconSize: S, likeIconSize: j, shouldShowReleaseYear: B, description: D } = t,
                        Y = (0, C.r)(i.type),
                        { ref: R, intersectionPropertyId: z } = (0, h.n)(),
                        { from: U } = (0, T.f)({ pageId: s }),
                        [$, H] = (0, r.useState)(!1),
                        K = (0, k.b)(),
                        V = (0, v.Z)(i.url),
                        W = (0, x.P)(),
                        { sendNavigateSearchFeedback: X, sendPlaySearchFeedback: F } = (0, N.z)(),
                        Q = (0, E.N)(),
                        {
                            paywall: { modal: q },
                        } = (0, y.g)(),
                        G = (0, b.N)(),
                        {
                            isPlaying: Z,
                            isCurrent: J,
                            togglePlay: tt,
                        } = (0, M.D)({ playContextParams: { contextData: { type: _.K.Album, meta: { id: i.id }, from: U }, loadContextMeta: !0 } }),
                        te = (0, A.c)({ album: i, callback: V }),
                        ti = (0, A.c)({ album: i, callback: tt }),
                        ta = (0, d.c)((t) => {
                            null == X || X(), Q({ to: o.QT.AlbumScreen }), te(t);
                        }),
                        tl = (0, d.c)(() => {
                            if (!W()) {
                                if (G) return void q.open();
                                $ || Z || (H(!0), null == F || F()), ti(), K(!Z);
                            }
                        }),
                        ts = (0, d.c)((t) => {
                            (0, u.P)(t, g.$f.ripple), ta(t);
                        }),
                        tr = (0, d.c)((t) => {
                            t.stopPropagation(), ta(t);
                        }),
                        to = (0, r.useCallback)(
                            (t) =>
                                (0, a.jsx)(w.q, {
                                    isAvailable: i.isAvailable,
                                    isDisliked: !1,
                                    coverUri: i.coverUri,
                                    title: i.title,
                                    className: (0, l.$)(g.$f.playButtonCell, L),
                                    alt: ''.concat(Y, ' ').concat(i.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [i.coverUri, i.isAvailable, i.title, L, Y],
                        ),
                        tn = null == to ? void 0 : to({ onPlayButtonClick: tl, isPlaying: Z, isCurrent: J, playButtonIconSize: S }),
                        t_ = (0, r.useMemo)(
                            () =>
                                i.url && i.isAvailable
                                    ? (0, a.jsx)(P.N, { className: (0, l.$)(g.$f.text, g.$f.titleLink), href: i.url, onClick: tr, children: i.title })
                                    : (0, a.jsx)(m.HL, { className: (0, l.$)(g.$f.text, g.$f.titleText), size: 'm', variant: 'div', type: 'text', children: i.title }),
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
                    return (0, a.jsxs)(f.C, {
                        ref: R,
                        'data-intersection-property-id': z,
                        className: (0, l.$)(g.$f.root, { [g.$f.root_disabled]: !i.isAvailable }, e),
                        'aria-label': tc,
                        onClick: ts,
                        'data-test-id': n.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tn,
                            (0, a.jsx)(I.r, {
                                isDisabled: !i.isAvailable,
                                version: i.version,
                                title: t_,
                                artistsComponent: td,
                                getDescriptionTexts: i.getDescriptionTexts,
                                explicitMarkVariant: i.explicitDisclaimer,
                                likesCount: i.isNonMusic ? i.actualLikesCount : void 0,
                                isLiked: i.isNonMusic ? i.isLiked : void 0,
                                releaseYear: i.isNonMusic && B ? i.year : void 0,
                                description: D,
                            }),
                            (0, a.jsx)(O, { className: g.$f.controlsBar, album: i, likeIconSize: j }),
                        ],
                    });
                });
        },
    },
    (t) => {
        t.O(
            0,
            [
                5718, 7034, 6347, 3183, 3931, 7972, 7231, 8868, 9763, 6639, 7258, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 3759, 7207, 4220, 9562, 7358,
            ],
            () => t((t.s = 59238)),
        ),
            (_N_E = t.O());
    },
]);
