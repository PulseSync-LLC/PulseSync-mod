(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
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
                l = i(33660),
                r = i(74631),
                a = i(39004),
                o = i(91149),
                n = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let a = await t.togglePin();
                    (p(!1),
                        a
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, m, t, i, _]);
            };
        },
        1466: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => p });
            var s = i(25839),
                l = i(82298),
                r = i(74631),
                a = i(39004),
                o = i(8487),
                n = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let p = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var t;
                    null == (t = _.current) || t.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
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
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        2880: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 11106)));
        },
        4331: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => U });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(49656),
                n = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                _ = i(39528);
            let m = (t, e) => {
                let { withLink: i, separator: s } = e,
                    l = i && !t.various ? (0, _.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: l };
            };
            var p = i(94484),
                h = i.n(p),
                x = i(61493),
                C = i(4254),
                v = i(97522),
                y = i(39004),
                E = i(36619),
                g = i(29481),
                N = i(85686),
                A = i(85743),
                f = i(40207);
            let k = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: l, captionSize: r = 'm', allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = t,
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
                            let { item: s, allArtistsTitle: l, withCustomTooltip: r } = t,
                                { formatMessage: a } = (0, y.A)(),
                                {
                                    track: o,
                                    settings: { isMobile: n },
                                } = (0, u.g)(),
                                c = (0, N.Z)(null != (i = null == (e = s.link) ? void 0 : e.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                m = (0, g.N)(),
                                p = (0, d.c)((t) => {
                                    (n && o.isOpened && o.close(), c(t));
                                }),
                                h = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, f.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), a.isOpened && (s.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: p }),
                                x = (0, d.c)((t) => {
                                    (m({ to: E.AppScreen.ArtistScreen }), null == _ || _(), h(t));
                                }),
                                C = l || s.name;
                            return {
                                name: s.name,
                                link: s.link,
                                title: r ? void 0 : C,
                                ariaLabel: s.link ? a({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                tooltipText: C,
                                isTooltipEnabled: !l && r,
                                handleNavigate: x,
                            };
                        })({ item: e, allArtistsTitle: a, withCustomTooltip: o });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: T,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(n.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(C.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: l, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(n.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, s.jsx)(C.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: l,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                S = (t) => {
                    let { group: e, linkClassName: i, captionClassName: l, captionSize: r, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(k, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(k, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: n,
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
                L = i(9079);
            let P = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var j = i(28631),
                R = i(89761),
                O = i(61912),
                b = i(36286),
                I = i.n(b);
            let w = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: l } = t;
                    return (0, s.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: e }),
                            (0, s.jsx)(n.ZI, { className: I().tooltipContent, children: i.map((t) => (0, s.jsx)(O.V, { artist: t, className: I().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, a.forwardRef)((t, e) => (0, s.jsx)(w, { forwardRef: e, ...t }));
            var M = i(10820),
                z = i(93510),
                H = i.n(z);
            let F = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, y.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(H().root, H().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(O.V, { artist: t }, t.id)),
                    });
                }),
                B = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: l } = t,
                        [r, n] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let t = l.current;
                            t && n(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, j.A)(() => {
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
                        }, [e, _]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(F, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                U = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: x,
                            variant: C = 'breakAll',
                            spoilerComponent: v,
                            ...y
                        } = t,
                        E = ((t) => {
                            var e, i, s;
                            let { separator: l, visibleArtistsCount: r, withLink: o, withComposer: n, artistIdWithoutLink: c, withContextMenu: _ } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (s = t.withCustomTooltip) || s,
                                C = (0, a.useRef)(null),
                                [v, y] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: E },
                                } = (0, u.g)(),
                                g = ((!E || 1 === p.length) && _) || !_,
                                N = ((t, e) => {
                                    var i, s, l;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        a = null == (s = null == e ? void 0 : e.withLink) || s,
                                        o = null != (l = null == e ? void 0 : e.separator) ? l : ', ',
                                        n = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: r, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: r } = e;
                                                return {
                                                    primary: m(t, { withLink: s, separator: r ? void 0 : l }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = l ? t.separator : '';
                                                        return m(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: a && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: l, visibleArtistsCount: v ? void 0 : r, withComposer: n, withLink: !!g && o, artistIdWithoutLink: c }),
                                A = h ? N.allArtistsTitle : '',
                                f = (0, d.c)((t) => {
                                    (y(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: C,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!A && x && !_ && !E,
                                title: !A || x || _ ? void 0 : A,
                            };
                        })(y),
                        g = (0, o.L)(() =>
                            E.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(P, { spoilerClassName: r, spoilerArtistsCount: E.hiddenArtistsCount, handleOnSpoilerClick: E.handleOnSpoilerClick }),
                        ),
                        N = (0, s.jsx)(n.m_, {
                            referenceRef: E.labelRef,
                            enabled: E.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(C)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: E.title,
                                children: [
                                    E.groups.map((t) =>
                                        (0, s.jsx)(
                                            S,
                                            {
                                                group: t,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: E.allArtistsTitle,
                                                withCustomTooltip: E.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return E.withContextMenu ? (0, s.jsx)(B, { labelRef: E.labelRef, artists: E.artists, label: N }) : N;
                });
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var s = i(25839),
                l = i(82298),
                r = i(28631),
                a = i(74631);
            let o = (t) => {
                    let { style: e, forwardRef: i, context: l, ...r } = t,
                        a = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...e }, ref: i, ...r });
                },
                n = (0, a.forwardRef)((t, e) => (0, s.jsx)(o, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: o, ...n } = t;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...e },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var m = i(10508),
                p = i(63257);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == l || l(t), n.length > 0 && h(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            l = Math.floor(t.startIndex / e);
                                        for (let t = l; t < s; t++) i(t);
                                    }
                                }, r),
                            [r, l, e, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && _ && x(_);
                    }, n);
                    let C = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: o, endReached: C, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: C = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: g,
                            minInitialItemCount: N = 20,
                            handleRef: A,
                            alwaysShowScrollbar: f = !1,
                            testId: k,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...L
                        } = t,
                        [P, j] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, r.A)((t) => {
                                    j(t);
                                }, 100),
                            [],
                        ),
                        O = (0, a.useMemo)(() => {
                            var t, e;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, S]),
                        b = g ? Math.min(g, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: P || f, [d().root_notScrolling]: !P && !f }, e),
                        'data-test-id': k,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: v,
                                pageSize: C,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: T,
                                ...L,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => l });
            var s = i(44806);
            let l = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = t;
                return 'ru' === r && e(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        11106: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionPlaylistsCreatedPage: () => T });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(39004),
                n = i(8487),
                c = i(61493),
                d = i(4254),
                u = i(1407),
                _ = i(41707),
                m = i(20258),
                p = i(10322),
                h = i(21784),
                x = i(89192),
                C = i(30716),
                v = i(27954),
                y = i(60678),
                E = i(99401),
                g = i(26076),
                N = i(10603),
                A = i(19412),
                f = i(6968),
                k = i(67270),
                S = i.n(k);
            let T = (0, r.PA)(() => {
                let {
                        user: t,
                        collection: {
                            playlists: { playlistsCreated: e },
                        },
                        settings: { isMobile: i },
                    } = (0, v.g)(),
                    { formatMessage: r } = (0, o.A)(),
                    { contentScrollRef: k, setContentScrollRef: T } = (0, x.g)(),
                    L = (0, h.W)(),
                    P = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(g.A, { children: (0, s.jsx)(E.w, { className: S().footer }) }) }), []);
                (0, C.J)(e.isResolved);
                let j = (0, a.useCallback)(
                    (i) => {
                        t.account.data.uid && e.getData({ userId: t.account.data.uid, page: i, pageSize: 20 });
                    },
                    [e, t.account.data.uid],
                );
                ((0, y.X)(e.pagesLoader, j),
                    (0, a.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    t.account.data.uid && e.isNeededToLoad && (0, a.use)(e.getData({ userId: t.account.data.uid, page: 0, pageSize: 20 })));
                let R = e.isShimmerVisible ? 20 : e.items.length;
                return (0, s.jsx)(p.n, {
                    pageId: m._Q.OWN_PLAYLISTS,
                    children: (0, s.jsx)(u.h, {
                        scrollElement: k,
                        outerTitle: r({ id: 'entity-names.my-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: S().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, s.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: L.canBack,
                                    children: (0, s.jsx)(d.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(f.$, {
                                    className: (0, l.$)(S().scrollContainer, S().important),
                                    customComponents: P,
                                    itemContentCallback: (t) => {
                                        let i = e.items[t],
                                            l = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.playlist' }) });
                                        return i ? (0, s.jsx)(_.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, s.jsx)(A.V, { 'aria-label': l });
                                    },
                                    totalCount: R,
                                    onGetDataByPage: j,
                                    pageSize: 20,
                                    totalRequests: e.requestsCount,
                                    listClassName: S().content,
                                    itemClassName: S().item,
                                    handleRef: T,
                                    context: { listAriaLabel: r({ id: 'collection.created-playlists-list' }) },
                                    isMobileLayout: i,
                                    useWindowScroll: i,
                                }),
                            ],
                        }),
                    }),
                });
            });
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
                l = i(84059),
                r = i(8487),
                a = i(61493),
                o = i(71035),
                n = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: C, className: v } = t,
                    y = (0, l.useRouter)(),
                    E = (0, _.N)().get(u.QG),
                    g = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(E.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: g,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    C,
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
                l = i(82298),
                r = i(61493),
                a = i(23976),
                o = i(40828),
                n = i.n(o);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: o,
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
                    className: (0, l.$)(n().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(a.W, { isActive: e, className: n().subcover, radius: 'l' }),
                        (0, s.jsx)(a.W, { isActive: e, className: (0, l.$)(n().cover, o, { [n().cover_round]: c, [n().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, l.$)(n().infoContainer, n()['content_linesCount_'.concat(m)], { [n().infoContainer_centered]: u }),
                                children: (0, s.jsx)(a.W, { isActive: e, className: (0, l.$)(n().title, { [n().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => a });
            var s = i(25839);
            i(93588);
            var l = i(400),
                r = i.n(l);
            let a = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => a });
            var s = i(25839),
                l = i(35015),
                r = i(10546);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        27954: (t, e, i) => {
            'use strict';
            i.d(e, { P: () => r, g: () => a });
            var s = i(74631),
                l = i(36432);
            let r = (0, s.createContext)(null);
            function a() {
                let t = (0, s.useContext)(r);
                if (null === t) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => h });
            var s = i(25839),
                l = i(88204),
                r = i(84059),
                a = i(82298),
                o = i(8487),
                n = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, l.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(53712),
                p = i(27954);
            let h = (0, l.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: l } = (0, p.g)();
                return l.isAuthorized ? e : (i && (0, r.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
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
            i.d(e, { R: () => l });
            var s = i(25895);
            let l = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
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
            i.d(e, { r: () => r });
            var s = i(74631),
                l = i(39004);
            let r = (t) => {
                let { formatMessage: e } = (0, l.A)();
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
            var pulseSyncPlaylistDownloadIcons = i(66738);
            i.d(e, { B: () => J });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(39004),
                n = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                h = i(86869),
                x = i(4254),
                C = i(4331),
                v = i(62948),
                y = i(1134),
                E = i(79367),
                g = i(29481),
                N = i(47009),
                A = i(34159),
                f = i(52512),
                k = i(30290),
                S = i(61561),
                T = i(85686),
                L = i(85743),
                P = i(50209),
                j = i(27954),
                R = i(74760),
                O = i(6323),
                b = i(64720),
                I = i(97522),
                w = i(41580),
                D = i(49438),
                M = i(71996),
                z = i(78437),
                H = i(41459),
                F = i(10820),
                B = i(3210),
                U = i(11609),
                Y = i(29872),
                V = i(56120),
                X = i(83014),
                K = i(44806),
                $ = i(16386),
                W = i(67303),
                G = i(59043);
            let q = (0, r.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: l, open: r, ...a } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, Y.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, j.g)(),
                    C = (0, v.K)(i),
                    g = (0, y.A)(i),
                    N = (0, A.F)(),
                    { formatMessage: f } = (0, o.A)(),
                    k = (0, E.P)(),
                    S = m.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    T = (0, B.A)({ entityVariant: X.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(r);
                let L = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), N(n.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        S && (0, s.jsx)(U.d, { entityVariant: X.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : T }),
                        !p && (0, s.jsx)(W.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: C, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(F.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, s.jsx)(G.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(15787),
                Z = i.n(Q);
            let J = (0, r.PA)((t) => {
                let { className: e, playlist: i, children: r, contentLinesCount: F, customDescription: B, onCoverMouseDown: U } = t,
                    { ref: Y, intersectionPropertyId: V } = (0, f.n)(),
                    {
                        trailer: X,
                        user: K,
                        paywall: { modal: $ },
                    } = (0, j.g)(),
                    { from: W, utmLink: G } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, L.z)(),
                    [ti, ts] = (0, a.useState)(!1),
                    [tl, tr] = (0, a.useState)(!1),
                    [ta, to] = (0, a.useState)(!1),
                    tn = (0, H.r)(i),
                    tc = (0, v.K)(i),
                    td = (0, y.A)(i),
                    tu = (0, g.N)(),
                    t_ = (0, N.b)(),
                    tm = (0, T.Z)(i.url),
                    tp = (0, A.F)(),
                    th = (0, E.P)(),
                    tx = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (X.setUtmLink(G), X.openPlaylistTrailer(i.id), tp(n.DomainObjectType.Playlist, i.id));
                    }),
                    [tC, tv] = (0, a.useState)(!1),
                    { isPlaying: ty, togglePlay: tE } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: G }, loadContextMeta: !0 },
                    }),
                    tg = (0, u.c)(() => {
                        (tu({ to: n.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tN = (0, u.c)((t) => {
                        (tg(), tm(t));
                    }),
                    tA = (0, S.N)(),
                    tf = (0, u.c)(() => {
                        if (!th()) {
                            if (tA) return void $.open();
                            (ti || ty || (ts(!0), null == te || te()), tE(), t_(!ty));
                        }
                    }),
                    tk = (0, u.c)(() => {
                        (tl || i.isLiked || (tr(!0), null == J || J()), tc());
                    }),
                    tS = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tT = (0, u.c)((t) => {
                        (to(t), tv(t));
                    }),
                    tL = (0, a.useMemo)(() => {
                        var t;
                        return B
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, s.jsx)(
                                    C.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    tP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                b.c,
                                {
                                    className: (0, l.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: tk,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tj = (0, a.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tx },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tx, i]),
                    tR = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, l.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tO = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: tN,
                                    onMouseDown: U,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tn,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: ta || tC,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, l.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tf,
                                                    isPlaying: ty,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tP,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tT,
                                                    open: ta,
                                                    onClick: tS,
                                                    className: (0, l.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tR,
                                            trailerControl: tj,
                                        }),
                                    ],
                                }),
                            }),
                        [tN, U, i, tn, ta, tC, tf, ty, tP, tT, tS, tR, tj],
                    ),
                    tb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': tn,
                    className: (0, l.$)(Z().root, e),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: tg, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { className: Z().srTitleLink, href: i.url, onClick: tg, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: F,
                    view: tO,
                    description: tL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tb &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        r,
                    ],
                });
            });
        },
        42190: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var s = i(25839),
                l = i(35015),
                r = i(3163);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, s.jsx)(r.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => l, P: () => r });
            var s = i(74631);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
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
        53454: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => l });
            var s = i(25895);
            let l = {
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
            i.d(e, { C8: () => r, UC: () => a, dM: () => o, uV: () => n });
            var s = i(93690),
                l = i(58848);
            let r = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (t) => (t.uid ? 'authorized' : 'no-uid'),
                o = (t) => {
                    if (!(t instanceof s.m5) || !(0, l.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, l.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                n = (t) => {
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
                l = i(74631),
                r = i(71035),
                a = i(1466),
                o = i(91149),
                n = i(92942),
                c = i(36159);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, l.useRef)(void 0),
                    _ = (0, r.c)(() => {
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
                (0, l.useEffect)(() => {
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: _ }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, _, i, t.rejectedPagesCount]);
            };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            var s = i(27954),
                l = i(44806);
            let r = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: a,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = a.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => y });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(36619),
                n = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                _ = i(86869),
                m = i(4254),
                p = i(29481),
                h = i(85686),
                x = i(27954),
                C = i(53454),
                v = i.n(C);
            let y = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    C = (0, h.Z)(e.url),
                    E = (0, p.N)(),
                    g = (0, a.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(y, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    N = (0, c.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), E({ to: o.AppScreen.ArtistScreen }), C(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, l.$)(v().root, i),
                            onClick: N,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        62948: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var s = i(25839),
                l = i(33660),
                r = i(74631),
                a = i(39004),
                o = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let a = await t.toggleLike();
                    (p(!1),
                        a === o.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, m, t, h, i]);
            };
        },
        67270: (t) => {
            t.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        69292: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(25839),
                l = i(74631),
                r = i(39004),
                a = i(61493),
                o = i(4071),
                n = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: C,
                            children: v,
                        } = t,
                        { formatMessage: y } = (0, r.A)(),
                        E = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(n.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: C,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, l.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        74760: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => _ });
            var s = i(25839),
                l = i(82298),
                r = i(39004),
                a = i(61493),
                o = i(4071),
                n = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let _ = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = t,
                    { formatNumber: p } = (0, r.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, l.$)(u().root, e),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => l });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...r } = e,
                        a = t || 'Internal error';
                    (super(a, r), (this.message = a), (this.code = i), (this.data = l), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class l extends s {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, l.prototype));
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
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => a });
            var s = i(25839),
                l = i(39004),
                r = i(3392);
            let a = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, l.A)();
                return (0, s.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        84e3: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => r });
            var s = i(36484),
                l = i(62562);
            let r = () => (0, l.N)().get(s.Zf);
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => l }), i(77920));
            var s = i(76481);
            class l extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => r.G, X1: () => s.X, m5: () => l.m });
            var s = i(77920),
                l = i(76481),
                r = i(91626);
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
                l = i(82298),
                r = i(88204),
                a = i(39004),
                o = i(93588),
                n = i(43354),
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
                    let { formatMessage: e, language: i, tld: s, year: l } = t;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let p = (t) => t(new Date(), (0, m.m)());
            var h = i(96433),
                x = i(27954),
                C = i(400),
                v = i.n(C),
                y = i(61493),
                E = i(4254),
                g = i(97522);
            let N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, e),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(g.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(g.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: l } = t;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(g.N, { target: '_blank', href: l, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, s.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (t) => {
                    let { className: e, data: i } = t;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, e),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: l, formatMessage: r } = (0, a.A)(),
                    { language: o } = (0, h.h)(),
                    n = u({ formatMessage: r, language: o, tld: i.tld, year: p(l) });
                return (0, s.jsx)(N, { className: e, data: n });
            });
            let k = (0, r.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: r, location: m, user: C } = (0, x.g)(),
                    { formatDate: y, formatMessage: E } = (0, a.A)(),
                    { isEnabled: g } = null != (e = (0, n.P)()) ? e : {},
                    { language: N } = (0, h.h)(),
                    A = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a, year: o } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: s, language: l, userRegion: r } = t,
                                    a = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    o = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    n = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [a, n, u];
                                return (i && 'ru' === r && m.push(o), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (t, e) => r.checkExperiment(t, e),
                        formatMessage: E,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: C.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, s.jsx)(f, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: g }, i), data: A });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1676, 3349, 7339, 6287, 2121, 3472, 1107, 7349, 3569, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163, 3246, 3482,
                6680, 6504, 5329, 8836, 820, 4434, 48, 6361, 4475, 5056, 7358,
            ],
            () => t((t.s = 2880)),
        ),
            (_N_E = t.O()));
    },
]);
