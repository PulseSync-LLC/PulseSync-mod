(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
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
        6087: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => a.a });
            var r = i(76124),
                a = i.n(r);
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        12342: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(79070),
                l = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                m = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var p = i(21010),
                h = i.n(p),
                v = i(17392),
                f = i(29504),
                x = i(91292),
                b = i(2058),
                y = i(92716),
                g = i(96527),
                T = i(78940),
                C = i(55693),
                A = i(58217);
            let S = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: s = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: d } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: j,
                            handleNavigate: E,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: s } = e,
                                { formatMessage: n } = (0, b.A)(),
                                o = ((e, t) => {
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
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                m = (0, T.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, C.z)(),
                                p = (0, g.N)(),
                                h = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), m(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, A.l)({
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
                                })({ artist: o.artist, callback: h }),
                                f = (0, c.c)((e) => {
                                    (p({ to: y.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...o, handleNavigate: f };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return _
                        ? (0, r.jsx)(x.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: E,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(f.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: d,
                              children: (0, r.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: s, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(S, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(S, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: s,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var E = i(88969),
                k = i(65453);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var N = i(61013),
                P = i(87819),
                O = i(40634),
                L = i(48468),
                R = i.n(L);
            let M = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(l.ZI, { className: R().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, r.jsx)(M, { forwardRef: t, ...e }));
            var D = i(19934),
                z = i(70396),
                B = i.n(z);
            let H = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, b.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(B().root, B().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                Y = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, N.A)(() => {
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
                        return (s || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(H, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                U = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: v,
                            variant: f = 'breakAll',
                            spoilerComponent: x,
                            ...b
                        } = e,
                        y = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: s, withLink: o, withComposer: l, artistIdWithoutLink: d, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                f = (0, n.useRef)(null),
                                [x, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, u.g)(),
                                g = ((!y || 1 === p.length) && m) || !m,
                                T = ((e, t) => {
                                    var i, r, a;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: r, separator: s ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return _(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: a, visibleArtistsCount: x ? void 0 : s, withComposer: l, withLink: !!g && o, artistIdWithoutLink: d }),
                                C = h ? T.allArtistsTitle : '',
                                A = (0, c.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: A,
                                isTooltipEnabled: !!C && v && !m && !y,
                                title: !C || v || m ? void 0 : C,
                            };
                        })(b),
                        g = (0, o.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, r.jsx)(I, { spoilerClassName: s, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        T = (0, r.jsx)(l.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(f)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, r.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: y.allArtistsTitle,
                                                withCustomTooltip: y.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return y.withContextMenu ? (0, r.jsx)(Y, { labelRef: y.labelRef, artists: y.artists, label: T }) : T;
                });
        },
        14661: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { n: () => r }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(r || (r = {})));
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => S });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                p = i(55693),
                h = i(72288),
                v = i(24548),
                f = i(85587),
                x = i(90224),
                b = i(91292),
                y = i(7608),
                g = i(6667),
                T = i(85463),
                C = i(65462),
                A = i.n(C);
            let S = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: C,
                        withExplicitMark: S,
                        withSecondaryColor: j,
                        captionSize: E = 'm',
                        explicitSize: k = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: N,
                        artistsClassName: P,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: L = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: M,
                        beforeTitle: w,
                        withArtistLink: D,
                        variant: z,
                        withTrackLink: B,
                        afterTitle: H,
                        withContextMenuArtists: Y,
                    } = e,
                    { formatMessage: U } = (0, o.A)(),
                    { sendNavigateSearchFeedback: F } = (0, p.z)(),
                    {
                        settings: { isMobile: V },
                        slam: W,
                    } = (0, h.g)(),
                    K = (0, g.$)({ withCustomTooltip: L }),
                    $ = (0, l.useSearchParams)(),
                    G = (0, y.B)(s, {
                        isMobile: V,
                        isOfflineModeEnabled: W.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: B,
                        withArtistLink: D,
                        variant: z,
                        withExplicitMark: S,
                        query: M ? Object.fromEntries($) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: X,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, s;
                        let { canEnableCustomTooltip: n, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            d = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (a = t.version) ? a : ''),
                            c = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(c, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: d,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? d : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(s, G, { canEnableCustomTooltip: K, isMobile: V }, U),
                    et = (0, T.O)({ track: s, onNavigate: F, withSavingQueryParams: M, entityType: f.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(A().text, A().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [E, q, Z, ee],
                    ),
                    er = (0, c.L)(() =>
                        G.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(A().text, A().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: q,
                                  }),
                              })
                            : G.link
                              ? (0, r.jsx)(b.N, {
                                    onClick: et,
                                    className: A().albumLink,
                                    href: G.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_disliked]: s.isDisliked && !O, [A().root_withSecondaryColor]: j }, t),
                    children: (0, r.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(A().titleContainer, { [A().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(A().text, N),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            er,
                                            G.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', G.version],
                                                }),
                                        ],
                                    }),
                                    G.explicitMark &&
                                        (0, r.jsx)(x.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: k,
                                            variant: G.explicitMark,
                                            className: A().explicitMark,
                                            trackId: s.id,
                                        }),
                                    H,
                                ],
                            }),
                            G.artists.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(A().text, { [A().artists]: R }, P, N),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(A().text, A().link),
                                    captionClassName: (0, a.$)(A().text, A().artistCaption),
                                    artists: G.artists,
                                    withLink: G.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: E,
                                    withContextMenu: Y,
                                }),
                        ],
                    }),
                });
            });
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(42824),
                a = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
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
            i.d(t, { C: () => d });
            var r = i(88800),
                a = i(53548),
                s = i(17392),
                n = i(29504),
                o = i(15526),
                l = i.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, d] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
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
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
            var r = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let a = i(4377),
                            s = i(5881),
                            n = r(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: r = 'm', width: o, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== o && (u.width = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, a.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(r)], { [n.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var i = (a[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0));
                var e = s(7141);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var o = n.q;
            n.X;
        },
        20603: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (0, i(94177).createAsyncLocalStorage)();
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        21284: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => o });
            var r = i(53548),
                a = i(2058),
                s = i(61691),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(88800),
                a = i(15077),
                s = i(42729);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32138: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a });
            var r = i(72288);
            let a = (e, t, i) => {
                let {
                    settings: { isMobile: a },
                } = (0, r.g)();
                return !!(a && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
            };
        },
        32947: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a, L: () => s });
            let r = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var a = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let s = (e) => {
                let t = new Date();
                if (r(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), r(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(67174);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36303: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var r = i(2058),
                a = i(48987);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: s, minutes: n, seconds: o } = (0, a.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, a.e)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: s, beginMinutes: n, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37531: (e, t, i) => {
            'use strict';
            function r(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(36271));
        },
        37717: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => h });
            var r = i(88800),
                a = i(53548),
                s = i(2058),
                n = i(88969),
                o = i(58390),
                l = i(29993),
                d = i(29595),
                c = i(74965),
                u = i(4370),
                m = i(72288),
                _ = i(59304),
                p = i(66943);
            let h = (e) => {
                let { user: t, search: i } = (0, m.g)(),
                    { formatMessage: h } = (0, s.A)(),
                    { notify: v } = (0, c.l)(),
                    f = (0, o.useRouter)();
                return (
                    (0, a.useEffect)(() => {
                        i.isEmptyHistory && f.push(u.Z.search.href);
                    }, [i.isEmptyHistory, f]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                v((0, r.jsx)(_.$, { message: (0, r.jsx)(n.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                f.push(u.Z.search.href));
                        } catch (e) {
                            v((0, r.jsx)(p.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
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
                o = i(92716),
                l = i(17392),
                d = i(29993),
                c = i(90688),
                u = i(19934),
                m = i(7555),
                _ = i(29504),
                p = i(96527),
                h = i(78940),
                v = i(72288),
                f = i(80932),
                x = i.n(f);
            let b = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    y = (0, p.N)(),
                    g = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    T = (0, d.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), y({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(x().root, i),
                            onClick: T,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, r.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
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
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a, g: () => s });
            var r = i(53548);
            let a = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, r.useContext)(a);
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(88800),
                a = i(84961),
                s = i(17392),
                n = i(52300),
                o = i(19934),
                l = i(108),
                d = i(72288);
            let c = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: _ } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, r.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(88800),
                a = i(13758),
                s = i(57249),
                n = i(65724),
                o = i(84961),
                l = i(6087),
                d = i(53548),
                c = i(17392),
                u = i(21284),
                m = i(29993),
                _ = i(79070),
                p = i(78275),
                h = i(90688),
                v = i(19994),
                f = i(69704),
                x = i(35412);
            let b = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        s = t * Math.min(i, 1 - i);
                    return i - s * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var y = i(8655);
            let g = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var T = i(68817),
                C = i.n(T),
                A = i(49124);
            let S = l.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = A.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(s, e).href);
            }
            let j = (0, o.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [s, o] = (0, d.useState)(null),
                    { state: l, toggleTrue: T } = (0, p.e)(!1),
                    { state: A, toggleTrue: j, toggleFalse: E } = (0, p.e)(!1),
                    { theme: k } = (0, f.W)(),
                    I = (0, d.useRef)(null),
                    N = t.entityType === u.h.ARTIST,
                    P = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    O = t.cover.color,
                    L = t.cover.uri,
                    R = (0, m.c)(async () => {
                        if (l) {
                            if (!O) return void j();
                            if (k) {
                                E();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: r,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: r } = e,
                                            { h: a, s, l: n } = (0, x.g8)(t);
                                        if (r) {
                                            if (i === y.S.Dark) {
                                                let e = g(s + 5, 50, 100);
                                                return { color: b(a, e, g(n - 40, 12, 25)), glow1: b(a, e, g(n - 5, 45, 60)), glow2: b(a, e, g(n + 35, 80, 90)) };
                                            }
                                            let e = g(s - 2, 50, 100);
                                            return { color: b(a, e, g(n + 43, 80, 95)), glow1: b(a, e, g(n + 5, 45, 75)), glow2: b(a, e, g(n, 35, 55)) };
                                        }
                                        return { color: b(a, (s > 25 ? Math.min(s + 25, 60) : s) / 100, (n > 20 ? Math.min(n + 15, 60) : n) / 100) };
                                    })({ averageColor: O, theme: k, custom: !t.entityType }),
                                    a = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: r },
                                        ],
                                    });
                                (await (null == s ? void 0 : s.setThemeData(a)), j());
                            }
                        }
                    }),
                    M = (0, m.c)(() => {
                        (T(), R());
                    });
                ((0, d.useEffect)(() => {
                    i ? null == s || s.play() : null == s || s.pause();
                }, [s, i]),
                    (0, d.useEffect)(() => {
                        R();
                    }, [O, R, k, l]),
                    (0, d.useEffect)(() => {
                        if (s)
                            return (
                                s.setUseFrameInterpolation(!1),
                                s.setRenderConfig({ devicePixelRatio: 0.1 }),
                                s.addEventListener('load', M),
                                () => {
                                    s.removeEventListener('load', M);
                                }
                            );
                    }, [s, M]));
                let w = !l || !A,
                    D = (0, _.L)(() => {
                        if (!I.current) return;
                        let e = N ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(I.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: I,
                    className: (0, n.$)(C().root, a, { [C().root_loading]: w }),
                    style: D,
                    'data-test-id': w ? c.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(C().cover, { [C().cover_round]: N, [C().cover_square]: P, [C().cover_loading]: w }),
                            children: [
                                t.entityType &&
                                    L &&
                                    (0, r.jsx)(h._V, { src: L, size: 200, fit: 'cover', withAvatarReplace: !0, className: C().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(S, { src: t.animationUri, loop: !0, dotLottieRefCallback: o, className: C().animation }),
                            ],
                        }),
                        (0, r.jsx)(v.W, { className: (0, n.$)(C().shimmer, { [C().shimmer_loading]: w }), isActive: !0, radius: N ? 'round' : 'm' }),
                    ],
                });
            });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(53548),
                a = i(2058);
            let s = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        48215: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(29993),
                u = i(79070),
                m = i(17610),
                _ = i(29504),
                p = i(66264),
                h = i(58217),
                v = i(78940),
                f = i(72288),
                x = i(24548),
                b = i(85587),
                y = i(90224),
                g = i(91292),
                T = i(32947),
                C = i(62837),
                A = i(38514),
                S = i(69553),
                j = i(6667),
                E = i(85463),
                k = i(32138),
                I = i(65462),
                N = i.n(I),
                P = i(87724),
                O = i.n(P);
            let L = (0, s.PA)((e) => {
                var t, i, s, I, P, L, R;
                let {
                        track: M,
                        className: w,
                        withPodcastName: D,
                        withDate: z,
                        withSecondaryColor: B = !1,
                        withListeningProgress: H = !1,
                        captionSize: Y = 'm',
                        explicitSize: U = 'xs',
                        withExplicitMark: F,
                        titleContainerClassName: V,
                        textClassName: W,
                        playContextParams: K,
                        withTimeLeftText: $ = !0,
                        ignoreDislikedStyles: G,
                        withCustomTooltip: q = !0,
                        withSavingQueryParams: X,
                        beforeTitle: Z,
                        afterTitle: J,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ei,
                    } = e,
                    {
                        fullscreenPlayer: er,
                        sonataState: ea,
                        slam: es,
                        settings: { isMobile: en },
                    } = (0, f.g)(),
                    { formatMessage: eo, formatDate: el } = (0, o.A)(),
                    ed = (0, j.$)({ withCustomTooltip: q }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, v.Z)(null != (L = null == (t = M.mainAlbum) ? void 0 : t.url) ? L : ''),
                    em = !!(H && K && M.shouldRememberPosition && M.streamProgress && M.durationMs),
                    e_ =
                        M.id === (null == (i = ea.entityMeta) ? void 0 : i.id) &&
                        (null == (I = ea.entityMeta) || null == (s = I.streamProgress) ? void 0 : s.endPositionSec),
                    ep = (0, k.d)(em, M.streamProgress, e_),
                    eh = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: r,
                                mainAlbum: a,
                                shouldHidePodcastInfo: s,
                                withPodcastName: n,
                                withDate: o,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, S.q)(e, { isMobile: i, isOfflineModeEnabled: r, query: c }),
                            m = (null == l || l) && e.disclaimers ? (0, C.DQ)(e.disclaimers) : null,
                            _ = null != n && n && !s ? a : null,
                            p = _ && (null == d || d) ? (0, A.L)(_.id) : null,
                            h = (null == o || o) && !s ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            f = (0, T.L)(v),
                            x = !!(h && [T.r.TODAY, T.r.YESTERDAY].includes(f));
                        return { ...u, explicitMark: m, album: _, albumLink: p, pubDate: h, dateType: f, isSoonDate: x };
                    })(M, {
                        isMobile: en,
                        isOfflineModeEnabled: es.isOfflineModeEnabled,
                        mainAlbum: M.mainAlbum,
                        shouldHidePodcastInfo: ep,
                        withPodcastName: D,
                        withDate: z,
                        withExplicitMark: F,
                        withAlbumTitleLink: ei,
                        query: X ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, i, r, a) => {
                        var s, n;
                        let { canEnableCustomTooltip: o, isMobile: l } = a,
                            d = t.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (n = e.version) ? n : ''),
                            m = t.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            _ = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case T.r.TODAY:
                                    _ = i({ id: 'interface-actions.date-today' });
                                    break;
                                case T.r.YESTERDAY:
                                    _ = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case T.r.DATE_WITH_YEAR:
                                    _ = r(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    _ = r(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: o || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: o ? void 0 : t.version,
                            isTooltipEnabled: o && !l,
                            albumAriaLabel: m,
                            albumTitleAttribute: o || null == (s = t.album) ? void 0 : s.title,
                            dateText: _,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(M, eh, eo, el, { canEnableCustomTooltip: ed, isMobile: en }),
                    ef = (0, h.l)({ entity: null != (R = M.mainAlbum) ? R : null, entityType: b.n.PODCAST, callback: eu }),
                    ex = (0, c.c)((e) => {
                        (er.modal.isOpened && er.modal.close(), ef(e));
                    }),
                    eb = (0, E.O)({ track: M, withSavingQueryParams: X, entityType: b.n.PODCAST }),
                    ey = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(m.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: x.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: N().title,
                                    type: 'entity',
                                    size: Y,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, Y, ev.displayTitle],
                    ),
                    eg = null == (P = eh.link) ? void 0 : P.href,
                    eT = (0, n.useMemo)(
                        () =>
                            eh.shouldShowRemovedTitle
                                ? (0, r.jsx)(m.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: x.V,
                                      children: (0, r.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eg
                                  ? (0, r.jsx)(g.N, {
                                        onClick: eb,
                                        className: N().albumLink,
                                        href: eg,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: ey(),
                                    })
                                  : ey({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, eh.shouldShowRemovedTitle, eg, ev.displayTitle, ey, ev.titleAttribute, eb, ev.ariaLabel],
                    ),
                    eC = (0, u.L)(() => {
                        let e = eh.album;
                        if (!e) return;
                        let t = (0, r.jsx)(m.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: x.V,
                            children: (0, r.jsx)(_.HL, { variant: 'span', type: 'entity', size: Y, className: N().albumTitle, children: e.title }),
                        });
                        return eh.albumLink
                            ? (0, r.jsx)(g.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: N().link,
                                  href: eh.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: ex,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, r.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, r.jsx)('div', {
                    className: (0, a.$)(N().root, { [N().root_disabled]: !M.isAvailable, [N().root_disliked]: M.isDisliked && !G, [N().root_withSecondaryColor]: B }, w),
                    children: (0, r.jsxs)('div', {
                        className: (0, a.$)(N().metaContainer, O().podcastMetaContainer, ee),
                        children: [
                            em &&
                                K &&
                                M.streamProgress &&
                                (0, r.jsx)(p.B, {
                                    className: (0, a.$)(O().progress, et, {
                                        [O().progress_withPreviousInfo]: eh.album || eh.pubDate,
                                        [O().progress_disabled]: !M.isAvailable || M.isDisliked,
                                    }),
                                    id: M.id,
                                    albumId: M.albumId,
                                    streamProgress: M.streamProgress,
                                    durationMs: M.durationMs || 0,
                                    playContextParams: K,
                                    withTimeLeftText: $,
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(N().titleContainer, V, O().podcastTitleContainer),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(N().text, W),
                                        type: 'entity',
                                        size: Y,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            Z,
                                            eT,
                                            eh.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: Y,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    children: ['\xa0', eh.version],
                                                }),
                                        ],
                                    }),
                                    eh.explicitMark &&
                                        (0, r.jsx)(y.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: M.getDescriptionTexts,
                                            variant: eh.explicitMark,
                                            className: N().explicitMark,
                                            size: U,
                                            trackId: M.id,
                                        }),
                                    J,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, r.jsxs)(_.HL, {
                                    type: 'entity',
                                    size: Y,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, a.$)(N().text, O().podcastName, W),
                                    children: [
                                        eC,
                                        null !== ev.dateText &&
                                            (0, r.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: Y,
                                                className: (0, a.$)({
                                                    [O().dateWithName]: !!eh.album,
                                                    [O().soonDate]: eh.isSoonDate,
                                                    [O().dateDisabled]: !M.isAvailable,
                                                    [O().dateDisliked]: M.isDisliked && !G,
                                                }),
                                                children: ev.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
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
            i.d(t, { H: () => r });
            let r = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(88800),
                a = i(4370),
                s = i(15077),
                n = i(42729);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var r = i(88800),
                a = i(65724),
                s = i(21284),
                n = i(79070),
                o = i(39267),
                l = i(85925),
                d = i.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: p,
                        coverClassName: h,
                        entityCoverClassName: v,
                        controlClassName: f,
                        fallbackIconSize: x,
                    } = e,
                    b = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(d().root, d()['root_radius_'.concat(b)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: b,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: l,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: x,
                    coverClassName: h,
                    entityCoverClassName: v,
                    controlClassName: f,
                });
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                a = i(53548),
                s = i(2058),
                n = i(17392),
                o = i(96817),
                l = i(52300),
                d = i(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: f,
                            children: x,
                        } = e,
                        { formatMessage: b } = (0, s.A)(),
                        y = b({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: c,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        59603: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 82474));
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => s });
            var r = i(4086),
                a = i(41928);
            let s = () => (0, a.N)().get(r.SX);
        },
        60527: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let r = i(88800),
                a = i(53548),
                s = i(37531);
            function n(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(68326);
            let o = { loader: () => Promise.resolve(n(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...o, ...e },
                        i = (0, a.lazy)(() => t.loader().then(n)),
                        l = t.loading;
                    function d(e) {
                        let n = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(i, { ...e })] })
                                : (0, r.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(i, { ...e }) });
                        return (0, r.jsx)(d, { ...(o ? { fallback: n } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(58217);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                n = i(2058),
                o = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
            };
        },
        66264: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => y });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(88969),
                l = i(17392),
                d = i(68254),
                c = i(52300),
                u = i(29504),
                m = i(7123),
                _ = i(39079),
                p = i(9630),
                h = i(72288),
                v = i(36303),
                f = i(91106),
                x = i(92152),
                b = i.n(x);
            let y = (0, s.PA)((e) => {
                var t, i, s, x, y, g, T, C, A;
                let { className: S, id: j, albumId: E, streamProgress: k, durationMs: I, playContextParams: N, withTimeLeftText: P = !0, isFinishedLabelHidden: O } = e,
                    L = (0, p.e)(),
                    { sonataState: R, album: M } = (0, h.g)(),
                    w = Math.floor(I / 1e3),
                    [D, z] = (0, n.useState)(!1),
                    B = (0, f.$)(),
                    { isPlaying: H, isCurrent: Y } = (0, _.D)({ playContextParams: N, entityId: E ? ''.concat(j, ':').concat(E) : j });
                ((0, n.useEffect)(() => {
                    if (!Y) return void z(!1);
                    let e =
                        null == L
                            ? void 0
                            : L.state.playerState.status.onChange(() => {
                                  (null == L ? void 0 : L.state.playerState.status.value) === m.MT.BUFFERING && z(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [L, k, Y, H]),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == M || null == (e = M.meta) ? void 0 : e.listeningFinished)
                            ? (k.updateEndPositionSec(0), k.updateEverFinished(!0))
                            : (null == M ? void 0 : M.allTracksUnfinished) && k.updateEverFinished(!1);
                    }, [k, null == M ? void 0 : M.allTracksUnfinished, null == M || null == (t = M.meta) ? void 0 : t.listeningFinished]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        (Y &&
                            (null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress) &&
                            k &&
                            R.entityMeta.streamProgress.hasEverFinished !== k.hasEverFinished &&
                            k.updateEverFinished(!!R.entityMeta.streamProgress.hasEverFinished),
                            w - ((null == k ? void 0 : k.endPositionSec) || 0) < 1 &&
                                ((null == R || null == (t = R.entityMeta) ? void 0 : t.streamProgress) &&
                                    Y &&
                                    (R.entityMeta.streamProgress.updateEverFinished(!0), R.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == k || k.updateEverFinished(!0)));
                    }, [
                        Y,
                        null == R || null == (i = R.entityMeta) ? void 0 : i.streamProgress,
                        null == R || null == (x = R.entityMeta) || null == (s = x.streamProgress) ? void 0 : s.hasEverFinished,
                        k,
                        k.hasEverFinished,
                        k.endPositionSec,
                        w,
                    ]),
                    (0, n.useEffect)(() => {
                        if (!Y) return;
                        let e =
                            null == L
                                ? void 0
                                : L.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = L.state.playerState.progress.value,
                                          i = null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && k.updateEndPositionSec(t.position),
                                          Y &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [L, k, Y, H, D, j, null == R ? void 0 : R.entityMeta]));
                let U = (Y && (null == R || null == (g = R.entityMeta) || null == (y = g.streamProgress) ? void 0 : y.endPositionSec)) || k.endPositionSec,
                    F = (0, v.m)(null != U ? U : 0, w),
                    V = (0, n.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((Y && (null == R || null == (t = R.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == k ? void 0 : k.hasEverFinished) ||
                                (null == M || null == (i = M.meta) ? void 0 : i.listeningFinished)) &&
                            !O
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, a.$)(b().text, { [b().text_withoutTimeLeft]: !P }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, r.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, r.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: b().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!U || 0 === U) return;
                        let s = w - U,
                            n = B(s);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, a.$)(b().text, { [b().text_withoutTimeLeft]: !P }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: n,
                                }),
                                s > 1 || O
                                    ? (0, r.jsx)(d.q, {
                                          'aria-valuetext': F,
                                          'aria-busy': Y && H,
                                          value: U,
                                          max: w,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, r.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: b().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        w,
                        null == k ? void 0 : k.hasEverFinished,
                        P,
                        B,
                        Y,
                        H,
                        null == R || null == (C = R.entityMeta) || null == (T = C.streamProgress) ? void 0 : T.hasEverFinished,
                        null == M || null == (A = M.meta) ? void 0 : A.listeningFinished,
                        O,
                        U,
                        F,
                    ]);
                return (0, r.jsx)('div', { className: (0, a.$)(b().root, S), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: V });
            });
        },
        68326: (e, t, i) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(88800),
                i(53405),
                i(96669),
                i(86900));
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => s });
            var r = i(53548);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, r.useContext)(a);
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71344: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => h });
            var r = i(88800),
                a = i(92716),
                s = i(14661),
                n = i(63765),
                o = i(46811),
                l = i(27639),
                d = i(4196),
                c = i(58378),
                u = i(91198),
                m = i(67665),
                _ = i(77948),
                p = i(91087);
            let h = (e) => {
                let { item: t, index: i, pageId: h, sendSearchFeedback: v, blockPosition: f = 0, objectPosX: x, objectPosY: b, objectsCount: y } = e;
                switch (t.type) {
                    case s.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(c.c, { pageId: h, track: t.data }),
                            },
                            t.data.id,
                        );
                    case s.n.UGC_TRACK:
                        return (0, r.jsx)(c.c, { pageId: h, track: t.data });
                    case s.n.TRACK:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Track,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.entityId, type: n.o.TRACK, blockPosition: f, position: i },
                                    children: (0, r.jsx)(c.c, { pageId: h, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.ARTIST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Artist,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.id, type: n.o.ARTIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(l.c, { pageId: h, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PLAYLIST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Playlist,
                                objectId: t.data.id,
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: t.data.id, type: n.o.PLAYLIST, blockPosition: f, position: i },
                                    children: (0, r.jsx)(d.v, { pageId: h, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case s.n.PODCAST:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: v, id: t.data.id, type: n.o.PODCAST, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.ALBUM:
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Album,
                                objectId: String(t.data.id),
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: v, id: t.data.id, type: n.o.ALBUM, blockPosition: f, position: i },
                                        children: (0, r.jsx)(o.M, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case s.n.WAVE: {
                        let e = t.data;
                        return (0, r.jsx)(
                            _.B,
                            {
                                objectType: a.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: x,
                                objectPosY: b,
                                objectsCount: y,
                                children: (0, r.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: v, id: e.seedsId, type: n.o.WAVE, blockPosition: f, position: i },
                                    children: (0, r.jsx)(m.H, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(92716),
                d = i(17392),
                c = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                p = i(42174),
                h = i(96817);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: l, size: c = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
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
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, r.jsx)(u.I, { size: l, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var f = i(5407),
                x = i(25557),
                b = i(55693),
                y = i(72288),
                g = i(49738),
                T = i(56446),
                C = i(64546),
                A = i(29831),
                S = i(30123),
                j = i(54965),
                E = i(1829),
                k = i(82092),
                I = i.n(k),
                N = i(79262),
                P = i(41867),
                O = i.n(P);
            let L = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(N.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: s,
                            withLightning: h,
                            ignoreDislikedStyles: k,
                            onLikeClick: N,
                            utmLink: P,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: M = !0,
                            likeIconSize: w = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: z,
                        } = e,
                        { user: B, trailer: H } = (0, y.g)(),
                        { formatMessage: Y } = (0, o.A)(),
                        { sendLikeSearchFeedback: U } = (0, b.z)(),
                        [F, V] = (0, n.useState)(!1),
                        [W, K] = (0, n.useState)(!1),
                        $ = (0, f.P)(),
                        G = (0, p.K)(s),
                        {
                            duration: q,
                            lightning: X,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var r;
                            let { withLightning: a, isUGC: s } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / S.k7);
                                              return (0, j.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, A.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: h, isUGC: s.isUGC }, Y),
                        J = (0, x.F)(),
                        Q = B.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !z,
                        et = (0, c.c)(async () => {
                            (F || s.isLiked || (V(!0), null == U || U()), await G(), null == N || N(s.isLiked));
                        }),
                        ei = (0, c.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, c.c)((e) => {
                            if ((e.stopPropagation(), $())) return void e.preventDefault();
                            (H.openTrackTrailer(s.id), J(l.DomainObjectType.Track, s.id));
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(E._, {
                                        track: s,
                                        open: W,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, a.$)(I().contextMenu, { [I().contextMenu_visible]: W }),
                                        handleRemove: R,
                                        withTrailer: M,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, W, ee, M, s, P]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(I().root, I().controls, i, {
                            [I().controls_dislikedControls]: s.isDisliked,
                            [I().controls_dislikedColors]: s.isDisliked && !k,
                            [I().controls_disabled]: !s.isAvailable,
                            [I().root_withSecondaryColor]: O,
                        }),
                        children: [
                            X && (0, r.jsx)(u.I, { 'aria-label': X.label, size: 'xxs', className: I().lightning, variant: 'lightning' }),
                            Z &&
                                (0, r.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, a.$)(I().item, I().downloadIcon), children: (0, r.jsx)(L, { track: s }) }),
                            R && !z && (0, r.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(I().item, I().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, r.jsx)(C.WithOffline, {
                                    fallback: (0, r.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: w,
                                        className: (0, a.$)(I().item, I().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, r.jsx)(C.WithOffline, {
                                    fallback: (0, r.jsx)(T.k, {
                                        className: (0, a.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, r.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(I().duration, { [I().duration_hidden]: W && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        76124: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = i(70405)._(i(60527));
            function a(e, t) {
                var i;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let s = { ...a, ...t };
                return (0, r.default)({ ...s, modules: null == (i = s.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76816: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => _ });
            var r = i(88800),
                a = i(65724),
                s = i(2058),
                n = i(17392),
                o = i(79070),
                l = i(52300),
                d = i(29504),
                c = i(90224),
                u = i(34250),
                m = i.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: p,
                        className: h,
                        version: v,
                        title: f,
                        artistsComponent: x,
                        likesCount: b,
                        isLiked: y,
                        releaseYear: g,
                        titleLineClamp: T = 1,
                    } = e,
                    { formatMessage: C, formatNumber: A } = (0, s.A)(),
                    S = (0, o.L)(() => {
                        let e = null == x ? void 0 : x((0, a.$)(m().text, m().artistLink), (0, a.$)(m().text, m().artistCaption));
                        if (!e && !b) return;
                        let t = (0, r.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, r.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof b &&
                                    b > 0 &&
                                    (0, r.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': C({ id: 'entity-names.likes-counter' }, { counter: b }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, r.jsx)(l.I, {
                                                className: m().icon,
                                                variant: y ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, r.jsx)(d.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: A(b),
                                            }),
                                        ],
                                    }),
                                !!b && e && t,
                                e,
                                !!g && e && t,
                                (0, r.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', children: g }),
                            ],
                        });
                    });
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(m().root, { [m().root_disabled]: i, [m().root_disliked]: t }, h),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, r.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, r.jsxs)(d.HL, {
                                    className: (0, a.$)(m().text, m().title, { [m().title_withVersion]: v }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        f,
                                        v &&
                                            (0, r.jsx)(d.HL, {
                                                className: (0, a.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(v),
                                            }),
                                    ],
                                }),
                                p && (0, r.jsx)(c.N, { className: m().explicitMark, getDescriptionTexts: _, variant: p }),
                            ],
                        }),
                        u &&
                            (0, r.jsx)(d.HL, {
                                className: (0, a.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        S,
                    ],
                });
            };
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => n });
            var r = i(88800),
                a = i(53548),
                s = i(90134);
            let n = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: n, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, n, o, l, d, c, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                a = i(53548),
                s = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var r = (n[t] = { exports: {} });
                    return (s[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
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
        82474: (e, t, i) => {
            'use strict';
            i.d(t, { SearchHistoryPage: () => C });
            var r = i(88800),
                a = i(55482),
                s = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(88969),
                d = i(58390),
                c = i(17392),
                u = i(96817),
                m = i(52300),
                _ = i(66719),
                p = i(29504),
                h = i(71344),
                v = i(37717),
                f = i(12816),
                x = i(46422),
                b = i(44230),
                y = i(72288),
                g = i(12342),
                T = i.n(g);
            let C = (0, s.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: i },
                    } = (0, y.g)(),
                    { setContentScrollRef: s } = (0, b.g)(),
                    { formatMessage: g } = (0, o.A)(),
                    C = (0, x.W)(),
                    A = (0, n.useRef)(!1),
                    S = (0, n.useRef)(null),
                    j = (0, v.t)(() => {
                        A.current = !0;
                    }),
                    E = e.historyPage.items.length;
                (t.isAuthorized && (0, d.notFound)(),
                    (0, n.useEffect)(() => {
                        S.current && C.canBack && S.current.focus();
                    }, [C.canBack]),
                    (0, n.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current) ? (e.resetHistoryItems(), (A.current = !1)) : e.resetHistoryStateRequest();
                        },
                        [e],
                    ));
                let k = (0, n.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == C || C.back();
                            }, 200),
                        [C],
                    ),
                    I = (0, n.useMemo)(
                        () =>
                            E
                                ? (0, r.jsx)('div', {
                                      className: T().items,
                                      children: e.historyPage.items.map((e, t) => (0, h.G)({ item: e, index: t, pageId: f._Q.SEARCH })).filter((e) => !!e),
                                  })
                                : (0, r.jsx)(p.HL, {
                                      className: T().emptyHistory,
                                      variant: 'div',
                                      size: 'm',
                                      type: 'text',
                                      children: (0, r.jsx)(l.A, { id: 'search.history-empty' }),
                                  }),
                        [e.historyPage.items, E],
                    );
                return (
                    e.isHistoryReady && t.account.data.uid && (0, n.use)(e.getHistory({ userId: t.account.data.uid })),
                    (0, r.jsx)('div', {
                        className: T().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, r.jsxs)(_.N, {
                            className: T().scrollContent,
                            containerClassName: T().scrollContainer,
                            ref: s,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T().header,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: T().title,
                                            children: [
                                                C.canBack &&
                                                    (0, r.jsx)(u.$, {
                                                        ref: S,
                                                        'aria-label': g({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !C.canBack,
                                                        size: 's',
                                                        icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: k,
                                                    }),
                                                (0, r.jsx)(p.DZ, { variant: 'h2', size: i ? 'm' : 'xl', children: (0, r.jsx)(l.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.$, {
                                            'aria-label': g({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !E,
                                            size: i ? 's' : 'default',
                                            onClick: j,
                                            children: (0, r.jsx)(p.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, r.jsx)(l.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && I,
                            ],
                        }),
                    })
                );
            });
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                n = i(2058),
                o = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(30832);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === o.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, h, i]);
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        87724: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
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
                o = i(2058),
                l = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                m = i(94398),
                _ = i(17332),
                p = i.n(_);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: h, size: v = 'xxxs', ...f } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [y, g] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(g);
                }, [i, s]);
                let {
                    iconVariant: T,
                    descriptionText: C,
                    isTooltipEnabled: A,
                    ariaLabel: S,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: a } = e,
                        s = (null == r ? void 0 : r.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !a,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: y, isMobile: b }, x);
                return (0, r.jsx)(m.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: A,
                    children: (0, r.jsx)('span', {
                        className: _,
                        children: (0, r.jsx)(d.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': S,
                            variant: T,
                            size: v,
                            ...f,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        91106: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var r = i(53548),
                a = i(2058);
            let s = () => {
                let { formatMessage: e } = (0, a.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = Math.floor(t / 60),
                            a = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            })(Math.floor(t), i);
                        if (r < 60) return a(r, i);
                        let s = Math.floor(r / 60),
                            n = r % 60,
                            o = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(s, i);
                        return n > 0 ? ''.concat(o, ' ').concat(a(n)) : o;
                    },
                    [e],
                );
            };
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92152: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(88800),
                a = i(2058),
                s = i(29993),
                n = i(87762),
                o = i(29595),
                l = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                m = i(53548),
                _ = i(79390),
                p = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, a.A)(),
                    { notify: f } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, s.c)(async (a) => {
                            let { album: s, withLink: l = !0, withNotification: d = !0 } = a;
                            if (i) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            n(!0);
                            let v = await s.toggleLike();
                            if ((n(!1), !d)) return;
                            let f = t.modal.isOpened;
                            v === _.f.OK
                                ? e((0, r.jsx)(p.T, { withLink: l, album: m }), { containerId: f ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, r.jsx)(c.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: f ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void f((0, r.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    bindSnapshot: function () {
                        return n;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                }));
            let i = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class r {
                disable() {
                    throw i;
                }
                getStore() {}
                run() {
                    throw i;
                }
                exit() {
                    throw i;
                }
                enterWith() {
                    throw i;
                }
                static bind(e) {
                    return e;
                }
            }
            let a = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return a ? new a() : new r();
            }
            function n(e) {
                return a ? a.bind(e) : r.bind(e);
            }
            function o() {
                return a
                    ? a.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(88800),
                a = i(17392),
                s = i(17610),
                n = i(29504),
                o = i(37438),
                l = i.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: o, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
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
            i.d(t, { T: () => o });
            var r = i(88800),
                a = i(84961),
                s = i(42729),
                n = i(5048);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    o = (0, n.b)(t.type);
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: a,
                });
            });
        },
        96669: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = i(20603);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 127, 1931, 8380, 4596, 5108, 1191, 8583, 6706, 4771, 5201, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 2824, 2837, 4732, 1195, 1598, 6281,
                1928, 7627, 9124, 7967, 9934, 4561, 9337, 818, 7555, 763, 2670, 7358,
            ],
            () => e((e.s = 59603)),
        ),
            (_N_E = e.O()));
    },
]);
