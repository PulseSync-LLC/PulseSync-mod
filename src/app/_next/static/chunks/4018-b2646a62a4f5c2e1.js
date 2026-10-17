(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4018],
    {
        47: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        377: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        421: (e) => {
            e.exports = {
                root: 'Wizard_root__aW2c2',
                title: 'Wizard_title__L8ktt',
                description: 'Wizard_description__RFf2U',
                button: 'Wizard_button__lr8pa',
                buttonIcon: 'Wizard_buttonIcon__eOX3P',
                imagesWrapper: 'Wizard_imagesWrapper__tyqWr',
                images: 'Wizard_images__5rxec',
                paper: 'Wizard_paper__ijUgq',
                image: 'Wizard_image__k9AXl',
            };
        },
        738: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => z });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(39004),
                n = i(22939),
                c = i(71035),
                d = i(49656),
                m = i(51246),
                _ = i(86869),
                u = i(4254),
                p = i(99835),
                v = i(56348),
                h = i(17545),
                b = i(79367),
                C = i(47009),
                x = i(30290),
                A = i(61561),
                j = i(85686),
                N = i(85743),
                T = i(50209),
                I = i(27954),
                f = i(6323),
                S = i(32652),
                g = i(97522),
                R = i(26115),
                L = i(6342),
                y = i.n(L),
                k = i(8487),
                E = i(44031),
                w = i(61493),
                O = i(66738),
                P = i(34159),
                M = i(64720),
                D = i(49438),
                B = i(71996),
                V = i(78437),
                U = i(3407);
            let W = (0, r.PA)((e) => {
                    let { track: t, handleLikeButtonClick: i, handlePlayButtonClick: r, isPlaying: l } = e,
                        { trailer: n, user: _ } = (0, I.g)(),
                        [u, p] = (0, o.useState)(!1),
                        [v, h] = (0, o.useState)(!1),
                        C = (0, b.P)(),
                        x = (0, P.F)(),
                        A = (0, c.c)(() => {
                            (p(!u), h(!u));
                        }),
                        j = (0, c.c)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }),
                        N = (0, c.c)((e) => {
                            if ((e.stopPropagation(), C())) return void e.preventDefault();
                            (n.openTrackTrailer(t.id), x(E.DomainObjectType.Track, t.id));
                        }),
                        T = (0, d.L)(() => {
                            var e;
                            if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                                return (0, a.jsx)(
                                    V.n,
                                    {
                                        children: (0, a.jsx)(B.k, {
                                            className: (0, s.$)(y().trailerButton, y().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: N,
                                        }),
                                    },
                                    t.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(m.hg, {
                        isVisible: u || v,
                        className: y().controls,
                        labelText: (0, a.jsx)(k.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            D.D,
                            {
                                className: (0, s.$)(y().playButton, y().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: l,
                                onClick: r,
                            },
                            t.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            M.c,
                            {
                                className: (0, s.$)(y().likeButton, y().control),
                                isLiked: t.isLiked,
                                onClick: i,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: !_.isAuthorized,
                            },
                            t.getKey('LikeButton'),
                        ),
                        menuControl: (0, a.jsx)(
                            U._,
                            {
                                placement: 'bottom',
                                track: t,
                                onOpenChange: A,
                                open: u,
                                onClick: j,
                                className: (0, s.$)(y().menuButton, y().control),
                                icon: (0, a.jsx)(O.I, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                'data-test-id': w.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                            },
                            t.getKey('TrackContextMenu'),
                        ),
                        trailerControl: T,
                    });
                }),
                z = (0, r.PA)((e) => {
                    var t, i;
                    let { className: r, children: L, track: k, contentLinesCount: E, overrideContextType: w } = e,
                        { from: O } = (0, x.f)(),
                        {
                            track: P,
                            paywall: { modal: M },
                        } = (0, I.g)(),
                        { formatMessage: D } = (0, l.A)(),
                        [B, V] = (0, o.useState)(!1),
                        [U, z] = (0, o.useState)(!1),
                        { sendLikeSearchFeedback: H, sendPlaySearchFeedback: K, sendNavigateSearchFeedback: Y } = (0, N.z)(),
                        $ = (0, h.K)(k),
                        F = (0, j.Z)(null != (i = null == (t = k.mainAlbum) ? void 0 : t.url) ? i : ''),
                        X = (0, j.Z)(k.url),
                        G = (0, C.b)(),
                        Z = (0, b.P)(),
                        Q = (0, d.L)(() => {
                            var e;
                            let t = D({ id: 'entity-names.track-name' }, { trackName: k.title }),
                                i = k.isLiked ? D({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(t, ' ')
                                .concat(null != (e = k.version) ? e : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: q, togglePlay: J } = (0, T.D)({
                            playContextParams: {
                                contextData: { type: n.K.Various, meta: { id: k.entityId }, from: O, overrideContextType: w },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: k.entityId,
                        }),
                        ee = (0, c.c)(() => {
                            P.open({ trackId: k.id, albumId: k.albumId });
                        }),
                        et = (0, c.c)(() => {
                            (B || q || (V(!0), null == K || K()), J());
                        }),
                        ei = (0, p.c)({ album: k.mainAlbum, callback: F }),
                        ea = (0, R.w)({ track: k, callback: X }),
                        es = (0, R.w)({ track: k, callback: ee }),
                        er = (0, R.w)({ track: k, callback: et }),
                        eo = (0, A.N)(),
                        el = (0, c.c)(() => {
                            if (!Z()) {
                                if (eo) return void M.open();
                                (er(), G(!q));
                            }
                        }),
                        en = (0, c.c)(() => {
                            k.hasTrackLink && es();
                        }),
                        ec = (0, c.c)(() => {
                            (U || k.isLiked || (z(!0), null == H || H()), $());
                        }),
                        ed = (0, c.c)((e) => {
                            var t;
                            if (k.hasTrackLink) {
                                (null == Y || Y(), ea(e));
                                return;
                            }
                            k.hasAlbumLink && (null == (t = k.mainAlbum) ? void 0 : t.url) && ei(e);
                        }),
                        em = (0, d.L)(() => {
                            var e, t, i;
                            return k.hasTrackLink
                                ? (0, a.jsx)(g.N, {
                                      'aria-label': ''.concat(k.title, ' ').concat(null != (t = k.version) ? t : ''),
                                      className: y().titleLink,
                                      href: k.url,
                                      tabIndex: -1,
                                      onClick: ed,
                                      children: k.title,
                                  })
                                : k.hasAlbumLink && (null == (e = k.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(g.N, {
                                        'aria-label': ''.concat(k.title, ' ').concat(null != (i = k.version) ? i : ''),
                                        className: y().titleLink,
                                        href: k.mainAlbum.url,
                                        tabIndex: -1,
                                        onClick: ed,
                                        children: k.title,
                                    })
                                  : (0, a.jsx)(u.HL, { className: y().title, variant: 'span', children: k.title });
                        }),
                        e_ = (0, d.L)(() => {
                            var e, t;
                            let i = k.hasAlbumLink ? (null == (e = k.mainAlbum) ? void 0 : e.url) : void 0,
                                s = k.hasTrackLink ? k.url : i;
                            return s
                                ? (0, a.jsx)(g.N, {
                                      className: y().srTitleLink,
                                      href: s,
                                      onClick: ed,
                                      children: ''.concat(k.title, ' ').concat(null != (t = k.version) ? t : ''),
                                  })
                                : null;
                        }),
                        eu = (0, d.L)(() => {
                            if (k.isAvailable) return (0, a.jsx)(W, { track: k, isPlaying: q, handleLikeButtonClick: ec, handlePlayButtonClick: el });
                        });
                    return (0, a.jsx)(m.MN, {
                        className: (0, s.$)(y().root, r),
                        'aria-label': Q,
                        explicitMarkComponent: k.explicitDisclaimer && (0, a.jsx)(S.N, { getDescriptionTexts: k.getDescriptionTexts, variant: k.explicitDisclaimer }),
                        title: (0, a.jsxs)(u.HL, {
                            className: (0, s.$)(y().titleContainer, { [y().titleContainer_withVersion]: k.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !!e_ || void 0,
                            children: [em, k.version && (0, a.jsx)(u.HL, { className: y().version, variant: 'span', children: ' '.concat(k.version) })],
                        }),
                        srTitle: e_,
                        contentLinesCount: E,
                        view: (0, a.jsx)(_.t, {
                            className: y().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, s.$)(y().coverBlock, { [y().coverBlock_withTrackLink]: k.hasTrackLink }),
                                onClick: en,
                                children: [
                                    (0, a.jsx)(f.B, {
                                        className: y().image,
                                        src: k.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: Q,
                                        withAvatarReplace: !0,
                                        isAvailable: k.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    eu,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            v.i,
                            { className: y().artists, artists: k.artists, lineClamp: 1, linkClassName: y().artistLink, captionSize: 's', withLink: k.isNonUserGenerated },
                            k.getKey('description'),
                        ),
                        children: L,
                    });
                });
        },
        892: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            let a = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        960: (e) => {
            e.exports = {
                root: 'VerticalListItemShimmer_root__Ppz8c',
                infoContainer: 'VerticalListItemShimmer_infoContainer__ycrKq',
                textContainer: 'VerticalListItemShimmer_textContainer__kHkGo',
                title: 'VerticalListItemShimmer_title__z_x63',
                cover: 'VerticalListItemShimmer_cover__0SqgP',
                action: 'VerticalListItemShimmer_action__DvEuY',
            };
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(74631),
                o = i(39004),
                l = i(8487),
                n = i(4071),
                c = i(66738),
                d = i(4254),
                m = i(51790),
                _ = i(12558),
                u = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, o.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let v = (0, r.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: u().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: u().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(n.$, {
                                    ref: _,
                                    className: u().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: u().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, a.jsx)(m.$, { className: (0, s.$)(u().root, u().important), message: v, closeToast: i });
            };
        },
        2241: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        2277: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        2488: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => u });
            var a = i(25839),
                s = i(88204),
                r = i(74631),
                o = i(8487),
                l = i(61493),
                n = i(49656),
                c = i(4254),
                d = i(83418),
                m = i(26330),
                _ = i.n(m);
            let u = (0, s.PA)((e) => {
                let { id: t, concert: i, withCashback: s = !0, withInlineMeta: m = !1, titleSize: u = 'm' } = e,
                    p = [],
                    v = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == i ? void 0 : i.eventKind) &&
                    p.push(
                        (0, a.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, a.jsx)(o.A, { id: 'concerts.event-kind', values: { kind: i.eventKind } }),
                        }),
                    ),
                    (null == i ? void 0 : i.contentRating) &&
                        p.push(
                            v,
                            (0, a.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: i.contentRating,
                            }),
                        ));
                let h = (0, n.L)(() =>
                    (null == i ? void 0 : i.city)
                        ? (0, a.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: i.city,
                          })
                        : null,
                );
                return (
                    m && h && p.push(v, h),
                    (0, a.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, a.jsx)(c.HL, {
                                variant: 'div',
                                size: u,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == i ? void 0 : i.title,
                            }),
                            (0, a.jsx)('div', { className: _().info, children: p.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            !m && h,
                            s &&
                                (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(d.m, { className: _().cashback, valuePercent: i.cashbackValuePercent }),
                            s &&
                                !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(d.m, { className: _().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        2577: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        3656: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => m });
            var a = i(25839),
                s = i(82298),
                r = i(39004),
                o = i(61493),
                l = i(4254),
                n = i(98288),
                c = i(48631),
                d = i.n(c);
            let m = (e) => {
                let { datetime: t, className: i, monthClassName: c, dayClassName: m, weekdayClassName: _, withWeekday: u = !0, ...p } = e,
                    { formatDate: v } = (0, r.A)(),
                    h = ((e) => {
                        let { formatMessage: t } = (0, r.A)(),
                            i = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return i[new Date(e).getMonth()];
                    })(t);
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(d().root, i),
                    'aria-label': v(t, (0, n.s)()),
                    ...p,
                    'data-test-id': o.OA.concert.CONCERT_DATE,
                    children: [
                        (0, a.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, s.$)(d().month, c),
                            'data-test-id': o.OA.concert.CONCERT_DATE_MONTH,
                            children: h,
                        }),
                        (0, a.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, s.$)(d().day, m),
                            'data-test-id': o.OA.concert.CONCERT_DATE_DAY,
                            children: v(t, { day: 'numeric' }),
                        }),
                        u &&
                            (0, a.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, s.$)(d().weekday, _),
                                'data-test-id': o.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: v(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        3661: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        3940: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => x });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(39004),
                l = i(8487),
                n = i(44031),
                c = i(61493),
                d = i(71035),
                m = i(4071),
                _ = i(66738),
                u = i(4254),
                p = i(29481),
                v = i(27954),
                h = i(87490),
                b = i(96876),
                C = i.n(b);
            let x = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, v.g)(),
                    { formatMessage: b } = (0, o.A)(),
                    x = (0, p.N)(),
                    A = t && i,
                    j = (0, d.c)(() => {
                        (x({ to: n.AppScreen.MultivibeSendingInvitationScreen, objectType: n.DomainObjectType.Shortcut }), r.promoModal.open());
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(C().root, { [C().root_mobile]: A }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, a.jsxs)(m.$, {
                            className: (0, s.$)(C().button, { [C().button_mobile]: A }),
                            'aria-label': b({ id: 'interface-actions.create' }),
                            onClick: j,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, a.jsx)(h.b, { align: 'back', surfaceClassName: C().surface }),
                                (0, a.jsx)(h.b, {
                                    align: 'front',
                                    surfaceClassName: C().surface,
                                    children: (0, a.jsx)(_.I, { variant: 'add', size: A ? 'xxxs' : 'l', className: C().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: C().titleWrapper,
                            children: (0, a.jsx)(u.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, s.$)(C().title, { [C().title_mobile]: A }),
                                children: (0, a.jsx)(l.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        4073: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        5311: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => x });
            var a = i(25839),
                s = i(88204),
                r = i(39004),
                o = i(8487),
                l = i(61493),
                n = i(71035),
                c = i(66738),
                d = i(10820),
                m = i(76457),
                _ = i(53712),
                u = i(56120),
                p = i(27954),
                v = i(55491),
                h = i(14240),
                b = i(16386),
                C = i(74682);
            let x = (0, s.PA)((e) => {
                let { onOpenChange: t, open: i, placement: s, isFullscreenMobile: x = !1, icon: A, size: j, clip: N, ...T } = e,
                    { currentClipInfo: I, settings: f, user: S } = (0, p.g)(),
                    { formatMessage: g } = (0, r.A)(),
                    { shareLink: R, pathname: L } = (0, h.b)(_.Z.video.href, { query: { ids: String(N.clipId) } }),
                    y = x || f.isMobile;
                (0, u.N)(i);
                let k = (0, m.K)(N),
                    E = (0, n.c)(() => {
                        (I.setClipId(N.clipId), I.modal.open());
                    }),
                    w = { variant: v.Y.CLIP, id: N.clipId, title: N.title, path: L };
                return (0, a.jsxs)(d.W1, {
                    isMobile: y,
                    placement: s,
                    offsetOptions: -10,
                    open: i,
                    onOpenChange: t,
                    icon: A,
                    size: j,
                    containerDataTestId: l.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: g({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...T,
                    children: [
                        (0, a.jsx)(b.T, { onClick: k, isLiked: N.isLiked, disabled: !S.isAuthorized }),
                        (0, a.jsx)(C.H, { shareLink: R, entityMeta: w }),
                        (0, a.jsx)(d.Dr, {
                            onClick: E,
                            icon: (0, a.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': l.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, a.jsx)(o.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        6104: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => f });
            var a = i(25839),
                s = i(33660),
                r = i(74631),
                o = i(39004),
                l = i(45162),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                m = i(57549),
                _ = i(82298),
                u = i(8487),
                p = i(61493),
                v = i(69084),
                h = i(4254),
                b = i(34582),
                C = i(6323),
                x = i(97522),
                A = i(51790),
                j = i(54239),
                N = i.n(j);
            let T = (e) => {
                    let { closeToast: t, albumTitle: i, coverUri: s, isPresave: l, entityTitle: n, className: c } = e,
                        { formatMessage: d } = (0, o.A)(),
                        m = (0, r.useMemo)(
                            () => (l ? (0, a.jsx)(u.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(u.A, { id: 'notifications-info.removed-from' })),
                            [l],
                        ),
                        j = (0, r.useMemo)(
                            () => (l ? (0, a.jsx)(u.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(u.A, { id: 'notifications-info.from-collection' })),
                            [l],
                        ),
                        T = (0, r.useMemo)(
                            () =>
                                l
                                    ? d({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : d({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [l, n, d],
                        ),
                        I = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(h.HL, {
                                    className: N().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': p.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(u.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(h.HL, { className: N().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(x.N, {
                                            className: N().link,
                                            href: '/collection/albums?tab='.concat(b.H.UPCOMING_ALBUMS),
                                            title: String(j),
                                            children: (0, a.jsx)(h.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: j }),
                                        }),
                                    ],
                                }),
                            [n, m, j],
                        );
                    return (0, a.jsx)(A.$, {
                        className: (0, _.$)(N().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(v.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': T }) }), I] }),
                        cover: (0, a.jsx)(C.B, { className: N().image, src: s, size: 100, fit: 'cover', alt: i, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                I = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, a.jsx)(T, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                f = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, u] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, o.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(m.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        u(!0);
                        let o = await e.toggleLike();
                        (u(!1),
                            o === l.J.OK
                                ? i((0, a.jsx)(I, { upcomingAlbum: r }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(m.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, p]);
                };
        },
        6313: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => Z });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(39004),
                n = i(8487),
                c = i(44031),
                d = i(61493),
                m = i(71035),
                _ = i(49656),
                u = i(14693),
                p = i(51246),
                v = i(4254),
                h = i(79367),
                b = i(20258),
                C = i(42966),
                x = i(29481),
                A = i(47009),
                j = i(52512),
                N = i(10322),
                T = i(97952),
                I = i(85743),
                f = i(87201),
                S = i(27954),
                g = i(17226),
                R = i(41580),
                L = i(49438),
                y = i(74987),
                k = i(72720),
                E = i(78453),
                w = i(75159),
                O = i(66738),
                P = i(10820),
                M = i(83243),
                D = i(56120),
                B = i(95213),
                V = i(73723),
                U = i.n(V),
                W = i(46616);
            let z = (0, r.PA)((e) => {
                let { room: t, onOpenChange: i, onRenameClick: r, isRenamePending: n, onRoomSuccessExit: m, open: _, className: u, ...p } = e,
                    {
                        settings: { isMobile: v },
                    } = (0, S.g)(),
                    { formatMessage: h } = (0, l.A)(),
                    { handlePinClick: b, handleExitClick: C, isExitPending: x } = (0, B.O)({ room: t, onRoomSuccessExit: m }),
                    A = (0, M.l)({ mainObjectType: c.DomainObjectType.NonApplicable });
                return (
                    (0, D.N)(_),
                    (0, o.useEffect)(() => {
                        if (_)
                            return (
                                A(!0),
                                () => {
                                    A(!1);
                                }
                            );
                    }, [_, A]),
                    (0, a.jsx)(P.W1, {
                        ...p,
                        isMobile: v,
                        offsetOptions: 10,
                        open: _,
                        onOpenChange: i,
                        ariaLabel: h({ id: 'interface-actions.context-menu' }),
                        containerDataTestId: d.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                        size: 's',
                        icon: (0, a.jsx)(O.I, { size: 'xxs', variant: 'more' }),
                        color: 'secondary',
                        variant: 'default',
                        className: u,
                        menuClassName: (0, s.$)(U().root, { [U().root_mobile]: v }),
                        children: (0, a.jsx)(W.J, { room: t, onRenameClick: r, isRenamePending: n, onPinClick: b, onExitClick: C, isExitPending: x }),
                    })
                );
            });
            var H = i(6323),
                K = i(87490),
                Y = i(2241),
                $ = i.n(Y);
            let F = (e) => {
                let { align: t, controls: i, src: s, isDisabled: r = !1, isMobileLayout: o = !1 } = e;
                return (0, a.jsx)(K.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: $().surface,
                    overlayClassName: $().overlay,
                    children: (0, a.jsx)(H.B, {
                        size: 200,
                        fit: 'cover',
                        className: $().image,
                        src: s,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: o ? 'xxxs' : 'l',
                    }),
                });
            };
            var X = i(41359),
                G = i.n(X);
            let Z = (0, r.PA)((e) => {
                var t, i, r, O;
                let { room: P, contentLinesCount: M = 3, className: D, withMobileLayout: B = !1, onRoomSuccessExit: V } = e,
                    { pageId: U } = (0, T.$)(),
                    { ref: W, intersectionPropertyId: H } = (0, j.n)(),
                    {
                        settings: { isMobile: K },
                        multivibe: Y,
                        user: $,
                        freeAccess: X,
                    } = (0, S.g)(),
                    Z = (0, h.P)(),
                    { sendPlaySearchFeedback: Q } = (0, I.z)(),
                    [q, J] = (0, o.useState)(!1),
                    ee = (0, w.A)(P.wave),
                    et = (0, A.b)(),
                    ei = (0, C.m)(),
                    ea = (0, x.N)(),
                    { state: es, setState: er } = (0, u.e)(!1),
                    { state: eo, setState: el } = (0, u.e)(!1),
                    { state: en, toggleTrue: ec, toggleFalse: ed } = (0, u.e)(!1),
                    { formatMessage: em } = (0, l.A)(),
                    { editVibeRoom: e_, isPending: eu } = (0, E.h)(P),
                    ep = B && K,
                    ev = (en || es || eo) && !K,
                    {
                        isPlaying: eh,
                        isPaused: eb,
                        togglePlay: eC,
                    } = (0, f.B)({ seeds: null != (O = null == (t = P.wave) ? void 0 : t.seeds) ? O : [], pageIdForFrom: U, blockIdForFrom: c.EntityTypes.Multiwave }),
                    ex = ep && !P.isDisabled && (eh || eb),
                    eA = (0, m.c)(() => {
                        !(P.isDisabled || Z()) &&
                            (X.isVibeStartRestricted ||
                                (q || eh || (J(!0), null == Q || Q()),
                                eC(),
                                et(!eh),
                                ei({
                                    actionType: eh ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    ej = (0, m.c)(async () => {
                        (ei({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await ee());
                    }),
                    eN = (0, m.c)(() => {
                        if (P.isDisabled) {
                            (Y.setDisabledRoomId(P.id),
                                Y.disabledRoomInfoModal.open(),
                                ea({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        K && eA();
                    }),
                    eT = (0, m.c)((e) => {
                        (e && ea({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), er(e), el(e));
                    }),
                    eI = (0, m.c)((e) => {
                        e.target === e.currentTarget && (e.code === g.v.SPACE || e.code === g.v.ENTER) && (e.preventDefault(), eN());
                    }),
                    [ef, eS] = (0, o.useState)(!1),
                    eg = (0, o.useCallback)(
                        (e) => {
                            (eS(!1), e_(e), ei({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [e_, ei, eS],
                    ),
                    eR = (0, o.useCallback)(() => {
                        (eS(!0), ea({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [ea, eS]),
                    eL = (0, _.L)(() =>
                        (0, a.jsx)(N.n, {
                            pageId: b._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, a.jsx)(
                                z,
                                {
                                    room: P,
                                    onOpenChange: eT,
                                    open: es,
                                    isRenamePending: eu,
                                    onRenameClick: eR,
                                    returnFocus: !ef,
                                    className: (0, s.$)(G().menuControl, G().control, { [G().menuControl_mobile]: ep }),
                                    onRoomSuccessExit: V,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                P.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    ey = (0, _.L)(() => {
                        if (!P.isDisabled)
                            return (0, a.jsx)(
                                L.D,
                                {
                                    isPlaying: eh,
                                    onClick: eA,
                                    className: (0, s.$)(G().playControl, G().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                P.getKey('PlayButton'),
                            );
                    }),
                    ek = (0, _.L)(() => {
                        var e;
                        if (!P.isDisabled)
                            return (0, a.jsx)(
                                R.O,
                                {
                                    isPinned: null == (e = P.wave) ? void 0 : e.isPinned,
                                    onClick: ej,
                                    className: (0, s.$)(G().pinControl, G().control, { [G().pinControl_mobile]: ep }),
                                    withRipple: !1,
                                },
                                P.getKey('PinButton'),
                            );
                    }),
                    eE = P.isDisabled ? em({ id: 'multivibe.room-status-disabled' }) : em({ id: 'multivibe.room-status-enabled' }),
                    ew = em({ id: 'entity-names.vibe-room-name' }, { name: P.name, status: eE }),
                    eO = P.owner.cover.uri,
                    eP = null == (i = P.members[0]) ? void 0 : i.cover.uri,
                    eM = (null == (r = P.owner) ? void 0 : r.uid) && P.owner.uid === $.puid,
                    eD = eM ? eO : eP,
                    eB = eM ? eP : eO,
                    eV = (0, _.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(G().avatarsWrapper, {
                                [G().avatarsWrapper_mobile]: ep,
                                [G().avatarsWrapper_disabled]: P.isDisabled,
                                [G().avatarsWrapper_visible]: ev,
                            }),
                            children: [
                                (0, a.jsx)(F, {
                                    align: 'back',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: ep,
                                    src: eD,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ev, className: G().cardControls, radius: 'round', pinControl: ek }),
                                }),
                                (0, a.jsx)(F, {
                                    align: 'front',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: ep,
                                    src: eB,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ev, className: G().cardControls, radius: 'round', playControl: ey, menuControl: eL }),
                                }),
                                ex && (0, a.jsx)(y.P, { stopAnimation: eb, className: G().playingAnimation }),
                            ],
                        }),
                    ),
                    eU = (0, _.L)(() =>
                        P.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: G().unavailableStatus,
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, a.jsx)('span', { className: G().unavailableStatusDot }),
                                      (0, a.jsx)(v.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(n.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eW = (0, _.L)(() =>
                        ef
                            ? (0, a.jsx)('div', {
                                  className: G().textFieldContainer,
                                  children: (0, a.jsx)(k.A, {
                                      text: P.name,
                                      className: G().textField,
                                      onChangeFinish: eg,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: em({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': d.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, a.jsx)(v.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: P.isDisabled ? 1 : 2,
                                  className: (0, s.$)(G().roomName, { [G().roomName_disabled]: P.isDisabled, [G().roomName_mobile]: ep }),
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_NAME,
                                  children: P.name,
                              }),
                    );
                return (0, a.jsxs)(p.MN, {
                    ref: W,
                    className: (0, s.$)(G().root, { [G().root_mobile]: ep }, D),
                    contentLinesCount: ep ? 2 : M,
                    textPosition: ep ? 'left' : 'center',
                    'data-intersection-property-id': H,
                    wrapperClassName: (0, s.$)(G().cardWrapper, { [G().cardWrapper_mobile]: ep }),
                    view: eV,
                    'aria-label': ew,
                    tabIndex: 0,
                    onClick: eN,
                    onKeyDown: eI,
                    onFocus: ec,
                    onMouseEnter: ec,
                    onMouseLeave: ed,
                    onBlur: ed,
                    'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, a.jsxs)('div', { className: (0, s.$)(G().roomInfo, { [G().roomInfo_mobile]: ep }), 'aria-hidden': !0, children: [eW, eU] }), ep && eL],
                });
            });
        },
        6342: (e) => {
            e.exports = {
                root: 'TrackCard_root__kIpe1',
                srTitleLink: 'TrackCard_srTitleLink__ZVq_n',
                controls: 'TrackCard_controls__E7Y3L',
                cover: 'TrackCard_cover__tkVPB',
                coverBlock: 'TrackCard_coverBlock__WdvvQ',
                coverBlock_withTrackLink: 'TrackCard_coverBlock_withTrackLink__fDe6k',
                image: 'TrackCard_image__KsOFF',
                artists: 'TrackCard_artists__wH48n',
                artistLink: 'TrackCard_artistLink__aqLl7',
                titleContainer: 'TrackCard_titleContainer__YCcZk',
                titleContainer_withVersion: 'TrackCard_titleContainer_withVersion__fTRGu',
                title: 'TrackCard_title__BVLuv',
                titleLink: 'TrackCard_titleLink__NtPhm',
                version: 'TrackCard_version__7iPuj',
                playButton: 'TrackCard_playButton__ukJDd',
                likeButton: 'TrackCard_likeButton__Hejrk',
                menuButton: 'TrackCard_menuButton__XtYLf',
                trailerButton: 'TrackCard_trailerButton__nGqhD',
                control: 'TrackCard_control___huPc',
            };
        },
        7050: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var a = i(39004),
                s = i(71035);
            let r = () => {
                let { formatMessage: e, formatNumber: t } = (0, a.A)();
                return (0, s.c)((i) => {
                    var a, s;
                    return (null == (a = i.price) ? void 0 : a.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(i.price.value, { style: 'currency', currency: null == (s = i.price) ? void 0 : s.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        7272: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__xEvp3',
                cardLink: 'ArtistRecommendationCard_cardLink__oqxtE',
                info: 'ArtistRecommendationCard_info__CfnQI',
                playButton: 'ArtistRecommendationCard_playButton__pVx58',
                playIcon: 'ArtistRecommendationCard_playIcon__xNRJz',
            };
        },
        7341: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(89288),
                n = i(18412),
                c = i(80986),
                d = i(54199),
                m = i.n(d),
                _ = i(7429);
            let u = (0, r.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: r,
                            forwardRef: d,
                            isShimmerVisible: u,
                            isShimmerActive: p,
                            title: v,
                            description: h,
                            containerClassName: b,
                            headerClassName: C,
                            viewAllActionLink: x,
                            artistIdWithoutLink: A,
                            withVideo: j = !0,
                            clips: N,
                            headingVariant: T,
                            className: I,
                            shouldOpenModalOnCardClick: f = !0,
                            itemCounter: S,
                            ...g
                        } = e,
                        R = (0, o.useId)(),
                        L = (0, o.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, s.$)(m().root, I),
                        ref: d,
                        ...(0, l.OZ)(g),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: C,
                                labeledForId: R,
                                title: v,
                                description: h,
                                viewAllActionLink: x,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: L }),
                                headingVariant: T,
                                withDescription: !!h,
                            }),
                            (0, a.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: r,
                                isShimmerVisible: u,
                                isShimmerActive: p,
                                containerClassName: b,
                                artistIdWithoutLink: A,
                                withVideo: j,
                                clips: N,
                                shouldOpenModalOnCardClick: f,
                                itemCounter: S,
                                ref: L,
                                'aria-labelledby': R,
                            }),
                        ],
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        7429: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => h });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(59342),
                n = i(44031),
                c = i(5365),
                d = i(95314),
                m = i(15049),
                _ = i(56859),
                u = i(7987),
                p = i.n(u);
            let v = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: i,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: u,
                            isShimmerVisible: v,
                            isShimmerActive: h,
                            containerClassName: b,
                            artistIdWithoutLink: C,
                            withVideo: x = !0,
                            clips: A,
                            shouldOpenModalOnCardClick: j = !0,
                            itemCounter: N,
                        } = e,
                        T = (0, o.useId)(),
                        I = (0, o.useRef)(String((0, l.A)())),
                        f = (0, o.useMemo)(() => {
                            if (v) return Array.from({ length: 5 }, (e, t) => (0, a.jsx)(_.k, { isActive: h }, t));
                            return null == A
                                ? void 0
                                : A.map((e, t) =>
                                      (0, a.jsx)(
                                          d.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == A ? void 0 : A.length,
                                              objectId: String(e.clipId),
                                              children: (0, a.jsx)(m.F, {
                                                  titleClassName: i,
                                                  artistLinkClassName: r,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: C,
                                                  viewUuid: I.current,
                                                  shouldOpenModalOnCardClick: j,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [i, r, v, h, C, x, A, j]);
                    return (0, a.jsx)(c.F, {
                        className: (0, s.$)(p().itemCounter, { [p()['itemCounter_'.concat(N)]]: N }, b),
                        ref: t,
                        itemClassName: (0, s.$)(p().item, p().important, u),
                        'aria-labelledby': T,
                        children: f,
                    });
                }),
                h = (0, o.forwardRef)((e, t) => (0, a.jsx)(v, { forwardRef: t, ...e }));
        },
        7985: (e) => {
            e.exports = {
                root: 'MapBlock_root__lcL__',
                heading: 'MapBlock_heading__20gje',
                linkContainer: 'MapBlock_linkContainer__iO0dw',
                mapImage: 'MapBlock_mapImage__Qch0h',
                addressContainer: 'MapBlock_addressContainer__gFnzq',
                address: 'MapBlock_address__UofT6',
                metroStations: 'MapBlock_metroStations__T3Zpc',
            };
        },
        7987: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        8266: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            let a = (e, t) => {
                let i = new URL(window.location.href),
                    a = i.searchParams;
                return (a.set(e, t), (i.search = a.toString()), i.toString());
            };
        },
        8543: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => h });
            var a = i(25839),
                s = i(88204),
                r = i(74631),
                o = i(61493),
                l = i(10749),
                n = i(50209),
                c = i(27954),
                d = i(6349),
                m = i(2096),
                _ = i(77737),
                u = i(69730),
                p = i(4073),
                v = i.n(p);
            let h = (0, s.PA)((e) => {
                var t, i;
                let { track: s, playContextParams: p } = e,
                    h = (0, n.D)({ playContextParams: p, entityId: s.entityId }),
                    {
                        settings: { isMobile: b },
                    } = (0, c.g)(),
                    C = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: v().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [s],
                    );
                return (0, a.jsx)(u.C, {
                    track: s,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !b, track: s }),
                    beforeBlock: (0, a.jsx)(l.t, {
                        withIcon: !0,
                        className: v().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (i = s.chart) ? void 0 : i.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: C,
                    controls: (0, a.jsx)(m.Q, { track: s, className: v().controlsBarCell }),
                    ...h,
                    'data-test-id': o.Kq.track.TRACK_CHART,
                });
            });
        },
        9036: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => A });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(71035),
                n = i(49656),
                c = i(42853),
                d = i(61777),
                m = i(57138),
                _ = i(27954),
                u = i(44806),
                p = i(39985),
                v = i(892),
                h = i(61278),
                b = i.n(h),
                C = i(51083);
            let x = (0, r.PA)((e) => {
                    let { landing: t, block: i, isIntersecting: r, forwardRef: c, onLoad: m, className: h, containerClassName: x, ...A } = e,
                        {
                            isNeededToLoad: j,
                            isLoading: N,
                            isLoaded: T,
                            isRejected: I,
                            isShimmerVisible: f,
                            isShimmerActive: S,
                            isVisible: g,
                            id: R,
                            type: L,
                            meta: y,
                            data: k,
                            hasSentAnalyticsOnLoaded: E,
                            setHasSentAnalyticsOnLoaded: w,
                            setOutdated: O,
                            setIsNeededToLoad: P,
                        } = i;
                    if ((0, p.Q)(i)) return null;
                    let M = C.D[i.type],
                        D = (0, d.f)(),
                        { settings: B, experiments: V } = (0, _.g)(),
                        U = !V.checkExperiment(u.z.WebNextVirtualSkeleton, 'on') && B.browserInfo && !B.browserInfo.isSafari;
                    (0, o.useEffect)(() => {
                        (r || !g) && j && (0, v.v)(y) && t.getBlock(i);
                    }, [i, r, j, g, t, y]);
                    let W = (0, l.c)(() => {
                        t.getBlock(i);
                    });
                    ((0, o.useEffect)(() => {
                        (T || I) && (null == m || m());
                    }, [T, I, m]),
                        (0, o.useEffect)(() => {
                            !E && T && (D(), w(!0));
                        }, [E, T, D, w]));
                    let z = (0, n.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(c)) {
                            var e;
                            return null == (e = c.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return g
                        ? (0, a.jsx)(
                              M,
                              {
                                  setIsNeededToLoad: P,
                                  setOutdated: O,
                                  isLoaded: T,
                                  isLoading: N,
                                  isShimmerVisible: f,
                                  isShimmerActive: S,
                                  isRejected: I,
                                  tracksContainerClassName: b().tracksContainer,
                                  containerClassName: (0, s.$)(b().container, b().important, x),
                                  className: (0, s.$)({ [b().container_withContentVisibility]: U && z }, h),
                                  headerClassName: b().headerContainer,
                                  meta: y,
                                  data: k,
                                  type: L,
                                  ref: c,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': i.id,
                                  'data-test-id': i.type,
                                  ...A,
                                  onRefetch: W,
                              },
                              R,
                          )
                        : null;
                }),
                A = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(m.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(c.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(x, { ...t }),
                    });
                });
        },
        9713: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        10731: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        11148: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => S });
            var a,
                s,
                r = i(25839),
                o = i(82298),
                l = i(88204),
                n = i(74631),
                c = i(61493),
                d = i(49656),
                m = i(23818),
                _ = i(27954),
                u = i(44806),
                p = i(89288);
            let v = (e) => (0, p.a6)(e.replace('%%', '960x690_noncrop'));
            var h = i(8487),
                b = i(4254);
            function C() {
                return (C = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return n.createElement(
                    'svg',
                    C({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    a ||
                        (a = n.createElement(
                            'defs',
                            null,
                            n.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                n.createElement('stop', { stopColor: '#FF5C4D' }),
                                n.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                n.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            n.createElement('clipPath', { id: 'plusColorClip' }, n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    s ||
                        (s = n.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            n.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            n.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var A = i(77245),
                j = i.n(A);
            let N = (e) => {
                let { percent: t, className: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(j().root, i),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, r.jsx)(x, { 'aria-hidden': !0, className: j().icon }),
                        (0, r.jsx)(b.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: j().text,
                            children: (0, r.jsx)(h.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var T = i(3656),
                I = i(15915),
                f = i.n(I);
            let S = (0, l.PA)((e) => {
                let { uri: t, withMask: i, datetime: a, coverColor: s, cashbackPercent: l } = e,
                    { experiments: h } = (0, _.g)(),
                    [b, C] = (0, n.useState)(!1),
                    x = h.checkExperiment(u.z.NewConcertsTicketRedesign, 'on') && i,
                    A = h.checkExperiment(u.z.WebNextConcertsIdentityEventType, 'on'),
                    j = (0, n.useCallback)(() => {
                        C(!0);
                    }, []),
                    I = (0, d.L)(() => {
                        if (s)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: i, l: a } = (0, p.g8)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(i, '%, ')
                                        .concat(a <= 55 ? a + 20 : a - 20, '%)');
                                })(s),
                            };
                    }),
                    S = (0, d.L)(() =>
                        a
                            ? (0, r.jsxs)('div', {
                                  className: (0, o.$)(f().date, { [f().date_withEventType]: A }),
                                  children: [
                                      (0, r.jsx)(m._V, {
                                          className: f().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: j,
                                      }),
                                      b &&
                                          (0, r.jsx)(T.d, {
                                              className: f().root_withEventType,
                                              dayClassName: f().day_withEventType,
                                              weekdayClassName: f().weekday_withEventType,
                                              monthClassName: f().month_withEventType,
                                              datetime: a,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    g = (0, d.L)(() =>
                        a
                            ? (0, r.jsx)(T.d, {
                                  dayClassName: f().day,
                                  weekdayClassName: (0, o.$)(f().weekday, f().important),
                                  monthClassName: f().month,
                                  className: f().date,
                                  datetime: a,
                              })
                            : null,
                    );
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(f().root, { [f().root_withMask]: x }),
                    style: I,
                    children: [
                        (0, r.jsx)(m._V, {
                            className: f().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: v,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        a && (A ? S : g),
                        A && l && (0, r.jsx)(N, { className: f().cashback, percent: l }),
                    ],
                });
            });
        },
        11618: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        12288: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { l: () => a }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(a || (a = {})));
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        12704: (e) => {
            e.exports = {
                root: 'ArtistWithItemsShimmer_root__0UQ8u',
                actionItems: 'ArtistWithItemsShimmer_actionItems__drxv9',
                actionItem: 'ArtistWithItemsShimmer_actionItem__NksfP',
                actionCover: 'ArtistWithItemsShimmer_actionCover__4LUi8',
                actionTextContainer: 'ArtistWithItemsShimmer_actionTextContainer__Qijsx',
                actionText: 'ArtistWithItemsShimmer_actionText__nUSLH',
                actionText_title: 'ArtistWithItemsShimmer_actionText_title__cXusB',
            };
        },
        12779: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        13376: (e) => {
            e.exports = {
                positionIndicator: 'ArtistTopCard_positionIndicator__Bs_Ga',
                crownIcon: 'ArtistTopCard_crownIcon__yxAH3',
                progressIcon: 'ArtistTopCard_progressIcon__gHcbF',
                progressIcon_up: 'ArtistTopCard_progressIcon_up__PeHBx',
                progressIcon_down: 'ArtistTopCard_progressIcon_down__0PKeO',
                progressIcon_same: 'ArtistTopCard_progressIcon_same___SujQ',
                progressIcon_new: 'ArtistTopCard_progressIcon_new__w3wA6',
                listenTime: 'ArtistTopCard_listenTime__P1_jw',
            };
        },
        13728: (e) => {
            e.exports = {
                root: 'Q2vLumen_root__KMtjw',
                root_clickable: 'Q2vLumen_root_clickable__Yczhj',
                image: 'Q2vLumen_image__6dREJ',
                imageBlurred: 'Q2vLumen_imageBlurred__NyTmk',
                haze: 'Q2vLumen_haze__ZmnSW',
            };
        },
        14892: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        15049: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => B });
            var a = i(25839),
                s = i(82298),
                r = i(10508),
                o = i(88204),
                l = i(74631),
                n = i(39004),
                c = i(89288),
                d = i(61493),
                m = i(22939),
                _ = i(71035),
                u = i(51246),
                p = i(23818),
                v = i(86869),
                h = i(4254),
                b = i(56348),
                C = i(65189),
                x = i(63905),
                A = i(28003),
                j = i(67560),
                N = i(40110),
                T = i(20258),
                I = i(52512),
                f = i(30290),
                S = i(91907),
                g = i(68215),
                R = i(18639),
                L = i(77179),
                y = i(50209),
                k = i(27954),
                E = i(32652),
                w = i(97522),
                O = i(49438),
                P = i(87605),
                M = i(68891),
                D = i.n(M);
            let B = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: i,
                        artistLinkClassName: o,
                        clip: M,
                        withVideo: B = !0,
                        artistIdWithoutLink: V,
                        viewUuid: U,
                        shouldOpenModalOnCardClick: W = !0,
                    } = e,
                    { fullscreenVideoPlayer: z } = (0, k.g)(),
                    { formatMessage: H } = (0, n.A)(),
                    K = (0, j.C)(),
                    { from: Y } = (0, f.f)({ pageId: T._Q.VIDEO_PLAYER, contextId: z.state.contextId, contextType: m.K.Various, blockId: N.U.CLIPS }),
                    $ = (0, g.P)(null != (t = M.duration) ? t : 0),
                    F = (0, x.M)(U),
                    X = (0, C._)(U),
                    { ref: G, intersectionPropertyId: Z } = (0, I.n)({ callback: F }),
                    Q = (0, l.useRef)(null),
                    q = B && M.previewUrl,
                    J = (0, _.c)(() => {
                        Q.current && ((Q.current.currentTime = 0), Q.current.play());
                    }),
                    ee = (0, l.useMemo)(() => (0, r.A)(J, 500), [J]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = Q.current) || e.pause();
                    }),
                    ei = (0, l.useMemo)(() => z.ids.indexOf(M.clipId), [z, M.clipId]),
                    { isPlaying: ea, togglePlay: es } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: R.H.VARIOUS_CLIP_CONTEXT }, from: Y },
                            queueParams: { index: ei },
                            entitiesData: z.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(M.clipId),
                        sonataState: z.state,
                        playbackId: L.V.CLIP,
                    }),
                    er = W ? M.url : (0, A.J)(z.ids, ei),
                    eo = (0, _.c)(() => {
                        W ? (K([M.clipId]), X()) : ea || es();
                    }),
                    el = (0, P.X)({ clip: M, callback: eo }),
                    en = H({ id: 'entity-names.clip-name' }, { clipName: M.title }),
                    ec = (0, l.useMemo)(
                        () =>
                            M.isAvailable
                                ? (0, a.jsxs)(v.t, {
                                      radius: 'm',
                                      className: (0, s.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: el,
                                      children: [
                                          q &&
                                              (0, a.jsx)('video', {
                                                  className: D().media,
                                                  ref: Q,
                                                  poster: M.thumbnail && (0, c.oZ)(M.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, a.jsx)('source', { src: M.previewUrl, type: 'video/mp4' }),
                                              }),
                                          M.thumbnail &&
                                              (0, a.jsx)(p._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: M.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== M.duration &&
                                              (0, a.jsx)(h.HL, {
                                                  role: 'text',
                                                  'aria-label': $,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, S.E)(M.duration, M.duration) }),
                                              }),
                                          (0, a.jsx)(O.D, { variant: 'filled', className: D().playButton, onClick: el, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, a.jsx)(v.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, a.jsx)(p.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [$, M.isAvailable, M.thumbnail, M.previewUrl, M.duration, ee, et, el, q],
                    ),
                    ed = (0, l.useMemo)(
                        () =>
                            M.hasArtists
                                ? (0, a.jsx)(
                                      b.i,
                                      { linkClassName: (0, s.$)(D().artistLink, o), artists: M.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: V },
                                      M.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [V, M, o],
                    );
                return (0, a.jsx)(u.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        M.explicitDisclaimer &&
                        (0, a.jsx)(E.N, { getDescriptionTexts: M.getDescriptionTexts, variant: M.explicitDisclaimer, size: 'xxs' }, M.getKey('ExplicitMarkIcon')),
                    'aria-label': en,
                    srTitle: (0, a.jsx)(w.N, { className: D().srTitleLink, href: er, onClick: el, children: en }),
                    title: (0, a.jsxs)(
                        h.HL,
                        {
                            className: (0, s.$)(D().title, i),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, a.jsx)(w.N, {
                                    className: D().titleLink,
                                    href: er,
                                    tabIndex: -1,
                                    'aria-label': en,
                                    onClick: el,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: M.title,
                                }),
                                M.version && (0, a.jsx)(h.HL, { className: D().version, variant: 'span', children: ' '.concat(M.version) }),
                            ],
                        },
                        M.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        15541: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__wCua8',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__WLw0_',
                cover: 'ArtistRecommendationArtwork_cover__TvlIy',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__9OmSw',
            };
        },
        15693: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        15915: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        15937: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        16789: (e) => {
            e.exports = {
                root: 'ArtistRecommendationMeta_root__dC_aM',
                artists: 'ArtistRecommendationMeta_artists__niyXH',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__d6sv6',
                title: 'ArtistRecommendationMeta_title__c1754',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__OS5kY',
                avatars: 'ArtistRecommendationMeta_avatars__BxEpG',
                avatar: 'ArtistRecommendationMeta_avatar__C_PmW',
                artistNames: 'ArtistRecommendationMeta_artistNames__XOYKP',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__eCGdG',
                root_active: 'ArtistRecommendationMeta_root_active__gqS_L',
            };
        },
        17065: (e) => {
            e.exports = {
                root: 'InStyle_root__ZsdXE',
                controls: 'InStyle_controls__mGqhj',
                header: 'InStyle_header__C2AWP',
                important: 'InStyle_important__msPsl',
                tab: 'InStyle_tab__DeURY',
                tabCarousel: 'InStyle_tabCarousel__SXqBO',
                item: 'InStyle_item__e5_Qz',
            };
        },
        17109: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => p });
            var a = i(74631),
                s = i(67379),
                r = i(44031),
                o = i(69394),
                l = i(42220),
                n = i(59450),
                c = i(20258),
                d = i(29481),
                m = i(25488),
                _ = i(97952),
                u = i(84e3);
            let p = (e) => {
                let { artistId: t, viewUuid: i } = e,
                    p = (0, n.st)(),
                    { hash: v } = (0, n.gf)(),
                    { pageId: h } = (0, _.$)(),
                    { objectsCount: b, objectType: C, objectId: x, objectPosX: A, objectPosY: j, objectPos: N } = (0, m.J)(),
                    T = (0, d.N)(),
                    I = (0, u.U)(),
                    f = (0, a.useCallback)(
                        (e) => {
                            let i = (0, s.F)({
                                params: { hash: v, artistId: t, objectsCount: b, objectType: C, objectId: x, objectPosX: A, objectPosY: j, to: e },
                                logger: I,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && i && (0, o.U6)(p.evgenInstance, i);
                        },
                        [p, t, v, I, x, A, j, C, b],
                    ),
                    S = (0, a.useCallback)(
                        (e) => {
                            let a = (0, s.F)({
                                params: { hash: v, artistId: t, viewUuid: i, objectId: x, objectPos: N, to: e },
                                logger: I,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && a && i && (0, l.mh)(p.evgenInstance, a);
                        },
                        [p, t, v, I, x, N, i],
                    );
                return (0, a.useCallback)(
                    (e) => {
                        if (p && h && c.xK.includes(h))
                            switch (h) {
                                case c._Q.ARTIST:
                                    f(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    S(e);
                                    break;
                                case c._Q.SEARCH:
                                    T({ to: r.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [p, h, T, S, f],
                );
            };
        },
        18051: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            let a = (e, t) => {
                let i = e / 60;
                return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        18639: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        18791: (e) => {
            e.exports = {
                root: 'Q2vSuggestions_root__i22DA',
                loadingText: 'Q2vSuggestions_loadingText__BJVPX',
                'loading-shimmer': 'Q2vSuggestions_loading-shimmer__KVw_H',
                carousel: 'Q2vSuggestions_carousel__cmIj5',
                carouselWithArrows: 'Q2vSuggestions_carouselWithArrows__EscuL',
                'content-appear': 'Q2vSuggestions_content-appear__yrwAp',
                carouselWithArrows_arrowLeft_hidden: 'Q2vSuggestions_carouselWithArrows_arrowLeft_hidden__N_rpe',
                carouselWithArrows_arrowRight_hidden: 'Q2vSuggestions_carouselWithArrows_arrowRight_hidden__yiDMn',
                carouselWithArrows_arrow_hidden: 'Q2vSuggestions_carouselWithArrows_arrow_hidden__ZuI4D',
                controls: 'Q2vSuggestions_controls__SJZet',
                item: 'Q2vSuggestions_item__rDItX',
            };
        },
        19109: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        19185: (e) => {
            e.exports = { root: 'CollectionVibeRooms_root__TCV_x', multivibeNDA: 'CollectionVibeRooms_multivibeNDA__JAncX' };
        },
        19464: (e) => {
            e.exports = {
                root: 'ContinueListenTrack_root__JFzVe',
                cover: 'ContinueListenTrack_cover__E5zob',
                important: 'ContinueListenTrack_important__4_84V',
                metaTrack: 'ContinueListenTrack_metaTrack__hSIYC',
                content: 'ContinueListenTrack_content__xU2R9',
                textContainer: 'ContinueListenTrack_textContainer__zisLi',
                titleIcon: 'ContinueListenTrack_titleIcon__smcf_',
                title: 'ContinueListenTrack_title__LBdpD',
                explicitMark: 'ContinueListenTrack_explicitMark___eXOa',
                metaContainer: 'ContinueListenTrack_metaContainer__Yoo2N',
                playButton: 'ContinueListenTrack_playButton__5tT4s',
                progress: 'ContinueListenTrack_progress__CfJQP',
                fullCircle: 'ContinueListenTrack_fullCircle__xrROh',
                progressCircle: 'ContinueListenTrack_progressCircle__msDye',
            };
        },
        20006: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        21e3: (e) => {
            e.exports = {
                message: 'OverviewBlock_message__f41Rq',
                modal: 'OverviewBlock_modal__Jxiv2',
                modalHeader: 'OverviewBlock_modalHeader__nerV2',
                modalHeader_withTitle: 'OverviewBlock_modalHeader_withTitle__gjKhp',
                modalContent: 'OverviewBlock_modalContent__fw4fH',
                button: 'OverviewBlock_button__k7t4c',
                modalOverlay: 'OverviewBlock_modalOverlay__1dp_D',
            };
        },
        21532: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        21978: (e) => {
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
        22318: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
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
        23302: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { R: () => a }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(a || (a = {})));
        },
        23707: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        23782: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => S });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(39004),
                n = i(8487),
                c = i(61493),
                d = i(49656),
                m = i(4071),
                _ = i(51246),
                u = i(66738),
                p = i(86869),
                v = i(4254),
                h = i(6104),
                b = i(56348),
                C = i(52512),
                x = i(98288),
                A = i(27954),
                j = i(6323),
                N = i(32652),
                T = i(64720),
                I = i(22794),
                f = i.n(I);
            let S = (0, r.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: r, contentLinesCount: I } = e,
                    { user: S } = (0, A.g)(),
                    { ref: g, intersectionPropertyId: R } = (0, C.n)(),
                    { formatMessage: L, formatDate: y } = (0, l.A)(),
                    k = (0, h.P)(r),
                    E = r.getKey('PlayButton'),
                    w = r.getKey('LikeButton'),
                    O = (0, o.useMemo)(() => {
                        let e = L({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? L({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [L, r.title, r.isPresave]),
                    P = (0, d.L)(() =>
                        (0, a.jsxs)(p.t, {
                            className: f().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(j.B, { className: f().image, src: r.coverUri, size: 200, fit: 'cover', alt: O, withAvatarReplace: !0 }),
                                (0, a.jsx)(_.hg, {
                                    className: f().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: f().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(u.I, { variant: 'lock', size: 'xxs', className: f().lockIcon }),
                                            'aria-label': L({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        E,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        T.c,
                                        {
                                            className: (0, s.$)(f().control, f().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: k,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !S.isAuthorized,
                                        },
                                        w,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(_.MN, {
                    ref: g,
                    className: (0, s.$)(f().root, t),
                    'aria-label': O,
                    explicitMarkComponent: r.explicitDisclaimer && (0, a.jsx)(N.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, a.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    'data-intersection-property-id': R,
                    contentLinesCount: I,
                    view: P,
                    description: (0, a.jsx)(b.i, { className: f().artists, artists: r.artists, lineClamp: 1, linkClassName: f().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(v.HL, {
                            className: f().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: y(r.releaseDate, (0, x.s)()) } }),
                        }),
                        i,
                    ],
                });
            });
        },
        24850: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        24975: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        25323: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => Q });
            var a = i(25839),
                s = i(82298),
                r = i(10508),
                o = i(88204),
                l = i(74631),
                n = i(39004),
                c = i(89288),
                d = i(61493),
                m = i(22939),
                _ = i(71035),
                u = i(49656),
                p = i(11823),
                v = i(23818),
                h = i(86869),
                b = i(4254),
                C = i(56348),
                x = i(65189),
                A = i(63905),
                j = i(67560),
                N = i(40110),
                T = i(20258),
                I = i(52512),
                f = i(30290),
                S = i(91907),
                g = i(68215),
                R = i(85743),
                L = i(18639),
                y = i(77179),
                k = i(50209),
                E = i(27954),
                w = i(79856),
                O = i.n(w),
                P = i(77698),
                M = i(18284),
                D = i(49438),
                B = i(87605),
                V = i(68891),
                U = i.n(V),
                W = i(66738),
                z = i(76457),
                H = i(64720),
                K = i(6304),
                Y = i(5311),
                $ = i(19109),
                F = i.n($);
            let X = (0, o.PA)((e) => {
                let { className: t, clip: i, likeIconSize: r = 'xxs' } = e,
                    { user: o } = (0, E.g)(),
                    { sendLikeSearchFeedback: n } = (0, R.z)(),
                    c = (0, z.K)(i),
                    [m, u] = (0, l.useState)(!1),
                    [p, v] = (0, l.useState)(!1),
                    h = (0, _.c)(() => {
                        (m || i.isLiked || (u(!0), null == n || n()), c());
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(F().root, F().controls, t, { [F().controls_disabled]: !i.isAvailable }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(K.WithOffline, {
                                    fallback: (0, a.jsx)(H.c, {
                                        size: 'xs',
                                        iconSize: r,
                                        className: (0, s.$)(F().item, F().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: h,
                                        disabled: !o.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(Y.z, {
                                    placement: 'top-start',
                                    icon: (0, a.jsx)(W.I, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: i,
                                    className: (0, s.$)(F().contextMenu, { [F().contextMenu_visible]: p }),
                                    onOpenChange: v,
                                    open: p,
                                    'data-test-id': d.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                }),
                            ],
                        }),
                });
            });
            var G = i(60715),
                Z = i.n(G);
            let Q = (0, o.PA)((e) => {
                var t;
                let { clip: i, className: o, coverClassName: w, playButtonIconSize: V = 'xs', likeIconSize: W, viewUuid: z, shouldShowTimecode: H = !1 } = e,
                    { fullscreenVideoPlayer: K } = (0, E.g)(),
                    { formatMessage: Y } = (0, n.A)(),
                    $ = (0, g.P)(null != (t = i.duration) ? t : 0),
                    F = (0, x._)(z),
                    G = (0, A.M)(z),
                    { ref: Q, intersectionPropertyId: q } = (0, I.n)({ callback: G }),
                    { from: J } = (0, f.f)({ pageId: T._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: m.K.Various, blockId: N.U.CLIPS }),
                    [ee, et] = (0, l.useState)(!1),
                    { sendNavigateSearchFeedback: ei, sendPlaySearchFeedback: ea } = (0, R.z)(),
                    es = (0, j.C)(),
                    er = (0, l.useRef)(null),
                    eo = (0, _.c)(() => {
                        er.current && ((er.current.currentTime = 0), er.current.play());
                    }),
                    el = (0, l.useMemo)(() => (0, r.A)(eo, 500), [eo]),
                    en = (0, _.c)(() => {
                        var e;
                        null == (e = er.current) || e.pause();
                    }),
                    ec = (0, l.useMemo)(() => K.ids.indexOf(i.clipId), [K, i.clipId]),
                    { isPlaying: ed } = (0, k.D)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: L.H.VARIOUS_CLIP_CONTEXT }, from: J },
                            queueParams: { index: ec },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: K.state,
                        playbackId: y.V.CLIP,
                    }),
                    em = (0, _.c)(() => {
                        (es([i.clipId]), ee || ed || (et(!0), null == ea || ea()), null == ei || ei(), F());
                    }),
                    e_ = (0, B.X)({ clip: i, callback: em }),
                    eu = (0, _.c)((e) => {
                        ((0, p.P)(e, O().ripple), e_(e));
                    }),
                    ep = (0, u.L)(() =>
                        (0, a.jsx)(b.HL, {
                            className: (0, s.$)(O().text, O().titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    ev = (0, l.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = i.artists) ? void 0 : s.length)
                                ? (0, a.jsx)(C.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
                                : null;
                        },
                        [i.artists],
                    ),
                    eh = Y({ id: 'entity-names.clip-name' }, { clipName: i.title }),
                    eb = (0, u.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(h.t, {
                                  className: (0, s.$)(Z().cover, U().cover, U().cover_withoutOffset, w),
                                  radius: 'xs',
                                  onMouseEnter: el,
                                  onMouseLeave: en,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)('video', {
                                              className: U().media,
                                              ref: er,
                                              poster: i.thumbnail && (0, c.oZ)(i.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, a.jsx)('source', { src: i.previewUrl, type: 'video/mp4' }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(v._V, {
                                              className: U().image,
                                              src: i.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: c.oZ,
                                              alt: eh,
                                          }),
                                      void 0 !== i.duration &&
                                          H &&
                                          (0, a.jsx)(b.HL, {
                                              variant: 'span',
                                              className: (0, s.$)(U().duration, Z().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': $,
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, S.E)(i.duration, i.duration) }),
                                          }),
                                      (0, a.jsx)(D.D, { variant: 'filled', className: U().playButton, onClick: e_, iconSize: V }),
                                  ],
                              })
                            : (0, a.jsxs)(h.t, {
                                  className: (0, s.$)(Z().cover, Z().unavailable, w),
                                  radius: 'xs',
                                  children: [
                                      (0, a.jsx)(v.Ab, {
                                          className: U().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                      }),
                                      (0, a.jsx)(D.D, { variant: 'filled', className: U().playButton, iconSize: V, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(M.C, {
                    ref: Q,
                    'data-intersection-property-id': q,
                    className: (0, s.$)(O().root, { [O().root_disabled]: !i.isAvailable }, Z().root, o),
                    onClick: eu,
                    'data-test-id': d.Kq.clip.HORIZONTAL_CLIP_CARD,
                    children: [
                        eb,
                        (0, a.jsx)(P.r, {
                            isDisabled: !i.isAvailable,
                            title: ep,
                            artistsComponent: ev,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)(X, { className: O().controlsBar, clip: i, likeIconSize: W }),
                    ],
                });
            });
        },
        25793: (e) => {
            e.exports = {
                root: 'CollectionVibeAgent_root__Ckkcd',
                container: 'CollectionVibeAgent_container__Vnapv',
                text: 'CollectionVibeAgent_text__WYNR_',
                playButton: 'CollectionVibeAgent_playButton__YANpE',
                coverShimmer: 'CollectionVibeAgent_coverShimmer__q32bW',
                shimmerContainer: 'CollectionVibeAgent_shimmerContainer__4wBoC',
                item: 'CollectionVibeAgent_item__X8a1I',
                important: 'CollectionVibeAgent_important__FEcUJ',
            };
        },
        26330: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        26779: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__WYRFP',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__HBKka',
                subTitle: 'ArtistPick_subTitle__5SJFj',
                text: 'ArtistPick_text__sIhNG',
                smallCoverContainer: 'ArtistPick_smallCoverContainer__iBgJu',
                cover: 'ArtistPick_cover__9utVr',
                smallCover: 'ArtistPick_smallCover__6NSnL',
                shimmerCover: 'ArtistPick_shimmerCover__HIauy',
            };
        },
        27395: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__Wc3mw',
                cardLink: 'ArtistRecommendationCard_cardLink__21zGd',
                playButton: 'ArtistRecommendationCard_playButton__e5HmA',
                root_active: 'ArtistRecommendationCard_root_active__tQIo2',
            };
        },
        27819: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            let a = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        28189: (e) => {
            e.exports = {
                root: 'SearchHistory_root__0z_bV',
                fallback: 'SearchHistory_fallback____oTN',
                button: 'SearchHistory_button__LBJeT',
                content: 'SearchHistory_content__wSN8E',
            };
        },
        28342: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoBig_controls__QUaQD',
                root: 'ArtistRecommendationsPromoBig_root__rpYBw',
                header: 'ArtistRecommendationsPromoBig_header__5U0Kb',
                carousel: 'ArtistRecommendationsPromoBig_carousel__7gpmw',
                item: 'ArtistRecommendationsPromoBig_item__JrrOG',
                important: 'ArtistRecommendationsPromoBig_important__NefdH',
            };
        },
        28777: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x, D: () => b });
            var a = i(25839),
                s = i(82298),
                r = i(26508),
                o = i(74631),
                l = i(89288),
                n = i(44031),
                c = i(61493),
                d = i(5365),
                m = i(26742),
                _ = i(95314),
                u = i(18412),
                p = i(80986),
                v = i(21978),
                h = i.n(v),
                b = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let C = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: v,
                            isColumnsShimmerVisible: b,
                            isHeaderWithoutControls: C,
                            maxColumnsCount: x,
                            carouselItemClassName: A,
                            carouselClassName: j,
                            children: N,
                            itemsCountPerColumn: T,
                            shimmer: I,
                            viewAllActionLink: f,
                            blockHeaderClassName: S,
                            additionalControl: g,
                            blockHeaderDescription: R,
                            blockHeaderTitle: L,
                            blockHeaderCoverUrl: y,
                            withBlockHeaderDescription: k,
                            withBlockHeaderCover: E,
                            blockHeaderHeadingVariant: w,
                            isShimmerActive: O,
                            shouldResetCarouselScroll: P,
                            beforeCarousel: M,
                            ...D
                        } = e,
                        { objectsCount: B } = (0, m.N)(),
                        [V, U] = (0, o.useState)(),
                        W = (0, o.useId)(),
                        z = (0, o.useRef)(null),
                        H = 'two' === x,
                        K = 'string' == typeof f ? String(f) : void 0,
                        Y = null != b ? b : v,
                        $ = (0, o.useCallback)(
                            (e) => {
                                let t = (0, r.A)(e, T).slice(0, H ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, a.jsx)('div', { className: h().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [T, H],
                        ),
                        F = (0, o.useMemo)(() => {
                            if (Y) return $(Array.from({ length: 2 * T }, (e, t) => (0, o.cloneElement)(I, { key: t })));
                            return $(N);
                        }, [N, $, Y, T, I]),
                        X = (0, o.useMemo)(
                            () =>
                                C
                                    ? null
                                    : (0, a.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [g, (0, a.jsx)(p.X, { carouselRef: z, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [g, C],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            z.current && P && z.current.scrollTo(0, 0);
                        }, [P]),
                        (0, a.jsxs)('section', {
                            ref: i,
                            className: (0, s.$)(h().root, t),
                            ...(0, l.OZ)(D),
                            children: [
                                (0, a.jsx)(_.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: K,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != B ? B : 0,
                                    children: (0, a.jsx)(u.T, {
                                        coverUrl: y,
                                        title: L,
                                        description: R,
                                        className: S,
                                        labeledForId: W,
                                        viewAllActionLink: f,
                                        controls: X,
                                        isShimmerVisible: v,
                                        isShimmerActive: O,
                                        withDescription: k,
                                        withCover: E,
                                        headingVariant: w,
                                    }),
                                }),
                                M,
                                (0, a.jsx)(d.F, {
                                    itemClassName: (0, s.$)(h().item, h()['item_columns_'.concat(Y && H ? 'two' : V)], A),
                                    className: j,
                                    ref: z,
                                    'aria-labelledby': W,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: F,
                                }),
                            ],
                        })
                    );
                },
                x = (0, o.forwardRef)((e, t) => (0, a.jsx)(C, { forwardRef: t, ...e }));
        },
        28924: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => l });
            var a = i(25839),
                s = i(23976),
                r = i(73367),
                o = i.n(r);
            let l = (e) => {
                let { isActive: t, withMeta: i, withPriceButton: r } = e;
                return (0, a.jsxs)('div', {
                    className: o().root,
                    children: [
                        (0, a.jsx)(s.W, { radius: 'm', className: o().shimmerCover, isActive: t }),
                        (0, a.jsxs)('div', {
                            className: o().meta,
                            children: [
                                (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerTitle }),
                                i &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerInfo }),
                                            (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        r && (0, a.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                    ],
                });
            };
        },
        29504: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => a });
            var a = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        29671: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { z: () => a }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(a || (a = {})));
        },
        29809: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        30787: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let a = (e, t) => {
                let [i, a] = e.split('?'),
                    s = new URLSearchParams(a || '');
                for (let [e, i] of new URLSearchParams(t).entries()) s.set(e, i);
                let r = s.toString();
                return ''.concat(i).concat(r ? '?'.concat(r) : '');
            };
        },
        31585: (e) => {
            e.exports = {
                root: 'Vibes_root__Bk6PF',
                controls: 'Vibes_controls__bUp2H',
                header: 'Vibes_header__RcW5b',
                important: 'Vibes_important__Vew_4',
                tab: 'Vibes_tab__uOfqW',
                tabShimmer: 'Vibes_tabShimmer__hjehH',
                tabCarousel: 'Vibes_tabCarousel__bSvp0',
            };
        },
        32113: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => Q });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(84059),
                l = i(74631),
                n = i(61493),
                c = i(71035),
                d = i(91886),
                m = i(5867),
                _ = i(95858),
                u = i(39058),
                p = i(89192),
                v = i(27954),
                h = i(44806),
                b = i(36159),
                C = i(6969),
                x = i(8266),
                A = i(83918),
                j = i(10603),
                N = i(27625),
                T = i(79396),
                I = i(9931),
                f = i(892),
                S = i(39985),
                g = i(9036),
                R = i(42853),
                L = i(57138),
                y = i(36545);
            let k = (0, r.PA)((e) => {
                    let { block: t, forwardRef: i, onLoad: s, ...r } = e;
                    if (
                        ((0, l.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, S.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let o = y.Y[t.type];
                    return (0, a.jsx)(o, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...r });
                }),
                E = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(L.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(R.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(k, { ...t }),
                    });
                }),
                w = (0, r.PA)((e) => ((0, S.Q)(e.block) ? (0, a.jsx)(E, { ...e }) : (0, a.jsx)(g.Z, { ...e })));
            var O = i(43538),
                P = i.n(O),
                M = i(28410),
                D = i(91149),
                B = i(92942),
                V = i(1466);
            let U = (e) => {
                    let { landing: t, tab: i } = e,
                        { notify: s, dismiss: r } = (0, B.l)(),
                        o = (0, l.useRef)(void 0),
                        n = (0, c.c)(() => {
                            (i.blocks.forEach((e) => {
                                e.isRejected && (0, f.v)(e.meta) && t.getBlock(e);
                            }),
                                r({ notificationId: o.current }),
                                i.setShouldReloadNotification(!1));
                        });
                    ((0, l.useEffect)(() => {
                        i.hasErrorBlocks &&
                            !i.shouldReloadNotification &&
                            setTimeout(() => {
                                ((o.current = s((0, a.jsx)(V.L, { reloadBlocks: n }), { containerId: D.u.ERROR, autoClose: !1 })), i.setShouldReloadNotification(!0));
                            });
                    }, [s, n, i.hasErrorBlocks, i.shouldReloadNotification, i]),
                        (0, l.useEffect)(
                            () => () => {
                                (r(), (0, M._n)(i) && i.setShouldReloadNotification(!1));
                            },
                            [r, i],
                        ));
                },
                W = (0, r.PA)((e) => {
                    var t;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        o = (0, l.useMemo)(() => s.blocks.map(() => (0, l.createRef)()), [s.blocks]),
                        n = (0, d.BL)(o, { freezeOnceVisible: !0 });
                    return (
                        U({ landing: i, tab: s }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: s.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, a.jsx)('div', {
                                    className: P().root,
                                    children: s.blocks.map((e, t) => {
                                        let { isIntersecting: s } = n[e.id] || {};
                                        return (0, a.jsx)(w, { landing: i, block: e, blockIndex: t, isIntersecting: s, forwardRef: o[t] }, e.id);
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var z = i(62560),
                H = i(68934),
                K = i(52312),
                Y = i(80504),
                $ = i(37733),
                F = i.n($);
            let X = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: i, resizeObserver: s, isScrolling: r, style: o, ...n } = e,
                        [c, m] = (0, H.d)(),
                        [_, u] = (0, H.d)(),
                        { isIntersecting: p } =
                            null != (t = (0, d.BL)([{ current: c }], !c || (null == c ? void 0 : c.dataset.intersectionPropertyId) !== n.block.id)[n.block.id]) ? t : {};
                    return (
                        (0, l.useEffect)(
                            () => (
                                _ && s && s.observe(_),
                                () => {
                                    _ && s && s.unobserve(_);
                                }
                            ),
                            [_, s],
                        ),
                        (0, a.jsx)('div', {
                            'data-index': i.index,
                            className: F().root,
                            ref: u,
                            style: o,
                            children: (0, a.jsx)(w, { ...n, forwardRef: m, isIntersecting: p && !r }),
                        })
                    );
                }),
                G = (0, r.PA)((e) => {
                    var t, i;
                    let { landing: s, tab: r, tabIndex: n } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, v.g)(),
                        [p, h] = (0, H.d)(),
                        b = (0, l.useRef)(!0),
                        [x, A] = (0, l.useState)(() => Array.from({ length: r.blocks.length }, (e, t) => t)),
                        j = (0, c.c)(() => {
                            let e = [];
                            (r.blocks.forEach((t, i) => {
                                var a;
                                (t.isVisible || ((null == (a = t.meta) ? void 0 : a.showPolicy) === z.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(i);
                            }),
                                A(e));
                        }),
                        N = (0, c.c)((e) => {
                            let t = x[e];
                            if (void 0 === t) return 300;
                            let i = r.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? Y.X[i.type] : 0;
                        }),
                        { virtualizer: T, resizeObserver: I } = (0, K.r)({
                            count: null != (i = x.length) ? i : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: N,
                            containerRef: p,
                        });
                    (0, l.useEffect)(() => {
                        var e;
                        if (!b.current) return;
                        let t = d.get(C.K.BLOCK),
                            i = r.blocks.findIndex((e) => e.id === t);
                        if (!x.includes(i)) return;
                        let a = null == (e = T.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (T.scrollToIndex(i, { align: 'center', behavior: 'auto' }), T.scrollOffset && a && 100 > Math.abs(T.scrollOffset - a) && (b.current = !1));
                    }, [x, d, r.blocks, T]);
                    let f = T.getTotalSize(),
                        S = T.getVirtualItems();
                    return (
                        U({ landing: s, tab: r }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: r.meta.id,
                                tabPos: n + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === n,
                                children: (0, a.jsx)('div', {
                                    className: P().root,
                                    style: { height: ''.concat(f, 'px') },
                                    ref: h,
                                    children: S.map((e) => {
                                        let t = x[e.index],
                                            i = r.blocks[Number(t)];
                                        return i
                                            ? (0, a.jsx)(
                                                  X,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: s,
                                                      block: i,
                                                      blockIndex: Number(t),
                                                      isScrolling: T.isScrolling,
                                                      onLoad: j,
                                                      style: { transform: 'translate3d(0, '.concat(e.start - T.options.scrollMargin, 'px, 0)') },
                                                  },
                                                  e.key,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        })
                    );
                }),
                Z = (0, r.PA)((e) => {
                    var t, i, r;
                    let {
                            landing: o,
                            upperBlocks: d,
                            headerConcealerComponent: _,
                            tabsState: u,
                            containerClassName: C,
                            containerStyle: x,
                            headerClassName: A,
                            tabWithHeadingTitle: f,
                            tabWithCovers: S,
                            tabWithSubtitle: g,
                            stickyHeaderClassName: R,
                            staticHeaderClassName: L,
                            stickyHeaderTabIndex: y,
                            headerVariant: k = j.V.COMPOSITE,
                        } = e,
                        { tabs: E } = o,
                        w = (0, l.useId)(),
                        { isScrolling: O } = (0, l.useContext)(N.B),
                        { contentScrollRef: M } = (0, p.g)(),
                        {
                            experiments: D,
                            settings: { isMobile: B },
                        } = (0, v.g)(),
                        V = D.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? G : W,
                        U = (0, c.c)((e) => {
                            var t;
                            (B ? window.scrollTo(0, 0) : M && (M.scrollTop = 0), null == (t = u.onTabChange) || t.call(u, e));
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            d,
                            _,
                            (0, a.jsx)(j.Y, {
                                className: (0, s.$)(P().header, A),
                                variant: k,
                                stickyClassName: R,
                                staticClassName: L,
                                stickyChild: (0, a.jsx)(I.wI, {
                                    isShimmerVisible: E.isLoading || o.isLoading,
                                    className: P().stickyTabs,
                                    shimmer: (0, a.jsx)(I.zr, {}),
                                    elementId: w,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    value: u.value,
                                    onTabChange: U,
                                    children:
                                        null == (t = E.data)
                                            ? void 0
                                            : t.flatMap((e, t) => {
                                                  let { meta: i, blocks: s } = e;
                                                  return s.length
                                                      ? [
                                                            (0, a.jsx)(
                                                                T.o,
                                                                {
                                                                    className: P().tab,
                                                                    value: t,
                                                                    'aria-label': i.title,
                                                                    title: i.title,
                                                                    'aria-hidden': !O && k !== j.V.STICKY,
                                                                    tabIndex: null != y ? y : O ? 0 : -1,
                                                                },
                                                                i.id,
                                                            ),
                                                        ]
                                                      : [];
                                              }),
                                }),
                                children: (0, a.jsx)(I.wI, {
                                    className: (0, s.$)(P().tabCarousel, P().important),
                                    elementId: w,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    ...u,
                                    children:
                                        null == (i = E.data)
                                            ? void 0
                                            : i.flatMap((e, t) => {
                                                  let { meta: i, data: s, blocks: r } = e;
                                                  return r.length
                                                      ? [
                                                            (0, a.jsx)(
                                                                T.o,
                                                                {
                                                                    className: P().tab,
                                                                    value: t,
                                                                    'aria-label': i.title,
                                                                    title: i.title,
                                                                    subtitle: null == s ? void 0 : s.subtitle,
                                                                    covers: null == s ? void 0 : s.covers,
                                                                    'aria-hidden': O,
                                                                    tabIndex: O ? -1 : 0,
                                                                    withCovers: S,
                                                                    withSubtitle: g,
                                                                    withHeading: f,
                                                                    isShimmerVisible: E.loadingState === b.G.PENDING,
                                                                },
                                                                i.id,
                                                            ),
                                                        ]
                                                      : [];
                                              }),
                                }),
                            }),
                            (0, a.jsx)('div', {
                                className: C,
                                style: x,
                                children:
                                    null == (r = E.data)
                                        ? void 0
                                        : r.map((e, t) =>
                                              e.blocks.length
                                                  ? (0, a.jsx)(
                                                        m.Kp,
                                                        {
                                                            className: P().tabPanel,
                                                            name: t,
                                                            value: u.value,
                                                            elementId: w,
                                                            children: (0, a.jsx)(V, { landing: o, tab: e, tabIndex: t }),
                                                        },
                                                        e.meta.id,
                                                    )
                                                  : null,
                                          ),
                            }),
                        ],
                    });
                }),
                Q = (0, r.PA)((e) => {
                    var t, i, s, r, n, c, p, b;
                    let {
                            landing: j,
                            headerConcealerComponent: N,
                            errorComponent: T,
                            containerClassName: I,
                            headerClassName: S,
                            containerStyle: g,
                            tabWithHeadingTitle: R,
                            tabWithCovers: L,
                            tabWithSubtitle: y,
                            staticHeaderClassName: k,
                            stickyHeaderClassName: E,
                            stickyHeaderTabIndex: O,
                            headerVariant: M,
                        } = e,
                        D = (0, o.useSearchParams)(),
                        B = (0, A.X)(),
                        V = ((e) =>
                            (0, l.useCallback)(
                                (t) => {
                                    var i;
                                    let a = null == (i = e.tabs.data) ? void 0 : i[t];
                                    null == a ||
                                        a.blocks.forEach((t) => {
                                            t.isOutdated && (0, f.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(j),
                        { experiments: U } = (0, v.g)(),
                        z = U.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? G : W,
                        H = (0, l.useMemo)(() => {
                            var e;
                            if (!j.isLoaded) return null;
                            let t = D.get(C.K.TAB),
                                i = null == (e = j.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof i && i >= 0 ? i : null;
                        }, [j.isLoaded, j.tabs.data, D]),
                        K = (0, m.zb)(null != (p = null != H ? H : null == (t = j.meta) ? void 0 : t.selectedTabIndex) ? p : 0),
                        Y = null != (b = null == (i = j.tabs.data) ? void 0 : i.findIndex((e) => e.blocks.length > 0)) ? b : -1,
                        $ = (null == (r = j.tabs.data) || null == (s = r[K.value]) ? void 0 : s.blocks.length) ? K.value : Y,
                        F = (0, l.useCallback)(
                            (e) => {
                                var t, i, a;
                                let s = null == (i = j.tabs.data) || null == (t = i[e]) ? void 0 : t.meta.id;
                                if ((e !== $ && V($), null == (a = K.onTabChange) || a.call(K, e), s)) {
                                    let e = (0, x.b)(C.K.TAB, s);
                                    e && B(e);
                                }
                            },
                            [$, B, j.tabs.data, V, K],
                        ),
                        X = !!(j.tabs.data && j.tabs.data.filter((e) => e.blocks.length > 0).length > 1),
                        Q = null == (n = j.tabs.data) ? void 0 : n[Y],
                        q = (0, l.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = j.upperBlocks) ? void 0 : e.map(() => (0, l.createRef)())) ? t : [];
                        }, [j.upperBlocks]),
                        J = (0, d.BL)(q, { freezeOnceVisible: !0 }),
                        ee = (0, l.useMemo)(() => {
                            var e;
                            if (null == (e = j.upperBlocks) ? void 0 : e.length)
                                return (0, a.jsx)(u.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, a.jsx)('div', {
                                        className: P().upperBlocks,
                                        children: j.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = J[e.id] || {};
                                            return (0, a.jsx)(w, { landing: j, block: e, blockIndex: t, isIntersecting: i, forwardRef: q[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (c = j.upperBlocks) ? void 0 : c.length, j, J, q]);
                    return X
                        ? (0, a.jsx)(Z, {
                              landing: j,
                              upperBlocks: ee,
                              headerConcealerComponent: N,
                              tabsState: { value: $, onTabChange: F },
                              containerClassName: I,
                              containerStyle: g,
                              headerClassName: S,
                              tabWithHeadingTitle: R,
                              tabWithCovers: L,
                              tabWithSubtitle: y,
                              staticHeaderClassName: k,
                              stickyHeaderClassName: E,
                              stickyHeaderTabIndex: O,
                              headerVariant: M,
                          })
                        : Q
                          ? (0, a.jsxs)('div', { className: I, style: g, children: [ee, N, (0, a.jsx)(z, { landing: j, tab: Q, tabIndex: Y })] })
                          : ee
                            ? (0, a.jsx)(_.j, { children: (0, a.jsxs)('div', { className: I, style: g, children: [ee, N] }) })
                            : j.isLoadedAndEmpty || (j.isLoaded && Y < 0)
                              ? (0, a.jsx)('div', { className: I, style: g, children: T })
                              : null;
                });
        },
        32801: (e) => {
            e.exports = {
                root: 'VibeButton_root___i3R5',
                ripple: 'VibeButton_ripple__cmoBR',
                textContainer: 'VibeButton_textContainer__j9nOW',
                title: 'VibeButton_title__sLC0I',
                title_long: 'VibeButton_title_long__gSVM5',
                subtitle: 'VibeButton_subtitle__MQ_Ca',
                image: 'VibeButton_image__GOwKJ',
                button: 'VibeButton_button__tXFAm',
                button_loading: 'VibeButton_button_loading__LYnUR',
                titleContainer: 'VibeButton_titleContainer__yrRRu',
                'applying-setting': 'VibeButton_applying-setting__Jd_3C',
                icon: 'VibeButton_icon__KIv7n',
            };
        },
        33130: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        34582: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        35465: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            let a = (e) => {
                let { index: t, count: i, itemsCountPerColumn: a = 4, showedItemsCountInBlock: s = 8 } = e;
                return { objectPosX: Math.floor(t / a) + 1, objectPosY: (t % a) + 1, objectsCount: i > s ? s : i };
            };
        },
        36545: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => x });
            var a = i(35522),
                s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                n = i(89288),
                c = i(49656),
                d = i(9036),
                m = i(377),
                _ = i.n(m);
            let u = (0, o.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.release)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.release });
                        }),
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.upcomingRelese)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.upcomingRelese });
                        }),
                        m = (0, c.L)(() => {
                            if (null == i ? void 0 : i.popularTracks)
                                return (0, s.jsx)(d.Z, {
                                    ...a,
                                    className: (0, r.$)(_().popularTracks, { [_().popularTracks_withReleaseBlock]: !!(null != l ? l : o) }),
                                    block: i.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: _().root,
                        ...(0, n.OZ)(a),
                        children: (0, s.jsxs)('div', { className: _().container, children: [m, null != l ? l : o] }),
                    });
                }),
                p = (0, l.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var v = i(15693),
                h = i.n(v);
            let b = (0, o.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        r = (0, c.L)(() => {
                            if (null == i ? void 0 : i.familiarYou) return (0, s.jsx)(d.Z, { ...a, block: i.familiarYou });
                        }),
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.artistPick) return (0, s.jsx)(d.Z, { ...a, block: i.artistPick });
                        });
                    return (0, s.jsxs)('section', { ref: t, className: h().root, ...(0, n.OZ)(a), children: [o, r] });
                }),
                C = (0, l.forwardRef)((e, t) => (0, s.jsx)(b, { forwardRef: t, ...e })),
                x = { [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: p, [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: C };
        },
        36573: (e) => {
            e.exports = {
                root_withControls: 'CollectionPlaylists_root_withControls__YV7o_',
                controls: 'CollectionPlaylists_controls___7XSv',
                header: 'CollectionPlaylists_header__EDtBS',
                important: 'CollectionPlaylists_important__oumcA',
                tab: 'CollectionPlaylists_tab__PppbA',
                tabShimmer: 'CollectionPlaylists_tabShimmer__U_ZFn',
                tabCarousel: 'CollectionPlaylists_tabCarousel__hWuL_',
                tabPanel: 'CollectionPlaylists_tabPanel__wSwRR',
                carouselEmpty: 'CollectionPlaylists_carouselEmpty__SVn6E',
                createPlaylistCard: 'CollectionPlaylists_createPlaylistCard__1cMca',
                item: 'CollectionPlaylists_item__YeviY',
            };
        },
        36648: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var a = i(25839),
                s = i(82298),
                r = i(23976),
                o = i(89728),
                l = i.n(o);
            let n = (e) => {
                let { className: t, textClassName: i, isActive: o } = e;
                return (0, a.jsx)('div', { className: (0, s.$)(l().root, t), children: (0, a.jsx)(r.W, { className: (0, s.$)(l().text, i), isActive: o, radius: 's' }) });
            };
        },
        37733: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        38907: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => w });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(44031),
                n = i(61493),
                c = i(71035),
                d = i(14693),
                m = i(11823),
                _ = i(4071),
                u = i(86869),
                p = i(52512),
                v = i(85686),
                h = i(27954),
                b = i(44806),
                C = i(25895),
                x = i(17109),
                A = i(67379),
                j = i(69394),
                N = i(42220),
                T = i(59450),
                I = i(20258),
                f = i(25488),
                S = i(97952),
                g = i(84e3),
                R = i(7050),
                L = i(64407),
                y = i(3656),
                k = i(47),
                E = i.n(k);
            let w = (0, r.PA)((e) => {
                let {
                        artistId: t,
                        concert: i,
                        meta: r,
                        viewUuid: k,
                        radius: w = 'l',
                        className: O,
                        shouldSendAnalyticsOnHide: P,
                        forceAfishaWidget: M,
                        shouldShowMask: D,
                    } = e,
                    { state: B, toggleTrue: V, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: W } = (0, h.g)(),
                    z = !M && W.checkExperiment(b.z.WebNextConcertPage, 'on'),
                    { href: H } = (0, C.u)('/concert/:concertId', { params: { concertId: i.id } }),
                    K = (0, v.Z)(H),
                    Y = ((e) => {
                        let { artistId: t, viewUuid: i } = e,
                            a = (0, T.st)(),
                            { hash: s } = (0, T.gf)(),
                            { pageId: r } = (0, S.$)(),
                            { objectsCount: l, objectType: n, objectId: c, objectPosX: d, objectPosY: m, objectPos: _ } = (0, f.J)(),
                            u = (0, g.U)(),
                            p = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, objectsCount: l, objectType: n, objectId: c, objectPosX: d, objectPosY: m },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && (0, j.HB)(a.evgenInstance, e);
                            }, [a, t, s, u, c, d, m, n, l]),
                            v = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, viewUuid: i, objectId: c, objectPos: _ },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && i && (0, N.Z4)(a.evgenInstance, e);
                            }, [a, t, s, u, c, _, i]);
                        return (0, o.useCallback)(() => {
                            if (a && r && I.xK.includes(r))
                                switch (r) {
                                    case I._Q.ARTIST:
                                    case I._Q.CONCERT:
                                        p();
                                        break;
                                    case I._Q.ARTIST_CONCERTS:
                                        v();
                                }
                        }, [a, r, v, p]);
                    })({ artistId: t, viewUuid: k }),
                    $ = (0, x.m)({ artistId: t, viewUuid: k }),
                    { ref: F, intersectionPropertyId: X } = (0, p.n)({ callback: null !== t ? Y : void 0, singleEvent: !P }),
                    G = (0, o.useId)(),
                    Z = (0, o.useId)(),
                    Q = (0, R.Y)()(i),
                    q = (0, c.c)((e) => {
                        ((0, m.P)(e, E().ripple), z && (K(e), $(l.FromArtistScreenTo.ConcertScreen)));
                    }),
                    J = (0, c.c)((e) => {
                        (V(), $(l.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, a.jsxs)(u.t, {
                    radius: w,
                    className: (0, s.$)(E().root, O, { [E().root_withConcertsRedesign]: i.isIdentityExperimentEnabled }),
                    ref: F,
                    'data-intersection-property-id': X,
                    onClick: q,
                    children: [
                        i.datetime &&
                            (0, a.jsx)(y.d, {
                                datetime: i.datetime,
                                id: G,
                                className: (0, s.$)(E().date, { [E().dateWithMask]: D, [E().important]: D }),
                                dayClassName: E().dateColor,
                                monthClassName: E().dateColor,
                            }),
                        (0, o.cloneElement)(r, { id: Z, concert: i }),
                        i.dataSessionId &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: E().button,
                                        'aria-describedby': ''.concat(G, ' ').concat(Z),
                                        'aria-label': Q,
                                        onClick: J,
                                        'data-test-id': n.OA.concert.CONCERT_CARD_BUTTON,
                                        children: Q,
                                    }),
                                    (0, a.jsx)(L.h, { dataSessionId: i.dataSessionId, isOpened: B, onOpen: V, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        38911: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        39985: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            var a = i(35522);
            let s = [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, a.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => s.includes(e.type);
        },
        41359: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        41915: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(61493),
                l = i(23302),
                n = i(23818),
                c = i(86869),
                d = i(4254),
                m = i(97522),
                _ = i(96104),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                let { className: t, title: i, weblink: r, covers: _ = [], coverSize: p = 100, imagesLayoutType: v, headingVariant: h = 'h3' } = e;
                return (0, a.jsx)(m.N, {
                    href: r,
                    'data-test-id': o.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        className: (0, s.$)(u().root, t),
                        radius: 'l',
                        children: [
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: h,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': o.OA.mix.MIX_CARD_HEADER,
                                    children: i,
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(u().covers, { [u().covers_radial]: v === l.R.RADIAL, [u().covers_stack]: v === l.R.STACK }),
                                'data-test-id': o.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, a.jsx)(n._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        42057: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => u });
            var a = i(25839),
                s = i(82298),
                r = i(74631),
                o = i(89288),
                l = i(5365),
                n = i(18412),
                c = i(80986),
                d = i(98547),
                m = i.n(d);
            let _ = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            headerClassName: d,
                            containerClassName: _,
                            headingVariant: u,
                            title: p,
                            viewAllActionLink: v,
                            description: h,
                            children: b,
                            ...C
                        } = e,
                        x = (0, r.useId)(),
                        A = (0, r.useRef)(null);
                    return (0, a.jsxs)('section', {
                        ref: i,
                        className: (0, s.$)(m().root, t),
                        ...(0, o.OZ)(C),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: d,
                                labeledForId: x,
                                title: p,
                                description: h,
                                viewAllActionLink: v,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: A }),
                                headingVariant: u,
                                withDescription: !!h,
                            }),
                            (0, a.jsx)(l.F, { ref: A, itemClassName: (0, s.$)(m().item, m().important), className: _, 'aria-labelledby': x, children: b }),
                        ],
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        42574: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s, u: () => r });
            var a = i(74631);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        42853: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(40110),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        43478: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => o });
            var a = i(74631),
                s = i(22939),
                r = i(70825);
            let o = (e) => {
                let { playlistId: t, filter: i } = e;
                return (0, a.useMemo)(() => (t ? (0, r.t)({ contextType: s.K.Playlist, contextId: t, filter: i }) : null), [t, i]);
            };
        },
        43538: (e) => {
            e.exports = {
                root: 'Skeleton_root__ANDaF',
                upperBlocks: 'Skeleton_upperBlocks__zI__5',
                tab: 'Skeleton_tab__Jn6By',
                tabPanel: 'Skeleton_tabPanel__Ke42U',
                tabCarousel: 'Skeleton_tabCarousel__E2kLf',
                important: 'Skeleton_important__ob12_',
                header: 'Skeleton_header__Ir5f4',
                stickyTabs: 'Skeleton_stickyTabs__I_uuk',
            };
        },
        44129: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => x });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(89288),
                n = i(61493),
                c = i(67467),
                d = i(4071),
                m = i(4254),
                _ = i(27954),
                u = i(21e3),
                p = i.n(u),
                v = i(39004),
                h = i(35622),
                b = i(89192);
            let C = (0, r.PA)((e) => {
                    let { message: t, title: i, className: r, credits: o, messageClassName: c } = e,
                        {
                            modals: { overviewModal: d },
                            settings: { isMobile: u },
                        } = (0, _.g)(),
                        { formatMessage: C } = (0, v.A)(),
                        { contentRef: x } = (0, b.g)();
                    return (0, a.jsxs)(h.a, {
                        title: i,
                        titleDataTestId: n.Kq.overview.OVERVIEW_MODAL_TITLE,
                        className: (0, s.$)(p().modal, r),
                        contentClassName: p().modalContent,
                        overlayClassName: p().modalOverlay,
                        headerClassName: (0, s.$)(p().modalHeader, { [p().modalHeader_withTitle]: i }),
                        size: 'fitContent',
                        placement: u ? 'default' : 'right',
                        open: d.isOpened,
                        onOpenChange: d.onOpenChange,
                        onClose: d.close,
                        portalNode: u ? null : x,
                        isMobile: u,
                        labelClose: C({ id: 'interface-actions.close' }),
                        'data-test-id': n.Kq.overview.OVERVIEW_MODAL,
                        closeButtonDataTestId: n.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON,
                        children: [
                            (0, a.jsx)(m.HL, {
                                className: (0, s.$)(p().message, c),
                                size: 'l',
                                variant: 'div',
                                dangerouslySetInnerHTML: { __html: (0, l.ky)(t) },
                                'data-test-id': n.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                            }),
                            o,
                        ],
                    });
                }),
                x = (0, r.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: i,
                            modalClassName: r,
                            creditsModal: u,
                            messageClassName: v,
                            messageModalClassName: h,
                            textButton: b,
                            withShowButton: x,
                        } = e,
                        A = (0, o.useRef)(null),
                        {
                            modals: { overviewModal: j },
                        } = (0, _.g)(),
                        { isTruncated: N } = (0, c.W)(A),
                        T = (N && t.isExpandable) || x;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(m.HL, {
                                ref: A,
                                className: (0, s.$)(p().message, v),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                dangerouslySetInnerHTML: { __html: (0, l.ky)(t.message || '') },
                                'data-test-id': n.Kq.overview.OVERVIEW_MESSAGE,
                            }),
                            T &&
                                t.message &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(d.$, {
                                            className: (0, s.$)(p().button, i),
                                            onClick: j.open,
                                            radius: 'xs',
                                            variant: 'text',
                                            color: 'secondary',
                                            withRipple: !1,
                                            'data-test-id': n.Kq.overview.OVERVIEW_FURTHER_BUTTON,
                                            children: (0, a.jsx)(m.HL, { size: 'm', variant: 'span', children: b }),
                                        }),
                                        (0, a.jsx)(C, { message: t.message, title: t.title, className: r, credits: u, messageClassName: h }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        44288: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => n });
            var a = i(25839),
                s = i(82298),
                r = i(23976),
                o = i(14892),
                l = i.n(o);
            let n = (e) => {
                let { className: t, shimmerClassName: i, isActive: o = !1, count: n = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: m = 1 } = e;
                return (0, a.jsx)('div', {
                    className: (0, s.$)(l().root, t),
                    children: Array.from({ length: n }, (e, t) => {
                        let n = ''.concat(((e, t, i) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / i) * i)(c, d, m), '%');
                        return (0, a.jsx)(r.W, { width: n, className: (0, s.$)(l().shimmer, i), isActive: o, radius: 's' }, t);
                    }),
                });
            };
        },
        45162: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { J: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        45363: (e) => {
            e.exports = {
                root: 'NewReleaseCard_root__IY5m_',
                ripple: 'NewReleaseCard_ripple__VoybZ',
                image: 'NewReleaseCard_image__oxm2S',
                info: 'NewReleaseCard_info__rcfoY',
                type: 'NewReleaseCard_type__cW58D',
                title: 'NewReleaseCard_title__N5soS',
                description: 'NewReleaseCard_description__Daz5q',
                container: 'NewReleaseCard_container__XvwZC',
                explicitMark: 'NewReleaseCard_explicitMark__isgxE',
                explicitMarkContainer: 'NewReleaseCard_explicitMarkContainer__QHRoH',
                button: 'NewReleaseCard_button__WPk82',
                paperLink: 'NewReleaseCard_paperLink__NN_8o',
            };
        },
        45547: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        46126: (e) => {
            e.exports = {
                content: 'ContinueListenBaseItem_content__Rdrbh',
                root: 'ContinueListenBaseItem_root__FH7Jk',
                root_bookshelf: 'ContinueListenBaseItem_root_bookshelf__cKQqb',
                root_newEpisodes: 'ContinueListenBaseItem_root_newEpisodes__OTZgU',
                root_withLastPlayed: 'ContinueListenBaseItem_root_withLastPlayed__1Z2P5',
                title: 'ContinueListenBaseItem_title__vvDta',
                root_withCovers: 'ContinueListenBaseItem_root_withCovers__Y4w7V',
                link: 'ContinueListenBaseItem_link__3xuh7',
                textContainer: 'ContinueListenBaseItem_textContainer__1nvoM',
                titleIcon: 'ContinueListenBaseItem_titleIcon__4lGcT',
                subtitle: 'ContinueListenBaseItem_subtitle__jFLLT',
                covers: 'ContinueListenBaseItem_covers__bCLfi',
                coverContainer: 'ContinueListenBaseItem_coverContainer__qdnAa',
                cover: 'ContinueListenBaseItem_cover__gSp5J',
            };
        },
        46616: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => _ });
            var a = i(25839),
                s = i(88204),
                r = i(8487),
                o = i(61493),
                l = i(66738),
                n = i(10820),
                c = i(4550),
                d = i(27954),
                m = i(67303);
            let _ = (0, s.PA)((e) => {
                var t;
                let { room: i, onRenameClick: s, isRenamePending: _, onPinClick: u, onExitClick: p, isExitPending: v, className: h } = e,
                    {
                        settings: { isMobile: b },
                    } = (0, d.g)(),
                    C = !(null == i ? void 0 : i.isDisabled) && !b,
                    x = !(null == i ? void 0 : i.isDisabled) && !b;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        C && (0, a.jsx)(m.L, { className: h, onClick: u, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        x &&
                            (0, a.jsx)(n.Dr, {
                                className: h,
                                icon: (0, a.jsx)(l.I, { variant: 'edit', size: 'xxs' }),
                                onClick: s,
                                disabled: _,
                                spinner: _ ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(r.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(n.Dr, {
                            className: h,
                            icon: (0, a.jsx)(l.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: p,
                            disabled: v,
                            spinner: v ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(r.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        47943: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        48631: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        48806: (e) => {
            e.exports = {
                avatars: 'ArtistRecommendationMeta_avatars__V_d1k',
                avatar: 'ArtistRecommendationMeta_avatar__eMG0L',
                artistNames: 'ArtistRecommendationMeta_artistNames__U_jyi',
                title: 'ArtistRecommendationMeta_title__nJC7r',
                title_truncated: 'ArtistRecommendationMeta_title_truncated__JCiKf',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__aSIht',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__P1l5b',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__xtdrP',
            };
        },
        49200: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var a = i(84059),
                s = i(74631),
                r = i(49337),
                o = i(96618),
                l = i(30787),
                n = i(6969);
            let c = { [r.S.Light]: 'yandex_music', [r.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, a.useSearchParams)(),
                        { theme: t } = (0, o.W)();
                    return (0, s.useCallback)(
                        (i) => {
                            if (!t) return i;
                            let a = new URLSearchParams(e);
                            a.set('wl', c[t]);
                            let s = e.get(n.K.UTM_CAMPAIGN);
                            return (s && a.set('meta', 'campaignid_'.concat(s)), (0, l.C)(i, a));
                        },
                        [t, e],
                    );
                };
        },
        50441: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
                coverWrapper: 'PromotionsCard_coverWrapper__IbTzz',
                advDisclaimer: 'PromotionsCard_advDisclaimer__moi3V',
                advDisclaimerTrigger: 'PromotionsCard_advDisclaimerTrigger__GOUr2',
                advDisclaimerPopover: 'PromotionsCard_advDisclaimerPopover__h_zAR',
                advDisclaimerText: 'PromotionsCard_advDisclaimerText__2WRMS',
            };
        },
        50930: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        51083: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => oK });
            var a,
                s,
                r = i(35522),
                o = i(25839),
                l = i(74631),
                n = i.t(l, 2),
                c = i(44031),
                d = i(95314),
                m = i(82298),
                _ = i(88204),
                u = i(39004),
                p = i(8487),
                v = i(61493),
                h = i(22939);
            !(function (e) {
                ((e.TOP = 'top'), (e.CENTER = 'center'));
            })(a || (a = {}));
            var b = i(71035),
                C = i(86869),
                x = i(4254),
                A = i(99835),
                j = i(56348),
                N = i(79367),
                T = i(29481),
                I = i(47009),
                f = i(52512),
                S = i(30290),
                g = i(98074),
                R = i(61561),
                L = i(85686),
                y = i(50209),
                k = i(27954),
                E = i(6323),
                w = i(32652),
                O = i(97522),
                P = i(49438),
                M = i(67974),
                D = i.n(M);
            let B = (0, _.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, u.A)(),
                    { ref: s, intersectionPropertyId: r } = (0, f.n)(),
                    l = (0, T.N)(),
                    n = (0, L.Z)(t.albumUrl),
                    d = (0, A.c)({ album: t.album, callback: n }),
                    _ = (0, I.b)(),
                    M = (0, N.P)(),
                    {
                        paywall: { modal: B },
                    } = (0, k.g)(),
                    V = (0, R.N)(),
                    { from: U } = (0, S.f)({ contextId: t.album.id, contextType: h.K.Album }),
                    { isPlaying: W, togglePlay: z } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: h.K.Album, meta: { id: t.album.id }, from: U, utmLink: (0, g.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    H = (0, b.c)((e) => {
                        (t.setClicked(), l({ to: c.AppScreen.AlbumScreen }), d(e));
                    }),
                    K = (0, b.c)(() => {
                        (t.setClicked(), z());
                    }),
                    Y = (0, A.c)({ album: t.album, callback: K }),
                    $ = (0, b.c)(() => {
                        if (!M()) {
                            if (V) return void B.open();
                            (Y(), _(!W));
                        }
                    }),
                    F = i({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    X = t.coverContentMode === a.TOP;
                return (0, o.jsxs)('div', {
                    className: D().root,
                    ref: s,
                    'data-intersection-property-id': r,
                    'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD,
                    children: [
                        (0, o.jsxs)(C.t, {
                            className: D().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER,
                            children: [
                                (0, o.jsx)(O.N, {
                                    className: D().artistLink,
                                    href: t.albumUrl,
                                    onClick: H,
                                    'aria-label': F,
                                    children: (0, o.jsx)(E.B, {
                                        className: (0, m.$)(D().artistImage, { [D().artistImage_withTopPosition]: X }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, o.jsx)(C.t, {
                                    className: D().albumCover,
                                    radius: 'xs',
                                    'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER,
                                    children: (0, o.jsx)(O.N, {
                                        className: D().albumLink,
                                        href: t.albumUrl,
                                        onClick: H,
                                        'aria-label': F,
                                        children: (0, o.jsx)(E.B, {
                                            className: D().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, o.jsx)(P.D, {
                                    className: D().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: W,
                                    onClick: $,
                                    iconClassName: D().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, o.jsx)(x.HL, {
                                        className: D().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, o.jsx)(p.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: D().meta,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: D().titleContainer,
                                    'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE,
                                    children: [
                                        (0, o.jsx)(x.HL, {
                                            className: D().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, o.jsx)(O.N, {
                                                className: D().titleLink,
                                                href: t.albumUrl,
                                                onClick: H,
                                                'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK,
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, o.jsx)(w.N, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, o.jsx)(j.i, { className: D().artists, linkClassName: D().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var V = i(89288),
                U = i(5365),
                W = i(18412),
                z = i(80986),
                H = i(33049),
                K = {
                    1964: (e) => {
                        e.exports = H;
                    },
                },
                Y = {},
                $ = {};
            ((() => {
                (Object.defineProperty($, '__esModule', { value: !0 }), ($.useMergeRefs = void 0));
                var e = (function e(t) {
                    var i = Y[t];
                    if (void 0 !== i) return i.exports;
                    var a = (Y[t] = { exports: {} });
                    return (K[t](a, a.exports, e), a.exports);
                })(1964);
                Object.defineProperty($, 'useMergeRefs', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                $.__esModule);
            var F = $.useMergeRefs,
                X = i(91886);
            let G = (e) => {
                    let t,
                        { callback: i, visibleTime: a, threshold: s } = e;
                    return (0, X.Gv)(
                        (e, s) => {
                            (e.isIntersecting &&
                                (t = setTimeout(() => {
                                    (i(), s.disconnect());
                                }, a)),
                                e.isIntersecting || clearTimeout(t));
                        },
                        { threshold: s },
                    );
                },
                Z = (e) => {
                    let { params: t, isLoaded: i } = e,
                        a = (0, l.useRef)(null),
                        s = (0, l.useId)(),
                        r = (0, l.useMemo)(() => {
                            if (i) return t.map(G);
                        }, [i, t]);
                    return (
                        (0, l.useEffect)(
                            () => (
                                null == r ||
                                    r.forEach((e) => {
                                        a.current && e.observe(a.current);
                                    }),
                                () => {
                                    null == r ||
                                        r.forEach((e) => {
                                            e.disconnect();
                                        });
                                }
                            ),
                            [r],
                        ),
                        { intersectionPropertyId: s, ref: a }
                    );
                };
            var Q = i(70744),
                q = i.n(Q);
            let J = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: i,
                            setOutdated: a,
                            headerClassName: s,
                            containerClassName: r,
                            data: n,
                            meta: c,
                            headingVariant: d,
                            className: _,
                            children: u,
                            ...p
                        } = e,
                        { intersectionPropertyId: v, ref: h } = ((e) => {
                            let { forwardedRef: t, isLoaded: i, data: a, setOutdated: s } = e,
                                { report: r, reporting: o } = null != a ? a : {},
                                { ref: n, intersectionPropertyId: c } = Z({
                                    isLoaded: i,
                                    params: (0, l.useMemo)(() => {
                                        var e, t, i;
                                        return [
                                            {
                                                threshold: 0,
                                                visibleTime: null != (e = null == o ? void 0 : o.blockRender.timeMs) ? e : 0,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockRender.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime: null != (t = null == o ? void 0 : o.blockImpression.timeMs) ? t : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockImpression.url;
                                                    (e && (null == r || r(e)), s());
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime: null != (i = null == o ? void 0 : o.adImpressions.timeMs) ? i : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.adImpressions.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        r,
                                        null == o ? void 0 : o.adImpressions.timeMs,
                                        null == o ? void 0 : o.adImpressions.url,
                                        null == o ? void 0 : o.blockImpression.timeMs,
                                        null == o ? void 0 : o.blockImpression.url,
                                        null == o ? void 0 : o.blockRender.timeMs,
                                        null == o ? void 0 : o.blockRender.url,
                                        s,
                                    ]),
                                });
                            return { intersectionPropertyId: c, ref: F([n, t]) };
                        })({ forwardedRef: t, data: n, isLoaded: i, setOutdated: a }),
                        b = (0, l.useRef)(null);
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(q().root, _),
                        ref: h,
                        'data-intersection-property-id': v,
                        ...(0, V.OZ)(p),
                        children: [
                            (0, o.jsx)(W.T, { className: s, title: c.title, controls: (0, o.jsx)(z.X, { className: q().controls, carouselRef: b }), headingVariant: d }),
                            (0, o.jsx)(U.F, { className: r, ref: b, itemClassName: (0, m.$)(q().item, q().important), children: u }),
                        ],
                    });
                },
                ee = (0, l.forwardRef)((e, t) => (0, o.jsx)(J, { forwardRef: t, ...e })),
                et = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, o.jsx)(ee, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, o.jsx)(B, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                ei = (0, l.forwardRef)((e, t) => (0, o.jsx)(et, { forwardRef: t, ...e }));
            var ea = i(11823),
                es = i(45363),
                er = i.n(es);
            let eo = (0, _.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            album: a,
                            description: s,
                            trailerButton: r,
                            entityName: n,
                            onClick: d,
                            albumUrl: _,
                            from: p,
                            utmLink: j,
                            coverColor: f,
                            ...S
                        } = e,
                        g = (0, L.Z)(_),
                        M = (0, N.P)(),
                        D = (0, I.b)(),
                        {
                            paywall: { modal: B },
                        } = (0, k.g)(),
                        U = (0, R.N)(),
                        { formatMessage: W } = (0, u.A)(),
                        { isPlaying: z, togglePlay: H } = (0, y.D)({
                            playContextParams: { contextData: { type: h.K.Album, meta: { id: a.id }, from: p, utmLink: j }, loadContextMeta: !0 },
                        }),
                        K = (0, b.c)(() => {
                            (null == d || d(), H());
                        }),
                        Y = (0, A.c)({ album: a, callback: g }),
                        $ = (0, A.c)({ album: a, callback: K }),
                        F = (0, T.N)(),
                        X = (0, b.c)((e) => {
                            ((0, ea.P)(e, er().ripple), e.stopPropagation(), null == d || d(), F({ to: c.AppScreen.AlbumScreen }), Y(e));
                        }),
                        G = (0, b.c)(() => {
                            if (!M()) {
                                if (U) return void B.open();
                                ($(), D(!z));
                            }
                        }),
                        Z = (0, l.useMemo)(() => {
                            let e;
                            if (f) {
                                let { h: t, s: i } = (0, V.g8)(f);
                                e = 'hsl('.concat(t, ', ').concat(i, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == a ? void 0 : a.averageColor };
                        }, [null == a ? void 0 : a.averageColor, f]),
                        Q = n ? ''.concat(n, ' ').concat(a.title) : a.title;
                    return (0, o.jsxs)(C.t, {
                        radius: 'l',
                        className: (0, m.$)(er().root, t),
                        ref: i,
                        style: Z,
                        ...(0, V.OZ)(S),
                        children: [
                            (0, o.jsx)(O.N, { href: _, className: er().paperLink, onClick: X, 'aria-label': Q }),
                            (0, o.jsx)(E.B, {
                                className: er().image,
                                src: a.coverUri,
                                alt: W({ id: 'entity-names.album-name' }, { albumName: a.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, o.jsxs)('div', {
                                className: er().info,
                                children: [
                                    (0, o.jsx)(x.HL, {
                                        className: er().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': Q,
                                        'data-test-id': v.Kq.newRelease.NEW_RELEASE_CARD_TITLE,
                                        children: a.title,
                                    }),
                                    s &&
                                        (0, o.jsx)(x.HL, {
                                            className: er().description,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            'data-test-id': v.Kq.newRelease.NEW_RELEASE_CARD_DESCRIPTION,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, o.jsxs)('div', {
                                className: er().container,
                                children: [
                                    a.explicitDisclaimer &&
                                        (0, o.jsx)(w.N, {
                                            className: er().explicitMark,
                                            containerClassName: er().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            variant: a.explicitDisclaimer,
                                        }),
                                    r,
                                    (0, o.jsx)(P.D, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: er().button,
                                        iconClassName: er().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: z,
                                        onClick: G,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                el = (0, l.forwardRef)((e, t) => (0, o.jsx)(eo, { forwardRef: t, ...e })),
                en = (0, _.PA)((e) => {
                    let { promo: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, f.n)(),
                        { from: s } = (0, S.f)({ contextId: t.album.id, contextType: h.K.Album });
                    return (0, o.jsx)(el, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, g.Z)(t.reportingProperties),
                        from: s,
                        ref: i,
                        'data-intersection-property-id': a,
                        description: t.album.artistNames,
                        'data-test-id': v.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD,
                    });
                }),
                ec = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, o.jsx)(ee, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, o.jsx)(en, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                ed = (0, l.forwardRef)((e, t) => (0, o.jsx)(ec, { forwardRef: t, ...e }));
            var em = i(38907),
                e_ = i(83139),
                eu = i(2488),
                ep = i(26508),
                ev = i(64575),
                eh = i(17109),
                eb = i(94739),
                eC = i.n(eb);
            let ex = (e) => {
                    let {
                            artistId: t,
                            forwardRef: i,
                            isLoading: a,
                            title: s,
                            viewAllActionLink: r,
                            children: n,
                            className: d,
                            containerClassName: _,
                            headerClassName: u,
                            itemClassName: p,
                            headingVariant: v,
                            ...h
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        x = (0, eh.m)({ artistId: t }),
                        A = (0, l.useCallback)(() => {
                            x(c.FromArtistScreenTo.ArtistConcertsScreen);
                        }, [x]),
                        j = (0, l.useMemo)(
                            () =>
                                (0, ep.A)(n, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, o.jsx)('div', { className: eC().concertsColumn, children: e }, t)),
                            [n],
                        );
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, m.$)(eC().root, d),
                        ...h,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: u,
                                labeledForId: b,
                                title: s,
                                viewAllActionLink: r,
                                onViewAllAction: A,
                                controls: (0, o.jsx)(z.X, { className: eC().controls, carouselRef: C }),
                                headingVariant: v,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, o.jsx)(U.F, {
                                itemClassName: (0, m.$)(eC().item, { [eC().item_singleColumn]: 2 >= l.Children.count(n) }, p),
                                className: (0, m.$)(_, { [eC().preventScroll]: a }),
                                ref: C,
                                'aria-labelledby': b,
                                children: a ? Array.from({ length: 2 }, (e, t) => (0, o.jsx)('div', { className: eC().concertsColumn, children: (0, ev.T)(2) }, t)) : j,
                            }),
                        ],
                    });
                },
                eA = (0, l.forwardRef)((e, t) => (0, o.jsx)(ex, { forwardRef: t, ...e }));
            var ej = i(35465),
                eN = i(44806);
            let eT = (0, _.PA)((e) => {
                    var t, i, a, s;
                    let {
                            forwardRef: r,
                            isShimmerVisible: l,
                            isShimmerActive: n,
                            containerClassName: m,
                            headerClassName: _,
                            meta: u,
                            data: p,
                            headingVariant: v,
                            className: h,
                            ...b
                        } = e,
                        { artist: C, concert: x, experiments: A } = (0, k.g)(),
                        j = null != (a = null != (i = C.id) ? i : x.leadArtistId) ? a : '',
                        N = A.checkExperiment(eN.z.WebNextConcertsIdentityEventType, 'on'),
                        T = N ? eu.M : e_.Z;
                    return (0, o.jsx)(d.B, {
                        objectType: c.DomainObjectType.Shortcut,
                        objectId: String(j),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (s = null == p || null == (t = p.items) ? void 0 : t.length) ? s : 0,
                        children: (0, o.jsx)(eA, {
                            ref: r,
                            artistId: String(j),
                            title: u.title,
                            viewAllActionLink: u.viewAllActionLink,
                            isLoading: l || n,
                            headingVariant: v,
                            className: h,
                            headerClassName: _,
                            containerClassName: m,
                            ...(0, V.OZ)(b),
                            children:
                                null == p
                                    ? void 0
                                    : p.items.map((e, t) => {
                                          var i, a;
                                          let {
                                              objectPosX: s,
                                              objectPosY: r,
                                              objectsCount: l,
                                          } = (0, ej.$)({ index: t, count: null != (a = null == (i = p.items) ? void 0 : i.length) ? a : 0, itemsCountPerColumn: 2 });
                                          return (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: r,
                                                  objectsCount: l,
                                                  children: (0, o.jsx)(em.V, { artistId: String(j), concert: e, meta: (0, o.jsx)(T, { concert: e }), shouldShowMask: N }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eI = (0, l.forwardRef)((e, t) => (0, o.jsx)(eT, { forwardRef: t, ...e }));
            var ef = i(69084),
                eS = i(26779),
                eg = i.n(eS);
            let eR = (0, _.PA)((e) => {
                    var t, i, a;
                    let { isShimmerVisible: s, isShimmerActive: r, headerClassName: l, data: n, headingVariant: c } = e,
                        { ref: d, intersectionPropertyId: m } = (0, f.n)(),
                        { playlist: _, artists: u } = n || {},
                        { artist: v } = (0, k.g)(),
                        h = !!(null == (t = v.meta) ? void 0 : t.artist.isAvailable),
                        b = null == (i = v.meta) ? void 0 : i.artist.coverUri,
                        A = null == (a = v.meta) ? void 0 : a.artist.name;
                    return (0, o.jsx)(W.T, {
                        ref: d,
                        'data-intersection-property-id': m,
                        coverUrl: null == _ ? void 0 : _.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == _ ? void 0 : _.url,
                        title: null == _ ? void 0 : _.title,
                        controls: !1,
                        coverContainerClassName: eg().cover,
                        shimmerCoverClassName: eg().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: r,
                        headingVariant: c,
                        className: l,
                        subTitle: (0, o.jsxs)('div', {
                            className: eg().subTitle,
                            children: [
                                (0, o.jsx)(ef.q, {
                                    children: (0, o.jsx)(x.DZ, {
                                        variant: 'h4',
                                        children: (0, o.jsx)(p.A, { id: 'page.artist-pick-aria-label', values: { artistName: A } }),
                                    }),
                                }),
                                (0, o.jsx)(x.HL, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: eg().text,
                                    'aria-hidden': !0,
                                    children: (0, o.jsx)(p.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, o.jsx)(C.t, {
                                    radius: 'round',
                                    className: eg().smallCoverContainer,
                                    children: (0, o.jsx)(E.B, {
                                        fit: 'cover',
                                        src: b,
                                        size: 50,
                                        className: eg().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: h,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                A &&
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: eg().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: A,
                                    }),
                            ],
                        }),
                        description: (0, o.jsx)(j.i, {
                            artists: u,
                            linkClassName: eg().artistLink,
                            spoilerClassName: eg().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, o.jsx)(p.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eL = (0, _.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, className: s, ...r } = e;
                    return (0, o.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, V.OZ)(r),
                        children: (0, o.jsx)(d.B, {
                            objectType: c.DomainObjectType.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId: null != (i = null == (t = r.data) ? void 0 : t.playlist.id) ? i : '',
                            children: (0, o.jsx)(eR, { ...r }),
                        }),
                    });
                }),
                ey = (0, l.forwardRef)((e, t) => (0, o.jsx)(eL, { forwardRef: t, ...e }));
            var ek = i(82967),
                eE = i(3718),
                ew = i(28777),
                eO = i(97805),
                eP = i(84777),
                eM = i.n(eP);
            let eD = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: r,
                            data: l,
                            headerClassName: n,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (function () {
                            var e;
                            let { artist: t, concert: i } = (0, k.g)();
                            return null != (e = t.id) ? e : i.leadArtistId;
                        })(),
                        { from: b, utmLink: C } = (0, S.f)({ contextType: h.K.Artist, contextId: v });
                    return null === v
                        ? null
                        : (0, o.jsx)(ew.$, {
                              className: u,
                              ref: t,
                              shimmer: (0, o.jsx)(eO.D, { variant: eE.X.PLAYLIST, isActive: a }),
                              maxColumnsCount: ew.D.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              carouselClassName: s,
                              carouselItemClassName: (0, m.$)(eM().item, eM().important),
                              blockHeaderClassName: n,
                              blockHeaderTitle: r.title,
                              blockHeaderDescription: r.description,
                              blockHeaderHeadingVariant: _,
                              viewAllActionLink: r.viewAllActionLink,
                              ...p,
                              children:
                                  null == l
                                      ? void 0
                                      : l.items.map((e, t) => {
                                            var i;
                                            let { objectPosX: a, objectPosY: s, objectsCount: r } = (0, ej.$)({ index: t, count: l.items.length });
                                            return (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectId: e.id,
                                                    objectType: c.DomainObjectType.Track,
                                                    objectPosX: a,
                                                    objectPosY: s,
                                                    objectsCount: r,
                                                    children: (0, o.jsx)(ek.K, {
                                                        track: e,
                                                        playContextParams:
                                                            ((i = e.id),
                                                            l && v
                                                                ? {
                                                                      contextData: { type: h.K.Artist, meta: { id: v }, from: b, utmLink: C },
                                                                      queueParams: { index: t, entityId: i },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: h.K.Artist, meta: { id: '' }, from: b, utmLink: C } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                eB = (0, l.forwardRef)((e, t) => (0, o.jsx)(eD, { forwardRef: t, ...e }));
            var eV = {
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = n;
                    },
                },
                eU = {};
            function eW(e) {
                var t = eU[e];
                if (void 0 !== t) return t.exports;
                var i = (eU[e] = { exports: {} });
                return (eV[e](i, i.exports, eW), i.exports);
            }
            var ez = {};
            ((() => {
                (Object.defineProperty(ez, '__esModule', { value: !0 }), (ez.useResize = void 0));
                let e = eW(810),
                    t = eW(1848);
                ez.useResize = (i, a) => {
                    (0, e.useEffect)(() => {
                        let e = (0, t.getElementFromRefOrElement)(a);
                        if (null === e) return;
                        let s = null != e ? e : document.documentElement,
                            r = new ResizeObserver(i);
                        return (r.observe(s), () => r.disconnect());
                    }, [a, i]);
                };
            })(),
                ez.__esModule);
            var eH = ez.useResize,
                eK = i(49656);
            let eY = '(max-width: '.concat(479.98, 'px)');
            var e$ = i(85184);
            let eF = (e, t) => {
                    let i = Math.min(1, Math.abs(e) / t),
                        a = e * (1 - i ** 2 * (3 - 2 * i)),
                        s = Math.max(0, 1 - 2 * i),
                        r = 1 - i;
                    return {
                        '--cover-offset': ''.concat(a, 'px'),
                        '--details-offset': ''.concat((e + a) / 3 - e, 'px'),
                        '--glow-offset': ''.concat(-e, 'px'),
                        '--cover-opacity': String(1 - i / 2),
                        '--details-opacity': String(s ** 2 * (3 - 2 * s)),
                        '--glow-opacity': String(r ** 2 * (3 - 2 * r)),
                    };
                },
                eX = (e) => {
                    var t, i;
                    let { data: a, isLoaded: s, forwardedRef: r, setOutdated: o } = e,
                        { report: n, reporting: c } = null != a ? a : {},
                        d = null == c ? void 0 : c.blockRender.url,
                        m = null != (t = null == c ? void 0 : c.blockRender.timeMs) ? t : 0,
                        _ = null == c ? void 0 : c.blockImpression.url,
                        u = null != (i = null == c ? void 0 : c.blockImpression.timeMs) ? i : 2100,
                        p = (0, b.c)(o),
                        { ref: v, intersectionPropertyId: h } = Z({
                            isLoaded: s,
                            params: (0, l.useMemo)(
                                () => [
                                    {
                                        threshold: 0,
                                        visibleTime: m,
                                        callback: () => {
                                            d && (null == n || n(d));
                                        },
                                    },
                                    {
                                        threshold: 0.5,
                                        visibleTime: u,
                                        callback: () => {
                                            (_ && (null == n || n(_)), p());
                                        },
                                    },
                                ],
                                [d, m, _, u, n, p],
                            ),
                        });
                    return { ref: F([v, r]), intersectionPropertyId: h };
                },
                eG = (e) => {
                    let t = (0, e$.U)(eY);
                    return (0, o.jsx)(U.F, { ...e, autoplay: { enabled: t, delay: 5e3, stopOnMouseEnter: !0, stopOnFocusIn: !0, stopOnInteraction: !1 } });
                },
                eZ = (e) => {
                    let { promo: t } = e,
                        { paywall: i } = (0, k.g)(),
                        a = (0, L.Z)(t.albumUrl),
                        s = (0, A.c)({ album: t.album, callback: a }),
                        r = (0, T.N)(),
                        o = (0, I.b)(),
                        l = (0, N.P)(),
                        n = (0, R.N)(),
                        { from: d } = (0, S.f)({ contextId: t.album.id, contextType: h.K.Album }),
                        { isPlaying: m, togglePlay: _ } = (0, y.D)({
                            playContextParams: {
                                contextData: { type: h.K.Album, meta: { id: t.album.id }, from: d, utmLink: (0, g.Z)(t.reportingProperties) },
                                loadContextMeta: !0,
                            },
                        }),
                        u = (0, b.c)((e) => {
                            (t.setClicked(), r({ to: c.AppScreen.AlbumScreen }), s(e));
                        }),
                        p = (0, b.c)(() => {
                            (t.setClicked(), _());
                        }),
                        v = (0, A.c)({ album: t.album, callback: p }),
                        C = (0, b.c)(() => {
                            if (!l()) {
                                if (n) return void i.modal.open();
                                (v(), o(!m));
                            }
                        });
                    return (0, eK.L)(() => ({ isPlaying: m, handleNavigate: u, handlePlayButtonClick: C }));
                },
                eQ = (e) => {
                    let { promo: t } = e,
                        { adImpressions: i, reportImpression: a } = t,
                        { url: s, timeMs: r } = i,
                        { ref: o } = Z({
                            isLoaded: !0,
                            params: (0, l.useMemo)(
                                () => [
                                    {
                                        threshold: 0,
                                        visibleTime: r,
                                        callback: () => {
                                            s && a();
                                        },
                                    },
                                ],
                                [a, s, r],
                            ),
                        });
                    return { ref: o };
                },
                eq = (e) => {
                    if (!e) return { '--artist-recommendation-glow-color': '#848484' };
                    let { h: t, s: i, l: a } = (0, V.g8)(e);
                    return {
                        '--artist-recommendation-glow-color': e,
                        '--artist-recommendation-border-color-top': 'hsl('
                            .concat(t, ' ')
                            .concat(Math.max(0, i - 30), '% ')
                            .concat(Math.min(80, a + 40), '%)'),
                        '--artist-recommendation-border-color-bottom': 'hsl('
                            .concat(t, ' ')
                            .concat(Math.max(0, i - 20), '% ')
                            .concat(Math.max(10, a - 20), '%)'),
                    };
                };
            var eJ = i(89133),
                e0 = i.n(eJ);
            let e1 = (0, _.PA)((e) => {
                let { promo: t, isActive: i } = e,
                    s = (0, l.useMemo)(() => eq(t.averageColor), [t.averageColor]);
                return (0, o.jsx)('div', {
                    className: (0, m.$)(e0().root, { [e0().root_active]: i }),
                    style: s,
                    children: (0, o.jsx)('div', {
                        className: e0().coverContainer,
                        children: (0, o.jsx)(E.B, {
                            className: (0, m.$)(e0().cover, { [e0().cover_withTopPosition]: t.coverContentMode === a.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 600,
                            fit: 'cover',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var e2 = i(16789),
                e8 = i.n(e2);
            let e3 = (0, _.PA)((e) => {
                let { promo: t, isActive: i } = e;
                return (0, o.jsxs)('div', {
                    className: (0, m.$)(e8().root, { [e8().root_active]: i }),
                    children: [
                        (0, o.jsxs)('div', {
                            className: e8().titleContainer,
                            children: [
                                (0, o.jsx)(x.DZ, { variant: 'div', size: 'xs', lineClamp: 2, className: e8().title, children: t.album.title }),
                                t.album.explicitDisclaimer &&
                                    (0, o.jsx)(w.N, {
                                        containerClassName: e8().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: e8().artists,
                            children: [
                                t.avatarArtists.length > 0 &&
                                    (0, o.jsx)('div', {
                                        className: e8().avatars,
                                        'aria-hidden': !0,
                                        children: t.avatarArtists.map((e) =>
                                            (0, o.jsx)(E.B, { className: e8().avatar, src: e.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                                        ),
                                    }),
                                (0, o.jsx)(j.i, {
                                    className: e8().artistNames,
                                    captionClassName: e8().artistCaption,
                                    artists: t.artists,
                                    lineClamp: 1,
                                    captionSize: 'm',
                                    withLink: !1,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var e4 = i(27395),
                e9 = i.n(e4);
            let e6 = (0, _.PA)((e) => {
                let { promo: t, isActive: i, isScrollAnimationEnabled: a } = e,
                    { ref: s, intersectionPropertyId: r } = (0, f.n)(),
                    { ref: l } = eQ({ promo: t }),
                    { isPlaying: n, handleNavigate: c, handlePlayButtonClick: d } = eZ({ promo: t }),
                    _ = F([s, l]),
                    u = (0, b.c)((e) => {
                        a && !i && e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center' });
                    });
                return (0, o.jsxs)('div', {
                    ref: _,
                    className: (0, m.$)(e9().root, { [e9().root_active]: i }),
                    onFocus: u,
                    'data-intersection-property-id': r,
                    'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, o.jsxs)(O.N, {
                            className: e9().cardLink,
                            href: t.albumUrl,
                            onClick: c,
                            'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, o.jsx)(e1, { promo: t, isActive: i }), (0, o.jsx)(e3, { promo: t, isActive: i })],
                        }),
                        (0, o.jsx)(P.D, {
                            className: e9().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            size: 'm',
                            iconSize: 'xs',
                            isPlaying: n,
                            onClick: d,
                            disabled: !t.album.isAvailable,
                        }),
                    ],
                });
            });
            var e5 = i(28342),
                e7 = i.n(e5);
            let te = (0, _.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: s,
                            setOutdated: r,
                            meta: n,
                            className: _,
                            containerClassName: u,
                            headerClassName: p,
                            headingVariant: h,
                            ...C
                        } = e,
                        { experiments: x } = (0, k.g)(),
                        {
                            carouselRef: A,
                            activeIndex: j,
                            isScrollAnimationEnabled: N,
                            onScroll: T,
                        } = ((e) => {
                            let t = (0, l.useRef)(null),
                                i = (0, l.useRef)(null),
                                [a, s] = (0, l.useState)(0),
                                r = (0, e$.U)(eY),
                                o = (0, b.c)(() => {
                                    r &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let e = t.current;
                                            if (!e) return;
                                            let r = e.getBoundingClientRect(),
                                                o = Array.from(e.children),
                                                l = ((e, t) => {
                                                    let i = e.left + e.width / 2,
                                                        a = 0,
                                                        s = 1 / 0,
                                                        r = t.map((e, t) => {
                                                            if (!e || !e.width) return null;
                                                            let r = e.left + e.width / 2 - i,
                                                                o = Math.abs(r);
                                                            return (o < s && ((a = t), (s = o)), eF(r, e.width));
                                                        });
                                                    return { activeIndex: a, itemStyles: r };
                                                })(
                                                    r,
                                                    o.map((e) => (e instanceof HTMLElement ? e.getBoundingClientRect() : null)),
                                                );
                                            (o.forEach((e, t) => {
                                                let i = l.itemStyles[t];
                                                if (e instanceof HTMLElement && i) for (let [t, a] of Object.entries(i)) e.style.setProperty(t, a);
                                            }),
                                                l.activeIndex !== a && s(l.activeIndex));
                                        }));
                                });
                            return (
                                eH(o, t),
                                (0, l.useEffect)(
                                    () => (
                                        o(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, o, r],
                                ),
                                (0, eK.L)(() => ({ carouselRef: t, activeIndex: a, isScrollAnimationEnabled: r, onScroll: o }))
                            );
                        })(null != (t = null == a ? void 0 : a.items.length) ? t : 0),
                        { ref: I, intersectionPropertyId: f } = eX({ data: a, isLoaded: s, setOutdated: r, forwardedRef: i }),
                        S = x.checkExperiment(eN.z.WebNextArtistRecommendationsAutoScroll, 'on') ? eG : U.F;
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(e7().root, _),
                        ref: I,
                        'data-intersection-property-id': f,
                        ...(0, V.OZ)(C),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(e7().header, p),
                                title: n.title,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: e7().controls, carouselRef: A }),
                            }),
                            (0, o.jsx)(S, {
                                ref: A,
                                className: (0, m.$)(e7().carousel, e7().important, u),
                                itemClassName: e7().item,
                                onScroll: T,
                                'data-test-id': v.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == a
                                        ? void 0
                                        : a.items.map((e, t) =>
                                              (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: a.items.length,
                                                      children: (0, o.jsx)(e6, { promo: e, isActive: t === j, isScrollAnimationEnabled: N }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                tt = (0, l.forwardRef)((e, t) => (0, o.jsx)(te, { forwardRef: t, ...e }));
            var ti = i(15541),
                ta = i.n(ti);
            let ts = (0, _.PA)((e) => {
                let { promo: t } = e;
                return (0, o.jsx)('div', {
                    className: ta().root,
                    children: (0, o.jsx)('div', {
                        className: ta().coverContainer,
                        children: (0, o.jsx)(E.B, {
                            className: (0, m.$)(ta().cover, { [ta().cover_withTopPosition]: t.coverContentMode === a.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 300,
                            fit: 'cover',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var tr = i(67467),
                to = i(48806),
                tl = i.n(to);
            let tn = (0, _.PA)((e) => {
                let { promo: t } = e,
                    i = (0, l.useRef)(null),
                    { isTruncated: a } = (0, tr.W)(i, 'horizontal');
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: tl().avatars,
                            'aria-hidden': !0,
                            children: t.avatarArtists.map((e) =>
                                (0, o.jsx)(E.B, { className: tl().avatar, src: e.coverUri, size: 100, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                            ),
                        }),
                        (0, o.jsx)(j.i, {
                            className: tl().artistNames,
                            captionClassName: tl().artistCaption,
                            artists: t.artists,
                            captionSize: 'm',
                            withLink: !1,
                            withCustomTooltip: !1,
                        }),
                        (0, o.jsxs)('div', {
                            className: tl().titleContainer,
                            children: [
                                (0, o.jsx)(x.DZ, {
                                    ref: i,
                                    className: (0, m.$)(tl().title, { [tl().title_truncated]: a }),
                                    variant: 'div',
                                    size: 'xs',
                                    children: t.album.title,
                                }),
                                t.album.explicitDisclaimer &&
                                    (0, o.jsx)(w.N, {
                                        containerClassName: tl().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tc = i(7272),
                td = i.n(tc);
            let tm = (0, _.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, u.A)(),
                    { ref: a, intersectionPropertyId: s } = (0, f.n)(),
                    { ref: r } = eQ({ promo: t }),
                    { isPlaying: n, handleNavigate: c, handlePlayButtonClick: d } = eZ({ promo: t }),
                    m = (0, l.useMemo)(() => eq(t.averageColor), [t.averageColor]),
                    _ = F([a, r]),
                    p = (0, b.c)((e) => {
                        e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    });
                return (0, o.jsxs)('div', {
                    ref: _,
                    className: td().root,
                    style: m,
                    onFocus: p,
                    'data-intersection-property-id': s,
                    'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, o.jsxs)(O.N, {
                            className: td().cardLink,
                            href: t.albumUrl,
                            onClick: c,
                            'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, o.jsx)(ts, { promo: t }), (0, o.jsx)('div', { className: td().info, children: (0, o.jsx)(tn, { promo: t }) })],
                        }),
                        (0, o.jsx)(P.D, {
                            className: td().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            radius: 'xxxl',
                            size: 'xs',
                            iconSize: 'xxs',
                            iconClassName: td().playIcon,
                            isPlaying: n,
                            onClick: d,
                            disabled: !t.album.isAvailable,
                            children: i(n ? { id: 'player-actions.pause' } : { id: 'player-actions.listen' }),
                        }),
                    ],
                });
            });
            var t_ = i(69778),
                tu = i.n(t_);
            let tp = (0, _.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: s,
                            setOutdated: r,
                            meta: n,
                            className: _,
                            containerClassName: u,
                            headerClassName: p,
                            headingVariant: h,
                            ...C
                        } = e,
                        { experiments: x } = (0, k.g)(),
                        { carouselRef: A, onScroll: j } = ((e) => {
                            let t = (0, l.useRef)(null),
                                i = (0, l.useRef)(null),
                                a = (0, e$.U)(eY),
                                s = (0, b.c)(() => {
                                    a &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            var e;
                                            i.current = null;
                                            let a = t.current;
                                            if (!a) return;
                                            let s = getComputedStyle(a),
                                                r = Number(s.getPropertyValue('--items-per-page')) || 1;
                                            if (r > 1) return;
                                            let o = a.scrollLeft,
                                                l = a.getBoundingClientRect().left + a.clientLeft + parseFloat(s.paddingLeft),
                                                n = Array.from(a.children),
                                                c = n.map((e) => e.getBoundingClientRect()),
                                                d = c[Math.max(0, n.length - r)],
                                                m = Math.max(0, (null != (e = null == d ? void 0 : d.left) ? e : l) - l + o);
                                            n.forEach((e, t) => {
                                                var i;
                                                let a = c[t];
                                                if (!(e instanceof HTMLElement) || !(null == a ? void 0 : a.width)) return;
                                                let s = eF(Math.min(a.left - l + o, m) - o, a.width);
                                                e.style.setProperty('--card-offset', null != (i = s['--cover-offset']) ? i : null);
                                            });
                                        }));
                                });
                            return (
                                eH(s, t),
                                (0, l.useEffect)(
                                    () => (
                                        s(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, s, a],
                                ),
                                (0, eK.L)(() => ({ carouselRef: t, onScroll: s }))
                            );
                        })(null != (t = null == a ? void 0 : a.items.length) ? t : 0),
                        { ref: N, intersectionPropertyId: T } = eX({ data: a, isLoaded: s, setOutdated: r, forwardedRef: i }),
                        I = x.checkExperiment(eN.z.WebNextArtistRecommendationsAutoScroll, 'on') ? eG : U.F;
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(tu().root, _),
                        ref: N,
                        'data-intersection-property-id': T,
                        ...(0, V.OZ)(C),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(tu().header, p),
                                title: n.title,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: tu().controls, carouselRef: A }),
                            }),
                            (0, o.jsx)(I, {
                                ref: A,
                                className: (0, m.$)(tu().carousel, u),
                                itemClassName: tu().item,
                                onScroll: j,
                                'data-test-id': v.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == a
                                        ? void 0
                                        : a.items.map((e, t) =>
                                              (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: a.items.length,
                                                      children: (0, o.jsx)(tm, { promo: e }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                tv = (0, l.forwardRef)((e, t) => (0, o.jsx)(tp, { forwardRef: t, ...e }));
            var th = i(76939),
                tb = i(19412);
            let tC = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: n,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eK.L)(() =>
                            i || !n
                                ? (0, o.jsx)(tb.V, { className: s, isActive: a })
                                : (0, o.jsx)(d.B, {
                                      objectType: c.DomainObjectType.Album,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(th.a, { className: s, album: n.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [(0, o.jsx)(W.T, { className: r, title: l.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                tx = (0, l.forwardRef)((e, t) => (0, o.jsx)(tC, { forwardRef: t, ...e }));
            var tA = i(23782);
            let tj = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: n,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eK.L)(() =>
                            i || !n
                                ? (0, o.jsx)(tb.V, { className: s, isActive: a })
                                : (0, o.jsx)(d.B, {
                                      objectType: c.DomainObjectType.UpcomingAlbum,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(tA.M, { className: s, upcomingAlbum: n.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [(0, o.jsx)(W.T, { className: r, title: l.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                tN = (0, l.forwardRef)((e, t) => (0, o.jsx)(tj, { forwardRef: t, ...e }));
            var tT = i(8543),
                tI = i(19e3),
                tf = i(43478);
            let tS = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: r,
                            data: l,
                            headerClassName: n,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        { from: p, utmLink: v } = (0, S.f)({ contextType: h.K.Playlist, contextId: null == l ? void 0 : l.playlist.id }),
                        b = (0, tf.i)({ playlistId: null == l ? void 0 : l.playlist.id });
                    return (0, o.jsx)(tI._, {
                        sourceContextData: b,
                        children: (0, o.jsx)(ew.$, {
                            className: _,
                            ref: t,
                            shimmer: (0, o.jsx)(eO.D, { variant: eE.X.PLAYLIST, isActive: a }),
                            maxColumnsCount: ew.D.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            carouselClassName: s,
                            blockHeaderClassName: n,
                            blockHeaderTitle: r.title,
                            blockHeaderDescription: r.description,
                            blockHeaderHeadingVariant: m,
                            viewAllActionLink: r.viewAllActionLink,
                            ...u,
                            children:
                                null == l
                                    ? void 0
                                    : l.items.map((e, t) => {
                                          let { objectPosX: i, objectPosY: a, objectsCount: s } = (0, ej.$)({ index: t, count: l.items.length });
                                          return (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: c.DomainObjectType.Track,
                                                  objectPosX: i,
                                                  objectPosY: a,
                                                  objectsCount: s,
                                                  children: (0, o.jsx)(tT.Q, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          l
                                                              ? {
                                                                    contextData: { type: h.K.Playlist, meta: { id: l.playlist.id }, from: p, utmLink: v },
                                                                    queueParams: { index: l.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: h.K.Playlist, meta: { id: '' }, from: p, utmLink: v } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                tg = (0, l.forwardRef)((e, t) => (0, o.jsx)(tS, { forwardRef: t, ...e }));
            var tR = i(7341);
            let tL = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                ty = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, meta: r, containerClassName: l, headerClassName: n, className: c, ...d } = e;
                    return (0, o.jsx)(tR.K, {
                        className: c,
                        ref: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        clips: tL(null == s ? void 0 : s.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: l,
                        headerClassName: n,
                        ...d,
                    });
                },
                tk = (0, l.forwardRef)((e, t) => (0, o.jsx)(ty, { forwardRef: t, ...e }));
            var tE = i(66284),
                tw = i(51770),
                tO = i.n(tw);
            let tP = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: l } = e,
                        { formatMessage: n } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: tO().root,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: l,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(tO().text, r), children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                tM = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (null == n ? void 0 : n.isEmptyBlock)
                        ? (0, o.jsx)(tP, {
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                              headingVariant: m,
                          })
                        : (0, o.jsx)(tE.O, {
                              className: _,
                              ...u,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              headerClassName: r,
                              containerClassName: s,
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              ref: t,
                              headingVariant: m,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) =>
                                            (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: n.items.length,
                                                    children: (0, o.jsx)(th.a, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                tD = (0, l.forwardRef)((e, t) => (0, o.jsx)(tM, { forwardRef: t, ...e }));
            var tB = i(98436),
                tV = i(5867),
                tU = i(26742),
                tW = i(95388),
                tz = i(79396),
                tH = i(9931),
                tK = i(79677),
                tY = i.n(tK),
                t$ = i(58958),
                tF = i(2277),
                tX = i.n(tF);
            let tG = (e) => {
                    let { tab: t, areBothTabsEmpty: i } = e,
                        a = (0, l.useMemo)(() => {
                            switch (t) {
                                case t$.n.ALBUM:
                                    return (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-albums' });
                                case t$.n.PRESAVED_ALBUM:
                                    return (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, o.jsx)('div', { className: (0, m.$)(tX().root, { [tX().root_oneEmptyTab]: !i, [tX().root_twoEmptyTabs]: i }), children: a });
                },
                tZ = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tU.N)(),
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        x = (0, l.useId)(),
                        A = ''.concat(b, ' ').concat(b, '-description'),
                        j = (0, tV.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        N = (0, l.useMemo)(() => {
                            var e;
                            return (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.items.length) === 0;
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        T = (0, l.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              !(null == _ ? void 0 : _.areBothTabsEmpty) &&
                                                  (0, o.jsx)(U.F, {
                                                      className: (0, m.$)(tY().carouselEmpty, s),
                                                      itemClassName: (0, m.$)(tY().item, tY().important),
                                                      tabIndex: -1,
                                                      children: (0, tW.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, o.jsx)(tG, { tab: e.type, areBothTabsEmpty: null == _ ? void 0 : _.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, o.jsx)(U.F, {
                                          ref: C,
                                          itemClassName: (0, m.$)(tY().item, tY().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: e.items.map((t, i) => {
                                              switch (t.type) {
                                                  case tB._.ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          d.B,
                                                          {
                                                              objectType: c.DomainObjectType.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(th.a, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case tB._.PRESAVED_ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          d.B,
                                                          {
                                                              objectType: c.DomainObjectType.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(tA.M, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [A, s, null == _ ? void 0 : _.areBothTabsEmpty],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: C,
                                          itemClassName: (0, m.$)(tY().item, tY().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, tW.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(tV.Kp, { name: t, value: j.value, elementId: x, className: tY().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, x, T],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(tY().root, p, { [tY().root_withControls]: !N }),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(n.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, tY().header, tY().important),
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: b,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: tY().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!n.description,
                                }),
                            }),
                            (0, o.jsx)(tH.wI, {
                                className: (0, m.$)(s, tY().tabCarousel, tY().important),
                                isShimmerVisible: i,
                                elementId: x,
                                shimmer: (0, o.jsx)(tH.zr, { isActive: a, className: (0, m.$)(s, tY().tabCarousel, tY().important), shimmerClassName: tY().tabShimmer }),
                                'aria-labelledby': b,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(tz.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, m.$)(tY().tab, tY().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                tQ = (0, l.forwardRef)((e, t) => (0, o.jsx)(tZ, { forwardRef: t, ...e }));
            var tq = i(84058),
                tJ = i(72096),
                t0 = i.n(tJ);
            let t1 = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r } = e,
                        { formatMessage: l } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: t0().root,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': l({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(t0().text, r), children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                t2 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: l,
                        meta: n,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return (null == m ? void 0 : m.isEmptyBlock)
                        ? (0, o.jsx)(t1, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          })
                        : (0, o.jsx)(tE.O, {
                              ...u,
                              className: l,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) =>
                                            (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, o.jsx)(tq.a, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                t8 = (0, l.forwardRef)((e, t) => (0, o.jsx)(t2, { forwardRef: t, ...e }));
            var t3 = i(14693),
                t4 = i(23818),
                t9 = i(86209),
                t6 = i(40110),
                t5 = i(20258),
                t7 = i(87201),
                ie = i(5668),
                it = i(18284),
                ii = i(6349),
                ia = i(22318),
                is = i.n(ia);
            let ir = (e) => {
                    var t;
                    let { item: i } = e,
                        a = (0, b.c)((e) => {
                            (0, ea.P)(e, is().ripple);
                        });
                    return (0, o.jsxs)(O.N, {
                        href: i.data.viewAllActionLink,
                        className: (0, m.$)(is().item, is().menuItem),
                        onClick: a,
                        children: [
                            (0, o.jsx)(t4._V, {
                                src: null == (t = i.data.cover) ? void 0 : t.uri,
                                className: is().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, o.jsx)(x.HL, { className: is().text, variant: 'div', type: 'entity', size: 'm', weight: 'medium', lineClamp: 2, children: i.data.title }),
                        ],
                    });
                },
                io = (0, _.PA)((e) => {
                    let { item: t, artistId: i } = e,
                        [a, s] = (0, l.useState)(!1),
                        { state: r, setState: n } = (0, t3.e)(!1),
                        c = (0, N.P)(),
                        { freeAccess: d } = (0, k.g)(),
                        m = (0, I.b)(),
                        _ = ''.concat(t6.U.ARTIST, '-').concat(i),
                        {
                            isPlaying: u,
                            togglePlay: p,
                            isCurrent: v,
                        } = (0, t7.B)({ seeds: t.data.seeds, pageIdForFrom: t5._Q.RADIO, blockIdForFrom: _, parentContextId: i }),
                        h = (0, b.c)(async () => (d.isVibeStartRestricted ? void n(!0) : p())),
                        C = (0, b.c)(() => {
                            c() ||
                                (s(!0),
                                h().finally(() => {
                                    s(!1);
                                }),
                                m(!u));
                        }),
                        A = (0, b.c)((e) => {
                            ((0, ea.P)(e, is().ripple), C());
                        }),
                        j = (0, eK.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, o.jsx)(t9.n, { agent: t.data.agent, isCurrent: v, isPlaying: u, onPlayButtonClick: C, playButtonIconSize: 'm' })
                                : (0, o.jsx)(ii.q, {
                                      isCurrent: v,
                                      isPlaying: u,
                                      isAvailable: !0,
                                      isPlayButtonLoading: a,
                                      onPlayButtonClick: C,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        T = (0, l.useCallback)(
                            () =>
                                (0, o.jsxs)(it.C, {
                                    className: is().item,
                                    onClick: A,
                                    children: [
                                        j,
                                        (0, o.jsx)(x.HL, {
                                            className: is().text,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 2,
                                            children: t.data.title,
                                        }),
                                    ],
                                }),
                            [A, j, t.data.title],
                        );
                    return (0, o.jsx)(ie.S, {
                        isEnabled: d.isVibeStartRestricted,
                        isOpened: r,
                        onOpenChange: n,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: T,
                    });
                }),
                il = (e) => {
                    let { items: t, className: i, artistId: a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, m.$)(is().root, i),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case tB._.MENU_ITEM:
                                    return (0, o.jsx)(ir, { item: e }, e.key);
                                case tB._.WAVE_AGENT_ITEM:
                                    return (0, o.jsx)(io, { item: e, artistId: a }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var ic = i(23976),
                id = i(12704),
                im = i.n(id);
            let i_ = (e) => {
                    let { isActive: t, itemClassName: i, actionItemClassName: a } = e;
                    return (0, o.jsxs)('div', {
                        className: im().root,
                        children: [
                            (0, o.jsx)(tb.V, { isActive: t, className: i, round: !0, centered: !0 }),
                            (0, o.jsxs)('div', {
                                className: (0, m.$)(im().actionItems, a),
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: im().actionItem,
                                        children: [
                                            (0, o.jsx)(ic.W, { isActive: t, className: im().actionCover, radius: 's' }),
                                            (0, o.jsxs)('div', {
                                                className: im().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(ic.W, { isActive: t, className: (0, m.$)(im().actionText, im().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(ic.W, { isActive: t, className: im().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: im().actionItem,
                                        children: [
                                            (0, o.jsx)(ic.W, { isActive: t, className: im().actionCover, radius: 'round' }),
                                            (0, o.jsxs)('div', {
                                                className: im().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(ic.W, { isActive: t, className: (0, m.$)(im().actionText, im().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(ic.W, { isActive: t, className: im().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                iu = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, i) => (0, o.jsx)(i_, { ...t }, i));
                };
            var ip = i(91631),
                iv = i.n(ip);
            let ih = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: n,
                            className: _,
                            meta: p,
                            data: v,
                            headingVariant: h,
                            ...b
                        } = e,
                        { formatMessage: C } = (0, u.A)(),
                        x = (0, l.useRef)(null);
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, m.$)(iv().root, _),
                        ...(0, V.OZ)(b),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: n,
                                title: p.title,
                                description: p.description,
                                viewAllActionLink: p.viewAllActionLink,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: iv().controls, carouselRef: x }),
                            }),
                            (0, o.jsx)(U.F, {
                                className: r,
                                ref: x,
                                children: a
                                    ? iu({
                                          isActive: s,
                                          itemClassName: (0, m.$)(iv().item, iv().important),
                                          actionItemClassName: (0, m.$)(iv().actionItem, iv().important),
                                          countWeb: null == (t = p.source) ? void 0 : t.countWeb,
                                      })
                                    : null == v
                                      ? void 0
                                      : v.artists.map((e, t) =>
                                            (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: v.artists.length,
                                                    children: (0, o.jsxs)('div', {
                                                        className: iv().itemContainer,
                                                        'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, o.jsx)(tq.a, { className: (0, m.$)(iv().item, iv().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, o.jsx)(il, {
                                                                className: (0, m.$)(iv().actionItem, iv().important),
                                                                items: e.items,
                                                                artistId: e.artist.id,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.artist.id,
                                            ),
                                        ),
                            }),
                        ],
                    });
                },
                ib = (0, l.forwardRef)((e, t) => (0, o.jsx)(ih, { forwardRef: t, ...e }));
            var iC = i(54475),
                ix = i.n(iC);
            let iA = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: l } = e,
                        { formatMessage: n } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: ix().root,
                        'data-test-id': v.e8.landing.COLLECTION_CLIPS,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: l,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)(x.HL, {
                                className: (0, m.$)(ix().text, r),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                'data-test-id': v.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                ij = (e) => {
                    let { forwardRef: t, containerClassName: i, headerClassName: a, meta: s, data: r, headingVariant: l, ...n } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, o.jsx)(iA, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: i,
                              headerClassName: a,
                              headingVariant: l,
                          })
                        : (0, o.jsx)(tk, { ref: t, meta: s, data: r, containerClassName: i, headerClassName: a, headingVariant: l, ...n });
                },
                iN = (0, l.forwardRef)((e, t) => (0, o.jsx)(ij, { forwardRef: t, ...e }));
            var iT = i(41707),
                iI = i(74749);
            let iS = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, l.useMemo)(() => {
                            let e =
                                null == m
                                    ? void 0
                                    : m.items.map((e, t) =>
                                          (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, o.jsx)(iT.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return (null == e || e.unshift((0, o.jsx)(iI.B, {}, 'create-playlist-card')), e);
                        }, [null == m ? void 0 : m.items]);
                    return (0, o.jsx)(tE.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children: v,
                    });
                }),
                ig = (0, l.forwardRef)((e, t) => (0, o.jsx)(iS, { forwardRef: t, ...e })),
                iR = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: l,
                            className: n,
                            meta: m,
                            data: _,
                            headingVariant: p,
                            ...b
                        } = e,
                        { from: C } = (0, S.f)(),
                        { formatMessage: x } = (0, u.A)(),
                        A = Array.isArray(null == _ ? void 0 : _.rawTracks)
                            ? x({ id: 'entity-names.number-of-tracks' }, { counter: null == _ ? void 0 : _.rawTracks.length })
                            : m.description;
                    return (0, o.jsx)(ew.$, {
                        className: n,
                        shimmer: (0, o.jsx)(eO.D, { variant: eE.X.PLAYLIST, isActive: a }),
                        'data-test-id': v.e8.landing.COLLECTION_DOWNLOADED_TRACKS,
                        maxColumnsCount: ew.D.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        blockHeaderClassName: l,
                        carouselClassName: s,
                        blockHeaderTitle: m.title,
                        viewAllActionLink: m.viewAllActionLink,
                        blockHeaderDescription: A,
                        ref: t,
                        blockHeaderHeadingVariant: p,
                        withBlockHeaderDescription: !0,
                        ...b,
                        children:
                            null == _
                                ? void 0
                                : _.items.map((e, t) => {
                                      let i,
                                          { objectPosX: a, objectPosY: s, objectsCount: l } = (0, ej.$)({ index: t, count: _.items.length });
                                      return (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Track,
                                              objectId: e.id,
                                              objectPosX: a,
                                              objectPosY: s,
                                              objectsCount: l,
                                              children: (0, o.jsx)(ek.K, {
                                                  track: e,
                                                  playContextParams:
                                                      ((i = e.id),
                                                      {
                                                          contextData: { type: h.K.Various, meta: { id: r.t.COLLECTION_DOWNLOADED_TRACKS }, from: C },
                                                          entitiesData: null == _ ? void 0 : _.entitiesData,
                                                          queueParams: { index: t, entityId: i },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                iL = (0, l.forwardRef)((e, t) => (0, o.jsx)(iR, { forwardRef: t, ...e }));
            var iy = i(738);
            let ik = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      switch (e.type) {
                                          case tB._.TRACK_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(iy.w, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case tB._.LIKED_PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case tB._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(th.a, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                iE = (0, l.forwardRef)((e, t) => (0, o.jsx)(ik, { forwardRef: t, ...e })),
                iw = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, o.jsx)(iT.B, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                iO = (0, l.forwardRef)((e, t) => (0, o.jsx)(iw, { forwardRef: t, ...e }));
            var iP = i(12288),
                iM = i(36573),
                iD = i.n(iM),
                iB = i(45547),
                iV = i.n(iB);
            let iU = (e) => {
                    let { className: t } = e;
                    return (0, o.jsx)('div', {
                        className: (0, m.$)(iV().root, t),
                        'data-test-id': v.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                iW = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tU.N)(),
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        x = (0, l.useId)(),
                        A = ''.concat(b, ' ').concat(b, '-description'),
                        j = (0, tV.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        N = (0, l.useMemo)(() => {
                            var e, t;
                            return (
                                (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.type) !== iP.l.PLAYLIST_CREATED_TAB &&
                                (null == _ || null == (t = _.tabs[j.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        T = (0, l.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== iP.l.PLAYLIST_CREATED_TAB)
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)(U.F, {
                                                className: (0, m.$)(iD().carouselEmpty, s),
                                                itemClassName: (0, m.$)(iD().item, iD().important),
                                                tabIndex: -1,
                                                children: (0, tW.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, o.jsx)(iU, {}),
                                        ],
                                    });
                                let t = e.items.map((t, i) =>
                                    (0, o.jsx)(
                                        d.B,
                                        {
                                            objectType: c.DomainObjectType.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: i + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, o.jsx)(iT.B, { contentLinesCount: 4, playlist: t }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === iP.l.PLAYLIST_CREATED_TAB && t.unshift((0, o.jsx)(iI.B, { className: iD().createPlaylistCard }, 'create-playlist-card')),
                                    (0, o.jsx)(U.F, { ref: C, itemClassName: (0, m.$)(iD().item, iD().important), className: s, 'aria-labelledby': A, children: t })
                                );
                            },
                            [A, s],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: C,
                                          itemClassName: (0, m.$)(iD().item, iD().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, tW.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(tV.Kp, { name: t, value: j.value, elementId: x, className: iD().tabPanel, children: T(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, x, T],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(iD().root, p, { [iD().root_withControls]: !N }),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(n.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, iD().header, iD().important),
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: b,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: iD().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!n.description,
                                }),
                            }),
                            (0, o.jsx)(tH.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, iD().tabCarousel, iD().important),
                                elementId: x,
                                shimmer: (0, o.jsx)(tH.zr, { isActive: a, className: (0, m.$)(s, iD().tabCarousel, iD().important), shimmerClassName: iD().tabShimmer }),
                                'aria-labelledby': b,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(tz.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, m.$)(iD().tab, iD().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                iz = (0, l.forwardRef)((e, t) => (0, o.jsx)(iW, { forwardRef: t, ...e }));
            var iH = i(56629),
                iK = i(66738),
                iY = i(18051),
                i$ = i(13376),
                iF = i.n(i$);
            let iX = { [iH._.UP]: 'chartUp', [iH._.DOWN]: 'chartDown', [iH._.SAME]: 'chartSame', [iH._.NEW]: 'chartNew' },
                iG = (0, _.PA)((e) => {
                    let { artist: t, position: i, progress: a, listenTimeSeconds: s, className: r } = e,
                        { formatMessage: l } = (0, u.A)(),
                        n = (0, iY.U)(s, l),
                        c = a ? iX[a] : null,
                        d = c
                            ? (0, o.jsx)(iK.I, { variant: c, size: 'xxs', className: (0, m.$)(iF().progressIcon, iF()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        _ = (0, eK.L)(() =>
                            void 0 !== i
                                ? (0, o.jsxs)('div', {
                                      className: iF().positionIndicator,
                                      children: [
                                          (0, o.jsx)(x.HL, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: i }),
                                          1 === i && (0, o.jsx)(iK.I, { variant: 'crown', size: 'xxs', className: iF().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== i && d,
                                      ],
                                  })
                                : void 0,
                        ),
                        p = (0, eK.L)(() => (0, o.jsx)(x.HL, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: iF().listenTime, children: n }));
                    return (0, o.jsx)(tq.a, { artist: t, className: r, topTitleElement: _, bottomTitleElement: p, contentLinesCount: 3 });
                }),
                iZ = (0, _.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: l,
                        meta: n,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return i || (null == m ? void 0 : m.items.length)
                        ? (0, o.jsx)(tE.O, {
                              ...u,
                              className: l,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) => {
                                            var i, a;
                                            return (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, o.jsx)(iG, {
                                                        artist: e.artist,
                                                        position: null == (i = e.top) ? void 0 : i.position,
                                                        progress: null == (a = e.top) ? void 0 : a.progress,
                                                        listenTimeSeconds: e.listenTimeSeconds,
                                                    }),
                                                },
                                                e.artist.id,
                                            );
                                        }),
                          })
                        : (0, o.jsx)(t1, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          });
                }),
                iQ = (0, l.forwardRef)((e, t) => (0, o.jsx)(iZ, { forwardRef: t, ...e }));
            var iq = i(27089),
                iJ = i(97952),
                i0 = i(25793),
                i1 = i.n(i0);
            let i2 = (0, _.PA)((e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: n, isShimmerActive: c, headingVariant: d = 'h2', ..._ } = e,
                        {
                            settings: { isMobile: u },
                            freeAccess: v,
                        } = (0, k.g)(),
                        { pageId: h } = (0, iJ.$)(),
                        { blockIdForFrom: b } = (0, tU.N)(),
                        [C, A] = (0, l.useState)(!1),
                        { isPlaying: j, togglePlay: N } = (0, t7.B)({
                            seeds: null != (t = null == s ? void 0 : s.vibe.seeds) ? t : [],
                            pageIdForFrom: h,
                            blockIdForFrom: b,
                        }),
                        T = (0, I.b)(),
                        f = (0, l.useCallback)(() => {
                            v.isVibeStartRestricted || (N(), T(!j));
                        }, [v.isVibeStartRestricted, N, T, j]),
                        S = (0, l.useCallback)(
                            () =>
                                (0, o.jsx)(P.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: j,
                                    onClick: f,
                                    className: i1().playButton,
                                    children: (0, o.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                            [f, j],
                        ),
                        g = (0, eK.L)(() =>
                            (0, o.jsx)(ie.S, {
                                isEnabled: v.isVibeStartRestricted,
                                isOpened: C,
                                onOpenChange: A,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == s ? void 0 : s.vibe.stationType,
                                renderChildren: S,
                            }),
                        ),
                        R = (0, eK.L)(() =>
                            n || !s
                                ? (0, o.jsxs)('div', {
                                      className: i1().root,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: i1().shimmerContainer,
                                              children: [
                                                  (0, o.jsx)(ic.W, { isActive: c, radius: 'xs', className: (0, m.$)(i1().coverShimmer, i1().item, i1().important) }),
                                                  u && (0, o.jsx)(ic.W, { radius: 'l', isActive: c, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !u &&
                                              (0, o.jsxs)('div', {
                                                  className: i1().container,
                                                  children: [
                                                      (0, o.jsx)(ic.W, { radius: 'l', isActive: c, width: 300, height: 32 }),
                                                      (0, o.jsx)(ic.W, { radius: 'xxxl', isActive: c, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, o.jsxs)('div', {
                                      className: i1().root,
                                      children: [
                                          (0, o.jsx)(iq.y, {
                                              vibe: s.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, m.$)(i1().item, i1().important),
                                              shouldShowAdditionals: u,
                                              additionalsLinesCount: 1,
                                          }),
                                          !u &&
                                              (0, o.jsxs)('div', {
                                                  className: i1().container,
                                                  children: [
                                                      (0, o.jsx)(x.DZ, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: i1().text,
                                                          lineClamp: 2,
                                                          variant: d,
                                                          children: null == s ? void 0 : s.vibe.description,
                                                      }),
                                                      g,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, ...(0, V.OZ)(_), children: R });
                }),
                i8 = (0, l.forwardRef)((e, t) => (0, o.jsx)(i2, { forwardRef: t, ...e }));
            var i3 = i(70154),
                i4 = i(3940),
                i9 = i(53712),
                i6 = i(51868),
                i5 = i(6313);
            let i7 = (0, _.PA)((e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    a = (0, b.c)(() => {
                        i(t.id);
                    });
                return (0, o.jsx)(i5.E, { room: t, contentLinesCount: 3, onRoomSuccessExit: a });
            });
            var ae = i(19185),
                at = i.n(ae);
            let ai = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        { multivibe: h } = (0, k.g)(),
                        [C, x] = (0, l.useState)([]);
                    (0, l.useEffect)(() => {
                        var e;
                        x((null == m || null == (e = m.items) ? void 0 : e.length) ? (null == m ? void 0 : m.items) : []);
                    }, [null == m ? void 0 : m.items]);
                    let A = (0, b.c)((e) => {
                            x((t) => t.filter((t) => t.id !== e));
                        }),
                        j = C.length,
                        N = (0, eK.L)(() => {
                            let e = C.map((e, t) => {
                                var i, a;
                                return (0, o.jsx)(
                                    d.B,
                                    {
                                        objectType: c.DomainObjectType.Wave,
                                        objectId: null != (a = null == (i = e.wave) ? void 0 : i.seedsId) ? a : '',
                                        objectPosX: t + 1,
                                        objectPosY: 1,
                                        objectsCount: j,
                                        children: (0, o.jsx)(i7, { room: e, onRoomSuccessExit: A }, e.id),
                                    },
                                    e.id,
                                );
                            });
                            return [
                                (0, o.jsx)(d.B, {
                                    objectType: c.DomainObjectType.Shortcut,
                                    objectId: '',
                                    objectPosX: 0,
                                    objectPosY: 1,
                                    objectsCount: j,
                                    children: (0, o.jsx)(i4.f, {}, 'create-vibe-room-button'),
                                }),
                                ...e,
                            ];
                        }),
                        T = (0, eK.L)(() => Array.from({ length: 9 }, (e, t) => (0, o.jsx)(i6.P, { isActive: a }, t))),
                        I = (0, eK.L)(() => (h.isNDAEnabled ? (0, o.jsx)(i3.b, { className: at().multivibeNDA }) : null));
                    return (0, o.jsx)(tE.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        showShimmerInfo: !1,
                        containerClassName: s,
                        headerClassName: r,
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink || i9.Z.collectionVibeRooms.href,
                        ref: t,
                        headingVariant: _,
                        customShimmer: T,
                        titleChildren: I,
                        'data-test-id': v.e8.landing.COLLECTION_WAVE_ROOMS,
                        children: N,
                    });
                }),
                aa = (0, l.forwardRef)((e, t) => {
                    let {
                        collection: { vibeRooms: i },
                        user: a,
                    } = (0, k.g)();
                    return i.isEnabled && a.hasPlus ? (0, o.jsx)(ai, { forwardRef: t, ...e, containerClassName: at().root }) : null;
                });
            var as = i(96618),
                ar = i(25895),
                ao = i(7985),
                al = i.n(ao),
                an = i(89331),
                ac = i.n(an);
            let ad = (0, _.PA)((e) => {
                    let { title: t, colors: i } = e;
                    return (0, o.jsxs)(x.HL, {
                        size: 'm',
                        variant: 'span',
                        className: ac().station,
                        children: [
                            (0, o.jsx)('div', {
                                className: ac().stationColors,
                                children: i.map((e, t) => (0, o.jsx)('span', { className: ac().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                am = (0, _.PA)((e) => {
                    var t, i, a;
                    let { data: s } = e,
                        { place: r, city: n, address: d, map: m } = s,
                        _ = (() => {
                            let { theme: e } = (0, as.W)();
                            return (0, l.useCallback)(
                                (t) => {
                                    let i = (0, V.a6)(t.replace('%%', '1300,1000')),
                                        { href: a } = (0, ar.u)(i, { query: { theme: null != e ? e : '' } });
                                    return a;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: p } = (0, u.A)(),
                        { href: v, target: h } = ((e) => {
                            let { theme: t } = (0, as.W)();
                            return (0, ar.u)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (a = null == s || null == (t = s.map) ? void 0 : t.url) ? a : ''),
                        C = (0, T.N)(),
                        { ref: A, intersectionPropertyId: j } = (0, f.n)(),
                        N = (0, b.c)(() => {
                            C({ to: c.AppScreen.Link, deepLink: v });
                        });
                    return (0, o.jsxs)('div', {
                        ref: A,
                        'data-intersection-property-id': j,
                        className: al().root,
                        children: [
                            (0, o.jsx)(x.DZ, { size: 'm', variant: 'h3', className: al().heading, children: r }),
                            (0, o.jsx)(O.N, {
                                onClick: N,
                                'aria-label': p({ id: 'entity-names.map-url' }),
                                href: v,
                                className: al().linkContainer,
                                target: h,
                                children: (0, o.jsx)(t4._V, {
                                    createUrlReplacer: _,
                                    className: al().mapImage,
                                    alt: r,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == m ? void 0 : m.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, o.jsxs)('div', {
                                className: al().addressContainer,
                                children: [
                                    (0, o.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', className: al().address, children: ''.concat(n, ', ').concat(d) }),
                                    (0, o.jsx)('div', {
                                        'aria-label': p({ id: 'entity-names.metro-stations' }),
                                        className: al().metroStations,
                                        children:
                                            null == (i = s.groupedMetroStations) ? void 0 : i.map((e, t) => (0, o.jsx)(ad, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var a_ = i(52783),
                au = i.n(a_);
            let ap = (0, _.PA)((e) => {
                    let { isActive: t } = e;
                    return (0, o.jsxs)('div', {
                        className: au().root,
                        children: [
                            (0, o.jsx)(ic.W, { className: au().heading, radius: 's', isActive: t }),
                            (0, o.jsx)(ic.W, { className: au().mapImage, radius: 's', isActive: t }),
                            (0, o.jsx)(ic.W, { className: au().address, radius: 's', isActive: t }),
                            (0, o.jsx)(ic.W, { className: au().metroStations, radius: 's', isActive: t }),
                        ],
                    });
                }),
                av = (0, _.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, containerClassName: s, isShimmerVisible: r, isShimmerActive: l, id: n, data: m, ..._ } = e,
                        { concert: u } = (0, k.g)(),
                        p = null != (i = null == (t = u.meta) ? void 0 : t.id) ? i : '',
                        v = (0, eK.L)(() => (r ? (0, o.jsx)(ap, { isActive: l }) : m ? (0, o.jsx)(am, { data: m }) : void 0));
                    return (0, o.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, V.OZ)(_),
                        children: (0, o.jsx)(d.B, { objectId: p, objectType: c.DomainObjectType.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: v }, n),
                    });
                }),
                ah = (0, l.forwardRef)((e, t) => (0, o.jsx)(av, { forwardRef: t, ...e }));
            var ab = i(82904),
                aC = i(28924),
                ax = i(39752);
            let aA = (e) => {
                let { filterKey: t, filterValue: i, filterPos: a, children: s } = e,
                    r = (0, l.useMemo)(() => ({ filterKey: t, filterValue: i, filterPos: a }), [t, i, a]);
                return (0, o.jsx)(ax.S.Provider, { value: r, children: s });
            };
            var aj = i(64407),
                aN = i(83418),
                aT = i(3656),
                aI = i(69663),
                af = i(17226),
                aS = i(90635),
                ag = i.n(aS);
            let aR = (e) => {
                let { concert: t } = e,
                    {
                        title: i,
                        datetime: a,
                        city: s,
                        place: r,
                        contentRating: n,
                        cover: d,
                        dataSessionId: _,
                        rank: p,
                        isCashbackExperimentEnabled: v,
                        isIdentityExperimentEnabled: h,
                        cashbackTitle: A,
                        cashbackValuePercent: j,
                    } = t,
                    { formatDate: N } = (0, u.A)(),
                    { ref: I, intersectionPropertyId: S } = (0, f.n)(),
                    g = (0, T.N)(),
                    { state: R, toggleTrue: y, toggleFalse: E } = (0, t3.e)(!1),
                    { experiments: w } = (0, k.g)(),
                    { href: O } = (0, ar.u)('/concert/:concertId', { params: { concertId: t.id } }),
                    P = (0, L.Z)(O),
                    M = w.checkExperiment(eN.z.WebNextConcertPage, 'on'),
                    D = (0, l.useMemo)(() => {
                        let e = v && !!A;
                        if ((h && j) || e)
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(ef.q, { children: N(a, (0, aI.f)()) }),
                                    (0, o.jsxs)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: ag().descriptionContainer,
                                        children: [
                                            (0, o.jsx)(x.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: ag().description,
                                                children: r,
                                            }),
                                            (0, o.jsx)(x.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: ag().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            n &&
                                                (0, o.jsx)(x.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: ag().description,
                                                    children: n,
                                                }),
                                        ],
                                    }),
                                    (0, o.jsx)(aN.m, { className: ag().cashback, title: A, valuePercent: j }),
                                ],
                            });
                        let t = [];
                        return (
                            a && t.push(N(a, (0, aI.f)())),
                            n && t.push(n),
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: ag().description,
                                        children: r,
                                    }),
                                    (0, o.jsxs)(ef.q, { children: [N(a, (0, aI.f)()), ' ', n] }),
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: ag().description,
                                        'aria-hidden': !0,
                                        children: t.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [A, j, n, a, N, v, h, r]),
                    B = (0, l.useCallback)(
                        (e) => {
                            (g({ to: c.AppScreen.ConcertPurchaseScreen }), y(), null == e || e.stopPropagation());
                        },
                        [y, g],
                    ),
                    U = (0, b.c)((e) => {
                        if (!M) {
                            (B(e), g({ to: c.AppScreen.ConcertScreen }));
                            return;
                        }
                        P(e);
                    }),
                    W = (0, l.useCallback)(
                        (e) => {
                            (e.code === af.v.SPACE || e.code === af.v.ENTER) && (e.preventDefault(), U());
                        },
                        [U],
                    );
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(C.t, {
                            className: ag().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: i, s: a, l: s } = (0, V.g8)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0) 40%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.1) 43%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.2) 46%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.3) 49%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.4) 52%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.5) 55%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.6) 58%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.7) 61%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.8) 64%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.9) 67%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 70%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == d ? void 0 : d.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: U,
                            onKeyDown: W,
                            ref: I,
                            'data-intersection-property-id': S,
                            children: [
                                (0, o.jsx)(t4._V, {
                                    className: ag().cover,
                                    src: null == d ? void 0 : d.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== p &&
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'bold',
                                        className: (0, m.$)(ag().index, ag().title),
                                        'aria-hidden': !0,
                                        children: p,
                                    }),
                                (0, o.jsxs)('div', {
                                    className: ag().meta,
                                    children: [
                                        (0, o.jsx)(x.DZ, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, m.$)(ag().title, ag().concertTitle),
                                            children: i,
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: ag().textContainer,
                                            children: [
                                                a &&
                                                    (0, o.jsx)(aT.d, {
                                                        datetime: a,
                                                        className: ag().date,
                                                        monthClassName: ag().description,
                                                        dayClassName: ag().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, o.jsxs)('div', {
                                                    className: ag().info,
                                                    children: [
                                                        (0, o.jsx)(x.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: ag().title,
                                                            children: s,
                                                        }),
                                                        D,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, o.jsx)(aj.h, { dataSessionId: _, isOpened: R, onOpen: y, onClose: E }),
                    ],
                });
            };
            var aL = i(15937),
                ay = i.n(aL);
            let ak = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        { experiments: b, concerts: C } = (0, k.g)(),
                        x = (0, l.useRef)(null),
                        A = b.checkExperiment(eN.z.WebNextNewConcertCard, 'on'),
                        j = C.isLocationSelectionExperimentEnabled
                            ? {
                                  filterKey: c.DomainObjectType.Location,
                                  filterValue: null !== C.locationSelection.selectedLocationId ? String(C.locationSelection.selectedLocationId) : 'auto',
                                  filterPos: 1,
                              }
                            : {},
                        N = (0, l.useMemo)(
                            () =>
                                i
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (i, a) =>
                                              e ? (0, o.jsx)(aC.L, { isActive: t }, a) : (0, o.jsx)(ic.W, { isActive: t, className: ay().shimmer }, a),
                                          ))(A, a)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) =>
                                            (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: A ? (0, o.jsx)(ab.Q, { concert: e }) : (0, o.jsx)(aR, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == _ ? void 0 : _.items, a, i, A],
                        );
                    return (0, o.jsx)(aA, {
                        ...j,
                        children: (0, o.jsxs)('section', {
                            ref: t,
                            className: (0, m.$)(ay().root, { [ay().root_withNewConcertCards]: A }, p),
                            ...(0, V.OZ)(v),
                            children: [
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    labeledForId: h,
                                    title: n.title,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: ay().controls, carouselRef: x }),
                                    headingVariant: u,
                                }),
                                (0, o.jsx)(U.F, { ref: x, itemClassName: (0, m.$)(ay().item, ay().important), className: s, 'aria-labelledby': h, children: N }),
                            ],
                        }),
                    });
                }),
                aE = (0, l.forwardRef)((e, t) => (0, o.jsx)(ak, { forwardRef: t, ...e }));
            var aw = i(38911),
                aO = i.n(aw),
                aP = i(46126),
                aM = i.n(aP);
            let aD = (e) => {
                let { className: t, title: i, subtitle: a, covers: s, link: r, type: n, withLastPlayed: d } = e,
                    _ = (0, T.N)(),
                    u = (0, l.useMemo)(() => {
                        if (0 !== s.length)
                            return (0, o.jsx)('div', {
                                className: aM().covers,
                                'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS,
                                children: s
                                    .slice(0, 2)
                                    .map((e, t) =>
                                        (0, o.jsx)(
                                            C.t,
                                            {
                                                className: aM().coverContainer,
                                                radius: 'xs',
                                                children: (0, o.jsx)(t4._V, {
                                                    className: aM().cover,
                                                    size: 80,
                                                    src: e.uri,
                                                    fit: 'contain',
                                                    withAvatarReplace: !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                            });
                    }, [s]),
                    p = (0, l.useCallback)(() => {
                        _({ to: c.AppScreen.Link });
                    }, [_]);
                return (0, o.jsx)(C.t, {
                    className: (0, m.$)(aM().root, aM()['root_'.concat(n)], { [aM().root_withCovers]: s.length > 0, [aM().root_withLastPlayed]: d }, t),
                    radius: 'l',
                    'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM,
                    children: (0, o.jsx)(O.N, {
                        className: aM().link,
                        href: r,
                        onClick: p,
                        'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK,
                        children: (0, o.jsxs)('div', {
                            className: aM().content,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: aM().textContainer,
                                    children: [
                                        (0, o.jsxs)(x.HL, {
                                            className: aM().title,
                                            size: 'm',
                                            variant: 'div',
                                            'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE,
                                            children: [i, (0, o.jsx)(iK.I, { className: aM().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        a &&
                                            (0, o.jsx)(x.HL, {
                                                className: aM().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE,
                                                children: a,
                                            }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    }),
                });
            };
            var aB = i(28631),
                aV = i(28068),
                aU = i(2493),
                aW = i(11708),
                az = i(30296),
                aH = i(19464),
                aK = i.n(aH);
            let aY = (0, _.PA)((e) => {
                    var t, i, a, s, r;
                    let { className: n, lastPlayed: _ } = e,
                        { objectsCount: p } = (0, tU.N)(),
                        { formatMessage: A } = (0, u.A)(),
                        { sonataState: j, continueListen: T } = (0, k.g)(),
                        f = (0, az.e)(),
                        g = (0, aW.$)(),
                        {
                            album: R,
                            playlist: L,
                            track: M,
                            getTrackMeta: D,
                            getPlaylistMeta: B,
                            isNeededToLoad: V,
                            isRejected: U,
                            albumDuration: W,
                            albumDurationLeft: z,
                        } = _.data,
                        { track: H, trackIndex: K, contextType: Y, contextId: $, albumDuration: F, albumStreamProgress: X, trackTempStreamProgress: G } = T,
                        Z = (0, I.b)(),
                        Q = (0, N.P)(),
                        q = (0, l.useMemo)(() => H || M, [H, M]),
                        J = (null == (t = j.entityMeta) ? void 0 : t.isPodcast) || (null == (i = j.entityMeta) ? void 0 : i.isAudiobook),
                        ee = (0, l.useCallback)(async () => {
                            let e = await D();
                            !T.track &&
                                e &&
                                (T.saveTrack({
                                    contextType: R ? h.K.Album : h.K.Playlist,
                                    contextId: R ? R.id : String(null == L ? void 0 : L.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                W && z && (T.saveAlbumDuration(W), T.albumStreamProgress.updateEndPositionSec(W - z)));
                        }, [T, R, W, z, D, null == L ? void 0 : L.id]),
                        et = (0, l.useCallback)(async () => {
                            let e = await B();
                            T.trackIndex || 'number' != typeof e || T.saveTrackIndex(e);
                        }, [B, T]);
                    (0, l.useEffect)(() => {
                        V && (ee(), et());
                    }, [V, ee, et]);
                    let ei = Y === h.K.Album && q.mainAlbum && (null == q ? void 0 : q.mainAlbum.isAudiobook),
                        ea = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = q.streamProgress) || t.updateEndPositionSec(0)
                                        : null == (i = q.streamProgress) || i.updateEndPositionSec(e.position),
                                    ei)
                                ) {
                                    let t = (null == X ? void 0 : X.endPositionSec) || 0,
                                        i = e.position,
                                        a = i - ((null == G ? void 0 : G.endPositionSec) || 0);
                                    (null == X || X.updateEndPositionSec(t + a), null == G || G.updateEndPositionSec(i));
                                }
                            },
                            [q.streamProgress, X, G, ei],
                        ),
                        es = ei ? (null == X ? void 0 : X.endPositionSec) || 0 : (null == (a = q.streamProgress) ? void 0 : a.endPositionSec) || 0,
                        er = q.durationMs ? q.durationMs / 1e3 : 0,
                        eo = ei ? F || 0 : er,
                        el = (0, aU.m)(es, eo),
                        en = (0, l.useMemo)(() => (0, aB.A)(ea, 500), [ea]),
                        { isPlaying: ec, togglePlay: ed } = ((e) => {
                            let { track: t, trackIndex: i, contextType: a, contextId: s } = e,
                                r = (0, l.useMemo)(() => {
                                    switch (a) {
                                        case h.K.Playlist:
                                            return { type: h.K.Playlist, meta: { id: String(s) } };
                                        case h.K.Album:
                                            return { type: h.K.Album, meta: { id: Number(s) } };
                                        case h.K.Various:
                                            return { type: h.K.Various, meta: { id: Number(s) } };
                                        case h.K.Artist:
                                            return { type: h.K.Artist, meta: { id: Number(s) } };
                                        case h.K.Generative:
                                            return { type: h.K.Generative, meta: { id: Number(s) } };
                                        case h.K.Vibe:
                                            return { type: h.K.Vibe, meta: { id: String(s) } };
                                        default:
                                            return { type: h.K.Various, meta: { id: '' } };
                                    }
                                }, [a, s]),
                                { from: o, utmLink: n } = (0, S.f)({ contextId: r.meta.id, contextType: r.type }),
                                c = (0, eK.L)(() => {
                                    switch (a) {
                                        case h.K.Playlist:
                                            return { type: h.K.Playlist, meta: { id: String(s) }, from: o, utmLink: n };
                                        case h.K.Album:
                                            return { type: h.K.Album, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case h.K.Various:
                                            return { type: h.K.Various, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case h.K.Artist:
                                            return { type: h.K.Artist, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case h.K.Generative:
                                            return { type: h.K.Generative, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case h.K.Vibe:
                                            return {
                                                type: h.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: o,
                                                utmLink: n,
                                            };
                                        default:
                                            return { type: h.K.Playlist, meta: { id: '' }, from: o, utmLink: n };
                                    }
                                });
                            return (0, y.D)({
                                playContextParams: { contextData: c, queueParams: { entityId: t.id, index: i }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: q, trackIndex: K, contextType: Y, contextId: $ }),
                        em = (0, b.c)(() => {
                            Q() || (ed(), Z(!ec));
                        }),
                        e_ = (0, l.useMemo)(() => ({ '--color-background': q.averageColor }), [q.averageColor]);
                    (0, l.useEffect)(() => {
                        let e,
                            t =
                                null == f
                                    ? void 0
                                    : f.state.queueState.currentEntity.onChange(() => {
                                          (null == e || e(),
                                              (e = f.state.playerState.progress.onChange(() => {
                                                  let e = f.state.playerState.progress.value;
                                                  J && en(e);
                                              })));
                                      });
                        return () => {
                            (null == t || t(), null == e || e());
                        };
                    }, [f, en, J, q.streamProgress]);
                    let eu = ei ? q.mainAlbum.title : q.title,
                        ep = ei ? q.mainAlbum.coverUri : q.coverUri,
                        ev = (0, l.useMemo)(() => {
                            var e;
                            return A({ id: 'entity-names.album-name' }, { albumName: null == (e = q.mainAlbum) ? void 0 : e.title });
                        }, [A, null == (s = q.mainAlbum) ? void 0 : s.title]),
                        eh = (0, l.useMemo)(() => (ei ? ev : A({ id: 'entity-names.track-name' }, { trackName: q.title })), [A, ei, ev, q.title]),
                        eb = ei ? q.mainAlbum.explicitDisclaimer : q.explicitDisclaimer,
                        eC = g(eo - es, !1);
                    return U
                        ? null
                        : (0, o.jsx)(
                              d.B,
                              {
                                  objectType: c.DomainObjectType.Track,
                                  objectId: String(q.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: p,
                                  children: (0, o.jsxs)(C.t, {
                                      className: (0, m.$)(aK().root, n),
                                      radius: 'l',
                                      style: e_,
                                      'aria-label': eu,
                                      'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: aK().content,
                                              children: [
                                                  (0, o.jsx)(E.B, {
                                                      className: (0, m.$)(aK().cover, aK().important),
                                                      src: ep,
                                                      size: 50,
                                                      alt: eh,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: q.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, o.jsxs)('div', {
                                                      className: aK().metaTrack,
                                                      children: [
                                                          (0, o.jsxs)(O.N, {
                                                              className: aK().metaContainer,
                                                              href: null == (r = q.mainAlbum) ? void 0 : r.url,
                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK,
                                                              children: [
                                                                  (0, o.jsx)(x.HL, {
                                                                      className: aK().title,
                                                                      type: 'entity',
                                                                      size: 'm',
                                                                      weight: 'medium',
                                                                      variant: 'span',
                                                                      lineClamp: 1,
                                                                      'aria-label': ev,
                                                                      'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK_TITLE,
                                                                      children: eu,
                                                                  }),
                                                                  eb &&
                                                                      (0, o.jsx)(w.N, {
                                                                          getDescriptionTexts: q.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: eb,
                                                                          className: aK().explicitMark,
                                                                      }),
                                                                  (0, o.jsx)(iK.I, { className: aK().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              className: aK().progress,
                                                              children:
                                                                  !!eo &&
                                                                  (0, o.jsxs)(o.Fragment, {
                                                                      children: [
                                                                          (0, o.jsx)(aV.q, {
                                                                              'aria-valuetext': el,
                                                                              'aria-busy': ec && J,
                                                                              fullCircleClassName: aK().fullCircle,
                                                                              progressCircleClassName: aK().progressCircle,
                                                                              value: es,
                                                                              max: eo,
                                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS,
                                                                          }),
                                                                          (0, o.jsx)(x.HL, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT,
                                                                              children: eC,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)(P.D, { variant: 'filled', className: aK().playButton, isPlaying: ec && J, onClick: em, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              q.id,
                          );
                }),
                a$ = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, containerClassName: r, headingVariant: n, data: _, ...p } = e,
                        { formatMessage: v } = (0, u.A)(),
                        h = (0, l.useId)(),
                        { objectsCount: b } = (0, tU.N)(),
                        C = (0, l.useMemo)(() => {
                            if (!_ || i) return Array.from({ length: 3 }, (e, t) => (0, o.jsx)(ic.W, { className: aO().item, isActive: a }, t));
                            let e = [
                                    _.bookshelf.bookCount ? v({ id: 'entity-names.number-of-books' }, { counter: _.bookshelf.bookCount }) : void 0,
                                    _.bookshelf.podcastCount ? v({ id: 'entity-names.number-of-podcasts' }, { counter: _.bookshelf.podcastCount }) : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(',\n'),
                                t = _.newEpisodes.trackCount ? v({ id: 'entity-names.number-of-episodes' }, { counter: _.newEpisodes.trackCount }) : void 0,
                                s = [];
                            return (
                                _.lastPlayed &&
                                    s.push((0, o.jsx)(aY, { className: (0, m.$)(aO().item, aO().item_lastPlayed), lastPlayed: _.lastPlayed }, _.lastPlayed.type)),
                                s.push(
                                    (0, o.jsx)(
                                        d.B,
                                        {
                                            objectType: c.DomainObjectType.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: b,
                                            children: (0, o.jsx)(aD, {
                                                className: aO().item,
                                                type: 'bookshelf',
                                                link: i9.Z.collectionShelf.href,
                                                title: _.bookshelf.title,
                                                subtitle: e,
                                                covers: _.bookshelf.covers,
                                                withLastPlayed: !!_.lastPlayed,
                                            }),
                                        },
                                        _.bookshelf.title,
                                    ),
                                    (0, o.jsx)(
                                        d.B,
                                        {
                                            objectType: c.DomainObjectType.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: b,
                                            children: (0, o.jsx)(aD, {
                                                className: aO().item,
                                                type: 'newEpisodes',
                                                link: i9.Z.collectionShelfNewEpisodes.href,
                                                title: _.newEpisodes.title,
                                                subtitle: t,
                                                covers: _.newEpisodes.covers,
                                                withLastPlayed: !!_.lastPlayed,
                                            }),
                                        },
                                        _.newEpisodes.title,
                                    ),
                                ),
                                s
                            );
                        }, [v, _, a, i, b]);
                    return (0, o.jsxs)('section', {
                        ref: t,
                        ...(0, V.OZ)(p),
                        children: [
                            (0, o.jsx)(W.T, { className: s, labeledForId: h, title: v({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: n }),
                            (0, o.jsx)('div', {
                                className: aO().blocksContainer,
                                children: (0, o.jsx)('div', { className: (0, m.$)(aO().container, r), 'aria-labelledby': h, children: C }),
                            }),
                        ],
                    });
                },
                aF = (0, l.forwardRef)((e, t) => (0, o.jsx)(a$, { forwardRef: t, ...e })),
                aX = (e) => {
                    let { forwardRef: t, headerClassName: i, headingVariant: a, meta: s, ...r } = e;
                    return (0, o.jsx)(d.B, {
                        objectType: c.DomainObjectType.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, o.jsx)('section', {
                            ref: t,
                            ...(0, V.OZ)(r),
                            children: (0, o.jsx)(W.T, { className: i, title: s.title, headingVariant: a, viewAllActionLink: s.viewAllActionLink }),
                        }),
                    });
                },
                aG = (0, l.forwardRef)((e, t) => (0, o.jsx)(aX, { forwardRef: t, ...e }));
            var aZ = i(42057),
                aQ = i(58301),
                aq = i(49200),
                aJ = i(91809),
                a0 = i(1797);
            let a1 = (0, _.PA)((e) => {
                    let { donation: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, f.n)(),
                        s = (0, aq.Q)()(t.url),
                        r = (0, L.Z)(s),
                        l = (0, L.Z)(t.artist.url),
                        n = (0, T.N)(),
                        d = (0, b.c)(() => {
                            (n({ to: c.AppScreen.ArtistScreen }), l());
                        }),
                        m = (0, b.c)(() => {
                            (n({ to: c.AppScreen.Link, deepLink: s }), r());
                        }),
                        _ = (0, a0.S)({ artist: t.artist, callback: d });
                    return (0, o.jsx)(aJ.X, {
                        ref: i,
                        'data-intersection-property-id': a,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: _,
                        onNavigateToDonation: m,
                    });
                }),
                a2 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, l.useMemo)(
                            () =>
                                !i && (null == m ? void 0 : m.items)
                                    ? m.items.map((e, t) => {
                                          let { data: i } = e;
                                          return (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Donation,
                                                  objectId: i.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, o.jsx)(a1, { donation: i }),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, aQ.k)(a),
                            [null == m ? void 0 : m.items, a, i],
                        );
                    return (0, o.jsx)(aZ.x, {
                        containerClassName: s,
                        headerClassName: r,
                        headingVariant: _,
                        className: u,
                        forwardRef: t,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        title: n.title,
                        ...p,
                        children: v,
                    });
                },
                a8 = (0, l.forwardRef)((e, t) => (0, o.jsx)(a2, { forwardRef: t, ...e }));
            var a3 = i(9911),
                a4 = i(4071),
                a9 = i(32801),
                a6 = i.n(a9);
            let a5 = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, o.jsx)(ic.W, { isActive: t, className: (0, m.$)(a6().root, i) });
                },
                a7 = (0, _.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: a } = (0, u.A)(),
                        { pageId: s } = (0, iJ.$)(),
                        { blockIdForFrom: r } = (0, tU.N)(),
                        { ref: n, intersectionPropertyId: c } = (0, f.n)(),
                        { toggleTrue: d, toggleFalse: _, state: p } = (0, t3.e)(!1),
                        { freeAccess: h } = (0, k.g)(),
                        b = i.title.length > 26,
                        { isPlaying: C, togglePlay: A } = (0, t7.B)({ seeds: i.seeds, pageIdForFrom: s, blockIdForFrom: r }),
                        j = (0, I.b)(),
                        N = (0, l.useCallback)(
                            (e) => {
                                h.isVibeStartRestricted ||
                                    ((0, ea.P)(e, a6().ripple),
                                    d(),
                                    A().finally(() => {
                                        (_(), j(!C));
                                    }));
                            },
                            [_, d, A, C, j, h.isVibeStartRestricted],
                        ),
                        T = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        S = C ? 'pause' : 'play',
                        g = C ? v.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : v.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        R = (0, l.useCallback)(
                            () =>
                                (0, o.jsxs)(a4.$, {
                                    style: T,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: N,
                                    className: (0, m.$)(a6().root, a6().button, { [a6().button_loading]: p }, t),
                                    'data-intersection-property-id': c,
                                    ref: n,
                                    'data-test-id': v.e8.landing.VIBE_DISCOVERY_ITEM,
                                    children: [
                                        (0, o.jsx)(t4._V, {
                                            className: a6().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, o.jsxs)('span', {
                                            className: a6().textContainer,
                                            children: [
                                                (0, o.jsx)(x.HL, {
                                                    className: a6().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(a({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, o.jsxs)(x.HL, {
                                                    className: (0, m.$)(a6().title, { [a6().title_long]: b }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, o.jsx)(iK.I, { className: a6().icon, size: 'xxs', variant: S, 'data-test-id': g }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, a, N, g, S, c, b, p, n, T, i],
                        );
                    return (0, o.jsx)(ie.S, {
                        isEnabled: h.isVibeStartRestricted,
                        placement: 'top',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: R,
                    });
                });
            var se = i(50930),
                st = i.n(se);
            let si = (e) => {
                    let { forwardRef: t, items: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r } = e;
                    return (0, o.jsx)(U.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, m.$)(st().item, st().important, a),
                        'aria-labelledby': r,
                        children:
                            null == i
                                ? void 0
                                : i.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.length,
                                              children: (0, o.jsx)(a7, { vibe: e }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                sa = (e) => {
                    let { forwardRef: t, isActive: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r, length: l } = e;
                    return (0, o.jsx)(U.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, m.$)(st().item, st().important, a),
                        'aria-labelledby': r,
                        children: Array.from({ length: l }, (e, t) => (0, o.jsx)(a5, { isActive: i }, t)),
                    });
                },
                ss = (0, l.forwardRef)((e, t) => (0, o.jsx)(si, { forwardRef: t, ...e })),
                sr = (0, l.forwardRef)((e, t) => (0, o.jsx)(sa, { forwardRef: t, ...e }));
            var so = i(71839),
                sl = i.n(so);
            let sn = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            className: d,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, l.useRef)(null),
                        { shouldHideControls: h } = (0, a3.Y)(v),
                        b = !!(n.description || n.title || !h),
                        C = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(sr, { isActive: a, ref: v, containerClassName: s, ariaLabelledBy: p, length: 9 })
                                    : (0, o.jsx)(ss, { ref: v, containerClassName: s, ariaLabelledBy: p, items: null == c ? void 0 : c.items }),
                            [null == c ? void 0 : c.items, a, i, s, p],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(sl().root, d),
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [
                            b &&
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: p,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: sl().controls, carouselRef: v }),
                                    headingVariant: _,
                                    withDescription: !!n.description,
                                }),
                            C,
                        ],
                    });
                },
                sc = (0, l.forwardRef)((e, t) => (0, o.jsx)(sn, { forwardRef: t, ...e }));
            var sd = i(3661),
                sm = i.n(sd);
            let s_ = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            className: u,
                            headingVariant: p,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        b = (0, l.useRef)(null),
                        { shouldHideControls: C } = (0, a3.Y)(b),
                        x = !!(n.description || n.title || !C),
                        A = (0, l.useMemo)(() => {
                            var e;
                            return i
                                ? (0, o.jsx)(U.F, {
                                      ref: b,
                                      itemClassName: (0, m.$)(sm().item, sm().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                      children: (0, tW.k)({ isActive: a, centered: !0 }),
                                  })
                                : (0, o.jsx)(U.F, {
                                      ref: b,
                                      itemClassName: (0, m.$)(sm().item, sm().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                      children:
                                          null == _ || null == (e = _.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var i;
                                                    return (0, o.jsx)(
                                                        d.B,
                                                        {
                                                            objectType: c.DomainObjectType.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null == (i = _.items) ? void 0 : i.length,
                                                            children: (0, o.jsx)(iq.y, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == _ ? void 0 : _.items, a, i, s, h]);
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(sm().root, u),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            x &&
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: h,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: sm().controls, carouselRef: b }),
                                    headingVariant: p,
                                    withDescription: !!n.description,
                                }),
                            A,
                        ],
                    });
                },
                su = (0, l.forwardRef)((e, t) => (0, o.jsx)(s_, { forwardRef: t, ...e }));
            var sp = i(49807),
                sv = i(2577),
                sh = i.n(sv);
            let sb = (0, _.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, meta: r, data: l, headingVariant: n, className: c, ...d } = e,
                        { artist: m } = (0, k.g)(),
                        { formatMessage: _ } = (0, u.A)(),
                        p = (0, eK.L)(() => {
                            if (!l) return;
                            let e = [];
                            return (
                                l.tracksCount && e.push(_({ id: 'entity-names.tracks-count' }, { value: l.tracksCount })),
                                l.collectionAlbumCount && e.push(_({ id: 'entity-names.albums-count' }, { value: l.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: c,
                        ...(0, V.OZ)(d),
                        children: (0, o.jsx)(W.T, {
                            className: s,
                            title: r.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == l ? void 0 : l.href(m.id),
                            coverContainerClassName: sh().cover,
                            shimmerCoverClassName: sh().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: p,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                        }),
                    });
                }),
                sC = (0, l.forwardRef)((e, t) => (0, o.jsx)(sb, { forwardRef: t, ...e }));
            var sx = i(17065),
                sA = i.n(sx);
            let sj = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tU.N)(),
                        b = (0, tV.zb)(0),
                        C = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: x,
                                          itemClassName: (0, m.$)(sA().item, sA().important),
                                          className: s,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, tW.k)({ isActive: a }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.items.map((e) =>
                                            (0, o.jsx)(
                                                tV.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: b.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(U.F, {
                                                        ref: x,
                                                        itemClassName: (0, m.$)(sA().item, sA().important),
                                                        className: s,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children: e.data.map((t, i) =>
                                                            (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: i + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, o.jsx)(th.a, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [i, null == _ ? void 0 : _.items, s, C, a, b.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(sA().root, p),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(n.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, sA().header, sA().important),
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: C,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: sA().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!n.description,
                                }),
                            }),
                            (0, o.jsx)(tH.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, sA().tabCarousel, sA().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tH.nR, { isActive: a, className: (0, m.$)(s, sA().tabCarousel, sA().important) }),
                                'aria-labelledby': C,
                                ...b,
                                children:
                                    null == _
                                        ? void 0
                                        : _.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tz.o,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, m.$)(sA().tab, sA().important),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                }),
                sN = (0, l.forwardRef)((e, t) => (0, o.jsx)(sj, { forwardRef: t, ...e }));
            var sT = i(44288),
                sI = i(33130),
                sf = i.n(sI);
            let sS = (e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: n, isShimmerActive: c, headingVariant: d } = e,
                        m = (0, l.useMemo)(() => {
                            if (n) {
                                var e;
                                return (0, sT.q)({
                                    className: sf().root,
                                    shimmerClassName: sf().shimmer,
                                    isActive: c,
                                    count: (null == (e = a.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, o.jsx)('div', {
                                className: sf().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, o.jsx)(
                                                  W.T,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: d },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == s ? void 0 : s.items, d, c, n, null == (t = a.source) ? void 0 : t.countWeb]);
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, 'data-test-id': v.e8.landing.ITEM_LIST, children: m });
                },
                sg = (0, l.forwardRef)((e, t) => (0, o.jsx)(sS, { forwardRef: t, ...e }));
            var sR = i(54637),
                sL = i.n(sR),
                sy = i(95865),
                sk = i.n(sy);
            let sE = (0, _.PA)((e) => {
                    let { title: t, subtitle: i, link: a, testId: s, icon: r, covers: n, navigateTo: c } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, k.g)(),
                        m = (0, T.N)(),
                        { ref: _, intersectionPropertyId: u } = (0, f.n)(),
                        p = (0, l.useMemo)(() => {
                            if (0 !== n.length)
                                return (0, o.jsx)('div', {
                                    className: sk().covers,
                                    children: n.map((e, t) =>
                                        (0, o.jsx)(
                                            C.t,
                                            {
                                                className: sk().coverContainer,
                                                radius: 'xs',
                                                'data-test-id': v.e8.landing.LIKES_HISTORY_COVERS,
                                                children: (0, o.jsx)(t4._V, { size: 80, className: sk().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [n]),
                        h = (0, l.useCallback)(() => {
                            m({ to: c });
                        }, [c, m]);
                    return (0, o.jsx)('div', {
                        ref: _,
                        'data-intersection-property-id': u,
                        className: sk().root,
                        'data-test-id': s,
                        children: (0, o.jsxs)(O.N, {
                            className: sk().link,
                            href: a,
                            onClick: h,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: sk().start,
                                    children: [
                                        r,
                                        (0, o.jsxs)('div', {
                                            className: sk().textContainer,
                                            children: [
                                                (0, o.jsxs)(x.DZ, {
                                                    className: sk().title,
                                                    size: d ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    'data-test-id': v.e8.landing.LIKES_HISTORY_TITLE,
                                                    children: [t, (0, o.jsx)(iK.I, { className: sk().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, o.jsx)(x.HL, {
                                                    className: sk().subtitle,
                                                    size: 'm',
                                                    variant: 'div',
                                                    lineClamp: 1,
                                                    'data-test-id': v.e8.landing.LIKES_HISTORY_SUBTITLE,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                p,
                            ],
                        }),
                    });
                }),
                sw = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(ic.W, { isActive: t, className: sk().root, height: 82 });
                },
                sO = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, ...r } = e,
                        { formatMessage: n } = (0, u.A)(),
                        { favorites: m, history: _ } = s || {},
                        p = (0, l.useMemo)(
                            () =>
                                m && _ && !i
                                    ? [
                                          (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Playlist,
                                                  objectId: m.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, o.jsx)(sE, {
                                                      title: m.title,
                                                      subtitle: n({ id: 'entity-names.number-of-tracks' }, { counter: m.count }),
                                                      link: m.url,
                                                      navigateTo: c.AppScreen.PlaylistScreen,
                                                      testId: v.e8.landing.LIKES_BLOCK,
                                                      icon: (0, o.jsx)(C.t, {
                                                          className: sL().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(t4._V, {
                                                              className: sL().favoritesCover,
                                                              size: 80,
                                                              src: m.cover.uri,
                                                              fit: 'cover',
                                                              withAvatarReplace: !0,
                                                              alt: m.title,
                                                          }),
                                                      }),
                                                      covers: m.trackCovers,
                                                  }),
                                              },
                                              m.id,
                                          ),
                                          (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Shortcut,
                                                  objectId: _.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, o.jsx)(sE, {
                                                      title: _.title,
                                                      subtitle: _.artists.join(', '),
                                                      link: _.url,
                                                      navigateTo: c.AppScreen.MusicHistoryScreen,
                                                      testId: v.e8.landing.HISTORY_BLOCK,
                                                      icon: (0, o.jsx)(C.t, {
                                                          className: sL().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(iK.I, { className: sL().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: _.trackCovers,
                                                  }),
                                              },
                                              _.id,
                                          ),
                                      ]
                                    : [(0, o.jsx)(sw, { isActive: a }, 0), (0, o.jsx)(sw, { isActive: a }, 1)],
                            [m, n, _, a, i],
                        );
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: sL().root,
                        ...(0, V.OZ)(r),
                        children: (0, o.jsx)(U.F, { className: sL().carousel, itemClassName: sL().carouselItem, children: p }),
                    });
                },
                sP = (0, l.forwardRef)((e, t) => (0, o.jsx)(sO, { forwardRef: t, ...e }));
            var sM = i(41915),
                sD = i(9713),
                sB = i.n(sD);
            let sV = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: c,
                        className: d,
                        ...m
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: d,
                        ...m,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        itemClassName: sB().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        'data-test-id': v.e8.landing.MIXES_BLOCK,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, o.jsx)(
                                          sM.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sU = (0, l.forwardRef)((e, t) => (0, o.jsx)(sV, { forwardRef: t, ...e }));
            var sW = i(55492),
                sz = i(95772),
                sH = i(61373),
                sK = i.n(sH);
            let sY = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            headerClassName: a,
                            meta: s,
                            data: r,
                            headingVariant: n,
                            isShimmerActive: _,
                            containerClassName: u,
                            isShimmerVisible: p,
                            className: v,
                            ...h
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useMemo)(() => {
                            if (p) {
                                var e;
                                return (0, o.jsx)(sz.e, {
                                    itemClassName: (0, m.$)(sK().item, sK().important, sK().shimmerWithSubcover),
                                    isActive: _,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = s.source) ? void 0 : e.count,
                                });
                            }
                            return null == r
                                ? void 0
                                : r.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: r.items.length,
                                              children: (0, o.jsx)(
                                                  sW.V,
                                                  {
                                                      linkClassName: (0, m.$)(sK().item, sK().important),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: 'h3',
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [_, p, null == r ? void 0 : r.items, null == (t = s.source) ? void 0 : t.count]);
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: v,
                        ...(0, V.OZ)(h),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(sK().header, a),
                                labeledForId: b,
                                title: s.title,
                                viewAllActionLink: s.viewAllActionLink,
                                headingVariant: n,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(sK().mixesGrid, u), children: C }),
                        ],
                    });
                },
                s$ = (0, l.forwardRef)((e, t) => (0, o.jsx)(sY, { forwardRef: t, ...e }));
            var sF = i(80325),
                sX = i.n(sF);
            let sG = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: sX().shimmer,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        itemClassName: sX().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: m,
                        'data-test-id': v.e8.landing.MIXES_MUSIC,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, o.jsx)(
                                                  sW.V,
                                                  { linkClassName: sX().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sZ = (0, l.forwardRef)((e, t) => (0, o.jsx)(sG, { forwardRef: t, ...e }));
            var sQ = i(23707),
                sq = i.n(sQ),
                sJ = i(63938),
                s0 = i.n(sJ);
            let s1 = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(ic.W, { isActive: t, className: s0().root });
                },
                s2 = (0, _.PA)((e) => {
                    var t, i;
                    let { neuromusic: a } = e,
                        { from: s } = (0, S.f)(),
                        { isPlaying: r, togglePlay: n } = (0, y.D)({
                            playContextParams: { contextData: { type: h.K.Generative, meta: { id: a.stationId }, from: s }, loadContextMeta: !0 },
                        }),
                        c = (0, l.useCallback)(
                            (e) => {
                                ((0, ea.P)(e, s0().ripple), n());
                            },
                            [n],
                        ),
                        d = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == a || null == (e = a.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == a || null == (t = a.style) ? void 0 : t.titleColor,
                            };
                        }, [null == a || null == (t = a.style) ? void 0 : t.backgroundColor, null == a || null == (i = a.style) ? void 0 : i.titleColor]),
                        _ = r ? v.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : v.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, o.jsx)(a4.$, {
                        style: d,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: c,
                        className: (0, m.$)(s0().root, s0().button),
                        'data-test-id': v.e8.landing.NEUROMUSIC_BLOCK_ITEM,
                        children: (0, o.jsxs)('div', {
                            className: s0().textContainer,
                            children: [
                                (0, o.jsx)(iK.I, { className: s0().icon, size: 'xxs', variant: r ? 'pause' : 'play', 'data-test-id': _ }),
                                (0, o.jsx)(x.HL, { className: s0().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: a.title }),
                            ],
                        }),
                    });
                }),
                s8 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            className: d,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, l.useRef)(null),
                        h = (0, l.useMemo)(
                            () =>
                                i
                                    ? Array.from({ length: 3 }, (e, t) => (0, o.jsx)(s1, { isActive: a }, t))
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => (0, o.jsx)(s2, { neuromusic: e }, t)),
                            [null == c ? void 0 : c.items, a, i],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, m.$)(sq().root, d),
                        ...(0, V.OZ)(u),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: r,
                                labeledForId: p,
                                title: n.title,
                                description: n.description,
                                controls: (0, o.jsx)(z.X, { className: sq().controls, carouselRef: v }),
                                headingVariant: _,
                                withDescription: !!n.description,
                            }),
                            (0, o.jsx)(U.F, { ref: v, itemClassName: (0, m.$)(sq().item, sq().important), className: s, 'aria-labelledby': p, children: h }),
                        ],
                    });
                },
                s3 = (0, l.forwardRef)((e, t) => (0, o.jsx)(s8, { forwardRef: t, ...e }));
            var s4 = i(73614),
                s9 = i(34159),
                s6 = i(71996),
                s5 = i(95924);
            let s7 = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var re = i(58680),
                rt = i.n(re);
            let ri = (0, _.PA)((e) => {
                var t, i, a;
                let { album: s, releaseDate: r, coverColor: n, coverUri: d } = e,
                    m = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: _ } = (0, u.A)(),
                    { trailer: p } = (0, k.g)(),
                    { ref: A, intersectionPropertyId: I } = (0, f.n)(),
                    g = (0, L.Z)(null != (a = null == m ? void 0 : m.url) ? a : ''),
                    R = (0, a0.S)({ artist: m, callback: g }),
                    y = (0, s9.F)(),
                    w = (0, s4.r)(s.type),
                    P = (0, N.P)(),
                    { from: M, utmLink: D } = (0, S.f)({ contextId: s.id, contextType: h.K.Album }),
                    B = (0, T.N)(),
                    U = (0, b.c)((e) => {
                        (B({ to: c.AppScreen.ArtistScreen, objectId: null == m ? void 0 : m.id, objectType: c.DomainObjectType.Artist }), R(e));
                    }),
                    W = (0, b.c)((e) => {
                        if (P()) {
                            (e.stopPropagation(), e.preventDefault());
                            return;
                        }
                        (null == s ? void 0 : s.id) && (e.stopPropagation(), p.openAlbumTrailer(s.id), y(c.DomainObjectType.Album, String(s.id)));
                    }),
                    z = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, o.jsx)(s5.L, {
                                children: (0, o.jsx)(s6.k, { variant: 'text', iconSize: 'xs', className: rt().trailerButton, withRipple: !1, onClick: W }),
                            });
                    }, [null == s || null == (i = s.trailer) ? void 0 : i.isAvailable, W]),
                    H = (0, l.useMemo)(() => {
                        if (r)
                            return (0, o.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: rt().descriptionContainer,
                                children: [
                                    (0, o.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: w.toLowerCase() }),
                                    (0, o.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        children: _(new Date(r), { day: 'numeric', month: 'long' }),
                                    }),
                                ],
                            });
                    }, [w, _, r]);
                return (0, o.jsxs)('div', {
                    className: rt().root,
                    ref: A,
                    'data-intersection-property-id': I,
                    children: [
                        (0, o.jsxs)('div', {
                            className: rt().cover,
                            children: [
                                (0, o.jsxs)(C.t, {
                                    className: rt().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, o.jsx)(E.B, {
                                            className: rt().image,
                                            src: d,
                                            alt: null == m ? void 0 : m.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, o.jsx)('div', {
                                            className: rt().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && s7.test(e)) || (e = '#000000');
                                                    let { r: t, g: i, b: a } = (0, V.E2)(e);
                                                    return 'linear-gradient(180.14deg, rgba('
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0) 30.88%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.4) 70.8%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.9) 80.88%)');
                                                })(null == s ? void 0 : s.averageColor),
                                            },
                                        }),
                                    ],
                                }),
                                (0, o.jsx)(O.N, { className: rt().fade, 'aria-label': null == m ? void 0 : m.name, href: null == m ? void 0 : m.url, onClick: U }),
                                (0, o.jsx)(j.i, {
                                    className: rt().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: rt().artistLink,
                                    captionClassName: rt().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, o.jsx)(el, {
                            className: rt().card,
                            album: s,
                            albumUrl: s.url,
                            from: M,
                            utmLink: D,
                            trailerButton: z,
                            description: H,
                            entityName: w,
                            coverColor: n,
                            'data-test-id': v.Kq.newRelease.NEW_RELEASE_CARD,
                        }),
                    ],
                });
            });
            var ra = i(86133),
                rs = i.n(ra);
            let rr = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tU.N)(),
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        { theme: x } = (0, as.W)(),
                        A = (0, l.useMemo)(
                            () =>
                                a
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, i) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, o.jsx)(ic.W, { isActive: e, radius: 'round', className: rs().shimmerImage }),
                                                          (0, o.jsx)(ic.W, { isActive: e, radius: 'l', className: rs().shimmerCard }),
                                                      ],
                                                  },
                                                  i,
                                              ),
                                          ))(i)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) => {
                                            let i = e.coverUriWithPlaceholder(x);
                                            return (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: (0, o.jsx)(ri, { ...e, coverUri: i }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == _ ? void 0 : _.items, i, a, x],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, m.$)(rs().root, p),
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(n.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: r,
                                    labeledForId: b,
                                    title: n.title,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: rs().controls, carouselRef: C }),
                                    headingVariant: u,
                                }),
                            }),
                            (0, o.jsx)(U.F, { ref: C, itemClassName: (0, m.$)(rs().item, rs().important), className: s, 'aria-labelledby': b, children: A }),
                        ],
                    });
                }),
                ro = (0, l.forwardRef)((e, t) => (0, o.jsx)(rr, { forwardRef: t, ...e })),
                rl = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, o.jsx)(th.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                rn = (0, l.forwardRef)((e, t) => (0, o.jsx)(rl, { forwardRef: t, ...e })),
                rc = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      e.type === tB._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: n.items.length,
                                                    children: (0, o.jsx)(th.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: n.items.length,
                                                    children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                rd = (0, l.forwardRef)((e, t) => (0, o.jsx)(rc, { forwardRef: t, ...e }));
            var rm = i(44129),
                r_ = i(81661),
                ru = i.n(r_);
            let rp = (e) => {
                    let { forwardRef: t, containerClassName: i, id: a, meta: s, ...r } = e,
                        { formatMessage: l } = (0, u.A)();
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: (0, m.$)(ru().root, i),
                        ...(0, V.OZ)(r),
                        children: (0, o.jsx)(
                            d.B,
                            {
                                objectType: c.DomainObjectType.Text,
                                objectId: a,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(rm.F, { textButton: l({ id: 'interface-actions.further' }), meta: s }),
                            },
                            a,
                        ),
                    });
                },
                rv = (0, l.forwardRef)((e, t) => (0, o.jsx)(rp, { forwardRef: t, ...e })),
                rh = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, o.jsx)(iT.B, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                rb = (0, l.forwardRef)((e, t) => (0, o.jsx)(rh, { forwardRef: t, ...e }));
            var rC = i(29671),
                rx = i(96895),
                rA = i(51549);
            let rj = (e) => {
                    let { items: t, playlistId: i, playlistUuid: a, from: s, utmLink: r } = e;
                    return t.slice(0, 8).map((e, l) => {
                        let n,
                            { objectPosX: m, objectPosY: _, objectsCount: u } = (0, ej.$)({ index: l, count: t.length }),
                            p =
                                ((n = e.id),
                                {
                                    contextData: { type: h.K.Playlist, meta: { id: i, uuid: a }, from: s, utmLink: r, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: l, entityId: n },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, rx.l)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, o.jsx)(
                            d.B,
                            {
                                objectType: c.DomainObjectType.Track,
                                objectId: e.id,
                                objectPosX: m,
                                objectPosY: _,
                                objectsCount: u,
                                children: e.isTrackNonMusic
                                    ? (0, o.jsx)(rA.K, { track: e, playContextParams: p, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, o.jsx)(ek.K, { track: e, playContextParams: p }),
                            },
                            e.id,
                        );
                    });
                },
                rN = { src: '/_next/static/media/heart.602389ae.png' };
            var rT = i(12779),
                rI = i.n(rT);
            let rf = (0, _.PA)(() => {
                var e, t;
                let { vibe: i, freeAccess: a, experiments: s } = (0, k.g)(),
                    { pageId: r } = (0, iJ.$)(),
                    { blockIdForFrom: n } = (0, tU.N)(),
                    c = (0, L.Z)(i9.Z.main.href),
                    { formatMessage: d } = (0, u.A)(),
                    m = d({ id: 'vibe-actions.play-vibe' }),
                    _ = !s.checkExperiment(eN.z.WebNextProductWithoutRecommendation, 'on'),
                    { isPlaying: h, togglePlay: b } = (0, t7.B)({
                        seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: r,
                        blockIdForFrom: n,
                    });
                (0, l.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                );
                let C = (0, l.useCallback)(() => {
                        a.isVibeStartRestricted || (h || b(), c());
                    }, [a.isVibeStartRestricted, h, c, b]),
                    A = (0, l.useCallback)(
                        () =>
                            (0, o.jsx)(a4.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: rI().myWaveButton,
                                'aria-label': m,
                                onClick: C,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                children: (0, o.jsx)(x.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, o.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', className: rI().myWaveButtonText, children: m }),
                                }),
                            }),
                        [m, C],
                    );
                return (
                    _ && i.isNeededToLoad && (0, l.use)(i.getLastVibe()),
                    (0, o.jsxs)('div', {
                        className: rI().root,
                        'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                        children: [
                            (0, o.jsx)(t4._V, { src: rN.src, className: rI().image, 'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE }),
                            (0, o.jsx)(x.DZ, {
                                variant: 'h3',
                                size: 'xs',
                                className: rI().header,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                children: (0, o.jsx)(p.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, o.jsx)(x.HL, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: rI().text,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                children: (0, o.jsx)(p.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            _ && (0, o.jsx)(ie.S, { isEnabled: a.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: A }),
                        ],
                    })
                );
            });
            var rS = i(24975),
                rg = i.n(rS);
            let rR = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: n,
                            meta: d,
                            data: _,
                            type: v,
                            headingVariant: b,
                            className: C,
                            ...x
                        } = e,
                        { from: A, utmLink: j } = (0, S.f)({ contextId: null == _ ? void 0 : _.playlist.id, contextType: h.K.Playlist }),
                        {
                            trailer: N,
                            settings: { isMobile: T },
                        } = (0, k.g)(),
                        I = (0, s9.F)(),
                        { formatMessage: f } = (0, u.A)(),
                        g = (0, tf.i)({ playlistId: null == _ ? void 0 : _.playlist.id }),
                        R = (null == _ ? void 0 : _.totalItemsCount)
                            ? f({ id: 'entity-names.number-of-tracks' }, { counter: null == _ ? void 0 : _.totalItemsCount })
                            : d.description,
                        L = [r.t.COLLECTION_PLAYLIST_WITH_LIKES, r.t.SMART_OPEN_PLAYLIST].includes(v),
                        y = d.coverStyle !== rC.z.NONE,
                        E = (0, l.useCallback)(() => {
                            (null == _ ? void 0 : _.playlist.id) &&
                                (N.setUtmLink(j), N.openPlaylistTrailer(null == _ ? void 0 : _.playlist.id), I(c.DomainObjectType.Playlist, String(_.playlist.id)));
                        }, [N, null == _ ? void 0 : _.playlist.id, I, j]),
                        w = (0, l.useMemo)(() => {
                            if (null == _ ? void 0 : _.withRewindTrailerButton)
                                return T
                                    ? (0, o.jsx)(s6.k, { className: rg().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: E })
                                    : (0, o.jsx)(s6.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: rg().trailer,
                                          onClick: E,
                                          children: (0, o.jsx)(p.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == _ ? void 0 : _.withRewindTrailerButton, T, E]);
                    return (null == _ ? void 0 : _.playlist.isFavouritePlaylist) &&
                        (null == _ ? void 0 : _.totalItemsCount) === 0 &&
                        (null == _ ? void 0 : _.canShowEmptyBlock)
                        ? (0, o.jsx)(rf, {})
                        : (0, o.jsx)(tI._, {
                              sourceContextData: g,
                              children: (0, o.jsx)(ew.$, {
                                  isShimmerActive: a,
                                  shimmer: (0, o.jsx)(eO.D, { variant: eE.X.PLAYLIST, isActive: a }),
                                  maxColumnsCount: ew.D.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, m.$)(rg().root, C),
                                  isShimmerVisible: i,
                                  blockHeaderClassName: n,
                                  carouselClassName: s,
                                  blockHeaderTitle: d.title,
                                  blockHeaderCoverUrl: null == _ ? void 0 : _.getCoverUri(d.coverStyle),
                                  blockHeaderDescription: R,
                                  viewAllActionLink: null == _ ? void 0 : _.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: b,
                                  additionalControl: w,
                                  withBlockHeaderDescription: L,
                                  withBlockHeaderCover: y,
                                  ...x,
                                  children:
                                      (null == _ ? void 0 : _.items) &&
                                      rj({ items: _.items, playlistId: _.playlist.id, playlistUuid: _.playlist.uuid, from: A, utmLink: j }),
                              }),
                          });
                }),
                rL = (0, l.forwardRef)((e, t) => (0, o.jsx)(rR, { forwardRef: t, ...e }));
            var ry = i(84715),
                rk = i(69675),
                rE = i(10731),
                rw = i.n(rE);
            let rO = (0, _.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: r,
                            tracksContainerClassName: n,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: p,
                            ...v
                        } = e,
                        { formatMessage: C } = (0, u.A)(),
                        { from: x, utmLink: A } = (0, S.f)({ contextId: null == m ? void 0 : m.playlist.id, contextType: h.K.Playlist }),
                        j = (0, tf.i)({ playlistId: null == m ? void 0 : m.playlist.id, filter: null == m ? void 0 : m.filters.activeFilter }),
                        N = (0, tV.zb)((null == m ? void 0 : m.filters.activeFilterIndex) || 0),
                        T = (0, l.useRef)(null),
                        I = (0, rk.$)(),
                        f = (null == m ? void 0 : m.totalItemsCount) ? C({ id: 'entity-names.number-of-tracks' }, { counter: m.totalItemsCount }) : d.description,
                        g = (0, b.c)((e) => {
                            var t;
                            if (!N.onTabChange || e === N.value || !m) return;
                            (setTimeout(() => {
                                var t, i, a;
                                null == (a = T.current) || null == (i = a.children[e]) || null == (t = i.focus) || t.call(i);
                            }),
                                N.onTabChange(e));
                            let i = null == (t = m.filters.items) ? void 0 : t[e];
                            i && (m.handleFilterClick(i), I({ tabId: i.id, tabPos: e + 1 }));
                        });
                    if (((null == m ? void 0 : m.playlistLoading.isNeededToLoad) && (0, l.use)(m.getPlaylist()), null == m ? void 0 : m.shouldShowEmptyPlaylist))
                        return (0, o.jsx)(rf, {});
                    let R = r || !!(null == m ? void 0 : m.isLoading),
                        L = s || !!(null == m ? void 0 : m.isLoading) || !!(null == m ? void 0 : m.isRejected),
                        y = m && 0 === m.items.length,
                        k = !!(null == m || null == (t = m.filters.items) ? void 0 : t.length),
                        E = !m || (null == m ? void 0 : m.isLoading) || (null == m || null == (i = m.filters) ? void 0 : i.isShimmerVisible) || y || k,
                        w = (0, eK.L)(() => {
                            var e, t, i, a;
                            if (E)
                                return (0, o.jsx)(ry.A, {
                                    className: rw().filters,
                                    tabsState: N,
                                    handleFilterClick: g,
                                    ref: T,
                                    items: null != (a = null == m || null == (e = m.filters) ? void 0 : e.items) ? a : void 0,
                                    isShimmerVisible: null == m || null == (t = m.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == m || null == (i = m.filters) ? void 0 : i.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: rw().shimmer,
                                });
                        });
                    return (0, o.jsx)(tI._, {
                        sourceContextData: j,
                        children: (0, o.jsx)(ew.$, {
                            isShimmerActive: R,
                            shimmer: (0, o.jsx)(eO.D, { variant: eE.X.PLAYLIST, isActive: R }),
                            maxColumnsCount: ew.D.TWO,
                            itemsCountPerColumn: 4,
                            className: p,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: L,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: c,
                            carouselClassName: n,
                            blockHeaderTitle: d.title,
                            blockHeaderCoverUrl: d.coverUri,
                            blockHeaderDescription: f,
                            viewAllActionLink: null == m ? void 0 : m.playlist.url,
                            ref: a,
                            blockHeaderHeadingVariant: _,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: d.coverStyle !== rC.z.NONE,
                            beforeCarousel: w,
                            ...v,
                            children:
                                (null == m ? void 0 : m.items) && rj({ items: m.items, playlistId: m.playlist.id, playlistUuid: m.playlist.uuid, from: x, utmLink: A }),
                        }),
                    });
                }),
                rP = (0, l.forwardRef)((e, t) => (0, o.jsx)(rO, { forwardRef: t, ...e }));
            var rM = i(35262),
                rD = i(50441),
                rB = i.n(rD);
            let rV = (e) => {
                let { promotion: t } = e,
                    { ref: i, intersectionPropertyId: a } = (0, f.n)(),
                    s = (0, T.N)(),
                    { advDisclaimer: r } = t,
                    [n, d] = (0, l.useState)(!1),
                    _ = (0, l.useCallback)(() => {
                        s({ to: c.AppScreen.Link });
                    }, [s]);
                return (0, o.jsxs)('div', {
                    className: (0, m.$)(rB().root, rB().card),
                    ref: i,
                    'data-intersection-property-id': a,
                    'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS_CARD,
                    children: [
                        (0, o.jsxs)('div', {
                            className: rB().meta,
                            children: [
                                (0, o.jsx)(O.N, {
                                    className: rB().titleLink,
                                    href: t.weblink,
                                    onClick: _,
                                    children: (0, o.jsx)(x.HL, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, o.jsx)(x.HL, {
                                    className: rB().subtitle,
                                    variant: 'div',
                                    lineClamp: 1,
                                    type: 'entity',
                                    size: 's',
                                    weight: 'medium',
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: rB().coverWrapper,
                            children: [
                                (0, o.jsx)(O.N, {
                                    className: rB().coverLink,
                                    href: t.weblink,
                                    onClick: _,
                                    'aria-hidden': !0,
                                    tabIndex: -1,
                                    children: (0, o.jsx)(C.t, {
                                        className: rB().cover,
                                        radius: 'm',
                                        withShadow: !0,
                                        children: (0, o.jsx)(t4._V, {
                                            className: rB().image,
                                            src: t.imageUrl,
                                            alt: t.title,
                                            withAvatarReplace: !0,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                    }),
                                }),
                                r &&
                                    (0, o.jsx)('div', {
                                        className: rB().advDisclaimer,
                                        children: (0, o.jsxs)(rM.AM, {
                                            placement: 'top-end',
                                            open: n,
                                            onOpenChange: d,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(a4.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: rB().advDisclaimerTrigger,
                                                    'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(p.A, { id: 'ads.ad' }), (0, o.jsx)(iK.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(rM.hl, {
                                                    className: rB().advDisclaimerPopover,
                                                    children: (0, o.jsx)(x.HL, {
                                                        className: rB().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TEXT,
                                                        children: r,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            };
            var rU = i(53367),
                rW = i.n(rU),
                rz = i(24850),
                rH = i.n(rz);
            let rK = (e) => {
                    let { isActive: t, withHeadingShimmer: i } = e;
                    return (0, o.jsxs)('div', {
                        className: rH().root,
                        children: [
                            (0, o.jsx)(ic.W, { isActive: t, className: rH().cover, radius: 'l' }),
                            (0, o.jsxs)('div', {
                                className: rH().meta,
                                children: [
                                    i && (0, o.jsx)(ic.W, { isActive: t, className: rH().heading, radius: 's' }),
                                    (0, o.jsx)(ic.W, { isActive: t, className: rH().title, radius: 's' }),
                                    (0, o.jsx)(ic.W, { isActive: t, className: rH().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                rY = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            data: s,
                            meta: r,
                            containerClassName: n,
                            headerClassName: _,
                            headingVariant: u,
                            className: p,
                            ...h
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        x = (0, l.useMemo)(() => {
                            if (i) return Array.from({ length: 6 }, (e, t) => (0, o.jsx)(rK, { isActive: a, withHeadingShimmer: !0 }, t));
                            return null == s
                                ? void 0
                                : s.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: s.items.length,
                                              children: (0, o.jsx)(rV, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == s ? void 0 : s.items, a, i]);
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(rW().root, p),
                        ref: t,
                        ...(0, V.OZ)(h),
                        'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: _,
                                labeledForId: b,
                                title: r.title,
                                controls: (0, o.jsx)(z.X, { className: rW().controls, carouselRef: C }),
                                headingVariant: u,
                            }),
                            (0, o.jsx)(U.F, { className: n, ref: C, itemClassName: (0, m.$)(rW().item, rW().important), 'aria-labelledby': b, children: x }),
                        ],
                    });
                },
                r$ = (0, l.forwardRef)((e, t) => (0, o.jsx)(rY, { forwardRef: t, ...e }));
            var rF = i(51150),
                rX = i(53690),
                rG = i(42574),
                rZ = i(82196),
                rQ = i(59925),
                rq = i(42966),
                rJ = i(19156),
                r0 = i(13728),
                r1 = i.n(r0);
            let r2 = (0, _.PA)((e) => {
                let { isLoading: t, onRefetch: i, onStartLoading: a } = e,
                    { lumen: s } = (0, k.g)(),
                    { cover: r, fallbackImage: l } = (0, rJ.x)(),
                    { awakeLumenModal: n, requestAwakeLumenModal: d } = (0, rZ.z)(),
                    _ = (0, T.N)(),
                    p = (0, rq.m)(),
                    { formatMessage: h } = (0, u.A)(),
                    C = s.isEnabled ? r : l,
                    x = s.isEnabled && !s.isAwakened,
                    A = s.isEnabled && s.isAwakened,
                    j = (0, b.c)(() => {
                        (_({ to: c.AppScreen.LumenAwakeningScreen, objectId: '', objectType: c.DomainObjectType.LumenUnawakened }), d(() => void 0));
                    }),
                    N = (0, b.c)(() => {
                        t || (p({ actionType: c.ActionType.Refresh, userInteractionType: c.UserInteractionType.Tap }), a(), i());
                    }),
                    I = (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(rQ.e, { className: r1().haze }),
                            (0, o.jsx)(t4._V, {
                                alt: '',
                                className: (0, m.$)(r1().image, r1().imageBlurred),
                                src: C,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                            (0, o.jsx)(t4._V, {
                                alt: '',
                                className: r1().image,
                                src: C,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                        ],
                    }),
                    f = (0, eK.L)(() =>
                        x
                            ? (0, o.jsx)('button', {
                                  type: 'button',
                                  className: (0, m.$)(r1().root, r1().root_clickable),
                                  onClick: j,
                                  'data-test-id': v.e8.landing.Q2V_AWAKE_LUMEN_BUTTON,
                                  children: I,
                              })
                            : A
                              ? (0, o.jsx)('button', {
                                    type: 'button',
                                    className: (0, m.$)(r1().root, r1().root_clickable),
                                    disabled: t,
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    onClick: N,
                                    'data-test-id': v.e8.landing.Q2V_REFETCH_SUGGESTIONS_BUTTON,
                                    children: I,
                                })
                              : (0, o.jsx)('div', { className: r1().root, 'aria-hidden': !0, children: I }),
                    );
                return (0, o.jsxs)(o.Fragment, { children: [n, f] });
            });
            !(function (e) {
                ((e.VIEW = 'VIEW'), (e.CLICK = 'CLICK'));
            })(s || (s = {}));
            var r8 = i(3669),
                r3 = i(87982),
                r4 = i.n(r3);
            let r9 = (e) => {
                let { handleFeedBack: t, onSelect: i, position: a, query: r, suggestionsRequestId: l } = e,
                    n = (0, r8.D)(),
                    d = (0, rq.m)(),
                    m = (0, b.c)((e, i) => {
                        (n(e, null != i ? i : ''), e && t({ type: s.VIEW, query: r, suggestionsRequestId: l, position: a }));
                    }),
                    { ref: _, intersectionPropertyId: u } = (0, f.n)({ callback: m }),
                    p = (0, b.c)(() => {
                        (d({ actionType: c.ActionType.SearchItemSelected, userInteractionType: c.UserInteractionType.Tap }),
                            t({ type: s.CLICK, query: r, suggestionsRequestId: l, position: a }),
                            null == i || i(r));
                    });
                return (0, o.jsx)('button', {
                    ref: _,
                    className: r4().root,
                    'data-intersection-property-id': u,
                    'data-test-id': v.e8.landing.Q2V_SUGGESTION_BUTTON,
                    type: 'button',
                    onClick: p,
                    children: (0, o.jsx)(x.HL, { className: r4().text, size: 'm', weight: 'medium', variant: 'span', type: 'text', lineClamp: 2, children: r }),
                });
            };
            var r6 = i(18791),
                r5 = i.n(r6);
            let r7 = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            data: i,
                            className: a,
                            containerClassName: s,
                            isShimmerVisible: r,
                            isShimmerActive: n,
                            setIsNeededToLoad: _,
                            onRefetch: u,
                            ...v
                        } = e,
                        h = (0, rG.u)(),
                        {
                            search: b,
                            settings: { isMobile: C },
                        } = (0, k.g)(),
                        A = (0, l.useRef)(null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: N, shouldHideControls: T } = (0, a3.Y)(A),
                        { state: I, handleDebouncedToggle: f } = (0, rF.F)({ delay: 1500, throttleTimeout: 0 });
                    ((0, l.useEffect)(() => {
                        r && n && f();
                    }, [n, r, f]),
                        (0, l.useEffect)(
                            () => () => {
                                b.sendQ2vSuggestionFeedbacks();
                            },
                            [null == i ? void 0 : i.suggestionsRequestId, b],
                        ));
                    let S = n || I,
                        g = (0, eK.L)(() =>
                            S
                                ? (0, o.jsx)(x.HL, {
                                      className: r5().loadingText,
                                      size: 'm',
                                      weight: 'medium',
                                      variant: 'span',
                                      type: 'text',
                                      children: (0, o.jsx)(p.A, { id: 'search.q2v-suggestions-loading' }),
                                  })
                                : (0, o.jsxs)('div', {
                                      className: (0, m.$)(r5().carouselWithArrows, {
                                          [r5().carouselWithArrows_arrowLeft_hidden]: j,
                                          [r5().carouselWithArrows_arrowRight_hidden]: N,
                                          [r5().carouselWithArrows_arrow_hidden]: T,
                                      }),
                                      children: [
                                          (0, o.jsx)(U.F, {
                                              ref: A,
                                              className: r5().carousel,
                                              itemClassName: r5().item,
                                              children:
                                                  null == i
                                                      ? void 0
                                                      : i.items.map((e, t) => {
                                                            let { query: a } = e;
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.SearchItem,
                                                                    objectId: a,
                                                                    objectPosX: t + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: i.items.length,
                                                                    children: (0, o.jsx)(r9, {
                                                                        query: a,
                                                                        position: t,
                                                                        suggestionsRequestId: i.suggestionsRequestId,
                                                                        handleFeedBack: b.addQ2vSuggestionFeedback,
                                                                        onSelect: null != h ? h : void 0,
                                                                    }),
                                                                },
                                                                a,
                                                            );
                                                        }),
                                          }),
                                          !C && (0, o.jsx)(z.X, { className: r5().controls, carouselRef: A }),
                                      ],
                                  }),
                        ),
                        R = { '--q2v-accent-color': rX.R };
                    return (0, o.jsxs)('div', {
                        ref: t,
                        className: (0, m.$)(r5().root, s, a),
                        style: R,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 0,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(r2, { isLoading: S, onRefetch: null != u ? u : _, onStartLoading: f }),
                            }),
                            g,
                        ],
                    });
                }),
                oe = (0, l.forwardRef)((e, t) => (0, o.jsx)(r7, { forwardRef: t, ...e })),
                ot = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(tE.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      switch (e.type) {
                                          case tB._.ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(th.a, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case tB._.ARTIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(tq.a, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case tB._.PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                oi = (0, l.forwardRef)((e, t) => (0, o.jsx)(ot, { forwardRef: t, ...e }));
            var oa = i(28045),
                os = i(51011),
                or = i(25323),
                oo = i(18608),
                ol = i(68224),
                on = i(18483),
                oc = i(26237),
                od = i(32911),
                om = i(51707),
                o_ = i(98031),
                ou = i(57138),
                op = i(960),
                ov = i.n(op);
            let oh = (e) => {
                let { isActive: t, className: i, ariaLabel: a } = e;
                return (0, o.jsxs)('div', {
                    'aria-label': a,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, m.$)(ov().root, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: ov().infoContainer,
                            children: [
                                (0, o.jsx)(ic.W, { isActive: t, className: ov().cover, radius: 's' }),
                                (0, o.jsx)('div', { className: ov().textContainer, children: (0, o.jsx)(ic.W, { isActive: t, className: ov().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, o.jsx)(ic.W, { isActive: t, className: ov().action, radius: 'l' }),
                    ],
                });
            };
            var ob = i(28189),
                oC = i.n(ob);
            let ox = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            data: s,
                            meta: r,
                            isLoaded: n,
                            headerClassName: _,
                            setIsNeededToLoad: h,
                            tracksContainerClassName: b,
                            className: C,
                            ...A
                        } = e,
                        { formatMessage: j } = (0, u.A)(),
                        {
                            search: { history: N },
                        } = (0, k.g)(),
                        T = (0, on.d)(),
                        I = !(null == s ? void 0 : s.items.length) && n,
                        f = (0, oc.f)(),
                        { awakeLumenModal: S, requestAwakeLumenModal: g } = (0, rZ.z)();
                    return ((0, l.useLayoutEffect)(
                        () => (
                            N.shouldUpdateHistory && (h(), N.setShouldUpdateHistory(!1)),
                            () => {
                                (N.hasCleared && h(), N.reset());
                            }
                        ),
                        [N, h],
                    ),
                    I || N.hasCleared)
                        ? (0, o.jsx)('div', {
                              ref: t,
                              className: (0, m.$)(oC().root, oC().fallback),
                              ...(0, V.OZ)(A),
                              'data-test-id': v.e8.landing.SEARCH_HISTORY_EMPTY,
                              children: (0, o.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, o.jsx)(p.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, o.jsxs)('div', {
                              ref: t,
                              className: oC().root,
                              ...(0, V.OZ)(A),
                              'data-test-id': v.e8.landing.SEARCH_HISTORY,
                              children: [
                                  S,
                                  (0, o.jsx)(ew.$, {
                                      className: C,
                                      shimmer: (0, o.jsx)(oh, { isActive: i }),
                                      isShimmerActive: i,
                                      isShimmerVisible: a,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: ew.D.TWO,
                                      blockHeaderClassName: _,
                                      carouselClassName: (0, m.$)(b, oC().content),
                                      blockHeaderTitle: r.title,
                                      blockHeaderDescription: r.description,
                                      viewAllActionLink: r.viewAllActionLink,
                                      children:
                                          null == s
                                              ? void 0
                                              : s.items.map((e, t) => {
                                                    var i, a;
                                                    let {
                                                        objectPosX: r,
                                                        objectPosY: l,
                                                        objectsCount: n,
                                                    } = (0, ej.$)({ index: t, count: s.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case tB._.NON_MUSIC_ALBUM_ITEM:
                                                        case tB._.ALBUM_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(oa.M, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tB._.ARTIST_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(os.c, { description: j({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tB._.TRACK_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(ol.c, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tB._.LIKED_PLAYLIST_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(oo.v, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tB._.WAVE_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Wave,
                                                                    objectId: null != (i = e.data.vibe.seeds[0]) ? i : '',
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(o_.H, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case tB._.WAVE_AGENT_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Wave,
                                                                    objectId: null != (a = e.data.seeds[0]) ? a : '',
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: n,
                                                                    children: (0, o.jsx)(o_.H, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: od.h.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tB._.CLIP_ITEM:
                                                            if (!T) return null;
                                                            return (0, o.jsx)(or.N, { clip: e.data }, e.data.clipId);
                                                        case tB._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                f &&
                                                                (0, o.jsx)(ou.F, {
                                                                    blockId: c.EntityTypes.Q2vWave,
                                                                    blockType: c.EntityTypes.Q2vWave,
                                                                    blockPosX: 1,
                                                                    blockPosY: 1,
                                                                    objectsCount: 1,
                                                                    children: (0, o.jsx)(
                                                                        d.B,
                                                                        {
                                                                            objectPosX: 1,
                                                                            objectPosY: 1,
                                                                            objectsCount: 1,
                                                                            objectType: c.DomainObjectType.Wave,
                                                                            objectId: e.data.stationId,
                                                                            children: (0, o.jsx)(om.K, { requestAwakeLumenModal: g, vibe: e.data }),
                                                                        },
                                                                        e.data.getKey(t),
                                                                    ),
                                                                })
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  n &&
                                      (0, o.jsx)(a4.$, {
                                          onClick: N.clear,
                                          className: oC().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          'data-test-id': v.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON,
                                          children: (0, o.jsx)(p.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                oA = (0, l.forwardRef)((e, t) => (0, o.jsx)(ox, { forwardRef: t, ...e }));
            var oj = i(49337),
                oN = i(74509),
                oT = i.n(oN);
            let oI = (0, _.PA)((e) => {
                    var t, i, a, s, r, n, c, d, m;
                    let { containerClassName: _, meta: u, data: h, forwardRef: b, headingVariant: C = 'h2', ...A } = e,
                        j = (0, L.Z)(null != (m = null == h ? void 0 : h.weblink) ? m : ''),
                        { theme: N } = (0, as.W)(),
                        T = null == h ? void 0 : h.advDisclaimer,
                        [I, f] = (0, l.useState)(!1),
                        S =
                            N === oj.S.Light
                                ? null == h || null == (t = h.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == h || null == (i = h.darkTheme)
                                  ? void 0
                                  : i.imageUrl,
                        g = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    N === oj.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [N, null == h || null == (a = h.darkTheme) ? void 0 : a.textColor, null == h || null == (s = h.lightTheme) ? void 0 : s.textColor]),
                        R = (0, l.useMemo)(() => {
                            var e, t, i, a;
                            return {
                                '--button-color':
                                    N === oj.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    N === oj.S.Light
                                        ? null == h || null == (i = h.lightTheme)
                                            ? void 0
                                            : i.buttonTextColor
                                        : null == h || null == (a = h.darkTheme)
                                          ? void 0
                                          : a.buttonTextColor,
                            };
                        }, [
                            N,
                            null == h || null == (r = h.darkTheme) ? void 0 : r.buttonColor,
                            null == h || null == (n = h.lightTheme) ? void 0 : n.buttonColor,
                            null == h || null == (c = h.darkTheme) ? void 0 : c.buttonTextColor,
                            null == h || null == (d = h.lightTheme) ? void 0 : d.buttonTextColor,
                        ]);
                    return (0, o.jsx)('section', {
                        ref: b,
                        title: u.title,
                        className: _,
                        ...(0, V.OZ)(A),
                        children: (0, o.jsxs)('div', {
                            className: oT().root,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: oT().actions,
                                    children: [
                                        (0, o.jsxs)('div', {
                                            className: oT().textContainer,
                                            children: [
                                                !!(null == h ? void 0 : h.title) &&
                                                    (0, o.jsx)(x.DZ, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: oT().textColor,
                                                        lineClamp: 2,
                                                        variant: C,
                                                        style: g,
                                                        children: null == h ? void 0 : h.title,
                                                    }),
                                                !!(null == h ? void 0 : h.subtitle) &&
                                                    (0, o.jsx)(x.HL, {
                                                        className: oT().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: g,
                                                        children: null == h ? void 0 : h.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == h ? void 0 : h.weblink) &&
                                            !!(null == h ? void 0 : h.buttonTitle) &&
                                            (0, o.jsx)(a4.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: oT().button,
                                                role: 'link',
                                                onClick: j,
                                                style: R,
                                                children: (0, o.jsx)(x.HL, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == h ? void 0 : h.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, o.jsx)('div', {
                                    className: oT().imageContainer,
                                    children: (0, o.jsx)(t4._V, {
                                        src: S || (null == h ? void 0 : h.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: oT().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                                T &&
                                    (0, o.jsx)('div', {
                                        className: oT().advDisclaimer,
                                        children: (0, o.jsxs)(rM.AM, {
                                            placement: 'top-end',
                                            open: I,
                                            onOpenChange: f,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(a4.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: oT().advDisclaimerTrigger,
                                                    'data-test-id': v.e8.landing.SPECIAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(p.A, { id: 'ads.ad' }), (0, o.jsx)(iK.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(rM.hl, {
                                                    className: oT().advDisclaimerPopover,
                                                    children: (0, o.jsx)(x.HL, {
                                                        className: oT().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': v.e8.landing.SPECIAL_ADV_DISCLAIMER_TEXT,
                                                        children: T,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    });
                }),
                of = (0, l.forwardRef)((e, t) => (0, o.jsx)(oI, { forwardRef: t, ...e }));
            var oS = i(31585),
                og = i.n(oS);
            let oR = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            headingVariant: d,
                            className: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        v = (0, tV.zb)(0),
                        h = (0, l.useRef)(null),
                        b = (0, l.useId)(),
                        C = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(sr, {
                                          isActive: a,
                                          ref: h,
                                          containerClassName: s,
                                          ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                          length: 9,
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, o.jsx)(
                                                tV.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: v.value,
                                                    elementId: b,
                                                    children: (0, o.jsx)(ss, {
                                                        ref: h,
                                                        containerClassName: s,
                                                        ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a, s, p, v.value, b],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(og().root, _),
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(r, og().header, og().important),
                                title: n.title,
                                description: n.description,
                                labeledForId: p,
                                viewAllActionLink: n.viewAllActionLink,
                                controls: (0, o.jsx)(z.X, { className: og().controls, carouselRef: h }),
                                headingVariant: d,
                                withDescription: !!n.description,
                            }),
                            (0, o.jsx)(tH.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, og().tabCarousel, og().important),
                                elementId: b,
                                shimmer: (0, o.jsx)(tH.zr, { isActive: a, className: (0, m.$)(s, og().tabCarousel, og().important), shimmerClassName: og().tabShimmer }),
                                'aria-labelledby': p,
                                ...v,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tz.o,
                                                  { className: (0, m.$)(og().tab, og().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            C,
                        ],
                    });
                },
                oL = (0, l.forwardRef)((e, t) => (0, o.jsx)(oR, { forwardRef: t, ...e }));
            var oy = i(58223),
                ok = i.n(oy);
            let oE = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: n,
                            meta: _,
                            data: u,
                            headingVariant: p,
                            className: v,
                            ...h
                        } = e,
                        b = (0, l.useId)(),
                        C = (0, tV.zb)(0),
                        x = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                a
                                    ? (0, o.jsx)(U.F, {
                                          ref: x,
                                          itemClassName: (0, m.$)(ok().item, ok().important),
                                          className: r,
                                          'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                          children: (0, tW.k)({ isActive: s, centered: !0 }),
                                      })
                                    : null == u
                                      ? void 0
                                      : u.items.map((e) => {
                                            var t;
                                            return (0, o.jsx)(
                                                tV.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: C.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(U.F, {
                                                        ref: x,
                                                        itemClassName: (0, m.$)(ok().item, ok().important),
                                                        className: r,
                                                        'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((t, i) => {
                                                                      var a;
                                                                      return (0, o.jsx)(
                                                                          d.B,
                                                                          {
                                                                              objectType: c.DomainObjectType.Wave,
                                                                              objectId: t.stationId,
                                                                              objectPosX: i + 1,
                                                                              objectPosY: 1,
                                                                              objectsCount: null == (a = e.data) ? void 0 : a.length,
                                                                              children: (0, o.jsx)(iq.y, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == u ? void 0 : u.items, a, s, r, b, C.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(ok().root, v),
                        ref: i,
                        ...(0, V.OZ)(h),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(n, ok().header, ok().important),
                                title: _.title,
                                description: _.description,
                                labeledForId: b,
                                viewAllActionLink: _.viewAllActionLink,
                                controls: (0, o.jsx)(z.X, { className: ok().controls, carouselRef: x }),
                                headingVariant: p,
                                withDescription: !!_.description,
                            }),
                            (0, o.jsx)(tH.wI, {
                                isShimmerVisible: a,
                                className: (0, m.$)(r, ok().tabCarousel, ok().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tH.zr, { isActive: s, className: (0, m.$)(r, ok().tabCarousel, ok().important), shimmerClassName: ok().tabShimmer }),
                                'aria-labelledby': b,
                                ...C,
                                children:
                                    null == u || null == (t = u.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tz.o,
                                                  { className: (0, m.$)(ok().tab, ok().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                },
                ow = (0, l.forwardRef)((e, t) => (0, o.jsx)(oE, { forwardRef: t, ...e }));
            var oO = i(27819),
                oP = i(421),
                oM = i.n(oP),
                oD = i(36648),
                oB = i(47943),
                oV = i.n(oB);
            let oU = (0, _.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, k.g)();
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(oD.n, { isActive: !0, className: oV().titleShimmer, textClassName: oV().titleTextShimmer }),
                            (0, o.jsx)(oD.n, { isActive: !0, className: oV().descriptionShimmer, textClassName: oV().textShimmer }),
                            (0, o.jsx)(oD.n, { isActive: !0, className: oV().descriptionShimmer, textClassName: oV().textShimmer }),
                            (0, o.jsx)(oD.n, { isActive: !0, className: oV().descriptionShimmer, textClassName: oV().textShimmer }),
                            e &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(oD.n, { isActive: !0, className: oV().descriptionShimmer, textClassName: oV().textShimmer }),
                                        (0, o.jsx)(oD.n, { isActive: !0, className: oV().descriptionShimmer, textClassName: oV().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                oW = Array.from({ length: 3 }, () => oO.A.src),
                oz = (0, _.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, data: a, headingVariant: s = 'h2' } = e,
                        { formatMessage: r } = (0, u.A)(),
                        { wizard: n } = (0, k.g)(),
                        c = (0, l.useMemo)(
                            () =>
                                (0, o.jsx)('div', {
                                    className: oM().images,
                                    'data-test-id': v.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    children: oW.map((e, t) => {
                                        var i;
                                        let s = null == a || null == (i = a.artists[t]) ? void 0 : i.coverUri;
                                        return (0, o.jsx)(
                                            C.t,
                                            {
                                                className: oM().paper,
                                                radius: 'round',
                                                children: (0, o.jsx)(t4._V, {
                                                    className: oM().image,
                                                    src: s || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!s,
                                                    'aria-hidden': !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(v.e8.landing.WIZARD_BLOCK_ARTIST_COVER, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == a ? void 0 : a.artists],
                        ),
                        d = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(oU, {})
                                    : (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              (0, o.jsx)(x.DZ, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: oM().title,
                                                  'data-test-id': v.e8.landing.WIZARD_BLOCK_TITLE,
                                                  children: null == a ? void 0 : a.title,
                                              }),
                                              (null == a ? void 0 : a.description) &&
                                                  (0, o.jsx)(x.DZ, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: oM().description,
                                                      lineClamp: 5,
                                                      'data-test-id': v.e8.landing.WIZARD_BLOCK_TEXT,
                                                      children: a.description,
                                                  }),
                                          ],
                                      }),
                            [i, s, null == a ? void 0 : a.title, null == a ? void 0 : a.description],
                        );
                    return (0, o.jsxs)('section', {
                        className: oM().root,
                        ref: t,
                        'data-test-id': v.e8.landing.WIZARD_BLOCK,
                        children: [
                            c,
                            d,
                            (0, o.jsx)(a4.$, {
                                className: oM().button,
                                icon: (0, o.jsx)(iK.I, { variant: 'link', size: 'xxs', className: oM().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: n.modal.open,
                                disabled: !n.isAvailable,
                                'data-test-id': v.e8.landing.WIZARD_BLOCK_BUTTON,
                                children: r({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                oH = (0, l.forwardRef)((e, t) => (0, o.jsx)(oz, { forwardRef: t, ...e })),
                oK = {
                    [r.t.COLLECTION_PLAYLIST_WITH_LIKES]: rL,
                    [r.t.COLLECTION_FAVOURITE_PLAYLIST]: rP,
                    [r.t.OPEN_PLAYLIST]: rL,
                    [r.t.SMART_OPEN_PLAYLIST]: rL,
                    [r.t.NON_MUSIC_OPEN_PLAYLIST]: rL,
                    [r.t.COLLECTION_ARTISTS]: t8,
                    [r.t.COLLECTION_ARTISTS_AND_TOP]: t8,
                    [r.t.PERSONAL_ARTISTS]: t8,
                    [r.t.NEW_STARS_ARTISTS]: t8,
                    [r.t.EDITORIAL_ARTISTS]: t8,
                    [r.t.META_TAG_POPULAR_ARTISTS]: t8,
                    [r.t.MICRO_GENRE_ARTISTS]: t8,
                    [r.t.MICRO_GENRE_TOP_ARTISTS]: t8,
                    [r.t.META_TAG_ARTISTS]: t8,
                    [r.t.SIMILAR_ARTISTS]: t8,
                    [r.t.NEW_RELEASES]: ro,
                    [r.t.EDITORIAL_NEW_RELEASES]: ro,
                    [r.t.NEW_PLAYLISTS]: sp.Q,
                    [r.t.EDITORIAL_COMPILATION]: sp.Q,
                    [r.t.RECOMMENDED_PLAYLISTS]: sp.Q,
                    [r.t.META_TAG_POPULAR_PLAYLISTS]: sp.Q,
                    [r.t.META_TAG_PLAYLISTS]: sp.Q,
                    [r.t.META_TAG_NEW_ALBUMS]: sp.Q,
                    [r.t.MICRO_GENRE_ALBUMS]: sp.Q,
                    [r.t.META_TAG_ALBUMS]: sp.Q,
                    [r.t.ARTIST_PLAYLISTS]: sp.Q,
                    [r.t.ARTIST_ALBUMS]: sp.Q,
                    [r.t.ARTIST_COMPILATIONS]: sp.Q,
                    [r.t.ARTIST_STUDIO_ALBUMS]: sp.Q,
                    [r.t.ARTIST_SIMILAR_ENTITIES]: sp.Q,
                    [r.t.COLLECTION_SIMILAR_ENTITIES]: sp.Q,
                    [r.t.PROMOTIONS]: r$,
                    [r.t.EDITORIAL_PROMOTIONS]: r$,
                    [r.t.NON_MUSIC_PROMOTIONS]: r$,
                    [r.t.Q2V_SUGGESTIONS]: oe,
                    [r.t.PERSONAL_PLAYLISTS]: rb,
                    [r.t.REWIND_PLAYLISTS]: rb,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE]: sc,
                    [r.t.META_TAG_SIMILAR_WAVE]: sc,
                    [r.t.EDITORIAL_WAVES]: sc,
                    [r.t.META_TAG_WAVE]: sc,
                    [r.t.MICRO_GENRE_WAVE]: sc,
                    [r.t.EDITORIAL_WAVES_AGENT]: su,
                    [r.t.META_TAG_WAVE_AGENT]: su,
                    [r.t.MICRO_GENRE_WAVE_AGENT]: su,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: su,
                    [r.t.META_TAG_SIMILAR_WAVE_AGENT]: su,
                    [r.t.CONCERTS_PERSONAL]: aE,
                    [r.t.CONCERTS_TOP]: aE,
                    [r.t.EDITORIAL_CONCERTS]: aE,
                    [r.t.VIEWED_CONCERTS]: aE,
                    [r.t.CLIPS]: tk,
                    [r.t.ARTIST_CLIPS]: tk,
                    [r.t.WAVES]: oL,
                    [r.t.SETS_BY_WAVES]: oL,
                    [r.t.WAVES_AGENT]: ow,
                    [r.t.SETS_BY_WAVES_AGENT]: ow,
                    [r.t.CHART_TRACKS]: tg,
                    [r.t.COLLECTION_KIDS]: iE,
                    [r.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: iz,
                    [r.t.COLLECTION_PLAYLISTS_CREATED]: ig,
                    [r.t.COLLECTION_PLAYLISTS_LIKED]: iO,
                    [r.t.ALBUM_PROMO]: ei,
                    [r.t.ARTIST_RECOMMENDATIONS_PROMO]: tt,
                    [r.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: tv,
                    [r.t.SIMPLE_ALBUM_PROMO]: ed,
                    [r.t.ITEM_LIST]: sg,
                    [r.t.OVERVIEW]: rv,
                    [r.t.COLLECTION_ALBUMS]: tD,
                    [r.t.COLLECTION_CLIPS]: iN,
                    [r.t.COLLECTION_TOP_ARTISTS]: iQ,
                    [r.t.RECENTLY_PLAYED]: oi,
                    [r.t.IN_STYLE]: sN,
                    [r.t.SPECIAL]: of,
                    [r.t.WIZARD]: oH,
                    [r.t.MIXES]: sU,
                    [r.t.MIXES_GRID]: s$,
                    [r.t.MIXES_MUSIC]: sZ,
                    [r.t.NEUROMUSIC]: s3,
                    [r.t.CONCERT_PLACE]: ah,
                    [r.t.LIKES_AND_HISTORY]: sP,
                    [r.t.NON_MUSIC_EDITORIAL_COMPILATION]: rd,
                    [r.t.COLLECTION_ALBUMS_PRESAVES]: tQ,
                    [r.t.CHART_ALBUMS]: rn,
                    [r.t.DONATIONS]: a8,
                    [r.t.CONTINUE_LISTEN]: aF,
                    [r.t.DISLIKES]: aG,
                    [r.t.COLLECTION_DOWNLOADED_TRACKS]: iL,
                    [r.t.HISTORY]: oA,
                    [r.t.SEARCH_HISTORY]: oA,
                    [r.t.ARTIST_CONCERTS]: eI,
                    [r.t.ARTIST_POPULAR_TRACKS]: eB,
                    [r.t.ARTIST_RELEASE]: tx,
                    [r.t.FAMILIAR_YOU]: sC,
                    [r.t.ARTIST_PICK]: ey,
                    [r.t.ARTIST_UPCOMING_RELEASE]: tN,
                    [r.t.COLLECTION_WAVE_AGENT]: i8,
                    [r.t.COLLECTION_WAVE_ROOMS]: aa,
                    [r.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: ib,
                    [r.t.NON_MUSIC_CATEGORY]: rd,
                    [r.t.PODCASTS_CHART_ALBUMS]: rn,
                };
        },
        51124: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
        51150: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var a,
                s = i(6274),
                r = i(74631),
                o = {
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                l = {};
            function n(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (o[e](i, i.exports, n), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useDebouncedToggle = void 0));
                let e = n(352),
                    t = n(810);
                c.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: s, throttleTimeout: r } = i,
                        o = (0, t.useRef)(null),
                        [l, n] = (0, t.useState)(!!s),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (n(!s),
                                        o.current && window.clearTimeout(o.current),
                                        (o.current = window.setTimeout(() => {
                                            n(!!s);
                                        }, a)));
                                }, r),
                            [a, s, r],
                        ),
                        d = (0, t.useCallback)(() => {
                            (n(!!s), o.current && window.clearTimeout(o.current));
                        }, [s]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                o.current && window.clearTimeout(o.current);
                            },
                            [],
                        ),
                        { state: l, handleDebouncedToggle: c, reset: d }
                    );
                };
            })(),
                c.__esModule);
            var d = c.useDebouncedToggle;
        },
        51770: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        51868: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var a = i(25839),
                s = i(82298),
                r = i(23976),
                o = i(27954),
                l = i(87490),
                n = i(51124),
                c = i.n(n);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': n, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, o.g)(),
                    _ = d && m;
                return (0, a.jsxs)('div', {
                    'aria-label': n,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(l.b, { align: 'back', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(l.b, { align: 'front', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: (0, s.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, a.jsx)(r.W, { isActive: t, className: (0, s.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        52312: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var a = i(84361),
                s = i(74631),
                r = i(71035),
                o = i(89192),
                l = i(27954);
            let n = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, l.g)(),
                        { contentScrollRef: u } = (0, o.g)(),
                        p = (0, s.useRef)(new Map()),
                        v = (0, s.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: m,
                            initialRect: n,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a + i.scrollTop : 0;
                            })(_, d, u),
                        },
                        b = (0, a.XW)(h),
                        C = (0, a.Te)({ ...h, getScrollElement: () => u, initialOffset: null == u ? void 0 : u.scrollTop }),
                        x = _ ? b : C,
                        A = (0, r.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, s.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let a = e.contentRect.height;
                                            a && a !== p.current.get(i) && (p.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && A());
                                }));
                        }, [A]),
                        { virtualizer: x, resizeObserver: v.current }
                    );
                };
        },
        52783: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        53367: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        53690: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            let a = '#b239f3';
        },
        54199: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        54239: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        54475: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        54637: (e) => {
            e.exports = {
                root: 'LikesAndHistory_root__KCuz_',
                carousel: 'LikesAndHistory_carousel__579RD',
                carouselItem: 'LikesAndHistory_carouselItem__Yq5Xw',
                favoritesCoverContainer: 'LikesAndHistory_favoritesCoverContainer__UUIDf',
                favoritesCover: 'LikesAndHistory_favoritesCover__Nt7Gm',
                historyIcon: 'LikesAndHistory_historyIcon__2FAMu',
                historyIconContainer: 'LikesAndHistory_historyIconContainer__KPPbS',
            };
        },
        55492: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => p });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(61493),
                n = i(23818),
                c = i(86869),
                d = i(4254),
                m = i(97522),
                _ = i(84804),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: p, covers: v, coverSize: h = 100, captionVariant: b = 'div' } = e,
                    C = (0, o.useMemo)(() => {
                        var e;
                        if (null == v || null == (e = v[0]) ? void 0 : e.color) return { '--subcover-background-color': v[0].color };
                    }, [v]);
                return (0, a.jsx)(m.N, {
                    href: _,
                    className: (0, s.$)(u().link, p),
                    'data-test-id': l.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: C,
                        className: (0, s.$)(u().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: u().plate,
                                'data-test-id': l.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: u().subcover, 'data-test-id': l.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(n._V, {
                                        src: null == v || null == (t = v[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: h,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: b,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': l.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        56859: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var a = i(25839),
                s = i(23976),
                r = i(36648),
                o = i(60205),
                l = i.n(o);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: l().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, a.jsx)(s.W, { isActive: t, className: l().cover, radius: 'l' }),
                        (0, a.jsx)(r.n, { isActive: t, className: l().title }),
                        (0, a.jsx)(r.n, { isActive: t, className: l().text }),
                    ],
                });
            };
        },
        57469: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        58223: (e) => {
            e.exports = {
                root: 'VibesAgent_root__vZxtE',
                controls: 'VibesAgent_controls__6jNJF',
                header: 'VibesAgent_header__PrZP3',
                important: 'VibesAgent_important__5yfOt',
                tab: 'VibesAgent_tab__Wwcd_',
                tabShimmer: 'VibesAgent_tabShimmer__TnlQU',
                tabCarousel: 'VibesAgent_tabCarousel__q__hc',
                item: 'VibesAgent_item__UBIWG',
            };
        },
        58301: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var a = i(25839),
                s = i(82298),
                r = i(23976),
                o = i(90923),
                l = i.n(o);
            let n = (e) => {
                    let { isActive: t } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(l().shimmer, l().donation),
                        children: [
                            (0, a.jsx)(r.W, { isActive: t, radius: 'round', className: l().shimmerCover }),
                            (0, a.jsxs)('div', {
                                className: l().shimmerContainer,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: l().shimmerText,
                                        children: [
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerArtist }),
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerGoal }),
                                        ],
                                    }),
                                    (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, i) => (0, a.jsx)(n, { isActive: e }, i));
        },
        58680: (e) => {
            e.exports = {
                root: 'NewRelease_root__W0T4a',
                image: 'NewRelease_image__Vw6_k',
                cover: 'NewRelease_cover__EVFNR',
                coverImage: 'NewRelease_coverImage__9x6Uk',
                card: 'NewRelease_card__yn06x',
                fade: 'NewRelease_fade__rVE0_',
                artists: 'NewRelease_artists__wGTaP',
                artistLink: 'NewRelease_artistLink__CO3Zn',
                artistCaption: 'NewRelease_artistCaption__1F8A9',
                trailerButton: 'NewRelease_trailerButton__OYAW6',
                descriptionContainer: 'NewRelease_descriptionContainer__g56GG',
            };
        },
        58958: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { n: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(a || (a = {})));
        },
        59925: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(25839),
                s = i(74631);
            let r = (e) => {
                let { className: t } = e,
                    i = (0, s.useId)(),
                    r = (0, s.useId)();
                return (0, a.jsxs)('svg', {
                    className: t,
                    viewBox: '0 0 139 72',
                    preserveAspectRatio: 'none',
                    focusable: 'false',
                    'aria-hidden': !0,
                    children: [
                        (0, a.jsx)('g', { filter: 'url(#'.concat(i, ')'), children: (0, a.jsx)('path', { d: 'M24 24L115 36L24 48V24Z', fill: 'url(#'.concat(r, ')') }) }),
                        (0, a.jsxs)('defs', {
                            children: [
                                (0, a.jsx)('filter', {
                                    id: i,
                                    x: '0',
                                    y: '0',
                                    width: '139',
                                    height: '72',
                                    filterUnits: 'userSpaceOnUse',
                                    colorInterpolationFilters: 'sRGB',
                                    children: (0, a.jsx)('feGaussianBlur', { stdDeviation: '12' }),
                                }),
                                (0, a.jsxs)('linearGradient', {
                                    id: r,
                                    x1: '24',
                                    y1: '36',
                                    x2: '115',
                                    y2: '36',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, a.jsx)('stop', { stopColor: 'var(--q2v-accent-color)' }),
                                        (0, a.jsx)('stop', { offset: '1', stopColor: 'var(--q2v-accent-color)', stopOpacity: '0' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        60205: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        60715: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        61278: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        61373: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        62560: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { E: () => a }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(a || (a = {})));
        },
        63905: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => p });
            var a = i(67379),
                s = i(20934),
                r = i(59450),
                o = i(71035),
                l = i(20258),
                n = i(26742),
                c = i(25488),
                d = i(97952),
                m = i(10764),
                _ = i(72594),
                u = i(84e3);
            let p = (e) => {
                let t = (0, r.st)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: p } = (0, d.$)(),
                    { tabId: v, tabPos: h, isTabSelectedByDefault: b } = (0, _.R)(),
                    { blockType: C, blockId: x, blockPosX: A, blockPosY: j, mainObjectType: N, mainObjectId: T } = (0, n.N)(),
                    { objectsCount: I, objectType: f, objectId: S, objectPosX: g, objectPosY: R } = (0, c.J)(),
                    L = (0, u.U)(),
                    { skeleton: y } = (0, m.b)();
                return (0, o.c)((r) => {
                    if (!t || !p || !l.xK.includes(p)) return;
                    let o = {
                        hash: i,
                        pageId: p,
                        entityType: C,
                        entityId: x,
                        entityPosX: A,
                        entityPosY: j,
                        objectsCount: I,
                        viewUuid: e,
                        objectType: f,
                        objectId: S,
                        objectPosX: g,
                        objectPosY: R,
                    };
                    (l.qG.includes(p) && ((o.tabId = v), (o.tabPos = h), (o.isTabSelectedByDefault = b)),
                        y && (o.skeletonId = y),
                        N && (o.mainObjectType = N),
                        T && (o.mainObjectId = T));
                    let n = (0, a.F)({ params: o, logger: L, context: 'useSendEventOnClipShowedOrHidden' });
                    if (n) {
                        if (r) return void (0, s.Pf)(t.evgenInstance, n);
                        (0, s.nv)(t.evgenInstance, n);
                    }
                });
            };
        },
        63938: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        64407: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => x });
            var a = i(25839),
                s = i(74631),
                r = i(39004),
                o = i(93588),
                l = i(61493),
                n = i(4071),
                c = i(35622),
                d = i(69084),
                m = i(36484),
                _ = i(62562),
                u = i(92231),
                p = i(84059),
                v = i(30787),
                h = i(6969),
                b = i(29809),
                C = i.n(b);
            let x = (e) => {
                let { dataSessionId: t, isOpened: i, onOpen: b, onClose: x } = e,
                    A = (0, _.N)().get(m.V4),
                    { formatMessage: j } = (0, r.A)(),
                    N = (() => {
                        let e = (0, p.useSearchParams)();
                        return (0, s.useCallback)(
                            (t) => {
                                let i = e.get(h.K.UTM_CAMPAIGN);
                                if (!i) return t;
                                let a = new URLSearchParams();
                                return (a.set(h.K.UTM_SOURCE, 'campaignid_'.concat(i)), (0, v.C)(t, a));
                            },
                            [e],
                        );
                    })(),
                    T = (0, s.useCallback)(
                        (e) => {
                            e.origin === A.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, A.afisha.host],
                    );
                (0, s.useEffect)(
                    () => (
                        window.addEventListener('message', T),
                        () => {
                            window.removeEventListener('message', T);
                        }
                    ),
                    [T],
                );
                let I = (0, s.useCallback)(
                        (e) => {
                            e ? b() : x();
                        },
                        [x, b],
                    ),
                    f = (0, o.tE)(A, (0, u.u)()),
                    S = N(''.concat(A.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(f));
                return (0, a.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: i,
                    onOpenChange: I,
                    onClose: x,
                    showHeader: !1,
                    className: C().widget,
                    contentClassName: C().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, a.jsx)(d.q, { children: (0, a.jsx)(n.$, { 'aria-label': j({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, a.jsx)('iframe', {
                            src: S,
                            className: C().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        64575: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(25839),
                s = i(70676);
            let r = (e) => Array.from({ length: e }, (e, t) => (0, a.jsx)(s.W, {}, t));
        },
        65189: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => h });
            var a = i(67379),
                s = i(44031),
                r = i(20934),
                o = i(59450),
                l = i(71035),
                n = i(79670),
                c = i(20258),
                d = i(26742),
                m = i(25488),
                _ = i(97952),
                u = i(10764),
                p = i(72594),
                v = i(84e3);
            let h = (e) => {
                let t = (0, o.st)(),
                    { hash: i } = (0, o.gf)(),
                    { pageId: h } = (0, _.$)(),
                    { tabId: b, tabPos: C, isTabSelectedByDefault: x } = (0, p.R)(),
                    { skeleton: A } = (0, u.b)(),
                    { blockType: j, blockId: N, blockPosX: T, blockPosY: I, mainObjectType: f, mainObjectId: S } = (0, d.N)(),
                    { objectsCount: g, objectType: R, objectId: L, objectPosX: y, objectPosY: k } = (0, m.J)(),
                    E = (0, v.U)();
                return (0, l.c)(() => {
                    if (!t || !h || !c.xK.includes(h)) return;
                    let o = {
                        hash: i,
                        pageId: h,
                        entityType: j,
                        entityId: N,
                        entityPosX: T,
                        entityPosY: I,
                        objectId: L,
                        objectType: R,
                        objectPosX: y,
                        objectPosY: k,
                        objectsCount: g,
                        from: n.W[h],
                        to: s.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(h) && ((o.tabId = b), (o.tabPos = C), (o.isTabSelectedByDefault = x)),
                        A && (o.skeletonId = A),
                        f && (o.mainObjectType = f),
                        S && (o.mainObjectId = S));
                    let l = (0, a.F)({ params: o, logger: E, context: 'useSendEventOnClipNavigated' });
                    l && e && (0, r.QS)(t.evgenInstance, l);
                });
            };
        },
        67467: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a,
                s = i(74631),
                r = {
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let a = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, a.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, a.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    588: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let a = i(810),
                            s = i(1848);
                        t.useResize = (e, t) => {
                            (0, a.useEffect)(() => {
                                let i = (0, s.getElementFromRefOrElement)(t);
                                if (null === i) return;
                                let a = null != i ? i : document.documentElement,
                                    r = new ResizeObserver(e);
                                return (r.observe(a), () => r.disconnect());
                            }, [t, e]);
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(s, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (r[e](i, i.exports, l), i.exports);
            }
            var n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useTruncate = void 0));
                let e = l(810),
                    t = l(588),
                    i = l(792);
                n.useTruncate = function (a) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                        [r, o] = (0, e.useState)(0),
                        [l, n] = (0, e.useState)(!1);
                    (0, e.useEffect)(() => {
                        var e;
                        let t = null == (e = a.current) ? void 0 : e.offsetHeight;
                        r || !t || ('vertical' === s && o(t));
                    }, [r, s, a]);
                    let c = (0, i.useCallbackRef)(() => {
                        let e = a.current;
                        e && ('horizontal' === s && n(e.scrollWidth > e.clientWidth), 'vertical' === s && n(e.offsetHeight > 0 && r < e.scrollHeight));
                    });
                    return ((0, t.useResize)(c, a), { isTruncated: l });
                };
            })(),
                n.__esModule);
            var c = n.useTruncate;
        },
        67974: (e) => {
            e.exports = {
                root: 'AlbumPromoCard_root__dAUet',
                artistImage: 'AlbumPromoCard_artistImage__fWVxn',
                artistImage_withTopPosition: 'AlbumPromoCard_artistImage_withTopPosition__tRrcO',
                artistCover: 'AlbumPromoCard_artistCover__Gfhab',
                albumCover: 'AlbumPromoCard_albumCover__QYYKH',
                button: 'AlbumPromoCard_button__mpQr6',
                buttonIcon: 'AlbumPromoCard_buttonIcon__WredC',
                buttonText: 'AlbumPromoCard_buttonText__pI3Ot',
                albumImage: 'AlbumPromoCard_albumImage__v8021',
                albumLink: 'AlbumPromoCard_albumLink__dnGvR',
                artistLink: 'AlbumPromoCard_artistLink__AD9__',
                title: 'AlbumPromoCard_title__uzmho',
                titleLink: 'AlbumPromoCard_titleLink__4DLNk',
                titleContainer: 'AlbumPromoCard_titleContainer__f1k8Y',
                artists: 'AlbumPromoCard_artists__UYpyB',
                artistsLink: 'AlbumPromoCard_artistsLink__8gTlH',
            };
        },
        68215: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r });
            var a = i(39004),
                s = i(65165);
            let r = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, s.j)(e, t);
            };
        },
        68466: (e) => {
            e.exports = { root: 'MultivibeNDA_root__Xmby8', text: 'MultivibeNDA_text__szNv7' };
        },
        68891: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        69663: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = () => ({ timeStyle: 'short' });
        },
        69675: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => _ });
            var a = i(74631),
                s = i(67379),
                r = i(82572),
                o = i(59450),
                l = i(84e3),
                n = i(79670),
                c = i(26742),
                d = i(97952),
                m = i(10764);
            let _ = () => {
                let e = (0, o.st)(),
                    t = (0, l.U)(),
                    { hash: i } = (0, o.gf)(),
                    { pageId: _ } = (0, d.$)(),
                    { mainObjectType: u, mainObjectId: p } = (0, c.N)(),
                    { skeleton: v } = (0, m.b)();
                return (0, a.useCallback)(
                    (a) => {
                        let { tabId: o = '', tabPos: l = 1, isTabSelectedByDefault: c = !1 } = a;
                        if (!e || !_) return;
                        let d = { hash: i, pageId: n.W[_], tabId: o, tabPos: l, isTabSelectedByDefault: c };
                        (v && (d.skeletonId = v), p && u && ((d.mainObjectType = u), (d.mainObjectId = p)));
                        let m = (0, s.F)({ params: d, logger: t, context: 'useSendEventOnTabOpened' });
                        m && (0, r.TV)(e.evgenInstance, m);
                    },
                    [e, _, i, v, p, u, t],
                );
            };
        },
        69778: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoSmall_controls__gzN7o',
                root: 'ArtistRecommendationsPromoSmall_root__P67oC',
                header: 'ArtistRecommendationsPromoSmall_header__eLjLR',
                carousel: 'ArtistRecommendationsPromoSmall_carousel__W39_x',
                item: 'ArtistRecommendationsPromoSmall_item__phKEX',
            };
        },
        70154: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => c });
            var a = i(25839),
                s = i(82298),
                r = i(8487),
                o = i(4254),
                l = i(68466),
                n = i.n(l);
            let c = (e) => {
                let { className: t } = e;
                return (0, a.jsx)('span', {
                    className: (0, s.$)(n().root, t),
                    children: (0, a.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'bold', className: n().text, children: (0, a.jsx)(r.A, { id: 'multivibe.nda' }) }),
                });
            };
        },
        70676: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a = i(25839),
                s = i(82298),
                r = i(39004),
                o = i(23976),
                l = i(21532),
                n = i.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: i } = e,
                    { formatMessage: l } = (0, r.A)();
                return (0, a.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(n().root, t),
                    children: [
                        (0, a.jsx)(o.W, { className: n().date, radius: 'm', isActive: i }),
                        (0, a.jsxs)('div', {
                            className: n().meta,
                            children: [
                                (0, a.jsx)(o.W, { className: n().title, radius: 's', isActive: i }),
                                (0, a.jsx)(o.W, { className: n().description, radius: 's', isActive: i }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { className: n().action, radius: 'l', isActive: i }),
                    ],
                });
            };
        },
        70744: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
        71839: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        72096: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        73367: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        73723: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        74509: (e) => {
            e.exports = {
                root: 'Special_root__FOrBZ',
                actions: 'Special_actions__XYuvB',
                textContainer: 'Special_textContainer__pN_TF',
                textColor: 'Special_textColor__dySbq',
                imageContainer: 'Special_imageContainer__V1_E3',
                image: 'Special_image__1sSXR',
                button: 'Special_button__j8gGH',
                advDisclaimer: 'Special_advDisclaimer__aMsoC',
                advDisclaimerTrigger: 'Special_advDisclaimerTrigger__19qVj',
                advDisclaimerPopover: 'Special_advDisclaimerPopover__5WrLl',
                advDisclaimerText: 'Special_advDisclaimerText__eQP9w',
            };
        },
        74749: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => N });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(84059),
                l = i(74631),
                n = i(39004),
                c = i(8487),
                d = i(61493),
                m = i(11871),
                _ = i(4071),
                u = i(66738),
                p = i(4254),
                v = i(91149),
                h = i(92942),
                b = i(27954),
                C = i(25895),
                x = i(57549),
                A = i(98919),
                j = i.n(A);
            let N = (0, r.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, n.A)(),
                    { createPlaylist: r } = (0, b.g)(),
                    { notify: A } = (0, h.l)(),
                    N = (0, o.useRouter)(),
                    T = (0, l.useRef)(!1),
                    I = (0, l.useCallback)(async () => {
                        if (T.current) return;
                        T.current = !0;
                        let e = await r.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: m.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, C.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            N.push(t);
                        } else (A((0, a.jsx)(x.h, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: v.u.ERROR }), (T.current = !1));
                    }, [r, i, N, A]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, a.jsxs)('div', {
                        className: (0, s.$)(j().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, a.jsx)(_.$, {
                                className: j().button,
                                icon: (0, a.jsx)(u.I, { className: j().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': i({ id: 'playlist-actions.create-playlist' }),
                                onClick: I,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, a.jsx)(p.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: j().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, a.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        74803: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        76457: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var a = i(25839),
                s = i(33660),
                r = i(74631),
                o = i(39004),
                l = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                m = i(57549),
                _ = i(53712),
                u = i(35015),
                p = i(3163);
            let v = (e) => {
                    let { clip: t, closeToast: i } = e;
                    return (0, a.jsx)(p.O, {
                        entityVariant: u.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: _.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.thumbnail,
                    });
                },
                h = (e) => {
                    let { user: t, fullscreenVideoPlayer: i, collection: _ } = (0, d.g)(),
                        { notify: u } = (0, c.l)(),
                        [p, h] = (0, r.useState)(!1),
                        { formatMessage: b } = (0, o.A)();
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        let r = i.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO,
                            o = i.modal.isOpened ? n.u.FULLSCREEN_ERROR : n.u.ERROR;
                        if (!t.isAuthorized) return void u((0, a.jsx)(m.h, { error: b({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        if (p) return;
                        let c = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                        h(!0);
                        let d = await e.toggleLike();
                        (h(!1),
                            _.clips.reset(),
                            d === l.f.OK
                                ? u((0, a.jsx)(v, { clip: c }), { containerId: r })
                                : u((0, a.jsx)(m.h, { error: b({ id: 'error-messages.error-during-action' }) }), { containerId: o }));
                    }, [e, t.isAuthorized, p, b, u, i.modal.isOpened, _.clips]);
                };
        },
        77179: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var a = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        77245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        78453: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => m });
            var a = i(25839),
                s = i(74631),
                r = i(39004),
                o = i(71035),
                l = i(91149),
                n = i(92942),
                c = i(31488),
                d = i(57549);
            let m = (e) => {
                let [t, i] = (0, s.useState)(!1),
                    { notify: m } = (0, n.l)(),
                    _ = (0, s.useRef)(!1),
                    { formatMessage: u } = (0, r.A)();
                return {
                    editVibeRoom: (0, o.c)(async (t) => {
                        e &&
                            !_.current &&
                            (i(!0),
                            (_.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                m((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }),
                            i(!1),
                            (_.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        79677: (e) => {
            e.exports = {
                root_withControls: 'CollectionAlbumsPresaves_root_withControls__qE_u_',
                controls: 'CollectionAlbumsPresaves_controls__8twKX',
                header: 'CollectionAlbumsPresaves_header__1flkp',
                important: 'CollectionAlbumsPresaves_important__EkdBU',
                tab: 'CollectionAlbumsPresaves_tab__V6yvN',
                tabShimmer: 'CollectionAlbumsPresaves_tabShimmer__T6w2W',
                tabCarousel: 'CollectionAlbumsPresaves_tabCarousel__hobTn',
                tabPanel: 'CollectionAlbumsPresaves_tabPanel__ZHz6v',
                carouselEmpty: 'CollectionAlbumsPresaves_carouselEmpty__8szhR',
                item: 'CollectionAlbumsPresaves_item__to1P9',
            };
        },
        80325: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        80504: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(35522);
            let s = {
                [a.t.ALBUM_PROMO]: 314,
                [a.t.ARTIST_RECOMMENDATIONS_PROMO]: 390,
                [a.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: 184,
                [a.t.ARTIST_PICK]: 102,
                [a.t.ARTIST_CONCERTS]: 232,
                [a.t.ARTIST_PLAYLISTS]: 316,
                [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [a.t.ARTIST_POPULAR_TRACKS]: 340,
                [a.t.ARTIST_RELEASE]: 340,
                [a.t.ARTIST_UPCOMING_RELEASE]: 340,
                [a.t.ARTIST_ALBUMS]: 316,
                [a.t.ARTIST_COMPILATIONS]: 316,
                [a.t.ARTIST_CLIPS]: 292,
                [a.t.ARTIST_STUDIO_ALBUMS]: 316,
                [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [a.t.SIMPLE_ALBUM_PROMO]: 140,
                [a.t.CHART_ALBUMS]: 322,
                [a.t.CHART_TRACKS]: 284,
                [a.t.COLLECTION_ALBUMS]: 320,
                [a.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [a.t.COLLECTION_ARTISTS]: 336,
                [a.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [a.t.COLLECTION_TOP_ARTISTS]: 336,
                [a.t.COLLECTION_CLIPS]: 292,
                [a.t.COLLECTION_FAVOURITE_PLAYLIST]: 370,
                [a.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [a.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [a.t.COLLECTION_KIDS]: 320,
                [a.t.COLLECTION_WAVE_ROOMS]: 320,
                [a.t.CONCERTS_PERSONAL]: 442,
                [a.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [a.t.CONCERTS_TOP]: 442,
                [a.t.EDITORIAL_ARTISTS]: 336,
                [a.t.EDITORIAL_CONCERTS]: 442,
                [a.t.VIEWED_CONCERTS]: 442,
                [a.t.EDITORIAL_COMPILATION]: 316,
                [a.t.EDITORIAL_NEW_RELEASES]: 410,
                [a.t.EDITORIAL_PROMOTIONS]: 342,
                [a.t.EDITORIAL_WAVES]: 138,
                [a.t.EDITORIAL_WAVES_AGENT]: 319,
                [a.t.META_TAG_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [a.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [a.t.IN_STYLE]: 370,
                [a.t.ITEM_LIST]: 250,
                [a.t.LIKES_AND_HISTORY]: 106,
                [a.t.META_TAG_ALBUMS]: 316,
                [a.t.META_TAG_ARTISTS]: 336,
                [a.t.META_TAG_NEW_ALBUMS]: 316,
                [a.t.META_TAG_PLAYLISTS]: 316,
                [a.t.META_TAG_POPULAR_ARTISTS]: 336,
                [a.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [a.t.META_TAG_SIMILAR_WAVE]: 138,
                [a.t.META_TAG_WAVE]: 64,
                [a.t.MICRO_GENRE_ALBUMS]: 316,
                [a.t.MICRO_GENRE_ARTISTS]: 336,
                [a.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [a.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [a.t.MICRO_GENRE_WAVE]: 64,
                [a.t.MIXES]: 260,
                [a.t.MIXES_GRID]: 240,
                [a.t.MIXES_MUSIC]: 264,
                [a.t.NEUROMUSIC]: 138,
                [a.t.NEW_PLAYLISTS]: 316,
                [a.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [a.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [a.t.NEW_RELEASES]: 410,
                [a.t.NEW_STARS_ARTISTS]: 336,
                [a.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [a.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [a.t.NON_MUSIC_PROMOTIONS]: 342,
                [a.t.OPEN_PLAYLIST]: 310,
                [a.t.OVERVIEW]: 84,
                [a.t.PERSONAL_ARTISTS]: 336,
                [a.t.PERSONAL_PLAYLISTS]: 342,
                [a.t.PROMOTIONS]: 342,
                [a.t.Q2V_SUGGESTIONS]: 48,
                [a.t.RECENTLY_PLAYED]: 316,
                [a.t.RECOMMENDED_PLAYLISTS]: 316,
                [a.t.REWIND_PLAYLISTS]: 342,
                [a.t.SMART_OPEN_PLAYLIST]: 310,
                [a.t.SPECIAL]: 192,
                [a.t.SIMILAR_ARTISTS]: 336,
                [a.t.TABS]: 60,
                [a.t.WAVES]: 176,
                [a.t.WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES]: 176,
                [a.t.WIZARD]: 328,
                [a.t.DONATIONS]: 216,
                [a.t.CLIPS]: 292,
                [a.t.CONTINUE_LISTEN]: 138,
                [a.t.DISLIKES]: 54,
                [a.t.HISTORY]: 402,
                [a.t.SEARCH_HISTORY]: 402,
                [a.t.FAMILIAR_YOU]: 102,
                [a.t.CONCERT_PLACE]: 324,
                [a.t.COLLECTION_WAVE_AGENT]: 186,
                [a.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: 336,
                [a.t.NON_MUSIC_CATEGORY]: 316,
                [a.t.PODCASTS_CHART_ALBUMS]: 322,
            };
        },
        81661: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        82904: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => w });
            var a = i(25839),
                s = i(88204),
                r = i(8487),
                o = i(44031),
                l = i(61493),
                n = i(71035),
                c = i(49656),
                d = i(14693),
                m = i(4071),
                _ = i(69084),
                u = i(4254),
                p = i(29481),
                v = i(52512),
                h = i(85686),
                b = i(27954),
                C = i(44806),
                x = i(17226),
                A = i(25895),
                j = i(7050),
                N = i(64407),
                T = i(83418);
            let I = ' • ',
                f = (e, t) => {
                    let i = [];
                    return (e.city && i.push(e.city), e.place && i.push(e.place), i.join(t));
                };
            var S = i(26330),
                g = i.n(S);
            let R = (0, s.PA)((e) => {
                let { concert: t, cashback: i } = e;
                return (0, a.jsxs)('div', {
                    className: g().meta,
                    children: [
                        (0, a.jsx)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: g().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, a.jsxs)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: g().info,
                            children: [
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: g().location,
                                    'aria-label': f(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: f(t, I),
                                }),
                                (0, a.jsx)(u.HL, { 'aria-hidden': !0, className: g().separator, variant: 'span', type: 'controls', weight: 'medium', children: I }),
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: g().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        i,
                    ],
                });
            });
            var L = i(2488),
                y = i(11148),
                k = i(73367),
                E = i.n(k);
            let w = (0, s.PA)((e) => {
                var t, i, s;
                let { concert: I, withMask: f = !0, withPriceButton: S, withInlineMeta: g = !1 } = e,
                    { state: k, toggleTrue: w, toggleFalse: O } = (0, d.e)(!1),
                    { ref: P, intersectionPropertyId: M } = (0, v.n)(),
                    { experiments: D } = (0, b.g)(),
                    B = D.checkExperiment(C.z.WebNextConcertPage, 'on'),
                    V = (0, p.N)(),
                    U = (0, j.Y)(),
                    { href: W } = (0, A.u)('/concert/:concertId', { params: { concertId: I.id } }),
                    z = (0, h.Z)(W),
                    H = U(I),
                    K = (0, n.c)((e) => {
                        (V({ to: o.AppScreen.ConcertPurchaseScreen }), w(), null == e || e.stopPropagation());
                    }),
                    Y = (0, n.c)((e) => {
                        if (!B) return void K(e);
                        (V({ to: o.AppScreen.ConcertScreen }), z(e));
                    }),
                    $ = (0, n.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), Y());
                    }),
                    F = (0, n.c)((e) => {
                        B && (K(e), e.preventDefault());
                    }),
                    X = (0, c.L)(() => {
                        let e = I.isIdentityExperimentEnabled && I.cashbackValuePercent,
                            t = !I.isIdentityExperimentEnabled && I.isCashbackExperimentEnabled && I.cashbackTitle;
                        if (e || t)
                            return (0, a.jsx)(T.m, {
                                className: E().cashback,
                                titleClassName: E().cashbackTitle,
                                title: I.cashbackTitle,
                                valuePercent: I.cashbackValuePercent,
                            });
                    }),
                    G = (0, a.jsx)(L.M, { concert: I, withCashback: !1, withInlineMeta: g, titleSize: 'l' }),
                    Z = (0, a.jsx)(R, { concert: I, cashback: X });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: E().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: Y,
                            onKeyDown: $,
                            ref: P,
                            'data-intersection-property-id': M,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: (0, a.jsx)(r.A, { id: 'entity-names.concert' }) }) }),
                                (0, a.jsx)('div', {
                                    className: E().cover,
                                    children: (0, a.jsx)(y.W, {
                                        datetime: I.datetime,
                                        coverColor: null == (t = I.cover) ? void 0 : t.color,
                                        uri: null == (i = I.cover) ? void 0 : i.uri,
                                        withMask: f,
                                        cashbackPercent: I.isIdentityExperimentEnabled ? I.cashbackValuePercent : void 0,
                                    }),
                                }),
                                I.isIdentityExperimentEnabled ? G : Z,
                                !!(null == (s = I.price) ? void 0 : s.value) && (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: H }) }),
                                S &&
                                    (0, a.jsx)(m.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: E().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: F,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: H,
                                    }),
                            ],
                        }),
                        (0, a.jsx)(N.h, { dataSessionId: I.dataSessionId, isOpened: k, onOpen: w, onClose: O }),
                    ],
                });
            });
        },
        83139: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => _ });
            var a = i(25839),
                s = i(88204),
                r = i(74631),
                o = i(39004),
                l = i(4254),
                n = i(69663),
                c = i(83418),
                d = i(26330),
                m = i.n(d);
            let _ = (0, s.PA)((e) => {
                let { id: t, concert: i } = e,
                    { formatDate: s } = (0, o.A)(),
                    d = [],
                    _ = (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == i ? void 0 : i.place) && d.push((0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: i.place })),
                    (null == i ? void 0 : i.datetime) &&
                        d.push(_, (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: m().time, children: s(i.datetime, (0, n.f)()) })),
                    (null == i ? void 0 : i.contentRating) && d.push(_, (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: i.contentRating })),
                    (0, a.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, a.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: m().city, lineClamp: 1, children: null == i ? void 0 : i.city }),
                            (0, a.jsx)('div', { className: m().info, children: d.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(c.m, { className: m().cashback, valuePercent: i.cashbackValuePercent }),
                            !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(c.m, { className: m().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        83418: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => d });
            var a = i(25839),
                s = i(82298),
                r = i(61493),
                o = i(66738),
                l = i(4254),
                n = i(11618),
                c = i.n(n);
            let d = (e) => {
                let { title: t, className: i, titleClassName: n, valuePercent: d } = e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(c().root, i),
                    children: [
                        (0, a.jsx)(o.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, a.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, s.$)(c().title, n),
                            'data-test-id': r.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        84715: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => O });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                l = i(49656),
                n = i(51859),
                c = i(89192),
                d = i(27954),
                m = i(69041),
                _ = i(9931),
                u = i(29504),
                p = i(67379),
                v = i(82572),
                h = i(59450),
                b = i(84e3),
                C = i(79670),
                x = i(26742),
                A = i(97952),
                j = i(10764),
                N = i(79396),
                T = i(57469),
                I = i.n(T);
            let f = (e) => {
                let { filter: t, tabsState: i, value: r, isSticky: l, ...n } = e,
                    c = (() => {
                        let e = (0, o.useRef)(!1),
                            t = (0, h.st)(),
                            i = (0, b.U)(),
                            { hash: a } = (0, h.gf)(),
                            { pageId: s } = (0, A.$)(),
                            { mainObjectType: r, mainObjectId: l } = (0, x.N)(),
                            { skeleton: n } = (0, j.b)();
                        return (0, o.useCallback)(
                            (o) => {
                                let { tabId: c = '', tabPos: d = 1, isTabSelectedByDefault: m = !1 } = o;
                                if (!t || !s || e.current) return;
                                let _ = { hash: a, pageId: C.W[s], tabId: c, tabPos: d, isTabSelectedByDefault: m };
                                (n && (_.skeletonId = n), l && r && ((_.mainObjectType = r), (_.mainObjectId = l)));
                                let u = (0, p.F)({ params: _, logger: i, context: 'useSendEventOnTabLoaded' });
                                u && ((0, v.hc)(t.evgenInstance, u), (e.current = !0));
                            },
                            [t, s, a, n, l, r, i],
                        );
                    })();
                return (
                    (0, o.useEffect)(() => {
                        c({ tabId: t.id, tabPos: r + 1, isTabSelectedByDefault: t.id === u.Q.ALL });
                    }, [t.id, r, c]),
                    (0, a.jsx)(N.o, { tabIndex: l ? -1 : 0, className: (0, s.$)(I().root, { [I().root_selected]: r === i.value }), title: t.name, value: r, ...n })
                );
            };
            var S = i(99221),
                g = i.n(S);
            let R = (0, r.PA)((e) => {
                let { className: t, isActive: i = !0, shimmerClassName: r } = e;
                return (0, a.jsx)(_.wI, {
                    className: (0, s.$)(g().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, a.jsx)(_.zr, { className: (0, s.$)(g().root, r), shimmerClassName: g().shimmer, count: 3, isActive: i }),
                });
            });
            var L = i(74803),
                y = i.n(L);
            let k = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 40, end: 40 } },
                E = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 20, end: 50 } },
                w = (0, r.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: i,
                            className: r,
                            forwardRef: n,
                            carouselClassName: u,
                            shimmerClassName: p,
                            isSticky: v,
                            items: h,
                            isShimmerVisible: b,
                            isShimmerActive: C,
                            skipSearchCheck: x = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: j },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: N, playlistStaticFiltersRef: T, contentScrollRef: I } = (0, c.g)(),
                        S = null != h ? h : A.filters.items,
                        g = (0, l.L)(() =>
                            (0, a.jsx)(_.wI, {
                                ref: n,
                                className: (0, s.$)(y().carousel, u),
                                ...t,
                                onTabChange: i,
                                children: null == S ? void 0 : S.map((e, i) => (0, a.jsx)(f, { filter: e, tabsState: t, value: i, isSticky: v }, e.id)),
                            }),
                        ),
                        L = (0, o.useCallback)(() => {
                            T && N && (T.scrollLeft = N.scrollLeft);
                        }, [T, N]),
                        w = (0, o.useCallback)(() => {
                            T && N && (N.classList.add(y().carousel_noSmooth), (N.scrollLeft = T.scrollLeft), N.classList.remove(y().carousel_noSmooth));
                        }, [T, N]),
                        [O, P] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        O && w();
                    }, [O, w]);
                    let M = (0, o.useCallback)(() => {
                        P((null == N ? void 0 : N.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [N]);
                    return (
                        (0, o.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                v
                                    ? (null == N || N.addEventListener('scroll', L, t), null == N || N.addEventListener('resize', L, t))
                                    : j
                                      ? (window.addEventListener('scroll', M, t), window.addEventListener('resize', M, t))
                                      : (null == I || I.addEventListener('scroll', M, t), null == I || I.addEventListener('resize', M, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [v, I, N, M, L, j]),
                        (null != b ? b : A.filters.isShimmerVisible)
                            ? (0, a.jsx)(R, { isActive: null == C || C, shimmerClassName: p })
                            : S && 0 !== S.length && (x || A.search.isNeededToLoad)
                              ? (0, a.jsx)(m.F, { className: r, carouselElement: g, ref: n, scrollPadding: v ? E : k })
                              : void 0
                    );
                }),
                O = (0, o.forwardRef)((e, t) => (0, a.jsx)(w, { forwardRef: t, ...e }));
        },
        84777: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        84804: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        85184: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var a = i(74631),
                s = i.t(a, 2),
                r = {
                    810: (e) => {
                        e.exports = s;
                    },
                },
                o = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var a = (o[t] = { exports: {} });
                    return (r[t](a, a.exports, e), a.exports);
                })(810);
                l.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                l.__esModule);
            var n = l.useIsomorphicEffect;
            let c = (e) => {
                let [t, i] = (0, a.useState)(!1);
                return (
                    n(() => {
                        let t = window.matchMedia(e),
                            a = () => i(t.matches);
                        return (
                            a(),
                            t.addEventListener('change', a),
                            () => {
                                t.removeEventListener('change', a);
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
        86133: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        87490: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => l });
            var a = i(25839),
                s = i(82298),
                r = i(20006),
                o = i.n(r);
            let l = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: l = !1, className: n, surfaceClassName: c, overlayClassName: d } = e,
                    m = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, s.$)(o().root, m ? o().root_back : o().root_front, n),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, s.$)(o().circle, { [o().circle_back]: m, [o().circle_disabled]: l }),
                            children: [(0, a.jsx)('span', { className: (0, s.$)(o().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
            };
        },
        87605: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(40207);
            let s = (e) => {
                let { clip: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, a.l)({ entity: t, callback: i, onReject: s, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        87982: (e) => {
            e.exports = { text: 'Q2vSuggestion_text__d1vnX', root: 'Q2vSuggestion_root__Ep0ce' };
        },
        89133: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__CaNIc',
                cover: 'ArtistRecommendationArtwork_cover__d_2PD',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__ercHQ',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__uo1Ez',
                root_active: 'ArtistRecommendationArtwork_root_active__fB0EI',
            };
        },
        89331: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        89728: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        90635: (e) => {
            e.exports = {
                root: 'Concert_root__INQJc',
                cover: 'Concert_cover__POyDO',
                index: 'Concert_index__cPRuN',
                meta: 'Concert_meta__s_lsH',
                textContainer: 'Concert_textContainer__50dZP',
                date: 'Concert_date__3xwWB',
                info: 'Concert_info__viObm',
                concertTitle: 'Concert_concertTitle__kngHo',
                description: 'Concert_description__JTZtZ',
                descriptionContainer: 'Concert_descriptionContainer__cPF3d',
                cashback: 'Concert_cashback__b7feO',
                title: 'Concert_title__tX2Mj',
            };
        },
        90923: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        91631: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        91809: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => C });
            var a = i(25839),
                s = i(82298),
                r = i(74631),
                o = i(39004),
                l = i(8487),
                n = i(89288),
                c = i(4071),
                d = i(66738),
                m = i(86869),
                _ = i(4254),
                u = i(6323),
                p = i(97522),
                v = i(90923),
                h = i.n(v);
            let b = (e) => {
                    let { artist: t, goal: i, onNavigateToArtist: r, onNavigateToDonation: v, forwardRef: b, ...C } = e,
                        { formatMessage: x } = (0, o.A)();
                    return (0, a.jsxs)('div', {
                        ref: b,
                        className: (0, s.$)(h().root, h().donation),
                        ...(0, n.OZ)(C),
                        children: [
                            (0, a.jsx)(m.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, a.jsx)(p.N, {
                                    href: t.url,
                                    onClick: r,
                                    'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, a.jsx)(u.B, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, a.jsx)(_.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: i,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: v,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, a.jsx)(d.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, a.jsx)(_.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, a.jsx)(l.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                C = (0, r.forwardRef)((e, t) => (0, a.jsx)(b, { forwardRef: t, ...e }));
        },
        94739: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        95213: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => p });
            var a = i(44031),
                s = i(71035),
                r = i(42966),
                o = i(25839),
                l = i(74631),
                n = i(39004),
                c = i(91149),
                d = i(92942),
                m = i(31488),
                _ = i(57549),
                u = i(75159);
            let p = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    p = (0, u.A)(null == t ? void 0 : t.wave),
                    { exitVibeRoom: v, isPending: h } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [a, r] = (0, l.useState)(!1),
                            { notify: u } = (0, d.l)(),
                            p = (0, l.useRef)(!1),
                            { formatMessage: v } = (0, n.A)();
                        return {
                            exitVibeRoom: (0, s.c)(async () => {
                                t &&
                                    !p.current &&
                                    (r(!0),
                                    (p.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === m.F.ERROR
                                        ? u((0, o.jsx)(_.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR })
                                        : i(),
                                    r(!1),
                                    (p.current = !1));
                            }),
                            isPending: a,
                        };
                    })({ room: t, onRoomSuccessExit: i }),
                    b = (0, r.m)();
                return {
                    handleExitClick: (0, s.c)(async () => {
                        (b({ actionType: a.ActionType.Remove, userInteractionType: a.UserInteractionType.Tap, objectType: a.DomainObjectType.Wave }), await v());
                    }),
                    handlePinClick: (0, s.c)(async () => {
                        (b({ actionType: a.ActionType.Pin, userInteractionType: a.UserInteractionType.Tap, objectType: a.DomainObjectType.Wave }), await p());
                    }),
                    isExitPending: h,
                };
            };
        },
        95772: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(25839),
                s = i(19412);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: o,
                    withInfo: l,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': m,
                    withSubcover: _,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: o, withInfo: l, withSubcover: _, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        95865: (e) => {
            e.exports = {
                root: 'LikesAndHistoryItem_root__oI1gk',
                link: 'LikesAndHistoryItem_link__snTl_',
                start: 'LikesAndHistoryItem_start__wdtiV',
                textContainer: 'LikesAndHistoryItem_textContainer__yGdOu',
                titleIcon: 'LikesAndHistoryItem_titleIcon__2D_yS',
                title: 'LikesAndHistoryItem_title__hdi2H',
                subtitle: 'LikesAndHistoryItem_subtitle__ghuKi',
                covers: 'LikesAndHistoryItem_covers__9k_yw',
                coverContainer: 'LikesAndHistoryItem_coverContainer__fwXXJ',
                cover: 'LikesAndHistoryItem_cover__QlRhz',
            };
        },
        96104: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        96876: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        96895: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(16886);
            let s = (e, t) => ({ type: a.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        97762: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { p: () => a }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(a || (a = {})));
        },
        98547: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        98919: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        99221: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
    },
]);
