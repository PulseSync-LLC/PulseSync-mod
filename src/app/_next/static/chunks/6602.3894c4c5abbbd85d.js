(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6602],
    {
        12612: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        31506: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        32942: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
                slide_active: 'WheelDesktop_slide_active__NbA6o',
                slide_near: 'WheelDesktop_slide_near__kCsvo',
                slide_medium: 'WheelDesktop_slide_medium__PAlnb',
                slide_far: 'WheelDesktop_slide_far__88FOq',
                slide_far_above: 'WheelDesktop_slide_far_above__X_nG3',
                slide_far_below: 'WheelDesktop_slide_far_below__vx40N',
                slide_farthest: 'WheelDesktop_slide_farthest__8MTgl',
                slide_farthest_above: 'WheelDesktop_slide_farthest_above__P4NFL',
                slide_farthest_below: 'WheelDesktop_slide_farthest_below__BECfT',
            };
        },
        50430: (e) => {
            e.exports = {
                root: 'WheelMobile_root__VUNd_',
                wrapper: 'WheelMobile_wrapper__0eVMy',
                slide: 'WheelMobile_slide__weOOY',
                slide_active: 'WheelMobile_slide_active__h6xns',
                slide_near_above: 'WheelMobile_slide_near_above__YBxTV',
                slide_near_below: 'WheelMobile_slide_near_below__PjcpN',
                slide_medium_above: 'WheelMobile_slide_medium_above__2DKCg',
                slide_medium_below: 'WheelMobile_slide_medium_below__ZSCwN',
                slide_far: 'WheelMobile_slide_far__a_kSv',
                slide_far_above: 'WheelMobile_slide_far_above__DQ0zl',
                slide_far_below: 'WheelMobile_slide_far_below__V8_OD',
                slide_tap: 'WheelMobile_slide_tap__lD3Xp',
                'tap-scale': 'WheelMobile_tap-scale__B0SdO',
            };
        },
        52228: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', content: 'WheelMobileItem_content__I6Wm9' };
        },
        56364: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        58325: (e) => {
            e.exports = {
                root: 'WheelItem_root__rTS4x',
                important: 'WheelItem_important__l3Yv0',
                coverContainer: 'WheelItem_coverContainer__K_MG_',
                coverContainer_iconCover: 'WheelItem_coverContainer_iconCover___b3qE',
                cover: 'WheelItem_cover__8Ljm6',
                title: 'WheelItem_title___kPQk',
                title_accentColor: 'WheelItem_title_accentColor__QcDTs',
                description: 'WheelItem_description__XcQtW',
                titleContainer: 'WheelItem_titleContainer__PKr4f',
                explicitMark: 'WheelItem_explicitMark___BhCp',
                explicitMarkContainer: 'WheelItem_explicitMarkContainer__U630c',
                entityMeta: 'WheelItem_entityMeta__Zv3Op',
                icon: 'WheelItem_icon__ubVWk',
            };
        },
        72694: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { Wheel: () => eu });
            var a = i(62936),
                l = i(76345),
                o = i(19718),
                n = i(44020),
                s = i(23480),
                r = i(60188),
                c = i(42561),
                d = i(47480),
                _ = i(59935),
                p = i(81959),
                m = i(82265),
                h = i(15715);
            let u = (e) => {
                let t = e.data.meta;
                if ('albums' in t) {
                    var i, a, l;
                    return null != (l = null == (a = t.albums) || null == (i = a[0]) ? void 0 : i.type) ? l : m._.ALBUM;
                }
                return m._.ALBUM;
            };
            var b = i(79950),
                v = i(90163),
                x = i(11576);
            let j = [
                    { xPct: 0, xMaxPx: 0, yPct: 0, zPx: 0, widthPct: 100, opacity: 1, blurPx: 0 },
                    { xPct: 5, xMaxPx: 24, yPct: 0, zPx: 0, widthPct: 95, opacity: 1, blurPx: 0 },
                    { xPct: 15, xMaxPx: 72, yPct: 0, zPx: 0, widthPct: 85, opacity: 1, blurPx: 0 },
                    { xPct: 40, xMaxPx: 136, yPct: 50, zPx: 0, widthPct: 85, opacity: 0.3, blurPx: 6 },
                    { xPct: 55, xMaxPx: 200, yPct: 50, zPx: 0, widthPct: 85, opacity: 0.1, blurPx: 12 },
                ],
                y = j.length - 1,
                C = (e, t, i) => e + (t - e) * i,
                k = { slideLabelMessage: '', slideRole: 'listitem' },
                f = { forceToAxis: !0, sensitivity: 0.3 },
                P = function (e, t, i) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return a ? Math.min(l, i - l) : l;
                };
            var N = i(32942),
                I = i.n(N),
                g = i(28587),
                w = i(58412),
                M = i(20418),
                W = i(25270),
                D = i(85906),
                A = i(58325),
                T = i.n(A);
            let S = (0, o.PA)((e) => {
                let { item: t, shouldPlayOnClick: i = !0 } = e,
                    { pageId: l } = (0, c.$au)(),
                    o = (0, W.r_)(t.data.type),
                    s = ''.concat(o, ' ').concat(t.data.title),
                    { from: d } = (0, c.fyy)({ pageId: l }),
                    m = (0, c.PT7)(),
                    h = (0, c.brA)(),
                    u = (0, c.D5X)(),
                    v = (0, _.c)((e, i) => {
                        u(e, null != i ? i : ''), e && t.handleFeedbackView();
                    }),
                    { ref: x, intersectionPropertyId: j } = (0, c.nMI)({ callback: v, withViewUuid: !0 }),
                    {
                        isPlaying: y,
                        isCurrent: C,
                        togglePlay: k,
                    } = (0, c.Dx4)({ playContextParams: { contextData: { type: p.K.Album, meta: { id: t.data.id }, from: d }, loadContextMeta: !0 } }),
                    f = (0, W.cp)({ album: t.data, callback: k }),
                    P = (0, _.c)(() => {
                        i && (m() || (f(), h(!y), t.handleFeedbackClick()));
                    }),
                    N = (0, n.useCallback)(
                        (e) =>
                            (0, a.jsx)('div', {
                                className: T().coverContainer,
                                children: (0, a.jsx)(D.q1, {
                                    isAvailable: t.data.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.data.coverUri,
                                    title: t.data.title,
                                    className: (0, b.$)(D.$f.playButtonCell, T().cover, T().important),
                                    alt: s,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    ...e,
                                }),
                            }),
                        [t.data.isAvailable, t.data.coverUri, t.data.title, s],
                    ),
                    I = null == N ? void 0 : N({ onPlayButtonClick: P, isPlaying: y, isCurrent: C }),
                    g = (0, r.L)(() =>
                        t.description ? (0, a.jsx)(M.Caption, { className: T().description, variant: 'span', lineClamp: 1, children: t.description }) : null,
                    );
                return (0, a.jsxs)(D.Cj, {
                    ref: x,
                    'data-intersection-property-id': j,
                    className: (0, b.$)(D.$f.root, T().root, T().important),
                    'aria-label': s,
                    onClick: P,
                    children: [
                        I,
                        (0, a.jsxs)('div', {
                            className: T().entityMeta,
                            children: [
                                g,
                                (0, a.jsxs)('div', {
                                    className: T().titleContainer,
                                    children: [
                                        (0, a.jsx)(M.Caption, { className: T().title, variant: 'span', lineClamp: t.description ? 3 : 4, children: t.data.title }),
                                        t.data.explicitDisclaimer &&
                                            (0, a.jsx)(D.Nq, {
                                                className: T().explicitMark,
                                                containerClassName: T().explicitMarkContainer,
                                                getDescriptionTexts: t.data.getDescriptionTexts,
                                                variant: t.data.explicitDisclaimer,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(85742);
            let E = (0, o.PA)((e) => {
                    var t, i;
                    let { item: l, shouldNavigateOnClick: o = !0 } = e,
                        n = (0, c.NKK)(),
                        d = (0, c.D5X)(),
                        p = (0, _.c)((e, t) => {
                            d(e, null != t ? t : ''), e && l.handleFeedbackView();
                        }),
                        { ref: m, intersectionPropertyId: h } = (0, c.nMI)({ callback: p, withViewUuid: !0 }),
                        u = (0, c.ZpR)(null != (t = l.data.url) ? t : ''),
                        v = (0, r.L)(() =>
                            l.description ? (0, a.jsx)(M.Caption, { className: T().description, variant: 'span', lineClamp: 1, children: l.description }) : null,
                        ),
                        x = (0, _.c)((e) => {
                            var t;
                            o && (u(e), n({ to: s.QT.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                        }),
                        j = (0, _.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), x());
                        });
                    return (0, a.jsxs)(D.Cj, {
                        ref: m,
                        'data-intersection-property-id': h,
                        className: (0, b.$)(D.$f.root, T().root, T().important),
                        'aria-label': ''.concat(l.data.title, ' ').concat(null != (i = l.description) ? i : ''),
                        role: 'link',
                        tabIndex: 0,
                        onClick: x,
                        onKeyDown: j,
                        children: [
                            (0, a.jsx)('div', {
                                className: T().coverContainer,
                                children: (0, a.jsx)(D.BW, {
                                    className: (0, b.$)(T().cover, T().important),
                                    src: l.data.cover.uri,
                                    size: 100,
                                    alt: l.data.title,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    withLoadingIndicator: !1,
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: T().entityMeta,
                                children: [
                                    v,
                                    (0, a.jsxs)('div', {
                                        className: T().titleContainer,
                                        children: [
                                            (0, a.jsx)(M.Caption, { className: T().title, variant: 'span', lineClamp: l.description ? 3 : 4, children: l.data.title }),
                                            (0, a.jsx)(L.Icon, { className: T().icon, variant: 'link_rounded', size: 'xxs' }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                $ = (0, o.PA)((e) => {
                    let { item: t, shouldPlayOnClick: i = !0 } = e,
                        { pageId: l } = (0, c.$au)(),
                        o = (0, c.PT7)(),
                        { isFreemium: s } = (0, c.XCI)(),
                        [r, d] = (0, n.useState)(!1),
                        p = (0, c.brA)(),
                        m = (0, c.D5X)(),
                        h = (0, _.c)((e, i) => {
                            m(e, null != i ? i : ''), e && t.handleFeedbackView();
                        }),
                        { ref: u, intersectionPropertyId: v } = (0, c.nMI)({ callback: h, withViewUuid: !0 }),
                        { isPlaying: x, togglePlay: j } = (0, c.B0S)({
                            seeds: t.data.seeds,
                            pageIdForFrom: l,
                            blockIdForFrom: ''.concat(c.UfI.RADIO, '-').concat(c.UfI.WHEEL),
                        }),
                        y = (0, _.c)(() => {
                            if (i && !o()) {
                                if (s) return void d(!0);
                                j(), p(!x), t.handleFeedbackClick();
                            }
                        }),
                        C = (0, n.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, a.jsx)('div', {
                                          className: (0, b.$)(T().coverContainer, T().coverContainer_iconCover),
                                          children: (0, a.jsx)(D.BW, {
                                              className: (0, b.$)(T().cover, T().important),
                                              src: t.data.agent.cover.uri,
                                              size: 100,
                                              alt: t.data.title,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              fallbackIconSize: 'm',
                                              withLoadingIndicator: !1,
                                          }),
                                      })
                                    : null,
                            [t.data.agent, t.data.title],
                        ),
                        k = (0, _.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), y());
                        });
                    return (0, a.jsxs)(D.Cj, {
                        ref: u,
                        'data-intersection-property-id': v,
                        className: (0, b.$)(D.$f.root, T().root, T().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: y,
                        onKeyDown: k,
                        children: [
                            (0, a.jsx)(D.SU, {
                                isOpened: r,
                                onOpenChange: d,
                                isEnabled: s,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: C,
                            }),
                            (0, a.jsx)('div', {
                                className: T().entityMeta,
                                children: (0, a.jsx)('div', {
                                    className: T().titleContainer,
                                    children: (0, a.jsx)(M.Caption, {
                                        className: (0, b.$)(T().title, T().title_accentColor),
                                        variant: 'span',
                                        lineClamp: 4,
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                O = (0, o.PA)((e) => {
                    let { item: t, shouldActionOnClick: i = !0 } = e,
                        { vibeSettings: l } = (0, c.Pjs)(),
                        { isFreemium: o } = (0, c.XCI)(),
                        [r, d] = (0, n.useState)(!1),
                        p = (0, c.NKK)(),
                        m = (0, c.D5X)(),
                        h = (0, _.c)((e, i) => {
                            m(e, null != i ? i : ''), e && t.handleFeedbackView();
                        }),
                        { ref: u, intersectionPropertyId: v } = (0, c.nMI)({ callback: h, withViewUuid: !0 }),
                        x = (0, _.c)(() => {
                            if (i) {
                                if (o) return void d(!0);
                                l.modal.open(), p({ to: s.QT.MyWaweSettingsScreen });
                            }
                        }),
                        j = (0, _.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), x());
                        }),
                        y = (0, n.useCallback)(
                            () =>
                                (0, a.jsx)('div', {
                                    className: (0, b.$)(T().coverContainer, T().coverContainer_iconCover),
                                    children: (0, a.jsx)(D.BW, {
                                        className: (0, b.$)(T().cover, T().important),
                                        src: t.data.cover.uri,
                                        size: 100,
                                        alt: t.data.title,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        fallbackIconSize: 'm',
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                            [t.data.cover.uri, t.data.title],
                        );
                    return (0, a.jsxs)(D.Cj, {
                        ref: u,
                        'data-intersection-property-id': v,
                        className: (0, b.$)(D.$f.root, T().root, T().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: x,
                        onKeyDown: j,
                        children: [
                            (0, a.jsx)(D.SU, { isOpened: r, onOpenChange: d, isEnabled: o, placement: 'bottom', textVariant: 'vibe', renderChildren: y }),
                            (0, a.jsx)('div', {
                                className: T().entityMeta,
                                children: (0, a.jsx)('div', {
                                    className: T().titleContainer,
                                    children: (0, a.jsx)(M.Caption, { className: T().title, variant: 'span', lineClamp: 4, children: t.data.title }),
                                }),
                            }),
                        ],
                    });
                });
            var B = i(32632);
            let V = (0, o.PA)((e) => {
                var t;
                let { item: i, shouldPlayOnClick: l = !0 } = e,
                    { pageId: o } = (0, c.$au)(),
                    s = (0, c.PT7)(),
                    { isFreemium: d } = (0, c.XCI)(),
                    [p, m] = (0, n.useState)(!1),
                    h = (0, c.brA)(),
                    u = (0, c.D5X)(),
                    v = (0, _.c)((e, t) => {
                        u(e, null != t ? t : ''), e && i.handleFeedbackView();
                    }),
                    { ref: x, intersectionPropertyId: j } = (0, c.nMI)({ callback: v, withViewUuid: !0 }),
                    {
                        isPlaying: y,
                        togglePlay: C,
                        isCurrent: k,
                    } = (0, c.B0S)({ seeds: i.data.seeds, pageIdForFrom: o, blockIdForFrom: ''.concat(c.UfI.RADIO, '-').concat(c.UfI.WHEEL) }),
                    f = (0, _.c)(() => {
                        if (l && !s()) {
                            if (d) return void m(!0);
                            C(), h(!y), i.handleFeedbackClick();
                        }
                    }),
                    P = (0, n.useCallback)(
                        () =>
                            i.data.agent
                                ? (0, a.jsx)('div', {
                                      className: T().coverContainer,
                                      children: (0, a.jsx)(B.nr, {
                                          alt: ''.concat(i.data.description, ' ').concat(i.data.title),
                                          agent: i.data.agent,
                                          isPlaying: y,
                                          isCurrent: k,
                                          onPlayButtonClick: f,
                                          className: (0, b.$)(D.$f.playButtonCell, T().cover, T().important),
                                          playButtonIconSize: 'l',
                                          fallbackIconSize: 'm',
                                      }),
                                  })
                                : null,
                        [i.data.agent, i.data.description, i.data.title, y, k, f],
                    ),
                    N = (0, r.L)(() =>
                        i.description ? (0, a.jsx)(M.Caption, { className: T().description, variant: 'span', lineClamp: 1, children: i.description }) : null,
                    );
                return (0, a.jsxs)(D.Cj, {
                    ref: x,
                    'data-intersection-property-id': j,
                    className: (0, b.$)(D.$f.root, T().root, T().important),
                    'aria-label': ''.concat(null != (t = i.data.description) ? t : '', ' ').concat(i.data.title),
                    onClick: f,
                    children: [
                        (0, a.jsx)(D.SU, {
                            isOpened: p,
                            onOpenChange: m,
                            isEnabled: d,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: i.data.stationType,
                            renderChildren: P,
                        }),
                        (0, a.jsxs)('div', {
                            className: T().entityMeta,
                            children: [
                                N,
                                (0, a.jsx)('div', {
                                    className: T().titleContainer,
                                    children: (0, a.jsx)(M.Caption, { className: T().title, variant: 'span', lineClamp: i.description ? 3 : 4, children: i.data.title }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var U = i(30388),
                K = i(87600),
                R = i.n(K);
            let X = (e) => {
                let { isShimmerActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: R().root,
                    children: [
                        (0, a.jsx)('div', { className: R().coverContainer, children: (0, a.jsx)(U.Shimmer, { isActive: t, className: R().cover, radius: 'xs' }) }),
                        (0, a.jsxs)('div', {
                            className: R().meta,
                            children: [
                                (0, a.jsx)(U.Shimmer, { isActive: t, className: R().title, radius: 's' }),
                                (0, a.jsx)(U.Shimmer, { isActive: t, className: R().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var F = i(31506),
                z = i.n(F);
            let Y = (0, o.PA)((e) => {
                    let { item: t, shouldActionOnClick: i, originalIndex: l, objectsCount: o, isShimmerVisible: n } = e,
                        d = (0, r.L)(() => {
                            switch (t.type) {
                                case g.D.WAVE:
                                    if (t.style === w.y.CONTROL_ACCENT)
                                        return (0, a.jsx)(c.Bki, {
                                            objectId: t.id,
                                            objectType: s.ky.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            objectsCount: o,
                                            children: (0, a.jsx)($, { item: t, shouldPlayOnClick: i }),
                                        });
                                    return (0, a.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: s.ky.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, a.jsx)(V, { item: t, shouldPlayOnClick: i }),
                                    });
                                case g.D.ALBUM:
                                    return (0, a.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: s.ky.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, a.jsx)(S, { item: t, shouldPlayOnClick: i }),
                                    });
                                case g.D.PROMO_LINK:
                                    return (0, a.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: s.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, a.jsx)(E, { item: t, shouldNavigateOnClick: i }),
                                    });
                                case g.D.SETTING:
                                    return (0, a.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: s.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, a.jsx)(O, { item: t }),
                                    });
                            }
                        });
                    return (0, a.jsxs)('div', {
                        className: z().root,
                        children: [
                            (0, a.jsx)('div', { className: (0, b.$)(z().element, { [z().element_hidden]: n }), children: d }),
                            (0, a.jsx)('div', { className: (0, b.$)(z().shimmer, { [z().shimmer_visible]: n }), children: n && (0, a.jsx)(X, { isShimmerActive: !0 }) }),
                        ],
                    });
                }),
                q = Math.floor(3.5),
                H = (e) => {
                    let { className: t } = e;
                    return (0, a.jsx)('div', {
                        className: (0, b.$)(I().root, t),
                        children: (0, a.jsx)('div', {
                            className: (0, b.$)(I().wrapper, I().wrapper_shimmer),
                            children: Array.from({ length: 7 }).map((e, t) =>
                                (0, a.jsx)(
                                    'div',
                                    {
                                        className: (0, b.$)(
                                            I().slide,
                                            ((e) => {
                                                let t = Math.abs(e - q);
                                                return 0 === t
                                                    ? I().slide_active
                                                    : 1 === t
                                                      ? I().slide_near
                                                      : 2 === t
                                                        ? I().slide_medium
                                                        : (0, b.$)(I().slide_far, I()['slide_far_'.concat(e < q ? 'above' : 'below')]);
                                            })(t),
                                        ),
                                        children: (0, a.jsx)(X, { isShimmerActive: !0 }),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                Q = (e) => {
                    e.slides.forEach((e) => {
                        void 0 !== e.progress &&
                            ((e, t) => {
                                var i, a, l, o, n, s, r, c, d, _, p, m, h, u;
                                let b = Math.min(Math.abs(t), y),
                                    v = Math.floor(b),
                                    x = Math.min(v + 1, y),
                                    k = b - v,
                                    f = j[v],
                                    P = j[x],
                                    N = C(null != (i = null == f ? void 0 : f.xPct) ? i : 0, null != (a = null == P ? void 0 : P.xPct) ? a : 0, k),
                                    I = C(null != (l = null == f ? void 0 : f.xMaxPx) ? l : 0, null != (o = null == P ? void 0 : P.xMaxPx) ? o : 0, k),
                                    g = C(null != (n = null == f ? void 0 : f.yPct) ? n : 0, null != (s = null == P ? void 0 : P.yPct) ? s : 0, k) * (t > 0 ? 1 : -1),
                                    w = C(null != (r = null == f ? void 0 : f.zPx) ? r : 0, null != (c = null == P ? void 0 : P.zPx) ? c : 0, k),
                                    M = C(null != (d = null == f ? void 0 : f.widthPct) ? d : 0, null != (_ = null == P ? void 0 : P.widthPct) ? _ : 0, k),
                                    W = C(null != (p = null == f ? void 0 : f.opacity) ? p : 0, null != (m = null == P ? void 0 : P.opacity) ? m : 0, k),
                                    D = C(null != (h = null == f ? void 0 : f.blurPx) ? h : 0, null != (u = null == P ? void 0 : P.blurPx) ? u : 0, k),
                                    A = N < 0.01 ? '0px' : 'min('.concat(N, '%, ').concat(I, 'px)');
                                (e.style.transform = 'translate3d('.concat(A, ', ').concat(g, '%, ').concat(w, 'px)')),
                                    (e.style.width = ''.concat(M, '%')),
                                    (e.style.opacity = String(W)),
                                    (e.style.filter = D > 0.01 ? 'blur('.concat(D, 'px)') : 'none');
                            })(e, e.progress);
                    });
                },
                G = (0, o.PA)((e) => {
                    let { className: t, items: i, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: o, setActiveIndex: s, isEmpty: r },
                        } = (0, c.Pjs)(),
                        { formatMessage: p } = (0, d.A)(),
                        m = (0, n.useRef)(null),
                        h = (0, c.fBs)(),
                        u = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(18 / e.length) }, () => e).flat()))(i);
                    (0, n.useEffect)(() => {
                        h();
                    }, [h]),
                        (0, n.useEffect)(() => {
                            let e = m.current;
                            e && 0 !== i.length && e.realIndex !== o && (e.slideToLoop(o, 0), Q(e));
                        }, [o, i.length]);
                    let j = (0, _.c)((e) => {
                            s(e.realIndex);
                        }),
                        y = (0, _.c)((e) => {
                            m.current = e;
                        }),
                        C = (0, _.c)((e) => {
                            Q(e);
                        }),
                        N = (0, _.c)((e) => {
                            e.el.classList.remove(I().root_transitioning), s(e.realIndex), Q(e);
                        }),
                        g = (0, _.c)((e) => {
                            e.el.classList.add(I().root_transitioning);
                        }),
                        w = (0, _.c)((e, t) => (i) => {
                            e >= 3 && m.current && (i.stopPropagation(), m.current.slideToLoop(t));
                        });
                    return l && r
                        ? (0, a.jsx)(H, { className: t })
                        : (0, a.jsx)(x.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: 7,
                              slidesPerView: 7,
                              spaceBetween: 16,
                              initialSlide: o,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [v.Jq, v.FJ, v.U1],
                              a11y: k,
                              freeMode: !0,
                              mousewheel: f,
                              className: (0, b.$)(I().root, t),
                              wrapperClass: I().wrapper,
                              onSwiper: y,
                              onRealIndexChange: j,
                              onSlideChangeTransitionStart: g,
                              onTransitionEnd: N,
                              onProgress: C,
                              tag: 'section',
                              role: 'region',
                              'aria-label': p({ id: 'a11y-regions.wheel' }),
                              children: u.map((e, t) => {
                                  let n = P(t, o, u.length),
                                      s = w(n, t);
                                  return (0, a.jsx)(
                                      x.qr,
                                      {
                                          className: I().slide,
                                          onClickCapture: s,
                                          children: (0, a.jsx)(Y, {
                                              item: e,
                                              shouldActionOnClick: n < 3,
                                              originalIndex: t % i.length,
                                              objectsCount: i.length,
                                              isShimmerVisible: l,
                                          }),
                                      },
                                      e.data.getKey(t),
                                  );
                              }),
                          });
                }),
                J = function (e, t, i) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return a && Math.abs(l) > i / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var Z = i(50430),
                ee = i.n(Z),
                et = i(89875),
                ei = i(61327);
            let ea = [
                { position: 7, opacity: 1 },
                { position: 12, opacity: 0.92 },
                { position: 16, opacity: 0.85 },
                { position: 20, opacity: 0.78 },
                { position: 23, opacity: 0.72 },
                { position: 26, opacity: 0.65 },
                { position: 29, opacity: 0.59 },
                { position: 31, opacity: 0.53 },
                { position: 33, opacity: 0.47 },
                { position: 35, opacity: 0.41 },
                { position: 37, opacity: 0.35 },
                { position: 39, opacity: 0.28 },
                { position: 42, opacity: 0.22 },
                { position: 45, opacity: 0.15 },
                { position: 48, opacity: 0.08 },
                { position: 52, opacity: 0 },
            ];
            var el = i(56364),
                eo = i.n(el);
            let en = (e) => {
                let { color: t } = e;
                return (0, a.jsx)('div', {
                    className: eo().root,
                    style: ((e) => {
                        let { h: t, s: i } = (0, et.g)(e),
                            { r: a, g: l, b: o } = (0, ei.E)(e),
                            n = ea
                                .map((e) => {
                                    let { position: t, opacity: i } = e,
                                        n = Math.round(a * i),
                                        s = Math.round(l * i),
                                        r = Math.round(o * i);
                                    return 'rgba('.concat(n, ', ').concat(s, ', ').concat(r, ', ').concat(i, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(n, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(i, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var es = i(52228),
                er = i.n(es);
            let ec = (0, o.PA)((e) => {
                let { item: t, originalIndex: i, objectsCount: l } = e,
                    o = (0, r.L)(() => {
                        switch (t.type) {
                            case g.D.WAVE:
                                if (t.style === w.y.CONTROL_ACCENT)
                                    return (0, a.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: s.ky.Wave,
                                        objectPosX: i + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, a.jsx)($, { item: t }),
                                    });
                                return (0, a.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: s.ky.Wave,
                                    objectPosX: i + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, a.jsx)(V, { item: t }),
                                });
                            case g.D.ALBUM:
                                return (0, a.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: s.ky.Album,
                                    objectPosX: i + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, a.jsx)(S, { item: t }),
                                });
                            case g.D.PROMO_LINK:
                                return (0, a.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: s.ky.Link,
                                    objectPosX: i + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, a.jsx)(E, { item: t }),
                                });
                            case g.D.SETTING:
                                return (0, a.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: s.ky.Link,
                                    objectPosX: i + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, a.jsx)(O, { item: t }),
                                });
                        }
                    }),
                    n = (0, r.L)(() => {
                        switch (t.type) {
                            case g.D.WAVE:
                                var e;
                                return null == (e = t.data.agent) ? void 0 : e.cover.color;
                            case g.D.ALBUM:
                                return t.data.averageColor;
                            case g.D.PROMO_LINK:
                                return t.data.color;
                            default:
                                return;
                        }
                    }),
                    d = t.style !== w.y.CONTROL;
                return (0, a.jsxs)('div', {
                    className: er().root,
                    children: [d && (0, a.jsx)(en, { color: (0, B.OH)(n).primary }), (0, a.jsx)('div', { className: er().content, children: o })],
                });
            });
            var ed = i(12612),
                e_ = i.n(ed);
            let ep = () => (0, a.jsx)('div', { className: e_().root, children: (0, a.jsx)('div', { className: e_().petal }) }),
                em = (e) => {
                    let { className: t } = e;
                    return (0, a.jsx)('div', {
                        className: (0, b.$)(ee().root, t),
                        children: (0, a.jsx)('div', {
                            className: ee().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, a.jsx)(
                                    'div',
                                    {
                                        className: (0, b.$)(
                                            ee().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    i = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? ee().slide_active
                                                    : t < 2
                                                      ? (0, b.$)(ee().slide_near, ee()['slide_near_'.concat(i)])
                                                      : t < 3
                                                        ? (0, b.$)(ee().slide_medium, ee()['slide_medium_'.concat(i)])
                                                        : (0, b.$)(ee().slide_far, ee()['slide_far_'.concat(i)]);
                                            })(t),
                                        ),
                                        children: (0, a.jsx)(ep, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                eh = (0, o.PA)((e) => {
                    let { className: t, items: i, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: o, setActiveIndex: s },
                        } = (0, c.Pjs)(),
                        { formatMessage: r } = (0, d.A)(),
                        p = (0, c.fBs)(),
                        [m, h] = (0, n.useState)(null),
                        u = 3 * i.length;
                    (0, n.useEffect)(() => {
                        p();
                    }, [p]);
                    let j = (0, _.c)((e) => {
                            s(e.realIndex);
                        }),
                        y = (0, _.c)((e) => {
                            h(e.clickedIndex);
                        }),
                        C = (0, _.c)(() => {
                            h(null);
                        });
                    return l
                        ? (0, a.jsx)(em, { className: t })
                        : (0, a.jsx)(x.RC, {
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: i.length + 1,
                              modules: [v.Jq, v.U1],
                              a11y: k,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, b.$)(ee().root, t),
                              wrapperClass: ee().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: j,
                              onTransitionEnd: j,
                              onTap: y,
                              tag: 'section',
                              role: 'region',
                              'aria-label': r({ id: 'a11y-regions.wheel' }),
                              children: Array.from({ length: u }, (e, t) => {
                                  let l = t % i.length,
                                      n = i[l],
                                      s = Math.floor(t / i.length);
                                  if (void 0 === n) return null;
                                  let r = P(t, o, u, !1),
                                      c = J(t, o, u, !1);
                                  return (0, a.jsx)(
                                      x.qr,
                                      {
                                          className: (0, b.$)(
                                              ee().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? ee().slide_active
                                                      : e < 2
                                                        ? (0, b.$)(ee().slide_near, ee()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, b.$)(ee().slide_medium, ee()['slide_medium_'.concat(t)])
                                                          : (0, b.$)(ee().slide_far, ee()['slide_far_'.concat(t)]))(r, c),
                                              { [ee().slide_tap]: t === m },
                                          ),
                                          onAnimationEnd: C,
                                          children: (0, a.jsx)(ec, { item: n, originalIndex: l, objectsCount: i.length }),
                                      },
                                      ''.concat(n.data.getKey(l), '-').concat(s),
                                  );
                              }),
                          });
                }),
                eu = (0, o.PA)((e) => {
                    let { className: t } = e,
                        {
                            wheel: i,
                            settings: { isMobile: o },
                        } = (0, c.Pjs)(),
                        m = (0, c.eGp)(),
                        b = (() => {
                            let { formatMessage: e } = (0, d.A)(),
                                { wheel: t, sonataState: i } = (0, c.Pjs)();
                            return (0, _.c)((a) => {
                                var l;
                                let o = ((e) => {
                                    var t, i, a, l, o, n, s, r;
                                    if (!e || 'object' != typeof e) return { type: h.b.OTHER };
                                    let c = e.sourceContext,
                                        d = null != c ? c : e.context,
                                        _ = e.entity,
                                        m = null == (t = d.data) ? void 0 : t.type,
                                        b = null == (a = d.data) || null == (i = a.meta) ? void 0 : i.id,
                                        v = null == (o = _.data) || null == (l = o.meta) ? void 0 : l.id;
                                    if (!m || void 0 === b) return { type: h.b.OTHER };
                                    switch (m) {
                                        case p.K.Album:
                                            return { type: h.b.ALBUM, data: { id: Number(b), trackData: { id: v, albumType: u(_) } } };
                                        case p.K.Artist:
                                            return { type: h.b.ARTIST, data: { id: Number(b), trackData: { id: v, albumType: u(_) } } };
                                        case p.K.Playlist:
                                            return {
                                                type: h.b.PLAYLIST,
                                                data: {
                                                    playlistUuid: String(null != (r = null == (s = d.data) || null == (n = s.meta) ? void 0 : n.playlistUuid) ? r : b),
                                                    trackData: { id: v, albumType: u(_) },
                                                },
                                            };
                                        case p.K.Vibe:
                                            return { type: h.b.WAVE, data: { seeds: String(b).split(',') } };
                                        case p.K.Generative:
                                            return { type: h.b.GENERATIVE };
                                        default:
                                            return { type: h.b.OTHER, data: { id: v, albumType: u(_) } };
                                    }
                                })(a);
                                ((null == (l = i.entityMeta) ? void 0 : l.isTrackMusic) || !t.lastRequestId) && t.getData({ context: o }, e);
                            });
                        })(),
                        v = (0, c.NFA)();
                    (0, n.useEffect)(() => {
                        let e = null == m ? void 0 : m.state.queueState.currentEntity.onChange(b);
                        return () => {
                            null == e || e();
                        };
                    }, [m, b, i]),
                        (0, n.useEffect)(() => {
                            if (!i.isNeededToLoad) return;
                            let e = v.get(c.byd).connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && b();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [v, b, i.isNeededToLoad]);
                    let x = (0, r.L)(() =>
                        o
                            ? (0, a.jsx)(eh, { className: t, items: i.items, isShimmerVisible: i.isShimmerVisible })
                            : (0, a.jsx)(G, { className: t, items: i.items, isShimmerVisible: i.isShimmerVisible }),
                    );
                    return (0, a.jsx)(c.FoH, { blockId: s.LA.Wheel, blockType: s.LA.Wheel, blockPosX: 1, blockPosY: 3, objectsCount: i.items.length, children: x });
                });
        },
        87600: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
        96013: (e) => {
            function t() {}
            (t.prototype = {
                on: function (e, t, i) {
                    var a = this.e || (this.e = {});
                    return (a[e] || (a[e] = [])).push({ fn: t, ctx: i }), this;
                },
                once: function (e, t, i) {
                    var a = this;
                    function l() {
                        a.off(e, l), t.apply(i, arguments);
                    }
                    return (l._ = t), this.on(e, l, i);
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), a = 0, l = i.length; a < l; a++)
                        i[a].fn.apply(i[a].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var i = this.e || (this.e = {}),
                        a = i[e],
                        l = [];
                    if (a && t) for (var o = 0, n = a.length; o < n; o++) a[o].fn !== t && a[o].fn._ !== t && l.push(a[o]);
                    return l.length ? (i[e] = l) : delete i[e], this;
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t);
        },
    },
]);
