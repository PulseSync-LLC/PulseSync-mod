(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 9202, 9689],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var r = i(2058),
                a = i(61691);
            let n = (e, t) => {
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
        324: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var r = i(28166);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(r.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { $: () => r }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(r || (r = {})));
        },
        2218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var r = i(28166),
                a = i(77863);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(r.Lz, '/').concat(e.url) } },
                      };
            }
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var r = i(72288),
                a = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, r.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var r = i(61691),
                a = i(15077);
            let n = (e) => {
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
        6668: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var r = i(53548),
                a = i(29993);
            let n = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
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
            i.d(t, { K: () => f });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                u = i(72288),
                d = i(39267),
                m = i(13619),
                p = i(73805),
                _ = i(15232),
                h = i(56712),
                g = i(26243),
                v = i.n(g);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: f,
                        isDragging: y,
                        draggingClassName: x,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: k,
                        withDislike: T,
                        withTrailer: C = !0,
                        beforeTitle: E,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    } = e,
                    L = (0, c.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, u.g)(),
                    O = (0, o.X)(i.trackSource, { isMobile: S }),
                    w = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
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
                return (0, r.jsx)(h.C, {
                    className: (0, a.$)(g, { [v().trackWithDots]: f, [v().important]: f }),
                    track: i,
                    beforeBlock: f ? (0, r.jsx)(m.O, { className: (0, a.$)(v().dots, x), isDragging: y }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: O, beforeTitle: E, track: i, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: w,
                    controls: (0, r.jsx)(p.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: k,
                        withDislike: T,
                        withTrailer: C,
                        removeButtonAriaLabel: N,
                        hideControls: I,
                    }),
                    ...L,
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
        12526: (e, t, i) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(e) {
                if (!i.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    a = t[0];
                return i.e(t[1]).then(() => i.t(a, 19));
            }
            ((a.keys = () => Object.keys(r)), (a.id = 12526), (e.exports = a));
        },
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var r = i(88800),
                a = i(65724),
                n = i(52300),
                s = i(30907),
                l = i.n(s);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, r.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
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
            i.d(t, { i: () => W });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                u = i(29993),
                d = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var _ = i(21010),
                h = i.n(_),
                g = i(17392),
                v = i(29504),
                f = i(91292),
                y = i(2058),
                x = i(92716),
                b = i(96527),
                A = i(78940),
                k = i(55693),
                T = i(58217);
            let C = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: n = 'm', allArtistsTitle: s, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: C,
                            isTooltipEnabled: E,
                            handleNavigate: N,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: n } = e,
                                { formatMessage: s } = (0, y.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                        n = r || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : n,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !r && a,
                                    };
                                })({ item: r, allArtistsTitle: a, withCustomTooltip: n }, s),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, d.g)(),
                                m = (0, A.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, k.z)(),
                                _ = (0, b.N)(),
                                h = (0, u.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, d.g)(),
                                        { modal: s } = r;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (r.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                v = (0, u.c)((e) => {
                                    (_({ to: x.AppScreen.ArtistScreen }), null == p || p(), g(e));
                                });
                            return { ...l, handleNavigate: v };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: l });
                    return p
                        ? (0, r.jsx)(f.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: N,
                              title: _,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: C,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: m }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: C,
                              hoverSettings: c,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: a,
                                  title: _,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: n, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(C, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: n,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(C, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: n,
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
            var N = i(88969),
                I = i(65453);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var S = i(61013),
                O = i(87819),
                w = i(40634),
                j = i(48468),
                R = i.n(j);
            let D = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: R().tooltipContent, children: i.map((e) => (0, r.jsx)(w.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, s.forwardRef)((e, t) => (0, r.jsx)(D, { forwardRef: t, ...e }));
            var M = i(19934),
                U = i(70396),
                B = i.n(U);
            let z = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, y.A)();
                    return (0, r.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(B().root, B().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [n, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, d.g)(),
                        m = (0, u.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, S.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, s.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(z, { artists: t, label: i }) : (0, r.jsx)(P, { artists: t, label: i })) : i;
                }),
                W = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: n,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: g,
                            variant: v = 'breakAll',
                            spoilerComponent: f,
                            ...y
                        } = e,
                        x = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: n, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (r = e.withCustomTooltip) || r,
                                v = (0, s.useRef)(null),
                                [f, y] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, d.g)(),
                                b = ((!x || 1 === _.length) && m) || !m,
                                A = ((e, t) => {
                                    var i, r, a;
                                    let n = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (r = null == t ? void 0 : t.withLink) || r,
                                        l = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: u } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: n } = t;
                                                return {
                                                    primary: p(e, { withLink: r, separator: n ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return p(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: u,
                                    };
                                })(_, { separator: a, visibleArtistsCount: f ? void 0 : n, withComposer: o, withLink: !!b && l, artistIdWithoutLink: c }),
                                k = h ? A.allArtistsTitle : '',
                                T = (0, u.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: A.groups,
                                hiddenArtistsCount: A.hiddenArtistsCount,
                                allArtistsTitle: k,
                                withCustomTooltip: g,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!k && g && !m && !x,
                                title: !k || g || m ? void 0 : k,
                            };
                        })(y),
                        b = (0, l.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(f)
                                  ? f
                                  : (0, r.jsx)(L, { spoilerClassName: n, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        A = (0, r.jsx)(o.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, r.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: g,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, r.jsx)(F, { labelRef: x.labelRef, artists: x.artists, label: A }) : A;
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
                    let { code: i = 'E_INTERNAL', data: a = {}, ...n } = t,
                        s = e || 'Internal error';
                    (super(s, n), (this.message = s), (this.code = i), (this.data = a), (this.stack = Error(s).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => C });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                u = i(79070),
                d = i(17610),
                m = i(29504),
                p = i(13946),
                _ = i(55693),
                h = i(72288),
                g = i(24548),
                v = i(85587),
                f = i(90224),
                y = i(91292),
                x = i(7608),
                b = i(6667),
                A = i(85463),
                k = i(65462),
                T = i.n(k);
            let C = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: k,
                        withExplicitMark: C,
                        withSecondaryColor: E,
                        captionSize: N = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: S,
                        artistsClassName: O,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: j = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: D,
                        beforeTitle: P,
                        withArtistLink: M,
                        variant: U,
                        withTrackLink: B,
                        afterTitle: z,
                        withContextMenuArtists: F,
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: H } = (0, _.z)(),
                    {
                        settings: { isMobile: G },
                        slam: Y,
                    } = (0, h.g)(),
                    $ = (0, b.$)({ withCustomTooltip: j }),
                    K = (0, o.useSearchParams)(),
                    V = (0, x.B)(n, {
                        isMobile: G,
                        isOfflineModeEnabled: Y.isOfflineModeEnabled,
                        albumArtists: k,
                        withTrackLink: B,
                        withArtistLink: M,
                        variant: U,
                        withExplicitMark: C,
                        query: D ? Object.fromEntries(K) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: Z,
                        tooltipText: J,
                        titleAttribute: q,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            u = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(u, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, V, { canEnableCustomTooltip: $, isMobile: G }, W),
                    et = (0, A.O)({ track: n, onNavigate: H, withSavingQueryParams: D, entityType: v.n.TRACK }),
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: J,
                                hoverSettings: g.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [N, X, J, ee],
                    ),
                    er = (0, u.L)(() =>
                        V.shouldShowRemovedTitle
                            ? (0, r.jsx)(d.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: J,
                                  hoverSettings: g.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: q,
                                      children: X,
                                  }),
                              })
                            : V.link
                              ? (0, r.jsx)(y.N, {
                                    onClick: et,
                                    className: T().albumLink,
                                    href: V.link.href,
                                    'aria-label': Z,
                                    title: q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, s.useMemo)(() => +!!R, [R]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !n.isAvailable, [T().root_disliked]: n.isDisliked && !w, [T().root_withSecondaryColor]: E }, t),
                    children: (0, r.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(T().text, S),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            er,
                                            V.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', V.version],
                                                }),
                                        ],
                                    }),
                                    V.explicitMark &&
                                        (0, r.jsx)(f.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: I,
                                            variant: V.explicitMark,
                                            className: T().explicitMark,
                                            trackId: n.id,
                                        }),
                                    z,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, r.jsx)(p.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: R }, O, S),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: N,
                                    withContextMenu: F,
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
                n = i(17392),
                s = i(29504),
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
                            s.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19998: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => k });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(88969),
                o = i(17392),
                c = i(29993),
                u = i(96817),
                d = i(29504),
                m = i(4086),
                p = i(41928),
                _ = i(46422),
                h = i(4370),
                g = i(78940),
                v = i(85587),
                f = i(15253),
                y = i(91292),
                x = i(28806),
                b = i.n(x);
            let A = {
                    [v.n.ALBUM]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                k = (0, n.PA)((e) => {
                    var t;
                    let { modalState: i, data: n, onClose: x, className: k } = e,
                        T = null != n ? n : null == i ? void 0 : i.modalData,
                        C = (0, _.W)(),
                        E = (0, g.Z)(h.Z.main.href),
                        N = (0, p.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (x) return x();
                            (C.canBack && C.back(), E());
                        }),
                        L = (null == T || null == (t = T.details) ? void 0 : t.url) && T.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(f.c.ExEx),
                                r = new Date(),
                                a = r.setMinutes(r.getMinutes() + 15),
                                n =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? N.set(f.c.ExEx, [...t, n], { expires: new Date(a) }) : N.set(f.c.ExEx, [n], { expires: new Date(a) }),
                                null == x || x(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        O = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == x || x(), C.canBack && C.back(), E()) : null == x || x(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let w = (0, s.useMemo)(() => {
                            if (T) {
                                var e, t;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, a.$)(b().title, b().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: T.title,
                                        }),
                                        (0, r.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: T.description,
                                        }),
                                        L &&
                                            (0, r.jsx)(y.N, {
                                                href: null == (e = T.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, r.jsx)(d.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = T.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [T, L]),
                        j = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === v.Z.UNSAFE
                                    ? (0, r.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, r.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, r.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, r.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && A[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, r.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, r.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, I, O],
                        );
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(b().root, k),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, r.jsxs)('div', { className: b().container, children: [w, j] }),
                    });
                });
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        21424: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            let r = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && r.test(e);
            }
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
        27342: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => a });
            var r = i(53548);
            let a = (e, t) => {
                (0, r.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        27794: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => y });
            var r,
                a,
                n = i(88092),
                s = i(68436);
            function l(e, t) {
                var i = t && t.cache ? t.cache : m,
                    r = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var i,
                                  r,
                                  a = 1 === e.length ? o : c;
                              return ((i = t.cache.create()), (r = t.serializer), a.bind(this, e, i, r));
                          }
                )(e, { cache: i, serializer: r });
            }
            function o(e, t, i, r) {
                var a = null == r || 'number' == typeof r || 'boolean' == typeof r ? r : i(r),
                    n = t.get(a);
                return (void 0 === n && ((n = e.call(this, r)), t.set(a, n)), n);
            }
            function c(e, t, i) {
                var r = Array.prototype.slice.call(arguments, 3),
                    a = i(r),
                    n = t.get(a);
                return (void 0 === n && ((n = e.apply(this, r)), t.set(a, n)), n);
            }
            var u = function () {
                return JSON.stringify(arguments);
            };
            function d() {
                this.cache = Object.create(null);
            }
            ((d.prototype.get = function (e) {
                return this.cache[e];
            }),
                (d.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new d();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), c.bind(this, e, i, r));
                    },
                    monadic: function (e, t) {
                        var i, r;
                        return ((i = t.cache.create()), (r = t.serializer), o.bind(this, e, i, r));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(r || (r = {}));
            var _ = (function (e) {
                    function t(t, i, r) {
                        var a = e.call(this, t) || this;
                        return ((a.code = i), (a.originalMessage = r), a);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                h = (function (e) {
                    function t(t, i, a, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(i, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                r.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                g = (function (e) {
                    function t(t, i, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(i), r.INVALID_VALUE, a) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                v = (function (e) {
                    function t(t, i) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(i, '"'), r.MISSING_VALUE, i) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_);
            function f(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, i) {
                                e[t] = i;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(a || (a = {}));
            var y = (function () {
                function e(t, i, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === i && (i = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var i = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return i.length <= 1 ? i[0] || '' : i;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, i, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, s.isLiteralElement)(p)) {
                                        d.push({ type: a.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(p)) {
                                        'number' == typeof c && d.push({ type: a.literal, value: n.getNumberFormat(i).format(c) });
                                        continue;
                                    }
                                    var f = p.value;
                                    if (!(o && f in o)) throw new v(f, u);
                                    var y = o[f];
                                    if ((0, s.isArgumentElement)(p)) {
                                        ((y && 'string' != typeof y && 'number' != typeof y) || (y = 'string' == typeof y || 'number' == typeof y ? String(y) : ''),
                                            d.push({ type: 'string' == typeof y ? a.literal : a.object, value: y }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.date[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(i, x).format(y) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.time[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : l.time.medium;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(i, x).format(y) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.number[p.style] : (0, s.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (x && x.scale && (y *= x.scale || 1), d.push({ type: a.literal, value: n.getNumberFormat(i, x).format(y) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(p)) {
                                        var b = p.children,
                                            A = p.value,
                                            k = o[A];
                                        if ('function' != typeof k) throw new g(A, 'function', u);
                                        var T = k(
                                            e(b, i, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(T) || (T = [T]),
                                            d.push.apply(
                                                d,
                                                T.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(p)) {
                                        var C = p.options[y] || p.options.other;
                                        if (!C) throw new h(p.value, y, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, i, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(p)) {
                                        var C = p.options['='.concat(y)];
                                        if (!C) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    r.MISSING_INTL_API,
                                                    u,
                                                );
                                            var E = n.getPluralRules(i, { type: p.pluralType }).select(y - (p.offset || 0));
                                            C = p.options[E] || p.options.other;
                                        }
                                        if (!C) throw new h(p.value, y, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, i, n, l, o, y - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var i = e[e.length - 1];
                                          return (i && i.type === a.literal && t.type === a.literal ? (i.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = i),
                        (this.resolvedLocale = e.resolveLocale(i)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var y = c || {},
                            x = (y.formatters, (0, n.__rest)(y, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, x), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var i, r;
                                      return (
                                          (e[t] =
                                              ((i = u[t]),
                                              (r = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, i || {}), r || {}),
                                                        Object.keys(i).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, i[t]), r[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : i)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(d.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        28806: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(35396);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => _ });
            var r = i(53548),
                a = i(58390),
                n = i(51611),
                s = i(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = i(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var u = i(88349),
                d = i(91241);
            let m = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let r = window.document.createElement('meta');
                    return (r.setAttribute(e, t), r);
                },
                p = (e) => {
                    let { title: t, description: i, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = m('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let a = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            i = Array.isArray(r.images) ? r.images[0] : null;
                        a = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let n = m('property', 'og:title'),
                            s = m('property', 'og:description'),
                            l = m('property', 'og:image');
                        (n.setAttribute('content', e),
                            s.setAttribute('content', t),
                            l.setAttribute('content', a),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l));
                    }
                },
                _ = (e) => {
                    let { language: t } = (0, n.h)(),
                        i = (0, s.U)(),
                        l = (0, a.usePathname)(),
                        o = (0, a.useSearchParams)().toString();
                    (0, r.useEffect)(() => {
                        if (!e) return;
                        let r = !0,
                            a = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, u.f)(e.host) || d.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            n = window.location.pathname + window.location.search,
                            s = () => r && n === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(a);
                                    if (!s() || !t) return;
                                    let i = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(a)).title;
                                    s() && p({ ...t, title: i });
                                } catch (e) {
                                    if (!s()) return;
                                    i.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(a);
                                        s() && p(e);
                                    } catch (e) {
                                        s() && i.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                r = !1;
                            }
                        );
                    }, [e, t, i, l, o]);
                };
        },
        30511: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86179));
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => O });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                u = i(52300),
                d = i(29504),
                m = i(78793),
                p = i(92716),
                _ = i(99984),
                h = i(90780),
                g = i(65523),
                v = i(14518),
                f = i(44230),
                y = i(4370),
                x = i(72288),
                b = i(97956),
                A = i(56248),
                k = i(90688),
                T = i(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = i(96856),
                N = i.n(E);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: s } = (0, x.g)(),
                    { contentRef: l } = (0, f.g)(),
                    u = (0, T.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(N().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(N().navigation, { [N().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(k._V, { className: N().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: N().message,
                                    children: [
                                        (0, r.jsx)(d.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(d.HL, {
                                            className: N().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: N().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            className: N().buttonText,
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
            var L = i(9184),
                S = i.n(L);
            let O = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: k } = (0, l.A)(),
                    T = (0, s.useContext)(x.P),
                    C = null == T ? void 0 : T.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    E = k(C ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, v.$)(),
                        a = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, i, r, a]);
                })(E);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, _.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    L = (0, s.useCallback)(() => {
                        (N(), (window.location.href = y.Z.main.href));
                    }, [N]),
                    { contentRef: O } = (0, f.g)();
                return C
                    ? (0, r.jsx)(I, { className: t, withBackwardControl: i, onBack: n })
                    : (0, r.jsxs)('div', {
                          className: (0, a.$)(S().root, t),
                          children: [
                              i &&
                                  (0, r.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(S().navigation, { [S().navigation_desktop]: !O }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, a.$)(S().content, { [S().content_shrink]: !i }),
                                  children: [
                                      (0, r.jsx)(u.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(d.DZ, { className: (0, a.$)(S().title, S().important), variant: 'h3', size: 'xs', children: E }),
                                      (0, r.jsxs)(d.HL, {
                                          className: (0, a.$)(S().text, S().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: L,
                                          className: S().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(d.HL, {
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
        35396: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { C: () => n }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(r || (r = {})));
            let a = new Set(Object.values(r)),
                n = (e) => 'string' == typeof e && a.has(e);
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
            i.d(t, { J: () => n });
            var r = i(53548);
            i(30282);
            var a = i(58390);
            let n = (e) => {
                let t = (0, a.usePathname)(),
                    [i, n] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]));
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(92716),
                o = i(17392),
                c = i(29993),
                u = i(90688),
                d = i(19934),
                m = i(7555),
                p = i(29504),
                _ = i(96527),
                h = i(78940),
                g = i(72288),
                v = i(80932),
                f = i.n(v);
            let y = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    v = (0, h.Z)(t.url),
                    x = (0, _.N)(),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, c.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), x({ to: l.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, a.$)(f().root, i),
                            onClick: A,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: f().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: f().image }),
                                }),
                                (0, r.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => u });
            var r = i(88800),
                a = i(84961),
                n = i(17392),
                s = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let u = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: u, albumType: d, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, d);
                return (0, r.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(s.I, { className: u, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        45383: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(67174);
            let a = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        u = {},
                        { href: d } = (0, r.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: i } = (0, r.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = i;
                    }
                    return { canonical: d, languages: u };
                };
        },
        45700: (e, t) => {
            'use strict';
            var i, r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(i || (t.TYPE = i = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(r || (t.SKELETON_TYPE = r = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === i.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === i.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === i.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === i.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === i.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === i.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === i.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === i.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === i.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === r.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: i.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: i.number, value: e, style: t };
                }));
        },
        46511: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => u });
            var r = i(27794),
                a = i(53548),
                n = i(72542),
                s = i(83602),
                l = i(21424),
                o = i(95330);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(n.pE[n.cy], t),
                        a = await c(i);
                    return (e, t) => {
                        let n = null == a ? void 0 : a[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new r.S(n, i).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        46646: (e, t, i) => {
            var r = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!i.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    a = t[0];
                return i.e(t[1]).then(() => i.t(a, 19));
            }
            ((a.keys = () => Object.keys(r)), (a.id = 46646), (e.exports = a));
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
        53073: (e, t, i) => {
            'use strict';
            function r() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => r });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(88800),
                a = i(53548),
                n = i(2058),
                s = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(39318);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: g,
                            style: v,
                            children: f,
                        } = e,
                        { formatMessage: y } = (0, n.A)(),
                        x = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: p,
                        ref: g,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: d, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => k });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(29993),
                o = i(52073),
                c = i(5407),
                u = i(76675),
                d = i(28830),
                m = i(9618),
                p = i(4795),
                _ = i(55693),
                h = i(7123),
                g = i(72288),
                v = i(8990),
                f = i(2058),
                y = i(47580),
                x = i(95993),
                b = i(27157),
                A = i.n(b);
            let k = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: b,
                        beforeBlock: k,
                        controls: T,
                        playButtonCellRender: C,
                        withLightning: E,
                        isPlaying: N,
                        isCurrent: I,
                        togglePlay: L,
                        restartPlay: S,
                        onPlayClick: O,
                        playButtonIconSize: w,
                        skipFreemiumCloseListeningPaywall: j = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: D, showBuySubscriptionModal: P } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: U,
                        settings: { isMobile: B },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: F },
                        paywall: { modal: W },
                    } = (0, g.g)(),
                    { ref: H, intersectionPropertyId: G } = (0, d.n)(),
                    Y = (0, u.b)(),
                    $ = (0, c.P)(),
                    K = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: r } = (0, f.A)();
                        return ((e, t, i) => {
                            var r;
                            let { withLightning: a } = t,
                                n = (0, y.j)(null != (r = e.artists) ? r : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, r);
                    })({ withLightning: E, track: n }),
                    V = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return i && r === e;
                        }
                        return i;
                    })(n.entityId),
                    X = F(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    Z = n.isAvailable && D && !X,
                    J = (0, p.N)(),
                    q = n.isAvailable && J && !X && !j,
                    Q = (0, x.w)({ track: n, callback: L }),
                    ee = (0, l.c)(() => {
                        M.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    et = (0, x.w)({ track: n, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, _.z)(),
                    [er, ea] = (0, s.useState)(!1),
                    en = (0, l.c)(() => {
                        if (!$()) {
                            if (Z) return void P();
                            if (q) return void W.open();
                            (er || N || (ea(!0), null == ei || ei()), Q(), Y(!N), null == O || O(!N));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (N) return void S();
                        en();
                    }),
                    el = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (D && n.isAvailableOnlyForPlus && P(), J && n.isAvailableOnlyForPlus && W.open());
                            return;
                        }
                        if (Z) return void P();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !U.modal.isOpened));
                        return q && !t
                            ? void W.open()
                            : ((0, o.P)(e, A().ripple), B)
                              ? void en()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && n.hasTrackLink && !U.modal.isOpened && (et(), q && W.open()));
                    }),
                    eo = null == C ? void 0 : C({ onPlayButtonClick: en, isPlaying: N, isCurrent: I, isLoading: V, playButtonIconSize: w });
                return (0, r.jsxs)(v.C, {
                    ref: H,
                    'aria-label': K,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    'data-intersection-property-id': G,
                    onClick: el,
                    className: (0, a.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: I && B }, i),
                    ...R,
                    children: [k, eo, b, T],
                });
            });
        },
        57297: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var r = i(35412),
                a = i(83602);
            function n(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: u } = e,
                    d = l ? { url: (0, r.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        59844: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(88800),
                a = i(53548),
                n = i(90334);
            let s = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    u = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, i, s, l, o]);
                return (0, r.jsx)(n.r.Provider, { value: u, children: c });
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                n = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: n } = e;
                return 'ru' === n && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => a, DQ: () => h, Ve: () => g });
            var r,
                a,
                n = i(43297),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, n.vP)(e)), (this.prevValueByListener = new Map()));
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
                    ((this.observableValue = (0, n.EW)(e)), (this.prevValueByListener = new Map()));
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
            let u = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class m {
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
                        (this.itemsObservable = new s(null)),
                        (this.isLoadingObservable = new s(!1)),
                        (this.errorObservable = new s(null)),
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
                    let i = d(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
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
            let p = new Map([
                    [r.EXPLICIT_ICON, a.E],
                    [r.AGE_18_ICON, a.AGE_18],
                    [r.AGE_16_ICON, a.AGE_16],
                    [r.AGE_12_ICON, a.AGE_12],
                    [r.EXCLAMATION_ICON, a.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [r.SUBSTITUTED_ICON, a.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                _ = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.SUBSTITUTED_ICON, r.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = d(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let i = p.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => d(e, t).length > 0;
        },
        63512: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var r = i(53548),
                a = i(94144),
                n = i(67174);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, a.P)()) ? t : {};
                (0, r.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(4086),
                a = i(41928),
                n = i(44084);
            let s = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = s.get(e);
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
                        return (s.set(e, i), i);
                    })((0, a.N)().get(r.Zf));
        },
        68436: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var r = i(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                r.__exportStar(i(45700), t),
                (t._Parser = void 0));
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        72542: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => n, cy: () => a, pE: () => r });
            let r = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                a = 'yandex',
                n = 'ru-RU';
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                u = i(29993),
                d = i(52300),
                m = i(17610),
                p = i(29504),
                _ = i(42174),
                h = i(96817);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: n, iconSize: o, size: u = 's', ariaLabel: m } = e,
                    { formatMessage: p } = (0, l.A)(),
                    _ = null != m ? m : p({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: u,
                    radius: 'round',
                    'aria-label': _,
                    onClick: g,
                    icon: (0, r.jsx)(d.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = i(5407),
                f = i(25557),
                y = i(55693),
                x = i(72288),
                b = i(49738),
                A = i(56446),
                k = i(64546),
                T = i(29831),
                C = i(30123),
                E = i(54965),
                N = i(1829),
                I = i(82092),
                L = i.n(I),
                S = i(79262),
                O = i(41867),
                w = i.n(O);
            let j = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(d.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: h,
                            ignoreDislikedStyles: I,
                            onLikeClick: S,
                            utmLink: O,
                            withSecondaryColor: w,
                            handleRemove: R,
                            withTrailer: D = !0,
                            likeIconSize: P = 'xxs',
                            removeButtonAriaLabel: M,
                            hideControls: U,
                        } = e,
                        { user: B, trailer: z } = (0, x.g)(),
                        { formatMessage: F } = (0, l.A)(),
                        { sendLikeSearchFeedback: W } = (0, y.z)(),
                        [H, G] = (0, s.useState)(!1),
                        [Y, $] = (0, s.useState)(!1),
                        K = (0, v.P)(),
                        V = (0, _.K)(n),
                        {
                            duration: X,
                            lightning: Z,
                            ugc: J,
                        } = ((e, t, i) => {
                            var r;
                            let { withLightning: a, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / C.k7);
                                              return (0, E.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, T.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: h, isUGC: n.isUGC }, F),
                        q = (0, f.F)(),
                        Q = B.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !U,
                        et = (0, u.c)(async () => {
                            (H || n.isLiked || (G(!0), null == W || W()), await V(), null == S || S(n.isLiked));
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, u.c)((e) => {
                            if ((e.stopPropagation(), K())) return void e.preventDefault();
                            (z.openTrackTrailer(n.id), q(o.DomainObjectType.Track, n.id));
                        }),
                        ea = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(N._, {
                                        track: n,
                                        open: Y,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(d.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: O,
                                        className: (0, a.$)(L().contextMenu, { [L().contextMenu_visible]: Y }),
                                        handleRemove: R,
                                        withTrailer: D,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, Y, ee, D, n, O]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(L().root, L().controls, i, {
                            [L().controls_dislikedControls]: n.isDisliked,
                            [L().controls_dislikedColors]: n.isDisliked && !I,
                            [L().controls_disabled]: !n.isAvailable,
                            [L().root_withSecondaryColor]: w,
                        }),
                        children: [
                            Z && (0, r.jsx)(d.I, { 'aria-label': Z.label, size: 'xxs', className: L().lightning, variant: 'lightning' }),
                            J &&
                                (0, r.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(d.I, {
                                            'aria-label': J.label,
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(m.ZI, { children: J.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, a.$)(L().item, L().downloadIcon), children: (0, r.jsx)(j, { track: n }) }),
                            R && !U && (0, r.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(L().item, L().removeButton), onClick: R, ariaLabel: M }),
                            ee &&
                                (0, r.jsx)(k.WithOffline, {
                                    fallback: (0, r.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: P,
                                        className: (0, a.$)(L().item, L().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, r.jsx)(k.WithOffline, {
                                    fallback: (0, r.jsx)(A.k, {
                                        className: (0, a.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, r.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(L().duration, { [L().duration_hidden]: Y && ee }),
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
        77863: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => r });
            var r = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var r = i(88800),
                a = i(65724),
                n = i(61013),
                s = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...n } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': s, style: { ...t }, ref: i, ...n });
                },
                o = (0, s.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: s, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: n, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var p = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, h] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, n),
                            [n, a, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let v = (0, s.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(_.sN, { ref: u, rangeChanged: g, totalCount: l, endReached: v, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: f,
                            totalRequests: y,
                            debounceDurationInMs: x,
                            initialItemCount: b,
                            minInitialItemCount: A = 20,
                            handleRef: k,
                            alwaysShowScrollbar: T = !1,
                            testId: C,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...I
                        } = e,
                        [L, S] = (0, s.useState)(!1),
                        O = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        w = (0, s.useMemo)(() => {
                            var e, t;
                            return E
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
                        }, [i, y, E]),
                        j = b ? Math.min(b, A) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: L || T, [u().root_notScrolling]: !L && !T }, t),
                        'data-test-id': C,
                        children: [
                            E && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: g,
                                components: w,
                                listClassName: _,
                                itemClassName: d,
                                isScrolling: O,
                                itemContent: p,
                                scrollerRef: k,
                                totalCount: f,
                                pageSize: v,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: N,
                                ...I,
                            }),
                            E && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        81685: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => a });
            var r = i(29201);
            let a = (e) => {
                var t, i;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, r.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
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
        83418: (e, t, i) => {
            'use strict';
            function r(e) {
                let { host: t, url: i } = e;
                return i || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            i.d(t, { v: () => r });
        },
        83602: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => d });
            var r = i(9519),
                a = i(72542),
                n = i(21424),
                s = i(4653);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = i(95330);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(a.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = d.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, r;
                    let a = (0, n.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(a), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(a));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [u] = l(e) || [];
                    this.language = (0, n.k)(this.config, u);
                }
            }
        },
        85967: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        86179: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => Z }));
            var r = i(88800),
                a = i(58390),
                n = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(2058),
                c = i(88969),
                u = i(17392),
                d = i(18593),
                m = i(29993),
                p = i(29504),
                _ = i(32596),
                h = i(69630),
                g = i(10829),
                v = i(91959),
                f = i(12816),
                y = i(59844),
                x = i(84384),
                b = i(46422),
                A = i(44230),
                k = i(37670),
                T = i(6668),
                C = i(72288),
                E = i(98644),
                N = i(19998),
                I = i(86790),
                L = i(60266),
                S = i(93317),
                O = i(93015),
                w = i(79418),
                j = i(81685),
                R = i(30144),
                D = i(324),
                P = i(53073),
                M = i(83418),
                U = i(46511),
                B = i(57297),
                z = i(2218),
                F = i(77863),
                W = i(45383);
            async function H(e, t) {
                var i, r, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    s = n({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, B.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, M.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, z.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, P.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, W.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var G = i(27342),
                Y = i(63512),
                $ = i(85967),
                K = i.n($);
            let V = (0, s.PA)((e) => {
                var t, i, s, D, P, M;
                let { artistId: U, preloadedArtist: B } = e,
                    {
                        artist: z,
                        sonataState: F,
                        disclaimerModalState: W,
                        settings: { isMobile: $ },
                    } = (0, C.g)(),
                    { formatMessage: V } = (0, o.A)(),
                    { from: X, utmLink: Z } = (0, x.f)({ pageId: f._Q.ARTIST_TRACKS, pageEntityId: U, contextType: d.K.Artist, contextId: U }),
                    { contentScrollRef: J, setContentScrollRef: q } = (0, A.g)(),
                    Q = (0, b.W)(),
                    ee = (0, T.w)(),
                    et = (0, v.S)({ artist: null == (t = z.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, Y.G)(U),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = z.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (i = z.meta) ? void 0 : i.artist.isUnsafeLegal, et]),
                    (0, G._)(z, U),
                    (0, l.useEffect)(
                        () => () => {
                            z.fullTracksListSubpage.reset();
                        },
                        [z],
                    ),
                    z.fullTracksListSubpage.isNotFound && (0, a.notFound)(),
                    (0, k.J)(z.fullTracksListSubpage.isResolved));
                let ei = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(L.A, { children: (0, r.jsx)(I.w, { className: K().footer }) }) }), []),
                    er = (0, m.c)((e) => {
                        let t = [];
                        for (let r = e.startIndex; r <= e.endIndex; r++) {
                            var i;
                            let e = null == (i = z.fullTracksListSubpage.ids) ? void 0 : i[r];
                            !z.fullTracksListSubpage.getTrackByIndex(r) && e && t.push(e);
                        }
                        t.length && z.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    ea = [];
                return (z.fullTracksListSubpage.isNeededToLoad && ea.push(z.fullTracksListSubpage.getTracksIds({ artistId: U })),
                z.infoLoadingState.isNeededToLoad && ea.push(z.getInfo({ artistId: U, preloadedArtist: B })),
                ((e) => {
                    var t;
                    let { fullscreenVideoPlayer: i } = (0, C.g)(),
                        r = null == e || null == (t = e.meta) ? void 0 : t.artist,
                        a = null == e ? void 0 : e.infoLoadingState.isLoading,
                        n = null == e ? void 0 : e.infoLoadingState.isRejected,
                        s = (0, l.useCallback)((e) => (n ? {} : r && !a ? H({ artist: (0, j.E)(r) }, e) : void 0), [r, a, n]);
                    (0, R.C)(i.modal.isOpened ? null : s);
                })(z),
                ea.length && (0, l.use)(Promise.allSettled(ea)),
                z.fullTracksListSubpage.isRejected && !z.fullTracksListSubpage.isNotFound)
                    ? (0, r.jsx)(_.SomethingWentWrong, {})
                    : (null == (s = z.meta) ? void 0 : s.artist.isLegalRejected)
                      ? (0, r.jsx)(N.M, { modalState: W })
                      : (0, r.jsx)(y.n, {
                            pageId: f._Q.ARTIST_TRACKS,
                            pageEntityId: U,
                            children: (0, r.jsx)(h.h, {
                                scrollElement: J,
                                outerTitle: V({ id: 'page.artist-tracks-header' }, { artistName: z.commonSubPage.artistName }),
                                children: (0, r.jsxs)('div', {
                                    className: K().root,
                                    'data-test-id': u.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, r.jsx)(S.Y, {
                                            variant: S.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Q.canBack,
                                            children: (0, r.jsx)(p.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, r.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (D = z.meta) ? void 0 : D.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(w.$, {
                                            className: (0, n.$)(K().scrollContainer, K().important),
                                            customComponents: ei,
                                            itemContentCallback: (e) => {
                                                let t = z.fullTracksListSubpage.getTrackByIndex(e),
                                                    i = V({ id: 'loading-messages.entity-is-loading' }, { entityName: V({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, r.jsx)(g.K, {
                                                          track: t,
                                                          playContextParams: ee(e, {
                                                              contextData: { type: d.K.Artist, meta: { id: Number(U) }, from: X, utmLink: Z },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: F.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, r.jsx)(O.D, { isActive: !0, 'aria-label': i, variant: E.X.PLAYLIST, className: K().shimmerItem });
                                            },
                                            totalCount: null != (M = null == (P = z.fullTracksListSubpage.ids) ? void 0 : P.length) ? M : 0,
                                            onGetDataByRange: er,
                                            pageSize: 20,
                                            listClassName: K().content,
                                            itemClassName: K().item,
                                            totalRequests: z.fullTracksListSubpage.tracks.size,
                                            handleRef: q,
                                            context: { listAriaLabel: V({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: $,
                                            useWindowScroll: $,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var X = i(21438);
            let Z = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, X.L)(e)) || (0, a.notFound)(), (0, r.jsx)(V, { artistId: e }));
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => C });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(2058),
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
            let u = (e, t, i) => {
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
                d = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var m = i(62293),
                p = i(99839);
            let _ = (e) => e(new Date(), (0, p.m)());
            var h = i(51611),
                g = i(72288),
                v = i(11006),
                f = i.n(v),
                y = i(17392),
                x = i(29504),
                b = i(91292);
            let A = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(b.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: f().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, r.jsx)(b.N, { target: '_blank', href: a, className: f().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(A, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: a, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = d({ formatMessage: n, language: l, tld: i.tld, year: _(a) });
                return (0, r.jsx)(A, { className: t, data: o });
            });
            let C = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: p, user: v } = (0, g.g)(),
                    { formatDate: y, formatMessage: x } = (0, s.A)(),
                    { isEnabled: b } = null != (t = (0, o.P)()) ? t : {},
                    { language: A } = (0, h.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, r, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, r, a) },
                                    p = [s, o, d];
                                return (i && 'ru' === n && p.push(l), p.push(m), p);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: i, language: a, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: l.$3,
                        tld: p.tld,
                        language: A,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(y),
                    });
                return (0, r.jsx)(T, { className: (0, a.$)({ [f().root_withOffsetForDeeplink]: b }, i), data: k });
            });
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(53548),
                a = i(52150);
            function n() {
                return (0, r.useContext)(a.H);
            }
        },
        88349: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            let r = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                u = i(62837),
                d = i(72288),
                m = i(94398),
                p = i(17332),
                _ = i.n(p);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: p, variant: h, iconVariant: iconOverride, size: g = 'xxxs', ...v } = e,
                    { formatMessage: f } = (0, l.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, d.g)(),
                    [x, b] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    i && i().then(b);
                }, [i, n]);
                let {
                    iconVariant: A,
                    descriptionText: k,
                    isTooltipEnabled: T,
                    ariaLabel: C,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: a } = e,
                        n = (null == r ? void 0 : r.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case u.JU.E:
                                    return 'explicit';
                                case u.JU.AGE_12:
                                case u.JU.AGE_16:
                                case u.JU.AGE_18:
                                    return 'adult';
                                case u.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: n,
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !a,
                        ariaLabel: n.length > 0 ? n : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: x, isMobile: y }, f);
                return (0, r.jsx)(m.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === u.JU.SUBSTITUTED ? (0, r.jsxs)('svg', {
                            className: (0, a.$)(_().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': C,
                            style: { width: 'var(--ym-icon-size-'.concat(g, ')'), height: 'var(--ym-icon-size-'.concat(g, ')') },
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, r.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, r.jsx)(c.I, {
                            className: (0, a.$)(_().explicitMark, t),
                            'aria-label': C,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : A,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? g : g,
                            style: iconOverride ? { width: `var(--ym-icon-size-${g})`, height: `var(--ym-icon-size-${g})` } : undefined,
                            ...v,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91241: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            let r = 'ru';
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
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(88800),
                a = i(2058),
                n = i(29993),
                s = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                u = i(66943),
                d = i(96706),
                m = i(53548),
                p = i(79390),
                _ = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: g } = (0, a.A)(),
                    { notify: v } = (0, o.l)(),
                    f = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, s] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, n.c)(async (a) => {
                            let { album: n, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let m = { ...(0, d.HO)(n), url: n.url, isLiked: !n.isLiked };
                            s(!0);
                            let g = await n.toggleLike();
                            if ((s(!1), !c)) return;
                            let v = t.modal.isOpened;
                            g === p.f.OK
                                ? e((0, r.jsx)(_.T, { withLink: o, album: m }), { containerId: v ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: v ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: y } = (0, s.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? f({ album: e })
                              : void v((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var r = i(88800),
                a = i(98644),
                n = i(65724),
                s = i(53548),
                l = i(2058),
                o = i(19994),
                c = i(13797),
                u = i.n(c);
            let d = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, l.A)(),
                    c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(u().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: u().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: u().coverContainer, children: (0, r.jsx)(o.W, { isActive: t, className: u().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: u().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: u().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(o.W, { isActive: t, className: u().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                p = i.n(m);
            let _ = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, l.A)(),
                        c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(p().root, i),
                        children: [
                            (0, r.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, r.jsx)(o.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: p().textContainer, children: (0, r.jsx)(o.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(o.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, r.jsx)(_, { isActive: t, className: n });
                        case a.X.ALBUM:
                            return (0, r.jsx)(d, { isActive: t, className: n });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => n });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                n = () => (0, r.useContext)(a);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                a = i(17392),
                n = i(17610),
                s = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: i, title: l, placement: u = 'top', children: d } = e;
                    return (0, r.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: u,
                        children: [
                            d,
                            (0, r.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, r.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, r.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95330: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var r = i(39499),
                a = i(72542);
            let n = async (e) => e.then((e) => e.default),
                s = a.pE[a.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        a = t.get('ru');
                    if (i) return i();
                    if (a) return a();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var r = i(58217),
                a = i(85587);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                a = i(84961),
                n = i(42729),
                s = i(5048);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    l = (0, s.b)(t.type);
                return (0, r.jsx)(n.O, {
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
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 4596, 8380, 5108, 127, 1191, 1931, 7617, 3637, 9326, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 763, 2670, 7358,
            ],
            () => e((e.s = 30511)),
        ),
            (_N_E = e.O()));
    },
]);
