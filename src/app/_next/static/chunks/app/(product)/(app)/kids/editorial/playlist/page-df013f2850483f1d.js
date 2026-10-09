(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
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
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var l = i(25839),
                r = i(33660),
                s = i(74631),
                a = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, l.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, l.jsx)(u.l, { playlist: s }), { containerId: n.u.INFO })
                            : i((0, l.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var l = i(25839),
                r = i(82298),
                s = i(74631),
                a = i(39004),
                n = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                m = i(12558),
                _ = i.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, s.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(u.$, { className: (0, r.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => Y });
            var l = i(25839),
                r = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (e, t) => {
                let { withLink: i, separator: l } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: l, link: r };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                x = i(4254),
                y = i(97522),
                g = i(39004),
                C = i(36619),
                k = i(29481),
                f = i(85686),
                S = i(85743),
                A = i(40207);
            let N = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: s = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: E,
                            handleNavigate: L,
                        } = ((e) => {
                            var t, i;
                            let { item: l, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: a } = (0, g.A)(),
                                {
                                    track: n,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, f.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, S.z)(),
                                _ = (0, k.N)(),
                                p = (0, d.c)((e) => {
                                    (o && n.isOpened && n.close(), c(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: l, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: a } = l;
                                    return (0, A.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (l.reset(), a.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: p }),
                                v = (0, d.c)((e) => {
                                    (_({ to: C.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                }),
                                x = r || l.name;
                            return {
                                name: l.name,
                                link: l.link,
                                title: s ? void 0 : x,
                                ariaLabel: l.link ? a({ id: 'entity-names.artist-name' }, { artistName: l.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !r && s,
                                handleNavigate: v,
                            };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: n });
                    return _
                        ? (0, l.jsx)(y.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: L,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, l.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, l.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: s, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, l.jsx)(N, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: s,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, l.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, l.jsx)(N, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: s,
                                                allArtistsTitle: n,
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
            var L = i(8487),
                P = i(9079);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(P.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(L.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var T = i(28631),
                b = i(89761),
                R = i(61912),
                I = i(36286),
                O = i.n(I);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, l.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, b.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: r, children: t }),
                            (0, l.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, l.jsx)(R.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((e, t) => (0, l.jsx)(w, { forwardRef: t, ...e }));
            var F = i(10820),
                M = i(93510),
                z = i.n(M);
            let W = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, g.A)();
                    return (0, l.jsx)(F.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, l.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, T.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, a.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, l.jsx)(W, { artists: t, label: i }) : (0, l.jsx)(D, { artists: t, label: i })) : i;
                }),
                Y = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: y,
                            ...g
                        } = e,
                        C = ((e) => {
                            var t, i, l;
                            let { separator: r, visibleArtistsCount: s, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (l = e.withCustomTooltip) || l,
                                x = (0, a.useRef)(null),
                                [y, g] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                k = ((!C || 1 === p.length) && m) || !m,
                                f = ((e, t) => {
                                    var i, l, r;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        a = null == (l = null == t ? void 0 : t.withLink) || l,
                                        n = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: l } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => l || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: l, separator: r, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: l, separator: s ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: l, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: y ? void 0 : s, withComposer: o, withLink: !!k && n, artistIdWithoutLink: c }),
                                S = h ? f.allArtistsTitle : '',
                                A = (0, d.c)((e) => {
                                    (g(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: f.groups,
                                hiddenArtistsCount: f.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!S && v && !m && !C,
                                title: !S || v || m ? void 0 : S,
                            };
                        })(g),
                        k = (0, n.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(y)
                                  ? y
                                  : (0, l.jsx)(j, { spoilerClassName: s, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        f = (0, l.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, l.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    k,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, l.jsx)(H, { labelRef: C.labelRef, artists: C.artists, label: f }) : f;
                });
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var l = i(25839),
                r = i(82298),
                s = i(28631),
                a = i(74631);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: r, ...s } = e,
                        a = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: i, ...s });
                },
                o = (0, a.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: a, withForceScroll: n, ...o } = e;
                    return (0, l.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(10508),
                p = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: s = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, a.useState)(null),
                        v = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < l; e++) i(e);
                                    }
                                }, s),
                            [s, r, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: n, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: g,
                            debounceDurationInMs: C,
                            initialItemCount: k,
                            minInitialItemCount: f = 20,
                            handleRef: S,
                            alwaysShowScrollbar: A = !1,
                            testId: N,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...P
                        } = e,
                        [j, T] = (0, a.useState)(!1),
                        b = (0, a.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        R = (0, a.useMemo)(() => {
                            var e, t;
                            return E
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
                        }, [i, g, E]),
                        I = k ? Math.min(k, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: j || A, [d().root_notScrolling]: !j && !A }, t),
                        'data-test-id': N,
                        children: [
                            E && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(h, {
                                overscan: v,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: b,
                                itemContent: _,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: L,
                                ...P,
                            }),
                            E && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var l = i(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(l.z.WebNextFooterDisclaimer, 'on') ? i() : r();
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
        15787: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var l = i(25839),
                r = i(82298),
                s = i(61493),
                a = i(23976),
                n = i(40828),
                o = i.n(n);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, l.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(o().root, i),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, l.jsx)(a.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, l.jsx)(a.W, { isActive: t, className: (0, r.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        m &&
                            (0, l.jsx)('div', {
                                className: (0, r.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, l.jsx)(a.W, { isActive: t, className: (0, r.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var l = i(25839);
            i(93588);
            var r = i(400),
                s = i.n(r);
            let a = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: s().empty });
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var l = i(25839),
                r = i(35015),
                s = i(10546);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, l.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s, g: () => a });
            var l = i(74631),
                r = i(36432);
            let s = (0, l.createContext)(null);
            function a() {
                let e = (0, l.useContext)(s);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        37051: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var l = i(25895);
            let r = (e) => (0, l.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40828: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var l = i(74631),
                r = i(39004);
            let s = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let l = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(l, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var l = i(25839),
                r = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                p = i(66738),
                h = i(86869),
                v = i(4254),
                x = i(4331),
                y = i(62948),
                g = i(1134),
                C = i(79367),
                k = i(29481),
                f = i(47009),
                S = i(34159),
                A = i(52512),
                N = i(30290),
                E = i(61561),
                L = i(85686),
                P = i(85743),
                j = i(50209),
                T = i(27954),
                b = i(74760),
                R = i(6323),
                I = i(64720),
                O = i(97522),
                w = i(41580),
                D = i(49438),
                F = i(71996),
                M = i(78437),
                z = i(41459),
                W = i(10820),
                H = i(3210),
                Y = i(11609),
                B = i(29872),
                K = i(56120),
                $ = i(83014),
                V = i(44806),
                U = i(16386),
                X = i(67303),
                G = i(59043);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: s, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, B.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: h,
                        user: v,
                    } = (0, T.g)(),
                    x = (0, y.K)(i),
                    k = (0, g.A)(i),
                    f = (0, S.F)(),
                    { formatMessage: A } = (0, n.A)(),
                    N = (0, C.P)(),
                    E = _.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    L = (0, H.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(s);
                let P = (0, u.c)(() => {
                    if (d) return void m();
                    N() || (h.openPlaylistTrailer(i.id), f(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), r?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, l.jsxs)(W.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: s,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        E && (0, l.jsx)(Y.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : L }),
                        !p && (0, l.jsx)(X.L, { onClick: k, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(U.T, { onClick: x, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, l.jsx)(W.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, l.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, l.jsx)(G.N, { onClick: P, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(15787),
                Z = i.n(J);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: W, customDescription: H, onCoverMouseDown: Y } = e,
                    { ref: B, intersectionPropertyId: K } = (0, A.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: U },
                    } = (0, T.g)(),
                    { from: X, utmLink: G } = (0, N.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, P.z)(),
                    [ei, el] = (0, a.useState)(!1),
                    [er, es] = (0, a.useState)(!1),
                    [ea, en] = (0, a.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, y.K)(i),
                    ed = (0, g.A)(i),
                    eu = (0, k.N)(),
                    em = (0, f.b)(),
                    e_ = (0, L.Z)(i.url),
                    ep = (0, S.F)(),
                    eh = (0, C.P)(),
                    ev = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        ($.setUtmLink(G), $.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ey] = (0, a.useState)(!1),
                    { isPlaying: eg, togglePlay: eC } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ek = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    ef = (0, u.c)((e) => {
                        (ek(), e_(e));
                    }),
                    eS = (0, E.N)(),
                    eA = (0, u.c)(() => {
                        if (!eh()) {
                            if (eS) return void U.open();
                            (ei || eg || (el(!0), null == et || et()), eC(), em(!eg));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (er || i.isLiked || (es(!0), null == Q || Q()), ec());
                    }),
                    eE = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (en(e), ey(e));
                    }),
                    eP = (0, a.useMemo)(() => {
                        var e;
                        return H
                            ? (0, l.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, l.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    ej = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                I.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eN,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eT = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(
                                M.n,
                                {
                                    children: (0, l.jsx)(
                                        F.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ev },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ev, i]),
                    eb = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ef,
                                    onMouseDown: Y,
                                    children: [
                                        (0, l.jsx)(R.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(_.hg, {
                                            isVisible: ea || ex,
                                            className: Z().controls,
                                            playControl: (0, l.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eA,
                                                    isPlaying: eg,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, l.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eL,
                                                    open: ea,
                                                    onClick: eE,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, l.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eb,
                                            trailerControl: eT,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, Y, i, eo, ea, ex, eA, eg, ej, eL, eE, eb, eT],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(_.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, r.$)(Z().root, t),
                    title: (0, l.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { className: Z().srTitleLink, href: i.url, onClick: ek, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: W,
                    view: eR,
                    description: eP,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, l.jsx)(b.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var l = i(25839),
                r = i(35015),
                s = i(3163);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, l.jsx)(s.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var l = i(74631);
            let r = (0, l.createContext)(null),
                s = () => (0, l.useContext)(r);
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
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var l = i(25895);
            let r = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var l = i(25839),
                r = i(74631),
                s = i(71035),
                a = i(1466),
                n = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(a.L, { reloadBlocks: m }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var l = i(27954),
                r = i(44806);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: a,
                } = (0, l.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = a.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => g });
            var l = i(25839),
                r = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(36619),
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
                y = i.n(x);
            let g = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    k = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(g, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    f = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(u.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: f,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(m.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, l.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var l = i(25839),
                r = i(33660),
                s = i(74631),
                a = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, l.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === n.f.OK
                            ? i((0, l.jsx)(m.T, { playlist: s }), { containerId: o.u.INFO })
                            : i((0, l.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, _, e, h, i]);
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
        69292: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var l = i(25839),
                r = i(74631),
                s = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: y,
                        } = e,
                        { formatMessage: g } = (0, s.A)(),
                        C = g({ id: 'trailer.button-aria-label' });
                    return (0, l.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: v,
                        icon: (0, l.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
        },
        74760: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var l = i(25839),
                r = i(82298),
                s = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: p } = (0, s.A)();
                return (0, l.jsx)(n.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        77869: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => b }));
            var l = i(25839),
                r = i(84059),
                s = i(82298),
                a = i(88204),
                n = i(74631),
                o = i(39004),
                c = i(61493),
                d = i(71035),
                u = i(49656),
                m = i(4254),
                _ = i(78299),
                p = i(1407),
                h = i(41707),
                v = i(20258),
                x = i(10322),
                y = i(21784),
                g = i(89192),
                C = i(30716),
                k = i(27954),
                f = i(60678),
                S = i(99401),
                A = i(26076),
                N = i(10603),
                E = i(19412),
                L = i(6968),
                P = i(37051),
                j = i.n(P);
            let T = (0, a.PA)((e) => {
                    var t, i, a;
                    let { id: P } = e,
                        {
                            kids: { kidsEditorialPlaylistSubpage: T },
                            settings: { isMobile: b },
                        } = (0, k.g)(),
                        R = (0, y.W)(),
                        { contentScrollRef: I, setContentScrollRef: O } = (0, g.g)(),
                        { formatMessage: w } = (0, o.A)(),
                        D = (0, d.c)((e) => {
                            T.getPlaylists({ page: e, pageSize: 20 });
                        });
                    (T.isNotFound && (0, r.notFound)(),
                        (0, n.useEffect)(
                            () => () => {
                                T.reset();
                            },
                            [T],
                        ));
                    let F = (0, u.L)(() => ({ Footer: () => (0, l.jsx)(A.A, { children: (0, l.jsx)(S.w, { className: j().footer }) }) }));
                    if (
                        ((0, C.J)(T.isResolved),
                        (0, f.X)(T.pagesLoader, D),
                        T.isNeededToLoad && (0, n.use)(T.getData({ id: P, page: 0, pageSize: 20 })),
                        T.isSomethingWrong)
                    )
                        return (0, l.jsx)(_.SomethingWentWrong, {});
                    let M = T.isLoading ? 20 : null != (i = null == (t = T.pagesLoader.pager) ? void 0 : t.total) ? i : 0;
                    return (0, l.jsx)(x.n, {
                        pageId: v._Q.KIDS_EDITORIAL_PLAYLISTS,
                        children: (0, l.jsx)(p.h, {
                            scrollElement: I,
                            outerTitle: T.title,
                            children: (0, l.jsxs)('div', {
                                className: j().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_PLAYLISTS,
                                children: [
                                    (0, l.jsx)(N.Y, {
                                        variant: N.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: R.canBack,
                                        children: (0, l.jsx)(m.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: T.title }),
                                    }),
                                    (0, l.jsx)(L.$, {
                                        context: { listAriaLabel: w({ id: 'mixes.playlists-list' }, { genreName: T.title || '' }) },
                                        className: (0, s.$)(j().scrollContainer, j().important),
                                        customComponents: F,
                                        itemContentCallback: (e) => {
                                            let t = T.playlists[e],
                                                i = w({ id: 'loading-messages.entity-is-loading' }, { entityName: w({ id: 'entity-names.playlist' }) });
                                            return t ? (0, l.jsx)(h.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, l.jsx)(E.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: M,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (a = T.pagesLoader.requestsCount) ? a : 0,
                                        listClassName: j().content,
                                        itemClassName: j().item,
                                        handleRef: O,
                                        isMobileLayout: b,
                                        useWindowScroll: b,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                b = () => {
                    let e = (0, r.useSearchParams)().get('id');
                    return (e || (0, r.notFound)(), (0, l.jsx)(T, { id: e }));
                };
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => S });
            var l = i(25839),
                r = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(39004),
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
                y = i(89192),
                g = i(53712),
                C = i(15270),
                k = i(68854),
                f = i.n(k);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, n.A)(),
                    k = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: l } = (0, x.$)(),
                        r = (0, v.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !l) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: l,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, l, r]);
                })(k);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            l = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.F)({
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
                                    logger: l,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, i, l]),
                        };
                    })(),
                    A = (0, a.useCallback)(() => {
                        (S(), (window.location.href = g.Z.main.href));
                    }, [S]),
                    { contentRef: N } = (0, y.g)();
                return (0, l.jsxs)('div', {
                    className: (0, r.$)(f().root, t),
                    children: [
                        i &&
                            (0, l.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(f().navigation, { [f().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, r.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, l.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(u.DZ, { className: (0, r.$)(f().title, f().important), variant: 'h3', size: 'xs', children: k }),
                                (0, l.jsxs)(u.HL, {
                                    className: (0, r.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: A,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, l.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, l.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var l = i(25839),
                r = i(39004),
                s = i(3392);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, r.A)();
                return (0, l.jsx)(s.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var l = i(36484),
                r = i(62562);
            let s = () => (0, r.N)().get(l.Zf);
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
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
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var l = i(25839),
                r = i(82298),
                s = i(88204),
                a = i(39004),
                n = i(93588),
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
                    let { formatMessage: t, language: i, tld: l, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                y = i.n(x),
                g = i(61493),
                C = i(4254),
                k = i(97522);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(k.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(k.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, l.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: y().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, l.jsx)(k.N, { target: '_blank', href: r, className: y().link, 'data-test-id': g.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': g.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, l.jsx)(S, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, v.g)(),
                    { formatDate: r, formatMessage: s } = (0, a.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: s, language: n, tld: i.tld, year: p(r) });
                return (0, l.jsx)(f, { className: t, data: o });
            });
            let N = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: _, user: x } = (0, v.g)(),
                    { formatDate: g, formatMessage: C } = (0, a.A)(),
                    { isEnabled: k } = null != (t = (0, o.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: l, language: r, tld: s, userRegion: a, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: l, language: r, userRegion: s } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, r) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, r) },
                                    _ = [a, o, u];
                                return (i && 'ru' === s && _.push(n), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: l, language: r, tld: s, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: s, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: f,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(g),
                    });
                return (0, l.jsx)(A, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: k }, i), data: S });
            });
        },
        99490: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 77869));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6287, 2121, 3472, 1107, 7349, 9235, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246, 3482,
                6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 4475, 5056, 7358,
            ],
            () => e((e.s = 99490)),
        ),
            (_N_E = e.O()));
    },
]);
