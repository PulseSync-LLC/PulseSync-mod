(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4114, 7307],
    {
        8653: (e) => {
            e.exports = {
                root: 'ClipAboutModalDesktop_root__F8UU5',
                root_withFullscreen: 'ClipAboutModalDesktop_root_withFullscreen__nTO1X',
                root_withWindows: 'ClipAboutModalDesktop_root_withWindows__kl4sc',
                header: 'ClipAboutModalDesktop_header__at6X6',
                modalContent: 'ClipAboutModalDesktop_modalContent__Rp_ON',
                explicitMark: 'ClipAboutModalDesktop_explicitMark__SLwRj',
                important: 'ClipAboutModalDesktop_important__LkqWo',
                content: 'ClipAboutModalDesktop_content__0dUY1',
                titleShimmer: 'ClipAboutModalDesktop_titleShimmer__zTtu_',
            };
        },
        11272: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        15189: (e, t, n) => {
            'use strict';
            n.d(t, { DefaultLayout: () => es });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(21916),
                l = n(60711),
                a = n(76464),
                c = n(57318),
                d = n(49574),
                u = n(32675),
                h = n.n(u),
                m = n(55178),
                p = n(45294),
                _ = n(25179),
                f = n(73364),
                v = n(94136),
                x = n(70524),
                b = n(3299),
                g = n(6687),
                y = n(50444),
                C = n(59824),
                A = n(63423),
                j = n(71926),
                w = n(61251),
                T = n.n(w);
            let E = (0, s.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: n, buttonText: s, href: o },
                    } = (0, d.Pjs)(),
                    l = (0, d.ZpR)(o),
                    { theme: a } = (0, d.DPo)();
                return (0, i.jsx)('div', {
                    className: (0, r.$)(T().wrapper, t),
                    ...(0, C.Am)(C.e8.redAlert.RED_ALERT),
                    children: (0, i.jsxs)('div', {
                        className: (0, r.$)(T().root, { [T().root_light]: a === d.Sxu.Light }),
                        children: [
                            (0, i.jsx)(j.Caption, {
                                className: T().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                ...(0, C.Am)(C.e8.redAlert.RED_ALERT_TEXT),
                                children: n,
                            }),
                            (0, i.jsx)(A.$, {
                                className: T().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: l,
                                ...(0, C.Am)(C.e8.redAlert.RED_ALERT_BUTTON),
                                children: (0, i.jsx)(j.Caption, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: s }),
                            }),
                        ],
                    }),
                });
            });
            var M = n(32381),
                N = n(16192),
                k = n(90879),
                L = n(51947),
                P = n(58634),
                D = n(17866),
                O = n(9355),
                S = n(65969),
                R = n(4393),
                B = n(64581),
                I = n(57503),
                z = n(80864),
                F = n(72480),
                V = n(43224),
                W = n(44574),
                $ = n(8055),
                K = n(40996),
                U = n(60900),
                Y = n(91027);
            let H = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var Z = n(11272),
                q = n.n(Z);
            let X = (0, s.PA)((e) => {
                    let { className: t, forwardRef: n, onAdvertChange: s, ...o } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: l },
                            },
                        } = (0, d.Pjs)(),
                        { formatMessage: a } = (0, U.A)(),
                        c = (0, Y.c)((e) => {
                            void 0 !== e && l.setType(e), s();
                        });
                    return (0, i.jsx)('section', {
                        ref: n,
                        className: (0, r.$)(q().root, t, { [q().root_hidden]: !l.isVisible }),
                        'aria-label': a({ id: 'advert.banner' }),
                        role: 'banner',
                        ...o,
                        children: (0, i.jsx)(W.NX, {
                            className: q().advert,
                            ownerId: d.PVv,
                            containerId: 'adfox_173831489272852769',
                            params: H,
                            onLoad: l.setType,
                            onRender: c,
                            onError: l.toggleHasErrorTrue,
                            onNoAds: l.toggleNoAdsTrue,
                        }),
                    });
                }),
                G = (0, m.forwardRef)((e, t) => (0, i.jsx)(X, { forwardRef: t, ...e }));
            var Q = n(92881),
                J = n.n(Q);
            let ee = (0, s.PA)((e) => {
                let { children: t } = e,
                    [n, s] = (0, m.useState)(!1),
                    [o, l] = (0, m.useState)(!0),
                    [a, c] = (0, m.useState)(!1),
                    { contentRef: u, contentScrollRef: h } = (0, d.gKY)(),
                    p = (0, m.useRef)(null),
                    { isFreemium: _ } = (0, d.XCI)(),
                    {
                        user: f,
                        advertBanners: {
                            banners: { topAdvertBanner: v },
                        },
                    } = (0, d.Pjs)(),
                    x = (!f.isAuthorized || _) && v.isVisible,
                    b = (0, m.useCallback)(() => {
                        l(!1), s(!0);
                    }, [l, s]),
                    g = (0, m.useCallback)(() => {
                        l(!0), s(!1);
                    }, [l, s]),
                    y = (0, m.useCallback)(() => {
                        c(!1);
                    }, [c]),
                    C = (0, m.useMemo)(
                        () =>
                            x ? (0, i.jsx)(G, { className: (0, r.$)(J().banner, { [J().banner_canShow]: n }), onFocus: b, onBlur: g, onAdvertChange: y, ref: p }) : null,
                        [x, n, b, g, y],
                    ),
                    A = (0, m.useCallback)(() => {
                        var e;
                        if (!C) return;
                        if (!u || !h) return void s(!0);
                        let t = h.scrollTop > 0,
                            n = u.clientHeight + ((null == (e = p.current) ? void 0 : e.offsetHeight) || 0) < h.scrollHeight;
                        if ((n ? l(!0) : !n && t && l(!1), !o || (!t && a))) return;
                        let i = !t;
                        s(i), i && c(!0);
                    }, [u, h, C, o, a, s, l, c]);
                (0, m.useEffect)(() => {
                    A();
                }, [A, h]);
                let j = (0, m.useMemo)(() => (0, $.A)(A, 200), [A]);
                return (
                    (0, K.L)({ onScroll: j, elementRef: h }),
                    (0, i.jsxs)('div', { className: J().root, children: [C, (0, i.jsx)('div', { className: J().content, children: t })] })
                );
            });
            var et = n(60761);
            let en = (0, s.PA)((e) => {
                var t, n, s, l;
                let { children: a, isNewWaveMainTabActive: c, layoutChromeStyles: u, rootClassName: C, rootStyle: A } = e,
                    j = (0, o.usePathname)(),
                    { setCompositePlayerBarRef: w } = (0, d.gKY)(),
                    T = (0, d.NFA)().get(d.ooW),
                    $ = (0, b.Yp)(),
                    {
                        settings: { browserInfo: K, isMobile: U, isWindowsApplication: Y, isMacOSApplication: H, isLinuxApplication: Z },
                        experiments: q,
                        communication: X,
                        user: G,
                        redAlert: Q,
                        downloadMobileApp: J,
                        album: en,
                        albumCPA: { isPlusCPAPlayerBarEnabled: ei, isHidePlusModalEnabled: er },
                        modals: { buySubscriptionModal: es },
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: eo },
                        },
                    } = (0, d.Pjs)(),
                    { isFreemium: el } = (0, d.XCI)(),
                    [ea, ec] = (0, m.useState)(null != (l = T.get(d.cYZ.NavbarCollapsed)) ? l : $),
                    ed = (0, m.useMemo)(() => ({ isCollapsed: ea || $, setIsCollapsed: ec }), [ea, $]);
                (0, d.dKN)();
                let eu = (!G.isAuthorized || el) && (null == K ? void 0 : K.isTouch),
                    eh = (0, F.df)(),
                    em = q.checkExperiment(d.zal.WebNextArtistInfo, 'on'),
                    ep = q.checkExperiment(d.zal.WebNextDeeplinksToMobile, 'on') && G.hasPlus && !!(null == K ? void 0 : K.isMobile) && !1,
                    e_ = ep && !c,
                    { setDefaultLayoutRef: ef } = (0, d.gKY)(),
                    ev = ei(null == en ? void 0 : en.id, null == en || null == (t = en.meta) ? void 0 : t.isNonMusic),
                    ex = er(null == en ? void 0 : en.id, null == en || null == (n = en.meta) ? void 0 : n.isNonMusic),
                    eb = !eu || ev,
                    eg = ev && (null == K ? void 0 : K.isTouch);
                return (
                    (0, m.useEffect)(() => {
                        ex && es.close();
                    }, [ex, es]),
                    (0, i.jsx)(d.qTt.Provider, {
                        value: ed,
                        children: (0, i.jsx)(ee, {
                            children: (0, i.jsx)(W.do, {
                                isEnabled: ep,
                                children: (0, i.jsx)(R.sO, {
                                    children: (0, i.jsxs)('div', {
                                        ref: ef,
                                        className: C,
                                        style: A,
                                        children: [
                                            eg && (0, i.jsx)(O.BZ, { modal: es }),
                                            !U &&
                                                eb &&
                                                (0, i.jsx)(b.Fp, {
                                                    className: (0, r.$)(u.navbar, {
                                                        [u.navbar_application_windows]: Y,
                                                        [u.navbar_application_macos]: H,
                                                        [u.navbar_application_linux]: Z,
                                                    }),
                                                    externalIsCollapsed: ea,
                                                    externalSetIsCollapsed: ec,
                                                }),
                                            (0, i.jsx)(_.UC, {
                                                className: (0, r.$)(h().content, {
                                                    [h().content_withPlayerBar]: U && (!c || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()),
                                                    [h().content_withAxeBanner]: eo.isVisible,
                                                }),
                                                children: (0, i.jsxs)(W.tH, { fallback: M.w, children: [a, (0, i.jsx)(et.m, {})] }, j),
                                            }),
                                            !U &&
                                                eb &&
                                                (!c || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                 (0, i.jsx)(d.nVz, { pageId: d._Q$.PLAYER, children: (0, i.jsx)(y.LN, { className: h().playerBar }) }),
                                            U &&
                                                eb &&
                                                (0, i.jsxs)('div', {
                                                    ref: w,
                                                    className: (0, r.$)(h().compositePlayerBar, { [h().compositePlayerBar_withNewVibe]: c }),
                                                    children: [
                                                        e_ && (0, i.jsx)(W.jg, {}),
                                                        (!c || window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.()) &&
                                                            (0, i.jsx)(d.nVz, { pageId: d._Q$.PLAYER, children: (0, i.jsx)(y.LN, { className: h().playerBar }) }),
                                                        (0, i.jsx)(b.Fp, {
                                                            className: (0, r.$)(u.navbar, {
                                                                [u.navbar_application_windows]: Y,
                                                                [u.navbar_application_macos]: H,
                                                                [u.navbar_application_linux]: Z,
                                                            }),
                                                            externalIsCollapsed: ea,
                                                            externalSetIsCollapsed: ec,
                                                        }),
                                                    ],
                                                }),
                                            Q.isVisible && (0, i.jsx)(E, { className: u.barBelow }),
                                            !Q.isVisible && !U && X.list && (0, i.jsx)(D.Bx, { className: u.barBelow, barBelow: X.list.barBelow }),
                                            (null == (s = X.list) ? void 0 : s.modal) && (0, i.jsx)(S.ov, { modal: X.list.modal }),
                                            (0, i.jsx)(d.nVz, { pageId: d._Q$.PLAYER, children: (0, i.jsx)(y.vR, {}) }),
                                            eh && (0, i.jsx)(d.nVz, { pageId: d._Q$.VIDEO_PLAYER, children: (0, i.jsx)(k.A2, {}) }),
                                            (0, i.jsx)(W.Pe, {}),
                                            (0, i.jsx)(d.nVz, { pageId: d._Q$.TRAILER, children: (0, i.jsx)(N.f, {}) }),
                                            (0, i.jsx)(L.p3, {}),
                                            eh && (0, i.jsx)(_.$9, {}),
                                            (0, i.jsx)(_.US, {}),
                                            em && (0, i.jsx)(P.y8, {}),
                                            !G.hasPlus && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(g.cw, {}), (0, i.jsx)(f.g, {}), (0, i.jsx)(y.BG, {})] }),
                                            !G.hasPlus && (0, i.jsx)(x.x8, {}),
                                            (0, i.jsx)(I.P, {}),
                                            (0, i.jsx)(_.VW, {}),
                                            (0, i.jsx)(p.hq, {}),
                                            (0, i.jsx)(V.mt, {}),
                                            (0, i.jsx)(z.U6, {}),
                                            J.shouldShow() && (0, i.jsx)(v.h, {}),
                                            (0, i.jsx)(B.w, {}),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    })
                );
            });
            var ei = n(73017),
                er = n.n(ei);
            let es = (0, s.PA)((e) => {
                var t, n, s;
                let u,
                    m,
                    { className: p, children: _ } = e,
                    f = (0, o.usePathname)(),
                    {
                        settings: { isMobile: v, isWindowsApplication: x, isLinuxApplication: b },
                        redAlert: g,
                        communication: y,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: C },
                        },
                        sonataState: A,
                        experiments: j,
                        vibe: w,
                    } = (0, d.Pjs)(),
                    T =
                        (f === d.Zyd.main.href || f === d.Zyd.video.href) &&
                        (j.checkExperiment(d.zal.WebNextNewWaveTab, 'on') || j.checkExperiment(d.zal.WebNextNewWaveTab, 'on1'));
                (0, d.CvD)(d.Sxu.Dark, T);
                let E =
                        g.isVisible ||
                        (!v && (null == (t = y.list) ? void 0 : t.barBelow.isVisible) && (null == (n = y.list) ? void 0 : n.barBelow.hasAnimationAlreadyBeenStarted)),
                    M = {
                        barBelow: er().barBelow,
                        navbar: er().navbar,
                        navbar_application_linux: er().navbar_application_linux,
                        navbar_application_macos: er().navbar_application_macos,
                        navbar_application_windows: er().navbar_application_windows,
                    },
                    N = er().root_withBarBelow,
                    k = er().root;
                if (T) {
                    let e = w.isShuffleVibe && A.isVibeContext;
                    (u = (0, c.OH)(e || null == (s = A.entityMeta) ? void 0 : s.averageColor)),
                        (m = (0, l.ak)({ palette: u, isPlaying: A.isPlaying })),
                        (N = er().rootNewVibe_withBarBelow),
                        (k = er().rootNewVibe);
                }
                let L = (0, r.$)(
                    h().root,
                    k,
                    {
                        [er().root_applicationPreserveTitleBar]: x || b,
                        [N]: E,
                        [h().root_withAxeBanner]: C.isVisible,
                        ['modSettings_alwaysWideBar']: window.ALWAYS_WIDE_BAR?.(),
                        ['modSettings_showOldPlayerBarOnNewWave']: window.SHOW_OLD_PLAYER_BAR_ON_NEW_WAVE?.(),
                    },
                    p,
                );
                return (0, i.jsxs)(en, {
                    isNewWaveMainTabActive: T,
                    layoutChromeStyles: M,
                    rootClassName: L,
                    rootStyle: m,
                    children: [_, T && (0, i.jsx)(a.zP, {})],
                });
            });
        },
        25121: (e, t, n) => {
            'use strict';
            n.d(t, { KidsLayout: () => o });
            var i = n(96103),
                r = n(21916),
                s = n(49574);
            let o = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, s.Pjs)();
                return n.checkExperiment(s.zal.WebNextDisableKids, 'on') && (0, r.redirect)(s.Zyd.main.href), t;
            });
        },
        25179: (e, t, n) => {
            'use strict';
            n.d(t, { $9: () => f, UC: () => M, i6: () => L, US: () => z, VW: () => $ });
            var i = n(32290),
                r = n(96103),
                s = n(49574),
                o = n(63618),
                l = n(55178),
                a = n(60900),
                c = n(59824),
                d = n(84638),
                u = n(68278),
                h = n(44574),
                m = n(8653),
                p = n.n(m);
            let _ = (0, r.PA)(() => {
                    let { formatMessage: e } = (0, a.A)(),
                        { notify: t } = (0, s.lkh)(),
                        { contentRef: n } = (0, s.gKY)(),
                        {
                            currentClipInfo: r,
                            settings: { isMobile: m, isWindowsApplication: _ },
                            fullscreenVideoPlayer: f,
                        } = (0, s.Pjs)(),
                        { modal: v, clip: x } = r;
                    !x && r.isClipIdle && r.getClip(), !r.credits && r.isCreditsIdle && r.getCreditsInfo();
                    let b = null == x ? void 0 : x.title,
                        g = null == x ? void 0 : x.explicitDisclaimer,
                        y = (0, l.useMemo)(
                            () =>
                                r.isClipLoading || r.isClipRejected
                                    ? (0, i.jsx)(h.q$, { className: p().titleShimmer, count: 1 })
                                    : x
                                      ? (0, i.jsxs)('span', {
                                            children: [
                                                b,
                                                g &&
                                                    (0, i.jsx)(h.Nq, {
                                                        getDescriptionTexts: x.getDescriptionTexts,
                                                        className: (0, o.$)(p().explicitMark, p().important),
                                                        size: 'xxs',
                                                        variant: g,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [x, b, g, r.isClipLoading, r.isClipRejected],
                        );
                    (0, l.useEffect)(
                        () => () => {
                            v.close(), r.reset();
                        },
                        [r, v],
                    );
                    let C = (0, l.useCallback)(() => {
                            v.close(), r.reset();
                        }, [r, v]),
                        A = (0, l.useCallback)(
                            (e) => {
                                var t;
                                e || r.reset(), null == (t = v.onOpenChange) || t.call(v, e);
                            },
                            [r, v],
                        );
                    r.isRejected && (C(), t((0, i.jsx)(h.hT, { error: e({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR }));
                    let j = (0, l.useMemo)(() => {
                        var e;
                        return r.isCreditsLoading || r.isCreditsRejected
                            ? (0, i.jsx)(h.q$, {})
                            : (null == (e = r.credits) ? void 0 : e.length)
                              ? r.credits.map((e) => {
                                    let t = (0, i.jsx)(u.D, { children: e.value });
                                    return (0, i.jsx)(u.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [r.credits, r.isCreditsLoading, r.isCreditsRejected]);
                    return (0, i.jsx)(d.a, {
                        containerProps: (0, c.Am)(c.Kq.clip.CLIP_ABOUT_MODAL),
                        placement: m ? 'default' : 'right',
                        open: v.isOpened,
                        onClose: C,
                        contentClassName: p().modalContent,
                        title: y,
                        headerClassName: p().header,
                        className: (0, o.$)(p().root, { [p().root_withFullscreen]: f.modal.isOpened, [p().root_withWindows]: _ }),
                        onOpenChange: A,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: m || f.modal.isOpened ? null : n,
                        children: (0, i.jsx)('div', { className: p().content, children: j }),
                    });
                }),
                f = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, s.Pjs)();
                    return e ? null : (0, i.jsx)(_, {});
                });
            var v = n(21916),
                x = (n(29172), n(9612), n(91027)),
                b = n(6752),
                g = n(42543),
                y = n(49388),
                C = n.n(y);
            C().secondaryEnter, C().secondaryEnterActive;
            var A = (function (e) {
                return (e.LARGE = 'large'), (e.SMALL = 'small'), e;
            })({});
            let j = ['album', 'users', 'artist', 'chart'];
            var w = n(8055);
            let T = () => (30 * window.innerHeight) / 100,
                E = (e, t) => e > 0 && t > 0,
                M = (0, r.PA)((e) => {
                    let { className: t, children: n } = e,
                        r = (0, v.usePathname)();
                    (0, s.NFA)();
                    let { formatMessage: c } = (0, a.A)(),
                        { setContentRef: d, setContentRootRef: u, setSideBannerRef: m, paywallRef: p, contentScrollRef: _ } = (0, s.gKY)(),
                        f = (0, s.UlF)(),
                        {
                            settings: { isMobile: y },
                            experiments: M,
                            user: N,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: k, topAdvertBanner: L },
                            },
                        } = (0, s.Pjs)(),
                        P = (0, g.y)(),
                        D =
                            (r === s.Zyd.main.href || r === s.Zyd.video.href) &&
                            (M.checkExperiment(s.zal.WebNextNewWaveTab, 'on') || M.checkExperiment(s.zal.WebNextNewWaveTab, 'on1')),
                        O = k.isVisible && k.type === s.h8o.BRANDING,
                        S = L.isTouchTopAdvertEnabled && !p && !N.hasPlus && !O,
                        R = (S && M.checkExperiment(s.zal.WebNextTouchAds, 'small_banner') ? A.SMALL : A.LARGE) === A.SMALL ? 'R-I-16641233-1' : 'R-I-16641233-2',
                        B =
                            ((() => {
                                let e = (0, v.usePathname)();
                                return (0, l.useMemo)(() => {
                                    let [, t] = e.split('/');
                                    return !!t && j.includes(t);
                                }, [e]);
                            })(),
                            ((e) => {
                                let [t, n] = (0, l.useState)(T),
                                    i = (0, l.useRef)(null),
                                    r = (0, l.useRef)(!1),
                                    s = (0, l.useRef)(T()),
                                    o = (0, l.useRef)(T()),
                                    a = (0, x.c)((e) => {
                                        let t = e.scrollTop,
                                            n = e.scrollHeight,
                                            i = e.clientHeight,
                                            r = o.current,
                                            s = t <= 5;
                                        if (!E(n, i)) return r;
                                        let l = n - i;
                                        return l <= 0 ? r : l >= r ? (s ? r : 0) : s ? r : Math.max(0, r - l);
                                    }),
                                    c = (0, x.c)((e) => {
                                        n(Math.round(e)), (s.current = e);
                                    }),
                                    d = (0, x.c)(() => {
                                        o.current = T();
                                    }),
                                    u = (0, x.c)((e) => {
                                        let t = i.current;
                                        null !== t && cancelAnimationFrame(t),
                                            (i.current = requestAnimationFrame(() => {
                                                i.current = null;
                                                let t = a(e),
                                                    n = Math.abs(t - s.current),
                                                    r = o.current;
                                                (0 === t || t >= r || n >= 2) && c(t);
                                            }));
                                    });
                                (0, l.useLayoutEffect)(() => {
                                    if (!e) {
                                        let e = T();
                                        (o.current = e), c(e), (r.current = !1);
                                        return;
                                    }
                                    if (r.current) return;
                                    r.current = !0;
                                    let t = T();
                                    return ((o.current = t), e.scrollTop <= 50) ? void c(t) : E(e.scrollHeight, e.clientHeight) ? void c(a(e)) : void c(t);
                                }, [e, c, a]);
                                let h = (0, l.useMemo)(
                                    () =>
                                        e
                                            ? (0, w.A)(() => {
                                                  d(), u(e);
                                              }, 100)
                                            : null,
                                    [e, u, d],
                                );
                                return (
                                    (0, l.useEffect)(() => {
                                        if (!e || !h) return;
                                        u(e);
                                        let t = () => {
                                            u(e);
                                        };
                                        e.addEventListener('scroll', t, { passive: !0 });
                                        let n = new ResizeObserver(h);
                                        n.observe(e);
                                        let r = () => {
                                            d(), h();
                                        };
                                        return (
                                            window.addEventListener('resize', r, { passive: !0 }),
                                            () => {
                                                h.cancel();
                                                let l = i.current;
                                                null !== l && (cancelAnimationFrame(l), (i.current = null));
                                                let a = T();
                                                (s.current = a),
                                                    (o.current = a),
                                                    e.removeEventListener('scroll', t),
                                                    n.disconnect(),
                                                    window.removeEventListener('resize', r);
                                            }
                                        );
                                    }, [e, u, h, d]),
                                    t
                                );
                            })(_)),
                        I =
                            ((0, l.useRef)(null),
                            (0, x.c)(() => {
                                f.error('Cannot render advert banner', { adBlockId: R });
                            })),
                        z = (0, b.L)(() => {
                            if (S)
                                return (0, i.jsx)('div', {
                                    className: C().adContainer,
                                    'aria-label': c({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, i.jsx)(h.fJ, { isAsync: !1, onError: I, productionBlockId: R, testBlockId: R, className: C().adBanner }),
                                });
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(C().rootOld, t, { [C().rootOld_newVibe]: D }),
                        ref: u,
                        children: [
                            z,
                            (0, i.jsx)('main', {
                                className: (0, o.$)(C().main, { [C().main_newVibe]: D, [C().withBrandedBanner]: O }),
                                style: O ? { marginBlockStart: ''.concat(B, 'px') } : void 0,
                                ref: d,
                                children: (0, i.jsx)(l.Suspense, { children: n }),
                            }),
                            P && (0, i.jsx)(g.u, { className: (0, o.$)(C().sideBanner, { [C().sideBanner_newVibe]: D }), isWavePage: D, ref: m }),
                        ],
                    });
                });
            var N = n(81116),
                k = n.n(N);
            let L = (e) => {
                let { className: t, children: n } = e,
                    { setContentRef: r, setContentRootRef: a } = (0, s.gKY)();
                return (0, i.jsx)('div', {
                    className: (0, o.$)(k().root, t),
                    ref: a,
                    children: (0, i.jsx)('main', { className: k().main, ref: r, children: (0, i.jsx)(l.Suspense, { children: n }) }),
                });
            };
            var P = n(96333);
            let D = (0, r.PA)(() => {
                let { formatMessage: e } = (0, a.A)(),
                    { currentTrackInfo: t } = (0, s.Pjs)(),
                    { fullTrack: n } = t,
                    r = (0, b.L)(() => {
                        var t, r, s;
                        if (!(null == n || null == (t = n.mainAlbum) ? void 0 : t.title)) return;
                        let o = (0, i.jsx)(u.D, {
                            href: null == n || null == (r = n.mainAlbum) ? void 0 : r.url,
                            children: null == n || null == (s = n.mainAlbum) ? void 0 : s.title,
                        });
                        return (0, i.jsx)(u.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: o });
                    }),
                    o = (0, b.L)(() => {
                        if (!(null == n ? void 0 : n.shortDescription)) return;
                        let e = (0, i.jsx)(u.D, { children: null == n ? void 0 : n.shortDescription });
                        return (0, i.jsx)(u.O, { infoDescription: e });
                    });
                return (0, i.jsxs)(i.Fragment, { children: [o, r] });
            });
            var O = n(82736),
                S = n(56461),
                R = n.n(S);
            let B = (0, r.PA)(() => {
                    let { formatMessage: e } = (0, a.A)(),
                        { currentTrackInfo: t } = (0, s.Pjs)(),
                        n = t.fullTrack,
                        r = (0, l.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, i.jsx)('span', { className: R().text, dangerouslySetInnerHTML: { __html: (0, O.sanitizeDOM)(t.fullDescription) } })
                                    : null == n
                                      ? void 0
                                      : n.shortDescription,
                            [null == n ? void 0 : n.shortDescription, t.fullDescription],
                        ),
                        o = (0, b.L)(() => {
                            if (!r) return;
                            let e = (0, i.jsx)(u.D, { children: r });
                            return (0, i.jsx)(u.O, { infoDescription: e });
                        }),
                        c = (0, b.L)(() => {
                            var t, r, s;
                            if (!(null == n || null == (t = n.mainAlbum) ? void 0 : t.title)) return;
                            let o = (0, i.jsx)(u.D, {
                                href: null == n || null == (r = n.mainAlbum) ? void 0 : r.url,
                                children: null == n || null == (s = n.mainAlbum) ? void 0 : s.title,
                            });
                            return (0, i.jsx)(u.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: o });
                        });
                    return (0, i.jsxs)(i.Fragment, { children: [o, c] });
                }),
                I = (0, r.PA)(() => {
                    var e, t, n, r, m;
                    let { formatMessage: p } = (0, a.A)(),
                        { notify: _ } = (0, s.lkh)(),
                        { contentRef: f } = (0, s.gKY)(),
                        {
                            currentTrackInfo: v,
                            settings: { isMobile: x, isWindowsApplication: b, isLinuxApplication: g },
                            fullscreenPlayer: y,
                            experiments: C,
                        } = (0, s.Pjs)(),
                        { modal: A } = v,
                        j = v.isUGC,
                        w = C.checkExperiment(s.zal.WebEditorsFeatures, 'on');
                    j && v.isTrackIdle && v.getTrackMeta(),
                        v.fullTrack || !v.isTrackIdle || j || v.getFullTrack(),
                        !v.credits && v.isCreditsIdle && v.getCreditsInfo(),
                        ((null == (e = v.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (n = v.fullTrack) || null == (t = n.mainAlbum) ? void 0 : t.isPodcast)) &&
                            v.getFullDescription(),
                        (0, l.useEffect)(
                            () => () => {
                                A.close(), v.reset();
                            },
                            [v, A],
                        );
                    let T = (0, l.useCallback)(() => {
                            A.close(), v.reset();
                        }, [v, A]),
                        E = (0, l.useCallback)(
                            (e) => {
                                var t;
                                e || v.reset(), null == (t = A.onOpenChange) || t.call(A, e);
                            },
                            [v, A],
                        );
                    v.isRejected && (T(), _((0, i.jsx)(h.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR }));
                    let M = v.fullTrack,
                        N = null == M ? void 0 : M.explicitDisclaimer,
                        k = (0, l.useMemo)(() => {
                            var e;
                            if (M)
                                return (0, i.jsxs)('span', {
                                    children: [
                                        M.title,
                                        M.version && (0, i.jsx)('span', { className: R().version, children: M.version }),
                                        N &&
                                            (0, i.jsx)(h.Nq, {
                                                className: (0, o.$)(R().explicitMark, R().important, { [R().explicit]: !M.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = v.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: N,
                                            }),
                                    ],
                                });
                        }, [M, N, null == (r = v.fullTrack) ? void 0 : r.getDescriptionTexts]),
                        L = (0, l.useMemo)(() => {
                            var e;
                            return (null == M ? void 0 : M.type) === P.S.AUDIOBOOK
                                ? (0, i.jsx)(D, {})
                                : (null == M ? void 0 : M.isTrackPodcast) || (null == M || null == (e = M.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, i.jsx)(B, {})
                                  : void 0;
                        }, [M]),
                        O = (0, l.useMemo)(() => {
                            var e;
                            return (null == (e = v.credits) ? void 0 : e.length)
                                ? v.credits.map((e) => {
                                      let { title: t, value: n } = e,
                                          r = (0, i.jsx)(u.D, { children: n });
                                      return (0, i.jsx)(u.O, { title: t, infoDescription: r }, t);
                                  })
                                : null;
                        }, [v.credits]),
                        S = (0, l.useMemo)(() => {
                            var e;
                            if ((null == (e = v.fullTrack) ? void 0 : e.major) && w) {
                                let e = v.fullTrack.major.name;
                                if (e) {
                                    let t = (0, i.jsx)(u.D, { children: e });
                                    return (0, i.jsx)(u.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (m = v.fullTrack) ? void 0 : m.major, w]);
                    return (0, i.jsx)(d.a, {
                        placement: x ? 'default' : 'right',
                        open: A.isOpened,
                        onClose: T,
                        contentClassName: R().modalContent,
                        title: k,
                        headerClassName: R().header,
                        className: (0, o.$)(R().root, { [R().root_withFullscreen]: y.modal.isOpened, [R().root_withCustomControls]: b || g }),
                        overlayClassName: R().overlay,
                        onOpenChange: E,
                        labelClose: p({ id: 'interface-actions.close' }),
                        portalNode: x || y.modal.isOpened ? null : f,
                        containerProps: (0, c.Am)(c.Xk.track.TRACK_ABOUT_MODAL),
                        closeButtonProps: (0, c.Am)(c.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON),
                        children: (0, i.jsxs)('div', {
                            className: R().content,
                            children: [
                                (v.isTrackLoading || v.isTrackRejected) && (0, i.jsx)(h.nN, { textClassName: R().textShimmer }),
                                L,
                                (v.isCreditsLoading || v.isCreditsRejected) && (0, i.jsx)(h.nN, { textClassName: R().textShimmer }),
                                O,
                                S,
                            ],
                        }),
                    });
                }),
                z = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, s.Pjs)();
                    return e ? null : (0, i.jsx)(I, {});
                });
            var F = n(80864),
                V = n(95910),
                W = n.n(V);
            let $ = (0, r.PA)(() => {
                var e;
                let { formatMessage: t } = (0, a.A)(),
                    { notify: n } = (0, s.lkh)(),
                    { contentRef: r } = (0, s.gKY)(),
                    {
                        trackLyrics: u,
                        settings: { isMobile: m },
                        fullscreenPlayer: p,
                    } = (0, s.Pjs)(),
                    { modal: _, track: f } = u,
                    v = null == f ? void 0 : f.explicitDisclaimer;
                (0, l.useEffect)(() => {
                    f && f.isLyricsAvailable && u.modal.isOpened && u.getLyrics(f.id);
                }, [f, u, u.modal.isOpened]),
                    (0, l.useEffect)(() => {
                        _.isOpened && f && u.isResolved && u.sendViews({ trackId: f.id, albumId: f.albumId });
                    }, [f, u, u.isResolved, _.isOpened]);
                let x = (0, l.useCallback)(
                    (e) => {
                        var t;
                        null == (t = _.onOpenChange) || t.call(_, e);
                    },
                    [_],
                );
                u.isRejected && u.modal.isOpened && n((0, i.jsx)(h.hT, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: s.uQT.ERROR });
                let b = (0, l.useMemo)(() => {
                    if (f)
                        return (0, i.jsxs)('span', {
                            ...(0, c.Am)(c.e8.content.TRACK_LYRICS_TITLE),
                            children: [
                                f.title,
                                f.version && (0, i.jsx)('span', { className: W().version, children: f.version }),
                                v &&
                                    (0, i.jsx)(h.Nq, {
                                        className: (0, o.$)(W().explicitMark, W().important),
                                        getDescriptionTexts: f.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: v,
                                    }),
                            ],
                        });
                }, [f, null == f ? void 0 : f.title, null == f ? void 0 : f.version, v]);
                return (0, i.jsx)(d.a, {
                    size: 'fitContent',
                    placement: m ? 'default' : 'right',
                    open: _.isOpened,
                    onOpenChange: x,
                    onClose: _.close,
                    className: W().root,
                    contentClassName: W().modalContent,
                    portalNode: m || p.modal.isOpened ? null : r,
                    title: b,
                    headerClassName: W().header,
                    overlayClassName: W().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    containerProps: (0, c.Am)(c.e8.content.TRACK_LYRICS_MODAL),
                    closeButtonProps: (0, c.Am)(c.e8.content.TRACK_LYRICS_CLOSE_BUTTON),
                    lockScroll: m,
                    children: (0, i.jsx)('div', {
                        className: W().content,
                        ...(0, c.Am)(c.e8.content.TRACK_LYRICS_TEXT),
                        children: (0, i.jsx)(F.xe, {
                            lyrics: u.lyrics,
                            authors: u.writersNames,
                            source: null == (e = u.major) ? void 0 : e.prettyName,
                            isShimmerVisible: u.isShimmerVisible,
                            isShimmerActive: u.isLoading,
                        }),
                    }),
                });
            });
        },
        29172: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => h });
            var i = n(68905),
                r = n(28376),
                s = n(2783),
                o = n(55178),
                l = n(89562);
            function a(e, t) {
                var n = Object.create(null);
                return (
                    e &&
                        o.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            n[e.key] = t && (0, o.isValidElement)(e) ? t(e) : e;
                        }),
                    n
                );
            }
            function c(e, t, n) {
                return null != n[t] ? n[t] : e.props[t];
            }
            var d =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                u = (function (e) {
                    function t(t, n) {
                        var i = e.call(this, t, n) || this,
                            r = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return (i.state = { contextValue: { isMounting: !0 }, handleExited: r, firstRender: !0 }), i;
                    }
                    (0, s.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
                        }),
                        (n.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n,
                                i,
                                r = t.children,
                                s = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? a(e.children, function (t) {
                                          return (0, o.cloneElement)(t, {
                                              onExited: s.bind(null, t),
                                              in: !0,
                                              appear: c(t, 'appear', e),
                                              enter: c(t, 'enter', e),
                                              exit: c(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function n(n) {
                                                  return n in t ? t[n] : e[n];
                                              }
                                              (e = e || {}), (t = t || {});
                                              var i,
                                                  r = Object.create(null),
                                                  s = [];
                                              for (var o in e) o in t ? s.length && ((r[o] = s), (s = [])) : s.push(o);
                                              var l = {};
                                              for (var a in t) {
                                                  if (r[a])
                                                      for (i = 0; i < r[a].length; i++) {
                                                          var c = r[a][i];
                                                          l[r[a][i]] = n(c);
                                                      }
                                                  l[a] = n(a);
                                              }
                                              for (i = 0; i < s.length; i++) l[s[i]] = n(s[i]);
                                              return l;
                                          })(r, (n = a(e.children)))),
                                      ).forEach(function (t) {
                                          var l = i[t];
                                          if ((0, o.isValidElement)(l)) {
                                              var a = t in r,
                                                  d = t in n,
                                                  u = r[t],
                                                  h = (0, o.isValidElement)(u) && !u.props.in;
                                              d && (!a || h)
                                                  ? (i[t] = (0, o.cloneElement)(l, { onExited: s.bind(null, l), in: !0, exit: c(l, 'exit', e), enter: c(l, 'enter', e) }))
                                                  : d || !a || h
                                                    ? d &&
                                                      a &&
                                                      (0, o.isValidElement)(u) &&
                                                      (i[t] = (0, o.cloneElement)(l, {
                                                          onExited: s.bind(null, l),
                                                          in: u.props.in,
                                                          exit: c(l, 'exit', e),
                                                          enter: c(l, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, o.cloneElement)(l, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (e, t) {
                            var n = a(this.props.children);
                            e.key in n ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var n = (0, r.A)({}, t.children);
                                        return delete n[e.key], { children: n };
                                    }));
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.component,
                                n = e.childFactory,
                                r = (0, i.A)(e, ['component', 'childFactory']),
                                s = this.state.contextValue,
                                a = d(this.state.children).map(n);
                            return (delete r.appear, delete r.enter, delete r.exit, null === t)
                                ? o.createElement(l.A.Provider, { value: s }, a)
                                : o.createElement(l.A.Provider, { value: s }, o.createElement(t, r, a));
                        }),
                        t
                    );
                })(o.Component);
            (u.propTypes = {}),
                (u.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                });
            let h = u;
        },
        32675: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        32845: (e, t, n) => {
            'use strict';
            n.d(t, { ConcertLayout: () => o });
            var i = n(96103),
                r = n(21916),
                s = n(49574);
            let o = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, s.Pjs)();
                return n.checkExperiment(s.zal.WebNextDisableConcertsTab, 'on') && (0, r.redirect)('/'), t;
            });
        },
        47435: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        49388: (e) => {
            e.exports = {
                rootOld: 'Content_rootOld__g85_m',
                rootOld_newVibe: 'Content_rootOld_newVibe__4CZFU',
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                primary: 'Content_primary__dInSS',
                primary_newVibe: 'Content_primary_newVibe__oYRhi',
                primary_isMobile: 'Content_primary_isMobile__ApDi2',
                primary_short: 'Content_primary_short__TSM3L',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                secondary: 'Content_secondary__tGLLS',
                secondary_isMobile: 'Content_secondary_isMobile__CbF7M',
                secondaryEnter: 'Content_secondaryEnter__Nsp_f',
                secondaryEnterActive: 'Content_secondaryEnterActive__Ks_PK',
                secondaryExit: 'Content_secondaryExit__m4gOK',
                secondaryExitActive: 'Content_secondaryExitActive__miNnR',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        56461: (e) => {
            e.exports = {
                root: 'TrackAboutModalDesktop_root__NHeeO',
                root_withFullscreen: 'TrackAboutModalDesktop_root_withFullscreen__jOu4X',
                root_withCustomControls: 'TrackAboutModalDesktop_root_withCustomControls__b2JDR',
                header: 'TrackAboutModalDesktop_header__7Zl2n',
                modalContent: 'TrackAboutModalDesktop_modalContent__yf4i5',
                explicitMark: 'TrackAboutModalDesktop_explicitMark__tgVyh',
                important: 'TrackAboutModalDesktop_important__tCPvh',
                version: 'TrackAboutModalDesktop_version__m0z2v',
                explicit: 'TrackAboutModalDesktop_explicit__FGMHf',
                content: 'TrackAboutModalDesktop_content__eEGZu',
                artistLink: 'TrackAboutModalDesktop_artistLink__ao_zU',
                artists: 'TrackAboutModalDesktop_artists__2SlTA',
                overlay: 'TrackAboutModalDesktop_overlay__7cEGE',
                textShimmer: 'TrackAboutModalDesktop_textShimmer__r5_AA',
                text: 'TrackAboutModalDesktop_text__zcpo0',
            };
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60761: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => c });
            var i = n(32290),
                r = n(29680),
                s = n(49574),
                o = n(99937),
                l = n.n(o);
            let a = [{ id: s.uQT.INFO }, { id: s.uQT.ERROR, limit: 1 }],
                c = () =>
                    a.map((e) => {
                        let { id: t, limit: n } = e;
                        return (0, i.jsx)(r.Notification, { className: l().root, enableMultiContainer: !0, containerId: t, position: 'bottom-center', limit: n }, t);
                    });
        },
        61251: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        62943: (e) => {
            e.exports = {
                root: 'PromoLandingLayout_root__nFZZ7',
                playerBar: 'PromoLandingLayout_playerBar__7tyD3',
                animatedPlayer_enter: 'PromoLandingLayout_animatedPlayer_enter__0MM1u',
                animatedPlayer_enter_active: 'PromoLandingLayout_animatedPlayer_enter_active__mEGFp',
                'enter-fade': 'PromoLandingLayout_enter-fade__fGSAV',
                'enter-move': 'PromoLandingLayout_enter-move__800PQ',
                animatedPlayer_exit: 'PromoLandingLayout_animatedPlayer_exit__D9q3r',
                animatedPlayer_exit_active: 'PromoLandingLayout_animatedPlayer_exit_active__VnBYL',
                'exit-fade': 'PromoLandingLayout_exit-fade__4rLUP',
                'exit-move': 'PromoLandingLayout_exit-move__cg_8c',
            };
        },
        73017: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        73364: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => j });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(55178),
                l = n(39407),
                a = n(59824),
                c = n(91027),
                d = n(54862),
                u = n(6752),
                h = n(50162),
                m = n(74196),
                p = n(71926),
                _ = n(49574),
                f = n(44574),
                v = n(21916),
                x = n(63423),
                b = n(47435),
                g = n.n(b);
            let y = (0, s.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, _.Pjs)(),
                        t = (0, v.useRouter)(),
                        n = (0, _.NFA)().get(_.QGx),
                        s = (0, c.c)(() => {
                            e.close(), n.authorizationUrl && t.push(n.authorizationUrl);
                        });
                    return (0, i.jsx)(x.$, {
                        className: (0, r.$)(g().button, g().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: s,
                        ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON),
                        children: (0, i.jsx)(p.Caption, {
                            className: g().buttonMainText,
                            variant: 'span',
                            children: (0, i.jsx)(l.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                C = 'crackdown-buy-subscription-button',
                A = (0, s.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: n,
                            modals: { crackdownModal: s },
                        } = (0, _.Pjs)(),
                        [v, x] = (0, d.d)(),
                        [b, A] = (0, o.useState)(s.isOpened),
                        {
                            mainText: j,
                            mainTextA11y: w,
                            additionText: T,
                            isShimmerVisible: E,
                            isShimmerActive: M,
                            openPaymentWidgetModal: N,
                            saveOfferAndAuthorize: k,
                        } = (0, _.DpZ)({ storeName: 'music', isEnabled: b, offerElement: { element: v, intersectionPropertyId: C } }),
                        L = (0, c.c)(() => {
                            if ((s.close(), !n.isAuthorized)) return void k();
                            N();
                        }),
                        P = (0, u.L)(() =>
                            E
                                ? (0, i.jsx)(f.bb, { className: (0, r.$)(g().button, g().important), isActive: M })
                                : (0, i.jsxs)(f.mv, {
                                      className: (0, r.$)(g().button, g().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: x,
                                      'data-intersection-property-id': C,
                                      onClick: L,
                                      'aria-label': w,
                                      ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON),
                                      children: [
                                          (0, i.jsx)(p.Caption, { variant: 'div', className: g().buttonMainText, children: j }),
                                          T && (0, i.jsx)(p.Caption, { variant: 'div', size: 'm', weight: 'normal', children: T }),
                                      ],
                                  }),
                        );
                    return (
                        (0, o.useEffect)(() => {
                            setTimeout(() => {
                                A(!0);
                            }, 2500);
                        }, []),
                        (0, i.jsxs)(f.cu, {
                            open: s.isOpened,
                            onClose: s.close,
                            ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL),
                            children: [
                                (0, i.jsx)('div', {
                                    className: f.SE.growContainer,
                                    ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE),
                                    children: (0, i.jsx)(h.Image, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, i.jsxs)('div', {
                                    className: f.SE.text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, i.jsx)(p.Heading, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: f.SE.title,
                                            ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT),
                                            children: (0, i.jsx)(l.A, { id: 'crackdown.title', values: { br: (0, i.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, i.jsx)(p.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            className: f.SE.description,
                                            ...(0, a.Am)(a.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT),
                                            children: (0, i.jsx)(l.A, { id: 'crackdown.description', values: { br: (0, i.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(m.q, {
                                    children: [
                                        (0, i.jsx)(p.Heading, { variant: 'h1', children: (0, i.jsx)(l.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, i.jsx)(p.Caption, {
                                            variant: 'div',
                                            children: (0, i.jsx)(l.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)('div', { className: f.SE.buttons, children: [P, t && (0, i.jsx)(y, {})] }),
                            ],
                        })
                    );
                });
            A.displayName = 'CrackdownModalComponent';
            let j = (e) => (0, i.jsx)(_.rtM, { page: _.l7W.CRACKDOWN_SCREEN, places: [_.RBW.TOP_BUTTON], children: (0, i.jsx)(A, { ...e }) });
        },
        76167: (e, t, n) => {
            'use strict';
            n.d(t, { PromoLandingLayout: () => j });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(21916),
                l = n(55178),
                a = n(9612),
                c = n(25179),
                d = n(73364),
                u = n(6687),
                h = n(50444),
                m = n(32381),
                p = n(9355),
                _ = n(43224),
                f = n(49574),
                v = n(44574),
                x = n(32675),
                b = n.n(x),
                g = n(60761),
                y = n(62943),
                C = n.n(y);
            let A = {
                    enter: C().animatedPlayer_enter,
                    enterActive: C().animatedPlayer_enter_active,
                    exit: C().animatedPlayer_exit,
                    exitActive: C().animatedPlayer_exit_active,
                },
                j = (0, s.PA)((e) => {
                    let { className: t, children: n } = e,
                        s = (0, o.usePathname)(),
                        x = (0, l.useRef)(null),
                        {
                            settings: { isMobile: y },
                            modals: { promoLandingBuySubscriptionModal: j },
                            promolanding: { state: w },
                        } = (0, f.Pjs)(),
                        { isFreemium: T } = (0, f.XCI)();
                    return (0, i.jsxs)('div', {
                        style: { '--promo-landing-layout-transition-duration': ''.concat(220, 'ms') },
                        className: (0, r.$)((0, f.JH_)(f.Sxu.Dark), b().root, C().root, t),
                        children: [
                            (0, i.jsx)(c.i6, {
                                className: (0, r.$)(b().content, { [b().content_withPlayerBar]: y }),
                                children: (0, i.jsxs)(v.tH, { fallback: m.w, children: [n, (0, i.jsx)(g.m, {})] }, s),
                            }),
                            (0, i.jsx)(a.A, {
                                nodeRef: x,
                                in: !!w.entityMeta,
                                timeout: 220,
                                classNames: A,
                                unmountOnExit: !0,
                                children: (0, i.jsx)(f.nVz, {
                                    pageId: f._Q$.PLAYER,
                                    children: (0, i.jsx)('div', {
                                        ref: x,
                                        className: (0, r.$)(C().playerBar, { [b().compositePlayerBar]: y, [b().playerBar]: !y }),
                                        children: (0, i.jsx)(h.Hq, { className: (0, r.$)({ [b().playerBar]: y }) }),
                                    }),
                                }),
                            }),
                            T &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(p.BZ, { modal: j }),
                                        (0, i.jsx)(d.g, { withAlreadyInPlusButton: !0 }),
                                        (0, i.jsx)(_.mt, {}),
                                        (0, i.jsx)(u.cw, {}),
                                    ],
                                }),
                            (0, i.jsx)(v.Pe, {}),
                        ],
                    });
                });
        },
        77307: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => A, XW: () => j });
            var i = n(55178),
                r = n(51767);
            function s(e, t, n) {
                let i,
                    r = n.initialDeps ?? [];
                function s() {
                    var s, o, l, a;
                    let c, d;
                    n.key && (null == (s = n.debug) ? void 0 : s.call(n)) && (c = Date.now());
                    let u = e();
                    if (!(u.length !== r.length || u.some((e, t) => r[t] !== e))) return i;
                    if (
                        ((r = u),
                        n.key && (null == (o = n.debug) ? void 0 : o.call(n)) && (d = Date.now()),
                        (i = t(...u)),
                        n.key && (null == (l = n.debug) ? void 0 : l.call(n)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            i = t / 16,
                            r = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${r(t, 5)} /${r(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return null == (a = null == n ? void 0 : n.onChange) || a.call(n, i), i;
                }
                return (
                    (s.updateDeps = (e) => {
                        r = e;
                    }),
                    s
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, n) => {
                    let i;
                    return function (...r) {
                        e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, r), n));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= n; e++) i.push(e);
                    return i;
                },
                d = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = (e) => {
                        let { width: n, height: i } = e;
                        t({ width: Math.round(n), height: Math.round(i) });
                    };
                    if ((r(n.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let s = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void r({ width: t.inlineSize, height: t.blockSize });
                            }
                            r(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        s.observe(n, { box: 'border-box' }),
                        () => {
                            s.unobserve(n);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        i(),
                        n.addEventListener('resize', i, u),
                        () => {
                            n.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                p = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = 0,
                        s =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      i,
                                      () => {
                                          t(r, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: l } = e.options;
                            (r = o ? n.scrollLeft * ((l && -1) || 1) : n.scrollTop), s(), t(r, i);
                        },
                        a = o(!0),
                        c = o(!1);
                    c(), n.addEventListener('scroll', a, u);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && n.addEventListener('scrollend', c, u),
                        () => {
                            n.removeEventListener('scroll', a), d && n.removeEventListener('scrollend', c);
                        }
                    );
                },
                _ = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = 0,
                        s =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      i,
                                      () => {
                                          t(r, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            (r = n[e.options.horizontal ? 'scrollX' : 'scrollY']), s(), t(r, i);
                        },
                        a = o(!0),
                        c = o(!1);
                    c(), n.addEventListener('scroll', a, u);
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && n.addEventListener('scrollend', c, u),
                        () => {
                            n.removeEventListener('scroll', a), d && n.removeEventListener('scrollend', c);
                        }
                    );
                },
                f = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[n.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var r, s;
                    null == (s = null == (r = i.scrollElement) ? void 0 : r.scrollTo) || s.call(r, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                x = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var r, s;
                    null == (s = null == (r = i.scrollElement) ? void 0 : r.scrollTo) || s.call(r, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class b {
                constructor(e) {
                    (this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var n;
                                    null == (n = t()) || n.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, n]) => {
                                void 0 === n && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: f,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                });
                        }),
                        (this.notify = (e) => {
                            var t, n;
                            null == (n = (t = this.options).onChange) || n.call(t, this, e);
                        }),
                        (this.maybeNotify = s(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            (this.scrollRect = e), this.maybeNotify();
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            (this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify();
                                        }),
                                    );
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let n = new Map(),
                                i = new Map();
                            for (let r = t - 1; r >= 0; r--) {
                                let t = e[r];
                                if (n.has(t.lane)) continue;
                                let s = i.get(t.lane);
                                if ((null == s || t.end > s.end ? i.set(t.lane, t) : t.end < s.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = s(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, i, r) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: r }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = s(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: r }, s) => {
                                if (!r) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, o);
                                for (let r = o; r < e; r++) {
                                    let e = i(r),
                                        o = 1 === this.options.lanes ? l[r - 1] : this.getFurthestMeasurement(l, r),
                                        a = o ? o.end + this.options.gap : t + n,
                                        c = s.get(e),
                                        d = 'number' == typeof c ? c : this.options.estimateSize(r),
                                        u = a + d,
                                        h = o ? o.lane : r % this.options.lanes;
                                    l[r] = { index: r, start: a, size: d, end: u, key: e, lane: h };
                                }
                                return (this.measurementsCache = l), l;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = s(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: i }) {
                                              let r = e.length - 1,
                                                  s = g(0, r, (t) => e[t].start, n),
                                                  o = s;
                                              if (1 === i) for (; o < r && e[o].end < n + t; ) o++;
                                              else if (i > 1) {
                                                  let l = Array(i).fill(0);
                                                  for (; o < r && l.some((e) => e < n + t); ) {
                                                      let t = e[o];
                                                      (l[t.lane] = t.end), o++;
                                                  }
                                                  let a = Array(i).fill(n + t);
                                                  for (; s > 0 && a.some((e) => e >= n); ) {
                                                      let t = e[s];
                                                      (a[t.lane] = t.start), s--;
                                                  }
                                                  (s = Math.max(0, s - (s % i))), (o = Math.min(r, o + (i - 1 - (o % i))));
                                              }
                                              return { startIndex: s, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = s(
                            () => {
                                let e = null,
                                    t = null,
                                    n = this.calculateRange();
                                return (
                                    n && ((e = n.startIndex), (t = n.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, n, i, r) => (null === i || null === r ? [] : e({ startIndex: i, endIndex: r, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                i = this.measurementsCache[n];
                            if (!i) return;
                            let r = i.key,
                                s = this.elementsCache.get(r);
                            s !== e && (s && this.observer.unobserve(s), this.observer.observe(e), this.elementsCache.set(r, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, i, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(n.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = s(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let n = [];
                                for (let i = 0, r = e.length; i < r; i++) {
                                    let r = t[e[i]];
                                    n.push(r);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return o(t[g(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let i = this.getSize(),
                                r = this.getScrollOffset();
                            'auto' === t && (t = e >= r + i ? 'end' : 'start'), 'center' === t ? (e += (n - i) / 2) : 'end' === t && (e -= i);
                            let s = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[s]
                                            : this.scrollElement[s]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = this.getSize(),
                                r = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= r + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(n.start <= r + this.options.scrollPaddingStart)) return [r, t];
                                    t = 'start';
                                }
                            let s = 'end' === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(s, t, n.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: n } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: n });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: n } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [r, s] = i;
                            this._scrollToOffset(r, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, s));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: s, behavior: n });
                                        } else this.scrollToIndex(e, { align: s, behavior: n });
                                    }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t });
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                n = this.getMeasurements();
                            if (0 === n.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = n[n.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = n.length - 1;
                                for (; i > 0 && e.some((e) => null === e); ) {
                                    let t = n[i];
                                    null === e[t.lane] && (e[t.lane] = t.end), i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                            this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let g = (e, t, n, i) => {
                    for (; e <= t; ) {
                        let r = ((e + t) / 2) | 0,
                            s = n(r);
                        if (s < i) e = r + 1;
                        else {
                            if (!(s > i)) return r;
                            t = r - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                y = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function C(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, i) => {
                            var s;
                            i ? (0, r.flushSync)(t) : t(), null == (s = e.onChange) || s.call(e, n, i);
                        },
                    },
                    [s] = i.useState(() => new b(n));
                return s.setOptions(n), y(() => s._didMount(), []), y(() => s._willUpdate()), s;
            }
            function A(e) {
                return C({ observeElementRect: d, observeElementOffset: p, scrollToFn: x, ...e });
            }
            function j(e) {
                return C({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: _,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        79259: (e, t, n) => {
            'use strict';
            n.d(t, { FN: () => r, gj: () => i }), n(81829);
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: n, transform: i } = e;
                    return n && t
                        ? (function (e, t, n) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= n.top ? (i.y = n.top - t.top) : t.bottom + e.y >= n.top + n.height && (i.y = n.top + n.height - t.bottom),
                                  t.left + e.x <= n.left ? (i.x = n.left - t.left) : t.right + e.x >= n.left + n.width && (i.x = n.left + n.width - t.right),
                                  i
                              );
                          })(i, n, t)
                        : i;
                },
                r = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        81116: (e) => {
            e.exports = { root: 'PromoLandingContent_root__QrRKX', main: 'PromoLandingContent_main__ELiBu' };
        },
        81354: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var i,
                r,
                s = n(30782),
                o = n(55178),
                l = n(60900);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var a = function (e) {
                var t = (0, l.A)(),
                    n = e.value,
                    i = e.children,
                    r = (0, s.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(n, r));
            };
            function c(e) {
                var t = function (t) {
                    var n = (0, l.A)(),
                        i = t.value,
                        r = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        a = 'string' == typeof i ? new Date(i || 0) : i;
                    return r('formatDate' === e ? n.formatDateToParts(a, o) : n.formatTimeToParts(a, o));
                };
                return (t.displayName = r[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var n = (0, l.A)(),
                        i = t.value,
                        r = t.children,
                        a = (0, s.__rest)(t, ['value', 'children']),
                        c = n[e](i, a);
                    if ('function' == typeof r) return r(c);
                    var d = n.textComponent || o.Fragment;
                    return o.createElement(d, null, c);
                };
                return (t.displayName = i[e]), t;
            }
            (a.displayName = 'FormattedNumberParts'), (a.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        81371: (e, t, n) => {
            'use strict';
            n.d(t, { CollectionLayout: () => l });
            var i = n(96103),
                r = n(21916),
                s = n(51516),
                o = n(49574);
            let l = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, o.Pjs)();
                return (0, s.Ij)(), n.checkExperiment(o.zal.WebNextDisableCollection, 'on') && (0, r.redirect)(o.Zyd.main.href), t;
            });
        },
        88683: (e, t, n) => {
            'use strict';
            n.d(t, { NonMusicLayout: () => o });
            var i = n(96103),
                r = n(21916),
                s = n(49574);
            let o = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, s.Pjs)();
                return n.checkExperiment(s.zal.WebNextDisableNonMusic, 'on') && (0, r.redirect)(s.Zyd.main.href), t;
            });
        },
        92881: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        95910: (e) => {
            e.exports = {
                root: 'TrackLyricsModal_root__KsVRf',
                header: 'TrackLyricsModal_header__nWar3',
                modalContent: 'TrackLyricsModal_modalContent__uYdL2',
                content: 'TrackLyricsModal_content__Cstzi',
                explicitMark: 'TrackLyricsModal_explicitMark__eL04d',
                important: 'TrackLyricsModal_important__0Ie9h',
                version: 'TrackLyricsModal_version__l9sxZ',
                overlay: 'TrackLyricsModal_overlay__0Ehwu',
            };
        },
        99937: (e) => {
            e.exports = { root: 'LayoutNotificationContainers_root__5HClw' };
        },
    },
]);
