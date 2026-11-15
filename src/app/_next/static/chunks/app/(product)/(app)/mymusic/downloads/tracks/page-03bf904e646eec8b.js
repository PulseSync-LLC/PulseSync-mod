(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 4975],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(2058),
                s = i(61691);
            let n = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        1412: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)),
                Promise.resolve().then(i.bind(i, 20551)),
                Promise.resolve().then(i.bind(i, 8679)),
                Promise.resolve().then(i.bind(i, 64462)));
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var a = i(72288),
                s = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: r,
                } = (0, a.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = r.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var a = i(61691),
                s = i(15077);
            let n = (e) => {
                switch (e) {
                    case a._.PODCAST:
                        return s.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
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
            i.d(t, { K: () => x });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(17392),
                l = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                p = i(73805),
                _ = i(15232),
                g = i(56712),
                h = i(26243),
                v = i.n(h);
            let x = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: h,
                        withDNDBlock: x,
                        isDragging: T,
                        draggingClassName: N,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: E,
                        withDislike: b,
                        withTrailer: k = !0,
                        beforeTitle: O,
                        removeButtonAriaLabel: f,
                        hideControls: y,
                    } = e,
                    j = (0, c.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: I },
                    } = (0, d.g)(),
                    S = (0, l.X)(i.trackSource, { isMobile: I }),
                    P = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(g.C, {
                    className: (0, s.$)(h, { [v().trackWithDots]: x, [v().important]: x }),
                    track: i,
                    beforeBlock: x ? (0, a.jsx)(m.O, { className: (0, s.$)(v().dots, N), isDragging: T }) : void 0,
                    meta: (0, a.jsx)(_.j, { withArtistLink: S, beforeTitle: O, track: i, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: P,
                    controls: (0, a.jsx)(p.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: E,
                        withDislike: b,
                        withTrailer: k,
                        removeButtonAriaLabel: f,
                        hideControls: y,
                    }),
                    ...j,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
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
        11510: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => l });
            var a = i(53548),
                s = i(96820),
                n = i(29993),
                r = i(71978);
            let o = [s.DT.IDLE, s.DT.DOWNLOADED],
                l = (e) => {
                    var t;
                    let i = (0, r.j)(),
                        l = (0, n.c)((t) => {
                            let { state: i } = t;
                            o.includes(i.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = i.store) || t.tracks.events.on(s.je.STATE_CHANGED, e),
                            null == (a = i.store) || a.tracks.events.on(s.je.ENTITY_CHANGED, l),
                            () => {
                                var t, a;
                                (null == (t = i.store) || t.tracks.events.off(s.je.STATE_CHANGED, e),
                                    null == (a = i.store) || a.tracks.events.off(s.je.ENTITY_CHANGED, l));
                            }
                        );
                    }, [e, l, null == (t = i.store) ? void 0 : t.tracks.events]);
                };
        },
        13607: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(a || (a = {})));
        },
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var a = i(88800),
                s = i(65724),
                n = i(52300),
                r = i(30907),
                o = i.n(r);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
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
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(79070),
                l = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: a } = t,
                    s = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: a, link: s };
            };
            var _ = i(21010),
                g = i.n(_),
                h = i(17392),
                v = i(29504),
                x = i(91292),
                T = i(2058),
                N = i(87999),
                A = i(80643),
                C = i(78940),
                E = i(55693),
                b = i(58217);
            let k = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: s, captionSize: n = 'm', allArtistsTitle: r, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: g,
                            tooltipText: k,
                            isTooltipEnabled: O,
                            handleNavigate: f,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: s, withCustomTooltip: n } = e,
                                { formatMessage: r } = (0, T.A)(),
                                o = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: s } = e,
                                        n = a || i.name;
                                    return {
                                        ...i,
                                        title: s ? void 0 : n,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !a && s,
                                    };
                                })({ item: a, allArtistsTitle: s, withCustomTooltip: n }, r),
                                {
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, C.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, E.z)(),
                                _ = (0, A.S)(),
                                g = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), m(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: s, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: r } = a;
                                    return (0, b.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), r.isOpened && (a.reset(), r.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: g }),
                                v = (0, d.c)((e) => {
                                    (_({ to: N.AppScreen.ArtistScreen }), null == p || p(), h(e));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: t, allArtistsTitle: r, withCustomTooltip: o });
                    return p
                        ? (0, a.jsx)(x.N, {
                              ...p,
                              'aria-label': g,
                              className: i,
                              onClick: f,
                              title: _,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(l.m_, {
                                  enabled: O,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: m }),
                              }),
                          })
                        : (0, a.jsx)(l.m_, {
                              enabled: O,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, a.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: _,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                O = (e) => {
                    let { group: t, linkClassName: i, captionClassName: s, captionSize: n, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(k, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: n,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(k, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: s,
                                                captionSize: n,
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
            var f = i(88969),
                y = i(65453);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(y.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(g().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(f.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(61013),
                S = i(87819),
                P = i(40634),
                R = i(48468),
                L = i.n(R);
            let D = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, a.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, S.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: s, children: t }),
                            (0, a.jsx)(l.ZI, { className: L().tooltipContent, children: i.map((e) => (0, a.jsx)(P.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, r.forwardRef)((e, t) => (0, a.jsx)(D, { forwardRef: t, ...e }));
            var w = i(19934),
                F = i(70396),
                U = i.n(F);
            let B = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, T.A)();
                    return (0, a.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, s.$)(U().root, U().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(P.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [n, l] = (0, r.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = s.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, o.L)(() =>
                            (0, I.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, r.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(B, { artists: t, label: i }) : (0, a.jsx)(M, { artists: t, label: i })) : i;
                }),
                z = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: n,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: h,
                            variant: v = 'breakAll',
                            spoilerComponent: x,
                            ...T
                        } = e,
                        N = ((e) => {
                            var t, i, a;
                            let { separator: s, visibleArtistsCount: n, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                g = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (a = e.withCustomTooltip) || a,
                                v = (0, r.useRef)(null),
                                [x, T] = (0, r.useState)(!1),
                                {
                                    settings: { isMobile: N },
                                } = (0, u.g)(),
                                A = ((!N || 1 === _.length) && m) || !m,
                                C = ((e, t) => {
                                    var i, a, s;
                                    let n = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        r = null == (a = null == t ? void 0 : t.withLink) || a,
                                        o = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: s, isFirst: n } = t;
                                                return {
                                                    primary: p(e, { withLink: a, separator: n ? void 0 : s }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return p(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: r && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: s, visibleArtistsCount: x ? void 0 : n, withComposer: l, withLink: !!A && o, artistIdWithoutLink: c }),
                                E = g ? C.allArtistsTitle : '',
                                b = (0, d.c)((e) => {
                                    (T(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: E,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!E && h && !m && !N,
                                title: !E || h || m ? void 0 : E,
                            };
                        })(T),
                        A = (0, o.L)(() =>
                            N.hiddenArtistsCount <= 0
                                ? null
                                : (0, r.isValidElement)(x)
                                  ? x
                                  : (0, a.jsx)(j, { spoilerClassName: n, spoilerArtistsCount: N.hiddenArtistsCount, handleOnSpoilerClick: N.handleOnSpoilerClick }),
                        ),
                        C = (0, a.jsx)(l.m_, {
                            referenceRef: N.labelRef,
                            enabled: N.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: N.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(g().root, g()['root_variant_'.concat(v)], { [g().root_clamp]: i && i > 0, [g().ellipsis]: !i }, t),
                                title: N.title,
                                children: [
                                    N.groups.map((e) =>
                                        (0, a.jsx)(
                                            O,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: h,
                                                allArtistsTitle: N.allArtistsTitle,
                                                withCustomTooltip: N.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return N.withContextMenu ? (0, a.jsx)(W, { labelRef: N.labelRef, artists: N.artists, label: C }) : C;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, a, s) {
                return JSON.stringify(e, i(t, s), a);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    a = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + a.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (s, n) {
                        if (i.length > 0) {
                            var r = i.indexOf(this);
                            (~r ? i.splice(r + 1) : i.push(this), ~r ? a.splice(r, 1 / 0, s) : a.push(s), ~i.indexOf(n) && (n = t.call(this, s, n)));
                        } else i.push(n);
                        return null == e ? n : e.call(this, s, n);
                    }
                );
            }
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => k });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                p = i(13946),
                _ = i(55693),
                g = i(72288),
                h = i(24548),
                v = i(85587),
                x = i(90224),
                T = i(91292),
                N = i(7608),
                A = i(6667),
                C = i(85463),
                E = i(65462),
                b = i.n(E);
            let k = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: E,
                        withExplicitMark: k,
                        withSecondaryColor: O,
                        captionSize: f = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: I,
                        artistsClassName: S,
                        ignoreDislikedStyles: P,
                        withCustomTooltip: R = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: D,
                        beforeTitle: M,
                        withArtistLink: w,
                        variant: F,
                        withTrackLink: U,
                        afterTitle: B,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: z } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, _.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, g.g)(),
                    G = (0, A.$)({ withCustomTooltip: R }),
                    K = (0, l.useSearchParams)(),
                    X = (0, N.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: E,
                        withTrackLink: U,
                        withArtistLink: w,
                        variant: F,
                        withExplicitMark: k,
                        query: D ? Object.fromEntries(K) : void 0,
                    }),
                    {
                        displayTitle: V,
                        ariaLabel: q,
                        tooltipText: Z,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var s, n;
                        let { canEnableCustomTooltip: r, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (s = t.version) ? s : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: r && !o,
                            titleAttribute: !r && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: r ? void 0 : t.version,
                        };
                    })(n, X, { canEnableCustomTooltip: G, isMobile: Y }, z),
                    et = (0, C.O)({ track: n, onNavigate: H, withSavingQueryParams: D, entityType: v.n.TRACK }),
                    ei = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, s.$)(b().text, b().title),
                                    type: 'entity',
                                    size: f,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V,
                                }),
                            }),
                        [f, V, Z, ee],
                    ),
                    ea = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, s.$)(b().text, b().title),
                                      type: 'entity',
                                      size: f,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: V,
                                  }),
                              })
                            : X.link
                              ? (0, a.jsx)(T.N, {
                                    onClick: et,
                                    className: b().albumLink,
                                    href: X.link.href,
                                    'aria-label': q,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    es = (0, r.useMemo)(() => +!!L, [L]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(b().root, { [b().root_disabled]: !n.isAvailable, [b().root_disliked]: n.isDisliked && !P, [b().root_withSecondaryColor]: O }, t),
                    children: (0, a.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(b().titleContainer, { [b().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, s.$)(b().text, I),
                                        type: 'entity',
                                        size: f,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ea,
                                            X.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, s.$)(b().text, b().version),
                                                    type: 'entity',
                                                    size: f,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, a.jsx)(x.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: y,
                                            variant: X.explicitMark,
                                            className: b().explicitMark,
                                            trackId: n.id,
                                        }),
                                    B,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, a.jsx)(p.i, {
                                    className: (0, s.$)(b().text, { [b().artists]: L }, S, I),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, s.$)(b().text, b().link),
                                    captionClassName: (0, s.$)(b().text, b().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: es,
                                    captionSize: f,
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
        17017: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { Z: () => a }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { T: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(88800),
                s = i(53548),
                n = i(17392),
                r = i(29504),
                o = i(15526),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, a.jsx)(
                            r.HL,
                            {
                                className: l().descriptionTextItem,
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
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => s }), i(46606));
            var a = i(91136);
            class s extends a.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
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
        23877: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { Q: () => s, c: () => a }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(a || (a = {})));
            let s = { [a.ERROR]: 'error', [a.WARNING]: 'warn', [a.INFO]: 'info', [a.DEBUG]: 'debug', [a.TRACE]: 'trace' };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
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
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => R });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(87999),
                p = i(47149),
                _ = i(84423),
                g = i(89846),
                h = i(64543),
                v = i(63582);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, g.g)(),
                        { screen: a } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                T = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, g.g)(),
                        { screen: s } = (0, h.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !a || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: s.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(i, t);
                    }, [i, e, a, null == s ? void 0 : s.pageId]);
                });
            var N = i(44230),
                A = i(4370),
                C = i(72288),
                E = i(97956),
                b = i(56248),
                k = i(90688),
                O = i(78940);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var y = i(96856),
                j = i.n(y);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: r } = (0, C.g)(),
                    { contentRef: o } = (0, N.g)(),
                    d = (0, O.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(j().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(b.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(j().navigation, { [j().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(j().content, { [j().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(k._V, { className: j().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(9184),
                P = i.n(S);
            let R = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: m } = (0, o.A)(),
                    p = (0, r.useContext)(C.P),
                    _ = null == p ? void 0 : p.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    g = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                T(g);
                let { sendRefreshEvent: h } = x(),
                    v = (0, r.useCallback)(() => {
                        (h(), (window.location.href = A.Z.main.href));
                    }, [h]),
                    { contentRef: k } = (0, N.g)();
                return _
                    ? (0, a.jsx)(I, { className: t, withBackwardControl: i, onBack: n })
                    : (0, a.jsxs)('div', {
                          className: (0, s.$)(P().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !k }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, s.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, s.$)(P().title, P().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, s.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: v,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        35606: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (0, i(53548).createContext)(void 0);
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => s });
            var a = i(67174);
            let s = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36236: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var a = i(53548);
            i(30282);
            var s = i(58390);
            let n = (e) => {
                let t = (0, s.usePathname)(),
                    [i, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]));
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => s });
            var a = i(67174);
            let s = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => T });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(87999),
                l = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                _ = i(29504),
                g = i(78940),
                h = i(72288),
                v = i(80932),
                x = i.n(v);
            let T = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, h.g)(),
                    v = (0, g.Z)(t.url),
                    N = (0, l.S)(),
                    A = (0, r.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(T, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, d.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), N({ to: o.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.Dr, {
                            className: (0, s.$)(x().root, i),
                            onClick: C,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(p.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, a.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42078: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
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
                })(a || (a = {})));
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var a = i(23877),
                s = i(74021);
            class n extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= a.c.INFO && this.logToConsole(a.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= a.c.DEBUG && this.logToConsole(a.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= a.c.TRACE && this.logToConsole(a.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= a.c.WARNING && this.logToConsole(a.c.WARNING, e, t), this.sendToErrorBooster(a.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= a.c.ERROR && this.logToConsole(a.c.ERROR, e, t), this.sendToErrorBooster(a.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(a.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let s = a.Q[e];
                    console[s](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(88800),
                s = i(84961),
                n = i(17392),
                r = i(52300),
                o = i(19934),
                l = i(108),
                c = i(72288);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    g = (0, l.$)(t, u);
                return (0, a.jsx)(o.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, a.jsx)(r.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: g,
                });
            });
        },
        46606: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { X: () => a }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
        },
        47149: (e, t, i) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: i = '',
                        mainObjectType: n = s.DomainObjectType.NonApplicable,
                        mainObjectId: r = '',
                        tabId: o = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: d = '',
                    } = t,
                    u = (0, a.makeMetaParams)(1),
                    m = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, tabId: o, tabPos: l, isTabSelectedByDefault: c, viewUuid: d, _meta: u };
                e.trackEvent('Screen.Opened', m);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: u = !1,
                            viewUuid: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(3),
                        _ = {
                            ...t,
                            pageStyle: i,
                            pagePlacement: n,
                            skeletonId: r,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: u,
                            viewUuid: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Opened', _);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: i = '',
                            mainObjectType: n = s.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, a.makeMetaParams)(1),
                        u = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Closed', u);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: u = !1,
                        } = t,
                        m = (0, a.makeMetaParams)(3),
                        p = {
                            ...t,
                            pageStyle: i,
                            pagePlacement: n,
                            skeletonId: r,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: u,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', p);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: u = !1,
                            viewUuid: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(4),
                        _ = {
                            ...t,
                            pageStyle: i,
                            pagePlacement: n,
                            skeletonId: r,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: u,
                            viewUuid: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', _);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: i = '',
                            mainObjectType: n = s.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, a.makeMetaParams)(1),
                        u = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Started', u);
                }),
                (t.BP = function (e, t) {
                    let {
                            entityPosX: i = 1,
                            entityPosY: n = 1,
                            objectPosX: r = 0,
                            objectPosY: o = 0,
                            streamStartTrigger: l = s.StreamStartTriggers.UserAction,
                            pageStyle: c = s.PageStyles.Fullscreen,
                            pagePlacement: d = s.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: m = s.DomainObjectType.NonApplicable,
                            mainObjectId: p = '',
                            tabId: _ = '',
                            tabPos: g = 0,
                            isTabSelectedByDefault: h = !1,
                        } = t,
                        v = (0, a.makeMetaParams)(5),
                        x = {
                            ...t,
                            entityPosX: i,
                            entityPosY: n,
                            objectPosX: r,
                            objectPosY: o,
                            streamStartTrigger: l,
                            pageStyle: c,
                            pagePlacement: d,
                            skeletonId: u,
                            mainObjectType: m,
                            mainObjectId: p,
                            tabId: _,
                            tabPos: g,
                            isTabSelectedByDefault: h,
                            _meta: v,
                        };
                    e.trackEvent('Screen.Started', x);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: i = '',
                            mainObjectType: n = s.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, a.makeMetaParams)(1),
                        u = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.Navigated', u);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: u = !1,
                            deepLink: m = '',
                        } = t,
                        p = (0, a.makeMetaParams)(4),
                        _ = {
                            ...t,
                            pageStyle: i,
                            pagePlacement: n,
                            skeletonId: r,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: u,
                            deepLink: m,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Navigated', _);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: i = '',
                            mainObjectType: n = s.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        d = (0, a.makeMetaParams)(1),
                        u = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: d };
                    e.trackEvent('Screen.ActionPerformed', u);
                }),
                (t.rw = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: d = 0,
                            isTabSelectedByDefault: u = !1,
                        } = t,
                        m = (0, a.makeMetaParams)(4),
                        p = {
                            ...t,
                            pageStyle: i,
                            pagePlacement: n,
                            skeletonId: r,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: d,
                            isTabSelectedByDefault: u,
                            _meta: m,
                        };
                    e.trackEvent('Screen.ActionPerformed', p);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: i = s.PageStyles.Fullscreen,
                            pagePlacement: n = s.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        c = (0, a.makeMetaParams)(1),
                        d = { ...t, pageStyle: i, pagePlacement: n, skeletonId: r, mainObjectType: o, mainObjectId: l, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', d);
                }));
            let a = i(59203),
                s = i(87999);
        },
        47580: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (e) => e.map((e) => e.name).join(', ');
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        53534: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        54721: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => m });
            var a = i(53548),
                s = i(47149),
                n = i(63582),
                r = i(59791),
                o = i(7695),
                l = i(53534),
                c = i(89846),
                d = i(64543),
                u = i(56374);
            let m = (0, n.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, a.useContext)(r.I),
                    { hash: t } = (0, c.g)(),
                    { screen: i, tab: n } = (0, d.j)(),
                    m = (0, a.useContext)(l.k)?.session,
                    { current: p } = (0, a.useRef)(Symbol()),
                    _ = !!i,
                    g = (a) => {
                        if (!e || !m || !i?.pageId || void 0 === t || !_) return !1;
                        let r = {
                            hash: t,
                            pageId: i.pageId,
                            pageStyle: i.pageStyle,
                            pagePlacement: i.pagePlacement,
                            mainObjectType: i.mainObjectType,
                            mainObjectId: i.mainObjectId,
                            skeletonId: i.skeletonId,
                            viewUuid: i.screenViewUuid,
                            ...(n ?? o.Ve),
                        };
                        return (a ? m.open(p, () => (0, s.Fn)(e, r)) : m.close(p, () => (0, s.PO)(e, r)), !0);
                    },
                    [h, v] = (0, a.useState)(() => ({ session: m, send: g, opened: !1 })),
                    x = h;
                (h.session !== m && v((x = { session: m, send: g, opened: !1 })),
                    (0, a.useInsertionEffect)(() => {
                        _ && void 0 !== t && (x.send = g);
                    }, [x, t, _, g]));
                let T = (0, u.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, a.useEffect)(
                    () => (
                        T(x, !0),
                        () => {
                            (x.opened && T(x, !1), x.session?.release(p));
                        }
                    ),
                    [p, x, T],
                ),
                    (0, a.useEffect)(() => {
                        T(x, !0);
                    }, [x, t, _, T]));
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(88800),
                s = i(53548),
                n = i(2058),
                r = i(17392),
                o = i(96817),
                l = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: g,
                            forwardRef: h,
                            style: v,
                            children: x,
                        } = e,
                        { formatMessage: T } = (0, n.A)(),
                        N = T({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(o.$, {
                        className: g,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': N,
                        onClick: p,
                        ref: h,
                        icon: (0, a.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => E });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(62414),
                l = i(33979),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                m = i(9618),
                p = i(4795),
                _ = i(55693),
                g = i(7123),
                h = i(72288),
                v = i(8990),
                x = i(2058),
                T = i(47580),
                N = i(95993),
                A = i(27157),
                C = i.n(A);
            let E = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: A,
                        beforeBlock: E,
                        controls: b,
                        playButtonCellRender: k,
                        withLightning: O,
                        isPlaying: f,
                        isCurrent: y,
                        togglePlay: j,
                        restartPlay: I,
                        onPlayClick: S,
                        playButtonIconSize: P,
                        skipFreemiumCloseListeningPaywall: R = !1,
                        ...L
                    } = e,
                    { shouldShowBuySubscriptionModal: D, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: w,
                        fullscreenPlayer: F,
                        settings: { isMobile: U },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    H = (0, o.D)(),
                    Y = (0, l.g)(),
                    $ = (0, u.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, x.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: s } = t,
                                n = (0, T.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, s && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: O, track: n }),
                    K = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    X = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    V = n.isAvailable && D && !X,
                    q = (0, p.N)(),
                    Z = n.isAvailable && q && !X && !R,
                    Q = (0, N.w)({ track: n, callback: j }),
                    J = (0, c.c)(() => {
                        w.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, N.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, _.z)(),
                    [ei, ea] = (0, r.useState)(!1),
                    es = (0, c.c)(() => {
                        if (!$()) {
                            if (V) return void M();
                            if (Z) return void z.open();
                            (ei || f || (ea(!0), null == et || et()), Q(), f || Y(), null == S || S(!f));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (f) return void I();
                        es();
                    }),
                    er = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (D && n.isAvailableOnlyForPlus && M(), q && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (V) return void M();
                        let t = !U && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !F.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, d.P)(e, C().ripple), U)
                              ? void es()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !F.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    eo = null == k ? void 0 : k({ onPlayButtonClick: es, isPlaying: f, isCurrent: y, isLoading: K, playButtonIconSize: P });
                return (0, a.jsxs)(v.C, {
                    ref: H,
                    'aria-label': G,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: er,
                    className: (0, s.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: y && U }, i),
                    ...L,
                    children: [E, eo, A, b],
                });
            });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(4086),
                s = i(41928);
            let n = () => {
                let e = (0, s.N)(),
                    t = e.get(a.$I),
                    i = e.get(a.EN),
                    n = e.get(a.N1),
                    r = e.get(a._1),
                    o = e.get(a.V3),
                    l = e.get(a.Lb),
                    c = e.get(a.wK),
                    d = e.get(a.tz),
                    u = e.get(a.$8),
                    m = e.get(a.Oo),
                    p = e.get(a.X4),
                    _ = e.get(a.O9),
                    g = e.get(a.E),
                    h = e.get(a.wH),
                    v = e.get(a.ok),
                    x = e.get(a.X8),
                    T = e.get(a.yq),
                    N = e.get(a.NN),
                    A = e.get(a.qN),
                    C = e.get(a.ro),
                    E = e.get(a.nM),
                    b = e.get(a.Ut),
                    k = e.get(a.K1),
                    O = e.get(a.eu),
                    f = e.get(a.SD),
                    y = e.get(a.aE),
                    j = e.get(a.ki),
                    I = e.get(a.c9),
                    S = e.get(a.en),
                    P = e.get(a.jQ),
                    R = e.get(a.cZ),
                    L = e.get(a.Zl),
                    D = e.get(a.CN),
                    M = e.get(a.P1),
                    w = e.get(a.zj),
                    F = e.get(a.re),
                    U = e.get(a.JM),
                    B = e.get(a.Lk),
                    W = e.get(a.$$),
                    z = e.get(a.sv),
                    H = e.get(a.gd),
                    Y = e.get(a.Ez),
                    $ = e.get(a.u2),
                    G = e.get(a.TD),
                    K = e.get(a.dh),
                    X = e.get(a.LC),
                    V = e.get(a.PL),
                    q = e.get(a.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: n,
                    usersResource: r,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: p,
                    artistsResource: _,
                    slidesResource: g,
                    redAlertResource: h,
                    rotorResource: v,
                    waveResource: x,
                    searchResource: T,
                    searchPlaylistResource: N,
                    playlistResource: A,
                    playlistsResource: C,
                    pinResource: E,
                    metatagsResource: b,
                    tagResource: k,
                    feedResource: O,
                    wizard3Resource: f,
                    pinsResource: y,
                    musicHistoryResource: j,
                    dynamicPagesResource: I,
                    chartResource: S,
                    clipsResource: P,
                    lyricViewsResource: R,
                    nonMusicResource: L,
                    donationResource: D,
                    loaderResource: M,
                    lumenResource: w,
                    prefixlessResource: F,
                    streamsResource: U,
                    filtersResource: B,
                    ugcResource: W,
                    collectionResource: z,
                    adsResource: H,
                    personalResource: Y,
                    familyResource: $,
                    childrenLandingResource: G,
                    promoResource: K,
                    telemetryResource: X,
                    labelsResource: V,
                    concertsResource: q,
                    wordsResource: e.get(a.dA),
                    wheelResource: e.get(a.$Y),
                };
            };
        },
        59203: (e, t) => {
            'use strict';
            var i;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, i) {
                    return {
                        trackEvent: (a, s) => {
                            let n = { ...s, ...t.getGlobalParams(), ...i.getPlatformParams() };
                            e.trackEvent(a, n);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(i || (t.MiniappConfig = i = {})));
        },
        59791: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => r });
            var a = i(88800);
            i(30282);
            var s = i(11006),
                n = i.n(s);
            let r = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var a = i(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: s, userRegion: n } = e;
                return 'ru' === n && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        63582: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s, n: () => a });
            let a = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e }),
                s = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e });
        },
        64462: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => I }));
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(88969);
            i(30282);
            var o = i(87999),
                l = i(54721),
                c = i(76903),
                d = i(17392),
                u = i(96817),
                m = i(52300),
                p = i(66719),
                _ = i(29504),
                g = i(98427),
                h = i(53548),
                v = i(47149),
                x = i(84423),
                T = i(89846);
            let N = (0, i(63582).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let i = null == (t = (0, x.s)()) ? void 0 : t.evgenInstance,
                    { hash: a } = (0, T.g)();
                return {
                    handleNavigateToMain: (0, h.useCallback)(() => {
                        if (!i || !a) return;
                        let t = {
                            hash: a,
                            pageId: o.AppScreen.PageNotFoundScreen,
                            pageStyle: o.PageStyles.Fullscreen,
                            pagePlacement: o.PagePlacements.Fullscreen,
                            mainObjectType: o.DomainObjectType.NonApplicable,
                            mainObjectId: o.DomainObjectType.NonApplicable,
                            from: o.AppScreen.PageNotFoundScreen,
                            to: o.AppScreen.MainScreen,
                            entityType: o.EntityTypes.Error,
                            entityId: o.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, v.Mu)(i, t), e());
                    }, [i, a, e]),
                };
            });
            var A = i(44230),
                C = i(4370),
                E = i(78940),
                b = i(95210),
                k = i(56248),
                O = i(72288),
                f = i(26827),
                y = i.n(f);
            let j = (0, n.PA)((e) => {
                    let { className: t, title: i, description: n, iconVariant: o = 'musicLogo', iconClassName: c, iconSize: g } = e,
                        { contentRef: v, setContentScrollRef: x } = (0, A.g)(),
                        T = (0, E.Z)(C.Z.main.href);
                    (0, l.u)();
                    let { handleNavigateToMain: f } = N(T);
                    return (
                        (0, b.N)(!0),
                        !(function () {
                            let { location: e } = (0, O.g)();
                            (0, h.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, a.jsxs)(p.N, {
                            className: (0, s.$)(y().root, { [y().root_desktop]: !v }, t),
                            containerClassName: y().container,
                            ref: x,
                            'data-test-id': d.e8.notFound.NOT_FOUND,
                            children: [
                                (0, a.jsx)(k.L, { withBackwardFallback: '/', className: y().navigation, withForwardControl: !1 }),
                                (0, a.jsxs)('div', {
                                    className: y().content,
                                    children: [
                                        (0, a.jsx)(m.I, { className: (0, s.$)(y().icon, c), variant: o, size: g }),
                                        (0, a.jsx)(_.DZ, {
                                            className: (0, s.$)(y().title, y().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': d.e8.notFound.NOT_FOUND_TITLE,
                                            children: i || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, a.jsx)(_.HL, {
                                            className: (0, s.$)(y().text, y().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: n || (0, a.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                            onClick: f,
                                            className: y().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, a.jsx)(_.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, a.jsx)(r.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                I = (e) =>
                    (0, a.jsx)(c.a, {
                        pageId: o.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: g.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: o.PageStyles.Fullscreen,
                        pagePlacement: o.PagePlacements.Fullscreen,
                        mainObjectType: o.DomainObjectType.NonApplicable,
                        mainObjectId: o.DomainObjectType.NonApplicable,
                        children: (0, a.jsx)(j, { ...e }),
                    });
        },
        64543: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => c });
            var a = i(53548),
                s = i(99875),
                n = i(36236),
                r = i(66109),
                o = i(53534),
                l = i(79045);
            let c = () => {
                let e = (0, a.useContext)(s.p),
                    t = (0, a.useContext)(n.S),
                    i = (0, a.useContext)(r.l),
                    c = (0, a.useContext)(o.k),
                    d = c?.isReady ? c.scope : null,
                    u = (0, a.useContext)(l.F),
                    m = e?.scope ?? null,
                    p = i?.scope ?? null;
                return (0, a.useMemo)(() => ({ block: m, filter: t, object: p, screen: d, tab: u }), [m, t, p, d, u]);
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var a = i(4086),
                s = i(41928),
                n = i(44084);
            let r = new WeakMap(),
                o = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = r.get(e);
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
                        return (r.set(e, i), i);
                    })((0, s.N)().get(a.Zf));
        },
        66109: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => L });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(2058),
                l = i(87999),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                p = i(29504),
                _ = i(42174),
                g = i(96817);
            let h = (e) => {
                let { className: t, variant: i = 'text', onClick: s, iconClassName: n, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: p } = (0, o.A)(),
                    _ = null != m ? m : p({ id: 'play-queue.delete-from-queue' }),
                    h = (0, r.useCallback)(
                        (e) => {
                            (null == s || s(), e.stopPropagation());
                        },
                        [s],
                    );
                return (0, a.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': _,
                    onClick: h,
                    icon: (0, a.jsx)(u.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = i(5407),
                x = i(57934),
                T = i(55693),
                N = i(72288),
                A = i(49738),
                C = i(56446),
                E = i(64546),
                b = i(29831),
                k = i(30123),
                O = i(54965),
                f = i(1829),
                y = i(82092),
                j = i.n(y),
                I = i(79262),
                S = i(41867),
                P = i.n(S);
            let R = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                L = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: g,
                            ignoreDislikedStyles: y,
                            onLikeClick: I,
                            utmLink: S,
                            withSecondaryColor: P,
                            handleRemove: L,
                            withTrailer: D = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: w,
                            hideControls: F,
                        } = e,
                        { user: U, trailer: B } = (0, N.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: z } = (0, T.z)(),
                        [H, Y] = (0, r.useState)(!1),
                        [$, G] = (0, r.useState)(!1),
                        K = (0, v.P)(),
                        X = (0, _.K)(n),
                        {
                            duration: V,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: s, isUGC: n } = t,
                                r = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / k.k7);
                                              return (0, O.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== r ? { text: r, ariaLabel: (0, b.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: s ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: g, isUGC: n.isUGC }, W),
                        Q = (0, x.F)(),
                        J = U.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !F,
                        et = (0, d.c)(async () => {
                            (H || n.isLiked || (Y(!0), null == z || z()), await X(), null == I || I(n.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), K())) return void e.preventDefault();
                            (B.openTrackTrailer(n.id), Q(l.DomainObjectType.Track, n.id));
                        }),
                        es = (0, r.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(f._, {
                                        track: n,
                                        open: $,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: S,
                                        className: (0, s.$)(j().contextMenu, { [j().contextMenu_visible]: $ }),
                                        handleRemove: L,
                                        withTrailer: D,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, L, $, ee, D, n, S]);
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(j().root, j().controls, i, {
                            [j().controls_dislikedControls]: n.isDisliked,
                            [j().controls_dislikedColors]: n.isDisliked && !y,
                            [j().controls_disabled]: !n.isAvailable,
                            [j().root_withSecondaryColor]: P,
                        }),
                        children: [
                            q && (0, a.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: j().lightning, variant: 'lightning' }),
                            Z &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, s.$)(j().item, j().downloadIcon), children: (0, a.jsx)(R, { track: n }) }),
                            L && !F && (0, a.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(j().item, j().removeButton), onClick: L, ariaLabel: w }),
                            ee &&
                                (0, a.jsx)(E.WithOffline, {
                                    fallback: (0, a.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, s.$)(j().item, j().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, a.jsx)(E.WithOffline, {
                                    fallback: (0, a.jsx)(C.k, {
                                        className: (0, s.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    null !== V &&
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(j().duration, { [j().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => l });
            var a = i(14567),
                s = i(243),
                n = i(62151),
                r = i(33396);
            let o = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, s) {
                    let n,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, r.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (n = this.obfuscateData(l)), s) ? `${o} ${a(n)}` : [o, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, n.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var a = i(88800),
                s = i(53548),
                n = i(53534),
                r = i(63582),
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
                                a = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && a());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), a());
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
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, s.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== i ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let s = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, s) : null, session: s };
                        return (u(o), (0, a.jsx)(n.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== r ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...l, input: t, isReady: r, scope: r ? i.createScreenScope(t, l.session) : null };
                        return (u(s), (0, a.jsx)(n.k, { value: s, children: e }));
                    }
                    return (0, a.jsx)(n.k, { value: l, children: e });
                },
            );
        },
        79045: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => a });
            let a = (0, i(53548).createContext)(null);
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
        84423: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => n });
            var a = i(53548),
                s = i(59791);
            let n = () => {
                let e = (0, a.useContext)(s.I);
                return (0, a.useMemo)(() => (e ? { evgenInstance: e } : null), [e]);
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => k });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(2058),
                o = i(30282),
                l = i(94144),
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
                    let { formatMessage: t, language: i, tld: a, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                p = i(99839);
            let _ = (e) => e(new Date(), (0, p.m)());
            var g = i(51611),
                h = i(72288),
                v = i(11006),
                x = i.n(v),
                T = i(17392),
                N = i(29504),
                A = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(x().copyrights, t),
                        'data-test-id': T.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': T.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': T.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: x().list,
                                'data-test-id': T.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: s } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: s, className: x().link, 'data-test-id': T.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': T.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(x().root, x().important, t),
                        'data-test-id': T.S7.FOOTER,
                        children: [(0, a.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: s, formatMessage: n } = (0, r.A)(),
                    { language: o } = (0, g.h)(),
                    l = u({ formatMessage: n, language: o, tld: i.tld, year: _(s) });
                return (0, a.jsx)(C, { className: t, data: l });
            });
            let k = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: p, user: v } = (0, h.g)(),
                    { formatDate: T, formatMessage: N } = (0, r.A)(),
                    { isEnabled: A } = null != (t = (0, l.P)()) ? t : {},
                    { language: C } = (0, g.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: s, tld: n, userRegion: r, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: s, userRegion: n } = e,
                                    r = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, s) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, s) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, s) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, s) },
                                    p = [r, l, u];
                                return (i && 'ru' === n && p.push(o), p.push(m), p);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: n, userRegion: r }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: n, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: o.$3,
                        tld: p.tld,
                        language: C,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(T),
                    });
                return (0, a.jsx)(b, { className: (0, s.$)({ [x().root_withOffsetForDeeplink]: A }, i), data: E });
            });
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(53548),
                s = i(52150);
            function n() {
                return (0, a.useContext)(s.H);
            }
        },
        88969: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var a = i(88092),
                s = i(53548),
                n = i(84014),
                r = i(2058);
            function o(e) {
                var t = (0, r.A)(),
                    i = t.formatMessage,
                    a = t.textComponent,
                    n = void 0 === a ? s.Fragment : a,
                    o = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    d = e.values,
                    u = e.children,
                    m = e.tagName,
                    p = void 0 === m ? n : m,
                    _ = i({ id: o, description: l, defaultMessage: c }, d, { ignoreTag: e.ignoreTag });
                return 'function' == typeof u ? u(Array.isArray(_) ? _ : [_]) : p ? s.createElement(p, null, _) : s.createElement(s.Fragment, null, _);
            }
            o.displayName = 'FormattedMessage';
            var l = s.memo(o, function (e, t) {
                var i = e.values,
                    s = (0, a.__rest)(e, ['values']),
                    r = t.values,
                    o = (0, a.__rest)(t, ['values']);
                return (0, n.bN)(r, i) && (0, n.bN)(s, o);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let c = l;
        },
        89846: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => n });
            var a = i(53548),
                s = i(35606);
            let n = () => ({ hash: (0, a.useContext)(s.m) });
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => a.X, m5: () => s.m });
            var a = i(46606),
                s = i(91136),
                n = i(19840);
            i(17017);
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => g });
            var a = i(88800),
                s = i(65724),
                n = i(84961),
                r = i(53548),
                o = i(2058),
                l = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                _ = i.n(p);
            let g = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: p, variant: g, iconVariant: iconOverride, size: h = 'xxxs', ...v } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: T },
                    } = (0, u.g)(),
                    [N, A] = (0, r.useState)(null);
                (0, r.useEffect)(() => {
                    i && i().then(A);
                }, [i, n]);
                let {
                    iconVariant: C,
                    descriptionText: E,
                    isTooltipEnabled: b,
                    ariaLabel: k,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: s } = e,
                        n = (null == a ? void 0 : a.join('\n')) || '';
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
                        descriptionText: n,
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !s,
                        ariaLabel: n.length > 0 ? n : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: g, descriptionTexts: N, isMobile: T }, x);
                return (0, a.jsx)(m.k, {
                    description: E,
                    placement: 'bottom-start',
                    enabled: b,
                    children: (0, a.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        g === d.JU.SUBSTITUTED ? (0, a.jsxs)('svg', {
                            className: (0, s.$)(_().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': k,
                            style: { width: 'var(--ym-icon-size-'.concat(h, ')'), height: 'var(--ym-icon-size-'.concat(h, ')') },
                            ...v,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, a.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, a.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, a.jsx)(c.I, {
                            className: (0, s.$)(_().explicitMark, t),
                            'aria-label': k,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : C,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? h : h,
                            style: iconOverride ? { width: `var(--ym-icon-size-${h})`, height: `var(--ym-icon-size-${h})` } : undefined,
                            ...v,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: s = {}, ...n } = t,
                        r = e || 'Internal error';
                    (super(r, n), (this.message = r), (this.code = i), (this.data = s), (this.stack = Error(r).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
            class s extends a {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var a = i(88800),
                s = i(2058),
                n = i(29993),
                r = i(87762),
                o = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                _ = i(96295);
            let g = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: g },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, s.A)(),
                    { notify: v } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, r] = (0, m.useState)(!1),
                            { formatMessage: g } = (0, s.A)();
                        return (0, n.c)(async (s) => {
                            let { album: n, withLink: l = !0, withNotification: c = !0 } = s;
                            if (i) return;
                            let m = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                            r(!0);
                            let h = await n.toggleLike();
                            if ((r(!1), !c)) return;
                            let v = t.modal.isOpened;
                            h === p.f.OK
                                ? e((0, a.jsx)(_.T, { withLink: l, album: m }), { containerId: v ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, a.jsx)(d.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: v ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: T } = (0, r.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return g({ pageAlbumId: T, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void v((0, a.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var a = i(88800),
                s = i(98644),
                n = i(65724),
                r = i(53548),
                o = i(2058),
                l = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: s } = (0, o.A)(),
                    c = (0, r.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                p = i.n(m);
            let _ = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: s } = (0, o.A)(),
                        c = (0, r.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(p().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: p().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case s.X.PLAYLIST:
                            return (0, a.jsx)(_, { isActive: t, className: n });
                        case s.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => n });
            var a = i(53548);
            let s = (0, a.createContext)(null),
                n = () => (0, a.useContext)(s);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(88800),
                s = i(17392),
                n = i(17610),
                r = i(29504),
                o = i(37438),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(n.ZI, {
                                className: l().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, a.jsx)(r.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, a.jsx)(r.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(58217),
                s = i(85587);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: s.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var a = i(88800),
                s = i(84961),
                n = i(42729),
                r = i(5048);
            let o = (0, s.PA)((e) => {
                let { album: t, closeToast: i, withLink: s } = e,
                    o = (0, r.b)(t.type);
                return (0, a.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: s,
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
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        99875: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            let a = (0, i(53548).createContext)(null);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 5038, 7065, 4700, 3248, 1147, 1191, 7072, 505, 4555, 8655, 2691, 5188, 5442, 6706, 4771, 1311, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283,
                1800, 5151, 7746, 1223, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 6820, 389, 9306, 763, 2670, 7358,
            ],
            () => e((e.s = 1412)),
        ),
            (_N_E = e.O()));
    },
]);
