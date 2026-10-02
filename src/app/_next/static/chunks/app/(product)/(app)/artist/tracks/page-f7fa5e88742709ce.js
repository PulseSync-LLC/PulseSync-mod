(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3580, 9689],
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
        1797: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(40207);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        3669: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => f });
            var i = r(74631),
                a = r(67379),
                n = r(17850),
                s = r(59450),
                l = r(49656),
                o = r(84e3),
                c = r(58069),
                u = r(20258),
                d = r(26742),
                m = r(25195),
                p = r(37314),
                _ = r(25488),
                h = r(97952),
                g = r(10764),
                v = r(72594);
            let f = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: f, displayReasonId: x } = (0, h.$)(),
                    { tabId: y, tabPos: A, isTabSelectedByDefault: k } = (0, v.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: b, blockId: C, blockPosX: E, blockPosY: N, mainObjectId: I, mainObjectType: L, displayReasonId: S } = (0, d.N)(),
                    { filterKey: j, filterValue: O, filterPos: w } = (0, p.G)(),
                    { objectType: R, objectsCount: D, objectId: P, objectPosX: M, objectPosY: z } = (0, _.J)(),
                    { skeleton: U } = (0, g.b)(),
                    F = null != S ? S : x,
                    B = (0, l.L)(() => (void 0 !== T && void 0 !== N ? T + N : N));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !f || !u.xK.includes(f) || !u.fD.includes(f)) return;
                        let l = c.F[f];
                        if (!l) return;
                        let o = {
                            hash: r,
                            pageId: l,
                            entityType: b,
                            entityId: C,
                            entityPosX: E,
                            entityPosY: B,
                            objectsCount: D,
                            viewUuid: s,
                            objectType: R,
                            objectId: P,
                            objectPosX: M,
                            objectPosY: z,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = O), (o.filterPos = w)),
                            u.qG.includes(f) && ((o.tabId = y), (o.tabPos = A), (o.isTabSelectedByDefault = k)),
                            U && (o.skeletonId = U),
                            'string' == typeof I && 'string' == typeof L && ((o.mainObjectType = L), (o.mainObjectId = I)),
                            F && (o.displayReasonId = F));
                        let d = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (i ? (0, n.Pf)(t.evgenInstance, d) : (0, n.nv)(t.evgenInstance, d));
                    },
                    [t, F, C, E, B, b, j, w, O, r, k, e, I, L, P, M, z, R, D, f, U, y, A],
                );
            };
        },
        3718: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        4331: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => W });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(49656),
                o = r(3392),
                c = r(19410),
                u = r(71035),
                d = r(27954),
                m = r(39528);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    a = r && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: a };
            };
            var _ = r(94484),
                h = r.n(_),
                g = r(61493),
                v = r(4254),
                f = r(97522),
                x = r(39004),
                y = r(36619),
                A = r(29481),
                k = r(85686),
                T = r(85743),
                b = r(40207);
            let C = (0, n.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: a, captionSize: n = 'm', allArtistsTitle: s, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: C,
                            isTooltipEnabled: E,
                            handleNavigate: N,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: a, withCustomTooltip: n } = e,
                                { formatMessage: s } = (0, x.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, d.g)(),
                                c = (0, k.Z)(null != (r = null == (t = i.link) ? void 0 : t.href) ? r : i.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, T.z)(),
                                p = (0, A.N)(),
                                _ = (0, u.c)((e) => {
                                    (o && l.isOpened && l.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, d.g)(),
                                        { modal: s } = i;
                                    return (0, b.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: i.artist, callback: _ }),
                                g = (0, u.c)((e) => {
                                    (p({ to: y.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                v = a || i.name;
                            return {
                                name: i.name,
                                link: i.link,
                                title: n ? void 0 : v,
                                ariaLabel: i.link ? s({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                tooltipText: v,
                                isTooltipEnabled: !a && n,
                                handleNavigate: g,
                            };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: l });
                    return p
                        ? (0, i.jsx)(f.N, {
                              ...p,
                              'aria-label': h,
                              className: r,
                              onClick: N,
                              title: _,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: C,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: C,
                              hoverSettings: c,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: a,
                                  title: _,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: r, captionClassName: a, captionSize: n, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(C, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: a,
                                captionSize: n,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(C, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: a,
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
            var N = r(8487),
                I = r(9079);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, r),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = r(28631),
                j = r(89761),
                O = r(61912),
                w = r(36286),
                R = r.n(w);
            let D = (0, n.PA)((e) => {
                    let { label: t, artists: r, forwardRef: a } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: a, children: t }),
                            (0, i.jsx)(o.ZI, { className: R().tooltipContent, children: r.map((e) => (0, i.jsx)(O.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, s.forwardRef)((e, t) => (0, i.jsx)(D, { forwardRef: t, ...e }));
            var M = r(10820),
                z = r(93510),
                U = r.n(z);
            let F = (0, n.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: n } = (0, x.A)();
                    return (0, i.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(U().root, U().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, n.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: a } = e,
                        [n, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, d.g)(),
                        m = (0, u.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, s.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(F, { artists: t, label: r }) : (0, i.jsx)(P, { artists: t, label: r })) : r;
                }),
                W = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: n,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: g,
                            variant: v = 'breakAll',
                            spoilerComponent: f,
                            ...x
                        } = e,
                        y = ((e) => {
                            var t, r, i;
                            let { separator: a, visibleArtistsCount: n, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                g = null == (i = e.withCustomTooltip) || i,
                                v = (0, s.useRef)(null),
                                [f, x] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, d.g)(),
                                A = ((!y || 1 === _.length) && m) || !m,
                                k = ((e, t) => {
                                    var r, i, a;
                                    let n = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        s = null == (i = null == t ? void 0 : t.withLink) || i,
                                        l = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: u } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: a, isFirst: n } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: n ? void 0 : a }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: u,
                                    };
                                })(_, { separator: a, visibleArtistsCount: f ? void 0 : n, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                T = h ? k.allArtistsTitle : '',
                                b = (0, u.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: g,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!T && g && !m && !y,
                                title: !T || g || m ? void 0 : T,
                            };
                        })(x),
                        A = (0, l.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(f)
                                  ? f
                                  : (0, i.jsx)(L, { spoilerClassName: n, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        k = (0, i.jsx)(o.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, i.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: g,
                                                allArtistsTitle: y.allArtistsTitle,
                                                withCustomTooltip: y.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return y.withContextMenu ? (0, i.jsx)(B, { labelRef: y.labelRef, artists: y.artists, label: k }) : k;
                });
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var i = r(25839),
                a = r(82298),
                n = r(28631),
                s = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: a, ...n } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': s, style: { ...t }, ref: r, ...n });
                },
                o = (0, s.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = r(45300),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: s, withForceScroll: l, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: n, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var p = r(10508),
                _ = r(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, h] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) r(e);
                                    }
                                }, n),
                            [n, a, t, r, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, i.jsx)(_.sN, { ref: u, rangeChanged: g, totalCount: l, endReached: v, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: f,
                            totalRequests: x,
                            debounceDurationInMs: y,
                            initialItemCount: A,
                            minInitialItemCount: k = 20,
                            handleRef: T,
                            alwaysShowScrollbar: b = !1,
                            testId: C,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...I
                        } = e,
                        [L, S] = (0, s.useState)(!1),
                        j = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        O = (0, s.useMemo)(() => {
                            var e, t;
                            return E
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
                        }, [r, x, E]),
                        w = A ? Math.min(A, k) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: L || b, [u().root_notScrolling]: !L && !b }, t),
                        'data-test-id': C,
                        children: [
                            E && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(h, {
                                overscan: g,
                                components: O,
                                listClassName: _,
                                itemClassName: d,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: T,
                                totalCount: f,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: N,
                                ...I,
                            }),
                            E && (null == r ? void 0 : r.Footer) && r.Footer(),
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
        10322: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(25839),
                a = r(74631),
                n = r(82064);
            let s = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    u = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, r, s, l, o]);
                return (0, i.jsx)(n.r.Provider, { value: u, children: c });
            };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var i = r(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        12234: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var i = r(71872);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, r) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(e) {
                if (!r.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    a = t[0];
                return r.e(t[1]).then(() => r.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 12526), (e.exports = a));
        },
        13232: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13580: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => x });
            var i,
                a,
                n = r(23198),
                s = r(46254);
            function l(e, t) {
                var r = t && t.cache ? t.cache : m,
                    i = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  i,
                                  a = 1 === e.length ? o : c;
                              return ((r = t.cache.create()), (i = t.serializer), a.bind(this, e, r, i));
                          }
                )(e, { cache: r, serializer: i });
            }
            function o(e, t, r, i) {
                var a = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.call(this, i)), t.set(a, n)), n);
            }
            function c(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    a = r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.apply(this, i)), t.set(a, n)), n);
            }
            var u = function () {
                return JSON.stringify(arguments);
            };
            function d() {
                this.cache = Object.create(null);
            }
            ((d.prototype.get = function (e) {
                return this.cache[e];
            }),
                (d.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new d();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), c.bind(this, e, r, i));
                    },
                    monadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), o.bind(this, e, r, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var _ = (function (e) {
                    function t(t, r, i) {
                        var a = e.call(this, t) || this;
                        return ((a.code = r), (a.originalMessage = i), a);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                h = (function (e) {
                    function t(t, r, a, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                i.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                g = (function (e) {
                    function t(t, r, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), i.INVALID_VALUE, a) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                v = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_);
            function f(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, r) {
                                e[t] = r;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(a || (a = {}));
            var x = (function () {
                function e(t, r, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, s.isLiteralElement)(p)) {
                                        d.push({ type: a.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(p)) {
                                        'number' == typeof c && d.push({ type: a.literal, value: n.getNumberFormat(r).format(c) });
                                        continue;
                                    }
                                    var f = p.value;
                                    if (!(o && f in o)) throw new v(f, u);
                                    var x = o[f];
                                    if ((0, s.isArgumentElement)(p)) {
                                        ((x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            d.push({ type: 'string' == typeof x ? a.literal : a.object, value: x }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.date[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.time[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : l.time.medium;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.number[p.style] : (0, s.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (y && y.scale && (x *= y.scale || 1), d.push({ type: a.literal, value: n.getNumberFormat(r, y).format(x) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(p)) {
                                        var A = p.children,
                                            k = p.value,
                                            T = o[k];
                                        if ('function' != typeof T) throw new g(k, 'function', u);
                                        var b = T(
                                            e(A, r, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(b) || (b = [b]),
                                            d.push.apply(
                                                d,
                                                b.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(p)) {
                                        var C = p.options[x] || p.options.other;
                                        if (!C) throw new h(p.value, x, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, r, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(p)) {
                                        var C = p.options['='.concat(x)];
                                        if (!C) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    u,
                                                );
                                            var E = n.getPluralRules(r, { type: p.pluralType }).select(x - (p.offset || 0));
                                            C = p.options[E] || p.options.other;
                                        }
                                        if (!C) throw new h(p.value, x, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, r, n, l, o, x - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === a.literal && t.type === a.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var x = c || {},
                            y = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, y), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var r, i;
                                      return (
                                          (e[t] =
                                              ((r = u[t]),
                                              (i = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, r || {}), i || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), i[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        14514: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        16380: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => J }));
            var i = r(25839),
                a = r(84059),
                n = r(82298),
                s = r(88204),
                l = r(74631),
                o = r(39004),
                c = r(8487),
                u = r(61493),
                d = r(22939),
                m = r(71035),
                p = r(4254),
                _ = r(78299),
                h = r(1407),
                g = r(82967),
                v = r(1797),
                f = r(20258),
                x = r(10322),
                y = r(30290),
                A = r(21784),
                k = r(89192),
                T = r(30716),
                b = r(79422),
                C = r(27954),
                E = r(3718),
                N = r(56412),
                I = r(99401),
                L = r(26076),
                S = r(10603),
                j = r(97805),
                O = r(6968),
                w = r(17951),
                R = r(61732),
                D = r(12234),
                P = r(64595),
                M = r(26208),
                z = r(89221),
                U = r(27935),
                F = r(41016),
                B = r(80461),
                W = r(95445);
            async function H(e, t) {
                var r, i, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, z.W)(t.locale),
                    s = n({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, U.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, M.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, F.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, P.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, W.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = r(28604),
                Y = r(19386),
                $ = r(64637),
                G = r.n($);
            let V = (0, s.PA)((e) => {
                var t, r, s, D, P, M;
                let { artistId: z, preloadedArtist: U } = e,
                    {
                        artist: F,
                        sonataState: B,
                        disclaimerModalState: W,
                        settings: { isMobile: $ },
                    } = (0, C.g)(),
                    { formatMessage: V } = (0, o.A)(),
                    { from: X, utmLink: J } = (0, y.f)({ pageId: f._Q.ARTIST_TRACKS, pageEntityId: z, contextType: d.K.Artist, contextId: z }),
                    { contentScrollRef: Z, setContentScrollRef: q } = (0, k.g)(),
                    Q = (0, A.W)(),
                    ee = (0, b.w)(),
                    et = (0, v.S)({ artist: null == (t = F.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, Y.G)(z),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = F.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (r = F.meta) ? void 0 : r.artist.isUnsafeLegal, et]),
                    (0, K._)(F, z),
                    (0, l.useEffect)(
                        () => () => {
                            F.fullTracksListSubpage.reset();
                        },
                        [F],
                    ),
                    F.fullTracksListSubpage.isNotFound && (0, a.notFound)(),
                    (0, T.J)(F.fullTracksListSubpage.isResolved));
                let er = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(L.A, { children: (0, i.jsx)(I.w, { className: G().footer }) }) }), []),
                    ei = (0, m.c)((e) => {
                        let t = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            var r;
                            let e = null == (r = F.fullTracksListSubpage.ids) ? void 0 : r[i];
                            !F.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
                        }
                        t.length && F.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    ea = [];
                return (F.fullTracksListSubpage.isNeededToLoad && ea.push(F.fullTracksListSubpage.getTracksIds({ artistId: z })),
                F.infoLoadingState.isNeededToLoad && ea.push(F.getInfo({ artistId: z, preloadedArtist: U })),
                ((e) => {
                    var t;
                    (0, l.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            H({ artist: (0, w.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, R.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(F),
                ea.length && (0, l.use)(Promise.allSettled(ea)),
                F.fullTracksListSubpage.isRejected && !F.fullTracksListSubpage.isNotFound)
                    ? (0, i.jsx)(_.SomethingWentWrong, {})
                    : (null == (s = F.meta) ? void 0 : s.artist.isLegalRejected)
                      ? (0, i.jsx)(N.M, { modalState: W })
                      : (0, i.jsx)(x.n, {
                            pageId: f._Q.ARTIST_TRACKS,
                            pageEntityId: z,
                            children: (0, i.jsx)(h.h, {
                                scrollElement: Z,
                                outerTitle: V({ id: 'page.artist-tracks-header' }, { artistName: F.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: G().root,
                                    'data-test-id': u.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, i.jsx)(S.Y, {
                                            variant: S.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Q.canBack,
                                            children: (0, i.jsx)(p.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (D = F.meta) ? void 0 : D.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(O.$, {
                                            className: (0, n.$)(G().scrollContainer, G().important),
                                            customComponents: er,
                                            itemContentCallback: (e) => {
                                                let t = F.fullTracksListSubpage.getTrackByIndex(e),
                                                    r = V({ id: 'loading-messages.entity-is-loading' }, { entityName: V({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, i.jsx)(g.K, {
                                                          track: t,
                                                          playContextParams: ee(e, {
                                                              contextData: { type: d.K.Artist, meta: { id: Number(z) }, from: X, utmLink: J },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: B.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, i.jsx)(j.D, { isActive: !0, 'aria-label': r, variant: E.X.PLAYLIST, className: G().shimmerItem });
                                            },
                                            totalCount: null != (M = null == (P = F.fullTracksListSubpage.ids) ? void 0 : P.length) ? M : 0,
                                            onGetDataByRange: ei,
                                            pageSize: 20,
                                            listClassName: G().content,
                                            itemClassName: G().item,
                                            totalRequests: F.fullTracksListSubpage.tracks.size,
                                            handleRef: q,
                                            context: { listAriaLabel: V({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: $,
                                            useWindowScroll: $,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var X = r(61288);
            let J = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, X.L)(e)) || (0, a.notFound)(), (0, i.jsx)(V, { artistId: e }));
            };
        },
        17951: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => a });
            var i = r(61399);
            let a = (e) => {
                var t, r;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (r = e.isAvailable) || r, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        19386: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var i = r(74631),
                a = r(43354),
                n = r(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: r } = null != (t = (0, a.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == r || r(t);
                    }
                    return () => {
                        null == r || r(null);
                    };
                }, [e, r]);
            };
        },
        19410: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        21468: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var i = r(74631),
                a = r(56480);
            function n() {
                return (0, i.useContext)(a.H);
            }
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var i = r(25839);
            r(93588);
            var a = r(400),
                n = r.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        26115: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var i = r(40207),
                a = r(12929);
            let n = (e) => {
                let { track: t, callback: r, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: a.n.TRACK, callback: r, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        26208: (e, t, r) => {
            'use strict';
            function i(e) {
                let { tld: t, url: r } = e;
                return r || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            r.d(t, { v: () => i });
        },
        27935: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => n });
            var i = r(89288),
                a = r(28869);
            function n(e) {
                let { ogTitle: t, ogDescription: r, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: u } = e,
                    d = l ? { url: (0, i.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: r,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, g: () => s });
            var i = r(74631),
                a = r(36432);
            let n = (0, i.createContext)(null);
            function s() {
                let e = (0, i.useContext)(n);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        28604: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => a });
            var i = r(74631);
            let a = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => d });
            var i = r(58025),
                a = r(78773),
                n = r(14514),
                s = r(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = r(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = r(55040);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(a.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = d.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, r, i;
                    let a = (0, n.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (r = this.storage) || r.set(a), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(a));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: r, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = r),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [u] = l(e) || [];
                    this.language = (0, n.k)(this.config, u);
                }
            }
        },
        30716: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(84059),
                a = r(74631);
            r(93588);
            let n = (e) => {
                let t = (0, i.usePathname)(),
                    [r, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, r, t]));
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
        38726: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => u });
            var i = r(25839),
                a = r(88204),
                n = r(61493),
                s = r(66738),
                l = r(10820),
                o = r(77174),
                c = r(27954);
            let u = (0, a.PA)((e) => {
                let { isLiked: t, onClick: r, className: a, iconClassName: u, albumType: d, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, d);
                return (0, i.jsx)(l.Dr, {
                    className: a,
                    onClick: r,
                    icon: (0, i.jsx)(s.I, { className: u, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        38902: (e, t) => {
            'use strict';
            var r, i;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(r || (t.TYPE = r = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(i || (t.SKELETON_TYPE = i = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === r.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === r.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === r.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === r.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === r.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === r.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === r.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === r.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === r.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        39099: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => k });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(71035),
                o = r(11823),
                c = r(79367),
                u = r(47009),
                d = r(52512),
                m = r(29872),
                p = r(61561),
                _ = r(85743),
                h = r(16886),
                g = r(27954),
                v = r(18284),
                f = r(39004),
                x = r(26115),
                y = r(51027),
                A = r.n(y);
            let k = (0, n.PA)((e) => {
                var t;
                let {
                        className: r,
                        track: n,
                        meta: y,
                        beforeBlock: k,
                        controls: T,
                        playButtonCellRender: b,
                        withLightning: C,
                        isPlaying: E,
                        isCurrent: N,
                        togglePlay: I,
                        restartPlay: L,
                        onPlayClick: S,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: R, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: M,
                        settings: { isMobile: z },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: F },
                        paywall: { modal: B },
                    } = (0, g.g)(),
                    { ref: W, intersectionPropertyId: H } = (0, d.n)(),
                    K = (0, u.b)(),
                    Y = (0, c.P)(),
                    $ = ((e) => {
                        let { track: t, withLightning: r } = e,
                            { formatMessage: i } = (0, f.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: C, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            r = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return r && i === e;
                        }
                        return r;
                    })(n.entityId),
                    V = F(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && R && !V,
                    J = (0, p.N)(),
                    Z = n.isAvailable && J && !V && !O,
                    q = (0, x.w)({ track: n, callback: I }),
                    Q = (0, l.c)(() => {
                        P.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, x.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, _.z)(),
                    [er, ei] = (0, s.useState)(!1),
                    ea = (0, l.c)(() => {
                        if (!Y()) {
                            if (X) return void D();
                            if (Z) return void B.open();
                            (er || E || (ei(!0), null == et || et()), q(), K(!E), null == S || S(!E));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (E) return void L();
                        ea();
                    }),
                    es = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (R && n.isAvailableOnlyForPlus && D(), J && n.isAvailableOnlyForPlus && B.open());
                            return;
                        }
                        if (X) return void D();
                        let t = !z && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !M.modal.isOpened));
                        return Z && !t
                            ? void B.open()
                            : ((0, o.P)(e, A().ripple), z)
                              ? void ea()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !M.modal.isOpened && (ee(), Z && B.open()));
                    }),
                    el = null == b ? void 0 : b({ onPlayButtonClick: ea, isPlaying: E, isCurrent: N, isLoading: G, playButtonIconSize: j });
                return (0, i.jsxs)(v.C, {
                    ref: W,
                    'aria-label': $,
                    'data-intersection-property-id': H,
                    onClick: es,
                    className: (0, a.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: N && z }, r),
                    ...w,
                    children: [k, el, y, T],
                });
            });
        },
        39528: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => a });
            var i = r(25895);
            let a = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        41016: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            var i = r(71872),
                a = r(80461);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        41544: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => E });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(84059),
                l = r(74631),
                o = r(39004),
                c = r(8487),
                u = r(61493),
                d = r(49656),
                m = r(3392),
                p = r(4254),
                _ = r(4331),
                h = r(85743),
                g = r(27954),
                v = r(19410),
                f = r(12929),
                x = r(62926),
                y = r(97522),
                A = r(40846),
                k = r(91171),
                T = r(87221),
                b = r(12752),
                C = r.n(b);
            let E = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: r,
                        track: n,
                        albumArtists: b,
                        withExplicitMark: E,
                        withSecondaryColor: N,
                        captionSize: I = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: j,
                        artistsClassName: O,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: R = !0,
                        hasLineClamp: D = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: z,
                        withTrackLink: U,
                        afterTitle: F,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, h.z)(),
                    {
                        settings: { isMobile: K },
                        slam: Y,
                    } = (0, g.g)(),
                    $ = (0, k.$)({ withCustomTooltip: R }),
                    G = (0, s.useSearchParams)(),
                    V = (0, A.B)(n, {
                        isMobile: K,
                        isOfflineModeEnabled: Y.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: U,
                        withArtistLink: z,
                        withExplicitMark: E,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    X = (0, l.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [W, n.title, n.version]),
                    J = (0, T.O)({ track: n, onNavigate: H, withSavingQueryParams: P, entityType: f.n.TRACK }),
                    Z = (0, l.useCallback)(
                        (e) => {
                            var t;
                            let r = ''.concat(V.title, ' ').concat(null != (t = V.version) ? t : '');
                            return (0, i.jsx)(m.m_, {
                                enabled: $ && !K,
                                offsetOptions: 4,
                                placement: 'top',
                                text: r,
                                hoverSettings: v.V,
                                children: (0, i.jsx)(p.HL, {
                                    className: (0, a.$)(C().text, C().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V.title,
                                }),
                            });
                        },
                        [K, $, I, V.title, V.version],
                    ),
                    q = (0, d.L)(() => {
                        var e;
                        let t = ''.concat(V.title, ' ').concat(null != (e = V.version) ? e : '');
                        return V.shouldShowRemovedTitle
                            ? (0, i.jsx)(m.m_, {
                                  enabled: $ && !K,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, i.jsx)(p.HL, {
                                      className: (0, a.$)(C().text, C().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: $ ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : V.link
                              ? (0, i.jsx)(y.N, {
                                    onClick: J,
                                    className: C().albumLink,
                                    href: V.link.href,
                                    'aria-label': X,
                                    title: $ ? void 0 : t,
                                    'data-test-id': u.Kq.track.TRACK_TITLE,
                                    children: Z(),
                                })
                              : Z({ 'data-test-id': u.Kq.track.TRACK_TITLE });
                    }),
                    Q = (0, l.useMemo)(() => +!!D, [D]);
                return (0, i.jsx)('div', {
                    className: (0, a.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_disliked]: n.isDisliked && !w, [C().root_withSecondaryColor]: N }, t),
                    children: (0, i.jsxs)('div', {
                        className: C().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(C().titleContainer, { [C().titleContainer_withVersion]: n.version }, r),
                                children: [
                                    (0, i.jsxs)(p.HL, {
                                        className: (0, a.$)(C().text, j),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            q,
                                            V.version &&
                                                (0, i.jsxs)(p.HL, {
                                                    className: (0, a.$)(C().text, C().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: $ ? void 0 : V.version,
                                                    'data-test-id': u.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', V.version],
                                                }),
                                        ],
                                    }),
                                    V.explicitMark &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: C().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: V.explicitMark,
                                            className: C().explicitMark,
                                            trackId: n.id,
                                        }),
                                    F,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, a.$)(C().text, { [C().artists]: D }, O, j),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, a.$)(C().text, C().link),
                                    captionClassName: (0, a.$)(C().text, C().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: Q,
                                    captionSize: I,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => n });
            var i = r(74631);
            let a = (0, i.createContext)(null),
                n = () => (0, i.useContext)(a);
        },
        43464: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            let i = new Set(Object.values(r(85705).M)),
                a = (e) => 'string' == typeof e && i.has(e);
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
        46254: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = r(23198);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(r(38902), t),
                (t._Parser = void 0));
        },
        46646: (e, t, r) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!r.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    a = t[0];
                return r.e(t[1]).then(() => r.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 46646), (e.exports = a));
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
        52512: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(74631),
                a = r(3669),
                n = r(13232);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, i.useRef)(null),
                    l = (0, a.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    u = (0, i.useCallback)(
                        (i, a) => {
                            (e ? e(i, r ? a : void 0) : l(i, a), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: u }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, u, o, l],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        55040: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => c, X: () => o });
            var i = r(36432),
                a = r(78773);
            let n = async (e) => e.then((e) => e.default),
                s = a.pE[a.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(r(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(r(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        r = t.get(e),
                        a = t.get('ru');
                    if (r) return r();
                    if (a) return a();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => T });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(8487),
                o = r(61493),
                c = r(71035),
                u = r(4071),
                d = r(4254),
                m = r(36484),
                p = r(62562),
                _ = r(21784),
                h = r(53712),
                g = r(85686),
                v = r(12929),
                f = r(95067),
                x = r(97522),
                y = r(71472),
                A = r.n(y);
            let k = {
                    [v.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                T = (0, n.PA)((e) => {
                    var t;
                    let { modalState: r, data: n, onClose: y, className: T } = e,
                        b = null != n ? n : null == r ? void 0 : r.modalData,
                        C = (0, _.W)(),
                        E = (0, g.Z)(h.Z.main.href),
                        N = (0, p.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (y) return y();
                            (C.canBack && C.back(), E());
                        }),
                        L = (null == b || null == (t = b.details) ? void 0 : t.url) && b.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(f.c.ExEx),
                                i = new Date(),
                                a = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? N.set(f.c.ExEx, [...t, n], { expires: new Date(a) }) : N.set(f.c.ExEx, [n], { expires: new Date(a) }),
                                null == y || y(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        j = (0, c.c)(() => {
                            ((null == r ? void 0 : r.shouldHistoryBack) ? (null == y || y(), C.canBack && C.back(), E()) : null == y || y(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (b) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, a.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: b.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: b.description,
                                        }),
                                        L &&
                                            (0, i.jsx)(x.N, {
                                                href: null == (e = b.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, i.jsx)(d.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = b.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [b, L]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === v.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, i.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: j,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && k[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, i.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, I, j],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(A().root, T),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: A().container, children: [O, w] }),
                    });
                });
        },
        56480: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(74631).createContext)({ pageAlbumId: void 0 });
        },
        59981: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        60402: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 16380));
        },
        60924: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(25839),
                a = r(61493),
                n = r(3392),
                s = r(4254),
                l = r(74672),
                o = r.n(l);
            let c = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: r, title: l, placement: u = 'top', children: d } = e;
                    return (0, i.jsxs)(n.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: u,
                        children: [
                            d,
                            (0, i.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61288: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => a });
            let i = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61399: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var i = r(43464);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61561: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var i = r(27954),
                a = r(44806);
            let n = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61732: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            let i = (e, t) => {
                    let r = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (r) return r;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                a = (e) => {
                    let { title: t, description: r, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof r)) {
                        let e = i('name', 'description');
                        (e.setAttribute('content', r), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            r = Array.isArray(a.images) ? a.images[0] : null;
                        n = r && 'object' == typeof r && 'url' in r ? String(r.url) : '';
                        let s = i('property', 'og:title'),
                            l = i('property', 'og:description'),
                            o = i('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        61912: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(36619),
                o = r(61493),
                c = r(71035),
                u = r(23818),
                d = r(10820),
                m = r(86869),
                p = r(4254),
                _ = r(29481),
                h = r(85686),
                g = r(27954),
                v = r(53454),
                f = r.n(v);
            let x = (0, n.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    v = (0, h.Z)(t.url),
                    y = (0, _.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    k = (0, c.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), y({ to: l.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(d.Dr, {
                            className: (0, a.$)(f().root, r),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: f().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: f().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62661: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => o });
            var i = r(25839),
                a = r(82298),
                n = r(66738),
                s = r(28257),
                l = r.n(s);
            let o = (e) => {
                let { isDragging: t, className: r } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(l().root, { [l().root_active]: t }, r), 'aria-hidden': !0 });
            };
        },
        62926: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => g });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(74245),
                c = r(61493),
                u = r(49656),
                d = r(66738),
                m = r(27954),
                p = r(60924),
                _ = r(92870),
                h = r.n(_);
            let g = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: n, containerClassName: _, variant: g, size: v = 'xxxs', ...f } = e,
                    { formatMessage: x } = (0, l.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, m.g)(),
                    [A, k] = (0, s.useState)(null),
                    T = (0, u.L)(() => {
                        switch (g) {
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
                    b = (0, s.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, s.useEffect)(() => {
                    r && r().then(k);
                }, [r, n]);
                let C = (null == A ? void 0 : A.join('\n')) || '',
                    E = !!(null == A ? void 0 : A.length) && !y,
                    N = C.length > 0 ? C : b;
                return (0, i.jsx)(p.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(d.I, {
                            className: (0, a.$)(h().explicitMark, t),
                            'aria-label': N,
                            variant: T,
                            size: v,
                            ...f,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        64595: (e, t, r) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            r.d(t, { k: () => i });
        },
        64637: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
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
        71472: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        71705: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(25839),
                a = r(39004),
                n = r(71035),
                s = r(21468),
                l = r(91149),
                o = r(92942),
                c = r(27954),
                u = r(57549),
                d = r(33660),
                m = r(74631),
                p = r(31860),
                _ = r(93297);
            let h = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: g } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    f = (() => {
                        let { notify: e } = (0, o.l)(),
                            [t, r] = (0, m.useState)(!1),
                            { formatMessage: s } = (0, a.A)();
                        return (0, n.c)(async (a) => {
                            let { album: n, withLink: o = !0, withNotification: c = !0 } = a;
                            if (t) return;
                            let m = { ...(0, d.HO)(n), url: n.url, isLiked: !n.isLiked };
                            r(!0);
                            let h = await n.toggleLike();
                            (r(!1),
                                c &&
                                    (h === p.f.OK
                                        ? e((0, i.jsx)(_.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : e((0, i.jsx)(u.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: x } = (0, s.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? f({ album: e })
                              : void v((0, i.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(25839),
                a = r(74631),
                n = r(39004),
                s = r(61493),
                l = r(4071),
                o = r(66738),
                c = r(49984);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: g,
                            style: v,
                            children: f,
                        } = e,
                        { formatMessage: x } = (0, n.A)(),
                        y = x({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: p,
                        ref: g,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: d, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        73182: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var i = r(56829),
                a = r(35015);
            let n = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return a.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        74672: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        74756: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => D });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(8487),
                c = r(36619),
                u = r(61493),
                d = r(71035),
                m = r(66738),
                p = r(3392),
                _ = r(4254),
                h = r(17545),
                g = r(4071);
            let v = (e) => {
                let { className: t, variant: r = 'text', onClick: a, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: d } = e,
                    { formatMessage: p } = (0, l.A)(),
                    _ = null != d ? d : p({ id: 'play-queue.delete-from-queue' }),
                    h = (0, s.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, i.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: r,
                    size: c,
                    radius: 'round',
                    'aria-label': _,
                    onClick: h,
                    icon: (0, i.jsx)(m.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': u.OA.track.REMOVE_BUTTON,
                });
            };
            var f = r(79367),
                x = r(34159),
                y = r(68215),
                A = r(85743),
                k = r(27954),
                T = r(64720),
                b = r(71996),
                C = r(6304),
                E = r(38097),
                N = r(91907),
                I = r(3407),
                L = r(34826),
                S = r.n(L),
                j = r(82684),
                O = r(85957),
                w = r.n(O);
            let R = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: r } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': r({ id: 'offline.track-downloaded' }),
                              'data-test-id': u.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                D = (0, n.PA)((e) => {
                    var t, r;
                    let {
                            className: n,
                            track: g,
                            withLightning: L,
                            ignoreDislikedStyles: j,
                            onLikeClick: O,
                            utmLink: w,
                            withSecondaryColor: D,
                            handleRemove: P,
                            withTrailer: M = !0,
                            likeIconSize: z = 'xxs',
                            removeButtonAriaLabel: U,
                            hideControls: F,
                        } = e,
                        { user: B, trailer: W } = (0, k.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: K } = (0, A.z)(),
                        [Y, $] = (0, s.useState)(!1),
                        [G, V] = (0, s.useState)(!1),
                        X = (0, f.P)(),
                        J = (0, h.K)(g),
                        Z = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / E.k7);
                                      return (0, N.E)(t);
                                  })(e))(g.durationMs),
                        q = (0, y.P)(Math.round((null != (r = g.durationMs) ? r : 0) / 1e3)),
                        Q = (0, x.F)(),
                        ee = B.hasPlus,
                        et = !g.isRemoved && g.isAvailable && !F,
                        er = (0, d.c)(async () => {
                            (Y || g.isLiked || ($(!0), null == K || K()), await J(), null == O || O(g.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (W.openTrackTrailer(g.id), Q(c.DomainObjectType.Track, g.id));
                        }),
                        en = (0, s.useMemo)(() => {
                            if (et)
                                return (0, i.jsx)('div', {
                                    onClick: ei,
                                    children: (0, i.jsx)(I._, {
                                        track: g,
                                        open: G,
                                        onOpenChange: V,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: G }),
                                        handleRemove: P,
                                        withTrailer: M,
                                        'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, P, G, et, M, g, w]);
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, n, {
                            [S().controls_dislikedControls]: g.isDisliked,
                            [S().controls_dislikedColors]: g.isDisliked && !j,
                            [S().controls_disabled]: !g.isAvailable,
                            [S().root_withSecondaryColor]: D,
                        }),
                        children: [
                            L &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            g.isUGC &&
                                (0, i.jsxs)(p.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': u.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(p.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, i.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, i.jsx)(R, { track: g }) }),
                            P && !F && (0, i.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: P, ariaLabel: U }),
                            et &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(T.c, {
                                        size: 'xs',
                                        iconSize: z,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: g.isLiked,
                                        onClick: er,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = g.trailer) ? void 0 : t.isAvailable) &&
                                g.isAvailable &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(b.k, {
                                        className: (0, a.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== Z &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: G && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q,
                                            role: 'text',
                                            'data-test-id': u.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: Z }),
                                        }),
                                    en,
                                ],
                            }),
                        ],
                    });
                });
        },
        77174: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => n });
            var i = r(39004),
                a = r(56829);
            let n = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        78299: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => T });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(39004),
                o = r(8487);
            r(93588);
            var c = r(4071),
                u = r(66738),
                d = r(4254),
                m = r(67379),
                p = r(36619),
                _ = r(76945),
                h = r(59450),
                g = r(84e3),
                v = r(97952),
                f = r(89192),
                x = r(53712),
                y = r(15270),
                A = r(68854),
                k = r.n(A);
            let T = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    A = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, v.$)(),
                        a = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let n = (0, m.F)({
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
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, r, i, a]);
                })(A);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let a = (0, m.F)({
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
                                a && (0, _.bv)(e.evgenInstance, a);
                            }, [e, t, r, i]),
                        };
                    })(),
                    b = (0, s.useCallback)(() => {
                        (T(), (window.location.href = x.Z.main.href));
                    }, [T]),
                    { contentRef: C } = (0, f.g)();
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(k().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(y.L, { withBackwardFallback: '/', className: (0, a.$)(k().navigation, { [k().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(k().content, { [k().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(u.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(d.DZ, { className: (0, a.$)(k().title, k().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(d.HL, {
                                    className: (0, a.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: b,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(d.HL, {
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
        78773: (e, t, r) => {
            'use strict';
            r.d(t, { Xn: () => n, cy: () => a, pE: () => i });
            let i = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                a = 'yandex',
                n = 'ru-RU';
        },
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var i = r(74631),
                a = r(71035);
            let n = () => {
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
                    (0, a.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        80461: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        82967: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => f });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                l = r(61493),
                o = r(54880),
                c = r(50209),
                u = r(27954),
                d = r(6349),
                m = r(62661),
                p = r(74756),
                _ = r(41544),
                h = r(39099),
                g = r(7929),
                v = r.n(g);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: f,
                        isDragging: x,
                        draggingClassName: y,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: k,
                        handleRemove: T,
                        withDislike: b,
                        withTrailer: C = !0,
                        beforeTitle: E,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    } = e,
                    L = (0, c.D)({ playContextParams: n, entityId: r.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, u.g)(),
                    j = (0, o.X)(r.trackSource, { isMobile: S }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, i.jsx)(h.C, {
                    className: (0, a.$)(g, { [v().trackWithDots]: f, [v().important]: f }),
                    track: r,
                    beforeBlock: f ? (0, i.jsx)(m.O, { className: (0, a.$)(v().dots, y), isDragging: x }) : void 0,
                    meta: (0, i.jsx)(_.j, { withArtistLink: j, beforeTitle: E, track: r, ignoreDislikedStyles: A, withSecondaryColor: k }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(p.Q, {
                        track: r,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: T,
                        withDislike: b,
                        withTrailer: C,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    }),
                    ...L,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var i = r(36484),
                a = r(62562);
            let n = () => (0, a.N)().get(i.Zf);
        },
        85705: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { M: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(i || (i = {})));
        },
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86166: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        89221: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => u });
            var i = r(13580),
                a = r(74631),
                n = r(78773),
                s = r(28869),
                l = r(14514),
                o = r(55040);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        r = (0, l.k)(n.pE[n.cy], t),
                        a = await c(r);
                    return (e, t) => {
                        let n = null == a ? void 0 : a[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, r).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        90780: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(25839),
                a = r(74631),
                n = r(61493),
                s = r(4254),
                l = r(44408),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
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
        92870: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var i = r(25839),
                a = r(88204),
                n = r(3163),
                s = r(73182);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: r, withLink: a } = e,
                    l = (0, s.b)(t.type);
                return (0, i.jsx)(n.O, {
                    closeToast: r,
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
        95445: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            var i = r(25895);
            let a = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        u = {},
                        { href: d } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: r } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = r;
                    }
                    return { canonical: d, languages: u };
                };
        },
        97805: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => h });
            var i = r(25839),
                a = r(3718),
                n = r(82298),
                s = r(74631),
                l = r(39004),
                o = r(23976),
                c = r(47399),
                u = r.n(c);
            let d = (e) => {
                let { isActive: t, className: r } = e,
                    { formatMessage: a } = (0, l.A)(),
                    c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(u().root, r),
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: u().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: u().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: u().action, radius: 'l' }),
                    ],
                });
            };
            var m = r(64813),
                p = r.n(m);
            let _ = (e) => {
                    let { isActive: t, className: r } = e,
                        { formatMessage: a } = (0, l.A)(),
                        c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(p().root, r),
                        children: [
                            (0, i.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: p().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: r, className: n } = e;
                    switch (r) {
                        case a.X.PLAYLIST:
                            return (0, i.jsx)(_, { isActive: t, className: n });
                        case a.X.ALBUM:
                            return (0, i.jsx)(d, { isActive: t, className: n });
                    }
                };
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => C });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(39004),
                l = r(93588),
                o = r(43354),
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
            let u = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var m = r(10959),
                p = r(89514);
            let _ = (e) => e(new Date(), (0, p.m)());
            var h = r(96433),
                g = r(27954),
                v = r(400),
                f = r.n(v),
                x = r(61493),
                y = r(4254),
                A = r(97522);
            let k = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(A.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(A.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: f().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, i.jsx)(A.N, { target: '_blank', href: a, className: f().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(T, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(k, { data: r.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, g.g)(),
                    { formatDate: a, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = d({ formatMessage: n, language: l, tld: r.tld, year: _(a) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let C = (0, n.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: n, location: p, user: v } = (0, g.g)(),
                    { formatDate: x, formatMessage: y } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: a, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, a) },
                                    p = [s, o, d];
                                return (r && 'ru' === n && p.push(l), p.push(m), p);
                            })({ formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: r, language: a, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: p.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(x),
                    });
                return (0, i.jsx)(b, { className: (0, a.$)({ [f().root_withOffsetForDeeplink]: A }, r), data: T });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 6749, 7339, 6287, 3472, 2121, 1107, 7349, 3146, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4245, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 2533, 4475, 5056, 7358,
            ],
            () => e((e.s = 60402)),
        ),
            (_N_E = e.O()));
    },
]);
