(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 9394],
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
            i.d(t, { H: () => p });
            var s = i(88800),
                r = i(88969),
                a = i(58390),
                n = i(17392),
                l = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: x, className: g } = e,
                    b = (0, a.useRouter)(),
                    f = (0, m.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        f.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(f.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: g,
                        isBlock: v,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
                m = i(4044),
                p = i.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(p().root, p().important), message: h, closeToast: i });
            };
        },
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                p = i(73805),
                _ = i(15232),
                h = i(56712),
                v = i(26243),
                x = i.n(v);
            let g = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: v,
                        withDNDBlock: g,
                        isDragging: b,
                        draggingClassName: f,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: T,
                        withDislike: E,
                        withTrailer: N = !0,
                        beforeTitle: y,
                        removeButtonAriaLabel: k,
                        hideControls: S,
                    } = e,
                    I = (0, c.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: O },
                    } = (0, d.g)(),
                    j = (0, o.X)(i.trackSource, { isMobile: O }),
                    L = (0, n.useCallback)(
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
                    className: (0, r.$)(v, { [x().trackWithDots]: g, [x().important]: g }),
                    track: i,
                    beforeBlock: g ? (0, s.jsx)(m.O, { className: (0, r.$)(x().dots, f), isDragging: b }) : void 0,
                    meta: (0, s.jsx)(_.j, { withArtistLink: j, beforeTitle: y, track: i, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: L,
                    controls: (0, s.jsx)(p.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: T,
                        withDislike: E,
                        withTrailer: N,
                        removeButtonAriaLabel: k,
                        hideControls: S,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
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
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: s } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: r };
            };
            var _ = i(21010),
                h = i.n(_),
                v = i(17392),
                x = i(29504),
                g = i(91292),
                b = i(2058),
                f = i(92716),
                A = i(96527),
                C = i(78940),
                T = i(55693),
                E = i(58217);
            let N = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: p,
                            title: _,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: y,
                            handleNavigate: k,
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
                                m = (0, C.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, T.z)(),
                                _ = (0, A.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, E.l)({
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
                                x = (0, d.c)((e) => {
                                    (_({ to: f.AppScreen.ArtistScreen }), null == p || p(), v(e));
                                });
                            return { ...l, handleNavigate: x };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, s.jsx)(g.N, {
                              ...p,
                              'aria-label': h,
                              className: i,
                              onClick: k,
                              title: _,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: y,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: y,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: _,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                y = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(N, {
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
                                            (0, s.jsx)(N, {
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
            var k = i(88969),
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
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var O = i(61013),
                j = i(87819),
                L = i(40634),
                w = i(48468),
                R = i.n(w);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: R().tooltipContent, children: i.map((e) => (0, s.jsx)(L.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var M = i(19934),
                B = i(70396),
                z = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
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
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(U, { artists: t, label: i }) : (0, s.jsx)(D, { artists: t, label: i })) : i;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: _,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...b
                        } = e,
                        f = ((e) => {
                            var t, i, s;
                            let { separator: r, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (s = e.withCustomTooltip) || s,
                                x = (0, n.useRef)(null),
                                [g, b] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: f },
                                } = (0, u.g)(),
                                A = ((!f || 1 === _.length) && m) || !m,
                                C = ((e, t) => {
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
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: r, visibleArtistsCount: g ? void 0 : a, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                T = h ? C.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: T,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!T && v && !m && !f,
                                title: !T || v || m ? void 0 : T,
                            };
                        })(b),
                        A = (0, l.L)(() =>
                            f.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(g)
                                  ? g
                                  : (0, s.jsx)(I, { spoilerClassName: a, spoilerArtistsCount: f.hiddenArtistsCount, handleOnSpoilerClick: f.handleOnSpoilerClick }),
                        ),
                        C = (0, s.jsx)(o.m_, {
                            referenceRef: f.labelRef,
                            enabled: f.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: f.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: f.title,
                                children: [
                                    f.groups.map((e) =>
                                        (0, s.jsx)(
                                            y,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: _,
                                                captionSize: v,
                                                allArtistsTitle: f.allArtistsTitle,
                                                withCustomTooltip: f.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return f.withContextMenu ? (0, s.jsx)(W, { labelRef: f.labelRef, artists: f.artists, label: C }) : C;
                });
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
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
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                p = i(13946),
                _ = i(55693),
                h = i(72288),
                v = i(24548),
                x = i(85587),
                g = i(90224),
                b = i(91292),
                f = i(7608),
                A = i(6667),
                C = i(85463),
                T = i(65462),
                E = i.n(T);
            let N = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: T,
                        withExplicitMark: N,
                        withSecondaryColor: y,
                        captionSize: k = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: O,
                        artistsClassName: j,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: M,
                        variant: B,
                        withTrackLink: z,
                        afterTitle: U,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: F } = (0, l.A)(),
                    { sendNavigateSearchFeedback: V } = (0, _.z)(),
                    {
                        settings: { isMobile: H },
                        slam: K,
                    } = (0, h.g)(),
                    $ = (0, A.$)({ withCustomTooltip: w }),
                    G = (0, o.useSearchParams)(),
                    X = (0, f.B)(a, {
                        isMobile: H,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: T,
                        withTrackLink: z,
                        withArtistLink: M,
                        variant: B,
                        withExplicitMark: N,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: Y,
                        ariaLabel: Z,
                        tooltipText: Q,
                        titleAttribute: q,
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
                    })(a, X, { canEnableCustomTooltip: $, isMobile: H }, F),
                    et = (0, C.O)({ track: a, onNavigate: V, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: v.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, r.$)(E().text, E().title),
                                    type: 'entity',
                                    size: k,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Y,
                                }),
                            }),
                        [k, Y, Q, ee],
                    ),
                    es = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: v.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, r.$)(E().text, E().title),
                                      type: 'entity',
                                      size: k,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: q,
                                      children: Y,
                                  }),
                              })
                            : X.link
                              ? (0, s.jsx)(b.N, {
                                    onClick: et,
                                    className: E().albumLink,
                                    href: X.link.href,
                                    'aria-label': Z,
                                    title: q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, n.useMemo)(() => +!!R, [R]);
                return (0, s.jsx)('div', {
                    className: (0, r.$)(E().root, { [E().root_disabled]: !a.isAvailable, [E().root_disliked]: a.isDisliked && !L, [E().root_withSecondaryColor]: y }, t),
                    children: (0, s.jsxs)('div', {
                        className: E().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, r.$)(E().titleContainer, { [E().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, r.$)(E().text, O),
                                        type: 'entity',
                                        size: k,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            es,
                                            X.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, r.$)(E().text, E().version),
                                                    type: 'entity',
                                                    size: k,
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
                                            containerClassName: E().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: S,
                                            variant: X.explicitMark,
                                            className: E().explicitMark,
                                            trackId: a.id,
                                        }),
                                    U,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, s.jsx)(p.i, {
                                    className: (0, r.$)(E().text, { [E().artists]: R }, j, O),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, r.$)(E().text, E().link),
                                    captionClassName: (0, r.$)(E().text, E().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: er,
                                    captionSize: k,
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
        29396: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 57208)));
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => j });
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
                m = i(78793),
                p = i(92716),
                _ = i(99984),
                h = i(90780),
                v = i(65523),
                x = i(14518),
                g = i(44230),
                b = i(4370),
                f = i(72288),
                A = i(97956),
                C = i(56248),
                T = i(90688),
                E = i(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var y = i(96856),
                k = i.n(y);
            let S = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { slam: n } = (0, f.g)(),
                    { contentRef: l } = (0, g.g)(),
                    d = (0, E.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(k().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(C.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(T._V, { className: k().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: k().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: k().text,
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
                                        className: k().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: k().buttonText,
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
                O = i.n(I);
            let j = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: a } = e,
                    { formatMessage: T } = (0, l.A)(),
                    E = (0, n.useContext)(f.P),
                    N = null == E ? void 0 : E.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    y = T(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: s } = (0, x.$)(),
                        r = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, i, s, r]);
                })(y);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            s = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.F)({
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
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, i, s]),
                        };
                    })(),
                    I = (0, n.useCallback)(() => {
                        (k(), (window.location.href = b.Z.main.href));
                    }, [k]),
                    { contentRef: j } = (0, g.g)();
                return N
                    ? (0, s.jsx)(S, { className: t, withBackwardControl: i, onBack: a })
                    : (0, s.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: y }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: I,
                                          className: O().button,
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
                l = i(92716),
                o = i(17392),
                c = i(29993),
                d = i(90688),
                u = i(19934),
                m = i(7555),
                p = i(29504),
                _ = i(96527),
                h = i(78940),
                v = i(72288),
                x = i(80932),
                g = i.n(x);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    f = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), f({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, s.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
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
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: p } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
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
        45654: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => A });
            var s = i(88800),
                r = i(84961),
                a = i(88969),
                n = i(96817),
                l = i(52300),
                o = i(66719),
                c = i(29504),
                d = i(69630),
                u = i(46422),
                m = i(44230),
                p = i(4370),
                _ = i(78940),
                h = i(72288),
                v = i(86790),
                x = i(60266),
                g = i(93317),
                b = i(92270),
                f = i.n(b);
            let A = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: r, setContentScrollRef: b } = (0, m.g)(),
                    A = (0, u.W)(),
                    C = (0, _.Z)(p.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(g.Y, {
                            variant: g.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: A.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(o.N, {
                            ref: b,
                            containerClassName: f().scrollableContainer,
                            className: f().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: f().content,
                                    children: [
                                        (0, s.jsx)('div', { className: f().icon, children: (0, s.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: f().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: C,
                                            className: f().button,
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
                                (0, s.jsx)(x.A, { children: (0, s.jsx)(v.w, { className: f().footer }) }),
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
                    m = (0, a.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
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
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        f = b({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: p,
                        ref: v,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        57208: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => D });
            var s = i(88800),
                r = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(17392),
                d = i(18593),
                u = i(54667),
                m = i(29504),
                p = i(32596),
                _ = i(69630),
                h = i(76843),
                v = i(10829),
                x = i(12816),
                g = i(59844),
                b = i(84384),
                f = i(46422),
                A = i(44230),
                C = i(37670),
                T = i(6668),
                E = i(72288),
                N = i(98644),
                y = i(54320),
                k = i(86790),
                S = i(60266),
                I = i(93317),
                O = i(93015),
                j = i(79418),
                L = i(71104),
                w = i(45654),
                R = i(43032),
                P = i.n(R);
            let D = (0, a.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, E.g)(),
                    { contentScrollRef: i, setContentScrollRef: a } = (0, A.g)(),
                    R = (0, f.W)(),
                    { from: D } = (0, b.f)({ pageId: x._Q.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: M } = (0, l.A)(),
                    B = (0, T.w)();
                ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, C.J)(e.isResolved));
                let z = (0, n.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: L.c });
                    },
                    [e],
                );
                (0, y.X)(e.pagesLoader, z);
                let U = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(S.A, { children: (0, s.jsx)(k.w, { className: P().footer }) }) }), []),
                    W = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: L.c })), e.isRejected)
                    ? (0, s.jsx)(p.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, s.jsx)(w.i, { title: M({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, s.jsx)(g.n, {
                            pageId: x._Q.COLLECTION_KIDS_TRACKS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: M({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, s.jsxs)('div', {
                                    className: P().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, s.jsx)(I.Y, {
                                            variant: I.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: R.canBack,
                                            children: (0, s.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, s.jsx)(j.$, {
                                            className: (0, r.$)(P().scrollContainer, P().important),
                                            listClassName: P().content,
                                            customComponents: U,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, s.jsx)(O.D, { isActive: !0, className: P().shimmerItem, variant: N.X.PLAYLIST });
                                                let r = B(i.entityId, {
                                                    contextData: { type: d.K.Various, meta: { id: i.entityId }, from: D },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === u.S.MUSIC
                                                    ? (0, s.jsx)(v.K, { track: i, playContextParams: r }, t)
                                                    : (0, s.jsx)(h.K, { track: i, playContextParams: r, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: W,
                                            totalCount: W,
                                            onGetDataByPage: z,
                                            pageSize: L.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: a,
                                            context: { listAriaLabel: M({ id: 'entity-names.tracks' }) },
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
            let m = (0, r.PA)(() =>
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
            var p = i(4370),
                _ = i(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (i && (0, a.redirect)(p.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        59844: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(88800),
                r = i(53548),
                a = i(90334);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, i, n, l, o]);
                return (0, s.jsx)(a.r.Provider, { value: d, children: c });
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => s, JU: () => r, DQ: () => h, Ve: () => v });
            var s,
                r,
                a = i(43297),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
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
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
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
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(s || (s = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
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
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
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
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(r || (r = {}));
            let p = new Map([
                    [s.EXPLICIT_ICON, r.E],
                    [s.AGE_18_ICON, r.AGE_18],
                    [s.AGE_16_ICON, r.AGE_16],
                    [s.AGE_12_ICON, r.AGE_12],
                    [s.EXCLAMATION_ICON, r.EXCLAMATION],
                ]),
                _ = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let i = p.get(t.type);
                    return void 0 !== i ? i : null;
                },
                v = (e, t) => u(e, t).length > 0;
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
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
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
                m = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = i(55482),
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
                        [m, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, a),
                            [a, r, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: b,
                            debounceDurationInMs: f,
                            initialItemCount: A,
                            minInitialItemCount: C = 20,
                            handleRef: T,
                            alwaysShowScrollbar: E = !1,
                            testId: N,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...S
                        } = e,
                        [I, O] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return y
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
                        }, [i, b, y]),
                        w = A ? Math.min(A, C) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: I || E, [d().root_notScrolling]: !I && !E }, t),
                        'data-test-id': N,
                        children: [
                            y && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: T,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: k,
                                ...S,
                            }),
                            y && (null == i ? void 0 : i.Footer) && i.Footer(),
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
                m = i(94398),
                p = i(17332),
                _ = i.n(p);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: h, size: v = 'xxxs', ...x } = e,
                    { formatMessage: g } = (0, l.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [f, A] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(A);
                }, [i, a]);
                let {
                    iconVariant: C,
                    descriptionText: T,
                    isTooltipEnabled: E,
                    ariaLabel: N,
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
                })({ variant: h, descriptionTexts: f, isMobile: b }, g);
                return (0, s.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children: (0, s.jsx)(c.I, {
                            className: (0, r.$)(_().explicitMark, t),
                            'aria-label': N,
                            variant: C,
                            size: v,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
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
                m = i(53548),
                p = i(79390),
                _ = i(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, r.A)(),
                    { notify: x } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, n] = (0, m.useState)(!1),
                            { formatMessage: h } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let v = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let x = t.modal.isOpened;
                            v === p.f.OK
                                ? e((0, s.jsx)(_.T, { withLink: o, album: m }), { containerId: x ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: x ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void x((0, s.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
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
                7435, 8752, 4596, 8380, 5108, 127, 1191, 1931, 7617, 3637, 8767, 529, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732,
                1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 7053, 763, 2670, 7358,
            ],
            () => e((e.s = 29396)),
        ),
            (_N_E = e.O()));
    },
]);
