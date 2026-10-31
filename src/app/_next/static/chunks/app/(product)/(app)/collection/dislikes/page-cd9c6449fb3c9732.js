(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2232],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => r });
            var s = i(2058),
                a = i(61691);
            let r = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
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
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var s = i(72288),
                a = i(97956);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            var s = i(61691),
                a = i(15077);
            let r = (e) => {
                switch (e) {
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
        6668: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(53548),
                a = i(29993);
            let r = () => {
                let e = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var s = i(88800),
                a = i(88969),
                r = i(58390),
                n = i(17392),
                l = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: x, isBlock: p, key: v, className: g } = e,
                    C = (0, r.useRouter)(),
                    k = (0, m.N)().get(u.QG),
                    b = (0, l.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(k.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: b,
                        className: g,
                        isBlock: p,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: x || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        9184: (e) => {
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
        9590: (e) => {
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                _ = i(73805),
                h = i(15232),
                x = i(56712),
                p = i(26243),
                v = i.n(p);
            let g = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: p,
                        withDNDBlock: g,
                        isDragging: C,
                        draggingClassName: k,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: S,
                        withDislike: f,
                        withTrailer: T = !0,
                        beforeTitle: j,
                        removeButtonAriaLabel: y,
                        hideControls: N,
                    } = e,
                    I = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    R = (0, o.X)(i.trackSource, { isMobile: E }),
                    w = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(x.C, {
                    className: (0, a.$)(p, { [v().trackWithDots]: g, [v().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, a.$)(v().dots, k), isDragging: C }) : void 0,
                    meta: (0, s.jsx)(h.j, { withArtistLink: R, beforeTitle: j, track: i, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: w,
                    controls: (0, s.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: S,
                        withDislike: f,
                        withTrailer: T,
                        removeButtonAriaLabel: y,
                        hideControls: N,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: s } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: a };
            };
            var h = i(21010),
                x = i.n(h),
                p = i(17392),
                v = i(29504),
                g = i(91292),
                C = i(2058),
                k = i(92716),
                b = i(96527),
                A = i(78940),
                S = i(55693),
                f = i(58217);
            let T = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: h,
                            ariaLabel: x,
                            tooltipText: T,
                            isTooltipEnabled: j,
                            handleNavigate: y,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: n } = (0, C.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, A.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, S.z)(),
                                h = (0, b.N)(),
                                x = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                p = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, f.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: x }),
                                v = (0, d.c)((e) => {
                                    (h({ to: k.AppScreen.ArtistScreen }), null == _ || _(), p(e));
                                });
                            return { ...l, handleNavigate: v };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, s.jsx)(g.N, {
                              ..._,
                              'aria-label': x,
                              className: i,
                              onClick: y,
                              title: h,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: h,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(T, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(T, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
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
            var y = i(88969),
                N = i(65453);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(x().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(61013),
                R = i(87819),
                w = i(40634),
                L = i(48468),
                O = i.n(L);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(w.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var z = i(19934),
                M = i(70396),
                W = i.n(M);
            let H = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, C.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, a.$)(W().root, W().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
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
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                U = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: p,
                            variant: v = 'breakAll',
                            spoilerComponent: g,
                            ...C
                        } = e,
                        k = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                h = null != (t = e.artists) ? t : [],
                                x = null == (i = e.withAllArtistsTitle) || i,
                                p = null == (s = e.withCustomTooltip) || s,
                                v = (0, n.useRef)(null),
                                [g, C] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                b = ((!k || 1 === h.length) && m) || !m,
                                A = ((e, t) => {
                                    var i, s, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        l = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = t;
                                                return {
                                                    primary: _(e, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: a, visibleArtistsCount: g ? void 0 : r, withComposer: o, withLink: !!b && l, artistIdWithoutLink: c }),
                                S = x ? A.allArtistsTitle : '',
                                f = (0, d.c)((e) => {
                                    (C(!0), e.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: p,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!S && p && !m && !k,
                                title: !S || p || m ? void 0 : S,
                            };
                        })(C),
                        b = (0, l.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, s.jsx)(I, { spoilerClassName: r, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        A = (0, s.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(x().root, x()['root_variant_'.concat(v)], { [x().root_clamp]: i && i > 0, [x().ellipsis]: !i }, t),
                                title: k.title,
                                children: [
                                    k.groups.map((e) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: p,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, s.jsx)(B, { labelRef: k.labelRef, artists: k.artists, label: A }) : A;
                });
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var s = i(53548);
            let a = () =>
                (0, s.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                h = i(55693),
                x = i(72288),
                p = i(24548),
                v = i(85587),
                g = i(90224),
                C = i(91292),
                k = i(7608),
                b = i(6667),
                A = i(85463),
                S = i(65462),
                f = i.n(S);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: S,
                        withExplicitMark: T,
                        withSecondaryColor: j,
                        captionSize: y = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: E,
                        artistsClassName: R,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: L = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: z,
                        variant: M,
                        withTrackLink: W,
                        afterTitle: H,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: K } = (0, h.z)(),
                    {
                        settings: { isMobile: F },
                        slam: $,
                    } = (0, x.g)(),
                    V = (0, b.$)({ withCustomTooltip: L }),
                    q = (0, o.useSearchParams)(),
                    G = (0, k.B)(r, {
                        isMobile: F,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: S,
                        withTrackLink: W,
                        withArtistLink: z,
                        variant: M,
                        withExplicitMark: T,
                        query: P ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: Z,
                        ariaLabel: X,
                        tooltipText: Y,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(r, G, { canEnableCustomTooltip: V, isMobile: F }, U),
                    et = (0, A.O)({ track: r, onNavigate: K, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Y,
                                hoverSettings: p.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(f().text, f().title),
                                    type: 'entity',
                                    size: y,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Z,
                                }),
                            }),
                        [y, Z, Y, ee],
                    ),
                    es = (0, d.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Y,
                                  hoverSettings: p.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(f().text, f().title),
                                      type: 'entity',
                                      size: y,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: Z,
                                  }),
                              })
                            : G.link
                              ? (0, s.jsx)(C.N, {
                                    onClick: et,
                                    className: f().albumLink,
                                    href: G.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!O, [O]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(f().root, { [f().root_disabled]: !r.isAvailable, [f().root_disliked]: r.isDisliked && !w, [f().root_withSecondaryColor]: j }, t),
                    children: (0, s.jsxs)('div', {
                        className: f().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(f().titleContainer, { [f().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(f().text, E),
                                        type: 'entity',
                                        size: y,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            es,
                                            G.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(f().text, f().version),
                                                    type: 'entity',
                                                    size: y,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, s.jsx)(g.N, {
                                            containerClassName: f().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: N,
                                            variant: G.explicitMark,
                                            className: f().explicitMark,
                                            trackId: r.id,
                                        }),
                                    H,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(f().text, { [f().artists]: O }, R, E),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(f().text, f().link),
                                    captionClassName: (0, a.$)(f().text, f().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: y,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17215: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 77853)));
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var s = i(88800),
                a = i(53548),
                r = i(17392),
                n = i(29504),
                l = i(15526),
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
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => B });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                _ = i(29832),
                h = i(52300),
                x = i(7555),
                p = i(29504),
                v = i(91959),
                g = i(64207),
                C = i(77455),
                k = i(5407),
                b = i(96527),
                A = i(76675),
                S = i(25557),
                f = i(28830),
                T = i(84384),
                j = i(4795),
                y = i(78940),
                N = i(55693),
                I = i(39079),
                E = i(72288),
                R = i(81877),
                w = i(49738),
                L = i(91292),
                O = i(56862),
                P = i(16704),
                D = i(56446),
                z = i(36207),
                M = i(43161),
                W = i(93434),
                H = i.n(W);
            let B = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: W, topTitleElement: B, bottomTitleElement: U } = e,
                    { ref: K, intersectionPropertyId: F } = (0, f.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, E.g)(),
                    { from: G, utmLink: Z } = (0, T.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: X } = (0, l.A)(),
                    [Y, J] = (0, n.useState)(!1),
                    [Q, ee] = (0, n.useState)(!1),
                    [et, ei] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: es, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, N.z)(),
                    en = (0, b.N)(),
                    el = (0, A.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, C.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    eh = (0, y.Z)(t.url),
                    [ex, ep] = (0, n.useState)(!1),
                    ev = (0, S.F)(),
                    eg = (0, k.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        ($.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    ek = (0, n.useMemo)(() => {
                        let e = X({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? X({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, X]),
                    { isPlaying: eb, togglePlay: eA } = (0, I.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: G, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eS = (0, v.S)({ artist: t, callback: eh }),
                    ef = (0, v.S)({ artist: t, callback: eA }),
                    eT = (0, u.c)((e) => {
                        (null == ea || ea(), en({ to: o.AppScreen.ArtistScreen }), eS(e));
                    }),
                    ej = (0, j.N)(),
                    ey = (0, u.c)(() => {
                        if (!eg()) {
                            if (ej) return void q.open();
                            (Y || eb || (J(!0), null == er || er()), ef(), el(!eb));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (Q || e_ || (ee(!0), null == es || es()), eo());
                    }),
                    eI = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eE = (0, u.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: eI,
                                    className: (0, a.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, s.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eE, et],
                    ),
                    ew = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(D.k, {
                                        className: (0, a.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eC,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eC]),
                    eL = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                O.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(H().pinButton, H().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eO = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ex,
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
                                            onClick: ey,
                                            isPlaying: eb,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        w.c,
                                        {
                                            className: (0, a.$)(H().likeButton, H().control),
                                            isLiked: e_,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eL,
                                    trailerControl: ew,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, s.jsx)(R.B, {
                                            className: H().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ek,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eT, em, ek, t.isAvailable, eO],
                    );
                return (0, s.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': ek,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            B,
                            (0, s.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(L.N, {
                                    className: H().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ek,
                                    onClick: eT,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, s.jsx)(L.N, { className: H().srTitleLink, href: t.url, onClick: eT, children: ek }),
                    'data-intersection-property-id': F,
                    contentLinesCount: W,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        23390: (e) => {
            e.exports = { root: 'CollectionDislikesPage_root__Qnohu' };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => R });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(78793),
                _ = i(92716),
                h = i(99984),
                x = i(90780),
                p = i(65523),
                v = i(14518),
                g = i(44230),
                C = i(4370),
                k = i(72288),
                b = i(97956),
                A = i(56248),
                S = i(90688),
                f = i(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = i(96856),
                y = i.n(j);
            let N = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: n } = (0, k.g)(),
                    { contentRef: l } = (0, g.g)(),
                    d = (0, f.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(y().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(y().navigation, { [y().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(S._V, { className: y().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: y().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: y().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: y().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: y().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: y().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = i(9184),
                E = i.n(I);
            let R = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: S } = (0, l.A)(),
                    f = (0, n.useContext)(k.P),
                    T = null == f ? void 0 : f.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    j = S(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, x.st)(),
                        { hash: i } = (0, x.gf)(),
                        { pageId: s } = (0, v.$)(),
                        a = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
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
                        r && (0, h.z5)(t.evgenInstance, r);
                    }, [t, e, i, s, a]);
                })(j);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, x.st)(),
                            { hash: t } = (0, x.gf)(),
                            { pageId: i } = (0, v.$)(),
                            s = (0, p.U)();
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
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(e.evgenInstance, a);
                            }, [e, t, i, s]),
                        };
                    })(),
                    I = (0, n.useCallback)(() => {
                        (y(), (window.location.href = C.Z.main.href));
                    }, [y]),
                    { contentRef: R } = (0, g.g)();
                return T
                    ? (0, s.jsx)(N, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(E().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(E().navigation, { [E().navigation_desktop]: !R }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(E().content, { [E().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, a.$)(E().title, E().important), variant: 'h3', size: 'xs', children: j }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, a.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: I,
                                          className: E().button,
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
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var s = i(67174);
            let a = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(88800),
                a = i(2058),
                r = i(17610);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, s.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var s = i(88800),
                a = i(65724),
                r = i(17392),
                n = i(19994),
                l = i(9590),
                o = i.n(l);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: h,
                    radius: x = 'l',
                } = e;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, s.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(n.W, { isActive: t, className: (0, a.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: h }), radius: x }),
                        m &&
                            (0, s.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(n.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(92716),
                o = i(17392),
                c = i(29993),
                d = i(90688),
                u = i(19934),
                m = i(7555),
                _ = i(29504),
                h = i(96527),
                x = i(78940),
                p = i(72288),
                v = i(80932),
                g = i.n(v);
            let C = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, p.g)(),
                    v = (0, x.Z)(t.url),
                    k = (0, h.N)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), k({ to: l.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: A,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Y });
            var s = i(88800),
                a = i(84961),
                r = i(2058),
                n = i(92716),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                h = i(79390),
                x = i(29595),
                p = i(74965),
                v = i(72288),
                g = i(66943),
                C = i(7555),
                k = i(73170),
                b = i(29504),
                A = i(59304),
                S = i(81877),
                f = i(85074),
                T = i.n(f);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(A.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, s.jsx)(k.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(C.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, s.jsx)(S.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(b.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var y = i(64207),
                N = i(77455),
                I = i(48749),
                E = i(22505),
                R = i(5407),
                w = i(64284),
                L = i(12816),
                O = i(25557),
                P = i(84384),
                D = i(9618),
                z = i(95210),
                M = i(47964),
                W = i(46936),
                H = i(97956),
                B = i(98953),
                U = i(32721),
                K = i(18130),
                F = i(56117),
                $ = i(93091),
                V = i(27817),
                q = i(74064),
                G = i(15425),
                Z = i(81066),
                X = i(64546);
            let Y = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: C, onOpenChange: k, open: b, ...A } = e,
                    { shouldShowBuySubscriptionModal: S, showBuySubscriptionModal: f } = (0, D.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Y },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, N.A)(C),
                    ei = (0, y.K)(C),
                    es = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, p.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === h.f.OK
                                    ? i((0, s.jsx)(j, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, s.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                        });
                    })(C),
                    ea = (0, O.F)(),
                    er = ''.concat(w.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: en } = (0, r.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: w.U.ARTIST, contextType: o.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: eo, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    ed = (0, I.A)({ entityVariant: W.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, M.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: L._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    e_ = (0, R.P)(),
                    eh = en((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, c.c)(() => {
                        if (S && Q.isAuthorized) return void f();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (S) return void f();
                            (null == C ? void 0 : C.id) && (J.setUtmLink(el), J.openArtistTrailer(C.id), ea(n.DomainObjectType.Artist, C.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Y.open(null == C ? void 0 : C.id);
                    });
                (0, z.N)(b);
                let eg = { variant: B.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: ec },
                    eC = ee.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    ek = null == C || null == (t = C.trailer) ? void 0 : t.isAvailable,
                    eb = ee.checkExperiment(H.z.WebNextArtistInfo, 'on'),
                    eA = !ee.checkExperiment(H.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: b,
                    onOpenChange: k,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...A,
                    children: [
                        eC && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)(E.d, { entityVariant: W.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)(V.L, { onClick: et, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, s.jsx)(X.WithOffline, {
                            fallback: (0, s.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !Q.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        ek && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: ep }) }),
                        eA &&
                            (0, s.jsx)(X.WithOffline, {
                                fallback: (0, s.jsx)(Z.C, { onClick: ex, disabled: !(null == C ? void 0 : C.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: k }),
                            }),
                        (0, s.jsx)(q.H, { disabled: !C, shareLink: eo, entityMeta: eg }),
                        eb &&
                            (0, s.jsx)(X.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, s.jsx)(X.WithOffline, {
                            fallback: (0, s.jsx)(F.D, { onClick: es, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(88800),
                a = i(84961),
                r = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    h = t ? 'liked' : 'like',
                    x = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: h, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: x,
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            let s = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                a = i(4370),
                r = i(15077),
                n = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: h,
                            className: x,
                            forwardRef: p,
                            style: v,
                            children: g,
                        } = e,
                        { formatMessage: C } = (0, r.A)(),
                        k = C({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: p,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => x });
            var s = i(88800),
                a = i(84961),
                r = i(58390),
                n = i(65724),
                l = i(88969),
                o = i(29504),
                c = i(7628),
                d = i(42674),
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
            var _ = i(4370),
                h = i(72288);
            let x = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (i && (0, r.redirect)(_.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, h] = (0, r.useState)(!1),
                    { formatMessage: x } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let n = await e.toggleLike();
                    (h(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, x, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var s = i(88800),
                a = i(15077),
                r = i(33719);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var s = i(4086),
                a = i(41928),
                r = i(44084);
            let n = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof r.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, i), i);
                    })((0, a.N)().get(s.Zf));
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68878: (e) => {
            e.exports = {
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
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [_, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let n = await e.togglePin();
                    (h(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        77853: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionDislikesPage: () => el });
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                n = i(58390),
                l = i(17392),
                o = i(98225),
                c = i(69630),
                d = i(12816),
                u = i(59844),
                m = i(44230),
                _ = i(37670),
                h = i(72288),
                x = i(34303),
                p = (function (e) {
                    return ((e.TRACKS = 'tracks'), (e.ARTISTS = 'artists'), e);
                })({}),
                v = (function (e) {
                    return ((e[(e.TRACKS = 0)] = 'TRACKS'), (e[(e.ARTISTS = 1)] = 'ARTISTS'), e);
                })({}),
                g = i(23390),
                C = i.n(g),
                k = i(65724),
                b = i(2058),
                A = i(32596),
                S = i(21256),
                f = i(86790),
                T = i(60266),
                j = i(37770),
                y = i(79418),
                N = i(88969),
                I = i(29504),
                E = i(46422),
                R = i(63807),
                w = i(56248),
                L = i(95228),
                O = i.n(L),
                P = i(87366),
                D = i(76099),
                z = i(4370),
                M = i(67174),
                W = i(14912),
                H = i(19994);
            let B = () =>
                    (0, s.jsxs)('div', {
                        className: O().tabsShimmer,
                        children: [(0, s.jsx)(H.W, { className: O().tabShimmer }), (0, s.jsx)(H.W, { className: O().tabShimmer })],
                    }),
                U = (0, a.PA)((e) => {
                    var t, i, a, n, l, o, c, d, u, m;
                    let { tabsState: _, tabElementId: x, isStickyHeader: g = !1 } = e,
                        {
                            collection: { dislikes: C },
                        } = (0, h.g)(),
                        { formatMessage: k } = (0, b.A)(),
                        { isScrolling: A } = (0, r.useContext)(R.B),
                        S = ((e) => {
                            let t = (0, W.X)();
                            return (0, r.useCallback)(
                                (i) => {
                                    var s;
                                    switch ((null == (s = e.onTabChange) || s.call(e, i), i)) {
                                        case v.TRACKS: {
                                            let { href: e } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: p.TRACKS } });
                                            t(e);
                                            break;
                                        }
                                        case v.ARTISTS: {
                                            let { href: e } = (0, M.u)(z.Z.collectionDislikes.href, { query: { tab: p.ARTISTS } });
                                            t(e);
                                        }
                                    }
                                },
                                [t, e],
                            );
                        })(_),
                        f = A ? -1 : 0;
                    g && (f = A ? 0 : -1);
                    let T = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = C.tracks) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(k({ id: 'entity-names.tracks' }), ' • ').concat(C.tracks.items.length)
                                : k({ id: 'entity-names.tracks' });
                        }, [null == (i = C.tracks) || null == (t = i.items) ? void 0 : t.length, k]),
                        j = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = C.artists) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(k({ id: 'entity-names.artists' }), ' • ').concat(C.artists.items.length)
                                : k({ id: 'entity-names.artists' });
                        }, [null == (n = C.artists) || null == (a = n.items) ? void 0 : a.length, k]);
                    return (0, s.jsxs)(D.wI, {
                        isShimmerVisible: C.isLoading,
                        shimmer: (0, s.jsx)(B, {}),
                        className: O().tabs,
                        elementId: x,
                        ..._,
                        onTabChange: S,
                        children: [
                            (0, s.jsx)(P.o, {
                                className: O().tab,
                                value: v.TRACKS,
                                title: T,
                                'aria-label': k(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = C.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': A,
                                tabIndex: f,
                            }),
                            (0, s.jsx)(P.o, {
                                className: O().tab,
                                value: v.ARTISTS,
                                title: j,
                                'aria-label': k(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = C.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': A,
                                tabIndex: f,
                            }),
                        ],
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        a = (0, E.W)(),
                        { isScrolling: n } = (0, r.useContext)(R.B);
                    return (0, s.jsxs)('header', {
                        className: O().root,
                        'aria-hidden': n,
                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: O().container,
                                children: [
                                    a.canBack && (0, s.jsx)(w.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !n }),
                                    (0, s.jsx)(I.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: O().title,
                                        'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, s.jsx)(N.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(U, { tabsState: t, tabElementId: i }),
                        ],
                    });
                });
            var F = i(68878),
                $ = i.n(F);
            let V = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: c } = e,
                    {
                        collection: { dislikes: d },
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: m } = (0, b.A)(),
                    _ = d.artists.isLoading ? 10 : null != (a = null == (i = d.artists) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    x = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(T.A, { children: (0, s.jsx)(f.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return d.artists.isRejected
                    ? (0, s.jsx)(A.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: v.ARTISTS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(y.$, {
                                  className: (0, k.$)($().scrollContainer, $().important),
                                  listClassName: (0, k.$)($().content, $().content_withGrid),
                                  customComponents: x,
                                  initialItemCount: _,
                                  totalCount: _,
                                  itemContentCallback: (e) => {
                                      var t, i;
                                      let a = null == (i = d.artists) || null == (t = i.items) ? void 0 : t[e];
                                      if (!a) {
                                          let e = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, s.jsx)(j.V, { 'aria-label': e, round: !0, centered: !0 });
                                      }
                                      return (0, s.jsx)(S.a, { artist: a, contentLinesCount: 3, className: $().item }, a.id);
                                  },
                                  handleRef: n,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var q = i(18593),
                G = i(76843),
                Z = i(10829),
                X = i(84384),
                Y = i(6668),
                J = i(98644),
                Q = i(93015);
            let ee = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: c } = e,
                    { from: d } = (0, X.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, h.g)(),
                    { formatMessage: _ } = (0, b.A)(),
                    x = (0, Y.w)(),
                    p = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    g = (0, r.useCallback)(
                        (e) => {
                            var t;
                            null == (t = u.tracks) || t.getTracksByRange(e.startIndex, e.endIndex);
                        },
                        [u.tracks],
                    ),
                    C = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: c }),
                            Footer: () => (0, s.jsx)(T.A, { children: (0, s.jsx)(f.w, { className: $().footer }) }),
                        }),
                        [c, l],
                    );
                return u.tracks.isRejected
                    ? (0, s.jsx)(A.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(o.Kp, {
                              value: l.value,
                              name: v.TRACKS,
                              elementId: c,
                              className: $().tabPanel,
                              children: (0, s.jsx)(y.$, {
                                  className: (0, k.$)($().scrollContainer, $().important),
                                  listClassName: (0, k.$)($().content, $().content_tracks),
                                  customComponents: C,
                                  totalCount: p,
                                  itemContentCallback: (e) => {
                                      var t, i, a;
                                      let r = null == (a = u.tracks) || null == (i = a.items) || null == (t = i[e]) ? void 0 : t.data;
                                      if (!r) return (0, s.jsx)(Q.D, { isActive: !0, className: $().shimmerItem, variant: J.X.PLAYLIST });
                                      let n = x(e, {
                                          contextData: { type: q.K.Various, meta: { id: 'disliked-tracks' }, from: d, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: e },
                                          loadContextMeta: !1,
                                      });
                                      return r.isTrackNonMusic
                                          ? (0, s.jsx)(G.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, s.jsx)(Z.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: g,
                                  debounceDurationInMs: 300,
                                  handleRef: n,
                                  context: { listAriaLabel: _({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var et = i(52300),
                ei = i(92518),
                es = i.n(ei);
            let ea = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: i } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(K, { tabsState: t, tabElementId: i }),
                        (0, s.jsxs)(o.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: i,
                            className: es().root,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, s.jsx)(et.I, {
                                    className: es().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, s.jsx)(I.DZ, {
                                    className: es().title,
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
            var er = i(93317);
            let en = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { isScrolling: a } = (0, r.useContext)(R.B),
                        n = (0, E.W)();
                    return (0, s.jsx)(er.Y, {
                        variant: er.V.COMPOSITE,
                        staticClassName: (0, k.$)(O().staticHeader, O().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, k.$)(O().stickyHeader, O().important),
                        stickyChild: (0, s.jsxs)('div', {
                            className: O().container,
                            'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER,
                            children: [
                                n.canBack && (0, s.jsx)(w.L, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, s.jsx)(U, { tabsState: t, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                el = (0, a.PA)(() => {
                    let e = (0, n.useSearchParams)(),
                        {
                            user: t,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, h.g)(),
                        { contentScrollRef: g, setContentScrollRef: k } = (0, m.g)(),
                        b = (0, r.useId)(),
                        A = (0, r.useMemo)(() => {
                            switch (e.get(x.K.TAB)) {
                                case p.TRACKS:
                                    break;
                                case p.ARTISTS:
                                    return v.ARTISTS;
                            }
                            return v.TRACKS;
                        }, [e]),
                        S = (0, o.zb)(A);
                    (t.account.data.uid || (0, n.notFound)(),
                        (0, _.J)(i.isResolved),
                        (0, r.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ));
                    let f = (0, r.useMemo)(() => {
                        switch (S.value) {
                            case v.TRACKS:
                                if (i.tracks.isEmpty) return (0, s.jsx)(ea, { tabsState: S, tabElementId: b });
                                return (0, s.jsx)(ee, { forwardRef: k, tabsState: S, tabElementId: b });
                            case v.ARTISTS:
                                if (i.artists.isEmpty) return (0, s.jsx)(ea, { tabsState: S, tabElementId: b });
                                return (0, s.jsx)(V, { forwardRef: k, tabsState: S, tabElementId: b });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, k, b, S]);
                    if (i.isNeededToLoad) {
                        let e = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, r.use)(Promise.allSettled(e));
                    }
                    return (0, s.jsx)(u.n, {
                        pageId: d._Q.OWN_DISLIKES,
                        children: (0, s.jsx)(c.h, {
                            scrollElement: g,
                            headerThreshold: 148,
                            children: (0, s.jsxs)('div', {
                                className: C().root,
                                'data-test-id': l.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, s.jsx)(en, { tabsState: S, tabElementId: b }), f],
                            }),
                        }),
                    });
                });
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => p });
            var s = i(88800),
                a = i(65724),
                r = i(61013),
                n = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...r } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...r });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                h = i(75151);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, x] = (0, n.useState)(null),
                        p = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && x(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && p(m);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: p, totalCount: l, endReached: v, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: C,
                            debounceDurationInMs: k,
                            initialItemCount: b,
                            minInitialItemCount: A = 20,
                            handleRef: S,
                            alwaysShowScrollbar: f = !1,
                            testId: T,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: y,
                            ...N
                        } = e,
                        [I, E] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        w = (0, n.useMemo)(() => {
                            var e, t;
                            return j
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
                        }, [i, C, j]),
                        L = b ? Math.min(b, A) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: I || f, [d().root_notScrolling]: !I && !f }, t),
                        'data-test-id': T,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(x, {
                                overscan: p,
                                components: w,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: _,
                                scrollerRef: S,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: y,
                                ...N,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var s = i(53548),
                a = i(52150);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => x });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                _ = i(17332),
                h = i.n(_);
            let x = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: x, size: p = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, u.g)(),
                    [k, b] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(b);
                }, [i, r]);
                let {
                    iconVariant: A,
                    descriptionText: S,
                    isTooltipEnabled: f,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = e,
                        r = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !a,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: x, descriptionTexts: k, isMobile: C }, g);
                return (0, s.jsx)(m.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: f,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children: (0, s.jsx)(c.I, {
                            className: (0, a.$)(h().explicitMark, t),
                            'aria-label': T,
                            variant: A,
                            size: p,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var s = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92518: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageEmpty_root__F9g35',
                icon: 'CollectionDislikesPageEmpty_icon__hbz5L',
                title: 'CollectionDislikesPageEmpty_title__AqUTM',
            };
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var s = i(88800),
                a = i(2058),
                r = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                _ = i(79390),
                h = i(96295);
            let x = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: x },
                    } = (0, c.g)(),
                    { formatMessage: p } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: x } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            n(!0);
                            let p = await r.toggleLike();
                            if ((n(!1), !c)) return;
                            let v = t.modal.isOpened;
                            p === _.f.OK
                                ? e((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: v ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: v ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: C } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return x({ pageAlbumId: C, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void v((0, s.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        93434: (e) => {
            e.exports = {
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
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                n = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
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
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95228: (e) => {
            e.exports = {
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
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                a = i(84961),
                r = i(42729),
                n = i(5048);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    l = (0, n.b)(t.type);
                return (0, s.jsx)(r.O, {
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
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => n, dM: () => l, uV: () => o });
            var s = i(89916),
                a = i(67990);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, a.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, a.N)(e.cause)) return;
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
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 5108, 127, 1191, 1931, 7617, 3637, 7759, 5083, 4596, 8380, 6263, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 5151, 9752,
                4732, 1195, 1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 818, 7053, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 17215)),
        ),
            (_N_E = e.O()));
    },
]);
