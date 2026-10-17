(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3737],
    {
        2096: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => E });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(71035),
                m = i(66738),
                u = i(3392),
                _ = i(4254),
                p = i(17545),
                h = i(4071);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: r, iconSize: o, size: d = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, n.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    v = (0, l.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, s.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, s.jsx)(m.I, { size: o, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(79367),
                C = i(34159),
                k = i(85743),
                A = i(27954),
                b = i(64720),
                g = i(71996),
                T = i(6304),
                f = i(65165),
                j = i(38097),
                N = i(91907),
                w = i(3407),
                y = i(34826),
                S = i.n(y),
                I = i(82684),
                R = i(85957),
                O = i.n(R);
            let P = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, n.A)();
                    return t.isDownloaded
                        ? (0, s.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, s.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                E = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: r,
                            withLightning: h,
                            ignoreDislikedStyles: y,
                            onLikeClick: I,
                            utmLink: R,
                            withSecondaryColor: O,
                            handleRemove: E,
                            withTrailer: L = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: W } = (0, A.g)(),
                        { formatMessage: U } = (0, n.A)(),
                        { sendLikeSearchFeedback: $ } = (0, k.z)(),
                        [H, K] = (0, l.useState)(!1),
                        [F, Y] = (0, l.useState)(!1),
                        V = (0, x.P)(),
                        G = (0, p.K)(r),
                        {
                            duration: q,
                            lightning: X,
                            ugc: Q,
                        } = ((e, t, i) => {
                            var s;
                            let { withLightning: a, isUGC: r } = t,
                                l = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / j.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== l ? { text: l, ariaLabel: (0, f.j)(Math.round((null != (s = e.durationMs) ? s : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: h, isUGC: r.isUGC }, U),
                        Z = (0, C.F)(),
                        J = z.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (H || r.isLiked || (K(!0), null == $ || $()), await G(), null == I || I(r.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        es = (0, d.c)((e) => {
                            if ((e.stopPropagation(), V())) return void e.preventDefault();
                            (W.openTrackTrailer(r.id), Z(o.DomainObjectType.Track, r.id));
                        }),
                        ea = (0, l.useMemo)(() => {
                            if (ee)
                                return (0, s.jsx)('div', {
                                    onClick: ei,
                                    children: (0, s.jsx)(w._, {
                                        track: r,
                                        open: F,
                                        onOpenChange: Y,
                                        placement: 'bottom',
                                        icon: (0, s.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: F }),
                                        handleRemove: E,
                                        withTrailer: L,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, E, F, ee, L, r, R]);
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, i, {
                            [S().controls_dislikedControls]: r.isDisliked,
                            [S().controls_dislikedColors]: r.isDisliked && !y,
                            [S().controls_disabled]: !r.isAvailable,
                            [S().root_withSecondaryColor]: O,
                        }),
                        children: [
                            X && (0, s.jsx)(m.I, { 'aria-label': X.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Q &&
                                (0, s.jsxs)(u.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, s.jsx)(m.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, s.jsx)(u.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, s.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, s.jsx)(P, { track: r }) }),
                            E && !B && (0, s.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: E, ariaLabel: D }),
                            ee &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(g.k, {
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
                                    null !== q &&
                                        (0, s.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: F && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, s.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => C });
            var s = i(74631),
                a = i(67379),
                r = i(20934),
                l = i(59450),
                n = i(49656),
                o = i(84e3),
                c = i(58069),
                d = i(20258),
                m = i(26742),
                u = i(25195),
                _ = i(37314),
                p = i(25488),
                h = i(97952),
                v = i(10764),
                x = i(72594);
            let C = () => {
                let e = (0, o.U)(),
                    t = (0, l.st)(),
                    { hash: i } = (0, l.gf)(),
                    { pageId: C, displayReasonId: k } = (0, h.$)(),
                    { tabId: A, tabPos: b, isTabSelectedByDefault: g } = (0, x.R)(),
                    { offsetBlockPosY: T } = (0, u.u)(),
                    { blockType: f, blockId: j, blockPosX: N, blockPosY: w, mainObjectId: y, mainObjectType: S, displayReasonId: I } = (0, m.N)(),
                    { filterKey: R, filterValue: O, filterPos: P } = (0, _.G)(),
                    { objectType: E, objectsCount: L, objectId: M, objectPosX: D, objectPosY: B } = (0, p.J)(),
                    { skeleton: z } = (0, v.b)(),
                    W = null != I ? I : k,
                    U = (0, n.L)(() => (void 0 !== T && void 0 !== w ? T + w : w));
                return (0, s.useCallback)(
                    (s, l) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let n = c.F[C];
                        if (!n) return;
                        let o = {
                            hash: i,
                            pageId: n,
                            entityType: f,
                            entityId: j,
                            entityPosX: N,
                            entityPosY: U,
                            objectsCount: L,
                            viewUuid: l,
                            objectType: E,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = O), (o.filterPos = P)),
                            d.qG.includes(C) && ((o.tabId = A), (o.tabPos = b), (o.isTabSelectedByDefault = g)),
                            z && (o.skeletonId = z),
                            'string' == typeof y && 'string' == typeof S && ((o.mainObjectType = S), (o.mainObjectId = y)),
                            W && (o.displayReasonId = W));
                        let m = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        m && (s ? (0, r.Pf)(t.evgenInstance, m) : (0, r.nv)(t.evgenInstance, m));
                    },
                    [t, W, j, N, U, f, R, P, O, i, g, e, y, S, M, D, B, E, L, C, z, A, b],
                );
            };
        },
        4073: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        8543: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => v });
            var s = i(25839),
                a = i(88204),
                r = i(74631),
                l = i(61493),
                n = i(10749),
                o = i(50209),
                c = i(27954),
                d = i(6349),
                m = i(2096),
                u = i(77737),
                _ = i(69730),
                p = i(4073),
                h = i.n(p);
            let v = (0, a.PA)((e) => {
                var t, i;
                let { track: a, playContextParams: p } = e,
                    v = (0, o.D)({ playContextParams: p, entityId: a.entityId }),
                    {
                        settings: { isMobile: x },
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
                    meta: (0, s.jsx)(u.j, { withArtistLink: !x, track: a }),
                    beforeBlock: (0, s.jsx)(n.t, {
                        withIcon: !0,
                        className: h().chartCell,
                        progress: null == (t = a.chart) ? void 0 : t.progress,
                        position: null == (i = a.chart) ? void 0 : i.position,
                        isDisliked: a.isDisliked,
                        isDisabled: !a.isAvailable,
                    }),
                    playButtonCellRender: C,
                    controls: (0, s.jsx)(m.Q, { track: a, className: h().controlsBarCell }),
                    ...v,
                    'data-test-id': l.Kq.track.TRACK_CHART,
                });
            });
        },
        10322: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            var s = i(25839),
                a = i(74631),
                r = i(82064);
            let l = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o }), [t, i, l, n, o]);
                return (0, s.jsx)(r.r.Provider, { value: d, children: c });
            };
        },
        10749: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(39004),
                o = i(61493),
                c = i(56629),
                d = i(66738),
                m = i(4254),
                u = i(96569),
                _ = i.n(u);
            let p = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: r,
                        position: u,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: v,
                        className: x,
                        positionClassName: C,
                    } = e,
                    { formatMessage: k } = (0, n.A)(),
                    A = t || i,
                    b = (0, l.useMemo)(() => {
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
                    g = (0, l.useMemo)(() => {
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
                    T = r ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(_().root, x),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(m.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(_().position, C, { [_().position_disliked]: h, [_().position_disabled]: v }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: u,
                        }),
                        A &&
                            (0, s.jsx)(d.I, {
                                variant: b,
                                size: 'xxs',
                                'aria-label': g,
                                className: (0, a.$)(_().progress, _()['progress_'.concat(T)], { [_().progress_disliked]: h, [_().progress_disabled]: v }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            let s = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var s = i(74631),
                a = i(56480);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(40207),
                a = i(12929);
            let r = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, s.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var s = i(84059),
                a = i(74631);
            i(93588);
            let r = (e) => {
                let t = (0, s.usePathname)(),
                    [i, r] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, i, t]));
            };
        },
        32652: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(39004),
                o = i(61493),
                c = i(66738),
                d = i(74245),
                m = i(27954),
                u = i(60924),
                _ = i(92870),
                p = i.n(_);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: h, iconVariant: iconOverride, size: v = 'xxxs', ...x } = e,
                    { formatMessage: C } = (0, n.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, m.g)(),
                    [A, b] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(b);
                }, [i, r]);
                let {
                    iconVariant: g,
                    descriptionText: T,
                    isTooltipEnabled: f,
                    ariaLabel: j,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = e,
                        r = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !a,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: k }, C);
                return (0, s.jsx)(u.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: f,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': j,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': j,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : g,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        34546: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            let s = (e) => e.map((e) => e.name).join(', ');
        },
        34826: (e) => {
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
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(25839),
                a = i(88204),
                r = i(61493),
                l = i(66738),
                n = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: m, disabled: u } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, m);
                return (0, s.jsx)(n.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(l.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var s = i(25895);
            let a = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        47399: (e) => {
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
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            var s = i(74631),
                a = i(3669),
                r = i(13232);
            let l = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    l = (0, s.useRef)(null),
                    n = (0, a.D)(),
                    o = (0, s.useId)(),
                    c = (0, s.useContext)(r.B),
                    d = (0, s.useCallback)(
                        (s, a) => {
                            (e ? e(s, i ? a : void 0) : n(s, a), t && c.unobserveElement(o));
                        },
                        [e, c, o, n, t, i],
                    );
                return (
                    (0, s.useEffect)(
                        () => (
                            c.observeElement({ elementRef: l, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, n],
                    ),
                    { ref: l, intersectionPropertyId: o }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => $ });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                m = i(27954),
                u = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: s } = t,
                    a = i && !e.various ? (0, u.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: a };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                x = i(4254),
                C = i(97522),
                k = i(39004),
                A = i(44031),
                b = i(29481),
                g = i(85686),
                T = i(85743),
                f = i(40207);
            let j = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: l, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: u,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: j,
                            isTooltipEnabled: N,
                            handleNavigate: w,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: l } = (0, k.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, l),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, m.g)(),
                                u = (0, g.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, T.z)(),
                                p = (0, b.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), u(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, m.g)(),
                                        { modal: l } = s;
                                    return (0, f.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (s.reset(), l.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (p({ to: A.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: n });
                    return _
                        ? (0, s.jsx)(C.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: w,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: N,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: j,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: u }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: N,
                              offsetOptions: 4,
                              placement: 'top',
                              text: j,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: u,
                              }),
                          });
                }),
                N = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(j, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(j, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: n,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var w = i(8487),
                y = i(9079);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(y.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(w.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(28631),
                R = i(33049),
                O = i(61912),
                P = i(36286),
                E = i.n(P);
            let L = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(o.ZI, { className: E().tooltipContent, children: i.map((e) => (0, s.jsx)(O.V, { artist: e, className: E().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, l.forwardRef)((e, t) => (0, s.jsx)(L, { forwardRef: t, ...e }));
            var D = i(10820),
                B = i(93510),
                z = i.n(B);
            let W = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, k.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(z().root, z().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, o] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, m.g)(),
                        u = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, I.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                u(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, u],
                        ),
                        (0, l.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                $ = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: u,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: C,
                            ...k
                        } = e,
                        A = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: u } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (s = e.withCustomTooltip) || s,
                                x = (0, l.useRef)(null),
                                [C, k] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, m.g)(),
                                b = ((!A || 1 === p.length) && u) || !u,
                                g = ((e, t) => {
                                    var i, s, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = t;
                                                return {
                                                    primary: _(e, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: C ? void 0 : r, withComposer: o, withLink: !!b && n, artistIdWithoutLink: c }),
                                T = h ? g.allArtistsTitle : '',
                                f = (0, d.c)((e) => {
                                    (k(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: v,
                                withContextMenu: u,
                                labelRef: x,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!T && v && !u && !A,
                                title: !T || v || u ? void 0 : T,
                            };
                        })(k),
                        b = (0, n.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(C)
                                  ? C
                                  : (0, s.jsx)(S, { spoilerClassName: r, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        g = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            N,
                                            {
                                                group: e,
                                                linkClassName: u,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(U, { labelRef: A.labelRef, artists: A.artists, label: g }) : g;
                });
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        56629: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(s || (s = {})));
        },
        59981: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        60695: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPageSuspenseLoader: () => A });
            var s = i(25839),
                a = i(82298),
                r = i(74631),
                l = i(39004),
                n = i(23976),
                o = i(1407),
                c = i(21784),
                d = i(89192),
                m = i(27954),
                u = i(99401),
                _ = i(26076),
                p = i(10603),
                h = i(6968),
                v = i(2291),
                x = i(92202),
                C = i(99700),
                k = i.n(C);
            let A = () => {
                let { formatMessage: e } = (0, l.A)(),
                    {
                        settings: { isMobile: t },
                    } = (0, m.g)(),
                    i = (0, c.W)(),
                    { contentScrollRef: C, setContentScrollRef: A } = (0, d.g)(),
                    b = (0, r.useCallback)(() => (0, s.jsx)(x.r, { isActive: !0, className: k().shimmerItem }), []),
                    g = (0, r.useMemo)(() => ({ Footer: () => (0, s.jsx)(_.A, { children: (0, s.jsx)(u.w, { className: k().footer }) }) }), []);
                return (0, s.jsx)(o.h, {
                    scrollElement: C,
                    children: (0, s.jsxs)('div', {
                        className: k().root,
                        children: [
                            (0, s.jsx)(p.Y, {
                                variant: p.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: i.canBack,
                                children: (0, s.jsx)(n.W, { className: k().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)(h.$, {
                                className: (0, a.$)(k().scrollContainer, k().important),
                                listClassName: k().content,
                                customComponents: g,
                                totalCount: v.H,
                                initialItemCount: v.H,
                                itemContentCallback: b,
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
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(25839),
                a = i(61493),
                r = i(3392),
                l = i(4254),
                n = i(74672),
                o = i.n(n);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: n, placement: d = 'top', children: m } = e;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            m,
                            (0, s.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var s = i(27954),
                a = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: l,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = l.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => k });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                m = i(10820),
                u = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                x = i(53454),
                C = i.n(x);
            let k = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    A = (0, p.N)(),
                    b = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(k, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    g = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), A({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, a.$)(C().root, i),
                            onClick: g,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(u.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        65702: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPage: () => P });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(39004),
                o = i(61493),
                c = i(22939),
                d = i(23976),
                m = i(4254),
                u = i(64715),
                _ = i(1407),
                p = i(8543),
                h = i(20258),
                v = i(10322),
                x = i(30290),
                C = i(21784),
                k = i(89192),
                A = i(30716),
                b = i(79422),
                g = i(80499),
                T = i(82706),
                f = i(27954),
                j = i(99401),
                N = i(26076),
                w = i(10603),
                y = i(6968),
                S = i(2291),
                I = i(92202),
                R = i(99700),
                O = i.n(R);
            let P = (0, r.PA)(() => {
                let { formatMessage: e } = (0, n.A)(),
                    { tracksSubPage: t } = (0, g.s)(T.n.CHART),
                    {
                        settings: { isMobile: i },
                    } = (0, f.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: R, setContentScrollRef: P } = (0, k.g)(),
                    E = (0, b.w)(),
                    { from: L } = (0, x.f)({ pageId: h._Q.CHART });
                (0, A.J)(t.isResolved);
                let M = t.isLoading || !t.playlistMeta,
                    D = M ? S.H : t.items.length,
                    B = (0, l.useCallback)(
                        (e) => {
                            let i = t.items[e],
                                a = t.playlistMeta;
                            return i && a && !M
                                ? (0, s.jsx)(p.Q, {
                                      track: i,
                                      playContextParams: E(e, {
                                          contextData: { type: c.K.Playlist, meta: { id: ''.concat(a.uid, ':').concat(a.kind) }, from: L },
                                          queueParams: { index: e, entityId: i.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, s.jsx)(I.r, { isActive: !0, className: O().shimmerItem });
                        },
                        [L, E, M, t.items, t.playlistMeta],
                    ),
                    z = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(j.w, { className: O().footer }) }) }), []),
                    W = (0, l.useMemo)(
                        () =>
                            t.title
                                ? (0, s.jsx)(m.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, s.jsx)(d.W, { className: O().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, l.use)(t.getTracks()), t.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : (0, s.jsx)(v.n, {
                          pageId: h._Q.CHART,
                          children: (0, s.jsx)(_.h, {
                              scrollElement: R,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, s.jsxs)('div', {
                                  className: O().root,
                                  'data-test-id': o.Xk.chart.CHART_PAGE,
                                  children: [
                                      (0, s.jsx)(w.Y, { variant: w.V.TEXT, withForwardControl: !1, withBackwardControl: r.canBack, children: W }),
                                      (0, s.jsx)(y.$, {
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
        69730: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => T });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(74631),
                n = i(71035),
                o = i(11823),
                c = i(79367),
                d = i(47009),
                m = i(52512),
                u = i(29872),
                _ = i(61561),
                p = i(85743),
                h = i(16886),
                v = i(27954),
                x = i(18284),
                C = i(39004),
                k = i(34546),
                A = i(26115),
                b = i(51027),
                g = i.n(b);
            let T = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: b,
                        beforeBlock: T,
                        controls: f,
                        playButtonCellRender: j,
                        withLightning: N,
                        isPlaying: w,
                        isCurrent: y,
                        togglePlay: S,
                        restartPlay: I,
                        onPlayClick: R,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: P = !1,
                        ...E
                    } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: M } = (0, u.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: z },
                        album: W,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: $ },
                    } = (0, v.g)(),
                    { ref: H, intersectionPropertyId: K } = (0, m.n)(),
                    F = (0, d.b)(),
                    Y = (0, c.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: s } = (0, C.A)();
                        return ((e, t, i) => {
                            var s;
                            let { withLightning: a } = t,
                                r = (0, k.j)(null != (s = e.artists) ? s : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, s);
                    })({ withLightning: N, track: r }),
                    G = ((e) => {
                        let { sonataState: t } = (0, v.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let s = t.entityMeta.entityId;
                            return i && s === e;
                        }
                        return i;
                    })(r.entityId),
                    q = U(W.id, null == (t = W.meta) ? void 0 : t.isNonMusic),
                    X = r.isAvailable && L && !q,
                    Q = (0, _.N)(),
                    Z = r.isAvailable && Q && !q && !P,
                    J = (0, A.w)({ track: r, callback: S }),
                    ee = (0, n.c)(() => {
                        D.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    et = (0, A.w)({ track: r, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [es, ea] = (0, l.useState)(!1),
                    er = (0, n.c)(() => {
                        if (!Y()) {
                            if (X) return void M();
                            if (Z) return void $.open();
                            (es || w || (ea(!0), null == ei || ei()), J(), F(!w), null == R || R(!w));
                        }
                    }),
                    el = (0, n.c)(() => {
                        if (w) return void I();
                        er();
                    }),
                    en = (0, n.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (L && r.isAvailableOnlyForPlus && M(), Q && r.isAvailableOnlyForPlus && $.open());
                            return;
                        }
                        if (X) return void M();
                        let t = !z && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void $.open()
                            : ((0, o.P)(e, g().ripple), z)
                              ? void er()
                              : 2 === e.detail
                                ? void el()
                                : void (1 === e.detail && r.hasTrackLink && !B.modal.isOpened && (et(), Z && $.open()));
                    }),
                    eo = null == j ? void 0 : j({ onPlayButtonClick: er, isPlaying: w, isCurrent: y, isLoading: G, playButtonIconSize: O });
                return (0, s.jsxs)(x.C, {
                    ref: H,
                    'aria-label': V,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': r.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': K,
                    onClick: en,
                    className: (0, a.$)(g().root, { [g().root_disabled]: !r.isAvailable, [g().root_current]: y && z }, i),
                    ...E,
                    children: [T, eo, b, f],
                });
            });
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(25839),
                a = i(39004),
                r = i(71035),
                l = i(21468),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                m = i(33660),
                u = i(74631),
                _ = i(31860),
                p = i(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    { notify: x } = (0, o.l)(),
                    C = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, i] = (0, u.useState)(!1),
                            { formatMessage: l } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (t) return;
                            let u = { ...(0, m.HO)(r), url: r.url, isLiked: !r.isLiked };
                            i(!0);
                            let h = await r.toggleLike();
                            (i(!1),
                                c &&
                                    (h === _.f.OK
                                        ? e((0, s.jsx)(p.T, { withLink: o, album: u }), { containerId: n.u.INFO })
                                        : e((0, s.jsx)(d.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: k } = (0, l.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: k, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? C({ album: e })
                              : void x((0, s.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => m });
            var s = i(25839),
                a = i(74631),
                r = i(39004),
                l = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(49984);
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
                            forwardRef: v,
                            style: x,
                            children: C,
                        } = e,
                        { formatMessage: k } = (0, r.A)(),
                        A = k({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: _,
                        ref: v,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: m, className: p }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            var s = i(56829),
                a = i(35015);
            let r = (e) => {
                switch (e) {
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
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var s = i(39004),
                a = i(56829);
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
        77737: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => j });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                l = i(84059),
                n = i(74631),
                o = i(39004),
                c = i(61493),
                d = i(49656),
                m = i(3392),
                u = i(4254),
                _ = i(56348),
                p = i(85743),
                h = i(27954),
                v = i(19410),
                x = i(12929),
                C = i(32652),
                k = i(97522),
                A = i(40846),
                b = i(61755),
                g = i(87221),
                T = i(12752),
                f = i.n(T);
            let j = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: T,
                        withExplicitMark: j,
                        withSecondaryColor: N,
                        captionSize: w = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: I,
                        artistsClassName: R,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: P = !0,
                        hasLineClamp: E = !0,
                        withSavingQueryParams: L,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: z,
                        afterTitle: W,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: $ } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: K },
                        slam: F,
                    } = (0, h.g)(),
                    Y = (0, b.$)({ withCustomTooltip: P }),
                    V = (0, l.useSearchParams)(),
                    G = (0, A.B)(r, {
                        isMobile: K,
                        isOfflineModeEnabled: F.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: z,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: j,
                        query: L ? Object.fromEntries(V) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: X,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: l, isMobile: n } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !n,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(r, G, { canEnableCustomTooltip: Y, isMobile: K }, $),
                    et = (0, g.O)({ track: r, onNavigate: H, withSavingQueryParams: L, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(m.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: v.V,
                                children: (0, s.jsx)(u.HL, {
                                    className: (0, a.$)(f().text, f().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [w, q, Q, ee],
                    ),
                    es = (0, d.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, s.jsx)(m.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: v.V,
                                  children: (0, s.jsx)(u.HL, {
                                      className: (0, a.$)(f().text, f().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: q,
                                  }),
                              })
                            : G.link
                              ? (0, s.jsx)(k.N, {
                                    onClick: et,
                                    className: f().albumLink,
                                    href: G.link.href,
                                    'aria-label': X,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!E, [E]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(f().root, { [f().root_disabled]: !r.isAvailable, [f().root_disliked]: r.isDisliked && !O, [f().root_withSecondaryColor]: N }, t),
                    children: (0, s.jsxs)('div', {
                        className: f().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(f().titleContainer, { [f().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(u.HL, {
                                        className: (0, a.$)(f().text, I),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            es,
                                            G.version &&
                                                (0, s.jsxs)(u.HL, {
                                                    className: (0, a.$)(f().text, f().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, s.jsx)(C.N, {
                                            containerClassName: f().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: y,
                                            variant: G.explicitMark,
                                            className: f().explicitMark,
                                            trackId: r.id,
                                        }),
                                    W,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(f().text, { [f().artists]: E }, R, I),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, a.$)(f().text, f().link),
                                    captionClassName: (0, a.$)(f().text, f().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: w,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        79422: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(74631),
                a = i(71035);
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
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var s = i(25839),
                a = i(74631),
                r = i(61493),
                l = i(4254),
                n = i(44408),
                o = i.n(n);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [n, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, s.jsx)(
                            l.HL,
                            {
                                className: o().descriptionTextItem,
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
        92202: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => p });
            var s = i(25839),
                a = i(82298),
                r = i(66738),
                l = i(23976),
                n = i(96569),
                o = i.n(n);
            let c = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(o().root, i),
                    children: [
                        (0, s.jsx)(l.W, { isActive: t, className: (0, a.$)(o().position, o().positionShimmer), radius: 'l' }),
                        (0, s.jsx)(r.I, { 'aria-hidden': !0, variant: 'chartSame', size: 'xxs', className: (0, a.$)(o().progress, o().progress_same) }),
                    ],
                });
            };
            var d = i(3718),
                m = i(97805),
                u = i(99700),
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
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(25839),
                a = i(88204),
                r = i(3163),
                l = i(73182);
            let n = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    n = (0, l.b)(t.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        96569: (e) => {
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
        97285: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 65702)), Promise.resolve().then(i.bind(i, 60695)));
        },
        97805: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var s = i(25839),
                a = i(3718),
                r = i(82298),
                l = i(74631),
                n = i(39004),
                o = i(23976),
                c = i(47399),
                d = i.n(c);
            let m = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, n.A)(),
                    c = (0, l.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
                    children: [
                        (0, s.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, s.jsx)('div', { className: d().coverContainer, children: (0, s.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, s.jsx)('div', { className: d().textContainer, children: (0, s.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, s.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var u = i(64813),
                _ = i.n(u);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, n.A)(),
                        c = (0, l.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, s.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, s.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, s.jsx)('div', { className: _().textContainer, children: (0, s.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, s.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
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
        99700: (e) => {
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
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 740, 5128, 7339, 6287, 3472, 2121, 2767, 3112, 6151, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257,
                2038, 4163, 3246, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 1808, 3552, 4475, 5056, 7358,
            ],
            () => e((e.s = 97285)),
        ),
            (_N_E = e.O()));
    },
]);
