(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
    {
        148: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        400: (t) => {
            t.exports = {
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
        1134: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => _ });
            var s = i(25839),
                r = i(33660),
                l = i(74631),
                n = i(39004),
                a = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let l = { ...(0, r.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let n = await t.togglePin();
                    (p(!1),
                        n
                            ? i((0, s.jsx)(u.l, { playlist: l }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [e.isAuthorized, m, t, i, _]);
            };
        },
        1466: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => p });
            var s = i(25839),
                r = i(82298),
                l = i(74631),
                n = i(39004),
                a = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let p = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    _ = (0, l.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var t;
                    null == (t = _.current) || t.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: e,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, e],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        2328: (t) => {
            t.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        4331: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => B });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(74631),
                a = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                _ = i(39528);
            let m = (t, e) => {
                let { withLink: i, separator: s } = e,
                    r = i && !t.various ? (0, _.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: r };
            };
            var p = i(94484),
                h = i.n(p),
                x = i(61493),
                v = i(4254),
                y = i(97522),
                g = i(39004),
                C = i(36619),
                E = i(29481),
                N = i(85686),
                A = i(85743),
                f = i(40207);
            let k = (0, l.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: r, captionSize: l = 'm', allArtistsTitle: n, withCustomTooltip: a, hoverSettings: c } = t,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: k,
                            isTooltipEnabled: S,
                            handleNavigate: T,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: l } = t,
                                { formatMessage: n } = (0, g.A)(),
                                {
                                    track: a,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, N.Z)(null != (i = null == (e = s.link) ? void 0 : e.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                m = (0, E.N)(),
                                p = (0, d.c)((t) => {
                                    (o && a.isOpened && a.close(), c(t));
                                }),
                                h = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, f.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), n.isOpened && (s.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: p }),
                                x = (0, d.c)((t) => {
                                    (m({ to: C.AppScreen.ArtistScreen }), null == _ || _(), h(t));
                                }),
                                v = r || s.name;
                            return {
                                name: s.name,
                                link: s.link,
                                title: l ? void 0 : v,
                                ariaLabel: s.link ? n({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                tooltipText: v,
                                isTooltipEnabled: !r && l,
                                handleNavigate: x,
                            };
                        })({ item: e, allArtistsTitle: n, withCustomTooltip: a });
                    return m
                        ? (0, s.jsx)(y.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: T,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: r, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                S = (t) => {
                    let { group: e, linkClassName: i, captionClassName: r, captionSize: l, allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(k, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: l,
                                allArtistsTitle: a,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(k, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: l,
                                                allArtistsTitle: a,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    t.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var T = i(8487),
                j = i(9079);
            let P = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: l } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var L = i(28631),
                b = i(89761),
                O = i(61912),
                R = i(36286),
                I = i.n(R);
            let w = (0, l.PA)((t) => {
                    let { label: e, artists: i, forwardRef: r } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, b.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: e }),
                            (0, s.jsx)(o.ZI, { className: I().tooltipContent, children: i.map((t) => (0, s.jsx)(O.V, { artist: t, className: I().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((t, e) => (0, s.jsx)(w, { forwardRef: e, ...t }));
            var z = i(10820),
                F = i(93510),
                M = i.n(F);
            let H = (0, l.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: l } = (0, g.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, r.$)(M().root, M().important),
                        label: e,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(O.V, { artist: t }, t.id)),
                    });
                }),
                W = (0, l.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: r } = t,
                        [l, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let t = r.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        m = (0, a.L)(() =>
                            (0, L.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [e, _]),
                        0 !== e.length)
                    )
                        return (l || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(H, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                B = (0, l.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: l,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: y,
                            ...g
                        } = t,
                        C = ((t) => {
                            var e, i, s;
                            let { separator: r, visibleArtistsCount: l, withLink: a, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (s = t.withCustomTooltip) || s,
                                v = (0, n.useRef)(null),
                                [y, g] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                E = ((!C || 1 === p.length) && _) || !_,
                                N = ((t, e) => {
                                    var i, s, r;
                                    let l = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        n = null == (s = null == e ? void 0 : e.withLink) || s,
                                        a = null != (r = null == e ? void 0 : e.separator) ? r : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(a),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: l, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: r, isFirst: l } = e;
                                                return {
                                                    primary: m(t, { withLink: s, separator: l ? void 0 : r }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = r ? t.separator : '';
                                                        return m(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: n && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: a, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: y ? void 0 : l, withComposer: o, withLink: !!E && a, artistIdWithoutLink: c }),
                                A = h ? N.allArtistsTitle : '',
                                f = (0, d.c)((t) => {
                                    (g(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: v,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!A && x && !_ && !C,
                                title: !A || x || _ ? void 0 : A,
                            };
                        })(g),
                        E = (0, a.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(y)
                                  ? y
                                  : (0, s.jsx)(P, { spoilerClassName: l, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        N = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: C.title,
                                children: [
                                    C.groups.map((t) =>
                                        (0, s.jsx)(
                                            S,
                                            {
                                                group: t,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    E,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(W, { labelRef: C.labelRef, artists: C.artists, label: N }) : N;
                });
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(25839),
                r = i(82298),
                l = i(28631),
                n = i(74631);
            let a = (t) => {
                    let { style: e, forwardRef: i, context: r, ...l } = t,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': n, style: { ...e }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((t, e) => (0, s.jsx)(a, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: l, withHeader: n, withForceScroll: a, ...o } = t;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: a }),
                        style: { ...e },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var m = i(10508),
                p = i(63257);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: l = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [_, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == r || r(t), o.length > 0 && h(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            r = Math.floor(t.startIndex / e);
                                        for (let t = r; t < s; t++) i(t);
                                    }
                                }, l),
                            [l, r, e, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, l);
                    }, [c, l]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: a, endReached: v, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: g,
                            debounceDurationInMs: C,
                            initialItemCount: E,
                            minInitialItemCount: N = 20,
                            handleRef: A,
                            alwaysShowScrollbar: f = !1,
                            testId: k,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...j
                        } = t,
                        [P, L] = (0, n.useState)(!1),
                        b = (0, n.useMemo)(
                            () =>
                                (0, l.A)((t) => {
                                    L(t);
                                }, 100),
                            [],
                        ),
                        O = (0, n.useMemo)(() => {
                            var t, e;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, g, S]),
                        R = E ? Math.min(E, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: P || f, [d().root_notScrolling]: !P && !f }, e),
                        'data-test-id': k,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: b,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: T,
                                ...j,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => r });
            var s = i(44806);
            let r = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: r, userRegion: l } = t;
                return 'ru' === l && e(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        12558: (t) => {
            t.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        15684: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => E });
            var s = i(25839),
                r = i(88204),
                l = i(8487),
                n = i(4071),
                a = i(66738),
                o = i(13833),
                c = i(4254),
                d = i(1407),
                u = i(21784),
                _ = i(89192),
                m = i(53712),
                p = i(85686),
                h = i(27954),
                x = i(99401),
                v = i(26076),
                y = i(10603),
                g = i(2328),
                C = i.n(g);
            let E = (0, r.PA)((t) => {
                let { title: e } = t,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: r, setContentScrollRef: g } = (0, _.g)(),
                    E = (0, u.W)(),
                    N = (0, p.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: e,
                    children: [
                        (0, s.jsx)(y.Y, {
                            variant: y.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: E.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: e }),
                        }),
                        (0, s.jsxs)(o.N, {
                            ref: g,
                            containerClassName: C().scrollableContainer,
                            className: C().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: C().content,
                                    children: [
                                        (0, s.jsx)('div', { className: C().icon, children: (0, s.jsx)(a.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(l.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: N,
                                            className: C().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(l.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(v.A, { children: (0, s.jsx)(x.w, { className: C().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        15787: (t) => {
            t.exports = {
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
        16978: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => m });
            var s = i(25839),
                r = i(84059),
                l = i(8487),
                n = i(61493),
                a = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: v, className: y } = t,
                    g = (0, r.useRouter)(),
                    C = (0, _.N)().get(u.QG),
                    E = (0, a.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(C.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: E,
                        className: y,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        19410: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var s = i(25839),
                r = i(82298),
                l = i(61493),
                n = i(23976),
                a = i(40828),
                o = i.n(a);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(n.W, { isActive: e, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(n.W, { isActive: e, className: (0, r.$)(o().cover, a, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(n.W, { isActive: e, className: (0, r.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => n });
            var s = i(25839);
            i(93588);
            var r = i(400),
                l = i.n(r);
            let n = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: l().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => n });
            var s = i(25839),
                r = i(35015),
                l = i(10546);
            let n = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => h });
            var s = i(25839),
                r = i(88204),
                l = i(84059),
                n = i(82298),
                a = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(53712),
                p = i(27954);
            let h = (0, r.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? e : (i && (0, l.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        36286: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        39528: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => r });
            var s = i(25895);
            let r = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        40828: (t) => {
            t.exports = {
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
        41459: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var s = i(74631),
                r = i(39004);
            let l = (t) => {
                let { formatMessage: e } = (0, r.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let s = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(s, ' ').concat(i);
                }, [e, t]);
            };
        },
        41707: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => J });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(74631),
                a = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                h = i(86869),
                x = i(4254),
                v = i(4331),
                y = i(62948),
                g = i(1134),
                C = i(79367),
                E = i(29481),
                N = i(47009),
                A = i(34159),
                f = i(52512),
                k = i(30290),
                S = i(61561),
                T = i(85686),
                j = i(85743),
                P = i(50209),
                L = i(27954),
                b = i(74760),
                O = i(6323),
                R = i(64720),
                I = i(97522),
                w = i(41580),
                D = i(49438),
                z = i(71996),
                F = i(78437),
                M = i(41459),
                H = i(10820),
                W = i(3210),
                B = i(11609),
                Y = i(29872),
                K = i(56120),
                U = i(83014),
                V = i(44806),
                $ = i(16386),
                X = i(67303),
                G = i(59043);
            let Z = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: r, open: l, ...n } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, Y.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, L.g)(),
                    v = (0, y.K)(i),
                    E = (0, g.A)(i),
                    N = (0, A.F)(),
                    { formatMessage: f } = (0, a.A)(),
                    k = (0, C.P)(),
                    S = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    T = (0, W.A)({ entityVariant: U.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(l);
                let j = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), N(o.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    children: [
                        S && (0, s.jsx)(B.d, { entityVariant: U.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : T }),
                        !p && (0, s.jsx)(X.L, { onClick: E, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, s.jsx)(G.N, { onClick: j, disabled: !i.isAvailable }),
                    ],
                });
            });
            var q = i(15787),
                Q = i.n(q);
            let J = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: H, customDescription: W, onCoverMouseDown: B } = t,
                    { ref: Y, intersectionPropertyId: K } = (0, f.n)(),
                    {
                        trailer: U,
                        user: V,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: X, utmLink: G } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, j.z)(),
                    [ti, ts] = (0, n.useState)(!1),
                    [tr, tl] = (0, n.useState)(!1),
                    [tn, ta] = (0, n.useState)(!1),
                    to = (0, M.r)(i),
                    tc = (0, y.K)(i),
                    td = (0, g.A)(i),
                    tu = (0, E.N)(),
                    t_ = (0, N.b)(),
                    tm = (0, T.Z)(i.url),
                    tp = (0, A.F)(),
                    th = (0, C.P)(),
                    tx = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (U.setUtmLink(G), U.openPlaylistTrailer(i.id), tp(o.DomainObjectType.Playlist, i.id));
                    }),
                    [tv, ty] = (0, n.useState)(!1),
                    { isPlaying: tg, togglePlay: tC } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    tE = (0, u.c)(() => {
                        (tu({ to: o.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tN = (0, u.c)((t) => {
                        (tE(), tm(t));
                    }),
                    tA = (0, S.N)(),
                    tf = (0, u.c)(() => {
                        if (!th()) {
                            if (tA) return void $.open();
                            (ti || tg || (ts(!0), null == te || te()), tC(), t_(!tg));
                        }
                    }),
                    tk = (0, u.c)(() => {
                        (tr || i.isLiked || (tl(!0), null == J || J()), tc());
                    }),
                    tS = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tT = (0, u.c)((t) => {
                        (ta(t), ty(t));
                    }),
                    tj = (0, n.useMemo)(() => {
                        var t;
                        return W
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, s.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    tP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                R.c,
                                {
                                    className: (0, r.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: tk,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tL = (0, n.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                F.n,
                                {
                                    children: (0, s.jsx)(
                                        z.k,
                                        { className: (0, r.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tx },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tx, i]),
                    tb = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, r.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: tN,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: to,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: tn || tv,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tf,
                                                    isPlaying: tg,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tP,
                                            menuControl: (0, s.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tT,
                                                    open: tn,
                                                    onClick: tS,
                                                    className: (0, r.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tb,
                                            trailerControl: tL,
                                        }),
                                    ],
                                }),
                            }),
                        [tN, B, i, to, tn, tv, tf, tg, tP, tT, tS, tb, tL],
                    ),
                    tR = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': to,
                    className: (0, r.$)(Q().root, e),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: tE, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Q().srTitleLink, href: i.url, onClick: tE, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: H,
                    view: tO,
                    description: tj,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tR &&
                            (0, s.jsx)(b.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        l,
                    ],
                });
            });
        },
        42190: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => n });
            var s = i(25839),
                r = i(35015),
                l = i(3163);
            let n = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(l.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        42738: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 74576)));
        },
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => r, P: () => l });
            var s = i(74631);
            let r = (0, s.createContext)(null),
                l = () => (0, s.useContext)(r);
        },
        45300: (t) => {
            t.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        50222: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => s });
            let s = 20;
        },
        53454: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => r });
            var s = i(25895);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => l, UC: () => n, dM: () => a, uV: () => o });
            var s = i(93690),
                r = i(58848);
            let l = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (t) => (t.uid ? 'authorized' : 'no-uid'),
                a = (t) => {
                    if (!(t instanceof s.m5) || !(0, r.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, r.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                o = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => s });
            let s = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        60678: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => d });
            var s = i(25839),
                r = i(74631),
                l = i(71035),
                n = i(1466),
                a = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = t.lastRejectedPagesList) ? i : [])].reverse().filter((e) => {
                            var i;
                            return (null == (i = t.pageStates) ? void 0 : i[e]) === c.G.REJECT;
                        });
                        (t.resetRejectedPagesState(),
                            s.forEach((t) => {
                                e(t);
                            }));
                    });
                (0, r.useEffect)(() => {
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, t.rejectedPagesCount]);
            };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => l });
            var s = i(27954),
                r = i(44806);
            let l = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => g });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(74631),
                a = i(36619),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                _ = i(86869),
                m = i(4254),
                p = i(29481),
                h = i(85686),
                x = i(27954),
                v = i(53454),
                y = i.n(v);
            let g = (0, l.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: l } = (0, x.g)(),
                    v = (0, h.Z)(e.url),
                    C = (0, p.N)(),
                    E = (0, n.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(g, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    N = (0, c.c)((t) => {
                        (l.modal.isOpened && l.modal.close(), C({ to: a.AppScreen.ArtistScreen }), v(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: N,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        E,
                    ],
                });
            });
        },
        62948: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var s = i(25839),
                r = i(33660),
                l = i(74631),
                n = i(39004),
                a = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, l.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, r.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let n = await t.toggleLike();
                    (p(!1),
                        n === a.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, m, t, h, i]);
            };
        },
        68854: (t) => {
            t.exports = {
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
        69292: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(25839),
                r = i(74631),
                l = i(39004),
                n = i(61493),
                a = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: y,
                        } = t,
                        { formatMessage: g } = (0, l.A)(),
                        C = g({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(a.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        72728: (t) => {
            t.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        74576: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionKidsPlaylistsPage: () => L });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(74631),
                a = i(39004),
                o = i(8487),
                c = i(61493),
                d = i(4254),
                u = i(78299),
                _ = i(1407),
                m = i(41707),
                p = i(20258),
                h = i(10322),
                x = i(21784),
                v = i(89192),
                y = i(30716),
                g = i(27954),
                C = i(60678),
                E = i(99401),
                N = i(26076),
                A = i(10603),
                f = i(19412),
                k = i(6968),
                S = i(50222),
                T = i(15684),
                j = i(72728),
                P = i.n(j);
            let L = (0, l.PA)(() => {
                let {
                        settings: { isMobile: t },
                        collection: {
                            kids: { playlists: e },
                        },
                    } = (0, g.g)(),
                    { contentScrollRef: i, setContentScrollRef: l } = (0, v.g)(),
                    j = (0, x.W)(),
                    { formatMessage: L } = (0, a.A)(),
                    b = (0, n.useCallback)(
                        (t) => {
                            e.getData({ page: t, pageSize: S.c });
                        },
                        [e],
                    );
                (0, C.X)(e.pagesLoader, b);
                let O = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(E.w, { className: P().footer }) }) }), []),
                    R = e.isShimmerVisible ? 20 : e.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, y.J)(e.isResolved),
                e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: S.c })),
                e.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, s.jsx)(T.i, { title: L({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(h.n, {
                            pageId: p._Q.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: L({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: P().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(A.Y, {
                                            variant: A.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: j.canBack,
                                            children: (0, s.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(o.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(k.$, {
                                            className: (0, r.$)(P().scrollContainer, P().important),
                                            customComponents: O,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t],
                                                    r = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(m.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(f.V, { 'aria-label': r, linesCount: 3 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: b,
                                            totalRequests: e.requestsCount,
                                            pageSize: S.c,
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            handleRef: l,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        74760: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => _ });
            var s = i(25839),
                r = i(82298),
                l = i(39004),
                n = i(61493),
                a = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let _ = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = t,
                    { formatNumber: p } = (0, l.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, r.$)(u().root, e),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...l } = e,
                        n = t || 'Internal error';
                    (super(n, l), (this.message = n), (this.code = i), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77920: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { X: () => s }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        78299: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => A });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(74631),
                a = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(36619),
                p = i(76945),
                h = i(59450),
                x = i(84e3),
                v = i(97952),
                y = i(89192),
                g = i(53712),
                C = i(15270),
                E = i(68854),
                N = i.n(E);
            let A = (0, l.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: l } = (0, a.A)(),
                    E = l({ id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: s } = (0, v.$)(),
                        r = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!e || !i || !s) return;
                        let l = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: t,
                                hash: i,
                                pageId: s,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, p.z5)(e.evgenInstance, l);
                    }, [e, t, i, s, r]);
                })(E);
                let { sendRefreshEvent: A } = (function () {
                        let t = (0, h.st)(),
                            { hash: e } = (0, h.gf)(),
                            { pageId: i } = (0, v.$)(),
                            s = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!t || !e || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: e,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(t.evgenInstance, r);
                            }, [t, e, i, s]),
                        };
                    })(),
                    f = (0, n.useCallback)(() => {
                        (A(), (window.location.href = g.Z.main.href));
                    }, [A]),
                    { contentRef: k } = (0, y.g)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(N().root, e),
                    children: [
                        i &&
                            (0, s.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(N().navigation, { [N().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.DZ, { className: (0, r.$)(N().title, N().important), variant: 'h3', size: 'xs', children: E }),
                                (0, s.jsxs)(u.HL, {
                                    className: (0, r.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: f,
                                    className: N().button,
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
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => n });
            var s = i(25839),
                r = i(39004),
                l = i(3392);
            let n = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, r.A)();
                return (0, s.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => r }), i(77920));
            var s = i(76481);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => l.G, X1: () => s.X, m5: () => r.m });
            var s = i(77920),
                r = i(76481),
                l = i(91626);
            i(95919);
        },
        94484: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95919: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { Z: () => s }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => k });
            var s = i(25839),
                r = i(82298),
                l = i(88204),
                n = i(39004),
                a = i(93588),
                o = i(43354),
                c = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let d = (t, e, i) => {
                    switch (t) {
                        case c.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                u = (t) => {
                    let { formatMessage: e, language: i, tld: s, year: r } = t;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let p = (t) => t(new Date(), (0, m.m)());
            var h = i(96433),
                x = i(27954),
                v = i(400),
                y = i.n(v),
                g = i(61493),
                C = i(4254),
                E = i(97522);
            let N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, e),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(E.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(E.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, s.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: y().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: r } = t;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, s.jsx)(E.N, { target: '_blank', href: r, className: y().link, 'data-test-id': g.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, s.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': g.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, e),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, s.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: r, formatMessage: l } = (0, n.A)(),
                    { language: a } = (0, h.h)(),
                    o = u({ formatMessage: l, language: a, tld: i.tld, year: p(r) });
                return (0, s.jsx)(N, { className: e, data: o });
            });
            let k = (0, l.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: l, location: m, user: v } = (0, x.g)(),
                    { formatDate: g, formatMessage: C } = (0, n.A)(),
                    { isEnabled: E } = null != (e = (0, o.P)()) ? e : {},
                    { language: N } = (0, h.h)(),
                    A = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: n, year: a } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: s, language: r, userRegion: l } = t,
                                    n = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    a = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    o = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    m = [n, o, u];
                                return (i && 'ru' === l && m.push(a), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: l, year: a }),
                        };
                    })({
                        checkExperiment: (t, e) => l.checkExperiment(t, e),
                        formatMessage: C,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(g),
                    });
                return (0, s.jsx)(f, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: E }, i), data: A });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1676, 3349, 7339, 6287, 2121, 3472, 1107, 7349, 2787, 1403, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246,
                4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 4475, 5056, 7358,
            ],
            () => t((t.s = 42738)),
        ),
            (_N_E = t.O()));
    },
]);
