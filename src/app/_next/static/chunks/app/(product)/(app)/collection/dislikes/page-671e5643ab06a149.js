(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2232],
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
        1797: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => a });
            var s = i(40207);
            let a = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: a } = t;
                return (0, s.l)({ entity: e, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        1856: (t) => {
            t.exports = { root: 'CollectionDislikesPage_root__Qnohu' };
        },
        4331: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => K });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (t, e) => {
                let { withLink: i, separator: s } = e,
                    a = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: a };
            };
            var h = i(94484),
                p = i.n(h),
                v = i(61493),
                x = i(4254),
                g = i(97522),
                C = i(39004),
                k = i(36619),
                A = i(29481),
                S = i(85686),
                f = i(85743),
                b = i(40207);
            let T = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = t,
                        {
                            name: m,
                            link: _,
                            title: h,
                            ariaLabel: p,
                            tooltipText: T,
                            isTooltipEnabled: j,
                            handleNavigate: y,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = t,
                                { formatMessage: n } = (0, C.A)(),
                                {
                                    track: l,
                                    settings: { isMobile: o },
                                } = (0, u.g)(),
                                c = (0, S.Z)(null != (i = null == (e = s.link) ? void 0 : e.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, f.z)(),
                                _ = (0, A.N)(),
                                h = (0, d.c)((t) => {
                                    (o && l.isOpened && l.close(), c(t));
                                }),
                                p = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, b.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), n.isOpened && (s.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: h }),
                                v = (0, d.c)((t) => {
                                    (_({ to: k.AppScreen.ArtistScreen }), null == m || m(), p(t));
                                }),
                                x = a || s.name;
                            return {
                                name: s.name,
                                link: s.link,
                                title: r ? void 0 : x,
                                ariaLabel: s.link ? n({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                tooltipText: x,
                                isTooltipEnabled: !a && r,
                                handleNavigate: v,
                            };
                        })({ item: e, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, s.jsx)(g.N, {
                              ..._,
                              'aria-label': p,
                              className: i,
                              onClick: y,
                              title: h,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: h,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (t) => {
                    let { group: e, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(T, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(T, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: l,
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
            var y = i(8487),
                N = i(9079);
            let I = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(p().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var E = i(28631),
                R = i(89761),
                L = i(61912),
                O = i(36286),
                w = i.n(O);
            let P = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: a } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: e }),
                            (0, s.jsx)(o.ZI, { className: w().tooltipContent, children: i.map((t) => (0, s.jsx)(L.V, { artist: t, className: w().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((t, e) => (0, s.jsx)(P, { forwardRef: e, ...t }));
            var z = i(10820),
                M = i(93510),
                W = i.n(M);
            let H = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, C.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, a.$)(W().root, W().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(L.V, { artist: t }, t.id)),
                    });
                }),
                B = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: a } = t,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = a.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, E.A)(() => {
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
                        }, [e, m]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(H, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                K = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...C
                        } = t,
                        k = ((t) => {
                            var e, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = t,
                                h = null != (e = t.artists) ? e : [],
                                p = null == (i = t.withAllArtistsTitle) || i,
                                v = null == (s = t.withCustomTooltip) || s,
                                x = (0, n.useRef)(null),
                                [g, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                A = ((!k || 1 === h.length) && m) || !m,
                                S = ((t, e) => {
                                    var i, s, a;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        n = null == (s = null == e ? void 0 : e.withLink) || s,
                                        l = null != (a = null == e ? void 0 : e.separator) ? a : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(l),
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
                                                let { withLink: s, separator: a, isFirst: r } = e;
                                                return {
                                                    primary: _(t, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = a ? t.separator : '';
                                                        return _(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: n && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: a, visibleArtistsCount: g ? void 0 : r, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                f = p ? S.allArtistsTitle : '',
                                b = (0, d.c)((t) => {
                                    (C(!0), t.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!f && v && !m && !k,
                                title: !f || v || m ? void 0 : f,
                            };
                        })(C),
                        A = (0, l.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, s.jsx)(I, { spoilerClassName: r, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        S = (0, s.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(p().root, p()['root_variant_'.concat(x)], { [p().root_clamp]: i && i > 0, [p().ellipsis]: !i }, e),
                                title: k.title,
                                children: [
                                    k.groups.map((t) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: v,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, s.jsx)(B, { labelRef: k.labelRef, artists: k.artists, label: S }) : S;
                });
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => v });
            var s = i(25839),
                a = i(82298),
                r = i(28631),
                n = i(74631);
            let l = (t) => {
                    let { style: e, forwardRef: i, context: a, ...r } = t,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...e }, ref: i, ...r });
                },
                o = (0, n.forwardRef)((t, e) => (0, s.jsx)(l, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: l, ...o } = t;
                    return (0, s.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...e },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((t, e) => (0, s.jsx)(u, { forwardRef: e, ...t }));
            var _ = i(10508),
                h = i(63257);
            let p = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [m, p] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, _.A)((t) => {
                                    if ((null == a || a(t), o.length > 0 && p(t), e && i)) {
                                        let s = Math.floor(t.endIndex / e) + 1,
                                            a = Math.floor(t.startIndex / e);
                                        for (let t = a; t < s; t++) i(t);
                                    }
                                }, r),
                            [r, a, e, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((t) => {
                                c(t);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: x, ...u });
                },
                v = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: C,
                            debounceDurationInMs: k,
                            initialItemCount: A,
                            minInitialItemCount: S = 20,
                            handleRef: f,
                            alwaysShowScrollbar: b = !1,
                            testId: T,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: y,
                            ...N
                        } = t,
                        [I, E] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, r.A)((t) => {
                                    E(t);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var t, e;
                            return j
                                ? {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, j]),
                        O = A ? Math.min(A, S) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: I || b, [d().root_notScrolling]: !I && !b }, e),
                        'data-test-id': T,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: v,
                                components: L,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: _,
                                scrollerRef: f,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: y,
                                ...N,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7361: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => _ });
            var s = i(25839),
                a = i(33660),
                r = i(74631),
                n = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, r.useState)(!1),
                    { formatMessage: p } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(t), isLiked: !t.isLiked };
                    h(!0);
                    let n = await t.toggleLike();
                    (h(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t, e.isAuthorized, _, p, i]);
            };
        },
        7929: (t) => {
            t.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9162: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageHeader_root__lZ6LT',
                container: 'CollectionDislikesPageHeader_container__ACUbW',
                title: 'CollectionDislikesPageHeader_title__6h9Km',
                tabs: 'CollectionDislikesPageHeader_tabs__gt5AJ',
                tab: 'CollectionDislikesPageHeader_tab__bxN5I',
                tabsShimmer: 'CollectionDislikesPageHeader_tabsShimmer__akKoq',
                tabShimmer: 'CollectionDislikesPageHeader_tabShimmer__0QLuH',
                staticHeader: 'CollectionDislikesPageHeader_staticHeader__75rsF',
                important: 'CollectionDislikesPageHeader_important__5ZM6D',
                stickyHeader: 'CollectionDislikesPageHeader_stickyHeader__cAkxR',
            };
        },
        13936: (t) => {
            t.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        16978: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => _ });
            var s = i(25839),
                a = i(84059),
                r = i(8487),
                n = i(61493),
                l = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (t) => {
                let { size: e = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: v, key: x, className: g } = t,
                    C = (0, a.useRouter)(),
                    k = (0, m.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(k.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: g,
                        isBlock: v,
                        color: _,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
                a = i(82298),
                r = i(61493),
                n = i(23976),
                l = i(40828),
                o = i.n(l);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: h,
                    radius: p = 'l',
                } = t;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, s.jsx)(n.W, { isActive: e, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(n.W, { isActive: e, className: (0, a.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: h }), radius: p }),
                        m &&
                            (0, s.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(n.W, { isActive: e, className: (0, a.$)(o().title, { [o().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21468: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var s = i(74631),
                a = i(56480);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        21971: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => Y });
            var s = i(25839),
                a = i(88204),
                r = i(39004),
                n = i(36619),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                _ = i(74631),
                h = i(31860),
                p = i(91149),
                v = i(92942),
                x = i(27954),
                g = i(57549),
                C = i(86869),
                k = i(69084),
                A = i(4254),
                S = i(51790),
                f = i(6323),
                b = i(24596),
                T = i.n(b);
            let j = (t) => {
                let { coverUri: e, title: i, isDisliked: a, closeToast: n } = t,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(S.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, s.jsx)(k.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(C.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, s.jsx)(f.B, { className: T().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(A.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var y = i(7361),
                N = i(90613),
                I = i(3210),
                E = i(11609),
                R = i(79367),
                L = i(40110),
                O = i(20258),
                w = i(34159),
                P = i(30290),
                D = i(29872),
                z = i(56120),
                M = i(87201),
                W = i(83014),
                H = i(44806),
                B = i(55491),
                K = i(44851),
                U = i(14240),
                F = i(56615),
                $ = i(16386),
                V = i(67303),
                q = i(74682),
                G = i(59043),
                X = i(2144),
                Z = i(6304);
            let Y = (0, a.PA)((t) => {
                var e, i, a;
                let { artist: C, onOpenChange: k, open: A, ...S } = t,
                    { shouldShowBuySubscriptionModal: f, showBuySubscriptionModal: b } = (0, D.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Y },
                        trailer: J,
                        user: Q,
                        experiments: tt,
                    } = (0, x.g)(),
                    te = (0, N.A)(C),
                    ti = (0, y.K)(C),
                    ts = ((t) => {
                        let { user: e } = (0, x.g)(),
                            { notify: i } = (0, v.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, s.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(t), isDisliked: !t.isDisliked };
                            n(!0);
                            let o = await t.toggleDislike();
                            (n(!1),
                                o === h.f.OK
                                    ? i((0, s.jsx)(j, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(C),
                    ta = (0, w.F)(),
                    tr = ''.concat(L.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: tn } = (0, r.A)(),
                    { utmLink: tl } = (0, P.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: to, pathname: tc } = (0, U.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    td = (0, I.A)({ entityVariant: W.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: tu, togglePlay: tm } = (0, M.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: tr,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    t_ = (0, R.P)(),
                    th = tn((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tp = (0, c.c)(() => {
                        if (f && Q.isAuthorized) return void b();
                        tu || tm();
                    }),
                    tv = (0, c.c)(() => {
                        if (!t_()) {
                            if (f) return void b();
                            (null == C ? void 0 : C.id) && (J.setUtmLink(tl), J.openArtistTrailer(C.id), ta(n.DomainObjectType.Artist, C.id));
                        }
                    }),
                    tx = (0, c.c)(() => {
                        Y.open(null == C ? void 0 : C.id);
                    });
                (0, z.N)(A);
                let tg = { variant: B.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: tc },
                    tC = tt.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    tk = null == C || null == (e = C.trailer) ? void 0 : e.isAvailable,
                    tA = tt.checkExperiment(H.z.WebNextArtistInfo, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: k,
                    ariaLabel: tn({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...S,
                    children: [
                        tC && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(E.d, { entityVariant: W.D.ARTIST, adminUrl: td }) }),
                        !T && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(V.L, { onClick: te, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)($.T, {
                                onClick: ti,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !Q.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        tk && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: tv }) }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)(X.C, { onClick: tp, disabled: !(null == C ? void 0 : C.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: k }),
                        }),
                        (0, s.jsx)(q.H, { disabled: !C, shareLink: to, entityMeta: tg }),
                        tA &&
                            (0, s.jsx)(Z.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: tx,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: th,
                                }),
                            }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)(F.D, { onClick: ts, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        23288: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionDislikesPage: () => tl });
            var s = i(25839),
                a = i(88204),
                r = i(84059),
                n = i(74631),
                l = i(61493),
                o = i(5867),
                c = i(1407),
                d = i(20258),
                u = i(10322),
                m = i(89192),
                _ = i(30716),
                h = i(27954),
                p = i(6969),
                v = (function (t) {
                    return ((t.TRACKS = 'tracks'), (t.ARTISTS = 'artists'), t);
                })({}),
                x = (function (t) {
                    return ((t[(t.TRACKS = 0)] = 'TRACKS'), (t[(t.ARTISTS = 1)] = 'ARTISTS'), t);
                })({}),
                g = i(1856),
                C = i.n(g),
                k = i(82298),
                A = i(39004),
                S = i(78299),
                f = i(84058),
                b = i(99401),
                T = i(26076),
                j = i(19412),
                y = i(6968),
                N = i(8487),
                I = i(4254),
                E = i(21784),
                R = i(27625),
                L = i(15270),
                O = i(9162),
                w = i.n(O),
                P = i(79396),
                D = i(9931),
                z = i(53712),
                M = i(25895),
                W = i(83918),
                H = i(23976);
            let B = () =>
                    (0, s.jsxs)('div', {
                        className: w().tabsShimmer,
                        children: [(0, s.jsx)(H.W, { className: w().tabShimmer }), (0, s.jsx)(H.W, { className: w().tabShimmer })],
                    }),
                K = (0, a.PA)((t) => {
                    var e, i, a, r, l, o, c, d, u, m;
                    let { tabsState: _, tabElementId: p, isStickyHeader: g = !1 } = t,
                        {
                            collection: { dislikes: C },
                        } = (0, h.g)(),
                        { formatMessage: k } = (0, A.A)(),
                        { isScrolling: S } = (0, n.useContext)(R.B),
                        f = ((t) => {
                            let e = (0, W.X)();
                            return (0, n.useCallback)(
                                (i) => {
                                    var s;
                                    switch ((null == (s = t.onTabChange) || s.call(t, i), i)) {
                                        case x.TRACKS: {
                                            let { href: t } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: v.TRACKS } });
                                            e(t);
                                            break;
                                        }
                                        case x.ARTISTS: {
                                            let { href: t } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: v.ARTISTS } });
                                            e(t);
                                        }
                                    }
                                },
                                [e, t],
                            );
                        })(_),
                        b = S ? -1 : 0;
                    g && (b = S ? 0 : -1);
                    let T = (0, n.useMemo)(() => {
                            var t, e;
                            return (null == (e = C.tracks) || null == (t = e.items) ? void 0 : t.length)
                                ? ''.concat(k({ id: 'entity-names.tracks' }), ' • ').concat(C.tracks.items.length)
                                : k({ id: 'entity-names.tracks' });
                        }, [null == (i = C.tracks) || null == (e = i.items) ? void 0 : e.length, k]),
                        j = (0, n.useMemo)(() => {
                            var t, e;
                            return (null == (e = C.artists) || null == (t = e.items) ? void 0 : t.length)
                                ? ''.concat(k({ id: 'entity-names.artists' }), ' • ').concat(C.artists.items.length)
                                : k({ id: 'entity-names.artists' });
                        }, [null == (r = C.artists) || null == (a = r.items) ? void 0 : a.length, k]);
                    return (0, s.jsxs)(D.wI, {
                        isShimmerVisible: C.isLoading,
                        shimmer: (0, s.jsx)(B, {}),
                        className: w().tabs,
                        elementId: p,
                        ..._,
                        onTabChange: f,
                        children: [
                            (0, s.jsx)(P.o, {
                                className: w().tab,
                                value: x.TRACKS,
                                title: T,
                                'aria-label': k(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = C.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': S,
                                tabIndex: b,
                            }),
                            (0, s.jsx)(P.o, {
                                className: w().tab,
                                value: x.ARTISTS,
                                title: j,
                                'aria-label': k(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = C.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': S,
                                tabIndex: b,
                            }),
                        ],
                    });
                }),
                U = (0, a.PA)((t) => {
                    let { tabsState: e, tabElementId: i } = t,
                        a = (0, E.W)(),
                        { isScrolling: r } = (0, n.useContext)(R.B);
                    return (0, s.jsxs)('header', {
                        className: w().root,
                        'aria-hidden': r,
                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: w().container,
                                children: [
                                    a.canBack && (0, s.jsx)(L.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !r }),
                                    (0, s.jsx)(I.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: w().title,
                                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, s.jsx)(N.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(K, { tabsState: e, tabElementId: i }),
                        ],
                    });
                });
            var F = i(24508),
                $ = i.n(F);
            let V = (0, a.PA)((t) => {
                var e, i, a;
                let { forwardRef: r, tabsState: l, tabElementId: c } = t,
                    {
                        collection: { dislikes: d },
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: m } = (0, A.A)(),
                    _ = d.artists.isLoading ? 10 : null != (a = null == (i = d.artists) || null == (e = i.items) ? void 0 : e.length) ? a : 0,
                    p = (0, n.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(U, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(T.A, { children: (0, s.jsx)(b.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return d.artists.isRejected
                    ? (0, s.jsx)(S.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: x.ARTISTS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(y.$, {
                                  className: (0, k.$)($().scrollContainer, $().important),
                                  listClassName: (0, k.$)($().content, $().content_withGrid),
                                  customComponents: p,
                                  initialItemCount: _,
                                  totalCount: _,
                                  itemContentCallback: (t) => {
                                      var e, i;
                                      let a = null == (i = d.artists) || null == (e = i.items) ? void 0 : e[t];
                                      if (!a) {
                                          let t = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, s.jsx)(j.V, { 'aria-label': t, round: !0, centered: !0 });
                                      }
                                      return (0, s.jsx)(f.a, { artist: a, contentLinesCount: 3, className: $().item }, a.id);
                                  },
                                  handleRef: r,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var q = i(22939),
                G = i(51549),
                X = i(82967),
                Z = i(30290),
                Y = i(79422),
                J = i(3718),
                Q = i(97805);
            let tt = (0, a.PA)((t) => {
                var e, i, a;
                let { forwardRef: r, tabsState: l, tabElementId: c } = t,
                    { from: d } = (0, Z.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, h.g)(),
                    { formatMessage: _ } = (0, A.A)(),
                    p = (0, Y.w)(),
                    v = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (e = i.items) ? void 0 : e.length) ? a : 0,
                    g = (0, n.useCallback)(
                        (t) => {
                            var e;
                            null == (e = u.tracks) || e.getTracksByRange(t.startIndex, t.endIndex);
                        },
                        [u.tracks],
                    ),
                    C = (0, n.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(U, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(T.A, { children: (0, s.jsx)(b.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return u.tracks.isRejected
                    ? (0, s.jsx)(S.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: x.TRACKS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(y.$, {
                                  className: (0, k.$)($().scrollContainer, $().important),
                                  listClassName: (0, k.$)($().content, $().content_tracks),
                                  customComponents: C,
                                  totalCount: v,
                                  itemContentCallback: (t) => {
                                      var e, i, a;
                                      let r = null == (a = u.tracks) || null == (i = a.items) || null == (e = i[t]) ? void 0 : e.data;
                                      if (!r) return (0, s.jsx)(Q.D, { isActive: !0, className: $().shimmerItem, variant: J.X.PLAYLIST });
                                      let n = p(t, {
                                          contextData: { type: q.K.Various, meta: { id: 'disliked-tracks' }, from: d, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: t },
                                          loadContextMeta: !1,
                                      });
                                      return r.isTrackNonMusic
                                          ? (0, s.jsx)(G.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, s.jsx)(X.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: g,
                                  debounceDurationInMs: 300,
                                  handleRef: r,
                                  context: { listAriaLabel: _({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var te = i(66738),
                ti = i(81596),
                ts = i.n(ti);
            let ta = (0, a.PA)((t) => {
                let { tabsState: e, tabElementId: i } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(U, { tabsState: e, tabElementId: i }),
                        (0, s.jsxs)(o.Kp, {
                            value: e.value,
                            name: e.value,
                            elementId: i,
                            className: ts().root,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, s.jsx)(te.I, {
                                    className: ts().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, s.jsx)(I.DZ, {
                                    className: ts().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_HEAD,
                                    children: (0, s.jsx)(N.A, { id: 'entity-names.list-is-empty' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var tr = i(10603);
            let tn = (0, a.PA)((t) => {
                    let { tabsState: e, tabElementId: i } = t,
                        { isScrolling: a } = (0, n.useContext)(R.B),
                        r = (0, E.W)();
                    return (0, s.jsx)(tr.Y, {
                        variant: tr.V.COMPOSITE,
                        staticClassName: (0, k.$)(w().staticHeader, w().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, k.$)(w().stickyHeader, w().important),
                        stickyChild: (0, s.jsxs)('div', {
                            className: w().container,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER,
                            children: [
                                r.canBack && (0, s.jsx)(L.L, { withForwardControl: !1, withBackwardControl: r.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, s.jsx)(K, { tabsState: e, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                tl = (0, a.PA)(() => {
                    let t = (0, r.useSearchParams)(),
                        {
                            user: e,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, h.g)(),
                        { contentScrollRef: g, setContentScrollRef: k } = (0, m.g)(),
                        A = (0, n.useId)(),
                        S = (0, n.useMemo)(() => {
                            switch (t.get(p.K.TAB)) {
                                case v.TRACKS:
                                    break;
                                case v.ARTISTS:
                                    return x.ARTISTS;
                            }
                            return x.TRACKS;
                        }, [t]),
                        f = (0, o.zb)(S);
                    (e.account.data.uid || (0, r.notFound)(),
                        (0, _.J)(i.isResolved),
                        (0, n.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ));
                    let b = (0, n.useMemo)(() => {
                        switch (f.value) {
                            case x.TRACKS:
                                if (i.tracks.isEmpty) return (0, s.jsx)(ta, { tabsState: f, tabElementId: A });
                                return (0, s.jsx)(tt, { forwardRef: k, tabsState: f, tabElementId: A });
                            case x.ARTISTS:
                                if (i.artists.isEmpty) return (0, s.jsx)(ta, { tabsState: f, tabElementId: A });
                                return (0, s.jsx)(V, { forwardRef: k, tabsState: f, tabElementId: A });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, k, A, f]);
                    if (i.isNeededToLoad) {
                        let t = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, n.use)(Promise.allSettled(t));
                    }
                    return (0, s.jsx)(u.n, {
                        pageId: d._Q.OWN_DISLIKES,
                        children: (0, s.jsx)(c.h, {
                            scrollElement: g,
                            headerThreshold: 148,
                            children: (0, s.jsxs)('div', {
                                className: C().root,
                                'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, s.jsx)(tn, { tabsState: f, tabElementId: A }), b],
                            }),
                        }),
                    });
                });
        },
        24508: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageContent_root__3AoS5',
                scrollContainer: 'CollectionDislikesPageContent_scrollContainer__px7Vr',
                important: 'CollectionDislikesPageContent_important__Oz6io',
                content: 'CollectionDislikesPageContent_content__fScA9',
                content_withGrid: 'CollectionDislikesPageContent_content_withGrid__wcx80',
                content_tracks: 'CollectionDislikesPageContent_content_tracks__Hyiz_',
                footer: 'CollectionDislikesPageContent_footer__E6nZG',
                item: 'CollectionDislikesPageContent_item__aty4k',
                tabPanel: 'CollectionDislikesPageContent_tabPanel__5L5T_',
                shimmerItem: 'CollectionDislikesPageContent_shimmerItem__FMFR5',
            };
        },
        24596: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27954: (t, e, i) => {
            'use strict';
            i.d(e, { P: () => r, g: () => n });
            var s = i(74631),
                a = i(36432);
            let r = (0, s.createContext)(null);
            function n() {
                let t = (0, s.useContext)(r);
                if (null === t) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return t;
            }
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => p });
            var s = i(25839),
                a = i(88204),
                r = i(84059),
                n = i(82298),
                l = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, a.PA)(() =>
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
            var _ = i(53712),
                h = i(27954);
            let p = (0, a.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? e : (i && (0, r.redirect)(_.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        32112: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 23288)));
        },
        36286: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        38726: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => d });
            var s = i(25839),
                a = i(88204),
                r = i(61493),
                n = i(66738),
                l = i(10820),
                o = i(77174),
                c = i(27954);
            let d = (0, a.PA)((t) => {
                let { isLiked: e, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = t,
                    { user: _ } = (0, c.g)(),
                    h = e ? 'liked' : 'like',
                    p = (0, o.$)(e, u);
                return (0, s.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: h, size: 'xxs' }),
                    'aria-pressed': e,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        39528: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => a });
            var s = i(25895);
            let a = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
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
        41544: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => j });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(84059),
                l = i(74631),
                o = i(39004),
                c = i(8487),
                d = i(61493),
                u = i(49656),
                m = i(3392),
                _ = i(4254),
                h = i(4331),
                p = i(85743),
                v = i(27954),
                x = i(19410),
                g = i(12929),
                C = i(62926),
                k = i(97522),
                A = i(40846),
                S = i(91171),
                f = i(87221),
                b = i(12752),
                T = i.n(b);
            let j = (0, r.PA)((t) => {
                let {
                        className: e,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: b,
                        withExplicitMark: j,
                        withSecondaryColor: y,
                        captionSize: N = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: E,
                        textClassName: R,
                        artistsClassName: L,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: D,
                        beforeTitle: z,
                        withArtistLink: M,
                        withTrackLink: W,
                        afterTitle: H,
                        withContextMenuArtists: B,
                    } = t,
                    { formatMessage: K } = (0, o.A)(),
                    { sendNavigateSearchFeedback: U } = (0, p.z)(),
                    {
                        settings: { isMobile: F },
                        slam: $,
                    } = (0, v.g)(),
                    V = (0, S.$)({ withCustomTooltip: w }),
                    q = (0, n.useSearchParams)(),
                    G = (0, A.B)(r, {
                        isMobile: F,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: W,
                        withArtistLink: M,
                        withExplicitMark: j,
                        query: D ? Object.fromEntries(q) : void 0,
                    }),
                    X = (0, l.useMemo)(() => {
                        var t;
                        let e = K({ id: 'entity-names.track-name' }, { trackName: r.title });
                        return ''.concat(e, ' ').concat(null != (t = r.version) ? t : '');
                    }, [K, r.title, r.version]),
                    Z = (0, f.O)({ track: r, onNavigate: U, withSavingQueryParams: D, entityType: g.n.TRACK }),
                    Y = (0, l.useCallback)(
                        (t) => {
                            var e;
                            let i = ''.concat(G.title, ' ').concat(null != (e = G.version) ? e : '');
                            return (0, s.jsx)(m.m_, {
                                enabled: V && !F,
                                offsetOptions: 4,
                                placement: 'top',
                                text: i,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(_.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...t,
                                    children: G.title,
                                }),
                            });
                        },
                        [F, V, N, G.title, G.version],
                    ),
                    J = (0, u.L)(() => {
                        var t;
                        let e = ''.concat(G.title, ' ').concat(null != (t = G.version) ? t : '');
                        return G.shouldShowRemovedTitle
                            ? (0, s.jsx)(m.m_, {
                                  enabled: V && !F,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: K({ id: 'track-title.error-not-found' }),
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(_.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: V ? void 0 : K({ id: 'track-title.error-not-found' }),
                                      children: (0, s.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : G.link
                              ? (0, s.jsx)(k.N, {
                                    onClick: Z,
                                    className: T().albumLink,
                                    href: G.link.href,
                                    'aria-label': X,
                                    title: V ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Y(),
                                })
                              : Y({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }),
                    Q = (0, l.useMemo)(() => +!!P, [P]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !r.isAvailable, [T().root_disliked]: r.isDisliked && !O, [T().root_withSecondaryColor]: y }, e),
                    children: (0, s.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(_.HL, {
                                        className: (0, a.$)(T().text, R),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            z,
                                            J,
                                            G.version &&
                                                (0, s.jsxs)(_.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : G.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, s.jsx)(C.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: I,
                                            variant: G.explicitMark,
                                            className: T().explicitMark,
                                            trackId: r.id,
                                        }),
                                    H,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, s.jsx)(h.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: P }, L, R),
                                    withAllArtistsTitle: E,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: Q,
                                    captionSize: N,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        44408: (t) => {
            t.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
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
        56480: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s });
            let s = (0, i(74631).createContext)({ pageAlbumId: void 0 });
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => r, UC: () => n, dM: () => l, uV: () => o });
            var s = i(93690),
                a = i(58848);
            let r = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (t) => (t.uid ? 'authorized' : 'no-uid'),
                l = (t) => {
                    if (!(t instanceof s.m5) || !(0, a.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, a.N)(t.cause)) return;
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
        59981: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { T: () => s }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(s || (s = {})));
        },
        60924: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => d });
            var s = i(25839),
                a = i(61493),
                r = i(3392),
                n = i(4254),
                l = i(74672),
                o = i.n(l);
            let c = { padding: 8 },
                d = (t) => {
                    let { description: e, enabled: i, title: l, placement: d = 'top', children: u } = t;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: e }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            var s = i(27954),
                a = i(44806);
            let r = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => C });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(36619),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                h = i(29481),
                p = i(85686),
                v = i(27954),
                x = i(53454),
                g = i.n(x);
            let C = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, v.g)(),
                    x = (0, p.Z)(e.url),
                    k = (0, h.N)(),
                    A = (0, n.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(C, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    S = (0, c.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), k({ to: l.AppScreen.ArtistScreen }), x(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: S,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        62926: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => v });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(74245),
                c = i(61493),
                d = i(49656),
                u = i(66738),
                m = i(27954),
                _ = i(60924),
                h = i(92870),
                p = i.n(h);
            let v = (0, r.PA)((t) => {
                let { className: e, getDescriptionTexts: i, trackId: r, containerClassName: h, variant: v, size: x = 'xxxs', ...g } = t,
                    { formatMessage: C } = (0, l.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, m.g)(),
                    [A, S] = (0, n.useState)(null),
                    f = (0, d.L)(() => {
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
                    b = (0, n.useMemo)(() => C({ id: 'extra-explicit.explicit-mark' }), [C]);
                (0, n.useEffect)(() => {
                    i && i().then(S);
                }, [i, r]);
                let T = (null == A ? void 0 : A.join('\n')) || '',
                    j = !!(null == A ? void 0 : A.length) && !k,
                    y = T.length > 0 ? T : b;
                return (0, s.jsx)(_.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, s.jsx)('span', {
                        className: h,
                        children:
                            v === o.JU.SUBSTITUTED
                                ? (0, s.jsxs)('svg', {
                                      className: (0, a.$)(p().explicitMark, e),
                                      viewBox: '0 0 16 16',
                                      role: 'img',
                                      'aria-label': y,
                                      style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                      children: [
                                          (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                          (0, s.jsx)('text', {
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
                                : (0, s.jsx)(u.I, {
                                      className: (0, a.$)(p().explicitMark, e),
                                      'aria-label': y,
                                      variant: f,
                                      size: x,
                                      ...g,
                                      'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                                  }),
                    }),
                });
            });
        },
        63149: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => l });
            var s = i(25839),
                a = i(53712),
                r = i(35015),
                n = i(3163);
            let l = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: e.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: e.coverUri,
                    entityTitle: e.name,
                    isLiked: e.isLiked,
                });
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
        71705: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => p });
            var s = i(25839),
                a = i(39004),
                r = i(71035),
                n = i(21468),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(33660),
                m = i(74631),
                _ = i(31860),
                h = i(93297);
            let p = (t) => {
                let {
                        user: e,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: p },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    { notify: x } = (0, o.l)(),
                    g = (() => {
                        let { notify: t } = (0, o.l)(),
                            [e, i] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (e) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            i(!0);
                            let p = await r.toggleLike();
                            (i(!1),
                                c &&
                                    (p === _.f.OK
                                        ? t((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: l.u.INFO })
                                        : t((0, s.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                        });
                    })(),
                    { pageAlbumId: C } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (t)
                        return p({ pageAlbumId: C, albumId: t.id, isNonMusic: t.isNonMusic })
                            ? void i.openModal()
                            : e.isAuthorized
                              ? g({ album: t })
                              : void x((0, s.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(25839),
                a = i(74631),
                r = i(39004),
                n = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: h,
                            className: p,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = t,
                        { formatMessage: C } = (0, r.A)(),
                        k = C({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: v,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        73182: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => r });
            var s = i(56829),
                a = i(35015);
            let r = (t) => {
                switch (t) {
                    case s._.PODCAST:
                        return a.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        74672: (t) => {
            t.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        77174: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var s = i(39004),
                a = i(56829);
            let r = (t, e) => {
                let { formatMessage: i } = (0, s.A)();
                if (t)
                    switch (e) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (e) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        78299: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => f });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(36619),
                h = i(76945),
                p = i(59450),
                v = i(84e3),
                x = i(97952),
                g = i(89192),
                C = i(53712),
                k = i(15270),
                A = i(68854),
                S = i.n(A);
            let f = (0, r.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: r } = (0, l.A)(),
                    A = r({ id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, x.$)(),
                        a = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!e || !i || !s) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: t,
                                hash: i,
                                pageId: s,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, h.z5)(e.evgenInstance, r);
                    }, [e, t, i, s, a]);
                })(A);
                let { sendRefreshEvent: f } = (function () {
                        let t = (0, p.st)(),
                            { hash: e } = (0, p.gf)(),
                            { pageId: i } = (0, x.$)(),
                            s = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!t || !e || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: e,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(t.evgenInstance, a);
                            }, [t, e, i, s]),
                        };
                    })(),
                    b = (0, n.useCallback)(() => {
                        (f(), (window.location.href = C.Z.main.href));
                    }, [f]),
                    { contentRef: T } = (0, g.g)();
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(S().root, e),
                    children: [
                        i &&
                            (0, s.jsx)(k.L, { withBackwardFallback: '/', className: (0, a.$)(S().navigation, { [S().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(S().content, { [S().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.DZ, { className: (0, a.$)(S().title, S().important), variant: 'h3', size: 'xs', children: A }),
                                (0, s.jsxs)(u.HL, {
                                    className: (0, a.$)(S().text, S().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: b,
                                    className: S().button,
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
                a = i(39004),
                r = i(3392);
            let n = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, a.A)();
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
        79422: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var s = i(74631),
                a = i(71035);
            let r = () => {
                let t = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            t.current.size > 0 && t.current.clear(),
                            () => {
                                t.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((e, i) => (t.current.has(e) ? t.current.get(e) : (t.current.set(e, i), i)))
                );
            };
        },
        80477: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => n });
            var s = i(25839),
                a = i(35015),
                r = i(10546);
            let n = (t) => {
                let { artist: e, closeToast: i } = t;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    entityTitle: e.name,
                    isPinned: e.isPinned,
                    radius: 'round',
                });
            };
        },
        81596: (t) => {
            t.exports = {
                root: 'CollectionDislikesPageEmpty_root__F9g35',
                icon: 'CollectionDislikesPageEmpty_icon__hbz5L',
                title: 'CollectionDislikesPageEmpty_title__AqUTM',
            };
        },
        82967: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => g });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(61493),
                o = i(54880),
                c = i(50209),
                d = i(27954),
                u = i(6349),
                m = i(62661),
                _ = i(74756),
                h = i(41544),
                p = i(39099),
                v = i(7929),
                x = i.n(v);
            let g = (0, r.PA)((t) => {
                var e;
                let {
                        track: i,
                        playContextParams: r,
                        className: v,
                        withDNDBlock: g,
                        isDragging: C,
                        draggingClassName: k,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: S,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: T = !0,
                        beforeTitle: j,
                        removeButtonAriaLabel: y,
                        hideControls: N,
                    } = t,
                    I = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    R = (0, o.X)(i.trackSource, { isMobile: E }),
                    L = (0, n.useCallback)(
                        (t) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...t,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(p.C, {
                    className: (0, a.$)(v, { [x().trackWithDots]: g, [x().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, a.$)(x().dots, k), isDragging: C }) : void 0,
                    meta: (0, s.jsx)(h.j, { withArtistLink: R, beforeTitle: j, track: i, ignoreDislikedStyles: A, withSecondaryColor: S }),
                    playButtonCellRender: L,
                    controls: (0, s.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (e = r.contextData) ? void 0 : e.utmLink,
                        withSecondaryColor: S,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: T,
                        removeButtonAriaLabel: y,
                        hideControls: N,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        83918: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => a });
            var s = i(74631);
            let a = () =>
                (0, s.useCallback)((t) => {
                    {
                        let e = window.history.state;
                        window.history.replaceState(e, '', t);
                    }
                }, []);
        },
        84e3: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => r });
            var s = i(36484),
                a = i(62562);
            let r = () => (0, a.N)().get(s.Zf);
        },
        84058: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => B });
            var s = i(25839),
                a = i(82298),
                r = i(88204),
                n = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                h = i(66738),
                p = i(86869),
                v = i(4254),
                x = i(1797),
                g = i(7361),
                C = i(90613),
                k = i(79367),
                A = i(29481),
                S = i(47009),
                f = i(34159),
                b = i(52512),
                T = i(30290),
                j = i(61561),
                y = i(85686),
                N = i(85743),
                I = i(50209),
                E = i(27954),
                R = i(6323),
                L = i(64720),
                O = i(97522),
                w = i(41580),
                P = i(49438),
                D = i(71996),
                z = i(78437),
                M = i(21971),
                W = i(13936),
                H = i.n(W);
            let B = (0, r.PA)((t) => {
                let { artist: e, className: i, children: r, contentLinesCount: W, topTitleElement: B, bottomTitleElement: K } = t,
                    { ref: U, intersectionPropertyId: F } = (0, b.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, E.g)(),
                    { from: G, utmLink: X } = (0, T.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, l.A)(),
                    [Y, J] = (0, n.useState)(!1),
                    [Q, tt] = (0, n.useState)(!1),
                    [te, ti] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ts, sendNavigateSearchFeedback: ta, sendPlaySearchFeedback: tr } = (0, N.z)(),
                    tn = (0, A.N)(),
                    tl = (0, S.b)(),
                    to = (0, g.K)(e),
                    tc = (0, C.A)(e),
                    { id: td, name: tu, coverUri: tm, isLiked: t_ } = e,
                    th = (0, y.Z)(e.url),
                    [tp, tv] = (0, n.useState)(!1),
                    tx = (0, f.F)(),
                    tg = (0, k.P)(),
                    tC = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tg())) return void t.preventDefault();
                        ($.openArtistTrailer(e.id), tx(o.DomainObjectType.Artist, e.id));
                    }),
                    tk = (0, n.useMemo)(() => {
                        let t = Z({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = t_ ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, t_, Z]),
                    { isPlaying: tA, togglePlay: tS } = (0, I.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: G, utmLink: X }, loadContextMeta: !0 },
                    }),
                    tf = (0, x.S)({ artist: e, callback: th }),
                    tb = (0, x.S)({ artist: e, callback: tS }),
                    tT = (0, u.c)((t) => {
                        (null == ta || ta(), tn({ to: o.AppScreen.ArtistScreen }), tf(t));
                    }),
                    tj = (0, j.N)(),
                    ty = (0, u.c)(() => {
                        if (!tg()) {
                            if (tj) return void q.open();
                            (Y || tA || (J(!0), null == tr || tr()), tb(), tl(!tA));
                        }
                    }),
                    tN = (0, u.c)(() => {
                        (Q || t_ || (tt(!0), null == ts || ts()), to());
                    }),
                    tI = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tE = (0, u.c)((t) => {
                        (ti(t), tv(t));
                    }),
                    tR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.g,
                                {
                                    artist: e,
                                    onOpenChange: tE,
                                    open: te,
                                    onClick: tI,
                                    className: (0, a.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tI, tE, te],
                    ),
                    tL = (0, n.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(D.k, {
                                        className: (0, a.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tC,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tC]),
                    tO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, a.$)(H().pinButton, H().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tw = (0, m.L)(() => {
                        if (e.isAvailable)
                            return (0, s.jsx)(
                                _.hg,
                                {
                                    isVisible: te || tp,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ty,
                                            isPlaying: tA,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(H().likeButton, H().control),
                                            isLiked: t_,
                                            onClick: tN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tR,
                                    pinControl: tO,
                                    trailerControl: tL,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tP = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(p.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: tT,
                                    children: [
                                        (0, s.jsx)(R.B, {
                                            className: H().image,
                                            src: tm,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tk,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tw,
                                    ],
                                }),
                            }),
                        [tT, tm, tk, e.isAvailable, tw],
                    );
                return (0, s.jsx)(_.MN, {
                    ref: U,
                    className: (0, a.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': tk,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            B,
                            (0, s.jsx)(v.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(O.N, {
                                    className: H().titleLink,
                                    href: e.url,
                                    tabIndex: -1,
                                    'aria-label': tk,
                                    onClick: tT,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, s.jsx)(O.N, { className: H().srTitleLink, href: e.url, onClick: tT, children: tk }),
                    'data-intersection-property-id': F,
                    contentLinesCount: W,
                    view: tP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        90613: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => m });
            var s = i(25839),
                a = i(33660),
                r = i(74631),
                n = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [_, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t) return;
                    if (!e.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(t), isPinned: !t.isPinned };
                    h(!0);
                    let n = await t.togglePin();
                    (h(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t, e.isAuthorized, _, m, i]);
            };
        },
        90780: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => c });
            var s = i(25839),
                a = i(74631),
                r = i(61493),
                n = i(4254),
                l = i(44408),
                o = i.n(l);
            let c = (t) => {
                let { getDescriptionTexts: e, entityId: i } = t,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        e && e().then(c);
                    }, [e]),
                    l)
                )
                    return l.map((t, e) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: t,
                            },
                            ''.concat(i, '-descpription-text-').concat(e),
                        ),
                    );
            };
        },
        92870: (t) => {
            t.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        93297: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => l });
            var s = i(25839),
                a = i(88204),
                r = i(3163),
                n = i(73182);
            let l = (0, a.PA)((t) => {
                let { album: e, closeToast: i, withLink: a } = t,
                    l = (0, n.b)(e.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    withLink: a,
                });
            });
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1676, 3349, 7339, 6287, 3472, 2121, 1107, 7349, 9505, 8451, 1583, 6749, 3291, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 7985,
                3269, 4163, 3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 2533, 8222, 4932, 4475, 5056, 7358,
            ],
            () => t((t.s = 32112)),
        ),
            (_N_E = t.O()));
    },
]);
