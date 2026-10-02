(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4245, 9394],
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
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => _ });
            var r = i(25839),
                s = i(82298),
                a = i(74631),
                n = i(39004),
                l = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                m = i(12558),
                p = i.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, r.jsx)(u.$, { className: (0, s.$)(p().root, p().important), message: h, closeToast: i });
            };
        },
        2328: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var r = i(74631),
                s = i(67379),
                a = i(17850),
                n = i(59450),
                l = i(49656),
                o = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                m = i(25195),
                p = i(37314),
                _ = i(25488),
                h = i(97952),
                v = i(10764),
                f = i(72594);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: g, displayReasonId: x } = (0, h.$)(),
                    { tabId: b, tabPos: A, isTabSelectedByDefault: T } = (0, f.R)(),
                    { offsetBlockPosY: C } = (0, m.u)(),
                    { blockType: E, blockId: N, blockPosX: y, blockPosY: I, mainObjectId: O, mainObjectType: k, displayReasonId: S } = (0, u.N)(),
                    { filterKey: j, filterValue: L, filterPos: w } = (0, p.G)(),
                    { objectType: P, objectsCount: R, objectId: D, objectPosX: B, objectPosY: F } = (0, _.J)(),
                    { skeleton: M } = (0, v.b)(),
                    z = null != S ? S : x,
                    W = (0, l.L)(() => (void 0 !== C && void 0 !== I ? C + I : I));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: i,
                            pageId: l,
                            entityType: E,
                            entityId: N,
                            entityPosX: y,
                            entityPosY: W,
                            objectsCount: R,
                            viewUuid: n,
                            objectType: P,
                            objectId: D,
                            objectPosX: B,
                            objectPosY: F,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = L), (o.filterPos = w)),
                            d.qG.includes(g) && ((o.tabId = b), (o.tabPos = A), (o.isTabSelectedByDefault = T)),
                            M && (o.skeletonId = M),
                            'string' == typeof O && 'string' == typeof k && ((o.mainObjectType = k), (o.mainObjectId = O)),
                            z && (o.displayReasonId = z));
                        let u = (0, s.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, z, N, y, W, E, j, w, L, i, T, e, O, k, D, B, F, P, R, g, M, b, A],
                );
            };
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let p = (e, t) => {
                let { withLink: i, separator: r } = t,
                    s = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: s };
            };
            var _ = i(94484),
                h = i.n(_),
                v = i(61493),
                f = i(4254),
                g = i(97522),
                x = i(39004),
                b = i(36619),
                A = i(29481),
                T = i(85686),
                C = i(85743),
                E = i(40207);
            let N = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: s, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: y,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: s, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, x.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, T.Z)(null != (i = null == (t = r.link) ? void 0 : t.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, C.z)(),
                                p = (0, A.N)(),
                                _ = (0, d.c)((e) => {
                                    (o && l.isOpened && l.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, E.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: _ }),
                                v = (0, d.c)((e) => {
                                    (p({ to: b.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                f = s || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: a ? void 0 : f,
                                ariaLabel: r.link ? n({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: f,
                                isTooltipEnabled: !s && a,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, r.jsx)(g.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: I,
                              title: _,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(f.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: m }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, r.jsx)(f.HL, {
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
                    let { group: t, linkClassName: i, captionClassName: s, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(N, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(N, {
                                                item: e,
                                                linkClassName: i,
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
            var I = i(8487),
                O = i(9079);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(28631),
                j = i(89761),
                L = i(61912),
                w = i(36286),
                P = i.n(w);
            let R = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, r.jsx)(L.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
            var B = i(10820),
                F = i(93510),
                M = i.n(F);
            let z = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, x.A)();
                    return (0, r.jsx)(B.W1, {
                        isMobile: !0,
                        className: (0, s.$)(M().root, M().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, S.A)(() => {
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
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(z, { artists: t, label: i }) : (0, r.jsx)(D, { artists: t, label: i })) : i;
                }),
                U = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: v,
                            variant: f = 'breakAll',
                            spoilerComponent: g,
                            ...x
                        } = e,
                        b = ((e) => {
                            var t, i, r;
                            let { separator: s, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                f = (0, n.useRef)(null),
                                [g, x] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                A = ((!b || 1 === _.length) && m) || !m,
                                T = ((e, t) => {
                                    var i, r, s;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: s, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: r, separator: a ? void 0 : s }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return p(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: s, visibleArtistsCount: g ? void 0 : a, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                C = h ? T.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!C && v && !m && !b,
                                title: !C || v || m ? void 0 : C,
                            };
                        })(x),
                        A = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, r.jsx)(k, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        T = (0, r.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(f)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, r.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: v,
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
                    return b.withContextMenu ? (0, r.jsx)(W, { labelRef: b.labelRef, artists: b.artists, label: T }) : T;
                });
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(25839),
                s = i(82298),
                a = i(28631),
                n = i(74631);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var p = i(10508),
                _ = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
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
                                    if ((null == s || s(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, s, t, i, o],
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
                    return (0, r.jsx)(_.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: f, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: v = 700,
                            pageSize: f = 20,
                            totalCount: g,
                            totalRequests: x,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: T = 20,
                            handleRef: C,
                            alwaysShowScrollbar: E = !1,
                            testId: N,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...O
                        } = e,
                        [k, S] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, x, y]),
                        w = A ? Math.min(A, T) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: k || E, [d().root_notScrolling]: !k && !E }, t),
                        'data-test-id': N,
                        children: [
                            y && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: C,
                                totalCount: g,
                                pageSize: f,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: I,
                                ...O,
                            }),
                            y && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        10322: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                s = i(74631),
                a = i(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, s.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, r.jsx)(a.r.Provider, { value: d, children: c });
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
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        15684: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => A });
            var r = i(25839),
                s = i(88204),
                a = i(8487),
                n = i(4071),
                l = i(66738),
                o = i(13833),
                c = i(4254),
                d = i(1407),
                u = i(21784),
                m = i(89192),
                p = i(53712),
                _ = i(85686),
                h = i(27954),
                v = i(99401),
                f = i(26076),
                g = i(10603),
                x = i(2328),
                b = i.n(x);
            let A = (0, s.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: s, setContentScrollRef: x } = (0, m.g)(),
                    A = (0, u.W)(),
                    T = (0, _.Z)(p.Z.collectionKids.href);
                return (0, r.jsxs)(d.h, {
                    scrollElement: s,
                    outerTitle: t,
                    children: [
                        (0, r.jsx)(g.Y, {
                            variant: g.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: A.canBack,
                            children: (0, r.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, r.jsxs)(o.N, {
                            ref: x,
                            containerClassName: b().scrollableContainer,
                            className: b().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: b().content,
                                    children: [
                                        (0, r.jsx)('div', { className: b().icon, children: (0, r.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                                        (0, r.jsx)(c.DZ, {
                                            className: b().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, r.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, r.jsx)(n.$, {
                                            onClick: T,
                                            className: b().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, r.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, r.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(f.A, { children: (0, r.jsx)(v.w, { className: b().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var r = i(25839),
                s = i(84059),
                a = i(8487),
                n = i(61493),
                l = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: f, className: g } = e,
                    x = (0, s.useRouter)(),
                    b = (0, m.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(b.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: g,
                        isBlock: v,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(74631),
                s = i(56480);
            function a() {
                return (0, r.useContext)(s.H);
            }
        },
        23054: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => D });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487),
                c = i(61493),
                d = i(22939),
                u = i(75501),
                m = i(4254),
                p = i(78299),
                _ = i(1407),
                h = i(51549),
                v = i(82967),
                f = i(20258),
                g = i(10322),
                x = i(30290),
                b = i(21784),
                A = i(89192),
                T = i(30716),
                C = i(79422),
                E = i(27954),
                N = i(3718),
                y = i(60678),
                I = i(99401),
                O = i(26076),
                k = i(10603),
                S = i(97805),
                j = i(6968),
                L = i(50222),
                w = i(15684),
                P = i(87770),
                R = i.n(P);
            let D = (0, a.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, E.g)(),
                    { contentScrollRef: i, setContentScrollRef: a } = (0, A.g)(),
                    P = (0, b.W)(),
                    { from: D } = (0, x.f)({ pageId: f._Q.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: B } = (0, l.A)(),
                    F = (0, C.w)();
                ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, T.J)(e.isResolved));
                let M = (0, n.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: L.c });
                    },
                    [e],
                );
                (0, y.X)(e.pagesLoader, M);
                let z = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(O.A, { children: (0, r.jsx)(I.w, { className: R().footer }) }) }), []),
                    W = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: L.c })), e.isRejected)
                    ? (0, r.jsx)(p.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, r.jsx)(w.i, { title: B({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, r.jsx)(g.n, {
                            pageId: f._Q.COLLECTION_KIDS_TRACKS,
                            children: (0, r.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: B({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, r.jsxs)('div', {
                                    className: R().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, r.jsx)(k.Y, {
                                            variant: k.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, r.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, r.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, r.jsx)(j.$, {
                                            className: (0, s.$)(R().scrollContainer, R().important),
                                            listClassName: R().content,
                                            customComponents: z,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, r.jsx)(S.D, { isActive: !0, className: R().shimmerItem, variant: N.X.PLAYLIST });
                                                let s = F(i.entityId, {
                                                    contextData: { type: d.K.Various, meta: { id: i.entityId }, from: D },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === u.S.MUSIC
                                                    ? (0, r.jsx)(v.K, { track: i, playContextParams: s }, t)
                                                    : (0, r.jsx)(h.K, { track: i, playContextParams: s, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: W,
                                            totalCount: W,
                                            onGetDataByPage: M,
                                            pageSize: L.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: a,
                                            context: { listAriaLabel: B({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(84059),
                s = i(74631);
            i(93588);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [i, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]));
            };
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var r = i(25839),
                s = i(88204),
                a = i(84059),
                n = i(82298),
                l = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = i(53712),
                _ = i(27954);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, _.g)();
                return s.isAuthorized ? t : (i && (0, a.redirect)(p.Z.main.href), (0, r.jsx)(m, {}));
            });
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
            var r = i(25839),
                s = i(88204),
                a = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, r.jsx)(l.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => s });
            var r = i(25895);
            let s = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        41544: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => y });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(84059),
                l = i(74631),
                o = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(49656),
                m = i(3392),
                p = i(4254),
                _ = i(4331),
                h = i(85743),
                v = i(27954),
                f = i(19410),
                g = i(12929),
                x = i(62926),
                b = i(97522),
                A = i(40846),
                T = i(91171),
                C = i(87221),
                E = i(12752),
                N = i.n(E);
            let y = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: E,
                        withExplicitMark: y,
                        withSecondaryColor: I,
                        captionSize: O = 'm',
                        explicitSize: k = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: j,
                        artistsClassName: L,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: P = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: D,
                        beforeTitle: B,
                        withArtistLink: F,
                        withTrackLink: M,
                        afterTitle: z,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: U } = (0, o.A)(),
                    { sendNavigateSearchFeedback: V } = (0, h.z)(),
                    {
                        settings: { isMobile: K },
                        slam: H,
                    } = (0, v.g)(),
                    $ = (0, T.$)({ withCustomTooltip: P }),
                    X = (0, n.useSearchParams)(),
                    G = (0, A.B)(a, {
                        isMobile: K,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: E,
                        withTrackLink: M,
                        withArtistLink: F,
                        withExplicitMark: y,
                        query: D ? Object.fromEntries(X) : void 0,
                    }),
                    Y = (0, l.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: a.title });
                        return ''.concat(t, ' ').concat(null != (e = a.version) ? e : '');
                    }, [U, a.title, a.version]),
                    Q = (0, C.O)({ track: a, onNavigate: V, withSavingQueryParams: D, entityType: g.n.TRACK }),
                    Z = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let i = ''.concat(G.title, ' ').concat(null != (t = G.version) ? t : '');
                            return (0, r.jsx)(m.m_, {
                                enabled: $ && !K,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: f.V,
                                children: (0, r.jsx)(p.HL, {
                                    className: (0, s.$)(N().text, N().title),
                                    type: 'entity',
                                    size: O,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G.title,
                                }),
                            });
                        },
                        [K, $, O, G.title, G.version],
                    ),
                    q = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(G.title, ' ').concat(null != (e = G.version) ? e : '');
                        return G.shouldShowRemovedTitle
                            ? (0, r.jsx)(m.m_, {
                                  enabled: $ && !K,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: f.V,
                                  children: (0, r.jsx)(p.HL, {
                                      className: (0, s.$)(N().text, N().title),
                                      type: 'entity',
                                      size: O,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: $ ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : G.link
                              ? (0, r.jsx)(b.N, {
                                    onClick: Q,
                                    className: N().albumLink,
                                    href: G.link.href,
                                    'aria-label': Y,
                                    title: $ ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Z(),
                                })
                              : Z({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    J = (0, l.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, s.$)(N().root, { [N().root_disabled]: !a.isAvailable, [N().root_disliked]: a.isDisliked && !w, [N().root_withSecondaryColor]: I }, t),
                    children: (0, r.jsxs)('div', {
                        className: N().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, s.$)(N().titleContainer, { [N().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, r.jsxs)(p.HL, {
                                        className: (0, s.$)(N().text, j),
                                        type: 'entity',
                                        size: O,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            B,
                                            q,
                                            G.version &&
                                                (0, r.jsxs)(p.HL, {
                                                    className: (0, s.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: O,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: $ ? void 0 : G.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, r.jsx)(x.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: k,
                                            variant: G.explicitMark,
                                            className: N().explicitMark,
                                            trackId: a.id,
                                        }),
                                    z,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, s.$)(N().text, { [N().artists]: R }, L, j),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, s.$)(N().text, N().link),
                                    captionClassName: (0, s.$)(N().text, N().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: J,
                                    captionSize: O,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
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
        50222: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            let r = 20;
        },
        52512: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(74631),
                s = i(3669),
                a = i(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    l = (0, s.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(a.B),
                    d = (0, r.useCallback)(
                        (r, s) => {
                            (e ? e(r, i ? s : void 0) : l(r, s), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, i],
                    );
                return (
                    (0, r.useEffect)(
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
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56480: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var r = i(93690),
                s = i(58848);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.N)(e.cause)) return 'unexpected';
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
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59126: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => r });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        59981: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(25839),
                s = i(74631),
                a = i(71035),
                n = i(1466),
                l = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(25839),
                s = i(61493),
                a = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var r = i(27954),
                s = i(44806);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => x });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(36619),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                p = i(4254),
                _ = i(29481),
                h = i(85686),
                v = i(27954),
                f = i(53454),
                g = i.n(f);
            let x = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    b = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(x, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    T = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: l.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(g().root, i),
                            onClick: T,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(74245),
                c = i(61493),
                d = i(49656),
                u = i(66738),
                m = i(27954),
                p = i(60924),
                _ = i(92870),
                h = i.n(_);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: _, variant: v, size: f = 'xxxs', ...g } = e,
                    { formatMessage: x } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [A, T] = (0, n.useState)(null),
                    C = (0, d.L)(() => {
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
                    E = (0, n.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, n.useEffect)(() => {
                    i && i().then(T);
                }, [i, a]);
                let N = (null == A ? void 0 : A.join('\n')) || '',
                    y = !!(null == A ? void 0 : A.length) && !b,
                    I = N.length > 0 ? N : E;
                return (0, r.jsx)(p.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, r.jsx)('span', {
                        className: _,
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                      className: (0, s.$)(h().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': I,
                                      style: { width: 'var(--ym-icon-size-'.concat(f, ')'), height: 'var(--ym-icon-size-'.concat(f, ')') },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
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
                                      className: (0, s.$)(h().explicitMark, t),
                                      'aria-label': I,
                                      variant: C,
                                      size: f,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
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
        70023: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 23054)));
        },
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(25839),
                s = i(39004),
                a = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
                p = i(31860),
                _ = i(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, s.A)(),
                    { notify: f } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, a.c)(async (s) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = s;
                            if (t) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            i(!0);
                            let h = await a.toggleLike();
                            (i(!1),
                                c &&
                                    (h === p.f.OK
                                        ? e((0, r.jsx)(_.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: x } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void f((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                s = i(74631),
                a = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
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
                        { formatMessage: x } = (0, a.A)(),
                        b = x({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: p,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(56829),
                s = i(35015);
            let a = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return s.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
        },
        74245: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => s, DQ: () => h, Ve: () => v });
            var r,
                s,
                a = i(30691),
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
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, s), e(s));
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
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var l = i(59126);
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
            })(r || (r = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
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
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        r = {};
                    for (let e of i)
                        if (e) {
                            let t = r[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (r[e.disclaimerType] = t));
                        }
                    return r;
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
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), ((e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted')));
            })(s || (s = {}));
            let p = new Map([
                    [r.EXPLICIT_ICON, s.E],
                    [r.AGE_18_ICON, s.AGE_18],
                    [r.AGE_16_ICON, s.AGE_16],
                    [r.AGE_12_ICON, s.AGE_12],
                    [r.EXCLAMATION_ICON, s.EXCLAMATION],
                    [r.SUBSTITUTED_ICON, s.SUBSTITUTED],
                ]),
                _ = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let i = p.get(t.type);
                    return void 0 !== i ? i : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(39004),
                s = i(56829);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        77920: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => C });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                p = i(36619),
                _ = i(76945),
                h = i(59450),
                v = i(84e3),
                f = i(97952),
                g = i(89192),
                x = i(53712),
                b = i(15270),
                A = i(68854),
                T = i.n(A);
            let C = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, l.A)(),
                    A = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, f.$)(),
                        s = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, i, r, s]);
                })(A);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, f.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, _.bv)(e.evgenInstance, s);
                            }, [e, t, i, r]),
                        };
                    })(),
                    E = (0, n.useCallback)(() => {
                        (C(), (window.location.href = x.Z.main.href));
                    }, [C]),
                    { contentRef: N } = (0, g.g)();
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(T().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(b.L, { withBackwardFallback: '/', className: (0, s.$)(T().navigation, { [T().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(T().content, { [T().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, s.$)(T().title, T().important), variant: 'h3', size: 'xs', children: A }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, s.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: E,
                                    className: T().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        79422: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var r = i(74631),
                s = i(71035);
            let a = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(25839),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                l = i(61493),
                o = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                p = i(74756),
                _ = i(41544),
                h = i(39099),
                v = i(7929),
                f = i.n(v);
            let g = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: v,
                        withDNDBlock: g,
                        isDragging: x,
                        draggingClassName: b,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: T,
                        handleRemove: C,
                        withDislike: E,
                        withTrailer: N = !0,
                        beforeTitle: y,
                        removeButtonAriaLabel: I,
                        hideControls: O,
                    } = e,
                    k = (0, c.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    j = (0, o.X)(i.trackSource, { isMobile: S }),
                    L = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: f().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, s.$)(v, { [f().trackWithDots]: g, [f().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, r.jsx)(m.O, { className: (0, s.$)(f().dots, b), isDragging: x }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: j, beforeTitle: y, track: i, ignoreDislikedStyles: A, withSecondaryColor: T }),
                    playButtonCellRender: L,
                    controls: (0, r.jsx)(p.Q, {
                        track: i,
                        className: f().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: T,
                        handleRemove: C,
                        withDislike: E,
                        withTrailer: N,
                        removeButtonAriaLabel: I,
                        hideControls: O,
                    }),
                    ...k,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        87138: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m, YK: () => u });
            var r,
                s,
                a = i(23198),
                n = i(74631),
                l = i(39004);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var o = function (e) {
                var t = (0, l.A)(),
                    i = e.value,
                    r = e.children,
                    s = (0, a.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, s));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        s = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        o = 'string' == typeof r ? new Date(r || 0) : r;
                    return s('formatDate' === e ? i.formatDateToParts(o, n) : i.formatTimeToParts(o, n));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, l.A)(),
                        r = t.value,
                        s = t.children,
                        o = (0, a.__rest)(t, ['value', 'children']),
                        c = i[e](r, o);
                    if ('function' == typeof s) return s(c);
                    var d = i.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = r[e]), t);
            }
            function u(e) {
                return e;
            }
            ((o.displayName = 'FormattedNumberParts'), (o.displayName = 'FormattedNumberParts'));
            var m = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        87770: (e) => {
            e.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(25839),
                s = i(74631),
                a = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, r.jsx)(
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
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => s }), i(77920));
            var r = i(76481);
            class s extends r.m {
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
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                s = i(88204),
                a = i(3163),
                n = i(73182);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i, withLink: s } = e,
                    l = (0, n.b)(t.type);
                return (0, r.jsx)(a.O, {
                    closeToast: i,
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
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => r.X, m5: () => s.m });
            var r = i(77920),
                s = i(76481),
                a = i(91626);
            i(95919);
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95919: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 6749, 7339, 6287, 3472, 2121, 1107, 7349, 2787, 6165, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 8222, 4475, 5056, 7358,
            ],
            () => e((e.s = 70023)),
        ),
            (_N_E = e.O()));
    },
]);
