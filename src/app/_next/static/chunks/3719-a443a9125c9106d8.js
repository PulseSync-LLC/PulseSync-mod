(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3719, 4245],
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
            r.d(t, { L: () => _ });
            var i = r(25839),
                s = r(82298),
                a = r(74631),
                n = r(39004),
                l = r(8487),
                o = r(4071),
                c = r(66738),
                d = r(4254),
                u = r(51790),
                m = r(12558),
                p = r.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(o.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, i.jsx)(u.$, { className: (0, s.$)(p().root, p().important), message: h, closeToast: r });
            };
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => g });
            var i = r(74631),
                s = r(67379),
                a = r(17850),
                n = r(59450),
                l = r(49656),
                o = r(84e3),
                c = r(58069),
                d = r(20258),
                u = r(26742),
                m = r(25195),
                p = r(37314),
                _ = r(25488),
                h = r(97952),
                v = r(10764),
                f = r(72594);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: g, displayReasonId: b } = (0, h.$)(),
                    { tabId: x, tabPos: A, isTabSelectedByDefault: E } = (0, f.R)(),
                    { offsetBlockPosY: N } = (0, m.u)(),
                    { blockType: T, blockId: I, blockPosX: y, blockPosY: O, mainObjectId: C, mainObjectType: S, displayReasonId: L } = (0, u.N)(),
                    { filterKey: j, filterValue: R, filterPos: k } = (0, p.G)(),
                    { objectType: w, objectsCount: P, objectId: D, objectPosX: F, objectPosY: B } = (0, _.J)(),
                    { skeleton: M } = (0, v.b)(),
                    U = null != L ? L : b,
                    z = (0, l.L)(() => (void 0 !== N && void 0 !== O ? N + O : O));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: r,
                            pageId: l,
                            entityType: T,
                            entityId: I,
                            entityPosX: y,
                            entityPosY: z,
                            objectsCount: P,
                            viewUuid: n,
                            objectType: w,
                            objectId: D,
                            objectPosX: F,
                            objectPosY: B,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = R), (o.filterPos = k)),
                            d.qG.includes(g) && ((o.tabId = x), (o.tabPos = A), (o.isTabSelectedByDefault = E)),
                            M && (o.skeletonId = M),
                            'string' == typeof C && 'string' == typeof S && ((o.mainObjectType = S), (o.mainObjectId = C)),
                            U && (o.displayReasonId = U));
                        let u = (0, s.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, U, I, y, z, T, j, k, R, r, E, e, C, S, D, F, B, w, P, g, M, x, A],
                );
            };
        },
        4331: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => W });
            var i = r(25839),
                s = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(49656),
                o = r(3392),
                c = r(19410),
                d = r(71035),
                u = r(27954),
                m = r(39528);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    s = r && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: s };
            };
            var _ = r(94484),
                h = r.n(_),
                v = r(61493),
                f = r(4254),
                g = r(97522),
                b = r(39004),
                x = r(36619),
                A = r(29481),
                E = r(85686),
                N = r(85743),
                T = r(40207);
            let I = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: s, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: I,
                            isTooltipEnabled: y,
                            handleNavigate: O,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, b.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, E.Z)(null != (r = null == (t = i.link) ? void 0 : t.href) ? r : i.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, N.z)(),
                                p = (0, A.N)(),
                                _ = (0, d.c)((e) => {
                                    (o && l.isOpened && l.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: _ }),
                                v = (0, d.c)((e) => {
                                    (p({ to: x.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                f = s || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: a ? void 0 : f,
                                ariaLabel: i.link ? n({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: f,
                                isTooltipEnabled: !s && a,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, i.jsx)(g.N, {
                              ...p,
                              'aria-label': h,
                              className: r,
                              onClick: O,
                              title: _,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(f.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: m }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: c,
                              children: (0, i.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: s,
                                  title: _,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                y = (e) => {
                    let { group: t, linkClassName: r, captionClassName: s, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(I, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(I, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: s,
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
            var O = r(8487),
                C = r(9079);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(O.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = r(28631),
                j = r(89761),
                R = r(61912),
                k = r(36286),
                w = r.n(k);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: s } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: s, children: t }),
                            (0, i.jsx)(o.ZI, { className: w().tooltipContent, children: r.map((e) => (0, i.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var F = r(10820),
                B = r(93510),
                M = r.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, i.jsx)(F.W1, {
                        isMobile: !0,
                        className: (0, s.$)(M().root, M().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, L.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(U, { artists: t, label: r }) : (0, i.jsx)(D, { artists: t, label: r })) : r;
                }),
                W = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: v,
                            variant: f = 'breakAll',
                            spoilerComponent: g,
                            ...b
                        } = e,
                        x = ((e) => {
                            var t, r, i;
                            let { separator: s, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                f = (0, n.useRef)(null),
                                [g, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, u.g)(),
                                A = ((!x || 1 === _.length) && m) || !m,
                                E = ((e, t) => {
                                    var r, i, s;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        l = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: s, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: a ? void 0 : s }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: s, visibleArtistsCount: g ? void 0 : a, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                N = h ? E.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: E.groups,
                                hiddenArtistsCount: E.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!N && v && !m && !x,
                                title: !N || v || m ? void 0 : N,
                            };
                        })(b),
                        A = (0, l.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, i.jsx)(S, { spoilerClassName: a, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        E = (0, i.jsx)(o.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(f)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, i.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: v,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, i.jsx)(z, { labelRef: x.labelRef, artists: x.artists, label: E }) : E;
                });
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var i = r(25839),
                s = r(82298),
                a = r(28631),
                n = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var p = r(10508),
                _ = r(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == s || s(e), o.length > 0 && h(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) r(e);
                                    }
                                }, a),
                            [a, s, t, r, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let f = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(_.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: f, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: v = 700,
                            pageSize: f = 20,
                            totalCount: g,
                            totalRequests: b,
                            debounceDurationInMs: x,
                            initialItemCount: A,
                            minInitialItemCount: E = 20,
                            handleRef: N,
                            alwaysShowScrollbar: T = !1,
                            testId: I,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...C
                        } = e,
                        [S, L] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, b, y]),
                        k = A ? Math.min(A, E) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: S || T, [d().root_notScrolling]: !S && !T }, t),
                        'data-test-id': I,
                        children: [
                            y && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(h, {
                                overscan: v,
                                components: R,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: N,
                                totalCount: g,
                                pageSize: f,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: O,
                                ...C,
                            }),
                            y && (null == r ? void 0 : r.Footer) && r.Footer(),
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
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var i = r(25839),
                s = r(84059),
                a = r(8487),
                n = r(61493),
                l = r(71035),
                o = r(4071),
                c = r(4254),
                d = r(57024),
                u = r(36484),
                m = r(62562);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: f, className: g } = e,
                    b = (0, s.useRouter)(),
                    x = (0, m.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        x.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(x.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: g,
                        isBlock: v,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        19410: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => a });
            var i = r(74631),
                s = r(56480);
            function a() {
                return (0, i.useContext)(s.H);
            }
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a, g: () => n });
            var i = r(74631),
                s = r(36432);
            let a = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(84059),
                s = r(74631);
            r(93588);
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
            var i = r(25839),
                s = r(88204),
                a = r(84059),
                n = r(82298),
                l = r(8487),
                o = r(4254),
                c = r(16978),
                d = r(148),
                u = r.n(d);
            let m = (0, s.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(53712),
                _ = r(27954);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: s } = (0, _.g)();
                return s.isAuthorized ? t : (r && (0, a.redirect)(p.Z.main.href), (0, i.jsx)(m, {}));
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
            var i = r(25839),
                s = r(88204),
                a = r(61493),
                n = r(66738),
                l = r(10820),
                o = r(77174),
                c = r(27954);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: r, className: s, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, i.jsx)(l.Dr, {
                    className: s,
                    onClick: r,
                    icon: (0, i.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => s });
            var i = r(25895);
            let s = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
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
            r.d(t, { c: () => i });
            let i = 20;
        },
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(74631),
                s = r(3669),
                a = r(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    l = (0, s.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(a.B),
                    d = (0, i.useCallback)(
                        (i, s) => {
                            (e ? e(i, r ? s : void 0) : l(i, s), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: n, intersectionPropertyId: o }
                );
            };
        },
        52794: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => p });
            var i = r(25839),
                s = r(88204),
                a = r(8487),
                n = r(4071),
                l = r(66738),
                o = r(4254),
                c = r(53712),
                d = r(85686),
                u = r(96206),
                m = r.n(u);
            let p = (0, s.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, i.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, i.jsx)('div', { className: m().iconBackground, children: (0, i.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, i.jsx)(o.DZ, { className: m().title, variant: 'h3', size: 'xs', children: t }),
                        (0, i.jsx)(n.$, {
                            onClick: r,
                            className: m().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, i.jsx)(o.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, i.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56480: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var i = r(93690),
                s = r(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof i.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59126: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        59981: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var i = r(25839),
                s = r(74631),
                a = r(71035),
                n = r(1466),
                l = r(91149),
                o = r(92942),
                c = r(36159);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, i.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(25839),
                s = r(61493),
                a = r(3392),
                n = r(4254),
                l = r(74672),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
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
            var i = r(27954),
                s = r(44806);
            let a = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => b });
            var i = r(25839),
                s = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(36619),
                o = r(61493),
                c = r(71035),
                d = r(23818),
                u = r(10820),
                m = r(86869),
                p = r(4254),
                _ = r(29481),
                h = r(85686),
                v = r(27954),
                f = r(53454),
                g = r.n(f);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    x = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(b, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    E = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), x({ to: l.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, s.$)(g().root, r),
                            onClick: E,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62926: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(25839),
                s = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(39004),
                o = r(74245),
                c = r(61493),
                d = r(49656),
                u = r(66738),
                m = r(27954),
                p = r(60924),
                _ = r(92870),
                h = r.n(_);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: _, variant: v, size: f = 'xxxs', ...g } = e,
                    { formatMessage: b } = (0, l.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, m.g)(),
                    [A, E] = (0, n.useState)(null),
                    N = (0, d.L)(() => {
                        switch (v) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, n.useMemo)(() => b({ id: 'extra-explicit.explicit-mark' }), [b]);
                (0, n.useEffect)(() => {
                    r && r().then(E);
                }, [r, a]);
                let I = (null == A ? void 0 : A.join('\n')) || '',
                    y = !!(null == A ? void 0 : A.length) && !x,
                    O = I.length > 0 ? I : T;
                return (0, i.jsx)(p.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, i.jsx)('span', {
                        className: _,
                        // for PulseSync: BEGIN render the S badge for substituted tracks
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, i.jsxs)('svg', {
                                      className: (0, s.$)(h().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': O,
                                      style: { width: 'var(--ym-icon-size-'.concat(f, ')'), height: 'var(--ym-icon-size-'.concat(f, ')') },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, i.jsx)('text', {
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
                                : (0, i.jsx)(u.I, {
                                      className: (0, s.$)(h().explicitMark, t),
                                      'aria-label': O,
                                      variant: N,
                                      size: f,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                        // for PulseSync: END render the S badge for substituted tracks
                    }),
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
            var i = r(25839),
                s = r(39004),
                a = r(71035),
                n = r(21468),
                l = r(91149),
                o = r(92942),
                c = r(27954),
                d = r(57549),
                u = r(33660),
                m = r(74631),
                p = r(31860),
                _ = r(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, s.A)(),
                    { notify: f } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, r] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, a.c)(async (s) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = s;
                            if (t) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            r(!0);
                            let h = await a.toggleLike();
                            (r(!1),
                                c &&
                                    (h === p.f.OK
                                        ? e((0, i.jsx)(_.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void f((0, i.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(25839),
                s = r(74631),
                a = r(39004),
                n = r(61493),
                l = r(4071),
                o = r(66738),
                c = r(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: v,
                            style: f,
                            children: g,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        x = b({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: p,
                        ref: v,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var i = r(56829),
                s = r(35015);
            let a = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return s.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
        },
        74245: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => m, Yw: () => i, JU: () => s, DQ: () => h, Ve: () => v });
            var i,
                s,
                a = r(30691),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var l = r(59126);
            class o extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (e) {
                // for PulseSync: BEGIN substituted-track icon registration in the disclaimer icon enum
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track icon registration in the disclaimer icon enum
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of r)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                // for PulseSync: BEGIN add the substituted-track label type
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), ((e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted')));
                // for PulseSync: END add the substituted-track label type
            })(s || (s = {}));
            let p = new Map([
                    [i.EXPLICIT_ICON, s.E],
                    [i.AGE_18_ICON, s.AGE_18],
                    [i.AGE_16_ICON, s.AGE_16],
                    [i.AGE_12_ICON, s.AGE_12],
                    [i.EXCLAMATION_ICON, s.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, s.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                // for PulseSync: BEGIN include substituted-track badges in metadata
                _ = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                // for PulseSync: END include substituted-track badges in metadata
                h = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let r = p.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class s extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77174: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var i = r(39004),
                s = r(56829);
            let a = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77920: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        78299: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => N });
            var i = r(25839),
                s = r(82298),
                a = r(88204),
                n = r(74631),
                l = r(39004),
                o = r(8487);
            r(93588);
            var c = r(4071),
                d = r(66738),
                u = r(4254),
                m = r(67379),
                p = r(36619),
                _ = r(76945),
                h = r(59450),
                v = r(84e3),
                f = r(97952),
                g = r(89192),
                b = r(53712),
                x = r(15270),
                A = r(68854),
                E = r.n(A);
            let N = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: a } = (0, l.A)(),
                    A = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        s = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, r, i, s]);
                })(A);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, f.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let s = (0, m.F)({
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
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, _.bv)(e.evgenInstance, s);
                            }, [e, t, r, i]),
                        };
                    })(),
                    T = (0, n.useCallback)(() => {
                        (N(), (window.location.href = b.Z.main.href));
                    }, [N]),
                    { contentRef: I } = (0, g.g)();
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(E().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(x.L, { withBackwardFallback: '/', className: (0, s.$)(E().navigation, { [E().navigation_desktop]: !I }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(E().content, { [E().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, s.$)(E().title, E().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, s.$)(E().text, E().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: T,
                                    className: E().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var i = r(74631),
                s = r(71035);
            let a = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var i = r(36484),
                s = r(62562);
            let a = () => (0, s.N)().get(i.Zf);
        },
        87138: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => m, YK: () => u });
            var i,
                s,
                a = r(23198),
                n = r(74631),
                l = r(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(i || (i = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var o = function (e) {
                var t = (0, l.A)(),
                    r = e.value,
                    i = e.children,
                    s = (0, a.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(r, s));
            };
            function c(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        i = t.value,
                        s = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof i ? new Date(i || 0) : i;
                    return s('formatDate' === e ? r.formatDateToParts(o, n) : r.formatTimeToParts(o, n));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, l.A)(),
                        i = t.value,
                        s = t.children,
                        o = (0, a.__rest)(t, ['value', 'children']),
                        c = r[e](i, o);
                    if ('function' == typeof s) return s(c);
                    var d = r.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = i[e]), t);
            }
            function u(e) {
                return e;
            }
            ((o.displayName = 'FormattedNumberParts'), (o.displayName = 'FormattedNumberParts'));
            var m = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(25839),
                s = r(74631),
                a = r(61493),
                n = r(4254),
                l = r(44408),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
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
            (r.d(t, { G: () => s }), r(77920));
            var i = r(76481);
            class s extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var i = r(25839),
                s = r(88204),
                a = r(3163),
                n = r(73182);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: r, withLink: s } = e,
                    l = (0, n.b)(t.type);
                return (0, i.jsx)(a.O, {
                    closeToast: r,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: s,
                });
            });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => i.X, m5: () => s.m });
            var i = r(77920),
                s = r(76481),
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
            var i;
            (r.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
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
