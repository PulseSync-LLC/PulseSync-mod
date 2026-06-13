(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [864],
    {
        1456: (t, e, i) => {
            'use strict';
            i.d(e, { AudiobookMeta: () => b });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(39407),
                c = i(59824),
                d = i(70280),
                u = i(71926),
                m = i(33797),
                k = i(93510),
                _ = i(49574),
                p = i(44574),
                v = i(25649),
                C = i(24760),
                x = i(84141),
                T = i(14960),
                g = i(5856),
                y = i.n(g),
                A = i(50918),
                h = i.n(A);
            let b = (0, l.PA)((t) => {
                var e, i, l, g;
                let {
                        track: A,
                        className: b,
                        withAuthor: N = !1,
                        withSecondaryColor: I = !1,
                        withListeningProgress: j = !1,
                        captionSize: P = 'm',
                        explicitSize: L = 'xs',
                        withExplicitMark: f = !0,
                        titleContainerClassName: D,
                        textClassName: S,
                        playContextParams: M,
                        withTimeLeftText: R = !0,
                        ignoreDislikedStyles: E,
                        albumArtists: O,
                        withCustomTooltip: K = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: B,
                        beforeTitle: U,
                        afterTitle: z,
                        withContextMenuArtists: G,
                        withArtistLink: $ = !0,
                    } = t,
                    {
                        sonataState: q,
                        settings: { isMobile: F },
                    } = (0, _.Pjs)(),
                    { formatMessage: X } = (0, n.A)(),
                    Y = (0, C.$)({ withCustomTooltip: K }),
                    V = (0, x.useOnTrackLinkClick)({ track: A, withSavingQueryParams: B, entityType: _.nPY.AUDIOBOOK }),
                    Q = !!(j && M && A.shouldRememberPosition && A.streamProgress && A.durationMs),
                    W =
                        A.id === (null == (e = q.entityMeta) ? void 0 : e.id) &&
                        (null == (l = q.entityMeta) || null == (i = l.streamProgress) ? void 0 : i.endPositionSec),
                    H = (0, T.d)(Q, A.streamProgress, W),
                    J = (0, s.useMemo)(() => (0, v.s)(A.artists, O), [A.artists, O, A.id]),
                    Z = J.length > 0 && N && !H,
                    tt = (0, s.useCallback)(
                        (t) =>
                            (0, a.jsx)(d.m_, {
                                enabled: Y && !F,
                                offsetOptions: 4,
                                placement: 'top',
                                text: A.title,
                                hoverSettings: _.VP$,
                                children: (0, a.jsx)(u.Caption, {
                                    className: y().title,
                                    type: 'entity',
                                    size: P,
                                    variant: 'span',
                                    title: Y ? void 0 : A.title,
                                    ...t,
                                    children: A.title,
                                }),
                            }),
                        [F, Y, P, A.title],
                    ),
                    te = (0, s.useMemo)(() => {
                        if (A.isRemoved) return (0, a.jsx)(o.A, { id: 'track-title.audiobook-not-found' });
                        if (A.hasTrackLink) {
                            var t;
                            return (0, a.jsx)(p.N_, {
                                'aria-label': X({ id: 'entity-names.audiobook-name' }, { bookName: null == (t = A.mainAlbum) ? void 0 : t.title }),
                                className: y().albumLink,
                                href: A.url,
                                title: Y ? void 0 : A.title,
                                onClick: V,
                                ...(0, c.Am)(c.Kq.track.TRACK_TITLE),
                                children: tt(),
                            });
                        }
                        return tt((0, c.Am)(c.Kq.track.TRACK_TITLE));
                    }, [A.isRemoved, A.hasTrackLink, null == (g = A.mainAlbum) ? void 0 : g.title, A.title, A.url, tt, X, Y, V]),
                    ti = (0, s.useMemo)(() => +!!w, [w]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(y().root, { [y().root_disabled]: !A.isAvailable, [y().root_disliked]: A.isDisliked && !E, [y().root_withSecondaryColor]: I }, b),
                    children: (0, a.jsxs)('div', {
                        className: (0, r.$)(y().metaContainer, h().metaContainer, { [h().metaContainer_oneLine]: !N }),
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(y().titleContainer, D, h().titleContainer),
                                children: [
                                    (0, a.jsxs)(u.Caption, {
                                        className: (0, r.$)(y().text, S),
                                        type: 'entity',
                                        size: P,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            U,
                                            te,
                                            !A.isRemoved &&
                                                A.version &&
                                                (0, a.jsxs)(u.Caption, {
                                                    className: (0, r.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: P,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Y ? void 0 : A.version,
                                                    children: ['\xa0', A.version],
                                                }),
                                        ],
                                    }),
                                    A.explicitDisclaimer &&
                                        f &&
                                        (0, a.jsx)(p.Nq, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: A.getDescriptionTexts,
                                            variant: A.explicitDisclaimer,
                                            className: y().explicitMark,
                                            size: L,
                                            trackId: A.id,
                                        }),
                                    z,
                                ],
                            }),
                            Z &&
                                (0, a.jsx)(u.Caption, {
                                    type: 'entity',
                                    size: P,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, r.$)(y().text, h().artists, S),
                                    children: (0, a.jsx)(m.iQ, {
                                        className: (0, r.$)(y().text, { [y().artists]: w }, S),
                                        linkClassName: (0, r.$)(y().text, y().link),
                                        captionClassName: (0, r.$)(y().text, y().artistCaption),
                                        artists: J,
                                        withLink: A.isNonUserGenerated && $,
                                        lineClamp: ti,
                                        captionSize: P,
                                        withContextMenu: G,
                                    }),
                                }),
                            Q &&
                                A.streamProgress &&
                                M &&
                                (0, a.jsx)(k.Bg, {
                                    className: (0, r.$)(h().progress, { [h().progress_withPreviousInfo]: Z, [h().progress_disabled]: !A.isAvailable || A.isDisliked }),
                                    id: A.id,
                                    albumId: A.albumId,
                                    streamProgress: A.streamProgress,
                                    durationMs: A.durationMs || 0,
                                    playContextParams: M,
                                    withTimeLeftText: R,
                                }),
                        ],
                    }),
                });
            });
        },
        2413: (t, e, i) => {
            'use strict';
            i.d(e, { TrackAlbum: () => _ });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(59824),
                n = i(49574),
                o = i(6647),
                c = i(68912),
                d = i(83521),
                u = i(22762),
                m = i(85819),
                k = i.n(m);
            let _ = (0, r.PA)((t) => {
                let { track: e, albumArtists: i, position: r, playContextParams: m, withLightning: _ } = t,
                    p = (0, n.Dx4)({ playContextParams: m, entityId: e.entityId }),
                    {
                        settings: { isMobile: v },
                    } = (0, n.Pjs)(),
                    C = (0, l.useCallback)((t) => (0, a.jsx)(d.G, { track: e, position: r, className: k().playButtonCell, ...t }), [e, r]);
                return (0, a.jsx)(u.Track, {
                    track: e,
                    withLightning: _,
                    meta: (0, a.jsx)(c.TrackMeta, { withArtistLink: !v, albumArtists: i, track: e, withSavingQueryParams: !0 }),
                    playButtonCellRender: C,
                    controls: (0, a.jsx)(o.ControlsBar, { withLightning: _, track: e, className: k().controlsBarCell, utmLink: m.contextData.utmLink }),
                    ...p,
                    ...(0, s.Am)(s.Kq.track.TRACK_ALBUM),
                });
            });
        },
        4664: (t, e, i) => {
            'use strict';
            i.d(e, { SearchTrackCard: () => T });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(59824),
                o = i(71483),
                c = i(44884),
                d = i(96333),
                u = i(91027),
                m = i(58359),
                k = i(49574),
                _ = i(44574),
                p = i(54171),
                v = i(6647),
                C = i(27616),
                x = i(68912);
            let T = (0, l.PA)((t) => {
                var e;
                let { className: i, track: l, pageId: T, playContextParams: g } = t,
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: A } = (0, k.qBP)(),
                    { ref: h, intersectionPropertyId: b } = (0, k.nMI)(),
                    {
                        track: N,
                        settings: { isMobile: I },
                        paywall: { modal: j },
                    } = (0, k.Pjs)(),
                    P = (0, k.NPu)(),
                    { from: L } = (0, k.fyy)({ pageId: T }),
                    f = (0, k.brA)(),
                    D = {
                        contextData: { type: o.K.Various, meta: { id: l.entityId }, from: L, overrideContextType: c.b.Search },
                        queueParams: { index: 0, entityId: l.id },
                        loadContextMeta: !0,
                    },
                    S = null != g ? g : D,
                    { isPlaying: M, isCurrent: R, togglePlay: E, restartPlay: O } = (0, k.Dx4)({ playContextParams: S, entityId: l.entityId }),
                    K = (0, k.PT7)(),
                    w = (0, p.useTrackDisclaimer)({ track: l, callback: E }),
                    B = (0, s.useCallback)(() => {
                        N.open({ trackId: l.id, albumId: l.albumId });
                    }, [N, l.id, l.albumId]),
                    U = (0, p.useTrackDisclaimer)({ track: l, callback: B }),
                    { sendPlaySearchFeedback: z } = (0, k.zEv)(),
                    [G, $] = (0, s.useState)(!1),
                    q = (0, u.c)(() => {
                        if (!K()) {
                            if (y) return void A();
                            if (P) return void j.open();
                            G || M || ($(!0), null == z || z()), w(), f(!M);
                        }
                    }),
                    F = (0, u.c)(() => {
                        if (M) return void O();
                        q();
                    }),
                    X = (0, u.c)((t) => {
                        if (!l.isAvailable && !l.hasModalAccess) {
                            y && l.isAvailableOnlyForPlus && A(), P && l.isAvailableOnlyForPlus && j.open();
                            return;
                        }
                        if (y) return void A();
                        let e = !I && (2 === t.detail || (1 === t.detail && l.hasTrackLink));
                        return P && !e
                            ? void j.open()
                            : ((0, m.P)(t, _.$f.ripple), I)
                              ? void q()
                              : 2 === t.detail
                                ? void F()
                                : void (1 === t.detail && l.hasTrackLink && (U(), P && j.open()));
                    }),
                    Y = (0, s.useCallback)(
                        (t) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: l.isAvailable,
                                isDisliked: l.isDisliked,
                                coverUri: l.coverUri,
                                title: l.title,
                                className: _.$f.playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [l],
                    ),
                    V = null == Y ? void 0 : Y({ onPlayButtonClick: q, isPlaying: M, isCurrent: R });
                return (0, a.jsxs)(_.Cj, {
                    ref: h,
                    'data-intersection-property-id': b,
                    className: (0, r.$)(_.$f.root, i),
                    'aria-label': ''
                        .concat(l.artistsNames, ' ')
                        .concat(l.title, ' ')
                        .concat(null != (e = l.version) ? e : ''),
                    onClick: X,
                    ...(0, n.Am)(n.Kq.track.SEARCH_TRACK_CARD),
                    children: [
                        V,
                        l.type === d.S.PODCAST
                            ? (0, a.jsx)(C.PodcastMeta, { track: l, playContextParams: S, withPodcastName: !0, withListeningProgress: !0, withAlbumTitleLink: !I })
                            : (0, a.jsx)(x.TrackMeta, { withArtistLink: !I, track: l }),
                        (0, a.jsx)(v.ControlsBar, { className: _.$f.controlsBarCell, track: l }),
                    ],
                });
            });
        },
        5420: (t, e, i) => {
            'use strict';
            i.d(e, { useTrackAboutModalTitle: () => l });
            var a = i(60900),
                r = i(96333);
            let l = (t) => {
                var e;
                let { formatMessage: i } = (0, a.A)();
                return i(
                    (null == t ? void 0 : t.type) === r.S.AUDIOBOOK
                        ? { id: 'track-modal.audiobook-title' }
                        : (null == t ? void 0 : t.isTrackPodcast) || (null == t || null == (e = t.mainAlbum) ? void 0 : e.isPodcast)
                          ? { id: 'track-modal.podcast-title' }
                          : { id: 'track-modal.title' },
                );
            };
        },
        5447: (t) => {
            t.exports = { syncLyrics: 'TrackContextMenu_syncLyrics___CDVn' };
        },
        5856: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'Meta_artistCaption__JESZi',
                link: 'Meta_link__IFDBA',
                albumTitle: 'Meta_albumTitle__mHeOs',
                root: 'Meta_root__R8n1h',
                root_withSecondaryColor: 'Meta_root_withSecondaryColor___uENY',
                root_disabled: 'Meta_root_disabled__Dpx_M',
                albumLink: 'Meta_albumLink__gASh6',
                artists: 'Meta_artists__VnR52',
                explicitMark: 'Meta_explicitMark__ocnCV',
                title: 'Meta_title__GGBnH',
                titleContainer: 'Meta_titleContainer__gDuXr',
                version: 'Meta_version__c2sHU',
                root_disliked: 'Meta_root_disliked__DrZ7_',
                text: 'Meta_text__Y5uYH',
                explicitMarkContainer: 'Meta_explicitMarkContainer__BxMQg',
                metaContainer: 'Meta_metaContainer__7i2dp',
                titleContainer_withVersion: 'Meta_titleContainer_withVersion__n7MdY',
            };
        },
        6647: (t, e, i) => {
            'use strict';
            i.d(e, { ControlsBar: () => N });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(39407),
                c = i(16172),
                d = i(59824),
                u = i(91027),
                m = i(82586),
                k = i(70280),
                _ = i(71926),
                p = i(93510),
                v = i(49574),
                C = i(44574),
                x = i(12518),
                T = i(13486),
                g = i(54714),
                y = i.n(g),
                A = i(92565),
                h = i.n(A);
            let b = (0, l.PA)((t) => {
                    let { track: e } = t,
                        { formatMessage: i } = (0, n.A)();
                    return e.isDownloaded
                        ? (0, a.jsx)(m.Icon, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              ...(0, d.Am)(d.Kq.track.DOWNLOADED_TRACK_ICON),
                          })
                        : e.isDownloading
                          ? (0, a.jsx)(C.AD, { value: e.downloadingProgress, size: 16, className: h().downloadingProgress, progressBarClassName: h().progress })
                          : null;
                }),
                N = (0, l.PA)((t) => {
                    var e, i;
                    let {
                            className: l,
                            track: g,
                            withLightning: A,
                            ignoreDislikedStyles: h,
                            onLikeClick: N,
                            utmLink: I,
                            withSecondaryColor: j,
                            handleRemove: P,
                            withTrailer: L = !0,
                            likeIconSize: f = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: S,
                        } = t,
                        { user: M, trailer: R } = (0, v.Pjs)(),
                        { formatMessage: E } = (0, n.A)(),
                        { sendLikeSearchFeedback: O } = (0, v.zEv)(),
                        [K, w] = (0, s.useState)(!1),
                        [B, U] = (0, s.useState)(!1),
                        z = (0, v.PT7)(),
                        G = (0, p.KX)(g),
                        $ = (0, v.PMf)(Math.round((null != (i = g.durationMs) ? i : 0) / 1e3)),
                        q = (0, v.Ftl)(),
                        F = M.hasPlus,
                        X = !g.isRemoved && g.isAvailable && !S,
                        Y = (0, u.c)(async () => {
                            K || g.isLiked || (w(!0), null == O || O()), await G(), null == N || N(g.isLiked);
                        }),
                        V = (0, u.c)((t) => {
                            t.stopPropagation();
                        }),
                        Q = (0, u.c)((t) => {
                            if ((t.stopPropagation(), z())) return void t.preventDefault();
                            R.openTrackTrailer(g.id), q(c.ky.Track, g.id);
                        }),
                        W = (0, s.useMemo)(() => {
                            if (X)
                                return (0, a.jsx)('div', {
                                    onClick: V,
                                    children: (0, a.jsx)(T.TrackContextMenu, {
                                        track: g,
                                        open: B,
                                        onOpenChange: U,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(m.Icon, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: I,
                                        className: (0, r.$)(y().contextMenu, { [y().contextMenu_visible]: B }),
                                        handleRemove: P,
                                        withTrailer: L,
                                        ...(0, d.Am)(d.Kq.track.TRACK_CONTEXT_MENU_BUTTON),
                                    }),
                                });
                        }, [V, P, B, X, L, g, I]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(y().root, y().controls, l, {
                            [y().controls_dislikedControls]: g.isDisliked,
                            [y().controls_dislikedColors]: g.isDisliked && !h,
                            [y().controls_disabled]: !g.isAvailable,
                            [y().root_withSecondaryColor]: j,
                        }),
                        children: [
                            A &&
                                (0, a.jsx)(m.Icon, {
                                    'aria-label': E({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: y().lightning,
                                    variant: 'lightning',
                                }),
                            g.isUGC &&
                                (0, a.jsxs)(k.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(m.Icon, {
                                            'aria-label': E({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: y().ugcIcon,
                                            variant: 'eye_crossed',
                                            ...(0, d.Am)(d.Kq.track.UGC_TRACK_ICON),
                                        }),
                                        (0, a.jsx)(k.ZI, { children: (0, a.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            F && (0, a.jsx)('div', { className: (0, r.$)(y().item, y().downloadIcon), children: (0, a.jsx)(b, { track: g }) }),
                            P && !S && (0, a.jsx)(p.d0, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(y().item, y().removeButton), onClick: P, ariaLabel: D }),
                            X &&
                                (0, a.jsx)(C.aQ, {
                                    fallback: (0, a.jsx)(C.cy, {
                                        size: 'xs',
                                        iconSize: f,
                                        className: (0, r.$)(y().item, y().likeIcon),
                                        isLiked: g.isLiked,
                                        onClick: Y,
                                        disabled: !M.isAuthorized,
                                    }),
                                }),
                            (null == (e = g.trailer) ? void 0 : e.isAvailable) &&
                                g.isAvailable &&
                                (0, a.jsx)(C.aQ, {
                                    fallback: (0, a.jsx)(C.kJ, {
                                        className: (0, r.$)(y().item, y().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: Q,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(y().item, y().contextMenuWrapper),
                                children: [
                                    'number' == typeof g.durationMs &&
                                        (0, a.jsx)(_.Caption, {
                                            variant: 'span',
                                            className: (0, r.$)(y().duration, { [y().duration_hidden]: B && X }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': $,
                                            role: 'text',
                                            ...(0, d.Am)(d.Kq.track.TRACK_DURATION),
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, x.h)(g.durationMs) }),
                                        }),
                                    W,
                                ],
                            }),
                        ],
                    });
                });
        },
        7902: (t, e, i) => {
            'use strict';
            i.d(e, { TrailerTrackAlbum: () => _ });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(59824),
                n = i(49574),
                o = i(6647),
                c = i(68912),
                d = i(83521),
                u = i(22762),
                m = i(85819),
                k = i.n(m);
            let _ = (0, r.PA)((t) => {
                let { track: e, albumArtists: i, position: r, playContextParams: m, withLightning: _, onPlayClick: p, onLikeClick: v, onDislikeClick: C } = t,
                    {
                        trailer: x,
                        settings: { isMobile: T },
                        album: g,
                    } = (0, n.Pjs)(),
                    y = (0, n.Dx4)({ playContextParams: m, entityId: e.entityId, sonataState: x.state, playbackId: n.V_r.TRAILER }),
                    A = (0, l.useCallback)((t) => (0, a.jsx)(d.G, { track: e, position: r, className: k().playButtonCell, ...t }), [e, r]);
                return (0, a.jsx)(u.Track, {
                    track: e,
                    withLightning: _,
                    meta: (0, a.jsx)(c.TrackMeta, { withArtistLink: !T, albumArtists: i, track: e, withSavingQueryParams: g.id === e.albumId }),
                    playButtonCellRender: A,
                    onPlayClick: p,
                    controls: (0, a.jsx)(o.ControlsBar, { withLightning: _, track: e, className: k().controlsBarCell, onLikeClick: v, onDislikeClick: C }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ...y,
                    ...(0, s.Am)(s.Kq.track.TRACK_ALBUM),
                });
            });
        },
        9970: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => r, d: () => a });
            let a = (t) => String(t).split(':'),
                r = (t, e) => (e ? [t, e].join(':') : t);
        },
        11303: (t) => {
            t.exports = { playButtonCell: 'PromoLandingTrackAlbum_playButtonCell__5ZuIk', controlsBarCell: 'PromoLandingTrackAlbum_controlsBarCell__Hapyd' };
        },
        12326: (t, e, i) => {
            'use strict';
            i.d(e, { TrackSchema: () => o });
            var a = i(32290),
                r = i(96103),
                l = i(82736),
                s = i(49574),
                n = i(44574);
            let o = (0, r.PA)((t) => {
                var e, i;
                let { user: r, track: o } = t,
                    c = (0, s.NFA)().get(s.twC),
                    d = (0, s._lF)(c.oldWebHost);
                if (r.isAuthorized) return null;
                let u = { host: 'https://'.concat(d) },
                    { href: m } = o.albumId
                        ? (0, l.getLinkAttributesBase)('/album/:albumId/track/:trackId', { params: { albumId: o.albumId, trackId: o.id }, options: u })
                        : (0, l.getLinkAttributesBase)('/track/:trackId', { params: { trackId: o.id }, options: u }),
                    k = o.mainArtist ? (0, l.getLinkAttributesBase)('/artist/:artistId', { params: { artistId: o.mainArtist.id }, options: u }).href : void 0,
                    _ = o.mainAlbum ? (0, l.getLinkAttributesBase)('/album/:albumId', { params: { albumId: o.mainAlbum.id }, options: u }).href : void 0;
                return (0, a.jsx)(n.Sj, {
                    value: {
                        '@type': 'MusicRecording',
                        name: o.title,
                        url: m,
                        thumbnailUrl: o.coverUri ? (0, l.createAvatarUrl)(o.coverUri, 'orig') : void 0,
                        duration: (0, s.FXG)(null != (e = o.durationMs) ? e : 0),
                        genre: null != (i = o.genre) ? i : void 0,
                        datePublished: o.pubDate,
                        description: o.shortDescription,
                        byArtist: o.mainArtist ? { '@type': 'MusicGroup', name: o.mainArtist.name, url: k } : void 0,
                        inAlbum: o.mainAlbum
                            ? {
                                  '@type': 'MusicAlbum',
                                  name: o.mainAlbum.title,
                                  url: _,
                                  thumbnailUrl: o.mainAlbum.coverUri ? (0, l.createAvatarUrl)(o.mainAlbum.coverUri, 'orig') : void 0,
                              }
                            : void 0,
                        potentialAction: {
                            '@type': 'ListenAction',
                            expectsAcceptanceOf: { '@type': 'Offer', category: 'free', target: { '@type': 'EntryPoint', actionPlatform: m } },
                        },
                    },
                });
            });
        },
        12518: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => r });
            var a = i(49574);
            let r = (t) => {
                let e = Math.round((t || 0) / a.k7R);
                return (0, a.E4p)(e);
            };
        },
        13486: (t, e, i) => {
            'use strict';
            i.d(e, { TrackContextMenu: () => z });
            var a = i(32290),
                r = i(63618),
                l = i(92708),
                s = i(96103),
                n = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(16172),
                u = i(59824),
                m = i(62386),
                k = i(79490),
                _ = i(91027),
                p = i(82586),
                v = i(19740),
                C = i(9152),
                x = i(72480),
                T = i(78822),
                g = i(93510),
                y = i(49574),
                A = i(44574),
                h = i(18729),
                b = i(5420);
            let N = (0, s.PA)((t) => {
                let { track: e } = t,
                    {
                        modals: { ugcTrackEditModal: i },
                    } = (0, y.Pjs)(),
                    r = (0, n.useCallback)(() => {
                        i.open(e);
                    }, [e, i]);
                return (0, a.jsx)(v.Dr, {
                    onClick: r,
                    icon: (0, a.jsx)(p.Icon, { variant: 'edit', size: 'xxs' }),
                    ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON),
                    children: (0, a.jsx)(c.A, { id: 'interface-actions.edit' }),
                });
            });
            var I = i(33797),
                j = i(5447),
                P = i.n(j);
            let L = (0, s.PA)((t) => {
                    let { className: e, artist: i, ...r } = t,
                        { fullscreenPlayer: l } = (0, y.Pjs)(),
                        s = (0, y.ZpR)(i.url),
                        n = (0, _.c)((t) => {
                            s(t), l.modal.close();
                        });
                    return (0, a.jsx)(v.Dr, {
                        className: e,
                        onClick: n,
                        icon: (0, a.jsx)(p.Icon, { className: P().navigateToAlbumIcon, variant: 'artist', size: 'xxs' }),
                        ...r,
                        children: (0, a.jsx)(c.A, { id: 'interface-actions.navigate-to-artist' }),
                    });
                }),
                f = (0, s.PA)((t) => {
                    let { className: e, artists: i } = t,
                        {
                            settings: { isMobile: r },
                        } = (0, y.Pjs)(),
                        { formatMessage: l } = (0, o.A)();
                    return 1 === i.length && i[0]
                        ? (0, a.jsx)(L, { className: e, artist: i[0], ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST) })
                        : (0, a.jsx)(v.W1, {
                              isMobile: r,
                              icon: (0, a.jsx)(p.Icon, { variant: 'artist', size: 'xxs' }),
                              label: l({ id: 'interface-actions.navigate-to-artists' }),
                              ariaLabel: l({ id: 'interface-actions.navigate-to-artists' }),
                              className: e,
                              ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST),
                              children: i.map((t) => (0, a.jsx)(I.V8, { artist: t }, t.id)),
                          });
                });
            var D = i(20477),
                S = i(75369),
                M = i(9970),
                R = i(59041),
                E = i.n(R);
            let O = (0, s.PA)((t) => {
                let { track: e } = t,
                    i = (0, y.jRO)(),
                    {
                        slam: { isOfflineModeEnabled: r },
                    } = (0, y.Pjs)(),
                    l = (0, y.NFA)().get(y.vgk),
                    s = (0, y.eGp)(),
                    o = (0, n.useCallback)(() => {
                        var t, a, n;
                        if (e.isDownloaded) {
                            null == (a = i.tracksController) || a.deleteTrack(e.entityId);
                            let t =
                                null == s
                                    ? void 0
                                    : s.state.queueState.entityList.value.findIndex((t) => {
                                          let { entity: i } = t;
                                          if ((0, S.b)(i)) {
                                              var a, r;
                                              return e.entityId === (0, M.V)(i.data.meta.id, null == (r = i.data.meta.albums) || null == (a = r[0]) ? void 0 : a.id);
                                          }
                                          return !1;
                                      });
                            void 0 !== t && r && (null == s || s.hide({ positions: [t] })), l.count(y.xQR.TRACK_DELETE, y.l6e);
                            return;
                        }
                        if (e.isDownloading) {
                            null == (n = i.tracksController) || n.stopDownload(e.entityId);
                            return;
                        }
                        null == (t = i.tracksController) || t.download(e.entityId), l.count(y.xQR.TRACK_DOWNLOAD, y.l6e);
                    }, [e.isDownloaded, e.isDownloading, e.entityId, i.tracksController, l, s, r]),
                    d = (0, n.useMemo)(
                        () =>
                            e.isDownloaded
                                ? (0, a.jsx)(c.A, { id: 'offline.delete-from-device' })
                                : e.isDownloading
                                  ? (0, a.jsx)(c.A, { id: 'offline.stop-downloading' })
                                  : (0, a.jsx)(c.A, { id: 'offline.download' }),
                        [e.isDownloaded, e.isDownloading],
                    ),
                    m = (0, n.useMemo)(
                        () =>
                            e.isDownloaded
                                ? (0, a.jsx)(p.Icon, { variant: 'upload', size: 'xxs' })
                                : e.isDownloading
                                  ? (0, a.jsx)(A.AD, {
                                        value: e.downloadingProgress,
                                        size: 20,
                                        withCancelIcon: !0,
                                        className: E().downloadingProgress,
                                        progressBarClassName: E().progress,
                                        cancelIconClassName: E().cancelIcon,
                                    })
                                  : (0, a.jsx)(p.Icon, { variant: 'download', size: 'xxs' }),
                        [e.downloadingProgress, e.isDownloaded, e.isDownloading],
                    );
                return (0, a.jsx)(v.Dr, { onClick: o, icon: m, className: E().root, ...(0, u.Am)(u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON), children: d });
            });
            var w = i(67221),
                B = i.n(w);
            let downloadTrackToFile = (0, s.PA)((t) => {
                let { track: e } = t,
                    i = (0, n.useMemo)(() => {
                        let t = (e?.artists ?? []).map((t) => t.name).filter(Boolean).join(', ');
                        return [t, e?.title].filter(Boolean).join(' — ');
                    }, [e]),
                    r = (0, n.useCallback)(() => {
                        e?.id && window.desktopEvents?.send(y.EE.DOWNLOAD_TRACK, e.id, i);
                    }, [e, i]);
                return (0, a.jsx)(v.Dr, {
                    onClick: r,
                    icon: (0, a.jsx)(p.Icon, { variant: 'download', size: 'xxs' }),
                    className: E().root,
                    ...(0, u.Am)(u.S7.CONTEXT_MENU_DOWNLOAD_BUTTON),
                    children: 'Скачать в файл',
                });
            });
            let U = (0, s.PA)((t) => {
                    let { track: e } = t,
                        {
                            settings: { isMobile: i },
                        } = (0, y.Pjs)();
                    return e.isUGC && i
                        ? (0, a.jsxs)('div', {
                              className: B().ugcLabel,
                              children: [
                                  (0, a.jsx)(p.Icon, { variant: 'eye_crossed', size: 'xxs' }),
                                  (0, a.jsx)(K.Caption, { variant: 'span', size: 's', children: (0, a.jsx)(c.A, { id: 'ugc.track-description' }) }),
                              ],
                          })
                        : null;
                }),
                z = (0, s.PA)((t) => {
                    var e, i, s, I, j, L, S, M, R, E, K, w, B, z, G, $, q, F, X, Y;
                    let {
                            track: V,
                            onOpenChange: Q,
                            open: W,
                            placement: H,
                            isFullscreenMobile: J = !1,
                            icon: Z,
                            size: tt,
                            utmLink: te,
                            handleRemove: ti,
                            dismissSettings: ta,
                            withTrailer: tr = !0,
                            ...tl
                        } = t,
                        { shouldShowBuySubscriptionModal: ts, showBuySubscriptionModal: tn } = (0, y.qBP)(),
                        to = (0, y.eGp)(),
                        {
                            settings: tc,
                            currentTrackInfo: td,
                            experiments: tu,
                            fullscreenPlayer: tm,
                            trailer: tk,
                            sonataState: { entityMeta: t_, isVibeContext: tp },
                            trackLyrics: tv,
                            album: tC,
                            track: tx,
                            user: tT,
                            slam: tg,
                            albumCPA: { isPlusCPAPlayerBarEnabled: ty },
                        } = (0, y.Pjs)(),
                        { formatMessage: tA } = (0, o.A)(),
                        { sendLikeSearchFeedback: th } = (0, y.zEv)(),
                        [tb, tN] = (0, n.useState)(!1),
                        { modal: tI } = tv,
                        { modal: tj } = td,
                        tP = (0, g.Dv)(V),
                        tL = (0, g.iQ)(V, g.NM.NEXT, tP),
                        tf = (0, g.iQ)(V, g.NM.LAST, tP),
                        tD = (0, g.KX)(V),
                        tS = (0, g.mW)(V),
                        tM = (0, C.KX)(V.mainAlbum),
                        tR = (0, g.TH)(V),
                        tE = (0, y.Ftl)(),
                        tO = ''.concat(y.UfI.TRACK, '-').concat(V.id),
                        tK = J || tc.isMobile,
                        tw = '/album/:albumId/track/:trackId';
                    V.albumId || (tw = '/track/:trackId');
                    let { shareLink: tB, pathname: tU } = (0, y.bNS)(tw, { params: { albumId: null != (X = V.albumId) ? X : '', trackId: V.id } }),
                        tz = V.isUGC ? y.DwC.UGC_TRACK : y.DwC.TRACK,
                        tG = (0, T.A_)({ entityVariant: tz, urlParams: { id: V.id } }),
                        t$ = (0, b.useTrackAboutModalTitle)(V),
                        tq = (0, x.Cc)(),
                        tF = !!(null == (e = V.mainAlbum) ? void 0 : e.isNonMusic),
                        tX = (null == t_ ? void 0 : t_.id) === V.id && (null == t_ ? void 0 : t_.albumId) === (null == (i = V.mainAlbum) ? void 0 : i.id),
                        tY =
                            (null == tC || null == (s = tC.meta) ? void 0 : s.listeningFinished) ||
                            (tX && (null == t_ || null == (I = t_.streamProgress) ? void 0 : I.hasEverFinished)) ||
                            (null == (j = V.streamProgress) ? void 0 : j.hasEverFinished),
                        tV = tT.hasPlus && V.isAvailableForDownload,
                        tQ = tu.checkExperiment(y.zal.WebEditorsFeatures, 'on'),
                        tW = tu.checkExperiment(y.zal.WebNextUseWaveQueue, 'on'),
                        tH = !!(((0, m.i)(null == to ? void 0 : to.state.currentContext.value) && !tW) || (0, k.S)(null == to ? void 0 : to.state.currentContext.value)),
                        { canRemoveTrackFromPlaylist: tJ, removeTrackFromPlaylist: tZ } = (0, h.useRemoveTrackFromPlaylistByIndex)(),
                        t0 = (0, y.PT7)(),
                        t4 = ty(null == (L = V.mainAlbum) ? void 0 : L.id, null == (S = V.mainAlbum) ? void 0 : S.isNonMusic),
                        { isPlaying: t1, togglePlay: t9 } = (0, y.B0S)({
                            seeds: null != (Y = null == V ? void 0 : V.seeds) ? Y : [],
                            pageIdForFrom: y._Q$.RADIO,
                            blockIdForFrom: tO,
                            parentContextId: (null == (M = V.mainAlbum) ? void 0 : M.id) ? ''.concat(V.mainAlbum.id, ':').concat(V.id) : V.entityId,
                        }),
                        t2 = (0, _.c)(async () => {
                            tb || V.isLiked || (tN(!0), null == th || th()), await tD();
                        }),
                        t7 = (0, _.c)(() => {
                            if (ts && tT.isAuthorized) return void tn();
                            !t0() && (t1 || t9());
                        }),
                        t5 = (0, _.c)(() => {
                            if (ts && !t4) return void tn();
                            t0() || (tk.setUtmLink(te), tk.openTrackTrailer(V.entityId), tE(d.ky.Track, V.id));
                        }),
                        t6 = (0, _.c)(() => {
                            var t;
                            td.setTrack({ id: V.id, albumId: (null == (t = V.mainAlbum) ? void 0 : t.id) || null, isUGC: V.isUGC || null }),
                                tx.isOpened && tx.close(),
                                tj.open();
                        }),
                        t3 = (0, _.c)(() => {
                            V.clipIds && tq((0, l.HO)(V.clipIds));
                        }),
                        t8 = (0, _.c)(() => {
                            if (ts && tT.isAuthorized) return void tn();
                            tv.setTrack(V), tx.isOpened && tx.close(), tI.open();
                        }),
                        et = (0, _.c)(() => {
                            if (ts && tT.isAuthorized) return void tn();
                            tm.isSyncLyricsMode ? tm.hideSyncLyrics() : tm.showSyncLyrics();
                        }),
                        ee = (0, _.c)(() => {
                            null == ti || ti(), null == Q || Q(!1);
                        }),
                        ei = (0, _.c)(() => V.isSyncLyricsAvailable && tm.modal.isOpened && tK),
                        ea = (0, _.c)(() => V.isLyricsAvailable && !tm.modal.isOpened),
                        er = (0, _.c)(() => {
                            var t;
                            return (null == (t = V.trailer) ? void 0 : t.isAvailable) && !tm.modal.isOpened && tr;
                        }),
                        {
                            withSyncLyricsItem: el,
                            withLyricsItem: es,
                            withTrailerItem: en,
                        } = (0, n.useMemo)(
                            () => ({ withSyncLyricsItem: ei(), withLyricsItem: ea(), withTrailerItem: er() }),
                            [ei, ea, er, V.isSyncLyricsAvailable, V.isLyricsAvailable, null == (R = V.trailer) ? void 0 : R.isAvailable],
                        );
                    (0, y.NBO)(W);
                    let eo = !tF,
                        ec = V.isNonUserGenerated && !tF,
                        ed = !tF,
                        eu = !tK,
                        em = tF && tM,
                        ek = V.isNonUserGenerated && (V.albums.length || V.mainAlbum),
                        e_ =
                            V.isNonUserGenerated &&
                            !!(null == (E = V.artists) ? void 0 : E.length) &&
                            ((null == (K = V.mainAlbum) ? void 0 : K.isAudiobook) ||
                                (null == (w = V.mainAlbum) ? void 0 : w.isAlbum) ||
                                V.isTrackAudiobook ||
                                V.isTrackMusic),
                        ep = !tH && t_,
                        ev = tm.isPlayQueueMode && ti && !tp,
                        eC = (0, x.df)() && V.isNonUserGenerated && (null == (B = V.clipIds) ? void 0 : B.length),
                        ex = {
                            variant: y.Yxq.TRACK,
                            id: V.id,
                            title: V.title,
                            path: tU,
                            trackArtistName: null == (z = V.mainArtist) ? void 0 : z.name,
                            trackArtistId: null == (G = V.mainArtist) ? void 0 : G.id,
                            trackAlbumId: V.albumId,
                        };
                    return tg.isOfflineModeEnabled
                        ? (0, a.jsxs)(v.W1, {
                              isMobile: tK,
                              placement: H,
                              offsetOptions: 10,
                              open: W,
                              onOpenChange: Q,
                              icon: Z,
                              size: tt,
                              dismissSettings: ta,
                              containerProps: (0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU),
                              ariaLabel: tA({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...tl,
                              children: [tV && (0, a.jsx)(O, { track: V }), V.isNonUserGenerated && (0, a.jsx)(A.Ht, { shareLink: tB, entityMeta: ex })],
                          })
                        : (0, a.jsxs)(v.W1, {
                              dismissSettings: ta,
                              isMobile: tK,
                              placement: H,
                              offsetOptions: 10,
                              open: W,
                              onOpenChange: Q,
                              icon: Z,
                              size: tt,
                              containerProps: (0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU),
                              ariaLabel: tA({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...tl,
                              children: [
                                  (0, a.jsx)(U, { track: V }),
                                  tK && (0, a.jsx)(A.Cu, { getDescriptionTexts: V.getDescriptionTexts, entityId: V.id }),
                                  tQ && (0, a.jsx)(T.dx, { entityVariant: tz, adminUrl: tG }),
                                  tF && (0, a.jsx)(A.W$, { onClick: tR, isFinished: tY }),
                                  eo && (0, a.jsx)(A.TW, { onClick: t2, isLiked: V.isLiked, disabled: !tT.isAuthorized }),
                                  en && (0, a.jsx)(A.No, { onClick: t5 }),
                                  ec && (0, a.jsx)(A.C6, { onClick: t7, variant: y.IGO.TRACK, disabled: !V.isAvailable || (t4 && tK), onOpenMenuChange: Q }),
                                  eC &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: t3,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'clip', size: 'xxs' }),
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'non-music.navigate-to-clip' }),
                                      }),
                                  tV && (0, a.jsx)(O, { track: V }),
                                  tV && (0, a.jsx)(downloadTrackToFile, { track: V }),
                                  ep &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: tL,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'playNext', size: 'xxs' }),
                                          disabled: !tT.isAuthorized,
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-next' }),
                                      }),
                                  ep &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: tf,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'playLast', size: 'xxs' }),
                                          disabled: !tT.isAuthorized,
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.play-last' }),
                                      }),
                                  el &&
                                      !tm.isSyncLyricsMode &&
                                      (0, a.jsx)(v.Dr, {
                                          className: (0, r.$)({ [P().syncLyrics]: J }),
                                          onClick: et,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'syncLyrics', size: 'xxs' }),
                                          disabled: !tT.isAuthorized,
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-sync-lyrics' }),
                                      }),
                                  el &&
                                      tm.isSyncLyricsMode &&
                                      (0, a.jsx)(v.Dr, {
                                          className: (0, r.$)({ [P().syncLyrics]: J }),
                                          onClick: et,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'syncLyrics', size: 'xxs' }),
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.hide-sync-lyrics' }),
                                      }),
                                  ev &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: ee,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'bucket', size: 'xxs' }),
                                          children: (0, a.jsx)(c.A, { id: 'play-queue.delete-from-queue' }),
                                      }),
                                  ed && (0, a.jsx)(A.DZ, { onClick: tS, isDisliked: V.isDisliked }),
                                  eu && (0, a.jsx)(D.ContextSubMenuAddToPlaylist, { track: V }),
                                  es &&
                                      (0, a.jsx)(v.Dr, {
                                          disabled: !tT.isAuthorized,
                                          onClick: t8,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'lyrics', size: 'xxs' }),
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'interface-actions.open-lyrics' }),
                                      }),
                                  V.isNonUserGenerated && (0, a.jsx)(A.Ht, { shareLink: tB, entityMeta: ex }),
                                  ek &&
                                      (null == ($ = V.mainAlbum) ? void 0 : $.url) &&
                                      (0, a.jsx)(A.f, { albumUrl: V.mainAlbum.url, albumType: V.mainAlbum.type, trackType: V.type }),
                                  e_ && V.artists[0] && (0, a.jsx)(f, { artists: V.artists }),
                                  em &&
                                      (0, a.jsx)(A.Uc, {
                                          onClick: tM,
                                          isLiked: null == (q = V.mainAlbum) ? void 0 : q.isLiked,
                                          albumType: null == (F = V.mainAlbum) ? void 0 : F.type,
                                      }),
                                  V.isUGC && (0, a.jsx)(N, { track: V }),
                                  tK &&
                                      tJ &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: tZ,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'bucket', size: 'xxs' }),
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON),
                                          children: (0, a.jsx)(c.A, { id: 'playlist-actions.remove-from-playlist' }),
                                      }),
                                  !tK &&
                                      (0, a.jsx)(v.Dr, {
                                          onClick: t6,
                                          icon: (0, a.jsx)(p.Icon, { variant: 'info', size: 'xxs' }),
                                          ...(0, u.Am)(u.Kq.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON),
                                          children: t$,
                                      }),
                              ],
                          });
                });
        },
        14631: (t, e, i) => {
            'use strict';
            i.d(e, { TrackChart: () => p });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(59824),
                n = i(62400),
                o = i(49574),
                c = i(44574),
                d = i(6647),
                u = i(68912),
                m = i(22762),
                k = i(16409),
                _ = i.n(k);
            let p = (0, r.PA)((t) => {
                var e, i;
                let { track: r, playContextParams: k } = t,
                    p = (0, o.Dx4)({ playContextParams: k, entityId: r.entityId }),
                    {
                        settings: { isMobile: v },
                    } = (0, o.Pjs)(),
                    C = (0, l.useCallback)(
                        (t) =>
                            (0, a.jsx)(c.q1, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: _().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [r],
                    );
                return (0, a.jsx)(m.Track, {
                    track: r,
                    meta: (0, a.jsx)(u.TrackMeta, { withArtistLink: !v, track: r }),
                    beforeBlock: (0, a.jsx)(n.t1, {
                        withIcon: !0,
                        className: _().chartCell,
                        progress: null == (e = r.chart) ? void 0 : e.progress,
                        position: null == (i = r.chart) ? void 0 : i.position,
                        isDisliked: r.isDisliked,
                        isDisabled: !r.isAvailable,
                    }),
                    playButtonCellRender: C,
                    controls: (0, a.jsx)(d.ControlsBar, { track: r, className: _().controlsBarCell }),
                    ...p,
                    ...(0, s.Am)(s.Kq.track.TRACK_CHART),
                });
            });
        },
        14960: (t, e, i) => {
            'use strict';
            i.d(e, { d: () => r });
            var a = i(49574);
            let r = (t, e, i) => {
                let {
                    settings: { isMobile: r },
                } = (0, a.Pjs)();
                return !!(r && t && (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) || (null == e ? void 0 : e.hasEverFinished) || (i && i > 0)));
            };
        },
        16064: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => o });
            var a = i(32290),
                r = i(91027),
                l = i(55550),
                s = i(93510),
                n = i(49574);
            let o = () => {
                let { notify: t } = (0, n.lkh)(),
                    { playlist: e, fullscreenPlayer: i } = (0, n.Pjs)(),
                    o = (0, r.c)((r) => {
                        var o, c;
                        let { withSuccessNotification: d, withPageRefresh: u, playlist: m, track: k } = r;
                        if (d && k && m) {
                            let e = (0, s.eK)(k);
                            t((0, a.jsx)(l.mM, { entityTitle: k.title, entityVariant: e, entityCoverUri: null != (c = k.coverUri) ? c : '', playlist: m }), {
                                containerId: i.modal.isOpened ? n.uQT.FULLSCREEN_INFO : n.uQT.INFO,
                            });
                        }
                        u && (null == m ? void 0 : m.uuid) === (null == (o = e.meta) ? void 0 : o.uuid) && e.refresh();
                    }),
                    c = (0, r.c)((e) => {
                        let { withFailNotification: r } = e;
                        r && t((0, a.jsx)(l.HB, {}), { containerId: i.modal.isOpened ? n.uQT.FULLSCREEN_ERROR : n.uQT.ERROR });
                    });
                return (0, r.c)(async (t) => {
                    let { playlist: e, track: i, trackIndex: a, withSuccessNotification: r = !0, withFailNotification: s = !0, withPageRefresh: n = !0 } = t,
                        d = await e.changePlaylist((0, l.Mp)({ operation: l.yC.DELETE, startPosition: a, endPosition: a + 1 }));
                    return d === l.Y9.OK ? o({ withSuccessNotification: r, withPageRefresh: n, playlist: e, track: i }) : c({ withFailNotification: s }), d;
                });
            };
        },
        16409: (t) => {
            t.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        16710: (t, e, i) => {
            'use strict';
            i.d(e, { UgcTrackEditModal: () => u });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(60900),
                n = i(91027),
                o = i(49574),
                c = i(44574),
                d = (function (t) {
                    return (t.TITLE = 'title'), (t.ARTIST = 'artist'), t;
                })({});
            let u = (0, r.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: t },
                        fullscreenPlayer: e,
                    } = (0, o.Pjs)(),
                    { notify: i } = (0, o.lkh)(),
                    { formatMessage: r } = (0, s.A)(),
                    u = (0, l.useMemo)(
                        () => [
                            { key: d.TITLE, title: r({ id: 'track-modal.track-name' }), value: t.trackTitle, minLength: 1, maxLength: 200 },
                            { key: d.ARTIST, title: r({ id: 'entity-names.singer' }), value: t.trackArtist, minLength: 0, maxLength: 200 },
                        ],
                        [r, t.trackArtist, t.trackTitle],
                    ),
                    m = (0, n.c)(async (l) => {
                        let { title: s, artist: n } = ((t) => {
                            var e, i;
                            let a = null == (e = t.find((t) => t.key === d.TITLE)) ? void 0 : e.value,
                                r = null == (i = t.find((t) => t.key === d.ARTIST)) ? void 0 : i.value;
                            return { title: (a = a ? a.trim() : ''), artist: (r = r ? r.trim() : '') };
                        })(l);
                        t.track &&
                            (await t.track.changeTrackInfo(s, n)) === o.FlZ.ERROR &&
                            i((0, a.jsx)(c.hT, { error: r({ id: 'ugc.editing-failed' }) }), { containerId: e.modal.isOpened ? o.uQT.FULLSCREEN_ERROR : o.uQT.ERROR }),
                            t.close();
                    });
                return t.modal.isOpened
                    ? (0, a.jsx)(c.$, { open: t.modal.isOpened, title: r({ id: 'entity-names.track' }), content: u, onClose: t.close, onChange: m })
                    : null;
            });
        },
        18440: (t) => {
            t.exports = { writers: 'Lyrics_writers__xvrNp' };
        },
        18729: (t, e, i) => {
            'use strict';
            i.d(e, { useRemoveTrackFromPlaylistByIndex: () => c });
            var a = i(32290),
                r = i(55178),
                l = i(60900),
                s = i(55550),
                n = i(49574),
                o = i(44574);
            let c = () => {
                let { playlist: t, trackIndex: e } = (0, r.useContext)(s.xG) || {},
                    { notify: i } = (0, n.lkh)(),
                    { playlist: c } = (0, n.Pjs)(),
                    { formatMessage: d } = (0, l.A)(),
                    u = (0, r.useCallback)(async () => {
                        let r = !1;
                        if (
                            (t &&
                                'number' == typeof e &&
                                (await t.changePlaylist((0, s.Mp)({ operation: s.yC.DELETE, startPosition: e, endPosition: e + 1 }))) === s.Y9.OK &&
                                (r = !0),
                            r)
                        ) {
                            if (t && 'number' == typeof e) {
                                var l;
                                t.uuid === (null == (l = c.meta) ? void 0 : l.uuid) && (c.removeTracksFromItems(e, 1), c.search.setFocus());
                            }
                        } else i((0, a.jsx)(o.hT, { error: d({ id: 'playlist-errors.failed-to-remove-track' }) }), { containerId: n.uQT.ERROR });
                    }, [t, e, c, i, d]);
                return { canRemoveTrackFromPlaylist: !!(null == t ? void 0 : t.canUserChange), removeTrackFromPlaylist: u };
            };
        },
        20477: (t, e, i) => {
            'use strict';
            i.d(e, { ContextSubMenuAddToPlaylist: () => K });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(60900),
                n = i(39407),
                o = i(59824),
                c = i(82586),
                d = i(19740),
                u = i(49574),
                m = i(21916),
                k = i(2047),
                _ = i(91027),
                p = i(55550),
                v = i(27594),
                C = i(63618),
                x = i(42406),
                T = i(6752),
                g = i(93510),
                y = i(71926),
                A = i(16064),
                h = i(51730),
                b = i.n(h);
            let N = (t) => {
                let { playlist: e, track: i, autoFocus: r } = t,
                    { formatMessage: n } = (0, s.A)(),
                    u = (0, v.useAddTrackToPlaylist)(),
                    m = (0, A.h)(),
                    { isTrackInPlaylist: k, trackIndexInPlaylist: _ } = ((t, e) => {
                        var i, a;
                        let r = -1;
                        return (
                            (null == (i = t.tracks) ? void 0 : i.length) &&
                                (r =
                                    null == (a = t.tracks)
                                        ? void 0
                                        : a.findIndex((t) => (t.albumId ? String(t.id) === e.id && t.albumId === e.albumId : String(t.id) === e.id))),
                            { isTrackInPlaylist: r > -1, trackIndexInPlaylist: r }
                        );
                    })(e, i),
                    p = (0, l.useCallback)(() => {
                        k ? m({ playlist: e, track: i, trackIndex: _ }) : u({ playlist: e, track: i });
                    }, [u, m, e, i, _, k]);
                return (0, a.jsxs)(d.Dr, {
                    autoFocus: r,
                    className: b().root,
                    onClick: p,
                    ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU_ITEM),
                    children: [
                        (0, a.jsx)(y.Caption, { variant: 'div', size: 'm', lineClamp: 1, children: e.title }),
                        k &&
                            (0, a.jsx)(c.Icon, {
                                className: b().icon,
                                size: 'xxs',
                                variant: 'check',
                                'aria-label': n({ id: 'entity-names.track-in-playlist' }),
                                ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON),
                            }),
                    ],
                });
            };
            var I = i(79856),
                j = i(39380),
                P = i.n(j);
            let L = (t) => {
                    let { forwardRef: e, className: i, ...r } = t;
                    return (0, a.jsx)(d.Dr, { className: i, ref: e, ...r, children: (0, a.jsx)(I.Shimmer, { isActive: !0, className: P().shimmer }) });
                },
                f = (0, l.forwardRef)((t, e) => {
                    let { ...i } = t;
                    return (0, a.jsx)(L, { ...i, forwardRef: e });
                });
            var D = i(91542),
                S = i.n(D);
            let M = 'EndlessFeed',
                R = (0, r.PA)((t) => {
                    var e, i, r;
                    let { track: m } = t,
                        { user: k, contextMenuPlaylists: v } = (0, u.Pjs)(),
                        { formatMessage: y } = (0, s.A)(),
                        A = (0, g.KX)(m),
                        h = (0, l.useRef)(null),
                        { isIntersecting: b } = null != (i = (0, x.BL)([h], { preflightCheck: !1 }, v.isShimmerVisible)[M]) ? i : {},
                        I = Math.ceil(v.items.length / 20),
                        j = null != (r = null == (e = v.pagesLoader.pager) ? void 0 : e.page) ? r : 0,
                        P = (0, _.c)((t) => {
                            k.account.data.uid && v.getData({ userId: k.account.data.uid, page: t, pageSize: 20 });
                        });
                    (0, l.useEffect)(() => {
                        b && P(j + 1);
                    }, [b, P]);
                    let L = (0, l.useMemo)(() => {
                            if (!m.isTrackNonMusic && v.isResolved)
                                return (0, a.jsxs)(d.Dr, {
                                    className: S().favouritesPlaylistItem,
                                    onClick: A,
                                    ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU_LIKE_PLAYLIST_BUTTON),
                                    children: [
                                        (0, a.jsx)(n.A, { id: 'entity-names.liked-playlist' }),
                                        m.isLiked &&
                                            (0, a.jsx)(c.Icon, {
                                                className: S().icon,
                                                size: 'xxs',
                                                variant: 'check',
                                                'aria-label': y({ id: 'entity-names.track-in-playlist' }),
                                                ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON),
                                            }),
                                    ],
                                });
                        }, [v.isResolved, A, m, y]),
                        D = (0, T.L)(() => {
                            let t = v.items.filter((t) => null !== t);
                            if (0 !== t.length)
                                return t.map((t, e) => {
                                    if (!t || t.kind === p.ji.LIKE) return;
                                    let i = j + 1 === I && e === v.items.length - (v.items.length % 20);
                                    return (0, a.jsx)(N, { autoFocus: i, track: m, playlist: t }, t.uuid);
                                });
                        });
                    return (0, a.jsx)('div', {
                        className: S().root,
                        ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU),
                        children: (0, a.jsxs)('div', {
                            className: S().listPlaylist,
                            children: [
                                L,
                                D,
                                !v.isResolved && Array.from({ length: 10 }, (t, e) => (0, a.jsx)(f, {}, e)),
                                (0, a.jsx)(f, { className: (0, C.$)({ [S().shimmerEndItem]: j + 1 === I }), ref: h, 'data-intersection-property-id': M }),
                            ],
                        }),
                    });
                });
            var E = i(47742),
                O = i.n(E);
            let K = (0, r.PA)((t) => {
                let { track: e } = t,
                    { user: i, contextMenuPlaylists: r } = (0, u.Pjs)(),
                    C = ((t) => {
                        let { createPlaylist: e, fullscreenPlayer: i } = (0, u.Pjs)(),
                            { notify: r } = (0, u.lkh)(),
                            l = (0, m.useRouter)(),
                            { formatMessage: n } = (0, s.A)(),
                            o = (0, v.useAddTrackToPlaylist)(),
                            c = (0, _.c)(async (t) => {
                                var i;
                                if (
                                    (await e.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: k.L.PUBLIC }),
                                    !(null == e || null == (i = e.meta) ? void 0 : i.uuid))
                                )
                                    return null;
                                if ((await o({ playlist: e.meta, track: t, withPageRefresh: !1, withFailNotification: !1, withSuccessNotification: !1 })) === p.Y9.OK) {
                                    let { href: t } = (0, u.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.meta.uuid } });
                                    return e.reset(), t;
                                }
                                return null;
                            });
                        return (0, _.c)(async () => {
                            let e = await c(t);
                            e
                                ? (i.modal.isOpened && i.modal.close(), l.push(e))
                                : r((0, a.jsx)(p.pw, {}), { containerId: i.modal.isOpened ? u.uQT.FULLSCREEN_ERROR : u.uQT.ERROR });
                        });
                    })(e),
                    { formatMessage: x } = (0, s.A)(),
                    T = (0, l.useCallback)(async () => {
                        i.account.data.uid && (await r.getData({ userId: i.account.data.uid, page: 0, pageSize: 20 }));
                    }, [r, i.account.data.uid]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, a.jsxs)(d.W1, {
                        offsetOptions: 3,
                        onShow: T,
                        icon: (0, a.jsx)(c.Icon, { variant: 'addToPlaylist', size: 'xxs' }),
                        label: x({ id: 'playlist-actions.add-track-to-playlist' }),
                        ariaLabel: x({ id: 'playlist-actions.add-track-to-playlist' }),
                        disabled: !i.isAuthorized,
                        menuClassName: O().menu,
                        listClassName: O().listMenu,
                        ...(0, o.Am)(o.Kq.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON),
                        children: [
                            (0, a.jsx)(d.Dr, {
                                onClick: C,
                                icon: (0, a.jsx)(c.Icon, { variant: 'add', size: 'xxs' }),
                                ...(0, o.Am)(o.Kq.track.TRACK_SUBMENU_ADD_PLAYLIST_BUTTON),
                                children: (0, a.jsx)(n.A, { id: 'playlist-actions.create-playlist' }),
                            }),
                            (0, a.jsx)('div', { className: O().divider }),
                            (0, a.jsx)(R, { track: e }),
                        ],
                    })
                );
            });
        },
        20753: (t) => {
            t.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        21878: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        22762: (t, e, i) => {
            'use strict';
            i.d(e, { Track: () => p });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(91027),
                o = i(58359),
                c = i(49574),
                d = i(44574),
                u = i(29265),
                m = i(54171),
                k = i(35587),
                _ = i.n(k);
            let p = (0, l.PA)((t) => {
                var e;
                let {
                        className: i,
                        track: l,
                        meta: k,
                        beforeBlock: p,
                        controls: v,
                        playButtonCellRender: C,
                        withLightning: x,
                        isPlaying: T,
                        isCurrent: g,
                        togglePlay: y,
                        restartPlay: A,
                        onPlayClick: h,
                        playButtonIconSize: b,
                        skipFreemiumCloseListeningPaywall: N = !1,
                        ...I
                    } = t,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: P } = (0, c.qBP)(),
                    {
                        track: L,
                        fullscreenPlayer: f,
                        settings: { isMobile: D },
                        album: S,
                        albumCPA: { isPlusCPAPlayerBarEnabled: M },
                        paywall: { modal: R },
                    } = (0, c.Pjs)(),
                    { ref: E, intersectionPropertyId: O } = (0, c.nMI)(),
                    K = (0, c.brA)(),
                    w = (0, c.PT7)(),
                    B = (0, u.W)({ withLightning: x, track: l }),
                    U = (0, c.uyA)(l.entityId),
                    z = M(S.id, null == (e = S.meta) ? void 0 : e.isNonMusic),
                    G = l.isAvailable && j && !z,
                    $ = (0, c.NPu)(),
                    q = l.isAvailable && $ && !z && !N,
                    F = (0, m.useTrackDisclaimer)({ track: l, callback: y }),
                    X = (0, n.c)(() => {
                        L.open({ trackId: l.id, albumId: l.albumId });
                    }),
                    Y = (0, m.useTrackDisclaimer)({ track: l, callback: X }),
                    { sendPlaySearchFeedback: V } = (0, c.zEv)(),
                    [Q, W] = (0, s.useState)(!1),
                    H = (0, n.c)(() => {
                        if (!w()) {
                            if (G) return void P();
                            if (q) return void R.open();
                            Q || T || (W(!0), null == V || V()), F(), K(!T), null == h || h(!T);
                        }
                    }),
                    J = (0, n.c)(() => {
                        if (T) return void A();
                        H();
                    }),
                    Z = (0, n.c)((t) => {
                        if (!l.isAvailable && !l.hasModalAccess) {
                            j && l.isAvailableOnlyForPlus && P(), $ && l.isAvailableOnlyForPlus && R.open();
                            return;
                        }
                        if (G) return void P();
                        let e = !D && (2 === t.detail || (1 === t.detail && l.hasTrackLink && !f.modal.isOpened));
                        return q && !e
                            ? void R.open()
                            : ((0, o.P)(t, _().ripple), D)
                              ? void H()
                              : 2 === t.detail
                                ? void J()
                                : void (1 === t.detail && l.hasTrackLink && !f.modal.isOpened && (Y(), q && R.open()));
                    }),
                    tt = null == C ? void 0 : C({ onPlayButtonClick: H, isPlaying: T, isCurrent: g, isLoading: U, playButtonIconSize: b });
                return (0, a.jsxs)(d.Cj, {
                    ref: E,
                    'aria-label': B,
                    'data-intersection-property-id': O,
                    onClick: Z,
                    className: (0, r.$)(_().root, { [_().root_disabled]: !l.isAvailable, [_().root_current]: g && D }, i),
                    ...I,
                    children: [p, tt, k, v],
                });
            });
        },
        24760: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var a = i(49574);
            function r(t) {
                let { withCustomTooltip: e } = t,
                    {
                        settings: { isMobile: i, browserInfo: r },
                    } = (0, a.Pjs)();
                return !((null == r ? void 0 : r.name) === 'Safari' || i) && e;
            }
        },
        25649: (t, e, i) => {
            'use strict';
            i.d(e, { s: () => r });
            var a = i(67893);
            let r = function () {
                var t, e;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (null == (e = i[0]) || null == (t = e.decomposed) ? void 0 : t.length) return i;
                let l = r.map((t) => t.id).sort(),
                    s = i.map((t) => t.id).sort();
                return (0, a.A)(l, s) ? [] : i.filter((t) => !t.various);
            };
        },
        26089: (t, e, i) => {
            'use strict';
            i.d(e, { useSendEventOnClipShowedOrHidden: () => n });
            var a = i(16172),
                r = i(52068),
                l = i(91027),
                s = i(49574);
            let n = (t) => {
                let e = (0, r.st)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: n } = (0, s.$au)(),
                    { tabId: o, tabPos: c, isTabSelectedByDefault: d } = (0, s.Rro)(),
                    { blockType: u, blockId: m, blockPosX: k, blockPosY: _, mainObjectType: p, mainObjectId: v } = (0, s.N8n)(),
                    { objectsCount: C, objectType: x, objectId: T, objectPosX: g, objectPosY: y } = (0, s.Jfv)(),
                    A = (0, s.UlF)(),
                    { skeleton: h } = (0, s.bCF)();
                return (0, l.c)((r) => {
                    if (!e || !n || !s.xKB.includes(n)) return;
                    let l = {
                        hash: i,
                        pageId: n,
                        entityType: u,
                        entityId: m,
                        entityPosX: k,
                        entityPosY: _,
                        objectsCount: C,
                        viewUuid: t,
                        objectType: x,
                        objectId: T,
                        objectPosX: g,
                        objectPosY: y,
                    };
                    s.qG9.includes(n) && ((l.tabId = o), (l.tabPos = c), (l.isTabSelectedByDefault = d)),
                        h && (l.skeletonId = h),
                        p && (l.mainObjectType = p),
                        v && (l.mainObjectId = v);
                    let b = (0, a.Fx)({ params: l, logger: A, context: 'useSendEventOnClipShowedOrHidden' });
                    if (b) {
                        if (r) return void (0, a.Pf)(e.evgenInstance, b);
                        (0, a.nv)(e.evgenInstance, b);
                    }
                });
            };
        },
        27594: (t, e, i) => {
            'use strict';
            i.d(e, { useAddTrackToPlaylist: () => o });
            var a = i(32290),
                r = i(91027),
                l = i(55550),
                s = i(93510),
                n = i(49574);
            let o = () => {
                let { notify: t } = (0, n.lkh)(),
                    { playlist: e, fullscreenPlayer: i } = (0, n.Pjs)(),
                    o = (0, r.c)((r) => {
                        var o, c;
                        let { withSuccessNotification: d, withPageRefresh: u, playlist: m, track: k } = r;
                        if (d) {
                            let e = (0, s.eK)(k);
                            t((0, a.jsx)(l.mZ, { entityTitle: k.title, entityVariant: e, entityCoverUri: null != (c = k.coverUri) ? c : '', playlist: m }), {
                                containerId: i.modal.isOpened ? n.uQT.FULLSCREEN_INFO : n.uQT.INFO,
                            });
                        }
                        u && m.uuid === (null == (o = e.meta) ? void 0 : o.uuid) && e.refresh();
                    }),
                    c = (0, r.c)((e) => {
                        let { withFailNotification: r } = e;
                        r && t((0, a.jsx)(l.pw, {}), { containerId: i.modal.isOpened ? n.uQT.FULLSCREEN_ERROR : n.uQT.ERROR });
                    });
                return (0, r.c)(async (t) => {
                    var e;
                    let { playlist: i, track: a, withSuccessNotification: r = !0, withFailNotification: s = !0, withPageRefresh: n = !0 } = t,
                        d = await i.changePlaylist(
                            (0, l.Mp)({ operation: l.yC.INSERT, position: 0, tracks: [{ id: a.id, albumId: null == (e = a.mainAlbum) ? void 0 : e.id }] }),
                        );
                    return d === l.Y9.OK ? o({ withSuccessNotification: r, withPageRefresh: n, playlist: i, track: a }) : c({ withFailNotification: s }), d;
                });
            };
        },
        27616: (t, e, i) => {
            'use strict';
            i.d(e, { PodcastMeta: () => I });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(21916),
                n = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(81354),
                u = i(59824),
                m = i(91027),
                k = i(6752),
                _ = i(70280),
                p = i(71926),
                v = i(93510),
                C = i(49574),
                x = i(44574),
                T = i(24760),
                g = i(84141),
                y = i(14960),
                A = i(5856),
                h = i.n(A),
                b = i(21878),
                N = i.n(b);
            let I = (0, l.PA)((t) => {
                var e, i, l, A, b, I;
                let {
                        track: j,
                        className: P,
                        withPodcastName: L = !1,
                        withDate: f = !0,
                        withSecondaryColor: D = !1,
                        withListeningProgress: S = !1,
                        captionSize: M = 'm',
                        explicitSize: R = 'xs',
                        withExplicitMark: E = !0,
                        titleContainerClassName: O,
                        textClassName: K,
                        playContextParams: w,
                        withTimeLeftText: B = !0,
                        ignoreDislikedStyles: U,
                        withCustomTooltip: z = !0,
                        withSavingQueryParams: G,
                        beforeTitle: $,
                        afterTitle: q,
                        titleLineClamp: F = 1,
                        podcastMetaClassName: X,
                        progressClassName: Y,
                        withAlbumTitleLink: V = !0,
                    } = t,
                    {
                        fullscreenPlayer: Q,
                        sonataState: W,
                        settings: { isMobile: H },
                    } = (0, C.Pjs)(),
                    { formatMessage: J } = (0, o.A)(),
                    Z = (0, T.$)({ withCustomTooltip: z }),
                    tt = (0, s.useSearchParams)(),
                    te = j.getUrl(G ? Object.fromEntries(tt) : void 0),
                    ti = j.pubDate ? new Date(j.pubDate) : new Date(),
                    ta = (0, C.LkW)(ti),
                    tr = !1,
                    tl = (0, C.ZpR)(null != (b = null == (e = j.mainAlbum) ? void 0 : e.url) ? b : ''),
                    ts = (0, n.useMemo)(() => {
                        var t;
                        let e = J({ id: 'entity-names.podcast-name' }, { podcastName: j.title });
                        return ''.concat(e, ' ').concat(null != (t = j.version) ? t : '');
                    }, [J, j.title, j.version]),
                    tn = !!(S && w && j.shouldRememberPosition && j.streamProgress && j.durationMs),
                    to =
                        j.id === (null == (i = W.entityMeta) ? void 0 : i.id) &&
                        (null == (A = W.entityMeta) || null == (l = A.streamProgress) ? void 0 : l.endPositionSec),
                    tc = (0, y.d)(tn, j.streamProgress, to),
                    td = j.mainAlbum && L && !tc,
                    tu = j.pubDate && f && !tc,
                    tm = (0, C.lVe)({ entity: null != (I = j.mainAlbum) ? I : null, entityType: C.nPY.PODCAST, callback: tl }),
                    tk = (0, m.c)((t) => {
                        Q.modal.isOpened && Q.modal.close(), tm(t);
                    }),
                    t_ = (0, g.useOnTrackLinkClick)({ track: j, withSavingQueryParams: G, entityType: C.nPY.PODCAST }),
                    tp = (0, n.useCallback)(() => {
                        switch (ta) {
                            case C.rdQ.TODAY:
                                return (0, a.jsx)(c.A, { id: 'interface-actions.date-today' });
                            case C.rdQ.YESTERDAY:
                                return (0, a.jsx)(c.A, { id: 'interface-actions.date-yesterday' });
                            case C.rdQ.DATE_WITH_YEAR:
                                return (0, a.jsx)(d.XU, { value: j.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, a.jsx)(d.XU, { value: j.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [j.pubDate, ta]);
                j.pubDate && f && (tr = [C.rdQ.TODAY, C.rdQ.YESTERDAY].includes(ta));
                let tv = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(_.m_, {
                                enabled: Z && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: j.title,
                                hoverSettings: C.VP$,
                                children: (0, a.jsx)(p.Caption, {
                                    className: h().title,
                                    type: 'entity',
                                    size: M,
                                    variant: 'span',
                                    title: Z ? void 0 : j.title,
                                    ...t,
                                    children: j.title,
                                }),
                            }),
                        [H, Z, M, j.title],
                    ),
                    tC = (0, n.useMemo)(
                        () =>
                            j.isRemoved
                                ? (0, a.jsx)(_.m_, {
                                      enabled: Z && !H,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: J({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: C.VP$,
                                      children: (0, a.jsx)('span', { children: (0, a.jsx)(c.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : j.hasTrackLink
                                  ? (0, a.jsx)(x.N_, {
                                        onClick: t_,
                                        className: h().albumLink,
                                        href: te,
                                        'aria-label': ts,
                                        title: Z ? void 0 : j.title,
                                        ...(0, u.Am)(u.Kq.track.TRACK_TITLE),
                                        children: tv(),
                                    })
                                  : tv((0, u.Am)(u.Kq.track.TRACK_TITLE)),
                        [H, j.isRemoved, j.hasTrackLink, j.title, tv, Z, J, t_, te, ts],
                    ),
                    tx = (0, k.L)(() => {
                        var t;
                        if (!td) return;
                        let e = (0, a.jsx)(_.m_, {
                            enabled: Z && !H,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j.mainAlbum.title,
                            hoverSettings: C.VP$,
                            children: (0, a.jsx)(p.Caption, { variant: 'span', type: 'entity', size: M, className: h().albumTitle, children: j.mainAlbum.title }),
                        });
                        return V
                            ? (0, a.jsx)(x.N_, {
                                  'aria-label': J({ id: 'entity-names.podcast-name' }, { podcastName: j.mainAlbum.title }),
                                  className: h().link,
                                  href: null == (t = j.mainAlbum) ? void 0 : t.url,
                                  title: Z ? void 0 : j.mainAlbum.title,
                                  onClick: tk,
                                  ...(0, u.Am)(u.Kq.track.TRACK_PARENT_PODCAST_TITLE),
                                  children: e,
                              })
                            : (0, a.jsx)('span', { ...(0, u.Am)(u.Kq.track.TRACK_PARENT_PODCAST_TITLE), children: e });
                    });
                return (0, a.jsx)('div', {
                    className: (0, r.$)(h().root, { [h().root_disabled]: !j.isAvailable, [h().root_disliked]: j.isDisliked && !U, [h().root_withSecondaryColor]: D }, P),
                    children: (0, a.jsxs)('div', {
                        className: (0, r.$)(h().metaContainer, N().podcastMetaContainer, X),
                        children: [
                            tn &&
                                w &&
                                j.streamProgress &&
                                (0, a.jsx)(v.Bg, {
                                    className: (0, r.$)(N().progress, Y, {
                                        [N().progress_withPreviousInfo]: td || tu,
                                        [N().progress_disabled]: !j.isAvailable || j.isDisliked,
                                    }),
                                    id: j.id,
                                    albumId: j.albumId,
                                    streamProgress: j.streamProgress,
                                    durationMs: j.durationMs || 0,
                                    playContextParams: w,
                                    withTimeLeftText: B,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(h().titleContainer, O, N().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(p.Caption, {
                                        className: (0, r.$)(h().text, K),
                                        type: 'entity',
                                        size: M,
                                        variant: 'div',
                                        lineClamp: F,
                                        children: [
                                            $,
                                            tC,
                                            !j.isRemoved &&
                                                j.version &&
                                                (0, a.jsxs)(p.Caption, {
                                                    className: (0, r.$)(h().text, h().version),
                                                    type: 'entity',
                                                    size: M,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Z ? void 0 : j.version,
                                                    children: ['\xa0', j.version],
                                                }),
                                        ],
                                    }),
                                    j.explicitDisclaimer &&
                                        E &&
                                        (0, a.jsx)(x.Nq, {
                                            containerClassName: h().explicitMarkContainer,
                                            getDescriptionTexts: j.getDescriptionTexts,
                                            variant: j.explicitDisclaimer,
                                            className: h().explicitMark,
                                            size: R,
                                            trackId: j.id,
                                        }),
                                    q,
                                ],
                            }),
                            (td || tu) &&
                                (0, a.jsxs)(p.Caption, {
                                    type: 'entity',
                                    size: M,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, r.$)(h().text, N().podcastName, K),
                                    children: [
                                        tx,
                                        tu &&
                                            (0, a.jsx)(p.Caption, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: M,
                                                className: (0, r.$)({
                                                    [N().dateWithName]: td,
                                                    [N().soonDate]: tr,
                                                    [N().dateDisabled]: !j.isAvailable,
                                                    [N().dateDisliked]: j.isDisliked && !U,
                                                }),
                                                children: tp(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        29265: (t, e, i) => {
            'use strict';
            i.d(e, { W: () => r });
            var a = i(60900);
            let r = (t) => {
                let { track: e, withLightning: i } = t,
                    { formatMessage: r } = (0, a.A)();
                return e.isAvailable
                    ? [e.artistsNames, e.title, e.version, i && r({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                    : ''
                          .concat(r({ id: 'extra-explicit.play-unavailable' }), ' ')
                          .concat(e.artistsNames, ' ')
                          .concat(e.title);
            };
        },
        34783: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        35587: (t) => {
            t.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        36916: (t, e, i) => {
            'use strict';
            i.d(e, { PromoLandingTrackAlbum: () => L });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(49574),
                n = i(63618),
                o = i(60900),
                c = i(59824),
                d = i(82586),
                u = i(71926),
                m = i(93510),
                k = i(44574),
                _ = i(12518),
                p = i(54714),
                v = i.n(p);
            let C = (0, r.PA)((t) => {
                let { className: e, track: i, withLightning: r } = t,
                    {
                        settings: { isMobile: l },
                    } = (0, s.Pjs)(),
                    { formatMessage: p } = (0, o.A)(),
                    C = (0, m.c5)(i);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(v().root, v().controls, e, { [v().controls_disabled]: !i.isAvailable }),
                    children: [
                        r &&
                            (0, a.jsx)(d.Icon, {
                                'aria-label': p({ id: 'entity-names.popular-among-users' }),
                                size: 'xxs',
                                className: (0, n.$)(v().lightning, { [v().lightning_withOffset]: l }),
                                variant: 'lightning',
                            }),
                        !i.isRemoved &&
                            i.isAvailable &&
                            (0, a.jsx)(k.cy, { size: 'xs', iconSize: 'xxs', className: (0, n.$)(v().item, v().likeIcon), isLiked: i.isLiked, onClick: C }),
                        !l &&
                            'number' == typeof i.durationMs &&
                            (0, a.jsx)('div', {
                                className: (0, n.$)(v().item, v().contextMenuWrapper),
                                children: (0, a.jsx)(u.Caption, {
                                    variant: 'span',
                                    className: (0, n.$)(v().duration, v().alwaysVisibleDuration),
                                    type: 'entity',
                                    size: 'm',
                                    weight: 'medium',
                                    ...(0, c.Am)(c.Kq.track.TRACK_DURATION),
                                    children: (0, _.h)(i.durationMs),
                                }),
                            }),
                    ],
                });
            });
            var x = i(68912),
                T = i(83521),
                g = i(91027),
                y = i(58359),
                A = i(29265),
                h = i(54171),
                b = i(35587),
                N = i.n(b);
            let I = (0, r.PA)((t) => {
                let {
                        className: e,
                        track: i,
                        meta: r,
                        beforeBlock: l,
                        controls: o,
                        playButtonCellRender: d,
                        withLightning: u,
                        isPlaying: m,
                        isCurrent: _,
                        togglePlay: p,
                        restartPlay: v,
                        onPlayClick: C,
                        ...x
                    } = t,
                    { ref: T, intersectionPropertyId: b } = (0, s.nMI)(),
                    I = (0, s.brA)(),
                    j = (0, A.W)({ withLightning: u, track: i }),
                    {
                        settings: { isMobile: P },
                    } = (0, s.Pjs)(),
                    L = (0, h.useTrackDisclaimer)({ track: i, callback: p }),
                    f = (0, g.c)(() => {
                        L(), I(!m), null == C || C(!m);
                    }),
                    D = (0, g.c)(() => {
                        if (m) return void v();
                        f();
                    }),
                    S = (0, g.c)((t) => {
                        if (i.isAvailable || i.hasModalAccess) {
                            if (((0, y.P)(t, N().ripple), P)) return void f();
                            2 === t.detail && D();
                        }
                    }),
                    M = null == d ? void 0 : d({ onPlayButtonClick: f, isPlaying: m, isCurrent: _ });
                return (0, a.jsxs)(k.Cj, {
                    ref: T,
                    'aria-label': j,
                    'data-intersection-property-id': b,
                    onClick: S,
                    ...(0, c.Am)(c.Kq.track.TRACK_PROMOLANDING),
                    className: (0, n.$)(N().root, { [N().root_disabled]: !i.isAvailable }, e),
                    ...x,
                    children: [l, M, r, o],
                });
            });
            var j = i(11303),
                P = i.n(j);
            let L = (0, r.PA)((t) => {
                let { track: e, albumArtists: i, position: r, playContextParams: n, withLightning: o } = t,
                    { promolanding: c } = (0, s.Pjs)(),
                    d = (0, s.Dx4)({ playContextParams: n, entityId: e.entityId, playbackId: s.V_r.PROMO_LANDING, sonataState: c.state }),
                    u = (0, l.useCallback)((t) => (0, a.jsx)(T.G, { track: e, position: r, className: P().playButtonCell, withDislikeStyles: !1, ...t }), [e, r]);
                return (0, a.jsx)(I, {
                    track: e,
                    withLightning: o,
                    meta: (0, a.jsx)(x.TrackMeta, {
                        ignoreDislikedStyles: !0,
                        withArtistLink: !1,
                        withAlbumLink: !1,
                        withTrackLink: !1,
                        albumArtists: i,
                        track: e,
                        withSavingQueryParams: !0,
                    }),
                    playButtonCellRender: u,
                    controls: (0, a.jsx)(C, { withLightning: o, track: e, className: P().controlsBarCell }),
                    ...d,
                });
            });
        },
        39380: (t) => {
            t.exports = { shimmer: 'ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb' };
        },
        40342: (t) => {
            t.exports = {
                root: 'TrackCard_root__kIpe1',
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
        43565: (t, e, i) => {
            'use strict';
            i.d(e, { O: () => o });
            var a = i(32290),
                r = i(63618),
                l = i(82586),
                s = i(20753),
                n = i.n(s);
            let o = (t) => {
                let { isDragging: e, className: i } = t;
                return (0, a.jsx)(l.Icon, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(n().root, { [n().root_active]: e }, i), 'aria-hidden': !0 });
            };
        },
        44884: (t, e, i) => {
            'use strict';
            var a;
            i.d(e, { b: () => a }),
                (function (t) {
                    (t.Album = 'album'), (t.Artist = 'artist'), (t.Playlist = 'playlist'), (t.Radio = 'fm_radio'), (t.Other = 'other'), (t.Search = 'search');
                })(a || (a = {}));
        },
        46789: (t, e, i) => {
            'use strict';
            i.d(e, { useOnLikeClick: () => u });
            var a = i(32290),
                r = i(92708),
                l = i(55178),
                s = i(60900),
                n = i(63380),
                o = i(49574),
                c = i(44574);
            let d = (t) => {
                    let { clip: e, closeToast: i } = t;
                    return (0, a.jsx)(c.OM, {
                        entityVariant: c.cp.CLIP,
                        entityTitle: e.title,
                        collectionUrl: o.Zyd.collectionClips.href,
                        isLiked: e.isLiked,
                        closeToast: i,
                        coverUri: e.thumbnail,
                    });
                },
                u = (t) => {
                    let { user: e, fullscreenVideoPlayer: i, collection: u } = (0, o.Pjs)(),
                        { notify: m } = (0, o.lkh)(),
                        [k, _] = (0, l.useState)(!1),
                        { formatMessage: p } = (0, s.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t) return;
                        let l = i.modal.isOpened ? o.uQT.FULLSCREEN_INFO : o.uQT.INFO,
                            s = i.modal.isOpened ? o.uQT.FULLSCREEN_ERROR : o.uQT.ERROR;
                        if (!e.isAuthorized) return void m((0, a.jsx)(c.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s });
                        if (k) return;
                        let v = { ...(0, r.HO)(t), isLiked: !t.isLiked };
                        _(!0);
                        let C = await t.toggleLike();
                        _(!1),
                            u.clips.reset(),
                            C === n.f.OK
                                ? m((0, a.jsx)(d, { clip: v }), { containerId: l })
                                : m((0, a.jsx)(c.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s });
                    }, [t, e.isAuthorized, k, p, m, i.modal.isOpened, u.clips]);
                };
        },
        47742: (t) => {
            t.exports = {
                menu: 'ContextSubMenuAddToPlaylist_menu__76MDp',
                listMenu: 'ContextSubMenuAddToPlaylist_listMenu__e3qCt',
                divider: 'ContextSubMenuAddToPlaylist_divider__i8Y89',
            };
        },
        49464: (t, e, i) => {
            'use strict';
            i.d(e, { TrailerTrackPlaylist: () => _ });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(59824),
                n = i(49574),
                o = i(44574),
                c = i(6647),
                d = i(68912),
                u = i(22762),
                m = i(85673),
                k = i.n(m);
            let _ = (0, r.PA)((t) => {
                let { track: e, playContextParams: i, onPlayClick: r, onLikeClick: m, onDislikeClick: _ } = t,
                    {
                        trailer: p,
                        settings: { isMobile: v },
                    } = (0, n.Pjs)(),
                    C = (0, n.Dx4)({ playContextParams: i, entityId: e.entityId, sonataState: p.state, playbackId: n.V_r.TRAILER }),
                    x = (0, l.useCallback)(
                        (t) =>
                            (0, a.jsx)(o.q1, {
                                isAvailable: e.isAvailable,
                                isDisliked: e.isDisliked,
                                coverUri: e.coverUri,
                                title: e.title,
                                className: k().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [e],
                    );
                return (0, a.jsx)(u.Track, {
                    track: e,
                    meta: (0, a.jsx)(d.TrackMeta, { withArtistLink: !v, track: e }),
                    playButtonCellRender: x,
                    onPlayClick: r,
                    controls: (0, a.jsx)(c.ControlsBar, { track: e, className: k().controlsBarCell, onLikeClick: m, onDislikeClick: _ }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ...C,
                    ...(0, s.Am)(s.Kq.track.TRACK_PLAYLIST),
                });
            });
        },
        50918: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        51730: (t) => {
            t.exports = { root: 'ContextMenuPlaylistItem_root__WU_1g', icon: 'ContextMenuPlaylistItem_icon__U79vo' };
        },
        53965: (t, e, i) => {
            'use strict';
            var a;
            i.d(e, { o: () => a }),
                (function (t) {
                    (t.TEXT = 'TEXT'), (t.LRC = 'LRC'), (t.RICH_JSON = 'RICH_JSON');
                })(a || (a = {}));
        },
        54171: (t, e, i) => {
            'use strict';
            i.d(e, { useTrackDisclaimer: () => r });
            var a = i(49574);
            let r = (t) => {
                let { track: e, callback: i, disclaimerRejectHandler: r } = t;
                return (0, a.lVe)({ entity: e, entityType: a.nPY.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        56797: (t, e, i) => {
            'use strict';
            i.d(e, { useSendEventOnClipNavigated: () => n });
            var a = i(16172),
                r = i(52068),
                l = i(91027),
                s = i(49574);
            let n = (t) => {
                let e = (0, r.st)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: n } = (0, s.$au)(),
                    { tabId: o, tabPos: c, isTabSelectedByDefault: d } = (0, s.Rro)(),
                    { skeleton: u } = (0, s.bCF)(),
                    { blockType: m, blockId: k, blockPosX: _, blockPosY: p, mainObjectType: v, mainObjectId: C } = (0, s.N8n)(),
                    { objectsCount: x, objectType: T, objectId: g, objectPosX: y, objectPosY: A } = (0, s.Jfv)(),
                    h = (0, s.UlF)();
                return (0, l.c)(() => {
                    if (!e || !n || !s.xKB.includes(n)) return;
                    let r = {
                        hash: i,
                        pageId: n,
                        entityType: m,
                        entityId: k,
                        entityPosX: _,
                        entityPosY: p,
                        objectId: g,
                        objectType: T,
                        objectPosX: y,
                        objectPosY: A,
                        objectsCount: x,
                        from: s.Wft[n],
                        to: a.QT.VideoScreen,
                    };
                    s.qG9.includes(n) && ((r.tabId = o), (r.tabPos = c), (r.isTabSelectedByDefault = d)),
                        u && (r.skeletonId = u),
                        v && (r.mainObjectType = v),
                        C && (r.mainObjectId = C);
                    let l = (0, a.Fx)({ params: r, logger: h, context: 'useSendEventOnClipNavigated' });
                    l && t && (0, a.QS)(e.evgenInstance, l);
                });
            };
        },
        59041: (t) => {
            t.exports = {
                cancelIcon: 'TrackContextMenuDownloadItem_cancelIcon__0YF_e',
                root: 'TrackContextMenuDownloadItem_root__BALdW',
                downloadingProgress: 'TrackContextMenuDownloadItem_downloadingProgress__Xmtgm',
                progress: 'TrackContextMenuDownloadItem_progress__FMBws',
            };
        },
        61113: (t, e, i) => {
            'use strict';
            i.d(e, { TrackCard: () => P });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(71483),
                c = i(91027),
                d = i(6752),
                u = i(14934),
                m = i(86269),
                k = i(71926),
                _ = i(9152),
                p = i(33797),
                v = i(93510),
                C = i(49574),
                x = i(44574),
                T = i(54171),
                g = i(40342),
                y = i.n(g),
                A = i(39407),
                h = i(16172),
                b = i(59824),
                N = i(82586),
                I = i(13486);
            let j = (0, l.PA)((t) => {
                    let { track: e, handleLikeButtonClick: i, handlePlayButtonClick: l, isPlaying: n } = t,
                        { trailer: o, user: m } = (0, C.Pjs)(),
                        [k, _] = (0, s.useState)(!1),
                        [p, v] = (0, s.useState)(!1),
                        T = (0, C.PT7)(),
                        g = (0, C.Ftl)(),
                        j = (0, c.c)(() => {
                            _(!k), v(!k);
                        }),
                        P = (0, c.c)((t) => {
                            t.preventDefault(), t.stopPropagation();
                        }),
                        L = (0, c.c)((t) => {
                            if ((t.stopPropagation(), T())) return void t.preventDefault();
                            o.openTrackTrailer(e.id), g(h.ky.Track, e.id);
                        }),
                        f = (0, d.L)(() => {
                            var t;
                            if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                                return (0, a.jsx)(
                                    x.nE,
                                    {
                                        children: (0, a.jsx)(x.kJ, {
                                            className: (0, r.$)(y().trailerButton, y().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: L,
                                        }),
                                    },
                                    e.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(u.hg, {
                        isVisible: k || p,
                        className: y().controls,
                        labelText: (0, a.jsx)(A.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            x.DM,
                            {
                                className: (0, r.$)(y().playButton, y().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: n,
                                onClick: l,
                            },
                            e.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            x.cy,
                            {
                                className: (0, r.$)(y().likeButton, y().control),
                                isLiked: e.isLiked,
                                onClick: i,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: !m.isAuthorized,
                            },
                            e.getKey('LikeButton'),
                        ),
                        menuControl: (0, a.jsx)(
                            I.TrackContextMenu,
                            {
                                placement: 'bottom',
                                track: e,
                                onOpenChange: j,
                                open: k,
                                onClick: P,
                                className: (0, r.$)(y().menuButton, y().control),
                                icon: (0, a.jsx)(N.Icon, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                ...(0, b.Am)(b.Kq.track.TRACK_CONTEXT_MENU_BUTTON),
                            },
                            e.getKey('TrackContextMenu'),
                        ),
                        trailerControl: f,
                    });
                }),
                P = (0, l.PA)((t) => {
                    var e, i;
                    let { className: l, children: g, track: A, contentLinesCount: h, overrideContextType: b } = t,
                        { from: N } = (0, C.fyy)(),
                        {
                            track: I,
                            paywall: { modal: P },
                        } = (0, C.Pjs)(),
                        { formatMessage: L } = (0, n.A)(),
                        [f, D] = (0, s.useState)(!1),
                        [S, M] = (0, s.useState)(!1),
                        { sendLikeSearchFeedback: R, sendPlaySearchFeedback: E, sendNavigateSearchFeedback: O } = (0, C.zEv)(),
                        K = (0, v.KX)(A),
                        w = (0, C.ZpR)(null != (i = null == (e = A.mainAlbum) ? void 0 : e.url) ? i : ''),
                        B = (0, C.ZpR)(A.url),
                        U = (0, C.brA)(),
                        z = (0, C.PT7)(),
                        G = (0, d.L)(() => {
                            var t;
                            let e = L({ id: 'entity-names.track-name' }, { trackName: A.title }),
                                i = A.isLiked ? L({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(e, ' ')
                                .concat(null != (t = A.version) ? t : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: $, togglePlay: q } = (0, C.Dx4)({
                            playContextParams: {
                                contextData: { type: o.K.Various, meta: { id: A.entityId }, from: N, overrideContextType: b },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: A.entityId,
                        }),
                        F = (0, c.c)(() => {
                            I.open({ trackId: A.id, albumId: A.albumId });
                        }),
                        X = (0, c.c)(() => {
                            f || $ || (D(!0), null == E || E()), q();
                        }),
                        Y = (0, _.cp)({ album: A.mainAlbum, callback: w }),
                        V = (0, T.useTrackDisclaimer)({ track: A, callback: B }),
                        Q = (0, T.useTrackDisclaimer)({ track: A, callback: F }),
                        W = (0, T.useTrackDisclaimer)({ track: A, callback: X }),
                        H = (0, C.NPu)(),
                        J = (0, c.c)(() => {
                            if (!z()) {
                                if (H) return void P.open();
                                W(), U(!$);
                            }
                        }),
                        Z = (0, c.c)(() => {
                            A.hasTrackLink && Q();
                        }),
                        tt = (0, c.c)(() => {
                            S || A.isLiked || (M(!0), null == R || R()), K();
                        }),
                        te = (0, c.c)((t) => {
                            var e;
                            if (A.hasTrackLink) {
                                null == O || O(), V(t);
                                return;
                            }
                            A.hasAlbumLink && (null == (e = A.mainAlbum) ? void 0 : e.url) && Y(t);
                        }),
                        ti = (0, d.L)(() => {
                            var t, e, i;
                            return A.hasTrackLink
                                ? (0, a.jsx)(x.N_, {
                                      'aria-label': ''.concat(A.title, ' ').concat(null != (e = A.version) ? e : ''),
                                      className: y().titleLink,
                                      href: A.url,
                                      onClick: te,
                                      children: A.title,
                                  })
                                : A.hasAlbumLink && (null == (t = A.mainAlbum) ? void 0 : t.url)
                                  ? (0, a.jsx)(x.N_, {
                                        'aria-label': ''.concat(A.title, ' ').concat(null != (i = A.version) ? i : ''),
                                        className: y().titleLink,
                                        href: A.mainAlbum.url,
                                        onClick: te,
                                        children: A.title,
                                    })
                                  : (0, a.jsx)(k.Caption, { className: y().title, variant: 'span', children: A.title });
                        }),
                        ta = (0, d.L)(() => {
                            var t, e;
                            return A.hasAlbumLink && (null == (t = A.mainAlbum) ? void 0 : t.url)
                                ? (0, a.jsx)(x.N_, { href: A.mainAlbum.url, onClick: te, children: ''.concat(A.title, ' ').concat(null != (e = A.version) ? e : '') })
                                : null;
                        }),
                        tr = (0, d.L)(() => {
                            if (A.isAvailable) return (0, a.jsx)(j, { track: A, isPlaying: $, handleLikeButtonClick: tt, handlePlayButtonClick: J });
                        });
                    return (0, a.jsx)(u.MN, {
                        className: (0, r.$)(y().root, l),
                        'aria-label': G,
                        explicitMarkComponent: A.explicitDisclaimer && (0, a.jsx)(x.Nq, { getDescriptionTexts: A.getDescriptionTexts, variant: A.explicitDisclaimer }),
                        title: (0, a.jsxs)(k.Caption, {
                            className: (0, r.$)(y().titleContainer, { [y().titleContainer_withVersion]: A.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            children: [ti, A.version && (0, a.jsx)(k.Caption, { className: y().version, variant: 'span', children: ' '.concat(A.version) })],
                        }),
                        srTitle: ta,
                        contentLinesCount: h,
                        view: (0, a.jsx)(m.Paper, {
                            className: y().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, r.$)(y().coverBlock, { [y().coverBlock_withTrackLink]: A.hasTrackLink }),
                                onClick: Z,
                                children: [
                                    (0, a.jsx)(x.BW, {
                                        className: y().image,
                                        src: A.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: G,
                                        withAvatarReplace: !0,
                                        isAvailable: A.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    tr,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            p.iQ,
                            { className: y().artists, artists: A.artists, lineClamp: 1, linkClassName: y().artistLink, captionSize: 's', withLink: A.isNonUserGenerated },
                            A.getKey('description'),
                        ),
                        children: g,
                    });
                });
        },
        62134: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => a });
            var a = (function (t) {
                return (t.ALBUM = 'album'), (t.PLAYLIST = 'playlist'), t;
            })({});
        },
        67221: (t) => {
            t.exports = { ugcLabel: 'TrackContextMenuHeader_ugcLabel__k7hmv' };
        },
        68912: (t, e, i) => {
            'use strict';
            i.d(e, { TrackMeta: () => y });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(21916),
                n = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(59824),
                u = i(70280),
                m = i(71926),
                k = i(33797),
                _ = i(49574),
                p = i(44574),
                W = i(82586),
                v = i(25649),
                C = i(24760),
                x = i(84141),
                T = i(5856),
                g = i.n(T);
            let y = (0, l.PA)((t) => {
                let {
                        className: e,
                        titleContainerClassName: i,
                        track: l,
                        albumArtists: T,
                        withExplicitMark: y = !0,
                        withSecondaryColor: A,
                        captionSize: h = 'm',
                        explicitSize: b = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: I,
                        artistsClassName: j,
                        ignoreDislikedStyles: P,
                        withCustomTooltip: L = !0,
                        hasLineClamp: f = !0,
                        withSavingQueryParams: D,
                        beforeTitle: S,
                        withArtistLink: M = !0,
                        withTrackLink: R = !0,
                        afterTitle: E,
                        withContextMenuArtists: O,
                    } = t,
                    { formatMessage: K } = (0, o.A)(),
                    { sendNavigateSearchFeedback: w } = (0, _.zEv)(),
                    {
                        settings: { isMobile: B },
                    } = (0, _.Pjs)(),
                    U = (0, C.$)({ withCustomTooltip: L }),
                    z = (0, s.useSearchParams)(),
                    G = l.getUrl(D ? Object.fromEntries(z) : void 0),
                    $ = (0, n.useMemo)(() => {
                        var t;
                        let e = K({ id: 'entity-names.track-name' }, { trackName: l.title });
                        return ''.concat(e, ' ').concat(null != (t = l.version) ? t : '');
                    }, [K, l.title, l.version]),
                    q = (0, x.useOnTrackLinkClick)({ track: l, onNavigate: w, withSavingQueryParams: D, entityType: _.nPY.TRACK }),
                    F = (0, n.useCallback)(
                        (t) => {
                            let e = ''.concat(l.title, ' ').concat(!l.isRemoved && l.version ? l.version : '');
                            return (0, a.jsx)(u.m_, {
                                enabled: U && !B,
                                offsetOptions: 4,
                                placement: 'top',
                                text: e,
                                hoverSettings: _.VP$,
                                children: (0, a.jsx)(m.Caption, {
                                    className: (0, r.$)(g().text, g().title),
                                    type: 'entity',
                                    size: h,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...t,
                                    children: l.title,
                                }),
                            });
                        },
                        [B, U, h, l.isRemoved, l.title, l.version],
                    ),
                    X = (0, n.useMemo)(() => {
                        let t = ''.concat(l.title, ' ').concat(!l.isRemoved && l.version ? l.version : '');
                        return l.isRemoved
                            ? (0, a.jsx)(u.m_, {
                                  enabled: U && !B,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: K({ id: 'track-title.error-not-found' }),
                                  hoverSettings: _.VP$,
                                  children: (0, a.jsx)(m.Caption, {
                                      className: (0, r.$)(g().text, g().title),
                                      type: 'entity',
                                      size: h,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: U ? void 0 : K({ id: 'track-title.error-not-found' }),
                                      children: (0, a.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : l.hasTrackLink && R
                              ? (0, a.jsx)(p.N_, {
                                    onClick: q,
                                    className: g().albumLink,
                                    href: G,
                                    'aria-label': $,
                                    title: U ? void 0 : t,
                                    ...(0, d.Am)(d.Kq.track.TRACK_TITLE),
                                    children: F(),
                                })
                              : F((0, d.Am)(d.Kq.track.TRACK_TITLE));
                    }, [B, l.title, l.isRemoved, l.version, l.hasTrackLink, F, U, K, h, $, q, G, R]),
                    Y = (0, v.s)(l.artists, T),
                    V = (0, n.useMemo)(() => +!!f, [f]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(g().root, { [g().root_disabled]: !l.isAvailable, [g().root_disliked]: l.isDisliked && !P, [g().root_withSecondaryColor]: A }, e),
                    children: (0, a.jsxs)('div', {
                        className: g().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(g().titleContainer, { [g().titleContainer_withVersion]: l.version }, i),
                                children: [
                                    (0, a.jsxs)(m.Caption, {
                                        className: (0, r.$)(g().text, I),
                                        type: 'entity',
                                        size: h,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            S,
                                            X,
                                            !l.isRemoved &&
                                                l.version &&
                                                (0, a.jsxs)(m.Caption, {
                                                    className: (0, r.$)(g().text, g().version),
                                                    type: 'entity',
                                                    size: h,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: U ? void 0 : l.version,
                                                    ...(0, d.Am)(d.Kq.track.TRACK_VERSION),
                                                    children: ['\xa0', l.version],
                                                }),
                                        ],
                                    }),
                                    l.explicitDisclaimer &&
                                        y &&
                                        (0, a.jsx)(p.Nq, {
                                            containerClassName: g().explicitMarkContainer,
                                            getDescriptionTexts: l.getDescriptionTexts,
                                            size: b,
                                            variant: l.explicitDisclaimer,
                                            className: g().explicitMark,
                                            trackId: l.id,
                                        }),
                                    l.isSubstituted &&
                                        (0, a.jsx)(W.Icon, {
                                            className: g().explicitMark,
                                            variant: 'info',
                                            size: b,
                                            title: 'Подменённые данные трека были восстановлены',
                                            'aria-label': 'Подменённые данные трека были восстановлены',
                                        }),
                                    E,
                                ],
                            }),
                            Y.length > 0 &&
                                (0, a.jsx)(k.iQ, {
                                    className: (0, r.$)(g().text, { [g().artists]: f }, j, I),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(g().text, g().link),
                                    captionClassName: (0, r.$)(g().text, g().artistCaption),
                                    artists: Y,
                                    withLink: l.isNonUserGenerated && M,
                                    lineClamp: V,
                                    captionSize: h,
                                    withContextMenu: O,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (t, e, i) => {
            'use strict';
            i.d(e, { TrackPlaylist: () => v });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(59824),
                o = i(49574),
                c = i(44574),
                d = i(43565),
                u = i(6647),
                m = i(68912),
                k = i(22762),
                _ = i(85673),
                p = i.n(_);
            let v = (0, l.PA)((t) => {
                var e;
                let {
                        track: i,
                        playContextParams: l,
                        className: _,
                        withDNDBlock: v,
                        isDragging: C,
                        draggingClassName: x,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: g,
                        handleRemove: y,
                        withDislike: A,
                        withTrailer: h = !0,
                        beforeTitle: b,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    } = t,
                    j = (0, o.Dx4)({ playContextParams: l, entityId: i.entityId }),
                    {
                        settings: { isMobile: P },
                    } = (0, o.Pjs)(),
                    L = (0, s.useCallback)(
                        (t) =>
                            (0, a.jsx)(c.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: p().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...t,
                            }),
                        [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(k.Track, {
                    className: (0, r.$)(_, { [p().trackWithDots]: v, [p().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, a.jsx)(d.O, { className: (0, r.$)(p().dots, x), isDragging: C }) : void 0,
                    meta: (0, a.jsx)(m.TrackMeta, { withArtistLink: !P, beforeTitle: b, track: i, ignoreDislikedStyles: T, withSecondaryColor: g }),
                    playButtonCellRender: L,
                    controls: (0, a.jsx)(u.ControlsBar, {
                        track: i,
                        className: p().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (e = l.contextData) ? void 0 : e.utmLink,
                        withSecondaryColor: g,
                        handleRemove: y,
                        withDislike: A,
                        withTrailer: h,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    }),
                    ...j,
                    ...(0, n.Am)(n.Kq.track.TRACK_PLAYLIST),
                });
            });
        },
        72480: (t, e, i) => {
            'use strict';
            i.d(e, {
                z8: () => v,
                l6: () => c,
                z4: () => d,
                JL: () => u.J,
                KX: () => m.useOnLikeClick,
                Hx: () => a.useSendEventOnClipClosed,
                _7: () => r.useSendEventOnClipNavigated,
                QV: () => l.useSendEventOnClipOpened,
                Mn: () => s.useSendEventOnClipShowedOrHidden,
                Cc: () => k.useVideoModal,
                df: () => _.useWithClips,
            });
            var a = i(78795),
                r = i(56797),
                l = i(96849),
                s = i(26089),
                n = i(60754),
                o = i(49574);
            let c = (t) => {
                    let { available: e, disclaimers: i } = (0, o.fyr)(t);
                    return (0, n.wg)({
                        clipId: t.clipId,
                        title: t.title,
                        thumbnail: t.thumbnail,
                        duration: t.duration,
                        previewUrl: t.previewUrl,
                        isAvailable: e,
                        version: t.version,
                        disclaimers: i,
                    });
                },
                d = (t, e) => {
                    let i = Number(e);
                    return !Number.isNaN(i) && i > 0 && i < t.length ? i : 0;
                };
            var u = i(94315),
                m = i(46789),
                k = i(99872),
                _ = i(84427),
                p = i(95428);
            let v = n.gK
                .compose(
                    n.gK.model('BaseClip', {
                        clipId: n.gK.number,
                        title: n.gK.maybe(n.gK.string),
                        thumbnail: n.gK.maybe(n.gK.string),
                        previewUrl: n.gK.maybe(n.gK.string),
                        duration: n.gK.maybe(n.gK.number),
                        isAvailable: n.gK.boolean,
                        version: n.gK.maybe(n.gK.string),
                    }),
                    p.Ec,
                )
                .views((t) => ({
                    get url() {
                        let { href: e } = (0, o.uvd)(o.Zyd.video.href, { query: { ids: String(t.clipId) } });
                        return e;
                    },
                    get isLiked() {
                        if (!(0, n._n)(t)) return !1;
                        let { library: e } = (0, n.Zn)(t);
                        return e.isClipLiked(t.clipId);
                    },
                    get isLegalRejected() {
                        return t.getIsLegalRejected(t.isAvailable);
                    },
                    get isUnsafeLegal() {
                        return t.getIsUnsafeLegal(t.isAvailable);
                    },
                    getDisclaimerEntityRef: (e) => ({ entityType: null != e ? e : o.nPY.CLIP, entityId: t.clipId }),
                }))
                .actions((t) => ({
                    getKey: (e) => ''.concat(e, '_').concat(t.clipId),
                    toggleLike() {
                        if (!(0, n._n)(t)) return;
                        let { library: e, user: i } = (0, n.Zn)(t);
                        if (i.isAuthorized) return e.toggleClipLike({ entityId: t.clipId, userId: i.account.data.uid });
                    },
                }));
        },
        72732: (t, e, i) => {
            'use strict';
            i.d(e, { Lyrics: () => d });
            var a = i(32290),
                r = i(60900),
                l = i(59824),
                s = i(71926),
                n = i(44574),
                o = i(18440),
                c = i.n(o);
            let d = (t) => {
                let { lyrics: e, authors: i, source: o, isShimmerVisible: d, isShimmerActive: u } = t,
                    { formatMessage: m } = (0, r.A)();
                return d
                    ? (0, a.jsx)(n.q$, { count: 25, isActive: u })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              e,
                              (0, a.jsxs)('div', {
                                  className: c().writers,
                                  children: [
                                      i.length > 0 &&
                                          (0, a.jsx)(s.Caption, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              ...(0, l.Am)(l.e8.content.TRACK_LYRICS_AUTHORS),
                                              children: m({ id: 'entity-names.authors' }, { authors: i }),
                                          }),
                                      o &&
                                          (0, a.jsx)(s.Caption, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              ...(0, l.Am)(l.e8.content.TRACK_LYRICS_SOURCE),
                                              children: m({ id: 'entity-names.source' }, { source: o }),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
        },
        73585: (t) => {
            t.exports = {
                playButtonCell: 'TrackNonMusic_playButtonCell__HaJrc',
                controlsBarCell: 'TrackNonMusic_controlsBarCell__zWt44',
                dots: 'TrackNonMusic_dots__Wom40',
                trackWithDots: 'TrackNonMusic_trackWithDots__v2VbZ',
                important: 'TrackNonMusic_important__u29Uj',
            };
        },
        78795: (t, e, i) => {
            'use strict';
            i.d(e, { useSendEventOnClipClosed: () => n });
            var a = i(16172),
                r = i(52068),
                l = i(91027),
                s = i(49574);
            let n = () => {
                let t = (0, r.st)(),
                    { hash: e } = (0, r.gf)(),
                    i = (0, s.UlF)();
                return (0, l.c)((r) => {
                    if (!t) return;
                    let l = { hash: e, pageId: a.QT.VideoScreen, mainObjectType: a.ky.Video, mainObjectId: r },
                        s = (0, a.Fx)({ params: l, logger: i, context: 'useSendEventOnClipClosed' });
                    s && (0, a.XB)(t.evgenInstance, s);
                });
            };
        },
        79490: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => r });
            var a = i(71483);
            function r(t) {
                return (null == t ? void 0 : t.data.type) === a.K.Generative;
            }
        },
        79727: (t, e, i) => {
            'use strict';
            i.d(e, { TrackPlaylistAddition: () => v });
            var a = i(32290),
                r = i(96103),
                l = i(55178),
                s = i(60900),
                n = i(59824),
                o = i(63423),
                c = i(82586),
                d = i(49574),
                u = i(44574),
                m = i(68912),
                k = i(22762),
                _ = i(99649),
                p = i.n(_);
            let v = (0, r.PA)((t) => {
                let { className: e, track: i, playContextParams: r, onClick: _ } = t,
                    { formatMessage: v } = (0, s.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, d.Pjs)(),
                    x = (0, d.Dx4)({ playContextParams: r, entityId: i.entityId }),
                    T = (0, l.useCallback)(
                        (t) =>
                            (0, a.jsx)(u.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: p().playButtonCell,
                                radius: 'xs',
                                ...t,
                            }),
                        [i],
                    ),
                    g = (0, l.useCallback)(
                        (t) => {
                            t.stopPropagation(), null == _ || _(i);
                        },
                        [i, _],
                    ),
                    y = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)('div', {
                                className: p().controls,
                                children: (0, a.jsx)(o.$, {
                                    className: p().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': v({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: g,
                                    icon: (0, a.jsx)(c.Icon, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [v, g],
                    );
                return (0, a.jsx)(k.Track, {
                    className: e,
                    track: i,
                    meta: (0, a.jsx)(m.TrackMeta, { withArtistLink: !C, track: i }),
                    playButtonCellRender: T,
                    controls: y,
                    ...x,
                    ...(0, n.Am)(n.Kq.track.TRACK_PLAYLIST_ADDITION),
                });
            });
        },
        80864: (t, e, i) => {
            'use strict';
            i.d(e, {
                ZS: () => B.AudiobookMeta,
                $e: () => G.ContextSubMenuAddToPlaylist,
                QD: () => w.ControlsBar,
                UU: () => D,
                xe: () => q.Lyrics,
                wo: () => U.PodcastMeta,
                Pt: () => W.PromoLandingTrackAlbum,
                c8: () => F.SearchTrackCard,
                CC: () => X.Track,
                FR: () => H.TrackAlbum,
                wO: () => Y.TrackCard,
                QB: () => Z.TrackChart,
                _Y: () => $.TrackContextMenu,
                DP: () => E,
                j7: () => z.TrackMeta,
                vj: () => f,
                Kd: () => tt.TrackNonMusic,
                Kt: () => ti.TrackPlaylist,
                II: () => tr.TrackPlaylistAddition,
                v4: () => V.TrackSchema,
                yY: () => tl.TrackUgcUpload,
                g2: () => J.TrailerTrackAlbum,
                nP: () => ta.TrailerTrackPlaylist,
                U6: () => Q.UgcTrackEditModal,
                n_: () => O,
                kK: () => K,
                Df: () => te.D,
                bV: () => c,
                h3: () => m,
                su: () => k.s,
                ye: () => C,
                zc: () => T,
                $b: () => y,
                vU: () => o,
                or: () => A,
                Rg: () => h.useAddTrackToPlaylist,
                $N: () => b.$,
                O6: () => N.useOnTrackLinkClick,
                sR: () => I.useRemoveTrackFromPlaylistByIndex,
                wf: () => j.useTrackDisclaimer,
            });
            var a = i(60754),
                r = i(62400),
                l = i(9152),
                s = i(33797),
                n = i(93510);
            let o = (t, e) => {
                    var i, r;
                    let o = null == (i = t.substituted?.artists ?? t.artists) ? void 0 : i.map(s.dM),
                        c = null == (r = t.albums) ? void 0 : r.map(l.e7);
                    if (t?.type === 'MUSIC') t.type = t.type.toLowerCase();
                    return (0, a.wg)({ ...(0, n.gK)(t, e), artists: o, albums: c });
                },
                c = (t, e) => (0, a.wg)({ ...o(t), chart: e && (0, r.ws)(e) });
            var d = i(24266),
                u = i(49574);
            let m = (t, e) => {
                let i = Math.floor(Date.now() / 1e3),
                    a = ''.concat(t).concat(i);
                return {
                    sign: (0, d.createHmac)('sha256', (0, u.Efj)())
                        .update(a)
                        .digest('base64'),
                    timeStamp: i,
                    trackId: t,
                    format: e,
                };
            };
            var k = i(25649),
                _ = i(21916),
                p = i(55178),
                v = i(26252);
            (0, p.cache)(async (t, e) => {
                let i;
                ((0, u.LLJ)(t) && (0, u.LLJ)(e)) || (0, _.notFound)();
                try {
                    var a, r, l, s, n, o;
                    let { container: c, backendHostTld: d, locale: m, host: k, isRSC: _, fullUrl: p, requestUrl: C } = await (0, u.IhE)();
                    if (_)
                        return {
                            track: void 0,
                            album: void 0,
                            similarTracks: void 0,
                            disclaimerTitle: null,
                            fullUrl: p,
                            requestUrl: C,
                            backendHostTld: d,
                            locale: m,
                            host: k,
                            isRSC: _,
                        };
                    let x = c.get(u.Ooh),
                        T = await x.getFullInfoTrack({ trackId: t, albumId: Number(e) }),
                        g = null;
                    if ((0, u.J75)(T.track)) {
                        let t =
                            (null == (l = T.track) ? void 0 : l.disclaimers) && null != (n = null == (s = (0, v.bC)(T.track.disclaimers, v.Yw.MODAL)[0]) ? void 0 : s.id)
                                ? n
                                : null;
                        if (t) {
                            let e = c.get(u.ffg);
                            try {
                                let i = await e.getById(t);
                                g = null != (o = null == i ? void 0 : i.title) ? o : null;
                            } catch (t) {
                                g = null;
                            }
                        }
                    }
                    i = {
                        track: T.track,
                        album: null == (r = T.track) || null == (a = r.albums) ? void 0 : a[0],
                        similarTracks: T.similarTracks,
                        disclaimerTitle: g,
                        backendHostTld: d,
                        locale: m,
                        host: k,
                        fullUrl: p,
                        requestUrl: C,
                        isRSC: _,
                    };
                } catch (t) {
                    return (0, u.tfF)(t, () => ({ track: void 0, album: void 0, similarTracks: void 0, disclaimerTitle: null, ...(0, u.Bj3)() }));
                }
                return (i.track && 'not-found' !== i.track.error) || (0, _.notFound)(), i;
            });
            let C = (t) => {
                if (!t) return;
                let { h: e, s: i } = (0, u.g8k)(t);
                return 'hsl('.concat(e, ', ').concat(i, '%, 20%)');
            };
            (0, p.cache)(async (t) => {
                let e;
                try {
                    var i, a;
                    let { container: r, backendHostTld: l, locale: s, host: n, fullUrl: o, requestUrl: c, isRSC: d } = await (0, u.IhE)();
                    if (d) return { track: void 0, album: void 0, fullUrl: o, isRSC: d, requestUrl: c, backendHostTld: l, locale: s, host: n };
                    let m = r.get(u.Ooh),
                        k = await m.getTracksMeta({ trackIds: [t], removeDuplicates: !0 });
                    e = {
                        track: null == k ? void 0 : k[0],
                        album: null == k || null == (a = k[0]) || null == (i = a.albums) ? void 0 : i[0],
                        backendHostTld: l,
                        locale: s,
                        host: n,
                        fullUrl: o,
                        requestUrl: c,
                    };
                } catch (t) {
                    return (0, u.tfF)(t, () => ({ track: void 0, album: void 0, ...(0, u.Bj3)() }));
                }
                return (e.track && 'not-found' !== e.track.error) || (0, _.notFound)(), e;
            });
            var x = i(96333);
            let T = (t) =>
                t
                    ? { id: t.id, artists: (t.substituted?.artists ?? t.artists).map(s.NE), durationMs: t.durationMs, title: t.substituted?.title ?? t.title, type: t.type }
                    : { id: 0, artists: [], durationMs: 0, title: '', type: x.S.TRACK };
            var g = i(72676);
            let y = (t) => ({ type: g.z4.Unloaded, meta: { id: t.entityId } }),
                A = (t) => {
                    var e, i;
                    return (0, a.wg)({ ...o(t), artists: null != (i = null == t || null == (e = t.artists) ? void 0 : e.map(s.dM)) ? i : [] });
                };
            var h = i(27594),
                b = i(24760),
                N = i(84141);
            i(16064);
            var I = i(18729),
                j = i(54171);
            let P = a.gK.model('Credit', { title: a.gK.string, value: a.gK.string });
            var L = i(95428);
            let f = n.OQ.props({ artists: a.gK.array(s.PK), albums: a.gK.array(l.GI), chart: a.gK.maybe(r.Iz) })
                    .views((t) => ({
                        get artistsNames() {
                            var e;
                            return null == (e = t.artists) ? void 0 : e.map((t) => t.name).join(', ');
                        },
                        get mainArtist() {
                            var i, a, r, l;
                            if (null == (a = t.artists) || null == (i = a[0]) ? void 0 : i.various) return null;
                            return null != (l = null == (r = t.artists) ? void 0 : r[0]) ? l : null;
                        },
                        get mainAlbum() {
                            var s, n;
                            return null != (n = null == (s = t.albums) ? void 0 : s[0]) ? n : null;
                        },
                        get index() {
                            var o, c, d;
                            return null != (d = null == (c = t.albums[0]) || null == (o = c.trackPosition) ? void 0 : o.index) ? d : null;
                        },
                        get isAvailableOnlyForPlus() {
                            var u;
                            return !!(null == (u = this.mainAlbum) ? void 0 : u.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((t) => ({
                        changeTrackInfo: (0, a.L3)(function* (e, i) {
                            let { ugcResource: r, modelActionsLogger: l } = (0, a._$)(t);
                            if (t.artists.map((t) => t.name).join(', ') === i && e === t.title) return u.FlZ.OK;
                            try {
                                var n;
                                yield r.changeTrack({ trackId: t.id, title: e, artist: i }), (t.title = e);
                                let l = (null == (n = t.artists[0]) ? void 0 : n.id) || '0';
                                if (((t.artists = (0, a.wg)([])), i)) {
                                    let e = s.PK.create({ id: l, name: i, isAvailable: !0 });
                                    t.artists = (0, a.wg)([e]);
                                }
                                return u.FlZ.OK;
                            } catch (t) {
                                return l.error(t), u.FlZ.ERROR;
                            }
                        }),
                    }))
                    .named('Track'),
                D = a.gK
                    .model('CurrentTrackInfo', {
                        id: a.gK.maybeNull(a.gK.union(a.gK.string, a.gK.number)),
                        albumId: a.gK.maybeNull(a.gK.number),
                        isUGC: a.gK.maybeNull(a.gK.boolean),
                        trackLoadingState: a.gK.enumeration(Object.values(u.GuX)),
                        fullTrack: a.gK.maybeNull(f),
                        creditsLoadingState: a.gK.enumeration(Object.values(u.GuX)),
                        credits: a.gK.maybeNull(a.gK.array(P)),
                        modal: L.qt,
                        fullDescription: a.gK.maybeNull(a.gK.string),
                        descriptionLoadingState: a.gK.enumeration(Object.values(u.GuX)),
                    })
                    .views((t) => ({
                        get isTrackIdle() {
                            return t.trackLoadingState === u.GuX.IDLE;
                        },
                        get isCreditsIdle() {
                            return t.creditsLoadingState === u.GuX.IDLE;
                        },
                        get isTrackLoading() {
                            return t.trackLoadingState === u.GuX.PENDING || t.trackLoadingState === u.GuX.IDLE;
                        },
                        get isTrackRejected() {
                            return t.trackLoadingState === u.GuX.REJECT;
                        },
                        get isCreditsLoading() {
                            return t.creditsLoadingState === u.GuX.PENDING || t.creditsLoadingState === u.GuX.IDLE;
                        },
                        get isCreditsRejected() {
                            return t.creditsLoadingState === u.GuX.REJECT;
                        },
                        get isRejected() {
                            return t.creditsLoadingState === u.GuX.REJECT && t.trackLoadingState === u.GuX.REJECT;
                        },
                    }))
                    .actions((t) => ({
                        setTrack(e) {
                            let { id: i, albumId: a, isUGC: r } = e;
                            (t.id = i), (t.albumId = a), (t.isUGC = r);
                        },
                        getFullTrack: (0, a.L3)(function* () {
                            let { tracksResource: e, modelActionsLogger: i } = (0, a._$)(t);
                            if (!t.id || t.trackLoadingState === u.GuX.PENDING) return null;
                            try {
                                t.trackLoadingState = u.GuX.PENDING;
                                let i = yield e.getFullInfoTrack({ trackId: t.id, albumId: t.albumId });
                                if (!i) return null;
                                (t.fullTrack = (0, a.wg)(o(i.track))), (t.trackLoadingState = u.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e), (t.trackLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getFullDescription: (0, a.L3)(function* () {
                            let { tracksResource: e, modelActionsLogger: i } = (0, a._$)(t);
                            if (!t.id || t.descriptionLoadingState === u.GuX.PENDING) return null;
                            try {
                                t.descriptionLoadingState = u.GuX.PENDING;
                                let i = yield e.getFullDescriptionTrack({ trackId: t.id });
                                if (!i) return null;
                                (t.fullDescription = i.description), (t.descriptionLoadingState = u.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e), (t.descriptionLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getTrackMeta: (0, a.L3)(function* () {
                            let { tracksResource: e, modelActionsLogger: i } = (0, a._$)(t);
                            if (!t.id || t.trackLoadingState === u.GuX.PENDING) return null;
                            try {
                                t.trackLoadingState = u.GuX.PENDING;
                                let i = yield e.getTracksMeta({ trackIds: [t.id], removeDuplicates: !0 });
                                if (!i || !i.length) return null;
                                i[0] && ((t.fullTrack = (0, a.wg)(o(i[0]))), (t.trackLoadingState = u.GuX.RESOLVE));
                            } catch (e) {
                                i.error(e), (t.trackLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, a.L3)(function* () {
                            let { tracksResource: e, modelActionsLogger: i } = (0, a._$)(t);
                            if (!t.id || t.creditsLoadingState === u.GuX.PENDING) return null;
                            try {
                                t.creditsLoadingState = u.GuX.PENDING;
                                let i = yield e.getCredits({ trackId: t.id });
                                (t.credits = (0, a.wg)(null == i ? void 0 : i.credits)), (t.creditsLoadingState = u.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e), (t.creditsLoadingState = u.GuX.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (t.id = null),
                                (t.albumId = null),
                                (t.isUGC = null),
                                (t.trackLoadingState = u.GuX.IDLE),
                                (t.descriptionLoadingState = u.GuX.IDLE),
                                (t.creditsLoadingState = u.GuX.IDLE),
                                (t.fullTrack = null),
                                (t.credits = null);
                        },
                    }));
            var S = i(92708),
                M = i(27576),
                R = i(53965);
            let lrclibQueue = (() => {
                    let e = Promise.resolve(),
                        t = 0,
                        i = 350,
                        n = 0;
                    let a = (a) => {
                        let r = n,
                            l = e.then(async () => {
                                if (r !== n) return;
                                let e = Date.now(),
                                    s = i - (e - t);
                                s > 0 && (await new Promise((e) => setTimeout(e, s)));
                                if (r !== n) return;
                                return (t = Date.now()), a();
                            });
                        return (e = l.catch(() => {})), l;
                    };
                    return (
                        (a.reset = () => {
                            (n += 1), (t = 0), (e = Promise.resolve());
                        }),
                        a
                    );
                })(),
                lrclibSearchToken = 0,
                lrclibSearchControllers = [],
                LRCLIB_TEXT_CACHE_MAX_SIZE = 400,
                LRCLIB_TEXT_CACHE_TTL_MS = 36e5,
                LRCLIB_TEXT_NO_RESULT_TTL_MS = 18e5,
                lrclibTextResultCache = new Map(),
                lrclibTextNoResultCache = new Map(),
                normalizeLrclibCachePart = (e) =>
                    'string' == typeof e
                        ? e
                              .trim()
                              .toLowerCase()
                              .replace(/[\s\W_]+/g, '')
                        : '',
                makeLrclibTextCacheKey = (e) => {
                    let t = normalizeLrclibCachePart(null == e ? void 0 : e.trackName),
                        i = normalizeLrclibCachePart(null == e ? void 0 : e.artistName),
                        n = null == e ? void 0 : e.duration;
                    return ''
                        .concat(t, '|')
                        .concat(i, '|')
                        .concat('number' == typeof n && n > 0 ? n : '');
                },
                readLrclibCache = (e, t) => {
                    let i = e.get(t);
                    if (!i) return null;
                    if (i.expiresAt <= Date.now()) return e.delete(t), null;
                    return e.delete(t), e.set(t, i), i.value;
                },
                writeLrclibCache = (e, t, i, n, a) => {
                    let r = { value: i, expiresAt: Date.now() + n };
                    e.delete(t);
                    e.set(t, r);
                    for (; e.size > a; ) {
                        let t = e.keys().next();
                        if (t.done) break;
                        e.delete(t.value);
                    }
                },
                normalizePlaceholderLyricsText = (e) => ('string' == typeof e ? e.trim().replace(/\s+/g, '') : ''),
                isPlaceholderTextLyrics = (e) => {
                    let t = normalizePlaceholderLyricsText(e);
                    return !!t && !t.replace(/[.\-\u2013\u2014]/g, '');
                },
                lrclibPlainFromSynced = (e) => {
                    if (!e || 'string' != typeof e) return null;
                    let t = e
                        .split('\n')
                        .map((e) => e.replace(/\[[^\]]*]/g, '').trim())
                        .filter((e) => e.length > 0);
                    return t.length ? t.join('\n') : null;
                },
                lrclibSearch = async (e) => {
                    let { trackName: trackName, artistName: artistName, duration: durationSec } = e || {};
                    if (!trackName) return null;
                    let cacheKey = makeLrclibTextCacheKey({ trackName, artistName, duration: durationSec }),
                        cachedResult = readLrclibCache(lrclibTextResultCache, cacheKey);
                    if (cachedResult) return console.debug('[LRCLib] cache hit', { key: cacheKey }), cachedResult;
                    if (readLrclibCache(lrclibTextNoResultCache, cacheKey)) return console.debug('[LRCLib] cache no-result hit', { key: cacheKey }), null;
                    let searchToken = ++lrclibSearchToken,
                        checkToken = () => searchToken !== lrclibSearchToken;
                    try {
                        lrclibQueue.reset?.();
                        console.debug('[LRCLib] reset queue', { token: searchToken });
                        lrclibSearchControllers.forEach((e) => e.abort?.());
                        lrclibSearchControllers = [];
                    } catch (e) {}
                    try {
                        let useText = 'undefined' != typeof window && window.nativeSettings?.get('modSettings.lrclib.useText');
                        if (useText === !1) return null;
                    } catch (e) {}
                    console.debug('[LRCLib] search', { trackName, artistName, duration: durationSec });
                    let allowTitleOnlyFallback = !0;
                    try {
                        let setting = 'undefined' != typeof window && window.nativeSettings?.get('modSettings.lrclib.useTitleOnlyFallback');
                        if ('boolean' == typeof setting) allowTitleOnlyFallback = setting;
                    } catch (e) {}
                    let retryIfAborted = async (attempt, ...args) => {
                            if (attempt?.aborted && checkToken() === !1) {
                                let retry = await fetchResults(...args);
                                return retry || attempt;
                            }
                            return attempt;
                        },
                        fetchResults = async (trackQuery, artistQuery) => {
                            let requestUrl = 'https://lrclib.net/api/search?track_name='.concat(encodeURIComponent(trackQuery));
                            if (artistQuery) requestUrl = requestUrl.concat('&artist_name=', encodeURIComponent(artistQuery));
                            return lrclibQueue(async () => {
                                let controller = new AbortController(),
                                    timeoutId = setTimeout(() => controller.abort(), 1e4);
                                try {
                                    lrclibSearchControllers.push(controller);
                                } catch (e) {}
                                try {
                                    let response = await fetch(requestUrl, { signal: controller.signal });
                                    if (!response.ok) return { items: null, aborted: !1 };
                                    let payload = await response.json();
                                    console.debug('[LRCLib] response', { count: Array.isArray(payload) ? payload.length : 0 });
                                    return { items: Array.isArray(payload) && payload.length ? payload : null, aborted: !1 };
                                } catch (error) {
                                    let aborted = error?.name === 'AbortError';
                                    return (
                                        aborted ? console.debug('[LRCLib] request aborted') : console.debug('[LRCLib] request failed', error), { items: null, aborted }
                                    );
                                } finally {
                                    try {
                                        lrclibSearchControllers = lrclibSearchControllers.filter((e) => e !== controller);
                                    } catch (e) {}
                                    clearTimeout(timeoutId);
                                }
                            });
                        },
                        normalizeTitle = (e) => ('string' != typeof e ? '' : e.toLowerCase().replace(/[\s\W_]+/g, '')),
                        splitTrackTitle = (e) => {
                            if ('string' != typeof e) return null;
                            let separators = [' - ', ' — ', ' – '];
                            for (let sep of separators)
                                if (e.includes(sep)) {
                                    let parts = e.split(sep),
                                        left = parts[0]?.trim() || '',
                                        right = parts.slice(1).join(sep).trim();
                                    if (left && right) return { left, right };
                                }
                            return null;
                        },
                        getTitleVariants = (e) => {
                            let t = [];
                            if ('string' == typeof e) {
                                let i = e.trim();
                                if (i) {
                                    t.push(i);
                                    let split = splitTrackTitle(i);
                                    split && (split.left && t.push(split.left), split.right && t.push(split.right));
                                }
                            }
                            return t;
                        },
                        normalizedTitles = allowTitleOnlyFallback ? getTitleVariants(trackName).map(normalizeTitle).filter(Boolean) : [],
                        baseTrackName = trackName,
                        baseArtistName = artistName;
                    try {
                        let artistAttempt = baseTrackName && baseArtistName ? await fetchResults(baseTrackName, baseArtistName) : null;
                        if (checkToken()) return null;
                        artistAttempt = await retryIfAborted(artistAttempt, baseTrackName, baseArtistName);
                        if (checkToken()) return null;
                        let resultsWithArtist = artistAttempt && artistAttempt.items ? artistAttempt.items : null,
                            usedLooseQuery = !1,
                            fallbackAttempt = resultsWithArtist || !baseTrackName || !allowTitleOnlyFallback ? null : await fetchResults(baseTrackName);
                        if (checkToken()) return null;
                        fallbackAttempt = await retryIfAborted(fallbackAttempt, baseTrackName);
                        if (checkToken()) return null;
                        let results = resultsWithArtist || (fallbackAttempt && fallbackAttempt.items ? fallbackAttempt.items : null);
                        if (checkToken()) return null;
                        if (!resultsWithArtist && fallbackAttempt && fallbackAttempt.items) usedLooseQuery = !0;
                        if (!results && trackName) {
                            let splitInfo = splitTrackTitle(trackName);
                            if (splitInfo) {
                                if (!results && splitInfo.right && splitInfo.left) {
                                    let splitAttempt = await fetchResults(splitInfo.right, splitInfo.left);
                                    if (checkToken()) return null;
                                    splitAttempt = await retryIfAborted(splitAttempt, splitInfo.right, splitInfo.left);
                                    if (checkToken()) return null;
                                    results = splitAttempt && splitAttempt.items ? splitAttempt.items : null;
                                }
                                if (!results && splitInfo.right && allowTitleOnlyFallback) {
                                    let splitFallback = await fetchResults(splitInfo.right);
                                    if (checkToken()) return null;
                                    splitFallback = await retryIfAborted(splitFallback, splitInfo.right);
                                    if (checkToken()) return null;
                                    results = splitFallback && splitFallback.items ? splitFallback.items : null;
                                    if (results) usedLooseQuery = !0;
                                }
                                if (!results && splitInfo.left && splitInfo.right) {
                                    let reverseAttempt = await fetchResults(splitInfo.left, splitInfo.right);
                                    if (checkToken()) return null;
                                    reverseAttempt = await retryIfAborted(reverseAttempt, splitInfo.left, splitInfo.right);
                                    if (checkToken()) return null;
                                    results = reverseAttempt && reverseAttempt.items ? reverseAttempt.items : null;
                                }
                                if (!results && splitInfo.left && allowTitleOnlyFallback) {
                                    let reverseFallback = await fetchResults(splitInfo.left);
                                    if (checkToken()) return null;
                                    reverseFallback = await retryIfAborted(reverseFallback, splitInfo.left);
                                    if (checkToken()) return null;
                                    results = reverseFallback && reverseFallback.items ? reverseFallback.items : null;
                                    if (results) usedLooseQuery = !0;
                                }
                            }
                        }
                        if (!results) return writeLrclibCache(lrclibTextNoResultCache, cacheKey, !0, LRCLIB_TEXT_NO_RESULT_TTL_MS, LRCLIB_TEXT_CACHE_MAX_SIZE), null;
                        if (usedLooseQuery && normalizedTitles.length > 0)
                            results = results.filter((e) => normalizedTitles.includes(normalizeTitle(e.trackName || e.track_name || e.title || e.name)));
                        console.debug('[LRCLib] filtered', { count: results.length, usedArtist: !usedLooseQuery });
                        results = results.filter((e) => !e.instrumental && (e.plainLyrics || e.syncedLyrics));
                        if (!results.length)
                            return writeLrclibCache(lrclibTextNoResultCache, cacheKey, !0, LRCLIB_TEXT_NO_RESULT_TTL_MS, LRCLIB_TEXT_CACHE_MAX_SIZE), null;
                        if (durationSec && durationSec > 0) {
                            let withDuration = results.filter((e) => 'number' == typeof e.duration);
                            if (withDuration.length > 0) {
                                let closeMatches = withDuration.filter((e) => Math.abs(e.duration - durationSec) <= 10);
                                if (!closeMatches.length)
                                    return writeLrclibCache(lrclibTextNoResultCache, cacheKey, !0, LRCLIB_TEXT_NO_RESULT_TTL_MS, LRCLIB_TEXT_CACHE_MAX_SIZE), null;
                                results = closeMatches;
                            }
                        }
                        let selected = results[0];
                        if (durationSec && durationSec > 0) {
                            let byDuration = results.map((e) => ({ item: e, delta: Math.abs(e.duration - durationSec) })).sort((e, t) => e.delta - t.delta);
                            selected = byDuration[0] && byDuration[0].item ? byDuration[0].item : selected;
                        }
                        return (
                            console.debug('[LRCLib] selected', {
                                id: selected && selected.id ? selected.id : void 0,
                                duration: selected && selected.duration ? selected.duration : void 0,
                                hasPlain: !!(selected && selected.plainLyrics),
                                hasSynced: !!(selected && selected.syncedLyrics),
                            }),
                            lrclibTextNoResultCache.delete(cacheKey),
                            writeLrclibCache(lrclibTextResultCache, cacheKey, selected, LRCLIB_TEXT_CACHE_TTL_MS, LRCLIB_TEXT_CACHE_MAX_SIZE),
                            selected
                        );
                    } catch (e) {
                        return console.debug('[LRCLib] search failed', e), null;
                    }
                };
            let E = a.gK
                    .compose(
                        a.gK.model('TrackLyrics', {
                            lyrics: a.gK.maybeNull(a.gK.string),
                            major: a.gK.maybeNull(n.t$),
                            lyricId: a.gK.maybeNull(a.gK.number),
                            writers: a.gK.array(a.gK.string),
                            externalLyricId: a.gK.maybeNull(a.gK.string),
                            modal: L.qt,
                            track: a.gK.maybeNull(f),
                            trackId: a.gK.maybeNull(a.gK.union(a.gK.string, a.gK.number)),
                            currentTrackId: a.gK.maybeNull(a.gK.union(a.gK.string, a.gK.number)),
                            hasError: a.gK.optional(a.gK.boolean, !1),
                        }),
                        L.XT,
                    )
                    .volatile(() => ({
                        requestToken: 0,
                    }))
                    .views((t) => ({
                        get writersNames() {
                            return t.writers.join(', ');
                        },
                        get hasWriters() {
                            return 0 !== t.writers.length;
                        },
                        get isShimmerVisible() {
                            return t.isLoading || (t.isRejected && t.hasError);
                        },
                        get shouldShowErrorNotification() {
                            return t.isRejected && t.hasError;
                        },
                    }))
                    .actions((t) => {
                        let isStale = (e, a) => e !== t.requestToken || String(t.currentTrackId) !== String(a),
                            isLyricsUnavailableError = (e) => {
                                let t = 'string' == typeof (null == e ? void 0 : e.message) ? e.message : '';
                                return 'Lyrics are not available' === t;
                            },
                            e = {
                                setTrack(e) {
                                    t.track = (0, a.wg)({ ...(0, S.HO)(e) });
                                },
                                resetShouldShowError() {
                                    t.hasError = !1;
                                },
                                getLyrics: (0, a.L3)(function* (i) {
                                    let { tracksResource: r, modelActionsLogger: l } = (0, a._$)(t);
                                    let s = null != t.currentTrackId && String(t.currentTrackId) === String(i);
                                    if (!i || (s && (t.isLoading || t.isResolved))) return;
                                    let requestToken = ++t.requestToken;
                                    try {
                                        (t.loadingState = u.GuX.PENDING),
                                            (t.currentTrackId = i),
                                            (t.lyrics = null),
                                            (t.major = null),
                                            (t.externalLyricId = null),
                                            (t.lyricId = null),
                                            (t.hasError = !1),
                                            (t.writers = (0, a.wg)([]));
                                        let { sonataState: c } = (0, a.Zn)(t),
                                            d = null == c ? void 0 : c.entityMeta,
                                            p = t.track || d,
                                            v = null == p ? void 0 : p.isLyricsAvailable,
                                            g = null == p ? void 0 : p.hasLyrics;
                                        if (!1 === v || !1 === g) throw new Error('Lyrics are not available');
                                        let { downloadUrl: l, major: s, externalLyricId: f, lyricId: x, writers: b } = yield r.getLyrics(m(i, R.o.TEXT));
                                        if (isStale(requestToken, i)) return;
                                        if (!l) throw new Error('Lyrics are not available');
                                        let C = yield e.downloadLyrics(l, requestToken, i);
                                        if (isStale(requestToken, i)) return;
                                        if (!C || isPlaceholderTextLyrics(C)) throw new Error('Lyrics are not available');
                                        return (
                                            (t.major = (0, n.LT)(s)),
                                            (t.externalLyricId = f),
                                            (t.lyricId = x),
                                            (t.writers = (0, a.wg)(b || [])),
                                            (t.lyrics = C),
                                            void (t.loadingState = u.GuX.RESOLVE)
                                        );
                                    } catch (r) {
                                        let { sonataState: s } = (0, a.Zn)(t),
                                            o = null == s ? void 0 : s.entityMeta,
                                            c = t.track || o,
                                            d = null == c ? void 0 : c.title,
                                            p = null == c ? void 0 : c.name,
                                            v = null == c ? void 0 : c.artists,
                                            g = (null == v ? void 0 : v.length) ? v.map((e) => e.name).filter(Boolean) : [],
                                            y = g.length > 0 ? g[0] : null,
                                            h = null == c ? void 0 : c.durationMs,
                                            k = h ? Math.round(h / 1e3) : null,
                                            A = null == c ? void 0 : c.duration,
                                            P = d || p,
                                            O = null == c ? void 0 : c.version,
                                            K = null == c ? void 0 : c.trackSource,
                                            w = null == c ? void 0 : c.ugcArtistName;
                                        if (isStale(requestToken, i)) return;
                                        y || (y = w || null);
                                        let includeTrackVersion = !0;
                                        try {
                                            let e =
                                                'undefined' != typeof window && window.nativeSettings
                                                    ? window.nativeSettings.get('modSettings.lrclib.useTrackVersion')
                                                    : null;
                                            'boolean' == typeof e && (includeTrackVersion = e);
                                        } catch (e) {}
                                        P &&
                                            includeTrackVersion &&
                                            O &&
                                            'UGC' !== K &&
                                            'string' == typeof O &&
                                            !/^https?:\/\//.test(O) &&
                                            (P = ''.concat(P, ' ').concat(O));
                                        let B = !0;
                                        try {
                                            let e =
                                                'undefined' != typeof window && window.nativeSettings ? window.nativeSettings.get('modSettings.lrclib.useText') : null;
                                            !1 === e && (B = !1);
                                        } catch (e) {}
                                        if (!B) return (t.loadingState = u.GuX.REJECT), (t.hasError = !1), t.modal.isOpened && t.modal.close(), void 0;
                                        if (!P) return (t.loadingState = u.GuX.REJECT), (t.hasError = !1), t.modal.isOpened && t.modal.close(), void 0;
                                        let U = yield lrclibSearch({ trackName: P, artistName: y, duration: k || A });
                                        if (isStale(requestToken, i)) return;
                                        if (U && (U.plainLyrics || U.syncedLyrics)) {
                                            let e = U.plainLyrics || lrclibPlainFromSynced(U.syncedLyrics);
                                            if (!e || isPlaceholderTextLyrics(e)) throw new Error('Lyrics are not available');
                                            return (
                                                (t.major = (0, n.LT)({ id: 1337, name: 'LRCLIB', prettyName: 'LRCLIB' })),
                                                (t.externalLyricId = null == U.id ? null : String(U.id)),
                                                (t.lyricId = null),
                                                (t.writers = (0, a.wg)(g)),
                                                (t.lyrics = e),
                                                (t.hasError = !1),
                                                void (t.loadingState = u.GuX.RESOLVE)
                                            );
                                        }
                                        let z = isLyricsUnavailableError(r);
                                        (t.loadingState = u.GuX.REJECT), (t.hasError = !z), t.modal.isOpened && t.modal.close(), z || l.error(r);
                                    }
                                }),
                                downloadLyrics: (0, a.L3)(function* (e, i, n) {
                                    let { prefixlessResource: r } = (0, a._$)(t);
                                    let a = yield r.getLyricsText(e);
                                    if (void 0 !== n && String(t.currentTrackId) !== String(n)) return null;
                                    if ('number' == typeof i && i !== t.requestToken) return null;
                                    return a;
                                }),
                                sendViews: (0, a.L3)(function* (e) {
                                    let { trackId: i, albumId: r } = e,
                                        { lyricViewsResource: l, modelActionsLogger: s } = (0, a._$)(t);
                                    if (t.loadingState === u.GuX.RESOLVE)
                                        try {
                                            if (!t.major || !t.lyricId || !t.externalLyricId || !t.currentTrackId) return;
                                            yield l.sendViews({
                                                lyricViews: [
                                                    {
                                                        id: (0, M.A)(),
                                                        trackId: i,
                                                        majorId: t.major.id,
                                                        lyricId: t.lyricId,
                                                        externalLyricId: t.externalLyricId,
                                                        lyricFormat: R.o.TEXT,
                                                        albumId: void 0 !== r ? String(r) : void 0,
                                                    },
                                                ],
                                            });
                                        } catch (t) {
                                            s.error(t);
                                        }
                                }),
                            };
                        return e;
                    }),
                O = a.gK
                    .model('UgcTrackEditModal', { modal: L.qt })
                    .volatile(() => ({ track: null }))
                    .views((t) => ({
                        get trackTitle() {
                            if (!t.track) return '';
                            return t.track.title;
                        },
                        get trackArtist() {
                            if (!t.track) return '';
                            return t.track.artists.map((t) => t.name).join(', ');
                        },
                    }))
                    .actions((t) => {
                        let e = {
                            open(e) {
                                (t.track = e), t.modal.open();
                            },
                            close() {
                                t.modal.close(), e.reset();
                            },
                            reset() {
                                t.track = null;
                            },
                        };
                        return e;
                    }),
                K = a.gK.compose(f, n.jU).named('UgcTrack');
            var w = i(6647),
                B = i(1456),
                U = i(27616),
                z = i(68912),
                G = i(20477),
                $ = i(13486),
                q = i(72732),
                F = i(4664),
                X = i(22762),
                Y = i(61113),
                V = i(12326),
                Q = i(16710),
                W = i(36916),
                H = i(2413),
                J = i(7902),
                Z = i(14631),
                tt = i(94631),
                te = i(62134),
                ti = i(69951),
                ta = i(49464),
                tr = i(79727),
                tl = i(87155);
        },
        83521: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => k });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(59824),
                n = i(99902),
                o = i(71926),
                c = i(49574),
                d = i(44574),
                u = i(34783),
                m = i.n(u);
            let k = (0, l.PA)((t) => {
                let { className: e, track: i, position: l, onPlayButtonClick: u, isPlaying: k, isCurrent: _, withDislikeStyles: p = !0, isLoading: v } = t,
                    {
                        settings: { isMobile: C },
                    } = (0, c.Pjs)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(e, m().root, {
                        [m().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [m().root_playing]: k,
                        [m().root_disliked]: i.isDisliked && p,
                        [m().root_current]: _,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !v && (0, a.jsx)(d.PD, { stopAnimation: !k, className: m().playingAnimation }),
                                    v && C && (0, a.jsx)(n.y, { size: 'xs', className: m().spinner }),
                                    !C &&
                                        (0, a.jsx)(d.DM, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: k,
                                            onClick: u,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        l &&
                            (0, a.jsx)(o.Caption, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                ...(0, s.Am)(s.Kq.track.TRACK_POSITION),
                                children: l,
                            }),
                    ],
                });
            });
        },
        84141: (t, e, i) => {
            'use strict';
            i.d(e, { useOnTrackLinkClick: () => l });
            var a = i(91027),
                r = i(49574);
            let l = (t) => {
                let { track: e, withSavingQueryParams: i, entityType: l, onNavigate: s } = t,
                    { fullscreenPlayer: n, album: o, track: c } = (0, r.Pjs)(),
                    d = o.id === e.albumId,
                    u = (0, r.pqZ)(),
                    m = (0, a.c)((t) => {
                        if ((n.modal.isOpened && n.modal.close(), null == s || s(), d)) {
                            null == t || t.preventDefault();
                            let a = (0, r.jrm)();
                            i && a ? u(e.getUrl(Object.fromEntries(a))) : u(e.url), c.open({ trackId: e.id, albumId: e.albumId });
                        } else null == t || t.stopPropagation();
                    }),
                    k = (0, a.c)((t) => {
                        null == s || s(), null == t || t.stopPropagation();
                    }),
                    _ = { entity: e, entityType: l },
                    p = (0, r.lVe)({ ..._, callback: m }),
                    v = (0, r.lVe)({ ..._, callback: k });
                return (0, r.Cz$)({ onClick: p, onCmdCtrlClick: v });
            };
        },
        84427: (t, e, i) => {
            'use strict';
            i.d(e, { useWithClips: () => r });
            var a = i(49574);
            let r = () => {
                let {
                    settings: { isMobile: t },
                } = (0, a.Pjs)();
                return !t;
            };
        },
        85673: (t) => {
            t.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        85819: (t) => {
            t.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        87155: (t, e, i) => {
            'use strict';
            i.d(e, { TrackUgcUpload: () => v });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(39407),
                c = i(59824),
                d = i(63423),
                u = i(71926),
                m = i(93510),
                k = i(44574),
                _ = i(97409),
                p = i.n(_);
            let v = (0, l.PA)((t) => {
                var e;
                let { className: i, track: l } = t,
                    { formatMessage: _ } = (0, n.A)(),
                    v = null == (e = l.file) ? void 0 : e.name,
                    C = (0, s.useCallback)(() => {
                        l.abortUpload();
                    }, [l]),
                    x = (0, s.useCallback)(() => {
                        l.retryUpload();
                    }, [l]),
                    T = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(d.$, {
                                variant: 'text',
                                withRipple: !1,
                                'aria-label': _({ id: 'ugc.cancel-upload' }),
                                color: 'primary',
                                onClick: C,
                                ...(0, c.Am)(c.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON),
                                children: (0, a.jsx)(u.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    className: p().button,
                                    children: (0, a.jsx)(o.A, { id: 'ugc.cancel-upload' }),
                                }),
                            }),
                        [C, _],
                    ),
                    g = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(d.$, {
                                variant: 'text',
                                withRipple: !1,
                                'aria-label': _({ id: 'ugc.repeat-upload' }),
                                color: 'primary',
                                onClick: x,
                                ...(0, c.Am)(c.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON),
                                children: (0, a.jsx)(u.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    className: p().button,
                                    children: (0, a.jsx)(o.A, { id: 'ugc.repeat-upload' }),
                                }),
                            }),
                        [_, x],
                    ),
                    y = (0, s.useMemo)(() => {
                        switch (l.loadingState) {
                            case m.pK.IDLE:
                            case m.pK.PREPARE:
                            case m.pK.UPLOADING:
                                return T;
                            case m.pK.REJECT:
                                return g;
                            default:
                                return null;
                        }
                    }, [T, g, l.loadingState]),
                    A = (0, s.useMemo)(() => {
                        switch (l.loadingState) {
                            case m.pK.IDLE:
                            case m.pK.PREPARE:
                            case m.pK.UPLOADING:
                                return (0, a.jsx)(u.Caption, {
                                    variant: 'div',
                                    size: 'm',
                                    className: p().status,
                                    ...(0, c.Am)(c.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT),
                                    children: (0, a.jsx)(o.A, { id: 'ugc.track-uploading-pending-status' }),
                                });
                            case m.pK.PROCESSING:
                            case m.pK.RESOLVE:
                                return (0, a.jsx)(u.Caption, {
                                    variant: 'div',
                                    size: 'm',
                                    className: p().status,
                                    children: (0, a.jsx)(o.A, { id: 'ugc.track-uploading-processing-status' }),
                                });
                            case m.pK.REJECT:
                                return (0, a.jsx)(u.Caption, {
                                    variant: 'div',
                                    size: 'm',
                                    className: p().status,
                                    ...(0, c.Am)(c.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT),
                                    children: (0, a.jsx)(o.A, { id: 'ugc.track-uploading-error-status' }),
                                });
                            default:
                                return null;
                        }
                    }, [l.loadingState]);
                return (0, a.jsxs)(k.Cj, {
                    'aria-label': v,
                    className: (0, r.$)(p().root, p().card, p().important, i),
                    ...(0, c.Am)(c.Kq.track.UGC_TRACK),
                    children: [
                        (0, a.jsx)(k.q1, { title: v, radius: 'xs', className: p().playButton }),
                        (0, a.jsxs)('div', {
                            className: p().meta,
                            children: [
                                (0, a.jsx)(u.Caption, { variant: 'div', size: 'm', className: p().title, ...(0, c.Am)(c.Kq.track.UGC_TRACK_TITLE), children: v }),
                                A,
                            ],
                        }),
                        (0, a.jsx)('div', { className: p().controls, children: y }),
                    ],
                });
            });
        },
        91542: (t) => {
            t.exports = {
                root: 'ContextMenuPlaylistsList_root__Greny',
                listPlaylist: 'ContextMenuPlaylistsList_listPlaylist__0oWLm',
                shimmerEndItem: 'ContextMenuPlaylistsList_shimmerEndItem__1K0_w',
                favouritesPlaylistItem: 'ContextMenuPlaylistsList_favouritesPlaylistItem__qYrTR',
                icon: 'ContextMenuPlaylistsList_icon__Fhxnh',
            };
        },
        92565: (t) => {
            t.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94315: (t, e, i) => {
            'use strict';
            i.d(e, { J: () => r });
            var a = i(49574);
            let r = function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: i } = (0, a.uvd)(a.Zyd.video.href, { query: { [a.K3F.IDS]: t.join(','), [a.K3F.ACTIVE_INDEX]: String(e) } });
                return i;
            };
        },
        94631: (t, e, i) => {
            'use strict';
            i.d(e, { TrackNonMusic: () => y });
            var a = i(32290),
                r = i(96103),
                l = i(63618),
                s = i(55178),
                n = i(59824),
                o = i(49574),
                c = i(44574),
                d = i(43565),
                u = i(6647),
                m = i(1456),
                k = i(83521),
                _ = i(22762),
                p = i(73585),
                v = i.n(p),
                C = i(62134);
            let x = (0, r.PA)((t) => {
                let {
                        track: e,
                        playContextParams: i,
                        className: r,
                        withDNDBlock: p,
                        isDragging: x,
                        draggingClassName: T,
                        withTimeLeftText: g,
                        ignoreDislikedStyles: y,
                        viewType: A = C.D.PLAYLIST,
                        position: h,
                        beforeTitle: b,
                        handleRemove: N,
                        removeButtonAriaLabel: I,
                    } = t,
                    j = (0, o.Dx4)({ playContextParams: i, entityId: e.entityId }),
                    {
                        settings: { isMobile: P },
                    } = (0, o.Pjs)(),
                    L = (0, s.useCallback)(
                        (t) =>
                            A === C.D.ALBUM
                                ? (0, a.jsx)(k.G, { track: e, position: h, className: v().playButtonCell, ...t })
                                : (0, a.jsx)(c.q1, {
                                      isAvailable: e.isAvailable,
                                      isDisliked: e.isDisliked,
                                      coverUri: e.coverUri,
                                      title: e.title,
                                      className: v().playButtonCell,
                                      ignoreDislikedStyles: y,
                                      radius: 'xs',
                                      ...t,
                                  }),
                        [y, h, A, e],
                    );
                return (0, a.jsx)(_.Track, {
                    className: (0, l.$)(r, { [v().trackWithDots]: p, [v().important]: p }),
                    track: e,
                    meta: (0, a.jsx)(m.AudiobookMeta, {
                        beforeTitle: b,
                        withAuthor: A === C.D.PLAYLIST,
                        explicitSize: 'xxxs',
                        track: e,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: g,
                        ignoreDislikedStyles: y,
                        withSavingQueryParams: !0,
                        withArtistLink: !P,
                    }),
                    playButtonCellRender: L,
                    controls: (0, a.jsx)(u.ControlsBar, {
                        track: e,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: i.contextData.utmLink,
                        handleRemove: N,
                        removeButtonAriaLabel: I,
                    }),
                    beforeBlock: p ? (0, a.jsx)(d.O, { className: (0, l.$)(v().dots, T), isDragging: x }) : void 0,
                    ...j,
                    ...(0, n.Am)(n.Kq.track.TRACK_AUDIOBOOK),
                });
            });
            var T = i(27616);
            let g = (0, r.PA)((t) => {
                    let {
                            track: e,
                            playContextParams: i,
                            withPodcastName: r = !1,
                            className: m,
                            withDNDBlock: k,
                            isDragging: p,
                            draggingClassName: C,
                            handleRemove: x,
                            withTimeLeftText: g,
                            ignoreDislikedStyles: y,
                            beforeTitle: A,
                            removeButtonAriaLabel: h,
                        } = t,
                        b = (0, o.Dx4)({ playContextParams: i, entityId: e.entityId }),
                        {
                            settings: { isMobile: N },
                        } = (0, o.Pjs)(),
                        I = (0, s.useCallback)(
                            (t) =>
                                (0, a.jsx)(c.q1, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: e.isDisliked,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: v().playButtonCell,
                                    ignoreDislikedStyles: y,
                                    radius: 'xs',
                                    ...t,
                                }),
                            [y, e.coverUri, e.isAvailable, e.isDisliked, e.title],
                        );
                    return (0, a.jsx)(_.Track, {
                        className: (0, l.$)(m, { [v().trackWithDots]: k, [v().important]: k }),
                        track: e,
                        meta: (0, a.jsx)(T.PodcastMeta, {
                            beforeTitle: A,
                            track: e,
                            playContextParams: i,
                            withPodcastName: r,
                            withListeningProgress: !0,
                            withTimeLeftText: g,
                            ignoreDislikedStyles: y,
                            explicitSize: 'xxxs',
                            withAlbumTitleLink: !N,
                        }),
                        playButtonCellRender: I,
                        controls: (0, a.jsx)(u.ControlsBar, {
                            handleRemove: x,
                            track: e,
                            className: v().controlsBarCell,
                            ignoreDislikedStyles: y,
                            utmLink: i.contextData.utmLink,
                            removeButtonAriaLabel: h,
                        }),
                        beforeBlock: k ? (0, a.jsx)(d.O, { className: (0, l.$)(v().dots, C), isDragging: p }) : void 0,
                        ...b,
                        ...(0, n.Am)(n.Kq.track.TRACK_PODCAST),
                    });
                }),
                y = (0, r.PA)((t) => {
                    let e = t.track;
                    return e.isTrackAudiobook || e.isTrackFairyTale ? (0, a.jsx)(x, { ...t }) : (0, a.jsx)(g, { ...t });
                });
        },
        96849: (t, e, i) => {
            'use strict';
            i.d(e, { useSendEventOnClipOpened: () => n });
            var a = i(16172),
                r = i(52068),
                l = i(91027),
                s = i(49574);
            let n = () => {
                let t = (0, r.st)(),
                    { hash: e } = (0, r.gf)(),
                    i = (0, s.UlF)();
                return (0, l.c)((r) => {
                    if (!t) return;
                    let l = { hash: e, pageId: a.QT.VideoScreen, mainObjectType: a.ky.Video, mainObjectId: r },
                        s = (0, a.Fx)({ params: l, logger: i, context: 'useSendEventOnClipOpened' });
                    s && (0, a.w5)(t.evgenInstance, s);
                });
            };
        },
        97409: (t) => {
            t.exports = {
                root: 'CommonTrack_root__i6shE',
                card: 'TrackUgcUpload_card__bidIG',
                important: 'TrackUgcUpload_important__RQkp0',
                playButton: 'TrackUgcUpload_playButton__3l2I7',
                meta: 'TrackUgcUpload_meta__aHQv9',
                title: 'TrackUgcUpload_title__Xq3UP',
                status: 'TrackUgcUpload_status__aFGvl',
                controls: 'TrackUgcUpload_controls__Ie2Ox',
            };
        },
        99649: (t) => {
            t.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
        99872: (t, e, i) => {
            'use strict';
            i.d(e, { useVideoModal: () => s });
            var a = i(91027),
                r = i(49574),
                l = i(94315);
            let s = () => {
                let { fullscreenVideoPlayer: t } = (0, r.Pjs)(),
                    e = (0, r.pqZ)();
                return (0, a.c)(function (i) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    t.setIds(i), t.setClipIndex(a), e((0, l.J)(i, a)), t.modal.open();
                });
            };
        },
    },
]);
