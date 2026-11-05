(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9394],
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
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
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
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                r = i(88969),
                a = i(58390),
                n = i(17392),
                l = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                p = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    b = (0, a.useRouter)(),
                    T = (0, p.N)().get(u.QG),
                    f = (0, l.c)(() => {
                        T.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(T.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: f,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => _ });
            var s = i(88800),
                r = i(65724),
                a = i(53548),
                n = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                p = i(4044),
                m = i.n(p);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                p = i(13619),
                m = i(73805),
                _ = i(15232),
                h = i(56712),
                x = i(26243),
                g = i.n(x);
            let v = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: x,
                        withDNDBlock: v,
                        isDragging: b,
                        draggingClassName: T,
                        ignoreDislikedStyles: f,
                        withSecondaryColor: k,
                        handleRemove: C,
                        withDislike: j,
                        withTrailer: S = !0,
                        beforeTitle: A,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    } = e,
                    y = (0, c.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: O },
                    } = (0, d.g)(),
                    I = (0, o.X)(i.trackSource, { isMobile: O }),
                    w = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: g().playButtonCell,
                                ignoreDislikedStyles: f,
                                radius: 'xs',
                                ...e,
                            }),
                        [f, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(h.C, {
                    className: (0, r.$)(x, { [g().trackWithDots]: v, [g().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, s.jsx)(p.O, { className: (0, r.$)(g().dots, T), isDragging: b }) : void 0,
                    meta: (0, s.jsx)(_.j, { withArtistLink: I, beforeTitle: A, track: i, ignoreDislikedStyles: f, withSecondaryColor: k }),
                    playButtonCellRender: w,
                    controls: (0, s.jsx)(m.Q, {
                        track: i,
                        className: g().controlsBarCell,
                        ignoreDislikedStyles: f,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: C,
                        withDislike: j,
                        withTrailer: S,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        13276: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 57208)));
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => F });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    r = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: r };
            };
            var _ = i(21010),
                h = i.n(_),
                x = i(17392),
                g = i(29504),
                v = i(91292),
                b = i(2058),
                T = i(87999),
                f = i(80643),
                k = i(78940),
                C = i(55693),
                j = i(58217);
            let S = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: S,
                            isTooltipEnabled: A,
                            handleNavigate: N,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, b.A)(),
                                l = ((e, t) => {
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
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, k.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, C.z)(),
                                _ = (0, f.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, j.l)({
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
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (_({ to: T.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: N,
                              title: _,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: A,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: S,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: A,
                              offsetOptions: 4,
                              placement: 'top',
                              text: S,
                              hoverSettings: c,
                              children: (0, s.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                A = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(S, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
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
                                            (0, s.jsx)(S, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: a,
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
                E = i(65453);
            let y = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(h().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = i(61013),
                I = i(87819),
                w = i(40634),
                R = i(48468),
                L = i.n(R);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: L().tooltipContent, children: i.map((e) => (0, s.jsx)(w.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var z = i(19934),
                U = i(70396),
                M = i.n(U);
            let W = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, r.$)(M().root, M().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, O.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, n.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...b
                        } = e,
                        T = ((e) => {
                            var t, i, s;
                            let { separator: r, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                x = null == (s = e.withCustomTooltip) || s,
                                g = (0, n.useRef)(null),
                                [v, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: T },
                                } = (0, u.g)(),
                                f = ((!T || 1 === _.length) && p) || !p,
                                k = ((e, t) => {
                                    var i, s, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
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
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: v ? void 0 : a, withComposer: o, withLink: !!f && l, artistIdWithoutLink: c }),
                                C = h ? k.allArtistsTitle : '',
                                j = (0, d.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: x,
                                withContextMenu: p,
                                labelRef: g,
                                handleOnSpoilerClick: j,
                                isTooltipEnabled: !!C && x && !p && !T,
                                title: !C || x || p ? void 0 : C,
                            };
                        })(b),
                        f = (0, l.L)(() =>
                            T.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(y, { spoilerClassName: a, spoilerArtistsCount: T.hiddenArtistsCount, handleOnSpoilerClick: T.handleOnSpoilerClick }),
                        ),
                        k = (0, s.jsx)(o.m_, {
                            referenceRef: T.labelRef,
                            enabled: T.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: T.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: T.title,
                                children: [
                                    T.groups.map((e) =>
                                        (0, s.jsx)(
                                            A,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: x,
                                                allArtistsTitle: T.allArtistsTitle,
                                                withCustomTooltip: T.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return T.withContextMenu ? (0, s.jsx)(B, { labelRef: T.labelRef, artists: T.artists, label: k }) : k;
                });
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => S });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                p = i(29504),
                m = i(13946),
                _ = i(55693),
                h = i(72288),
                x = i(24548),
                g = i(85587),
                v = i(90224),
                b = i(91292),
                T = i(7608),
                f = i(6667),
                k = i(85463),
                C = i(65462),
                j = i.n(C);
            let S = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: C,
                        withExplicitMark: S,
                        withSecondaryColor: A,
                        captionSize: N = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: y,
                        textClassName: O,
                        artistsClassName: I,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: R = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: z,
                        variant: U,
                        withTrackLink: M,
                        afterTitle: W,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: F } = (0, l.A)(),
                    { sendNavigateSearchFeedback: H } = (0, _.z)(),
                    {
                        settings: { isMobile: K },
                        slam: $,
                    } = (0, h.g)(),
                    V = (0, f.$)({ withCustomTooltip: R }),
                    Y = (0, o.useSearchParams)(),
                    X = (0, T.B)(a, {
                        isMobile: K,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: M,
                        withArtistLink: z,
                        variant: U,
                        withExplicitMark: S,
                        query: P ? Object.fromEntries(Y) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: Z,
                        tooltipText: G,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var r, a;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (a = e.version) ? a : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(a, X, { canEnableCustomTooltip: V, isMobile: K }, F),
                    et = (0, k.O)({ track: a, onNavigate: H, withSavingQueryParams: P, entityType: g.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: x.V,
                                children: (0, s.jsx)(p.HL, {
                                    className: (0, r.$)(j().text, j().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [N, q, G, ee],
                    ),
                    es = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: x.V,
                                  children: (0, s.jsx)(p.HL, {
                                      className: (0, r.$)(j().text, j().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: q,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(b.N, {
                                    onClick: et,
                                    className: j().albumLink,
                                    href: X.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, n.useMemo)(() => +!!L, [L]);
                return (0, s.jsx)('div', {
                    className: (0, r.$)(j().root, { [j().root_disabled]: !a.isAvailable, [j().root_disliked]: a.isDisliked && !w, [j().root_withSecondaryColor]: A }, t),
                    children: (0, s.jsxs)('div', {
                        className: j().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, r.$)(j().titleContainer, { [j().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, s.jsxs)(p.HL, {
                                        className: (0, r.$)(j().text, O),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            es,
                                            X.version &&
                                                (0, s.jsxs)(p.HL, {
                                                    className: (0, r.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: N,
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
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: E,
                                            variant: X.explicitMark,
                                            className: j().explicitMark,
                                            trackId: a.id,
                                        }),
                                    W,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(m.i, {
                                    className: (0, r.$)(j().text, { [j().artists]: L }, I, O),
                                    withAllArtistsTitle: y,
                                    linkClassName: (0, r.$)(j().text, j().link),
                                    captionClassName: (0, r.$)(j().text, j().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: er,
                                    captionSize: N,
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
                r = i(53548),
                a = i(17392),
                n = i(29504),
                l = i(15526),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
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
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(46606));
            var s = i(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
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
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                p = i(87999),
                m = i(47149),
                _ = i(84423),
                h = i(89846),
                x = i(64543),
                g = i(63582);
            let v = (0, g.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, x.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                b = (0, g.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: r } = (0, x.j)();
                    (0, n.useEffect)(() => {
                        if (!i || !s || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: r.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == r ? void 0 : r.pageId]);
                });
            var T = i(44230),
                f = i(4370),
                k = i(72288),
                C = i(97956),
                j = i(56248),
                S = i(90688),
                A = i(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = i(96856),
                y = i.n(E);
            let O = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { slam: n } = (0, k.g)(),
                    { contentRef: l } = (0, T.g)(),
                    d = (0, A.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(y().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(j.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(y().navigation, { [y().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(S._V, { className: y().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
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
                w = i.n(I);
            let R = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { formatMessage: p } = (0, l.A)(),
                    m = (0, n.useContext)(k.P),
                    _ = null == m ? void 0 : m.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    h = p(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(h);
                let { sendRefreshEvent: x } = v(),
                    g = (0, n.useCallback)(() => {
                        (x(), (window.location.href = f.Z.main.href));
                    }, [x]),
                    { contentRef: S } = (0, T.g)();
                return _
                    ? (0, s.jsx)(O, { className: t, withBackwardControl: i, onBack: a })
                    : (0, s.jsxs)('div', {
                          className: (0, r.$)(w().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(j.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(w().navigation, { [w().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, r.$)(w().content, { [w().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: w().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, r.$)(w().title, w().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, r.$)(w().text, w().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: g,
                                          className: w().button,
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
            i.d(t, { R: () => r });
            var s = i(67174);
            let r = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
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
            i.d(t, { V: () => b });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                _ = i(29504),
                h = i(78940),
                x = i(72288),
                g = i(80932),
                v = i.n(g);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    T = (0, o.S)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), T({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: k,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
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
        43032: (e) => {
            e.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var s = i(88800),
                r = i(84961),
                a = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: p } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: p || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        45654: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => f });
            var s = i(88800),
                r = i(84961),
                a = i(88969),
                n = i(96817),
                l = i(52300),
                o = i(66719),
                c = i(29504),
                d = i(69630),
                u = i(46422),
                p = i(44230),
                m = i(4370),
                _ = i(78940),
                h = i(72288),
                x = i(86790),
                g = i(60266),
                v = i(93317),
                b = i(92270),
                T = i.n(b);
            let f = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: r, setContentScrollRef: b } = (0, p.g)(),
                    f = (0, u.W)(),
                    k = (0, _.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(v.Y, {
                            variant: v.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: f.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(o.N, {
                            ref: b,
                            containerClassName: T().scrollableContainer,
                            className: T().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: T().content,
                                    children: [
                                        (0, s.jsx)('div', { className: T().icon, children: (0, s.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: k,
                                            className: T().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(g.A, { children: (0, s.jsx)(x.w, { className: T().footer }) }),
                            ],
                        }),
                    ],
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
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                r = i(53548),
                a = i(29993),
                n = i(9492),
                l = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    p = (0, a.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: p }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(88800),
                r = i(53548),
                a = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: p,
                            onClick: m,
                            iconClassName: _,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        T = b({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': T,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: p,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        57208: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => z });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(18593),
                m = i(54667),
                _ = i(29504),
                h = i(32596),
                x = i(69630),
                g = i(76843),
                v = i(10829),
                b = i(98427),
                T = i(84384),
                f = i(46422),
                k = i(44230),
                C = i(37670),
                j = i(6668),
                S = i(72288),
                A = i(98644),
                N = i(54320),
                E = i(86790),
                y = i(60266),
                O = i(93317),
                I = i(93015),
                w = i(79418),
                R = i(71104),
                L = i(45654),
                P = i(43032),
                D = i.n(P);
            let z = (0, a.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, S.g)(),
                    { contentScrollRef: i, setContentScrollRef: a } = (0, k.g)(),
                    P = (0, f.W)(),
                    { from: z } = (0, T.f)({ pageId: b.b.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: U } = (0, l.A)(),
                    M = (0, j.w)();
                ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, C.J)(e.isResolved));
                let W = (0, n.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: R.c });
                    },
                    [e],
                );
                (0, N.X)(e.pagesLoader, W);
                let B = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(E.w, { className: D().footer }) }) }), []),
                    F = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: R.c })), e.isRejected)
                    ? (0, s.jsx)(h.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, s.jsx)(L.i, { title: U({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsTracks,
                            pageIdForFrom: b.b.COLLECTION_KIDS_TRACKS,
                            children: (0, s.jsx)(x.h, {
                                scrollElement: i,
                                outerTitle: U({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, s.jsxs)('div', {
                                    className: D().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, s.jsx)(O.Y, {
                                            variant: O.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(_.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, s.jsx)(w.$, {
                                            className: (0, r.$)(D().scrollContainer, D().important),
                                            listClassName: D().content,
                                            customComponents: B,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, s.jsx)(I.D, { isActive: !0, className: D().shimmerItem, variant: A.X.PLAYLIST });
                                                let r = M(i.entityId, {
                                                    contextData: { type: p.K.Various, meta: { id: i.entityId }, from: z },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === m.S.MUSIC
                                                    ? (0, s.jsx)(v.K, { track: i, playContextParams: r }, t)
                                                    : (0, s.jsx)(g.K, { track: i, playContextParams: r, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: F,
                                            totalCount: F,
                                            onGetDataByPage: W,
                                            pageSize: R.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: a,
                                            context: { listAriaLabel: U({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                r = i(84961),
                a = i(58390),
                n = i(65724),
                l = i(88969),
                o = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let p = (0, r.PA)(() =>
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
            var m = i(4370),
                _ = i(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (i && (0, a.redirect)(m.Z.main.href), (0, s.jsx)(p, {}));
            });
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71104: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                a = i(53534),
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
                        [o, u] = (0, r.useState)(() => {
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
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, r) : null, session: r };
                        return (u(l), (0, s.jsx)(a.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== n ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...o, input: t, isReady: n, scope: n ? i.createScreenScope(t, o.session) : null };
                        return (u(r), (0, s.jsx)(a.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(a.k, { value: o, children: e });
                },
            );
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(88800),
                r = i(65724),
                a = i(61013),
                n = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: r, ...a } = e,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        l = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                p = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, a),
                            [a, r, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && p && x(p);
                    }, o);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: b,
                            debounceDurationInMs: T,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: C,
                            alwaysShowScrollbar: j = !1,
                            testId: S,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...E
                        } = e,
                        [y, O] = (0, n.useState)(!1),
                        I = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        w = (0, n.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, b, A]),
                        R = f ? Math.min(f, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: y || j, [d().root_notScrolling]: !y && !j }, t),
                        'data-test-id': S,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: w,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: C,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: T,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: N,
                                ...E,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
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
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => s.X, m5: () => r.m });
            var s = i(46606),
                r = i(91136),
                a = i(19840);
            i(17017);
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                p = i(94398),
                m = i(17332),
                _ = i.n(m);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: m, variant: h, iconVariant: iconOverride, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [T, f] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(f);
                }, [i, a]);
                let {
                    iconVariant: k,
                    descriptionText: C,
                    isTooltipEnabled: j,
                    ariaLabel: S,
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
                })({ variant: h, descriptionTexts: T, isMobile: b }, v);
                return (0, s.jsx)(p.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, s.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, r.$)(_().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': S,
                            style: { width: 'var(--ym-icon-size-'.concat(x, ')'), height: 'var(--ym-icon-size-'.concat(x, ')') },
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': S,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : k,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? x : x,
                            style: iconOverride ? { width: `var(--ym-icon-size-${x})`, height: `var(--ym-icon-size-${x})` } : undefined,
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = r), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(88800),
                r = i(2058),
                a = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                p = i(53548),
                m = i(79390),
                _ = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, r.A)(),
                    { notify: g } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, p.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let p = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let x = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let g = t.modal.isOpened;
                            x === m.f.OK
                                ? e((0, s.jsx)(_.T, { withLink: o, album: p }), { containerId: g ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: g ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void g((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var s = i(88800),
                r = i(17392),
                a = i(17610),
                n = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
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
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                r = i(84961),
                a = i(42729),
                n = i(5048);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    l = (0, n.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
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
            i.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var s = i(89916),
                r = i(67990);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
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
                4814, 7437, 918, 1833, 9079, 3469, 1191, 1041, 8194, 8655, 8767, 529, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 7746,
                4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 818, 7053, 763, 2670, 7358,
            ],
            () => e((e.s = 13276)),
        ),
            (_N_E = e.O()));
    },
]);
