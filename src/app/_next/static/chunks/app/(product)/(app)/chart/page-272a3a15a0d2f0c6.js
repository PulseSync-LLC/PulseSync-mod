(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3737],
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
        3099: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        4683: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
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
                    experiments: l,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = l.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
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
        13607: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(s || (s = {})));
        },
        13797: (e) => {
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
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => $ });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                m = i(72288),
                u = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: s } = t,
                    a = i && !e.various ? (0, u.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: a };
            };
            var p = i(21010),
                h = i.n(p),
                C = i(17392),
                x = i(29504),
                v = i(91292),
                k = i(2058),
                A = i(92716),
                g = i(96527),
                b = i(78940),
                T = i(55693),
                N = i(58217);
            let j = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: l, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: u,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: j,
                            isTooltipEnabled: f,
                            handleNavigate: w,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: l } = (0, k.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, l),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, m.g)(),
                                u = (0, b.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, T.z)(),
                                p = (0, g.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), u(e));
                                }),
                                C = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, m.g)(),
                                        { modal: l } = s;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (s.reset(), l.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (p({ to: A.AppScreen.ArtistScreen }), null == _ || _(), C(e));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: n });
                    return _
                        ? (0, s.jsx)(v.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: w,
                              title: p,
                              'data-test-id': C.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: f,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: j,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: u }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: f,
                              offsetOptions: 4,
                              placement: 'top',
                              text: j,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': C.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: u,
                              }),
                          });
                }),
                f = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(j, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(j, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
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
            var w = i(88969),
                S = i(65453);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': C.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(w.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(61013),
                R = i(87819),
                O = i(40634),
                L = i(48468),
                E = i.n(L);
            let P = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(o.ZI, { className: E().tooltipContent, children: i.map((e) => (0, s.jsx)(O.V, { artist: e, className: E().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, l.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                z = i.n(B);
            let W = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, k.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(z().root, z().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, o] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, m.g)(),
                        u = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, I.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                u(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, u],
                        ),
                        (0, l.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                $ = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: u,
                            captionClassName: p,
                            captionSize: C,
                            variant: x = 'breakAll',
                            spoilerComponent: v,
                            ...k
                        } = e,
                        A = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: u } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                C = null == (s = e.withCustomTooltip) || s,
                                x = (0, l.useRef)(null),
                                [v, k] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, m.g)(),
                                g = ((!A || 1 === p.length) && u) || !u,
                                b = ((e, t) => {
                                    var i, s, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
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
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: v ? void 0 : r, withComposer: o, withLink: !!g && n, artistIdWithoutLink: c }),
                                T = h ? b.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (k(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: C,
                                withContextMenu: u,
                                labelRef: x,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!T && C && !u && !A,
                                title: !T || C || u ? void 0 : T,
                            };
                        })(k),
                        g = (0, n.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(y, { spoilerClassName: r, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        b = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            f,
                                            {
                                                group: e,
                                                linkClassName: u,
                                                captionClassName: p,
                                                captionSize: C,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(U, { labelRef: A.labelRef, artists: A.artists, label: b }) : b;
                });
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => j });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                m = i(17610),
                u = i(29504),
                _ = i(13946),
                p = i(55693),
                h = i(72288),
                C = i(24548),
                x = i(85587),
                v = i(90224),
                k = i(91292),
                A = i(7608),
                g = i(6667),
                b = i(85463),
                T = i(65462),
                N = i.n(T);
            let j = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: T,
                        withExplicitMark: j,
                        withSecondaryColor: f,
                        captionSize: w = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: I,
                        artistsClassName: R,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: L = !0,
                        hasLineClamp: E = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: z,
                        afterTitle: W,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: $ } = (0, n.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: K },
                        slam: F,
                    } = (0, h.g)(),
                    Y = (0, g.$)({ withCustomTooltip: L }),
                    V = (0, o.useSearchParams)(),
                    q = (0, A.B)(r, {
                        isMobile: K,
                        isOfflineModeEnabled: F.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: z,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: j,
                        query: P ? Object.fromEntries(V) : void 0,
                    }),
                    {
                        displayTitle: G,
                        ariaLabel: X,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: l, isMobile: n } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !n,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(r, q, { canEnableCustomTooltip: Y, isMobile: K }, $),
                    et = (0, b.O)({ track: r, onNavigate: H, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ei = (0, l.useCallback)(
                        (e) =>
                            (0, s.jsx)(m.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: C.V,
                                children: (0, s.jsx)(u.HL, {
                                    className: (0, a.$)(N().text, N().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G,
                                }),
                            }),
                        [w, G, Q, ee],
                    ),
                    es = (0, d.L)(() =>
                        q.shouldShowRemovedTitle
                            ? (0, s.jsx)(m.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: C.V,
                                  children: (0, s.jsx)(u.HL, {
                                      className: (0, a.$)(N().text, N().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: G,
                                  }),
                              })
                            : q.link
                              ? (0, s.jsx)(k.N, {
                                    onClick: et,
                                    className: N().albumLink,
                                    href: q.link.href,
                                    'aria-label': X,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, l.useMemo)(() => +!!E, [E]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(N().root, { [N().root_disabled]: !r.isAvailable, [N().root_disliked]: r.isDisliked && !O, [N().root_withSecondaryColor]: f }, t),
                    children: (0, s.jsxs)('div', {
                        className: N().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(N().titleContainer, { [N().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(u.HL, {
                                        className: (0, a.$)(N().text, I),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            es,
                                            q.version &&
                                                (0, s.jsxs)(u.HL, {
                                                    className: (0, a.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', q.version],
                                                }),
                                        ],
                                    }),
                                    q.explicitMark &&
                                        (0, s.jsx)(v.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: S,
                                            variant: q.explicitMark,
                                            className: N().explicitMark,
                                            trackId: r.id,
                                        }),
                                    W,
                                ],
                            }),
                            q.artists.length > 0 &&
                                (0, s.jsx)(_.i, {
                                    className: (0, a.$)(N().text, { [N().artists]: E }, R, I),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, a.$)(N().text, N().link),
                                    captionClassName: (0, a.$)(N().text, N().artistCaption),
                                    artists: q.artists,
                                    withLink: q.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: w,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
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
                l = i(29504),
                n = i(15526),
                o = i.n(n);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [n, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, s.jsx)(
                            l.HL,
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
        21064: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPage: () => L });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(18593),
                d = i(19994),
                m = i(29504),
                u = i(32596),
                _ = i(69630),
                p = i(52309),
                h = i(12816),
                C = i(59844),
                x = i(84384),
                v = i(46422),
                k = i(44230),
                A = i(37670),
                g = i(6668),
                b = i(34961),
                T = i(53892),
                N = i(72288),
                j = i(86790),
                f = i(60266),
                w = i(93317),
                S = i(79418),
                y = i(76541),
                I = i(21341),
                R = i(26658),
                O = i.n(R);
            let L = (0, r.PA)(() => {
                let { formatMessage: e } = (0, n.A)(),
                    { tracksSubPage: t } = (0, b.s)(T.n.CHART),
                    {
                        settings: { isMobile: i },
                    } = (0, N.g)(),
                    r = (0, v.W)(),
                    { contentScrollRef: R, setContentScrollRef: L } = (0, k.g)(),
                    E = (0, g.w)(),
                    { from: P } = (0, x.f)({ pageId: h._Q.CHART });
                (0, A.J)(t.isResolved);
                let M = t.isLoading || !t.playlistMeta,
                    D = M ? y.H : t.items.length,
                    B = (0, l.useCallback)(
                        (e) => {
                            let i = t.items[e],
                                a = t.playlistMeta;
                            return i && a && !M
                                ? (0, s.jsx)(p.Q, {
                                      track: i,
                                      playContextParams: E(e, {
                                          contextData: { type: c.K.Playlist, meta: { id: ''.concat(a.uid, ':').concat(a.kind) }, from: P },
                                          queueParams: { index: e, entityId: i.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, s.jsx)(I.r, { isActive: !0, className: O().shimmerItem });
                        },
                        [P, E, M, t.items, t.playlistMeta],
                    ),
                    z = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(j.w, { className: O().footer }) }) }), []),
                    W = (0, l.useMemo)(
                        () =>
                            t.title
                                ? (0, s.jsx)(m.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, s.jsx)(d.W, { className: O().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, l.use)(t.getTracks()), t.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : (0, s.jsx)(C.n, {
                          pageId: h._Q.CHART,
                          children: (0, s.jsx)(_.h, {
                              scrollElement: R,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, s.jsxs)('div', {
                                  className: O().root,
                                  'data-test-id': o.Xk.chart.CHART_PAGE,
                                  children: [
                                      (0, s.jsx)(w.Y, { variant: w.V.TEXT, withForwardControl: !1, withBackwardControl: r.canBack, children: W }),
                                      (0, s.jsx)(S.$, {
                                          className: (0, a.$)(O().scrollContainer, O().important),
                                          listClassName: O().content,
                                          customComponents: z,
                                          totalCount: D,
                                          initialItemCount: D,
                                          itemContentCallback: B,
                                          debounceDurationInMs: 300,
                                          handleRef: L,
                                          context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                          isMobileLayout: i,
                                          useWindowScroll: i,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        21341: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => p });
            var s = i(88800),
                a = i(65724),
                r = i(52300),
                l = i(19994),
                n = i(3099),
                o = i.n(n);
            let c = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(o().root, i),
                    children: [
                        (0, s.jsx)(l.W, { isActive: t, className: (0, a.$)(o().position, o().positionShimmer), radius: 'l' }),
                        (0, s.jsx)(r.I, { 'aria-hidden': !0, variant: 'chartSame', size: 'xxs', className: (0, a.$)(o().progress, o().progress_same) }),
                    ],
                });
            };
            var d = i(98644),
                m = i(93015),
                u = i(26658),
                _ = i.n(u);
            let p = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(_().chartTrackShimmer, i),
                    children: [
                        (0, s.jsx)(c, { isActive: t, className: _().chartCell }),
                        (0, s.jsx)(m.D, { isActive: t, className: _().trackShimmer, variant: d.X.PLAYLIST }),
                    ],
                });
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        26658: (e) => {
            e.exports = {
                root: 'ChartTracksPage_root__QMbqY',
                scrollContainer: 'ChartTracksPage_scrollContainer__Pxe8S',
                important: 'ChartTracksPage_important__Lddyf',
                content: 'ChartTracksPage_content__yyIAN',
                footer: 'ChartTracksPage_footer__6sNBk',
                shimmerItem: 'ChartTracksPage_shimmerItem__YwM0h',
                chartTrackShimmer: 'ChartTracksPage_chartTrackShimmer__9ldEs',
                chartCell: 'ChartTracksPage_chartCell__Ko_uE',
                trackShimmer: 'ChartTracksPage_trackShimmer__9uNZ2',
                shimmerTitle: 'ChartTracksPage_shimmerTitle__TkGmf',
            };
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        30049: (e, t, i) => {
            'use strict';
            i.d(t, { ChartTracksPageSuspenseLoader: () => A });
            var s = i(88800),
                a = i(65724),
                r = i(53548),
                l = i(2058),
                n = i(19994),
                o = i(69630),
                c = i(46422),
                d = i(44230),
                m = i(72288),
                u = i(86790),
                _ = i(60266),
                p = i(93317),
                h = i(79418),
                C = i(76541),
                x = i(21341),
                v = i(26658),
                k = i.n(v);
            let A = () => {
                let { formatMessage: e } = (0, l.A)(),
                    {
                        settings: { isMobile: t },
                    } = (0, m.g)(),
                    i = (0, c.W)(),
                    { contentScrollRef: v, setContentScrollRef: A } = (0, d.g)(),
                    g = (0, r.useCallback)(() => (0, s.jsx)(x.r, { isActive: !0, className: k().shimmerItem }), []),
                    b = (0, r.useMemo)(() => ({ Footer: () => (0, s.jsx)(_.A, { children: (0, s.jsx)(u.w, { className: k().footer }) }) }), []);
                return (0, s.jsx)(o.h, {
                    scrollElement: v,
                    children: (0, s.jsxs)('div', {
                        className: k().root,
                        children: [
                            (0, s.jsx)(p.Y, {
                                variant: p.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: i.canBack,
                                children: (0, s.jsx)(n.W, { className: k().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)(h.$, {
                                className: (0, a.$)(k().scrollContainer, k().important),
                                listClassName: k().content,
                                customComponents: b,
                                totalCount: C.H,
                                initialItemCount: C.H,
                                itemContentCallback: g,
                                debounceDurationInMs: 300,
                                handleRef: A,
                                context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                isMobileLayout: t,
                                useWindowScroll: t,
                            }),
                        ],
                    }),
                });
            };
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
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var s = i(53548);
            i(30282);
            var a = i(58390);
            let r = (e) => {
                let t = (0, a.usePathname)(),
                    [i, r] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, i, t]));
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(92716),
                o = i(17392),
                c = i(29993),
                d = i(90688),
                m = i(19934),
                u = i(7555),
                _ = i(29504),
                p = i(96527),
                h = i(78940),
                C = i(72288),
                x = i(80932),
                v = i.n(x);
            let k = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, C.g)(),
                    x = (0, h.Z)(t.url),
                    A = (0, p.N)(),
                    g = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(k, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), A({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, a.$)(v().root, i),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(u.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(13607),
                d = i(52300),
                m = i(29504),
                u = i(3099),
                _ = i.n(u);
            let p = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: r,
                        position: u,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: C,
                        className: x,
                        positionClassName: v,
                    } = e,
                    { formatMessage: k } = (0, n.A)(),
                    A = t || i,
                    g = (0, l.useMemo)(() => {
                        if (r) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, r]),
                    b = (0, l.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return k({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return k({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return k({ id: 'entity-names.chart-new' });
                            default:
                                return k({ id: 'entity-names.chart-same' });
                        }
                    }, [k, t]),
                    T = r ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(_().root, x),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(m.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(_().position, v, { [_().position_disliked]: h, [_().position_disabled]: C }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: u,
                        }),
                        A &&
                            (0, s.jsx)(d.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': b,
                                className: (0, a.$)(_().progress, _()['progress_'.concat(T)], { [_().progress_disliked]: h, [_().progress_disabled]: C }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
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
                l = i(52300),
                n = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: m, disabled: u } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, m);
                return (0, s.jsx)(n.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(l.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        47580: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            let s = (e) => e.map((e) => e.name).join(', ');
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
        52309: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => C });
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                l = i(17392),
                n = i(43443),
                o = i(39079),
                c = i(72288),
                d = i(39267),
                m = i(73805),
                u = i(15232),
                _ = i(56712),
                p = i(4683),
                h = i.n(p);
            let C = (0, a.PA)((e) => {
                var t, i;
                let { track: a, playContextParams: p } = e,
                    C = (0, o.D)({ playContextParams: p, entityId: a.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, c.g)(),
                    v = (0, r.useCallback)(
                        (e) =>
                            (0, s.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: h().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    );
                return (0, s.jsx)(_.C, {
                    track: a,
                    meta: (0, s.jsx)(u.j, { withArtistLink: !x, track: a }),
                    beforeBlock: (0, s.jsx)(n.t, {
                        withIcon: !0,
                        className: h().chartCell,
                        progress: null == (t = a.chart) ? void 0 : t.progress,
                        position: null == (i = a.chart) ? void 0 : i.position,
                        isDisliked: a.isDisliked,
                        isDisabled: !a.isAvailable,
                    }),
                    playButtonCellRender: v,
                    controls: (0, s.jsx)(m.Q, { track: a, className: h().controlsBarCell }),
                    ...C,
                    'data-test-id': l.Kq.track.TRACK_CHART,
                });
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => m });
            var s = i(88800),
                a = i(53548),
                r = i(2058),
                l = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: m,
                            disabled: u,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: C,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: k } = (0, r.A)(),
                        A = k({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: _,
                        ref: C,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: m, className: p }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => T });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(29993),
                o = i(52073),
                c = i(5407),
                d = i(76675),
                m = i(28830),
                u = i(9618),
                _ = i(4795),
                p = i(55693),
                h = i(7123),
                C = i(72288),
                x = i(8990),
                v = i(2058),
                k = i(47580),
                A = i(95993),
                g = i(27157),
                b = i.n(g);
            let T = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: g,
                        beforeBlock: T,
                        controls: N,
                        playButtonCellRender: j,
                        withLightning: f,
                        isPlaying: w,
                        isCurrent: S,
                        togglePlay: y,
                        restartPlay: I,
                        onPlayClick: R,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...E
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, u.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: z },
                        album: W,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: $ },
                    } = (0, C.g)(),
                    { ref: H, intersectionPropertyId: K } = (0, m.n)(),
                    F = (0, d.b)(),
                    Y = (0, c.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: s } = (0, v.A)();
                        return ((e, t, i) => {
                            var s;
                            let { withLightning: a } = t,
                                r = (0, k.j)(null != (s = e.artists) ? s : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, s);
                    })({ withLightning: f, track: r }),
                    q = ((e) => {
                        let { sonataState: t } = (0, C.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let s = t.entityMeta.entityId;
                            return i && s === e;
                        }
                        return i;
                    })(r.entityId),
                    G = U(W.id, null == (t = W.meta) ? void 0 : t.isNonMusic),
                    X = r.isAvailable && P && !G,
                    Q = (0, _.N)(),
                    Z = r.isAvailable && Q && !G && !L,
                    J = (0, A.w)({ track: r, callback: y }),
                    ee = (0, n.c)(() => {
                        D.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    et = (0, A.w)({ track: r, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [es, ea] = (0, l.useState)(!1),
                    er = (0, n.c)(() => {
                        if (!Y()) {
                            if (X) return void M();
                            if (Z) return void $.open();
                            (es || w || (ea(!0), null == ei || ei()), J(), F(!w), null == R || R(!w));
                        }
                    }),
                    el = (0, n.c)(() => {
                        if (w) return void I();
                        er();
                    }),
                    en = (0, n.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (P && r.isAvailableOnlyForPlus && M(), Q && r.isAvailableOnlyForPlus && $.open());
                            return;
                        }
                        if (X) return void M();
                        let t = !z && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void $.open()
                            : ((0, o.P)(e, b().ripple), z)
                              ? void er()
                              : 2 === e.detail
                                ? void el()
                                : void (1 === e.detail && r.hasTrackLink && !B.modal.isOpened && (et(), Z && $.open()));
                    }),
                    eo = null == j ? void 0 : j({ onPlayButtonClick: er, isPlaying: w, isCurrent: S, isLoading: q, playButtonIconSize: O });
                return (0, s.jsxs)(x.C, {
                    ref: H,
                    'aria-label': V,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': r.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': K,
                    onClick: en,
                    className: (0, a.$)(b().root, { [b().root_disabled]: !r.isAvailable, [b().root_current]: S && z }, i),
                    ...E,
                    children: [T, eo, g, N],
                });
            });
        },
        59844: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            var s = i(88800),
                a = i(53548),
                r = i(90334);
            let l = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o }), [t, i, l, n, o]);
                return (0, s.jsx)(r.r.Provider, { value: d, children: c });
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => E });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(29993),
                m = i(52300),
                u = i(17610),
                _ = i(29504),
                p = i(42174),
                h = i(96817);
            let C = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: r, iconSize: o, size: d = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, n.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    C = (0, l.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, s.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: C,
                    icon: (0, s.jsx)(m.I, { size: o, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                v = i(25557),
                k = i(55693),
                A = i(72288),
                g = i(49738),
                b = i(56446),
                T = i(64546),
                N = i(29831),
                j = i(30123),
                f = i(54965),
                w = i(1829),
                S = i(82092),
                y = i.n(S),
                I = i(79262),
                R = i(41867),
                O = i.n(R);
            let L = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, n.A)();
                    return t.isDownloaded
                        ? (0, s.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, s.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                E = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: r,
                            withLightning: h,
                            ignoreDislikedStyles: S,
                            onLikeClick: I,
                            utmLink: R,
                            withSecondaryColor: O,
                            handleRemove: E,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: W } = (0, A.g)(),
                        { formatMessage: U } = (0, n.A)(),
                        { sendLikeSearchFeedback: $ } = (0, k.z)(),
                        [H, K] = (0, l.useState)(!1),
                        [F, Y] = (0, l.useState)(!1),
                        V = (0, x.P)(),
                        q = (0, p.K)(r),
                        {
                            duration: G,
                            lightning: X,
                            ugc: Q,
                        } = ((e, t, i) => {
                            var s;
                            let { withLightning: a, isUGC: r } = t,
                                l = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / j.k7);
                                              return (0, f.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== l ? { text: l, ariaLabel: (0, N.j)(Math.round((null != (s = e.durationMs) ? s : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: h, isUGC: r.isUGC }, U),
                        Z = (0, v.F)(),
                        J = z.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (H || r.isLiked || (K(!0), null == $ || $()), await q(), null == I || I(r.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        es = (0, d.c)((e) => {
                            if ((e.stopPropagation(), V())) return void e.preventDefault();
                            (W.openTrackTrailer(r.id), Z(o.DomainObjectType.Track, r.id));
                        }),
                        ea = (0, l.useMemo)(() => {
                            if (ee)
                                return (0, s.jsx)('div', {
                                    onClick: ei,
                                    children: (0, s.jsx)(w._, {
                                        track: r,
                                        open: F,
                                        onOpenChange: Y,
                                        placement: 'bottom',
                                        icon: (0, s.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, a.$)(y().contextMenu, { [y().contextMenu_visible]: F }),
                                        handleRemove: E,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, E, F, ee, P, r, R]);
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(y().root, y().controls, i, {
                            [y().controls_dislikedControls]: r.isDisliked,
                            [y().controls_dislikedColors]: r.isDisliked && !S,
                            [y().controls_disabled]: !r.isAvailable,
                            [y().root_withSecondaryColor]: O,
                        }),
                        children: [
                            X && (0, s.jsx)(m.I, { 'aria-label': X.label, size: 'xxs', className: y().lightning, variant: 'lightning' }),
                            Q &&
                                (0, s.jsxs)(u.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, s.jsx)(m.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: y().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, s.jsx)(u.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, s.jsx)('div', { className: (0, a.$)(y().item, y().downloadIcon), children: (0, s.jsx)(L, { track: r }) }),
                            E && !B && (0, s.jsx)(C, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(y().item, y().removeButton), onClick: E, ariaLabel: D }),
                            ee &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, a.$)(y().item, y().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(b.k, {
                                        className: (0, a.$)(y().item, y().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: es,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(y().item, y().contextMenuWrapper),
                                children: [
                                    null !== G &&
                                        (0, s.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(y().duration, { [y().duration_hidden]: F && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': G.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, s.jsx)('span', { 'aria-hidden': 'true', children: G.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        76458: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 21064)), Promise.resolve().then(i.bind(i, 30049)));
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        82092: (e) => {
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
            i.d(t, { N: () => h });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                m = i(72288),
                u = i(94398),
                _ = i(17332),
                p = i.n(_);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: _, variant: h, iconVariant: iconOverride, size: C = 'xxxs', ...x } = e,
                    { formatMessage: v } = (0, n.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, m.g)(),
                    [A, g] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(g);
                }, [i, r]);
                let {
                    iconVariant: b,
                    descriptionText: T,
                    isTooltipEnabled: N,
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
                })({ variant: h, descriptionTexts: A, isMobile: k }, v);
                return (0, s.jsx)(u.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, s.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': j,
                            style: { width: 'var(--ym-icon-size-'.concat(C, ')'), height: 'var(--ym-icon-size-'.concat(C, ')') },
                            ...x,
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
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : b,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? C : C,
                            style: iconOverride ? { width: `var(--ym-icon-size-${C})`, height: `var(--ym-icon-size-${C})` } : undefined,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(88800),
                a = i(2058),
                r = i(29993),
                l = i(87762),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                m = i(96706),
                u = i(53548),
                _ = i(79390),
                p = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: C } = (0, a.A)(),
                    { notify: x } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, l] = (0, u.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let u = { ...(0, m.HO)(r), url: r.url, isLiked: !r.isLiked };
                            l(!0);
                            let C = await r.toggleLike();
                            if ((l(!1), !c)) return;
                            let x = t.modal.isOpened;
                            C === _.f.OK
                                ? e((0, s.jsx)(p.T, { withLink: o, album: u }), { containerId: x ? n.u.FULLSCREEN_INFO : n.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? n.u.FULLSCREEN_ERROR : n.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: k } = (0, l.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: k, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void x((0, s.jsx)(d.h, { error: C({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var s = i(88800),
                a = i(98644),
                r = i(65724),
                l = i(53548),
                n = i(2058),
                o = i(19994),
                c = i(13797),
                d = i.n(c);
            let m = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, n.A)(),
                    c = (0, l.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
                    children: [
                        (0, s.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, s.jsx)('div', { className: d().coverContainer, children: (0, s.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, s.jsx)('div', { className: d().textContainer, children: (0, s.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, s.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var u = i(26835),
                _ = i.n(u);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, n.A)(),
                        c = (0, l.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, s.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, s.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, s.jsx)('div', { className: _().textContainer, children: (0, s.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, s.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: r } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, s.jsx)(p, { isActive: t, className: r });
                        case a.X.ALBUM:
                            return (0, s.jsx)(m, { isActive: t, className: r });
                    }
                };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                l = i(29504),
                n = i(37438),
                o = i.n(n);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: n, placement: d = 'top', children: m } = e;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            m,
                            (0, s.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, s.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(58217),
                a = i(85587);
            let r = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: r } = e;
                return (0, s.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(88800),
                a = i(84961),
                r = i(42729),
                l = i(5048);
            let n = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    n = (0, l.b)(t.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 8380, 4596, 5108, 127, 1191, 1931, 7617, 3637, 7611, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732,
                1195, 1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 8766, 763, 2670, 7358,
            ],
            () => e((e.s = 76458)),
        ),
            (_N_E = e.O()));
    },
]);
