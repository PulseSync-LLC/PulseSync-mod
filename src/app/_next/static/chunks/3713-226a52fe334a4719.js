(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3713],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var s = r(25839),
                i = r(82298),
                n = r(74631),
                a = r(39004),
                l = r(8487),
                o = r(4071),
                c = r(66738),
                d = r(4254),
                u = r(51790),
                _ = r(12558),
                m = r.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    _ = (0, n.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, n.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, i.$)(m().root, m().important), message: h, closeToast: r });
            };
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => v });
            var s = r(74631),
                i = r(67379),
                n = r(20934),
                a = r(59450),
                l = r(49656),
                o = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                _ = r(25195),
                m = r(37314),
                p = r(25488),
                h = r(97952),
                x = r(10764),
                g = r(72594);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: v, displayReasonId: f } = (0, h.$)(),
                    { tabId: b, tabPos: A, isTabSelectedByDefault: E } = (0, g.R)(),
                    { offsetBlockPosY: T } = (0, _.u)(),
                    { blockType: S, blockId: N, blockPosX: j, blockPosY: k, mainObjectId: C, mainObjectType: I, displayReasonId: O } = (0, u.N)(),
                    { filterKey: R, filterValue: y, filterPos: w } = (0, m.G)(),
                    { objectType: L, objectsCount: P, objectId: D, objectPosX: U, objectPosY: z } = (0, p.J)(),
                    { skeleton: M } = (0, x.b)(),
                    W = null != O ? O : f,
                    F = (0, l.L)(() => (void 0 !== T && void 0 !== k ? T + k : k));
                return (0, s.useCallback)(
                    (s, a) => {
                        if (!t || !v || !d.xK.includes(v) || !d.fD.includes(v)) return;
                        let l = c.F[v];
                        if (!l) return;
                        let o = {
                            hash: r,
                            pageId: l,
                            entityType: S,
                            entityId: N,
                            entityPosX: j,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: a,
                            objectType: L,
                            objectId: D,
                            objectPosX: U,
                            objectPosY: z,
                        };
                        (void 0 !== R && ((o.filterKey = R), (o.filterValue = y), (o.filterPos = w)),
                            d.qG.includes(v) && ((o.tabId = b), (o.tabPos = A), (o.isTabSelectedByDefault = E)),
                            M && (o.skeletonId = M),
                            'string' == typeof C && 'string' == typeof I && ((o.mainObjectType = I), (o.mainObjectId = C)),
                            W && (o.displayReasonId = W));
                        let u = (0, i.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (s ? (0, n.Pf)(t.evgenInstance, u) : (0, n.nv)(t.evgenInstance, u));
                    },
                    [t, W, N, j, F, S, R, w, y, r, E, e, C, I, D, U, z, L, P, v, M, b, A],
                );
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x });
            var s = r(25839),
                i = r(82298),
                n = r(28631),
                a = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: i, ...n } = e,
                        a = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        l = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': a, style: { ...t }, ref: r, ...n });
                },
                o = (0, a.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: a, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = r(10508),
                p = r(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && h(e), t && r)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < s; e++) r(e);
                                    }
                                }, n),
                            [n, i, t, r, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let g = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: f,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: E = 20,
                            handleRef: T,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...C
                        } = e,
                        [I, O] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        y = (0, a.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, f, j]),
                        w = A ? Math.min(A, E) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: I || S, [d().root_notScrolling]: !I && !S }, t),
                        'data-test-id': N,
                        children: [
                            j && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: y,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: T,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: k,
                                ...C,
                            }),
                            j && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
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
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s });
            let s = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var s = r(25839),
                i = r(84059),
                n = r(8487),
                a = r(61493),
                l = r(71035),
                o = r(4071),
                c = r(4254),
                d = r(57024),
                u = r(36484),
                _ = r(62562);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    f = (0, i.useRouter)(),
                    b = (0, _.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(b.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        19410: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var s = r(74631),
                i = r(56480);
            function n() {
                return (0, s.useContext)(i.H);
            }
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var s = r(84059),
                i = r(74631);
            r(93588);
            let n = (e) => {
                let t = (0, s.usePathname)(),
                    [r, n] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, r, t]));
            };
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var s = r(25839),
                i = r(88204),
                n = r(84059),
                a = r(82298),
                l = r(8487),
                o = r(4254),
                c = r(16978),
                d = r(148),
                u = r.n(d);
            let _ = (0, i.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = r(53712),
                p = r(27954);
            let h = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, p.g)();
                return i.isAuthorized ? t : (r && (0, n.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        32652: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var s = r(25839),
                i = r(82298),
                n = r(88204),
                a = r(74631),
                l = r(39004),
                o = r(61493),
                c = r(66738),
                d = r(74245),
                u = r(27954),
                _ = r(60924),
                m = r(92870),
                p = r.n(m);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: n, containerClassName: m, variant: h, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [b, A] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                    r && r().then(A);
                }, [r, n]);
                let {
                    iconVariant: E,
                    descriptionText: T,
                    isTooltipEnabled: S,
                    ariaLabel: N,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: s, isMobile: i } = e,
                        n = (null == s ? void 0 : s.join('\n')) || '';
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
                        })(r),
                        descriptionText: n,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !i,
                        ariaLabel: n.length > 0 ? n : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: b, isMobile: f }, v);
                return (0, s.jsx)(_.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, s.jsx)('span', {
                        className: m,
                        children: (0, s.jsx)(c.I, {
                            className: (0, i.$)(p().explicitMark, t),
                            'aria-label': N,
                            variant: E,
                            size: x,
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var s = r(25839),
                i = r(88204),
                n = r(61493),
                a = r(66738),
                l = r(10820),
                o = r(77174),
                c = r(27954);
            let d = (0, i.PA)((e) => {
                let { isLiked: t, onClick: r, className: i, iconClassName: d, albumType: u, disabled: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: i,
                    onClick: r,
                    icon: (0, s.jsx)(a.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => i });
            var s = r(25895);
            let i = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        44408: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        50222: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => s });
            let s = 20;
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a });
            var s = r(74631),
                i = r(3669),
                n = r(13232);
            let a = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = (0, s.useRef)(null),
                    l = (0, i.D)(),
                    o = (0, s.useId)(),
                    c = (0, s.useContext)(n.B),
                    d = (0, s.useCallback)(
                        (s, i) => {
                            (e ? e(s, r ? i : void 0) : l(s, i), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, r],
                    );
                return (
                    (0, s.useEffect)(
                        () => (
                            c.observeElement({ elementRef: a, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: a, intersectionPropertyId: o }
                );
            };
        },
        52794: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => m });
            var s = r(25839),
                i = r(88204),
                n = r(8487),
                a = r(4071),
                l = r(66738),
                o = r(4254),
                c = r(53712),
                d = r(85686),
                u = r(96206),
                _ = r.n(u);
            let m = (0, i.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, s.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, s.jsx)('div', { className: _().iconBackground, children: (0, s.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, s.jsx)(o.DZ, { className: _().title, variant: 'h3', size: 'xs', children: t }),
                        (0, s.jsx)(a.$, {
                            onClick: r,
                            className: _().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, s.jsx)(o.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, s.jsx)(n.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56348: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => H });
            var s = r(25839),
                i = r(82298),
                n = r(88204),
                a = r(74631),
                l = r(49656),
                o = r(3392),
                c = r(19410),
                d = r(71035),
                u = r(27954),
                _ = r(39528);
            let m = (e, t) => {
                let { withLink: r, separator: s } = t,
                    i = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: i };
            };
            var p = r(94484),
                h = r.n(p),
                x = r(61493),
                g = r(4254),
                v = r(97522),
                f = r(39004),
                b = r(44031),
                A = r(29481),
                E = r(85686),
                T = r(85743),
                S = r(40207);
            let N = (0, n.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: i, captionSize: n = 'm', allArtistsTitle: a, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: j,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, r;
                            let { item: s, allArtistsTitle: i, withCustomTooltip: n } = e,
                                { formatMessage: a } = (0, f.A)(),
                                l = ((e, t) => {
                                    let { item: r, allArtistsTitle: s, withCustomTooltip: i } = e,
                                        n = s || r.name;
                                    return {
                                        ...r,
                                        title: i ? void 0 : n,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !s && i,
                                    };
                                })({ item: s, allArtistsTitle: i, withCustomTooltip: n }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, E.Z)(null != (r = null == (t = l.link) ? void 0 : t.href) ? r : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, T.z)(),
                                p = (0, A.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), _(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: i, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, S.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), i.modal.isOpened && i.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (p({ to: b.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: l });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: r,
                              onClick: k,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: i, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, s.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: i,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: r, captionClassName: i, captionSize: n, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(N, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: i,
                                captionSize: n,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(N, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: i,
                                                captionSize: n,
                                                allArtistsTitle: l,
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
            var k = r(8487),
                C = r(9079);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: n } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, i.$)(h().spoiler, r),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = r(28631),
                R = r(33049),
                y = r(61912),
                w = r(36286),
                L = r.n(w);
            let P = (0, n.PA)((e) => {
                    let { label: t, artists: r, forwardRef: i } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: i, children: t }),
                            (0, s.jsx)(o.ZI, { className: L().tooltipContent, children: r.map((e) => (0, s.jsx)(y.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var U = r(10820),
                z = r(93510),
                M = r.n(z);
            let W = (0, n.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: n } = (0, f.A)();
                    return (0, s.jsx)(U.W1, {
                        isMobile: !0,
                        className: (0, i.$)(M().root, M().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, s.jsx)(y.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, n.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: i } = e,
                        [n, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = i.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, O.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, a.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: r }) : (0, s.jsx)(D, { artists: t, label: r })) : r;
                }),
                H = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: n,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...f
                        } = e,
                        b = ((e) => {
                            var t, r, s;
                            let { separator: i, visibleArtistsCount: n, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                x = null == (s = e.withCustomTooltip) || s,
                                g = (0, a.useRef)(null),
                                [v, f] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                A = ((!b || 1 === p.length) && _) || !_,
                                E = ((e, t) => {
                                    var r, s, i;
                                    let n = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        a = null == (s = null == t ? void 0 : t.withLink) || s,
                                        l = null != (i = null == t ? void 0 : t.separator) ? i : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: s } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: s, separator: i, isFirst: n } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: n ? void 0 : i }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = i ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: i, visibleArtistsCount: v ? void 0 : n, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                T = h ? E.allArtistsTitle : '',
                                S = (0, d.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: E.groups,
                                hiddenArtistsCount: E.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: g,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!T && x && !_ && !b,
                                title: !T || x || _ ? void 0 : T,
                            };
                        })(f),
                        A = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(I, { spoilerClassName: n, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        E = (0, s.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, i.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, s.jsx)(F, { labelRef: b.labelRef, artists: b.artists, label: E }) : E;
                });
        },
        56480: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            let s = (0, r(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => n, UC: () => a, dM: () => l, uV: () => o });
            var s = r(93690),
                i = r(58848);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59981: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var s = r(25839),
                i = r(74631),
                n = r(71035),
                a = r(1466),
                l = r(91149),
                o = r(92942),
                c = r(36159);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, n.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, s.jsx)(a.L, { reloadBlocks: _ }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, _, r, e.rejectedPagesCount]);
            };
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var s = r(25839),
                i = r(61493),
                n = r(3392),
                a = r(4254),
                l = r(74672),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(n.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': i.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(a.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var s = r(27954),
                i = r(44806);
            let n = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: n },
                    experiments: a,
                } = (0, s.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = a.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => f });
            var s = r(25839),
                i = r(82298),
                n = r(88204),
                a = r(74631),
                l = r(44031),
                o = r(61493),
                c = r(71035),
                d = r(23818),
                u = r(10820),
                _ = r(86869),
                m = r(4254),
                p = r(29481),
                h = r(85686),
                x = r(27954),
                g = r(53454),
                v = r.n(g);
            let f = (0, n.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: n } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    b = (0, p.N)(),
                    A = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(f, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    E = (0, c.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), b({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, i.$)(v().root, r),
                            onClick: E,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => R });
            var s = r(25839),
                i = r(82298),
                n = r(88204),
                a = r(74631),
                l = r(39004),
                o = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                _ = r(67379),
                m = r(44031),
                p = r(87277),
                h = r(59450),
                x = r(84e3),
                g = r(97952),
                v = r(89192),
                f = r(53712),
                b = r(27954),
                A = r(44806),
                E = r(15270),
                T = r(23818),
                S = r(85686);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = r(27990),
                k = r.n(j);
            let C = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: n } = (0, b.g)(),
                    { contentRef: a } = (0, v.g)(),
                    l = (0, S.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, i.$)(k().root, t),
                    children: [
                        r &&
                            (0, s.jsx)(E.L, { withBackwardFallback: '/', className: (0, i.$)(k().navigation, { [k().navigation_desktop]: !a }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, i.$)(k().content, { [k().content_shrink]: !r }),
                            children: [
                                (0, s.jsx)(T._V, { className: k().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: k().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: k().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: k().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: k().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = r(68854),
                O = r.n(I);
            let R = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    T = (0, a.useContext)(b.P),
                    S = null == T ? void 0 : T.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    N = n(S ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: s } = (0, g.$)(),
                        i = (0, x.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !r || !s) return;
                        let n = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: s,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, p.z5)(t.evgenInstance, n);
                    }, [t, e, r, s, i]);
                })(N);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, g.$)(),
                            s = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, p.bv)(e.evgenInstance, i);
                            }, [e, t, r, s]),
                        };
                    })(),
                    k = (0, a.useCallback)(() => {
                        (j(), (window.location.href = f.Z.main.href));
                    }, [j]),
                    { contentRef: I } = (0, v.g)();
                return S
                    ? (0, s.jsx)(C, { className: t, withBackwardControl: r })
                    : (0, s.jsxs)('div', {
                          className: (0, i.$)(O().root, t),
                          children: [
                              r &&
                                  (0, s.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(O().navigation, { [O().navigation_desktop]: !I }),
                                      withForwardControl: !1,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, i.$)(O().content, { [O().content_shrink]: !r }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, i.$)(O().title, O().important), variant: 'h3', size: 'xs', children: N }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, i.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: k,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
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
        71705: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var s = r(25839),
                i = r(39004),
                n = r(71035),
                a = r(21468),
                l = r(91149),
                o = r(92942),
                c = r(27954),
                d = r(57549),
                u = r(33660),
                _ = r(74631),
                m = r(31860),
                p = r(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, i.A)(),
                    { notify: g } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, r] = (0, _.useState)(!1),
                            { formatMessage: a } = (0, i.A)();
                        return (0, n.c)(async (i) => {
                            let { album: n, withLink: o = !0, withNotification: c = !0 } = i;
                            if (t) return;
                            let _ = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                            r(!0);
                            let h = await n.toggleLike();
                            (r(!1),
                                c &&
                                    (h === m.f.OK
                                        ? e((0, s.jsx)(p.T, { withLink: o, album: _ }), { containerId: l.u.INFO })
                                        : e((0, s.jsx)(d.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: f } = (0, a.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void g((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var s = r(25839),
                i = r(74631),
                n = r(39004),
                a = r(61493),
                l = r(4071),
                o = r(66738),
                c = r(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: i,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, n.A)(),
                        b = f({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: i,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, i.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var s = r(56829),
                i = r(35015);
            let n = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return i.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return i.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return i.c.FAIRY_TALE;
                    default:
                        return i.c.ALBUM;
                }
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = r), (this.data = i), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class i extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        77174: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => n });
            var s = r(39004),
                i = r(56829);
            let n = (e, t) => {
                let { formatMessage: r } = (0, s.A)();
                if (e)
                    switch (t) {
                        case i._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case i._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case i._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case i._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77920: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var s = r(74631),
                i = r(71035);
            let n = () => {
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
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var s = r(36484),
                i = r(62562);
            let n = () => (0, i.N)().get(s.Zf);
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var s = r(25839),
                i = r(74631),
                n = r(61493),
                a = r(4254),
                l = r(44408),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, i.useState)(null);
                if (
                    ((0, i.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, s.jsx)(
                            a.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        91626: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => i }), r(77920));
            var s = r(76481);
            class i extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var s = r(25839),
                i = r(88204),
                n = r(3163),
                a = r(73182);
            let l = (0, i.PA)((e) => {
                let { album: t, closeToast: r, withLink: i } = e,
                    l = (0, a.b)(t.type);
                return (0, s.jsx)(n.O, {
                    closeToast: r,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: i,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => n.G, X1: () => s.X, m5: () => i.m });
            var s = r(77920),
                i = r(76481),
                n = r(91626);
            r(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95919: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        96206: (e) => {
            e.exports = {
                root: 'CollectionShelfPageEmpty_root__KrMco',
                iconBackground: 'CollectionShelfPageEmpty_iconBackground__limUg',
                title: 'CollectionShelfPageEmpty_title__cwF4m',
                button: 'CollectionShelfPageEmpty_button___uzMX',
            };
        },
    },
]);
