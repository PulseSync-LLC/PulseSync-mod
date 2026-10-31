(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2655, 2837],
    {
        108: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var i = r(2058),
                s = r(61691);
            let a = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
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
            var i = r(72288),
                s = r(97956);
            let a = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var i = r(61691),
                s = r(15077);
            let a = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return s.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
        },
        6668: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var i = r(53548),
                s = r(29993);
            let a = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => _ });
            var i = r(88800),
                s = r(88969),
                a = r(58390),
                n = r(17392),
                l = r(29993),
                o = r(96817),
                c = r(29504),
                d = r(99890),
                u = r(4086),
                p = r(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: r = 'default', color: _ = 'primary', withRipple: m = !0, buttonText: h, isBlock: v, key: g, className: f } = e,
                    x = (0, a.useRouter)(),
                    b = (0, p.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(b.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: f,
                        isBlock: v,
                        color: _,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(s.A, { id: 'authorization.enter-button' }) }),
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
            var i = r(88800),
                s = r(65724),
                a = r(53548),
                n = r(2058),
                l = r(88969),
                o = r(96817),
                c = r(52300),
                d = r(29504),
                u = r(59304),
                p = r(4044),
                _ = r.n(p);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    p = (0, a.useRef)(null),
                    { formatMessage: m } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(o.$, {
                                    ref: p,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, i.jsx)(u.$, { className: (0, s.$)(_().root, _().important), message: h, closeToast: r });
            };
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => W });
            var i = r(88800),
                s = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(79070),
                o = r(17610),
                c = r(24548),
                d = r(29993),
                u = r(72288),
                p = r(35994);
            let _ = (e, t) => {
                let { withLink: r, separator: i } = t,
                    s = r && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: s };
            };
            var m = r(21010),
                h = r.n(m),
                v = r(17392),
                g = r(29504),
                f = r(91292),
                x = r(2058),
                b = r(92716),
                A = r(96527),
                E = r(78940),
                N = r(55693),
                T = r(58217);
            let O = (0, a.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: s, captionSize: a = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: p,
                            link: _,
                            title: m,
                            ariaLabel: h,
                            tooltipText: O,
                            isTooltipEnabled: I,
                            handleNavigate: y,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: s, withCustomTooltip: a } = e,
                                { formatMessage: n } = (0, x.A)(),
                                l = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: s } = e,
                                        a = i || r.name;
                                    return {
                                        ...r,
                                        title: s ? void 0 : a,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !i && s,
                                    };
                                })({ item: i, allArtistsTitle: s, withCustomTooltip: a }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, E.Z)(null != (r = null == (t = l.link) ? void 0 : t.href) ? r : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, N.z)(),
                                m = (0, A.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: n } = i;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (m({ to: b.AppScreen.ArtistScreen }), null == _ || _(), v(e));
                                });
                            return { ...l, handleNavigate: g };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: l });
                    return _
                        ? (0, i.jsx)(f.N, {
                              ..._,
                              'aria-label': h,
                              className: r,
                              onClick: y,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: O,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(g.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: s, children: p }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: O,
                              hoverSettings: c,
                              children: (0, i.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: s,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: r, captionClassName: s, captionSize: a, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(O, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(O, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: s,
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
            var y = r(88969),
                S = r(65453);
            let C = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = r(61013),
                L = r(87819),
                k = r(40634),
                w = r(48468),
                R = r.n(w);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: s } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: s, children: t }),
                            (0, i.jsx)(o.ZI, { className: R().tooltipContent, children: r.map((e) => (0, i.jsx)(k.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var M = r(19934),
                U = r(70396),
                B = r.n(U);
            let z = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, x.A)();
                    return (0, i.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, s.$)(B().root, B().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(k.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, j.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                p(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, p],
                        ),
                        (0, n.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(z, { artists: t, label: r }) : (0, i.jsx)(D, { artists: t, label: r })) : r;
                }),
                W = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: a,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: v,
                            variant: g = 'breakAll',
                            spoilerComponent: f,
                            ...x
                        } = e,
                        b = ((e) => {
                            var t, r, i;
                            let { separator: s, visibleArtistsCount: a, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                v = null == (i = e.withCustomTooltip) || i,
                                g = (0, n.useRef)(null),
                                [f, x] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: b },
                                } = (0, u.g)(),
                                A = ((!b || 1 === m.length) && p) || !p,
                                E = ((e, t) => {
                                    var r, i, s;
                                    let a = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        n = null == (i = null == t ? void 0 : t.withLink) || i,
                                        l = null != (s = null == t ? void 0 : t.separator) ? s : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: s, isFirst: a } = t;
                                                return {
                                                    primary: _(e, { withLink: i, separator: a ? void 0 : s }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = s ? e.separator : '';
                                                        return _(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: s, visibleArtistsCount: f ? void 0 : a, withComposer: o, withLink: !!A && l, artistIdWithoutLink: c }),
                                N = h ? E.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: E.groups,
                                hiddenArtistsCount: E.hiddenArtistsCount,
                                allArtistsTitle: N,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: g,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!N && v && !p && !b,
                                title: !N || v || p ? void 0 : N,
                            };
                        })(x),
                        A = (0, l.L)(() =>
                            b.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(f)
                                  ? f
                                  : (0, i.jsx)(C, { spoilerClassName: a, spoilerArtistsCount: b.hiddenArtistsCount, handleOnSpoilerClick: b.handleOnSpoilerClick }),
                        ),
                        E = (0, i.jsx)(o.m_, {
                            referenceRef: b.labelRef,
                            enabled: b.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: b.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: b.title,
                                children: [
                                    b.groups.map((e) =>
                                        (0, i.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: b.allArtistsTitle,
                                                withCustomTooltip: b.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return b.withContextMenu ? (0, i.jsx)(F, { labelRef: b.labelRef, artists: b.artists, label: E }) : E;
                });
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
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
            var i;
            (r.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18278: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(88800),
                s = r(53548),
                a = r(17392),
                n = r(29504),
                l = r(15526),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
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
            (r.d(t, { G: () => s }), r(46606));
            var i = r(91136);
            class s extends i.m {
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
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => L });
            var i = r(88800),
                s = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(2058),
                o = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                u = r(29504),
                p = r(78793),
                _ = r(92716),
                m = r(99984),
                h = r(90780),
                v = r(65523),
                g = r(14518),
                f = r(44230),
                x = r(4370),
                b = r(72288),
                A = r(97956),
                E = r(56248),
                N = r(90688),
                T = r(78940);
            let O = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = r(96856),
                y = r.n(I);
            let S = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: a } = e,
                    { slam: n } = (0, b.g)(),
                    { contentRef: l } = (0, f.g)(),
                    d = (0, T.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(y().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(y().navigation, { [y().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(y().content, { [y().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(N._V, { className: y().image, src: O.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: y().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: y().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: y().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: y().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: y().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var C = r(9184),
                j = r.n(C);
            let L = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: a } = e,
                    { formatMessage: N } = (0, l.A)(),
                    T = (0, n.useContext)(b.P),
                    O = null == T ? void 0 : T.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    I = N(O ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, g.$)(),
                        s = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let a = (0, p.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, m.z5)(t.evgenInstance, a);
                    }, [t, e, r, i, s]);
                })(I);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, g.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let s = (0, p.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, m.bv)(e.evgenInstance, s);
                            }, [e, t, r, i]),
                        };
                    })(),
                    C = (0, n.useCallback)(() => {
                        (y(), (window.location.href = x.Z.main.href));
                    }, [y]),
                    { contentRef: L } = (0, f.g)();
                return O
                    ? (0, i.jsx)(S, { className: t, withBackwardControl: r, onBack: a })
                    : (0, i.jsxs)('div', {
                          className: (0, s.$)(j().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(j().navigation, { [j().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, s.$)(j().content, { [j().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, s.$)(j().title, j().important), variant: 'h3', size: 'xs', children: I }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, s.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: C,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
            r.d(t, { R: () => s });
            var i = r(67174);
            let s = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(53548);
            r(30282);
            var s = r(58390);
            let a = (e) => {
                let t = (0, s.usePathname)(),
                    [r, a] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        40068: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => _ });
            var i = r(88800),
                s = r(84961),
                a = r(88969),
                n = r(96817),
                l = r(52300),
                o = r(29504),
                c = r(4370),
                d = r(78940),
                u = r(16348),
                p = r.n(u);
            let _ = (0, s.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, i.jsxs)('div', {
                    className: p().root,
                    children: [
                        (0, i.jsx)('div', { className: p().iconBackground, children: (0, i.jsx)(l.I, { variant: 'like', size: 'l' }) }),
                        (0, i.jsx)(o.DZ, { className: p().title, variant: 'h3', size: 'xs', children: t }),
                        (0, i.jsx)(n.$, {
                            onClick: r,
                            className: p().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, i.jsx)(o.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, i.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(88800),
                s = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(92716),
                o = r(17392),
                c = r(29993),
                d = r(90688),
                u = r(19934),
                p = r(7555),
                _ = r(29504),
                m = r(96527),
                h = r(78940),
                v = r(72288),
                g = r(80932),
                f = r.n(g);
            let x = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    g = (0, h.Z)(t.url),
                    b = (0, m.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    E = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: l.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, s.$)(f().root, r),
                            onClick: E,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: f().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: f().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
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
        44988: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var i = r(88800),
                s = r(84961),
                a = r(17392),
                n = r(52300),
                l = r(19934),
                o = r(108),
                c = r(72288);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: r, className: s, iconClassName: d, albumType: u, disabled: p } = e,
                    { user: _ } = (0, c.g)(),
                    m = t ? 'liked' : 'like',
                    h = (0, o.$)(t, u);
                return (0, i.jsx)(l.Dr, {
                    className: s,
                    onClick: r,
                    icon: (0, i.jsx)(n.I, { className: d, variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: p || !_.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: h,
                });
            });
        },
        46606: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(53548).createContext)({ pageAlbumId: void 0 });
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var i = r(88800),
                s = r(53548),
                a = r(29993),
                n = r(9492),
                l = r(29595),
                o = r(74965),
                c = r(74773);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, o.l)(),
                    u = (0, s.useRef)(void 0),
                    p = (0, a.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, i.jsx)(n.L, { reloadBlocks: p }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, p, r, e.rejectedPagesCount]);
            };
        },
        56446: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(88800),
                s = r(53548),
                a = r(2058),
                n = r(17392),
                l = r(96817),
                o = r(52300),
                c = r(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: p,
                            onClick: _,
                            iconClassName: m,
                            className: h,
                            forwardRef: v,
                            style: g,
                            children: f,
                        } = e,
                        { formatMessage: x } = (0, a.A)(),
                        b = x({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: _,
                        ref: v,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: m }),
                        disabled: p,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var i = r(88800),
                s = r(84961),
                a = r(58390),
                n = r(65724),
                l = r(88969),
                o = r(29504),
                c = r(7628),
                d = r(42674),
                u = r.n(d);
            let p = (0, s.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = r(4370),
                m = r(72288);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: s } = (0, m.g)();
                return s.isAuthorized ? t : (r && (0, a.redirect)(_.Z.main.href), (0, i.jsx)(p, {}));
            });
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => p, Yw: () => i, JU: () => s, DQ: () => h, Ve: () => v });
            var i,
                s,
                a = r(43297),
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
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
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
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var l = r(14965);
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
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class p {
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
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of r)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
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
            })(s || (s = {}));
            let _ = new Map([
                    [i.EXPLICIT_ICON, s.E],
                    [i.AGE_18_ICON, s.AGE_18],
                    [i.AGE_16_ICON, s.AGE_16],
                    [i.AGE_12_ICON, s.AGE_12],
                    [i.EXCLAMATION_ICON, s.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, s.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                m = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, m);
                    if (null === t) return null;
                    let r = _.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var i = r(4086),
                s = r(41928),
                a = r(44084);
            let n = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof a.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, r), r);
                    })((0, s.N)().get(i.Zf));
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71104: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => i });
            let i = 20;
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var i = r(88800),
                s = r(65724),
                a = r(61013),
                n = r(53548);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: r, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                p = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(55482),
                m = r(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == s || s(e), o.length > 0 && h(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) r(e);
                                    }
                                }, a),
                            [a, s, t, r, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && p && v(p);
                    }, o);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(m.sN, { ref: d, rangeChanged: v, totalCount: l, endReached: g, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: m,
                            overscan: v = 700,
                            pageSize: g = 20,
                            totalCount: f,
                            totalRequests: x,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: E = 20,
                            handleRef: N,
                            alwaysShowScrollbar: T = !1,
                            testId: O,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: y,
                            ...S
                        } = e,
                        [C, j] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        k = (0, n.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, I]),
                        w = A ? Math.min(A, E) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: C || T, [d().root_notScrolling]: !C && !T }, t),
                        'data-test-id': O,
                        children: [
                            I && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(h, {
                                overscan: v,
                                components: k,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: _,
                                scrollerRef: N,
                                totalCount: f,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: y,
                                ...S,
                            }),
                            I && (null == r ? void 0 : r.Footer) && r.Footer(),
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
            var i = r(53548),
                s = r(52150);
            function a() {
                return (0, i.useContext)(s.H);
            }
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => i.X, m5: () => s.m });
            var i = r(46606),
                s = r(91136),
                a = r(19840);
            r(17017);
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var i = r(88800),
                s = r(65724),
                a = r(84961),
                n = r(53548),
                l = r(2058),
                o = r(17392),
                c = r(52300),
                d = r(62837),
                u = r(72288),
                p = r(94398),
                _ = r(17332),
                m = r.n(_);
            let h = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: _, variant: h, iconVariant: iconOverride, size: v = 'xxxs', ...g } = e,
                    { formatMessage: f } = (0, l.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, u.g)(),
                    [b, A] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    r && r().then(A);
                }, [r, a]);
                let {
                    iconVariant: E,
                    descriptionText: N,
                    isTooltipEnabled: T,
                    ariaLabel: O,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: s } = e,
                        a = (null == i ? void 0 : i.join('\n')) || '';
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
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !s,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: b, isMobile: x }, f);
                return (0, i.jsx)(p.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, s.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': O,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...g,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, s.$)(m().explicitMark, t),
                            'aria-label': O,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : E,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
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
            r.d(t, { m: () => s });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class s extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        92966: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(88800),
                s = r(2058),
                a = r(29993),
                n = r(87762),
                l = r(29595),
                o = r(74965),
                c = r(72288),
                d = r(66943),
                u = r(96706),
                p = r(53548),
                _ = r(79390),
                m = r(96295);
            let h = (e) => {
                let {
                        user: t,
                        paywall: r,
                        albumCPA: { isPlusCPAEnabled: h },
                    } = (0, c.g)(),
                    { formatMessage: v } = (0, s.A)(),
                    { notify: g } = (0, o.l)(),
                    f = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [r, n] = (0, p.useState)(!1),
                            { formatMessage: h } = (0, s.A)();
                        return (0, a.c)(async (s) => {
                            let { album: a, withLink: o = !0, withNotification: c = !0 } = s;
                            if (r) return;
                            let p = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            n(!0);
                            let v = await a.toggleLike();
                            if ((n(!1), !c)) return;
                            let g = t.modal.isOpened;
                            v === _.f.OK
                                ? e((0, i.jsx)(m.T, { withLink: o, album: p }), { containerId: g ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, i.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: g ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: x } = (0, n.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return h({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void r.openModal()
                            : t.isAuthorized
                              ? f({ album: e })
                              : void g((0, i.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(88800),
                s = r(17392),
                a = r(17610),
                n = r(29504),
                l = r(37438),
                o = r.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: o().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
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
            var i = r(88800),
                s = r(84961),
                a = r(42729),
                n = r(5048);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: r, withLink: s } = e,
                    l = (0, n.b)(t.type);
                return (0, i.jsx)(a.O, {
                    closeToast: r,
                    entityVariant: l,
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
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => a, UC: () => n, dM: () => l, uV: () => o });
            var i = r(89916),
                s = r(67990);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof i.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
