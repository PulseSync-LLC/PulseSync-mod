(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1912],
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
            r.d(t, { L: () => m });
            var s = r(25839),
                i = r(82298),
                a = r(74631),
                n = r(39004),
                l = r(8487),
                o = r(4071),
                c = r(66738),
                d = r(4254),
                u = r(51790),
                _ = r(12558),
                p = r.n(_);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    _ = (0, a.useRef)(null),
                    { formatMessage: m } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: _,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, s.jsx)(u.$, { className: (0, i.$)(p().root, p().important), message: h, closeToast: r });
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x });
            var s = r(25839),
                i = r(82298),
                a = r(28631),
                n = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: i, ...a } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        l = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = r(10508),
                m = r(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && h(e), t && r)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < s; e++) r(e);
                                    }
                                }, a),
                            [a, i, t, r, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, s.jsx)(m.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: m,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: f,
                            debounceDurationInMs: A,
                            initialItemCount: E,
                            minInitialItemCount: b = 20,
                            handleRef: N,
                            alwaysShowScrollbar: T = !1,
                            testId: S,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: C,
                            ...O
                        } = e,
                        [k, R] = (0, n.useState)(!1),
                        I = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        y = (0, n.useMemo)(() => {
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
                        w = E ? Math.min(E, b) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: k || T, [d().root_notScrolling]: !k && !T }, t),
                        'data-test-id': S,
                        children: [
                            j && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: y,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: p,
                                scrollerRef: N,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: C,
                                ...O,
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
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var s = r(25839),
                i = r(8487),
                a = r(84059),
                n = r(61493),
                l = r(71035),
                o = r(4071),
                c = r(4254),
                d = r(57024),
                u = r(36484),
                _ = r(62562);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    f = (0, a.useRouter)(),
                    A = (0, _.N)().get(u.QG),
                    E = (0, l.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(A.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: E,
                        className: v,
                        isBlock: x,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(i.A, { id: 'authorization.enter-button' }) }),
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
            r.d(t, { T: () => a });
            var s = r(74631),
                i = r(56480);
            function a() {
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
            r.d(t, { J: () => a });
            var s = r(74631);
            r(93588);
            var i = r(84059);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [r, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var s = r(25839),
                i = r(88204),
                a = r(84059),
                n = r(82298),
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
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
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
            var p = r(53712),
                m = r(27954);
            let h = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, m.g)();
                return i.isAuthorized ? t : (r && (0, a.redirect)(p.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        32652: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var s = r(25839),
                i = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(39004),
                o = r(61493),
                c = r(66738),
                d = r(74245),
                u = r(27954),
                _ = r(60924),
                p = r(92870),
                m = r.n(p);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: p, variant: h, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [A, E] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(E);
                }, [r, a]);
                let {
                    iconVariant: b,
                    descriptionText: N,
                    isTooltipEnabled: T,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: s, isMobile: i } = e,
                        a = (null == s ? void 0 : s.join('\n')) || '';
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
                        descriptionText: a,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !i,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: f }, v);
                return (0, s.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children: (0, s.jsx)(c.I, {
                            className: (0, i.$)(m().explicitMark, t),
                            'aria-label': S,
                            variant: b,
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
                a = r(61493),
                n = r(66738),
                l = r(10820),
                o = r(77174),
                c = r(27954);
            let d = (0, i.PA)((e) => {
                let { isLiked: t, onClick: r, className: i, iconClassName: d, albumType: u, disabled: _ } = e,
                    { user: p } = (0, c.g)(),
                    m = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: i,
                    onClick: r,
                    icon: (0, s.jsx)(n.I, { className: d, variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
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
        52794: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => p });
            var s = r(25839),
                i = r(88204),
                a = r(8487),
                n = r(4071),
                l = r(66738),
                o = r(4254),
                c = r(53712),
                d = r(85686),
                u = r(96206),
                _ = r.n(u);
            let p = (0, i.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, s.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, s.jsx)('div', { className: _().iconBackground, children: (0, s.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, s.jsx)(o.DZ, { className: _().title, variant: 'h3', size: 'xs', children: t }),
                        (0, s.jsx)(n.$, {
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
                                children: (0, s.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
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
                a = r(88204),
                n = r(74631),
                l = r(49656),
                o = r(3392),
                c = r(19410),
                d = r(71035),
                u = r(27954),
                _ = r(39528);
            let p = (e, t) => {
                let { withLink: r, separator: s } = t,
                    i = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: i };
            };
            var m = r(94484),
                h = r.n(m),
                x = r(61493),
                g = r(4254),
                v = r(97522),
                f = r(39004),
                A = r(44031),
                E = r(29481),
                b = r(85686),
                N = r(85743),
                T = r(40207);
            let S = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: i, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: C,
                        } = ((e) => {
                            var t, r;
                            let { item: s, allArtistsTitle: i, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, f.A)(),
                                l = ((e, t) => {
                                    let { item: r, allArtistsTitle: s, withCustomTooltip: i } = e,
                                        a = s || r.name;
                                    return {
                                        ...r,
                                        title: i ? void 0 : a,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && i,
                                    };
                                })({ item: s, allArtistsTitle: i, withCustomTooltip: a }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, b.Z)(null != (r = null == (t = l.link) ? void 0 : t.href) ? r : l.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, N.z)(),
                                m = (0, E.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), _(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: i, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), i.modal.isOpened && i.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (m({ to: A.AppScreen.ArtistScreen }), null == p || p(), x(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, s.jsx)(v.N, {
                              ...p,
                              'aria-label': h,
                              className: r,
                              onClick: C,
                              title: m,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: i, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, s.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: i,
                                  title: m,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: r, captionClassName: i, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(S, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: i,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(S, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: i,
                                                captionSize: a,
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
            var C = r(8487),
                O = r(9079);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, i.$)(h().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(C.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(28631),
                I = r(33049),
                y = r(61912),
                w = r(36286),
                L = r.n(w);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: i } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: i, children: t }),
                            (0, s.jsx)(o.ZI, { className: L().tooltipContent, children: r.map((e) => (0, s.jsx)(y.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                U = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var D = r(10820),
                z = r(93510),
                M = r.n(z);
            let W = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, f.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, i.$)(M().root, M().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, s.jsx)(y.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: i } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = i.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, R.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                _(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: r }) : (0, s.jsx)(U, { artists: t, label: r })) : r;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...f
                        } = e,
                        A = ((e) => {
                            var t, r, s;
                            let { separator: i, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                x = null == (s = e.withCustomTooltip) || s,
                                g = (0, n.useRef)(null),
                                [v, f] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                E = ((!A || 1 === m.length) && _) || !_,
                                b = ((e, t) => {
                                    var r, s, i;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
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
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: s, separator: i, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : i }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = i ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: i, visibleArtistsCount: v ? void 0 : a, withComposer: o, withLink: !!E && l, artistIdWithoutLink: c }),
                                N = h ? b.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: g,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!N && x && !_ && !A,
                                title: !N || x || _ ? void 0 : N,
                            };
                        })(f),
                        E = (0, l.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(k, { spoilerClassName: a, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        b = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, i.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: x,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    E,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(F, { labelRef: A.labelRef, artists: A.artists, label: b }) : b;
                });
        },
        56480: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            let s = (0, r(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var s = r(93690),
                i = r(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
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
                a = r(71035),
                n = r(1466),
                l = r(91149),
                o = r(92942),
                c = r(36159);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, a.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, _, r, e.rejectedPagesCount]);
            };
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var s = r(25839),
                i = r(61493),
                a = r(3392),
                n = r(4254),
                l = r(74672),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': i.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            var s = r(27954),
                i = r(44806);
            let a = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = n.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => f });
            var s = r(25839),
                i = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(44031),
                o = r(61493),
                c = r(71035),
                d = r(23818),
                u = r(10820),
                _ = r(86869),
                p = r(4254),
                m = r(29481),
                h = r(85686),
                x = r(27954),
                g = r(53454),
                v = r.n(g);
            let f = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    A = (0, m.N)(),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(f, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    b = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), A({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, i.$)(v().root, r),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        E,
                    ],
                });
            });
        },
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => I });
            var s = r(25839),
                i = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(39004),
                o = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                _ = r(67379),
                p = r(44031),
                m = r(87277),
                h = r(59450),
                x = r(84e3),
                g = r(97952),
                v = r(89192),
                f = r(53712),
                A = r(27954),
                E = r(44806),
                b = r(15270),
                N = r(23818),
                T = r(85686);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = r(27990),
                C = r.n(j);
            let O = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: a } = (0, A.g)(),
                    { contentRef: n } = (0, v.g)(),
                    l = (0, T.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, i.$)(C().root, t),
                    children: [
                        r &&
                            (0, s.jsx)(b.L, { withBackwardFallback: '/', className: (0, i.$)(C().navigation, { [C().navigation_desktop]: !n }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, i.$)(C().content, { [C().content_shrink]: !r }),
                            children: [
                                (0, s.jsx)(N._V, { className: C().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: C().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: C().buttonText,
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
            var k = r(68854),
                R = r.n(k);
            let I = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: a } = (0, l.A)(),
                    N = (0, n.useContext)(A.P),
                    T = null == N ? void 0 : N.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    S = a(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: s } = (0, g.$)(),
                        i = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !s) return;
                        let a = (0, _.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: s,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, m.z5)(t.evgenInstance, a);
                    }, [t, e, r, s, i]);
                })(S);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, g.$)(),
                            s = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let i = (0, _.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, m.bv)(e.evgenInstance, i);
                            }, [e, t, r, s]),
                        };
                    })(),
                    C = (0, n.useCallback)(() => {
                        (j(), (window.location.href = f.Z.main.href));
                    }, [j]),
                    { contentRef: k } = (0, v.g)();
                return T
                    ? (0, s.jsx)(O, { className: t, withBackwardControl: r })
                    : (0, s.jsxs)('div', {
                          className: (0, i.$)(R().root, t),
                          children: [
                              r &&
                                  (0, s.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(R().navigation, { [R().navigation_desktop]: !k }),
                                      withForwardControl: !1,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, i.$)(R().content, { [R().content_shrink]: !r }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, i.$)(R().title, R().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, i.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: C,
                                          className: R().button,
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
                a = r(71035),
                n = r(21468),
                l = r(91149),
                o = r(92942),
                c = r(27954),
                d = r(57549),
                u = r(33660),
                _ = r(74631),
                p = r(31860),
                m = r(93297);
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
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [r, n] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, i.A)();
                        return (0, a.c)(async (i) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = i;
                            if (r) return;
                            let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let x = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let g = t.modal.isOpened;
                            x === p.f.OK
                                ? e((0, s.jsx)(m.T, { withLink: o, album: _ }), { containerId: g ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: g ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: f } = (0, n.T)();
                return (0, a.c)(async () => {
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
                a = r(39004),
                n = r(61493),
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
                            onClick: p,
                            iconClassName: m,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, a.A)(),
                        A = f({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: i,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: p,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: m }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, i.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var s = r(56829),
                i = r(35015);
            let a = (e) => {
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
                    let { code: r = 'E_INTERNAL', data: i = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = i), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
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
            r.d(t, { $: () => a });
            var s = r(39004),
                i = r(56829);
            let a = (e, t) => {
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
            r.d(t, { w: () => a });
            var s = r(74631),
                i = r(71035);
            let a = () => {
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
            r.d(t, { U: () => a });
            var s = r(36484),
                i = r(62562);
            let a = () => (0, i.N)().get(s.Zf);
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var s = r(25839),
                i = r(74631),
                a = r(61493),
                n = r(4254),
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
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
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
                a = r(3163),
                n = r(73182);
            let l = (0, i.PA)((e) => {
                let { album: t, closeToast: r, withLink: i } = e,
                    l = (0, n.b)(t.type);
                return (0, s.jsx)(a.O, {
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
            r.d(t, { GX: () => a.G, X1: () => s.X, m5: () => i.m });
            var s = r(77920),
                i = r(76481),
                a = r(91626);
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
