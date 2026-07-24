(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3737],
    {
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var s = i(21916),
                a = i(55178);
            let r = (e) => {
                let t = (0, s.usePathname)(),
                    [i, r] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, i, t]);
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var s = i(32290),
                a = i(55178),
                r = i(21732),
                n = i(71926),
                o = i(91624),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        8677: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => E });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(16172),
                d = i(21732),
                m = i(91027),
                u = i(82586),
                _ = i(70280),
                p = i(71926),
                h = i(17705),
                x = i(63423);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: r, iconSize: l, size: c = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, n.useCallback)(
                        (e) => {
                            null == a || a(), e.stopPropagation();
                        },
                        [a],
                    );
                return (0, s.jsx)(x.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, s.jsx)(u.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var C = i(71735),
                k = i(54391),
                A = i(22191),
                g = i(28999),
                b = i(57594),
                f = i(92744),
                T = i(29268),
                N = i(4008),
                j = i(53161),
                w = i(52843),
                I = i(39400),
                y = i(54714),
                S = i.n(y),
                R = i(38420),
                O = i(92565),
                P = i.n(O);
            let M = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, s.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, s.jsx)(R.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                E = (0, r.PA)((e) => {
                    var t, i;
                    let {
                            className: r,
                            track: x,
                            withLightning: y,
                            ignoreDislikedStyles: R,
                            onLikeClick: O,
                            utmLink: P,
                            withSecondaryColor: E,
                            handleRemove: L,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: z,
                            hideControls: W,
                        } = e,
                        { user: U, trailer: $ } = (0, b.g)(),
                        { formatMessage: H } = (0, o.A)(),
                        { sendLikeSearchFeedback: K } = (0, g.z)(),
                        [Y, F] = (0, n.useState)(!1),
                        [V, G] = (0, n.useState)(!1),
                        q = (0, C.P)(),
                        X = (0, h.K)(x),
                        Q = (0, A.P)(Math.round((null != (i = x.durationMs) ? i : 0) / 1e3)),
                        Z = (0, k.F)(),
                        J = U.hasPlus,
                        ee = !x.isRemoved && x.isAvailable && !W,
                        et = (0, m.c)(async () => {
                            Y || x.isLiked || (F(!0), null == K || K()), await X(), null == O || O(x.isLiked);
                        }),
                        ei = (0, m.c)((e) => {
                            e.stopPropagation();
                        }),
                        es = (0, m.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            $.openTrackTrailer(x.id), Z(c.ky.Track, x.id);
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, s.jsx)('div', {
                                    onClick: ei,
                                    children: (0, s.jsx)(I._, {
                                        track: x,
                                        open: V,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, s.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: V }),
                                        handleRemove: L,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, L, V, ee, D, x, P]);
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, r, {
                            [S().controls_dislikedControls]: x.isDisliked,
                            [S().controls_dislikedColors]: x.isDisliked && !R,
                            [S().controls_disabled]: !x.isAvailable,
                            [S().root_withSecondaryColor]: E,
                        }),
                        children: [
                            y &&
                                (0, s.jsx)(u.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            x.isUGC &&
                                (0, s.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, s.jsx)(u.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, s.jsx)(_.ZI, { children: (0, s.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            J && (0, s.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, s.jsx)(M, { track: x }) }),
                            L && !W && (0, s.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: L, ariaLabel: z }),
                            ee &&
                                (0, s.jsx)(N.WithOffline, {
                                    fallback: (0, s.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: x.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = x.trailer) ? void 0 : t.isAvailable) &&
                                x.isAvailable &&
                                (0, s.jsx)(N.WithOffline, {
                                    fallback: (0, s.jsx)(T.k, {
                                        className: (0, a.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: es,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    'number' == typeof x.durationMs &&
                                        (0, s.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: V && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, s.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / j.k7);
                                                    return (0, w.E)(t);
                                                })(x.durationMs),
                                            }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => v });
            var s = i(55178),
                a = i(16172),
                r = i(52068),
                n = i(6752),
                o = i(62376),
                l = i(1677),
                c = i(48922),
                d = i(84782),
                m = i(30915),
                u = i(18746),
                _ = i(2792),
                p = i(37240),
                h = i(51012),
                x = i(47498);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, r.st)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: v, displayReasonId: C } = (0, p.$)(),
                    { tabId: k, tabPos: A, isTabSelectedByDefault: g } = (0, x.R)(),
                    { offsetBlockPosY: b } = (0, m.u)(),
                    { blockType: f, blockId: T, blockPosX: N, blockPosY: j, mainObjectId: w, mainObjectType: I, displayReasonId: y } = (0, d.N)(),
                    { filterKey: S, filterValue: R, filterPos: O } = (0, u.G)(),
                    { objectType: P, objectsCount: M, objectId: E, objectPosX: L, objectPosY: D } = (0, _.J)(),
                    { skeleton: B } = (0, h.b)(),
                    z = null != y ? y : C,
                    W = (0, n.L)(() => (void 0 !== b && void 0 !== j ? b + j : j));
                return (0, s.useCallback)(
                    (s, r) => {
                        if (!t || !v || !c.xK.includes(v) || !c.fD.includes(v)) return;
                        let n = l.F[v];
                        if (!n) return;
                        let o = {
                            hash: i,
                            pageId: n,
                            entityType: f,
                            entityId: T,
                            entityPosX: N,
                            entityPosY: W,
                            objectsCount: M,
                            viewUuid: r,
                            objectType: P,
                            objectId: E,
                            objectPosX: L,
                            objectPosY: D,
                        };
                        void 0 !== S && ((o.filterKey = S), (o.filterValue = R), (o.filterPos = O)),
                            c.qG.includes(v) && ((o.tabId = k), (o.tabPos = A), (o.isTabSelectedByDefault = g)),
                            B && (o.skeletonId = B),
                            'string' == typeof w && 'string' == typeof I && ((o.mainObjectType = I), (o.mainObjectId = w)),
                            z && (o.displayReasonId = z);
                        let d = (0, a.Fx)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (s ? (0, a.Pf)(t.evgenInstance, d) : (0, a.nv)(t.evgenInstance, d));
                    },
                    [t, z, T, N, W, f, S, O, R, i, g, e, w, I, E, L, D, P, M, v, B, k, A],
                );
            };
        },
        13365: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { _: () => s }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(s || (s = {}));
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => x });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(26252),
                c = i(21732),
                d = i(6752),
                m = i(82586),
                u = i(57594),
                _ = i(60244),
                p = i(90006),
                h = i.n(p);
            let x = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: p, variant: x, size: v = 'xxxs', ...C } = e,
                    { formatMessage: k } = (0, o.A)(),
                    {
                        settings: { isMobile: A },
                    } = (0, u.g)(),
                    [g, b] = (0, n.useState)(null),
                    f = (0, d.L)(() => {
                        switch (x) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, n.useMemo)(() => k({ id: 'extra-explicit.explicit-mark' }), [k]);
                (0, n.useEffect)(() => {
                    i && i().then(b);
                }, [i, r]);
                let N = (null == g ? void 0 : g.join('\n')) || '',
                    j = !!(null == g ? void 0 : g.length) && !A,
                    w = N.length > 0 ? N : T;
                return (0, s.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children: (0, s.jsx)(m.I, {
                            className: (0, a.$)(h().explicitMark, t),
                            'aria-label': w,
                            variant: f,
                            size: v,
                            ...C,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14631: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var s = i(32290),
                a = i(96103),
                r = i(55178),
                n = i(21732),
                o = i(73749),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                m = i(8677),
                u = i(68912),
                _ = i(92102),
                p = i(16409),
                h = i.n(p);
            let x = (0, a.PA)((e) => {
                var t, i;
                let { track: a, playContextParams: p } = e,
                    x = (0, l.D)({ playContextParams: p, entityId: a.entityId }),
                    {
                        settings: { isMobile: v },
                    } = (0, c.g)(),
                    C = (0, r.useCallback)(
                        (e) =>
                            (0, s.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: h().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    );
                return (0, s.jsx)(_.C, {
                    track: a,
                    meta: (0, s.jsx)(u.j, { withArtistLink: !v, track: a }),
                    beforeBlock: (0, s.jsx)(o.t, {
                        withIcon: !0,
                        className: h().chartCell,
                        progress: null == (t = a.chart) ? void 0 : t.progress,
                        position: null == (i = a.chart) ? void 0 : i.position,
                        isDisliked: a.isDisliked,
                        isDisabled: !a.isAvailable,
                    }),
                    playButtonCellRender: C,
                    controls: (0, s.jsx)(m.Q, { track: a, className: h().controlsBarCell }),
                    ...x,
                    'data-test-id': n.Kq.track.TRACK_CHART,
                });
            });
        },
        15181: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => p });
            var s = i(32290),
                a = i(63618),
                r = i(82586),
                n = i(79856),
                o = i(47977),
                l = i.n(o);
            let c = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(l().root, i),
                    children: [
                        (0, s.jsx)(n.W, { isActive: t, className: (0, a.$)(l().position, l().positionShimmer), radius: 'l' }),
                        (0, s.jsx)(r.I, { 'aria-hidden': !0, variant: 'chartSame', size: 'xxs', className: (0, a.$)(l().progress, l().progress_same) }),
                    ],
                });
            };
            var d = i(98350),
                m = i(34223),
                u = i(56772),
                _ = i.n(u);
            let p = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(_().chartTrackShimmer, i),
                    children: [
                        (0, s.jsx)(c, { isActive: t, className: _().chartCell }),
                        (0, s.jsx)(m.D, { isActive: t, className: _().trackShimmer, variant: d.X.PLAYLIST }),
                    ],
                });
            };
        },
        16409: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19564: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 55646)), Promise.resolve().then(i.bind(i, 25023));
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(32290),
                a = i(55178),
                r = i(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l }), [t, i, n, o, l]);
                return (0, s.jsx)(r.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(55178),
                a = i(12989),
                r = i(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, s.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, s.useId)(),
                    c = (0, s.useContext)(r.B),
                    d = (0, s.useCallback)(
                        (s, a) => {
                            e ? e(s, i ? a : void 0) : o(s, a), t && c.unobserveElement(l);
                        },
                        [e, c, l, o, t, i],
                    );
                return (
                    (0, s.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        25023: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPageSuspenseLoader: () => A });
            var s = i(32290),
                a = i(63618),
                r = i(55178),
                n = i(60900),
                o = i(79856),
                l = i(7999),
                c = i(83808),
                d = i(83920),
                m = i(57594),
                u = i(58054),
                _ = i(32468),
                p = i(74694),
                h = i(45257),
                x = i(85067),
                v = i(15181),
                C = i(56772),
                k = i.n(C);
            let A = () => {
                let { formatMessage: e } = (0, n.A)(),
                    {
                        settings: { isMobile: t },
                    } = (0, m.g)(),
                    i = (0, c.W)(),
                    { contentScrollRef: C, setContentScrollRef: A } = (0, d.g)(),
                    g = (0, r.useCallback)(() => (0, s.jsx)(v.r, { isActive: !0, className: k().shimmerItem }), []),
                    b = (0, r.useMemo)(() => ({ Footer: () => (0, s.jsx)(_.A, { children: (0, s.jsx)(u.w, { className: k().footer }) }) }), []);
                return (0, s.jsx)(l.h, {
                    scrollElement: C,
                    children: (0, s.jsxs)('div', {
                        className: k().root,
                        children: [
                            (0, s.jsx)(p.Y, {
                                variant: p.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: i.canBack,
                                children: (0, s.jsx)(o.W, { className: k().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)(h.$, {
                                className: (0, a.$)(k().scrollContainer, k().important),
                                listClassName: k().content,
                                customComponents: b,
                                totalCount: x.H,
                                initialItemCount: x.H,
                                itemContentCallback: g,
                                debounceDurationInMs: 300,
                                handleRef: A,
                                context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                isMobileLayout: t,
                                useWindowScroll: t,
                            }),
                        ],
                    }),
                });
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => m });
            var s = i(32290),
                a = i(55178),
                r = i(60900),
                n = i(21732),
                o = i(63423),
                l = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: m,
                            disabled: u,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = e,
                        { formatMessage: k } = (0, r.A)(),
                        A = k({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: _,
                        ref: x,
                        icon: (0, s.jsx)(l.I, { variant: 'trailer', size: m, className: p }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var s = i(60900),
                a = i(64605);
            let r = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31286: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(55178),
                a = i(91027);
            let r = () => {
                let e = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        34223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var s = i(32290),
                a = i(98350),
                r = i(63618),
                n = i(55178),
                o = i(60900),
                l = i(79856),
                c = i(91063),
                d = i.n(c);
            let m = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, o.A)(),
                    c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
                    children: [
                        (0, s.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, s.jsx)('div', { className: d().coverContainer, children: (0, s.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, s.jsx)('div', { className: d().textContainer, children: (0, s.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, s.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var u = i(89661),
                _ = i.n(u);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, o.A)(),
                        c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, s.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, s.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, s.jsx)('div', { className: _().textContainer, children: (0, s.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, s.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: r } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, s.jsx)(p, { isActive: t, className: r });
                        case a.X.ALBUM:
                            return (0, s.jsx)(m, { isActive: t, className: r });
                    }
                };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(32290),
                a = i(96103),
                r = i(21732),
                n = i(82586),
                o = i(19740),
                l = i(30542),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, albumType: d, disabled: m } = e,
                    { user: u } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, l.$)(t, d);
                return (0, s.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(70280),
                l = i(57594),
                c = i(53514),
                d = i(40484),
                m = i.n(d),
                u = i(60900),
                _ = i(16172),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                v = i(47745),
                C = i(84062),
                k = i(28999),
                A = i(61258),
                g = i(19383);
            let b = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: r,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: m,
                        } = e,
                        { formatMessage: b } = (0, u.A)(),
                        {
                            track: f,
                            settings: { isMobile: T },
                        } = (0, l.g)(),
                        N = (0, C.Z)(t.url),
                        { sendNavigateSearchFeedback: j } = (0, k.z)(),
                        w = (0, v.N)(),
                        I = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, l.g)(),
                                { modal: n } = s;
                            return (0, g.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                T && f.isOpened && f.close(), N(e);
                            }),
                        }),
                        y = (0, h.c)((e) => {
                            w({ to: _.QT.ArtistScreen }), null == j || j(), I(e);
                        });
                    return i && !t.various
                        ? (0, s.jsx)(A.N, {
                              'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: y,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: m,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: m,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: r,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                f = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: r,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: m = !0,
                        } = e,
                        u = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              m ? t.separator : '',
                                              (0, s.jsx)(
                                                  b,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: r,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, m, i, a, r, o, l, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(b, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: r,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            u,
                        ],
                    });
                };
            var T = i(39407),
                N = i(63887);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(m().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var w = i(8055),
                I = i(6752),
                y = i(78035),
                S = i(78176),
                R = i(83598),
                O = i.n(R);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, y.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(S.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var E = i(19740),
                L = i(52598),
                D = i.n(L);
            let B = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, u.A)();
                    return (0, s.jsx)(E.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(S.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, h.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, I.L)(() =>
                            (0, w.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                d(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(B, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                W = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: r = ', ',
                            lineClamp: d,
                            visibleArtistsCount: u,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: v,
                            variant: C = 'breakAll',
                            withAllArtistsTitle: k = !0,
                            withComposer: A = !0,
                            spoilerComponent: g,
                            withCustomTooltip: b = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: N,
                        } = e,
                        w = (0, n.useRef)(null),
                        [I, y] = (0, n.useState)(!1),
                        S = k
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: R },
                        } = (0, l.g)(),
                        O = 1 === i.length,
                        P = (0, n.useCallback)((e) => {
                            y(!0), e.preventDefault();
                        }, []),
                        M = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                u && !I && (e = i.slice(0, u)),
                                e.reduce((e, t) => {
                                    if (!A && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: _ && t.id !== T && (((!R || O) && N) || !N),
                                            captionSize: v,
                                            allArtistsTitle: S,
                                            withCustomTooltip: b,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, i]) : [i];
                                }, [])
                            );
                        }, [i, u, I, A, R, O, N, h, x, _, T, v, S, b, r]),
                        E = (0, n.useMemo)(() => {
                            if (!I && u && u < i.length) {
                                let e = i.length - u;
                                return (0, n.isValidElement)(g) ? g : (0, s.jsx)(j, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [i.length, P, I, p, g, u]),
                        L = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, s.jsx)(o.m_, {
                            referenceRef: w,
                            enabled: !!(k && S) && b && !N && !R,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: L,
                                className: (0, a.$)(m().root, m()['root_variant_'.concat(C)], { [m().root_clamp]: d && d > 0 }, { [m().ellipsis]: !d }, t),
                                title: k && S && !b && !N ? S : void 0,
                                children: [M, E],
                            }),
                        });
                    return N ? (0, s.jsx)(z, { labelRef: w, artists: i, label: D }) : D;
                });
        },
        47977: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(19383),
                a = i(85017);
            let r = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, s.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
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
        55646: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPage: () => P });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(21732),
                c = i(71483),
                d = i(79856),
                m = i(71926),
                u = i(64170),
                _ = i(7999),
                p = i(14631),
                h = i(48922),
                x = i(22714),
                v = i(72396),
                C = i(83808),
                k = i(83920),
                A = i(3796),
                g = i(31286),
                b = i(49259),
                f = i(45066),
                T = i(57594),
                N = i(58054),
                j = i(32468),
                w = i(74694),
                I = i(45257),
                y = i(85067),
                S = i(15181),
                R = i(56772),
                O = i.n(R);
            let P = (0, r.PA)(() => {
                let { formatMessage: e } = (0, o.A)(),
                    { tracksSubPage: t } = (0, b.s)(f.n.CHART),
                    {
                        settings: { isMobile: i },
                    } = (0, T.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: R, setContentScrollRef: P } = (0, k.g)(),
                    M = (0, g.w)(),
                    { from: E } = (0, v.f)({ pageId: h._Q.CHART });
                (0, A.J)(t.isResolved);
                let L = t.isLoading || !t.playlistMeta,
                    D = L ? y.H : t.items.length,
                    B = (0, n.useCallback)(
                        (e) => {
                            let i = t.items[e],
                                a = t.playlistMeta;
                            return i && a && !L
                                ? (0, s.jsx)(p.Q, {
                                      track: i,
                                      playContextParams: M(e, {
                                          contextData: { type: c.K.Playlist, meta: { id: ''.concat(a.uid, ':').concat(a.kind) }, from: E },
                                          queueParams: { index: e, entityId: i.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, s.jsx)(S.r, { isActive: !0, className: O().shimmerItem });
                        },
                        [E, M, L, t.items, t.playlistMeta],
                    ),
                    z = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(j.A, { children: (0, s.jsx)(N.w, { className: O().footer }) }) }), []),
                    W = (0, n.useMemo)(
                        () =>
                            t.title
                                ? (0, s.jsx)(m.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, s.jsx)(d.W, { className: O().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getTracks()), t.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : (0, s.jsx)(x.n, {
                          pageId: h._Q.CHART,
                          children: (0, s.jsx)(_.h, {
                              scrollElement: R,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, s.jsxs)('div', {
                                  className: O().root,
                                  'data-test-id': l.Xk.chart.CHART_PAGE,
                                  children: [
                                      (0, s.jsx)(w.Y, { variant: w.V.TEXT, withForwardControl: !1, withBackwardControl: r.canBack, children: W }),
                                      (0, s.jsx)(I.$, {
                                          className: (0, a.$)(O().scrollContainer, O().important),
                                          listClassName: O().content,
                                          customComponents: z,
                                          totalCount: D,
                                          initialItemCount: D,
                                          itemContentCallback: B,
                                          debounceDurationInMs: 300,
                                          handleRef: P,
                                          context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                          isMobileLayout: i,
                                          useWindowScroll: i,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        56772: (e) => {
            e.exports = {
                root: 'ChartTracksPage_root__QMbqY',
                scrollContainer: 'ChartTracksPage_scrollContainer__Pxe8S',
                important: 'ChartTracksPage_important__Lddyf',
                content: 'ChartTracksPage_content__yyIAN',
                footer: 'ChartTracksPage_footer__6sNBk',
                shimmerItem: 'ChartTracksPage_shimmerItem__YwM0h',
                chartTrackShimmer: 'ChartTracksPage_chartTrackShimmer__9ldEs',
                chartCell: 'ChartTracksPage_chartCell__Ko_uE',
                trackShimmer: 'ChartTracksPage_trackShimmer__9uNZ2',
                shimmerTitle: 'ChartTracksPage_shimmerTitle__TkGmf',
            };
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(32290),
                a = i(21732),
                r = i(70280),
                n = i(71926),
                o = i(48736),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: m } = e;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            m,
                            (0, s.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => C });
            var s = i(32290),
                a = i(60900),
                r = i(91027),
                n = i(67732),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                m = i(92708),
                u = i(55178),
                _ = i(63380),
                p = i(96103),
                h = i(97755),
                x = i(79238);
            let v = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        r = (0, x.b)(t);
                    return (0, s.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: r,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                C = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, a.A)(),
                        { notify: x } = (0, l.l)(),
                        C = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, i] = (0, u.useState)(!1),
                                { formatMessage: n } = (0, a.A)();
                            return (0, r.c)(async (a) => {
                                let { album: r, withLink: l = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let u = { ...(0, m.HO)(r), url: r.url, isLiked: !r.isLiked };
                                i(!0);
                                let p = await r.toggleLike();
                                i(!1),
                                    c &&
                                        (p === _.f.OK
                                            ? e((0, s.jsx)(v, { withLink: l, album: u }), { containerId: o.u.INFO })
                                            : e((0, s.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: k } = (0, n.T)();
                    return (0, r.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: k, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? C({ album: e })
                                  : void x((0, s.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var s = i(55178),
                a = i(56008);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                m = i(70280),
                u = i(71926),
                _ = i(41677),
                p = i(28999),
                h = i(57594),
                x = i(53514),
                v = i(85017),
                C = i(13798),
                k = i(61258),
                A = i(25649),
                g = i(24760),
                b = i(84141),
                f = i(5856),
                T = i.n(f);
            let N = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: f,
                        withExplicitMark: N = !0,
                        withSecondaryColor: j,
                        captionSize: w = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: S,
                        artistsClassName: R,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: P = !0,
                        hasLineClamp: M = !0,
                        withSavingQueryParams: E,
                        beforeTitle: L,
                        withArtistLink: D = !0,
                        withTrackLink: B = !0,
                        afterTitle: z,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: $ } = (0, p.z)(),
                    {
                        settings: { isMobile: H },
                    } = (0, h.g)(),
                    K = (0, g.$)({ withCustomTooltip: P }),
                    Y = (0, n.useSearchParams)(),
                    F = r.getUrl(E ? Object.fromEntries(Y) : void 0),
                    V = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: r.title });
                        return ''.concat(t, ' ').concat(null != (e = r.version) ? e : '');
                    }, [U, r.title, r.version]),
                    G = (0, b.O)({ track: r, onNavigate: $, withSavingQueryParams: E, entityType: v.n.TRACK }),
                    q = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                            return (0, s.jsx)(m.m_, {
                                enabled: K && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(u.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: r.title,
                                }),
                            });
                        },
                        [H, K, w, r.isRemoved, r.title, r.version],
                    ),
                    X = (0, o.useMemo)(() => {
                        let e = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                        return r.isRemoved
                            ? (0, s.jsx)(m.m_, {
                                  enabled: K && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(u.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: K ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, s.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : r.hasTrackLink && B
                              ? (0, s.jsx)(k.N, {
                                    onClick: G,
                                    className: T().albumLink,
                                    href: F,
                                    'aria-label': V,
                                    title: K ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [H, r.title, r.isRemoved, r.version, r.hasTrackLink, q, K, U, w, V, G, F, B]),
                    Q = (0, A.s)(r.artists, f),
                    Z = (0, o.useMemo)(() => +!!M, [M]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !r.isAvailable, [T().root_disliked]: r.isDisliked && !O, [T().root_withSecondaryColor]: j }, t),
                    children: (0, s.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(u.HL, {
                                        className: (0, a.$)(T().text, S),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            L,
                                            X,
                                            !r.isRemoved &&
                                                r.version &&
                                                (0, s.jsxs)(u.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: K ? void 0 : r.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', r.version],
                                                }),
                                        ],
                                    }),
                                    r.explicitDisclaimer &&
                                        N &&
                                        (0, s.jsx)(C.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: I,
                                            variant: r.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: r.id,
                                        }),
                                    z,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: M }, R, S),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: Q,
                                    withLink: r.isNonUserGenerated && D,
                                    lineClamp: Z,
                                    captionSize: w,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        73749: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(21732),
                c = i(13365),
                d = i(82586),
                m = i(71926),
                u = i(47977),
                _ = i.n(u);
            let p = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: r,
                        position: u,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: x,
                        className: v,
                        positionClassName: C,
                    } = e,
                    { formatMessage: k } = (0, o.A)(),
                    A = t || i,
                    g = (0, n.useMemo)(() => {
                        if (r) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, r]),
                    b = (0, n.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return k({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return k({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return k({ id: 'entity-names.chart-new' });
                            default:
                                return k({ id: 'entity-names.chart-same' });
                        }
                    }, [k, t]),
                    f = r ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(_().root, v),
                    'data-test-id': l.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(m.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(_().position, C, { [_().position_disliked]: h, [_().position_disabled]: x }),
                            'data-test-id': l.OA.chart.CHART_PROGRESS_POSITION,
                            children: u,
                        }),
                        A &&
                            (0, s.jsx)(d.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': b,
                                className: (0, a.$)(_().progress, _()['progress_'.concat(f)], { [_().progress_disliked]: h, [_().progress_disabled]: x }),
                                'data-test-id': l.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => k });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(16172),
                l = i(21732),
                c = i(91027),
                d = i(50162),
                m = i(19740),
                u = i(86269),
                _ = i(71926),
                p = i(47745),
                h = i(84062),
                x = i(57594),
                v = i(16510),
                C = i.n(v);
            let k = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    A = (0, p.N)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(k, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, c.c)((e) => {
                        r.modal.isOpened && r.modal.close(), A({ to: o.QT.ArtistScreen }), v(e);
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, a.$)(C().root, i),
                            onClick: b,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(u.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            var s = i(64605),
                a = i(97647);
            let r = (e) => {
                switch (e.type) {
                    case s._.PODCAST:
                        return a.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            let s = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, i) => {
            'use strict';
            var s;
            i.d(t, { T: () => s }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(s || (s = {}));
        },
        92102: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => b });
            var s = i(32290),
                a = i(63618),
                r = i(96103),
                n = i(55178),
                o = i(91027),
                l = i(58359),
                c = i(71735),
                d = i(2969),
                m = i(23352),
                u = i(46200),
                _ = i(5537),
                p = i(28999),
                h = i(72676),
                x = i(57594),
                v = i(1444),
                C = i(60900),
                k = i(54171),
                A = i(35587),
                g = i.n(A);
            let b = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: A,
                        beforeBlock: b,
                        controls: f,
                        playButtonCellRender: T,
                        withLightning: N,
                        isPlaying: j,
                        isCurrent: w,
                        togglePlay: I,
                        restartPlay: y,
                        onPlayClick: S,
                        playButtonIconSize: R,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: E } = (0, u.q)(),
                    {
                        track: L,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: U },
                    } = (0, x.g)(),
                    { ref: $, intersectionPropertyId: H } = (0, m.n)(),
                    K = (0, d.b)(),
                    Y = (0, c.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: s } = (0, C.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && s({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(s({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: r }),
                    V = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let s = t.entityMeta.entityId;
                            return i && s === e;
                        }
                        return i;
                    })(r.entityId),
                    G = W(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    q = r.isAvailable && M && !G,
                    X = (0, _.N)(),
                    Q = r.isAvailable && X && !G && !O,
                    Z = (0, k.w)({ track: r, callback: I }),
                    J = (0, o.c)(() => {
                        L.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    ee = (0, k.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, es] = (0, n.useState)(!1),
                    ea = (0, o.c)(() => {
                        if (!Y()) {
                            if (q) return void E();
                            if (Q) return void U.open();
                            ei || j || (es(!0), null == et || et()), Z(), K(!j), null == S || S(!j);
                        }
                    }),
                    er = (0, o.c)(() => {
                        if (j) return void y();
                        ea();
                    }),
                    en = (0, o.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            M && r.isAvailableOnlyForPlus && E(), X && r.isAvailableOnlyForPlus && U.open();
                            return;
                        }
                        if (q) return void E();
                        let t = !B && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !D.modal.isOpened));
                        return Q && !t
                            ? void U.open()
                            : ((0, l.P)(e, g().ripple), B)
                              ? void ea()
                              : 2 === e.detail
                                ? void er()
                                : void (1 === e.detail && r.hasTrackLink && !D.modal.isOpened && (ee(), Q && U.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: ea, isPlaying: j, isCurrent: w, isLoading: V, playButtonIconSize: R });
                return (0, s.jsxs)(v.C, {
                    ref: $,
                    'aria-label': F,
                    'data-intersection-property-id': H,
                    onClick: en,
                    className: (0, a.$)(g().root, { [g().root_disabled]: !r.isAvailable, [g().root_current]: w && B }, i),
                    ...P,
                    children: [b, eo, A, f],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        98350: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var s = (function (e) {
                return (e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7972, 3183, 7231, 6347, 9763, 6639, 7258, 6087, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 849, 4220, 9562, 7358,
            ],
            () => e((e.s = 19564)),
        ),
            (_N_E = e.O());
    },
]);
