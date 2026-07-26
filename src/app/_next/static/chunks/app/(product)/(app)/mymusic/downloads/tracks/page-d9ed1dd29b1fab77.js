(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287],
    {
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var r = i(21916),
                a = i(55178);
            let n = (e) => {
                let t = (0, r.usePathname)(),
                    [i, n] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]);
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(32290),
                a = i(55178),
                n = i(21732),
                s = i(71926),
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
                        (0, r.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        7748: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { NotFound: () => T });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(39407),
                o = i(63423),
                l = i(82586),
                c = i(46049),
                d = i(71926),
                u = i(55178),
                _ = i(16172),
                m = i(52068),
                p = i(62376),
                x = i(27576),
                h = i(83920),
                v = i(20472),
                g = i(84062),
                k = i(27120),
                A = i(12894),
                C = i(57594),
                N = i(55365),
                f = i.n(N);
            let T = (0, n.PA)((e) => {
                let { className: t, title: i, description: n, iconVariant: N = 'musicLogo', iconClassName: T, iconSize: b } = e,
                    { contentRef: I, setContentScrollRef: S } = (0, h.g)(),
                    y = (0, g.Z)(v.Z.main.href);
                !(function () {
                    let e = (0, m.st)(),
                        { hash: t } = (0, m.gf)(),
                        i = (0, p.U)(),
                        r = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, x.A)();
                        let a = (0, _.Fx)({
                            params: {
                                hash: t,
                                pageId: _.QT.PageNotFoundScreen,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, _.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, _.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: _.QT.PageNotFoundScreen,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, _.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: j } = (function (e) {
                    let t = (0, m.st)(),
                        { hash: i } = (0, m.gf)(),
                        r = (0, p.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !i) return;
                            let a = (0, _.Fx)({
                                params: {
                                    hash: i,
                                    pageId: _.QT.PageNotFoundScreen,
                                    pageStyle: _.QL.Fullscreen,
                                    pagePlacement: _.c4.Fullscreen,
                                    mainObjectType: _.ky.NonApplicable,
                                    mainObjectId: _.ky.NonApplicable,
                                    from: _.QT.PageNotFoundScreen,
                                    to: _.QT.MainScreen,
                                    entityType: _.LA.Error,
                                    entityId: _.LA.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            a && (0, _.Mu)(t.evgenInstance, a), e();
                        }, [t, i, r, e]),
                    };
                })(y);
                return (
                    (0, k.N)(!0),
                    !(function () {
                        let { location: e } = (0, C.g)();
                        (0, u.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(c.N, {
                        className: (0, a.$)(f().root, { [f().root_desktop]: !I }, t),
                        containerClassName: f().container,
                        ref: S,
                        children: [
                            (0, r.jsx)(A.L, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, r.jsx)(l.I, { className: (0, a.$)(f().icon, T), variant: N, size: b }),
                                    (0, r.jsx)(d.DZ, {
                                        className: (0, a.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.HL, {
                                        className: (0, a.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(o.$, {
                                        onClick: j,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        8677: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => M });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(16172),
                d = i(21732),
                u = i(91027),
                _ = i(82586),
                m = i(70280),
                p = i(71926),
                x = i(17705),
                h = i(63423);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: n, iconSize: l, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: m } = (0, o.A)(),
                    p = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    x = (0, s.useCallback)(
                        (e) => {
                            null == a || a(), e.stopPropagation();
                        },
                        [a],
                    );
                return (0, r.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: x,
                    icon: (0, r.jsx)(_.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = i(71735),
                k = i(54391),
                A = i(22191),
                C = i(28999),
                N = i(57594),
                f = i(92744),
                T = i(29268),
                b = i(4008),
                I = i(53161),
                S = i(52843),
                y = i(39400),
                j = i(54714),
                E = i.n(j),
                O = i(38420),
                L = i(92565),
                R = i.n(L);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(O.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                M = (0, n.PA)((e) => {
                    var t, i;
                    let {
                            className: n,
                            track: h,
                            withLightning: j,
                            ignoreDislikedStyles: O,
                            onLikeClick: L,
                            utmLink: R,
                            withSecondaryColor: M,
                            handleRemove: P,
                            withTrailer: D = !0,
                            likeIconSize: F = 'xxs',
                            removeButtonAriaLabel: B,
                            hideControls: W,
                        } = e,
                        { user: z, trailer: U } = (0, N.g)(),
                        { formatMessage: H } = (0, o.A)(),
                        { sendLikeSearchFeedback: $ } = (0, C.z)(),
                        [Y, K] = (0, s.useState)(!1),
                        [V, G] = (0, s.useState)(!1),
                        X = (0, g.P)(),
                        Q = (0, x.K)(h),
                        q = (0, A.P)(Math.round((null != (i = h.durationMs) ? i : 0) / 1e3)),
                        J = (0, k.F)(),
                        Z = z.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !W,
                        et = (0, u.c)(async () => {
                            Y || h.isLiked || (K(!0), null == $ || $()), await Q(), null == L || L(h.isLiked);
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            U.openTrackTrailer(h.id), J(c.ky.Track, h.id);
                        }),
                        ea = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(y._, {
                                        track: h,
                                        open: V,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, a.$)(E().contextMenu, { [E().contextMenu_visible]: V }),
                                        handleRemove: P,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, P, V, ee, D, h, R]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(E().root, E().controls, n, {
                            [E().controls_dislikedControls]: h.isDisliked,
                            [E().controls_dislikedColors]: h.isDisliked && !O,
                            [E().controls_disabled]: !h.isAvailable,
                            [E().root_withSecondaryColor]: M,
                        }),
                        children: [
                            j &&
                                (0, r.jsx)(_.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: E().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, r.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(_.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: E().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(m.ZI, { children: (0, r.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Z && (0, r.jsx)('div', { className: (0, a.$)(E().item, E().downloadIcon), children: (0, r.jsx)(w, { track: h }) }),
                            P && !W && (0, r.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(E().item, E().removeButton), onClick: P, ariaLabel: B }),
                            ee &&
                                (0, r.jsx)(b.WithOffline, {
                                    fallback: (0, r.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: F,
                                        className: (0, a.$)(E().item, E().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, r.jsx)(b.WithOffline, {
                                    fallback: (0, r.jsx)(T.k, {
                                        className: (0, a.$)(E().item, E().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(E().item, E().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, r.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(E().duration, { [E().duration_hidden]: V && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / I.k7);
                                                    return (0, S.E)(t);
                                                })(h.durationMs),
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
            var r = i(55178),
                a = i(16172),
                n = i(52068),
                s = i(6752),
                o = i(62376),
                l = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                _ = i(18746),
                m = i(2792),
                p = i(37240),
                x = i(51012),
                h = i(47498);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: v, displayReasonId: g } = (0, p.$)(),
                    { tabId: k, tabPos: A, isTabSelectedByDefault: C } = (0, h.R)(),
                    { offsetBlockPosY: N } = (0, u.u)(),
                    { blockType: f, blockId: T, blockPosX: b, blockPosY: I, mainObjectId: S, mainObjectType: y, displayReasonId: j } = (0, d.N)(),
                    { filterKey: E, filterValue: O, filterPos: L } = (0, _.G)(),
                    { objectType: R, objectsCount: w, objectId: M, objectPosX: P, objectPosY: D } = (0, m.J)(),
                    { skeleton: F } = (0, x.b)(),
                    B = null != j ? j : g,
                    W = (0, s.L)(() => (void 0 !== N && void 0 !== I ? N + I : I));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !v || !c.xK.includes(v) || !c.fD.includes(v)) return;
                        let s = l.F[v];
                        if (!s) return;
                        let o = {
                            hash: i,
                            pageId: s,
                            entityType: f,
                            entityId: T,
                            entityPosX: b,
                            entityPosY: W,
                            objectsCount: w,
                            viewUuid: n,
                            objectType: R,
                            objectId: M,
                            objectPosX: P,
                            objectPosY: D,
                        };
                        void 0 !== E && ((o.filterKey = E), (o.filterValue = O), (o.filterPos = L)),
                            c.qG.includes(v) && ((o.tabId = k), (o.tabPos = A), (o.isTabSelectedByDefault = C)),
                            F && (o.skeletonId = F),
                            'string' == typeof S && 'string' == typeof y && ((o.mainObjectType = y), (o.mainObjectId = S)),
                            B && (o.displayReasonId = B);
                        let d = (0, a.Fx)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (r ? (0, a.Pf)(t.evgenInstance, d) : (0, a.nv)(t.evgenInstance, d));
                    },
                    [t, B, T, b, W, f, E, L, O, i, C, e, S, y, M, P, D, R, w, v, F, k, A],
                );
            };
        },
        13365: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(r || (r = {}));
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(26252),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                _ = i(57594),
                m = i(60244),
                p = i(90006),
                x = i.n(p);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: p, variant: h, size: v = 'xxxs', ...g } = e,
                    { formatMessage: k } = (0, o.A)(),
                    {
                        settings: { isMobile: A },
                    } = (0, _.g)(),
                    [C, N] = (0, s.useState)(null),
                    f = (0, d.L)(() => {
                        switch (h) {
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
                    T = (0, s.useMemo)(() => k({ id: 'extra-explicit.explicit-mark' }), [k]);
                (0, s.useEffect)(() => {
                    i && i().then(N);
                }, [i, n]);
                let b = (null == C ? void 0 : C.join('\n')) || '',
                    I = !!(null == C ? void 0 : C.length) && !A,
                    S = b.length > 0 ? b : T;
                return (0, r.jsx)(m.k, {
                    description: b,
                    placement: 'bottom-start',
                    enabled: I,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children:
                            h === l.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                      className: (0, a.$)(x().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': S,
                                      style: {
                                          width: 'var(--ym-icon-size-'.concat(v, ')'),
                                          height: 'var(--ym-icon-size-'.concat(v, ')'),
                                      },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, r.jsx)('circle', {
                                              cx: '8',
                                              cy: '8',
                                              r: '5.5',
                                              fill: 'none',
                                              stroke: 'currentColor',
                                              strokeWidth: '1.5',
                                          }),
                                          (0, r.jsx)('text', {
                                              x: '8',
                                              y: '9',
                                              fill: 'currentColor',
                                              fontSize: '7',
                                              fontWeight: '700',
                                              textAnchor: 'middle',
                                              dominantBaseline: 'middle',
                                              children: 'S',
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(u.I, {
                                      className: (0, a.$)(x().explicitMark, t),
                                      'aria-label': S,
                                      variant: f,
                                      size: v,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(60900),
                a = i(57594),
                n = i(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: i, experiments: s } = (0, a.g)(),
                    o = 'ru' === i.account.data.userSessionRegionIso && s.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    l = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : l;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, i, s, o, l]);
                return (0, r.jsx)(n.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(55178),
                a = i(12989),
                n = i(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, r.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, r.useId)(),
                    c = (0, r.useContext)(n.B),
                    d = (0, r.useCallback)(
                        (r, a) => {
                            e ? e(r, i ? a : void 0) : o(r, a), t && c.unobserveElement(l);
                        },
                        [e, c, l, o, t, i],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: s, intersectionPropertyId: l }
                );
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                n = i(60900),
                s = i(21732),
                o = i(63423),
                l = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: x,
                            forwardRef: h,
                            style: v,
                            children: g,
                        } = e,
                        { formatMessage: k } = (0, n.A)(),
                        A = k({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: h,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var r = i(60900),
                a = i(64605);
            let n = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => n });
            var r = i(55178);
            let a = (0, r.createContext)(null),
                n = () => (0, r.useContext)(a);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var r = i(32290),
                a = i(77088),
                n = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        34223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var r = i(32290),
                a = i(98350),
                n = i(63618),
                s = i(55178),
                o = i(60900),
                l = i(79856),
                c = i(91063),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, o.A)(),
                    c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: d().coverContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: d().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = i(89661),
                m = i.n(_);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, o.A)(),
                        c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(m().root, i),
                        children: [
                            (0, r.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, r.jsx)(l.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: m().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(l.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                x = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, r.jsx)(p, { isActive: t, className: n });
                        case a.X.ALBUM:
                            return (0, r.jsx)(u, { isActive: t, className: n });
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
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
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
            var r = i(32290),
                a = i(96103),
                n = i(21732),
                s = i(82586),
                o = i(19740),
                l = i(30542),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, albumType: d, disabled: u } = e,
                    { user: _ } = (0, c.g)(),
                    m = t ? 'liked' : 'like',
                    p = (0, l.$)(t, d);
                return (0, r.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(s.I, { variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(70280),
                l = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(16172),
                p = i(21732),
                x = i(91027),
                h = i(71926),
                v = i(47745),
                g = i(84062),
                k = i(28999),
                A = i(61258),
                C = i(19383);
            let N = (0, n.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: s = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: T },
                        } = (0, l.g)(),
                        b = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: I } = (0, k.z)(),
                        S = (0, v.N)(),
                        y = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, l.g)(),
                                { modal: s } = r;
                            return (0, C.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), s.isOpened && (r.reset(), s.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    n.modal.isOpened && (n.modal.close(), n.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, x.c)((e) => {
                                T && f.isOpened && f.close(), b(e);
                            }),
                        }),
                        j = (0, x.c)((e) => {
                            S({ to: m.QT.ArtistScreen }), null == I || I(), y(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(A.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: j,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: n, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: n,
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
                            captionClassName: n,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: n,
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
                        }, [t.decomposed, u, i, a, n, o, l, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var T = i(39407),
                b = i(63887);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(b.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(8055),
                y = i(6752),
                j = i(78035),
                E = i(78176),
                O = i(83598),
                L = i.n(O);
            let R = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: L().tooltipContent, children: i.map((e) => (0, r.jsx)(E.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, s.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
            var M = i(19740),
                P = i(52598),
                D = i.n(P);
            let F = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, _.A)();
                    return (0, r.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(E.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [n, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, x.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, y.L)(() =>
                            (0, S.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, s.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                W = (0, n.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: n = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: x,
                            captionClassName: h,
                            captionSize: v,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: k = !0,
                            withComposer: A = !0,
                            spoilerComponent: C,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: b,
                        } = e,
                        S = (0, s.useRef)(null),
                        [y, j] = (0, s.useState)(!1),
                        E = k
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
                                  .join(n)
                            : '',
                        {
                            settings: { isMobile: O },
                        } = (0, l.g)(),
                        L = 1 === i.length,
                        R = (0, s.useCallback)((e) => {
                            j(!0), e.preventDefault();
                        }, []),
                        w = (0, s.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !y && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!A && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: x,
                                            captionClassName: h,
                                            withLink: m && t.id !== T && (((!O || L) && b) || !b),
                                            captionSize: v,
                                            allArtistsTitle: E,
                                            withCustomTooltip: N,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!n,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([n, i]) : [i];
                                }, [])
                            );
                        }, [i, _, y, A, O, L, b, x, h, m, T, v, E, N, n]),
                        M = (0, s.useMemo)(() => {
                            if (!y && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, s.isValidElement)(C) ? C : (0, r.jsx)(I, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [i.length, R, y, p, C, _]),
                        P = (0, s.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, r.jsx)(o.m_, {
                            referenceRef: S,
                            enabled: !!(k && E) && N && !b && !O,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: P,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: k && E && !N && !b ? E : void 0,
                                children: [w, M],
                            }),
                        });
                    return b ? (0, r.jsx)(B, { labelRef: S, artists: i, label: D }) : D;
                });
        },
        43565: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var r = i(32290),
                a = i(63618),
                n = i(82586),
                s = i(20753),
                o = i.n(s);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, r.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(32290),
                a = i(63618),
                n = i(8055),
                s = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: a, ...n } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        o = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: i, ...n });
                },
                l = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: s, withForceScroll: o, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, s.useState)(null),
                        x = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), l.length > 0 && _(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, n),
                            [n, a, t, i, l],
                        );
                    (0, s.useEffect)(() => {
                        l.length > 0 && u && x(u);
                    }, l);
                    let h = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(p.sN, { rangeChanged: x, totalCount: o, endReached: h, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: k,
                            debounceDurationInMs: A,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: T = !1,
                            testId: b,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...y
                        } = e,
                        [j, E] = (0, s.useState)(!1),
                        O = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : l,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : l,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, k, I]),
                        R = C ? Math.min(C, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: j || T, [d().root_notScrolling]: !j && !T }, t),
                        'data-test-id': b,
                        children: [
                            I && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(x, {
                                overscan: h,
                                components: L,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: S,
                                ...y,
                            }),
                            I && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
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
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var r = i(19383),
                a = i(85017);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
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
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => C });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(60900),
                o = i(39407),
                l = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                p = i(57594),
                x = (function (e) {
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
            let h = (e, t, i) => {
                switch (e) {
                    case x.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case x.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case x.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case x.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case x.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case x.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case x.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                g = i(77088),
                k = i.n(g);
            let A = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, p.g)(),
                        { formatDate: n } = (0, s.A)(),
                        { language: d } = (0, m.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(k().copyrights, t),
                        'data-test-id': l.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: k().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(v.N, {
                                        target: '_blank',
                                        href: h(x.YANDEX, i.tld, d),
                                        className: (0, a.$)(k().copyrightLink, k().yandexMusicLink),
                                        'data-test-id': l.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(v.N, {
                                target: '_blank',
                                href: h(x.YANDEX_PROJECTS, i.tld, d),
                                className: k().copyrightLink,
                                'data-test-id': l.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                C = (0, n.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: n, location: s } = (0, p.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: g } = (0, m.h)(),
                        C = (0, d.w)(!0),
                        N = ((e) => {
                            let { platform: t, tld: i, language: a, userRegion: n } = e,
                                s = { title: (0, r.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: h(x.COPYRIGHT_HOLDER, i, a) },
                                l = { title: (0, r.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: h(x.PRIVACY_POLICY, i, a) },
                                c = { title: (0, r.jsx)(o.A, { id: 'footer.links-terms' }), url: h(x.AGREEMENT, i, a) },
                                d = { title: (0, r.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: h(x.RECOMMENDATION_RULES, i, a) },
                                u = { title: (0, r.jsx)(o.A, { id: 'footer.links-help' }), url: h(x.HELP, i, a) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === n && e.push(l), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: g, userRegion: n.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(k().root, k().important, { [k().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': l.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: k().list,
                                        'data-test-id': l.S7.FOOTER_LINKS_LIST,
                                        children: N.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: k().item,
                                                    children: (0, r.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: k().link,
                                                        'data-test-id': l.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: k().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: C },
                                        'data-test-id': l.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A, {}),
                        ],
                    });
                });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                a = i(21732),
                n = i(70280),
                s = i(71926),
                o = i(48736),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(n.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, r.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, r.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                a = i(60900),
                n = i(91027),
                s = i(67732),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                _ = i(55178),
                m = i(63380),
                p = i(96103),
                x = i(97755),
                h = i(79238);
            let v = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        n = (0, h.b)(t);
                    return (0, r.jsx)(x.O, {
                        closeToast: i,
                        entityVariant: n,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: x } = (0, a.A)(),
                        { notify: h } = (0, l.l)(),
                        g = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, i] = (0, _.useState)(!1),
                                { formatMessage: s } = (0, a.A)();
                            return (0, n.c)(async (a) => {
                                let { album: n, withLink: l = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let _ = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                                i(!0);
                                let p = await n.toggleLike();
                                i(!1),
                                    c &&
                                        (p === m.f.OK
                                            ? e((0, r.jsx)(v, { withLink: l, album: _ }), { containerId: o.u.INFO })
                                            : e((0, r.jsx)(d.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: k } = (0, s.T)();
                    return (0, n.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: k, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void h((0, r.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => C });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                _ = i(16172),
                m = i(52068),
                p = i(62376),
                x = i(37240),
                h = i(83920),
                v = i(20472),
                g = i(12894),
                k = i(30310),
                A = i.n(k);
            let C = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, o.A)(),
                    k = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: i } = (0, m.gf)(),
                        { pageId: r } = (0, x.$)(),
                        a = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let n = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, i, r, a]);
                })(k);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: i } = (0, x.$)(),
                            r = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, _.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    N = (0, s.useCallback)(() => {
                        C(), (window.location.href = v.Z.main.href);
                    }, [C]),
                    { contentRef: f } = (0, h.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(g.L, { withBackwardFallback: '/', className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !f }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(A().title, A().important), variant: 'h3', size: 'xs', children: k }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: N,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(55178),
                a = i(56008);
            function n() {
                return (0, r.useContext)(a.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => b });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                _ = i(71926),
                m = i(41677),
                p = i(28999),
                x = i(57594),
                h = i(53514),
                v = i(85017),
                g = i(13798),
                k = i(61258),
                A = i(25649),
                C = i(24760),
                N = i(84141),
                f = i(5856),
                T = i.n(f);
            let b = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: f,
                        withExplicitMark: b = !0,
                        withSecondaryColor: I,
                        captionSize: S = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: E,
                        artistsClassName: O,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: R = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: M,
                        beforeTitle: P,
                        withArtistLink: D = !0,
                        withTrackLink: F = !0,
                        afterTitle: B,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: U } = (0, p.z)(),
                    {
                        settings: { isMobile: H },
                    } = (0, x.g)(),
                    $ = (0, C.$)({ withCustomTooltip: R }),
                    Y = (0, s.useSearchParams)(),
                    K = n.getUrl(M ? Object.fromEntries(Y) : void 0),
                    V = (0, o.useMemo)(() => {
                        var e;
                        let t = z({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [z, n.title, n.version]),
                    G = (0, N.O)({ track: n, onNavigate: U, withSavingQueryParams: M, entityType: v.n.TRACK }),
                    X = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: $ && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [H, $, S, n.isRemoved, n.title, n.version],
                    ),
                    Q = (0, o.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: $ && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: z({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: $ ? void 0 : z({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && F
                              ? (0, r.jsx)(k.N, {
                                    onClick: G,
                                    className: T().albumLink,
                                    href: K,
                                    'aria-label': V,
                                    title: $ ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [H, n.title, n.isRemoved, n.version, n.hasTrackLink, X, $, z, S, V, G, K, F]),
                    q = (0, A.s)(n.artists, f),
                    J = (0, o.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !n.isAvailable, [T().root_disliked]: n.isDisliked && !L, [T().root_withSecondaryColor]: I }, t),
                    children: (0, r.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(T().text, E),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            Q,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: $ ? void 0 : n.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        b &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: y,
                                            variant: n.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: n.id,
                                        }),
                                    B,
                                ],
                            }),
                            q.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: w }, O, E),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: q,
                                    withLink: n.isNonUserGenerated && D,
                                    lineClamp: J,
                                    captionSize: S,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(21732),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                _ = i(8677),
                m = i(68912),
                p = i(92102),
                x = i(85673),
                h = i.n(x);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: x,
                        withDNDBlock: v,
                        isDragging: g,
                        draggingClassName: k,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: N,
                        withDislike: f,
                        withTrailer: T = !0,
                        beforeTitle: b,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    } = e,
                    y = (0, l.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, c.g)(),
                    E = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(p.C, {
                    className: (0, a.$)(x, { [h().trackWithDots]: v, [h().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, r.jsx)(u.O, { className: (0, a.$)(h().dots, k), isDragging: g }) : void 0,
                    meta: (0, r.jsx)(m.j, { withArtistLink: !j, beforeTitle: b, track: i, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: E,
                    controls: (0, r.jsx)(_.Q, {
                        track: i,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: N,
                        withDislike: f,
                        withTrailer: T,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    }),
                    ...y,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73474: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { p: () => r }),
                (function (e) {
                    (e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page');
                })(r || (r = {}));
        },
        77088: (e) => {
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => k });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(16172),
                l = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                x = i(84062),
                h = i(57594),
                v = i(16510),
                g = i.n(v);
            let k = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, h.g)(),
                    v = (0, x.Z)(t.url),
                    A = (0, p.N)(),
                    C = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(k, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    N = (0, c.c)((e) => {
                        n.modal.isOpened && n.modal.close(), A({ to: o.QT.ArtistScreen }), v(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: N,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var r = i(64605),
                a = i(97647);
            let n = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
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
        90404: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
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
            var r;
            i.d(t, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        92102: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => N });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(91027),
                l = i(58359),
                c = i(71735),
                d = i(2969),
                u = i(23352),
                _ = i(46200),
                m = i(5537),
                p = i(28999),
                x = i(72676),
                h = i(57594),
                v = i(1444),
                g = i(60900),
                k = i(54171),
                A = i(35587),
                C = i.n(A);
            let N = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: A,
                        beforeBlock: N,
                        controls: f,
                        playButtonCellRender: T,
                        withLightning: b,
                        isPlaying: I,
                        isCurrent: S,
                        togglePlay: y,
                        restartPlay: j,
                        onPlayClick: E,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: M } = (0, _.q)(),
                    {
                        track: P,
                        fullscreenPlayer: D,
                        settings: { isMobile: F },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    { ref: U, intersectionPropertyId: H } = (0, u.n)(),
                    $ = (0, d.b)(),
                    Y = (0, c.P)(),
                    K = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: r } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && r({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(r({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: b, track: n }),
                    V = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === x.MT.LOADING_MEDIA_SOURCE || t.status === x.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return i && r === e;
                        }
                        return i;
                    })(n.entityId),
                    G = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && w && !G,
                    Q = (0, m.N)(),
                    q = n.isAvailable && Q && !G && !L,
                    J = (0, k.w)({ track: n, callback: y }),
                    Z = (0, o.c)(() => {
                        P.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, k.w)({ track: n, callback: Z }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    ea = (0, o.c)(() => {
                        if (!Y()) {
                            if (X) return void M();
                            if (q) return void z.open();
                            ei || I || (er(!0), null == et || et()), J(), $(!I), null == E || E(!I);
                        }
                    }),
                    en = (0, o.c)(() => {
                        if (I) return void j();
                        ea();
                    }),
                    es = (0, o.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            w && n.isAvailableOnlyForPlus && M(), Q && n.isAvailableOnlyForPlus && z.open();
                            return;
                        }
                        if (X) return void M();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !D.modal.isOpened));
                        return q && !t
                            ? void z.open()
                            : ((0, l.P)(e, C().ripple), F)
                              ? void ea()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !D.modal.isOpened && (ee(), q && z.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: ea, isPlaying: I, isCurrent: S, isLoading: V, playButtonIconSize: O });
                return (0, r.jsxs)(v.C, {
                    ref: U,
                    'aria-label': K,
                    'data-intersection-property-id': H,
                    onClick: es,
                    className: (0, a.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: S && F }, i),
                    ...R,
                    children: [N, eo, A, f],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var r = i(32290),
                a = i(21916),
                n = i(39407),
                s = i(21732),
                o = i(91027),
                l = i(63423),
                c = i(71926),
                d = i(70204),
                u = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', withRipple: _ = !0, buttonText: m, isBlock: p, key: x, className: h } = e,
                    v = (0, a.useRouter)(),
                    g = (0, u.N)().get(d.QG),
                    k = (0, o.c)(() => {
                        g.authorizationUrl && v.push(g.authorizationUrl);
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: k,
                        className: h,
                        isBlock: p,
                        color: 'primary',
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        95542: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3377)),
                Promise.resolve().then(i.bind(i, 11044)),
                Promise.resolve().then(i.bind(i, 92498)),
                Promise.resolve().then(i.bind(i, 7748));
        },
        98350: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var r = (function (e) {
                return (e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 3183, 7972, 8868, 7231, 6347, 9763, 6639, 7258, 6706, 1311, 1588, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 1330, 6477,
                7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 1647, 4547, 6881, 4220, 9562, 7358,
            ],
            () => e((e.s = 95542)),
        ),
            (_N_E = e.O());
    },
]);
