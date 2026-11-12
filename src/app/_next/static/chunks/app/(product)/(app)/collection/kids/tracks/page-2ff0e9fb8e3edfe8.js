(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9394],
    {
        108: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var s = i(2058),
                a = i(61691);
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
        4795: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            var s = i(72288),
                a = i(97956);
            let r = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: l,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = l.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        5048: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => r });
            var s = i(61691),
                a = i(15077);
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
        6668: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var s = i(53548),
                a = i(29993);
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
        10829: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => A });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                p = i(73805),
                h = i(15232),
                _ = i(56712),
                x = i(26243),
                v = i.n(x);
            let A = (0, r.PA)((t) => {
                var e;
                let {
                        track: i,
                        playContextParams: r,
                        className: x,
                        withDNDBlock: A,
                        isDragging: k,
                        draggingClassName: C,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: g,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: S = !0,
                        beforeTitle: j,
                        removeButtonAriaLabel: N,
                        hideControls: L,
                    } = t,
                    w = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, d.g)(),
                    E = (0, o.X)(i.trackSource, { isMobile: I }),
                    R = (0, l.useCallback)(
                        (t) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...t,
                            }),
                        [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(_.C, {
                    className: (0, a.$)(x, { [v().trackWithDots]: A, [v().important]: A }),
                    track: i,
                    beforeBlock: A ? (0, s.jsx)(m.O, { className: (0, a.$)(v().dots, C), isDragging: k }) : void 0,
                    meta: (0, s.jsx)(h.j, { withArtistLink: E, beforeTitle: j, track: i, ignoreDislikedStyles: T, withSecondaryColor: g }),
                    playButtonCellRender: R,
                    controls: (0, s.jsx)(p.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (e = r.contextData) ? void 0 : e.utmLink,
                        withSecondaryColor: g,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: S,
                        removeButtonAriaLabel: N,
                        hideControls: L,
                    }),
                    ...w,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        13946: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => B });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (t, e) => {
                let { withLink: i, separator: s } = e,
                    a = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: a };
            };
            var h = i(21010),
                _ = i.n(h),
                x = i(17392),
                v = i(29504),
                A = i(91292),
                k = i(2058),
                C = i(87999),
                T = i(80643),
                g = i(78940),
                f = i(55693),
                b = i(58217);
            let S = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: l, withCustomTooltip: n, hoverSettings: c } = t,
                        {
                            name: m,
                            link: p,
                            title: h,
                            ariaLabel: _,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: N,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = t,
                                { formatMessage: l } = (0, k.A)(),
                                n = ((t, e) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = t,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, l),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, g.Z)(null != (i = null == (e = n.link) ? void 0 : e.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, f.z)(),
                                h = (0, T.S)(),
                                _ = (0, d.c)((t) => {
                                    (c && o.isOpened && o.close(), m(t));
                                }),
                                x = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: l } = s;
                                    return (0, b.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), l.isOpened && (s.reset(), l.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: _ }),
                                v = (0, d.c)((t) => {
                                    (h({ to: C.AppScreen.ArtistScreen }), null == p || p(), x(t));
                                });
                            return { ...n, handleNavigate: v };
                        })({ item: e, allArtistsTitle: l, withCustomTooltip: n });
                    return p
                        ? (0, s.jsx)(A.N, {
                              ...p,
                              'aria-label': _,
                              className: i,
                              onClick: N,
                              title: h,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, s.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: h,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (t) => {
                    let { group: e, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(S, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(S, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
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
            var N = i(88969),
                L = i(65453);
            let w = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(_().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var I = i(61013),
                E = i(87819),
                R = i(40634),
                y = i(48468),
                O = i.n(y);
            let P = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: a } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: e }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((t) => (0, s.jsx)(R.V, { artist: t, className: O().artistItem }, t.id)) }),
                        ],
                    });
                }),
                D = (0, l.forwardRef)((t, e) => (0, s.jsx)(P, { forwardRef: e, ...t }));
            var z = i(19934),
                M = i(70396),
                K = i.n(M);
            let U = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, k.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, a.$)(K().root, K().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(R.V, { artist: t }, t.id)),
                    });
                }),
                W = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: a } = t,
                        [r, o] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = a.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        p = (0, n.L)(() =>
                            (0, I.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, l.useEffect)(() => {
                            m();
                        }, [e, m]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(U, { artists: e, label: i }) : (0, s.jsx)(D, { artists: e, label: i })) : i;
                }),
                B = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: h,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: A,
                            ...k
                        } = t,
                        C = ((t) => {
                            var e, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = t,
                                h = null != (e = t.artists) ? e : [],
                                _ = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (s = t.withCustomTooltip) || s,
                                v = (0, l.useRef)(null),
                                [A, k] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                T = ((!C || 1 === h.length) && m) || !m,
                                g = ((t, e) => {
                                    var i, s, a;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        l = null == (s = null == e ? void 0 : e.withLink) || s,
                                        n = null != (a = null == e ? void 0 : e.separator) ? a : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(n),
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
                                                    primary: p(t, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = a ? t.separator : '';
                                                        return p(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: l && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: a, visibleArtistsCount: A ? void 0 : r, withComposer: o, withLink: !!T && n, artistIdWithoutLink: c }),
                                f = _ ? g.allArtistsTitle : '',
                                b = (0, d.c)((t) => {
                                    (k(!0), t.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: x,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!f && x && !m && !C,
                                title: !f || x || m ? void 0 : f,
                            };
                        })(k),
                        T = (0, n.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(A)
                                  ? A
                                  : (0, s.jsx)(w, { spoilerClassName: r, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        g = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(_().root, _()['root_variant_'.concat(v)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, e),
                                title: C.title,
                                children: [
                                    C.groups.map((t) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: h,
                                                captionSize: x,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    T,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(W, { labelRef: C.labelRef, artists: C.artists, label: g }) : g;
                });
        },
        15232: (t, e, i) => {
            'use strict';
            i.d(e, { j: () => S });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                p = i(13946),
                h = i(55693),
                _ = i(72288),
                x = i(24548),
                v = i(85587),
                A = i(90224),
                k = i(91292),
                C = i(7608),
                T = i(6667),
                g = i(85463),
                f = i(65462),
                b = i.n(f);
            let S = (0, r.PA)((t) => {
                let {
                        className: e,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: f,
                        withExplicitMark: S,
                        withSecondaryColor: j,
                        captionSize: N = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: w,
                        textClassName: I,
                        artistsClassName: E,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: y = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: z,
                        variant: M,
                        withTrackLink: K,
                        afterTitle: U,
                        withContextMenuArtists: W,
                    } = t,
                    { formatMessage: B } = (0, n.A)(),
                    { sendNavigateSearchFeedback: F } = (0, h.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: H,
                    } = (0, _.g)(),
                    V = (0, T.$)({ withCustomTooltip: y }),
                    Y = (0, o.useSearchParams)(),
                    X = (0, C.B)(r, {
                        isMobile: $,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: K,
                        withArtistLink: z,
                        variant: M,
                        withExplicitMark: S,
                        query: P ? Object.fromEntries(Y) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: J,
                        tooltipText: G,
                        titleAttribute: Z,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: tt,
                    } = ((t, e, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: l, isMobile: n } = i,
                            o = ((t, e) => (t.shouldShowRemovedTitle ? e({ id: 'track-title.error-not-found' }) : t.title))(e, s),
                            c = e.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = e.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: t.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = t.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !n,
                            titleAttribute: !l && (e.shouldShowRemovedTitle || e.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : e.version,
                        };
                    })(r, X, { canEnableCustomTooltip: V, isMobile: $ }, B),
                    te = (0, g.O)({ track: r, onNavigate: F, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ti = (0, l.useCallback)(
                        (t) =>
                            (0, s.jsx)(u.m_, {
                                enabled: tt,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(b().text, b().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...t,
                                    children: q,
                                }),
                            }),
                        [N, q, G, tt],
                    ),
                    ts = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: tt,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(b().text, b().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: q,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(k.N, {
                                    onClick: te,
                                    className: b().albumLink,
                                    href: X.link.href,
                                    'aria-label': J,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ti(),
                                })
                              : ti({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ta = (0, l.useMemo)(() => +!!O, [O]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(b().root, { [b().root_disabled]: !r.isAvailable, [b().root_disliked]: r.isDisliked && !R, [b().root_withSecondaryColor]: j }, e),
                    children: (0, s.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(b().titleContainer, { [b().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(b().text, I),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            ts,
                                            X.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(b().text, b().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, s.jsx)(A.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: L,
                                            variant: X.explicitMark,
                                            className: b().explicitMark,
                                            trackId: r.id,
                                        }),
                                    U,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(p.i, {
                                    className: (0, a.$)(b().text, { [b().artists]: O }, E, I),
                                    withAllArtistsTitle: w,
                                    linkClassName: (0, a.$)(b().text, b().link),
                                    captionClassName: (0, a.$)(b().text, b().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: ta,
                                    captionSize: N,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        15526: (t) => {
            t.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17332: (t) => {
            t.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { T: () => s }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => c });
            var s = i(88800),
                a = i(53548),
                r = i(17392),
                l = i(29504),
                n = i(15526),
                o = i.n(n);
            let c = (t) => {
                let { getDescriptionTexts: e, entityId: i } = t,
                    [n, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        e && e().then(c);
                    }, [e]),
                    n)
                )
                    return n.map((t, e) =>
                        (0, s.jsx)(
                            l.HL,
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
        21010: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        26243: (t) => {
            t.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        35994: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => a });
            var s = i(67174);
            let a = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        36394: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 57208)));
        },
        37438: (t) => {
            t.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (t, e, i) => {
            'use strict';
            i.d(e, { J: () => r });
            var s = i(53548);
            i(30282);
            var a = i(58390);
            let r = (t) => {
                let e = (0, a.usePathname)(),
                    [i, r] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(e), window.Ya.Rum.spa.startDataLoading(e));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(e) && t && !i && (window.Ya.Rum.spa.finishDataLoading(e), window.Ya.Rum.spa.startDataRendering(e), r(!0));
                    }, [t, i, e]));
            };
        },
        40634: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                h = i(29504),
                _ = i(78940),
                x = i(72288),
                v = i(80932),
                A = i.n(v);
            let k = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, _.Z)(e.url),
                    C = (0, o.S)(),
                    T = (0, l.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(k, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    g = (0, d.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), C({ to: n.AppScreen.ArtistScreen }), v(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, a.$)(A().root, i),
                            onClick: g,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(p.t, {
                                    radius: 'round',
                                    className: A().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: A().image }),
                                }),
                                (0, s.jsx)(h.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        T,
                    ],
                });
            });
        },
        43032: (t) => {
            t.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        44988: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => d });
            var s = i(88800),
                a = i(84961),
                r = i(17392),
                l = i(52300),
                n = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, a.PA)((t) => {
                let { isLiked: e, onClick: i, className: a, iconClassName: d, albumType: u, disabled: m } = t,
                    { user: p } = (0, c.g)(),
                    h = e ? 'liked' : 'like',
                    _ = (0, o.$)(e, u);
                return (0, s.jsx)(n.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(l.I, { className: d, variant: h, size: 'xxs' }),
                    'aria-pressed': e,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        48468: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s });
            let s = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        56446: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(2058),
                l = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: h,
                            className: _,
                            forwardRef: x,
                            style: v,
                            children: A,
                        } = t,
                        { formatMessage: k } = (0, r.A)(),
                        C = k({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: p,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: A,
                    });
                },
                u = (0, a.forwardRef)((t, e) => (0, s.jsx)(d, { forwardRef: e, ...t }));
        },
        57208: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionKidsTracksPage: () => z });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                m = i(18593),
                p = i(54667),
                h = i(29504),
                _ = i(32596),
                x = i(69630),
                v = i(76843),
                A = i(10829),
                k = i(98427),
                C = i(84384),
                T = i(46422),
                g = i(44230),
                f = i(37670),
                b = i(6668),
                S = i(72288),
                j = i(98644),
                N = i(54320),
                L = i(86790),
                w = i(60266),
                I = i(93317),
                E = i(93015),
                R = i(79418),
                y = i(71104),
                O = i(45654),
                P = i(43032),
                D = i.n(P);
            let z = (0, r.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: t },
                        },
                        settings: { isMobile: e },
                    } = (0, S.g)(),
                    { contentScrollRef: i, setContentScrollRef: r } = (0, g.g)(),
                    P = (0, T.W)(),
                    { from: z } = (0, C.f)({ pageId: k.b.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: M } = (0, n.A)(),
                    K = (0, b.w)();
                ((0, l.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                    (0, f.J)(t.isResolved));
                let U = (0, l.useCallback)(
                    (e) => {
                        t.getData({ page: e, pageSize: y.c });
                    },
                    [t],
                );
                (0, N.X)(t.pagesLoader, U);
                let W = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(w.A, { children: (0, s.jsx)(L.w, { className: D().footer }) }) }), []),
                    B = t.isShimmerVisible ? 20 : t.items.length;
                return (t.isNeededToLoad && (0, l.use)(t.getData({ pageSize: y.c })), t.isRejected)
                    ? (0, s.jsx)(_.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(O.i, { title: M({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsTracks,
                            pageIdForFrom: k.b.COLLECTION_KIDS_TRACKS,
                            children: (0, s.jsx)(x.h, {
                                scrollElement: i,
                                outerTitle: M({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, s.jsxs)('div', {
                                    className: D().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, s.jsx)(I.Y, {
                                            variant: I.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(h.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, s.jsx)(R.$, {
                                            className: (0, a.$)(D().scrollContainer, D().important),
                                            listClassName: D().content,
                                            customComponents: W,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e];
                                                if (!i) return (0, s.jsx)(E.D, { isActive: !0, className: D().shimmerItem, variant: j.X.PLAYLIST });
                                                let a = K(i.entityId, {
                                                    contextData: { type: m.K.Various, meta: { id: i.entityId }, from: z },
                                                    queueParams: { index: e },
                                                    loadContextMeta: !1,
                                                    entitiesData: t.sonataEntitiesData,
                                                });
                                                return i.type === p.S.MUSIC
                                                    ? (0, s.jsx)(A.K, { track: i, playContextParams: a }, e)
                                                    : (0, s.jsx)(v.K, { track: i, playContextParams: a, withPodcastName: i.isTrackPodcast }, e);
                                            },
                                            initialItemCount: B,
                                            totalCount: B,
                                            onGetDataByPage: U,
                                            pageSize: y.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: r,
                                            context: { listAriaLabel: M({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        70396: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        80932: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        87762: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var s = i(53548),
                a = i(52150);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        90224: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => _ });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                h = i.n(p);
            let _ = (0, r.PA)((t) => {
                let { className: e, getDescriptionTexts: i, trackId: r, containerClassName: p, variant: _, iconVariant: iconOverride, size: x = 'xxxs', ...v } = t,
                    { formatMessage: A } = (0, n.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, u.g)(),
                    [C, T] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(T);
                }, [i, r]);
                let {
                    iconVariant: g,
                    descriptionText: f,
                    isTooltipEnabled: b,
                    ariaLabel: S,
                } = ((t, e) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = t,
                        r = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((t) => {
                            switch (t) {
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
                        ariaLabel: r.length > 0 ? r : e({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: _, descriptionTexts: C, isMobile: k }, A);
                return (0, s.jsx)(m.k, {
                    description: f,
                    placement: 'bottom-start',
                    enabled: b,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        _ === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(h().explicitMark, e),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': S,
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
                            className: (0, a.$)(h().explicitMark, e),
                            'aria-label': S,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : g,
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
        92966: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => _ });
            var s = i(88800),
                a = i(2058),
                r = i(29993),
                l = i(87762),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                h = i(96295);
            let _ = (t) => {
                let {
                        user: e,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: _ },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    A = (() => {
                        let { notify: t } = (0, o.l)(),
                            { fullscreenPlayer: e } = (0, c.g)(),
                            [i, l] = (0, m.useState)(!1),
                            { formatMessage: _ } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let m = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            l(!0);
                            let x = await r.toggleLike();
                            if ((l(!1), !c)) return;
                            let v = e.modal.isOpened;
                            x === p.f.OK
                                ? t((0, s.jsx)(h.T, { withLink: o, album: m }), { containerId: v ? n.u.FULLSCREEN_INFO : n.u.INFO })
                                : t((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: v ? n.u.FULLSCREEN_ERROR : n.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: k } = (0, l.T)();
                return (0, r.c)(async () => {
                    if (t)
                        return _({ pageAlbumId: k, albumId: t.id, isNonMusic: t.isNonMusic })
                            ? void i.openModal()
                            : e.isAuthorized
                              ? A({ album: t })
                              : void v((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        94398: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => d });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                l = i(29504),
                n = i(37438),
                o = i.n(n);
            let c = { padding: 8 },
                d = (t) => {
                    let { description: e, enabled: i, title: n, placement: d = 'top', children: u } = t;
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
                                        n && (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: e }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        96295: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => n });
            var s = i(88800),
                a = i(84961),
                r = i(42729),
                l = i(5048);
            let n = (0, a.PA)((t) => {
                let { album: e, closeToast: i, withLink: a } = t,
                    n = (0, l.b)(e.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: n,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    withLink: a,
                });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                7908, 4700, 5038, 7065, 3248, 1147, 1191, 7072, 505, 4555, 8655, 2691, 8767, 529, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 7746, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 7053, 9755, 763, 2670, 7358,
            ],
            () => t((t.s = 36394)),
        ),
            (_N_E = t.O()));
    },
]);
