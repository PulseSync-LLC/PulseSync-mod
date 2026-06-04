(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9858],
    {
        10613: (e) => {
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
        20880: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
        37476: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        61566: (e) => {
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
        63306: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { Wheel: () => eb });
            var i = a(32290),
                l = a(63283),
                o = a(96103),
                n = a(55178),
                r = a(16172),
                s = a(6752),
                c = a(49574),
                d = a(60900),
                m = a(91027),
                h = a(71483),
                p = a(64605),
                _ = a(36751);
            let u = (e) => {
                let t = e.data.meta;
                if ('albums' in t) {
                    var a, i, l;
                    return null != (l = null == (i = t.albums) || null == (a = i[0]) ? void 0 : a.type) ? l : p._.ALBUM;
                }
                return p._.ALBUM;
            };
            var b = a(63618),
                v = a(6005),
                j = a(15875),
                x = a(59824);
            let C = Math.PI / 2,
                y = (e) => {
                    let { translateXPx: t, opacity: a } = ((e) => {
                        let t = Math.abs(e) / 4,
                            a = Math.min(t / 2, 1),
                            i = 120 * (1 + Math.cos(((e) => (e <= 1 ? Math.PI - e * C : e <= 2 ? C - (e - 1) * C : 0))(t)));
                        return {
                            translateXPx: i,
                            opacity:
                                1 -
                                0.86 *
                                    ((e) => {
                                        let t = Math.min(Math.max(e, 0), 1);
                                        return t * t * (3 - 2 * t);
                                    })((a - 0.42) / 0.5800000000000001),
                        };
                    })(e);
                    return { transform: 'translate3d('.concat(t, 'px, 0, 0)'), opacity: a };
                },
                I = { slideLabelMessage: '', slideRole: 'listitem' },
                k = { forceToAxis: !0, sensitivity: 0.3 },
                f = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return i ? Math.min(l, a - l) : l;
                };
            var E = a(70382),
                N = a.n(E),
                T = a(24991),
                M = a(44240),
                g = a(71926),
                A = a(9152),
                W = a(33797),
                w = a(44574),
                P = a(10613),
                L = a.n(P);
            let S = (0, o.PA)((e) => {
                let { item: t, shouldPlayOnClick: a = !0 } = e,
                    { pageId: l } = (0, c.$au)(),
                    { openIntroModalFromPlay: o } = (0, c.e8U)(),
                    r = (0, A.r_)(t.data.type),
                    d = ''.concat(r, ' ').concat(t.data.title),
                    { from: p } = (0, c.fyy)({ pageId: l }),
                    _ = (0, c.PT7)(),
                    u = (0, c.brA)(),
                    v = (0, c.D5X)(),
                    j = (0, m.c)((e, a) => {
                        v(e, null != a ? a : ''), e && t.handleFeedbackView();
                    }),
                    { ref: C, intersectionPropertyId: y } = (0, c.nMI)({ callback: j, withViewUuid: !0 }),
                    {
                        isPlaying: I,
                        isCurrent: k,
                        togglePlay: f,
                    } = (0, c.Dx4)({ playContextParams: { contextData: { type: h.K.Album, meta: { id: t.data.id }, from: p }, loadContextMeta: !0 } }),
                    E = (0, A.cp)({ album: t.data, callback: f }),
                    N = (0, m.c)(() => {
                        !(!a || _()) && (o() || (E(), u(!I), t.handleFeedbackClick()));
                    }),
                    T = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)('div', {
                                className: L().coverContainer,
                                children: (0, i.jsx)(w.q1, {
                                    isAvailable: t.data.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.data.coverUri,
                                    title: t.data.title,
                                    className: (0, b.$)(w.$f.playButtonCell, L().cover, L().important),
                                    alt: d,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    ...e,
                                }),
                            }),
                        [t.data.isAvailable, t.data.coverUri, t.data.title, d],
                    ),
                    M = null == T ? void 0 : T({ onPlayButtonClick: N, isPlaying: I, isCurrent: k }),
                    P = (0, s.L)(() =>
                        t.description
                            ? (0, i.jsx)(g.Caption, {
                                  className: L().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_DESCRIPTION),
                                  children: t.description,
                              })
                            : null,
                    ),
                    S = (0, s.L)(() => {
                        var e;
                        return (null == (e = t.data.artists) ? void 0 : e.length) ? ''.concat((0, W.XV)(t.data.artists), ' — ').concat(t.data.title) : t.data.title;
                    });
                return (0, i.jsxs)(w.Cj, {
                    ref: C,
                    'data-intersection-property-id': y,
                    className: (0, b.$)(w.$f.root, L().root, L().important),
                    'aria-label': d,
                    onClick: N,
                    ...(0, x.Am)(x.e8.wheel.WHEEL_ALBUM_ITEM),
                    children: [
                        M,
                        (0, i.jsxs)('div', {
                            className: L().entityMeta,
                            children: [
                                P,
                                (0, i.jsxs)('div', {
                                    className: L().titleContainer,
                                    children: [
                                        (0, i.jsx)(g.Caption, {
                                            className: L().title,
                                            variant: 'span',
                                            lineClamp: t.description ? 3 : 4,
                                            ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_TITLE),
                                            children: S,
                                        }),
                                        t.data.explicitDisclaimer &&
                                            (0, i.jsx)(w.Nq, {
                                                className: L().explicitMark,
                                                containerClassName: L().explicitMarkContainer,
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
            var D = a(82586);
            let O = (0, o.PA)((e) => {
                    var t, a;
                    let { item: l, shouldNavigateOnClick: o = !0 } = e,
                        n = (0, c.NKK)(),
                        d = (0, c.D5X)(),
                        h = (0, m.c)((e, t) => {
                            d(e, null != t ? t : ''), e && l.handleFeedbackView();
                        }),
                        { ref: p, intersectionPropertyId: _ } = (0, c.nMI)({ callback: h, withViewUuid: !0 }),
                        u = (0, c.ZpR)(null != (t = l.data.url) ? t : ''),
                        v = (0, s.L)(() =>
                            l.description
                                ? (0, i.jsx)(g.Caption, {
                                      className: L().description,
                                      variant: 'span',
                                      lineClamp: 1,
                                      ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_DESCRIPTION),
                                      children: l.description,
                                  })
                                : null,
                        ),
                        j = (0, m.c)((e) => {
                            var t;
                            o && (u(e), n({ to: r.QT.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                        }),
                        C = (0, m.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), j());
                        });
                    return (0, i.jsxs)(w.Cj, {
                        ref: p,
                        'data-intersection-property-id': _,
                        className: (0, b.$)(w.$f.root, L().root, L().important),
                        'aria-label': ''.concat(l.data.title, ' ').concat(null != (a = l.description) ? a : ''),
                        role: 'link',
                        tabIndex: 0,
                        onClick: j,
                        onKeyDown: C,
                        ...(0, x.Am)(x.e8.wheel.WHEEL_PROMO_ITEM),
                        children: [
                            (0, i.jsx)('div', {
                                className: L().coverContainer,
                                children: (0, i.jsx)(w.BW, {
                                    className: (0, b.$)(L().cover, L().important),
                                    src: l.data.cover.uri,
                                    size: 100,
                                    alt: l.data.title,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    withLoadingIndicator: !1,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: L().entityMeta,
                                children: [
                                    v,
                                    (0, i.jsxs)('div', {
                                        className: L().titleContainer,
                                        children: [
                                            (0, i.jsx)(g.Caption, {
                                                className: L().title,
                                                variant: 'span',
                                                lineClamp: l.description ? 3 : 4,
                                                ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_TITLE),
                                                children: l.data.title,
                                            }),
                                            (0, i.jsx)(D.Icon, { className: L().icon, variant: 'link_rounded', size: 'xxs' }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                B = (0, o.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { pageId: l } = (0, c.$au)(),
                        { openIntroModalFromPlay: o } = (0, c.e8U)(),
                        r = (0, c.PT7)(),
                        { isFreemium: s } = (0, c.XCI)(),
                        [d, h] = (0, n.useState)(!1),
                        p = (0, c.brA)(),
                        _ = (0, c.D5X)(),
                        u = (0, m.c)((e, a) => {
                            _(e, null != a ? a : ''), e && t.handleFeedbackView();
                        }),
                        { ref: v, intersectionPropertyId: j } = (0, c.nMI)({ callback: u, withViewUuid: !0 }),
                        { isPlaying: C, togglePlay: y } = (0, c.B0S)({
                            seeds: t.data.seeds,
                            pageIdForFrom: l,
                            blockIdForFrom: ''.concat(c.UfI.RADIO, '-').concat(c.UfI.WHEEL),
                        }),
                        I = (0, m.c)(() => {
                            if (!(!a || r())) {
                                if (s) return void h(!0);
                                o() || (y(), p(!C), t.handleFeedbackClick());
                            }
                        }),
                        k = (0, n.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, i.jsx)('div', {
                                          className: (0, b.$)(L().coverContainer, L().coverContainer_iconCover),
                                          children: (0, i.jsx)(w.BW, {
                                              className: (0, b.$)(L().cover, L().important),
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
                        f = (0, m.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), I());
                        });
                    return (0, i.jsxs)(w.Cj, {
                        ref: v,
                        'data-intersection-property-id': j,
                        className: (0, b.$)(w.$f.root, L().root, L().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: I,
                        onKeyDown: f,
                        ...(0, x.Am)(x.e8.wheel.WHEEL_RESHUFFLE_ITEM),
                        children: [
                            (0, i.jsx)(w.SU, {
                                isOpened: d,
                                onOpenChange: h,
                                isEnabled: s,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: k,
                            }),
                            (0, i.jsx)('div', {
                                className: L().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: L().titleContainer,
                                    children: (0, i.jsx)(g.Caption, {
                                        className: (0, b.$)(L().title, L().title_accentColor),
                                        variant: 'span',
                                        lineClamp: 4,
                                        ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_TITLE),
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                $ = (0, o.PA)((e) => {
                    let { item: t, shouldActionOnClick: a = !0 } = e,
                        { vibeSettings: l } = (0, c.Pjs)(),
                        { isFreemium: o } = (0, c.XCI)(),
                        [s, d] = (0, n.useState)(!1),
                        h = (0, c.NKK)(),
                        p = (0, c.D5X)(),
                        _ = (0, m.c)((e, a) => {
                            p(e, null != a ? a : ''), e && t.handleFeedbackView();
                        }),
                        { ref: u, intersectionPropertyId: v } = (0, c.nMI)({ callback: _, withViewUuid: !0 }),
                        j = (0, m.c)(() => {
                            if (a) {
                                if (o) return void d(!0);
                                l.modal.open(), h({ to: r.QT.MyWaweSettingsScreen });
                            }
                        }),
                        C = (0, m.c)((e) => {
                            (e.code === c.vLr.SPACE || e.code === c.vLr.ENTER) && (e.preventDefault(), j());
                        }),
                        y = (0, n.useCallback)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, b.$)(L().coverContainer, L().coverContainer_iconCover),
                                    children: (0, i.jsx)(w.BW, {
                                        className: (0, b.$)(L().cover, L().important),
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
                    return (0, i.jsxs)(w.Cj, {
                        ref: u,
                        'data-intersection-property-id': v,
                        className: (0, b.$)(w.$f.root, L().root, L().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: j,
                        onKeyDown: C,
                        ...(0, x.Am)(x.e8.wheel.WHEEL_SETTING_ITEM),
                        children: [
                            (0, i.jsx)(w.SU, { isOpened: s, onOpenChange: d, isEnabled: o, placement: 'bottom', textVariant: 'vibe', renderChildren: y }),
                            (0, i.jsx)('div', {
                                className: L().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: L().titleContainer,
                                    children: (0, i.jsx)(g.Caption, {
                                        className: L().title,
                                        variant: 'span',
                                        lineClamp: 4,
                                        ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_TITLE),
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            var V = a(57318);
            let U = (0, o.PA)((e) => {
                var t;
                let { item: a, shouldPlayOnClick: l = !0 } = e,
                    { pageId: o } = (0, c.$au)(),
                    { openIntroModalFromPlay: r } = (0, c.e8U)(),
                    d = (0, c.PT7)(),
                    { withPlusPopoverWeb: h } = (0, c.XCI)(),
                    [p, _] = (0, n.useState)(!1),
                    u = (0, c.brA)(),
                    v = (0, c.D5X)(),
                    j = (0, m.c)((e, t) => {
                        v(e, null != t ? t : ''), e && a.handleFeedbackView();
                    }),
                    { ref: C, intersectionPropertyId: y } = (0, c.nMI)({ callback: j, withViewUuid: !0 }),
                    {
                        isPlaying: I,
                        togglePlay: k,
                        isCurrent: f,
                    } = (0, c.B0S)({ seeds: a.data.seeds, pageIdForFrom: o, blockIdForFrom: ''.concat(c.UfI.RADIO, '-').concat(c.UfI.WHEEL) }),
                    E = (0, m.c)(() => {
                        if (!(!l || d())) {
                            if (h) return void _(!0);
                            r() || (k(), u(!I), a.handleFeedbackClick());
                        }
                    }),
                    N = (0, n.useCallback)(
                        () =>
                            a.data.agent
                                ? (0, i.jsx)('div', {
                                      className: L().coverContainer,
                                      children: (0, i.jsx)(V.nr, {
                                          alt: ''.concat(a.data.description, ' ').concat(a.data.title),
                                          agent: a.data.agent,
                                          isPlaying: I,
                                          isCurrent: f,
                                          onPlayButtonClick: E,
                                          className: (0, b.$)(w.$f.playButtonCell, L().cover, L().important),
                                          playButtonIconSize: 'l',
                                          fallbackIconSize: 'm',
                                      }),
                                  })
                                : null,
                        [a.data.agent, a.data.description, a.data.title, I, f, E],
                    ),
                    T = (0, s.L)(() =>
                        a.description
                            ? (0, i.jsx)(g.Caption, {
                                  className: L().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_DESCRIPTION),
                                  children: a.description,
                              })
                            : null,
                    );
                return (0, i.jsxs)(w.Cj, {
                    ref: C,
                    'data-intersection-property-id': y,
                    className: (0, b.$)(w.$f.root, L().root, L().important),
                    'aria-label': ''.concat(null != (t = a.data.description) ? t : '', ' ').concat(a.data.title),
                    onClick: E,
                    ...(0, x.Am)(x.e8.wheel.WHEEL_VIBE_ITEM),
                    children: [
                        (0, i.jsx)(w.SU, {
                            isOpened: p,
                            onOpenChange: _,
                            isEnabled: h,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.data.stationType,
                            renderChildren: N,
                        }),
                        (0, i.jsxs)('div', {
                            className: L().entityMeta,
                            children: [
                                T,
                                (0, i.jsx)('div', {
                                    className: L().titleContainer,
                                    children: (0, i.jsx)(g.Caption, {
                                        className: L().title,
                                        variant: 'span',
                                        lineClamp: a.description ? 3 : 4,
                                        ...(0, x.Am)(x.e8.wheel.WHEEL_ITEM_TITLE),
                                        children: a.data.title,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var R = a(79856),
                H = a(20880),
                K = a.n(H);
            let F = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: K().root,
                    children: [
                        (0, i.jsx)('div', { className: K().coverContainer, children: (0, i.jsx)(R.Shimmer, { isActive: t, className: K().cover, radius: 'xs' }) }),
                        (0, i.jsxs)('div', {
                            className: K().meta,
                            children: [
                                (0, i.jsx)(R.Shimmer, { isActive: t, className: K().title, radius: 's' }),
                                (0, i.jsx)(R.Shimmer, { isActive: t, className: K().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var X = a(69010),
                Y = a.n(X);
            let z = (0, o.PA)((e) => {
                    let { item: t, shouldActionOnClick: a, originalIndex: l, objectsCount: o, isShimmerVisible: n } = e,
                        d = (0, s.L)(() => {
                            switch (t.type) {
                                case T.D.WAVE:
                                    if (t.style === M.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(c.Bki, {
                                            objectId: t.id,
                                            objectType: r.ky.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            objectsCount: o,
                                            children: (0, i.jsx)(B, { item: t, shouldPlayOnClick: a }),
                                        });
                                    return (0, i.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: r.ky.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, i.jsx)(U, { item: t, shouldPlayOnClick: a }),
                                    });
                                case T.D.ALBUM:
                                    return (0, i.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: r.ky.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, i.jsx)(S, { item: t, shouldPlayOnClick: a }),
                                    });
                                case T.D.PROMO_LINK:
                                    return (0, i.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: r.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, i.jsx)(O, { item: t, shouldNavigateOnClick: a }),
                                    });
                                case T.D.SETTING:
                                    return (0, i.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: r.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: o,
                                        children: (0, i.jsx)($, { item: t }),
                                    });
                            }
                        });
                    return (0, i.jsxs)('div', {
                        className: Y().root,
                        children: [
                            (0, i.jsx)('div', { className: (0, b.$)(Y().element, { [Y().element_hidden]: n }), children: d }),
                            (0, i.jsx)('div', { className: (0, b.$)(Y().shimmer, { [Y().shimmer_visible]: n }), children: n && (0, i.jsx)(F, { isShimmerActive: !0 }) }),
                        ],
                    });
                }),
                q = Math.floor(4.5),
                Q = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, b.$)(N().root, t),
                        children: (0, i.jsx)('div', {
                            className: N().wrapper,
                            children: Array.from({ length: 9 }, (e, t) =>
                                (0, i.jsx)('div', { className: N().slide, style: y(t - q), children: (0, i.jsx)(F, { isShimmerActive: !0 }) }, t),
                            ),
                        }),
                    });
                },
                G = (e) => {
                    e.slides.forEach((e) => {
                        let t = e.progress;
                        Number.isFinite(t) &&
                            ((e, t) => {
                                let { transform: a, opacity: i } = y(t);
                                (e.style.transform = String(a)), (e.style.opacity = String(i));
                            })(e, t);
                    });
                },
                J = (0, o.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: o, setActiveIndex: r, isEmpty: s },
                        } = (0, c.Pjs)(),
                        { formatMessage: h } = (0, d.A)(),
                        p = (0, n.useRef)(null),
                        _ = (0, c.fBs)(),
                        [u, C] = (0, n.useState)(9),
                        y = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(22 / e.length) }, () => e).flat()))(a);
                    (0, n.useEffect)(() => {
                        _();
                    }, [_]),
                        (0, n.useEffect)(() => {
                            let e = p.current;
                            e && 0 !== a.length && e.realIndex !== o && (e.slideToLoop(o, 0), G(e));
                        }, [o, a.length]);
                    let E = (0, m.c)((e) => {
                            r(e.realIndex);
                        }),
                        T = (0, m.c)((e) => {
                            C(Math.max(4, Math.min(9, Math.floor(e.wrapperEl.clientHeight / 106))));
                        }),
                        M = (0, m.c)((e) => {
                            (p.current = e), G(e);
                        }),
                        g = (0, m.c)((e) => {
                            G(e);
                        }),
                        A = (0, m.c)((e) => {
                            e.el.classList.remove(N().root_transitioning), r(e.realIndex), G(e);
                        }),
                        W = (0, m.c)((e) => {
                            e.el.classList.add(N().root_transitioning);
                        }),
                        w = (0, m.c)((e, t) => (a) => {
                            e >= 3 && p.current && (a.stopPropagation(), p.current.slideToLoop(t));
                        });
                    return l && s
                        ? (0, i.jsx)(Q, { className: t })
                        : (0, i.jsx)(j.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: u,
                              slidesPerView: u,
                              initialSlide: o,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [v.Jq, v.FJ, v.U1],
                              a11y: I,
                              freeMode: !0,
                              mousewheel: k,
                              className: (0, b.$)(N().root, t),
                              wrapperClass: N().wrapper,
                              onSwiper: M,
                              onResize: T,
                              onRealIndexChange: E,
                              onSlideChangeTransitionStart: W,
                              onTransitionEnd: A,
                              onProgress: g,
                              tag: 'section',
                              role: 'region',
                              'aria-label': h({ id: 'a11y-regions.wheel' }),
                              ...(0, x.Am)(x.e8.wheel.WHEEL_DESKTOP),
                              children: y.map((e, t) => {
                                  let n = f(t, o, y.length),
                                      r = w(n, t);
                                  return (0, i.jsx)(
                                      j.qr,
                                      {
                                          className: N().slide,
                                          onClickCapture: r,
                                          children: (0, i.jsx)(z, {
                                              item: e,
                                              shouldActionOnClick: n < 3,
                                              originalIndex: t % a.length,
                                              objectsCount: a.length,
                                              isShimmerVisible: l,
                                          }),
                                      },
                                      e.data.getKey(t),
                                  );
                              }),
                          });
                }),
                Z = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return i && Math.abs(l) > a / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var ee = a(61566),
                et = a.n(ee),
                ea = a(65231),
                ei = a(2939);
            let el = [
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
            var eo = a(67500),
                en = a.n(eo);
            let er = (e) => {
                let { color: t } = e;
                return (0, i.jsx)('div', {
                    className: en().root,
                    style: ((e) => {
                        let { h: t, s: a } = (0, ea.g)(e),
                            { r: i, g: l, b: o } = (0, ei.E)(e),
                            n = el
                                .map((e) => {
                                    let { position: t, opacity: a } = e,
                                        n = Math.round(i * a),
                                        r = Math.round(l * a),
                                        s = Math.round(o * a);
                                    return 'rgba('.concat(n, ', ').concat(r, ', ').concat(s, ', ').concat(a, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(n, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(a, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var es = a(92836),
                ec = a.n(es);
            let ed = (0, o.PA)((e) => {
                let { item: t, originalIndex: a, objectsCount: l } = e,
                    o = (0, s.L)(() => {
                        switch (t.type) {
                            case T.D.WAVE:
                                if (t.style === M.y.CONTROL_ACCENT)
                                    return (0, i.jsx)(c.Bki, {
                                        objectId: t.id,
                                        objectType: r.ky.Wave,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(B, { item: t }),
                                    });
                                return (0, i.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: r.ky.Wave,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(U, { item: t }),
                                });
                            case T.D.ALBUM:
                                return (0, i.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: r.ky.Album,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(S, { item: t }),
                                });
                            case T.D.PROMO_LINK:
                                return (0, i.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: r.ky.Link,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(O, { item: t }),
                                });
                            case T.D.SETTING:
                                return (0, i.jsx)(c.Bki, {
                                    objectId: t.id,
                                    objectType: r.ky.Link,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)($, { item: t }),
                                });
                        }
                    }),
                    n = (0, s.L)(() => {
                        switch (t.type) {
                            case T.D.WAVE:
                                var e;
                                return null == (e = t.data.agent) ? void 0 : e.cover.color;
                            case T.D.ALBUM:
                                return t.data.averageColor;
                            case T.D.PROMO_LINK:
                                return t.data.color;
                            default:
                                return;
                        }
                    }),
                    d = t.style !== M.y.CONTROL;
                return (0, i.jsxs)('div', {
                    className: ec().root,
                    children: [d && (0, i.jsx)(er, { color: (0, V.OH)(n).primary }), (0, i.jsx)('div', { className: ec().content, children: o })],
                });
            });
            var em = a(37476),
                eh = a.n(em);
            let ep = () => (0, i.jsx)('div', { className: eh().root, children: (0, i.jsx)('div', { className: eh().petal }) }),
                e_ = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, b.$)(et().root, t),
                        children: (0, i.jsx)('div', {
                            className: et().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: (0, b.$)(
                                            et().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    a = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? et().slide_active
                                                    : t < 2
                                                      ? (0, b.$)(et().slide_near, et()['slide_near_'.concat(a)])
                                                      : t < 3
                                                        ? (0, b.$)(et().slide_medium, et()['slide_medium_'.concat(a)])
                                                        : (0, b.$)(et().slide_far, et()['slide_far_'.concat(a)]);
                                            })(t),
                                        ),
                                        children: (0, i.jsx)(ep, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                eu = (0, o.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: o, setActiveIndex: r },
                        } = (0, c.Pjs)(),
                        { formatMessage: s } = (0, d.A)(),
                        h = (0, c.fBs)(),
                        [p, _] = (0, n.useState)(null),
                        u = 3 * a.length;
                    (0, n.useEffect)(() => {
                        h();
                    }, [h]);
                    let C = (0, m.c)((e) => {
                            r(e.realIndex);
                        }),
                        y = (0, m.c)((e) => {
                            _(e.clickedIndex);
                        }),
                        k = (0, m.c)(() => {
                            _(null);
                        });
                    return l
                        ? (0, i.jsx)(e_, { className: t })
                        : (0, i.jsx)(j.RC, {
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: a.length + 1,
                              modules: [v.Jq, v.U1],
                              a11y: I,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, b.$)(et().root, t),
                              wrapperClass: et().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: C,
                              onTransitionEnd: C,
                              onTap: y,
                              tag: 'section',
                              role: 'region',
                              'aria-label': s({ id: 'a11y-regions.wheel' }),
                              ...(0, x.Am)(x.e8.wheel.WHEEL_MOBILE),
                              children: Array.from({ length: u }, (e, t) => {
                                  let l = t % a.length,
                                      n = a[l],
                                      r = Math.floor(t / a.length);
                                  if (void 0 === n) return null;
                                  let s = f(t, o, u, !1),
                                      c = Z(t, o, u, !1);
                                  return (0, i.jsx)(
                                      j.qr,
                                      {
                                          className: (0, b.$)(
                                              et().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? et().slide_active
                                                      : e < 2
                                                        ? (0, b.$)(et().slide_near, et()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, b.$)(et().slide_medium, et()['slide_medium_'.concat(t)])
                                                          : (0, b.$)(et().slide_far, et()['slide_far_'.concat(t)]))(s, c),
                                              { [et().slide_tap]: t === p },
                                          ),
                                          onAnimationEnd: k,
                                          children: (0, i.jsx)(ed, { item: n, originalIndex: l, objectsCount: a.length }),
                                      },
                                      ''.concat(n.data.getKey(l), '-').concat(r),
                                  );
                              }),
                          });
                }),
                eb = (0, o.PA)((e) => {
                    let { className: t } = e,
                        {
                            wheel: a,
                            settings: { isMobile: o },
                        } = (0, c.Pjs)(),
                        p = (0, c.eGp)(),
                        b = (() => {
                            let { formatMessage: e } = (0, d.A)(),
                                { wheel: t, sonataState: a } = (0, c.Pjs)();
                            return (0, m.c)((i) => {
                                var l;
                                let o = ((e) => {
                                    var t, a, i, l, o, n, r, s;
                                    if (!e || 'object' != typeof e) return { type: _.b.OTHER };
                                    let c = e.sourceContext,
                                        d = null != c ? c : e.context,
                                        m = e.entity,
                                        p = null == (t = d.data) ? void 0 : t.type,
                                        b = null == (i = d.data) || null == (a = i.meta) ? void 0 : a.id,
                                        v = null == (o = m.data) || null == (l = o.meta) ? void 0 : l.id;
                                    if (!p || void 0 === b) return { type: _.b.OTHER };
                                    switch (p) {
                                        case h.K.Album:
                                            return { type: _.b.ALBUM, data: { id: Number(b), trackData: { id: v, albumType: u(m) } } };
                                        case h.K.Artist:
                                            return { type: _.b.ARTIST, data: { id: b.toString(), trackData: { id: v, albumType: u(m) } } };
                                        case h.K.Playlist:
                                            return {
                                                type: _.b.PLAYLIST,
                                                data: {
                                                    playlistUuid: String(null != (s = null == (r = d.data) || null == (n = r.meta) ? void 0 : n.playlistUuid) ? s : b),
                                                    trackData: { id: v, albumType: u(m) },
                                                },
                                            };
                                        case h.K.Vibe:
                                            return { type: _.b.WAVE, data: { seeds: String(b).split(',') } };
                                        case h.K.Generative:
                                            return { type: _.b.GENERATIVE };
                                        default:
                                            return { type: _.b.OTHER, data: { id: v, albumType: u(m) } };
                                    }
                                })(i);
                                ((null == (l = a.entityMeta) ? void 0 : l.isTrackMusic) || !t.lastRequestId) && t.getData({ context: o }, e);
                            });
                        })(),
                        v = (0, c.NFA)();
                    (0, n.useEffect)(() => {
                        let e = null == p ? void 0 : p.state.queueState.currentEntity.onChange(b);
                        return () => {
                            null == e || e();
                        };
                    }, [p, b, a]),
                        (0, n.useEffect)(() => {
                            if (!a.isNeededToLoad) return;
                            let e = v.get(c.byd).connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && b();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [v, b, a.isNeededToLoad]);
                    let j = (0, s.L)(() =>
                        o
                            ? (0, i.jsx)(eu, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible })
                            : (0, i.jsx)(J, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible }),
                    );
                    return (0, i.jsx)(c.FoH, { blockId: r.LA.Wheel, blockType: r.LA.Wheel, blockPosX: 1, blockPosY: 3, objectsCount: a.items.length, children: j });
                });
        },
        67500: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        69010: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        70382: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
            };
        },
        88249: (e) => {
            function t() {}
            (t.prototype = {
                on: function (e, t, a) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({ fn: t, ctx: a }), this;
                },
                once: function (e, t, a) {
                    var i = this;
                    function l() {
                        i.off(e, l), t.apply(a, arguments);
                    }
                    return (l._ = t), this.on(e, l, a);
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, l = a.length; i < l; i++)
                        a[i].fn.apply(a[i].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var a = this.e || (this.e = {}),
                        i = a[e],
                        l = [];
                    if (i && t) for (var o = 0, n = i.length; o < n; o++) i[o].fn !== t && i[o].fn._ !== t && l.push(i[o]);
                    return l.length ? (a[e] = l) : delete a[e], this;
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t);
        },
        92836: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', content: 'WheelMobileItem_content__I6Wm9' };
        },
    },
]);
