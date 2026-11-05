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
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: v, className: g } = e,
                    k = (0, r.useRouter)(),
                    A = (0, m.N)().get(u.QG),
                    T = (0, l.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), k.push(A.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: T,
                        className: g,
                        isBlock: x,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
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
                p = i(15232),
                h = i(56712),
                x = i(26243),
                v = i.n(x);
            let g = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: x,
                        withDNDBlock: g,
                        isDragging: k,
                        draggingClassName: A,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: S,
                        withTrailer: j = !0,
                        beforeTitle: f,
                        removeButtonAriaLabel: I,
                        hideControls: N,
                    } = e,
                    y = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    O = (0, o.X)(i.trackSource, { isMobile: E }),
                    R = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...e,
                            }),
                        [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(h.C, {
                    className: (0, a.$)(x, { [v().trackWithDots]: g, [v().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, a.$)(v().dots, A), isDragging: k }) : void 0,
                    meta: (0, s.jsx)(p.j, { withArtistLink: O, beforeTitle: f, track: i, ignoreDislikedStyles: T, withSecondaryColor: C }),
                    playButtonCellRender: R,
                    controls: (0, s.jsx)(_.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: S,
                        withTrailer: j,
                        removeButtonAriaLabel: I,
                        hideControls: N,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
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
            var p = i(21010),
                h = i.n(p),
                x = i(17392),
                v = i(29504),
                g = i(91292),
                k = i(2058),
                A = i(87999),
                T = i(80643),
                C = i(78940),
                b = i(55693),
                S = i(58217);
            let j = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: j,
                            isTooltipEnabled: f,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: n } = (0, k.A)(),
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
                                m = (0, C.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, b.z)(),
                                p = (0, T.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, S.l)({
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
                                })({ artist: l.artist, callback: h }),
                                v = (0, d.c)((e) => {
                                    (p({ to: A.AppScreen.ArtistScreen }), null == _ || _(), x(e));
                                });
                            return { ...l, handleNavigate: v };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, s.jsx)(g.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: I,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: f,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: j,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: f,
                              offsetOptions: 4,
                              placement: 'top',
                              text: j,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                f = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(j, {
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
                                            (0, s.jsx)(j, {
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
            var I = i(88969),
                N = i(65453);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(61013),
                O = i(87819),
                R = i(40634),
                L = i(48468),
                D = i.n(L);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(o.ZI, { className: D().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: D().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var M = i(19934),
                z = i(70396),
                U = i.n(z);
            let B = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, k.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, r.PA)((e) => {
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
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(B, { artists: t, label: i }) : (0, s.jsx)(w, { artists: t, label: i })) : i;
                }),
                W = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: g,
                            ...k
                        } = e,
                        A = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                x = null == (s = e.withCustomTooltip) || s,
                                v = (0, n.useRef)(null),
                                [g, k] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                T = ((!A || 1 === p.length) && m) || !m,
                                C = ((e, t) => {
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
                                })(p, { separator: a, visibleArtistsCount: g ? void 0 : r, withComposer: o, withLink: !!T && l, artistIdWithoutLink: c }),
                                b = h ? C.allArtistsTitle : '',
                                S = (0, d.c)((e) => {
                                    (k(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: b,
                                withCustomTooltip: x,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!b && x && !m && !A,
                                title: !b || x || m ? void 0 : b,
                            };
                        })(k),
                        T = (0, l.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, s.jsx)(y, { spoilerClassName: r, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        C = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            f,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    T,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(H, { labelRef: A.labelRef, artists: A.artists, label: C }) : C;
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
            i.d(t, { j: () => j });
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
                p = i(55693),
                h = i(72288),
                x = i(24548),
                v = i(85587),
                g = i(90224),
                k = i(91292),
                A = i(7608),
                T = i(6667),
                C = i(85463),
                b = i(65462),
                S = i.n(b);
            let j = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: b,
                        withExplicitMark: j,
                        withSecondaryColor: f,
                        captionSize: I = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: E,
                        artistsClassName: O,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: L = !0,
                        hasLineClamp: D = !0,
                        withSavingQueryParams: P,
                        beforeTitle: w,
                        withArtistLink: M,
                        variant: z,
                        withTrackLink: U,
                        afterTitle: B,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: F } = (0, p.z)(),
                    {
                        settings: { isMobile: K },
                        slam: $,
                    } = (0, h.g)(),
                    V = (0, T.$)({ withCustomTooltip: L }),
                    q = (0, o.useSearchParams)(),
                    X = (0, A.B)(r, {
                        isMobile: K,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: U,
                        withArtistLink: M,
                        variant: z,
                        withExplicitMark: j,
                        query: P ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: G,
                        ariaLabel: Z,
                        tooltipText: Y,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
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
                    })(r, X, { canEnableCustomTooltip: V, isMobile: K }, W),
                    et = (0, C.O)({ track: r, onNavigate: F, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Y,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(S().text, S().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G,
                                }),
                            }),
                        [I, G, Y, ee],
                    ),
                    es = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Y,
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(S().text, S().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: G,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(k.N, {
                                    onClick: et,
                                    className: S().albumLink,
                                    href: X.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!D, [D]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(S().root, { [S().root_disabled]: !r.isAvailable, [S().root_disliked]: r.isDisliked && !R, [S().root_withSecondaryColor]: f }, t),
                    children: (0, s.jsxs)('div', {
                        className: S().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(S().titleContainer, { [S().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(S().text, E),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            es,
                                            X.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(S().text, S().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, s.jsx)(g.N, {
                                            containerClassName: S().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: N,
                                            variant: X.explicitMark,
                                            className: S().explicitMark,
                                            trackId: r.id,
                                        }),
                                    B,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(S().text, { [S().artists]: D }, O, E),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, a.$)(S().text, S().link),
                                    captionClassName: (0, a.$)(S().text, S().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: I,
                                    withContextMenu: H,
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
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
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
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => a }), i(46606));
            var s = i(91136);
            class a extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
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
            i.d(t, { a: () => H });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                _ = i(18593),
                p = i(29993),
                h = i(79070),
                x = i(29832),
                v = i(52300),
                g = i(7555),
                k = i(29504),
                A = i(91959),
                T = i(64207),
                C = i(77455),
                b = i(5407),
                S = i(57934),
                j = i(84384),
                f = i(4795),
                I = i(78940),
                N = i(55693),
                y = i(39079),
                E = i(72288),
                O = i(81877),
                R = i(49738),
                L = i(91292),
                D = i(56862),
                P = i(16704),
                w = i(56446),
                M = i(36207),
                z = i(43161),
                U = i(93434),
                B = i.n(U);
            let H = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: U, topTitleElement: H, bottomTitleElement: W } = e,
                    F = (0, c.D)(),
                    {
                        trailer: K,
                        user: $,
                        paywall: { modal: V },
                    } = (0, E.g)(),
                    { from: q, utmLink: X } = (0, j.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [Z, Y] = (0, n.useState)(!1),
                    [Q, J] = (0, n.useState)(!1),
                    [ee, et] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: ea } = (0, N.z)(),
                    er = (0, d.S)(),
                    en = (0, u.g)(),
                    el = (0, T.K)(t),
                    eo = (0, C.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    e_ = (0, I.Z)(t.url),
                    [ep, eh] = (0, n.useState)(!1),
                    ex = (0, S.F)(),
                    ev = (0, b.P)(),
                    eg = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (K.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    ek = (0, n.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, G]),
                    { isPlaying: eA, togglePlay: eT } = (0, y.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ec) }, from: q, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, A.S)({ artist: t, callback: e_ }),
                    eb = (0, A.S)({ artist: t, callback: eT }),
                    eS = (0, p.c)((e) => {
                        (null == es || es(), er({ to: o.AppScreen.ArtistScreen }), eC(e));
                    }),
                    ej = (0, f.N)(),
                    ef = (0, p.c)(() => {
                        if (!ev()) {
                            if (ej) return void V.open();
                            (Z || eA || (Y(!0), null == ea || ea()), eb(), eA || en());
                        }
                    }),
                    eI = (0, p.c)(() => {
                        (Q || em || (J(!0), null == ei || ei()), el());
                    }),
                    eN = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ey = (0, p.c)((e) => {
                        (et(e), eh(e));
                    }),
                    eE = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: ey,
                                    open: ee,
                                    onClick: eN,
                                    className: (0, a.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, s.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eN, ey, ee],
                    ),
                    eO = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(w.k, {
                                        className: (0, a.$)(B().trailerButton, B().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eg,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eg]),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, a.$)(B().pinButton, B().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eL = (0, h.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || ep,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ef,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        R.c,
                                        {
                                            className: (0, a.$)(B().likeButton, B().control),
                                            isLiked: em,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !$.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eE,
                                    pinControl: eR,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eD = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(g.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: eS,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: B().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ek,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eL,
                                    ],
                                }),
                            }),
                        [eS, eu, ek, t.isAvailable, eL],
                    );
                return (0, s.jsx)(x.MN, {
                    ref: F,
                    className: (0, a.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': ek,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            H,
                            (0, s.jsx)(k.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(L.N, {
                                    className: B().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ek,
                                    onClick: eS,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            W,
                        ],
                    }),
                    srTitle: (0, s.jsx)(L.N, { className: B().srTitleLink, href: t.url, onClick: eS, children: ek }),
                    contentLinesCount: U,
                    view: eD,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
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
            i.d(t, { SomethingWentWrong: () => L });
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
                m = i(87999),
                _ = i(47149),
                p = i(84423),
                h = i(89846),
                x = i(64543),
                v = i(63582);
            let g = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, x.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                k = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: a } = (0, x.j)();
                    (0, n.useEffect)(() => {
                        if (!i || !s || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: a.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(i, t);
                    }, [i, e, s, null == a ? void 0 : a.pageId]);
                });
            var A = i(44230),
                T = i(4370),
                C = i(72288),
                b = i(97956),
                S = i(56248),
                j = i(90688),
                f = i(78940);
            let I = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(96856),
                y = i.n(N);
            let E = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: n } = (0, C.g)(),
                    { contentRef: l } = (0, A.g)(),
                    d = (0, f.Z)(T.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(y().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(y().navigation, { [y().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(j._V, { className: y().image, src: I.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
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
            var O = i(9184),
                R = i.n(O);
            let L = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: m } = (0, l.A)(),
                    _ = (0, n.useContext)(C.P),
                    p = null == _ ? void 0 : _.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                k(h);
                let { sendRefreshEvent: x } = g(),
                    v = (0, n.useCallback)(() => {
                        (x(), (window.location.href = T.Z.main.href));
                    }, [x]),
                    { contentRef: j } = (0, A.g)();
                return p
                    ? (0, s.jsx)(E, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(R().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(R().navigation, { [R().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(R().content, { [R().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, a.$)(R().title, R().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, a.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: v,
                                          className: R().button,
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
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                _ = i(7555),
                p = i(29504),
                h = i(78940),
                x = i(72288),
                v = i(80932),
                g = i.n(v);
            let k = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    A = (0, o.S)(),
                    T = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(k, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), A({ to: l.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: C,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        T,
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
                n = i(87999),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                p = i(79390),
                h = i(29595),
                x = i(74965),
                v = i(72288),
                g = i(66943),
                k = i(7555),
                A = i(73170),
                T = i(29504),
                C = i(59304),
                b = i(81877),
                S = i(85074),
                j = i.n(S);
            let f = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(C.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: j().message,
                        children: [
                            (0, s.jsx)(A.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(k.t, {
                                className: j().cover,
                                radius: 'round',
                                children: (0, s.jsx)(b.B, { className: j().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(T.HL, { className: j().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                N = i(77455),
                y = i(48749),
                E = i(22505),
                O = i(5407),
                R = i(64284),
                L = i(98427),
                D = i(57934),
                P = i(84384),
                w = i(9618),
                M = i(95210),
                z = i(47964),
                U = i(46936),
                B = i(97956),
                H = i(98953),
                W = i(32721),
                F = i(18130),
                K = i(56117),
                $ = i(93091),
                V = i(27817),
                q = i(74064),
                X = i(15425),
                G = i(81066),
                Z = i(64546);
            let Y = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: k, onOpenChange: A, open: T, ...C } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: S } = (0, w.q)(),
                    {
                        settings: { isMobile: j },
                        modals: { artistAboutModal: Y },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, N.A)(k),
                    ei = (0, I.K)(k),
                    es = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === p.f.OK
                                    ? i((0, s.jsx)(f, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, s.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(k),
                    ea = (0, D.F)(),
                    er = ''.concat(R.U.ARTIST, '-').concat(null == k ? void 0 : k.id),
                    { formatMessage: en } = (0, r.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: R.U.ARTIST, contextType: o.K.Artist, contextId: null == k ? void 0 : k.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == k ? void 0 : k.id) ? i : '' } }),
                    ed = (0, y.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == k ? void 0 : k.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == k ? void 0 : k.seeds) ? a : [],
                        pageIdForFrom: L.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == k ? void 0 : k.id,
                    }),
                    e_ = (0, O.P)(),
                    ep = en((null == k ? void 0 : k.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (b && J.isAuthorized) return void S();
                        eu || em();
                    }),
                    ex = (0, c.c)(() => {
                        if (!e_()) {
                            if (b) return void S();
                            (null == k ? void 0 : k.id) && (Q.setUtmLink(el), Q.openArtistTrailer(k.id), ea(n.DomainObjectType.Artist, k.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Y.open(null == k ? void 0 : k.id);
                    });
                (0, M.N)(T);
                let eg = { variant: H.Y.ARTIST, id: null == k ? void 0 : k.id, title: null == k ? void 0 : k.name, path: ec },
                    ek = ee.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    eA = null == k || null == (t = k.trailer) ? void 0 : t.isAvailable,
                    eT = ee.checkExperiment(B.z.WebNextArtistInfo, 'on'),
                    eC = !ee.checkExperiment(B.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: j,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: A,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...C,
                    children: [
                        ek && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(E.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !j && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(V.L, { onClick: et, isPinned: null == k ? void 0 : k.isPinned }) }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == k ? void 0 : k.isLiked,
                                disabled: !J.isAuthorized || !(null == k ? void 0 : k.isAvailable),
                            }),
                        }),
                        eA && (0, s.jsx)(Z.WithOffline, { fallback: (0, s.jsx)(X.N, { onClick: ex }) }),
                        eC &&
                            (0, s.jsx)(Z.WithOffline, {
                                fallback: (0, s.jsx)(G.C, { onClick: eh, disabled: !(null == k ? void 0 : k.isAvailable), variant: W.I.ARTIST, onOpenMenuChange: A }),
                            }),
                        (0, s.jsx)(q.H, { disabled: !k, shareLink: eo, entityMeta: eg }),
                        eT &&
                            (0, s.jsx)(Z.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, s.jsx)(Z.WithOffline, {
                            fallback: (0, s.jsx)(K.D, { onClick: es, isDisliked: null == k ? void 0 : k.isDisliked, disabled: !(null == k ? void 0 : k.isAvailable) }),
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
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
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
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
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
                p = i(72288);
            let h = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? t : (i && (0, r.redirect)(_.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        62455: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 77853)));
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
                    [_, p] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
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
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(53534),
                n = i(63582),
                l = i(245);
            let o = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, a.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== i ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let a = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, a) : null, session: a };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== n ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...o, input: t, isReady: n, scope: n ? i.createScreenScope(t, o.session) : null };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
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
                    [_, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        77853: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionDislikesPage: () => eo });
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                n = i(58390),
                l = i(87999),
                o = i(76903),
                c = i(17392),
                d = i(98225),
                u = i(69630),
                m = i(98427),
                _ = i(44230),
                p = i(37670),
                h = i(72288),
                x = i(34303),
                v = (function (e) {
                    return ((e.TRACKS = 'tracks'), (e.ARTISTS = 'artists'), e);
                })({}),
                g = (function (e) {
                    return ((e[(e.TRACKS = 0)] = 'TRACKS'), (e[(e.ARTISTS = 1)] = 'ARTISTS'), e);
                })({}),
                k = i(23390),
                A = i.n(k),
                T = i(65724),
                C = i(2058),
                b = i(32596),
                S = i(21256),
                j = i(86790),
                f = i(60266),
                I = i(37770),
                N = i(79418),
                y = i(88969),
                E = i(29504),
                O = i(46422),
                R = i(63807),
                L = i(56248),
                D = i(95228),
                P = i.n(D),
                w = i(87366),
                M = i(76099),
                z = i(4370),
                U = i(67174),
                B = i(14912),
                H = i(19994);
            let W = () =>
                    (0, s.jsxs)('div', {
                        className: P().tabsShimmer,
                        children: [(0, s.jsx)(H.W, { className: P().tabShimmer }), (0, s.jsx)(H.W, { className: P().tabShimmer })],
                    }),
                F = (0, a.PA)((e) => {
                    var t, i, a, n, l, o, c, d, u, m;
                    let { tabsState: _, tabElementId: p, isStickyHeader: x = !1 } = e,
                        {
                            collection: { dislikes: k },
                        } = (0, h.g)(),
                        { formatMessage: A } = (0, C.A)(),
                        { isScrolling: T } = (0, r.useContext)(R.B),
                        b = ((e) => {
                            let t = (0, B.X)();
                            return (0, r.useCallback)(
                                (i) => {
                                    var s;
                                    switch ((null == (s = e.onTabChange) || s.call(e, i), i)) {
                                        case g.TRACKS: {
                                            let { href: e } = (0, U.u)(z.Z.collectionDislikes.href, { query: { tab: v.TRACKS } });
                                            t(e);
                                            break;
                                        }
                                        case g.ARTISTS: {
                                            let { href: e } = (0, U.u)(z.Z.collectionDislikes.href, { query: { tab: v.ARTISTS } });
                                            t(e);
                                        }
                                    }
                                },
                                [t, e],
                            );
                        })(_),
                        S = T ? -1 : 0;
                    x && (S = T ? 0 : -1);
                    let j = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = k.tracks) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(A({ id: 'entity-names.tracks' }), ' • ').concat(k.tracks.items.length)
                                : A({ id: 'entity-names.tracks' });
                        }, [null == (i = k.tracks) || null == (t = i.items) ? void 0 : t.length, A]),
                        f = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = k.artists) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(A({ id: 'entity-names.artists' }), ' • ').concat(k.artists.items.length)
                                : A({ id: 'entity-names.artists' });
                        }, [null == (n = k.artists) || null == (a = n.items) ? void 0 : a.length, A]);
                    return (0, s.jsxs)(M.wI, {
                        isShimmerVisible: k.isLoading,
                        shimmer: (0, s.jsx)(W, {}),
                        className: P().tabs,
                        elementId: p,
                        ..._,
                        onTabChange: b,
                        children: [
                            (0, s.jsx)(w.o, {
                                className: P().tab,
                                value: g.TRACKS,
                                title: j,
                                'aria-label': A(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = k.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': T,
                                tabIndex: S,
                            }),
                            (0, s.jsx)(w.o, {
                                className: P().tab,
                                value: g.ARTISTS,
                                title: f,
                                'aria-label': A(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = k.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': T,
                                tabIndex: S,
                            }),
                        ],
                    });
                }),
                K = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        a = (0, O.W)(),
                        { isScrolling: n } = (0, r.useContext)(R.B);
                    return (0, s.jsxs)('header', {
                        className: P().root,
                        'aria-hidden': n,
                        'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: P().container,
                                children: [
                                    a.canBack && (0, s.jsx)(L.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !n }),
                                    (0, s.jsx)(E.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: P().title,
                                        'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, s.jsx)(y.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(F, { tabsState: t, tabElementId: i }),
                        ],
                    });
                });
            var $ = i(68878),
                V = i.n($);
            let q = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: o } = e,
                    {
                        collection: { dislikes: c },
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: m } = (0, C.A)(),
                    _ = c.artists.isLoading ? 10 : null != (a = null == (i = c.artists) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    p = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: o }),
                            Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(j.w, { className: V().footer }) }),
                        }),
                        [o, l],
                    );
                return c.artists.isRejected
                    ? (0, s.jsx)(b.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: V().root,
                          children: (0, s.jsx)(d.Kp, {
                              value: l.value,
                              name: g.ARTISTS,
                              elementId: o,
                              className: V().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, T.$)(V().scrollContainer, V().important),
                                  listClassName: (0, T.$)(V().content, V().content_withGrid),
                                  customComponents: p,
                                  initialItemCount: _,
                                  totalCount: _,
                                  itemContentCallback: (e) => {
                                      var t, i;
                                      let a = null == (i = c.artists) || null == (t = i.items) ? void 0 : t[e];
                                      if (!a) {
                                          let e = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, s.jsx)(I.V, { 'aria-label': e, round: !0, centered: !0 });
                                      }
                                      return (0, s.jsx)(S.a, { artist: a, contentLinesCount: 3, className: V().item }, a.id);
                                  },
                                  handleRef: n,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var X = i(18593),
                G = i(76843),
                Z = i(10829),
                Y = i(84384),
                Q = i(6668),
                J = i(98644),
                ee = i(93015);
            let et = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: o } = e,
                    { from: c } = (0, Y.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, h.g)(),
                    { formatMessage: _ } = (0, C.A)(),
                    p = (0, Q.w)(),
                    x = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    v = (0, r.useCallback)(
                        (e) => {
                            var t;
                            null == (t = u.tracks) || t.getTracksByRange(e.startIndex, e.endIndex);
                        },
                        [u.tracks],
                    ),
                    k = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(K, { tabsState: l, tabElementId: o }),
                            Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(j.w, { className: V().footer }) }),
                        }),
                        [o, l],
                    );
                return u.tracks.isRejected
                    ? (0, s.jsx)(b.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: V().root,
                          children: (0, s.jsx)(d.Kp, {
                              value: l.value,
                              name: g.TRACKS,
                              elementId: o,
                              className: V().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, T.$)(V().scrollContainer, V().important),
                                  listClassName: (0, T.$)(V().content, V().content_tracks),
                                  customComponents: k,
                                  totalCount: x,
                                  itemContentCallback: (e) => {
                                      var t, i, a;
                                      let r = null == (a = u.tracks) || null == (i = a.items) || null == (t = i[e]) ? void 0 : t.data;
                                      if (!r) return (0, s.jsx)(ee.D, { isActive: !0, className: V().shimmerItem, variant: J.X.PLAYLIST });
                                      let n = p(e, {
                                          contextData: { type: X.K.Various, meta: { id: 'disliked-tracks' }, from: c, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: e },
                                          loadContextMeta: !1,
                                      });
                                      return r.isTrackNonMusic
                                          ? (0, s.jsx)(G.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, s.jsx)(Z.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: v,
                                  debounceDurationInMs: 300,
                                  handleRef: n,
                                  context: { listAriaLabel: _({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var ei = i(52300),
                es = i(92518),
                ea = i.n(es);
            let er = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: i } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(K, { tabsState: t, tabElementId: i }),
                        (0, s.jsxs)(d.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: i,
                            className: ea().root,
                            'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, s.jsx)(ei.I, {
                                    className: ea().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, s.jsx)(E.DZ, {
                                    className: ea().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_HEAD,
                                    children: (0, s.jsx)(y.A, { id: 'entity-names.list-is-empty' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var en = i(93317);
            let el = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { isScrolling: a } = (0, r.useContext)(R.B),
                        n = (0, O.W)();
                    return (0, s.jsx)(en.Y, {
                        variant: en.V.COMPOSITE,
                        staticClassName: (0, T.$)(P().staticHeader, P().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, T.$)(P().stickyHeader, P().important),
                        stickyChild: (0, s.jsxs)('div', {
                            className: P().container,
                            'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER,
                            children: [
                                n.canBack && (0, s.jsx)(L.L, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, s.jsx)(F, { tabsState: t, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                eo = (0, a.PA)(() => {
                    let e = (0, n.useSearchParams)(),
                        {
                            user: t,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, h.g)(),
                        { contentScrollRef: k, setContentScrollRef: T } = (0, _.g)(),
                        C = (0, r.useId)(),
                        b = (0, r.useMemo)(() => {
                            switch (e.get(x.K.TAB)) {
                                case v.TRACKS:
                                    break;
                                case v.ARTISTS:
                                    return g.ARTISTS;
                            }
                            return g.TRACKS;
                        }, [e]),
                        S = (0, d.zb)(b);
                    (t.account.data.uid || (0, n.notFound)(),
                        (0, p.J)(i.isResolved),
                        (0, r.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ));
                    let j = (0, r.useMemo)(() => {
                        switch (S.value) {
                            case g.TRACKS:
                                if (i.tracks.isEmpty) return (0, s.jsx)(er, { tabsState: S, tabElementId: C });
                                return (0, s.jsx)(et, { forwardRef: T, tabsState: S, tabElementId: C });
                            case g.ARTISTS:
                                if (i.artists.isEmpty) return (0, s.jsx)(er, { tabsState: S, tabElementId: C });
                                return (0, s.jsx)(q, { forwardRef: T, tabsState: S, tabElementId: C });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, T, C, S]);
                    if (i.isNeededToLoad) {
                        let e = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, r.use)(Promise.allSettled(e));
                    }
                    return (0, s.jsx)(o.a, {
                        pageId: l.AppScreen.CollectionTrackListScreen,
                        pageIdForFrom: m.b.OWN_DISLIKES,
                        children: (0, s.jsx)(u.h, {
                            scrollElement: k,
                            headerThreshold: 148,
                            children: (0, s.jsxs)('div', {
                                className: A().root,
                                'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, s.jsx)(el, { tabsState: S, tabElementId: C }), j],
                            }),
                        }),
                    });
                });
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
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
                p = i(75151);
            let h = (e) => {
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
                        [m, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && x(m);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: v, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: g,
                            totalRequests: k,
                            debounceDurationInMs: A,
                            initialItemCount: T,
                            minInitialItemCount: C = 20,
                            handleRef: b,
                            alwaysShowScrollbar: S = !1,
                            testId: j,
                            isMobileLayout: f = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...N
                        } = e,
                        [y, E] = (0, n.useState)(!1),
                        O = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var e, t;
                            return f
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
                        }, [i, k, f]),
                        L = T ? Math.min(T, C) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: y || S, [d().root_notScrolling]: !y && !S }, t),
                        'data-test-id': j,
                        children: [
                            f && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: _,
                                scrollerRef: b,
                                totalCount: g,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...N,
                            }),
                            f && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => r.G, X1: () => s.X, m5: () => a.m });
            var s = i(46606),
                a = i(91136),
                r = i(19840);
            i(17017);
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
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
                p = i.n(_);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: h, iconVariant: iconOverride, size: x = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, u.g)(),
                    [A, T] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(T);
                }, [i, r]);
                let {
                    iconVariant: C,
                    descriptionText: b,
                    isTooltipEnabled: S,
                    ariaLabel: j,
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
                })({ variant: h, descriptionTexts: A, isMobile: k }, g);
                return (0, s.jsx)(m.k, {
                    description: b,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': j,
                            style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': j,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : C,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? x : x,
                            style: iconOverride ? { width: `var(--ym-icon-size-${x})`, height: `var(--ym-icon-size-${x})` } : undefined,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...r } = t,
                        n = e || 'Internal error';
                    (super(n, r), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class a extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, a.prototype));
                }
            }
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
            i.d(t, { K: () => h });
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
                p = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            n(!0);
                            let x = await r.toggleLike();
                            if ((n(!1), !c)) return;
                            let v = t.modal.isOpened;
                            x === _.f.OK
                                ? e((0, s.jsx)(p.T, { withLink: o, album: m }), { containerId: v ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: v ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: k } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: k, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void v((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
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
                4814, 7437, 9079, 3469, 1191, 8194, 8655, 4201, 918, 1833, 1041, 6263, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 7746,
                4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 818, 7053, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 62455)),
        ),
            (_N_E = e.O()));
    },
]);
