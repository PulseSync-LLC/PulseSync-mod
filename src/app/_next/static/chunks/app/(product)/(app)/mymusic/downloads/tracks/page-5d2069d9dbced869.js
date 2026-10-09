(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 4245],
    {
        400: (e) => {
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
        3669: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var r = i(74631),
                a = i(67379),
                s = i(17850),
                n = i(59450),
                l = i(49656),
                o = i(84e3),
                c = i(58069),
                d = i(20258),
                u = i(26742),
                m = i(25195),
                _ = i(37314),
                p = i(25488),
                h = i(97952),
                v = i(10764),
                x = i(72594);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: g, displayReasonId: A } = (0, h.$)(),
                    { tabId: b, tabPos: C, isTabSelectedByDefault: f } = (0, x.R)(),
                    { offsetBlockPosY: y } = (0, m.u)(),
                    { blockType: N, blockId: I, blockPosX: T, blockPosY: k, mainObjectId: E, mainObjectType: O, displayReasonId: S } = (0, u.N)(),
                    { filterKey: j, filterValue: L, filterPos: w } = (0, _.G)(),
                    { objectType: P, objectsCount: R, objectId: M, objectPosX: D, objectPosY: F } = (0, p.J)(),
                    { skeleton: B } = (0, v.b)(),
                    W = null != S ? S : A,
                    z = (0, l.L)(() => (void 0 !== y && void 0 !== k ? y + k : k));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: i,
                            pageId: l,
                            entityType: N,
                            entityId: I,
                            entityPosX: T,
                            entityPosY: z,
                            objectsCount: R,
                            viewUuid: n,
                            objectType: P,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: F,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = L), (o.filterPos = w)),
                            d.qG.includes(g) && ((o.tabId = b), (o.tabPos = C), (o.isTabSelectedByDefault = f)),
                            B && (o.skeletonId = B),
                            'string' == typeof E && 'string' == typeof O && ((o.mainObjectType = O), (o.mainObjectId = E)),
                            W && (o.displayReasonId = W));
                        let u = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, W, I, T, z, N, j, w, L, i, f, e, E, O, M, D, F, P, R, g, B, b, C],
                );
            };
        },
        3718: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var r = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                x = i(4254),
                g = i(97522),
                A = i(39004),
                b = i(36619),
                C = i(29481),
                f = i(85686),
                y = i(85743),
                N = i(40207);
            let I = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: I,
                            isTooltipEnabled: T,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, A.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, f.Z)(null != (i = null == (t = r.link) ? void 0 : t.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, y.z)(),
                                _ = (0, C.N)(),
                                p = (0, d.c)((e) => {
                                    (o && l.isOpened && l.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: p }),
                                v = (0, d.c)((e) => {
                                    (_({ to: b.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                x = a || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: s ? void 0 : x,
                                ariaLabel: r.link ? n({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !a && s,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, r.jsx)(g.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: k,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: c,
                              children: (0, r.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                T = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: s, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(I, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: s,
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
                                            (0, r.jsx)(I, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: s,
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
            var k = i(8487),
                E = i(9079);
            let O = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(28631),
                j = i(89761),
                L = i(61912),
                w = i(36286),
                P = i.n(w);
            let R = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, r.jsx)(L.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
            var D = i(10820),
                F = i(93510),
                B = i.n(F);
            let W = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, A.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(B().root, B().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(W, { artists: t, label: i }) : (0, r.jsx)(M, { artists: t, label: i })) : i;
                }),
                U = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...A
                        } = e,
                        b = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: s, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                x = (0, n.useRef)(null),
                                [g, A] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                C = ((!b || 1 === p.length) && m) || !m,
                                f = ((e, t) => {
                                    var i, r, a;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
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
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: r, separator: s ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!C && l, artistIdWithoutLink: c }),
                                y = h ? f.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (A(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: f.groups,
                                hiddenArtistsCount: f.hiddenArtistsCount,
                                allArtistsTitle: y,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!y && v && !m && !b,
                                title: !y || v || m ? void 0 : y,
                            };
                        })(A),
                        C = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, r.jsx)(O, { spoilerClassName: s, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        f = (0, r.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, r.jsx)(
                                            T,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, r.jsx)(z, { labelRef: b.labelRef, artists: b.artists, label: f }) : f;
                });
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(25839),
                a = i(82298),
                s = i(28631),
                n = i(74631);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(10508),
                p = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: A,
                            debounceDurationInMs: b,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: y,
                            alwaysShowScrollbar: N = !1,
                            testId: I,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...E
                        } = e,
                        [O, S] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return T
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
                        }, [i, A, T]),
                        w = C ? Math.min(C, f) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: O || N, [d().root_notScrolling]: !O && !N }, t),
                        'data-test-id': I,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: k,
                                ...E,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        8905: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)),
                Promise.resolve().then(i.bind(i, 25464)),
                Promise.resolve().then(i.bind(i, 29340)),
                Promise.resolve().then(i.bind(i, 96634)));
        },
        10322: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                a = i(74631),
                s = i(82064);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, r.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        13232: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var r = i(25839),
                a = i(84059),
                s = i(8487),
                n = i(61493),
                l = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: v, key: x, className: g } = e,
                    A = (0, a.useRouter)(),
                    b = (0, m.N)().get(u.QG),
                    C = (0, l.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), A.push(b.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: C,
                        className: g,
                        isBlock: v,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
            i.d(t, { T: () => s });
            var r = i(74631),
                a = i(56480);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        24053: (e) => {
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
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(25839);
            i(93588);
            var a = i(400),
                s = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: s().empty });
            };
        },
        26115: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(40207),
                a = i(12929);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        30716: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var r = i(84059),
                a = i(74631);
            i(93588);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
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
            var r = i(25839),
                a = i(88204),
                s = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, r.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        39099: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => f });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(71035),
                o = i(11823),
                c = i(79367),
                d = i(47009),
                u = i(52512),
                m = i(29872),
                _ = i(61561),
                p = i(85743),
                h = i(16886),
                v = i(27954),
                x = i(18284),
                g = i(39004),
                A = i(26115),
                b = i(51027),
                C = i.n(b);
            let f = (0, s.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: s,
                        meta: b,
                        beforeBlock: f,
                        controls: y,
                        playButtonCellRender: N,
                        withLightning: I,
                        isPlaying: T,
                        isCurrent: k,
                        togglePlay: E,
                        restartPlay: O,
                        onPlayClick: S,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: R } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: D,
                        settings: { isMobile: F },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, v.g)(),
                    { ref: U, intersectionPropertyId: H } = (0, u.n)(),
                    Y = (0, d.b)(),
                    $ = (0, c.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: r } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && r({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(r({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: I, track: s }),
                    G = ((e) => {
                        let { sonataState: t } = (0, v.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return i && r === e;
                        }
                        return i;
                    })(s.entityId),
                    K = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    X = s.isAvailable && P && !K,
                    q = (0, _.N)(),
                    J = s.isAvailable && q && !K && !L,
                    Z = (0, A.w)({ track: s, callback: E }),
                    Q = (0, l.c)(() => {
                        M.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    ee = (0, A.w)({ track: s, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, er] = (0, n.useState)(!1),
                    ea = (0, l.c)(() => {
                        if (!$()) {
                            if (X) return void R();
                            if (J) return void z.open();
                            (ei || T || (er(!0), null == et || et()), Z(), Y(!T), null == S || S(!T));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (T) return void O();
                        ea();
                    }),
                    en = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (P && s.isAvailableOnlyForPlus && R(), q && s.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (X) return void R();
                        let t = !F && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !D.modal.isOpened));
                        return J && !t
                            ? void z.open()
                            : ((0, o.P)(e, C().ripple), F)
                              ? void ea()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && s.hasTrackLink && !D.modal.isOpened && (ee(), J && z.open()));
                    }),
                    el = null == N ? void 0 : N({ onPlayButtonClick: ea, isPlaying: T, isCurrent: k, isLoading: G, playButtonIconSize: j });
                return (0, r.jsxs)(x.C, {
                    ref: U,
                    'aria-label': V,
                    'data-intersection-property-id': H,
                    onClick: en,
                    className: (0, a.$)(C().root, { [C().root_disabled]: !s.isAvailable, [C().root_current]: k && F }, i),
                    ...w,
                    children: [f, el, b, y],
                });
            });
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        41544: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(84059),
                l = i(74631),
                o = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(49656),
                m = i(3392),
                _ = i(4254),
                p = i(4331),
                h = i(85743),
                v = i(27954),
                x = i(19410),
                g = i(12929),
                A = i(62926),
                b = i(97522),
                C = i(40846),
                f = i(91171),
                y = i(87221),
                N = i(12752),
                I = i.n(N);
            let T = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: N,
                        withExplicitMark: T,
                        withSecondaryColor: k,
                        captionSize: E = 'm',
                        explicitSize: O = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: j,
                        artistsClassName: L,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: P = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: M,
                        beforeTitle: D,
                        withArtistLink: F,
                        withTrackLink: B,
                        afterTitle: W,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: U } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, h.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, v.g)(),
                    V = (0, f.$)({ withCustomTooltip: P }),
                    G = (0, n.useSearchParams)(),
                    K = (0, C.B)(s, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: B,
                        withArtistLink: F,
                        withExplicitMark: T,
                        query: M ? Object.fromEntries(G) : void 0,
                    }),
                    X = (0, l.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [U, s.title, s.version]),
                    q = (0, y.O)({ track: s, onNavigate: H, withSavingQueryParams: M, entityType: g.n.TRACK }),
                    J = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let i = ''.concat(K.title, ' ').concat(null != (t = K.version) ? t : '');
                            return (0, r.jsx)(m.m_, {
                                enabled: V && !Y,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: x.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(I().text, I().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: K.title,
                                }),
                            });
                        },
                        [Y, V, E, K.title, K.version],
                    ),
                    Z = (0, u.L)(() => {
                        var e;
                        let t = ''.concat(K.title, ' ').concat(null != (e = K.version) ? e : '');
                        return K.shouldShowRemovedTitle
                            ? (0, r.jsx)(m.m_, {
                                  enabled: V && !Y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(I().text, I().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: V ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : K.link
                              ? (0, r.jsx)(b.N, {
                                    onClick: q,
                                    className: I().albumLink,
                                    href: K.link.href,
                                    'aria-label': X,
                                    title: V ? void 0 : t,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: J(),
                                })
                              : J({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    Q = (0, l.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(I().root, { [I().root_disabled]: !s.isAvailable, [I().root_disliked]: s.isDisliked && !w, [I().root_withSecondaryColor]: k }, t),
                    children: (0, r.jsxs)('div', {
                        className: I().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(I().titleContainer, { [I().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(I().text, j),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            Z,
                                            K.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(I().text, I().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : K.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', K.version],
                                                }),
                                        ],
                                    }),
                                    K.explicitMark &&
                                        (0, r.jsx)(A.N, {
                                            containerClassName: I().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: O,
                                            variant: K.explicitMark,
                                            className: I().explicitMark,
                                            trackId: s.id,
                                        }),
                                    W,
                                ],
                            }),
                            K.artists.length > 0 &&
                                (0, r.jsx)(p.i, {
                                    className: (0, a.$)(I().text, { [I().artists]: R }, L, j),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, a.$)(I().text, I().link),
                                    captionClassName: (0, a.$)(I().text, I().artistCaption),
                                    artists: K.artists,
                                    withLink: K.withArtistLink,
                                    lineClamp: Q,
                                    captionSize: E,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => s });
            var r = i(74631);
            let a = (0, r.createContext)(null),
                s = () => (0, r.useContext)(a);
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
            i.d(t, { n: () => n });
            var r = i(74631),
                a = i(3669),
                s = i(13232);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    l = (0, a.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(s.B),
                    d = (0, r.useCallback)(
                        (r, a) => {
                            (e ? e(r, i ? a : void 0) : l(r, a), t && c.unobserveElement(o));
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
        56629: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
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
                    let { code: i = 'E_INTERNAL', data: a = {}, ...s } = t,
                        n = e || 'Internal error';
                    (super(n, s), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
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
        60924: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(25839),
                a = i(61493),
                s = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
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
            i.d(t, { N: () => s });
            var r = i(27954),
                a = i(44806);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => A });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(36619),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                x = i(53454),
                g = i.n(x);
            let A = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    b = (0, p.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(A, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    f = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), b({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: f,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        62661: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var r = i(25839),
                a = i(82298),
                s = i(66738),
                n = i(28257),
                l = i.n(n);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, r.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        62926: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(74245),
                c = i(61493),
                d = i(49656),
                u = i(66738),
                m = i(27954),
                _ = i(60924),
                p = i(92870),
                h = i.n(p);
            let v = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: p, variant: v, size: x = 'xxxs', ...g } = e,
                    { formatMessage: A } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [C, f] = (0, n.useState)(null),
                    y = (0, d.L)(() => {
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
                    N = (0, n.useMemo)(() => A({ id: 'extra-explicit.explicit-mark' }), [A]);
                (0, n.useEffect)(() => {
                    i && i().then(f);
                }, [i, s]);
                let I = (null == C ? void 0 : C.join('\n')) || '',
                    T = !!(null == C ? void 0 : C.length) && !b,
                    k = I.length > 0 ? I : N;
                return (0, r.jsx)(_.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, r.jsx)('span', {
                        className: p,
                        // for PulseSync: BEGIN render the S badge for substituted tracks
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, r.jsxs)('svg', {
                                      className: (0, a.$)(h().explicitMark, t),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': k,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
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
                                      className: (0, a.$)(h().explicitMark, t),
                                      'aria-label': k,
                                      variant: y,
                                      size: x,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                        // for PulseSync: END render the S badge for substituted tracks
                    }),
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
        71705: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(25839),
                a = i(39004),
                s = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
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
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, i] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, a.A)();
                        return (0, s.c)(async (a) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = a;
                            if (t) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            i(!0);
                            let h = await s.toggleLike();
                            (i(!1),
                                c &&
                                    (h === _.f.OK
                                        ? e((0, r.jsx)(p.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: A } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: A, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void x((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                a = i(74631),
                s = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: A } = (0, s.A)(),
                        b = A({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        73182: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(56829),
                a = i(35015);
            let s = (e) => {
                switch (e) {
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
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        74245: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => a, DQ: () => h, Ve: () => v });
            var r,
                a,
                s = i(30691),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (a) {
                                    if (a !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, a), e(a));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
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
                            this.observableValue.subscribe(function (a) {
                                if (a !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, a), e(a));
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
                // for PulseSync: BEGIN add the substituted-track label type
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), ((e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted')));
                // for PulseSync: END add the substituted-track label type
            })(a || (a = {}));
            let _ = new Map([
                    [r.EXPLICIT_ICON, a.E],
                    [r.AGE_18_ICON, a.AGE_18],
                    [r.AGE_16_ICON, a.AGE_16],
                    [r.AGE_12_ICON, a.AGE_12],
                    [r.EXCLAMATION_ICON, a.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [r.SUBSTITUTED_ICON, a.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                // for PulseSync: BEGIN include substituted-track badges in metadata
                p = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                // for PulseSync: END include substituted-track badges in metadata
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        74756: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487),
                c = i(36619),
                d = i(61493),
                u = i(71035),
                m = i(66738),
                _ = i(3392),
                p = i(4254),
                h = i(17545),
                v = i(4071);
            let x = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, n.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(v.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, r.jsx)(m.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = i(79367),
                A = i(34159),
                b = i(68215),
                C = i(85743),
                f = i(27954),
                y = i(64720),
                N = i(71996),
                I = i(6304),
                T = i(38097),
                k = i(91907),
                E = i(3407),
                O = i(34826),
                S = i.n(O),
                j = i(82684),
                L = i(85957),
                w = i.n(L);
            let P = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                R = (0, s.PA)((e) => {
                    var t, i;
                    let {
                            className: s,
                            track: v,
                            withLightning: O,
                            ignoreDislikedStyles: j,
                            onLikeClick: L,
                            utmLink: w,
                            withSecondaryColor: R,
                            handleRemove: M,
                            withTrailer: D = !0,
                            likeIconSize: F = 'xxs',
                            removeButtonAriaLabel: B,
                            hideControls: W,
                        } = e,
                        { user: z, trailer: U } = (0, f.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: Y } = (0, C.z)(),
                        [$, V] = (0, n.useState)(!1),
                        [G, K] = (0, n.useState)(!1),
                        X = (0, g.P)(),
                        q = (0, h.K)(v),
                        J = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / T.k7);
                                      return (0, k.E)(t);
                                  })(e))(v.durationMs),
                        Z = (0, b.P)(Math.round((null != (i = v.durationMs) ? i : 0) / 1e3)),
                        Q = (0, A.F)(),
                        ee = z.hasPlus,
                        et = !v.isRemoved && v.isAvailable && !W,
                        ei = (0, u.c)(async () => {
                            ($ || v.isLiked || (V(!0), null == Y || Y()), await q(), null == L || L(v.isLiked));
                        }),
                        er = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (U.openTrackTrailer(v.id), Q(c.DomainObjectType.Track, v.id));
                        }),
                        es = (0, n.useMemo)(() => {
                            if (et)
                                return (0, r.jsx)('div', {
                                    onClick: er,
                                    children: (0, r.jsx)(E._, {
                                        track: v,
                                        open: G,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: G }),
                                        handleRemove: M,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [er, M, G, et, D, v, w]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, s, {
                            [S().controls_dislikedControls]: v.isDisliked,
                            [S().controls_dislikedColors]: v.isDisliked && !j,
                            [S().controls_disabled]: !v.isAvailable,
                            [S().root_withSecondaryColor]: R,
                        }),
                        children: [
                            O &&
                                (0, r.jsx)(m.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            v.isUGC &&
                                (0, r.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(m.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(_.ZI, { children: (0, r.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, r.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, r.jsx)(P, { track: v }) }),
                            M && !W && (0, r.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: M, ariaLabel: B }),
                            et &&
                                (0, r.jsx)(I.WithOffline, {
                                    fallback: (0, r.jsx)(y.c, {
                                        size: 'xs',
                                        iconSize: F,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: v.isLiked,
                                        onClick: ei,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = v.trailer) ? void 0 : t.isAvailable) &&
                                v.isAvailable &&
                                (0, r.jsx)(I.WithOffline, {
                                    fallback: (0, r.jsx)(N.k, {
                                        className: (0, a.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== J &&
                                        (0, r.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: G && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: J }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
        },
        77174: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(39004),
                a = i(56829);
            let s = (e, t) => {
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
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => y });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(36619),
                p = i(76945),
                h = i(59450),
                v = i(84e3),
                x = i(97952),
                g = i(89192),
                A = i(53712),
                b = i(15270),
                C = i(68854),
                f = i.n(C);
            let y = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    C = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, x.$)(),
                        a = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(C);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    N = (0, n.useCallback)(() => {
                        (y(), (window.location.href = A.Z.main.href));
                    }, [y]),
                    { contentRef: I } = (0, g.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(b.L, { withBackwardFallback: '/', className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !I }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: C }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: N,
                                    className: f().button,
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
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        82967: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(74631),
                l = i(61493),
                o = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(74756),
                p = i(41544),
                h = i(39099),
                v = i(7929),
                x = i.n(v);
            let g = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: v,
                        withDNDBlock: g,
                        isDragging: A,
                        draggingClassName: b,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: f,
                        handleRemove: y,
                        withDislike: N,
                        withTrailer: I = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: k,
                        hideControls: E,
                    } = e,
                    O = (0, c.D)({ playContextParams: s, entityId: i.entityId }),
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
                                className: x().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(v, { [x().trackWithDots]: g, [x().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, r.jsx)(m.O, { className: (0, a.$)(x().dots, b), isDragging: A }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: j, beforeTitle: T, track: i, ignoreDislikedStyles: C, withSecondaryColor: f }),
                    playButtonCellRender: L,
                    controls: (0, r.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: f,
                        handleRemove: y,
                        withDislike: N,
                        withTrailer: I,
                        removeButtonAriaLabel: k,
                        hideControls: E,
                    }),
                    ...O,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        90780: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(25839),
                a = i(74631),
                s = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
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
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(25839),
                a = i(88204),
                s = i(3163),
                n = i(73182);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    l = (0, n.b)(t.type);
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: l,
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
        96634: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => T }));
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(8487);
            i(93588);
            var l = i(4071),
                o = i(66738),
                c = i(13833),
                d = i(4254),
                u = i(74631),
                m = i(67379),
                _ = i(36619),
                p = i(76945),
                h = i(59450),
                v = i(84e3),
                x = i(59342),
                g = i(89192),
                A = i(53712),
                b = i(85686),
                C = i(56120),
                f = i(15270),
                y = i(27954),
                N = i(24053),
                I = i.n(N);
            let T = (0, s.PA)((e) => {
                let { className: t, title: i, description: s, iconVariant: N = 'musicLogo', iconClassName: T, iconSize: k } = e,
                    { contentRef: E, setContentScrollRef: O } = (0, g.g)(),
                    S = (0, b.Z)(A.Z.main.href);
                !(function () {
                    let e = (0, h.st)(),
                        { hash: t } = (0, h.gf)(),
                        i = (0, v.U)(),
                        r = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, x.A)();
                        let a = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, p.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, p.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: j } = (function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        r = (0, v.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !i) return;
                            let a = (0, m.F)({
                                params: {
                                    hash: i,
                                    pageId: _.AppScreen.PageNotFoundScreen,
                                    pageStyle: _.PageStyles.Fullscreen,
                                    pagePlacement: _.PagePlacements.Fullscreen,
                                    mainObjectType: _.DomainObjectType.NonApplicable,
                                    mainObjectId: _.DomainObjectType.NonApplicable,
                                    from: _.AppScreen.PageNotFoundScreen,
                                    to: _.AppScreen.MainScreen,
                                    entityType: _.EntityTypes.Error,
                                    entityId: _.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, p.Mu)(t.evgenInstance, a), e());
                        }, [t, i, r, e]),
                    };
                })(S);
                return (
                    (0, C.N)(!0),
                    !(function () {
                        let { location: e } = (0, y.g)();
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
                        className: (0, a.$)(I().root, { [I().root_desktop]: !E }, t),
                        containerClassName: I().container,
                        ref: O,
                        children: [
                            (0, r.jsx)(f.L, { withBackwardFallback: '/', className: I().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: I().content,
                                children: [
                                    (0, r.jsx)(o.I, { className: (0, a.$)(I().icon, T), variant: N, size: k }),
                                    (0, r.jsx)(d.DZ, {
                                        className: (0, a.$)(I().title, I().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.HL, {
                                        className: (0, a.$)(I().text, I().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(l.$, {
                                        onClick: j,
                                        className: I().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        97762: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { p: () => r }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(r || (r = {})));
        },
        97805: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var r = i(25839),
                a = i(3718),
                s = i(82298),
                n = i(74631),
                l = i(39004),
                o = i(23976),
                c = i(47399),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, l.A)(),
                    c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: d().coverContainer, children: (0, r.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: d().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(64813),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, l.A)(),
                        c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, i),
                        children: [
                            (0, r.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, r.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: _().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: s } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, r.jsx)(p, { isActive: t, className: s });
                        case a.X.ALBUM:
                            return (0, r.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        98436: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
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
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => I });
            var r = i(25839),
                a = i(82298),
                s = i(88204),
                n = i(39004),
                l = i(93588),
                o = i(43354),
                c = (function (e) {
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                g = i.n(x),
                A = i(61493),
                b = i(4254),
                C = i(97522);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(g().copyrights, t),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: a, className: g().link, 'data-test-id': A.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(g().root, g().important, t),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, r.jsx)(y, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, v.g)(),
                    { formatDate: a, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: p(a) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let I = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: _, user: x } = (0, v.g)(),
                    { formatDate: A, formatMessage: b } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    _ = [n, o, u];
                                return (i && 'ru' === s && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: f,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(A),
                    });
                return (0, r.jsx)(N, { className: (0, a.$)({ [g().root_withOffsetForDeeplink]: C }, i), data: y });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 6749, 7339, 6287, 3472, 2121, 1107, 7349, 6706, 1311, 546, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 2917, 8421,
                3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 9333, 2010, 9797, 4475, 5056, 7358,
            ],
            () => e((e.s = 8905)),
        ),
            (_N_E = e.O()));
    },
]);
