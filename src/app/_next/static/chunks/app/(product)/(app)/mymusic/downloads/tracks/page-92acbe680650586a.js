(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287],
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
            i.d(t, { K: () => v });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(17392),
                l = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                _ = i(13619),
                m = i(73805),
                p = i(15232),
                h = i(56712),
                g = i(26243),
                x = i.n(g);
            let v = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: g,
                        withDNDBlock: v,
                        isDragging: T,
                        draggingClassName: N,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: E,
                        handleRemove: C,
                        withDislike: b,
                        withTrailer: k = !0,
                        beforeTitle: O,
                        removeButtonAriaLabel: f,
                        hideControls: I,
                    } = e,
                    y = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, d.g)(),
                    S = (0, l.X)(i.trackSource, { isMobile: j }),
                    R = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(h.C, {
                    className: (0, a.$)(g, { [x().trackWithDots]: v, [x().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, s.jsx)(_.O, { className: (0, a.$)(x().dots, N), isDragging: T }) : void 0,
                    meta: (0, s.jsx)(p.j, { withArtistLink: S, beforeTitle: O, track: i, ignoreDislikedStyles: A, withSecondaryColor: E }),
                    playButtonCellRender: R,
                    controls: (0, s.jsx)(m.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: E,
                        handleRemove: C,
                        withDislike: b,
                        withTrailer: k,
                        removeButtonAriaLabel: f,
                        hideControls: I,
                    }),
                    ...y,
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
            var s = i(53548),
                a = i(96820),
                r = i(29993),
                n = i(71978);
            let o = [a.DT.IDLE, a.DT.DOWNLOADED],
                l = (e) => {
                    var t;
                    let i = (0, n.j)(),
                        l = (0, r.c)((t) => {
                            let { state: i } = t;
                            o.includes(i.loadingState) && e();
                        });
                    (0, s.useEffect)(() => {
                        var t, s;
                        return (
                            null == (t = i.store) || t.tracks.events.on(a.je.STATE_CHANGED, e),
                            null == (s = i.store) || s.tracks.events.on(a.je.ENTITY_CHANGED, l),
                            () => {
                                var t, s;
                                (null == (t = i.store) || t.tracks.events.off(a.je.STATE_CHANGED, e),
                                    null == (s = i.store) || s.tracks.events.off(a.je.ENTITY_CHANGED, l));
                            }
                        );
                    }, [e, l, null == (t = i.store) ? void 0 : t.tracks.events]);
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
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var s = i(88800),
                a = i(65724),
                r = i(52300),
                n = i(30907),
                o = i.n(n);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, s.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
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
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(79070),
                l = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                _ = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    a = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: a };
            };
            var p = i(21010),
                h = i.n(p),
                g = i(17392),
                x = i(29504),
                v = i(91292),
                T = i(2058),
                N = i(87999),
                A = i(80643),
                E = i(78940),
                C = i(55693),
                b = i(58217);
            let k = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: k,
                            isTooltipEnabled: O,
                            handleNavigate: f,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = e,
                                { formatMessage: n } = (0, T.A)(),
                                o = ((e, t) => {
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
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, E.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, C.z)(),
                                p = (0, A.S)(),
                                h = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), _(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, b.l)({
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
                                })({ artist: o.artist, callback: h }),
                                x = (0, d.c)((e) => {
                                    (p({ to: N.AppScreen.ArtistScreen }), null == m || m(), g(e));
                                });
                            return { ...o, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: o });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: f,
                              title: p,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(l.m_, {
                                  enabled: O,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: k,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(l.m_, {
                              enabled: O,
                              offsetOptions: 4,
                              placement: 'top',
                              text: k,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: p,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                O = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(k, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
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
                                            (0, s.jsx)(k, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
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
                I = i(65453);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(f.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(61013),
                S = i(87819),
                R = i(40634),
                L = i(48468),
                w = i.n(L);
            let D = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, s.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, S.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: t }),
                            (0, s.jsx)(l.ZI, { className: w().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, s.jsx)(D, { forwardRef: t, ...e }));
            var M = i(19934),
                F = i(70396),
                U = i.n(F);
            let B = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, T.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [r, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, o.L)(() =>
                            (0, j.A)(() => {
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
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(B, { artists: t, label: i }) : (0, s.jsx)(P, { artists: t, label: i })) : i;
                }),
                z = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: g,
                            variant: x = 'breakAll',
                            spoilerComponent: v,
                            ...T
                        } = e,
                        N = ((e) => {
                            var t, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (s = e.withCustomTooltip) || s,
                                x = (0, n.useRef)(null),
                                [v, T] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: N },
                                } = (0, u.g)(),
                                A = ((!N || 1 === p.length) && _) || !_,
                                E = ((e, t) => {
                                    var i, s, a;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        o = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
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
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: a, visibleArtistsCount: v ? void 0 : r, withComposer: l, withLink: !!A && o, artistIdWithoutLink: c }),
                                C = h ? E.allArtistsTitle : '',
                                b = (0, d.c)((e) => {
                                    (T(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: E.groups,
                                hiddenArtistsCount: E.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: g,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: b,
                                isTooltipEnabled: !!C && g && !_ && !N,
                                title: !C || g || _ ? void 0 : C,
                            };
                        })(T),
                        A = (0, o.L)(() =>
                            N.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(y, { spoilerClassName: r, spoilerArtistsCount: N.hiddenArtistsCount, handleOnSpoilerClick: N.handleOnSpoilerClick }),
                        ),
                        E = (0, s.jsx)(l.m_, {
                            referenceRef: N.labelRef,
                            enabled: N.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: N.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: N.title,
                                children: [
                                    N.groups.map((e) =>
                                        (0, s.jsx)(
                                            O,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: g,
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
                    return N.withContextMenu ? (0, s.jsx)(W, { labelRef: N.labelRef, artists: N.artists, label: E }) : E;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, a) {
                return JSON.stringify(e, i(t, a), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (a, r) {
                        if (i.length > 0) {
                            var n = i.indexOf(this);
                            (~n ? i.splice(n + 1) : i.push(this), ~n ? s.splice(n, 1 / 0, a) : s.push(a), ~i.indexOf(r) && (r = t.call(this, a, r)));
                        } else i.push(r);
                        return null == e ? r : e.call(this, a, r);
                    }
                );
            }
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                _ = i(29504),
                m = i(13946),
                p = i(55693),
                h = i(72288),
                g = i(24548),
                x = i(85587),
                v = i(90224),
                T = i(91292),
                N = i(7608),
                A = i(6667),
                E = i(85463),
                C = i(65462),
                b = i.n(C);
            let k = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: C,
                        withExplicitMark: k,
                        withSecondaryColor: O,
                        captionSize: f = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: j,
                        artistsClassName: S,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: L = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: D,
                        beforeTitle: P,
                        withArtistLink: M,
                        variant: F,
                        withTrackLink: U,
                        afterTitle: B,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: z } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, h.g)(),
                    G = (0, A.$)({ withCustomTooltip: L }),
                    K = (0, l.useSearchParams)(),
                    X = (0, N.B)(r, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: U,
                        withArtistLink: M,
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
                    } = ((e, t, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: n, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(r, X, { canEnableCustomTooltip: G, isMobile: Y }, z),
                    et = (0, E.O)({ track: r, onNavigate: H, withSavingQueryParams: D, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: g.V,
                                children: (0, s.jsx)(_.HL, {
                                    className: (0, a.$)(b().text, b().title),
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
                    es = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: g.V,
                                  children: (0, s.jsx)(_.HL, {
                                      className: (0, a.$)(b().text, b().title),
                                      type: 'entity',
                                      size: f,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: V,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(T.N, {
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
                    ea = (0, n.useMemo)(() => +!!w, [w]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(b().root, { [b().root_disabled]: !r.isAvailable, [b().root_disliked]: r.isDisliked && !R, [b().root_withSecondaryColor]: O }, t),
                    children: (0, s.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(b().titleContainer, { [b().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(_.HL, {
                                        className: (0, a.$)(b().text, j),
                                        type: 'entity',
                                        size: f,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            es,
                                            X.version &&
                                                (0, s.jsxs)(_.HL, {
                                                    className: (0, a.$)(b().text, b().version),
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
                                        (0, s.jsx)(v.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: I,
                                            variant: X.explicitMark,
                                            className: b().explicitMark,
                                            trackId: r.id,
                                        }),
                                    B,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(m.i, {
                                    className: (0, a.$)(b().text, { [b().artists]: w }, S, j),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, a.$)(b().text, b().link),
                                    captionClassName: (0, a.$)(b().text, b().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: ea,
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
                o = i(15526),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
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
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => a, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let a = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
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
            i.d(t, { e: () => s });
            let s = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => L });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                _ = i(87999),
                m = i(47149),
                p = i(84423),
                h = i(89846),
                g = i(64543),
                x = i(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                T = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: a } = (0, g.j)();
                    (0, n.useEffect)(() => {
                        if (!i || !s || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: a.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == a ? void 0 : a.pageId]);
                });
            var N = i(44230),
                A = i(4370),
                E = i(72288),
                C = i(97956),
                b = i(56248),
                k = i(90688),
                O = i(78940);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = i(96856),
                y = i.n(I);
            let j = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: n } = (0, E.g)(),
                    { contentRef: o } = (0, N.g)(),
                    d = (0, O.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(y().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(b.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(y().navigation, { [y().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(k._V, { className: y().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: y().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: y().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: y().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
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
                                            children: (0, s.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(9184),
                R = i.n(S);
            let L = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    m = (0, n.useContext)(E.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                T(h);
                let { sendRefreshEvent: g } = v(),
                    x = (0, n.useCallback)(() => {
                        (g(), (window.location.href = A.Z.main.href));
                    }, [g]),
                    { contentRef: k } = (0, N.g)();
                return p
                    ? (0, s.jsx)(j, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(R().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(b.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(R().navigation, { [R().navigation_desktop]: !k }),
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
                                          children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: R().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var s = i(67174);
            let a = (e) => (0, s.u)('/album/:albumId', { params: { albumId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => T });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(87999),
                l = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                _ = i(19934),
                m = i(7555),
                p = i(29504),
                h = i(78940),
                g = i(72288),
                x = i(80932),
                v = i.n(x);
            let T = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, g.g)(),
                    x = (0, h.Z)(t.url),
                    N = (0, l.S)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(T, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    E = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), N({ to: o.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(_.Dr, {
                            className: (0, a.$)(v().root, i),
                            onClick: E,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
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
            var s;
            (i.d(t, { _: () => s }),
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
                })(s || (s = {})));
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(23877),
                a = i(74021);
            class r extends a.q {
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
                    let a = s.Q[e];
                    console[a](...this.formatMessage(e, t, i));
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
                a = i(84961),
                r = i(17392),
                n = i(52300),
                o = i(19934),
                l = i(108),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, iconClassName: d, albumType: u, disabled: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    h = (0, l.$)(t, u);
                return (0, s.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
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
        54721: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => _ });
            var s = i(53548),
                a = i(47149),
                r = i(63582),
                n = i(59791),
                o = i(7695),
                l = i(53534),
                c = i(89846),
                d = i(64543),
                u = i(56374);
            let _ = (0, r.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, s.useContext)(n.I),
                    { hash: t } = (0, c.g)(),
                    { screen: i, tab: r } = (0, d.j)(),
                    _ = (0, s.useContext)(l.k)?.session,
                    { current: m } = (0, s.useRef)(Symbol()),
                    p = !!i,
                    h = (s) => {
                        if (!e || !_ || !i?.pageId || void 0 === t || !p) return !1;
                        let n = {
                            hash: t,
                            pageId: i.pageId,
                            pageStyle: i.pageStyle,
                            pagePlacement: i.pagePlacement,
                            mainObjectType: i.mainObjectType,
                            mainObjectId: i.mainObjectId,
                            skeletonId: i.skeletonId,
                            viewUuid: i.screenViewUuid,
                            ...(r ?? o.Ve),
                        };
                        return (s ? _.open(m, () => (0, a.Fn)(e, n)) : _.close(m, () => (0, a.PO)(e, n)), !0);
                    },
                    [g, x] = (0, s.useState)(() => ({ session: _, send: h, opened: !1 })),
                    v = g;
                (g.session !== _ && x((v = { session: _, send: h, opened: !1 })),
                    (0, s.useInsertionEffect)(() => {
                        p && void 0 !== t && (v.send = h);
                    }, [v, t, p, h]));
                let T = (0, u.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, s.useEffect)(
                    () => (
                        T(v, !0),
                        () => {
                            (v.opened && T(v, !1), v.session?.release(m));
                        }
                    ),
                    [m, v, T],
                ),
                    (0, s.useEffect)(() => {
                        T(v, !0);
                    }, [v, t, p, T]));
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(2058),
                n = i(17392),
                o = i(96817),
                l = i(52300),
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
                            forwardRef: g,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: T } = (0, r.A)(),
                        N = T({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': N,
                        onClick: m,
                        ref: g,
                        icon: (0, s.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => C });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(62414),
                l = i(33979),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                _ = i(9618),
                m = i(4795),
                p = i(55693),
                h = i(7123),
                g = i(72288),
                x = i(8990),
                v = i(2058),
                T = i(47580),
                N = i(95993),
                A = i(27157),
                E = i.n(A);
            let C = (0, r.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: r,
                        meta: A,
                        beforeBlock: C,
                        controls: b,
                        playButtonCellRender: k,
                        withLightning: O,
                        isPlaying: f,
                        isCurrent: I,
                        togglePlay: y,
                        restartPlay: j,
                        onPlayClick: S,
                        playButtonIconSize: R,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: D, showBuySubscriptionModal: P } = (0, _.q)(),
                    {
                        track: M,
                        fullscreenPlayer: F,
                        settings: { isMobile: U },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: z },
                    } = (0, g.g)(),
                    H = (0, o.D)(),
                    Y = (0, l.g)(),
                    $ = (0, u.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: s } = (0, v.A)();
                        return ((e, t, i) => {
                            var s;
                            let { withLightning: a } = t,
                                r = (0, T.j)(null != (s = e.artists) ? s : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, s);
                    })({ withLightning: O, track: r }),
                    K = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let s = t.entityMeta.entityId;
                            return i && s === e;
                        }
                        return i;
                    })(r.entityId),
                    X = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    V = r.isAvailable && D && !X,
                    q = (0, m.N)(),
                    Z = r.isAvailable && q && !X && !L,
                    Q = (0, N.w)({ track: r, callback: y }),
                    J = (0, c.c)(() => {
                        M.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    ee = (0, N.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, es] = (0, n.useState)(!1),
                    ea = (0, c.c)(() => {
                        if (!$()) {
                            if (V) return void P();
                            if (Z) return void z.open();
                            (ei || f || (es(!0), null == et || et()), Q(), f || Y(), null == S || S(!f));
                        }
                    }),
                    er = (0, c.c)(() => {
                        if (f) return void j();
                        ea();
                    }),
                    en = (0, c.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (D && r.isAvailableOnlyForPlus && P(), q && r.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (V) return void P();
                        let t = !U && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !F.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, d.P)(e, E().ripple), U)
                              ? void ea()
                              : 2 === e.detail
                                ? void er()
                                : void (1 === e.detail && r.hasTrackLink && !F.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    eo = null == k ? void 0 : k({ onPlayButtonClick: ea, isPlaying: f, isCurrent: I, isLoading: K, playButtonIconSize: R });
                return (0, s.jsxs)(x.C, {
                    ref: H,
                    'aria-label': G,
                    onClick: en,
                    className: (0, a.$)(E().root, { [E().root_disabled]: !r.isAvailable, [E().root_current]: I && U }, i),
                    ...w,
                    children: [C, eo, A, b],
                });
            });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var s = i(4086),
                a = i(41928);
            let r = () => {
                let e = (0, a.N)(),
                    t = e.get(s.$I),
                    i = e.get(s.EN),
                    r = e.get(s.N1),
                    n = e.get(s._1),
                    o = e.get(s.V3),
                    l = e.get(s.Lb),
                    c = e.get(s.wK),
                    d = e.get(s.tz),
                    u = e.get(s.$8),
                    _ = e.get(s.Oo),
                    m = e.get(s.X4),
                    p = e.get(s.O9),
                    h = e.get(s.E),
                    g = e.get(s.wH),
                    x = e.get(s.ok),
                    v = e.get(s.X8),
                    T = e.get(s.yq),
                    N = e.get(s.NN),
                    A = e.get(s.qN),
                    E = e.get(s.ro),
                    C = e.get(s.nM),
                    b = e.get(s.Ut),
                    k = e.get(s.K1),
                    O = e.get(s.eu),
                    f = e.get(s.SD),
                    I = e.get(s.aE),
                    y = e.get(s.ki),
                    j = e.get(s.c9),
                    S = e.get(s.en),
                    R = e.get(s.jQ),
                    L = e.get(s.cZ),
                    w = e.get(s.Zl),
                    D = e.get(s.CN),
                    P = e.get(s.P1),
                    M = e.get(s.zj),
                    F = e.get(s.re),
                    U = e.get(s.JM),
                    B = e.get(s.Lk),
                    W = e.get(s.$$),
                    z = e.get(s.sv),
                    H = e.get(s.gd),
                    Y = e.get(s.Ez),
                    $ = e.get(s.u2),
                    G = e.get(s.TD),
                    K = e.get(s.dh),
                    X = e.get(s.LC),
                    V = e.get(s.PL),
                    q = e.get(s.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: r,
                    usersResource: n,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: _,
                    topResource: m,
                    artistsResource: p,
                    slidesResource: h,
                    redAlertResource: g,
                    rotorResource: x,
                    waveResource: v,
                    searchResource: T,
                    searchPlaylistResource: N,
                    playlistResource: A,
                    playlistsResource: E,
                    pinResource: C,
                    metatagsResource: b,
                    tagResource: k,
                    feedResource: O,
                    wizard3Resource: f,
                    pinsResource: I,
                    musicHistoryResource: y,
                    dynamicPagesResource: j,
                    chartResource: S,
                    clipsResource: R,
                    lyricViewsResource: L,
                    nonMusicResource: w,
                    donationResource: D,
                    loaderResource: P,
                    lumenResource: M,
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
                    wordsResource: e.get(s.dA),
                    wheelResource: e.get(s.$Y),
                };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(88800);
            i(30282);
            var a = i(11006),
                r = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var s = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        64462: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => j }));
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(88969);
            i(30282);
            var o = i(87999),
                l = i(54721),
                c = i(76903),
                d = i(17392),
                u = i(96817),
                _ = i(52300),
                m = i(66719),
                p = i(29504),
                h = i(98427),
                g = i(53548),
                x = i(47149),
                v = i(84423),
                T = i(89846);
            let N = (0, i(63582).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let i = null == (t = (0, v.s)()) ? void 0 : t.evgenInstance,
                    { hash: s } = (0, T.g)();
                return {
                    handleNavigateToMain: (0, g.useCallback)(() => {
                        if (!i || !s) return;
                        let t = {
                            hash: s,
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
                        (Object.values(t).some((e) => void 0 === e) || (0, x.Mu)(i, t), e());
                    }, [i, s, e]),
                };
            });
            var A = i(44230),
                E = i(4370),
                C = i(78940),
                b = i(95210),
                k = i(56248),
                O = i(72288),
                f = i(26827),
                I = i.n(f);
            let y = (0, r.PA)((e) => {
                    let { className: t, title: i, description: r, iconVariant: o = 'musicLogo', iconClassName: c, iconSize: h } = e,
                        { contentRef: x, setContentScrollRef: v } = (0, A.g)(),
                        T = (0, C.Z)(E.Z.main.href);
                    (0, l.u)();
                    let { handleNavigateToMain: f } = N(T);
                    return (
                        (0, b.N)(!0),
                        !(function () {
                            let { location: e } = (0, O.g)();
                            (0, g.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, s.jsxs)(m.N, {
                            className: (0, a.$)(I().root, { [I().root_desktop]: !x }, t),
                            containerClassName: I().container,
                            ref: v,
                            'data-test-id': d.e8.notFound.NOT_FOUND,
                            children: [
                                (0, s.jsx)(k.L, { withBackwardFallback: '/', className: I().navigation, withForwardControl: !1 }),
                                (0, s.jsxs)('div', {
                                    className: I().content,
                                    children: [
                                        (0, s.jsx)(_.I, { className: (0, a.$)(I().icon, c), variant: o, size: h }),
                                        (0, s.jsx)(p.DZ, {
                                            className: (0, a.$)(I().title, I().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': d.e8.notFound.NOT_FOUND_TITLE,
                                            children: i || (0, s.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, s.jsx)(p.HL, {
                                            className: (0, a.$)(I().text, I().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: r || (0, s.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, s.jsx)(u.$, {
                                            onClick: f,
                                            className: I().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(p.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(n.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                j = (e) =>
                    (0, s.jsx)(c.a, {
                        pageId: o.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: h.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: o.PageStyles.Fullscreen,
                        pagePlacement: o.PagePlacements.Fullscreen,
                        mainObjectType: o.DomainObjectType.NonApplicable,
                        mainObjectId: o.DomainObjectType.NonApplicable,
                        children: (0, s.jsx)(y, { ...e }),
                    });
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => o });
            var s = i(4086),
                a = i(41928),
                r = i(44084);
            let n = new WeakMap(),
                o = () =>
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
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => w });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                o = i(2058),
                l = i(87999),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                _ = i(17610),
                m = i(29504),
                p = i(42174),
                h = i(96817);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, o.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    g = (0, n.useCallback)(
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
                    onClick: g,
                    icon: (0, s.jsx)(u.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                v = i(57934),
                T = i(55693),
                N = i(72288),
                A = i(49738),
                E = i(56446),
                C = i(64546),
                b = i(29831),
                k = i(30123),
                O = i(54965),
                f = i(1829),
                I = i(82092),
                y = i.n(I),
                j = i(79262),
                S = i(41867),
                R = i.n(S);
            let L = (0, r.PA)((e) => {
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
                          ? (0, s.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                w = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: r,
                            withLightning: h,
                            ignoreDislikedStyles: I,
                            onLikeClick: j,
                            utmLink: S,
                            withSecondaryColor: R,
                            handleRemove: w,
                            withTrailer: D = !0,
                            likeIconSize: P = 'xxs',
                            removeButtonAriaLabel: M,
                            hideControls: F,
                        } = e,
                        { user: U, trailer: B } = (0, N.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: z } = (0, T.z)(),
                        [H, Y] = (0, n.useState)(!1),
                        [$, G] = (0, n.useState)(!1),
                        K = (0, x.P)(),
                        X = (0, p.K)(r),
                        {
                            duration: V,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var s;
                            let { withLightning: a, isUGC: r } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / k.k7);
                                              return (0, O.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, b.j)(Math.round((null != (s = e.durationMs) ? s : 0) / 1e3), i) } : null,
                                lightning: a ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: h, isUGC: r.isUGC }, W),
                        Q = (0, v.F)(),
                        J = U.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !F,
                        et = (0, d.c)(async () => {
                            (H || r.isLiked || (Y(!0), null == z || z()), await X(), null == j || j(r.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        es = (0, d.c)((e) => {
                            if ((e.stopPropagation(), K())) return void e.preventDefault();
                            (B.openTrackTrailer(r.id), Q(l.DomainObjectType.Track, r.id));
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, s.jsx)('div', {
                                    onClick: ei,
                                    children: (0, s.jsx)(f._, {
                                        track: r,
                                        open: $,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, s.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: S,
                                        className: (0, a.$)(y().contextMenu, { [y().contextMenu_visible]: $ }),
                                        handleRemove: w,
                                        withTrailer: D,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, w, $, ee, D, r, S]);
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(y().root, y().controls, i, {
                            [y().controls_dislikedControls]: r.isDisliked,
                            [y().controls_dislikedColors]: r.isDisliked && !I,
                            [y().controls_disabled]: !r.isAvailable,
                            [y().root_withSecondaryColor]: R,
                        }),
                        children: [
                            q && (0, s.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: y().lightning, variant: 'lightning' }),
                            Z &&
                                (0, s.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, s.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: y().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, s.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            J && (0, s.jsx)('div', { className: (0, a.$)(y().item, y().downloadIcon), children: (0, s.jsx)(L, { track: r }) }),
                            w && !F && (0, s.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(y().item, y().removeButton), onClick: w, ariaLabel: M }),
                            ee &&
                                (0, s.jsx)(C.WithOffline, {
                                    fallback: (0, s.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: P,
                                        className: (0, a.$)(y().item, y().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, s.jsx)(C.WithOffline, {
                                    fallback: (0, s.jsx)(E.k, {
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
                                    null !== V &&
                                        (0, s.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(y().duration, { [y().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, s.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    ea,
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
                a = i(243),
                r = i(62151),
                n = i(33396);
            let o = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, a) {
                    let r,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, n.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (r = this.obfuscateData(l)), a) ? `${o} ${s(r)}` : [o, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, a.A)(e, t) && (0, r.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(53534),
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
                        [l, u] = (0, a.useState)(() => {
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
                        let a = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, a) : null, session: a };
                        return (u(o), (0, s.jsx)(r.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== n ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...l, input: t, isReady: n, scope: n ? i.createScreenScope(t, l.session) : null };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: l, children: e });
                },
            );
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
        83052: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)),
                Promise.resolve().then(i.bind(i, 20551)),
                Promise.resolve().then(i.bind(i, 8679)),
                Promise.resolve().then(i.bind(i, 64462)));
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(2058),
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
                    let { formatMessage: t, language: i, tld: s, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                g = i(72288),
                x = i(11006),
                v = i.n(x),
                T = i(17392),
                N = i(29504),
                A = i(91292);
            let E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(v().copyrights, t),
                        'data-test-id': T.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': T.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': T.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': T.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(A.N, { target: '_blank', href: a, className: v().link, 'data-test-id': T.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': T.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, a.$)(v().root, v().important, t),
                        'data-test-id': T.S7.FOOTER,
                        children: [(0, s.jsx)(C, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(E, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: a, formatMessage: r } = (0, n.A)(),
                    { language: o } = (0, h.h)(),
                    l = u({ formatMessage: r, language: o, tld: i.tld, year: p(a) });
                return (0, s.jsx)(E, { className: t, data: l });
            });
            let k = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: x } = (0, g.g)(),
                    { formatDate: T, formatMessage: N } = (0, n.A)(),
                    { isEnabled: A } = null != (t = (0, l.P)()) ? t : {},
                    { language: E } = (0, h.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: n, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: a, userRegion: r } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, a) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, a) },
                                    m = [n, l, u];
                                return (i && 'ru' === r && m.push(o), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: E,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(T),
                    });
                return (0, s.jsx)(b, { className: (0, a.$)({ [v().root_withOffsetForDeeplink]: A }, i), data: C });
            });
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
                o = i(2058),
                l = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                _ = i(94398),
                m = i(17332),
                p = i.n(m);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: r, containerClassName: m, variant: h, size: g = 'xxxs', ...x } = e,
                    { formatMessage: v } = (0, o.A)(),
                    {
                        settings: { isMobile: T },
                    } = (0, u.g)(),
                    [N, A] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(A);
                }, [i, r]);
                let {
                    iconVariant: E,
                    descriptionText: C,
                    isTooltipEnabled: b,
                    ariaLabel: k,
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
                })({ variant: h, descriptionTexts: N, isMobile: T }, v);
                return (0, s.jsx)(_.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: b,
                    children: (0, s.jsx)('span', {
                        className: m,
                        children: (0, s.jsx)(c.I, {
                            className: (0, a.$)(p().explicitMark, t),
                            'aria-label': k,
                            variant: E,
                            size: g,
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
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
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(88800),
                a = i(2058),
                r = i(29993),
                n = i(87762),
                o = i(29595),
                l = i(74965),
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
                    { formatMessage: g } = (0, a.A)(),
                    { notify: x } = (0, l.l)(),
                    v = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: l = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            n(!0);
                            let g = await r.toggleLike();
                            if ((n(!1), !c)) return;
                            let x = t.modal.isOpened;
                            g === m.f.OK
                                ? e((0, s.jsx)(p.T, { withLink: l, album: _ }), { containerId: x ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: T } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: T, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void x((0, s.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var s = i(88800),
                a = i(98644),
                r = i(65724),
                n = i(53548),
                o = i(2058),
                l = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, o.A)(),
                    c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, s.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, i),
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
            var _ = i(26835),
                m = i.n(_);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, o.A)(),
                        c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, s.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(m().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, s.jsx)(l.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, s.jsx)('div', { className: m().textContainer, children: (0, s.jsx)(l.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, s.jsx)(l.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: r } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, s.jsx)(p, { isActive: t, className: r });
                        case a.X.ALBUM:
                            return (0, s.jsx)(u, { isActive: t, className: r });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => r });
            var s = i(53548);
            let a = (0, s.createContext)(null),
                r = () => (0, s.useContext)(a);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                n = i(29504),
                o = i(37438),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
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
            i.d(t, { T: () => o });
            var s = i(88800),
                a = i(84961),
                r = i(42729),
                n = i(5048);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i, withLink: a } = e,
                    o = (0, n.b)(t.type);
                return (0, s.jsx)(r.O, {
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
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 918, 1833, 7437, 9079, 3469, 1191, 1041, 8194, 8655, 5188, 8936, 6706, 4771, 1311, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 7746, 1223, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 6820, 389, 9306, 763, 2670, 7358,
            ],
            () => e((e.s = 83052)),
        ),
            (_N_E = e.O()));
    },
]);
