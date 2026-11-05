(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2655],
    {
        108: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var s = r(2058),
                i = r(61691);
            let a = (e, t) => {
                let { formatMessage: r } = (0, s.A)();
                if (e)
                    switch (t) {
                        case i._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case i._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case i._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case i._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
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
        4795: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            var s = r(72288),
                i = r(97956);
            let a = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = n.getExperiment(i.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var s = r(61691),
                i = r(15077);
            let a = (e) => {
                switch (e) {
                    case s._.PODCAST:
                        return i.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return i.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return i.c.FAIRY_TALE;
                    default:
                        return i.c.ALBUM;
                }
            };
        },
        6668: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var s = r(53548),
                i = r(29993);
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
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var s = r(88800),
                i = r(88969),
                a = r(58390),
                n = r(17392),
                l = r(29993),
                o = r(96817),
                c = r(29504),
                d = r(99890),
                u = r(4086),
                _ = r(41928);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    f = (0, a.useRouter)(),
                    A = (0, _.N)().get(u.QG),
                    b = (0, l.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(A.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: b,
                        className: v,
                        isBlock: x,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(i.A, { id: 'authorization.enter-button' }) }),
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
        9492: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => m });
            var s = r(88800),
                i = r(65724),
                a = r(53548),
                n = r(2058),
                l = r(88969),
                o = r(96817),
                c = r(52300),
                d = r(29504),
                u = r(59304),
                _ = r(4044),
                p = r.n(_);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    _ = (0, a.useRef)(null),
                    { formatMessage: m } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
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
                                    ref: _,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, s.jsx)(u.$, { className: (0, i.$)(p().root, p().important), message: h, closeToast: r });
            };
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => H });
            var s = r(88800),
                i = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(79070),
                o = r(17610),
                c = r(24548),
                d = r(29993),
                u = r(72288),
                _ = r(35994);
            let p = (e, t) => {
                let { withLink: r, separator: s } = t,
                    i = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: i };
            };
            var m = r(21010),
                h = r.n(m),
                x = r(17392),
                g = r(29504),
                v = r(91292),
                f = r(2058),
                A = r(87999),
                b = r(80643),
                E = r(78940),
                S = r(55693),
                T = r(58217);
            let N = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: i, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: j,
                            handleNavigate: k,
                        } = ((e) => {
                            var t, r;
                            let { item: s, allArtistsTitle: i, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, f.A)(),
                                l = ((e, t) => {
                                    let { item: r, allArtistsTitle: s, withCustomTooltip: i } = e,
                                        a = s || r.name;
                                    return {
                                        ...r,
                                        title: i ? void 0 : a,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !s && i,
                                    };
                                })({ item: s, allArtistsTitle: i, withCustomTooltip: a }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, E.Z)(null != (r = null == (t = l.link) ? void 0 : t.href) ? r : l.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, S.z)(),
                                m = (0, b.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), _(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: i, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), i.modal.isOpened && i.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (m({ to: A.AppScreen.ArtistScreen }), null == p || p(), x(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return p
                        ? (0, s.jsx)(v.N, {
                              ...p,
                              'aria-label': h,
                              className: r,
                              onClick: k,
                              title: m,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: i, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, s.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: i,
                                  title: m,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: r, captionClassName: i, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(N, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: i,
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
                                                linkClassName: r,
                                                captionClassName: i,
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
            var k = r(88969),
                C = r(65453);
            let O = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, i.$)(h().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = r(61013),
                R = r(87819),
                w = r(40634),
                y = r(48468),
                L = r.n(y);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: i } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: i, children: t }),
                            (0, s.jsx)(o.ZI, { className: L().tooltipContent, children: r.map((e) => (0, s.jsx)(w.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                U = (0, n.forwardRef)((e, t) => (0, s.jsx)(P, { forwardRef: t, ...e }));
            var D = r(19934),
                z = r(70396),
                M = r.n(z);
            let W = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, f.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, i.$)(M().root, M().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, s.jsx)(w.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: i } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = i.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, l.L)(() =>
                            (0, I.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                _(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, _],
                        ),
                        (0, n.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(W, { artists: t, label: r }) : (0, s.jsx)(U, { artists: t, label: r })) : r;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...f
                        } = e,
                        A = ((e) => {
                            var t, r, s;
                            let { separator: i, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                x = null == (s = e.withCustomTooltip) || s,
                                g = (0, n.useRef)(null),
                                [v, f] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: A },
                                } = (0, u.g)(),
                                b = ((!A || 1 === m.length) && _) || !_,
                                E = ((e, t) => {
                                    var r, s, i;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        l = null != (i = null == t ? void 0 : t.separator) ? i : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: s } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: s, separator: i, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: s, separator: a ? void 0 : i }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = i ? e.separator : '';
                                                        return p(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: i, visibleArtistsCount: v ? void 0 : a, withComposer: o, withLink: !!b && l, artistIdWithoutLink: c }),
                                S = h ? E.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: E.groups,
                                hiddenArtistsCount: E.hiddenArtistsCount,
                                allArtistsTitle: S,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: g,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!S && x && !_ && !A,
                                title: !S || x || _ ? void 0 : S,
                            };
                        })(f),
                        b = (0, l.L)(() =>
                            A.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(O, { spoilerClassName: a, spoilerArtistsCount: A.hiddenArtistsCount, handleOnSpoilerClick: A.handleOnSpoilerClick }),
                        ),
                        E = (0, s.jsx)(o.m_, {
                            referenceRef: A.labelRef,
                            enabled: A.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: A.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, i.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: A.title,
                                children: [
                                    A.groups.map((e) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: x,
                                                allArtistsTitle: A.allArtistsTitle,
                                                withCustomTooltip: A.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return A.withContextMenu ? (0, s.jsx)(F, { labelRef: A.labelRef, artists: A.artists, label: E }) : E;
                });
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16348: (e) => {
            e.exports = {
                root: 'CollectionShelfPageEmpty_root__KrMco',
                iconBackground: 'CollectionShelfPageEmpty_iconBackground__limUg',
                title: 'CollectionShelfPageEmpty_title__cwF4m',
                button: 'CollectionShelfPageEmpty_button___uzMX',
            };
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
        17017: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { Z: () => s }),
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
        18143: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { T: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var s = r(88800),
                i = r(53548),
                a = r(17392),
                n = r(29504),
                l = r(15526),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, i.useState)(null);
                if (
                    ((0, i.useEffect)(() => {
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
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19840: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => i }), r(46606));
            var s = r(91136);
            class i extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, i.prototype));
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
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => y });
            var s = r(88800),
                i = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(2058),
                o = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                u = r(29504),
                _ = r(87999),
                p = r(47149),
                m = r(84423),
                h = r(89846),
                x = r(64543),
                g = r(63582);
            let v = (0, g.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: s } = (0, x.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !r || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: s.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, r, null == s ? void 0 : s.pageId]),
                    };
                }),
                f = (0, g.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: i } = (0, x.j)();
                    (0, n.useEffect)(() => {
                        if (!r || !s || !(null == i ? void 0 : i.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: i.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(r, t);
                    }, [r, e, s, null == i ? void 0 : i.pageId]);
                });
            var A = r(44230),
                b = r(4370),
                E = r(72288),
                S = r(97956),
                T = r(56248),
                N = r(90688),
                j = r(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var C = r(96856),
                O = r.n(C);
            let I = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: a } = e,
                    { slam: n } = (0, E.g)(),
                    { contentRef: l } = (0, A.g)(),
                    d = (0, j.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, i.$)(O().root, t),
                    children: [
                        r &&
                            (0, s.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(O().navigation, { [O().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, i.$)(O().content, { [O().content_shrink]: !r }),
                            children: [
                                (0, s.jsx)(N._V, { className: O().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: O().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: O().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: O().text,
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
                                        className: O().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: O().buttonText,
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
            var R = r(9184),
                w = r.n(R);
            let y = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: a } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = (0, n.useContext)(E.P),
                    m = null == p ? void 0 : p.experiments.checkExperiment(S.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(h);
                let { sendRefreshEvent: x } = v(),
                    g = (0, n.useCallback)(() => {
                        (x(), (window.location.href = b.Z.main.href));
                    }, [x]),
                    { contentRef: N } = (0, A.g)();
                return m
                    ? (0, s.jsx)(I, { className: t, withBackwardControl: r, onBack: a })
                    : (0, s.jsxs)('div', {
                          className: (0, i.$)(w().root, t),
                          children: [
                              r &&
                                  (0, s.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(w().navigation, { [w().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, i.$)(w().content, { [w().content_shrink]: !r }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: w().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, i.$)(w().title, w().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, i.$)(w().text, w().important),
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
        35994: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => i });
            var s = r(67174);
            let i = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var s = r(53548);
            r(30282);
            var i = r(58390);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [r, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        40068: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => p });
            var s = r(88800),
                i = r(84961),
                a = r(88969),
                n = r(96817),
                l = r(52300),
                o = r(29504),
                c = r(4370),
                d = r(78940),
                u = r(16348),
                _ = r.n(u);
            let p = (0, i.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, s.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, s.jsx)('div', { className: _().iconBackground, children: (0, s.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, s.jsx)(o.DZ, { className: _().title, variant: 'h3', size: 'xs', children: t }),
                        (0, s.jsx)(n.$, {
                            onClick: r,
                            className: _().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, s.jsx)(o.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, s.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => f });
            var s = r(88800),
                i = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(87999),
                o = r(80643),
                c = r(17392),
                d = r(29993),
                u = r(90688),
                _ = r(19934),
                p = r(7555),
                m = r(29504),
                h = r(78940),
                x = r(72288),
                g = r(80932),
                v = r.n(g);
            let f = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    A = (0, o.S)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(f, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    E = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), A({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(_.Dr, {
                            className: (0, i.$)(v().root, r),
                            onClick: E,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(p.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
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
        44988: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var s = r(88800),
                i = r(84961),
                a = r(17392),
                n = r(52300),
                l = r(19934),
                o = r(108),
                c = r(72288);
            let d = (0, i.PA)((e) => {
                let { isLiked: t, onClick: r, className: i, iconClassName: d, albumType: u, disabled: _ } = e,
                    { user: p } = (0, c.g)(),
                    m = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, s.jsx)(l.Dr, {
                    className: i,
                    onClick: r,
                    icon: (0, s.jsx)(n.I, { className: d, variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        46606: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { X: () => s }),
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
        52150: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            let s = (0, r(53548).createContext)({ pageAlbumId: void 0 });
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var s = r(88800),
                i = r(53548),
                a = r(29993),
                n = r(9492),
                l = r(29595),
                o = r(74965),
                c = r(74773);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, a.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, _, r, e.rejectedPagesCount]);
            };
        },
        56446: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var s = r(88800),
                i = r(53548),
                a = r(2058),
                n = r(17392),
                l = r(96817),
                o = r(52300),
                c = r(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: i,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: p,
                            iconClassName: m,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, a.A)(),
                        A = f({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: i,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: p,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: m }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, i.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var s = r(88800),
                i = r(84961),
                a = r(58390),
                n = r(65724),
                l = r(88969),
                o = r(29504),
                c = r(7628),
                d = r(42674),
                u = r.n(d);
            let _ = (0, i.PA)(() =>
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
            var p = r(4370),
                m = r(72288);
            let h = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, m.g)();
                return i.isAuthorized ? t : (r && (0, a.redirect)(p.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71104: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => s });
            let s = 20;
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x });
            var s = r(88800),
                i = r(65724),
                a = r(61013),
                n = r(53548);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: i, ...a } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        l = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = r(55482),
                m = r(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && h(e), t && r)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < s; e++) r(e);
                                    }
                                }, a),
                            [a, i, t, r, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, s.jsx)(m.sN, { ref: d, rangeChanged: x, totalCount: l, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: m,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: f,
                            debounceDurationInMs: A,
                            initialItemCount: b,
                            minInitialItemCount: E = 20,
                            handleRef: S,
                            alwaysShowScrollbar: T = !1,
                            testId: N,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...C
                        } = e,
                        [O, I] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        w = (0, n.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, f, j]),
                        y = b ? Math.min(b, E) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: O || T, [d().root_notScrolling]: !O && !T }, t),
                        'data-test-id': N,
                        children: [
                            j && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: w,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: p,
                                scrollerRef: S,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: A,
                                initialItemCount: y,
                                shouldTriggerRangeChangedOn: k,
                                ...C,
                            }),
                            j && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        87762: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => a });
            var s = r(53548),
                i = r(52150);
            function a() {
                return (0, s.useContext)(i.H);
            }
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => s.X, m5: () => i.m });
            var s = r(46606),
                i = r(91136),
                a = r(19840);
            r(17017);
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var s = r(88800),
                i = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(2058),
                o = r(17392),
                c = r(52300),
                d = r(62837),
                u = r(72288),
                _ = r(94398),
                p = r(17332),
                m = r.n(p);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: p, variant: h, iconVariant: iconOverride, size: x = 'xxxs', ...g } = e,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [A, b] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(b);
                }, [r, a]);
                let {
                    iconVariant: E,
                    descriptionText: S,
                    isTooltipEnabled: T,
                    ariaLabel: N,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: s, isMobile: i } = e,
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
                        })(r),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !i,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: A, isMobile: f }, v);
                return (0, s.jsx)(_.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, s.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, i.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': N,
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
                            className: (0, i.$)(m().explicitMark, t),
                            'aria-label': N,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : E,
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
        91136: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = i), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class i extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        92966: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var s = r(88800),
                i = r(2058),
                a = r(29993),
                n = r(87762),
                l = r(29595),
                o = r(74965),
                c = r(72288),
                d = r(66943),
                u = r(96706),
                _ = r(53548),
                p = r(79390),
                m = r(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: x } = (0, i.A)(),
                    { notify: g } = (0, o.l)(),
                    v = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [r, n] = (0, _.useState)(!1),
                            { formatMessage: h } = (0, i.A)();
                        return (0, a.c)(async (i) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = i;
                            if (r) return;
                            let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let x = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let g = t.modal.isOpened;
                            x === p.f.OK
                                ? e((0, s.jsx)(m.T, { withLink: o, album: _ }), { containerId: g ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: g ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: f } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? v({ album: e })
                              : void g((0, s.jsx)(d.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var s = r(88800),
                i = r(17392),
                a = r(17610),
                n = r(29504),
                l = r(37438),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, s.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': i.S7.TOOLTIP_WITH_TITLE,
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
        96295: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var s = r(88800),
                i = r(84961),
                a = r(42729),
                n = r(5048);
            let l = (0, i.PA)((e) => {
                let { album: t, closeToast: r, withLink: i } = e,
                    l = (0, n.b)(t.type);
                return (0, s.jsx)(a.O, {
                    closeToast: r,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: i,
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
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var s = r(89916),
                i = r(67990);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
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
]);
