(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7804],
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
                n = i(39004),
                l = i(22939),
                c = i(71035),
                d = i(49656),
                m = i(51246),
                _ = i(86869),
                u = i(4254),
                p = i(99835),
                v = i(4331),
                h = i(17545),
                b = i(79367),
                x = i(47009),
                C = i(30290),
                A = i(61561),
                j = i(85686),
                T = i(85743),
                N = i(50209),
                f = i(27954),
                I = i(6323),
                g = i(62926),
                S = i(97522),
                y = i(26115),
                R = i(6342),
                L = i.n(R),
                E = i(8487),
                k = i(36619),
                w = i(61493),
                O = i(66738),
                P = i(34159),
                M = i(64720),
                D = i(49438),
                B = i(71996),
                V = i(78437),
                U = i(3407);
            let W = (0, r.PA)((e) => {
                    let { track: t, handleLikeButtonClick: i, handlePlayButtonClick: r, isPlaying: n } = e,
                        { trailer: l, user: _ } = (0, f.g)(),
                        [u, p] = (0, o.useState)(!1),
                        [v, h] = (0, o.useState)(!1),
                        x = (0, b.P)(),
                        C = (0, P.F)(),
                        A = (0, c.c)(() => {
                            (p(!u), h(!u));
                        }),
                        j = (0, c.c)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }),
                        T = (0, c.c)((e) => {
                            if ((e.stopPropagation(), x())) return void e.preventDefault();
                            (l.openTrackTrailer(t.id), C(k.DomainObjectType.Track, t.id));
                        }),
                        N = (0, d.L)(() => {
                            var e;
                            if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                                return (0, a.jsx)(
                                    V.n,
                                    {
                                        children: (0, a.jsx)(B.k, {
                                            className: (0, s.$)(L().trailerButton, L().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: T,
                                        }),
                                    },
                                    t.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(m.hg, {
                        isVisible: u || v,
                        className: L().controls,
                        labelText: (0, a.jsx)(E.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            D.D,
                            {
                                className: (0, s.$)(L().playButton, L().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: n,
                                onClick: r,
                            },
                            t.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            M.c,
                            {
                                className: (0, s.$)(L().likeButton, L().control),
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
                                className: (0, s.$)(L().menuButton, L().control),
                                icon: (0, a.jsx)(O.I, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                'data-test-id': w.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                            },
                            t.getKey('TrackContextMenu'),
                        ),
                        trailerControl: N,
                    });
                }),
                z = (0, r.PA)((e) => {
                    var t, i;
                    let { className: r, children: R, track: E, contentLinesCount: k, overrideContextType: w } = e,
                        { from: O } = (0, C.f)(),
                        {
                            track: P,
                            paywall: { modal: M },
                        } = (0, f.g)(),
                        { formatMessage: D } = (0, n.A)(),
                        [B, V] = (0, o.useState)(!1),
                        [U, z] = (0, o.useState)(!1),
                        { sendLikeSearchFeedback: H, sendPlaySearchFeedback: K, sendNavigateSearchFeedback: Y } = (0, T.z)(),
                        $ = (0, h.K)(E),
                        F = (0, j.Z)(null != (i = null == (t = E.mainAlbum) ? void 0 : t.url) ? i : ''),
                        G = (0, j.Z)(E.url),
                        X = (0, x.b)(),
                        Z = (0, b.P)(),
                        Q = (0, d.L)(() => {
                            var e;
                            let t = D({ id: 'entity-names.track-name' }, { trackName: E.title }),
                                i = E.isLiked ? D({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(t, ' ')
                                .concat(null != (e = E.version) ? e : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: q, togglePlay: J } = (0, N.D)({
                            playContextParams: {
                                contextData: { type: l.K.Various, meta: { id: E.entityId }, from: O, overrideContextType: w },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: E.entityId,
                        }),
                        ee = (0, c.c)(() => {
                            P.open({ trackId: E.id, albumId: E.albumId });
                        }),
                        et = (0, c.c)(() => {
                            (B || q || (V(!0), null == K || K()), J());
                        }),
                        ei = (0, p.c)({ album: E.mainAlbum, callback: F }),
                        ea = (0, y.w)({ track: E, callback: G }),
                        es = (0, y.w)({ track: E, callback: ee }),
                        er = (0, y.w)({ track: E, callback: et }),
                        eo = (0, A.N)(),
                        en = (0, c.c)(() => {
                            if (!Z()) {
                                if (eo) return void M.open();
                                (er(), X(!q));
                            }
                        }),
                        el = (0, c.c)(() => {
                            E.hasTrackLink && es();
                        }),
                        ec = (0, c.c)(() => {
                            (U || E.isLiked || (z(!0), null == H || H()), $());
                        }),
                        ed = (0, c.c)((e) => {
                            var t;
                            if (E.hasTrackLink) {
                                (null == Y || Y(), ea(e));
                                return;
                            }
                            E.hasAlbumLink && (null == (t = E.mainAlbum) ? void 0 : t.url) && ei(e);
                        }),
                        em = (0, d.L)(() => {
                            var e, t, i;
                            return E.hasTrackLink
                                ? (0, a.jsx)(S.N, {
                                      'aria-label': ''.concat(E.title, ' ').concat(null != (t = E.version) ? t : ''),
                                      className: L().titleLink,
                                      href: E.url,
                                      tabIndex: -1,
                                      onClick: ed,
                                      children: E.title,
                                  })
                                : E.hasAlbumLink && (null == (e = E.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(S.N, {
                                        'aria-label': ''.concat(E.title, ' ').concat(null != (i = E.version) ? i : ''),
                                        className: L().titleLink,
                                        href: E.mainAlbum.url,
                                        tabIndex: -1,
                                        onClick: ed,
                                        children: E.title,
                                    })
                                  : (0, a.jsx)(u.HL, { className: L().title, variant: 'span', children: E.title });
                        }),
                        e_ = (0, d.L)(() => {
                            var e, t;
                            let i = E.hasAlbumLink ? (null == (e = E.mainAlbum) ? void 0 : e.url) : void 0,
                                s = E.hasTrackLink ? E.url : i;
                            return s
                                ? (0, a.jsx)(S.N, {
                                      className: L().srTitleLink,
                                      href: s,
                                      onClick: ed,
                                      children: ''.concat(E.title, ' ').concat(null != (t = E.version) ? t : ''),
                                  })
                                : null;
                        }),
                        eu = (0, d.L)(() => {
                            if (E.isAvailable) return (0, a.jsx)(W, { track: E, isPlaying: q, handleLikeButtonClick: ec, handlePlayButtonClick: en });
                        });
                    return (0, a.jsx)(m.MN, {
                        className: (0, s.$)(L().root, r),
                        'aria-label': Q,
                        explicitMarkComponent: E.explicitDisclaimer && (0, a.jsx)(g.N, { getDescriptionTexts: E.getDescriptionTexts, variant: E.explicitDisclaimer }),
                        title: (0, a.jsxs)(u.HL, {
                            className: (0, s.$)(L().titleContainer, { [L().titleContainer_withVersion]: E.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !!e_ || void 0,
                            children: [em, E.version && (0, a.jsx)(u.HL, { className: L().version, variant: 'span', children: ' '.concat(E.version) })],
                        }),
                        srTitle: e_,
                        contentLinesCount: k,
                        view: (0, a.jsx)(_.t, {
                            className: L().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, s.$)(L().coverBlock, { [L().coverBlock_withTrackLink]: E.hasTrackLink }),
                                onClick: el,
                                children: [
                                    (0, a.jsx)(I.B, {
                                        className: L().image,
                                        src: E.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: Q,
                                        withAvatarReplace: !0,
                                        isAvailable: E.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    eu,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            v.i,
                            { className: L().artists, artists: E.artists, lineClamp: 1, linkClassName: L().artistLink, captionSize: 's', withLink: E.isNonUserGenerated },
                            E.getKey('description'),
                        ),
                        children: R,
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
                n = i(8487),
                l = i(4071),
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
                                    children: (0, a.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(l.$, {
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
                n = i(61493),
                l = i(49656),
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
                            'data-test-id': n.OA.concert.CONCERT_CARD_EVENT_KIND,
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
                                'data-test-id': n.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: i.contentRating,
                            }),
                        ));
                let h = (0, l.L)(() =>
                    (null == i ? void 0 : i.city)
                        ? (0, a.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': n.OA.concert.CONCERT_CARD_LOCATION,
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
                                'data-test-id': n.OA.concert.CONCERT_CARD_TITLE,
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
                n = i(4254),
                l = i(98288),
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
                    'aria-label': v(t, (0, l.s)()),
                    ...p,
                    'data-test-id': o.OA.concert.CONCERT_DATE,
                    children: [
                        (0, a.jsx)(n.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, s.$)(d().month, c),
                            'data-test-id': o.OA.concert.CONCERT_DATE_MONTH,
                            children: h,
                        }),
                        (0, a.jsx)(n.HL, {
                            variant: 'div',
                            className: (0, s.$)(d().day, m),
                            'data-test-id': o.OA.concert.CONCERT_DATE_DAY,
                            children: v(t, { day: 'numeric' }),
                        }),
                        u &&
                            (0, a.jsx)(n.HL, {
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
            i.d(t, { f: () => C });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(39004),
                n = i(8487),
                l = i(36619),
                c = i(61493),
                d = i(71035),
                m = i(4071),
                _ = i(66738),
                u = i(4254),
                p = i(29481),
                v = i(27954),
                h = i(87490),
                b = i(96876),
                x = i.n(b);
            let C = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, v.g)(),
                    { formatMessage: b } = (0, o.A)(),
                    C = (0, p.N)(),
                    A = t && i,
                    j = (0, d.c)(() => {
                        (C({ to: l.AppScreen.MultivibeSendingInvitationScreen, objectType: l.DomainObjectType.Shortcut }), r.promoModal.open());
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(x().root, { [x().root_mobile]: A }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, a.jsxs)(m.$, {
                            className: (0, s.$)(x().button, { [x().button_mobile]: A }),
                            'aria-label': b({ id: 'interface-actions.create' }),
                            onClick: j,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, a.jsx)(h.b, { align: 'back', surfaceClassName: x().surface }),
                                (0, a.jsx)(h.b, {
                                    align: 'front',
                                    surfaceClassName: x().surface,
                                    children: (0, a.jsx)(_.I, { variant: 'add', size: A ? 'xxxs' : 'l', className: x().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: x().titleWrapper,
                            children: (0, a.jsx)(u.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, s.$)(x().title, { [x().title_mobile]: A }),
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.create' }),
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
        6104: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => I });
            var a = i(25839),
                s = i(33660),
                r = i(74631),
                o = i(39004),
                n = i(45162),
                l = i(91149),
                c = i(92942),
                d = i(27954),
                m = i(57549),
                _ = i(82298),
                u = i(8487),
                p = i(61493),
                v = i(69084),
                h = i(4254),
                b = i(34582),
                x = i(6323),
                C = i(97522),
                A = i(51790),
                j = i(54239),
                T = i.n(j);
            let N = (e) => {
                    let { closeToast: t, albumTitle: i, coverUri: s, isPresave: n, entityTitle: l, className: c } = e,
                        { formatMessage: d } = (0, o.A)(),
                        m = (0, r.useMemo)(
                            () => (n ? (0, a.jsx)(u.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(u.A, { id: 'notifications-info.removed-from' })),
                            [n],
                        ),
                        j = (0, r.useMemo)(
                            () => (n ? (0, a.jsx)(u.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(u.A, { id: 'notifications-info.from-collection' })),
                            [n],
                        ),
                        N = (0, r.useMemo)(
                            () =>
                                n
                                    ? d({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: l })
                                    : d({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: l }),
                            [n, l, d],
                        ),
                        f = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(h.HL, {
                                    className: T().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': p.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(u.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(h.HL, { className: T().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [l, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(C.N, {
                                            className: T().link,
                                            href: '/collection/albums?tab='.concat(b.H.UPCOMING_ALBUMS),
                                            title: String(j),
                                            children: (0, a.jsx)(h.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: j }),
                                        }),
                                    ],
                                }),
                            [l, m, j],
                        );
                    return (0, a.jsx)(A.$, {
                        className: (0, _.$)(T().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(v.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': N }) }), f] }),
                        cover: (0, a.jsx)(x.B, { className: T().image, src: s, size: 100, fit: 'cover', alt: i, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                f = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, a.jsx)(N, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                I = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, u] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, o.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(m.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        u(!0);
                        let o = await e.toggleLike();
                        (u(!1),
                            o === n.J.OK
                                ? i((0, a.jsx)(f, { upcomingAlbum: r }), { containerId: l.u.INFO })
                                : i((0, a.jsx)(m.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, p]);
                };
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
                n = i(89288),
                l = i(18412),
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
                            headerClassName: x,
                            viewAllActionLink: C,
                            artistIdWithoutLink: A,
                            withVideo: j = !0,
                            clips: T,
                            headingVariant: N,
                            className: f,
                            shouldOpenModalOnCardClick: I = !0,
                            itemCounter: g,
                            ...S
                        } = e,
                        y = (0, o.useId)(),
                        R = (0, o.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, s.$)(m().root, f),
                        ref: d,
                        ...(0, n.OZ)(S),
                        children: [
                            (0, a.jsx)(l.T, {
                                className: x,
                                labeledForId: y,
                                title: v,
                                description: h,
                                viewAllActionLink: C,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: R }),
                                headingVariant: N,
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
                                clips: T,
                                shouldOpenModalOnCardClick: I,
                                itemCounter: g,
                                ref: R,
                                'aria-labelledby': y,
                            }),
                        ],
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
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
                n = i(10749),
                l = i(50209),
                c = i(27954),
                d = i(6349),
                m = i(74756),
                _ = i(41544),
                u = i(39099),
                p = i(4073),
                v = i.n(p);
            let h = (0, s.PA)((e) => {
                var t, i;
                let { track: s, playContextParams: p } = e,
                    h = (0, l.D)({ playContextParams: p, entityId: s.entityId }),
                    {
                        settings: { isMobile: b },
                    } = (0, c.g)(),
                    x = (0, r.useCallback)(
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
                    beforeBlock: (0, a.jsx)(n.t, {
                        withIcon: !0,
                        className: v().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (i = s.chart) ? void 0 : i.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: x,
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
                n = i(71035),
                l = i(49656),
                c = i(42853),
                d = i(61777),
                m = i(57138),
                _ = i(27954),
                u = i(44806),
                p = i(39985),
                v = i(892),
                h = i(61278),
                b = i.n(h),
                x = i(13364);
            let C = (0, r.PA)((e) => {
                    let { landing: t, block: i, isIntersecting: r, forwardRef: c, onLoad: m, className: h, containerClassName: C, ...A } = e,
                        {
                            isNeededToLoad: j,
                            isLoading: T,
                            isLoaded: N,
                            isRejected: f,
                            isShimmerVisible: I,
                            isShimmerActive: g,
                            isVisible: S,
                            id: y,
                            type: R,
                            meta: L,
                            data: E,
                            hasSentAnalyticsOnLoaded: k,
                            setHasSentAnalyticsOnLoaded: w,
                            setOutdated: O,
                            setIsNeededToLoad: P,
                        } = i;
                    if ((0, p.Q)(i)) return null;
                    let M = x.D[i.type],
                        D = (0, d.f)(),
                        { settings: B, experiments: V } = (0, _.g)(),
                        U = !V.checkExperiment(u.z.WebNextVirtualSkeleton, 'on') && B.browserInfo && !B.browserInfo.isSafari;
                    (0, o.useEffect)(() => {
                        (r || !S) && j && (0, v.v)(L) && t.getBlock(i);
                    }, [i, r, j, S, t, L]);
                    let W = (0, n.c)(() => {
                        t.getBlock(i);
                    });
                    ((0, o.useEffect)(() => {
                        (N || f) && (null == m || m());
                    }, [N, f, m]),
                        (0, o.useEffect)(() => {
                            !k && N && (D(), w(!0));
                        }, [k, N, D, w]));
                    let z = (0, l.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(c)) {
                            var e;
                            return null == (e = c.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return S
                        ? (0, a.jsx)(
                              M,
                              {
                                  setIsNeededToLoad: P,
                                  setOutdated: O,
                                  isLoaded: N,
                                  isLoading: T,
                                  isShimmerVisible: I,
                                  isShimmerActive: g,
                                  isRejected: f,
                                  tracksContainerClassName: b().tracksContainer,
                                  containerClassName: (0, s.$)(b().container, b().important, C),
                                  className: (0, s.$)({ [b().container_withContentVisibility]: U && z }, h),
                                  headerClassName: b().headerContainer,
                                  meta: L,
                                  data: E,
                                  type: R,
                                  ref: c,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': i.id,
                                  'data-test-id': i.type,
                                  ...A,
                                  onRefetch: W,
                              },
                              y,
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
                        children: (0, a.jsx)(C, { ...t }),
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
            i.d(t, { W: () => g });
            var a,
                s,
                r = i(25839),
                o = i(82298),
                n = i(88204),
                l = i(74631),
                c = i(61493),
                d = i(49656),
                m = i(23818),
                _ = i(27954),
                u = i(44806),
                p = i(89288);
            let v = (e) => (0, p.a6)(e.replace('%%', '960x690_noncrop'));
            var h = i(8487),
                b = i(4254);
            function x() {
                return (x = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let C = function (e) {
                return l.createElement(
                    'svg',
                    x({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    a ||
                        (a = l.createElement(
                            'defs',
                            null,
                            l.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                l.createElement('stop', { stopColor: '#FF5C4D' }),
                                l.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                l.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            l.createElement('clipPath', { id: 'plusColorClip' }, l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    s ||
                        (s = l.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            l.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            l.createElement('path', {
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
            let T = (e) => {
                let { percent: t, className: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(j().root, i),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, r.jsx)(C, { 'aria-hidden': !0, className: j().icon }),
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
            var N = i(3656),
                f = i(15915),
                I = i.n(f);
            let g = (0, n.PA)((e) => {
                let { uri: t, withMask: i, datetime: a, coverColor: s, cashbackPercent: n } = e,
                    { experiments: h } = (0, _.g)(),
                    [b, x] = (0, l.useState)(!1),
                    C = h.checkExperiment(u.z.NewConcertsTicketRedesign, 'on') && i,
                    A = h.checkExperiment(u.z.WebNextConcertsIdentityEventType, 'on'),
                    j = (0, l.useCallback)(() => {
                        x(!0);
                    }, []),
                    f = (0, d.L)(() => {
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
                    g = (0, d.L)(() =>
                        a
                            ? (0, r.jsxs)('div', {
                                  className: (0, o.$)(I().date, { [I().date_withEventType]: A }),
                                  children: [
                                      (0, r.jsx)(m._V, {
                                          className: I().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: j,
                                      }),
                                      b &&
                                          (0, r.jsx)(N.d, {
                                              className: I().root_withEventType,
                                              dayClassName: I().day_withEventType,
                                              weekdayClassName: I().weekday_withEventType,
                                              monthClassName: I().month_withEventType,
                                              datetime: a,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    S = (0, d.L)(() =>
                        a
                            ? (0, r.jsx)(N.d, {
                                  dayClassName: I().day,
                                  weekdayClassName: (0, o.$)(I().weekday, I().important),
                                  monthClassName: I().month,
                                  className: I().date,
                                  datetime: a,
                              })
                            : null,
                    );
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(I().root, { [I().root_withMask]: C }),
                    style: f,
                    children: [
                        (0, r.jsx)(m._V, {
                            className: I().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: v,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        a && (A ? g : S),
                        A && n && (0, r.jsx)(T, { className: I().cashback, percent: n }),
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
        12714: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r, o: () => s });
            var a = i(49337);
            let s = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return s[e];
                        default:
                            return '';
                    }
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
        13364: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => oz });
            var a,
                s,
                r = i(35522),
                o = i(25839),
                n = i(74631),
                l = i.t(n, 2),
                c = i(36619),
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
                x = i(86869),
                C = i(4254),
                A = i(99835),
                j = i(4331),
                T = i(79367),
                N = i(29481),
                f = i(47009),
                I = i(52512),
                g = i(30290),
                S = i(98074),
                y = i(61561),
                R = i(85686),
                L = i(50209),
                E = i(27954),
                k = i(6323),
                w = i(62926),
                O = i(97522),
                P = i(49438),
                M = i(67974),
                D = i.n(M);
            let B = (0, _.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, u.A)(),
                    { ref: s, intersectionPropertyId: r } = (0, I.n)(),
                    n = (0, N.N)(),
                    l = (0, R.Z)(t.albumUrl),
                    d = (0, A.c)({ album: t.album, callback: l }),
                    _ = (0, f.b)(),
                    M = (0, T.P)(),
                    {
                        paywall: { modal: B },
                    } = (0, E.g)(),
                    V = (0, y.N)(),
                    { from: U } = (0, g.f)({ contextId: t.album.id, contextType: h.K.Album }),
                    { isPlaying: W, togglePlay: z } = (0, L.D)({
                        playContextParams: {
                            contextData: { type: h.K.Album, meta: { id: t.album.id }, from: U, utmLink: (0, S.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    H = (0, b.c)((e) => {
                        (t.setClicked(), n({ to: c.AppScreen.AlbumScreen }), d(e));
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
                    G = t.coverContentMode === a.TOP;
                return (0, o.jsxs)('div', {
                    className: D().root,
                    ref: s,
                    'data-intersection-property-id': r,
                    'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD,
                    children: [
                        (0, o.jsxs)(x.t, {
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
                                    children: (0, o.jsx)(k.B, {
                                        className: (0, m.$)(D().artistImage, { [D().artistImage_withTopPosition]: G }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, o.jsx)(x.t, {
                                    className: D().albumCover,
                                    radius: 'xs',
                                    'data-test-id': v.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER,
                                    children: (0, o.jsx)(O.N, {
                                        className: D().albumLink,
                                        href: t.albumUrl,
                                        onClick: H,
                                        'aria-label': F,
                                        children: (0, o.jsx)(k.B, {
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
                                    children: (0, o.jsx)(C.HL, {
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
                                        (0, o.jsx)(C.HL, {
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
                H = i(89761),
                K = {
                    1964: (e) => {
                        e.exports = H;
                    },
                },
                Y = {},
                $ = {};
            ((() => {
                (Object.defineProperty($, 'X', { value: !0 }), ($.q = void 0));
                var e = (function e(t) {
                    var i = Y[t];
                    if (void 0 !== i) return i.exports;
                    var a = (Y[t] = { exports: {} });
                    return (K[t](a, a.exports, e), a.exports);
                })(1964);
                Object.defineProperty($, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                $.X);
            var F = $.q,
                G = i(91886);
            let X = (e) => {
                    let t,
                        { callback: i, visibleTime: a, threshold: s } = e;
                    return (0, G.Gv)(
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
                        a = (0, n.useRef)(null),
                        s = (0, n.useId)(),
                        r = (0, n.useMemo)(() => {
                            if (i) return t.map(X);
                        }, [i, t]);
                    return (
                        (0, n.useEffect)(
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
                            data: l,
                            meta: c,
                            headingVariant: d,
                            className: _,
                            children: u,
                            ...p
                        } = e,
                        { intersectionPropertyId: v, ref: h } = ((e) => {
                            let { forwardedRef: t, isLoaded: i, data: a, setOutdated: s } = e,
                                { report: r, reporting: o } = null != a ? a : {},
                                { ref: l, intersectionPropertyId: c } = Z({
                                    isLoaded: i,
                                    params: (0, n.useMemo)(() => {
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
                            return { intersectionPropertyId: c, ref: F([l, t]) };
                        })({ forwardedRef: t, data: l, isLoaded: i, setOutdated: a }),
                        b = (0, n.useRef)(null);
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
                ee = (0, n.forwardRef)((e, t) => (0, o.jsx)(J, { forwardRef: t, ...e })),
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
                ei = (0, n.forwardRef)((e, t) => (0, o.jsx)(et, { forwardRef: t, ...e }));
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
                            entityName: l,
                            onClick: d,
                            albumUrl: _,
                            from: p,
                            utmLink: j,
                            coverColor: I,
                            ...g
                        } = e,
                        S = (0, R.Z)(_),
                        M = (0, T.P)(),
                        D = (0, f.b)(),
                        {
                            paywall: { modal: B },
                        } = (0, E.g)(),
                        U = (0, y.N)(),
                        { formatMessage: W } = (0, u.A)(),
                        { isPlaying: z, togglePlay: H } = (0, L.D)({
                            playContextParams: { contextData: { type: h.K.Album, meta: { id: a.id }, from: p, utmLink: j }, loadContextMeta: !0 },
                        }),
                        K = (0, b.c)(() => {
                            (null == d || d(), H());
                        }),
                        Y = (0, A.c)({ album: a, callback: S }),
                        $ = (0, A.c)({ album: a, callback: K }),
                        F = (0, N.N)(),
                        G = (0, b.c)((e) => {
                            ((0, ea.P)(e, er().ripple), e.stopPropagation(), null == d || d(), F({ to: c.AppScreen.AlbumScreen }), Y(e));
                        }),
                        X = (0, b.c)(() => {
                            if (!M()) {
                                if (U) return void B.open();
                                ($(), D(!z));
                            }
                        }),
                        Z = (0, n.useMemo)(() => {
                            let e;
                            if (I) {
                                let { h: t, s: i } = (0, V.g8)(I);
                                e = 'hsl('.concat(t, ', ').concat(i, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == a ? void 0 : a.averageColor };
                        }, [null == a ? void 0 : a.averageColor, I]),
                        Q = l ? ''.concat(l, ' ').concat(a.title) : a.title;
                    return (0, o.jsxs)(x.t, {
                        radius: 'l',
                        className: (0, m.$)(er().root, t),
                        ref: i,
                        style: Z,
                        ...(0, V.OZ)(g),
                        children: [
                            (0, o.jsx)(O.N, { href: _, className: er().paperLink, onClick: G, 'aria-label': Q }),
                            (0, o.jsx)(k.B, {
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
                                    (0, o.jsx)(C.HL, {
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
                                        (0, o.jsx)(C.HL, {
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
                                        onClick: X,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                en = (0, n.forwardRef)((e, t) => (0, o.jsx)(eo, { forwardRef: t, ...e })),
                el = (0, _.PA)((e) => {
                    let { promo: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                        { from: s } = (0, g.f)({ contextId: t.album.id, contextType: h.K.Album });
                    return (0, o.jsx)(en, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, S.Z)(t.reportingProperties),
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
                                              children: (0, o.jsx)(el, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                ed = (0, n.forwardRef)((e, t) => (0, o.jsx)(ec, { forwardRef: t, ...e }));
            var em = i(38907),
                e_ = i(83139),
                eu = i(2488),
                ep = i(26508),
                ev = i(64575),
                eh = i(17109),
                eb = i(94739),
                ex = i.n(eb);
            let eC = (e) => {
                    let {
                            artistId: t,
                            forwardRef: i,
                            isLoading: a,
                            title: s,
                            viewAllActionLink: r,
                            children: l,
                            className: d,
                            containerClassName: _,
                            headerClassName: u,
                            itemClassName: p,
                            headingVariant: v,
                            ...h
                        } = e,
                        b = (0, n.useId)(),
                        x = (0, n.useRef)(null),
                        C = (0, eh.m)({ artistId: t }),
                        A = (0, n.useCallback)(() => {
                            C(c.FromArtistScreenTo.ArtistConcertsScreen);
                        }, [C]),
                        j = (0, n.useMemo)(
                            () =>
                                (0, ep.A)(l, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, o.jsx)('div', { className: ex().concertsColumn, children: e }, t)),
                            [l],
                        );
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, m.$)(ex().root, d),
                        ...h,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: u,
                                labeledForId: b,
                                title: s,
                                viewAllActionLink: r,
                                onViewAllAction: A,
                                controls: (0, o.jsx)(z.X, { className: ex().controls, carouselRef: x }),
                                headingVariant: v,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, o.jsx)(U.F, {
                                itemClassName: (0, m.$)(ex().item, { [ex().item_singleColumn]: 2 >= n.Children.count(l) }, p),
                                className: (0, m.$)(_, { [ex().preventScroll]: a }),
                                ref: x,
                                'aria-labelledby': b,
                                children: a ? Array.from({ length: 2 }, (e, t) => (0, o.jsx)('div', { className: ex().concertsColumn, children: (0, ev.T)(2) }, t)) : j,
                            }),
                        ],
                    });
                },
                eA = (0, n.forwardRef)((e, t) => (0, o.jsx)(eC, { forwardRef: t, ...e }));
            var ej = i(35465),
                eT = i(44806);
            let eN = (0, _.PA)((e) => {
                    var t, i, a, s;
                    let {
                            forwardRef: r,
                            isShimmerVisible: n,
                            isShimmerActive: l,
                            containerClassName: m,
                            headerClassName: _,
                            meta: u,
                            data: p,
                            headingVariant: v,
                            className: h,
                            ...b
                        } = e,
                        { artist: x, concert: C, experiments: A } = (0, E.g)(),
                        j = null != (a = null != (i = x.id) ? i : C.leadArtistId) ? a : '',
                        T = A.checkExperiment(eT.z.WebNextConcertsIdentityEventType, 'on'),
                        N = T ? eu.M : e_.Z;
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
                            isLoading: n || l,
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
                                              objectsCount: n,
                                          } = (0, ej.$)({ index: t, count: null != (a = null == (i = p.items) ? void 0 : i.length) ? a : 0, itemsCountPerColumn: 2 });
                                          return (0, o.jsx)(
                                              d.B,
                                              {
                                                  objectType: c.DomainObjectType.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: r,
                                                  objectsCount: n,
                                                  children: (0, o.jsx)(em.V, { artistId: String(j), concert: e, meta: (0, o.jsx)(N, { concert: e }), shouldShowMask: T }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                ef = (0, n.forwardRef)((e, t) => (0, o.jsx)(eN, { forwardRef: t, ...e }));
            var eI = i(69084),
                eg = i(26779),
                eS = i.n(eg);
            let ey = (0, _.PA)((e) => {
                    var t, i, a;
                    let { isShimmerVisible: s, isShimmerActive: r, headerClassName: n, data: l, headingVariant: c } = e,
                        { ref: d, intersectionPropertyId: m } = (0, I.n)(),
                        { playlist: _, artists: u } = l || {},
                        { artist: v } = (0, E.g)(),
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
                        coverContainerClassName: eS().cover,
                        shimmerCoverClassName: eS().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: r,
                        headingVariant: c,
                        className: n,
                        subTitle: (0, o.jsxs)('div', {
                            className: eS().subTitle,
                            children: [
                                (0, o.jsx)(eI.q, {
                                    children: (0, o.jsx)(C.DZ, {
                                        variant: 'h4',
                                        children: (0, o.jsx)(p.A, { id: 'page.artist-pick-aria-label', values: { artistName: A } }),
                                    }),
                                }),
                                (0, o.jsx)(C.HL, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: eS().text,
                                    'aria-hidden': !0,
                                    children: (0, o.jsx)(p.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, o.jsx)(x.t, {
                                    radius: 'round',
                                    className: eS().smallCoverContainer,
                                    children: (0, o.jsx)(k.B, {
                                        fit: 'cover',
                                        src: b,
                                        size: 50,
                                        className: eS().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: h,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                A &&
                                    (0, o.jsx)(C.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: eS().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: A,
                                    }),
                            ],
                        }),
                        description: (0, o.jsx)(j.i, {
                            artists: u,
                            linkClassName: eS().artistLink,
                            spoilerClassName: eS().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, o.jsx)(p.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eR = (0, _.PA)((e) => {
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
                            children: (0, o.jsx)(ey, { ...r }),
                        }),
                    });
                }),
                eL = (0, n.forwardRef)((e, t) => (0, o.jsx)(eR, { forwardRef: t, ...e }));
            var eE = i(82967),
                ek = i(3718),
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
                            data: n,
                            headerClassName: l,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (function () {
                            var e;
                            let { artist: t, concert: i } = (0, E.g)();
                            return null != (e = t.id) ? e : i.leadArtistId;
                        })(),
                        { from: b, utmLink: x } = (0, g.f)({ contextType: h.K.Artist, contextId: v });
                    return null === v
                        ? null
                        : (0, o.jsx)(ew.$, {
                              className: u,
                              ref: t,
                              shimmer: (0, o.jsx)(eO.D, { variant: ek.X.PLAYLIST, isActive: a }),
                              maxColumnsCount: ew.D.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              carouselClassName: s,
                              carouselItemClassName: (0, m.$)(eM().item, eM().important),
                              blockHeaderClassName: l,
                              blockHeaderTitle: r.title,
                              blockHeaderDescription: r.description,
                              blockHeaderHeadingVariant: _,
                              viewAllActionLink: r.viewAllActionLink,
                              ...p,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) => {
                                            var i;
                                            let { objectPosX: a, objectPosY: s, objectsCount: r } = (0, ej.$)({ index: t, count: n.items.length });
                                            return (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectId: e.id,
                                                    objectType: c.DomainObjectType.Track,
                                                    objectPosX: a,
                                                    objectPosY: s,
                                                    objectsCount: r,
                                                    children: (0, o.jsx)(eE.K, {
                                                        track: e,
                                                        playContextParams:
                                                            ((i = e.id),
                                                            n && v
                                                                ? {
                                                                      contextData: { type: h.K.Artist, meta: { id: v }, from: b, utmLink: x },
                                                                      queueParams: { index: t, entityId: i },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: h.K.Artist, meta: { id: '' }, from: b, utmLink: x } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                eB = (0, n.forwardRef)((e, t) => (0, o.jsx)(eD, { forwardRef: t, ...e }));
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
                        e.exports = l;
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
                eG = (e) => {
                    var t, i;
                    let { data: a, isLoaded: s, forwardedRef: r, setOutdated: o } = e,
                        { report: l, reporting: c } = null != a ? a : {},
                        d = null == c ? void 0 : c.blockRender.url,
                        m = null != (t = null == c ? void 0 : c.blockRender.timeMs) ? t : 0,
                        _ = null == c ? void 0 : c.blockImpression.url,
                        u = null != (i = null == c ? void 0 : c.blockImpression.timeMs) ? i : 2100,
                        p = (0, b.c)(o),
                        { ref: v, intersectionPropertyId: h } = Z({
                            isLoaded: s,
                            params: (0, n.useMemo)(
                                () => [
                                    {
                                        threshold: 0,
                                        visibleTime: m,
                                        callback: () => {
                                            d && (null == l || l(d));
                                        },
                                    },
                                    {
                                        threshold: 0.5,
                                        visibleTime: u,
                                        callback: () => {
                                            (_ && (null == l || l(_)), p());
                                        },
                                    },
                                ],
                                [d, m, _, u, l, p],
                            ),
                        });
                    return { ref: F([v, r]), intersectionPropertyId: h };
                },
                eX = (e) => {
                    let { promo: t } = e,
                        { paywall: i } = (0, E.g)(),
                        a = (0, R.Z)(t.albumUrl),
                        s = (0, A.c)({ album: t.album, callback: a }),
                        r = (0, N.N)(),
                        o = (0, f.b)(),
                        n = (0, T.P)(),
                        l = (0, y.N)(),
                        { from: d } = (0, g.f)({ contextId: t.album.id, contextType: h.K.Album }),
                        { isPlaying: m, togglePlay: _ } = (0, L.D)({
                            playContextParams: {
                                contextData: { type: h.K.Album, meta: { id: t.album.id }, from: d, utmLink: (0, S.Z)(t.reportingProperties) },
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
                        x = (0, b.c)(() => {
                            if (!n()) {
                                if (l) return void i.modal.open();
                                (v(), o(!m));
                            }
                        });
                    return (0, eK.L)(() => ({ isPlaying: m, handleNavigate: u, handlePlayButtonClick: x }));
                },
                eZ = (e) => {
                    let { promo: t } = e,
                        { adImpressions: i, reportImpression: a } = t,
                        { url: s, timeMs: r } = i,
                        { ref: o } = Z({
                            isLoaded: !0,
                            params: (0, n.useMemo)(
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
                eQ = (e) => {
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
            var eq = i(89133),
                eJ = i.n(eq);
            let e0 = (0, _.PA)((e) => {
                let { promo: t, isActive: i } = e,
                    s = (0, n.useMemo)(() => eQ(t.averageColor), [t.averageColor]);
                return (0, o.jsx)('div', {
                    className: (0, m.$)(eJ().root, { [eJ().root_active]: i }),
                    style: s,
                    children: (0, o.jsx)('div', {
                        className: eJ().coverContainer,
                        children: (0, o.jsx)(k.B, {
                            className: (0, m.$)(eJ().cover, { [eJ().cover_withTopPosition]: t.coverContentMode === a.TOP }),
                            src: t.cover.uri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 600,
                            fit: 'cover',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var e1 = i(16789),
                e2 = i.n(e1);
            let e8 = (0, _.PA)((e) => {
                let { promo: t, isActive: i } = e;
                return (0, o.jsxs)('div', {
                    className: (0, m.$)(e2().root, { [e2().root_active]: i }),
                    children: [
                        (0, o.jsxs)('div', {
                            className: e2().titleContainer,
                            children: [
                                (0, o.jsx)(C.DZ, { variant: 'div', size: 'xs', lineClamp: 2, className: e2().title, children: t.album.title }),
                                t.album.explicitDisclaimer &&
                                    (0, o.jsx)(w.N, {
                                        containerClassName: e2().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: e2().artists,
                            children: [
                                t.avatarArtists.length > 0 &&
                                    (0, o.jsx)('div', {
                                        className: e2().avatars,
                                        'aria-hidden': !0,
                                        children: t.avatarArtists.map((e) =>
                                            (0, o.jsx)(k.B, { className: e2().avatar, src: e.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                                        ),
                                    }),
                                (0, o.jsx)(j.i, {
                                    className: e2().artistNames,
                                    captionClassName: e2().artistCaption,
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
            var e3 = i(27395),
                e4 = i.n(e3);
            let e9 = (0, _.PA)((e) => {
                let { promo: t, isActive: i, isScrollAnimationEnabled: a } = e,
                    { formatMessage: s } = (0, u.A)(),
                    r = s({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    { ref: n, intersectionPropertyId: l } = (0, I.n)(),
                    { ref: c } = eZ({ promo: t }),
                    { isPlaying: d, handleNavigate: _, handlePlayButtonClick: p } = eX({ promo: t }),
                    h = F([n, c]),
                    x = (0, b.c)((e) => {
                        a && !i && e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center' });
                    });
                return (0, o.jsxs)('div', {
                    ref: h,
                    className: (0, m.$)(e4().root, { [e4().root_active]: i }),
                    onFocus: x,
                    'data-intersection-property-id': l,
                    'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, o.jsxs)(O.N, {
                            className: e4().cardLink,
                            href: t.albumUrl,
                            onClick: _,
                            'aria-label': r,
                            'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, o.jsx)(e0, { promo: t, isActive: i }), (0, o.jsx)(e8, { promo: t, isActive: i })],
                        }),
                        (0, o.jsx)(P.D, {
                            className: e4().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            size: 'm',
                            iconSize: 'xs',
                            isPlaying: d,
                            onClick: p,
                            disabled: !t.album.isAvailable,
                        }),
                    ],
                });
            });
            var e6 = i(28342),
                e7 = i.n(e6);
            let e5 = (0, _.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: s,
                            setOutdated: r,
                            meta: l,
                            className: _,
                            containerClassName: u,
                            headerClassName: p,
                            headingVariant: h,
                            ...x
                        } = e,
                        {
                            carouselRef: C,
                            activeIndex: A,
                            isScrollAnimationEnabled: j,
                            onScroll: T,
                        } = ((e) => {
                            let t = (0, n.useRef)(null),
                                i = (0, n.useRef)(null),
                                [a, s] = (0, n.useState)(0),
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
                                                n = ((e, t) => {
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
                                                let i = n.itemStyles[t];
                                                if (e instanceof HTMLElement && i) for (let [t, a] of Object.entries(i)) e.style.setProperty(t, a);
                                            }),
                                                n.activeIndex !== a && s(n.activeIndex));
                                        }));
                                });
                            return (
                                eH(o, t),
                                (0, n.useEffect)(
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
                        { ref: N, intersectionPropertyId: f } = eG({ data: a, isLoaded: s, setOutdated: r, forwardedRef: i });
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(e7().root, _),
                        ref: N,
                        'data-intersection-property-id': f,
                        ...(0, V.OZ)(x),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(e7().header, p),
                                title: l.title,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: e7().controls, carouselRef: C }),
                            }),
                            (0, o.jsx)(U.F, {
                                ref: C,
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
                                                      children: (0, o.jsx)(e9, { promo: e, isActive: t === A, isScrollAnimationEnabled: j }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                te = (0, n.forwardRef)((e, t) => (0, o.jsx)(e5, { forwardRef: t, ...e }));
            var tt = i(15541),
                ti = i.n(tt);
            let ta = (0, _.PA)((e) => {
                let { promo: t } = e;
                return (0, o.jsx)('div', {
                    className: ti().root,
                    children: (0, o.jsx)('div', {
                        className: ti().coverContainer,
                        children: (0, o.jsx)(k.B, {
                            className: (0, m.$)(ti().cover, { [ti().cover_withTopPosition]: t.coverContentMode === a.TOP }),
                            src: t.cover.uri,
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
            var ts = i(67467),
                tr = i(48806),
                to = i.n(tr);
            let tn = (0, _.PA)((e) => {
                let { promo: t } = e,
                    i = (0, n.useRef)(null),
                    { isTruncated: a } = (0, ts.W)(i, 'horizontal');
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: to().avatars,
                            'aria-hidden': !0,
                            children: t.avatarArtists.map((e) =>
                                (0, o.jsx)(k.B, { className: to().avatar, src: e.coverUri, size: 100, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                            ),
                        }),
                        (0, o.jsx)(j.i, {
                            className: to().artistNames,
                            captionClassName: to().artistCaption,
                            artists: t.artists,
                            captionSize: 'm',
                            withLink: !1,
                            withCustomTooltip: !1,
                        }),
                        (0, o.jsxs)('div', {
                            className: to().titleContainer,
                            children: [
                                (0, o.jsx)(C.DZ, {
                                    ref: i,
                                    className: (0, m.$)(to().title, { [to().title_truncated]: a }),
                                    variant: 'div',
                                    size: 'xs',
                                    children: t.album.title,
                                }),
                                t.album.explicitDisclaimer &&
                                    (0, o.jsx)(w.N, {
                                        containerClassName: to().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tl = i(7272),
                tc = i.n(tl);
            let td = (0, _.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, u.A)(),
                    { ref: a, intersectionPropertyId: s } = (0, I.n)(),
                    { ref: r } = eZ({ promo: t }),
                    { isPlaying: l, handleNavigate: c, handlePlayButtonClick: d } = eX({ promo: t }),
                    m = i({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    _ = (0, n.useMemo)(() => eQ(t.averageColor), [t.averageColor]),
                    p = F([a, r]),
                    h = (0, b.c)((e) => {
                        e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    });
                return (0, o.jsxs)('div', {
                    ref: p,
                    className: tc().root,
                    style: _,
                    onFocus: h,
                    'data-intersection-property-id': s,
                    'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, o.jsx)(O.N, {
                            className: tc().cardLink,
                            href: t.albumUrl,
                            onClick: c,
                            'aria-label': m,
                            'data-test-id': v.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                        }),
                        (0, o.jsx)(ta, { promo: t }),
                        (0, o.jsxs)('div', {
                            className: tc().info,
                            children: [
                                (0, o.jsx)(tn, { promo: t }),
                                (0, o.jsx)(P.D, {
                                    className: tc().playButton,
                                    buttonVariant: 'default',
                                    color: 'primary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    iconSize: 'xxs',
                                    iconClassName: tc().playIcon,
                                    isPlaying: l,
                                    onClick: d,
                                    disabled: !t.album.isAvailable,
                                    children: i(l ? { id: 'player-actions.pause' } : { id: 'player-actions.listen' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var tm = i(69778),
                t_ = i.n(tm);
            let tu = (0, _.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: s,
                            setOutdated: r,
                            meta: l,
                            className: _,
                            containerClassName: u,
                            headerClassName: p,
                            headingVariant: h,
                            ...x
                        } = e,
                        { carouselRef: C, onScroll: A } = ((e) => {
                            let t = (0, n.useRef)(null),
                                i = (0, n.useRef)(null),
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
                                                n = a.getBoundingClientRect().left + a.clientLeft + parseFloat(s.paddingLeft),
                                                l = Array.from(a.children),
                                                c = l.map((e) => e.getBoundingClientRect()),
                                                d = c[Math.max(0, l.length - r)],
                                                m = Math.max(0, (null != (e = null == d ? void 0 : d.left) ? e : n) - n + o);
                                            l.forEach((e, t) => {
                                                var i;
                                                let a = c[t];
                                                if (!(e instanceof HTMLElement) || !(null == a ? void 0 : a.width)) return;
                                                let s = eF(Math.min(a.left - n + o, m) - o, a.width);
                                                e.style.setProperty('--card-offset', null != (i = s['--cover-offset']) ? i : null);
                                            });
                                        }));
                                });
                            return (
                                eH(s, t),
                                (0, n.useEffect)(
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
                        { ref: j, intersectionPropertyId: T } = eG({ data: a, isLoaded: s, setOutdated: r, forwardedRef: i });
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(t_().root, _),
                        ref: j,
                        'data-intersection-property-id': T,
                        ...(0, V.OZ)(x),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(t_().header, p),
                                title: l.title,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: t_().controls, carouselRef: C }),
                            }),
                            (0, o.jsx)(U.F, {
                                ref: C,
                                className: (0, m.$)(t_().carousel, u),
                                itemClassName: t_().item,
                                onScroll: A,
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
                                                      children: (0, o.jsx)(td, { promo: e }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                tp = (0, n.forwardRef)((e, t) => (0, o.jsx)(tu, { forwardRef: t, ...e }));
            var tv = i(76939),
                th = i(19412);
            let tb = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: l,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eK.L)(() =>
                            i || !l
                                ? (0, o.jsx)(th.V, { className: s, isActive: a })
                                : (0, o.jsx)(d.B, {
                                      objectType: c.DomainObjectType.Album,
                                      objectId: String(l.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(tv.a, { className: s, album: l.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [(0, o.jsx)(W.T, { className: r, title: n.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                tx = (0, n.forwardRef)((e, t) => (0, o.jsx)(tb, { forwardRef: t, ...e }));
            var tC = i(23782);
            let tA = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: l,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eK.L)(() =>
                            i || !l
                                ? (0, o.jsx)(th.V, { className: s, isActive: a })
                                : (0, o.jsx)(d.B, {
                                      objectType: c.DomainObjectType.UpcomingAlbum,
                                      objectId: String(l.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(tC.M, { className: s, upcomingAlbum: l.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [(0, o.jsx)(W.T, { className: r, title: n.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                tj = (0, n.forwardRef)((e, t) => (0, o.jsx)(tA, { forwardRef: t, ...e }));
            var tT = i(8543),
                tN = i(19e3),
                tf = i(43478);
            let tI = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: r,
                            data: n,
                            headerClassName: l,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        { from: p, utmLink: v } = (0, g.f)({ contextType: h.K.Playlist, contextId: null == n ? void 0 : n.playlist.id }),
                        b = (0, tf.i)({ playlistId: null == n ? void 0 : n.playlist.id });
                    return (0, o.jsx)(tN._, {
                        sourceContextData: b,
                        children: (0, o.jsx)(ew.$, {
                            className: _,
                            ref: t,
                            shimmer: (0, o.jsx)(eO.D, { variant: ek.X.PLAYLIST, isActive: a }),
                            maxColumnsCount: ew.D.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            carouselClassName: s,
                            blockHeaderClassName: l,
                            blockHeaderTitle: r.title,
                            blockHeaderDescription: r.description,
                            blockHeaderHeadingVariant: m,
                            viewAllActionLink: r.viewAllActionLink,
                            ...u,
                            children:
                                null == n
                                    ? void 0
                                    : n.items.map((e, t) => {
                                          let { objectPosX: i, objectPosY: a, objectsCount: s } = (0, ej.$)({ index: t, count: n.items.length });
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
                                                          n
                                                              ? {
                                                                    contextData: { type: h.K.Playlist, meta: { id: n.playlist.id }, from: p, utmLink: v },
                                                                    queueParams: { index: n.items.findIndex((t) => t.data.id === e), entityId: e },
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
                tg = (0, n.forwardRef)((e, t) => (0, o.jsx)(tI, { forwardRef: t, ...e }));
            var tS = i(7341);
            let ty = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                tR = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, meta: r, containerClassName: n, headerClassName: l, className: c, ...d } = e;
                    return (0, o.jsx)(tS.K, {
                        className: c,
                        ref: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        clips: ty(null == s ? void 0 : s.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: n,
                        headerClassName: l,
                        ...d,
                    });
                },
                tL = (0, n.forwardRef)((e, t) => (0, o.jsx)(tR, { forwardRef: t, ...e }));
            var tE = i(66284),
                tk = i(51770),
                tw = i.n(tk);
            let tO = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: n } = e,
                        { formatMessage: l } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: tw().root,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': l({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: n,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(tw().text, r), children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                tP = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (null == l ? void 0 : l.isEmptyBlock)
                        ? (0, o.jsx)(tO, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
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
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: m,
                              children:
                                  null == l
                                      ? void 0
                                      : l.items.map((e, t) =>
                                            (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: l.items.length,
                                                    children: (0, o.jsx)(tv.a, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                tM = (0, n.forwardRef)((e, t) => (0, o.jsx)(tP, { forwardRef: t, ...e }));
            var tD = i(98436),
                tB = i(5867),
                tV = i(26742),
                tU = i(95388),
                tW = i(79396),
                tz = i(9931),
                tH = i(79677),
                tK = i.n(tH),
                tY = i(58958),
                t$ = i(2277),
                tF = i.n(t$);
            let tG = (e) => {
                    let { tab: t, areBothTabsEmpty: i } = e,
                        a = (0, n.useMemo)(() => {
                            switch (t) {
                                case tY.n.ALBUM:
                                    return (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-albums' });
                                case tY.n.PRESAVED_ALBUM:
                                    return (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, o.jsx)('div', { className: (0, m.$)(tF().root, { [tF().root_oneEmptyTab]: !i, [tF().root_twoEmptyTabs]: i }), children: a });
                },
                tX = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tV.N)(),
                        b = (0, n.useId)(),
                        x = (0, n.useRef)(null),
                        C = (0, n.useId)(),
                        A = ''.concat(b, ' ').concat(b, '-description'),
                        j = (0, tB.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        T = (0, n.useMemo)(() => {
                            var e;
                            return (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.items.length) === 0;
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        N = (0, n.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              !(null == _ ? void 0 : _.areBothTabsEmpty) &&
                                                  (0, o.jsx)(U.F, {
                                                      className: (0, m.$)(tK().carouselEmpty, s),
                                                      itemClassName: (0, m.$)(tK().item, tK().important),
                                                      tabIndex: -1,
                                                      children: (0, tU.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, o.jsx)(tG, { tab: e.type, areBothTabsEmpty: null == _ ? void 0 : _.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, o.jsx)(U.F, {
                                          ref: x,
                                          itemClassName: (0, m.$)(tK().item, tK().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: e.items.map((t, i) => {
                                              switch (t.type) {
                                                  case tD._.ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          d.B,
                                                          {
                                                              objectType: c.DomainObjectType.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(tv.a, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case tD._.PRESAVED_ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          d.B,
                                                          {
                                                              objectType: c.DomainObjectType.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(tC.M, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [A, s, null == _ ? void 0 : _.areBothTabsEmpty],
                        ),
                        f = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: x,
                                          itemClassName: (0, m.$)(tK().item, tK().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, tU.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(tB.Kp, { name: t, value: j.value, elementId: C, className: tK().tabPanel, children: N(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, C, N],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(tK().root, p, { [tK().root_withControls]: !T }),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(l.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, tK().header, tK().important),
                                    title: l.title,
                                    description: l.description,
                                    labeledForId: b,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: tK().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!l.description,
                                }),
                            }),
                            (0, o.jsx)(tz.wI, {
                                className: (0, m.$)(s, tK().tabCarousel, tK().important),
                                isShimmerVisible: i,
                                elementId: C,
                                shimmer: (0, o.jsx)(tz.zr, { isActive: a, className: (0, m.$)(s, tK().tabCarousel, tK().important), shimmerClassName: tK().tabShimmer }),
                                'aria-labelledby': b,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(tW.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, m.$)(tK().tab, tK().important) }, e.id),
                                          ),
                            }),
                            f,
                        ],
                    });
                }),
                tZ = (0, n.forwardRef)((e, t) => (0, o.jsx)(tX, { forwardRef: t, ...e }));
            var tQ = i(84058),
                tq = i(72096),
                tJ = i.n(tq);
            let t0 = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r } = e,
                        { formatMessage: n } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: tJ().root,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(tJ().text, r), children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                t1 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: n,
                        meta: l,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return (null == m ? void 0 : m.isEmptyBlock)
                        ? (0, o.jsx)(t0, {
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          })
                        : (0, o.jsx)(tE.O, {
                              ...u,
                              className: n,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
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
                                                    children: (0, o.jsx)(tQ.a, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                t2 = (0, n.forwardRef)((e, t) => (0, o.jsx)(t1, { forwardRef: t, ...e }));
            var t8 = i(14693),
                t3 = i(23818),
                t4 = i(86209),
                t9 = i(40110),
                t6 = i(20258),
                t7 = i(87201),
                t5 = i(5668),
                ie = i(18284),
                it = i(6349),
                ii = i(22318),
                ia = i.n(ii);
            let is = (e) => {
                    var t;
                    let { item: i } = e,
                        a = (0, b.c)((e) => {
                            (0, ea.P)(e, ia().ripple);
                        });
                    return (0, o.jsxs)(O.N, {
                        href: i.data.viewAllActionLink,
                        className: (0, m.$)(ia().item, ia().menuItem),
                        onClick: a,
                        children: [
                            (0, o.jsx)(t3._V, {
                                src: null == (t = i.data.cover) ? void 0 : t.uri,
                                className: ia().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, o.jsx)(C.HL, { className: ia().text, variant: 'div', type: 'entity', size: 'm', weight: 'medium', lineClamp: 2, children: i.data.title }),
                        ],
                    });
                },
                ir = (0, _.PA)((e) => {
                    let { item: t, artistId: i } = e,
                        [a, s] = (0, n.useState)(!1),
                        { state: r, setState: l } = (0, t8.e)(!1),
                        c = (0, T.P)(),
                        { freeAccess: d } = (0, E.g)(),
                        m = (0, f.b)(),
                        _ = ''.concat(t9.U.ARTIST, '-').concat(i),
                        {
                            isPlaying: u,
                            togglePlay: p,
                            isCurrent: v,
                        } = (0, t7.B)({ seeds: t.data.seeds, pageIdForFrom: t6._Q.RADIO, blockIdForFrom: _, parentContextId: i }),
                        h = (0, b.c)(async () => (d.isVibeStartRestricted ? void l(!0) : p())),
                        x = (0, b.c)(() => {
                            c() ||
                                (s(!0),
                                h().finally(() => {
                                    s(!1);
                                }),
                                m(!u));
                        }),
                        A = (0, b.c)((e) => {
                            ((0, ea.P)(e, ia().ripple), x());
                        }),
                        j = (0, eK.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, o.jsx)(t4.n, { agent: t.data.agent, isCurrent: v, isPlaying: u, onPlayButtonClick: x, playButtonIconSize: 'm' })
                                : (0, o.jsx)(it.q, {
                                      isCurrent: v,
                                      isPlaying: u,
                                      isAvailable: !0,
                                      isPlayButtonLoading: a,
                                      onPlayButtonClick: x,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        N = (0, n.useCallback)(
                            () =>
                                (0, o.jsxs)(ie.C, {
                                    className: ia().item,
                                    onClick: A,
                                    children: [
                                        j,
                                        (0, o.jsx)(C.HL, {
                                            className: ia().text,
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
                    return (0, o.jsx)(t5.S, {
                        isEnabled: d.isVibeStartRestricted,
                        isOpened: r,
                        onOpenChange: l,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: N,
                    });
                }),
                io = (e) => {
                    let { items: t, className: i, artistId: a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, m.$)(ia().root, i),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case tD._.MENU_ITEM:
                                    return (0, o.jsx)(is, { item: e }, e.key);
                                case tD._.WAVE_AGENT_ITEM:
                                    return (0, o.jsx)(ir, { item: e, artistId: a }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var il = i(23976),
                ic = i(12704),
                id = i.n(ic);
            let im = (e) => {
                    let { isActive: t, itemClassName: i, actionItemClassName: a } = e;
                    return (0, o.jsxs)('div', {
                        className: id().root,
                        children: [
                            (0, o.jsx)(th.V, { isActive: t, className: i, round: !0, centered: !0 }),
                            (0, o.jsxs)('div', {
                                className: (0, m.$)(id().actionItems, a),
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: id().actionItem,
                                        children: [
                                            (0, o.jsx)(il.W, { isActive: t, className: id().actionCover, radius: 's' }),
                                            (0, o.jsxs)('div', {
                                                className: id().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(il.W, { isActive: t, className: (0, m.$)(id().actionText, id().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(il.W, { isActive: t, className: id().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: id().actionItem,
                                        children: [
                                            (0, o.jsx)(il.W, { isActive: t, className: id().actionCover, radius: 'round' }),
                                            (0, o.jsxs)('div', {
                                                className: id().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(il.W, { isActive: t, className: (0, m.$)(id().actionText, id().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(il.W, { isActive: t, className: id().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                i_ = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, i) => (0, o.jsx)(im, { ...t }, i));
                };
            var iu = i(91631),
                ip = i.n(iu);
            let iv = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: l,
                            className: _,
                            meta: p,
                            data: v,
                            headingVariant: h,
                            ...b
                        } = e,
                        { formatMessage: x } = (0, u.A)(),
                        C = (0, n.useRef)(null);
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, m.$)(ip().root, _),
                        ...(0, V.OZ)(b),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: l,
                                title: p.title,
                                description: p.description,
                                viewAllActionLink: p.viewAllActionLink,
                                headingVariant: h,
                                controls: (0, o.jsx)(z.X, { className: ip().controls, carouselRef: C }),
                            }),
                            (0, o.jsx)(U.F, {
                                className: r,
                                ref: C,
                                children: a
                                    ? i_({
                                          isActive: s,
                                          itemClassName: (0, m.$)(ip().item, ip().important),
                                          actionItemClassName: (0, m.$)(ip().actionItem, ip().important),
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
                                                        className: ip().itemContainer,
                                                        'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, o.jsx)(tQ.a, { className: (0, m.$)(ip().item, ip().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, o.jsx)(io, {
                                                                className: (0, m.$)(ip().actionItem, ip().important),
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
                ih = (0, n.forwardRef)((e, t) => (0, o.jsx)(iv, { forwardRef: t, ...e }));
            var ib = i(54475),
                ix = i.n(ib);
            let iC = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: n } = e,
                        { formatMessage: l } = (0, u.A)();
                    return (0, o.jsxs)('div', {
                        className: ix().root,
                        'data-test-id': v.e8.landing.COLLECTION_CLIPS,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': l({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: n,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)(C.HL, {
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
                iA = (e) => {
                    let { forwardRef: t, containerClassName: i, headerClassName: a, meta: s, data: r, headingVariant: n, ...l } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, o.jsx)(iC, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: i,
                              headerClassName: a,
                              headingVariant: n,
                          })
                        : (0, o.jsx)(tL, { ref: t, meta: s, data: r, containerClassName: i, headerClassName: a, headingVariant: n, ...l });
                },
                ij = (0, n.forwardRef)((e, t) => (0, o.jsx)(iA, { forwardRef: t, ...e }));
            var iT = i(41707),
                iN = i(74749);
            let iI = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, n.useMemo)(() => {
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
                            return (null == e || e.unshift((0, o.jsx)(iN.B, {}, 'create-playlist-card')), e);
                        }, [null == m ? void 0 : m.items]);
                    return (0, o.jsx)(tE.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children: v,
                    });
                }),
                ig = (0, n.forwardRef)((e, t) => (0, o.jsx)(iI, { forwardRef: t, ...e })),
                iS = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: n,
                            className: l,
                            meta: m,
                            data: _,
                            headingVariant: p,
                            ...b
                        } = e,
                        { from: x } = (0, g.f)(),
                        { formatMessage: C } = (0, u.A)(),
                        A = Array.isArray(null == _ ? void 0 : _.rawTracks)
                            ? C({ id: 'entity-names.number-of-tracks' }, { counter: null == _ ? void 0 : _.rawTracks.length })
                            : m.description;
                    return (0, o.jsx)(ew.$, {
                        className: l,
                        shimmer: (0, o.jsx)(eO.D, { variant: ek.X.PLAYLIST, isActive: a }),
                        'data-test-id': v.e8.landing.COLLECTION_DOWNLOADED_TRACKS,
                        maxColumnsCount: ew.D.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        blockHeaderClassName: n,
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
                                          { objectPosX: a, objectPosY: s, objectsCount: n } = (0, ej.$)({ index: t, count: _.items.length });
                                      return (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Track,
                                              objectId: e.id,
                                              objectPosX: a,
                                              objectPosY: s,
                                              objectsCount: n,
                                              children: (0, o.jsx)(eE.K, {
                                                  track: e,
                                                  playContextParams:
                                                      ((i = e.id),
                                                      {
                                                          contextData: { type: h.K.Various, meta: { id: r.t.COLLECTION_DOWNLOADED_TRACKS }, from: x },
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
                iy = (0, n.forwardRef)((e, t) => (0, o.jsx)(iS, { forwardRef: t, ...e }));
            var iR = i(738);
            let iL = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) => {
                                      switch (e.type) {
                                          case tD._.TRACK_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(iR.w, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case tD._.LIKED_PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case tD._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(tv.a, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                iE = (0, n.forwardRef)((e, t) => (0, o.jsx)(iL, { forwardRef: t, ...e })),
                ik = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: l.items.length,
                                              children: (0, o.jsx)(iT.B, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                iw = (0, n.forwardRef)((e, t) => (0, o.jsx)(ik, { forwardRef: t, ...e }));
            var iO = i(12288),
                iP = i(36573),
                iM = i.n(iP),
                iD = i(45547),
                iB = i.n(iD);
            let iV = (e) => {
                    let { className: t } = e;
                    return (0, o.jsx)('div', {
                        className: (0, m.$)(iB().root, t),
                        'data-test-id': v.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        children: (0, o.jsx)(p.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                iU = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tV.N)(),
                        b = (0, n.useId)(),
                        x = (0, n.useRef)(null),
                        C = (0, n.useId)(),
                        A = ''.concat(b, ' ').concat(b, '-description'),
                        j = (0, tB.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return (
                                (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.type) !== iO.l.PLAYLIST_CREATED_TAB &&
                                (null == _ || null == (t = _.tabs[j.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        N = (0, n.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== iO.l.PLAYLIST_CREATED_TAB)
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)(U.F, {
                                                className: (0, m.$)(iM().carouselEmpty, s),
                                                itemClassName: (0, m.$)(iM().item, iM().important),
                                                tabIndex: -1,
                                                children: (0, tU.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, o.jsx)(iV, {}),
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
                                    e.type === iO.l.PLAYLIST_CREATED_TAB && t.unshift((0, o.jsx)(iN.B, { className: iM().createPlaylistCard }, 'create-playlist-card')),
                                    (0, o.jsx)(U.F, { ref: x, itemClassName: (0, m.$)(iM().item, iM().important), className: s, 'aria-labelledby': A, children: t })
                                );
                            },
                            [A, s],
                        ),
                        f = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: x,
                                          itemClassName: (0, m.$)(iM().item, iM().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, tU.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(tB.Kp, { name: t, value: j.value, elementId: C, className: iM().tabPanel, children: N(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, C, N],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(iM().root, p, { [iM().root_withControls]: !T }),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(l.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, iM().header, iM().important),
                                    title: l.title,
                                    description: l.description,
                                    labeledForId: b,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: iM().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!l.description,
                                }),
                            }),
                            (0, o.jsx)(tz.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, iM().tabCarousel, iM().important),
                                elementId: C,
                                shimmer: (0, o.jsx)(tz.zr, { isActive: a, className: (0, m.$)(s, iM().tabCarousel, iM().important), shimmerClassName: iM().tabShimmer }),
                                'aria-labelledby': b,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(tW.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, m.$)(iM().tab, iM().important) }, e.id),
                                          ),
                            }),
                            f,
                        ],
                    });
                }),
                iW = (0, n.forwardRef)((e, t) => (0, o.jsx)(iU, { forwardRef: t, ...e }));
            var iz = i(56629),
                iH = i(66738),
                iK = i(18051),
                iY = i(13376),
                i$ = i.n(iY);
            let iF = { [iz._.UP]: 'chartUp', [iz._.DOWN]: 'chartDown', [iz._.SAME]: 'chartSame', [iz._.NEW]: 'chartNew' },
                iG = (0, _.PA)((e) => {
                    let { artist: t, position: i, progress: a, listenTimeSeconds: s, className: r } = e,
                        { formatMessage: n } = (0, u.A)(),
                        l = (0, iK.U)(s, n),
                        c = a ? iF[a] : null,
                        d = c
                            ? (0, o.jsx)(iH.I, { variant: c, size: 'xxs', className: (0, m.$)(i$().progressIcon, i$()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        _ = (0, eK.L)(() =>
                            void 0 !== i
                                ? (0, o.jsxs)('div', {
                                      className: i$().positionIndicator,
                                      children: [
                                          (0, o.jsx)(C.HL, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: i }),
                                          1 === i && (0, o.jsx)(iH.I, { variant: 'crown', size: 'xxs', className: i$().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== i && d,
                                      ],
                                  })
                                : void 0,
                        ),
                        p = (0, eK.L)(() => (0, o.jsx)(C.HL, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: i$().listenTime, children: l }));
                    return (0, o.jsx)(tQ.a, { artist: t, className: r, topTitleElement: _, bottomTitleElement: p, contentLinesCount: 3 });
                }),
                iX = (0, _.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: n,
                        meta: l,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return i || (null == m ? void 0 : m.items.length)
                        ? (0, o.jsx)(tE.O, {
                              ...u,
                              className: n,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
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
                        : (0, o.jsx)(t0, {
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          });
                }),
                iZ = (0, n.forwardRef)((e, t) => (0, o.jsx)(iX, { forwardRef: t, ...e }));
            var iQ = i(27089),
                iq = i(97952),
                iJ = i(25793),
                i0 = i.n(iJ);
            let i1 = (0, _.PA)((e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: l, isShimmerActive: c, headingVariant: d = 'h2', ..._ } = e,
                        {
                            settings: { isMobile: u },
                            freeAccess: v,
                        } = (0, E.g)(),
                        { pageId: h } = (0, iq.$)(),
                        { blockIdForFrom: b } = (0, tV.N)(),
                        [x, A] = (0, n.useState)(!1),
                        { isPlaying: j, togglePlay: T } = (0, t7.B)({
                            seeds: null != (t = null == s ? void 0 : s.vibe.seeds) ? t : [],
                            pageIdForFrom: h,
                            blockIdForFrom: b,
                        }),
                        N = (0, f.b)(),
                        I = (0, n.useCallback)(() => {
                            v.isVibeStartRestricted || (T(), N(!j));
                        }, [v.isVibeStartRestricted, T, N, j]),
                        g = (0, n.useCallback)(
                            () =>
                                (0, o.jsx)(P.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: j,
                                    onClick: I,
                                    className: i0().playButton,
                                    children: (0, o.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                            [I, j],
                        ),
                        S = (0, eK.L)(() =>
                            (0, o.jsx)(t5.S, {
                                isEnabled: v.isVibeStartRestricted,
                                isOpened: x,
                                onOpenChange: A,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == s ? void 0 : s.vibe.stationType,
                                renderChildren: g,
                            }),
                        ),
                        y = (0, eK.L)(() =>
                            l || !s
                                ? (0, o.jsxs)('div', {
                                      className: i0().root,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: i0().shimmerContainer,
                                              children: [
                                                  (0, o.jsx)(il.W, { isActive: c, radius: 'xs', className: (0, m.$)(i0().coverShimmer, i0().item, i0().important) }),
                                                  u && (0, o.jsx)(il.W, { radius: 'l', isActive: c, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !u &&
                                              (0, o.jsxs)('div', {
                                                  className: i0().container,
                                                  children: [
                                                      (0, o.jsx)(il.W, { radius: 'l', isActive: c, width: 300, height: 32 }),
                                                      (0, o.jsx)(il.W, { radius: 'xxxl', isActive: c, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, o.jsxs)('div', {
                                      className: i0().root,
                                      children: [
                                          (0, o.jsx)(iQ.y, {
                                              vibe: s.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, m.$)(i0().item, i0().important),
                                              shouldShowAdditionals: u,
                                              additionalsLinesCount: 1,
                                          }),
                                          !u &&
                                              (0, o.jsxs)('div', {
                                                  className: i0().container,
                                                  children: [
                                                      (0, o.jsx)(C.DZ, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: i0().text,
                                                          lineClamp: 2,
                                                          variant: d,
                                                          children: null == s ? void 0 : s.vibe.description,
                                                      }),
                                                      S,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, ...(0, V.OZ)(_), children: y });
                }),
                i2 = (0, n.forwardRef)((e, t) => (0, o.jsx)(i1, { forwardRef: t, ...e }));
            var i8 = i(70154),
                i3 = i(3940),
                i4 = i(53712),
                i9 = i(51868),
                i6 = i(59650);
            let i7 = (0, _.PA)((e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    a = (0, b.c)(() => {
                        i(t.id);
                    });
                return (0, o.jsx)(i6.E, { room: t, contentLinesCount: 3, onRoomSuccessExit: a });
            });
            var i5 = i(19185),
                ae = i.n(i5);
            let at = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        { multivibe: h } = (0, E.g)(),
                        [x, C] = (0, n.useState)([]);
                    (0, n.useEffect)(() => {
                        var e;
                        C((null == m || null == (e = m.items) ? void 0 : e.length) ? (null == m ? void 0 : m.items) : []);
                    }, [null == m ? void 0 : m.items]);
                    let A = (0, b.c)((e) => {
                            C((t) => t.filter((t) => t.id !== e));
                        }),
                        j = x.length,
                        T = (0, eK.L)(() => {
                            let e = x.map((e, t) => {
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
                                    children: (0, o.jsx)(i3.f, {}, 'create-vibe-room-button'),
                                }),
                                ...e,
                            ];
                        }),
                        N = (0, eK.L)(() => Array.from({ length: 9 }, (e, t) => (0, o.jsx)(i9.P, { isActive: a }, t))),
                        f = (0, eK.L)(() => (h.isNDAEnabled ? (0, o.jsx)(i8.b, { className: ae().multivibeNDA }) : null));
                    return (0, o.jsx)(tE.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        showShimmerInfo: !1,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink || i4.Z.collectionVibeRooms.href,
                        ref: t,
                        headingVariant: _,
                        customShimmer: N,
                        titleChildren: f,
                        'data-test-id': v.e8.landing.COLLECTION_WAVE_ROOMS,
                        children: T,
                    });
                }),
                ai = (0, n.forwardRef)((e, t) => {
                    let {
                        collection: { vibeRooms: i },
                        user: a,
                    } = (0, E.g)();
                    return i.isEnabled && a.hasPlus ? (0, o.jsx)(at, { forwardRef: t, ...e, containerClassName: ae().root }) : null;
                });
            var aa = i(96618),
                as = i(25895),
                ar = i(7985),
                ao = i.n(ar),
                an = i(89331),
                al = i.n(an);
            let ac = (0, _.PA)((e) => {
                    let { title: t, colors: i } = e;
                    return (0, o.jsxs)(C.HL, {
                        size: 'm',
                        variant: 'span',
                        className: al().station,
                        children: [
                            (0, o.jsx)('div', {
                                className: al().stationColors,
                                children: i.map((e, t) => (0, o.jsx)('span', { className: al().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                ad = (0, _.PA)((e) => {
                    var t, i, a;
                    let { data: s } = e,
                        { place: r, city: l, address: d, map: m } = s,
                        _ = (() => {
                            let { theme: e } = (0, aa.W)();
                            return (0, n.useCallback)(
                                (t) => {
                                    let i = (0, V.a6)(t.replace('%%', '1300,1000')),
                                        { href: a } = (0, as.u)(i, { query: { theme: null != e ? e : '' } });
                                    return a;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: p } = (0, u.A)(),
                        { href: v, target: h } = ((e) => {
                            let { theme: t } = (0, aa.W)();
                            return (0, as.u)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (a = null == s || null == (t = s.map) ? void 0 : t.url) ? a : ''),
                        x = (0, N.N)(),
                        { ref: A, intersectionPropertyId: j } = (0, I.n)(),
                        T = (0, b.c)(() => {
                            x({ to: c.AppScreen.Link, deepLink: v });
                        });
                    return (0, o.jsxs)('div', {
                        ref: A,
                        'data-intersection-property-id': j,
                        className: ao().root,
                        children: [
                            (0, o.jsx)(C.DZ, { size: 'm', variant: 'h3', className: ao().heading, children: r }),
                            (0, o.jsx)(O.N, {
                                onClick: T,
                                'aria-label': p({ id: 'entity-names.map-url' }),
                                href: v,
                                className: ao().linkContainer,
                                target: h,
                                children: (0, o.jsx)(t3._V, {
                                    createUrlReplacer: _,
                                    className: ao().mapImage,
                                    alt: r,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == m ? void 0 : m.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, o.jsxs)('div', {
                                className: ao().addressContainer,
                                children: [
                                    (0, o.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', className: ao().address, children: ''.concat(l, ', ').concat(d) }),
                                    (0, o.jsx)('div', {
                                        'aria-label': p({ id: 'entity-names.metro-stations' }),
                                        className: ao().metroStations,
                                        children:
                                            null == (i = s.groupedMetroStations) ? void 0 : i.map((e, t) => (0, o.jsx)(ac, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var am = i(52783),
                a_ = i.n(am);
            let au = (0, _.PA)((e) => {
                    let { isActive: t } = e;
                    return (0, o.jsxs)('div', {
                        className: a_().root,
                        children: [
                            (0, o.jsx)(il.W, { className: a_().heading, radius: 's', isActive: t }),
                            (0, o.jsx)(il.W, { className: a_().mapImage, radius: 's', isActive: t }),
                            (0, o.jsx)(il.W, { className: a_().address, radius: 's', isActive: t }),
                            (0, o.jsx)(il.W, { className: a_().metroStations, radius: 's', isActive: t }),
                        ],
                    });
                }),
                ap = (0, _.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, containerClassName: s, isShimmerVisible: r, isShimmerActive: n, id: l, data: m, ..._ } = e,
                        { concert: u } = (0, E.g)(),
                        p = null != (i = null == (t = u.meta) ? void 0 : t.id) ? i : '',
                        v = (0, eK.L)(() => (r ? (0, o.jsx)(au, { isActive: n }) : m ? (0, o.jsx)(ad, { data: m }) : void 0));
                    return (0, o.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, V.OZ)(_),
                        children: (0, o.jsx)(d.B, { objectId: p, objectType: c.DomainObjectType.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: v }, l),
                    });
                }),
                av = (0, n.forwardRef)((e, t) => (0, o.jsx)(ap, { forwardRef: t, ...e }));
            var ah = i(82904),
                ab = i(28924),
                ax = i(39752);
            let aC = (e) => {
                let { filterKey: t, filterValue: i, filterPos: a, children: s } = e,
                    r = (0, n.useMemo)(() => ({ filterKey: t, filterValue: i, filterPos: a }), [t, i, a]);
                return (0, o.jsx)(ax.S.Provider, { value: r, children: s });
            };
            var aA = i(64407),
                aj = i(83418),
                aT = i(3656),
                aN = i(69663),
                af = i(17226),
                aI = i(90635),
                ag = i.n(aI);
            let aS = (e) => {
                let { concert: t } = e,
                    {
                        title: i,
                        datetime: a,
                        city: s,
                        place: r,
                        contentRating: l,
                        cover: d,
                        dataSessionId: _,
                        rank: p,
                        isCashbackExperimentEnabled: v,
                        isIdentityExperimentEnabled: h,
                        cashbackTitle: A,
                        cashbackValuePercent: j,
                    } = t,
                    { formatDate: T } = (0, u.A)(),
                    { ref: f, intersectionPropertyId: g } = (0, I.n)(),
                    S = (0, N.N)(),
                    { state: y, toggleTrue: L, toggleFalse: k } = (0, t8.e)(!1),
                    { experiments: w } = (0, E.g)(),
                    { href: O } = (0, as.u)('/concert/:concertId', { params: { concertId: t.id } }),
                    P = (0, R.Z)(O),
                    M = w.checkExperiment(eT.z.WebNextConcertPage, 'on'),
                    D = (0, n.useMemo)(() => {
                        let e = v && !!A;
                        if ((h && j) || e)
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(eI.q, { children: T(a, (0, aN.f)()) }),
                                    (0, o.jsxs)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: ag().descriptionContainer,
                                        children: [
                                            (0, o.jsx)(C.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: ag().description,
                                                children: r,
                                            }),
                                            (0, o.jsx)(C.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: ag().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            l &&
                                                (0, o.jsx)(C.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: ag().description,
                                                    children: l,
                                                }),
                                        ],
                                    }),
                                    (0, o.jsx)(aj.m, { className: ag().cashback, title: A, valuePercent: j }),
                                ],
                            });
                        let t = [];
                        return (
                            a && t.push(T(a, (0, aN.f)())),
                            l && t.push(l),
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(C.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: ag().description,
                                        children: r,
                                    }),
                                    (0, o.jsxs)(eI.q, { children: [T(a, (0, aN.f)()), ' ', l] }),
                                    (0, o.jsx)(C.HL, {
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
                    }, [A, j, l, a, T, v, h, r]),
                    B = (0, n.useCallback)(
                        (e) => {
                            (S({ to: c.AppScreen.ConcertPurchaseScreen }), L(), null == e || e.stopPropagation());
                        },
                        [L, S],
                    ),
                    U = (0, b.c)((e) => {
                        if (!M) {
                            (B(e), S({ to: c.AppScreen.ConcertScreen }));
                            return;
                        }
                        P(e);
                    }),
                    W = (0, n.useCallback)(
                        (e) => {
                            (e.code === af.v.SPACE || e.code === af.v.ENTER) && (e.preventDefault(), U());
                        },
                        [U],
                    );
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(x.t, {
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
                            ref: f,
                            'data-intersection-property-id': g,
                            children: [
                                (0, o.jsx)(t3._V, {
                                    className: ag().cover,
                                    src: null == d ? void 0 : d.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== p &&
                                    (0, o.jsx)(C.HL, {
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
                                        (0, o.jsx)(C.DZ, {
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
                                                        (0, o.jsx)(C.HL, {
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
                        (0, o.jsx)(aA.h, { dataSessionId: _, isOpened: y, onOpen: L, onClose: k }),
                    ],
                });
            };
            var ay = i(15937),
                aR = i.n(ay);
            let aL = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        h = (0, n.useId)(),
                        { experiments: b, concerts: x } = (0, E.g)(),
                        C = (0, n.useRef)(null),
                        A = b.checkExperiment(eT.z.WebNextNewConcertCard, 'on'),
                        j = x.isLocationSelectionExperimentEnabled
                            ? {
                                  filterKey: c.DomainObjectType.Location,
                                  filterValue: null !== x.locationSelection.selectedLocationId ? String(x.locationSelection.selectedLocationId) : 'auto',
                                  filterPos: 1,
                              }
                            : {},
                        T = (0, n.useMemo)(
                            () =>
                                i
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (i, a) =>
                                              e ? (0, o.jsx)(ab.L, { isActive: t }, a) : (0, o.jsx)(il.W, { isActive: t, className: aR().shimmer }, a),
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
                                                    children: A ? (0, o.jsx)(ah.Q, { concert: e }) : (0, o.jsx)(aS, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == _ ? void 0 : _.items, a, i, A],
                        );
                    return (0, o.jsx)(aC, {
                        ...j,
                        children: (0, o.jsxs)('section', {
                            ref: t,
                            className: (0, m.$)(aR().root, { [aR().root_withNewConcertCards]: A }, p),
                            ...(0, V.OZ)(v),
                            children: [
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    labeledForId: h,
                                    title: l.title,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: aR().controls, carouselRef: C }),
                                    headingVariant: u,
                                }),
                                (0, o.jsx)(U.F, { ref: C, itemClassName: (0, m.$)(aR().item, aR().important), className: s, 'aria-labelledby': h, children: T }),
                            ],
                        }),
                    });
                }),
                aE = (0, n.forwardRef)((e, t) => (0, o.jsx)(aL, { forwardRef: t, ...e }));
            var ak = i(38911),
                aw = i.n(ak),
                aO = i(46126),
                aP = i.n(aO);
            let aM = (e) => {
                let { className: t, title: i, subtitle: a, covers: s, link: r, type: l, withLastPlayed: d } = e,
                    _ = (0, N.N)(),
                    u = (0, n.useMemo)(() => {
                        if (0 !== s.length)
                            return (0, o.jsx)('div', {
                                className: aP().covers,
                                'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS,
                                children: s.slice(0, 2).map((e, t) =>
                                    (0, o.jsx)(
                                        x.t,
                                        {
                                            className: aP().coverContainer,
                                            radius: 'xs',
                                            children: (0, o.jsx)(t3._V, {
                                                className: aP().cover,
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
                    p = (0, n.useCallback)(() => {
                        _({ to: c.AppScreen.Link });
                    }, [_]);
                return (0, o.jsx)(x.t, {
                    className: (0, m.$)(aP().root, aP()['root_'.concat(l)], { [aP().root_withCovers]: s.length > 0, [aP().root_withLastPlayed]: d }, t),
                    radius: 'l',
                    'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM,
                    children: (0, o.jsx)(O.N, {
                        className: aP().link,
                        href: r,
                        onClick: p,
                        'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK,
                        children: (0, o.jsxs)('div', {
                            className: aP().content,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: aP().textContainer,
                                    children: [
                                        (0, o.jsxs)(C.HL, {
                                            className: aP().title,
                                            size: 'm',
                                            variant: 'div',
                                            'data-test-id': v.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE,
                                            children: [i, (0, o.jsx)(iH.I, { className: aP().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        a &&
                                            (0, o.jsx)(C.HL, {
                                                className: aP().subtitle,
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
            var aD = i(28631),
                aB = i(28068),
                aV = i(2493),
                aU = i(11708),
                aW = i(30296),
                az = i(19464),
                aH = i.n(az);
            let aK = (0, _.PA)((e) => {
                    var t, i, a, s, r;
                    let { className: l, lastPlayed: _ } = e,
                        { objectsCount: p } = (0, tV.N)(),
                        { formatMessage: A } = (0, u.A)(),
                        { sonataState: j, continueListen: N } = (0, E.g)(),
                        I = (0, aW.e)(),
                        S = (0, aU.$)(),
                        {
                            album: y,
                            playlist: R,
                            track: M,
                            getTrackMeta: D,
                            getPlaylistMeta: B,
                            isNeededToLoad: V,
                            isRejected: U,
                            albumDuration: W,
                            albumDurationLeft: z,
                        } = _.data,
                        { track: H, trackIndex: K, contextType: Y, contextId: $, albumDuration: F, albumStreamProgress: G, trackTempStreamProgress: X } = N,
                        Z = (0, f.b)(),
                        Q = (0, T.P)(),
                        q = (0, n.useMemo)(() => H || M, [H, M]),
                        J = (null == (t = j.entityMeta) ? void 0 : t.isPodcast) || (null == (i = j.entityMeta) ? void 0 : i.isAudiobook),
                        ee = (0, n.useCallback)(async () => {
                            let e = await D();
                            !N.track &&
                                e &&
                                (N.saveTrack({
                                    contextType: y ? h.K.Album : h.K.Playlist,
                                    contextId: y ? y.id : String(null == R ? void 0 : R.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                W && z && (N.saveAlbumDuration(W), N.albumStreamProgress.updateEndPositionSec(W - z)));
                        }, [N, y, W, z, D, null == R ? void 0 : R.id]),
                        et = (0, n.useCallback)(async () => {
                            let e = await B();
                            N.trackIndex || 'number' != typeof e || N.saveTrackIndex(e);
                        }, [B, N]);
                    (0, n.useEffect)(() => {
                        V && (ee(), et());
                    }, [V, ee, et]);
                    let ei = Y === h.K.Album && q.mainAlbum && (null == q ? void 0 : q.mainAlbum.isAudiobook),
                        ea = (0, n.useCallback)(
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
                                    let t = (null == G ? void 0 : G.endPositionSec) || 0,
                                        i = e.position,
                                        a = i - ((null == X ? void 0 : X.endPositionSec) || 0);
                                    (null == G || G.updateEndPositionSec(t + a), null == X || X.updateEndPositionSec(i));
                                }
                            },
                            [q.streamProgress, G, X, ei],
                        ),
                        es = ei ? (null == G ? void 0 : G.endPositionSec) || 0 : (null == (a = q.streamProgress) ? void 0 : a.endPositionSec) || 0,
                        er = q.durationMs ? q.durationMs / 1e3 : 0,
                        eo = ei ? F || 0 : er,
                        en = (0, aV.m)(es, eo),
                        el = (0, n.useMemo)(() => (0, aD.A)(ea, 500), [ea]),
                        { isPlaying: ec, togglePlay: ed } = ((e) => {
                            let { track: t, trackIndex: i, contextType: a, contextId: s } = e,
                                r = (0, n.useMemo)(() => {
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
                                { from: o, utmLink: l } = (0, g.f)({ contextId: r.meta.id, contextType: r.type }),
                                c = (0, eK.L)(() => {
                                    switch (a) {
                                        case h.K.Playlist:
                                            return { type: h.K.Playlist, meta: { id: String(s) }, from: o, utmLink: l };
                                        case h.K.Album:
                                            return { type: h.K.Album, meta: { id: Number(s) }, from: o, utmLink: l };
                                        case h.K.Various:
                                            return { type: h.K.Various, meta: { id: Number(s) }, from: o, utmLink: l };
                                        case h.K.Artist:
                                            return { type: h.K.Artist, meta: { id: Number(s) }, from: o, utmLink: l };
                                        case h.K.Generative:
                                            return { type: h.K.Generative, meta: { id: Number(s) }, from: o, utmLink: l };
                                        case h.K.Vibe:
                                            return {
                                                type: h.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: o,
                                                utmLink: l,
                                            };
                                        default:
                                            return { type: h.K.Playlist, meta: { id: '' }, from: o, utmLink: l };
                                    }
                                });
                            return (0, L.D)({
                                playContextParams: { contextData: c, queueParams: { entityId: t.id, index: i }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: q, trackIndex: K, contextType: Y, contextId: $ }),
                        em = (0, b.c)(() => {
                            Q() || (ed(), Z(!ec));
                        }),
                        e_ = (0, n.useMemo)(() => ({ '--color-background': q.averageColor }), [q.averageColor]);
                    (0, n.useEffect)(() => {
                        let e,
                            t =
                                null == I
                                    ? void 0
                                    : I.state.queueState.currentEntity.onChange(() => {
                                          (null == e || e(),
                                              (e = I.state.playerState.progress.onChange(() => {
                                                  let e = I.state.playerState.progress.value;
                                                  J && el(e);
                                              })));
                                      });
                        return () => {
                            (null == t || t(), null == e || e());
                        };
                    }, [I, el, J, q.streamProgress]);
                    let eu = ei ? q.mainAlbum.title : q.title,
                        ep = ei ? q.mainAlbum.coverUri : q.coverUri,
                        ev = (0, n.useMemo)(() => {
                            var e;
                            return A({ id: 'entity-names.album-name' }, { albumName: null == (e = q.mainAlbum) ? void 0 : e.title });
                        }, [A, null == (s = q.mainAlbum) ? void 0 : s.title]),
                        eh = (0, n.useMemo)(() => (ei ? ev : A({ id: 'entity-names.track-name' }, { trackName: q.title })), [A, ei, ev, q.title]),
                        eb = ei ? q.mainAlbum.explicitDisclaimer : q.explicitDisclaimer,
                        ex = S(eo - es, !1);
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
                                  children: (0, o.jsxs)(x.t, {
                                      className: (0, m.$)(aH().root, l),
                                      radius: 'l',
                                      style: e_,
                                      'aria-label': eu,
                                      'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: aH().content,
                                              children: [
                                                  (0, o.jsx)(k.B, {
                                                      className: (0, m.$)(aH().cover, aH().important),
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
                                                      className: aH().metaTrack,
                                                      children: [
                                                          (0, o.jsxs)(O.N, {
                                                              className: aH().metaContainer,
                                                              href: null == (r = q.mainAlbum) ? void 0 : r.url,
                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK,
                                                              children: [
                                                                  (0, o.jsx)(C.HL, {
                                                                      className: aH().title,
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
                                                                          className: aH().explicitMark,
                                                                      }),
                                                                  (0, o.jsx)(iH.I, { className: aH().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              className: aH().progress,
                                                              children:
                                                                  !!eo &&
                                                                  (0, o.jsxs)(o.Fragment, {
                                                                      children: [
                                                                          (0, o.jsx)(aB.q, {
                                                                              'aria-valuetext': en,
                                                                              'aria-busy': ec && J,
                                                                              fullCircleClassName: aH().fullCircle,
                                                                              progressCircleClassName: aH().progressCircle,
                                                                              value: es,
                                                                              max: eo,
                                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS,
                                                                          }),
                                                                          (0, o.jsx)(C.HL, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              'data-test-id': v.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT,
                                                                              children: ex,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)(P.D, { variant: 'filled', className: aH().playButton, isPlaying: ec && J, onClick: em, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              q.id,
                          );
                }),
                aY = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, containerClassName: r, headingVariant: l, data: _, ...p } = e,
                        { formatMessage: v } = (0, u.A)(),
                        h = (0, n.useId)(),
                        { objectsCount: b } = (0, tV.N)(),
                        x = (0, n.useMemo)(() => {
                            if (!_ || i) return Array.from({ length: 3 }, (e, t) => (0, o.jsx)(il.W, { className: aw().item, isActive: a }, t));
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
                                    s.push((0, o.jsx)(aK, { className: (0, m.$)(aw().item, aw().item_lastPlayed), lastPlayed: _.lastPlayed }, _.lastPlayed.type)),
                                s.push(
                                    (0, o.jsx)(
                                        d.B,
                                        {
                                            objectType: c.DomainObjectType.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: b,
                                            children: (0, o.jsx)(aM, {
                                                className: aw().item,
                                                type: 'bookshelf',
                                                link: i4.Z.collectionShelf.href,
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
                                            children: (0, o.jsx)(aM, {
                                                className: aw().item,
                                                type: 'newEpisodes',
                                                link: i4.Z.collectionShelfNewEpisodes.href,
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
                            (0, o.jsx)(W.T, { className: s, labeledForId: h, title: v({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: l }),
                            (0, o.jsx)('div', {
                                className: aw().blocksContainer,
                                children: (0, o.jsx)('div', { className: (0, m.$)(aw().container, r), 'aria-labelledby': h, children: x }),
                            }),
                        ],
                    });
                },
                a$ = (0, n.forwardRef)((e, t) => (0, o.jsx)(aY, { forwardRef: t, ...e })),
                aF = (e) => {
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
                aG = (0, n.forwardRef)((e, t) => (0, o.jsx)(aF, { forwardRef: t, ...e }));
            var aX = i(42057),
                aZ = i(58301),
                aQ = i(49200),
                aq = i(91809),
                aJ = i(1797);
            let a0 = (0, _.PA)((e) => {
                    let { donation: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                        s = (0, aQ.Q)()(t.url),
                        r = (0, R.Z)(s),
                        n = (0, R.Z)(t.artist.url),
                        l = (0, N.N)(),
                        d = (0, b.c)(() => {
                            (l({ to: c.AppScreen.ArtistScreen }), n());
                        }),
                        m = (0, b.c)(() => {
                            (l({ to: c.AppScreen.Link, deepLink: s }), r());
                        }),
                        _ = (0, aJ.S)({ artist: t.artist, callback: d });
                    return (0, o.jsx)(aq.X, {
                        ref: i,
                        'data-intersection-property-id': a,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: _,
                        onNavigateToDonation: m,
                    });
                }),
                a1 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (0, n.useMemo)(
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
                                                  children: (0, o.jsx)(a0, { donation: i }),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, aZ.k)(a),
                            [null == m ? void 0 : m.items, a, i],
                        );
                    return (0, o.jsx)(aX.x, {
                        containerClassName: s,
                        headerClassName: r,
                        headingVariant: _,
                        className: u,
                        forwardRef: t,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        title: l.title,
                        ...p,
                        children: v,
                    });
                },
                a2 = (0, n.forwardRef)((e, t) => (0, o.jsx)(a1, { forwardRef: t, ...e }));
            var a8 = i(9911),
                a3 = i(4071),
                a4 = i(32801),
                a9 = i.n(a4);
            let a6 = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, o.jsx)(il.W, { isActive: t, className: (0, m.$)(a9().root, i) });
                },
                a7 = (0, _.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: a } = (0, u.A)(),
                        { pageId: s } = (0, iq.$)(),
                        { blockIdForFrom: r } = (0, tV.N)(),
                        { ref: l, intersectionPropertyId: c } = (0, I.n)(),
                        { toggleTrue: d, toggleFalse: _, state: p } = (0, t8.e)(!1),
                        { freeAccess: h } = (0, E.g)(),
                        b = i.title.length > 26,
                        { isPlaying: x, togglePlay: A } = (0, t7.B)({ seeds: i.seeds, pageIdForFrom: s, blockIdForFrom: r }),
                        j = (0, f.b)(),
                        T = (0, n.useCallback)(
                            (e) => {
                                h.isVibeStartRestricted ||
                                    ((0, ea.P)(e, a9().ripple),
                                    d(),
                                    A().finally(() => {
                                        (_(), j(!x));
                                    }));
                            },
                            [_, d, A, x, j, h.isVibeStartRestricted],
                        ),
                        N = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        g = x ? 'pause' : 'play',
                        S = x ? v.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : v.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        y = (0, n.useCallback)(
                            () =>
                                (0, o.jsxs)(a3.$, {
                                    style: N,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: T,
                                    className: (0, m.$)(a9().root, a9().button, { [a9().button_loading]: p }, t),
                                    'data-intersection-property-id': c,
                                    ref: l,
                                    'data-test-id': v.e8.landing.VIBE_DISCOVERY_ITEM,
                                    children: [
                                        (0, o.jsx)(t3._V, {
                                            className: a9().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, o.jsxs)('span', {
                                            className: a9().textContainer,
                                            children: [
                                                (0, o.jsx)(C.HL, {
                                                    className: a9().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(a({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, o.jsxs)(C.HL, {
                                                    className: (0, m.$)(a9().title, { [a9().title_long]: b }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, o.jsx)(iH.I, { className: a9().icon, size: 'xxs', variant: g, 'data-test-id': S }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, a, T, S, g, c, b, p, l, N, i],
                        );
                    return (0, o.jsx)(t5.S, {
                        isEnabled: h.isVibeStartRestricted,
                        placement: 'top',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: y,
                    });
                });
            var a5 = i(50930),
                se = i.n(a5);
            let st = (e) => {
                    let { forwardRef: t, items: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r } = e;
                    return (0, o.jsx)(U.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, m.$)(se().item, se().important, a),
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
                si = (e) => {
                    let { forwardRef: t, isActive: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r, length: n } = e;
                    return (0, o.jsx)(U.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, m.$)(se().item, se().important, a),
                        'aria-labelledby': r,
                        children: Array.from({ length: n }, (e, t) => (0, o.jsx)(a6, { isActive: i }, t)),
                    });
                },
                sa = (0, n.forwardRef)((e, t) => (0, o.jsx)(st, { forwardRef: t, ...e })),
                ss = (0, n.forwardRef)((e, t) => (0, o.jsx)(si, { forwardRef: t, ...e }));
            var sr = i(71839),
                so = i.n(sr);
            let sn = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: c,
                            className: d,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        { shouldHideControls: h } = (0, a8.Y)(v),
                        b = !!(l.description || l.title || !h),
                        x = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(ss, { isActive: a, ref: v, containerClassName: s, ariaLabelledBy: p, length: 9 })
                                    : (0, o.jsx)(sa, { ref: v, containerClassName: s, ariaLabelledBy: p, items: null == c ? void 0 : c.items }),
                            [null == c ? void 0 : c.items, a, i, s, p],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(so().root, d),
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [
                            b &&
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    title: l.title,
                                    description: l.description,
                                    labeledForId: p,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: so().controls, carouselRef: v }),
                                    headingVariant: _,
                                    withDescription: !!l.description,
                                }),
                            x,
                        ],
                    });
                },
                sl = (0, n.forwardRef)((e, t) => (0, o.jsx)(sn, { forwardRef: t, ...e }));
            var sc = i(3661),
                sd = i.n(sc);
            let sm = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            className: u,
                            headingVariant: p,
                            ...v
                        } = e,
                        h = (0, n.useId)(),
                        b = (0, n.useRef)(null),
                        { shouldHideControls: x } = (0, a8.Y)(b),
                        C = !!(l.description || l.title || !x),
                        A = (0, n.useMemo)(() => {
                            var e;
                            return i
                                ? (0, o.jsx)(U.F, {
                                      ref: b,
                                      itemClassName: (0, m.$)(sd().item, sd().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                      children: (0, tU.k)({ isActive: a, centered: !0 }),
                                  })
                                : (0, o.jsx)(U.F, {
                                      ref: b,
                                      itemClassName: (0, m.$)(sd().item, sd().important),
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
                                                            children: (0, o.jsx)(iQ.y, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == _ ? void 0 : _.items, a, i, s, h]);
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(sd().root, u),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            C &&
                                (0, o.jsx)(W.T, {
                                    className: r,
                                    title: l.title,
                                    description: l.description,
                                    labeledForId: h,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: sd().controls, carouselRef: b }),
                                    headingVariant: p,
                                    withDescription: !!l.description,
                                }),
                            A,
                        ],
                    });
                },
                s_ = (0, n.forwardRef)((e, t) => (0, o.jsx)(sm, { forwardRef: t, ...e }));
            var su = i(49807),
                sp = i(2577),
                sv = i.n(sp);
            let sh = (0, _.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, meta: r, data: n, headingVariant: l, className: c, ...d } = e,
                        { artist: m } = (0, E.g)(),
                        { formatMessage: _ } = (0, u.A)(),
                        p = (0, eK.L)(() => {
                            if (!n) return;
                            let e = [];
                            return (
                                n.tracksCount && e.push(_({ id: 'entity-names.tracks-count' }, { value: n.tracksCount })),
                                n.collectionAlbumCount && e.push(_({ id: 'entity-names.albums-count' }, { value: n.collectionAlbumCount })),
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
                            viewAllActionLink: null == n ? void 0 : n.href(m.id),
                            coverContainerClassName: sv().cover,
                            shimmerCoverClassName: sv().shimmerCover,
                            headingVariant: l,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: p,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                        }),
                    });
                }),
                sb = (0, n.forwardRef)((e, t) => (0, o.jsx)(sh, { forwardRef: t, ...e }));
            var sx = i(17065),
                sC = i.n(sx);
            let sA = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tV.N)(),
                        b = (0, tB.zb)(0),
                        x = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        A = (0, n.useId)(),
                        j = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(U.F, {
                                          ref: C,
                                          itemClassName: (0, m.$)(sC().item, sC().important),
                                          className: s,
                                          'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                          children: (0, tU.k)({ isActive: a }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.items.map((e) =>
                                            (0, o.jsx)(
                                                tB.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: b.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(U.F, {
                                                        ref: C,
                                                        itemClassName: (0, m.$)(sC().item, sC().important),
                                                        className: s,
                                                        'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                                        children: e.data.map((t, i) =>
                                                            (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: i + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, o.jsx)(tv.a, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [i, null == _ ? void 0 : _.items, s, x, a, b.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(sC().root, p),
                        ref: t,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(l.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: (0, m.$)(r, sC().header, sC().important),
                                    title: l.title,
                                    description: l.description,
                                    labeledForId: x,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: sC().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!l.description,
                                }),
                            }),
                            (0, o.jsx)(tz.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, sC().tabCarousel, sC().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tz.nR, { isActive: a, className: (0, m.$)(s, sC().tabCarousel, sC().important) }),
                                'aria-labelledby': x,
                                ...b,
                                children:
                                    null == _
                                        ? void 0
                                        : _.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tW.o,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, m.$)(sC().tab, sC().important),
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
                sj = (0, n.forwardRef)((e, t) => (0, o.jsx)(sA, { forwardRef: t, ...e }));
            var sT = i(44288),
                sN = i(33130),
                sf = i.n(sN);
            let sI = (e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: l, isShimmerActive: c, headingVariant: d } = e,
                        m = (0, n.useMemo)(() => {
                            if (l) {
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
                        }, [null == s ? void 0 : s.items, d, c, l, null == (t = a.source) ? void 0 : t.countWeb]);
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, 'data-test-id': v.e8.landing.ITEM_LIST, children: m });
                },
                sg = (0, n.forwardRef)((e, t) => (0, o.jsx)(sI, { forwardRef: t, ...e }));
            var sS = i(54637),
                sy = i.n(sS),
                sR = i(95865),
                sL = i.n(sR);
            let sE = (0, _.PA)((e) => {
                    let { title: t, subtitle: i, link: a, testId: s, icon: r, covers: l, navigateTo: c } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, E.g)(),
                        m = (0, N.N)(),
                        { ref: _, intersectionPropertyId: u } = (0, I.n)(),
                        p = (0, n.useMemo)(() => {
                            if (0 !== l.length)
                                return (0, o.jsx)('div', {
                                    className: sL().covers,
                                    children: l.map((e, t) =>
                                        (0, o.jsx)(
                                            x.t,
                                            {
                                                className: sL().coverContainer,
                                                radius: 'xs',
                                                'data-test-id': v.e8.landing.LIKES_HISTORY_COVERS,
                                                children: (0, o.jsx)(t3._V, { size: 80, className: sL().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [l]),
                        h = (0, n.useCallback)(() => {
                            m({ to: c });
                        }, [c, m]);
                    return (0, o.jsx)('div', {
                        ref: _,
                        'data-intersection-property-id': u,
                        className: sL().root,
                        'data-test-id': s,
                        children: (0, o.jsxs)(O.N, {
                            className: sL().link,
                            href: a,
                            onClick: h,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: sL().start,
                                    children: [
                                        r,
                                        (0, o.jsxs)('div', {
                                            className: sL().textContainer,
                                            children: [
                                                (0, o.jsxs)(C.DZ, {
                                                    className: sL().title,
                                                    size: d ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    'data-test-id': v.e8.landing.LIKES_HISTORY_TITLE,
                                                    children: [t, (0, o.jsx)(iH.I, { className: sL().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, o.jsx)(C.HL, {
                                                    className: sL().subtitle,
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
                sk = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(il.W, { isActive: t, className: sL().root, height: 82 });
                },
                sw = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, ...r } = e,
                        { formatMessage: l } = (0, u.A)(),
                        { favorites: m, history: _ } = s || {},
                        p = (0, n.useMemo)(
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
                                                      subtitle: l({ id: 'entity-names.number-of-tracks' }, { counter: m.count }),
                                                      link: m.url,
                                                      navigateTo: c.AppScreen.PlaylistScreen,
                                                      testId: v.e8.landing.LIKES_BLOCK,
                                                      icon: (0, o.jsx)(x.t, {
                                                          className: sy().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(t3._V, {
                                                              className: sy().favoritesCover,
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
                                                      icon: (0, o.jsx)(x.t, {
                                                          className: sy().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(iH.I, { className: sy().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: _.trackCovers,
                                                  }),
                                              },
                                              _.id,
                                          ),
                                      ]
                                    : [(0, o.jsx)(sk, { isActive: a }, 0), (0, o.jsx)(sk, { isActive: a }, 1)],
                            [m, l, _, a, i],
                        );
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: sy().root,
                        ...(0, V.OZ)(r),
                        children: (0, o.jsx)(U.F, { className: sy().carousel, itemClassName: sy().carouselItem, children: p }),
                    });
                },
                sO = (0, n.forwardRef)((e, t) => (0, o.jsx)(sw, { forwardRef: t, ...e }));
            var sP = i(41915),
                sM = i(9713),
                sD = i.n(sM);
            let sB = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        itemClassName: sD().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        'data-test-id': v.e8.landing.MIXES_BLOCK,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e) =>
                                      (0, o.jsx)(
                                          sP.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sV = (0, n.forwardRef)((e, t) => (0, o.jsx)(sB, { forwardRef: t, ...e }));
            var sU = i(55492),
                sW = i(95772),
                sz = i(61373),
                sH = i.n(sz);
            let sK = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            headerClassName: a,
                            meta: s,
                            data: r,
                            headingVariant: l,
                            isShimmerActive: _,
                            containerClassName: u,
                            isShimmerVisible: p,
                            className: v,
                            ...h
                        } = e,
                        b = (0, n.useId)(),
                        x = (0, n.useMemo)(() => {
                            if (p) {
                                var e;
                                return (0, o.jsx)(sW.e, {
                                    itemClassName: (0, m.$)(sH().item, sH().important, sH().shimmerWithSubcover),
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
                                                  sU.V,
                                                  {
                                                      linkClassName: (0, m.$)(sH().item, sH().important),
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
                                className: (0, m.$)(sH().header, a),
                                labeledForId: b,
                                title: s.title,
                                viewAllActionLink: s.viewAllActionLink,
                                headingVariant: l,
                            }),
                            (0, o.jsx)('div', { className: (0, m.$)(sH().mixesGrid, u), children: x }),
                        ],
                    });
                },
                sY = (0, n.forwardRef)((e, t) => (0, o.jsx)(sK, { forwardRef: t, ...e }));
            var s$ = i(80325),
                sF = i.n(s$);
            let sG = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        shimmerClassName: sF().shimmer,
                        containerClassName: s,
                        headerClassName: r,
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        itemClassName: sF().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: m,
                        'data-test-id': v.e8.landing.MIXES_MUSIC,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: l.items.length,
                                              children: (0, o.jsx)(
                                                  sU.V,
                                                  { linkClassName: sF().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sX = (0, n.forwardRef)((e, t) => (0, o.jsx)(sG, { forwardRef: t, ...e }));
            var sZ = i(23707),
                sQ = i.n(sZ),
                sq = i(63938),
                sJ = i.n(sq);
            let s0 = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(il.W, { isActive: t, className: sJ().root });
                },
                s1 = (0, _.PA)((e) => {
                    var t, i;
                    let { neuromusic: a } = e,
                        { from: s } = (0, g.f)(),
                        { isPlaying: r, togglePlay: l } = (0, L.D)({
                            playContextParams: { contextData: { type: h.K.Generative, meta: { id: a.stationId }, from: s }, loadContextMeta: !0 },
                        }),
                        c = (0, n.useCallback)(
                            (e) => {
                                ((0, ea.P)(e, sJ().ripple), l());
                            },
                            [l],
                        ),
                        d = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == a || null == (e = a.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == a || null == (t = a.style) ? void 0 : t.titleColor,
                            };
                        }, [null == a || null == (t = a.style) ? void 0 : t.backgroundColor, null == a || null == (i = a.style) ? void 0 : i.titleColor]),
                        _ = r ? v.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : v.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, o.jsx)(a3.$, {
                        style: d,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: c,
                        className: (0, m.$)(sJ().root, sJ().button),
                        'data-test-id': v.e8.landing.NEUROMUSIC_BLOCK_ITEM,
                        children: (0, o.jsxs)('div', {
                            className: sJ().textContainer,
                            children: [
                                (0, o.jsx)(iH.I, { className: sJ().icon, size: 'xxs', variant: r ? 'pause' : 'play', 'data-test-id': _ }),
                                (0, o.jsx)(C.HL, { className: sJ().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: a.title }),
                            ],
                        }),
                    });
                }),
                s2 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: c,
                            className: d,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        h = (0, n.useMemo)(
                            () =>
                                i
                                    ? Array.from({ length: 3 }, (e, t) => (0, o.jsx)(s0, { isActive: a }, t))
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => (0, o.jsx)(s1, { neuromusic: e }, t)),
                            [null == c ? void 0 : c.items, a, i],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, m.$)(sQ().root, d),
                        ...(0, V.OZ)(u),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: r,
                                labeledForId: p,
                                title: l.title,
                                description: l.description,
                                controls: (0, o.jsx)(z.X, { className: sQ().controls, carouselRef: v }),
                                headingVariant: _,
                                withDescription: !!l.description,
                            }),
                            (0, o.jsx)(U.F, { ref: v, itemClassName: (0, m.$)(sQ().item, sQ().important), className: s, 'aria-labelledby': p, children: h }),
                        ],
                    });
                },
                s8 = (0, n.forwardRef)((e, t) => (0, o.jsx)(s2, { forwardRef: t, ...e }));
            var s3 = i(73614),
                s4 = i(34159),
                s9 = i(71996),
                s6 = i(95924);
            let s7 = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var s5 = i(58680),
                re = i.n(s5);
            let rt = (0, _.PA)((e) => {
                var t, i, a;
                let { album: s, releaseDate: r, coverColor: l, coverUri: d } = e,
                    m = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: _ } = (0, u.A)(),
                    { trailer: p } = (0, E.g)(),
                    { ref: A, intersectionPropertyId: f } = (0, I.n)(),
                    S = (0, R.Z)(null != (a = null == m ? void 0 : m.url) ? a : ''),
                    y = (0, aJ.S)({ artist: m, callback: S }),
                    L = (0, s4.F)(),
                    w = (0, s3.r)(s.type),
                    P = (0, T.P)(),
                    { from: M, utmLink: D } = (0, g.f)({ contextId: s.id, contextType: h.K.Album }),
                    B = (0, N.N)(),
                    U = (0, b.c)((e) => {
                        (B({ to: c.AppScreen.ArtistScreen, objectId: null == m ? void 0 : m.id, objectType: c.DomainObjectType.Artist }), y(e));
                    }),
                    W = (0, b.c)((e) => {
                        if (P()) {
                            (e.stopPropagation(), e.preventDefault());
                            return;
                        }
                        (null == s ? void 0 : s.id) && (e.stopPropagation(), p.openAlbumTrailer(s.id), L(c.DomainObjectType.Album, String(s.id)));
                    }),
                    z = (0, n.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, o.jsx)(s6.L, {
                                children: (0, o.jsx)(s9.k, { variant: 'text', iconSize: 'xs', className: re().trailerButton, withRipple: !1, onClick: W }),
                            });
                    }, [null == s || null == (i = s.trailer) ? void 0 : i.isAvailable, W]),
                    H = (0, n.useMemo)(() => {
                        if (r)
                            return (0, o.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: re().descriptionContainer,
                                children: [
                                    (0, o.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: w.toLowerCase() }),
                                    (0, o.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, o.jsx)(C.HL, {
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
                    className: re().root,
                    ref: A,
                    'data-intersection-property-id': f,
                    children: [
                        (0, o.jsxs)('div', {
                            className: re().cover,
                            children: [
                                (0, o.jsxs)(x.t, {
                                    className: re().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, o.jsx)(k.B, {
                                            className: re().image,
                                            src: d,
                                            alt: null == m ? void 0 : m.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, o.jsx)('div', {
                                            className: re().fade,
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
                                (0, o.jsx)(O.N, { className: re().fade, 'aria-label': null == m ? void 0 : m.name, href: null == m ? void 0 : m.url, onClick: U }),
                                (0, o.jsx)(j.i, {
                                    className: re().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: re().artistLink,
                                    captionClassName: re().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, o.jsx)(en, {
                            className: re().card,
                            album: s,
                            albumUrl: s.url,
                            from: M,
                            utmLink: D,
                            trailerButton: z,
                            description: H,
                            entityName: w,
                            coverColor: l,
                            'data-test-id': v.Kq.newRelease.NEW_RELEASE_CARD,
                        }),
                    ],
                });
            });
            var ri = i(86133),
                ra = i.n(ri);
            let rs = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...v
                        } = e,
                        { objectsCount: h } = (0, tV.N)(),
                        b = (0, n.useId)(),
                        x = (0, n.useRef)(null),
                        { theme: C } = (0, aa.W)(),
                        A = (0, n.useMemo)(
                            () =>
                                a
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, i) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, o.jsx)(il.W, { isActive: e, radius: 'round', className: ra().shimmerImage }),
                                                          (0, o.jsx)(il.W, { isActive: e, radius: 'l', className: ra().shimmerCard }),
                                                      ],
                                                  },
                                                  i,
                                              ),
                                          ))(i)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) => {
                                            let i = e.coverUriWithPlaceholder(C);
                                            return (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: (0, o.jsx)(rt, { ...e, coverUri: i }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == _ ? void 0 : _.items, i, a, C],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, m.$)(ra().root, p),
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Shortcut,
                                objectId: String(l.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != h ? h : 0,
                                children: (0, o.jsx)(W.T, {
                                    className: r,
                                    labeledForId: b,
                                    title: l.title,
                                    viewAllActionLink: l.viewAllActionLink,
                                    controls: (0, o.jsx)(z.X, { className: ra().controls, carouselRef: x }),
                                    headingVariant: u,
                                }),
                            }),
                            (0, o.jsx)(U.F, { ref: x, itemClassName: (0, m.$)(ra().item, ra().important), className: s, 'aria-labelledby': b, children: A }),
                        ],
                    });
                }),
                rr = (0, n.forwardRef)((e, t) => (0, o.jsx)(rs, { forwardRef: t, ...e })),
                ro = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: l.items.length,
                                              children: (0, o.jsx)(tv.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                rn = (0, n.forwardRef)((e, t) => (0, o.jsx)(ro, { forwardRef: t, ...e })),
                rl = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) =>
                                      e.type === tD._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, o.jsx)(
                                                d.B,
                                                {
                                                    objectType: c.DomainObjectType.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: l.items.length,
                                                    children: (0, o.jsx)(tv.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
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
                                                    objectsCount: l.items.length,
                                                    children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                rc = (0, n.forwardRef)((e, t) => (0, o.jsx)(rl, { forwardRef: t, ...e }));
            var rd = i(44129),
                rm = i(81661),
                r_ = i.n(rm);
            let ru = (e) => {
                    let { forwardRef: t, containerClassName: i, id: a, meta: s, ...r } = e,
                        { formatMessage: n } = (0, u.A)();
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: (0, m.$)(r_().root, i),
                        ...(0, V.OZ)(r),
                        children: (0, o.jsx)(
                            d.B,
                            {
                                objectType: c.DomainObjectType.Text,
                                objectId: a,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(rd.F, { textButton: n({ id: 'interface-actions.further' }), meta: s }),
                            },
                            a,
                        ),
                    });
                },
                rp = (0, n.forwardRef)((e, t) => (0, o.jsx)(ru, { forwardRef: t, ...e })),
                rv = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) =>
                                      (0, o.jsx)(
                                          d.B,
                                          {
                                              objectType: c.DomainObjectType.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: l.items.length,
                                              children: (0, o.jsx)(iT.B, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                rh = (0, n.forwardRef)((e, t) => (0, o.jsx)(rv, { forwardRef: t, ...e }));
            var rb = i(29671),
                rx = i(96895),
                rC = i(51549);
            let rA = (e) => {
                    let { items: t, playlistId: i, playlistUuid: a, from: s, utmLink: r } = e;
                    return t.slice(0, 8).map((e, n) => {
                        let l,
                            { objectPosX: m, objectPosY: _, objectsCount: u } = (0, ej.$)({ index: n, count: t.length }),
                            p =
                                ((l = e.id),
                                {
                                    contextData: { type: h.K.Playlist, meta: { id: i, uuid: a }, from: s, utmLink: r, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: n, entityId: l },
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
                                    ? (0, o.jsx)(rC.K, { track: e, playContextParams: p, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, o.jsx)(eE.K, { track: e, playContextParams: p }),
                            },
                            e.id,
                        );
                    });
                },
                rj = { src: '/_next/static/media/heart.602389ae.png' };
            var rT = i(12779),
                rN = i.n(rT);
            let rf = (0, _.PA)(() => {
                var e, t;
                let { vibe: i, freeAccess: a } = (0, E.g)(),
                    { pageId: s } = (0, iq.$)(),
                    { blockIdForFrom: r } = (0, tV.N)(),
                    l = (0, R.Z)(i4.Z.main.href),
                    { formatMessage: c } = (0, u.A)(),
                    d = c({ id: 'vibe-actions.play-vibe' }),
                    { isPlaying: m, togglePlay: _ } = (0, t7.B)({
                        seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: s,
                        blockIdForFrom: r,
                    });
                (0, n.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                );
                let h = (0, n.useCallback)(() => {
                        a.isVibeStartRestricted || (m || _(), l());
                    }, [a.isVibeStartRestricted, m, l, _]),
                    b = (0, n.useCallback)(
                        () =>
                            (0, o.jsx)(a3.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: rN().myWaveButton,
                                'aria-label': d,
                                onClick: h,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                children: (0, o.jsx)(C.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, o.jsx)(C.HL, { variant: 'span', size: 'm', weight: 'medium', className: rN().myWaveButtonText, children: d }),
                                }),
                            }),
                        [d, h],
                    );
                return (
                    i.isNeededToLoad && (0, n.use)(i.getLastVibe()),
                    (0, o.jsxs)('div', {
                        className: rN().root,
                        'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                        children: [
                            (0, o.jsx)(t3._V, { src: rj.src, className: rN().image, 'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE }),
                            (0, o.jsx)(C.DZ, {
                                variant: 'h3',
                                size: 'xs',
                                className: rN().header,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                children: (0, o.jsx)(p.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, o.jsx)(C.HL, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: rN().text,
                                'data-test-id': v.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                children: (0, o.jsx)(p.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            (0, o.jsx)(t5.S, { isEnabled: a.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: b }),
                        ],
                    })
                );
            });
            var rI = i(24975),
                rg = i.n(rI);
            let rS = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: l,
                            meta: d,
                            data: _,
                            type: v,
                            headingVariant: b,
                            className: x,
                            ...C
                        } = e,
                        { from: A, utmLink: j } = (0, g.f)({ contextId: null == _ ? void 0 : _.playlist.id, contextType: h.K.Playlist }),
                        {
                            trailer: T,
                            settings: { isMobile: N },
                        } = (0, E.g)(),
                        f = (0, s4.F)(),
                        { formatMessage: I } = (0, u.A)(),
                        S = (0, tf.i)({ playlistId: null == _ ? void 0 : _.playlist.id }),
                        y = (null == _ ? void 0 : _.totalItemsCount)
                            ? I({ id: 'entity-names.number-of-tracks' }, { counter: null == _ ? void 0 : _.totalItemsCount })
                            : d.description,
                        R = [r.t.COLLECTION_PLAYLIST_WITH_LIKES, r.t.SMART_OPEN_PLAYLIST].includes(v),
                        L = d.coverStyle !== rb.z.NONE,
                        k = (0, n.useCallback)(() => {
                            (null == _ ? void 0 : _.playlist.id) &&
                                (T.setUtmLink(j), T.openPlaylistTrailer(null == _ ? void 0 : _.playlist.id), f(c.DomainObjectType.Playlist, String(_.playlist.id)));
                        }, [T, null == _ ? void 0 : _.playlist.id, f, j]),
                        w = (0, n.useMemo)(() => {
                            if (null == _ ? void 0 : _.withRewindTrailerButton)
                                return N
                                    ? (0, o.jsx)(s9.k, { className: rg().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: k })
                                    : (0, o.jsx)(s9.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: rg().trailer,
                                          onClick: k,
                                          children: (0, o.jsx)(p.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == _ ? void 0 : _.withRewindTrailerButton, N, k]);
                    return (null == _ ? void 0 : _.playlist.isFavouritePlaylist) &&
                        (null == _ ? void 0 : _.totalItemsCount) === 0 &&
                        (null == _ ? void 0 : _.canShowEmptyBlock)
                        ? (0, o.jsx)(rf, {})
                        : (0, o.jsx)(tN._, {
                              sourceContextData: S,
                              children: (0, o.jsx)(ew.$, {
                                  isShimmerActive: a,
                                  shimmer: (0, o.jsx)(eO.D, { variant: ek.X.PLAYLIST, isActive: a }),
                                  maxColumnsCount: ew.D.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, m.$)(rg().root, x),
                                  isShimmerVisible: i,
                                  blockHeaderClassName: l,
                                  carouselClassName: s,
                                  blockHeaderTitle: d.title,
                                  blockHeaderCoverUrl: null == _ ? void 0 : _.getCoverUri(d.coverStyle),
                                  blockHeaderDescription: y,
                                  viewAllActionLink: null == _ ? void 0 : _.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: b,
                                  additionalControl: w,
                                  withBlockHeaderDescription: R,
                                  withBlockHeaderCover: L,
                                  ...C,
                                  children:
                                      (null == _ ? void 0 : _.items) &&
                                      rA({ items: _.items, playlistId: _.playlist.id, playlistUuid: _.playlist.uuid, from: A, utmLink: j }),
                              }),
                          });
                }),
                ry = (0, n.forwardRef)((e, t) => (0, o.jsx)(rS, { forwardRef: t, ...e }));
            var rR = i(84715),
                rL = i(69675),
                rE = i(10731),
                rk = i.n(rE);
            let rw = (0, _.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: r,
                            tracksContainerClassName: l,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: p,
                            ...v
                        } = e,
                        { formatMessage: x } = (0, u.A)(),
                        { from: C, utmLink: A } = (0, g.f)({ contextId: null == m ? void 0 : m.playlist.id, contextType: h.K.Playlist }),
                        j = (0, tf.i)({ playlistId: null == m ? void 0 : m.playlist.id, filter: null == m ? void 0 : m.filters.activeFilter }),
                        T = (0, tB.zb)((null == m ? void 0 : m.filters.activeFilterIndex) || 0),
                        N = (0, n.useRef)(null),
                        f = (0, rL.$)(),
                        I = (null == m ? void 0 : m.totalItemsCount) ? x({ id: 'entity-names.number-of-tracks' }, { counter: m.totalItemsCount }) : d.description,
                        S = (0, b.c)((e) => {
                            var t;
                            if (!T.onTabChange || e === T.value || !m) return;
                            (setTimeout(() => {
                                var t, i, a;
                                null == (a = N.current) || null == (i = a.children[e]) || null == (t = i.focus) || t.call(i);
                            }),
                                T.onTabChange(e));
                            let i = null == (t = m.filters.items) ? void 0 : t[e];
                            i && (m.handleFilterClick(i), f({ tabId: i.id, tabPos: e + 1 }));
                        });
                    if (((null == m ? void 0 : m.playlistLoading.isNeededToLoad) && (0, n.use)(m.getPlaylist()), null == m ? void 0 : m.shouldShowEmptyPlaylist))
                        return (0, o.jsx)(rf, {});
                    let y = r || !!(null == m ? void 0 : m.isLoading),
                        R = s || !!(null == m ? void 0 : m.isLoading) || !!(null == m ? void 0 : m.isRejected),
                        L = m && 0 === m.items.length,
                        E = !!(null == m || null == (t = m.filters.items) ? void 0 : t.length),
                        k = !m || (null == m ? void 0 : m.isLoading) || (null == m || null == (i = m.filters) ? void 0 : i.isShimmerVisible) || L || E,
                        w = (0, eK.L)(() => {
                            var e, t, i, a;
                            if (k)
                                return (0, o.jsx)(rR.A, {
                                    className: rk().filters,
                                    tabsState: T,
                                    handleFilterClick: S,
                                    ref: N,
                                    items: null != (a = null == m || null == (e = m.filters) ? void 0 : e.items) ? a : void 0,
                                    isShimmerVisible: null == m || null == (t = m.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == m || null == (i = m.filters) ? void 0 : i.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: rk().shimmer,
                                });
                        });
                    return (0, o.jsx)(tN._, {
                        sourceContextData: j,
                        children: (0, o.jsx)(ew.$, {
                            isShimmerActive: y,
                            shimmer: (0, o.jsx)(eO.D, { variant: ek.X.PLAYLIST, isActive: y }),
                            maxColumnsCount: ew.D.TWO,
                            itemsCountPerColumn: 4,
                            className: p,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: R,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: c,
                            carouselClassName: l,
                            blockHeaderTitle: d.title,
                            blockHeaderCoverUrl: d.coverUri,
                            blockHeaderDescription: I,
                            viewAllActionLink: null == m ? void 0 : m.playlist.url,
                            ref: a,
                            blockHeaderHeadingVariant: _,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: d.coverStyle !== rb.z.NONE,
                            beforeCarousel: w,
                            ...v,
                            children:
                                (null == m ? void 0 : m.items) && rA({ items: m.items, playlistId: m.playlist.id, playlistUuid: m.playlist.uuid, from: C, utmLink: A }),
                        }),
                    });
                }),
                rO = (0, n.forwardRef)((e, t) => (0, o.jsx)(rw, { forwardRef: t, ...e }));
            var rP = i(35262),
                rM = i(50441),
                rD = i.n(rM);
            let rB = (e) => {
                let { promotion: t } = e,
                    { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                    s = (0, N.N)(),
                    { advDisclaimer: r } = t,
                    [l, d] = (0, n.useState)(!1),
                    _ = (0, n.useCallback)(() => {
                        s({ to: c.AppScreen.Link });
                    }, [s]);
                return (0, o.jsxs)('div', {
                    className: (0, m.$)(rD().root, rD().card),
                    ref: i,
                    'data-intersection-property-id': a,
                    'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS_CARD,
                    children: [
                        (0, o.jsxs)('div', {
                            className: rD().meta,
                            children: [
                                (0, o.jsx)(O.N, {
                                    className: rD().titleLink,
                                    href: t.weblink,
                                    onClick: _,
                                    children: (0, o.jsx)(C.HL, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, o.jsx)(C.HL, {
                                    className: rD().subtitle,
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
                            className: rD().coverWrapper,
                            children: [
                                (0, o.jsx)(O.N, {
                                    className: rD().coverLink,
                                    href: t.weblink,
                                    onClick: _,
                                    'aria-hidden': !0,
                                    tabIndex: -1,
                                    children: (0, o.jsx)(x.t, {
                                        className: rD().cover,
                                        radius: 'm',
                                        withShadow: !0,
                                        children: (0, o.jsx)(t3._V, {
                                            className: rD().image,
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
                                        className: rD().advDisclaimer,
                                        children: (0, o.jsxs)(rP.AM, {
                                            placement: 'top-end',
                                            open: l,
                                            onOpenChange: d,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(a3.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: rD().advDisclaimerTrigger,
                                                    'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(p.A, { id: 'ads.ad' }), (0, o.jsx)(iH.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(rP.hl, {
                                                    className: rD().advDisclaimerPopover,
                                                    children: (0, o.jsx)(C.HL, {
                                                        className: rD().advDisclaimerText,
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
            var rV = i(53367),
                rU = i.n(rV),
                rW = i(24850),
                rz = i.n(rW);
            let rH = (e) => {
                    let { isActive: t, withHeadingShimmer: i } = e;
                    return (0, o.jsxs)('div', {
                        className: rz().root,
                        children: [
                            (0, o.jsx)(il.W, { isActive: t, className: rz().cover, radius: 'l' }),
                            (0, o.jsxs)('div', {
                                className: rz().meta,
                                children: [
                                    i && (0, o.jsx)(il.W, { isActive: t, className: rz().heading, radius: 's' }),
                                    (0, o.jsx)(il.W, { isActive: t, className: rz().title, radius: 's' }),
                                    (0, o.jsx)(il.W, { isActive: t, className: rz().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                rK = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            data: s,
                            meta: r,
                            containerClassName: l,
                            headerClassName: _,
                            headingVariant: u,
                            className: p,
                            ...h
                        } = e,
                        b = (0, n.useId)(),
                        x = (0, n.useRef)(null),
                        C = (0, n.useMemo)(() => {
                            if (i) return Array.from({ length: 6 }, (e, t) => (0, o.jsx)(rH, { isActive: a, withHeadingShimmer: !0 }, t));
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
                                              children: (0, o.jsx)(rB, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == s ? void 0 : s.items, a, i]);
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(rU().root, p),
                        ref: t,
                        ...(0, V.OZ)(h),
                        'data-test-id': v.e8.landing.EDITORIAL_PROMOTIONS,
                        children: [
                            (0, o.jsx)(W.T, {
                                className: _,
                                labeledForId: b,
                                title: r.title,
                                controls: (0, o.jsx)(z.X, { className: rU().controls, carouselRef: x }),
                                headingVariant: u,
                            }),
                            (0, o.jsx)(U.F, { className: l, ref: x, itemClassName: (0, m.$)(rU().item, rU().important), 'aria-labelledby': b, children: C }),
                        ],
                    });
                },
                rY = (0, n.forwardRef)((e, t) => (0, o.jsx)(rK, { forwardRef: t, ...e }));
            var r$ = i(51150),
                rF = i(53690),
                rG = i(42574),
                rX = i(82196),
                rZ = i(59925),
                rQ = i(42966),
                rq = i(49337),
                rJ = i(13728),
                r0 = i.n(rJ);
            let r1 = (0, _.PA)((e) => {
                var t, i;
                let { isLoading: a, onRefetch: s, onStartLoading: r } = e,
                    { lumen: n } = (0, E.g)(),
                    { theme: l } = (0, aa.W)(),
                    { awakeLumenModal: d, requestAwakeLumenModal: _ } = (0, rX.z)(),
                    p = (0, N.N)(),
                    h = (0, rQ.m)(),
                    { formatMessage: x } = (0, u.A)(),
                    C = null != l ? l : rq.S.Dark,
                    A = n.getFallbackImage(),
                    j = n.isEnabled && null != (i = null == (t = n.themes) ? void 0 : t[C].uri) ? i : A[C],
                    T = n.isEnabled && !n.isAwakened,
                    f = n.isEnabled && n.isAwakened,
                    I = (0, b.c)(() => {
                        (p({ to: c.AppScreen.LumenAwakeningScreen, objectId: '', objectType: c.DomainObjectType.LumenUnawakened }), _(() => void 0));
                    }),
                    g = (0, b.c)(() => {
                        a || (h({ actionType: c.ActionType.Refresh, userInteractionType: c.UserInteractionType.Tap }), r(), s());
                    }),
                    S = (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(rZ.e, { className: r0().haze }),
                            (0, o.jsx)(t3._V, {
                                alt: '',
                                className: (0, m.$)(r0().image, r0().imageBlurred),
                                src: j,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                            (0, o.jsx)(t3._V, {
                                alt: '',
                                className: r0().image,
                                src: j,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                        ],
                    }),
                    y = (0, eK.L)(() =>
                        T
                            ? (0, o.jsx)('button', {
                                  type: 'button',
                                  className: (0, m.$)(r0().root, r0().root_clickable),
                                  onClick: I,
                                  'data-test-id': v.e8.landing.Q2V_AWAKE_LUMEN_BUTTON,
                                  children: S,
                              })
                            : f
                              ? (0, o.jsx)('button', {
                                    type: 'button',
                                    className: (0, m.$)(r0().root, r0().root_clickable),
                                    disabled: a,
                                    'aria-label': x({ id: 'interface-actions.reload-part-page' }),
                                    onClick: g,
                                    'data-test-id': v.e8.landing.Q2V_REFETCH_SUGGESTIONS_BUTTON,
                                    children: S,
                                })
                              : (0, o.jsx)('div', { className: r0().root, 'aria-hidden': !0, children: S }),
                    );
                return (0, o.jsxs)(o.Fragment, { children: [d, y] });
            });
            !(function (e) {
                ((e.VIEW = 'VIEW'), (e.CLICK = 'CLICK'));
            })(s || (s = {}));
            var r2 = i(3669),
                r8 = i(87982),
                r3 = i.n(r8);
            let r4 = (e) => {
                let { handleFeedBack: t, onSelect: i, position: a, query: r, suggestionsRequestId: n } = e,
                    l = (0, r2.D)(),
                    d = (0, rQ.m)(),
                    m = (0, b.c)((e, i) => {
                        (l(e, null != i ? i : ''), e && t({ type: s.VIEW, query: r, suggestionsRequestId: n, position: a }));
                    }),
                    { ref: _, intersectionPropertyId: u } = (0, I.n)({ callback: m }),
                    p = (0, b.c)(() => {
                        (d({ actionType: c.ActionType.SearchItemSelected, userInteractionType: c.UserInteractionType.Tap }),
                            t({ type: s.CLICK, query: r, suggestionsRequestId: n, position: a }),
                            null == i || i(r));
                    });
                return (0, o.jsx)('button', {
                    ref: _,
                    className: r3().root,
                    'data-intersection-property-id': u,
                    'data-test-id': v.e8.landing.Q2V_SUGGESTION_BUTTON,
                    type: 'button',
                    onClick: p,
                    children: (0, o.jsx)(C.HL, { className: r3().text, size: 'm', weight: 'medium', variant: 'span', type: 'text', lineClamp: 2, children: r }),
                });
            };
            var r9 = i(18791),
                r6 = i.n(r9);
            let r7 = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            data: i,
                            className: a,
                            containerClassName: s,
                            isShimmerVisible: r,
                            isShimmerActive: l,
                            setIsNeededToLoad: _,
                            onRefetch: u,
                            ...v
                        } = e,
                        h = (0, rG.u)(),
                        {
                            search: b,
                            settings: { isMobile: x },
                        } = (0, E.g)(),
                        A = (0, n.useRef)(null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: T, shouldHideControls: N } = (0, a8.Y)(A),
                        { state: f, handleDebouncedToggle: I } = (0, r$.F)({ delay: 1500, throttleTimeout: 0 });
                    ((0, n.useEffect)(() => {
                        r && l && I();
                    }, [l, r, I]),
                        (0, n.useEffect)(
                            () => () => {
                                b.sendQ2vSuggestionFeedbacks();
                            },
                            [null == i ? void 0 : i.suggestionsRequestId, b],
                        ));
                    let g = l || f,
                        S = (0, eK.L)(() =>
                            g
                                ? (0, o.jsx)(C.HL, {
                                      className: r6().loadingText,
                                      size: 'm',
                                      weight: 'medium',
                                      variant: 'span',
                                      type: 'text',
                                      children: (0, o.jsx)(p.A, { id: 'search.q2v-suggestions-loading' }),
                                  })
                                : (0, o.jsxs)('div', {
                                      className: (0, m.$)(r6().carouselWithArrows, {
                                          [r6().carouselWithArrows_arrowLeft_hidden]: j,
                                          [r6().carouselWithArrows_arrowRight_hidden]: T,
                                          [r6().carouselWithArrows_arrow_hidden]: N,
                                      }),
                                      children: [
                                          (0, o.jsx)(U.F, {
                                              ref: A,
                                              className: r6().carousel,
                                              itemClassName: r6().item,
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
                                                                    children: (0, o.jsx)(r4, {
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
                                          !x && (0, o.jsx)(z.X, { className: r6().controls, carouselRef: A }),
                                      ],
                                  }),
                        ),
                        y = { '--q2v-accent-color': rF.R };
                    return (0, o.jsxs)('div', {
                        ref: t,
                        className: (0, m.$)(r6().root, s, a),
                        style: y,
                        ...(0, V.OZ)(v),
                        children: [
                            (0, o.jsx)(d.B, {
                                objectType: c.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 0,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(r1, { isLoading: g, onRefetch: null != u ? u : _, onStartLoading: I }),
                            }),
                            S,
                        ],
                    });
                }),
                r5 = (0, n.forwardRef)((e, t) => (0, o.jsx)(r7, { forwardRef: t, ...e })),
                oe = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: n,
                        data: l,
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
                        title: n.title,
                        description: n.description,
                        viewAllActionLink: n.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == l
                                ? void 0
                                : l.items.map((e, t) => {
                                      switch (e.type) {
                                          case tD._.ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(tv.a, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case tD._.ARTIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(tQ.a, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case tD._.PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  d.B,
                                                  {
                                                      objectType: c.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: l.items.length,
                                                      children: (0, o.jsx)(iT.B, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                ot = (0, n.forwardRef)((e, t) => (0, o.jsx)(oe, { forwardRef: t, ...e }));
            var oi = i(28045),
                oa = i(51011),
                os = i(25323),
                or = i(18608),
                oo = i(68224),
                on = i(18483),
                ol = i(26237),
                oc = i(32911),
                od = i(51707),
                om = i(98031),
                o_ = i(57138),
                ou = i(960),
                op = i.n(ou);
            let ov = (e) => {
                let { isActive: t, className: i, ariaLabel: a } = e;
                return (0, o.jsxs)('div', {
                    'aria-label': a,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, m.$)(op().root, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: op().infoContainer,
                            children: [
                                (0, o.jsx)(il.W, { isActive: t, className: op().cover, radius: 's' }),
                                (0, o.jsx)('div', { className: op().textContainer, children: (0, o.jsx)(il.W, { isActive: t, className: op().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, o.jsx)(il.W, { isActive: t, className: op().action, radius: 'l' }),
                    ],
                });
            };
            var oh = i(28189),
                ob = i.n(oh);
            let ox = (0, _.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            data: s,
                            meta: r,
                            isLoaded: l,
                            headerClassName: _,
                            setIsNeededToLoad: h,
                            tracksContainerClassName: b,
                            className: x,
                            ...A
                        } = e,
                        { formatMessage: j } = (0, u.A)(),
                        {
                            search: { history: T },
                        } = (0, E.g)(),
                        N = (0, on.d)(),
                        f = !(null == s ? void 0 : s.items.length) && l,
                        I = (0, ol.f)(),
                        { awakeLumenModal: g, requestAwakeLumenModal: S } = (0, rX.z)();
                    return ((0, n.useLayoutEffect)(
                        () => (
                            T.shouldUpdateHistory && (h(), T.setShouldUpdateHistory(!1)),
                            () => {
                                (T.hasCleared && h(), T.reset());
                            }
                        ),
                        [T, h],
                    ),
                    f || T.hasCleared)
                        ? (0, o.jsx)('div', {
                              ref: t,
                              className: (0, m.$)(ob().root, ob().fallback),
                              ...(0, V.OZ)(A),
                              'data-test-id': v.e8.landing.SEARCH_HISTORY_EMPTY,
                              children: (0, o.jsx)(C.HL, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, o.jsx)(p.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, o.jsxs)('div', {
                              ref: t,
                              className: ob().root,
                              ...(0, V.OZ)(A),
                              'data-test-id': v.e8.landing.SEARCH_HISTORY,
                              children: [
                                  g,
                                  (0, o.jsx)(ew.$, {
                                      className: x,
                                      shimmer: (0, o.jsx)(ov, { isActive: i }),
                                      isShimmerActive: i,
                                      isShimmerVisible: a,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: ew.D.TWO,
                                      blockHeaderClassName: _,
                                      carouselClassName: (0, m.$)(b, ob().content),
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
                                                        objectPosY: n,
                                                        objectsCount: l,
                                                    } = (0, ej.$)({ index: t, count: s.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case tD._.NON_MUSIC_ALBUM_ITEM:
                                                        case tD._.ALBUM_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(oi.M, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tD._.ARTIST_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(oa.c, { description: j({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tD._.TRACK_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(oo.c, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tD._.LIKED_PLAYLIST_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(or.v, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tD._.WAVE_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Wave,
                                                                    objectId: null != (i = e.data.vibe.seeds[0]) ? i : '',
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(om.H, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case tD._.WAVE_AGENT_ITEM:
                                                            return (0, o.jsx)(
                                                                d.B,
                                                                {
                                                                    objectType: c.DomainObjectType.Wave,
                                                                    objectId: null != (a = e.data.seeds[0]) ? a : '',
                                                                    objectPosX: r,
                                                                    objectPosY: n,
                                                                    objectsCount: l,
                                                                    children: (0, o.jsx)(om.H, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: oc.h.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case tD._.CLIP_ITEM:
                                                            if (!N) return null;
                                                            return (0, o.jsx)(os.N, { clip: e.data }, e.data.clipId);
                                                        case tD._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                I &&
                                                                (0, o.jsx)(o_.F, {
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
                                                                            children: (0, o.jsx)(od.K, { requestAwakeLumenModal: S, vibe: e.data }),
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
                                  l &&
                                      (0, o.jsx)(a3.$, {
                                          onClick: T.clear,
                                          className: ob().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          'data-test-id': v.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON,
                                          children: (0, o.jsx)(p.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                oC = (0, n.forwardRef)((e, t) => (0, o.jsx)(ox, { forwardRef: t, ...e }));
            var oA = i(74509),
                oj = i.n(oA);
            let oT = (0, _.PA)((e) => {
                    var t, i, a, s, r, l, c, d, m;
                    let { containerClassName: _, meta: u, data: h, forwardRef: b, headingVariant: x = 'h2', ...A } = e,
                        j = (0, R.Z)(null != (m = null == h ? void 0 : h.weblink) ? m : ''),
                        { theme: T } = (0, aa.W)(),
                        N = null == h ? void 0 : h.advDisclaimer,
                        [f, I] = (0, n.useState)(!1),
                        g =
                            T === rq.S.Light
                                ? null == h || null == (t = h.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == h || null == (i = h.darkTheme)
                                  ? void 0
                                  : i.imageUrl,
                        S = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    T === rq.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [T, null == h || null == (a = h.darkTheme) ? void 0 : a.textColor, null == h || null == (s = h.lightTheme) ? void 0 : s.textColor]),
                        y = (0, n.useMemo)(() => {
                            var e, t, i, a;
                            return {
                                '--button-color':
                                    T === rq.S.Light
                                        ? null == h || null == (e = h.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == h || null == (t = h.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    T === rq.S.Light
                                        ? null == h || null == (i = h.lightTheme)
                                            ? void 0
                                            : i.buttonTextColor
                                        : null == h || null == (a = h.darkTheme)
                                          ? void 0
                                          : a.buttonTextColor,
                            };
                        }, [
                            T,
                            null == h || null == (r = h.darkTheme) ? void 0 : r.buttonColor,
                            null == h || null == (l = h.lightTheme) ? void 0 : l.buttonColor,
                            null == h || null == (c = h.darkTheme) ? void 0 : c.buttonTextColor,
                            null == h || null == (d = h.lightTheme) ? void 0 : d.buttonTextColor,
                        ]);
                    return (0, o.jsx)('section', {
                        ref: b,
                        title: u.title,
                        className: _,
                        ...(0, V.OZ)(A),
                        children: (0, o.jsxs)('div', {
                            className: oj().root,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: oj().actions,
                                    children: [
                                        (0, o.jsxs)('div', {
                                            className: oj().textContainer,
                                            children: [
                                                !!(null == h ? void 0 : h.title) &&
                                                    (0, o.jsx)(C.DZ, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: oj().textColor,
                                                        lineClamp: 2,
                                                        variant: x,
                                                        style: S,
                                                        children: null == h ? void 0 : h.title,
                                                    }),
                                                !!(null == h ? void 0 : h.subtitle) &&
                                                    (0, o.jsx)(C.HL, {
                                                        className: oj().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: S,
                                                        children: null == h ? void 0 : h.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == h ? void 0 : h.weblink) &&
                                            !!(null == h ? void 0 : h.buttonTitle) &&
                                            (0, o.jsx)(a3.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: oj().button,
                                                role: 'link',
                                                onClick: j,
                                                style: y,
                                                children: (0, o.jsx)(C.HL, {
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
                                    className: oj().imageContainer,
                                    children: (0, o.jsx)(t3._V, {
                                        src: g || (null == h ? void 0 : h.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: oj().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                                N &&
                                    (0, o.jsx)('div', {
                                        className: oj().advDisclaimer,
                                        children: (0, o.jsxs)(rP.AM, {
                                            placement: 'top-end',
                                            open: f,
                                            onOpenChange: I,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(a3.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: oj().advDisclaimerTrigger,
                                                    'data-test-id': v.e8.landing.SPECIAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(p.A, { id: 'ads.ad' }), (0, o.jsx)(iH.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(rP.hl, {
                                                    className: oj().advDisclaimerPopover,
                                                    children: (0, o.jsx)(C.HL, {
                                                        className: oj().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': v.e8.landing.SPECIAL_ADV_DISCLAIMER_TEXT,
                                                        children: N,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    });
                }),
                oN = (0, n.forwardRef)((e, t) => (0, o.jsx)(oT, { forwardRef: t, ...e }));
            var of = i(31585),
                oI = i.n(of);
            let og = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: c,
                            headingVariant: d,
                            className: _,
                            ...u
                        } = e,
                        p = (0, n.useId)(),
                        v = (0, tB.zb)(0),
                        h = (0, n.useRef)(null),
                        b = (0, n.useId)(),
                        x = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(ss, {
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
                                                tB.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: v.value,
                                                    elementId: b,
                                                    children: (0, o.jsx)(sa, {
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
                        className: (0, m.$)(oI().root, _),
                        ref: t,
                        ...(0, V.OZ)(u),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(r, oI().header, oI().important),
                                title: l.title,
                                description: l.description,
                                labeledForId: p,
                                viewAllActionLink: l.viewAllActionLink,
                                controls: (0, o.jsx)(z.X, { className: oI().controls, carouselRef: h }),
                                headingVariant: d,
                                withDescription: !!l.description,
                            }),
                            (0, o.jsx)(tz.wI, {
                                isShimmerVisible: i,
                                className: (0, m.$)(s, oI().tabCarousel, oI().important),
                                elementId: b,
                                shimmer: (0, o.jsx)(tz.zr, { isActive: a, className: (0, m.$)(s, oI().tabCarousel, oI().important), shimmerClassName: oI().tabShimmer }),
                                'aria-labelledby': p,
                                ...v,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tW.o,
                                                  { className: (0, m.$)(oI().tab, oI().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            x,
                        ],
                    });
                },
                oS = (0, n.forwardRef)((e, t) => (0, o.jsx)(og, { forwardRef: t, ...e }));
            var oy = i(58223),
                oR = i.n(oy);
            let oL = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: l,
                            meta: _,
                            data: u,
                            headingVariant: p,
                            className: v,
                            ...h
                        } = e,
                        b = (0, n.useId)(),
                        x = (0, tB.zb)(0),
                        C = (0, n.useRef)(null),
                        A = (0, n.useId)(),
                        j = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, o.jsx)(U.F, {
                                          ref: C,
                                          itemClassName: (0, m.$)(oR().item, oR().important),
                                          className: r,
                                          'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                          children: (0, tU.k)({ isActive: s, centered: !0 }),
                                      })
                                    : null == u
                                      ? void 0
                                      : u.items.map((e) => {
                                            var t;
                                            return (0, o.jsx)(
                                                tB.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: x.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(U.F, {
                                                        ref: C,
                                                        itemClassName: (0, m.$)(oR().item, oR().important),
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
                                                                              children: (0, o.jsx)(iQ.y, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == u ? void 0 : u.items, a, s, r, b, x.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, m.$)(oR().root, v),
                        ref: i,
                        ...(0, V.OZ)(h),
                        children: [
                            (0, o.jsx)(W.T, {
                                className: (0, m.$)(l, oR().header, oR().important),
                                title: _.title,
                                description: _.description,
                                labeledForId: b,
                                viewAllActionLink: _.viewAllActionLink,
                                controls: (0, o.jsx)(z.X, { className: oR().controls, carouselRef: C }),
                                headingVariant: p,
                                withDescription: !!_.description,
                            }),
                            (0, o.jsx)(tz.wI, {
                                isShimmerVisible: a,
                                className: (0, m.$)(r, oR().tabCarousel, oR().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tz.zr, { isActive: s, className: (0, m.$)(r, oR().tabCarousel, oR().important), shimmerClassName: oR().tabShimmer }),
                                'aria-labelledby': b,
                                ...x,
                                children:
                                    null == u || null == (t = u.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  tW.o,
                                                  { className: (0, m.$)(oR().tab, oR().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                },
                oE = (0, n.forwardRef)((e, t) => (0, o.jsx)(oL, { forwardRef: t, ...e }));
            var ok = i(27819),
                ow = i(421),
                oO = i.n(ow),
                oP = i(36648),
                oM = i(47943),
                oD = i.n(oM);
            let oB = (0, _.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, E.g)();
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(oP.n, { isActive: !0, className: oD().titleShimmer, textClassName: oD().titleTextShimmer }),
                            (0, o.jsx)(oP.n, { isActive: !0, className: oD().descriptionShimmer, textClassName: oD().textShimmer }),
                            (0, o.jsx)(oP.n, { isActive: !0, className: oD().descriptionShimmer, textClassName: oD().textShimmer }),
                            (0, o.jsx)(oP.n, { isActive: !0, className: oD().descriptionShimmer, textClassName: oD().textShimmer }),
                            e &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(oP.n, { isActive: !0, className: oD().descriptionShimmer, textClassName: oD().textShimmer }),
                                        (0, o.jsx)(oP.n, { isActive: !0, className: oD().descriptionShimmer, textClassName: oD().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                oV = Array.from({ length: 3 }, () => ok.A.src),
                oU = (0, _.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, data: a, headingVariant: s = 'h2' } = e,
                        { formatMessage: r } = (0, u.A)(),
                        { wizard: l } = (0, E.g)(),
                        c = (0, n.useMemo)(
                            () =>
                                (0, o.jsx)('div', {
                                    className: oO().images,
                                    'data-test-id': v.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    children: oV.map((e, t) => {
                                        var i;
                                        let s = null == a || null == (i = a.artists[t]) ? void 0 : i.coverUri;
                                        return (0, o.jsx)(
                                            x.t,
                                            {
                                                className: oO().paper,
                                                radius: 'round',
                                                children: (0, o.jsx)(t3._V, {
                                                    className: oO().image,
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
                        d = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(oB, {})
                                    : (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              (0, o.jsx)(C.DZ, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: oO().title,
                                                  'data-test-id': v.e8.landing.WIZARD_BLOCK_TITLE,
                                                  children: null == a ? void 0 : a.title,
                                              }),
                                              (null == a ? void 0 : a.description) &&
                                                  (0, o.jsx)(C.DZ, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: oO().description,
                                                      lineClamp: 5,
                                                      'data-test-id': v.e8.landing.WIZARD_BLOCK_TEXT,
                                                      children: a.description,
                                                  }),
                                          ],
                                      }),
                            [i, s, null == a ? void 0 : a.title, null == a ? void 0 : a.description],
                        );
                    return (0, o.jsxs)('section', {
                        className: oO().root,
                        ref: t,
                        'data-test-id': v.e8.landing.WIZARD_BLOCK,
                        children: [
                            c,
                            d,
                            (0, o.jsx)(a3.$, {
                                className: oO().button,
                                icon: (0, o.jsx)(iH.I, { variant: 'link', size: 'xxs', className: oO().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: l.modal.open,
                                'data-test-id': v.e8.landing.WIZARD_BLOCK_BUTTON,
                                children: r({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                oW = (0, n.forwardRef)((e, t) => (0, o.jsx)(oU, { forwardRef: t, ...e })),
                oz = {
                    [r.t.COLLECTION_PLAYLIST_WITH_LIKES]: ry,
                    [r.t.COLLECTION_FAVOURITE_PLAYLIST]: rO,
                    [r.t.OPEN_PLAYLIST]: ry,
                    [r.t.SMART_OPEN_PLAYLIST]: ry,
                    [r.t.NON_MUSIC_OPEN_PLAYLIST]: ry,
                    [r.t.COLLECTION_ARTISTS]: t2,
                    [r.t.COLLECTION_ARTISTS_AND_TOP]: t2,
                    [r.t.PERSONAL_ARTISTS]: t2,
                    [r.t.NEW_STARS_ARTISTS]: t2,
                    [r.t.EDITORIAL_ARTISTS]: t2,
                    [r.t.META_TAG_POPULAR_ARTISTS]: t2,
                    [r.t.MICRO_GENRE_ARTISTS]: t2,
                    [r.t.MICRO_GENRE_TOP_ARTISTS]: t2,
                    [r.t.META_TAG_ARTISTS]: t2,
                    [r.t.SIMILAR_ARTISTS]: t2,
                    [r.t.NEW_RELEASES]: rr,
                    [r.t.EDITORIAL_NEW_RELEASES]: rr,
                    [r.t.NEW_PLAYLISTS]: su.Q,
                    [r.t.EDITORIAL_COMPILATION]: su.Q,
                    [r.t.RECOMMENDED_PLAYLISTS]: su.Q,
                    [r.t.META_TAG_POPULAR_PLAYLISTS]: su.Q,
                    [r.t.META_TAG_PLAYLISTS]: su.Q,
                    [r.t.META_TAG_NEW_ALBUMS]: su.Q,
                    [r.t.MICRO_GENRE_ALBUMS]: su.Q,
                    [r.t.META_TAG_ALBUMS]: su.Q,
                    [r.t.ARTIST_PLAYLISTS]: su.Q,
                    [r.t.ARTIST_ALBUMS]: su.Q,
                    [r.t.ARTIST_COMPILATIONS]: su.Q,
                    [r.t.ARTIST_STUDIO_ALBUMS]: su.Q,
                    [r.t.ARTIST_SIMILAR_ENTITIES]: su.Q,
                    [r.t.COLLECTION_SIMILAR_ENTITIES]: su.Q,
                    [r.t.PROMOTIONS]: rY,
                    [r.t.EDITORIAL_PROMOTIONS]: rY,
                    [r.t.NON_MUSIC_PROMOTIONS]: rY,
                    [r.t.Q2V_SUGGESTIONS]: r5,
                    [r.t.PERSONAL_PLAYLISTS]: rh,
                    [r.t.REWIND_PLAYLISTS]: rh,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE]: sl,
                    [r.t.META_TAG_SIMILAR_WAVE]: sl,
                    [r.t.EDITORIAL_WAVES]: sl,
                    [r.t.META_TAG_WAVE]: sl,
                    [r.t.MICRO_GENRE_WAVE]: sl,
                    [r.t.EDITORIAL_WAVES_AGENT]: s_,
                    [r.t.META_TAG_WAVE_AGENT]: s_,
                    [r.t.MICRO_GENRE_WAVE_AGENT]: s_,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: s_,
                    [r.t.META_TAG_SIMILAR_WAVE_AGENT]: s_,
                    [r.t.CONCERTS_PERSONAL]: aE,
                    [r.t.CONCERTS_TOP]: aE,
                    [r.t.EDITORIAL_CONCERTS]: aE,
                    [r.t.VIEWED_CONCERTS]: aE,
                    [r.t.CLIPS]: tL,
                    [r.t.ARTIST_CLIPS]: tL,
                    [r.t.WAVES]: oS,
                    [r.t.SETS_BY_WAVES]: oS,
                    [r.t.WAVES_AGENT]: oE,
                    [r.t.SETS_BY_WAVES_AGENT]: oE,
                    [r.t.CHART_TRACKS]: tg,
                    [r.t.COLLECTION_KIDS]: iE,
                    [r.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: iW,
                    [r.t.COLLECTION_PLAYLISTS_CREATED]: ig,
                    [r.t.COLLECTION_PLAYLISTS_LIKED]: iw,
                    [r.t.ALBUM_PROMO]: ei,
                    [r.t.ARTIST_RECOMMENDATIONS_PROMO]: te,
                    [r.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO]: tp,
                    [r.t.SIMPLE_ALBUM_PROMO]: ed,
                    [r.t.ITEM_LIST]: sg,
                    [r.t.OVERVIEW]: rp,
                    [r.t.COLLECTION_ALBUMS]: tM,
                    [r.t.COLLECTION_CLIPS]: ij,
                    [r.t.COLLECTION_TOP_ARTISTS]: iZ,
                    [r.t.RECENTLY_PLAYED]: ot,
                    [r.t.IN_STYLE]: sj,
                    [r.t.SPECIAL]: oN,
                    [r.t.WIZARD]: oW,
                    [r.t.MIXES]: sV,
                    [r.t.MIXES_GRID]: sY,
                    [r.t.MIXES_MUSIC]: sX,
                    [r.t.NEUROMUSIC]: s8,
                    [r.t.CONCERT_PLACE]: av,
                    [r.t.LIKES_AND_HISTORY]: sO,
                    [r.t.NON_MUSIC_EDITORIAL_COMPILATION]: rc,
                    [r.t.COLLECTION_ALBUMS_PRESAVES]: tZ,
                    [r.t.CHART_ALBUMS]: rn,
                    [r.t.DONATIONS]: a2,
                    [r.t.CONTINUE_LISTEN]: a$,
                    [r.t.DISLIKES]: aG,
                    [r.t.COLLECTION_DOWNLOADED_TRACKS]: iy,
                    [r.t.HISTORY]: oC,
                    [r.t.SEARCH_HISTORY]: oC,
                    [r.t.ARTIST_CONCERTS]: ef,
                    [r.t.ARTIST_POPULAR_TRACKS]: eB,
                    [r.t.ARTIST_RELEASE]: tx,
                    [r.t.FAMILIAR_YOU]: sb,
                    [r.t.ARTIST_PICK]: eL,
                    [r.t.ARTIST_UPCOMING_RELEASE]: tj,
                    [r.t.COLLECTION_WAVE_AGENT]: i2,
                    [r.t.COLLECTION_WAVE_ROOMS]: ai,
                    [r.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: ih,
                    [r.t.NON_MUSIC_CATEGORY]: rc,
                    [r.t.PODCASTS_CHART_ALBUMS]: rn,
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
        16351: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => z });
            var a = i(25839),
                s = i(10648),
                r = i(57249),
                o = i(82298),
                n = i(88204),
                l = i(13624),
                c = i(84059),
                d = i(74631),
                m = i(39004),
                _ = i(36619),
                u = i(61493),
                p = i(71035),
                v = i(23818),
                h = i(4254),
                b = i(61777),
                x = i(29481),
                C = i(47009),
                A = i(26742),
                j = i(52512),
                T = i(97952),
                N = i(85743),
                f = i(87201),
                I = i(27954),
                g = i(49337),
                S = i(96618),
                y = i(17226),
                R = i(6969),
                L = i(63494),
                E = i(79856),
                k = i.n(E),
                w = i(77698),
                O = i(74987);
            let P = async (e, t) => {
                let { loop: i = !1, markerId: a, frameRange: s, mode: r = 'forward' } = t,
                    o = null,
                    n = null;
                if (a) {
                    let t = e.markers().find((e) => e.name === a);
                    if (!t) return;
                    ((o = t.time), (n = t.time + t.duration));
                } else if (s) {
                    var l;
                    ((o = s.start), (n = null != (l = s.end) ? l : e.totalFrames));
                }
                null !== o &&
                    null !== n &&
                    (await Promise.all([e.setLoop(i), e.setMode(r), e.setSegment(o, n), e.setFrame('reverse' === r ? n : o)]), o !== n && (await e.play()));
            };
            var M = i(42393),
                D = i.n(M),
                B = i(49124);
            let V = { align: [0, 0.5], fit: 'contain' },
                U = { autoResize: !0, freezeOnOffscreen: !1 },
                W = l.default.default(
                    () =>
                        Promise.resolve()
                            .then(i.bind(i, 10648))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = B.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, s.setWasmUrl)(new URL(r, e).href);
            }
            let z = (0, n.PA)((e) => {
                var t, i, s, r, n, l;
                let { animationByTheme: E, animationConfig: M, className: B, lumenImages: z, requestAwakeLumenModal: H, vibe: K } = e,
                    { formatMessage: Y } = (0, m.A)(),
                    $ = (0, c.useSearchParams)(),
                    F = (0, L.z)(),
                    { pageId: G } = (0, T.$)(),
                    { blockIdForFrom: X } = (0, A.N)(),
                    { sendPlaySearchFeedback: Z } = (0, N.z)(),
                    Q = (0, C.b)(),
                    q = (0, x.N)(),
                    J = (0, b.f)(),
                    { ref: ee, intersectionPropertyId: et } = (0, j.n)(),
                    ei = (0, S.W)(),
                    { lumen: ea } = (0, I.g)(),
                    es = 'true' === $.get(R.K.LUMEN_AWAKE_PARAM),
                    er = ea.isEnabled && !ea.isTriedToLoadData,
                    eo = ea.isEnabled && !ea.isAwakened,
                    en = null != (i = ei.theme) ? i : g.S.Dark,
                    el = ea.getFallbackImage(),
                    ec = (0, d.useRef)(!1),
                    ed = (0, d.useRef)(M[K ? 'idle' : 'loading']),
                    em = (0, d.useRef)(void 0),
                    [e_, eu] = (0, d.useState)(null),
                    {
                        isPlaying: ep,
                        togglePlay: ev,
                        isCurrent: eh,
                    } = (0, f.B)({ blockIdForFrom: X, pageIdForFrom: G, seeds: null != (s = null == K ? void 0 : K.seeds) ? s : [] });
                ((0, d.useEffect)(() => J(), [J]),
                    (0, d.useEffect)(() => {
                        if (!e_ || ec.current) return;
                        let e = () => {
                            ((ec.current = !0), P(e_, ed.current));
                        };
                        return (e_.addEventListener('load', e), () => e_.removeEventListener('load', e));
                    }, [e_]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, i, a) =>
                            i || e === (null == a ? void 0 : a.loading)
                                ? t
                                    ? null == a
                                        ? void 0
                                        : a.playing
                                    : e === a.playing
                                      ? null == a
                                          ? void 0
                                          : a.paused
                                      : e === a.loading
                                        ? null == a
                                            ? void 0
                                            : a.idle
                                        : null
                                : null == a
                                  ? void 0
                                  : a.loading)(ed.current, ep, !!K, M);
                        e && e !== ed.current && ((ed.current = e), e_ && ec.current && P(e_, e));
                    }, [M, e_, eh, ep, K]));
                let eb = (0, p.c)(() => {
                    (em.current === (null == K ? void 0 : K.seedsId) || ep || ((em.current = null == K ? void 0 : K.seedsId), null == Z || Z()), ev(), Q(!0));
                });
                (0, d.useEffect)(() => {
                    es && !er && K && (eo && (null == H || H(eb)), F([R.K.LUMEN_AWAKE_PARAM]));
                }, [H, F, es, eo, er, eb, K]);
                let ex = (0, p.c)(() => {
                        if (K) {
                            if (ep) {
                                (ev(), Q(!1));
                                return;
                            }
                            if (eo) {
                                (q({ to: _.AppScreen.LumenAwakeningScreen }), null == H || H(eb));
                                return;
                            }
                            eb();
                        }
                    }),
                    eC = (0, p.c)((e) => {
                        (e.code === y.v.SPACE || e.code === y.v.ENTER) && (e.preventDefault(), ex());
                    }),
                    eA = null != (r = null == K ? void 0 : K.title) ? r : Y({ id: 'entity-names.query-to-vibe-loading-title' }),
                    ej = null != (n = null == K ? void 0 : K.description) ? n : Y({ id: 'entity-names.query-to-vibe-loading-description' }),
                    eT = !ea.isEnabled || ea.isTriedToLoadData,
                    eN = ea.isEnabled ? (null != (l = null == ea || null == (t = ea.themes) ? void 0 : t[en].uri) ? l : el[en]) : (null != z ? z : el)[en],
                    ef = K ? u.OA.vibe.QUERY_TO_VIBE_BLOCK : u.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    eI = K && (!ea.isEnabled || ea.isTriedToLoadData);
                return (0, a.jsxs)('div', {
                    'aria-label': eA,
                    'aria-description': ej,
                    className: (0, o.$)(k().root, D().root, { [D().root_loading]: !K }, B),
                    tabIndex: 0,
                    onClick: ex,
                    onKeyDown: eC,
                    'data-test-id': ef,
                    children: [
                        (0, a.jsx)(W, { className: D().comet, layout: V, src: E[null != en ? en : g.S.Dark], renderConfig: U, dotLottieRefCallback: eu }),
                        (0, a.jsxs)('div', {
                            className: D().iconContainer,
                            children: [
                                eh && (0, a.jsx)(O.P, { className: D().iconPulse, stopAnimation: !ep }),
                                eT && (0, a.jsx)(v._V, { className: D().icon, src: eN, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, a.jsx)(w.r, {
                            className: D().meta,
                            title: (0, a.jsx)(h.HL, { className: (0, o.$)(k().text, k().titleText, D().caption), size: 'm', variant: 'div', type: 'text', children: eA }),
                            description: ej,
                            titleLineClamp: 2,
                        }),
                        eI && (0, a.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
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
                r = i(36619),
                o = i(9822),
                n = i(47608),
                l = i(59450),
                c = i(20258),
                d = i(29481),
                m = i(25488),
                _ = i(97952),
                u = i(84e3);
            let p = (e) => {
                let { artistId: t, viewUuid: i } = e,
                    p = (0, l.st)(),
                    { hash: v } = (0, l.gf)(),
                    { pageId: h } = (0, _.$)(),
                    { objectsCount: b, objectType: x, objectId: C, objectPosX: A, objectPosY: j, objectPos: T } = (0, m.J)(),
                    N = (0, d.N)(),
                    f = (0, u.U)(),
                    I = (0, a.useCallback)(
                        (e) => {
                            let i = (0, s.F)({
                                params: { hash: v, artistId: t, objectsCount: b, objectType: x, objectId: C, objectPosX: A, objectPosY: j, to: e },
                                logger: f,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && i && (0, o.U6)(p.evgenInstance, i);
                        },
                        [p, t, v, f, C, A, j, x, b],
                    ),
                    g = (0, a.useCallback)(
                        (e) => {
                            let a = (0, s.F)({
                                params: { hash: v, artistId: t, viewUuid: i, objectId: C, objectPos: T, to: e },
                                logger: f,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && a && i && (0, n.mh)(p.evgenInstance, a);
                        },
                        [p, t, v, f, C, T, i],
                    );
                return (0, a.useCallback)(
                    (e) => {
                        if (p && h && c.xK.includes(h))
                            switch (h) {
                                case c._Q.ARTIST:
                                    I(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    g(e);
                                    break;
                                case c._Q.SEARCH:
                                    N({ to: r.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [p, h, N, g, I],
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
        19e3: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => o });
            var a = i(25839),
                s = i(74631),
                r = i(10407);
            let o = (e) => {
                let { sourceContextData: t, children: i } = e,
                    o = (0, s.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(r.l.Provider, { value: o, children: i });
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
            i.d(t, { M: () => g });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487),
                c = i(61493),
                d = i(49656),
                m = i(4071),
                _ = i(51246),
                u = i(66738),
                p = i(86869),
                v = i(4254),
                h = i(6104),
                b = i(4331),
                x = i(52512),
                C = i(98288),
                A = i(27954),
                j = i(6323),
                T = i(62926),
                N = i(64720),
                f = i(22794),
                I = i.n(f);
            let g = (0, r.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: r, contentLinesCount: f } = e,
                    { user: g } = (0, A.g)(),
                    { ref: S, intersectionPropertyId: y } = (0, x.n)(),
                    { formatMessage: R, formatDate: L } = (0, n.A)(),
                    E = (0, h.P)(r),
                    k = r.getKey('PlayButton'),
                    w = r.getKey('LikeButton'),
                    O = (0, o.useMemo)(() => {
                        let e = R({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? R({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [R, r.title, r.isPresave]),
                    P = (0, d.L)(() =>
                        (0, a.jsxs)(p.t, {
                            className: I().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(j.B, { className: I().image, src: r.coverUri, size: 200, fit: 'cover', alt: O, withAvatarReplace: !0 }),
                                (0, a.jsx)(_.hg, {
                                    className: I().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: I().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(u.I, { variant: 'lock', size: 'xxs', className: I().lockIcon }),
                                            'aria-label': R({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        k,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(I().control, I().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: E,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !g.isAuthorized,
                                        },
                                        w,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(_.MN, {
                    ref: S,
                    className: (0, s.$)(I().root, t),
                    'aria-label': O,
                    explicitMarkComponent: r.explicitDisclaimer && (0, a.jsx)(T.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, a.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    'data-intersection-property-id': y,
                    contentLinesCount: f,
                    view: P,
                    description: (0, a.jsx)(b.i, { className: I().artists, artists: r.artists, lineClamp: 1, linkClassName: I().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(v.HL, {
                            className: I().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(l.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: L(r.releaseDate, (0, C.s)()) } }),
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
                n = i(74631),
                l = i(39004),
                c = i(89288),
                d = i(61493),
                m = i(22939),
                _ = i(71035),
                u = i(49656),
                p = i(11823),
                v = i(23818),
                h = i(86869),
                b = i(4254),
                x = i(4331),
                C = i(65189),
                A = i(63905),
                j = i(67560),
                T = i(40110),
                N = i(20258),
                f = i(52512),
                I = i(30290),
                g = i(91907),
                S = i(68215),
                y = i(85743),
                R = i(18639),
                L = i(77179),
                E = i(50209),
                k = i(27954),
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
            let G = (0, o.PA)((e) => {
                let { className: t, clip: i, likeIconSize: r = 'xxs' } = e,
                    { user: o } = (0, k.g)(),
                    { sendLikeSearchFeedback: l } = (0, y.z)(),
                    c = (0, z.K)(i),
                    [m, u] = (0, n.useState)(!1),
                    [p, v] = (0, n.useState)(!1),
                    h = (0, _.c)(() => {
                        (m || i.isLiked || (u(!0), null == l || l()), c());
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
            var X = i(60715),
                Z = i.n(X);
            let Q = (0, o.PA)((e) => {
                var t;
                let { clip: i, className: o, coverClassName: w, playButtonIconSize: V = 'xs', likeIconSize: W, viewUuid: z, shouldShowTimecode: H = !1 } = e,
                    { fullscreenVideoPlayer: K } = (0, k.g)(),
                    { formatMessage: Y } = (0, l.A)(),
                    $ = (0, S.P)(null != (t = i.duration) ? t : 0),
                    F = (0, C._)(z),
                    X = (0, A.M)(z),
                    { ref: Q, intersectionPropertyId: q } = (0, f.n)({ callback: X }),
                    { from: J } = (0, I.f)({ pageId: N._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: m.K.Various, blockId: T.U.CLIPS }),
                    [ee, et] = (0, n.useState)(!1),
                    { sendNavigateSearchFeedback: ei, sendPlaySearchFeedback: ea } = (0, y.z)(),
                    es = (0, j.C)(),
                    er = (0, n.useRef)(null),
                    eo = (0, _.c)(() => {
                        er.current && ((er.current.currentTime = 0), er.current.play());
                    }),
                    en = (0, n.useMemo)(() => (0, r.A)(eo, 500), [eo]),
                    el = (0, _.c)(() => {
                        var e;
                        null == (e = er.current) || e.pause();
                    }),
                    ec = (0, n.useMemo)(() => K.ids.indexOf(i.clipId), [K, i.clipId]),
                    { isPlaying: ed } = (0, E.D)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: R.H.VARIOUS_CLIP_CONTEXT }, from: J },
                            queueParams: { index: ec },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: K.state,
                        playbackId: L.V.CLIP,
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
                    ev = (0, n.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = i.artists) ? void 0 : s.length)
                                ? (0, a.jsx)(x.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
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
                                  onMouseEnter: en,
                                  onMouseLeave: el,
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
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, g.E)(i.duration, i.duration) }),
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
                        (0, a.jsx)(G, { className: O().controlsBar, clip: i, likeIconSize: W }),
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
        26237: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(27954),
                s = i(44806);
            let r = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: i },
                    } = (0, a.g)(),
                    r = e.checkExperiment(s.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(s.z.WebNextQueryToVibe, 'on') && (!r || !!i);
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
        28924: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var a = i(25839),
                s = i(23976),
                r = i(73367),
                o = i.n(r);
            let n = (e) => {
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
                n = i(74631),
                l = i(61493),
                c = i(71035),
                d = i(91886),
                m = i(5867),
                _ = i(95858),
                u = i(39058),
                p = i(89192),
                v = i(27954),
                h = i(44806),
                b = i(36159),
                x = i(6969),
                C = i(8266),
                A = i(83918),
                j = i(10603),
                T = i(27625),
                N = i(79396),
                f = i(9931),
                I = i(892),
                g = i(39985),
                S = i(9036),
                y = i(42853),
                R = i(57138),
                L = i(36545);
            let E = (0, r.PA)((e) => {
                    let { block: t, forwardRef: i, onLoad: s, ...r } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, g.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let o = L.Y[t.type];
                    return (0, a.jsx)(o, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...r });
                }),
                k = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(R.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(y.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(E, { ...t }),
                    });
                }),
                w = (0, r.PA)((e) => ((0, g.Q)(e.block) ? (0, a.jsx)(k, { ...e }) : (0, a.jsx)(S.Z, { ...e })));
            var O = i(43538),
                P = i.n(O),
                M = i(28410),
                D = i(91149),
                B = i(92942),
                V = i(1466);
            let U = (e) => {
                    let { landing: t, tab: i } = e,
                        { notify: s, dismiss: r } = (0, B.l)(),
                        o = (0, n.useRef)(void 0),
                        l = (0, c.c)(() => {
                            (i.blocks.forEach((e) => {
                                e.isRejected && (0, I.v)(e.meta) && t.getBlock(e);
                            }),
                                r({ notificationId: o.current }),
                                i.setShouldReloadNotification(!1));
                        });
                    ((0, n.useEffect)(() => {
                        i.hasErrorBlocks &&
                            !i.shouldReloadNotification &&
                            setTimeout(() => {
                                ((o.current = s((0, a.jsx)(V.L, { reloadBlocks: l }), { containerId: D.u.ERROR, autoClose: !1 })), i.setShouldReloadNotification(!0));
                            });
                    }, [s, l, i.hasErrorBlocks, i.shouldReloadNotification, i]),
                        (0, n.useEffect)(
                            () => () => {
                                (r(), (0, M._n)(i) && i.setShouldReloadNotification(!1));
                            },
                            [r, i],
                        ));
                },
                W = (0, r.PA)((e) => {
                    var t;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        o = (0, n.useMemo)(() => s.blocks.map(() => (0, n.createRef)()), [s.blocks]),
                        l = (0, d.BL)(o, { freezeOnceVisible: !0 });
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
                                        let { isIntersecting: s } = l[e.id] || {};
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
            let G = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: i, resizeObserver: s, isScrolling: r, style: o, ...l } = e,
                        [c, m] = (0, H.d)(),
                        [_, u] = (0, H.d)(),
                        { isIntersecting: p } =
                            null != (t = (0, d.BL)([{ current: c }], !c || (null == c ? void 0 : c.dataset.intersectionPropertyId) !== l.block.id)[l.block.id]) ? t : {};
                    return (
                        (0, n.useEffect)(
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
                            children: (0, a.jsx)(w, { ...l, forwardRef: m, isIntersecting: p && !r }),
                        })
                    );
                }),
                X = (0, r.PA)((e) => {
                    var t, i;
                    let { landing: s, tab: r, tabIndex: l } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, v.g)(),
                        [p, h] = (0, H.d)(),
                        b = (0, n.useRef)(!0),
                        [C, A] = (0, n.useState)(() => Array.from({ length: r.blocks.length }, (e, t) => t)),
                        j = (0, c.c)(() => {
                            let e = [];
                            (r.blocks.forEach((t, i) => {
                                var a;
                                (t.isVisible || ((null == (a = t.meta) ? void 0 : a.showPolicy) === z.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(i);
                            }),
                                A(e));
                        }),
                        T = (0, c.c)((e) => {
                            let t = C[e];
                            if (void 0 === t) return 300;
                            let i = r.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? Y.X[i.type] : 0;
                        }),
                        { virtualizer: N, resizeObserver: f } = (0, K.r)({
                            count: null != (i = C.length) ? i : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: T,
                            containerRef: p,
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!b.current) return;
                        let t = d.get(x.K.BLOCK),
                            i = r.blocks.findIndex((e) => e.id === t);
                        if (!C.includes(i)) return;
                        let a = null == (e = N.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (N.scrollToIndex(i, { align: 'center', behavior: 'auto' }), N.scrollOffset && a && 100 > Math.abs(N.scrollOffset - a) && (b.current = !1));
                    }, [C, d, r.blocks, N]);
                    let I = N.getTotalSize(),
                        g = N.getVirtualItems();
                    return (
                        U({ landing: s, tab: r }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: r.meta.id,
                                tabPos: l + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === l,
                                children: (0, a.jsx)('div', {
                                    className: P().root,
                                    style: { height: ''.concat(I, 'px') },
                                    ref: h,
                                    children: g.map((e) => {
                                        let t = C[e.index],
                                            i = r.blocks[Number(t)];
                                        return i
                                            ? (0, a.jsx)(
                                                  G,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: f,
                                                      landing: s,
                                                      block: i,
                                                      blockIndex: Number(t),
                                                      isScrolling: N.isScrolling,
                                                      onLoad: j,
                                                      style: { transform: 'translate3d(0, '.concat(e.start - N.options.scrollMargin, 'px, 0)') },
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
                            containerClassName: x,
                            containerStyle: C,
                            headerClassName: A,
                            tabWithHeadingTitle: I,
                            tabWithCovers: g,
                            tabWithSubtitle: S,
                            stickyHeaderClassName: y,
                            staticHeaderClassName: R,
                            stickyHeaderTabIndex: L,
                            headerVariant: E = j.V.COMPOSITE,
                        } = e,
                        { tabs: k } = o,
                        w = (0, n.useId)(),
                        { isScrolling: O } = (0, n.useContext)(T.B),
                        { contentScrollRef: M } = (0, p.g)(),
                        {
                            experiments: D,
                            settings: { isMobile: B },
                        } = (0, v.g)(),
                        V = D.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? X : W,
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
                                variant: E,
                                stickyClassName: y,
                                staticClassName: R,
                                stickyChild: (0, a.jsx)(f.wI, {
                                    isShimmerVisible: k.isLoading || o.isLoading,
                                    className: P().stickyTabs,
                                    shimmer: (0, a.jsx)(f.zr, {}),
                                    elementId: w,
                                    'data-test-id': l.e8.landing.MAIN_TABS,
                                    value: u.value,
                                    onTabChange: U,
                                    children:
                                        null == (t = k.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: i } = e;
                                                  return (0, a.jsx)(
                                                      N.o,
                                                      {
                                                          className: P().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          'aria-hidden': !O && E !== j.V.STICKY,
                                                          tabIndex: null != L ? L : O ? 0 : -1,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                                children: (0, a.jsx)(f.wI, {
                                    className: (0, s.$)(P().tabCarousel, P().important),
                                    elementId: w,
                                    'data-test-id': l.e8.landing.MAIN_TABS,
                                    ...u,
                                    children:
                                        null == (i = k.data)
                                            ? void 0
                                            : i.map((e, t) => {
                                                  let { meta: i, data: s } = e;
                                                  return (0, a.jsx)(
                                                      N.o,
                                                      {
                                                          className: P().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          subtitle: null == s ? void 0 : s.subtitle,
                                                          covers: null == s ? void 0 : s.covers,
                                                          'aria-hidden': O,
                                                          tabIndex: O ? -1 : 0,
                                                          withCovers: g,
                                                          withSubtitle: S,
                                                          withHeading: I,
                                                          isShimmerVisible: k.loadingState === b.G.PENDING,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, a.jsx)('div', {
                                className: x,
                                style: C,
                                children:
                                    null == (r = k.data)
                                        ? void 0
                                        : r.map((e, t) =>
                                              (0, a.jsx)(
                                                  m.Kp,
                                                  {
                                                      className: P().tabPanel,
                                                      name: t,
                                                      value: u.value,
                                                      elementId: w,
                                                      children: (0, a.jsx)(V, { landing: o, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                Q = (0, r.PA)((e) => {
                    var t, i, s, r;
                    let {
                            landing: l,
                            headerConcealerComponent: c,
                            errorComponent: p,
                            containerClassName: b,
                            headerClassName: j,
                            containerStyle: T,
                            tabWithHeadingTitle: N,
                            tabWithCovers: f,
                            tabWithSubtitle: g,
                            staticHeaderClassName: S,
                            stickyHeaderClassName: y,
                            stickyHeaderTabIndex: R,
                            headerVariant: L,
                        } = e,
                        E = (0, o.useSearchParams)(),
                        k = (0, A.X)(),
                        O = ((e) =>
                            (0, n.useCallback)(
                                (t) => {
                                    var i;
                                    let a = null == (i = e.tabs.data) ? void 0 : i[t];
                                    null == a ||
                                        a.blocks.forEach((t) => {
                                            t.isOutdated && (0, I.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(l),
                        { experiments: M } = (0, v.g)(),
                        D = M.checkExperiment(h.z.WebNextVirtualSkeleton, 'on') ? X : W,
                        B = (0, n.useMemo)(() => {
                            var e;
                            if (!l.isLoaded) return null;
                            let t = E.get(x.K.TAB),
                                i = null == (e = l.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof i && i >= 0 ? i : null;
                        }, [l.isLoaded, l.tabs.data, E]),
                        V = (0, m.zb)(null != (r = null != B ? B : null == (t = l.meta) ? void 0 : t.selectedTabIndex) ? r : 0),
                        U = (0, n.useCallback)(
                            (e) => {
                                var t, i, a;
                                let s = null == (i = l.tabs.data) || null == (t = i[e]) ? void 0 : t.meta.id;
                                if ((e !== V.value && O(V.value), null == (a = V.onTabChange) || a.call(V, e), s)) {
                                    let e = (0, C.b)(x.K.TAB, s);
                                    e && k(e);
                                }
                            },
                            [k, l.tabs.data, O, V],
                        ),
                        z = !!(l.tabs.data && l.tabs.data.length > 1),
                        H = null == (i = l.tabs.data) ? void 0 : i[0],
                        K = (0, n.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = l.upperBlocks) ? void 0 : e.map(() => (0, n.createRef)())) ? t : [];
                        }, [l.upperBlocks]),
                        Y = (0, d.BL)(K, { freezeOnceVisible: !0 }),
                        $ = (0, n.useMemo)(() => {
                            var e;
                            if (null == (e = l.upperBlocks) ? void 0 : e.length)
                                return (0, a.jsx)(u.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, a.jsx)('div', {
                                        className: P().upperBlocks,
                                        children: l.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = Y[e.id] || {};
                                            return (0, a.jsx)(w, { landing: l, block: e, blockIndex: t, isIntersecting: i, forwardRef: K[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (s = l.upperBlocks) ? void 0 : s.length, l, Y, K]);
                    return z
                        ? (0, a.jsx)(Z, {
                              landing: l,
                              upperBlocks: $,
                              headerConcealerComponent: c,
                              tabsState: { value: V.value, onTabChange: U },
                              containerClassName: b,
                              containerStyle: T,
                              headerClassName: j,
                              tabWithHeadingTitle: N,
                              tabWithCovers: f,
                              tabWithSubtitle: g,
                              staticHeaderClassName: S,
                              stickyHeaderClassName: y,
                              stickyHeaderTabIndex: R,
                              headerVariant: L,
                          })
                        : H
                          ? (0, a.jsxs)('div', { className: b, style: T, children: [$, c, (0, a.jsx)(D, { landing: l, tab: H, tabIndex: 0 })] })
                          : $
                            ? (0, a.jsx)(_.j, { children: (0, a.jsxs)('div', { className: b, style: T, children: [$, c] }) })
                            : l.isLoadedAndEmpty
                              ? (0, a.jsx)('div', { className: b, style: T, children: p })
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
            i.d(t, { Y: () => C });
            var a = i(35522),
                s = i(25839),
                r = i(82298),
                o = i(88204),
                n = i(74631),
                l = i(89288),
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
                        n = (0, c.L)(() => {
                            if (null == i ? void 0 : i.upcomingRelese)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.upcomingRelese });
                        }),
                        m = (0, c.L)(() => {
                            if (null == i ? void 0 : i.popularTracks)
                                return (0, s.jsx)(d.Z, {
                                    ...a,
                                    className: (0, r.$)(_().popularTracks, { [_().popularTracks_withReleaseBlock]: !!(null != n ? n : o) }),
                                    block: i.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: _().root,
                        ...(0, l.OZ)(a),
                        children: (0, s.jsxs)('div', { className: _().container, children: [m, null != n ? n : o] }),
                    });
                }),
                p = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
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
                    return (0, s.jsxs)('section', { ref: t, className: h().root, ...(0, l.OZ)(a), children: [o, r] });
                }),
                x = (0, n.forwardRef)((e, t) => (0, s.jsx)(b, { forwardRef: t, ...e })),
                C = { [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: p, [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: x };
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
                n = i(36619),
                l = i(61493),
                c = i(71035),
                d = i(14693),
                m = i(11823),
                _ = i(4071),
                u = i(86869),
                p = i(52512),
                v = i(85686),
                h = i(27954),
                b = i(44806),
                x = i(25895),
                C = i(17109),
                A = i(67379),
                j = i(9822),
                T = i(47608),
                N = i(59450),
                f = i(20258),
                I = i(25488),
                g = i(97952),
                S = i(84e3),
                y = i(7050),
                R = i(64407),
                L = i(3656),
                E = i(47),
                k = i.n(E);
            let w = (0, r.PA)((e) => {
                let {
                        artistId: t,
                        concert: i,
                        meta: r,
                        viewUuid: E,
                        radius: w = 'l',
                        className: O,
                        shouldSendAnalyticsOnHide: P,
                        forceAfishaWidget: M,
                        shouldShowMask: D,
                    } = e,
                    { state: B, toggleTrue: V, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: W } = (0, h.g)(),
                    z = !M && W.checkExperiment(b.z.WebNextConcertPage, 'on'),
                    { href: H } = (0, x.u)('/concert/:concertId', { params: { concertId: i.id } }),
                    K = (0, v.Z)(H),
                    Y = ((e) => {
                        let { artistId: t, viewUuid: i } = e,
                            a = (0, N.st)(),
                            { hash: s } = (0, N.gf)(),
                            { pageId: r } = (0, g.$)(),
                            { objectsCount: n, objectType: l, objectId: c, objectPosX: d, objectPosY: m, objectPos: _ } = (0, I.J)(),
                            u = (0, S.U)(),
                            p = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, objectsCount: n, objectType: l, objectId: c, objectPosX: d, objectPosY: m },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && (0, j.HB)(a.evgenInstance, e);
                            }, [a, t, s, u, c, d, m, l, n]),
                            v = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, viewUuid: i, objectId: c, objectPos: _ },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && i && (0, T.Z4)(a.evgenInstance, e);
                            }, [a, t, s, u, c, _, i]);
                        return (0, o.useCallback)(() => {
                            if (a && r && f.xK.includes(r))
                                switch (r) {
                                    case f._Q.ARTIST:
                                    case f._Q.CONCERT:
                                        p();
                                        break;
                                    case f._Q.ARTIST_CONCERTS:
                                        v();
                                }
                        }, [a, r, v, p]);
                    })({ artistId: t, viewUuid: E }),
                    $ = (0, C.m)({ artistId: t, viewUuid: E }),
                    { ref: F, intersectionPropertyId: G } = (0, p.n)({ callback: null !== t ? Y : void 0, singleEvent: !P }),
                    X = (0, o.useId)(),
                    Z = (0, o.useId)(),
                    Q = (0, y.Y)()(i),
                    q = (0, c.c)((e) => {
                        ((0, m.P)(e, k().ripple), z && (K(e), $(n.FromArtistScreenTo.ConcertScreen)));
                    }),
                    J = (0, c.c)((e) => {
                        (V(), $(n.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, a.jsxs)(u.t, {
                    radius: w,
                    className: (0, s.$)(k().root, O, { [k().root_withConcertsRedesign]: i.isIdentityExperimentEnabled }),
                    ref: F,
                    'data-intersection-property-id': G,
                    onClick: q,
                    children: [
                        i.datetime &&
                            (0, a.jsx)(L.d, {
                                datetime: i.datetime,
                                id: X,
                                className: (0, s.$)(k().date, { [k().dateWithMask]: D, [k().important]: D }),
                                dayClassName: k().dateColor,
                                monthClassName: k().dateColor,
                            }),
                        (0, o.cloneElement)(r, { id: Z, concert: i }),
                        i.dataSessionId &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: k().button,
                                        'aria-describedby': ''.concat(X, ' ').concat(Z),
                                        'aria-label': Q,
                                        onClick: J,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: Q,
                                    }),
                                    (0, a.jsx)(R.h, { dataSessionId: i.dataSessionId, isOpened: B, onOpen: V, onClose: U }),
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
        40701: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
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
                n = i(23302),
                l = i(23818),
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
                                className: (0, s.$)(u().covers, { [u().covers_radial]: v === n.R.RADIAL, [u().covers_stack]: v === n.R.STACK }),
                                'data-test-id': o.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, a.jsx)(l._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, a.jsx)(l._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, a.jsx)(l._V, {
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
                n = i(5365),
                l = i(18412),
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
                            ...x
                        } = e,
                        C = (0, r.useId)(),
                        A = (0, r.useRef)(null);
                    return (0, a.jsxs)('section', {
                        ref: i,
                        className: (0, s.$)(m().root, t),
                        ...(0, o.OZ)(x),
                        children: [
                            (0, a.jsx)(l.T, {
                                className: d,
                                labeledForId: C,
                                title: p,
                                description: h,
                                viewAllActionLink: v,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: A }),
                                headingVariant: u,
                                withDescription: !!h,
                            }),
                            (0, a.jsx)(n.F, { ref: A, itemClassName: (0, s.$)(m().item, m().important), className: _, 'aria-labelledby': C, children: b }),
                        ],
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        42393: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
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
            i.d(t, { F: () => C });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(89288),
                l = i(61493),
                c = i(67467),
                d = i(4071),
                m = i(4254),
                _ = i(27954),
                u = i(21e3),
                p = i.n(u),
                v = i(39004),
                h = i(35622),
                b = i(89192);
            let x = (0, r.PA)((e) => {
                    let { message: t, title: i, className: r, credits: o, messageClassName: c } = e,
                        {
                            modals: { overviewModal: d },
                            settings: { isMobile: u },
                        } = (0, _.g)(),
                        { formatMessage: x } = (0, v.A)(),
                        { contentRef: C } = (0, b.g)();
                    return (0, a.jsxs)(h.a, {
                        title: i,
                        titleDataTestId: l.Kq.overview.OVERVIEW_MODAL_TITLE,
                        className: (0, s.$)(p().modal, r),
                        contentClassName: p().modalContent,
                        overlayClassName: p().modalOverlay,
                        headerClassName: (0, s.$)(p().modalHeader, { [p().modalHeader_withTitle]: i }),
                        size: 'fitContent',
                        placement: u ? 'default' : 'right',
                        open: d.isOpened,
                        onOpenChange: d.onOpenChange,
                        onClose: d.close,
                        portalNode: u ? null : C,
                        isMobile: u,
                        labelClose: x({ id: 'interface-actions.close' }),
                        'data-test-id': l.Kq.overview.OVERVIEW_MODAL,
                        closeButtonDataTestId: l.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON,
                        children: [
                            (0, a.jsx)(m.HL, {
                                className: (0, s.$)(p().message, c),
                                size: 'l',
                                variant: 'div',
                                dangerouslySetInnerHTML: { __html: (0, n.ky)(t) },
                                'data-test-id': l.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                            }),
                            o,
                        ],
                    });
                }),
                C = (0, r.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: i,
                            modalClassName: r,
                            creditsModal: u,
                            messageClassName: v,
                            messageModalClassName: h,
                            textButton: b,
                            withShowButton: C,
                        } = e,
                        A = (0, o.useRef)(null),
                        {
                            modals: { overviewModal: j },
                        } = (0, _.g)(),
                        { isTruncated: T } = (0, c.W)(A),
                        N = (T && t.isExpandable) || C;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(m.HL, {
                                ref: A,
                                className: (0, s.$)(p().message, v),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                dangerouslySetInnerHTML: { __html: (0, n.ky)(t.message || '') },
                                'data-test-id': l.Kq.overview.OVERVIEW_MESSAGE,
                            }),
                            N &&
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
                                            'data-test-id': l.Kq.overview.OVERVIEW_FURTHER_BUTTON,
                                            children: (0, a.jsx)(m.HL, { size: 'm', variant: 'span', children: b }),
                                        }),
                                        (0, a.jsx)(x, { message: t.message, title: t.title, className: r, credits: u, messageClassName: h }),
                                    ],
                                }),
                        ],
                    });
                });
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
                n = i(30787),
                l = i(6969);
            let c = { [r.S.Light]: 'yandex_music', [r.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, a.useSearchParams)(),
                        { theme: t } = (0, o.W)();
                    return (0, s.useCallback)(
                        (i) => {
                            if (!t) return i;
                            let a = new URLSearchParams(e);
                            a.set('wl', c[t]);
                            let s = e.get(l.K.UTM_CAMPAIGN);
                            return (s && a.set('meta', 'campaignid_'.concat(s)), (0, n.C)(i, a));
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
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (o[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useDebouncedToggle = void 0));
                let e = l(352),
                    t = l(810);
                c.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: s, throttleTimeout: r } = i,
                        o = (0, t.useRef)(null),
                        [n, l] = (0, t.useState)(!!s),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (l(!s),
                                        o.current && window.clearTimeout(o.current),
                                        (o.current = window.setTimeout(() => {
                                            l(!!s);
                                        }, a)));
                                }, r),
                            [a, s, r],
                        ),
                        d = (0, t.useCallback)(() => {
                            (l(!!s), o.current && window.clearTimeout(o.current));
                        }, [s]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                o.current && window.clearTimeout(o.current);
                            },
                            [],
                        ),
                        { state: n, handleDebouncedToggle: c, reset: d }
                    );
                };
            })(),
                c.__esModule);
            var d = c.useDebouncedToggle;
        },
        51707: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(25839),
                s = i(82298),
                r = i(27954),
                o = i(49337),
                n = i(16351),
                l = i(40701),
                c = i.n(l);
            let d = {
                    [o.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [o.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                m = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                _ = (e) => {
                    let { className: t, ...i } = e,
                        { lumen: o } = (0, r.g)();
                    return (0, a.jsx)(n.D, {
                        className: (0, s.$)(c().root, t),
                        lumenImages: o.getFallbackImage(i.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: m,
                        ...i,
                    });
                };
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
                n = i(87490),
                l = i(51124),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, o.g)(),
                    _ = d && m;
                return (0, a.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(n.b, { align: 'back', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(n.b, { align: 'front', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
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
                n = i(27954);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, n.g)(),
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
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a + i.scrollTop : 0;
                            })(_, d, u),
                        },
                        b = (0, a.XW)(h),
                        x = (0, a.Te)({ ...h, getScrollElement: () => u, initialOffset: null == u ? void 0 : u.scrollTop }),
                        C = _ ? b : x,
                        A = (0, r.c)(() => {
                            C.measure();
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
                        { virtualizer: C, resizeObserver: v.current }
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
        53168: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
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
                n = i(61493),
                l = i(23818),
                c = i(86869),
                d = i(4254),
                m = i(97522),
                _ = i(84804),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: p, covers: v, coverSize: h = 100, captionVariant: b = 'div' } = e,
                    x = (0, o.useMemo)(() => {
                        var e;
                        if (null == v || null == (e = v[0]) ? void 0 : e.color) return { '--subcover-background-color': v[0].color };
                    }, [v]);
                return (0, a.jsx)(m.N, {
                    href: _,
                    className: (0, s.$)(u().link, p),
                    'data-test-id': n.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: x,
                        className: (0, s.$)(u().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: u().plate,
                                'data-test-id': n.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: u().subcover, 'data-test-id': n.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(l._V, {
                                        src: null == v || null == (t = v[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: h,
                                        'data-test-id': n.OA.mix.MIX_CARD_COVER,
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
                                    'data-test-id': n.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
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
                n = i.n(o);
            let l = (e) => {
                    let { isActive: t } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(n().shimmer, n().donation),
                        children: [
                            (0, a.jsx)(r.W, { isActive: t, radius: 'round', className: n().shimmerCover }),
                            (0, a.jsxs)('div', {
                                className: n().shimmerContainer,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: n().shimmerText,
                                        children: [
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: n().shimmerArtist }),
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: n().shimmerGoal }),
                                        ],
                                    }),
                                    (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: n().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, i) => (0, a.jsx)(l, { isActive: e }, i));
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
        59650: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => J });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487),
                c = i(36619),
                d = i(61493),
                m = i(71035),
                _ = i(49656),
                u = i(14693),
                p = i(51246),
                v = i(4254),
                h = i(79367),
                b = i(20258),
                x = i(42966),
                C = i(29481),
                A = i(47009),
                j = i(52512),
                T = i(10322),
                N = i(97952),
                f = i(85743),
                I = i(87201),
                g = i(27954),
                S = i(17226),
                y = i(41580),
                R = i(49438),
                L = i(74987),
                E = i(72720),
                k = i(91149),
                w = i(92942),
                O = i(31488),
                P = i(57549),
                M = i(75159),
                D = i(66738),
                B = i(10820),
                V = i(4550),
                U = i(83243),
                W = i(56120),
                z = i(67303),
                H = i(73723),
                K = i.n(H);
            let Y = (0, r.PA)((e) => {
                var t;
                let { room: i, onOpenChange: r, onRenameClick: _, isRenamePending: u, onRoomSuccessExit: p, open: v, className: h, ...b } = e,
                    {
                        settings: { isMobile: C },
                    } = (0, g.g)(),
                    { formatMessage: A } = (0, n.A)(),
                    j = (0, M.A)(null == i ? void 0 : i.wave),
                    { exitVibeRoom: T, isPending: N } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [s, r] = (0, o.useState)(!1),
                            { notify: l } = (0, w.l)(),
                            c = (0, o.useRef)(!1),
                            { formatMessage: d } = (0, n.A)();
                        return {
                            exitVibeRoom: (0, m.c)(async () => {
                                c.current ||
                                    (r(!0),
                                    (c.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === O.F.ERROR
                                        ? l((0, a.jsx)(P.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: k.u.ERROR })
                                        : i(),
                                    r(!1),
                                    (c.current = !1));
                            }),
                            isPending: s,
                        };
                    })({ room: i, onRoomSuccessExit: p }),
                    f = (0, x.m)(),
                    I = (0, U.l)({ mainObjectType: c.DomainObjectType.NonApplicable }),
                    S = (0, m.c)(async () => {
                        (f({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await T());
                    }),
                    y = (0, m.c)(async () => {
                        (f({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await j());
                    });
                ((0, W.N)(v),
                    (0, o.useEffect)(() => {
                        if (v)
                            return (
                                I(!0),
                                () => {
                                    I(!1);
                                }
                            );
                    }, [v, I]));
                let R = !(null == i ? void 0 : i.isDisabled) && !C,
                    L = !(null == i ? void 0 : i.isDisabled) && !C;
                return (0, a.jsxs)(B.W1, {
                    ...b,
                    isMobile: C,
                    offsetOptions: 10,
                    open: v,
                    onOpenChange: r,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: d.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                    size: 's',
                    icon: (0, a.jsx)(D.I, { size: 'xxs', variant: 'more' }),
                    color: 'secondary',
                    variant: 'default',
                    className: h,
                    menuClassName: (0, s.$)(K().root, { [K().root_mobile]: C }),
                    children: [
                        R && (0, a.jsx)(z.L, { onClick: y, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        L &&
                            (0, a.jsx)(B.Dr, {
                                icon: (0, a.jsx)(D.I, { variant: 'edit', size: 'xxs' }),
                                onClick: _,
                                disabled: u,
                                spinner: u ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                                'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(l.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(B.Dr, {
                            icon: (0, a.jsx)(D.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: S,
                            disabled: N,
                            spinner: N ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                            'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(l.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
            var $ = i(6323),
                F = i(87490),
                G = i(2241),
                X = i.n(G);
            let Z = (e) => {
                let { align: t, controls: i, src: s, isDisabled: r = !1, isMobileLayout: o = !1 } = e;
                return (0, a.jsx)(F.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: X().surface,
                    overlayClassName: X().overlay,
                    children: (0, a.jsx)($.B, {
                        size: 200,
                        fit: 'cover',
                        className: X().image,
                        src: s,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: o ? 'xxxs' : 'l',
                    }),
                });
            };
            var Q = i(41359),
                q = i.n(Q);
            let J = (0, r.PA)((e) => {
                var t, i, r, D;
                let { room: B, contentLinesCount: V = 3, className: U, withMobileLayout: W = !1, onRoomSuccessExit: z } = e,
                    { pageId: H } = (0, N.$)(),
                    { ref: K, intersectionPropertyId: $ } = (0, j.n)(),
                    {
                        settings: { isMobile: F },
                        multivibe: G,
                        user: X,
                        freeAccess: Q,
                    } = (0, g.g)(),
                    J = (0, h.P)(),
                    { sendPlaySearchFeedback: ee } = (0, f.z)(),
                    [et, ei] = (0, o.useState)(!1),
                    ea = (0, M.A)(B.wave),
                    es = (0, A.b)(),
                    er = (0, x.m)(),
                    eo = (0, C.N)(),
                    { state: en, setState: el } = (0, u.e)(!1),
                    { state: ec, setState: ed } = (0, u.e)(!1),
                    { state: em, toggleTrue: e_, toggleFalse: eu } = (0, u.e)(!1),
                    { formatMessage: ep } = (0, n.A)(),
                    { editVibeRoom: ev, isPending: eh } = ((e) => {
                        let [t, i] = (0, o.useState)(!1),
                            { notify: s } = (0, w.l)(),
                            r = (0, o.useRef)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return {
                            editVibeRoom: (0, m.c)(async (t) => {
                                r.current ||
                                    (i(!0),
                                    (r.current = !0),
                                    (await e.editRoom({ roomId: e.id, name: t })) === O.F.ERROR &&
                                        s((0, a.jsx)(P.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: k.u.ERROR }),
                                    i(!1),
                                    (r.current = !1));
                            }),
                            isPending: t,
                        };
                    })(B),
                    eb = W && F,
                    ex = (em || en || ec) && !F,
                    {
                        isPlaying: eC,
                        isPaused: eA,
                        togglePlay: ej,
                    } = (0, I.B)({ seeds: null != (D = null == (t = B.wave) ? void 0 : t.seeds) ? D : [], pageIdForFrom: H, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eT = eb && !B.isDisabled && (eC || eA),
                    eN = (0, m.c)(() => {
                        !(B.isDisabled || J()) &&
                            (Q.isVibeStartRestricted ||
                                (et || eC || (ei(!0), null == ee || ee()),
                                ej(),
                                es(!eC),
                                er({
                                    actionType: eC ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    ef = (0, m.c)(async () => {
                        (er({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await ea());
                    }),
                    eI = (0, m.c)(() => {
                        if (B.isDisabled) {
                            (G.setDisabledRoomId(B.id),
                                G.disabledRoomInfoModal.open(),
                                eo({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        F && eN();
                    }),
                    eg = (0, m.c)((e) => {
                        (e && eo({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), el(e), ed(e));
                    }),
                    eS = (0, m.c)((e) => {
                        e.target === e.currentTarget && (e.code === S.v.SPACE || e.code === S.v.ENTER) && (e.preventDefault(), eI());
                    }),
                    [ey, eR] = (0, o.useState)(!1),
                    eL = (0, o.useCallback)(
                        (e) => {
                            (eR(!1), ev(e), er({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [ev, er, eR],
                    ),
                    eE = (0, o.useCallback)(() => {
                        (eR(!0), eo({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [eo, eR]),
                    ek = (0, _.L)(() =>
                        (0, a.jsx)(T.n, {
                            pageId: b._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, a.jsx)(
                                Y,
                                {
                                    room: B,
                                    onOpenChange: eg,
                                    open: en,
                                    isRenamePending: eh,
                                    onRenameClick: eE,
                                    returnFocus: !ey,
                                    className: (0, s.$)(q().menuControl, q().control, { [q().menuControl_mobile]: eb }),
                                    onRoomSuccessExit: z,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                B.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    ew = (0, _.L)(() => {
                        if (!B.isDisabled)
                            return (0, a.jsx)(
                                R.D,
                                {
                                    isPlaying: eC,
                                    onClick: eN,
                                    className: (0, s.$)(q().playControl, q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                B.getKey('PlayButton'),
                            );
                    }),
                    eO = (0, _.L)(() => {
                        var e;
                        if (!B.isDisabled)
                            return (0, a.jsx)(
                                y.O,
                                {
                                    isPinned: null == (e = B.wave) ? void 0 : e.isPinned,
                                    onClick: ef,
                                    className: (0, s.$)(q().pinControl, q().control, { [q().pinControl_mobile]: eb }),
                                    withRipple: !1,
                                },
                                B.getKey('PinButton'),
                            );
                    }),
                    eP = B.isDisabled ? ep({ id: 'multivibe.room-status-disabled' }) : ep({ id: 'multivibe.room-status-enabled' }),
                    eM = ep({ id: 'entity-names.vibe-room-name' }, { name: B.name, status: eP }),
                    eD = B.owner.cover.uri,
                    eB = null == (i = B.members[0]) ? void 0 : i.cover.uri,
                    eV = (null == (r = B.owner) ? void 0 : r.uid) && B.owner.uid === X.puid,
                    eU = eV ? eD : eB,
                    eW = eV ? eB : eD,
                    ez = (0, _.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(q().avatarsWrapper, {
                                [q().avatarsWrapper_mobile]: eb,
                                [q().avatarsWrapper_disabled]: B.isDisabled,
                                [q().avatarsWrapper_visible]: ex,
                            }),
                            children: [
                                (0, a.jsx)(Z, {
                                    align: 'back',
                                    isDisabled: B.isDisabled,
                                    isMobileLayout: eb,
                                    src: eU,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ex, className: q().cardControls, radius: 'round', pinControl: eO }),
                                }),
                                (0, a.jsx)(Z, {
                                    align: 'front',
                                    isDisabled: B.isDisabled,
                                    isMobileLayout: eb,
                                    src: eW,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ex, className: q().cardControls, radius: 'round', playControl: ew, menuControl: ek }),
                                }),
                                eT && (0, a.jsx)(L.P, { stopAnimation: eA, className: q().playingAnimation }),
                            ],
                        }),
                    ),
                    eH = (0, _.L)(() =>
                        B.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: q().unavailableStatus,
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, a.jsx)('span', { className: q().unavailableStatusDot }),
                                      (0, a.jsx)(v.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eK = (0, _.L)(() =>
                        ey
                            ? (0, a.jsx)('div', {
                                  className: q().textFieldContainer,
                                  children: (0, a.jsx)(E.A, {
                                      text: B.name,
                                      className: q().textField,
                                      onChangeFinish: eL,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ep({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': d.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, a.jsx)(v.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: B.isDisabled ? 1 : 2,
                                  className: (0, s.$)(q().roomName, { [q().roomName_disabled]: B.isDisabled, [q().roomName_mobile]: eb }),
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_NAME,
                                  children: B.name,
                              }),
                    );
                return (0, a.jsxs)(p.MN, {
                    ref: K,
                    className: (0, s.$)(q().root, { [q().root_mobile]: eb }, U),
                    contentLinesCount: eb ? 2 : V,
                    textPosition: eb ? 'left' : 'center',
                    'data-intersection-property-id': $,
                    wrapperClassName: (0, s.$)(q().cardWrapper, { [q().cardWrapper_mobile]: eb }),
                    view: ez,
                    'aria-label': eM,
                    tabIndex: 0,
                    onClick: eI,
                    onKeyDown: eS,
                    onFocus: e_,
                    onMouseEnter: e_,
                    onMouseLeave: eu,
                    onBlur: eu,
                    'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, a.jsxs)('div', { className: (0, s.$)(q().roomInfo, { [q().roomInfo_mobile]: eb }), 'aria-hidden': !0, children: [eK, eH] }), eb && ek],
                });
            });
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
        63494: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var a = i(71035),
                s = i(27954),
                r = i(83918);
            let o = () => {
                let { location: e } = (0, s.g)(),
                    t = (0, r.X)();
                return (0, a.c)((i) => {
                    let a = new URL(window.location.href);
                    i.forEach((e) => a.searchParams.delete(e));
                    let s = a.toString();
                    (t(s), e.setHref(s), e.setSearchParams(a.searchParams.toString()));
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
            i.d(t, { h: () => C });
            var a = i(25839),
                s = i(74631),
                r = i(39004),
                o = i(93588),
                n = i(61493),
                l = i(4071),
                c = i(35622),
                d = i(69084),
                m = i(36484),
                _ = i(62562),
                u = i(92231),
                p = i(84059),
                v = i(30787),
                h = i(6969),
                b = i(29809),
                x = i.n(b);
            let C = (e) => {
                let { dataSessionId: t, isOpened: i, onOpen: b, onClose: C } = e,
                    A = (0, _.N)().get(m.V4),
                    { formatMessage: j } = (0, r.A)(),
                    T = (() => {
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
                    N = (0, s.useCallback)(
                        (e) => {
                            e.origin === A.afisha.host && 'close' === e.data.type && C();
                        },
                        [C, A.afisha.host],
                    );
                (0, s.useEffect)(
                    () => (
                        window.addEventListener('message', N),
                        () => {
                            window.removeEventListener('message', N);
                        }
                    ),
                    [N],
                );
                let f = (0, s.useCallback)(
                        (e) => {
                            e ? b() : C();
                        },
                        [C, b],
                    ),
                    I = (0, o.tE)(A, (0, u.u)()),
                    g = T(''.concat(A.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(I));
                return (0, a.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: i,
                    onOpenChange: f,
                    onClose: C,
                    showHeader: !1,
                    className: x().widget,
                    contentClassName: x().content,
                    overlayColor: 'full',
                    'data-test-id': n.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, a.jsx)(d.q, { children: (0, a.jsx)(l.$, { 'aria-label': j({ id: 'interface-actions.close' }), onClick: C }) }),
                        (0, a.jsx)('iframe', {
                            src: g,
                            className: x().root,
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
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (r[e](i, i.exports, n), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useTruncate = void 0));
                let e = n(810),
                    t = n(588),
                    i = n(792);
                l.useTruncate = function (a) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                        [r, o] = (0, e.useState)(0),
                        [n, l] = (0, e.useState)(!1);
                    (0, e.useEffect)(() => {
                        var e;
                        let t = null == (e = a.current) ? void 0 : e.offsetHeight;
                        r || !t || ('vertical' === s && o(t));
                    }, [r, s, a]);
                    let c = (0, i.useCallbackRef)(() => {
                        let e = a.current;
                        e && ('horizontal' === s && l(e.scrollWidth > e.clientWidth), 'vertical' === s && l(e.offsetHeight > 0 && r < e.scrollHeight));
                    });
                    return ((0, t.useResize)(c, a), { isTruncated: n });
                };
            })(),
                l.__esModule);
            var c = l.useTruncate;
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
        68854: (e) => {
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
                r = i(60296),
                o = i(59450),
                n = i(84e3),
                l = i(79670),
                c = i(26742),
                d = i(97952),
                m = i(10764);
            let _ = () => {
                let e = (0, o.st)(),
                    t = (0, n.U)(),
                    { hash: i } = (0, o.gf)(),
                    { pageId: _ } = (0, d.$)(),
                    { mainObjectType: u, mainObjectId: p } = (0, c.N)(),
                    { skeleton: v } = (0, m.b)();
                return (0, a.useCallback)(
                    (a) => {
                        let { tabId: o = '', tabPos: n = 1, isTabSelectedByDefault: c = !1 } = a;
                        if (!e || !_) return;
                        let d = { hash: i, pageId: l.W[_], tabId: o, tabPos: n, isTabSelectedByDefault: c };
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
        70676: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a = i(25839),
                s = i(82298),
                r = i(39004),
                o = i(23976),
                n = i(21532),
                l = i.n(n);
            let c = (e) => {
                let { className: t, isShimmerActive: i } = e,
                    { formatMessage: n } = (0, r.A)();
                return (0, a.jsxs)('div', {
                    'aria-label': n({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(l().root, t),
                    children: [
                        (0, a.jsx)(o.W, { className: l().date, radius: 'm', isActive: i }),
                        (0, a.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, a.jsx)(o.W, { className: l().title, radius: 's', isActive: i }),
                                (0, a.jsx)(o.W, { className: l().description, radius: 's', isActive: i }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { className: l().action, radius: 'l', isActive: i }),
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
            i.d(t, { B: () => T });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(84059),
                n = i(74631),
                l = i(39004),
                c = i(8487),
                d = i(61493),
                m = i(11871),
                _ = i(4071),
                u = i(66738),
                p = i(4254),
                v = i(91149),
                h = i(92942),
                b = i(27954),
                x = i(25895),
                C = i(57549),
                A = i(98919),
                j = i.n(A);
            let T = (0, r.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, l.A)(),
                    { createPlaylist: r } = (0, b.g)(),
                    { notify: A } = (0, h.l)(),
                    T = (0, o.useRouter)(),
                    N = (0, n.useRef)(!1),
                    f = (0, n.useCallback)(async () => {
                        if (N.current) return;
                        N.current = !0;
                        let e = await r.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: m.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, x.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            T.push(t);
                        } else (A((0, a.jsx)(C.h, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: v.u.ERROR }), (N.current = !1));
                    }, [r, i, T, A]);
                return (
                    (0, n.useEffect)(
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
                                onClick: f,
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
        77245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => N });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(39004),
                l = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                m = i(4254),
                _ = i(67379),
                u = i(36619),
                p = i(76945),
                v = i(59450),
                h = i(84e3),
                b = i(97952),
                x = i(89192),
                C = i(53712),
                A = i(15270),
                j = i(68854),
                T = i.n(j);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, n.A)(),
                    j = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: i } = (0, v.gf)(),
                        { pageId: a } = (0, b.$)(),
                        s = (0, h.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: u.EntityTypes.Error,
                                entityId: u.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                mainObjectType: u.DomainObjectType.NonApplicable,
                                mainObjectId: u.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, s]);
                })(j);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: i } = (0, b.$)(),
                            a = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, _.F)({
                                    params: {
                                        actionType: u.ActionType.Refresh,
                                        userInteractionType: u.UserInteractionType.Tap,
                                        entityType: u.EntityTypes.Error,
                                        entityId: u.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: u.PageStyles.Fullscreen,
                                        pagePlacement: u.PagePlacements.Fullscreen,
                                        mainObjectType: u.DomainObjectType.NonApplicable,
                                        mainObjectId: u.DomainObjectType.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, p.bv)(e.evgenInstance, s);
                            }, [e, t, i, a]),
                        };
                    })(),
                    f = (0, o.useCallback)(() => {
                        (N(), (window.location.href = C.Z.main.href));
                    }, [N]),
                    { contentRef: I } = (0, x.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(T().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(A.L, { withBackwardFallback: '/', className: (0, s.$)(T().navigation, { [T().navigation_desktop]: !I }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(T().content, { [T().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(m.DZ, { className: (0, s.$)(T().title, T().important), variant: 'h3', size: 'xs', children: j }),
                                (0, a.jsxs)(m.HL, {
                                    className: (0, s.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: f,
                                    className: T().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(m.HL, {
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
        82196: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => k });
            var a = i(25839),
                s = i(74631),
                r = i(36619),
                o = i(71035),
                n = i(49656),
                l = i(20258),
                c = i(95314),
                d = i(10322),
                m = i(27954),
                _ = i(82298),
                u = i(88204),
                p = i(39004),
                v = i(61493),
                h = i(4071),
                b = i(35622),
                x = i(67379),
                C = i(76945),
                A = i(59450),
                j = i(84e3),
                T = i(79670),
                N = i(25488),
                f = i(97952),
                I = i(83243),
                g = i(96433),
                S = i(12714),
                y = i(49337),
                R = i(53168),
                L = i.n(R);
            let E = (0, u.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: i,
                            settings: { isMobile: n },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, p.A)(),
                        { language: d } = (0, g.h)(),
                        u = (0, s.useRef)(null),
                        [R, E] = (0, s.useState)(!1),
                        [k, w] = (0, s.useState)(!1),
                        O = (() => {
                            let e = (0, A.st)(),
                                { hash: t } = (0, A.gf)(),
                                i = (0, j.U)(),
                                { pageId: a, pageStyle: s, pagePlacement: n } = (0, f.$)(),
                                { objectId: c = '', objectType: d } = (0, N.J)();
                            return (0, o.c)((o) => {
                                let { actionType: m, mainObjectType: _ = d, mainObjectId: u = c, userInteractionType: p = r.UserInteractionType.Tap } = o;
                                if (!e || !t || !a || !l.xK.includes(a) || !l.fD.includes(a)) return;
                                let v = T.W[a];
                                if (!v) return;
                                let h = (0, x.F)({
                                    params: {
                                        hash: t,
                                        pageId: v,
                                        pageStyle: s,
                                        pagePlacement: n,
                                        mainObjectType: _,
                                        mainObjectId: u,
                                        actionType: m,
                                        userInteractionType: p,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                h && (0, C.bv)(e.evgenInstance, h);
                            });
                        })(),
                        P = (0, I.l)({ mainObjectType: r.DomainObjectType.Lumen }),
                        M = (0, o.c)(async (e) => {
                            let t = i.isAwakened;
                            try {
                                e || (await i.getData(!0));
                            } finally {
                                (e || (!t && i.isAwakened && O({ actionType: r.ActionType.LumenAwakened }), P(!1), (u.current = null)), E(e));
                            }
                        }),
                        D = (0, o.c)(() => M(!1)),
                        B = (0, o.c)(() => {
                            var e;
                            (null == (e = u.current) || e.call(u), M(!1));
                        });
                    return (
                        (0, s.useEffect)(() => {
                            t.current = (e) => {
                                ((u.current = e), P(!0), E(!0));
                            };
                        }, [t, P]),
                        (0, s.useEffect)(() => {
                            if (!R) return void w(!1);
                            let e = window.setTimeout(() => w(!0), i.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [R, i.playButtonShowDelay]),
                        (0, a.jsxs)(b.a, {
                            open: R,
                            onOpenChange: M,
                            onClose: D,
                            placement: n ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, _.$)(L().root, (0, S.J)(y.S.Dark)),
                            headerClassName: L().header,
                            contentClassName: L().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: v.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': v.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, a.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': v.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, a.jsx)(h.$, {
                                    className: (0, _.$)(L().playButton, k && L().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: B,
                                    'data-test-id': v.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                k = () => {
                    let { lumen: e } = (0, m.g)(),
                        t = (0, s.useRef)(() => void 0),
                        i = (0, o.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, n.L)(() => {
                            if (e.isEnabled)
                                return (0, a.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: l._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: r.PageStyles.Sheet,
                                    pagePlacement: r.PagePlacements.Bottom,
                                    children: (0, a.jsx)(c.B, {
                                        objectId: '',
                                        objectType: r.DomainObjectType.Lumen,
                                        children: (0, a.jsx)(E, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: i,
                    };
                };
        },
        82904: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => w });
            var a = i(25839),
                s = i(88204),
                r = i(8487),
                o = i(36619),
                n = i(61493),
                l = i(71035),
                c = i(49656),
                d = i(14693),
                m = i(4071),
                _ = i(69084),
                u = i(4254),
                p = i(29481),
                v = i(52512),
                h = i(85686),
                b = i(27954),
                x = i(44806),
                C = i(17226),
                A = i(25895),
                j = i(7050),
                T = i(64407),
                N = i(83418);
            let f = ' • ',
                I = (e, t) => {
                    let i = [];
                    return (e.city && i.push(e.city), e.place && i.push(e.place), i.join(t));
                };
            var g = i(26330),
                S = i.n(g);
            let y = (0, s.PA)((e) => {
                let { concert: t, cashback: i } = e;
                return (0, a.jsxs)('div', {
                    className: S().meta,
                    children: [
                        (0, a.jsx)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: S().title,
                            'data-test-id': n.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, a.jsxs)(u.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: S().info,
                            children: [
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: S().location,
                                    'aria-label': I(t, ' '),
                                    'data-test-id': n.OA.concert.CONCERT_CARD_LOCATION,
                                    children: I(t, f),
                                }),
                                (0, a.jsx)(u.HL, { 'aria-hidden': !0, className: S().separator, variant: 'span', type: 'controls', weight: 'medium', children: f }),
                                (0, a.jsx)(u.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: S().rating,
                                    'data-test-id': n.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        i,
                    ],
                });
            });
            var R = i(2488),
                L = i(11148),
                E = i(73367),
                k = i.n(E);
            let w = (0, s.PA)((e) => {
                var t, i, s;
                let { concert: f, withMask: I = !0, withPriceButton: g, withInlineMeta: S = !1 } = e,
                    { state: E, toggleTrue: w, toggleFalse: O } = (0, d.e)(!1),
                    { ref: P, intersectionPropertyId: M } = (0, v.n)(),
                    { experiments: D } = (0, b.g)(),
                    B = D.checkExperiment(x.z.WebNextConcertPage, 'on'),
                    V = (0, p.N)(),
                    U = (0, j.Y)(),
                    { href: W } = (0, A.u)('/concert/:concertId', { params: { concertId: f.id } }),
                    z = (0, h.Z)(W),
                    H = U(f),
                    K = (0, l.c)((e) => {
                        (V({ to: o.AppScreen.ConcertPurchaseScreen }), w(), null == e || e.stopPropagation());
                    }),
                    Y = (0, l.c)((e) => {
                        if (!B) return void K(e);
                        (V({ to: o.AppScreen.ConcertScreen }), z(e));
                    }),
                    $ = (0, l.c)((e) => {
                        (e.code === C.v.SPACE || e.code === C.v.ENTER) && (e.preventDefault(), Y());
                    }),
                    F = (0, l.c)((e) => {
                        B && (K(e), e.preventDefault());
                    }),
                    G = (0, c.L)(() => {
                        let e = f.isIdentityExperimentEnabled && f.cashbackValuePercent,
                            t = !f.isIdentityExperimentEnabled && f.isCashbackExperimentEnabled && f.cashbackTitle;
                        if (e || t)
                            return (0, a.jsx)(N.m, {
                                className: k().cashback,
                                titleClassName: k().cashbackTitle,
                                title: f.cashbackTitle,
                                valuePercent: f.cashbackValuePercent,
                            });
                    }),
                    X = (0, a.jsx)(R.M, { concert: f, withCashback: !1, withInlineMeta: S, titleSize: 'l' }),
                    Z = (0, a.jsx)(y, { concert: f, cashback: G });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: k().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: Y,
                            onKeyDown: $,
                            ref: P,
                            'data-intersection-property-id': M,
                            'data-test-id': n.OA.concert.CONCERT_CARD,
                            children: [
                                (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: (0, a.jsx)(r.A, { id: 'entity-names.concert' }) }) }),
                                (0, a.jsx)('div', {
                                    className: k().cover,
                                    children: (0, a.jsx)(L.W, {
                                        datetime: f.datetime,
                                        coverColor: null == (t = f.cover) ? void 0 : t.color,
                                        uri: null == (i = f.cover) ? void 0 : i.uri,
                                        withMask: I,
                                        cashbackPercent: f.isIdentityExperimentEnabled ? f.cashbackValuePercent : void 0,
                                    }),
                                }),
                                f.isIdentityExperimentEnabled ? X : Z,
                                !!(null == (s = f.price) ? void 0 : s.value) && (0, a.jsx)(_.q, { children: (0, a.jsx)(u.HL, { variant: 'div', children: H }) }),
                                g &&
                                    (0, a.jsx)(m.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: k().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: F,
                                        'data-test-id': n.OA.concert.CONCERT_CARD_BUTTON,
                                        children: H,
                                    }),
                            ],
                        }),
                        (0, a.jsx)(T.h, { dataSessionId: f.dataSessionId, isOpened: E, onOpen: w, onClose: O }),
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
                n = i(4254),
                l = i(69663),
                c = i(83418),
                d = i(26330),
                m = i.n(d);
            let _ = (0, s.PA)((e) => {
                let { id: t, concert: i } = e,
                    { formatDate: s } = (0, o.A)(),
                    d = [],
                    _ = (0, a.jsx)(n.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == i ? void 0 : i.place) && d.push((0, a.jsx)(n.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: i.place })),
                    (null == i ? void 0 : i.datetime) &&
                        d.push(_, (0, a.jsx)(n.HL, { variant: 'span', size: 'm', weight: 'medium', className: m().time, children: s(i.datetime, (0, l.f)()) })),
                    (null == i ? void 0 : i.contentRating) && d.push(_, (0, a.jsx)(n.HL, { variant: 'span', size: 'm', weight: 'medium', children: i.contentRating })),
                    (0, a.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, a.jsx)(n.HL, { variant: 'div', size: 'm', weight: 'medium', className: m().city, lineClamp: 1, children: null == i ? void 0 : i.city }),
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
                n = i(4254),
                l = i(11618),
                c = i.n(l);
            let d = (e) => {
                let { title: t, className: i, titleClassName: l, valuePercent: d } = e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(c().root, i),
                    children: [
                        (0, a.jsx)(o.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, a.jsx)(n.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, s.$)(c().title, l),
                            'data-test-id': r.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        83918: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(74631);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84715: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => O });
            var a = i(25839),
                s = i(82298),
                r = i(88204),
                o = i(74631),
                n = i(49656),
                l = i(51859),
                c = i(89192),
                d = i(27954),
                m = i(69041),
                _ = i(9931),
                u = i(29504),
                p = i(67379),
                v = i(60296),
                h = i(59450),
                b = i(84e3),
                x = i(79670),
                C = i(26742),
                A = i(97952),
                j = i(10764),
                T = i(79396),
                N = i(57469),
                f = i.n(N);
            let I = (e) => {
                let { filter: t, tabsState: i, value: r, isSticky: n, ...l } = e,
                    c = (() => {
                        let e = (0, o.useRef)(!1),
                            t = (0, h.st)(),
                            i = (0, b.U)(),
                            { hash: a } = (0, h.gf)(),
                            { pageId: s } = (0, A.$)(),
                            { mainObjectType: r, mainObjectId: n } = (0, C.N)(),
                            { skeleton: l } = (0, j.b)();
                        return (0, o.useCallback)(
                            (o) => {
                                let { tabId: c = '', tabPos: d = 1, isTabSelectedByDefault: m = !1 } = o;
                                if (!t || !s || e.current) return;
                                let _ = { hash: a, pageId: x.W[s], tabId: c, tabPos: d, isTabSelectedByDefault: m };
                                (l && (_.skeletonId = l), n && r && ((_.mainObjectType = r), (_.mainObjectId = n)));
                                let u = (0, p.F)({ params: _, logger: i, context: 'useSendEventOnTabLoaded' });
                                u && ((0, v.hc)(t.evgenInstance, u), (e.current = !0));
                            },
                            [t, s, a, l, n, r, i],
                        );
                    })();
                return (
                    (0, o.useEffect)(() => {
                        c({ tabId: t.id, tabPos: r + 1, isTabSelectedByDefault: t.id === u.Q.ALL });
                    }, [t.id, r, c]),
                    (0, a.jsx)(T.o, { tabIndex: n ? -1 : 0, className: (0, s.$)(f().root, { [f().root_selected]: r === i.value }), title: t.name, value: r, ...l })
                );
            };
            var g = i(99221),
                S = i.n(g);
            let y = (0, r.PA)((e) => {
                let { className: t, isActive: i = !0, shimmerClassName: r } = e;
                return (0, a.jsx)(_.wI, {
                    className: (0, s.$)(S().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, a.jsx)(_.zr, { className: (0, s.$)(S().root, r), shimmerClassName: S().shimmer, count: 3, isActive: i }),
                });
            });
            var R = i(74803),
                L = i.n(R);
            let E = { [l.u.Desktop]: { start: 40, end: 20 }, [l.u.Mobile]: { start: 40, end: 40 } },
                k = { [l.u.Desktop]: { start: 40, end: 20 }, [l.u.Mobile]: { start: 20, end: 50 } },
                w = (0, r.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: i,
                            className: r,
                            forwardRef: l,
                            carouselClassName: u,
                            shimmerClassName: p,
                            isSticky: v,
                            items: h,
                            isShimmerVisible: b,
                            isShimmerActive: x,
                            skipSearchCheck: C = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: j },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: T, playlistStaticFiltersRef: N, contentScrollRef: f } = (0, c.g)(),
                        g = null != h ? h : A.filters.items,
                        S = (0, n.L)(() =>
                            (0, a.jsx)(_.wI, {
                                ref: l,
                                className: (0, s.$)(L().carousel, u),
                                ...t,
                                onTabChange: i,
                                children: null == g ? void 0 : g.map((e, i) => (0, a.jsx)(I, { filter: e, tabsState: t, value: i, isSticky: v }, e.id)),
                            }),
                        ),
                        R = (0, o.useCallback)(() => {
                            N && T && (N.scrollLeft = T.scrollLeft);
                        }, [N, T]),
                        w = (0, o.useCallback)(() => {
                            N && T && (T.classList.add(L().carousel_noSmooth), (T.scrollLeft = N.scrollLeft), T.classList.remove(L().carousel_noSmooth));
                        }, [N, T]),
                        [O, P] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        O && w();
                    }, [O, w]);
                    let M = (0, o.useCallback)(() => {
                        P((null == T ? void 0 : T.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [T]);
                    return (
                        (0, o.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                v
                                    ? (null == T || T.addEventListener('scroll', R, t), null == T || T.addEventListener('resize', R, t))
                                    : j
                                      ? (window.addEventListener('scroll', M, t), window.addEventListener('resize', M, t))
                                      : (null == f || f.addEventListener('scroll', M, t), null == f || f.addEventListener('resize', M, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [v, f, T, M, R, j]),
                        (null != b ? b : A.filters.isShimmerVisible)
                            ? (0, a.jsx)(y, { isActive: null == x || x, shimmerClassName: p })
                            : g && 0 !== g.length && (C || A.search.isNeededToLoad)
                              ? (0, a.jsx)(m.F, { className: r, carouselElement: S, ref: l, scrollPadding: v ? k : E })
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
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var a = (o[t] = { exports: {} });
                    return (r[t](a, a.exports, e), a.exports);
                })(810);
                n.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                n.__esModule);
            var l = n.useIsomorphicEffect;
            let c = (e) => {
                let [t, i] = (0, a.useState)(!1);
                return (
                    l(() => {
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
            i.d(t, { b: () => n });
            var a = i(25839),
                s = i(82298),
                r = i(20006),
                o = i.n(r);
            let n = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: n = !1, className: l, surfaceClassName: c, overlayClassName: d } = e,
                    m = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, s.$)(o().root, m ? o().root_back : o().root_front, l),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, s.$)(o().circle, { [o().circle_back]: m, [o().circle_disabled]: n }),
                            children: [(0, a.jsx)('span', { className: (0, s.$)(o().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
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
            i.d(t, { X: () => x });
            var a = i(25839),
                s = i(82298),
                r = i(74631),
                o = i(39004),
                n = i(8487),
                l = i(89288),
                c = i(4071),
                d = i(66738),
                m = i(86869),
                _ = i(4254),
                u = i(6323),
                p = i(97522),
                v = i(90923),
                h = i.n(v);
            let b = (e) => {
                    let { artist: t, goal: i, onNavigateToArtist: r, onNavigateToDonation: v, forwardRef: b, ...x } = e,
                        { formatMessage: C } = (0, o.A)();
                    return (0, a.jsxs)('div', {
                        ref: b,
                        className: (0, s.$)(h().root, h().donation),
                        ...(0, l.OZ)(x),
                        children: [
                            (0, a.jsx)(m.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, a.jsx)(p.N, {
                                    href: t.url,
                                    onClick: r,
                                    'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
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
                                                children: (0, a.jsx)(n.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, a.jsx)(b, { forwardRef: t, ...e }));
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
                    withInfo: n,
                    count: l = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': m,
                    withSubcover: _,
                } = e;
                return Array.from(Array(l).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: o, withInfo: n, withSubcover: _, 'aria-label': m, shimmerClassName: c },
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
