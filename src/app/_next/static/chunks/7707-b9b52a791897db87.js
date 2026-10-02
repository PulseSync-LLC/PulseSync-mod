(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7707],
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
            var r = i(25839),
                s = i(33660),
                l = i(74631),
                a = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let a = await t.togglePin();
                    (p(!1),
                        a
                            ? i((0, r.jsx)(u.l, { playlist: l }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, m, t, i, _]);
            };
        },
        4331: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => Y });
            var r = i(25839),
                s = i(82298),
                l = i(88204),
                a = i(74631),
                n = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                _ = i(39528);
            let m = (t, e) => {
                let { withLink: i, separator: r } = e,
                    s = i && !t.various ? (0, _.R)(t.id) : null;
                return { artist: t, name: t.name, separator: r, link: s };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                x = i(4254),
                C = i(97522),
                y = i(39004),
                E = i(36619),
                A = i(29481),
                N = i(85686),
                k = i(85743),
                f = i(40207);
            let S = (0, l.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: s, captionSize: l = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = t,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: T,
                            handleNavigate: g,
                        } = ((t) => {
                            var e, i;
                            let { item: r, allArtistsTitle: s, withCustomTooltip: l } = t,
                                { formatMessage: a } = (0, y.A)(),
                                {
                                    track: n,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, N.Z)(null != (i = null == (e = r.link) ? void 0 : e.href) ? i : r.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, k.z)(),
                                m = (0, A.N)(),
                                p = (0, d.c)((t) => {
                                    (o && n.isOpened && n.close(), c(t));
                                }),
                                h = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: a } = r;
                                    return (0, f.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), a.isOpened && (r.reset(), a.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: r.artist, callback: p }),
                                v = (0, d.c)((t) => {
                                    (m({ to: E.AppScreen.ArtistScreen }), null == _ || _(), h(t));
                                }),
                                x = s || r.name;
                            return {
                                name: r.name,
                                link: r.link,
                                title: l ? void 0 : x,
                                ariaLabel: r.link ? a({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !s && l,
                                handleNavigate: v,
                            };
                        })({ item: e, allArtistsTitle: a, withCustomTooltip: n });
                    return m
                        ? (0, r.jsx)(C.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: g,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: T,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: s, children: _ }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: T,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, r.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: s,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                T = (t) => {
                    let { group: e, linkClassName: i, captionClassName: s, captionSize: l, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, r.jsx)(S, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: l,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, r.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, r.jsx)(S, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: s,
                                                captionSize: l,
                                                allArtistsTitle: n,
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
            var g = i(8487),
                L = i(9079);
            let P = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: l } = t;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(g.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var O = i(28631),
                R = i(89761),
                j = i(61912),
                b = i(36286),
                I = i.n(b);
            let D = (0, l.PA)((t) => {
                    let { label: e, artists: i, forwardRef: s } = t;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: e }),
                            (0, r.jsx)(o.ZI, { className: I().tooltipContent, children: i.map((t) => (0, r.jsx)(j.V, { artist: t, className: I().artistItem }, t.id)) }),
                        ],
                    });
                }),
                w = (0, a.forwardRef)((t, e) => (0, r.jsx)(D, { forwardRef: e, ...t }));
            var M = i(10820),
                H = i(93510),
                z = i.n(H);
            let F = (0, l.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: l } = (0, y.A)();
                    return (0, r.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, s.$)(z().root, z().important),
                        label: e,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, r.jsx)(j.V, { artist: t }, t.id)),
                    });
                }),
                U = (0, l.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: s } = t,
                        [l, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let t = s.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        m = (0, n.L)(() =>
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
                        }, [e, _]),
                        0 !== e.length)
                    )
                        return (l || c) && (!c || 1 !== e.length) ? (c ? (0, r.jsx)(F, { artists: e, label: i }) : (0, r.jsx)(w, { artists: e, label: i })) : i;
                }),
                Y = (0, l.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: l,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: C,
                            ...y
                        } = t,
                        E = ((t) => {
                            var e, i, r;
                            let { separator: s, visibleArtistsCount: l, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                v = null == (r = t.withCustomTooltip) || r,
                                x = (0, a.useRef)(null),
                                [C, y] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: E },
                                } = (0, u.g)(),
                                A = ((!E || 1 === p.length) && _) || !_,
                                N = ((t, e) => {
                                    var i, r, s;
                                    let l = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        a = null == (r = null == e ? void 0 : e.withLink) || r,
                                        n = null != (s = null == e ? void 0 : e.separator) ? s : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: r } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => r || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: l, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: r, separator: s, isFirst: l } = e;
                                                return {
                                                    primary: m(t, { withLink: r, separator: l ? void 0 : s }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = s ? t.separator : '';
                                                        return m(t, { withLink: r, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: a && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: s, visibleArtistsCount: C ? void 0 : l, withComposer: o, withLink: !!A && n, artistIdWithoutLink: c }),
                                k = h ? N.allArtistsTitle : '',
                                f = (0, d.c)((t) => {
                                    (y(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: k,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!k && v && !_ && !E,
                                title: !k || v || _ ? void 0 : k,
                            };
                        })(y),
                        A = (0, n.L)(() =>
                            E.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(C)
                                  ? C
                                  : (0, r.jsx)(P, { spoilerClassName: l, spoilerArtistsCount: E.hiddenArtistsCount, handleOnSpoilerClick: E.handleOnSpoilerClick }),
                        ),
                        N = (0, r.jsx)(o.m_, {
                            referenceRef: E.labelRef,
                            enabled: E.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: E.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: E.title,
                                children: [
                                    E.groups.map((t) =>
                                        (0, r.jsx)(
                                            T,
                                            {
                                                group: t,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: E.allArtistsTitle,
                                                withCustomTooltip: E.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return E.withContextMenu ? (0, r.jsx)(U, { labelRef: E.labelRef, artists: E.artists, label: N }) : N;
                });
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => v });
            var r = i(25839),
                s = i(82298),
                l = i(28631),
                a = i(74631);
            let n = (t) => {
                    let { style: e, forwardRef: i, context: s, ...l } = t,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        n = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...e }, ref: i, ...l });
                },
                o = (0, a.forwardRef)((t, e) => (0, r.jsx)(n, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: l, withHeader: a, withForceScroll: n, ...o } = t;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...e },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((t, e) => (0, r.jsx)(u, { forwardRef: e, ...t }));
            var m = i(10508),
                p = i(63257);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [_, h] = (0, a.useState)(null),
                        v = (0, a.useMemo)(
                            () =>
                                (0, m.A)((t) => {
                                    if ((null == s || s(t), o.length > 0 && h(t), e && i)) {
                                        let r = Math.floor(t.endIndex / e) + 1,
                                            s = Math.floor(t.startIndex / e);
                                        for (let t = s; t < r; t++) i(t);
                                    }
                                }, l),
                            [l, s, e, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && _ && v(_);
                    }, o);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((t) => {
                                c(t);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: n, endReached: x, ...u });
                },
                v = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: C,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: A,
                            minInitialItemCount: N = 20,
                            handleRef: k,
                            alwaysShowScrollbar: f = !1,
                            testId: S,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: g,
                            ...L
                        } = t,
                        [P, O] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, l.A)((t) => {
                                    O(t);
                                }, 100),
                            [],
                        ),
                        j = (0, a.useMemo)(() => {
                            var t, e;
                            return T
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
                        }, [i, y, T]),
                        b = A ? Math.min(A, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: P || f, [d().root_notScrolling]: !P && !f }, e),
                        'data-test-id': S,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: j,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: k,
                                totalCount: C,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: g,
                                ...L,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var r = i(44806);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: l } = t;
                return 'ru' === l && e(r.z.WebNextFooterDisclaimer, 'on') ? i() : s();
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
            var r = i(25839),
                s = i(84059),
                l = i(8487),
                a = i(61493),
                n = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                _ = i(62562);
            let m = (t) => {
                let { size: e = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: v, key: x, className: C } = t,
                    y = (0, s.useRouter)(),
                    E = (0, _.N)().get(u.QG),
                    A = (0, n.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(E.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: C,
                        isBlock: v,
                        color: m,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        19410: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var r = i(25839),
                s = i(82298),
                l = i(61493),
                a = i(23976),
                n = i(40828),
                o = i.n(n);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = t;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, s.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(a.W, { isActive: e, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(a.W, { isActive: e, className: (0, s.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, r.jsx)('div', {
                                className: (0, s.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(a.W, { isActive: e, className: (0, s.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => a });
            var r = i(25839);
            i(93588);
            var s = i(400),
                l = i.n(s);
            let a = (t) => {
                let { children: e } = t;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => a });
            var r = i(25839),
                s = i(35015),
                l = i(10546);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, r.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
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
            i.d(e, { P: () => l, g: () => a });
            var r = i(74631),
                s = i(36432);
            let l = (0, r.createContext)(null);
            function a() {
                let t = (0, r.useContext)(l);
                if (null === t) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => h });
            var r = i(25839),
                s = i(88204),
                l = i(84059),
                a = i(82298),
                n = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let _ = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(53712),
                p = i(27954);
            let h = (0, s.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? e : (i && (0, l.redirect)(m.Z.main.href), (0, r.jsx)(_, {}));
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
            i.d(e, { R: () => s });
            var r = i(25895);
            let s = (t) => (0, r.u)('/artist/:artistId', { params: { artistId: t } });
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
            var r = i(74631),
                s = i(39004);
            let l = (t) => {
                let { formatMessage: e } = (0, s.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let r = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(r, ' ').concat(i);
                }, [e, t]);
            };
        },
        41707: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => J });
            var r = i(25839),
                s = i(82298),
                l = i(88204),
                a = i(74631),
                n = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                h = i(86869),
                v = i(4254),
                x = i(4331),
                C = i(62948),
                y = i(1134),
                E = i(79367),
                A = i(29481),
                N = i(47009),
                k = i(34159),
                f = i(52512),
                S = i(30290),
                T = i(61561),
                g = i(85686),
                L = i(85743),
                P = i(50209),
                O = i(27954),
                R = i(74760),
                j = i(6323),
                b = i(64720),
                I = i(97522),
                D = i(41580),
                w = i(49438),
                M = i(71996),
                H = i(78437),
                z = i(41459),
                F = i(10820),
                U = i(3210),
                Y = i(11609),
                B = i(29872),
                V = i(56120),
                K = i(83014),
                X = i(44806),
                W = i(16386),
                $ = i(67303),
                G = i(59043);
            let q = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: s, open: l, ...a } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, B.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: v,
                    } = (0, O.g)(),
                    x = (0, C.K)(i),
                    A = (0, y.A)(i),
                    N = (0, k.F)(),
                    { formatMessage: f } = (0, n.A)(),
                    S = (0, E.P)(),
                    T = m.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    g = (0, U.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(l);
                let L = (0, u.c)(() => {
                    if (d) return void _();
                    S() || (h.openPlaylistTrailer(i.id), N(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        T && (0, r.jsx)(Y.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : g }),
                        !p && (0, r.jsx)($.L, { onClick: A, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(W.T, { onClick: x, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, r.jsx)(G.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(15787),
                Q = i.n(Z);
            let J = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: F, customDescription: U, onCoverMouseDown: Y } = t,
                    { ref: B, intersectionPropertyId: V } = (0, f.n)(),
                    {
                        trailer: K,
                        user: X,
                        paywall: { modal: W },
                    } = (0, O.g)(),
                    { from: $, utmLink: G } = (0, S.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, L.z)(),
                    [ti, tr] = (0, a.useState)(!1),
                    [ts, tl] = (0, a.useState)(!1),
                    [ta, tn] = (0, a.useState)(!1),
                    to = (0, z.r)(i),
                    tc = (0, C.K)(i),
                    td = (0, y.A)(i),
                    tu = (0, A.N)(),
                    t_ = (0, N.b)(),
                    tm = (0, g.Z)(i.url),
                    tp = (0, k.F)(),
                    th = (0, E.P)(),
                    tv = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (K.setUtmLink(G), K.openPlaylistTrailer(i.id), tp(o.DomainObjectType.Playlist, i.id));
                    }),
                    [tx, tC] = (0, a.useState)(!1),
                    { isPlaying: ty, togglePlay: tE } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: G }, loadContextMeta: !0 },
                    }),
                    tA = (0, u.c)(() => {
                        (tu({ to: o.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tN = (0, u.c)((t) => {
                        (tA(), tm(t));
                    }),
                    tk = (0, T.N)(),
                    tf = (0, u.c)(() => {
                        if (!th()) {
                            if (tk) return void W.open();
                            (ti || ty || (tr(!0), null == te || te()), tE(), t_(!ty));
                        }
                    }),
                    tS = (0, u.c)(() => {
                        (ts || i.isLiked || (tl(!0), null == J || J()), tc());
                    }),
                    tT = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tg = (0, u.c)((t) => {
                        (tn(t), tC(t));
                    }),
                    tL = (0, a.useMemo)(() => {
                        var t;
                        return U
                            ? (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    tP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                b.c,
                                {
                                    className: (0, s.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: tS,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !X.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tO = (0, a.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, r.jsx)(
                                H.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, s.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tv },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tv, i]),
                    tR = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, s.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tj = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: tN,
                                    onMouseDown: Y,
                                    children: [
                                        (0, r.jsx)(j.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: to,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: ta || tx,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, s.$)(Q().playButton, Q().control),
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
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tg,
                                                    open: ta,
                                                    onClick: tT,
                                                    className: (0, s.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tR,
                                            trailerControl: tO,
                                        }),
                                    ],
                                }),
                            }),
                        [tN, Y, i, to, ta, tx, tf, ty, tP, tg, tT, tR, tO],
                    ),
                    tb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': to,
                    className: (0, s.$)(Q().root, e),
                    title: (0, r.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(I.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: tA, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(I.N, { className: Q().srTitleLink, href: i.url, onClick: tA, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: F,
                    view: tj,
                    description: tL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tb &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
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
            i.d(e, { T: () => a });
            var r = i(25839),
                s = i(35015),
                l = i(3163);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, r.jsx)(l.O, {
                    entityVariant: s.c.PLAYLIST,
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
            i.d(e, { H: () => s, P: () => l });
            var r = i(74631);
            let s = (0, r.createContext)(null),
                l = () => (0, r.useContext)(s);
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
            i.d(e, { Z: () => s });
            var r = i(25895);
            let s = {
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
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => l, UC: () => a, dM: () => n, uV: () => o });
            var r = i(93690),
                s = i(58848);
            let l = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (t) => (t.uid ? 'authorized' : 'no-uid'),
                n = (t) => {
                    if (!(t instanceof r.m5) || !(0, s.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, s.N)(t.cause)) return;
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
            i.d(e, { N: () => r });
            let r = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => l });
            var r = i(27954),
                s = i(44806);
            let l = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: a,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => y });
            var r = i(25839),
                s = i(82298),
                l = i(88204),
                a = i(74631),
                n = i(36619),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                _ = i(86869),
                m = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                x = i(53454),
                C = i.n(x);
            let y = (0, l.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    x = (0, h.Z)(e.url),
                    E = (0, p.N)(),
                    A = (0, a.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, r.jsx)(y, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    N = (0, c.c)((t) => {
                        (l.modal.isOpened && l.modal.close(), E({ to: n.AppScreen.ArtistScreen }), x(t));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(C().root, i),
                            onClick: N,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62948: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => m });
            var r = i(25839),
                s = i(33660),
                l = i(74631),
                a = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, l.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, l.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, s.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let a = await t.toggleLike();
                    (p(!1),
                        a === n.f.OK
                            ? i((0, r.jsx)(_.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, m, t, h, i]);
            };
        },
        69292: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        70238: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { S: () => r }),
                (function (t) {
                    ((t.MUSIC = 'music'), (t.CHILDREN = 'children'));
                })(r || (r = {})));
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var r = i(25839),
                s = i(74631),
                l = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: C,
                        } = t,
                        { formatMessage: y } = (0, l.A)(),
                        E = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: m,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, s.forwardRef)((t, e) => (0, r.jsx)(d, { forwardRef: e, ...t }));
        },
        74760: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => _ });
            var r = i(25839),
                s = i(82298),
                l = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let _ = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = t,
                    { formatNumber: p } = (0, l.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, s.$)(u().root, e),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        76481: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(t, e = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...l } = e,
                        a = t || 'Internal error';
                    (super(a, l), (this.message = a), (this.code = i), (this.data = s), (this.stack = Error(a).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(t, { code: e, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        77920: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { X: () => r }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => a });
            var r = i(25839),
                s = i(39004),
                l = i(3392);
            let a = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, s.A)();
                return (0, r.jsx)(l.m_, {
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
            i.d(e, { U: () => l });
            var r = i(36484),
                s = i(62562);
            let l = () => (0, s.N)().get(r.Zf);
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        91626: (t, e, i) => {
            'use strict';
            (i.d(e, { G: () => s }), i(77920));
            var r = i(76481);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        93690: (t, e, i) => {
            'use strict';
            i.d(e, { GX: () => l.G, X1: () => r.X, m5: () => s.m });
            var r = i(77920),
                s = i(76481),
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
            var r;
            (i.d(e, { Z: () => r }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => S });
            var r = i(25839),
                s = i(82298),
                l = i(88204),
                a = i(39004),
                n = i(93588),
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
                    let { formatMessage: e, language: i, tld: r, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let p = (t) => t(new Date(), (0, m.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                C = i.n(x),
                y = i(61493),
                E = i(4254),
                A = i(97522);
            let N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, r.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: C().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, r.jsx)(A.N, { target: '_blank', href: s, className: C().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, r.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (t) => {
                    let { className: e, data: i } = t;
                    return (0, r.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, e),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, v.g)(),
                    { formatDate: s, formatMessage: l } = (0, a.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: l, language: n, tld: i.tld, year: p(s) });
                return (0, r.jsx)(N, { className: e, data: o });
            });
            let S = (0, l.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: l, location: m, user: x } = (0, v.g)(),
                    { formatDate: y, formatMessage: E } = (0, a.A)(),
                    { isEnabled: A } = null != (e = (0, o.P)()) ? e : {},
                    { language: N } = (0, h.h)(),
                    k = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: r, language: s, tld: l, userRegion: a, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: r, language: s, userRegion: l } = t,
                                    a = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, s) },
                                    n = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, s) },
                                    o = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, s) },
                                    _ = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, r, s) },
                                    m = [a, o, u];
                                return (i && 'ru' === l && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: r, language: s, tld: l, userRegion: a }),
                            disclaimer: (0, _.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => l.checkExperiment(t, e),
                        formatMessage: E,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, r.jsx)(f, { className: (0, s.$)({ [C().root_withOffsetForDeeplink]: A }, i), data: k });
            });
        },
        99670: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { x: () => r }),
                (function (t) {
                    ((t.ASC = 'asc'), (t.DESC = 'desc'));
                })(r || (r = {})));
        },
    },
]);
