(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 2837],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(2058),
                a = i(61691);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
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
            i.d(t, { N: () => s });
            var r = i(72288),
                a = i(97956);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(61691),
                a = i(15077);
            let s = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
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
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                _ = i(13619),
                m = i(73805),
                p = i(15232),
                h = i(56712),
                v = i(26243),
                x = i.n(v);
            let g = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: v,
                        withDNDBlock: g,
                        isDragging: b,
                        draggingClassName: A,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: N,
                        handleRemove: f,
                        withDislike: y,
                        withTrailer: T = !0,
                        beforeTitle: k,
                        removeButtonAriaLabel: I,
                        hideControls: E,
                    } = e,
                    O = (0, c.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    j = (0, o.X)(i.trackSource, { isMobile: S }),
                    L = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(v, { [x().trackWithDots]: g, [x().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, r.jsx)(_.O, { className: (0, a.$)(x().dots, A), isDragging: b }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: j, beforeTitle: k, track: i, ignoreDislikedStyles: C, withSecondaryColor: N }),
                    playButtonCellRender: L,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: N,
                        handleRemove: f,
                        withDislike: y,
                        withTrailer: T,
                        removeButtonAriaLabel: I,
                        hideControls: E,
                    }),
                    ...O,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        11006: (e) => {
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
        13607: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var r = i(88800),
                a = i(65724),
                s = i(52300),
                n = i(30907),
                l = i.n(n);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, r.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
            };
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
            i.d(t, { i: () => z });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                _ = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var p = i(21010),
                h = i.n(p),
                v = i(17392),
                x = i(29504),
                g = i(91292),
                b = i(2058),
                A = i(92716),
                C = i(96527),
                N = i(78940),
                f = i(55693),
                y = i(58217);
            let T = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: T,
                            isTooltipEnabled: k,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, b.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                        s = r || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : s,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !r && a,
                                    };
                                })({ item: r, allArtistsTitle: a, withCustomTooltip: s }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, N.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, f.z)(),
                                p = (0, C.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, y.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (p({ to: A.AppScreen.ArtistScreen }), null == m || m(), v(e));
                                });
                            return { ...l, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return m
                        ? (0, r.jsx)(g.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: I,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: k,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: a, children: _ }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: k,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, r.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                k = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: s, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(T, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: s,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(T, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: s,
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
                E = i(65453);
            let O = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(61013),
                j = i(87819),
                L = i(40634),
                w = i(48468),
                P = i.n(w);
            let R = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, r.jsx)(L.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, r.jsx)(R, { forwardRef: t, ...e }));
            var D = i(19934),
                F = i(70396),
                B = i.n(F);
            let U = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, b.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(B().root, B().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, S.A)(() => {
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
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(U, { artists: t, label: i }) : (0, r.jsx)(M, { artists: t, label: i })) : i;
                }),
                z = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...b
                        } = e,
                        A = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: s, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                x = (0, n.useRef)(null),
                                [g, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                C = ((!A || 1 === p.length) && _) || !_,
                                N = ((e, t) => {
                                    var i, r, a;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: s } = t;
                                                return {
                                                    primary: m(e, { withLink: r, separator: s ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return m(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!C && l, artistIdWithoutLink: c }),
                                f = h ? N.allArtistsTitle : '',
                                y = (0, d.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: y,
                                isTooltipEnabled: !!f && v && !_ && !A,
                                title: !f || v || _ ? void 0 : f,
                            };
                        })(b),
                        C = (0, l.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, r.jsx)(O, { spoilerClassName: s, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        N = (0, r.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, r.jsx)(
                                            k,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, r.jsx)(W, { labelRef: A.labelRef, artists: A.artists, label: N }) : N;
                });
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => r });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...s } = t,
                        n = e || 'Internal error';
                    (super(n, s), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                _ = i(29504),
                m = i(13946),
                p = i(55693),
                h = i(72288),
                v = i(24548),
                x = i(85587),
                g = i(90224),
                b = i(91292),
                A = i(7608),
                C = i(6667),
                N = i(85463),
                f = i(65462),
                y = i.n(f);
            let T = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: f,
                        withExplicitMark: T,
                        withSecondaryColor: k,
                        captionSize: I = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: O,
                        textClassName: S,
                        artistsClassName: j,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: w = !0,
                        hasLineClamp: P = !0,
                        withSavingQueryParams: R,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: F,
                        withTrackLink: B,
                        afterTitle: U,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, h.g)(),
                    V = (0, C.$)({ withCustomTooltip: w }),
                    G = (0, o.useSearchParams)(),
                    K = (0, A.B)(s, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: B,
                        withArtistLink: D,
                        variant: F,
                        withExplicitMark: T,
                        query: R ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, s;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, K, { canEnableCustomTooltip: V, isMobile: Y }, z),
                    et = (0, N.O)({ track: s, onNavigate: H, withSavingQueryParams: R, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(y().text, y().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [I, X, Z, ee],
                    ),
                    er = (0, d.L)(() =>
                        K.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(y().text, y().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : K.link
                              ? (0, r.jsx)(b.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: K.link.href,
                                    'aria-label': q,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!P, [P]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(y().root, { [y().root_disabled]: !s.isAvailable, [y().root_disliked]: s.isDisliked && !L, [y().root_withSecondaryColor]: k }, t),
                    children: (0, r.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(y().titleContainer, { [y().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(y().text, S),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            er,
                                            K.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', K.version],
                                                }),
                                        ],
                                    }),
                                    K.explicitMark &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: K.explicitMark,
                                            className: y().explicitMark,
                                            trackId: s.id,
                                        }),
                                    U,
                                ],
                            }),
                            K.artists.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, a.$)(y().text, { [y().artists]: P }, j, S),
                                    withAllArtistsTitle: O,
                                    linkClassName: (0, a.$)(y().text, y().link),
                                    captionClassName: (0, a.$)(y().text, y().artistCaption),
                                    artists: K.artists,
                                    withLink: K.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: I,
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
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(88800),
                a = i(53548),
                s = i(17392),
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
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
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
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
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
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
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
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(78793),
                m = i(92716),
                p = i(99984),
                h = i(90780),
                v = i(65523),
                x = i(14518),
                g = i(44230),
                b = i(4370),
                A = i(72288),
                C = i(97956),
                N = i(56248),
                f = i(90688),
                y = i(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = i(96856),
                I = i.n(k);
            let E = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { slam: n } = (0, A.g)(),
                    { contentRef: l } = (0, g.g)(),
                    d = (0, y.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(I().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(N.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(I().navigation, { [I().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(f._V, { className: I().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = i(9184),
                S = i.n(O);
            let j = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { formatMessage: f } = (0, l.A)(),
                    y = (0, n.useContext)(A.P),
                    T = null == y ? void 0 : y.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    k = f(T ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, x.$)(),
                        a = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, _.F)({
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
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(k);
                let { sendRefreshEvent: I } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, _.F)({
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
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    O = (0, n.useCallback)(() => {
                        (I(), (window.location.href = b.Z.main.href));
                    }, [I]),
                    { contentRef: j } = (0, g.g)();
                return T
                    ? (0, r.jsx)(E, { className: t, withBackwardControl: i, onBack: s })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(S().root, t),
                          children: [
                              i &&
                                  (0, r.jsx)(N.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(S().navigation, { [S().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(S().content, { [S().content_shrink]: !i }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, a.$)(S().title, S().important), variant: 'h3', size: 'xs', children: k }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, a.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: O,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
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
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(67174);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var r = i(53548);
            i(30282);
            var a = i(58390);
            let s = (e) => {
                let t = (0, a.usePathname)(),
                    [i, s] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var r = i(67174);
            let a = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => b });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(92716),
                o = i(17392),
                c = i(29993),
                d = i(90688),
                u = i(19934),
                _ = i(7555),
                m = i(29504),
                p = i(96527),
                h = i(78940),
                v = i(72288),
                x = i(80932),
                g = i.n(x);
            let b = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    A = (0, p.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    N = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), A({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: N,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42078: (e, t, i) => {
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
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var r = i(88800),
                a = i(84961),
                s = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: u, disabled: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, r.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        46312: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { p: () => r }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(r || (r = {})));
        },
        46544: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)),
                Promise.resolve().then(i.bind(i, 20551)),
                Promise.resolve().then(i.bind(i, 8679)),
                Promise.resolve().then(i.bind(i, 78805)));
        },
        47580: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let r = (e) => e.map((e) => e.name).join(', ');
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                a = i(53548),
                s = i(2058),
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
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: b } = (0, s.A)(),
                        A = b({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => f });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(29993),
                o = i(52073),
                c = i(5407),
                d = i(76675),
                u = i(28830),
                _ = i(9618),
                m = i(4795),
                p = i(55693),
                h = i(7123),
                v = i(72288),
                x = i(8990),
                g = i(2058),
                b = i(47580),
                A = i(95993),
                C = i(27157),
                N = i.n(C);
            let f = (0, s.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: s,
                        meta: C,
                        beforeBlock: f,
                        controls: y,
                        playButtonCellRender: T,
                        withLightning: k,
                        isPlaying: I,
                        isCurrent: E,
                        togglePlay: O,
                        restartPlay: S,
                        onPlayClick: j,
                        playButtonIconSize: L,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: R, showBuySubscriptionModal: M } = (0, _.q)(),
                    {
                        track: D,
                        fullscreenPlayer: F,
                        settings: { isMobile: B },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, v.g)(),
                    { ref: H, intersectionPropertyId: Y } = (0, u.n)(),
                    $ = (0, d.b)(),
                    V = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: r } = (0, g.A)();
                        return ((e, t, i) => {
                            var r;
                            let { withLightning: a } = t,
                                s = (0, b.j)(null != (r = e.artists) ? r : []);
                            return e.isAvailable
                                ? [s, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(s, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, r);
                    })({ withLightning: k, track: s }),
                    K = ((e) => {
                        let { sonataState: t } = (0, v.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return i && r === e;
                        }
                        return i;
                    })(s.entityId),
                    X = W(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    q = s.isAvailable && R && !X,
                    Z = (0, m.N)(),
                    J = s.isAvailable && Z && !X && !w,
                    Q = (0, A.w)({ track: s, callback: O }),
                    ee = (0, l.c)(() => {
                        D.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    et = (0, A.w)({ track: s, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, p.z)(),
                    [er, ea] = (0, n.useState)(!1),
                    es = (0, l.c)(() => {
                        if (!V()) {
                            if (q) return void M();
                            if (J) return void z.open();
                            (er || I || (ea(!0), null == ei || ei()), Q(), $(!I), null == j || j(!I));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (I) return void S();
                        es();
                    }),
                    el = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (R && s.isAvailableOnlyForPlus && M(), Z && s.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (q) return void M();
                        let t = !B && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !F.modal.isOpened));
                        return J && !t
                            ? void z.open()
                            : ((0, o.P)(e, N().ripple), B)
                              ? void es()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && s.hasTrackLink && !F.modal.isOpened && (et(), J && z.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: es, isPlaying: I, isCurrent: E, isLoading: K, playButtonIconSize: L });
                return (0, r.jsxs)(x.C, {
                    ref: H,
                    'aria-label': G,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': s.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': Y,
                    onClick: el,
                    className: (0, a.$)(N().root, { [N().root_disabled]: !s.isAvailable, [N().root_current]: E && B }, i),
                    ...P,
                    children: [f, eo, C, y],
                });
            });
        },
        59844: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(88800),
                a = i(53548),
                s = i(90334);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, r.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                s = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => _, Yw: () => r, JU: () => a, DQ: () => h, Ve: () => v });
            var r,
                a,
                s = i(43297),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (a) {
                                    if (a !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, a), e(a));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (a) {
                                if (a !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, a), e(a));
                                }
                            })
                        );
                    }));
            })();
            var l = i(14965);
            class o extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class _ {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        r = {};
                    for (let e of i)
                        if (e) {
                            let t = r[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (r[e.disclaimerType] = t));
                        }
                    return r;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(a || (a = {}));
            let m = new Map([
                    [r.EXPLICIT_ICON, a.E],
                    [r.AGE_18_ICON, a.AGE_18],
                    [r.AGE_16_ICON, a.AGE_16],
                    [r.AGE_12_ICON, a.AGE_12],
                    [r.EXCLAMATION_ICON, a.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [r.SUBSTITUTED_ICON, a.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                p = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => P });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                _ = i(17610),
                m = i(29504),
                p = i(42174),
                h = i(96817);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: o, size: d = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, l.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    v = (0, n.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, r.jsx)(u.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                g = i(25557),
                b = i(55693),
                A = i(72288),
                C = i(49738),
                N = i(56446),
                f = i(64546),
                y = i(29831),
                T = i(30123),
                k = i(54965),
                I = i(1829),
                E = i(82092),
                O = i.n(E),
                S = i(79262),
                j = i(41867),
                L = i.n(j);
            let w = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: L().downloadingProgress, progressBarClassName: L().progress })
                          : null;
                }),
                P = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: s,
                            withLightning: h,
                            ignoreDislikedStyles: E,
                            onLikeClick: S,
                            utmLink: j,
                            withSecondaryColor: L,
                            handleRemove: P,
                            withTrailer: R = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: F,
                        } = e,
                        { user: B, trailer: U } = (0, A.g)(),
                        { formatMessage: W } = (0, l.A)(),
                        { sendLikeSearchFeedback: z } = (0, b.z)(),
                        [H, Y] = (0, n.useState)(!1),
                        [$, V] = (0, n.useState)(!1),
                        G = (0, x.P)(),
                        K = (0, p.K)(s),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var r;
                            let { withLightning: a, isUGC: s } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, k.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, y.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: h, isUGC: s.isUGC }, W),
                        J = (0, g.F)(),
                        Q = B.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !F,
                        et = (0, d.c)(async () => {
                            (H || s.isLiked || (Y(!0), null == z || z()), await K(), null == S || S(s.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (U.openTrackTrailer(s.id), J(o.DomainObjectType.Track, s.id));
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(I._, {
                                        track: s,
                                        open: $,
                                        onOpenChange: V,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: j,
                                        className: (0, a.$)(O().contextMenu, { [O().contextMenu_visible]: $ }),
                                        handleRemove: P,
                                        withTrailer: R,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, P, $, ee, R, s, j]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(O().root, O().controls, i, {
                            [O().controls_dislikedControls]: s.isDisliked,
                            [O().controls_dislikedColors]: s.isDisliked && !E,
                            [O().controls_disabled]: !s.isAvailable,
                            [O().root_withSecondaryColor]: L,
                        }),
                        children: [
                            q && (0, r.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: O().lightning, variant: 'lightning' }),
                            Z &&
                                (0, r.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: O().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, a.$)(O().item, O().downloadIcon), children: (0, r.jsx)(w, { track: s }) }),
                            P && !F && (0, r.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(O().item, O().removeButton), onClick: P, ariaLabel: D }),
                            ee &&
                                (0, r.jsx)(f.WithOffline, {
                                    fallback: (0, r.jsx)(C.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, a.$)(O().item, O().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, r.jsx)(f.WithOffline, {
                                    fallback: (0, r.jsx)(N.k, {
                                        className: (0, a.$)(O().item, O().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(O().item, O().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, r.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(O().duration, { [O().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        78805: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => I }));
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(88969);
            i(30282);
            var l = i(17392),
                o = i(96817),
                c = i(52300),
                d = i(66719),
                u = i(29504),
                _ = i(53548),
                m = i(78793),
                p = i(92716),
                h = i(99984),
                v = i(90780),
                x = i(65523),
                g = i(54020),
                b = i(44230),
                A = i(4370),
                C = i(78940),
                N = i(95210),
                f = i(56248),
                y = i(72288),
                T = i(26827),
                k = i.n(T);
            let I = (0, s.PA)((e) => {
                let { className: t, title: i, description: s, iconVariant: T = 'musicLogo', iconClassName: I, iconSize: E } = e,
                    { contentRef: O, setContentScrollRef: S } = (0, b.g)(),
                    j = (0, C.Z)(A.Z.main.href);
                !(function () {
                    let e = (0, v.st)(),
                        { hash: t } = (0, v.gf)(),
                        i = (0, x.U)(),
                        r = (0, _.useRef)(void 0);
                    (0, _.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, g.A)();
                        let a = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: p.AppScreen.PageNotFoundScreen,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, h.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: p.AppScreen.PageNotFoundScreen,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, h.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: L } = (function (e) {
                    let t = (0, v.st)(),
                        { hash: i } = (0, v.gf)(),
                        r = (0, x.U)();
                    return {
                        handleNavigateToMain: (0, _.useCallback)(() => {
                            if (!t || !i) return;
                            let a = (0, m.F)({
                                params: {
                                    hash: i,
                                    pageId: p.AppScreen.PageNotFoundScreen,
                                    pageStyle: p.PageStyles.Fullscreen,
                                    pagePlacement: p.PagePlacements.Fullscreen,
                                    mainObjectType: p.DomainObjectType.NonApplicable,
                                    mainObjectId: p.DomainObjectType.NonApplicable,
                                    from: p.AppScreen.PageNotFoundScreen,
                                    to: p.AppScreen.MainScreen,
                                    entityType: p.EntityTypes.Error,
                                    entityId: p.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, h.Mu)(t.evgenInstance, a), e());
                        }, [t, i, r, e]),
                    };
                })(j);
                return (
                    (0, N.N)(!0),
                    !(function () {
                        let { location: e } = (0, y.g)();
                        (0, _.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(d.N, {
                        className: (0, a.$)(k().root, { [k().root_desktop]: !O }, t),
                        containerClassName: k().container,
                        ref: S,
                        'data-test-id': l.e8.notFound.NOT_FOUND,
                        children: [
                            (0, r.jsx)(f.L, { withBackwardFallback: '/', className: k().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: k().content,
                                children: [
                                    (0, r.jsx)(c.I, { className: (0, a.$)(k().icon, I), variant: T, size: E }),
                                    (0, r.jsx)(u.DZ, {
                                        className: (0, a.$)(k().title, k().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        'data-test-id': l.e8.notFound.NOT_FOUND_TITLE,
                                        children: i || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(u.HL, {
                                        className: (0, a.$)(k().text, k().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(o.$, {
                                        onClick: L,
                                        className: k().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(88800),
                a = i(65724),
                s = i(61013),
                n = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && v(_);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: b,
                            debounceDurationInMs: A,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: y = !1,
                            testId: T,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...E
                        } = e,
                        [O, S] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, b, k]),
                        w = C ? Math.min(C, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: O || y, [d().root_notScrolling]: !O && !y }, t),
                        'data-test-id': T,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: I,
                                ...E,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
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
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(2058),
                l = i(30282),
                o = i(94144),
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
            let d = (e, t, i) => {
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
                u = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                v = i(72288),
                x = i(11006),
                g = i.n(x),
                b = i(17392),
                A = i(29504),
                C = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(g().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: a, className: g().link, 'data-test-id': b.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(g().root, g().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, r.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, v.g)(),
                    { formatDate: a, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: p(a) });
                return (0, r.jsx)(N, { className: t, data: o });
            });
            let T = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: m, user: x } = (0, v.g)(),
                    { formatDate: b, formatMessage: A } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    m = [n, o, u];
                                return (i && 'ru' === s && m.push(l), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(b),
                    });
                return (0, r.jsx)(y, { className: (0, a.$)({ [g().root_withOffsetForDeeplink]: C }, i), data: f });
            });
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(53548),
                a = i(52150);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                _ = i(94398),
                m = i(17332),
                p = i.n(m);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: m, variant: h, iconVariant: iconOverride, size: v = 'xxxs', ...x } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [A, C] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(C);
                }, [i, s]);
                let {
                    iconVariant: N,
                    descriptionText: f,
                    isTooltipEnabled: y,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: a } = e,
                        s = (null == r ? void 0 : r.join('\n')) || '';
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
                        descriptionText: s,
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !a,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: b }, g);
                return (0, r.jsx)(_.k, {
                    description: f,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, r.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, r.jsxs)('svg', {
                            className: (0, a.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, r.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, r.jsx)(c.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : N,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
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
            var r = i(88800),
                a = i(2058),
                s = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                _ = i(53548),
                m = i(79390),
                p = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    { notify: x } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, s.c)(async (a) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let _ = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            n(!0);
                            let v = await s.toggleLike();
                            if ((n(!1), !c)) return;
                            let x = t.modal.isOpened;
                            v === m.f.OK
                                ? e((0, r.jsx)(p.T, { withLink: o, album: _ }), { containerId: x ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, r.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void x((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var r = i(88800),
                a = i(98644),
                s = i(65724),
                n = i(53548),
                l = i(2058),
                o = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, l.A)(),
                    c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: d().coverContainer, children: (0, r.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: d().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = i(26835),
                m = i.n(_);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, l.A)(),
                        c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(m().root, i),
                        children: [
                            (0, r.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, r.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: m().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: s } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, r.jsx)(p, { isActive: t, className: s });
                        case a.X.ALBUM:
                            return (0, r.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => s });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                s = () => (0, r.useContext)(a);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(88800),
                a = i(17392),
                s = i(17610),
                n = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(58217),
                a = i(85587);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                a = i(84961),
                s = i(42729),
                n = i(5048);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    l = (0, n.b)(t.type);
                return (0, r.jsx)(s.O, {
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
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => s, UC: () => n, dM: () => l, uV: () => o });
            var r = i(89916),
                a = i(67990);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof r.m5) || !(0, a.N)(e.cause)) return 'unexpected';
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
                7435, 8752, 4596, 8380, 5108, 127, 1191, 1931, 7617, 3637, 6706, 4771, 1311, 3075, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 1223,
                8335, 4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 5277, 6820, 9306, 763, 2670, 7358,
            ],
            () => e((e.s = 46544)),
        ),
            (_N_E = e.O()));
    },
]);
