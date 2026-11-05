(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3737],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var s = i(2058),
                r = i(61691);
            let a = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
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
            i.d(t, { N: () => a });
            var s = i(72288),
                r = i(97956);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var s = i(61691),
                r = i(15077);
            let a = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return r.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        6668: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var s = i(53548),
                r = i(29993);
            let a = () => {
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
                    (0, r.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
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
            i.d(t, { i: () => F });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(79070),
                l = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: s } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: r };
            };
            var _ = i(21010),
                h = i.n(_),
                C = i(17392),
                x = i(29504),
                v = i(91292),
                g = i(2058),
                A = i(87999),
                k = i(80643),
                b = i(78940),
                T = i(55693),
                f = i(58217);
            let j = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: j,
                            isTooltipEnabled: N,
                            handleNavigate: w,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, g.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: r } = e,
                                        a = s || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && r,
                                    };
                                })({ item: s, allArtistsTitle: r, withCustomTooltip: a }, n),
                                {
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, b.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, T.z)(),
                                _ = (0, k.S)(),
                                h = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), m(e));
                                }),
                                C = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, f.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (_({ to: A.AppScreen.ArtistScreen }), null == p || p(), C(e));
                                });
                            return { ...o, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return p
                        ? (0, s.jsx)(v.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: w,
                              title: _,
                              'data-test-id': C.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(l.m_, {
                                  enabled: N,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: j,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, s.jsx)(l.m_, {
                              enabled: N,
                              offsetOptions: 4,
                              placement: 'top',
                              text: j,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': C.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                N = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(j, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
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
                                                captionClassName: r,
                                                captionSize: a,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': C.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(w.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = i(61013),
                R = i(87819),
                y = i(40634),
                E = i(48468),
                L = i.n(E);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(l.ZI, { className: L().tooltipContent, children: i.map((e) => (0, s.jsx)(y.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                z = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, g.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(y.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, o.L)(() =>
                            (0, O.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, n.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(U, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: C,
                            variant: x = 'breakAll',
                            spoilerComponent: v,
                            ...g
                        } = e,
                        A = ((e) => {
                            var t, i, s;
                            let { separator: r, visibleArtistsCount: a, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                C = null == (s = e.withCustomTooltip) || s,
                                x = (0, n.useRef)(null),
                                [v, g] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                k = ((!A || 1 === _.length) && m) || !m,
                                b = ((e, t) => {
                                    var i, s, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        o = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: v ? void 0 : a, withComposer: l, withLink: !!k && o, artistIdWithoutLink: c }),
                                T = h ? b.allArtistsTitle : '',
                                f = (0, d.c)((e) => {
                                    (g(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: C,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: f,
                                isTooltipEnabled: !!T && C && !m && !A,
                                title: !T || C || m ? void 0 : T,
                            };
                        })(g),
                        k = (0, o.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(I, { spoilerClassName: a, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        b = (0, s.jsx)(l.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            N,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: C,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    k,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(W, { labelRef: A.labelRef, artists: A.artists, label: b }) : b;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, r) {
                return JSON.stringify(e, i(t, r), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (r, a) {
                        if (i.length > 0) {
                            var n = i.indexOf(this);
                            (~n ? i.splice(n + 1) : i.push(this), ~n ? s.splice(n, 1 / 0, r) : s.push(r), ~i.indexOf(a) && (a = t.call(this, r, a)));
                        } else i.push(a);
                        return null == e ? a : e.call(this, r, a);
                    }
                );
            }
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => j });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                p = i(13946),
                _ = i(55693),
                h = i(72288),
                C = i(24548),
                x = i(85587),
                v = i(90224),
                g = i(91292),
                A = i(7608),
                k = i(6667),
                b = i(85463),
                T = i(65462),
                f = i.n(T);
            let j = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: T,
                        withExplicitMark: j,
                        withSecondaryColor: N,
                        captionSize: w = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: O,
                        artistsClassName: R,
                        ignoreDislikedStyles: y,
                        withCustomTooltip: E = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: z,
                        afterTitle: U,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: F } = (0, o.A)(),
                    { sendNavigateSearchFeedback: $ } = (0, _.z)(),
                    {
                        settings: { isMobile: H },
                        slam: K,
                    } = (0, h.g)(),
                    G = (0, k.$)({ withCustomTooltip: E }),
                    q = (0, l.useSearchParams)(),
                    Y = (0, A.B)(a, {
                        isMobile: H,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: z,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: j,
                        query: P ? Object.fromEntries(q) : void 0,
                    }),
                    {
                        displayTitle: V,
                        ariaLabel: X,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var r, a;
                        let { canEnableCustomTooltip: n, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (r = t.version) ? r : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (a = e.version) ? a : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(a, Y, { canEnableCustomTooltip: G, isMobile: H }, F),
                    et = (0, b.O)({ track: a, onNavigate: $, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: C.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, r.$)(f().text, f().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V,
                                }),
                            }),
                        [w, V, Z, ee],
                    ),
                    es = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: C.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, r.$)(f().text, f().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: V,
                                  }),
                              })
                            : Y.link
                              ? (0, s.jsx)(g.N, {
                                    onClick: et,
                                    className: f().albumLink,
                                    href: Y.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, n.useMemo)(() => +!!L, [L]);
                return (0, s.jsx)('div', {
                    className: (0, r.$)(f().root, { [f().root_disabled]: !a.isAvailable, [f().root_disliked]: a.isDisliked && !y, [f().root_withSecondaryColor]: N }, t),
                    children: (0, s.jsxs)('div', {
                        className: f().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, r.$)(f().titleContainer, { [f().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, r.$)(f().text, O),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            es,
                                            Y.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, r.$)(f().text, f().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, s.jsx)(v.N, {
                                            containerClassName: f().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: S,
                                            variant: Y.explicitMark,
                                            className: f().explicitMark,
                                            trackId: a.id,
                                        }),
                                    U,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, s.jsx)(p.i, {
                                    className: (0, r.$)(f().text, { [f().artists]: L }, R, O),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, r.$)(f().text, f().link),
                                    captionClassName: (0, r.$)(f().text, f().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: er,
                                    captionSize: w,
                                    withContextMenu: W,
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
                r = i(53548),
                a = i(17392),
                n = i(29504),
                o = i(15526),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
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
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(87999),
                c = i(76903),
                d = i(17392),
                u = i(18593),
                m = i(19994),
                p = i(29504),
                _ = i(32596),
                h = i(69630),
                C = i(52309),
                x = i(98427),
                v = i(84384),
                g = i(46422),
                A = i(44230),
                k = i(37670),
                b = i(6668),
                T = i(34961),
                f = i(53892),
                j = i(72288),
                N = i(86790),
                w = i(60266),
                S = i(93317),
                I = i(79418),
                O = i(76541),
                R = i(21341),
                y = i(26658),
                E = i.n(y);
            let L = (0, a.PA)(() => {
                let { formatMessage: e } = (0, o.A)(),
                    { tracksSubPage: t } = (0, T.s)(f.n.CHART),
                    {
                        settings: { isMobile: i },
                    } = (0, j.g)(),
                    a = (0, g.W)(),
                    { contentScrollRef: y, setContentScrollRef: L } = (0, A.g)(),
                    P = (0, b.w)(),
                    { from: M } = (0, v.f)({ pageId: x.b.CHART });
                (0, k.J)(t.isResolved);
                let D = t.isLoading || !t.playlistMeta,
                    B = D ? O.H : t.items.length,
                    z = (0, n.useCallback)(
                        (e) => {
                            let i = t.items[e],
                                r = t.playlistMeta;
                            return i && r && !D
                                ? (0, s.jsx)(C.Q, {
                                      track: i,
                                      playContextParams: P(e, {
                                          contextData: { type: u.K.Playlist, meta: { id: ''.concat(r.uid, ':').concat(r.kind) }, from: M },
                                          queueParams: { index: e, entityId: i.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, s.jsx)(R.r, { isActive: !0, className: E().shimmerItem });
                        },
                        [M, P, D, t.items, t.playlistMeta],
                    ),
                    U = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(w.A, { children: (0, s.jsx)(N.w, { className: E().footer }) }) }), []),
                    W = (0, n.useMemo)(
                        () =>
                            t.title
                                ? (0, s.jsx)(p.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, s.jsx)(m.W, { className: E().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getTracks()), t.isRejected)
                    ? (0, s.jsx)(_.SomethingWentWrong, {})
                    : (0, s.jsx)(c.a, {
                          pageId: l.AppScreen.PlaylistListScreen,
                          pageIdForFrom: x.b.CHART,
                          children: (0, s.jsx)(h.h, {
                              scrollElement: y,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, s.jsxs)('div', {
                                  className: E().root,
                                  'data-test-id': d.Xk.chart.CHART_PAGE,
                                  children: [
                                      (0, s.jsx)(S.Y, { variant: S.V.TEXT, withForwardControl: !1, withBackwardControl: a.canBack, children: W }),
                                      (0, s.jsx)(I.$, {
                                          className: (0, r.$)(E().scrollContainer, E().important),
                                          listClassName: E().content,
                                          customComponents: U,
                                          totalCount: B,
                                          initialItemCount: B,
                                          itemContentCallback: z,
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
            i.d(t, { r: () => _ });
            var s = i(88800),
                r = i(65724),
                a = i(52300),
                n = i(19994),
                o = i(3099),
                l = i.n(o);
            let c = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(l().root, i),
                    children: [
                        (0, s.jsx)(n.W, { isActive: t, className: (0, r.$)(l().position, l().positionShimmer), radius: 'l' }),
                        (0, s.jsx)(a.I, { 'aria-hidden': !0, variant: 'chartSame', size: 'xxs', className: (0, r.$)(l().progress, l().progress_same) }),
                    ],
                });
            };
            var d = i(98644),
                u = i(93015),
                m = i(26658),
                p = i.n(m);
            let _ = (e) => {
                let { isActive: t, className: i } = e;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(p().chartTrackShimmer, i),
                    children: [
                        (0, s.jsx)(c, { isActive: t, className: p().chartCell }),
                        (0, s.jsx)(u.D, { isActive: t, className: p().trackShimmer, variant: d.X.PLAYLIST }),
                    ],
                });
            };
        },
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => r, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let r = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
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
                r = i(65724),
                a = i(53548),
                n = i(2058),
                o = i(19994),
                l = i(69630),
                c = i(46422),
                d = i(44230),
                u = i(72288),
                m = i(86790),
                p = i(60266),
                _ = i(93317),
                h = i(79418),
                C = i(76541),
                x = i(21341),
                v = i(26658),
                g = i.n(v);
            let A = () => {
                let { formatMessage: e } = (0, n.A)(),
                    {
                        settings: { isMobile: t },
                    } = (0, u.g)(),
                    i = (0, c.W)(),
                    { contentScrollRef: v, setContentScrollRef: A } = (0, d.g)(),
                    k = (0, a.useCallback)(() => (0, s.jsx)(x.r, { isActive: !0, className: g().shimmerItem }), []),
                    b = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(p.A, { children: (0, s.jsx)(m.w, { className: g().footer }) }) }), []);
                return (0, s.jsx)(l.h, {
                    scrollElement: v,
                    children: (0, s.jsxs)('div', {
                        className: g().root,
                        children: [
                            (0, s.jsx)(_.Y, {
                                variant: _.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: i.canBack,
                                children: (0, s.jsx)(o.W, { className: g().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)(h.$, {
                                className: (0, r.$)(g().scrollContainer, g().important),
                                listClassName: g().content,
                                customComponents: b,
                                totalCount: C.H,
                                initialItemCount: C.H,
                                itemContentCallback: k,
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
            i.d(t, { R: () => r });
            var s = i(67174);
            let r = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37014: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 21064)), Promise.resolve().then(i.bind(i, 30049)));
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var s = i(53548);
            i(30282);
            var r = i(58390);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [i, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]));
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => g });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(87999),
                l = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                _ = i(29504),
                h = i(78940),
                C = i(72288),
                x = i(80932),
                v = i.n(x);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, C.g)(),
                    x = (0, h.Z)(t.url),
                    A = (0, l.S)(),
                    k = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(g, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), A({ to: o.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(m.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: b,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(p.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => _ });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                m = i(3099),
                p = i.n(m);
            let _ = (0, a.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: a,
                        position: m,
                        weight: _ = 'normal',
                        isDisliked: h,
                        isDisabled: C,
                        className: x,
                        positionClassName: v,
                    } = e,
                    { formatMessage: g } = (0, o.A)(),
                    A = t || i,
                    k = (0, n.useMemo)(() => {
                        if (a) return 'crown';
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
                    }, [t, a]),
                    b = (0, n.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return g({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return g({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return g({ id: 'entity-names.chart-new' });
                            default:
                                return g({ id: 'entity-names.chart-same' });
                        }
                    }, [g, t]),
                    T = a ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(p().root, x),
                    'data-test-id': l.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: _,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(p().position, v, { [p().position_disliked]: h, [p().position_disabled]: C }),
                            'data-test-id': l.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        A &&
                            (0, s.jsx)(d.I, {
                                variant: k,
                                size: 'xxs',
                                'aria-label': b,
                                className: (0, r.$)(p().progress, p()['progress_'.concat(T)], { [p().progress_disliked]: h, [p().progress_disabled]: C }),
                                'data-test-id': l.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var s = i(23877),
                r = i(74021);
            class a extends r.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let r = s.Q[e];
                    console[r](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(88800),
                r = i(84961),
                a = i(17392),
                n = i(52300),
                o = i(19934),
                l = i(108),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, s.jsx)(o.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
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
                r = i(84961),
                a = i(53548),
                n = i(17392),
                o = i(43443),
                l = i(39079),
                c = i(72288),
                d = i(39267),
                u = i(73805),
                m = i(15232),
                p = i(56712),
                _ = i(4683),
                h = i.n(_);
            let C = (0, r.PA)((e) => {
                var t, i;
                let { track: r, playContextParams: _ } = e,
                    C = (0, l.D)({ playContextParams: _, entityId: r.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, c.g)(),
                    v = (0, a.useCallback)(
                        (e) =>
                            (0, s.jsx)(d.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: h().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [r],
                    );
                return (0, s.jsx)(p.C, {
                    track: r,
                    meta: (0, s.jsx)(m.j, { withArtistLink: !x, track: r }),
                    beforeBlock: (0, s.jsx)(o.t, {
                        withIcon: !0,
                        className: h().chartCell,
                        progress: null == (t = r.chart) ? void 0 : t.progress,
                        position: null == (i = r.chart) ? void 0 : i.position,
                        isDisliked: r.isDisliked,
                        isDisabled: !r.isAvailable,
                    }),
                    playButtonCellRender: v,
                    controls: (0, s.jsx)(u.Q, { track: r, className: h().controlsBarCell }),
                    ...C,
                    'data-test-id': n.Kq.track.TRACK_CHART,
                });
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(88800),
                r = i(53548),
                a = i(2058),
                n = i(17392),
                o = i(96817),
                l = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: C,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: g } = (0, a.A)(),
                        A = g({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: p,
                        ref: C,
                        icon: (0, s.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => T });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(62414),
                l = i(33979),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                m = i(9618),
                p = i(4795),
                _ = i(55693),
                h = i(7123),
                C = i(72288),
                x = i(8990),
                v = i(2058),
                g = i(47580),
                A = i(95993),
                k = i(27157),
                b = i.n(k);
            let T = (0, a.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: a,
                        meta: k,
                        beforeBlock: T,
                        controls: f,
                        playButtonCellRender: j,
                        withLightning: N,
                        isPlaying: w,
                        isCurrent: S,
                        togglePlay: I,
                        restartPlay: O,
                        onPlayClick: R,
                        playButtonIconSize: y,
                        skipFreemiumCloseListeningPaywall: E = !1,
                        ...L
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: z },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: F },
                    } = (0, C.g)(),
                    $ = (0, o.D)(),
                    H = (0, l.g)(),
                    K = (0, u.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: s } = (0, v.A)();
                        return ((e, t, i) => {
                            var s;
                            let { withLightning: r } = t,
                                a = (0, g.j)(null != (s = e.artists) ? s : []);
                            return e.isAvailable
                                ? [a, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(a, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, s);
                    })({ withLightning: N, track: a }),
                    q = ((e) => {
                        let { sonataState: t } = (0, C.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let s = t.entityMeta.entityId;
                            return i && s === e;
                        }
                        return i;
                    })(a.entityId),
                    Y = W(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    V = a.isAvailable && P && !Y,
                    X = (0, p.N)(),
                    Z = a.isAvailable && X && !Y && !E,
                    J = (0, A.w)({ track: a, callback: I }),
                    Q = (0, c.c)(() => {
                        D.open({ trackId: a.id, albumId: a.albumId });
                    }),
                    ee = (0, A.w)({ track: a, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, _.z)(),
                    [ei, es] = (0, n.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!K()) {
                            if (V) return void M();
                            if (Z) return void F.open();
                            (ei || w || (es(!0), null == et || et()), J(), w || H(), null == R || R(!w));
                        }
                    }),
                    ea = (0, c.c)(() => {
                        if (w) return void O();
                        er();
                    }),
                    en = (0, c.c)((e) => {
                        if (!a.isAvailable && !a.hasModalAccess) {
                            (P && a.isAvailableOnlyForPlus && M(), X && a.isAvailableOnlyForPlus && F.open());
                            return;
                        }
                        if (V) return void M();
                        let t = !z && (2 === e.detail || (1 === e.detail && a.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void F.open()
                            : ((0, d.P)(e, b().ripple), z)
                              ? void er()
                              : 2 === e.detail
                                ? void ea()
                                : void (1 === e.detail && a.hasTrackLink && !B.modal.isOpened && (ee(), Z && F.open()));
                    }),
                    eo = null == j ? void 0 : j({ onPlayButtonClick: er, isPlaying: w, isCurrent: S, isLoading: q, playButtonIconSize: y });
                return (0, s.jsxs)(x.C, {
                    ref: $,
                    'aria-label': G,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': a.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: en,
                    className: (0, r.$)(b().root, { [b().root_disabled]: !a.isAvailable, [b().root_current]: S && z }, i),
                    ...L,
                    children: [T, eo, k, f],
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => L });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(87999),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                p = i(29504),
                _ = i(42174),
                h = i(96817);
            let C = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: a, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: p } = (0, o.A)(),
                    _ = null != m ? m : p({ id: 'play-queue.delete-from-queue' }),
                    C = (0, n.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, s.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': _,
                    onClick: C,
                    icon: (0, s.jsx)(u.I, { size: l, className: a, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                v = i(57934),
                g = i(55693),
                A = i(72288),
                k = i(49738),
                b = i(56446),
                T = i(64546),
                f = i(29831),
                j = i(30123),
                N = i(54965),
                w = i(1829),
                S = i(82092),
                I = i.n(S),
                O = i(79262),
                R = i(41867),
                y = i.n(R);
            let E = (0, a.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, s.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, s.jsx)(O.A, { value: t.downloadingProgress, size: 16, className: y().downloadingProgress, progressBarClassName: y().progress })
                          : null;
                }),
                L = (0, a.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: a,
                            withLightning: h,
                            ignoreDislikedStyles: S,
                            onLikeClick: O,
                            utmLink: R,
                            withSecondaryColor: y,
                            handleRemove: L,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: U } = (0, A.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: F } = (0, g.z)(),
                        [$, H] = (0, n.useState)(!1),
                        [K, G] = (0, n.useState)(!1),
                        q = (0, x.P)(),
                        Y = (0, _.K)(a),
                        {
                            duration: V,
                            lightning: X,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var s;
                            let { withLightning: r, isUGC: a } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / j.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, f.j)(Math.round((null != (s = e.durationMs) ? s : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: a ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(a, { withLightning: h, isUGC: a.isUGC }, W),
                        J = (0, v.F)(),
                        Q = z.hasPlus,
                        ee = !a.isRemoved && a.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            ($ || a.isLiked || (H(!0), null == F || F()), await Y(), null == O || O(a.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        es = (0, d.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            (U.openTrackTrailer(a.id), J(l.DomainObjectType.Track, a.id));
                        }),
                        er = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, s.jsx)('div', {
                                    onClick: ei,
                                    children: (0, s.jsx)(w._, {
                                        track: a,
                                        open: K,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, s.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(I().contextMenu, { [I().contextMenu_visible]: K }),
                                        handleRemove: L,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, L, K, ee, P, a, R]);
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(I().root, I().controls, i, {
                            [I().controls_dislikedControls]: a.isDisliked,
                            [I().controls_dislikedColors]: a.isDisliked && !S,
                            [I().controls_disabled]: !a.isAvailable,
                            [I().root_withSecondaryColor]: y,
                        }),
                        children: [
                            X && (0, s.jsx)(u.I, { 'aria-label': X.label, size: 'xxs', className: I().lightning, variant: 'lightning' }),
                            Z &&
                                (0, s.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, s.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, s.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, s.jsx)('div', { className: (0, r.$)(I().item, I().downloadIcon), children: (0, s.jsx)(E, { track: a }) }),
                            L && !B && (0, s.jsx)(C, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(I().item, I().removeButton), onClick: L, ariaLabel: D }),
                            ee &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(k.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, r.$)(I().item, I().likeIcon),
                                        isLiked: a.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = a.trailer) ? void 0 : t.isAvailable) &&
                                a.isAvailable &&
                                (0, s.jsx)(T.WithOffline, {
                                    fallback: (0, s.jsx)(b.k, {
                                        className: (0, r.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: es,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, s.jsxs)('div', {
                                className: (0, r.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    null !== V &&
                                        (0, s.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(I().duration, { [I().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, s.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => l });
            var s = i(14567),
                r = i(243),
                a = i(62151),
                n = i(33396);
            let o = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, r) {
                    let a,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, n.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (a = this.obfuscateData(l)), r) ? `${o} ${s(a)}` : [o, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, r.A)(e, t) && (0, a.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                a = i(53534),
                n = i(63582),
                o = i(245);
            let l = new WeakMap();
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
                        l.get(t) ??
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
                    (l.set(t, i), (this.queue = i));
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
                    let i = (0, o.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, r.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== i ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, r) : null, session: r };
                        return (u(o), (0, s.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== n ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...l, input: t, isReady: n, scope: n ? i.createScreenScope(t, l.session) : null };
                        return (u(r), (0, s.jsx)(a.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(a.k, { value: l, children: e });
                },
            );
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => a, TF: () => o, hZ: () => n });
            var s = function () {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, s = arguments.length; i < s; i++)
                            for (var r in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], s = 0; s < i.length; s++) {
                        var r = i[s].split('='),
                            a = r.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(r[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, i) {
                var a;
                document.cookie =
                    ((a = s({ path: '/' }, i)),
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
                                r('Expires', e.expires ? e.expires.toUTCString() : '') +
                                r('Domain', e.domain) +
                                r('Path', e.path) +
                                r('Secure', e.secure) +
                                r('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function o(e, t) {
                n(e, '', s(s({}, t), { expires: -1 }));
            }
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
            i.d(t, { T: () => a });
            var s = i(53548),
                r = i(52150);
            function a() {
                return (0, s.useContext)(r.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                _ = i.n(p);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: h, iconVariant: iconOverride, size: C = 'xxxs', ...x } = e,
                    { formatMessage: v } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, u.g)(),
                    [A, k] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(k);
                }, [i, a]);
                let {
                    iconVariant: b,
                    descriptionText: T,
                    isTooltipEnabled: f,
                    ariaLabel: j,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: s, isMobile: r } = e,
                        a = (null == s ? void 0 : s.join('\n')) || '';
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
                        descriptionText: a,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !r,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: g }, v);
                return (0, s.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: f,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, r.$)(_().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': j,
                            style: { width: 'var(--ym-icon-size-'.concat(C, ')'), height: 'var(--ym-icon-size-'.concat(C, ')') },
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': j,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : b,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? C : C,
                            style: iconOverride ? { width: `var(--ym-icon-size-${C})`, height: `var(--ym-icon-size-${C})` } : undefined,
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
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
                r = i(2058),
                a = i(29993),
                n = i(87762),
                o = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                _ = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: C } = (0, r.A)(),
                    { notify: x } = (0, l.l)(),
                    v = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: l = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let C = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let x = t.modal.isOpened;
                            C === p.f.OK
                                ? e((0, s.jsx)(_.T, { withLink: l, album: m }), { containerId: x ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: g } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: g, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void x((0, s.jsx)(d.h, { error: C({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var s = i(88800),
                r = i(98644),
                a = i(65724),
                n = i(53548),
                o = i(2058),
                l = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, o.A)(),
                    c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(d().root, i),
                    children: [
                        (0, s.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, s.jsx)('div', { className: d().coverContainer, children: (0, s.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, s.jsx)('div', { className: d().textContainer, children: (0, s.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, s.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                p = i.n(m);
            let _ = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, o.A)(),
                        c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, s.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, a.$)(p().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, s.jsx)(l.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, s.jsx)('div', { className: p().textContainer, children: (0, s.jsx)(l.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, s.jsx)(l.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: a } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, s.jsx)(_, { isActive: t, className: a });
                        case r.X.ALBUM:
                            return (0, s.jsx)(u, { isActive: t, className: a });
                    }
                };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(88800),
                r = i(17392),
                a = i(17610),
                n = i(29504),
                o = i(37438),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var s = i(58217),
                r = i(85587);
            let a = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: a } = e;
                return (0, s.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: a, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var s = i(88800),
                r = i(84961),
                a = i(42729),
                n = i(5048);
            let o = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    o = (0, n.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 1833, 918, 9079, 3469, 1191, 1041, 8194, 8655, 7611, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 7746,
                4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 4386, 763, 2670, 7358,
            ],
            () => e((e.s = 37014)),
        ),
            (_N_E = e.O()));
    },
]);
