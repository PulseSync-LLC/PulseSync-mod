(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [671],
    {
        607: (e, t, n) => {
            'use strict';
            n.d(t, { ConcertLayout: () => i });
            var r = n(28303),
                a = n(97396),
                o = n(83252);
            let i = (0, r.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, o.Pjs)();
                return n.checkExperiment(o.zal.WebNextDisableConcertsTab, 'on') && (0, a.redirect)('/'), t;
            });
        },
        8459: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => c });
            var r = n(54486),
                a = n(62662),
                o = n(83252),
                i = n(78107),
                s = n.n(i);
            let l = [{ id: o.uQT.INFO }, { id: o.uQT.ERROR, limit: 1 }],
                c = () =>
                    l.map((e) => {
                        let { id: t, limit: n } = e;
                        return (0, r.jsx)(a.Notification, { className: s().root, enableMultiContainer: !0, containerId: t, position: 'bottom-center', limit: n }, t);
                    });
        },
        10209: (e, t, n) => {
            'use strict';
            n.d(t, { DefaultLayout: () => et });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(97396),
                s = n(61910),
                l = n(79952),
                c = n(69034),
                d = n(96909),
                u = n(54278),
                _ = n(66498),
                m = n(14308),
                p = n(58387),
                x = n(82391),
                h = n(31500),
                v = n(77881),
                f = n(97800),
                b = n(83252),
                j = n(52785),
                A = n.n(j);
            let C = (0, o.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: n, buttonText: o, href: i },
                    } = (0, b.Pjs)(),
                    s = (0, b.ZpR)(i),
                    { theme: l } = (0, b.DPo)();
                return (0, r.jsx)('div', {
                    className: (0, a.$)(A().wrapper, t),
                    ...(0, h.Am)(h.e8.redAlert.RED_ALERT),
                    children: (0, r.jsxs)('div', {
                        className: (0, a.$)(A().root, { [A().root_light]: l === b.Sxu.Light }),
                        children: [
                            (0, r.jsx)(f.Caption, {
                                className: A().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                ...(0, h.Am)(h.e8.redAlert.RED_ALERT_TEXT),
                                children: n,
                            }),
                            (0, r.jsx)(v.$, {
                                className: A().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: s,
                                ...(0, h.Am)(h.e8.redAlert.RED_ALERT_BUTTON),
                                children: (0, r.jsx)(f.Caption, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: o }),
                            }),
                        ],
                    }),
                });
            });
            var g = n(82644),
                y = n(95373),
                k = n(13403),
                N = n(98845),
                T = n(55616),
                L = n(88294),
                P = n(69610),
                w = n(91803),
                D = n(51376),
                E = n(21514),
                M = n(7186),
                B = n(21365),
                R = n(54830),
                O = n(34942),
                S = n(80585),
                W = n(95369),
                I = n.n(W),
                z = n(8459),
                F = n(33115),
                $ = n.n(F),
                V = n(1365),
                K = n(21390),
                U = n(43426),
                Y = n(8817);
            let H = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var G = n(98626),
                Z = n.n(G);
            let X = (0, o.PA)((e) => {
                    let { className: t, forwardRef: n, onAdvertChange: o, ...i } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: s },
                            },
                        } = (0, b.Pjs)(),
                        { formatMessage: l } = (0, U.A)(),
                        c = (0, Y.c)((e) => {
                            void 0 !== e && s.setType(e), o();
                        });
                    return (0, r.jsx)('section', {
                        ref: n,
                        className: (0, a.$)(Z().root, t, { [Z().root_hidden]: !s.isVisible }),
                        'aria-label': l({ id: 'advert.banner' }),
                        role: 'banner',
                        ...i,
                        children: (0, r.jsx)(S.NX, {
                            className: Z().advert,
                            ownerId: b.PVv,
                            containerId: 'adfox_173831489272852769',
                            params: H,
                            onLoad: s.setType,
                            onRender: c,
                            onError: s.toggleHasErrorTrue,
                            onNoAds: s.toggleNoAdsTrue,
                        }),
                    });
                }),
                Q = (0, s.forwardRef)((e, t) => (0, r.jsx)(X, { forwardRef: t, ...e }));
            var q = n(16319),
                J = n.n(q);
            let ee = (0, o.PA)((e) => {
                    let { children: t } = e,
                        [n, o] = (0, s.useState)(!1),
                        [i, l] = (0, s.useState)(!0),
                        [c, d] = (0, s.useState)(!1),
                        { contentRef: u, contentScrollRef: _ } = (0, b.gKY)(),
                        m = (0, s.useRef)(null),
                        { isFreemium: p } = (0, b.XCI)(),
                        {
                            user: x,
                            advertBanners: {
                                banners: { topAdvertBanner: h },
                            },
                        } = (0, b.Pjs)(),
                        v = (!x.isAuthorized || p) && h.isVisible,
                        f = (0, s.useCallback)(() => {
                            l(!1), o(!0);
                        }, [l, o]),
                        j = (0, s.useCallback)(() => {
                            l(!0), o(!1);
                        }, [l, o]),
                        A = (0, s.useCallback)(() => {
                            d(!1);
                        }, [d]),
                        C = (0, s.useMemo)(
                            () =>
                                v
                                    ? (0, r.jsx)(Q, { className: (0, a.$)(J().banner, { [J().banner_canShow]: n }), onFocus: f, onBlur: j, onAdvertChange: A, ref: m })
                                    : null,
                            [v, n, f, j, A],
                        ),
                        g = (0, s.useCallback)(() => {
                            var e;
                            if (!C) return;
                            if (!u || !_) return void o(!0);
                            let t = _.scrollTop > 0,
                                n = u.clientHeight + ((null == (e = m.current) ? void 0 : e.offsetHeight) || 0) < _.scrollHeight;
                            if ((n ? l(!0) : !n && t && l(!1), !i || (!t && c))) return;
                            let r = !t;
                            o(r), r && d(!0);
                        }, [u, _, C, i, c, o, l, d]);
                    (0, s.useEffect)(() => {
                        g();
                    }, [g, _]);
                    let y = (0, s.useMemo)(() => (0, V.A)(g, 200), [g]);
                    return (
                        (0, K.L)({ onScroll: y, elementRef: _ }),
                        (0, r.jsxs)('div', { className: J().root, children: [C, (0, r.jsx)('div', { className: J().content, children: t })] })
                    );
                }),
                et = (0, o.PA)((e) => {
                    var t, n, o, h, v, f;
                    let { className: j, children: A } = e,
                        W = (0, i.usePathname)(),
                        { setCompositePlayerBarRef: F } = (0, b.gKY)(),
                        V = (0, b.NFA)().get(b.ooW),
                        K = (0, m.Yp)(),
                        {
                            settings: { browserInfo: U, isMobile: Y, isWindowsApplication: H, isMacOSApplication: G, isLinuxApplication: Z },
                            experiments: X,
                            communication: Q,
                            user: q,
                            redAlert: J,
                            downloadMobileApp: et,
                            album: en,
                            albumCPA: { isPlusCPAPlayerBarEnabled: er, isHidePlusModalEnabled: ea },
                            modals: { buySubscriptionModal: eo },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: ei },
                            },
                        } = (0, b.Pjs)(),
                        { isFreemium: es } = (0, b.XCI)(),
                        [el, ec] = (0, s.useState)(null != (f = V.get(b.cYZ.NavbarCollapsed)) ? f : K),
                        ed = (0, s.useMemo)(() => ({ isCollapsed: el || K, setIsCollapsed: ec }), [el, K]);
                    (0, b.dKN)();
                    let eu = (!q.isAuthorized || es) && (null == U ? void 0 : U.isTouch),
                        e_ = (0, R.df)(),
                        em = X.checkExperiment(b.zal.WebNextArtistInfo, 'on'),
                        ep =
                            !J.isVisible &&
                            !Y &&
                            (null == (t = Q.list) ? void 0 : t.barBelow.isVisible) &&
                            (null == (n = Q.list) ? void 0 : n.barBelow.hasAnimationAlreadyBeenStarted),
                        ex = W === b.Zyd.main.href && X.checkExperiment(b.zal.WebNextNewWaveTab, 'on'),
                        eh = X.checkExperiment(b.zal.WebNextDeeplinksToMobile, 'on') && q.hasPlus && !!(null == U ? void 0 : U.isMobile) && !1,
                        { setDefaultLayoutRef: ev } = (0, b.gKY)(),
                        ef = er(null == en ? void 0 : en.id, null == en || null == (o = en.meta) ? void 0 : o.isNonMusic),
                        eb = ea(null == en ? void 0 : en.id, null == en || null == (h = en.meta) ? void 0 : h.isNonMusic),
                        ej = !eu || ef,
                        eA = ef && (null == U ? void 0 : U.isTouch);
                    return (
                        (0, s.useEffect)(() => {
                            eb && eo.close();
                        }, [eb, eo]),
                        (0, r.jsx)(b.qTt.Provider, {
                            value: ed,
                            children: (0, r.jsx)(ee, {
                                children: (0, r.jsx)(S.do, {
                                    isEnabled: eh,
                                    children: (0, r.jsx)(D.sO, {
                                        children: (0, r.jsxs)('div', {
                                            ref: ev,
                                            className: (0, a.$)(
                                                I().root,
                                                $().root,
                                                {
                                                    [$().root_applicationPreserveTitleBar]: H || Z,
                                                    [$().root_withBarBelow]: J.isVisible || ep,
                                                    [I().root_withAxeBanner]: ei.isVisible,
                                                },
                                                j,
                                            ),
                                            children: [
                                                eA && (0, r.jsx)(P.BZ, { modal: eo }),
                                                !Y &&
                                                    ej &&
                                                    (0, r.jsx)(m.Fp, {
                                                        className: (0, a.$)($().navbar, {
                                                            [$().navbar_application_windows]: H,
                                                            [$().navbar_application_macos]: G,
                                                            [$().navbar_application_linux]: Z,
                                                        }),
                                                        externalIsCollapsed: el,
                                                        externalSetIsCollapsed: ec,
                                                    }),
                                                (0, r.jsx)(c.UC, {
                                                    className: (0, a.$)(I().content, {
                                                        [I().content_withPlayerBar]: Y && !ex,
                                                        [I().content_withAxeBanner]: ei.isVisible,
                                                    }),
                                                    children: (0, r.jsxs)(S.tH, { fallback: g.w, children: [A, (0, r.jsx)(z.m, {})] }, W),
                                                }),
                                                !Y && ej && (0, r.jsx)(b.nVz, { pageId: b._Q$.PLAYER, children: (0, r.jsx)(x.LN, { className: I().playerBar }) }),
                                                Y &&
                                                    ej &&
                                                    (0, r.jsxs)('div', {
                                                        ref: F,
                                                        className: (0, a.$)(I().compositePlayerBar, { [I().compositePlayerBar_withNewWave]: ex }),
                                                        children: [
                                                            eh && (0, r.jsx)(S.jg, {}),
                                                            (0, r.jsx)(b.nVz, { pageId: b._Q$.PLAYER, children: (0, r.jsx)(x.LN, { className: I().playerBar }) }),
                                                            (0, r.jsx)(m.Fp, {
                                                                className: (0, a.$)($().navbar, {
                                                                    [$().navbar_application_windows]: H,
                                                                    [$().navbar_application_macos]: G,
                                                                    [$().navbar_application_linux]: Z,
                                                                }),
                                                                externalIsCollapsed: el,
                                                                externalSetIsCollapsed: ec,
                                                            }),
                                                        ],
                                                    }),
                                                J.isVisible && (0, r.jsx)(C, { className: $().barBelow }),
                                                !J.isVisible && !Y && Q.list && (0, r.jsx)(L.Bx, { className: $().barBelow, barBelow: Q.list.barBelow }),
                                                (null == (v = Q.list) ? void 0 : v.modal) && (0, r.jsx)(w.ov, { modal: Q.list.modal }),
                                                (0, r.jsx)(b.nVz, { pageId: b._Q$.PLAYER, children: (0, r.jsx)(x.vR, {}) }),
                                                e_ && (0, r.jsx)(b.nVz, { pageId: b._Q$.VIDEO_PLAYER, children: (0, r.jsx)(k.A2, {}) }),
                                                (0, r.jsx)(S.Pe, {}),
                                                (0, r.jsx)(b.nVz, { pageId: b._Q$.TRAILER, children: (0, r.jsx)(y.f, {}) }),
                                                (0, r.jsx)(N.p, {}),
                                                e_ && (0, r.jsx)(c.$9, {}),
                                                (0, r.jsx)(c.US, {}),
                                                em && (0, r.jsx)(T.y8, {}),
                                                !q.hasPlus && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(p.cw, {}), (0, r.jsx)(d.g, {}), (0, r.jsx)(x.BG, {})] }),
                                                !q.hasPlus && (0, r.jsx)(_.x8, {}),
                                                (0, r.jsx)(M.P, {}),
                                                (0, r.jsx)(c.VW, {}),
                                                (0, r.jsx)(l.hq, {}),
                                                (0, r.jsx)(O.mt, {}),
                                                (0, r.jsx)(B.U6, {}),
                                                et.shouldShow() && (0, r.jsx)(u.h, {}),
                                                (0, r.jsx)(E.w, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
        },
        10877: (e, t, n) => {
            'use strict';
            n.d(t, { NonMusicLayout: () => i });
            var r = n(28303),
                a = n(97396),
                o = n(83252);
            let i = (0, r.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, o.Pjs)();
                return n.checkExperiment(o.zal.WebNextDisableNonMusic, 'on') && (0, a.redirect)(o.Zyd.main.href), t;
            });
        },
        16319: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        19713: (e, t, n) => {
            'use strict';
            n.d(t, { FN: () => a, gj: () => r }), n(99215);
            let r = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: n, transform: r } = e;
                    return n && t
                        ? (function (e, t, n) {
                              let r = { ...e };
                              return (
                                  t.top + e.y <= n.top ? (r.y = n.top - t.top) : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom),
                                  t.left + e.x <= n.left ? (r.x = n.left - t.left) : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right),
                                  r
                              );
                          })(r, n, t)
                        : r;
                },
                a = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        19741: (e, t, n) => {
            'use strict';
            n.d(t, { CollectionLayout: () => i });
            var r = n(28303),
                a = n(97396),
                o = n(83252);
            let i = (0, r.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, o.Pjs)();
                return n.checkExperiment(o.zal.WebNextDisableCollection, 'on') && (0, a.redirect)(o.Zyd.main.href), t;
            });
        },
        23266: (e) => {
            e.exports = { root: 'PromoLandingContent_root__QrRKX', main: 'PromoLandingContent_main__ELiBu' };
        },
        27604: (e) => {
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
        33115: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        37491: (e, t, n) => {
            'use strict';
            n.d(t, { KidsLayout: () => i });
            var r = n(28303),
                a = n(97396),
                o = n(83252);
            let i = (0, r.PA)((e) => {
                let { children: t } = e,
                    { experiments: n } = (0, o.Pjs)();
                return n.checkExperiment(o.zal.WebNextDisableKids, 'on') && (0, a.redirect)(o.Zyd.main.href), t;
            });
        },
        46865: (e, t, n) => {
            'use strict';
            n.d(t, { PromoLandingLayout: () => y });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(97396),
                s = n(61910),
                l = n(63664),
                c = n(69034),
                d = n(96909),
                u = n(58387),
                _ = n(82391),
                m = n(82644),
                p = n(69610),
                x = n(34942),
                h = n(83252),
                v = n(80585),
                f = n(95369),
                b = n.n(f),
                j = n(8459),
                A = n(99481),
                C = n.n(A);
            let g = {
                    enter: C().animatedPlayer_enter,
                    enterActive: C().animatedPlayer_enter_active,
                    exit: C().animatedPlayer_exit,
                    exitActive: C().animatedPlayer_exit_active,
                },
                y = (0, o.PA)((e) => {
                    let { className: t, children: n } = e,
                        o = (0, i.usePathname)(),
                        f = (0, s.useRef)(null),
                        {
                            settings: { isMobile: A },
                            modals: { promoLandingBuySubscriptionModal: y },
                            promolanding: { state: k },
                        } = (0, h.Pjs)(),
                        { isFreemium: N } = (0, h.XCI)();
                    return (0, r.jsxs)('div', {
                        style: { '--promo-landing-layout-transition-duration': ''.concat(220, 'ms') },
                        className: (0, a.$)((0, h.JH_)(h.Sxu.Dark), b().root, C().root, t),
                        children: [
                            (0, r.jsx)(c.i6, {
                                className: (0, a.$)(b().content, { [b().content_withPlayerBar]: A }),
                                children: (0, r.jsxs)(v.tH, { fallback: m.w, children: [n, (0, r.jsx)(j.m, {})] }, o),
                            }),
                            (0, r.jsx)(l.A, {
                                nodeRef: f,
                                in: !!k.entityMeta,
                                timeout: 220,
                                classNames: g,
                                unmountOnExit: !0,
                                children: (0, r.jsx)(h.nVz, {
                                    pageId: h._Q$.PLAYER,
                                    children: (0, r.jsx)('div', {
                                        ref: f,
                                        className: (0, a.$)(C().playerBar, { [b().compositePlayerBar]: A, [b().playerBar]: !A }),
                                        children: (0, r.jsx)(_.Hq, { className: (0, a.$)({ [b().playerBar]: A }) }),
                                    }),
                                }),
                            }),
                            N &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(p.BZ, { modal: y }),
                                        (0, r.jsx)(d.g, { withAlreadyInPlusButton: !0 }),
                                        (0, r.jsx)(x.mt, {}),
                                        (0, r.jsx)(u.cw, {}),
                                    ],
                                }),
                            (0, r.jsx)(v.Pe, {}),
                        ],
                    });
                });
        },
        47691: (e) => {
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
        52785: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        53497: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => _ });
            var r = n(20427),
                a = n(41330),
                o = n(8197),
                i = n(61910),
                s = n(35948);
            function l(e, t) {
                var n = Object.create(null);
                return (
                    e &&
                        i.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            n[e.key] = t && (0, i.isValidElement)(e) ? t(e) : e;
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
                        var r = e.call(this, t, n) || this,
                            a = r.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(r),
                            );
                        return (r.state = { contextValue: { isMounting: !0 }, handleExited: a, firstRender: !0 }), r;
                    }
                    (0, o.A)(t, e);
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
                                r,
                                a = t.children,
                                o = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? l(e.children, function (t) {
                                          return (0, i.cloneElement)(t, {
                                              onExited: o.bind(null, t),
                                              in: !0,
                                              appear: c(t, 'appear', e),
                                              enter: c(t, 'enter', e),
                                              exit: c(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (r = (function (e, t) {
                                              function n(n) {
                                                  return n in t ? t[n] : e[n];
                                              }
                                              (e = e || {}), (t = t || {});
                                              var r,
                                                  a = Object.create(null),
                                                  o = [];
                                              for (var i in e) i in t ? o.length && ((a[i] = o), (o = [])) : o.push(i);
                                              var s = {};
                                              for (var l in t) {
                                                  if (a[l])
                                                      for (r = 0; r < a[l].length; r++) {
                                                          var c = a[l][r];
                                                          s[a[l][r]] = n(c);
                                                      }
                                                  s[l] = n(l);
                                              }
                                              for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]);
                                              return s;
                                          })(a, (n = l(e.children)))),
                                      ).forEach(function (t) {
                                          var s = r[t];
                                          if ((0, i.isValidElement)(s)) {
                                              var l = t in a,
                                                  d = t in n,
                                                  u = a[t],
                                                  _ = (0, i.isValidElement)(u) && !u.props.in;
                                              d && (!l || _)
                                                  ? (r[t] = (0, i.cloneElement)(s, { onExited: o.bind(null, s), in: !0, exit: c(s, 'exit', e), enter: c(s, 'enter', e) }))
                                                  : d || !l || _
                                                    ? d &&
                                                      l &&
                                                      (0, i.isValidElement)(u) &&
                                                      (r[t] = (0, i.cloneElement)(s, {
                                                          onExited: o.bind(null, s),
                                                          in: u.props.in,
                                                          exit: c(s, 'exit', e),
                                                          enter: c(s, 'enter', e),
                                                      }))
                                                    : (r[t] = (0, i.cloneElement)(s, { in: !1 }));
                                          }
                                      }),
                                      r),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (e, t) {
                            var n = l(this.props.children);
                            e.key in n ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var n = (0, a.A)({}, t.children);
                                        return delete n[e.key], { children: n };
                                    }));
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.component,
                                n = e.childFactory,
                                a = (0, r.A)(e, ['component', 'childFactory']),
                                o = this.state.contextValue,
                                l = d(this.state.children).map(n);
                            return (delete a.appear, delete a.enter, delete a.exit, null === t)
                                ? i.createElement(s.A.Provider, { value: o }, l)
                                : i.createElement(s.A.Provider, { value: o }, i.createElement(t, a, l));
                        }),
                        t
                    );
                })(i.Component);
            (u.propTypes = {}),
                (u.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                });
            let _ = u;
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63708: (e) => {
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
        67628: (e) => {
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
        69034: (e, t, n) => {
            'use strict';
            n.d(t, { $9: () => h, UC: () => L, i6: () => D, US: () => I, VW: () => V });
            var r = n(54486),
                a = n(28303),
                o = n(83252),
                i = n(50420),
                s = n(61910),
                l = n(43426),
                c = n(31500),
                d = n(32692),
                u = n(34284),
                _ = n(80585),
                m = n(47691),
                p = n.n(m);
            let x = (0, a.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        { notify: t } = (0, o.lkh)(),
                        { contentRef: n } = (0, o.gKY)(),
                        {
                            currentClipInfo: a,
                            settings: { isMobile: m, isWindowsApplication: x },
                            fullscreenVideoPlayer: h,
                        } = (0, o.Pjs)(),
                        { modal: v, clip: f } = a;
                    !f && a.isClipIdle && a.getClip(), !a.credits && a.isCreditsIdle && a.getCreditsInfo();
                    let b = null == f ? void 0 : f.title,
                        j = null == f ? void 0 : f.explicitDisclaimer,
                        A = (0, s.useMemo)(
                            () =>
                                a.isClipLoading || a.isClipRejected
                                    ? (0, r.jsx)(_.q$, { className: p().titleShimmer, count: 1 })
                                    : f
                                      ? (0, r.jsxs)('span', {
                                            children: [
                                                b,
                                                j &&
                                                    (0, r.jsx)(_.Nq, {
                                                        getDescriptionTexts: f.getDescriptionTexts,
                                                        className: (0, i.$)(p().explicitMark, p().important),
                                                        size: 'xxs',
                                                        variant: j,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [f, b, j, a.isClipLoading, a.isClipRejected],
                        );
                    (0, s.useEffect)(
                        () => () => {
                            v.close(), a.reset();
                        },
                        [a, v],
                    );
                    let C = (0, s.useCallback)(() => {
                            v.close(), a.reset();
                        }, [a, v]),
                        g = (0, s.useCallback)(
                            (e) => {
                                var t;
                                e || a.reset(), null == (t = v.onOpenChange) || t.call(v, e);
                            },
                            [a, v],
                        );
                    a.isRejected && (C(), t((0, r.jsx)(_.hT, { error: e({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR }));
                    let y = (0, s.useMemo)(() => {
                        var e;
                        return a.isCreditsLoading || a.isCreditsRejected
                            ? (0, r.jsx)(_.q$, {})
                            : (null == (e = a.credits) ? void 0 : e.length)
                              ? a.credits.map((e) => {
                                    let t = (0, r.jsx)(u.D, { children: e.value });
                                    return (0, r.jsx)(u.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [a.credits, a.isCreditsLoading, a.isCreditsRejected]);
                    return (0, r.jsx)(d.a, {
                        containerProps: (0, c.Am)(c.Kq.clip.CLIP_ABOUT_MODAL),
                        placement: m ? 'default' : 'right',
                        open: v.isOpened,
                        onClose: C,
                        contentClassName: p().modalContent,
                        title: A,
                        headerClassName: p().header,
                        className: (0, i.$)(p().root, { [p().root_withFullscreen]: h.modal.isOpened, [p().root_withWindows]: x }),
                        onOpenChange: g,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: m || h.modal.isOpened ? null : n,
                        children: (0, r.jsx)('div', { className: p().content, children: y }),
                    });
                }),
                h = (0, a.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, o.Pjs)();
                    return e ? null : (0, r.jsx)(x, {});
                });
            n(53497), n(63664);
            var v = n(8817),
                f = n(27510),
                b = n(69306),
                j = n(71858),
                A = n.n(j);
            A().secondaryEnter, A().secondaryEnterActive;
            var C = (function (e) {
                    return (e.LARGE = 'large'), (e.SMALL = 'small'), e;
                })({}),
                g = n(97396);
            let y = ['album', 'users', 'artist', 'chart'];
            var k = n(1365);
            let N = () => (30 * window.innerHeight) / 100,
                T = (e, t) => e > 0 && t > 0,
                L = (0, a.PA)((e) => {
                    let { className: t, children: n } = e;
                    (0, o.NFA)();
                    let { formatMessage: a } = (0, l.A)(),
                        { setContentRef: c, setContentRootRef: d, setSideBannerRef: u, paywallRef: m, contentScrollRef: p } = (0, o.gKY)(),
                        x = (0, o.UlF)(),
                        {
                            settings: { isMobile: h },
                            experiments: j,
                            user: L,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: P },
                            },
                        } = (0, o.Pjs)(),
                        w = (0, b.y)(),
                        D =
                            (j.checkExperiment(o.zal.WebNextTouchAds, 'small_banner') || j.checkExperiment(o.zal.WebNextTouchAds, 'large_banner')) &&
                            !m &&
                            h &&
                            !L.hasPlus &&
                            !P.isVisible,
                        E = (D && j.checkExperiment(o.zal.WebNextTouchAds, 'small_banner') ? C.SMALL : C.LARGE) === C.SMALL ? 'R-I-16641233-1' : 'R-I-16641233-2',
                        M =
                            ((() => {
                                let e = (0, g.usePathname)();
                                return (0, s.useMemo)(() => {
                                    let [, t] = e.split('/');
                                    return !!t && y.includes(t);
                                }, [e]);
                            })(),
                            ((e) => {
                                let [t, n] = (0, s.useState)(N),
                                    r = (0, s.useRef)(null),
                                    a = (0, s.useRef)(!1),
                                    o = (0, s.useRef)(N()),
                                    i = (0, s.useRef)(N()),
                                    l = (0, v.c)((e) => {
                                        let t = e.scrollTop,
                                            n = e.scrollHeight,
                                            r = e.clientHeight,
                                            a = i.current,
                                            o = t <= 5;
                                        if (!T(n, r)) return a;
                                        let s = n - r;
                                        return s <= 0 ? a : s >= a ? (o ? a : 0) : o ? a : Math.max(0, a - s);
                                    }),
                                    c = (0, v.c)((e) => {
                                        n(Math.round(e)), (o.current = e);
                                    }),
                                    d = (0, v.c)(() => {
                                        i.current = N();
                                    }),
                                    u = (0, v.c)((e) => {
                                        let t = r.current;
                                        null !== t && cancelAnimationFrame(t),
                                            (r.current = requestAnimationFrame(() => {
                                                r.current = null;
                                                let t = l(e),
                                                    n = Math.abs(t - o.current),
                                                    a = i.current;
                                                (0 === t || t >= a || n >= 2) && c(t);
                                            }));
                                    });
                                (0, s.useLayoutEffect)(() => {
                                    if (!e) {
                                        let e = N();
                                        (i.current = e), c(e), (a.current = !1);
                                        return;
                                    }
                                    if (a.current) return;
                                    a.current = !0;
                                    let t = N();
                                    return ((i.current = t), e.scrollTop <= 50) ? void c(t) : T(e.scrollHeight, e.clientHeight) ? void c(l(e)) : void c(t);
                                }, [e, c, l]);
                                let _ = (0, s.useMemo)(
                                    () =>
                                        e
                                            ? (0, k.A)(() => {
                                                  d(), u(e);
                                              }, 100)
                                            : null,
                                    [e, u, d],
                                );
                                return (
                                    (0, s.useEffect)(() => {
                                        if (!e || !_) return;
                                        u(e);
                                        let t = () => {
                                            u(e);
                                        };
                                        e.addEventListener('scroll', t, { passive: !0 });
                                        let n = new ResizeObserver(_);
                                        n.observe(e);
                                        let a = () => {
                                            d(), _();
                                        };
                                        return (
                                            window.addEventListener('resize', a, { passive: !0 }),
                                            () => {
                                                _.cancel();
                                                let s = r.current;
                                                null !== s && (cancelAnimationFrame(s), (r.current = null));
                                                let l = N();
                                                (o.current = l),
                                                    (i.current = l),
                                                    e.removeEventListener('scroll', t),
                                                    n.disconnect(),
                                                    window.removeEventListener('resize', a);
                                            }
                                        );
                                    }, [e, u, _, d]),
                                    t
                                );
                            })(p)),
                        B = P.isVisible ? { marginBlockStart: ''.concat(M, 'px') } : void 0,
                        R =
                            ((0, s.useRef)(null),
                            (0, v.c)(() => {
                                x.error('Cannot render advert banner', { adBlockId: E });
                            })),
                        O = (0, f.L)(() => {
                            if (D)
                                return (0, r.jsx)('div', {
                                    className: A().adContainer,
                                    'aria-label': a({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, r.jsx)(_.fJ, { isAsync: !1, onError: R, productionBlockId: E, testBlockId: E, className: A().adBanner }),
                                });
                        });
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(A().rootOld, t),
                        ref: d,
                        children: [
                            O,
                            (0, r.jsx)('main', {
                                className: (0, i.$)(A().main, { [A().withBrandedBanner]: P.isVisible }),
                                style: B,
                                ref: c,
                                children: (0, r.jsx)(s.Suspense, { children: n }),
                            }),
                            w && (0, r.jsx)(b.u, { className: A().sideBanner, ref: u }),
                        ],
                    });
                });
            var P = n(23266),
                w = n.n(P);
            let D = (e) => {
                let { className: t, children: n } = e,
                    { setContentRef: a, setContentRootRef: l } = (0, o.gKY)();
                return (0, r.jsx)('div', {
                    className: (0, i.$)(w().root, t),
                    ref: l,
                    children: (0, r.jsx)('main', { className: w().main, ref: a, children: (0, r.jsx)(s.Suspense, { children: n }) }),
                });
            };
            var E = n(8075);
            let M = (0, a.PA)(() => {
                let { formatMessage: e } = (0, l.A)(),
                    { currentTrackInfo: t } = (0, o.Pjs)(),
                    { fullTrack: n } = t,
                    a = (0, f.L)(() => {
                        var t, a, o;
                        if (!(null == n || null == (t = n.mainAlbum) ? void 0 : t.title)) return;
                        let i = (0, r.jsx)(u.D, {
                            href: null == n || null == (a = n.mainAlbum) ? void 0 : a.url,
                            children: null == n || null == (o = n.mainAlbum) ? void 0 : o.title,
                        });
                        return (0, r.jsx)(u.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: i });
                    }),
                    i = (0, f.L)(() => {
                        if (!(null == n ? void 0 : n.shortDescription)) return;
                        let e = (0, r.jsx)(u.D, { children: null == n ? void 0 : n.shortDescription });
                        return (0, r.jsx)(u.O, { infoDescription: e });
                    });
                return (0, r.jsxs)(r.Fragment, { children: [i, a] });
            });
            var B = n(15209),
                R = n(27604),
                O = n.n(R);
            let S = (0, a.PA)(() => {
                    let { formatMessage: e } = (0, l.A)(),
                        { currentTrackInfo: t } = (0, o.Pjs)(),
                        n = t.fullTrack,
                        a = (0, s.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, r.jsx)('span', { className: O().text, dangerouslySetInnerHTML: { __html: (0, B.sanitizeDOM)(t.fullDescription) } })
                                    : null == n
                                      ? void 0
                                      : n.shortDescription,
                            [null == n ? void 0 : n.shortDescription, t.fullDescription],
                        ),
                        i = (0, f.L)(() => {
                            if (!a) return;
                            let e = (0, r.jsx)(u.D, { children: a });
                            return (0, r.jsx)(u.O, { infoDescription: e });
                        }),
                        c = (0, f.L)(() => {
                            var t, a, o;
                            if (!(null == n || null == (t = n.mainAlbum) ? void 0 : t.title)) return;
                            let i = (0, r.jsx)(u.D, {
                                href: null == n || null == (a = n.mainAlbum) ? void 0 : a.url,
                                children: null == n || null == (o = n.mainAlbum) ? void 0 : o.title,
                            });
                            return (0, r.jsx)(u.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: i });
                        });
                    return (0, r.jsxs)(r.Fragment, { children: [i, c] });
                }),
                W = (0, a.PA)(() => {
                    var e, t, n, a, m;
                    let { formatMessage: p } = (0, l.A)(),
                        { notify: x } = (0, o.lkh)(),
                        { contentRef: h } = (0, o.gKY)(),
                        {
                            currentTrackInfo: v,
                            settings: { isMobile: f, isWindowsApplication: b, isLinuxApplication: j },
                            fullscreenPlayer: A,
                            experiments: C,
                        } = (0, o.Pjs)(),
                        { modal: g } = v,
                        y = v.isUGC,
                        k = C.checkExperiment(o.zal.WebEditorsFeatures, 'on');
                    y && v.isTrackIdle && v.getTrackMeta(),
                        v.fullTrack || !v.isTrackIdle || y || v.getFullTrack(),
                        !v.credits && v.isCreditsIdle && v.getCreditsInfo(),
                        ((null == (e = v.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (n = v.fullTrack) || null == (t = n.mainAlbum) ? void 0 : t.isPodcast)) &&
                            v.getFullDescription(),
                        (0, s.useEffect)(
                            () => () => {
                                g.close(), v.reset();
                            },
                            [v, g],
                        );
                    let N = (0, s.useCallback)(() => {
                            g.close(), v.reset();
                        }, [v, g]),
                        T = (0, s.useCallback)(
                            (e) => {
                                var t;
                                e || v.reset(), null == (t = g.onOpenChange) || t.call(g, e);
                            },
                            [v, g],
                        );
                    v.isRejected && (N(), x((0, r.jsx)(_.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR }));
                    let L = v.fullTrack,
                        P = null == L ? void 0 : L.explicitDisclaimer,
                        w = (0, s.useMemo)(() => {
                            var e;
                            if (L)
                                return (0, r.jsxs)('span', {
                                    children: [
                                        L.title,
                                        L.version && (0, r.jsx)('span', { className: O().version, children: L.version }),
                                        P &&
                                            (0, r.jsx)(_.Nq, {
                                                className: (0, i.$)(O().explicitMark, O().important, { [O().explicit]: !L.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = v.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: P,
                                            }),
                                    ],
                                });
                        }, [L, P, null == (a = v.fullTrack) ? void 0 : a.getDescriptionTexts]),
                        D = (0, s.useMemo)(() => {
                            var e;
                            return (null == L ? void 0 : L.type) === E.S.AUDIOBOOK
                                ? (0, r.jsx)(M, {})
                                : (null == L ? void 0 : L.isTrackPodcast) || (null == L || null == (e = L.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, r.jsx)(S, {})
                                  : void 0;
                        }, [L]),
                        B = (0, s.useMemo)(() => {
                            var e;
                            return (null == (e = v.credits) ? void 0 : e.length)
                                ? v.credits.map((e) => {
                                      let { title: t, value: n } = e,
                                          a = (0, r.jsx)(u.D, { children: n });
                                      return (0, r.jsx)(u.O, { title: t, infoDescription: a }, t);
                                  })
                                : null;
                        }, [v.credits]),
                        R = (0, s.useMemo)(() => {
                            var e;
                            if ((null == (e = v.fullTrack) ? void 0 : e.major) && k) {
                                let e = v.fullTrack.major.name;
                                if (e) {
                                    let t = (0, r.jsx)(u.D, { children: e });
                                    return (0, r.jsx)(u.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (m = v.fullTrack) ? void 0 : m.major, k]);
                    return (0, r.jsx)(d.a, {
                        placement: f ? 'default' : 'right',
                        open: g.isOpened,
                        onClose: N,
                        contentClassName: O().modalContent,
                        title: w,
                        headerClassName: O().header,
                        className: (0, i.$)(O().root, { [O().root_withFullscreen]: A.modal.isOpened, [O().root_withCustomControls]: b || j }),
                        overlayClassName: O().overlay,
                        onOpenChange: T,
                        labelClose: p({ id: 'interface-actions.close' }),
                        portalNode: f || A.modal.isOpened ? null : h,
                        containerProps: (0, c.Am)(c.Xk.track.TRACK_ABOUT_MODAL),
                        closeButtonProps: (0, c.Am)(c.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON),
                        children: (0, r.jsxs)('div', {
                            className: O().content,
                            children: [
                                (v.isTrackLoading || v.isTrackRejected) && (0, r.jsx)(_.nN, { textClassName: O().textShimmer }),
                                D,
                                (v.isCreditsLoading || v.isCreditsRejected) && (0, r.jsx)(_.nN, { textClassName: O().textShimmer }),
                                B,
                                R,
                            ],
                        }),
                    });
                }),
                I = (0, a.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, o.Pjs)();
                    return e ? null : (0, r.jsx)(W, {});
                });
            var z = n(21365),
                F = n(67628),
                $ = n.n(F);
            let V = (0, a.PA)(() => {
                var e;
                let { formatMessage: t } = (0, l.A)(),
                    { notify: n } = (0, o.lkh)(),
                    { contentRef: a } = (0, o.gKY)(),
                    {
                        trackLyrics: u,
                        settings: { isMobile: m },
                        fullscreenPlayer: p,
                    } = (0, o.Pjs)(),
                    { modal: x, track: h } = u,
                    v = null == h ? void 0 : h.explicitDisclaimer;
                (0, s.useEffect)(() => {
                    h && h.isLyricsAvailable && u.modal.isOpened && u.getLyrics(h.id);
                }, [h, u, u.modal.isOpened]),
                    (0, s.useEffect)(() => {
                        x.isOpened && h && u.isResolved && u.sendViews({ trackId: h.id, albumId: h.albumId });
                    }, [h, u, u.isResolved, x.isOpened]);
                let f = (0, s.useCallback)(
                    (e) => {
                        var t;
                        null == (t = x.onOpenChange) || t.call(x, e);
                    },
                    [x],
                );
                u.isRejected && u.modal.isOpened && n((0, r.jsx)(_.hT, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: o.uQT.ERROR });
                let b = (0, s.useMemo)(() => {
                    if (h)
                        return (0, r.jsxs)('span', {
                            ...(0, c.Am)(c.e8.content.TRACK_LYRICS_TITLE),
                            children: [
                                h.title,
                                h.version && (0, r.jsx)('span', { className: $().version, children: h.version }),
                                v &&
                                    (0, r.jsx)(_.Nq, {
                                        className: (0, i.$)($().explicitMark, $().important),
                                        getDescriptionTexts: h.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: v,
                                    }),
                            ],
                        });
                }, [h, null == h ? void 0 : h.title, null == h ? void 0 : h.version, v]);
                return (0, r.jsx)(d.a, {
                    size: 'fitContent',
                    placement: m ? 'default' : 'right',
                    open: x.isOpened,
                    onOpenChange: f,
                    onClose: x.close,
                    className: $().root,
                    contentClassName: $().modalContent,
                    portalNode: m || p.modal.isOpened ? null : a,
                    title: b,
                    headerClassName: $().header,
                    overlayClassName: $().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    containerProps: (0, c.Am)(c.e8.content.TRACK_LYRICS_MODAL),
                    closeButtonProps: (0, c.Am)(c.e8.content.TRACK_LYRICS_CLOSE_BUTTON),
                    lockScroll: m,
                    children: (0, r.jsx)('div', {
                        className: $().content,
                        ...(0, c.Am)(c.e8.content.TRACK_LYRICS_TEXT),
                        children: (0, r.jsx)(z.xe, {
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
        71858: (e) => {
            e.exports = {
                rootOld: 'Content_rootOld__g85_m',
                main: 'Content_main__8_wIa',
                root: 'Content_root__IsH8s',
                sideBanner: 'Content_sideBanner__Na07D',
                primary: 'Content_primary__dInSS',
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
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => h });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(61910),
                s = n(43426),
                l = n(47713),
                c = n(77881),
                d = n(5956),
                u = n(97800),
                _ = n(83252),
                m = n(80585),
                p = n(63708),
                x = n.n(p);
            let h = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    p = o({ id: 'error-messages.something-went-wrong' });
                (0, _.CgZ)(p);
                let { sendRefreshEvent: h } = (0, _.cYT)(),
                    v = (0, i.useCallback)(() => {
                        h(), (window.location.href = _.Zyd.main.href);
                    }, [h]),
                    { contentRef: f } = (0, _.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(x().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(x().navigation, { [x().navigation_desktop]: !f }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(x().content, { [x().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(d.Icon, { className: x().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.Heading, { className: (0, a.$)(x().title, x().important), variant: 'h3', size: 'xs', children: p }),
                                (0, r.jsxs)(u.Caption, {
                                    className: (0, a.$)(x().text, x().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: v,
                                    className: x().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.Caption, {
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
        78107: (e) => {
            e.exports = { root: 'LayoutNotificationContainers_root__5HClw' };
        },
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(75312);
        },
        85237: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        95369: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewWave: 'CommonLayout_compositePlayerBar_withNewWave__f1Qdy',
            };
        },
        96909: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => y });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(61910),
                s = n(47713),
                l = n(31500),
                c = n(8817),
                d = n(67648),
                u = n(27510),
                _ = n(58360),
                m = n(39610),
                p = n(97800),
                x = n(83252),
                h = n(80585),
                v = n(97396),
                f = n(77881),
                b = n(85237),
                j = n.n(b);
            let A = (0, o.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, x.Pjs)(),
                        t = (0, v.useRouter)(),
                        n = (0, x.NFA)().get(x.QGx),
                        o = (0, c.c)(() => {
                            e.close(), n.authorizationUrl && t.push(n.authorizationUrl);
                        });
                    return (0, r.jsx)(f.$, {
                        className: (0, a.$)(j().button, j().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: o,
                        ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON),
                        children: (0, r.jsx)(p.Caption, {
                            className: j().buttonMainText,
                            variant: 'span',
                            children: (0, r.jsx)(s.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                C = 'crackdown-buy-subscription-button',
                g = (0, o.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: n,
                            modals: { crackdownModal: o },
                        } = (0, x.Pjs)(),
                        [v, f] = (0, d.d)(),
                        [b, g] = (0, i.useState)(o.isOpened),
                        {
                            mainText: y,
                            mainTextA11y: k,
                            additionText: N,
                            isShimmerVisible: T,
                            isShimmerActive: L,
                            openPaymentWidgetModal: P,
                            saveOfferAndAuthorize: w,
                        } = (0, x.DpZ)({ storeName: 'music', isEnabled: b, offerElement: { element: v, intersectionPropertyId: C } }),
                        D = (0, c.c)(() => {
                            if ((o.close(), !n.isAuthorized)) return void w();
                            P();
                        }),
                        E = (0, u.L)(() =>
                            T
                                ? (0, r.jsx)(h.bb, { className: (0, a.$)(j().button, j().important), isActive: L })
                                : (0, r.jsxs)(h.mv, {
                                      className: (0, a.$)(j().button, j().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: f,
                                      'data-intersection-property-id': C,
                                      onClick: D,
                                      'aria-label': k,
                                      ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON),
                                      children: [
                                          (0, r.jsx)(p.Caption, { variant: 'div', className: j().buttonMainText, children: y }),
                                          N && (0, r.jsx)(p.Caption, { variant: 'div', size: 'm', weight: 'normal', children: N }),
                                      ],
                                  }),
                        );
                    return (
                        (0, i.useEffect)(() => {
                            setTimeout(() => {
                                g(!0);
                            }, 2500);
                        }, []),
                        (0, r.jsxs)(h.cu, {
                            open: o.isOpened,
                            onClose: o.close,
                            ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL),
                            children: [
                                (0, r.jsx)('div', {
                                    className: h.SE.growContainer,
                                    ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE),
                                    children: (0, r.jsx)(_.Image, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, r.jsxs)('div', {
                                    className: h.SE.text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, r.jsx)(p.Heading, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: h.SE.title,
                                            ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT),
                                            children: (0, r.jsx)(s.A, { id: 'crackdown.title', values: { br: (0, r.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, r.jsx)(p.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            className: h.SE.description,
                                            ...(0, l.Am)(l.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT),
                                            children: (0, r.jsx)(s.A, { id: 'crackdown.description', values: { br: (0, r.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(m.q, {
                                    children: [
                                        (0, r.jsx)(p.Heading, { variant: 'h1', children: (0, r.jsx)(s.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, r.jsx)(p.Caption, {
                                            variant: 'div',
                                            children: (0, r.jsx)(s.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', { className: h.SE.buttons, children: [E, t && (0, r.jsx)(A, {})] }),
                            ],
                        })
                    );
                });
            g.displayName = 'CrackdownModalComponent';
            let y = (e) => (0, r.jsx)(x.rtM, { page: x.l7W.CRACKDOWN_SCREEN, places: [x.RBW.TOP_BUTTON], children: (0, r.jsx)(g, { ...e }) });
        },
        97151: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                a,
                o = n(41500),
                i = n(61910),
                s = n(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var l = function (e) {
                var t = (0, s.A)(),
                    n = e.value,
                    r = e.children,
                    a = (0, o.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(n, a));
            };
            function c(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        a = t.children,
                        i = (0, o.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? n.formatDateToParts(l, i) : n.formatTimeToParts(l, i));
                };
                return (t.displayName = a[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        a = t.children,
                        l = (0, o.__rest)(t, ['value', 'children']),
                        c = n[e](r, l);
                    if ('function' == typeof a) return a(c);
                    var d = n.textComponent || i.Fragment;
                    return i.createElement(d, null, c);
                };
                return (t.displayName = r[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        98626: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        99481: (e) => {
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
    },
]);
