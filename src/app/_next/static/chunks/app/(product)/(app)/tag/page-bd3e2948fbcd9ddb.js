(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
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
            i.d(t, { A: () => g });
            var r = i(25839),
                l = i(33660),
                a = i(74631),
                n = i(39004),
                s = i(91149),
                o = i(92942),
                c = i(27954),
                u = i(57549),
                d = i(27892);
            let g = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: g } = (0, n.A)(),
                    [m, _] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let a = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let n = await e.togglePin();
                    (_(!1),
                        n
                            ? i((0, r.jsx)(d.l, { playlist: a }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [t.isAuthorized, m, e, i, g]);
            };
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => _ });
            var r = i(25839),
                l = i(82298),
                a = i(74631),
                n = i(39004),
                s = i(8487),
                o = i(4071),
                c = i(66738),
                u = i(4254),
                d = i(51790),
                g = i(12558),
                m = i.n(g);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    g = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let p = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, r.jsx)(u.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: g,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, r.jsx)(d.$, { className: (0, l.$)(m().root, m().important), message: p, closeToast: i });
            };
        },
        4331: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => H });
            var r = i(25839),
                l = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(49656),
                o = i(3392),
                c = i(19410),
                u = i(71035),
                d = i(27954),
                g = i(39528);
            let m = (e, t) => {
                let { withLink: i, separator: r } = t,
                    l = i && !e.various ? (0, g.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: l };
            };
            var _ = i(94484),
                p = i.n(_),
                h = i(61493),
                v = i(4254),
                y = i(97522),
                E = i(39004),
                S = i(36619),
                C = i(29481),
                f = i(85686),
                T = i(85743),
                L = i(40207);
            let x = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: g,
                            link: m,
                            title: _,
                            ariaLabel: p,
                            tooltipText: x,
                            isTooltipEnabled: P,
                            handleNavigate: A,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: l, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, E.A)(),
                                {
                                    track: s,
                                    settings: { isMobile: o },
                                } = (0, d.g)(),
                                c = (0, f.Z)(null != (i = null == (t = r.link) ? void 0 : t.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: g } = (0, T.z)(),
                                m = (0, C.N)(),
                                _ = (0, u.c)((e) => {
                                    (o && s.isOpened && s.close(), c(e));
                                }),
                                p = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: l, fullscreenVideoPlayer: a } = (0, d.g)(),
                                        { modal: n } = r;
                                    return (0, L.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: _ }),
                                h = (0, u.c)((e) => {
                                    (m({ to: S.AppScreen.ArtistScreen }), null == g || g(), p(e));
                                }),
                                v = l || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: a ? void 0 : v,
                                ariaLabel: r.link ? n({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: v,
                                isTooltipEnabled: !l && a,
                                handleNavigate: h,
                            };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return m
                        ? (0, r.jsx)(y.N, {
                              ...m,
                              'aria-label': p,
                              className: i,
                              onClick: A,
                              title: _,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: P,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: x,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: g }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: P,
                              offsetOptions: 4,
                              placement: 'top',
                              text: x,
                              hoverSettings: c,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: _,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: g,
                              }),
                          });
                }),
                P = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: a, allArtistsTitle: s, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(x, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: s,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(x, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: a,
                                                allArtistsTitle: s,
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
            var A = i(8487),
                R = i(9079);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(R.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(p().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var k = i(28631),
                I = i(89761),
                O = i(61912),
                b = i(36286),
                j = i.n(b);
            let w = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: l, children: t }),
                            (0, r.jsx)(o.ZI, { className: j().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: j().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, r.jsx)(w, { forwardRef: t, ...e }));
            var M = i(10820),
                K = i(93510),
                F = i.n(K);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, E.A)();
                    return (0, r.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(F().root, F().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                G = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, d.g)(),
                        g = (0, u.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, s.L)(() =>
                            (0, k.A)(() => {
                                g();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                g(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, g],
                        ),
                        (0, n.useEffect)(() => {
                            g();
                        }, [t, g]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(U, { artists: t, label: i }) : (0, r.jsx)(D, { artists: t, label: i })) : i;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: g,
                            captionClassName: _,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: y,
                            ...E
                        } = e,
                        S = ((e) => {
                            var t, i, r;
                            let { separator: l, visibleArtistsCount: a, withLink: s, withComposer: o, artistIdWithoutLink: c, withContextMenu: g } = e,
                                _ = null != (t = e.artists) ? t : [],
                                p = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (r = e.withCustomTooltip) || r,
                                v = (0, n.useRef)(null),
                                [y, E] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: S },
                                } = (0, d.g)(),
                                C = ((!S || 1 === _.length) && g) || !g,
                                f = ((e, t) => {
                                    var i, r, l;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        s = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(s),
                                        { visibleArtists: c, hiddenArtistsCount: u } = ((e, t) => {
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
                                                let { withLink: r, separator: l, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: r, separator: a ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: u,
                                    };
                                })(_, { separator: l, visibleArtistsCount: y ? void 0 : a, withComposer: o, withLink: !!C && s, artistIdWithoutLink: c }),
                                T = p ? f.allArtistsTitle : '',
                                L = (0, u.c)((e) => {
                                    (E(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: f.groups,
                                hiddenArtistsCount: f.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: h,
                                withContextMenu: g,
                                labelRef: v,
                                handleOnSpoilerClick: L,
                                isTooltipEnabled: !!T && h && !g && !S,
                                title: !T || h || g ? void 0 : T,
                            };
                        })(E),
                        C = (0, s.L)(() =>
                            S.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(y)
                                  ? y
                                  : (0, r.jsx)(N, { spoilerClassName: a, spoilerArtistsCount: S.hiddenArtistsCount, handleOnSpoilerClick: S.handleOnSpoilerClick }),
                        ),
                        f = (0, r.jsx)(o.m_, {
                            referenceRef: S.labelRef,
                            enabled: S.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(p().root, p()['root_variant_'.concat(v)], { [p().root_clamp]: i && i > 0, [p().ellipsis]: !i }, t),
                                title: S.title,
                                children: [
                                    S.groups.map((e) =>
                                        (0, r.jsx)(
                                            P,
                                            {
                                                group: e,
                                                linkClassName: g,
                                                captionClassName: _,
                                                captionSize: h,
                                                allArtistsTitle: S.allArtistsTitle,
                                                withCustomTooltip: S.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return S.withContextMenu ? (0, r.jsx)(G, { labelRef: S.labelRef, artists: S.artists, label: f }) : f;
                });
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(25839),
                l = i(82298),
                a = i(28631),
                n = i(74631);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: l, ...a } = e,
                        n = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        s = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: i, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(45300),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: n, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(u().scroller, { [u().scroller_withFooter]: a, [u().scroller_withHeader]: n, [u().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, n.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var m = i(10508),
                _ = i(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: a = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, p] = (0, n.useState)(null),
                        h = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), o.length > 0 && p(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, l, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && g && h(g);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, r.jsx)(_.sN, { ref: u, rangeChanged: h, totalCount: s, endReached: v, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: S,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: T,
                            alwaysShowScrollbar: L = !1,
                            testId: x,
                            isMobileLayout: P = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...R
                        } = e,
                        [N, k] = (0, n.useState)(!1),
                        I = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        O = (0, n.useMemo)(() => {
                            var e, t;
                            return P
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, E, P]),
                        b = C ? Math.min(C, f) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(u().root, { [u().root_scrolling]: N || L, [u().root_notScrolling]: !N && !L }, t),
                        'data-test-id': x,
                        children: [
                            P && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(p, {
                                overscan: h,
                                components: O,
                                listClassName: _,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: T,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: A,
                                ...R,
                            }),
                            P && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10024: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var r = i(28410),
                l = i(31851);
            let a = (e) => {
                let t = (0, l.n)(e);
                return (0, r.wg)(t);
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var r = i(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: a } = e;
                return 'ru' === a && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        11871: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
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
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(25839),
                l = i(82298),
                a = i(61493),
                n = i(23976),
                s = i(40828),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: g = !0,
                    linesCount: m = 3,
                    withSubcover: _,
                    radius: p = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, l.$)(o().root, i),
                    'data-test-id': a.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        _ && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, l.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: _ }), radius: p }),
                        g &&
                            (0, r.jsx)('div', {
                                className: (0, l.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: d }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, l.$)(o().title, { [o().title_withSubcover]: _ }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => a, TF: () => s, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var l in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                        return e;
                    }).apply(this, arguments);
            };
            function l(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var l = i[r].split('='),
                            a = l.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(l[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, i) {
                var a;
                document.cookie =
                    ((a = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                l('Expires', e.expires ? e.expires.toUTCString() : '') +
                                l('Domain', e.domain) +
                                l('Path', e.path) +
                                l('Secure', e.secure) +
                                l('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function s(e, t) {
                n(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        23218: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => c });
            var r = i(28410),
                l = i(31488),
                a = i(36159),
                n = i(82745),
                s = i(95897),
                o = i(57483);
            function c(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(a.G)), a.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(a.G)))),
                        }),
                        s.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === a.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === a.G.RESOLVE));
                            },
                            get isEmpty() {
                                var l;
                                return t.isSomePageResolved && !(null == (l = e.items) ? void 0 : l.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === a.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === a.G.REJECT;
                            },
                            get hasMorePages() {
                                var n;
                                return !!i && !(null == (n = e.pager) ? void 0 : n.lastPage);
                            },
                            get rejectedPagesCount() {
                                var s;
                                if (t.isInitialRequestRejected || !(null == (s = e.pageStates) ? void 0 : s.length)) return 0;
                                return e.pageStates.filter((e) => e === a.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, l) => {
                                let n;
                                if (([a.G.IDLE, a.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = l), i)) n = r + 1;
                                else {
                                    var s, o, c, u;
                                    n = Math.ceil(
                                        (null != (c = null == (s = e.pager) ? void 0 : s.total) ? c : 0) /
                                            (null != (u = null == (o = e.pager) ? void 0 : o.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(r + 1, n);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = l), l === a.G.REJECT && t.addLastRejectedPageToList(r));
                            },
                            setItems: (s, o) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = o;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === l.F.ERROR || !s || !d))
                                    return void t.setPageState(u, a.G.REJECT);
                                (e.pager
                                    ? i && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, a.G.RESOLVE),
                                    (e.pager.page = u),
                                    i
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, n.I)({ items: e.items, mappedRawItems: s, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, i, r;
                                for (let l = 0; l < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); l++)
                                    (null == (r = e.pageStates) ? void 0 : r[l]) === a.G.REJECT && (e.pageStates[l] = a.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, r, l;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? r : 0) > 5;)
                                    null == (l = e.lastRejectedPagesList) || l.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => a.G.IDLE);
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let r = Array.from({ length: t - i }, () => a.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = a.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        23456: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 68797));
        },
        23951: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            let r = (e) => {
                var t, i;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (i = e.average)
                          ? void 0
                          : i.color
                      : '';
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(25839);
            i(93588);
            var l = i(400),
                a = i.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: a().empty });
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(25839),
                l = i(35015),
                a = i(10546);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
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
            i.d(t, { P: () => a, g: () => n });
            var r = i(74631),
                l = i(36432);
            let a = (0, r.createContext)(null);
            function n() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        31851: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = (e) => ({ available: !!(null == e ? void 0 : e.available) });
        },
        33957: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            var r = i(28410),
                l = i(23951),
                a = i(10024);
            let n = (e) => {
                var t, i, n, s, o;
                e = e || {};
                let c = (0, a.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (s = e.available) || s,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (n = e.cover) || null == (i = n.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, l.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var r = i(25895);
            let l = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
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
            i.d(t, { r: () => a });
            var r = i(74631),
                l = i(39004);
            let a = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
            var pulseSyncPlaylistDownloadIcons = i(66738);
            i.d(t, { B: () => Z });
            var r = i(25839),
                l = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                o = i(36619),
                c = i(61493),
                u = i(22939),
                d = i(71035),
                g = i(49656),
                m = i(51246),
                _ = i(66738),
                p = i(86869),
                h = i(4254),
                v = i(4331),
                y = i(62948),
                E = i(1134),
                S = i(79367),
                C = i(29481),
                f = i(47009),
                T = i(34159),
                L = i(52512),
                x = i(30290),
                P = i(61561),
                A = i(85686),
                R = i(85743),
                N = i(50209),
                k = i(27954),
                I = i(74760),
                O = i(6323),
                b = i(64720),
                j = i(97522),
                w = i(41580),
                D = i(49438),
                M = i(71996),
                K = i(78437),
                F = i(41459),
                U = i(10820),
                G = i(3210),
                H = i(11609),
                B = i(29872),
                W = i(56120),
                z = i(83014),
                Y = i(44806),
                V = i(16386),
                X = i(67303),
                $ = i(59043);
            let q = (0, a.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: a, ...n } = e,
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: g } = (0, B.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: _ },
                        trailer: p,
                        user: h,
                    } = (0, k.g)(),
                    v = (0, y.K)(i),
                    C = (0, E.A)(i),
                    f = (0, T.F)(),
                    { formatMessage: L } = (0, s.A)(),
                    x = (0, S.P)(),
                    P = m.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    A = (0, G.A)({ entityVariant: z.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, W.N)(a);
                let R = (0, d.c)(() => {
                    if (u) return void g();
                    x() || (p.openPlaylistTrailer(i.id), f(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: a,
                    offsetOptions: 10,
                    isMobile: _,
                    ariaLabel: L({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    children: [
                        P && (0, r.jsx)(H.d, { entityVariant: z.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !_ && (0, r.jsx)(X.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(U.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: R, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(15787),
                Q = i.n(J);
            let Z = (0, a.PA)((e) => {
                let { className: t, playlist: i, children: a, contentLinesCount: U, customDescription: G, onCoverMouseDown: H } = e,
                    { ref: B, intersectionPropertyId: W } = (0, L.n)(),
                    {
                        trailer: z,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, k.g)(),
                    { from: X, utmLink: $ } = (0, x.f)({ contextId: i.uuid, contextType: u.K.Playlist }),
                    { formatMessage: J } = (0, s.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, R.z)(),
                    [ei, er] = (0, n.useState)(!1),
                    [el, ea] = (0, n.useState)(!1),
                    [en, es] = (0, n.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, y.K)(i),
                    eu = (0, E.A)(i),
                    ed = (0, C.N)(),
                    eg = (0, f.b)(),
                    em = (0, A.Z)(i.url),
                    e_ = (0, T.F)(),
                    ep = (0, S.P)(),
                    eh = (0, d.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (z.setUtmLink($), z.openPlaylistTrailer(i.id), e_(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, ey] = (0, n.useState)(!1),
                    { isPlaying: eE, togglePlay: eS } = (0, N.D)({
                        playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eC = (0, d.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    ef = (0, d.c)((e) => {
                        (eC(), em(e));
                    }),
                    eT = (0, P.N)(),
                    eL = (0, d.c)(() => {
                        if (!ep()) {
                            if (eT) return void V.open();
                            (ei || eE || (er(!0), null == et || et()), eS(), eg(!eE));
                        }
                    }),
                    ex = (0, d.c)(() => {
                        (el || i.isLiked || (ea(!0), null == Z || Z()), ec());
                    }),
                    eP = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, d.c)((e) => {
                        (es(e), ey(e));
                    }),
                    eR = (0, n.useMemo)(() => {
                        var e;
                        return G
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: G }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [G, i]),
                    eN = (0, g.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                b.c,
                                {
                                    className: (0, l.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ex,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !Y.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ek = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                K.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eI = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: eu, isPinned: i.isPinned, className: (0, l.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [eu, i],
                    ),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ef,
                                    onMouseDown: H,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: en || ev,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eL,
                                                    isPlaying: eE,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eN,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: en,
                                                    onClick: eP,
                                                    className: (0, l.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eI,
                                            trailerControl: ek,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, H, i, eo, en, ev, eL, eE, eN, eA, eP, eI, ek],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, l.$)(Q().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(j.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(j.N, { className: Q().srTitleLink, href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': W,
                    contentLinesCount: U,
                    view: eO,
                    description: eR,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, r.jsx)(I.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        a,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(25839),
                l = i(35015),
                a = i(3163);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(a.O, {
                    entityVariant: l.c.PLAYLIST,
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
            i.d(t, { H: () => l, P: () => a });
            var r = i(74631);
            let l = (0, r.createContext)(null),
                a = () => (0, r.useContext)(l);
        },
        43357: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => l });
            var r = i(98436);
            let l = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(r._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
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
        51751: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => l });
            var r = i(28410);
            let l = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, r._$)(e);
                return i || t;
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53469: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(28410),
                l = i(93690),
                a = i(11871),
                n = i(31860),
                s = i(51751),
                o = i(31488),
                c = i(25895),
                u = i(86656),
                d = i(98181),
                g = i(86064),
                m = i(99725),
                _ = i(65596),
                p = i(43357),
                h = i(82401);
            let v = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(u.a),
                    }),
                    d.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === h.j.LIKE || e.kind === h.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === h.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === a.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, s.M)(e);
                        return t.isPlaylistLiked((0, _.m)(e));
                    },
                    get pinId() {
                        return (0, p.f)(e);
                    },
                    get id() {
                        return (0, _.m)(e);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, s.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, s.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, s.M)(e);
                        if (i.isAuthorized) {
                            let l = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && l === n.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), l);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, s.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return g.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                        try {
                            var n, s;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (n = e.revision) ? n : 0, playlistKind: e.kind });
                            return ((e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), g.Y.OK);
                        } catch (e) {
                            if ((a.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === l.X1.PRECONDITION_FAILED)) return g.Y.RELOAD;
                            return g.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: l } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return o.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let l = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == l ? void 0 : l.title)) return ((e.title = r), o.F.ERROR);
                                return ((e.title = l.title), o.F.OK);
                            } catch (t) {
                                ((e.title = r), l.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, s.M)(e),
                            { usersResource: i, modelActionsLogger: l } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            l.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: l } = (0, r._$)(e),
                            { user: n } = (0, s.M)(e),
                            c = e.visibility,
                            u = e.isPublic ? a.L.PRIVATE : a.L.PUBLIC;
                        t && (u = t);
                        try {
                            return (
                                (e.visibility = u),
                                e.isOwnFavouritePlaylist
                                    ? yield n.setSettings({ userMusicVisibility: u })
                                    : yield i.togglePlaylistVisibility({ visibility: u, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            l.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    downloadToFile: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { usersResource: i, modelActionsLogger: t } = (0, r._$)(e);
                        try {
                            let { tracks: r = [] } = yield i.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                n = r.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            n.length && window.desktopEvents?.send?.('DOWNLOAD_TRACKS', n, 'playlist', e.title || '');
                        } catch (e) {
                            t.error(e);
                        }
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var r = i(25895);
            let l = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        57483: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var r = i(28410);
            let l = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var r = i(25839),
                l = i(74631),
                a = i(71035),
                n = i(1466),
                s = i(91149),
                o = i(92942),
                c = i(36159);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, l.useRef)(void 0),
                    g = (0, a.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, r.jsx)(n.L, { reloadBlocks: g }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [u, g, i, e.rejectedPagesCount]);
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var r = i(27954),
                l = i(44806);
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
                    (null == (t = n.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => E });
            var r = i(25839),
                l = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(36619),
                o = i(61493),
                c = i(71035),
                u = i(23818),
                d = i(10820),
                g = i(86869),
                m = i(4254),
                _ = i(29481),
                p = i(85686),
                h = i(27954),
                v = i(53454),
                y = i.n(v);
            let E = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, h.g)(),
                    v = (0, p.Z)(t.url),
                    S = (0, _.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(E, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    f = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), S({ to: s.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, l.$)(y().root, i),
                            onClick: f,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(g.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(25839),
                l = i(33660),
                a = i(74631),
                n = i(39004),
                s = i(31860),
                o = i(91149),
                c = i(92942),
                u = i(27954),
                d = i(57549),
                g = i(42190);
            let m = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, _] = (0, a.useState)(!1),
                    { formatMessage: p } = (0, n.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let a = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === s.f.OK
                            ? i((0, r.jsx)(g.T, { playlist: a }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, p, i]);
            };
        },
        65596: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        67311: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => a, si: () => s, fW: () => g, MJ: () => d, jU: () => _, Bx: () => m });
            var r = i(22413);
            function l(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let n = (0, r.Jt)(e);
                        if (t) {
                            var i, a;
                            return null != (a = null == (i = l(n)) ? void 0 : i.value) ? a : null;
                        }
                        return null != n ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let a = l ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, a, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function n(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = n('localStorage');
                    if (!i) return null;
                    try {
                        var r;
                        let a = i.getItem(e) || void 0;
                        if (!t) return a;
                        let n = l(a);
                        if (!n) return null;
                        let s = null != (r = null == n ? void 0 : n.value) ? r : null;
                        if ((null == n ? void 0 : n.expires) && Date.now() > new Date(n.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e));
                    }
                    let r = n('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = i(58025),
                c = i(36432);
            class u extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = n('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, r, a;
                        let n = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (a = null == (i = l(n)) ? void 0 : i.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = n('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(i);
                        null != l && e.set(i, l, r);
                    });
            }
            function _(e) {
                let { name: t, group: i, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: i, value: { ...r, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: r } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        68797: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => B }));
            var r = i(25839),
                l = i(84059),
                a = i(74631),
                n = i(80499),
                s = i(82706),
                o = i(28410),
                c = i(93690),
                u = i(33957),
                d = i(53469),
                g = i(31488),
                m = i(36159),
                _ = i(23218);
            let p = o.gK
                    .model('TagPage', {
                        title: o.gK.maybe(o.gK.string),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        tagLoadingState: o.gK.enumeration(Object.values(m.G)),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, _.I)(d.$),
                    })
                    .views((e) => {
                        let t = {
                            get isNeededToLoad() {
                                return e.tagLoadingState === m.G.IDLE;
                            },
                            get isResolved() {
                                return e.tagLoadingState === m.G.RESOLVE;
                            },
                            get isNotFound() {
                                let t = e.pagesLoader.isEmpty;
                                return (e.tagLoadingState === m.G.REJECT && (e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST)) || t;
                            },
                            get isSomethingWrong() {
                                return e.tagLoadingState === m.G.REJECT && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected && e.tagLoadingState !== m.G.REJECT;
                            },
                            get totalCount() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.pager) ? void 0 : i.total) ? r : 0;
                            },
                            get playlists() {
                                var l;
                                return null != (l = e.pagesLoader.items) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, o.L3)(function* (t) {
                                let { page: i = 0, pageSize: r = 20 } = t,
                                    { playlistsResource: l, modelActionsLogger: a } = (0, o._$)(e);
                                if (e.tagLoadingState === m.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(i))
                                    try {
                                        e.pagesLoader.setPageState(i, m.G.PENDING);
                                        let t = i * r,
                                            a = e.playlistsData.slice(t, t + r),
                                            n = yield l.getPlaylists({ playlistIds: a.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            s = { page: i, perPage: r, total: e.playlistsData.length },
                                            o = n.playlists.map(u.j);
                                        e.pagesLoader.setItems(o, { page: i, pager: s });
                                    } catch (t) {
                                        (a.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: g.F.ERROR, page: i }),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(),
                                    (e.tagLoadingState = m.G.IDLE),
                                    (e.title = void 0),
                                    (e.playlistsData = (0, o.wg)([])),
                                    (e.errorStatusCode = null));
                            },
                            getTag: (0, o.L3)(function* (i) {
                                let { id: r, page: l = 0, pageSize: a = 20 } = i,
                                    { tagResource: n, modelActionsLogger: s } = (0, o._$)(e);
                                if (e.tagLoadingState !== m.G.PENDING)
                                    try {
                                        var u;
                                        e.tagLoadingState = m.G.PENDING;
                                        let i = yield n.getPlaylistIds({ id: r });
                                        ((e.title = null == (u = i.tag) ? void 0 : u.name),
                                            (e.playlistsData = (0, o.wg)(i.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.tagLoadingState !== m.G.IDLE && (e.tagLoadingState = m.G.RESOLVE),
                                            yield t.getPlaylists({ page: l, pageSize: a }));
                                    } catch (t) {
                                        (s.error(t),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND),
                                            e.tagLoadingState !== m.G.IDLE && (e.tagLoadingState = m.G.REJECT));
                                    }
                            }),
                        };
                        return t;
                    }),
                h = { tagLoadingState: m.G.IDLE, playlistsData: [], pagesLoader: {} },
                { pageStoreProvider: v } = (0, n.W)({ createStore: (e) => p.create(h, e), patchKey: s.n.TAG });
            var y = i(82298),
                E = i(88204),
                S = i(39004),
                C = i(49656),
                f = i(23976),
                T = i(4254),
                L = i(78299),
                x = i(1407),
                P = i(41707),
                A = i(20258),
                R = i(10322),
                N = i(21784),
                k = i(89192),
                I = i(30716),
                O = i(27954),
                b = i(60678),
                j = i(99401),
                w = i(26076),
                D = i(10603),
                M = i(19412),
                K = i(6968),
                F = i(93548),
                U = i.n(F);
            let G = (0, E.PA)((e) => {
                    var t;
                    let { tagId: i } = e,
                        o = (0, n.s)(s.n.TAG),
                        {
                            settings: { isMobile: c },
                        } = (0, O.g)(),
                        { formatMessage: u } = (0, S.A)(),
                        { contentScrollRef: d, setContentScrollRef: g } = (0, k.g)(),
                        m = (0, N.W)();
                    i || (0, l.notFound)();
                    let _ = (0, a.useCallback)(
                        (e) => {
                            o.getPlaylists({ page: e, pageSize: 20 });
                        },
                        [o],
                    );
                    o.isNotFound && (0, l.notFound)();
                    let p = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(w.A, { children: (0, r.jsx)(j.w, { className: U().footer }) }) }), []);
                    ((0, I.J)(o.isResolved), (0, b.X)(o.pagesLoader, _));
                    let h = (0, C.L)(() =>
                        o.isShimmerVisible
                            ? (0, r.jsx)(f.W, { className: U().shimmerTitle, radius: 'l' })
                            : (0, r.jsx)(T.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.title }),
                    );
                    if ((o.isNeededToLoad && (0, a.use)(o.getTag({ id: i, page: 0, pageSize: 20 })), o.isSomethingWrong)) return (0, r.jsx)(L.SomethingWentWrong, {});
                    let v = o.isShimmerVisible ? 20 : o.totalCount;
                    return (0, r.jsx)(R.n, {
                        pageId: A._Q.TAG,
                        children: (0, r.jsx)(x.h, {
                            scrollElement: d,
                            outerTitle: o.title,
                            children: (0, r.jsxs)('div', {
                                className: U().root,
                                children: [
                                    (0, r.jsx)(D.Y, { variant: D.V.TEXT, withForwardControl: !1, withBackwardControl: m.canBack, children: h }),
                                    (0, r.jsx)(K.$, {
                                        className: (0, y.$)(U().scrollContainer, U().important),
                                        customComponents: p,
                                        itemContentCallback: (e) => {
                                            let t = o.playlists[e],
                                                i = u({ id: 'loading-messages.entity-is-loading' }, { entityName: u({ id: 'entity-names.playlist' }) });
                                            return !t || o.isShimmerVisible
                                                ? (0, r.jsx)(M.V, { isActive: !0, 'aria-label': i })
                                                : (0, r.jsx)(P.B, { playlist: t, contentLinesCount: 3 }, t.key);
                                        },
                                        totalCount: v,
                                        initialItemCount: v,
                                        onGetDataByPage: _,
                                        pageSize: 20,
                                        totalRequests: null != (t = null == o ? void 0 : o.pagesLoader.requestsCount) ? t : 0,
                                        listClassName: U().content,
                                        itemClassName: U().item,
                                        handleRef: g,
                                        context: { listAriaLabel: u({ id: 'mixes.albums-list' }, { genreName: o.title || '' }) },
                                        isMobileLayout: c,
                                        useWindowScroll: c,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                H = () => {
                    let e = (0, N.W)(),
                        { formatMessage: t } = (0, S.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) }),
                        l = Array.from({ length: 20 }, (e, t) => {
                            let l = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, r.jsx)('div', { className: U().item, children: (0, r.jsx)(M.V, { isActive: !0, 'aria-label': i }) }, l);
                        });
                    return (0, r.jsx)(x.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: U().root,
                            children: [
                                (0, r.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(f.W, { className: U().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', { className: U().content, children: l }),
                            ],
                        }),
                    });
                },
                B = () => {
                    let e = (0, l.useSearchParams)().get('tagId');
                    return (
                        e || (0, l.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(H, {}), children: (0, r.jsx)(G, { tagId: e }) }) })
                    );
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
            i.d(t, { k: () => d });
            var r = i(25839),
                l = i(74631),
                a = i(39004),
                n = i(61493),
                s = i(4071),
                o = i(66738),
                c = i(49984);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: l,
                            radius: u,
                            iconSize: d,
                            disabled: g,
                            onClick: m,
                            iconClassName: _,
                            className: p,
                            forwardRef: h,
                            style: v,
                            children: y,
                        } = e,
                        { formatMessage: E } = (0, a.A)(),
                        S = E({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: u,
                        size: l,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': S,
                        onClick: m,
                        ref: h,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: d, className: _ }),
                        disabled: g,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                d = (0, l.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        74760: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => g });
            var r = i(25839),
                l = i(82298),
                a = i(39004),
                n = i(61493),
                s = i(4071),
                o = i(66738),
                c = i(4254),
                u = i(69292),
                d = i.n(u);
            let g = (e) => {
                let { className: t, isLiked: i, likesCount: u, handleLikeClick: g, ariaLabel: m } = e,
                    { formatNumber: _ } = (0, a.A)();
                return (0, r.jsx)(s.$, {
                    className: (0, l.$)(d().root, t),
                    onClick: g,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(u) }),
                });
            };
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = l), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class l extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, l.prototype));
                }
            }
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
            i.d(t, { SomethingWentWrong: () => T });
            var r = i(25839),
                l = i(82298),
                a = i(88204),
                n = i(74631),
                s = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                u = i(66738),
                d = i(4254),
                g = i(67379),
                m = i(36619),
                _ = i(76945),
                p = i(59450),
                h = i(84e3),
                v = i(97952),
                y = i(89192),
                E = i(53712),
                S = i(15270),
                C = i(68854),
                f = i.n(C);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, s.A)(),
                    C = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: r } = (0, v.$)(),
                        l = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let a = (0, g.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, i, r, l]);
                })(C);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let l = (0, g.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, _.bv)(e.evgenInstance, l);
                            }, [e, t, i, r]),
                        };
                    })(),
                    L = (0, n.useCallback)(() => {
                        (T(), (window.location.href = E.Z.main.href));
                    }, [T]),
                    { contentRef: x } = (0, y.g)();
                return (0, r.jsxs)('div', {
                    className: (0, l.$)(f().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(S.L, { withBackwardFallback: '/', className: (0, l.$)(f().navigation, { [f().navigation_desktop]: !x }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, l.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(u.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(d.DZ, { className: (0, l.$)(f().title, f().important), variant: 'h3', size: 'xs', children: C }),
                                (0, r.jsxs)(d.HL, {
                                    className: (0, l.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: L,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(d.HL, {
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
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                l = i(39004),
                a = i(3392);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, l.A)();
                return (0, r.jsx)(a.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        80499: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => v });
            var r = i(25839),
                l = i(88204),
                a = i(84059),
                n = i(74631),
                s = i(89288),
                o = i(36432),
                c = i(94421),
                u = i(99989),
                d = i(27954),
                g = i(83382);
            (0, l.eO)(!1);
            let m = (0, n.createContext)(null),
                _ = (e) => {
                    let { children: t, store: i, storeKey: l } = e,
                        a = (0, n.useMemo)(() => ({ store: i, storeKey: l }), [i, l]);
                    return (0, r.jsx)(m.Provider, { value: a, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: l } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        l = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: n } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: m, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: n, patchKey: i, patchesRef: h }), (0, r.jsx)(_, { store: m, storeKey: i, children: a })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, n.useContext)(m);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        82401: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        82706: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        82745: (e, t, i) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: i, page: r, pageSize: l } = e,
                    a = r * l,
                    n = 0;
                for (let e = a; e < a + l; e++) (i[n] && (t[e] = i[n]), n++);
            }
            i.d(t, { I: () => r });
        },
        83382: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => s });
            var r = i(67311),
                l = i(36484),
                a = i(62562),
                n = i(84e3);
            let s = () => {
                let e = (0, a.N)(),
                    t = e.get(l.oo),
                    i = e.get(l.uM),
                    s = e.get(l.ff),
                    o = e.get(l.V4),
                    c = e.get(l.P0),
                    u = (() => {
                        let e = (0, a.N)(),
                            t = e.get(l.$I),
                            i = e.get(l.EN),
                            r = e.get(l.N1),
                            n = e.get(l._1),
                            s = e.get(l.V3),
                            o = e.get(l.Lb),
                            c = e.get(l.wK),
                            u = e.get(l.tz),
                            d = e.get(l.$8),
                            g = e.get(l.Oo),
                            m = e.get(l.X4),
                            _ = e.get(l.O9),
                            p = e.get(l.E),
                            h = e.get(l.wH),
                            v = e.get(l.ok),
                            y = e.get(l.X8),
                            E = e.get(l.yq),
                            S = e.get(l.NN),
                            C = e.get(l.qN),
                            f = e.get(l.ro),
                            T = e.get(l.nM),
                            L = e.get(l.Ut),
                            x = e.get(l.K1),
                            P = e.get(l.eu),
                            A = e.get(l.aE),
                            R = e.get(l.ki),
                            N = e.get(l.c9),
                            k = e.get(l.en),
                            I = e.get(l.jQ),
                            O = e.get(l.cZ),
                            b = e.get(l.Zl),
                            j = e.get(l.CN),
                            w = e.get(l.P1),
                            D = e.get(l.zj),
                            M = e.get(l.re),
                            K = e.get(l.JM),
                            F = e.get(l.Lk),
                            U = e.get(l.$$),
                            G = e.get(l.sv),
                            H = e.get(l.gd),
                            B = e.get(l.Ez),
                            W = e.get(l.u2),
                            z = e.get(l.TD),
                            Y = e.get(l.dh),
                            V = e.get(l.LC),
                            X = e.get(l.PL),
                            $ = e.get(l.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: i,
                            disclaimersResource: r,
                            usersResource: n,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: m,
                            artistsResource: _,
                            slidesResource: p,
                            redAlertResource: h,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: E,
                            searchPlaylistResource: S,
                            playlistResource: C,
                            playlistsResource: f,
                            pinResource: T,
                            metatagsResource: L,
                            tagResource: x,
                            feedResource: P,
                            pinsResource: A,
                            musicHistoryResource: R,
                            dynamicPagesResource: N,
                            chartResource: k,
                            clipsResource: I,
                            lyricViewsResource: O,
                            nonMusicResource: b,
                            donationResource: j,
                            loaderResource: w,
                            lumenResource: D,
                            prefixlessResource: M,
                            streamsResource: K,
                            filtersResource: F,
                            ugcResource: U,
                            collectionResource: G,
                            adsResource: H,
                            personalResource: B,
                            familyResource: W,
                            childrenLandingResource: z,
                            promoResource: Y,
                            telemetryResource: V,
                            labelsResource: X,
                            concertsResource: $,
                            wordsResource: e.get(l.dA),
                            wheelResource: e.get(l.$Y),
                        };
                    })(),
                    d = (0, n.U)(),
                    g = (0, a.N)().get(l.TK),
                    m = e.get(l.ni),
                    _ = new r.si(),
                    p = new r.fW();
                return {
                    ...u,
                    acqOffers: i,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: _,
                    sessionStorage: p,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: m,
                };
            };
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var r = i(36484),
                l = i(62562);
            let a = () => (0, l.N)().get(r.Zf);
        },
        86064: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        86656: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => s });
            var r = i(28410),
                l = i(51751);
            let a = ['Safari', 'MobileSafari'],
                n = ['iOS', 'MacOS'],
                s = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, l.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && a.includes(e.name) && e.OSFamily && n.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => l }), i(77920));
            var r = i(76481);
            class l extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93548: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                shimmerTitle: 'TagPage_shimmerTitle__ge9m_',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => r.X, m5: () => l.m });
            var r = i(77920),
                l = i(76481),
                a = i(91626);
            i(95919);
        },
        94421: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95897: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => l });
            var r = i(28410);
            let l = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
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
        98181: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => l });
            var r = i(28410);
            let l = r.gK
                .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
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
            i.d(t, { w: () => x });
            var r = i(25839),
                l = i(82298),
                a = i(88204),
                n = i(39004),
                s = i(93588),
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
            let u = (e, t, i) => {
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
                d = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var g = i(10959),
                m = i(89514);
            let _ = (e) => e(new Date(), (0, m.m)());
            var p = i(96433),
                h = i(27954),
                v = i(400),
                y = i.n(v),
                E = i(61493),
                S = i(4254),
                C = i(97522);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: l, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, r.jsx)(T, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: l, formatMessage: a } = (0, n.A)(),
                    { language: s } = (0, p.h)(),
                    o = d({ formatMessage: a, language: s, tld: i.tld, year: _(l) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let x = (0, a.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: a, location: m, user: v } = (0, h.g)(),
                    { formatDate: E, formatMessage: S } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: l, tld: a, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: l, userRegion: a } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, r, l) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, r, l) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, r, l) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, r, l) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, r, l) },
                                    m = [n, o, d];
                                return (i && 'ru' === a && m.push(s), m.push(g), m);
                            })({ formatMessage: i, isWebApplication: r, language: l, tld: a, userRegion: n }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: i, language: l, tld: a, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: S,
                        isWebApplication: s.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(E),
                    });
                return (0, r.jsx)(L, { className: (0, l.$)({ [y().root_withOffsetForDeeplink]: C }, i), data: T });
            });
        },
        99725: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        99989: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var r = i(28410),
                l = i(74631);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: a } = e,
                    n = (0, l.useRef)([]),
                    [s] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, r.X6)(s, e);
                        };
                        return (e(), window.addEventListener(a, e), () => window.removeEventListener(a, e));
                    }, [i, a, s]),
                    { store: s, patchesRef: n }
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6287, 2121, 3472, 1107, 7349, 4075, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246,
                3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 4475, 5056, 7358,
            ],
            () => e((e.s = 23456)),
        ),
            (_N_E = e.O()));
    },
]);
