(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3759],
    {
        1456: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => f });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                d = i(21732),
                c = i(70280),
                u = i(71926),
                _ = i(41677),
                m = i(58294),
                p = i(57594),
                h = i(53514),
                x = i(85017),
                v = i(13798),
                k = i(61258),
                C = i(25649),
                g = i(24760),
                A = i(84141),
                y = i(14960),
                N = i(5856),
                P = i.n(N),
                T = i(50918),
                b = i.n(T);
            let f = (0, r.PA)((t) => {
                var e, i, r, N;
                let {
                        track: T,
                        className: f,
                        withAuthor: I = !1,
                        withSecondaryColor: j = !1,
                        withListeningProgress: D = !1,
                        captionSize: M = 'm',
                        explicitSize: E = 'xs',
                        withExplicitMark: S = !0,
                        titleContainerClassName: L,
                        textClassName: O,
                        playContextParams: R,
                        withTimeLeftText: w = !0,
                        ignoreDislikedStyles: B,
                        albumArtists: F,
                        withCustomTooltip: Y = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: H,
                        beforeTitle: $,
                        afterTitle: K,
                        withContextMenuArtists: G,
                        withArtistLink: U = !0,
                    } = t,
                    {
                        sonataState: W,
                        settings: { isMobile: q },
                    } = (0, p.g)(),
                    { formatMessage: X } = (0, n.A)(),
                    V = (0, g.$)({ withCustomTooltip: Y }),
                    Q = (0, A.O)({ track: T, withSavingQueryParams: H, entityType: x.n.AUDIOBOOK }),
                    Z = !!(D && R && T.shouldRememberPosition && T.streamProgress && T.durationMs),
                    J =
                        T.id === (null == (e = W.entityMeta) ? void 0 : e.id) &&
                        (null == (r = W.entityMeta) || null == (i = r.streamProgress) ? void 0 : i.endPositionSec),
                    tt = (0, y.d)(Z, T.streamProgress, J),
                    te = (0, o.useMemo)(() => (0, C.s)(T.artists, F), [T.artists, F, T.id]),
                    ti = te.length > 0 && I && !tt,
                    ta = (0, o.useCallback)(
                        (t) =>
                            (0, a.jsx)(c.m_, {
                                enabled: V && !q,
                                offsetOptions: 4,
                                placement: 'top',
                                text: T.title,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(u.HL, {
                                    className: P().title,
                                    type: 'entity',
                                    size: M,
                                    variant: 'span',
                                    title: V ? void 0 : T.title,
                                    ...t,
                                    children: T.title,
                                }),
                            }),
                        [q, V, M, T.title],
                    ),
                    ts = (0, o.useMemo)(() => {
                        if (T.isRemoved) return (0, a.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (T.hasTrackLink) {
                            var t;
                            return (0, a.jsx)(k.N, {
                                'aria-label': X({ id: 'entity-names.audiobook-name' }, { bookName: null == (t = T.mainAlbum) ? void 0 : t.title }),
                                className: P().albumLink,
                                href: T.url,
                                title: V ? void 0 : T.title,
                                onClick: Q,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: ta(),
                            });
                        }
                        return ta({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [T.isRemoved, T.hasTrackLink, null == (N = T.mainAlbum) ? void 0 : N.title, T.title, T.url, ta, X, V, Q]),
                    tr = (0, o.useMemo)(() => +!!z, [z]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(P().root, { [P().root_disabled]: !T.isAvailable, [P().root_disliked]: T.isDisliked && !B, [P().root_withSecondaryColor]: j }, f),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(P().metaContainer, b().metaContainer, { [b().metaContainer_oneLine]: !I }),
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(P().titleContainer, L, b().titleContainer),
                                children: [
                                    (0, a.jsxs)(u.HL, {
                                        className: (0, s.$)(P().text, O),
                                        type: 'entity',
                                        size: M,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            $,
                                            ts,
                                            !T.isRemoved &&
                                                T.version &&
                                                (0, a.jsxs)(u.HL, {
                                                    className: (0, s.$)(P().text, P().version),
                                                    type: 'entity',
                                                    size: M,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : T.version,
                                                    children: ['\xa0', T.version],
                                                }),
                                        ],
                                    }),
                                    T.explicitDisclaimer &&
                                        S &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: P().explicitMarkContainer,
                                            getDescriptionTexts: T.getDescriptionTexts,
                                            variant: T.explicitDisclaimer,
                                            className: P().explicitMark,
                                            size: E,
                                            trackId: T.id,
                                        }),
                                    K,
                                ],
                            }),
                            ti &&
                                (0, a.jsx)(u.HL, {
                                    type: 'entity',
                                    size: M,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(P().text, b().artists, O),
                                    children: (0, a.jsx)(_.i, {
                                        className: (0, s.$)(P().text, { [P().artists]: z }, O),
                                        linkClassName: (0, s.$)(P().text, P().link),
                                        captionClassName: (0, s.$)(P().text, P().artistCaption),
                                        artists: te,
                                        withLink: T.isNonUserGenerated && U,
                                        lineClamp: tr,
                                        captionSize: M,
                                        withContextMenu: G,
                                    }),
                                }),
                            Z &&
                                T.streamProgress &&
                                R &&
                                (0, a.jsx)(m.B, {
                                    className: (0, s.$)(b().progress, { [b().progress_withPreviousInfo]: ti, [b().progress_disabled]: !T.isAvailable || T.isDisliked }),
                                    id: T.id,
                                    albumId: T.albumId,
                                    streamProgress: T.streamProgress,
                                    durationMs: T.durationMs || 0,
                                    playContextParams: R,
                                    withTimeLeftText: w,
                                }),
                        ],
                    }),
                });
            });
        },
        8626: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        8677: (t, e, i) => {
            'use strict';
            i.d(e, { Q: () => O });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                d = i(16172),
                c = i(21732),
                u = i(91027),
                _ = i(82586),
                m = i(70280),
                p = i(71926),
                h = i(17705),
                x = i(63423);
            let v = (t) => {
                let { className: e, variant: i = 'text', onClick: s, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: u } = t,
                    { formatMessage: m } = (0, n.A)(),
                    p = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    h = (0, o.useCallback)(
                        (t) => {
                            null == s || s(), t.stopPropagation();
                        },
                        [s],
                    );
                return (0, a.jsx)(x.$, {
                    className: e,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, a.jsx)(_.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var k = i(71735),
                C = i(54391),
                g = i(22191),
                A = i(28999),
                y = i(57594),
                N = i(92744),
                P = i(29268),
                T = i(4008),
                b = i(53161),
                f = i(52843),
                I = i(39400),
                j = i(54714),
                D = i.n(j),
                M = i(38420),
                E = i(92565),
                S = i.n(E);
            let L = (0, r.PA)((t) => {
                    let { track: e } = t,
                        { formatMessage: i } = (0, n.A)();
                    return e.isDownloaded
                        ? (0, a.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : e.isDownloading
                          ? (0, a.jsx)(M.A, { value: e.downloadingProgress, size: 16, className: S().downloadingProgress, progressBarClassName: S().progress })
                          : null;
                }),
                O = (0, r.PA)((t) => {
                    var e, i;
                    let {
                            className: r,
                            track: x,
                            withLightning: j,
                            ignoreDislikedStyles: M,
                            onLikeClick: E,
                            utmLink: S,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: w = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: Y,
                        } = t,
                        { user: z, trailer: H } = (0, y.g)(),
                        { formatMessage: $ } = (0, n.A)(),
                        { sendLikeSearchFeedback: K } = (0, A.z)(),
                        [G, U] = (0, o.useState)(!1),
                        [W, q] = (0, o.useState)(!1),
                        X = (0, k.P)(),
                        V = (0, h.K)(x),
                        Q = (0, g.P)(Math.round((null != (i = x.durationMs) ? i : 0) / 1e3)),
                        Z = (0, C.F)(),
                        J = z.hasPlus,
                        tt = !x.isRemoved && x.isAvailable && !Y,
                        te = (0, u.c)(async () => {
                            G || x.isLiked || (U(!0), null == K || K()), await V(), null == E || E(x.isLiked);
                        }),
                        ti = (0, u.c)((t) => {
                            t.stopPropagation();
                        }),
                        ta = (0, u.c)((t) => {
                            if ((t.stopPropagation(), X())) return void t.preventDefault();
                            H.openTrackTrailer(x.id), Z(d.ky.Track, x.id);
                        }),
                        ts = (0, o.useMemo)(() => {
                            if (tt)
                                return (0, a.jsx)('div', {
                                    onClick: ti,
                                    children: (0, a.jsx)(I._, {
                                        track: x,
                                        open: W,
                                        onOpenChange: q,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: S,
                                        className: (0, s.$)(D().contextMenu, { [D().contextMenu_visible]: W }),
                                        handleRemove: R,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ti, R, W, tt, w, x, S]);
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(D().root, D().controls, r, {
                            [D().controls_dislikedControls]: x.isDisliked,
                            [D().controls_dislikedColors]: x.isDisliked && !M,
                            [D().controls_disabled]: !x.isAvailable,
                            [D().root_withSecondaryColor]: O,
                        }),
                        children: [
                            j &&
                                (0, a.jsx)(_.I, {
                                    'aria-label': $({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: D().lightning,
                                    variant: 'lightning',
                                }),
                            x.isUGC &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(_.I, {
                                            'aria-label': $({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: D().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: (0, a.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, s.$)(D().item, D().downloadIcon), children: (0, a.jsx)(L, { track: x }) }),
                            R && !Y && (0, a.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(D().item, D().removeButton), onClick: R, ariaLabel: F }),
                            tt &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(N.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, s.$)(D().item, D().likeIcon),
                                        isLiked: x.isLiked,
                                        onClick: te,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (e = x.trailer) ? void 0 : e.isAvailable) &&
                                x.isAvailable &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(P.k, {
                                        className: (0, s.$)(D().item, D().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ta,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(D().item, D().contextMenuWrapper),
                                children: [
                                    'number' == typeof x.durationMs &&
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(D().duration, { [D().duration_hidden]: W && tt }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((t) => {
                                                    let e = Math.round((t || 0) / b.k7);
                                                    return (0, f.E)(e);
                                                })(x.durationMs),
                                            }),
                                        }),
                                    ts,
                                ],
                            }),
                        ],
                    });
                });
        },
        13757: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => s, L: () => r });
            let a = (t, e) => t.getDate() === e.getDate() && t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
            var s = (function (t) {
                return (t.TODAY = 'today'), (t.YESTERDAY = 'yesterday'), (t.DATE = 'date'), (t.DATE_WITH_YEAR = 'date-with-year'), t;
            })({});
            let r = (t) => {
                let e = new Date();
                if (a(e, t)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), a(i, t)) ? 'yesterday' : e.getFullYear() !== t.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        14858: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => o });
            var a = i(60900),
                s = i(57594),
                r = i(79406);
            let o = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: e } = (0, a.A)(),
                    { user: i, experiments: o } = (0, s.g)(),
                    n = 'ru' === i.account.data.userSessionRegionIso && o.checkExperiment(r.z.WebNextFooterDisclaimer, 'on'),
                    l = e(t ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return n ? e({ id: 'footer.disclaimer-content' }) : l;
            };
        },
        14960: (t, e, i) => {
            'use strict';
            i.d(e, { d: () => s });
            var a = i(57594);
            let s = (t, e, i) => {
                let {
                    settings: { isMobile: s },
                } = (0, a.g)();
                return !!(s && t && (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) || (null == e ? void 0 : e.hasEverFinished) || (i && i > 0)));
            };
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
        27616: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => E });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21916),
                n = i(55178),
                l = i(60900),
                d = i(39407),
                c = i(81354),
                u = i(21732),
                _ = i(91027),
                m = i(6752),
                p = i(70280),
                h = i(71926),
                x = i(58294),
                v = i(13757),
                k = i(19383),
                C = i(84062),
                g = i(57594),
                A = i(53514),
                y = i(85017),
                N = i(13798),
                P = i(61258),
                T = i(24760),
                b = i(84141),
                f = i(14960),
                I = i(5856),
                j = i.n(I),
                D = i(21878),
                M = i.n(D);
            let E = (0, r.PA)((t) => {
                var e, i, r, I, D, E;
                let {
                        track: S,
                        className: L,
                        withPodcastName: O = !1,
                        withDate: R = !0,
                        withSecondaryColor: w = !1,
                        withListeningProgress: B = !1,
                        captionSize: F = 'm',
                        explicitSize: Y = 'xs',
                        withExplicitMark: z = !0,
                        titleContainerClassName: H,
                        textClassName: $,
                        playContextParams: K,
                        withTimeLeftText: G = !0,
                        ignoreDislikedStyles: U,
                        withCustomTooltip: W = !0,
                        withSavingQueryParams: q,
                        beforeTitle: X,
                        afterTitle: V,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: Z,
                        progressClassName: J,
                        withAlbumTitleLink: tt = !0,
                    } = t,
                    {
                        fullscreenPlayer: te,
                        sonataState: ti,
                        settings: { isMobile: ta },
                    } = (0, g.g)(),
                    { formatMessage: ts } = (0, l.A)(),
                    tr = (0, T.$)({ withCustomTooltip: W }),
                    to = (0, o.useSearchParams)(),
                    tn = S.getUrl(q ? Object.fromEntries(to) : void 0),
                    tl = S.pubDate ? new Date(S.pubDate) : new Date(),
                    td = (0, v.L)(tl),
                    tc = !1,
                    tu = (0, C.Z)(null != (D = null == (e = S.mainAlbum) ? void 0 : e.url) ? D : ''),
                    t_ = (0, n.useMemo)(() => {
                        var t;
                        let e = ts({ id: 'entity-names.podcast-name' }, { podcastName: S.title });
                        return ''.concat(e, ' ').concat(null != (t = S.version) ? t : '');
                    }, [ts, S.title, S.version]),
                    tm = !!(B && K && S.shouldRememberPosition && S.streamProgress && S.durationMs),
                    tp =
                        S.id === (null == (i = ti.entityMeta) ? void 0 : i.id) &&
                        (null == (I = ti.entityMeta) || null == (r = I.streamProgress) ? void 0 : r.endPositionSec),
                    th = (0, f.d)(tm, S.streamProgress, tp),
                    tx = S.mainAlbum && O && !th,
                    tv = S.pubDate && R && !th,
                    tk = (0, k.l)({ entity: null != (E = S.mainAlbum) ? E : null, entityType: y.n.PODCAST, callback: tu }),
                    tC = (0, _.c)((t) => {
                        te.modal.isOpened && te.modal.close(), tk(t);
                    }),
                    tg = (0, b.O)({ track: S, withSavingQueryParams: q, entityType: y.n.PODCAST }),
                    tA = (0, n.useCallback)(() => {
                        switch (td) {
                            case v.r.TODAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case v.r.YESTERDAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case v.r.DATE_WITH_YEAR:
                                return (0, a.jsx)(c.XU, { value: S.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, a.jsx)(c.XU, { value: S.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [S.pubDate, td]);
                S.pubDate && R && (tc = [v.r.TODAY, v.r.YESTERDAY].includes(td));
                let ty = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(p.m_, {
                                enabled: tr && !ta,
                                offsetOptions: 4,
                                placement: 'top',
                                text: S.title,
                                hoverSettings: A.V,
                                children: (0, a.jsx)(h.HL, {
                                    className: j().title,
                                    type: 'entity',
                                    size: F,
                                    variant: 'span',
                                    title: tr ? void 0 : S.title,
                                    ...t,
                                    children: S.title,
                                }),
                            }),
                        [ta, tr, F, S.title],
                    ),
                    tN = (0, n.useMemo)(
                        () =>
                            S.isRemoved
                                ? (0, a.jsx)(p.m_, {
                                      enabled: tr && !ta,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ts({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: A.V,
                                      children: (0, a.jsx)('span', { children: (0, a.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : S.hasTrackLink
                                  ? (0, a.jsx)(P.N, {
                                        onClick: tg,
                                        className: j().albumLink,
                                        href: tn,
                                        'aria-label': t_,
                                        title: tr ? void 0 : S.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: ty(),
                                    })
                                  : ty({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [ta, S.isRemoved, S.hasTrackLink, S.title, ty, tr, ts, tg, tn, t_],
                    ),
                    tP = (0, m.L)(() => {
                        var t;
                        if (!tx) return;
                        let e = (0, a.jsx)(p.m_, {
                            enabled: tr && !ta,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S.mainAlbum.title,
                            hoverSettings: A.V,
                            children: (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: F, className: j().albumTitle, children: S.mainAlbum.title }),
                        });
                        return tt
                            ? (0, a.jsx)(P.N, {
                                  'aria-label': ts({ id: 'entity-names.podcast-name' }, { podcastName: S.mainAlbum.title }),
                                  className: j().link,
                                  href: null == (t = S.mainAlbum) ? void 0 : t.url,
                                  title: tr ? void 0 : S.mainAlbum.title,
                                  onClick: tC,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: e,
                              })
                            : (0, a.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: e });
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(j().root, { [j().root_disabled]: !S.isAvailable, [j().root_disliked]: S.isDisliked && !U, [j().root_withSecondaryColor]: w }, L),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(j().metaContainer, M().podcastMetaContainer, Z),
                        children: [
                            tm &&
                                K &&
                                S.streamProgress &&
                                (0, a.jsx)(x.B, {
                                    className: (0, s.$)(M().progress, J, {
                                        [M().progress_withPreviousInfo]: tx || tv,
                                        [M().progress_disabled]: !S.isAvailable || S.isDisliked,
                                    }),
                                    id: S.id,
                                    albumId: S.albumId,
                                    streamProgress: S.streamProgress,
                                    durationMs: S.durationMs || 0,
                                    playContextParams: K,
                                    withTimeLeftText: G,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(j().titleContainer, H, M().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(h.HL, {
                                        className: (0, s.$)(j().text, $),
                                        type: 'entity',
                                        size: F,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            X,
                                            tN,
                                            !S.isRemoved &&
                                                S.version &&
                                                (0, a.jsxs)(h.HL, {
                                                    className: (0, s.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: F,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: tr ? void 0 : S.version,
                                                    children: ['\xa0', S.version],
                                                }),
                                        ],
                                    }),
                                    S.explicitDisclaimer &&
                                        z &&
                                        (0, a.jsx)(N.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: S.getDescriptionTexts,
                                            variant: S.explicitDisclaimer,
                                            className: j().explicitMark,
                                            size: Y,
                                            trackId: S.id,
                                        }),
                                    V,
                                ],
                            }),
                            (tx || tv) &&
                                (0, a.jsxs)(h.HL, {
                                    type: 'entity',
                                    size: F,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(j().text, M().podcastName, $),
                                    children: [
                                        tP,
                                        tv &&
                                            (0, a.jsx)(h.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: F,
                                                className: (0, s.$)({
                                                    [M().dateWithName]: tx,
                                                    [M().soonDate]: tc,
                                                    [M().dateDisabled]: !S.isAvailable,
                                                    [M().dateDisliked]: S.isDisliked && !U,
                                                }),
                                                children: tA(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        31010: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => r });
            var a = i(55178);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        32468: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => o });
            var a = i(32290),
                s = i(77088),
                r = i.n(s);
            let o = (t) => {
                let { children: e } = t;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        34223: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => h });
            var a = i(32290),
                s = i(98350),
                r = i(63618),
                o = i(55178),
                n = i(60900),
                l = i(79856),
                d = i(91063),
                c = i.n(d);
            let u = (t) => {
                let { isActive: e, className: i } = t,
                    { formatMessage: s } = (0, n.A)(),
                    d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, a.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(c().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: c().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: c().coverContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: c().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: e, className: c().action, radius: 'l' }),
                    ],
                });
            };
            var _ = i(89661),
                m = i.n(_);
            let p = (t) => {
                    let { isActive: e, className: i } = t,
                        { formatMessage: s } = (0, n.A)(),
                        d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, a.jsxs)('div', {
                        'aria-label': d,
                        'aria-live': e ? 'polite' : 'off',
                        'aria-busy': e,
                        className: (0, r.$)(m().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: e, className: m().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: m().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: e, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                h = (t) => {
                    let { isActive: e, variant: i, className: r } = t;
                    switch (i) {
                        case s.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: e, className: r });
                        case s.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: e, className: r });
                    }
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
        43565: (t, e, i) => {
            'use strict';
            i.d(e, { O: () => l });
            var a = i(32290),
                s = i(63618),
                r = i(82586),
                o = i(20753),
                n = i.n(o);
            let l = (t) => {
                let { isDragging: e, className: i } = t;
                return (0, a.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(n().root, { [n().root_active]: e }, i), 'aria-hidden': !0 });
            };
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
        54171: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var a = i(19383),
                s = i(85017);
            let r = (t) => {
                let { track: e, callback: i, disclaimerRejectHandler: r } = t;
                return (0, a.l)({ entity: e, entityType: s.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
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
        58054: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => A });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(60900),
                n = i(39407),
                l = i(21732),
                d = i(71926),
                c = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                p = i(57594),
                h = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let x = (t, e, i) => {
                switch (t) {
                    case h.YANDEX:
                        if ('ru' === e) return 'https://ya.ru';
                        return;
                    case h.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                    case h.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case h.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case h.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case h.HELP:
                        return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                    case h.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                k = i(77088),
                C = i.n(k);
            let g = (0, r.PA)((t) => {
                    let { className: e } = t,
                        { location: i } = (0, p.g)(),
                        { formatDate: r } = (0, o.A)(),
                        { language: c } = (0, m.h)();
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': l.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(d.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    r(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, a.jsx)(v.N, {
                                        target: '_blank',
                                        href: x(h.YANDEX, i.tld, c),
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': l.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, a.jsx)(n.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(v.N, {
                                target: '_blank',
                                href: x(h.YANDEX_PROJECTS, i.tld, c),
                                className: C().copyrightLink,
                                'data-test-id': l.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, a.jsx)(n.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                A = (0, r.PA)((t) => {
                    var e;
                    let { className: i } = t,
                        { user: r, location: o } = (0, p.g)(),
                        { isEnabled: u } = null != (e = (0, _.P)()) ? e : {},
                        { language: k } = (0, m.h)(),
                        A = (0, c.w)(!0),
                        y = ((t) => {
                            let { platform: e, tld: i, language: s, userRegion: r } = t,
                                o = { title: (0, a.jsx)(n.A, { id: 'footer.links-copyright-holders' }), url: x(h.COPYRIGHT_HOLDER, i, s) },
                                l = { title: (0, a.jsx)(n.A, { id: 'footer.links-privacy-policy' }), url: x(h.PRIVACY_POLICY, i, s) },
                                d = { title: (0, a.jsx)(n.A, { id: 'footer.links-terms' }), url: x(h.AGREEMENT, i, s) },
                                c = { title: (0, a.jsx)(n.A, { id: 'footer.links-recommendation-rules' }), url: x(h.RECOMMENDATION_RULES, i, s) },
                                u = { title: (0, a.jsx)(n.A, { id: 'footer.links-help' }), url: x(h.HELP, i, s) };
                            switch (e) {
                                case 'spa':
                                case 'web': {
                                    let t = [o, d, c];
                                    return 'ru' === r && t.push(l), t.push(u), t;
                                }
                                case 'desktop':
                                    return [o, d, c, u];
                            }
                        })({ platform: 'desktop', tld: o.tld, language: k, userRegion: r.account.data.userSessionRegionIso });
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, { [C().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': l.S7.FOOTER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: C().links,
                                children: [
                                    (0, a.jsx)('ol', {
                                        className: C().list,
                                        'data-test-id': l.S7.FOOTER_LINKS_LIST,
                                        children: y.map((t) => {
                                            let { title: e, url: i } = t;
                                            return (0, a.jsx)(
                                                'li',
                                                {
                                                    className: C().item,
                                                    children: (0, a.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: C().link,
                                                        'data-test-id': l.S7.FOOTER_LINK,
                                                        children: e,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, a.jsx)(d.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: C().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: A },
                                        'data-test-id': l.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(g, {}),
                        ],
                    });
                });
        },
        58294: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => g });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(39407),
                l = i(21732),
                d = i(74924),
                c = i(82586),
                u = i(71926),
                _ = i(72676),
                m = i(90169),
                p = i(44128),
                h = i(57594),
                x = i(83557),
                v = i(66436),
                k = i(95082),
                C = i.n(k);
            let g = (0, r.PA)((t) => {
                var e, i, r, k, g, A, y, N, P;
                let { className: T, id: b, albumId: f, streamProgress: I, durationMs: j, playContextParams: D, withTimeLeftText: M = !0, isFinishedLabelHidden: E } = t,
                    S = (0, p.e)(),
                    { sonataState: L, album: O } = (0, h.g)(),
                    R = Math.floor(j / 1e3),
                    [w, B] = (0, o.useState)(!1),
                    F = (0, v.$)(),
                    { isPlaying: Y, isCurrent: z } = (0, m.D)({ playContextParams: D, entityId: f ? ''.concat(b, ':').concat(f) : b });
                (0, o.useEffect)(() => {
                    if (!z) return void B(!1);
                    let t =
                        null == S
                            ? void 0
                            : S.state.playerState.status.onChange(() => {
                                  (null == S ? void 0 : S.state.playerState.status.value) === _.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == t || t();
                    };
                }, [S, I, z, Y]),
                    (0, o.useEffect)(() => {
                        var t;
                        (null == O || null == (t = O.meta) ? void 0 : t.listeningFinished)
                            ? (I.updateEndPositionSec(0), I.updateEverFinished(!0))
                            : (null == O ? void 0 : O.allTracksUnfinished) && I.updateEverFinished(!1);
                    }, [I, null == O ? void 0 : O.allTracksUnfinished, null == O || null == (e = O.meta) ? void 0 : e.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var t, e;
                        z &&
                            (null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                            I &&
                            L.entityMeta.streamProgress.hasEverFinished !== I.hasEverFinished &&
                            I.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            R - ((null == I ? void 0 : I.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == I || I.updateEverFinished(!0));
                    }, [
                        z,
                        null == L || null == (i = L.entityMeta) ? void 0 : i.streamProgress,
                        null == L || null == (k = L.entityMeta) || null == (r = k.streamProgress) ? void 0 : r.hasEverFinished,
                        I,
                        I.hasEverFinished,
                        I.endPositionSec,
                        R,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!z) return;
                        let t =
                            null == S
                                ? void 0
                                : S.state.playerState.progress.onChange(() => {
                                      var t;
                                      let e = S.state.playerState.progress.value,
                                          i = null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress;
                                      0 !== e.position && w && I.updateEndPositionSec(e.position),
                                          z &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(e.position), 10) &&
                                              (null == i || i.updateEndPositionSec(e.position));
                                  });
                        return () => {
                            null == t || t();
                        };
                    }, [S, I, z, Y, w, b, null == L ? void 0 : L.entityMeta]);
                let H = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || I.endPositionSec,
                    $ = (0, x.m)(null != H ? H : 0, R),
                    K = (0, o.useMemo)(() => {
                        var t, e, i;
                        if (
                            ((z && (null == L || null == (e = L.entityMeta) || null == (t = e.streamProgress) ? void 0 : t.hasEverFinished)) ||
                                (null == I ? void 0 : I.hasEverFinished) ||
                                (null == O || null == (i = O.meta) ? void 0 : i.listeningFinished)) &&
                            !E
                        )
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !M }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, a.jsx)(n.A, { id: 'time.finished' }),
                                    }),
                                    (0, a.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: C().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!H || 0 === H) return;
                        let r = R - H,
                            o = F(r);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !M }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                r > 1 || E
                                    ? (0, a.jsx)(d.q, {
                                          'aria-valuetext': $,
                                          'aria-busy': z && Y,
                                          value: H,
                                          max: R,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, a.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: C().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        R,
                        null == I ? void 0 : I.hasEverFinished,
                        M,
                        F,
                        z,
                        Y,
                        null == L || null == (N = L.entityMeta) || null == (y = N.streamProgress) ? void 0 : y.hasEverFinished,
                        null == O || null == (P = O.meta) ? void 0 : P.listeningFinished,
                        E,
                        H,
                        $,
                    ]);
                return (0, a.jsx)('div', { className: (0, s.$)(C().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: K });
            });
        },
        62134: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => a });
            var a = (function (t) {
                return (t.ALBUM = 'album'), (t.PLAYLIST = 'playlist'), t;
            })({});
        },
        66436: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var a = i(55178),
                s = i(60900);
            let r = () => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.useCallback)(
                    function (e) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            a = Math.floor(e / 60),
                            s = function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.minutes-left' }, { minutes: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            };
                        if (e < 1) return t({ id: 'time.finished' });
                        if (e < 60)
                            return (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.seconds-left' }, { seconds: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            })(Math.floor(e), i);
                        if (a < 60) return s(a, i);
                        let r = Math.floor(a / 60),
                            o = a % 60,
                            n = (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? t({ id: 'time.hours-left' }, { hours: e }) : t({ id: 'time.hours' }, { hours: e });
                            })(r, i);
                        return o > 0 ? ''.concat(n, ' ').concat(s(o)) : n;
                    },
                    [t],
                );
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
        77088: (t) => {
            t.exports = {
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
        83521: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21732),
                n = i(99902),
                l = i(71926),
                d = i(57594),
                c = i(90326),
                u = i(80195),
                _ = i(34783),
                m = i.n(_);
            let p = (0, r.PA)((t) => {
                let { className: e, track: i, position: r, onPlayButtonClick: _, isPlaying: p, isCurrent: h, withDislikeStyles: x = !0, isLoading: v } = t,
                    {
                        settings: { isMobile: k },
                    } = (0, d.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(e, m().root, {
                        [m().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: i.isDisliked && x,
                        [m().root_current]: h,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !v && (0, a.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    v && k && (0, a.jsx)(n.y, { size: 'xs', className: m().spinner }),
                                    !k &&
                                        (0, a.jsx)(c.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        r &&
                            (0, a.jsx)(l.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': o.Kq.track.TRACK_POSITION,
                                children: r,
                            }),
                    ],
                });
            });
        },
        83557: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            var a = i(60900),
                s = i(29913);
            let r = (t, e) => {
                let { formatMessage: i } = (0, a.A)(),
                    { hours: r, minutes: o, seconds: n } = (0, s.e)(t),
                    { hours: l, minutes: d, seconds: c } = (0, s.e)(e);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((t / e) * 100), beginHours: r, beginMinutes: o, beginSeconds: n, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        89661: (t) => {
            t.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        91063: (t) => {
            t.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        92102: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => y });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(91027),
                l = i(58359),
                d = i(71735),
                c = i(2969),
                u = i(23352),
                _ = i(46200),
                m = i(5537),
                p = i(28999),
                h = i(72676),
                x = i(57594),
                v = i(1444),
                k = i(60900),
                C = i(54171),
                g = i(35587),
                A = i.n(g);
            let y = (0, r.PA)((t) => {
                var e;
                let {
                        className: i,
                        track: r,
                        meta: g,
                        beforeBlock: y,
                        controls: N,
                        playButtonCellRender: P,
                        withLightning: T,
                        isPlaying: b,
                        isCurrent: f,
                        togglePlay: I,
                        restartPlay: j,
                        onPlayClick: D,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: E = !1,
                        ...S
                    } = t,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: O } = (0, _.q)(),
                    {
                        track: R,
                        fullscreenPlayer: w,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: Y },
                        paywall: { modal: z },
                    } = (0, x.g)(),
                    { ref: H, intersectionPropertyId: $ } = (0, u.n)(),
                    K = (0, c.b)(),
                    G = (0, d.P)(),
                    U = ((t) => {
                        let { track: e, withLightning: i } = t,
                            { formatMessage: a } = (0, k.A)();
                        return e.isAvailable
                            ? [e.artistsNames, e.title, e.version, i && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(e.artistsNames, ' ')
                                  .concat(e.title);
                    })({ withLightning: T, track: r }),
                    W = ((t) => {
                        let { sonataState: e } = (0, x.g)(),
                            i = e.status === h.MT.LOADING_MEDIA_SOURCE || e.status === h.MT.BUFFERING;
                        if (t && e.entityMeta) {
                            let a = e.entityMeta.entityId;
                            return i && a === t;
                        }
                        return i;
                    })(r.entityId),
                    q = Y(F.id, null == (e = F.meta) ? void 0 : e.isNonMusic),
                    X = r.isAvailable && L && !q,
                    V = (0, m.N)(),
                    Q = r.isAvailable && V && !q && !E,
                    Z = (0, C.w)({ track: r, callback: I }),
                    J = (0, n.c)(() => {
                        R.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    tt = (0, C.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: te } = (0, p.z)(),
                    [ti, ta] = (0, o.useState)(!1),
                    ts = (0, n.c)(() => {
                        if (!G()) {
                            if (X) return void O();
                            if (Q) return void z.open();
                            ti || b || (ta(!0), null == te || te()), Z(), K(!b), null == D || D(!b);
                        }
                    }),
                    tr = (0, n.c)(() => {
                        if (b) return void j();
                        ts();
                    }),
                    to = (0, n.c)((t) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            L && r.isAvailableOnlyForPlus && O(), V && r.isAvailableOnlyForPlus && z.open();
                            return;
                        }
                        if (X) return void O();
                        let e = !B && (2 === t.detail || (1 === t.detail && r.hasTrackLink && !w.modal.isOpened));
                        return Q && !e
                            ? void z.open()
                            : ((0, l.P)(t, A().ripple), B)
                              ? void ts()
                              : 2 === t.detail
                                ? void tr()
                                : void (1 === t.detail && r.hasTrackLink && !w.modal.isOpened && (tt(), Q && z.open()));
                    }),
                    tn = null == P ? void 0 : P({ onPlayButtonClick: ts, isPlaying: b, isCurrent: f, isLoading: W, playButtonIconSize: M });
                return (0, a.jsxs)(v.C, {
                    ref: H,
                    'aria-label': U,
                    'data-intersection-property-id': $,
                    onClick: to,
                    className: (0, s.$)(A().root, { [A().root_disabled]: !r.isAvailable, [A().root_current]: f && B }, i),
                    ...S,
                    children: [y, tn, g, N],
                });
            });
        },
        92565: (t) => {
            t.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94631: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => y });
            var a = i(32290),
                s = i(96103),
                r = i(63618),
                o = i(55178),
                n = i(21732),
                l = i(90169),
                d = i(57594),
                c = i(40229),
                u = i(43565),
                _ = i(8677),
                m = i(1456),
                p = i(83521),
                h = i(92102),
                x = i(73585),
                v = i.n(x),
                k = i(62134);
            let C = (0, s.PA)((t) => {
                let {
                        track: e,
                        playContextParams: i,
                        className: s,
                        withDNDBlock: x,
                        isDragging: C,
                        draggingClassName: g,
                        withTimeLeftText: A,
                        ignoreDislikedStyles: y,
                        viewType: N = k.D.PLAYLIST,
                        position: P,
                        beforeTitle: T,
                        handleRemove: b,
                        removeButtonAriaLabel: f,
                    } = t,
                    I = (0, l.D)({ playContextParams: i, entityId: e.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, d.g)(),
                    D = (0, o.useCallback)(
                        (t) =>
                            N === k.D.ALBUM
                                ? (0, a.jsx)(p.G, { track: e, position: P, className: v().playButtonCell, ...t })
                                : (0, a.jsx)(c.q, {
                                      isAvailable: e.isAvailable,
                                      isDisliked: e.isDisliked,
                                      coverUri: e.coverUri,
                                      title: e.title,
                                      className: v().playButtonCell,
                                      ignoreDislikedStyles: y,
                                      radius: 'xs',
                                      ...t,
                                  }),
                        [y, P, N, e],
                    );
                return (0, a.jsx)(h.C, {
                    className: (0, r.$)(s, { [v().trackWithDots]: x, [v().important]: x }),
                    track: e,
                    meta: (0, a.jsx)(m.Z, {
                        beforeTitle: T,
                        withAuthor: N === k.D.PLAYLIST,
                        explicitSize: 'xxxs',
                        track: e,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: A,
                        ignoreDislikedStyles: y,
                        withSavingQueryParams: !0,
                        withArtistLink: !j,
                    }),
                    playButtonCellRender: D,
                    controls: (0, a.jsx)(_.Q, {
                        track: e,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: i.contextData.utmLink,
                        handleRemove: b,
                        removeButtonAriaLabel: f,
                    }),
                    beforeBlock: x ? (0, a.jsx)(u.O, { className: (0, r.$)(v().dots, g), isDragging: C }) : void 0,
                    ...I,
                    'data-test-id': n.Kq.track.TRACK_AUDIOBOOK,
                });
            });
            var g = i(27616);
            let A = (0, s.PA)((t) => {
                    let {
                            track: e,
                            playContextParams: i,
                            withPodcastName: s = !1,
                            className: m,
                            withDNDBlock: p,
                            isDragging: x,
                            draggingClassName: k,
                            handleRemove: C,
                            withTimeLeftText: A,
                            ignoreDislikedStyles: y,
                            beforeTitle: N,
                            removeButtonAriaLabel: P,
                        } = t,
                        T = (0, l.D)({ playContextParams: i, entityId: e.entityId }),
                        {
                            settings: { isMobile: b },
                        } = (0, d.g)(),
                        f = (0, o.useCallback)(
                            (t) =>
                                (0, a.jsx)(c.q, {
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
                    return (0, a.jsx)(h.C, {
                        className: (0, r.$)(m, { [v().trackWithDots]: p, [v().important]: p }),
                        track: e,
                        meta: (0, a.jsx)(g.w, {
                            beforeTitle: N,
                            track: e,
                            playContextParams: i,
                            withPodcastName: s,
                            withListeningProgress: !0,
                            withTimeLeftText: A,
                            ignoreDislikedStyles: y,
                            explicitSize: 'xxxs',
                            withAlbumTitleLink: !b,
                        }),
                        playButtonCellRender: f,
                        controls: (0, a.jsx)(_.Q, {
                            handleRemove: C,
                            track: e,
                            className: v().controlsBarCell,
                            ignoreDislikedStyles: y,
                            utmLink: i.contextData.utmLink,
                            removeButtonAriaLabel: P,
                        }),
                        beforeBlock: p ? (0, a.jsx)(u.O, { className: (0, r.$)(v().dots, k), isDragging: x }) : void 0,
                        ...T,
                        'data-test-id': n.Kq.track.TRACK_PODCAST,
                    });
                }),
                y = (0, s.PA)((t) => {
                    let e = t.track;
                    return e.isTrackAudiobook || e.isTrackFairyTale ? (0, a.jsx)(C, { ...t }) : (0, a.jsx)(A, { ...t });
                });
        },
        95082: (t) => {
            t.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        98350: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => a });
            var a = (function (t) {
                return (t.PLAYLIST = 'playlist'), (t.ALBUM = 'album'), t;
            })({});
        },
    },
]);
